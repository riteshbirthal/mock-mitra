import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getExamData } from '../../data/exams';
import './ExamTopics.css';

const ExamTopics = () => {
  const { examId: paramExamId, subjectId } = useParams<{ examId: string; subjectId: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<string>('all');
  const location = window.location.pathname;
  
  // Handle legacy /mphw route
  const examId = paramExamId || (location.startsWith('/mphw') ? 'mphw' : undefined);
  const examData = examId ? getExamData(examId) : null;
  const subject = examData?.subjects.find(s => s.id === subjectId);
  const topics = subject?.topics || [];

  const filteredTopics = topics.filter((topic) => {
    const matchesSearch = topic.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || topic.difficulty.toLowerCase().includes(filter.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  if (!examData || !subject) {
    return (
      <div className="container">
        <div className="error-message">
          <h2>Subject not found</h2>
          <p>The subject you're looking for doesn't exist.</p>
        </div>
        <Link to={examId ? `/prep/${examId}` : '/exams'} className="btn btn-primary" style={{ marginTop: '20px' }}>
          Back to Exam Prep
        </Link>
      </div>
    );
  }

  const totalQuestions = topics.reduce((acc, t) => acc + t.questionsCount, 0);
  const contentAvailable = topics.filter(t => t.hasContent).length;

  return (
    <div className="exam-topics-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to={`/prep/${examId}`}>{examData.examInfo.name} Prep</Link>
          <span>/</span>
          <span>{subject.name}</span>
        </nav>

        {/* Subject Header */}
        <div 
          className="subject-header"
          style={{ '--subject-color': subject.color } as React.CSSProperties}
        >
          <div className="subject-header-content">
            <span className="subject-icon">{subject.icon}</span>
            <div>
              <h1>{subject.name}</h1>
              <p>{subject.description}</p>
            </div>
          </div>
          <div className="subject-stats">
            <div className="stat-item">
              <span className="stat-value">{topics.length}</span>
              <span className="stat-label">Topics</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{totalQuestions}+</span>
              <span className="stat-label">Questions</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{subject.marks}</span>
              <span className="stat-label">Marks</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{contentAvailable}</span>
              <span className="stat-label">With Content</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="filters-bar">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${filter === 'easy' ? 'active' : ''}`}
              onClick={() => setFilter('easy')}
            >
              Easy
            </button>
            <button 
              className={`filter-btn ${filter === 'medium' ? 'active' : ''}`}
              onClick={() => setFilter('medium')}
            >
              Medium
            </button>
            <button 
              className={`filter-btn ${filter === 'hard' ? 'active' : ''}`}
              onClick={() => setFilter('hard')}
            >
              Hard
            </button>
          </div>
        </div>

        {/* Topics List */}
        <div className="topics-list">
          {filteredTopics.map((topic, index) => (
            <Link
              key={topic.id}
              to={topic.hasContent ? `/prep/${examId}/topic/${subjectId}/${topic.id}` : '#'}
              className={`topic-card ${!topic.hasContent ? 'coming-soon' : ''}`}
              onClick={(e) => !topic.hasContent && e.preventDefault()}
            >
              <div className="topic-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="topic-info">
                <h3>{topic.name}</h3>
                <div className="topic-meta">
                  <span className="meta-item">
                    <span className="meta-icon">📝</span>
                    {topic.questionsCount} Questions
                  </span>
                  <span className={`difficulty-badge ${topic.difficulty.toLowerCase().replace('-', '')}`}>
                    {topic.difficulty}
                  </span>
                  {topic.hasContent ? (
                    <span className="content-badge available">✓ Content Available</span>
                  ) : (
                    <span className="content-badge coming">Coming Soon</span>
                  )}
                </div>
              </div>
              <div className="topic-actions">
                {topic.hasContent ? (
                  <>
                    <span className="action-btn study">📖 Study</span>
                    <span className="action-btn practice">✍️ Practice</span>
                  </>
                ) : (
                  <span className="action-btn coming">🔒 Coming Soon</span>
                )}
              </div>
              <span className="topic-arrow">{topic.hasContent ? '→' : ''}</span>
            </Link>
          ))}
        </div>

        {filteredTopics.length === 0 && (
          <div className="no-results">
            <p>No topics found matching your criteria</p>
          </div>
        )}

        {/* Other Subjects */}
        <section className="other-subjects-section">
          <h2>Other Subjects</h2>
          <div className="other-subjects-grid">
            {examData.subjects
              .filter(s => s.id !== subjectId)
              .slice(0, 6)
              .map(s => (
                <Link 
                  key={s.id} 
                  to={`/prep/${examId}/topics/${s.id}`}
                  className="other-subject-card"
                  style={{ '--accent-color': s.color } as React.CSSProperties}
                >
                  <span className="os-icon">{s.icon}</span>
                  <span className="os-name">{s.name}</span>
                  <span className="os-topics">{s.topics.length} topics</span>
                </Link>
              ))}
          </div>
        </section>

        {/* Bottom Actions */}
        <div className="bottom-actions">
          <Link to={`/exam/${examData.examInfo.id}`} className="btn btn-primary btn-lg">
            📝 Take Practice Test
          </Link>
          <Link to={`/prep/${examId}`} className="btn btn-secondary btn-lg">
            ← Back to {examData.examInfo.name} Prep
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExamTopics;
