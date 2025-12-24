import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { examApi, Question, Exam } from '../services/api';
import Timer from '../components/Timer';
import QuestionCard from '../components/QuestionCard';
import './MockTest.css';

const MockTest = () => {
  const { examId } = useParams<{ examId: string }>();
  const navigate = useNavigate();
  
  const [exam, setExam] = useState<Exam | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [testStarted, setTestStarted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!examId) return;
      
      try {
        const [examRes, questionsRes] = await Promise.all([
          examApi.getById(examId),
          examApi.getQuestions(examId)
        ]);
        setExam(examRes.data);
        setQuestions(questionsRes.data.questions);
      } catch (err) {
        setError('Failed to load test. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [examId]);

  const handleSubmit = useCallback(async () => {
    if (!examId || submitting) return;
    
    setSubmitting(true);
    try {
      const questionIds = questions.map(q => q._id);
      const response = await examApi.submit(examId, answers, questionIds);
      navigate('/results', { state: { results: response.data, exam } });
    } catch (err) {
      setError('Failed to submit test. Please try again.');
      console.error(err);
      setSubmitting(false);
    }
  }, [examId, answers, exam, navigate, submitting, questions]);

  const handleTimeUp = useCallback(() => {
    alert('Time is up! Submitting your test...');
    handleSubmit();
  }, [handleSubmit]);

  const handleSelectAnswer = (answer: number) => {
    setAnswers(prev => ({ ...prev, [currentIndex]: answer }));
  };

  const getQuestionStatus = (index: number) => {
    if (index === currentIndex) return 'current';
    if (answers[index] !== undefined) return 'answered';
    return 'unanswered';
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading test...</p>
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

  if (!testStarted && exam) {
    return (
      <div className="container">
        <div className="test-intro">
          <div className="intro-icon">{exam.icon}</div>
          <h1>{exam.name} Mock Test</h1>
          <p className="intro-desc">{exam.description}</p>
          
          <div className="intro-info">
            <div className="info-item">
              <span className="info-icon">📝</span>
              <span className="info-label">Total Questions</span>
              <span className="info-value">{questions.length}</span>
            </div>
            <div className="info-item">
              <span className="info-icon">⏱️</span>
              <span className="info-label">Duration</span>
              <span className="info-value">{exam.duration} minutes</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📊</span>
              <span className="info-label">Marking</span>
              <span className="info-value">No negative marking</span>
            </div>
          </div>

          <div className="intro-rules">
            <h3>Instructions:</h3>
            <ul>
              <li>Click on an option to select your answer</li>
              <li>Use the question palette to navigate between questions</li>
              <li>You can change your answer before submitting</li>
              <li>Test will auto-submit when time is up</li>
            </ul>
          </div>

          <button 
            className="btn btn-primary btn-lg"
            onClick={() => setTestStarted(true)}
          >
            Start Test
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="mock-test">
      <div className="test-header">
        <div className="container test-header-content">
          <h2 className="test-title">{exam?.name}</h2>
          <Timer duration={exam?.duration || 60} onTimeUp={handleTimeUp} />
        </div>
      </div>

      <div className="container test-content">
        <div className="test-main">
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={answers[currentIndex] ?? -1}
            onSelectAnswer={handleSelectAnswer}
          />

          <div className="test-navigation">
            <button
              className="btn btn-secondary"
              onClick={() => setCurrentIndex(prev => prev - 1)}
              disabled={currentIndex === 0}
            >
              ← Previous
            </button>
            
            {currentIndex < questions.length - 1 ? (
              <button
                className="btn btn-primary"
                onClick={() => setCurrentIndex(prev => prev + 1)}
              >
                Next →
              </button>
            ) : (
              <button
                className="btn btn-success"
                onClick={handleSubmit}
                disabled={submitting}
              >
                {submitting ? 'Submitting...' : 'Submit Test'}
              </button>
            )}
          </div>
        </div>

        <div className="test-sidebar">
          <div className="sidebar-card">
            <h3>Question Palette</h3>
            <div className="question-palette">
              {questions.map((_, index) => (
                <button
                  key={index}
                  className={`palette-btn ${getQuestionStatus(index)}`}
                  onClick={() => setCurrentIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <div className="palette-legend">
              <div className="legend-item">
                <span className="legend-dot current"></span>
                <span>Current</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot answered"></span>
                <span>Answered</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot unanswered"></span>
                <span>Not Answered</span>
              </div>
            </div>
          </div>

          <div className="sidebar-card stats-card">
            <div className="stat">
              <span className="stat-value">{answeredCount}</span>
              <span className="stat-label">Answered</span>
            </div>
            <div className="stat">
              <span className="stat-value">{questions.length - answeredCount}</span>
              <span className="stat-label">Remaining</span>
            </div>
          </div>

          <button
            className="btn btn-success btn-lg submit-btn"
            onClick={handleSubmit}
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit Test'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MockTest;
