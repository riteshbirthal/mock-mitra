"""
Data Loader Module
Loads data from JSON files in the data directory into MongoDB.
"""

import json
import os
from pathlib import Path

# Get the data directory path
DATA_DIR = Path(__file__).parent.parent / "data"
CONTENT_DIR = DATA_DIR / "content"


def load_json_file(file_path: Path) -> list | dict:
    """Load a JSON file and return its contents."""
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading {file_path}: {e}")
        return []


def load_subjects() -> list:
    """Load subjects from subjects.json"""
    return load_json_file(DATA_DIR / "subjects.json")


def load_exams() -> list:
    """Load exams from exams.json"""
    return load_json_file(DATA_DIR / "exams.json")


def load_all_content() -> list:
    """Load all content from JSON files in content directory."""
    all_content = []
    
    if not CONTENT_DIR.exists():
        print(f"Content directory not found: {CONTENT_DIR}")
        return all_content
    
    for json_file in CONTENT_DIR.glob("*.json"):
        content = load_json_file(json_file)
        if isinstance(content, list):
            all_content.extend(content)
        elif isinstance(content, dict):
            all_content.append(content)
    
    return all_content


def init_data_from_files(db):
    """Initialize MongoDB collections from JSON data files."""
    from app.database import (
        subjects_collection, 
        exams_collection, 
        content_collection
    )
    
    # Load and insert subjects
    if subjects_collection.count_documents({}) == 0:
        subjects = load_subjects()
        if subjects:
            subjects_collection.insert_many(subjects)
            print(f"Loaded {len(subjects)} subjects")
    
    # Load and insert exams
    if exams_collection.count_documents({}) == 0:
        exams = load_exams()
        if exams:
            exams_collection.insert_many(exams)
            print(f"Loaded {len(exams)} exams")
    
    # Load and insert content
    if content_collection.count_documents({}) == 0:
        content = load_all_content()
        if content:
            content_collection.insert_many(content)
            print(f"Loaded {len(content)} content items")


def refresh_content(db):
    """Refresh content collection from JSON files (replaces existing)."""
    from app.database import content_collection
    
    content_collection.delete_many({})
    content = load_all_content()
    if content:
        content_collection.insert_many(content)
        print(f"Refreshed {len(content)} content items")
    return len(content)


def refresh_subjects(db):
    """Refresh subjects collection from JSON files."""
    from app.database import subjects_collection
    
    subjects_collection.delete_many({})
    subjects = load_subjects()
    if subjects:
        subjects_collection.insert_many(subjects)
        print(f"Refreshed {len(subjects)} subjects")
    return len(subjects)


def get_content_by_subject(subject_id: str) -> list:
    """Get all content items for a specific subject."""
    all_content = load_all_content()
    return [c for c in all_content if c.get("subject_id") == subject_id]


def get_content_by_topic(subject_id: str, topic: str) -> dict | None:
    """Get content for a specific topic."""
    all_content = load_all_content()
    for c in all_content:
        if c.get("subject_id") == subject_id and c.get("topic") == topic:
            return c
    return None
