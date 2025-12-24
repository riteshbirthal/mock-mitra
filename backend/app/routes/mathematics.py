"""
Mathematics Questions API Routes
Provides endpoints for accessing 20,000+ Mathematics MCQs
"""

from fastapi import APIRouter, Query, HTTPException
from typing import Optional
from app.database import db
import random

router = APIRouter(prefix="/mathematics", tags=["Mathematics"])

math_collection = db["mathematics_questions"]


@router.get("/")
def get_overview():
    """Get overview of Mathematics question bank"""
    total = math_collection.count_documents({})
    
    difficulty_counts = {}
    for diff in ["easy", "medium", "hard"]:
        difficulty_counts[diff] = math_collection.count_documents({"difficulty": diff})
    
    pipeline = [
        {"$group": {"_id": "$category", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}}
    ]
    categories = {doc["_id"]: doc["count"] for doc in math_collection.aggregate(pipeline)}
    
    pipeline = [
        {"$group": {"_id": "$topic", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
        {"$limit": 20}
    ]
    topics = {doc["_id"]: doc["count"] for doc in math_collection.aggregate(pipeline)}
    
    return {
        "subject": "Mathematics",
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
    difficulty: Optional[str] = Query(None, description="Filter by difficulty"),
    limit: int = Query(20, ge=1, le=100),
    skip: int = Query(0, ge=0),
    random_order: bool = Query(False),
    hide_answers: bool = Query(True)
):
    """Get Mathematics questions with filters"""
    
    query = {"is_active": True}
    
    if category:
        query["category"] = {"$regex": category, "$options": "i"}
    if topic:
        query["topic"] = {"$regex": topic, "$options": "i"}
    if difficulty:
        query["difficulty"] = difficulty.lower()
    
    if random_order:
        pipeline = [{"$match": query}, {"$sample": {"size": limit}}]
        questions = list(math_collection.aggregate(pipeline))
    else:
        questions = list(math_collection.find(query).skip(skip).limit(limit))
    
    result = []
    for i, q in enumerate(questions):
        item = {
            "id": str(q["_id"]),
            "question_no": skip + i + 1,
            "question": q["question"],
            "options": q["options"],
            "difficulty": q.get("difficulty", "medium"),
            "topic": q.get("topic", "General"),
            "category": q.get("category", "Mathematics")
        }
        
        if not hide_answers:
            item["correct"] = q["correct"]
            item["explanation"] = q.get("explanation", "")
        
        result.append(item)
    
    return {
        "questions": result,
        "count": len(result),
        "total_matching": math_collection.count_documents(query)
    }


@router.get("/quiz")
def generate_quiz(
    num_questions: int = Query(25, ge=5, le=100),
    difficulty: Optional[str] = Query(None),
    categories: Optional[str] = Query(None),
    time_limit: int = Query(30)
):
    """Generate a Mathematics quiz"""
    
    query = {"is_active": True}
    
    if difficulty:
        query["difficulty"] = difficulty.lower()
    if categories:
        cat_list = [c.strip() for c in categories.split(",")]
        query["category"] = {"$in": cat_list}
    
    pipeline = [{"$match": query}, {"$sample": {"size": num_questions}}]
    questions = list(math_collection.aggregate(pipeline))
    
    quiz_questions = []
    for i, q in enumerate(questions):
        quiz_questions.append({
            "id": str(q["_id"]),
            "question_no": i + 1,
            "question": q["question"],
            "options": q["options"],
            "difficulty": q.get("difficulty", "medium"),
            "topic": q.get("topic", "General"),
            "category": q.get("category", "Mathematics")
        })
    
    return {
        "quiz_id": f"math_quiz_{random.randint(10000, 99999)}",
        "title": "Mathematics Quiz",
        "total_questions": len(quiz_questions),
        "time_limit_minutes": time_limit,
        "questions": quiz_questions
    }


@router.post("/quiz/submit")
def submit_quiz(submission: dict):
    """Submit quiz and get results"""
    
    answers = submission.get("answers", {})
    question_ids = submission.get("question_ids", [])
    
    if not question_ids:
        raise HTTPException(status_code=400, detail="No questions provided")
    
    questions = list(math_collection.find({"_id": {"$in": question_ids}}))
    
    correct = wrong = unanswered = 0
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
            "topic": q.get("topic", "General")
        })
    
    total = len(questions)
    score = round((correct / total) * 100, 2) if total > 0 else 0
    
    return {
        "score": score,
        "correct": correct,
        "wrong": wrong,
        "unanswered": unanswered,
        "total": total,
        "results": results,
        "pass_status": "PASS" if score >= 40 else "FAIL"
    }


@router.get("/categories")
def get_categories():
    """Get all categories with counts"""
    
    pipeline = [
        {"$group": {"_id": "$category", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}}
    ]
    
    categories = []
    for doc in math_collection.aggregate(pipeline):
        categories.append({
            "name": doc["_id"],
            "count": doc["count"],
            "slug": doc["_id"].lower().replace(" ", "-").replace("&", "and")
        })
    
    return {"categories": categories, "total": len(categories)}


@router.get("/topics")
def get_topics(category: Optional[str] = None):
    """Get all topics"""
    
    match = {}
    if category:
        match["category"] = {"$regex": category, "$options": "i"}
    
    pipeline = [
        {"$match": match} if match else {"$match": {}},
        {"$group": {"_id": "$topic", "count": {"$sum": 1}, "category": {"$first": "$category"}}},
        {"$sort": {"count": -1}}
    ]
    
    topics = [{"name": d["_id"], "count": d["count"], "category": d.get("category")} 
              for d in math_collection.aggregate(pipeline)]
    
    return {"topics": topics, "total": len(topics)}


@router.get("/stats")
def get_statistics():
    """Get detailed statistics"""
    
    total = math_collection.count_documents({})
    
    difficulty_dist = {}
    for d in ["easy", "medium", "hard"]:
        c = math_collection.count_documents({"difficulty": d})
        difficulty_dist[d] = {"count": c, "percentage": round((c/total)*100, 2) if total else 0}
    
    cat_pipeline = [
        {"$group": {"_id": "$category", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}}
    ]
    category_dist = [{"category": d["_id"], "count": d["count"], 
                      "percentage": round((d["count"]/total)*100, 2) if total else 0}
                     for d in math_collection.aggregate(cat_pipeline)]
    
    topic_pipeline = [{"$group": {"_id": "$topic"}}, {"$count": "total"}]
    topic_result = list(math_collection.aggregate(topic_pipeline))
    
    return {
        "total_questions": total,
        "unique_topics": topic_result[0]["total"] if topic_result else 0,
        "unique_categories": len(category_dist),
        "difficulty_distribution": difficulty_dist,
        "category_distribution": category_dist
    }


@router.get("/random")
def get_random_questions(count: int = Query(10, ge=1, le=50)):
    """Get random questions"""
    
    pipeline = [{"$match": {"is_active": True}}, {"$sample": {"size": count}}]
    questions = list(math_collection.aggregate(pipeline))
    
    return {
        "questions": [{
            "id": str(q["_id"]),
            "question_no": i + 1,
            "question": q["question"],
            "options": q["options"],
            "correct": q["correct"],
            "explanation": q.get("explanation", ""),
            "difficulty": q.get("difficulty", "medium"),
            "topic": q.get("topic", "General")
        } for i, q in enumerate(questions)],
        "count": len(questions)
    }


@router.get("/search")
def search_questions(q: str = Query(..., min_length=2), limit: int = Query(20, ge=1, le=50)):
    """Search questions"""
    
    query = {
        "$or": [
            {"question": {"$regex": q, "$options": "i"}},
            {"topic": {"$regex": q, "$options": "i"}},
            {"category": {"$regex": q, "$options": "i"}}
        ]
    }
    
    questions = list(math_collection.find(query).limit(limit))
    
    return {
        "query": q,
        "results": [{
            "id": str(que["_id"]),
            "question": que["question"],
            "options": que["options"],
            "correct": que["correct"],
            "difficulty": que.get("difficulty"),
            "topic": que.get("topic"),
            "category": que.get("category")
        } for que in questions],
        "count": len(questions)
    }


@router.get("/practice/{category}")
def practice_by_category(
    category: str,
    count: int = Query(10, ge=5, le=50),
    difficulty: Optional[str] = None
):
    """Get practice questions by category"""
    
    query = {"category": {"$regex": category, "$options": "i"}, "is_active": True}
    if difficulty:
        query["difficulty"] = difficulty.lower()
    
    pipeline = [{"$match": query}, {"$sample": {"size": count}}]
    questions = list(math_collection.aggregate(pipeline))
    
    return {
        "category": category,
        "questions": [{
            "id": str(q["_id"]),
            "question_no": i + 1,
            "question": q["question"],
            "options": q["options"],
            "correct": q["correct"],
            "explanation": q.get("explanation", ""),
            "difficulty": q.get("difficulty"),
            "topic": q.get("topic")
        } for i, q in enumerate(questions)],
        "count": len(questions)
    }
