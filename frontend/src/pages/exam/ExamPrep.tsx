import { Link, useParams } from 'react-router-dom';
import { getExamData } from '../../data/exams';
import './ExamPrep.css';

const features = [
  { icon: '📖', title: 'Topic-wise Study', desc: 'Comprehensive notes for each topic' },
  { icon: '✍️', title: 'Practice Questions', desc: 'Topic-wise MCQs with explanations' },
  { icon: '📝', title: 'Mock Tests', desc: 'Full-length tests simulating real exam' },
  { icon: '📊', title: 'Progress Tracking', desc: 'Track your preparation journey' },
  { icon: '💡', title: 'Tips & Strategies', desc: 'Expert guidance for exam success' },
  { icon: '📱', title: 'Mobile Friendly', desc: 'Study anytime, anywhere' },
];

const ExamPrep = () => {
  const { examId: paramExamId } = useParams<{ examId: string }>();
  const location = window.location.pathname;
  
  // Handle legacy /mphw route
  const examId = paramExamId || (location.startsWith('/mphw') ? 'mphw' : undefined);
  const examData = examId ? getExamData(examId) : null;

  if (!examData) {
    return (
      <div className="container">
        <div className="error-message">
          <h2>Exam not found</h2>
          <p>The exam you're looking for doesn't exist.</p>
        </div>
        <Link to="/exams" className="btn btn-primary" style={{ marginTop: '20px' }}>
          Back to Exams
        </Link>
      </div>
    );
  }

  const { examInfo, subjects, examSections } = examData;

  return (
    <div className="exam-prep-page">
      {/* Hero Section */}
      <section className="exam-hero">
        <div className="container">
          <div className="hero-badge">{examInfo.organization}</div>
          <h1 className="hero-title">
            <span className="hero-icon">{examInfo.icon}</span>
            {examInfo.fullName}
          </h1>
          <p className="hero-subtitle">{examInfo.description}</p>
          <div className="hero-actions">
            <Link to={`/prep/${examId}/topics/${subjects[0]?.id}`} className="btn btn-primary btn-lg">
              Start Learning
            </Link>
            <Link to={`/exam/${examInfo.id}`} className="btn btn-secondary btn-lg">
              Practice Test
            </Link>
            {examInfo.officialSyllabusUrl && (
              <a 
                href={examInfo.officialSyllabusUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                📄 Official Syllabus
              </a>
            )}
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
                        to={`/prep/${examId}/topics/${subject.id}`}
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
                to={`/prep/${examId}/topics/${subject.id}`}
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
      <section className="quick-links-section">
        <div className="container">
          <h2 className="section-title">Quick Access</h2>
          <div className="quick-links-grid">
            {subjects.slice(0, 4).map((subject) => (
              <Link key={subject.id} to={`/prep/${examId}/topics/${subject.id}`} className="quick-link-card">
                <span className="ql-icon">{subject.icon}</span>
                <div className="ql-content">
                  <h3>{subject.name}</h3>
                  <p>{subject.topics.length} topics available</p>
                </div>
                <span className="ql-arrow">→</span>
              </Link>
            ))}
            <Link to={`/exam/${examInfo.id}`} className="quick-link-card">
              <span className="ql-icon">📝</span>
              <div className="ql-content">
                <h3>Full Mock Test</h3>
                <p>{examInfo.totalQuestions} questions, {examInfo.duration} minutes</p>
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
            <h2>Ready to Ace {examInfo.name} Exam?</h2>
            <p>Start with {subjects[0]?.name} - begin your preparation journey!</p>
            <Link to={`/prep/${examId}/topics/${subjects[0]?.id}`} className="btn btn-primary btn-lg">
              Begin Preparation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExamPrep;
