import { useState } from 'react';
import { Link } from 'react-router-dom';
import { computerKnowledgeLessons, computerKnowledgeModule } from '../../data/computer-knowledge';
import './ComputerKnowledge.css';

const ComputerKnowledge = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLessons = computerKnowledgeLessons.filter(lesson =>
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lesson.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const completedLessons = 0; // This could be fetched from localStorage or state
  const progress = Math.round((completedLessons / computerKnowledgeLessons.length) * 100);

  return (
    <div className="computer-knowledge-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/mphw">MPHW Prep</Link>
          <span>/</span>
          <span>Computer Knowledge</span>
        </nav>

        {/* Hero Section */}
        <div className="ck-hero">
          <div className="ck-hero-content">
            <div className="ck-hero-icon">{computerKnowledgeModule.icon}</div>
            <div className="ck-hero-text">
              <h1>{computerKnowledgeModule.title}</h1>
              <p>{computerKnowledgeModule.description}</p>
              <div className="ck-hero-stats">
                <div className="stat">
                  <span className="stat-icon">📚</span>
                  <span className="stat-value">{computerKnowledgeModule.totalLessons}</span>
                  <span className="stat-label">Lessons</span>
                </div>
                <div className="stat">
                  <span className="stat-icon">⏱️</span>
                  <span className="stat-value">{computerKnowledgeModule.totalDuration}</span>
                  <span className="stat-label">Duration</span>
                </div>
                <div className="stat">
                  <span className="stat-icon">📝</span>
                  <span className="stat-value">1000+</span>
                  <span className="stat-label">Questions</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Progress Card */}
          <div className="ck-progress-card">
            <h3>Your Progress</h3>
            <div className="progress-circle">
              <svg viewBox="0 0 100 100">
                <circle className="progress-bg" cx="50" cy="50" r="45" />
                <circle 
                  className="progress-fill" 
                  cx="50" cy="50" r="45"
                  style={{ strokeDashoffset: 283 - (283 * progress / 100) }}
                />
              </svg>
              <span className="progress-text">{progress}%</span>
            </div>
            <p className="progress-status">
              {completedLessons} of {computerKnowledgeLessons.length} lessons completed
            </p>
            <Link to={`/mphw/computer-knowledge/introduction-to-computers`} className="btn btn-primary">
              {completedLessons === 0 ? 'Start Learning' : 'Continue Learning'}
            </Link>
          </div>
        </div>

        {/* Learning Objectives */}
        <section className="ck-objectives">
          <h2>What You'll Learn</h2>
          <div className="objectives-grid">
            {computerKnowledgeModule.objectives.map((objective, index) => (
              <div key={index} className="objective-card">
                <span className="objective-number">{index + 1}</span>
                <p>{objective}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Search Bar */}
        <div className="ck-search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search lessons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Lessons Grid */}
        <section className="ck-lessons-section">
          <h2>Course Content</h2>
          <div className="lessons-grid">
            {filteredLessons.map((lesson, index) => (
              <Link
                key={lesson.id}
                to={`/mphw/computer-knowledge/${lesson.id}`}
                className="lesson-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="lesson-header">
                  <span className="lesson-number">Lesson {lesson.number}</span>
                  <span className="lesson-duration">{lesson.duration}</span>
                </div>
                <div className="lesson-icon">{lesson.icon}</div>
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
                <div className="lesson-footer">
                  <span className="lesson-objectives">
                    {lesson.objectives.length} objectives
                  </span>
                  <span className="lesson-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {filteredLessons.length === 0 && (
          <div className="no-results">
            <p>No lessons found matching "{searchTerm}"</p>
          </div>
        )}

        {/* Quick Topics */}
        <section className="ck-quick-topics">
          <h2>Quick Access Topics</h2>
          <div className="quick-topics-grid">
            <Link to="/mphw/computer-knowledge/ms-word" className="quick-topic">
              <span className="qt-icon">📝</span>
              <span className="qt-name">MS Word</span>
            </Link>
            <Link to="/mphw/computer-knowledge/ms-excel" className="quick-topic">
              <span className="qt-icon">📊</span>
              <span className="qt-name">MS Excel</span>
            </Link>
            <Link to="/mphw/computer-knowledge/ms-powerpoint" className="quick-topic">
              <span className="qt-icon">📽️</span>
              <span className="qt-name">MS PowerPoint</span>
            </Link>
            <Link to="/mphw/computer-knowledge/internet-and-email" className="quick-topic">
              <span className="qt-icon">🌐</span>
              <span className="qt-name">Internet</span>
            </Link>
            <Link to="/mphw/computer-knowledge/windows-operating-system" className="quick-topic">
              <span className="qt-icon">🪟</span>
              <span className="qt-name">Windows</span>
            </Link>
            <Link to="/mphw/computer-knowledge/computer-security-ethics" className="quick-topic">
              <span className="qt-icon">🔒</span>
              <span className="qt-name">Security</span>
            </Link>
          </div>
        </section>

        {/* Bottom Actions */}
        <div className="ck-bottom-actions">
          <Link to="/mphw/topics/computer" className="btn btn-secondary">
            Practice Questions
          </Link>
          <Link to="/mphw" className="btn btn-outline">
            ← Back to MPHW Prep
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComputerKnowledge;
