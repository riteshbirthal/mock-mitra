# Mock-Mitra

A comprehensive mock test platform for government exam preparation with study materials organized by subjects.

![Node.js](https://img.shields.io/badge/Node.js-22-green)
![Python](https://img.shields.io/badge/Python-3.12-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green)
![React](https://img.shields.io/badge/React-19-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115-teal)

## Features

- **Mock Tests** - SSC, Banking, Railway, UPSC, State PSC, Defence exams
- **Subject-wise Study** - 13 subjects with comprehensive notes
- **Timed Tests** - Real exam simulation with auto-submit
- **Detailed Solutions** - Explanations for every question
- **Study Materials** - Markdown-based content with tables and formatting
- **Responsive UI** - Works on desktop, tablet, and mobile
- **API Security** - API Key authentication for all endpoints

## Tech Stack

| Component | Technology | Version |
|-----------|------------|---------|
| Frontend | React + TypeScript + Vite | 19.x |
| Backend | FastAPI + Python | 3.12 |
| Database | MongoDB | 7.0 |
| Container | Docker | Latest |

## Quick Start with Docker

```bash
# Clone the repository
git clone https://github.com/yourusername/mock-mitra.git
cd mock-mitra

# Start all services
docker-compose up -d

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000
# API Docs: http://localhost:8000/docs
```

## Manual Setup

### Prerequisites
- Python 3.12+
- Node.js 22+
- MongoDB 7.0+

### Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
.\venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# Edit .env with your MongoDB URL

# Run server
uvicorn app.main:app --reload
```

**Backend runs at:** http://localhost:8000

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Edit .env with your API URL and Key

# Run development server
npm run dev
```

**Frontend runs at:** http://localhost:3000

## Environment Variables

### Backend (`backend/.env`)
```env
MONGODB_URL=mongodb://localhost:27017
DATABASE_NAME=mock_mitra
API_KEY=your-secret-api-key
```

### Frontend (`frontend/.env`)
```env
VITE_API_URL=http://localhost:8000
VITE_API_KEY=your-secret-api-key
```

## API Endpoints

All endpoints require `X-API-Key` header.

### Exams
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/exams` | List all exams |
| GET | `/exams/{id}` | Get exam details |
| GET | `/exams/{id}/questions` | Get questions (answers hidden) |
| POST | `/exams/{id}/submit` | Submit answers, get results |

### Subjects
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/subjects` | List all subjects |
| GET | `/subjects/{id}` | Get subject with content list |
| GET | `/subjects/{id}/topics` | Get all topics for a subject |
| GET | `/subjects/{id}/content/{content_id}` | Get full content for topic |
| GET | `/subjects/{id}/topic/{topic}` | Get content by topic name |

### Content
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/content` | List all content |
| GET | `/content/categories` | Get content categories |
| GET | `/content/by-exam/{exam_id}` | Get content for specific exam |
| GET | `/content/{id}` | Get full content |

## Project Structure

```
mock-mitra/
├── backend/
│   ├── app/
│   │   ├── main.py           # FastAPI application
│   │   ├── config.py         # Configuration
│   │   ├── database.py       # MongoDB connection + sample data
│   │   ├── data_loader.py    # JSON data loader module
│   │   ├── middleware/       # API Key authentication
│   │   └── routes/           # API endpoints
│   │       ├── exams.py      # Exam and questions routes
│   │       ├── subjects.py   # Subject and content routes
│   │       ├── content.py    # Study material routes
│   │       ├── computer_awareness.py  # CA question bank
│   │       └── mathematics.py # Math question bank
│   ├── data/                 # Data directory (JSON files)
│   │   ├── subjects.json     # Subject definitions
│   │   ├── exams.json        # Exam configurations
│   │   └── content/          # Reading content by subject
│   │       ├── general-knowledge.json
│   │       ├── mathematics.json
│   │       ├── polity.json
│   │       ├── history.json
│   │       ├── science.json
│   │       ├── computer.json
│   │       ├── reasoning.json
│   │       ├── english.json
│   │       └── geography.json
│   ├── Dockerfile
│   ├── requirements.txt
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/            # Page components
│   │   ├── services/         # API service
│   │   └── App.tsx           # Main app
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   └── .env.example
├── docker-compose.yml
└── README.md
```

## Available Subjects

| Subject | Topics |
|---------|--------|
| General Knowledge | India Facts, World Organizations, Awards |
| Mathematics | Percentage, Ratio, Time & Work |
| Reasoning | Number Series, Coding, Analogies |
| English | Grammar, Vocabulary, Idioms |
| Computer Awareness | Hardware, Software, Internet |
| Biology | Human Body, Vitamins, Diseases |
| Chemistry | Elements, Compounds, Reactions |
| Physics | Laws of Motion, Energy, Waves |
| Indian Polity | Constitution, Rights, Parliament |
| History | Freedom Struggle, Ancient India |
| Geography | Rivers, Climate, Soil Types |
| Economics | GDP, Banking, Budget |
| Current Affairs | National, International, Sports |

## Data Management

### Adding New Content

Content is stored in JSON files in `backend/data/content/`. Each subject has its own JSON file.

**Content structure:**
```json
{
    "_id": "unique-content-id",
    "subject_id": "subject-id",
    "topic": "Topic Name",
    "title": "Content Title",
    "content": "# Markdown Content...",
    "exam_tags": ["ssc", "banking", "railway"]
}
```

### Adding New Subjects

Edit `backend/data/subjects.json`:
```json
{
    "_id": "subject-id",
    "name": "Subject Name",
    "icon": "📚",
    "color": "#667eea",
    "description": "Subject description",
    "topics": ["Topic 1", "Topic 2"]
}
```

### Question Banks

The platform supports large question banks:
- **Computer Awareness**: 20,000+ questions
- **Mathematics**: 20,000+ questions

Questions are fetched randomly for each mock test, ensuring variety.

## Docker Images

| Service | Image | Version |
|---------|-------|---------|
| MongoDB | `mongo` | 7.0 |
| Python | `python` | 3.12-slim |
| Node.js | `node` | 22-alpine |
| Nginx | `nginx` | 1.27-alpine |

## Development

```bash
# Run backend with hot reload
cd backend
uvicorn app.main:app --reload

# Run frontend with hot reload
cd frontend
npm run dev

# Build frontend for production
npm run build

# Run linting
npm run lint
```

## License

MIT License
