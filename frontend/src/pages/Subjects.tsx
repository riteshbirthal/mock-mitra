import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { subjectApi, Subject } from '../services/api';
import './Subjects.css';

const Subjects = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await subjectApi.getAll();
        setSubjects(response.data.subjects);
      } catch (err) {
        setError('Failed to load subjects. Please check if the backend is running.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading subjects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="subjects-page">
      <div className="container">
        <div className="page-header">
          <h1>Study by Subject</h1>
          <p>Choose a subject to explore comprehensive study materials and notes</p>
        </div>

        <div className="subjects-grid">
          {subjects.map((subject) => (
            <Link
              key={subject._id}
              to={`/subjects/${subject._id}`}
              className="subject-card"
              style={{ '--subject-color': subject.color } as React.CSSProperties}
            >
              <div className="subject-icon">{subject.icon}</div>
              <div className="subject-info">
                <h3>{subject.name}</h3>
                <p>{subject.description}</p>
                <div className="subject-topics">
                  {subject.topics.slice(0, 3).map((topic, index) => (
                    <span key={index} className="topic-tag">{topic}</span>
                  ))}
                  {subject.topics.length > 3 && (
                    <span className="topic-more">+{subject.topics.length - 3} more</span>
                  )}
                </div>
              </div>
              <span className="subject-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
