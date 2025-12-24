"""
Computer Awareness Questions API Routes
Provides endpoints for accessing 20,000+ Computer Awareness MCQs
"""

from fastapi import APIRouter, Query, HTTPException
from typing import Optional, List
from app.database import db
import random

router = APIRouter(prefix="/computer-awareness", tags=["Computer Awareness"])

# Get the collection
ca_collection = db["computer_awareness_questions"]
categories_collection = db["question_categories"]


@router.get("/")
def get_overview():
    """Get overview of Computer Awareness question bank"""
    total = ca_collection.count_documents({})
    
    # Count by difficulty
    difficulty_counts = {}
    for diff in ["easy", "medium", "hard"]:
        difficulty_counts[diff] = ca_collection.count_documents({"difficulty": diff})
    
    # Count by category
    pipeline = [
        {"$group": {"_id": "$category", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}}
    ]
    categories = {doc["_id"]: doc["count"] for doc in ca_collection.aggregate(pipeline)}
    
    # Count by topic (top 20)
    pipeline = [
        {"$group": {"_id": "$topic", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
        {"$limit": 20}
    ]
    topics = {doc["_id"]: doc["count"] for doc in ca_collection.aggregate(pipeline)}
    
    return {
        "subject": "Computer Awareness",
        "total_questions": total,
        "by_difficulty": difficulty_counts,
        "by_category": categories,
        "top_topics": topics,
        "exam_tags": ["SSC", "Banking", "Railway", "State PSC", "UPSC"]
    }


@router.get("/questions")
def get_questions(
    category: Optional[str] = Query(None, description="Filter by category"),
    topic: Optional[str] = Query(None, description="Filter by topic"),
    difficulty: Optional[str] = Query(None, description="Filter by difficulty: easy, medium, hard"),
    limit: int = Query(20, ge=1, le=100, description="Number of questions (1-100)"),
    skip: int = Query(0, ge=0, description="Number of questions to skip"),
    random_order: bool = Query(False, description="Randomize question order"),
    hide_answers: bool = Query(True, description="Hide correct answers and explanations")
):
    """Get Computer Awareness questions with filters"""
    
    # Build query
    query = {"is_active": True}
    
    if category:
        query["category"] = {"$regex": category, "$options": "i"}
    if topic:
        query["topic"] = {"$regex": topic, "$options": "i"}
    if difficulty:
        query["difficulty"] = difficulty.lower()
    
    # Get questions
    if random_order:
        pipeline = [
            {"$match": query},
            {"$sample": {"size": limit}}
        ]
        questions = list(ca_collection.aggregate(pipeline))
    else:
        questions = list(ca_collection.find(query).skip(skip).limit(limit))
    
    # Process questions
    result = []
    for i, q in enumerate(questions):
        item = {
            "id": str(q["_id"]),
            "question_no": skip + i + 1,
            "question": q["question"],
            "options": q["options"],
            "difficulty": q.get("difficulty", "medium"),
            "topic": q.get("topic", "General"),
            "category": q.get("category", "Computer Awareness")
        }
        
        if not hide_answers:
            item["correct"] = q["correct"]
            item["explanation"] = q.get("explanation", "")
        
        result.append(item)
    
    total_matching = ca_collection.count_documents(query)
    
    return {
        "questions": result,
        "count": len(result),
        "total_matching": total_matching,
        "filters_applied": {
            "category": category,
            "topic": topic,
            "difficulty": difficulty
        }
    }


@router.get("/quiz")
def generate_quiz(
    num_questions: int = Query(25, ge=5, le=100, description="Number of questions"),
    difficulty: Optional[str] = Query(None, description="Difficulty level"),
    categories: Optional[str] = Query(None, description="Comma-separated categories"),
    time_limit: int = Query(30, description="Time limit in minutes")
):
    """Generate a quiz with random questions"""
    
    query = {"is_active": True}
    
    if difficulty:
        query["difficulty"] = difficulty.lower()
    
    if categories:
        cat_list = [c.strip() for c in categories.split(",")]
        query["category"] = {"$in": cat_list}
    
    # Get random questions
    pipeline = [
        {"$match": query},
        {"$sample": {"size": num_questions}}
    ]
    questions = list(ca_collection.aggregate(pipeline))
    
    # Format quiz questions (hide answers)
    quiz_questions = []
    for i, q in enumerate(questions):
        quiz_questions.append({
            "id": str(q["_id"]),
            "question_no": i + 1,
            "question": q["question"],
            "options": q["options"],
            "difficulty": q.get("difficulty", "medium"),
            "topic": q.get("topic", "General"),
            "category": q.get("category", "Computer Awareness")
        })
    
    return {
        "quiz_id": f"ca_quiz_{random.randint(10000, 99999)}",
        "title": "Computer Awareness Quiz",
        "total_questions": len(quiz_questions),
        "time_limit_minutes": time_limit,
        "questions": quiz_questions
    }


@router.post("/quiz/submit")
def submit_quiz(submission: dict):
    """Submit quiz answers and get results"""
    
    answers = submission.get("answers", {})
    question_ids = submission.get("question_ids", [])
    
    if not question_ids:
        raise HTTPException(status_code=400, detail="No questions provided")
    
    # Get questions by IDs
    from bson import ObjectId
    questions = list(ca_collection.find({"_id": {"$in": question_ids}}))
    
    if not questions:
        # Try with string IDs
        questions = list(ca_collection.find({"_id": {"$in": [str(qid) for qid in question_ids]}}))
    
    correct = 0
    wrong = 0
    unanswered = 0
    results = []
    
    for i, q in enumerate(questions):
        q_id = str(q["_id"])
        user_answer = answers.get(q_id, answers.get(str(i), -1))
        
        if user_answer == -1 or user_answer is None:
            unanswered += 1
            status = "unanswered"
        elif user_answer == q["correct"]:
            correct += 1
            status = "correct"
        else:
            wrong += 1
            status = "wrong"
        
        results.append({
            "question_no": i + 1,
            "question": q["question"],
            "options": q["options"],
            "correct_answer": q["correct"],
            "user_answer": user_answer,
            "status": status,
            "explanation": q.get("explanation", ""),
            "topic": q.get("topic", "General"),
            "category": q.get("category", "Computer Awareness")
        })
    
    total = len(questions)
    score = round((correct / total) * 100, 2) if total > 0 else 0
    
    # Performance by category
    category_performance = {}
    for r in results:
        cat = r["category"]
        if cat not in category_performance:
            category_performance[cat] = {"correct": 0, "total": 0}
        category_performance[cat]["total"] += 1
        if r["status"] == "correct":
            category_performance[cat]["correct"] += 1
    
    return {
        "score": score,
        "correct": correct,
        "wrong": wrong,
        "unanswered": unanswered,
        "total": total,
        "results": results,
        "category_performance": category_performance,
        "pass_status": "PASS" if score >= 40 else "FAIL"
    }


@router.get("/categories")
def get_categories():
    """Get all question categories with counts"""
    
    pipeline = [
        {"$group": {"_id": "$category", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}}
    ]
    
    categories = []
    for doc in ca_collection.aggregate(pipeline):
        categories.append({
            "name": doc["_id"],
            "count": doc["count"],
            "slug": doc["_id"].lower().replace(" ", "-").replace("&", "and")
        })
    
    return {"categories": categories, "total": len(categories)}


@router.get("/topics")
def get_topics(category: Optional[str] = None):
    """Get all topics with optional category filter"""
    
    match_stage = {}
    if category:
        match_stage["category"] = {"$regex": category, "$options": "i"}
    
    pipeline = [
        {"$match": match_stage} if match_stage else {"$match": {}},
        {"$group": {"_id": "$topic", "count": {"$sum": 1}, "category": {"$first": "$category"}}},
        {"$sort": {"count": -1}}
    ]
    
    topics = []
    for doc in ca_collection.aggregate(pipeline):
        topics.append({
            "name": doc["_id"],
            "count": doc["count"],
            "category": doc.get("category", "General")
        })
    
    return {"topics": topics, "total": len(topics)}


@router.get("/question/{question_id}")
def get_single_question(question_id: str, show_answer: bool = False):
    """Get a single question by ID"""
    
    question = ca_collection.find_one({"_id": question_id})
    
    if not question:
        raise HTTPException(status_code=404, detail="Question not found")
    
    result = {
        "id": str(question["_id"]),
        "question": question["question"],
        "options": question["options"],
        "difficulty": question.get("difficulty", "medium"),
        "topic": question.get("topic", "General"),
        "category": question.get("category", "Computer Awareness")
    }
    
    if show_answer:
        result["correct"] = question["correct"]
        result["explanation"] = question.get("explanation", "")
    
    return result


@router.get("/stats")
def get_statistics():
    """Get detailed statistics about the question bank"""
    
    total = ca_collection.count_documents({})
    active = ca_collection.count_documents({"is_active": True})
    
    # Difficulty distribution
    difficulty_dist = {}
    for diff in ["easy", "medium", "hard"]:
        count = ca_collection.count_documents({"difficulty": diff})
        difficulty_dist[diff] = {
            "count": count,
            "percentage": round((count / total) * 100, 2) if total > 0 else 0
        }
    
    # Category distribution
    category_pipeline = [
        {"$group": {"_id": "$category", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}}
    ]
    category_dist = []
    for doc in ca_collection.aggregate(category_pipeline):
        category_dist.append({
            "category": doc["_id"],
            "count": doc["count"],
            "percentage": round((doc["count"] / total) * 100, 2) if total > 0 else 0
        })
    
    # Topic count
    topic_pipeline = [
        {"$group": {"_id": "$topic"}},
        {"$count": "total"}
    ]
    topic_result = list(ca_collection.aggregate(topic_pipeline))
    unique_topics = topic_result[0]["total"] if topic_result else 0
    
    return {
        "total_questions": total,
        "active_questions": active,
        "unique_topics": unique_topics,
        "unique_categories": len(category_dist),
        "difficulty_distribution": difficulty_dist,
        "category_distribution": category_dist,
        "exam_coverage": ["SSC CGL", "SSC CHSL", "IBPS PO", "IBPS Clerk", "SBI PO", "RRB NTPC", "State PSC"]
    }


@router.get("/random")
def get_random_questions(count: int = Query(10, ge=1, le=50)):
    """Get random questions for quick practice"""
    
    pipeline = [
        {"$match": {"is_active": True}},
        {"$sample": {"size": count}}
    ]
    
    questions = list(ca_collection.aggregate(pipeline))
    
    result = []
    for i, q in enumerate(questions):
        result.append({
            "id": str(q["_id"]),
            "question_no": i + 1,
            "question": q["question"],
            "options": q["options"],
            "correct": q["correct"],
            "explanation": q.get("explanation", ""),
            "difficulty": q.get("difficulty", "medium"),
            "topic": q.get("topic", "General")
        })
    
    return {"questions": result, "count": len(result)}


@router.get("/search")
def search_questions(
    q: str = Query(..., min_length=3, description="Search query"),
    limit: int = Query(20, ge=1, le=50)
):
    """Search questions by keyword"""
    
    # Text search
    query = {
        "$or": [
            {"question": {"$regex": q, "$options": "i"}},
            {"topic": {"$regex": q, "$options": "i"}},
            {"category": {"$regex": q, "$options": "i"}},
            {"explanation": {"$regex": q, "$options": "i"}}
        ]
    }
    
    questions = list(ca_collection.find(query).limit(limit))
    
    result = []
    for i, que in enumerate(questions):
        result.append({
            "id": str(que["_id"]),
            "question": que["question"],
            "options": que["options"],
            "correct": que["correct"],
            "explanation": que.get("explanation", ""),
            "difficulty": que.get("difficulty", "medium"),
            "topic": que.get("topic", "General"),
            "category": que.get("category", "Computer Awareness")
        })
    
    return {
        "query": q,
        "results": result,
        "count": len(result)
    }
