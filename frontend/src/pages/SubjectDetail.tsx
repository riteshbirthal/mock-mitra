import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { subjectApi, Subject, Content } from '../services/api';
import './SubjectDetail.css';

const SubjectDetail = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [subject, setSubject] = useState<Subject | null>(null);
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSubject = async () => {
      if (!subjectId) return;
      
      try {
        const response = await subjectApi.getById(subjectId);
        setSubject(response.data.subject);
        setContents(response.data.contents);
      } catch (err) {
        setError('Failed to load subject. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubject();
  }, [subjectId]);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading subject...</p>
        </div>
      </div>
    );
  }

  if (error || !subject) {
    return (
      <div className="container">
        <div className="error-message">{error || 'Subject not found'}</div>
        <Link to="/subjects" className="btn btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>
          Back to Subjects
        </Link>
      </div>
    );
  }

  return (
    <div className="subject-detail-page">
      <div className="container">
        <Link to="/subjects" className="back-link">
          ← Back to Subjects
        </Link>

        <div 
          className="subject-hero"
          style={{ '--subject-color': subject.color } as React.CSSProperties}
        >
          <div className="hero-icon">{subject.icon}</div>
          <div className="hero-info">
            <h1>{subject.name}</h1>
            <p>{subject.description}</p>
          </div>
        </div>

        <div className="subject-content">
          <div className="topics-section">
            <h2>Topics Covered</h2>
            <div className="topics-grid">
              {subject.topics.map((topic, index) => (
                <div key={index} className="topic-card">
                  <span className="topic-number">{index + 1}</span>
                  <span className="topic-name">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="materials-section">
            <h2>Study Materials</h2>
            {contents.length > 0 ? (
              <div className="materials-list">
                {contents.map((content) => (
                  <Link
                    key={content._id}
                    to={`/content/${content._id}`}
                    className="material-card card"
                  >
                    <div className="material-info">
                      <h3>{content.title}</h3>
                      <span className="material-category badge badge-primary">
                        {content.category}
                      </span>
                    </div>
                    <span className="material-arrow">Read →</span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="no-materials">
                <p>Study materials coming soon!</p>
              </div>
            )}
          </div>

          <div className="cta-section">
            <h2>Ready to Test Your Knowledge?</h2>
            <p>Practice with mock tests to strengthen your understanding</p>
            <Link to="/exams" className="btn btn-primary btn-lg">
              Take Mock Test
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetail;
