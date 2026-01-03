import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MPHWPractice.css';

interface PracticeTest {
  id: string;
  name: string;
  subject: string;
  questions: number;
  duration: number;
  difficulty: string;
  icon: string;
  color: string;
  attempted?: boolean;
  score?: number;
}

const practiceTests: PracticeTest[] = [
  {
    id: 'reasoning-mini',
    name: 'Reasoning Mini Test',
    subject: 'Reasoning',
    questions: 15,
    duration: 15,
    difficulty: 'Easy',
    icon: '🧩',
    color: '#ed8936',
  },
  {
    id: 'reasoning-full',
    name: 'Reasoning Full Test',
    subject: 'Reasoning',
    questions: 30,
    duration: 30,
    difficulty: 'Medium',
    icon: '🧩',
    color: '#ed8936',
  },
  {
    id: 'math-mini',
    name: 'Mathematics Mini Test',
    subject: 'Mathematics',
    questions: 15,
    duration: 20,
    difficulty: 'Easy',
    icon: '📐',
    color: '#48bb78',
  },
  {
    id: 'math-full',
    name: 'Mathematics Full Test',
    subject: 'Mathematics',
    questions: 25,
    duration: 35,
    difficulty: 'Medium',
    icon: '📐',
    color: '#48bb78',
  },
  {
    id: 'gk-mini',
    name: 'General Awareness Mini',
    subject: 'General Awareness',
    questions: 20,
    duration: 15,
    difficulty: 'Easy',
    icon: '🌍',
    color: '#667eea',
  },
  {
    id: 'computer-mini',
    name: 'Computer Awareness Test',
    subject: 'Computer',
    questions: 15,
    duration: 15,
    difficulty: 'Easy',
    icon: '💻',
    color: '#38b2ac',
  },
  {
    id: 'health-mini',
    name: 'Health & Medical Basics',
    subject: 'Health',
    questions: 20,
    duration: 20,
    difficulty: 'Medium',
    icon: '🏥',
    color: '#e53e3e',
  },
  {
    id: 'mixed-mini',
    name: 'Mixed Subject Test',
    subject: 'Mixed',
    questions: 25,
    duration: 25,
    difficulty: 'Medium',
    icon: '📚',
    color: '#9f7aea',
  },
];

const fullMockTests = [
  {
    id: 'hssc_mphw',
    name: 'MPHW Full Mock Test',
    description: 'Complete simulation of actual exam',
    questions: 100,
    duration: 90,
    difficulty: 'Exam Level',
    icon: '📝',
    color: '#e91e63',
  },
  {
    id: 'mphw-practice-1',
    name: 'MPHW Practice Set 1',
    description: 'Previous year pattern questions',
    questions: 100,
    duration: 90,
    difficulty: 'Exam Level',
    icon: '📋',
    color: '#9c27b0',
  },
  {
    id: 'mphw-practice-2',
    name: 'MPHW Practice Set 2',
    description: 'Model paper with new questions',
    questions: 100,
    duration: 90,
    difficulty: 'Exam Level',
    icon: '📄',
    color: '#673ab7',
  },
];

const MPHWPractice = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const subjects = ['all', 'Reasoning', 'Mathematics', 'General Awareness', 'Computer', 'Health', 'Mixed'];

  const filteredTests = practiceTests.filter(test => {
    const matchesFilter = activeFilter === 'all' || test.subject === activeFilter;
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="mphw-practice-page">
      {/* Hero */}
      <section className="practice-hero">
        <div className="container">
          <h1>
            <span className="hero-icon">✍️</span>
            Practice Tests
          </h1>
          <p>Sharpen your skills with topic-wise and full-length practice tests</p>
        </div>
      </section>

      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/mphw">MPHW Prep</Link>
          <span>/</span>
          <span>Practice Tests</span>
        </nav>

        {/* Full Mock Tests Section */}
        <section className="full-mock-section">
          <h2 className="section-title">Full Mock Tests</h2>
          <p className="section-subtitle">Complete exam simulation with 100 questions in 90 minutes</p>
          
          <div className="full-mock-grid">
            {fullMockTests.map((test) => (
              <Link
                key={test.id}
                to={`/exam/${test.id}`}
                className="full-mock-card"
                style={{ '--accent-color': test.color } as React.CSSProperties}
              >
                <div className="mock-icon">{test.icon}</div>
                <div className="mock-info">
                  <h3>{test.name}</h3>
                  <p>{test.description}</p>
                  <div className="mock-meta">
                    <span>📝 {test.questions} Questions</span>
                    <span>⏱️ {test.duration} mins</span>
                    <span className="difficulty-tag">{test.difficulty}</span>
                  </div>
                </div>
                <span className="start-btn">Start →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Topic-wise Tests Section */}
        <section className="topic-tests-section">
          <h2 className="section-title">Topic-wise Practice Tests</h2>
          <p className="section-subtitle">Focus on specific subjects to improve your weak areas</p>

          {/* Filters */}
          <div className="filters-bar">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search tests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-tabs">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  className={`filter-tab ${activeFilter === subject ? 'active' : ''}`}
                  onClick={() => setActiveFilter(subject)}
                >
                  {subject === 'all' ? 'All' : subject}
                </button>
              ))}
            </div>
          </div>

          {/* Tests Grid */}
          <div className="tests-grid">
            {filteredTests.map((test) => (
              <div
                key={test.id}
                className="test-card"
                style={{ '--accent-color': test.color } as React.CSSProperties}
              >
                <div className="test-header">
                  <span className="test-icon">{test.icon}</span>
                  <span className={`difficulty-badge ${test.difficulty.toLowerCase()}`}>
                    {test.difficulty}
                  </span>
                </div>
                <h3>{test.name}</h3>
                <p className="test-subject">{test.subject}</p>
                <div className="test-info">
                  <span>📝 {test.questions} Qs</span>
                  <span>⏱️ {test.duration} min</span>
                </div>
                <div className="test-actions">
                  <Link to={`/mphw/test/${test.id}`} className="btn btn-primary btn-sm">
                    Start Test
                  </Link>
                  <Link to={`/mphw/topics/${test.subject.toLowerCase().replace(' ', '-')}`} className="btn btn-secondary btn-sm">
                    Study First
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredTests.length === 0 && (
            <div className="no-results">
              <p>No tests found matching your criteria</p>
            </div>
          )}
        </section>

        {/* Tips Section */}
        <section className="tips-section">
          <h2 className="section-title">💡 Test-Taking Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <span className="tip-number">1</span>
              <h4>Read Carefully</h4>
              <p>Read each question twice before answering</p>
            </div>
            <div className="tip-card">
              <span className="tip-number">2</span>
              <h4>Time Management</h4>
              <p>Don't spend more than 1 minute per question</p>
            </div>
            <div className="tip-card">
              <span className="tip-number">3</span>
              <h4>Eliminate Options</h4>
              <p>Rule out obviously wrong answers first</p>
            </div>
            <div className="tip-card">
              <span className="tip-number">4</span>
              <h4>Review Answers</h4>
              <p>Use remaining time to review marked questions</p>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="bottom-nav">
          <Link to="/mphw" className="btn btn-secondary">
            ← Back to MPHW Prep
          </Link>
          <Link to="/mphw/articles" className="btn btn-primary">
            Read Articles →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MPHWPractice;
