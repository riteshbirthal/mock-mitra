import { Link } from 'react-router-dom';
import { Exam } from '../services/api';
import './ExamCard.css';

interface ExamCardProps {
  exam: Exam;
}

const ExamCard = ({ exam }: ExamCardProps) => {
  return (
    <div className="exam-card card">
      <div className="exam-icon">{exam.icon}</div>
      <h3 className="exam-name">{exam.name}</h3>
      <p className="exam-description">{exam.description}</p>
      <div className="exam-meta">
        <span className="exam-meta-item">
          <span className="meta-icon">⏱️</span>
          {exam.duration} mins
        </span>
        <span className="exam-meta-item">
          <span className="meta-icon">📝</span>
          {exam.total_questions} Questions
        </span>
      </div>
      <Link to={`/exam/${exam._id}`} className="btn btn-primary exam-btn">
        Start Test
      </Link>
    </div>
  );
};

export default ExamCard;
