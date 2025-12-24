from fastapi import APIRouter, Query
from typing import Optional
from app.database import subjects_collection, content_collection

router = APIRouter(prefix="/subjects", tags=["Subjects"])


@router.get("/")
def get_all_subjects():
    """Get all subjects"""
    subjects = list(subjects_collection.find({}))
    return {"subjects": subjects}


@router.get("/{subject_id}")
def get_subject(subject_id: str):
    """Get subject details with related content"""
    subject = subjects_collection.find_one({"_id": subject_id})
    if not subject:
        return {"error": "Subject not found"}
    
    # Get related content by subject_id
    contents = list(content_collection.find(
        {"subject_id": subject_id},
        {"content": 0}  # Exclude full content for listing
    ))
    
    return {
        "subject": subject,
        "contents": contents
    }


@router.get("/{subject_id}/topics")
def get_subject_topics(subject_id: str):
    """Get all topics for a subject"""
    subject = subjects_collection.find_one({"_id": subject_id})
    if not subject:
        return {"error": "Subject not found"}
    
    # Get content grouped by topic
    contents = list(content_collection.find(
        {"subject_id": subject_id},
        {"content": 0}
    ))
    
    return {
        "subject_id": subject_id,
        "topics": subject.get("topics", []),
        "contents": contents
    }


@router.get("/{subject_id}/content/{content_id}")
def get_topic_content(subject_id: str, content_id: str):
    """Get full content for a specific topic"""
    content = content_collection.find_one({
        "_id": content_id,
        "subject_id": subject_id
    })
    
    if not content:
        # Try without subject_id filter
        content = content_collection.find_one({"_id": content_id})
    
    if not content:
        return {"error": "Content not found"}
    
    return content


@router.get("/{subject_id}/topic/{topic}")
def get_content_by_topic(subject_id: str, topic: str):
    """Get content for a specific topic name"""
    content = content_collection.find_one({
        "subject_id": subject_id,
        "topic": {"$regex": topic, "$options": "i"}
    })
    
    if not content:
        return {"error": "Content not found for this topic"}
    
    return content
