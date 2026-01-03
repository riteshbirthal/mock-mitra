import { Link } from 'react-router-dom';
import { subjects, examSections, examInfo } from '../../data/mphw-syllabus';
import './MPHWPrep.css';

const features = [
  { icon: '📖', title: 'Topic-wise Study', desc: 'Comprehensive notes for each topic' },
  { icon: '✍️', title: 'Practice Questions', desc: '500+ topic-wise MCQs with explanations' },
  { icon: '📝', title: 'Mock Tests', desc: 'Full-length tests simulating real exam' },
  { icon: '📊', title: 'Progress Tracking', desc: 'Track your preparation journey' },
  { icon: '💡', title: 'Tips & Strategies', desc: 'Expert guidance for exam success' },
  { icon: '📱', title: 'Mobile Friendly', desc: 'Study anytime, anywhere' },
];

const MPHWPrep = () => {
  return (
    <div className="mphw-prep-page">
      {/* Hero Section */}
      <section className="mphw-hero">
        <div className="container">
          <div className="hero-badge">{examInfo.organization} - {examInfo.group}</div>
          <h1 className="hero-title">
            <span className="hero-icon">🏥</span>
            {examInfo.fullName}
          </h1>
          <p className="hero-subtitle">
            Complete preparation guide for {examInfo.name} examination with topic-wise study materials, 
            practice questions, and mock tests based on official syllabus.
          </p>
          <div className="hero-actions">
            <Link to="/mphw/topics/reasoning" className="btn btn-primary btn-lg">
              Start Learning
            </Link>
            <Link to="/mphw/practice" className="btn btn-secondary btn-lg">
              Practice Test
            </Link>
            <a 
              href="https://hssc.gov.in/Syllabus/GROUP-32_M.P.H.W.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg"
            >
              📄 Official Syllabus
            </a>
          </div>
        </div>
      </section>

      {/* Exam Info Section */}
      <section className="exam-info-section">
        <div className="container">
          <div className="exam-info-grid">
            <div className="info-card">
              <span className="info-icon">📝</span>
              <span className="info-value">{examInfo.totalQuestions}</span>
              <span className="info-label">Questions</span>
            </div>
            <div className="info-card">
              <span className="info-icon">⏱️</span>
              <span className="info-value">{examInfo.duration}</span>
              <span className="info-label">Minutes</span>
            </div>
            <div className="info-card">
              <span className="info-icon">🎯</span>
              <span className="info-value">{examInfo.totalMarks}</span>
              <span className="info-label">Total Marks</span>
            </div>
            <div className="info-card">
              <span className="info-icon">❌</span>
              <span className="info-value">{examInfo.negativeMarking ? 'Yes' : 'No'}</span>
              <span className="info-label">Negative Marking</span>
            </div>
          </div>
          <div className="exam-mode-info">
            <span>📋 Mode: {examInfo.mode}</span>
            <span>🎓 Qualification: {examInfo.qualification}</span>
          </div>
        </div>
      </section>

      {/* Exam Pattern Section */}
      <section className="exam-pattern-section">
        <div className="container">
          <h2 className="section-title">Exam Pattern</h2>
          <p className="section-subtitle">Understand the exam structure to plan your preparation</p>
          
          <div className="pattern-cards">
            {examSections.map((section) => (
              <div 
                key={section.id} 
                className="pattern-card"
                style={{ '--section-color': section.color } as React.CSSProperties}
              >
                <div className="pattern-header">
                  <span className="pattern-icon">{section.icon}</span>
                  <div className="pattern-marks">
                    <span className="marks-value">{section.marks}</span>
                    <span className="marks-label">Marks</span>
                  </div>
                </div>
                <h3>{section.name}</h3>
                <p className="pattern-questions">{section.questions} Questions</p>
                <div className="pattern-subjects">
                  {section.subjects.map(subjectId => {
                    const subject = subjects.find(s => s.id === subjectId);
                    return subject ? (
                      <Link 
                        key={subject.id} 
                        to={`/mphw/topics/${subject.id}`}
                        className="subject-tag"
                      >
                        {subject.icon} {subject.name}
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Subjects Section */}
      <section className="syllabus-section">
        <div className="container">
          <h2 className="section-title">Complete Syllabus</h2>
          <p className="section-subtitle">Master each subject with our comprehensive study materials</p>
          
          <div className="syllabus-grid">
            {subjects.map((subject) => (
              <Link
                key={subject.id}
                to={`/mphw/topics/${subject.id}`}
                className="syllabus-card"
                style={{ '--accent-color': subject.color } as React.CSSProperties}
              >
                <div className="syllabus-card-header">
                  <span className="syllabus-icon">{subject.icon}</span>
                  <span className="topic-count">{subject.topics.length} Topics</span>
                </div>
                <h3>{subject.name}</h3>
                <p>{subject.description}</p>
                <div className="syllabus-meta">
                  <span className="meta-badge">{subject.questions} Qs</span>
                  <span className="meta-badge">{subject.marks} Marks</span>
                </div>
                <span className="card-action">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Prepare With Us?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="featured-course-section">
        <div className="container">
          <h2 className="section-title">🎓 Featured Course</h2>
          <Link to="/mphw/computer-knowledge" className="featured-course-card">
            <div className="featured-course-icon">💻</div>
            <div className="featured-course-content">
              <div className="featured-badge">Complete Course Available</div>
              <h3>Computer Knowledge</h3>
              <p>Master computer fundamentals, MS Office (Word, Excel, PowerPoint), Internet basics, digital literacy and cybersecurity - all with structured lessons and practice questions.</p>
              <div className="featured-stats">
                <span>📚 10 Lessons</span>
                <span>⏱️ 8+ Hours</span>
                <span>📝 1000+ Questions</span>
              </div>
            </div>
            <span className="featured-arrow">Start Learning →</span>
          </Link>
        </div>
      </section>

      <section className="quick-links-section">
        <div className="container">
          <h2 className="section-title">Quick Access</h2>
          <div className="quick-links-grid">
            <Link to="/mphw/computer-knowledge" className="quick-link-card featured">
              <span className="ql-icon">💻</span>
              <div className="ql-content">
                <h3>Computer Knowledge</h3>
                <p>10 lessons with full content ready</p>
              </div>
              <span className="ql-arrow">→</span>
            </Link>
            <Link to="/mphw/topics/reasoning" className="quick-link-card">
              <span className="ql-icon">🧩</span>
              <div className="ql-content">
                <h3>Reasoning Topics</h3>
                <p>14 comprehensive chapters with content</p>
              </div>
              <span className="ql-arrow">→</span>
            </Link>
            <Link to="/mphw/topics/public-health" className="quick-link-card">
              <span className="ql-icon">🏥</span>
              <div className="ql-content">
                <h3>Public Health</h3>
                <p>National programs, immunization & more</p>
              </div>
              <span className="ql-arrow">→</span>
            </Link>
            <Link to="/mphw/practice" className="quick-link-card">
              <span className="ql-icon">✍️</span>
              <div className="ql-content">
                <h3>Practice Tests</h3>
                <p>Topic-wise & full-length tests</p>
              </div>
              <span className="ql-arrow">→</span>
            </Link>
            <Link to="/mphw/articles" className="quick-link-card">
              <span className="ql-icon">📚</span>
              <div className="ql-content">
                <h3>Study Articles</h3>
                <p>Tips, strategies & guides</p>
              </div>
              <span className="ql-arrow">→</span>
            </Link>
            <Link to="/exam/hssc_mphw" className="quick-link-card">
              <span className="ql-icon">📝</span>
              <div className="ql-content">
                <h3>Full Mock Test</h3>
                <p>100 questions, 90 minutes</p>
              </div>
              <span className="ql-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Ace MPHW Exam?</h2>
            <p>Start with Reasoning - fully prepared with comprehensive content!</p>
            <Link to="/mphw/topics/reasoning" className="btn btn-primary btn-lg">
              Begin Preparation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MPHWPrep;
