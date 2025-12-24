import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ExamResult, Exam } from '../services/api';
import './Results.css';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { results, exam } = location.state as { results: ExamResult; exam: Exam } || {};

  if (!results) {
    return (
      <div className="container">
        <div className="no-results">
          <h2>No Results Found</h2>
          <p>Please complete a test first to see your results.</p>
          <Link to="/exams" className="btn btn-primary">
            Take a Test
          </Link>
        </div>
      </div>
    );
  }

  const getScoreClass = () => {
    if (results.score >= 80) return 'excellent';
    if (results.score >= 60) return 'good';
    if (results.score >= 40) return 'average';
    return 'needs-improvement';
  };

  const getScoreMessage = () => {
    if (results.score >= 80) return 'Excellent! Outstanding performance!';
    if (results.score >= 60) return 'Good job! Keep practicing!';
    if (results.score >= 40) return 'Average. More practice needed.';
    return 'Needs Improvement. Keep studying!';
  };

  return (
    <div className="results-page">
      <div className="container">
        <div className="results-header">
          <div className="results-icon">{exam?.icon || '📊'}</div>
          <h1>{exam?.name || 'Test'} Results</h1>
        </div>

        <div className="score-card card">
          <div className={`score-circle ${getScoreClass()}`}>
            <span className="score-value">{results.score}%</span>
            <span className="score-label">Score</span>
          </div>
          <p className="score-message">{getScoreMessage()}</p>
          
          <div className="stats-row">
            <div className="stat-item correct">
              <span className="stat-icon">✓</span>
              <span className="stat-number">{results.correct}</span>
              <span className="stat-text">Correct</span>
            </div>
            <div className="stat-item wrong">
              <span className="stat-icon">✗</span>
              <span className="stat-number">{results.wrong}</span>
              <span className="stat-text">Wrong</span>
            </div>
            <div className="stat-item unanswered">
              <span className="stat-icon">○</span>
              <span className="stat-number">{results.unanswered}</span>
              <span className="stat-text">Skipped</span>
            </div>
            <div className="stat-item total">
              <span className="stat-icon">Σ</span>
              <span className="stat-number">{results.total}</span>
              <span className="stat-text">Total</span>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button onClick={() => navigate('/exams')} className="btn btn-primary">
            Take Another Test
          </button>
          <Link to="/content" className="btn btn-secondary">
            Study Material
          </Link>
        </div>

        <div className="solutions-section">
          <h2>Detailed Solutions</h2>
          
          {results.results.map((result, index) => (
            <div key={index} className={`solution-card card ${result.status}`}>
              <div className="solution-header">
                <span className="question-num">Q{result.question_no}</span>
                <span className={`status-badge badge badge-${result.status === 'correct' ? 'success' : result.status === 'wrong' ? 'danger' : 'warning'}`}>
                  {result.status === 'correct' ? '✓ Correct' : result.status === 'wrong' ? '✗ Wrong' : '○ Skipped'}
                </span>
                <span className="category-badge badge badge-primary">{result.category}</span>
              </div>
              
              <h3 className="solution-question">{result.question}</h3>
              
              <div className="solution-options">
                {result.options.map((option, optIndex) => (
                  <div 
                    key={optIndex}
                    className={`solution-option ${optIndex === result.correct_answer ? 'correct' : ''} ${optIndex === result.user_answer && result.user_answer !== result.correct_answer ? 'wrong' : ''}`}
                  >
                    <span className="option-marker">{String.fromCharCode(65 + optIndex)}</span>
                    <span>{option}</span>
                    {optIndex === result.correct_answer && <span className="option-tag">✓ Correct</span>}
                    {optIndex === result.user_answer && result.user_answer !== result.correct_answer && (
                      <span className="option-tag wrong">Your Answer</span>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="explanation">
                <strong>Explanation:</strong> {result.explanation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
