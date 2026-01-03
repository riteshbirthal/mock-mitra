import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Question, getQuestionsByDifficulty } from '../../data/questionBanks/types';
import './MockTestComponent.css';

interface MockTestComponentProps {
  questions: Question[];
  testDuration?: number; // in minutes
  questionCount?: number;
  onComplete?: (score: number, total: number, timeSpent: number) => void;
}

export default function MockTestComponent({ 
  questions, 
  testDuration = 30,
  questionCount = 30,
  onComplete 
}: MockTestComponentProps) {
  const { isHindi } = useLanguage();
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [testQuestions, setTestQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(testDuration * 60);
  const [questionLang, setQuestionLang] = useState<'en' | 'hi' | 'app'>('app');
  const [showReview, setShowReview] = useState(false);
  const [markedForReview, setMarkedForReview] = useState<number[]>([]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (testStarted && !testCompleted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            submitTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [testStarted, testCompleted, timeLeft]);

  const startTest = () => {
    // Use balanced difficulty for mock tests - 40% easy, 40% medium, 20% hard
    const easyCount = Math.ceil(questionCount * 0.4);
    const mediumCount = Math.ceil(questionCount * 0.4);
    const hardCount = Math.max(0, questionCount - easyCount - mediumCount);
    
    const selected = getQuestionsByDifficulty(questions, easyCount, mediumCount, hardCount);
    
    setTestQuestions(selected);
    setAnswers(new Array(selected.length).fill(null));
    setTestStarted(true);
    setTimeLeft(testDuration * 60);
    setMarkedForReview([]);
  };

  const selectAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const toggleMarkForReview = () => {
    if (markedForReview.includes(currentQuestion)) {
      setMarkedForReview(markedForReview.filter(q => q !== currentQuestion));
    } else {
      setMarkedForReview([...markedForReview, currentQuestion]);
    }
  };

  const submitTest = () => {
    setTestCompleted(true);
    const finalScore = answers.reduce((acc: number, answer, index) => {
      if (answer === testQuestions[index]?.correctAnswer) {
        return acc + 1;
      }
      return acc;
    }, 0);
    
    if (onComplete) {
      onComplete(finalScore, testQuestions.length, testDuration * 60 - timeLeft);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getDisplayLanguage = () => {
    if (questionLang === 'app') return isHindi;
    return questionLang === 'hi';
  };

  const displayHindi = getDisplayLanguage();

  const answeredCount = answers.filter(a => a !== null).length;
  const unansweredCount = testQuestions.length - answeredCount;

  if (!testStarted) {
    return (
      <div className="mock-test-start">
        <div className="test-start-content">
          <div className="test-icon">📋</div>
          <h2>{isHindi ? 'मॉक टेस्ट' : 'Mock Test'}</h2>
          <p>{isHindi ? 'वास्तविक परीक्षा जैसा अनुभव' : 'Real exam-like experience'}</p>
          
          <div className="test-info">
            <div className="info-card">
              <span className="info-icon">❓</span>
              <span className="info-value">{Math.min(questionCount, questions.length)}</span>
              <span className="info-label">{isHindi ? 'प्रश्न' : 'Questions'}</span>
            </div>
            <div className="info-card">
              <span className="info-icon">⏱️</span>
              <span className="info-value">{testDuration}</span>
              <span className="info-label">{isHindi ? 'मिनट' : 'Minutes'}</span>
            </div>
            <div className="info-card">
              <span className="info-icon">📊</span>
              <span className="info-value">1</span>
              <span className="info-label">{isHindi ? 'अंक/प्रश्न' : 'Mark/Q'}</span>
            </div>
          </div>

          <div className="test-rules">
            <h4>{isHindi ? 'निर्देश:' : 'Instructions:'}</h4>
            <ul>
              <li>{isHindi ? 'प्रत्येक प्रश्न 1 अंक का है' : 'Each question carries 1 mark'}</li>
              <li>{isHindi ? 'कोई नकारात्मक अंकन नहीं है' : 'No negative marking'}</li>
              <li>{isHindi ? 'समय समाप्त होने पर टेस्ट स्वतः सबमिट हो जाएगा' : 'Test auto-submits when time ends'}</li>
              <li>{isHindi ? 'आप किसी भी प्रश्न पर जा सकते हैं' : 'You can navigate to any question'}</li>
            </ul>
          </div>

          <div className="language-selector">
            <label>{isHindi ? 'प्रश्न भाषा:' : 'Question Language:'}</label>
            <div className="lang-options">
              <button 
                className={`lang-btn ${questionLang === 'app' ? 'active' : ''}`}
                onClick={() => setQuestionLang('app')}
              >
                {isHindi ? 'ऐप भाषा' : 'App Language'}
              </button>
              <button 
                className={`lang-btn ${questionLang === 'en' ? 'active' : ''}`}
                onClick={() => setQuestionLang('en')}
              >
                English
              </button>
              <button 
                className={`lang-btn ${questionLang === 'hi' ? 'active' : ''}`}
                onClick={() => setQuestionLang('hi')}
              >
                हिंदी
              </button>
            </div>
          </div>

          <button className="btn btn-primary btn-lg" onClick={startTest}>
            {isHindi ? 'टेस्ट शुरू करें' : 'Start Test'}
          </button>
        </div>
      </div>
    );
  }

  if (testCompleted) {
    const score = answers.reduce((acc: number, answer, index) => {
      if (answer === testQuestions[index]?.correctAnswer) return acc + 1;
      return acc;
    }, 0);
    const percentage = testQuestions.length > 0 ? Math.round((score / testQuestions.length) * 100) : 0;
    const timeSpent = testDuration * 60 - timeLeft;

    if (showReview) {
      return (
        <div className="test-review">
          <div className="review-header">
            <h2>{isHindi ? 'उत्तर समीक्षा' : 'Answer Review'}</h2>
            <button className="btn btn-secondary" onClick={() => setShowReview(false)}>
              {isHindi ? 'परिणाम पर वापस' : 'Back to Results'}
            </button>
          </div>
          
          <div className="review-questions">
            {testQuestions.map((question, index) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              const options = displayHindi ? question.optionsHi : question.optionsEn;
              
              return (
                <div key={index} className={`review-question ${isCorrect ? 'correct' : 'wrong'}`}>
                  <div className="review-q-header">
                    <span className="q-number">Q{index + 1}</span>
                    <span className={`q-status ${isCorrect ? 'correct' : 'wrong'}`}>
                      {isCorrect ? '✓' : '✗'}
                    </span>
                  </div>
                  <p className="q-text">
                    {displayHindi ? question.questionHi : question.questionEn}
                  </p>
                  <div className="review-options">
                    {options.map((option, optIndex) => (
                      <div 
                        key={optIndex}
                        className={`review-option ${
                          optIndex === question.correctAnswer ? 'correct-answer' : ''
                        } ${userAnswer === optIndex && optIndex !== question.correctAnswer ? 'user-wrong' : ''}`}
                      >
                        <span className="opt-letter">{String.fromCharCode(65 + optIndex)}</span>
                        {option}
                        {optIndex === question.correctAnswer && <span className="correct-mark">✓</span>}
                        {userAnswer === optIndex && optIndex !== question.correctAnswer && (
                          <span className="wrong-mark">✗</span>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="explanation-box">
                    <strong>{isHindi ? 'व्याख्या:' : 'Explanation:'}</strong>
                    <p>{displayHindi ? question.explanationHi : question.explanationEn}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <div className="test-result">
        <div className="result-content">
          <div className="result-header">
            <div className="result-icon">
              {percentage >= 70 ? '🏆' : percentage >= 50 ? '🎯' : '📖'}
            </div>
            <h2>{isHindi ? 'टेस्ट पूर्ण!' : 'Test Complete!'}</h2>
          </div>

          <div className="score-card">
            <div className="main-score">
              <div className="score-ring">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" className="bg-circle"/>
                  <circle 
                    cx="50" cy="50" r="45" 
                    className="progress-circle"
                    style={{ 
                      strokeDasharray: `${percentage * 2.83} 283`,
                      stroke: percentage >= 70 ? '#48bb78' : percentage >= 50 ? '#667eea' : '#ed8936'
                    }}
                  />
                </svg>
                <div className="score-text">
                  <span className="score-num">{percentage}%</span>
                </div>
              </div>
              <div className="score-details">
                <span className="score-fraction">{score}/{testQuestions.length}</span>
                <span className="score-label">{isHindi ? 'सही उत्तर' : 'Correct Answers'}</span>
              </div>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-icon">✓</span>
              <span className="stat-value correct">{score}</span>
              <span className="stat-label">{isHindi ? 'सही' : 'Correct'}</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">✗</span>
              <span className="stat-value wrong">{answeredCount - score}</span>
              <span className="stat-label">{isHindi ? 'गलत' : 'Wrong'}</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">○</span>
              <span className="stat-value skipped">{unansweredCount}</span>
              <span className="stat-label">{isHindi ? 'छोड़े' : 'Skipped'}</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">⏱</span>
              <span className="stat-value">{formatTime(timeSpent)}</span>
              <span className="stat-label">{isHindi ? 'समय' : 'Time'}</span>
            </div>
          </div>

          <div className="result-actions">
            <button className="btn btn-primary" onClick={() => setShowReview(true)}>
              {isHindi ? 'उत्तर देखें' : 'View Answers'}
            </button>
            <button className="btn btn-secondary" onClick={() => {
              setTestStarted(false);
              setTestCompleted(false);
            }}>
              {isHindi ? 'नया टेस्ट' : 'New Test'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = testQuestions[currentQuestion];
  const options = displayHindi ? question.optionsHi : question.optionsEn;

  return (
    <div className="mock-test">
      <div className="test-header">
        <div className="timer-section">
          <span className={`timer ${timeLeft < 60 ? 'danger' : timeLeft < 300 ? 'warning' : ''}`}>
            ⏱️ {formatTime(timeLeft)}
          </span>
        </div>
        <div className="test-status">
          <span className="status-item answered">{answeredCount} {isHindi ? 'उत्तर दिए' : 'Answered'}</span>
          <span className="status-item remaining">{unansweredCount} {isHindi ? 'शेष' : 'Remaining'}</span>
        </div>
        <button 
          className="btn btn-danger btn-sm submit-btn"
          onClick={() => {
            if (confirm(isHindi ? 'क्या आप टेस्ट सबमिट करना चाहते हैं?' : 'Are you sure you want to submit?')) {
              submitTest();
            }
          }}
        >
          {isHindi ? 'सबमिट करें' : 'Submit Test'}
        </button>
      </div>

      <div className="test-body">
        <div className="question-nav">
          <h4>{isHindi ? 'प्रश्न नेविगेशन' : 'Question Navigation'}</h4>
          <div className="nav-grid">
            {testQuestions.map((_, index) => (
              <button
                key={index}
                className={`nav-btn ${
                  currentQuestion === index ? 'current' : ''
                } ${answers[index] !== null ? 'answered' : ''} ${
                  markedForReview.includes(index) ? 'marked' : ''
                }`}
                onClick={() => setCurrentQuestion(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="nav-legend">
            <span className="legend-item"><span className="legend-color current"></span> {isHindi ? 'वर्तमान' : 'Current'}</span>
            <span className="legend-item"><span className="legend-color answered"></span> {isHindi ? 'उत्तर दिया' : 'Answered'}</span>
            <span className="legend-item"><span className="legend-color marked"></span> {isHindi ? 'चिह्नित' : 'Marked'}</span>
          </div>
        </div>

        <div className="question-section">
          <div className="q-header">
            <span className="q-num">{isHindi ? 'प्रश्न' : 'Question'} {currentQuestion + 1}/{testQuestions.length}</span>
            <button 
              className="toggle-lang-btn"
              onClick={() => setQuestionLang(displayHindi ? 'en' : 'hi')}
            >
              {displayHindi ? 'EN' : 'हि'}
            </button>
          </div>

          <h3 className="q-text">
            {displayHindi ? question.questionHi : question.questionEn}
          </h3>

          <div className="options">
            {options.map((option, index) => (
              <button
                key={index}
                className={`option ${answers[currentQuestion] === index ? 'selected' : ''}`}
                onClick={() => selectAnswer(index)}
              >
                <span className="opt-letter">{String.fromCharCode(65 + index)}</span>
                <span className="opt-text">{option}</span>
              </button>
            ))}
          </div>

          <div className="q-actions">
            <button 
              className={`btn btn-outline mark-btn ${markedForReview.includes(currentQuestion) ? 'marked' : ''}`}
              onClick={toggleMarkForReview}
            >
              {markedForReview.includes(currentQuestion) 
                ? (isHindi ? '✓ समीक्षा के लिए चिह्नित' : '✓ Marked for Review')
                : (isHindi ? 'समीक्षा के लिए चिह्नित करें' : 'Mark for Review')}
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => {
                const newAnswers = [...answers];
                newAnswers[currentQuestion] = null;
                setAnswers(newAnswers);
              }}
              disabled={answers[currentQuestion] === null}
            >
              {isHindi ? 'उत्तर हटाएं' : 'Clear Answer'}
            </button>
          </div>

          <div className="q-navigation">
            <button 
              className="btn btn-secondary"
              disabled={currentQuestion === 0}
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
            >
              ← {isHindi ? 'पिछला' : 'Previous'}
            </button>
            <button 
              className="btn btn-primary"
              disabled={currentQuestion === testQuestions.length - 1}
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
            >
              {isHindi ? 'अगला' : 'Next'} →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
