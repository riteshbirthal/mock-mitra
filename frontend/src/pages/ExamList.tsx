import { useState, useEffect } from 'react';
import { examApi, Exam } from '../services/api';
import ExamCard from '../components/ExamCard';
import './ExamList.css';

const ExamList = () => {
  const [exams, setExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await examApi.getAll();
        setExams(response.data.exams);
      } catch (err) {
        setError('Failed to load exams. Please check if the backend is running.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading exams...</p>
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
    <div className="exam-list-page">
      <div className="container">
        <div className="page-header">
          <h1>Mock Tests</h1>
          <p>Choose an exam category and test your knowledge with our comprehensive mock tests</p>
        </div>

        <div className="exam-grid">
          {exams.map((exam) => (
            <ExamCard key={exam._id} exam={exam} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamList;
