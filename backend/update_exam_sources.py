"""
Migration script to update existing exams with question_sources configuration.
Run this once to update the database.
"""

from pymongo import MongoClient
from app.config import MONGODB_URL, DATABASE_NAME

client = MongoClient(MONGODB_URL)
db = client[DATABASE_NAME]
exams_collection = db["exams"]

# Default question sources for all exams
default_sources = [
    {"collection": "computer_awareness", "categories": []},
    {"collection": "mathematics", "categories": []}
]

# Update all exams that don't have question_sources
result = exams_collection.update_many(
    {"question_sources": {"$exists": False}},
    {"$set": {"question_sources": default_sources}}
)

print(f"Updated {result.modified_count} exams with question_sources")

# Verify the update
exams = list(exams_collection.find({}))
for exam in exams:
    print(f"Exam: {exam['_id']} - Sources: {exam.get('question_sources', 'NOT SET')}")
