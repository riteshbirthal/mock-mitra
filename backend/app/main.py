from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.middleware.api_key import APIKeyMiddleware
from app.routes import exams, content, subjects, computer_awareness, mathematics
from app.database import init_sample_data, db
from app.data_loader import init_data_from_files

app = FastAPI(
    title="Mock-Mitra API",
    description="API for Mock Test Platform for Government Exams",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API Key middleware
app.add_middleware(APIKeyMiddleware)

# Include routers
app.include_router(exams.router)
app.include_router(content.router)
app.include_router(subjects.router)
app.include_router(computer_awareness.router)
app.include_router(mathematics.router)


@app.on_event("startup")
def startup_event():
    """Initialize data on startup from JSON files"""
    try:
        # Load data from JSON files in data/ directory
        init_data_from_files(db)
        print("Data loaded from JSON files")
    except Exception as e:
        print(f"JSON data loading failed: {e}")
    
    try:
        # Initialize any remaining sample data
        init_sample_data()
        print("Database initialized with sample data")
    except Exception as e:
        print(f"Database initialization skipped: {e}")


@app.get("/")
def root():
    return {
        "message": "Welcome to Mock-Mitra API",
        "docs": "/docs",
        "endpoints": {
            "exams": "/exams",
            "content": "/content",
            "subjects": "/subjects",
            "computer_awareness": "/computer-awareness"
        },
        "question_banks": {
            "computer_awareness": {
                "total_questions": 20000,
                "endpoint": "/computer-awareness",
                "features": ["Quiz generation", "Category filtering", "Topic filtering", "Statistics"]
            },
            "mathematics": {
                "total_questions": 20000,
                "endpoint": "/mathematics",
                "features": ["Quiz generation", "Category filtering", "Practice by topic", "Statistics"]
            }
        }
    }


@app.get("/health")
def health_check():
    return {"status": "healthy"}
