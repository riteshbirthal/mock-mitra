from fastapi import APIRouter
from app.database import content_collection

router = APIRouter(prefix="/content", tags=["Content"])


@router.get("/")
def get_all_content():
    """Get all study content"""
    contents = list(content_collection.find({}, {"content": 0}))
    return {"contents": contents}


@router.get("/categories")
def get_categories():
    """Get all unique content categories"""
    categories = content_collection.distinct("category")
    return {"categories": categories}


@router.get("/by-exam/{exam_id}")
def get_content_by_exam(exam_id: str):
    """Get content relevant to a specific exam"""
    contents = list(content_collection.find(
        {"exam_tags": exam_id},
        {"content": 0}
    ))
    return {"contents": contents}


@router.get("/{content_id}")
def get_content(content_id: str):
    """Get full content by ID"""
    content = content_collection.find_one({"_id": content_id})
    if not content:
        return {"error": "Content not found"}
    return content
