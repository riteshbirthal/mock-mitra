from fastapi import APIRouter
from app.database import exams_collection, questions_collection, db
import random

router = APIRouter(prefix="/exams", tags=["Exams"])

# Collection mapping for different subjects
SUBJECT_COLLECTIONS = {
    "computer_awareness": db["computer_awareness_questions"],
    "mathematics": db["mathematics_questions"],
}


@router.get("/")
def get_all_exams():
    """Get all available exams"""
    exams = list(exams_collection.find({}))
    return {"exams": exams}


@router.get("/{exam_id}")
def get_exam(exam_id: str):
    """Get exam details by ID"""
    exam = exams_collection.find_one({"_id": exam_id})
    if not exam:
        return {"error": "Exam not found"}
    return exam


@router.get("/{exam_id}/questions")
def get_exam_questions(exam_id: str):
    """Get random questions for an exam from configured collections"""
    exam = exams_collection.find_one({"_id": exam_id})
    if not exam:
        return {"error": "Exam not found", "questions": [], "total": 0}
    
    total_questions = exam.get("total_questions", 25)
    question_sources = exam.get("question_sources", [])
    
    questions = []
    
    if question_sources:
        # Fetch questions from configured collections
        questions_per_source = total_questions // len(question_sources)
        remaining = total_questions % len(question_sources)
        
        for i, source in enumerate(question_sources):
            collection_name = source.get("collection")
            categories = source.get("categories", [])
            count = questions_per_source + (1 if i < remaining else 0)
            
            if collection_name in SUBJECT_COLLECTIONS:
                collection = SUBJECT_COLLECTIONS[collection_name]
                
                # Build query with optional category filter
                query = {"is_active": True}
                if categories:
                    query["category"] = {"$in": categories}
                
                # Get random questions using $sample
                pipeline = [
                    {"$match": query},
                    {"$sample": {"size": count}},
                    {"$project": {"correct": 0, "explanation": 0}}  # Hide answers
                ]
                
                source_questions = list(collection.aggregate(pipeline))
                questions.extend(source_questions)
    
    # Fallback to legacy questions collection if no sources configured or no questions found
    if not questions:
        legacy_questions = list(questions_collection.find(
            {"exam_id": exam_id},
            {"correct": 0, "explanation": 0}
        ))
        # Randomize legacy questions
        random.shuffle(legacy_questions)
        questions = legacy_questions[:total_questions]
    
    # Shuffle all questions for variety
    random.shuffle(questions)
    
    # Add question numbers
    for i, q in enumerate(questions):
        q["_id"] = str(q["_id"])
        q["question_no"] = i + 1
    
    return {"questions": questions, "total": len(questions)}


@router.post("/{exam_id}/submit")
def submit_exam(exam_id: str, answers: dict):
    """Submit exam answers and get results"""
    from bson import ObjectId
    
    user_answers = answers.get("answers", {})
    question_ids = answers.get("question_ids", [])
    
    questions = []
    questions_map = {}
    
    if question_ids:
        # Fetch questions from all subject collections by their IDs
        for collection_name, collection in SUBJECT_COLLECTIONS.items():
            # Try both string and ObjectId formats
            found = list(collection.find({"_id": {"$in": question_ids}}))
            if not found:
                try:
                    obj_ids = [ObjectId(qid) if len(qid) == 24 else qid for qid in question_ids if isinstance(qid, str)]
                    found = list(collection.find({"_id": {"$in": obj_ids}}))
                except:
                    pass
            for q in found:
                questions_map[str(q["_id"])] = q
        
        # Also check legacy questions collection
        legacy_found = list(questions_collection.find({"_id": {"$in": question_ids}}))
        for q in legacy_found:
            questions_map[str(q["_id"])] = q
        
        # Maintain order based on question_ids
        questions = [questions_map[qid] for qid in question_ids if qid in questions_map]
    
    # Fallback to legacy behavior if no question_ids provided
    if not questions:
        questions = list(questions_collection.find({"exam_id": exam_id}))
    
    correct = 0
    wrong = 0
    unanswered = 0
    results = []
    
    for i, q in enumerate(questions):
        q_id = str(q["_id"])
        user_answer = user_answers.get(str(i), -1)
        
        if user_answer == -1:
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
            "category": q.get("category", "General")
        })
    
    total = len(questions)
    score = round((correct / total) * 100, 2) if total > 0 else 0
    
    return {
        "score": score,
        "correct": correct,
        "wrong": wrong,
        "unanswered": unanswered,
        "total": total,
        "results": results
    }
