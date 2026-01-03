import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getExamData } from '../../data/exams';
import './ExamTopicDetail.css';

interface Question {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: string;
}

interface TopicData {
  topic: string;
  subject: string;
  exam: string;
  description: string;
  theory: {
    introduction: string;
    keyPoints?: string[];
    types?: { name: string; description: string }[];
    solvingTips?: string[];
    [key: string]: unknown;
  };
  questions: Question[];
}

const ExamTopicDetail = () => {
  const { examId: paramExamId, subjectId, topicId } = useParams<{ examId: string; subjectId: string; topicId: string }>();
  const [topicData, setTopicData] = useState<TopicData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'theory' | 'practice'>('theory');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, wrong: 0, total: 0 });
  const location = window.location.pathname;
  
  // Handle legacy /mphw route
  const examId = paramExamId || (location.startsWith('/mphw') ? 'mphw' : undefined);
  const examData = examId ? getExamData(examId) : null;
  const subject = examData?.subjects.find(s => s.id === subjectId);
  const topic = subject?.topics.find(t => t.id === topicId);

  useEffect(() => {
    const fetchTopicData = async () => {
      if (!subjectId || !topicId || !examId) return;

      try {
        const response = await fetch(`/api/${examId}/content/${subjectId}/${topicId}`);
        if (!response.ok) {
          const staticResponse = await fetch(`/content/${examId.toUpperCase()}/${subjectId}/${topicId}.json`);
          if (!staticResponse.ok) throw new Error('Topic not found');
          const data = await staticResponse.json();
          setTopicData(data);
        } else {
          const data = await response.json();
          setTopicData(data);
        }
      } catch {
        setTopicData(getMockTopicData());
      } finally {
        setLoading(false);
      }
    };

    fetchTopicData();
  }, [examId, subjectId, topicId]);

  const getMockTopicData = (): TopicData => {
    const topicName = topic?.name || topicId?.replace(/-/g, ' ').replace(/^\d+\s*/, '').replace(/\b\w/g, l => l.toUpperCase()) || 'Topic';
    return {
      topic: topicName,
      subject: subject?.name || 'Subject',
      exam: examData?.examInfo.name || 'Exam',
      description: 'Master this topic with comprehensive theory and practice questions',
      theory: {
        introduction: 'This topic is essential for competitive exams. Understanding the core concepts and practicing regularly will help you score well.',
        keyPoints: [
          'Understand the basic patterns and types',
          'Practice with different difficulty levels',
          'Learn shortcuts and time-saving techniques',
          'Review explanations for wrong answers'
        ]
      },
      questions: [
        {
          id: 'Q1',
          question: 'Sample question for this topic. What is the correct answer?',
          options: ['Option A', 'Option B', 'Option C', 'Option D'],
          correct: 1,
          explanation: 'Option B is correct because it follows the standard pattern.',
          difficulty: 'easy'
        },
        {
          id: 'Q2',
          question: 'Another practice question to test your understanding.',
          options: ['First choice', 'Second choice', 'Third choice', 'Fourth choice'],
          correct: 2,
          explanation: 'The third option is correct based on the rule we discussed.',
          difficulty: 'medium'
        }
      ]
    };
  };

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null || !topicData) return;
    
    const isCorrect = selectedAnswer === topicData.questions[currentQuestion].correct;
    setScore(prev => ({
      ...prev,
      correct: prev.correct + (isCorrect ? 1 : 0),
      wrong: prev.wrong + (isCorrect ? 0 : 1),
      total: prev.total + 1
    }));
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (!topicData) return;
    if (currentQuestion < topicData.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const resetPractice = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore({ correct: 0, wrong: 0, total: 0 });
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading topic...</p>
        </div>
      </div>
    );
  }

  if (!examData || !subject || !topic || !topicData) {
    return (
      <div className="container">
        <div className="error-message">Topic not found</div>
        <Link to={`/prep/${examId}/topics/${subjectId}`} className="btn btn-primary" style={{ marginTop: '20px' }}>
          Back to Topics
        </Link>
      </div>
    );
  }

  const currentQ = topicData.questions[currentQuestion];

  return (
    <div className="exam-topic-detail-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to={`/prep/${examId}`}>{examData.examInfo.name} Prep</Link>
          <span>/</span>
          <Link to={`/prep/${examId}/topics/${subjectId}`}>{subject.name}</Link>
          <span>/</span>
          <span>{topicData.topic}</span>
        </nav>

        {/* Topic Header */}
        <div className="topic-header">
          <div className="topic-header-content">
            <h1>{topicData.topic}</h1>
            <p>{topicData.description}</p>
            <div className="topic-tags">
              <span className="tag">{topicData.subject}</span>
              <span className="tag">{topicData.exam}</span>
              <span className="tag">{topicData.questions.length} Questions</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'theory' ? 'active' : ''}`}
            onClick={() => setActiveTab('theory')}
          >
            📖 Theory & Concepts
          </button>
          <button 
            className={`tab-btn ${activeTab === 'practice' ? 'active' : ''}`}
            onClick={() => setActiveTab('practice')}
          >
            ✍️ Practice Questions
          </button>
        </div>

        {/* Content */}
        <div className="tab-content">
          {activeTab === 'theory' && (
            <div className="theory-section">
              <div className="theory-card">
                <h2>Introduction</h2>
                <p>{topicData.theory.introduction}</p>
              </div>

              {topicData.theory.keyPoints && (
                <div className="theory-card">
                  <h2>Key Points to Remember</h2>
                  <ul className="key-points">
                    {topicData.theory.keyPoints.map((point: string, index: number) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {topicData.theory.types && (
                <div className="theory-card">
                  <h2>Types & Examples</h2>
                  {topicData.theory.types.map((type, index: number) => (
                    <div key={index} className="type-block">
                      <h3>{type.name}</h3>
                      <p>{type.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {topicData.theory.solvingTips && (
                <div className="theory-card tips-card">
                  <h2>Solving Tips</h2>
                  <ul>
                    {topicData.theory.solvingTips.map((tip: string, index: number) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="theory-cta">
                <p>Ready to test your knowledge?</p>
                <button className="btn btn-primary" onClick={() => setActiveTab('practice')}>
                  Start Practice →
                </button>
              </div>
            </div>
          )}

          {activeTab === 'practice' && (
            <div className="practice-section">
              {/* Score Card */}
              <div className="score-card">
                <div className="score-item correct">
                  <span className="score-value">{score.correct}</span>
                  <span className="score-label">Correct</span>
                </div>
                <div className="score-item wrong">
                  <span className="score-value">{score.wrong}</span>
                  <span className="score-label">Wrong</span>
                </div>
                <div className="score-item total">
                  <span className="score-value">{currentQuestion + 1}/{topicData.questions.length}</span>
                  <span className="score-label">Progress</span>
                </div>
                <button className="reset-btn" onClick={resetPractice}>
                  🔄 Reset
                </button>
              </div>

              {/* Question Card */}
              <div className="question-card">
                <div className="question-header">
                  <span className="question-number">Question {currentQuestion + 1}</span>
                  <span className={`difficulty-badge ${currentQ.difficulty}`}>
                    {currentQ.difficulty}
                  </span>
                </div>
                <p className="question-text">{currentQ.question}</p>

                <div className="options-list">
                  {currentQ.options.map((option, index) => (
                    <button
                      key={index}
                      className={`option-btn ${selectedAnswer === index ? 'selected' : ''} 
                        ${showExplanation && index === currentQ.correct ? 'correct' : ''}
                        ${showExplanation && selectedAnswer === index && index !== currentQ.correct ? 'wrong' : ''}`}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation}
                    >
                      <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                      <span className="option-text">{option}</span>
                      {showExplanation && index === currentQ.correct && (
                        <span className="option-icon">✓</span>
                      )}
                      {showExplanation && selectedAnswer === index && index !== currentQ.correct && (
                        <span className="option-icon">✗</span>
                      )}
                    </button>
                  ))}
                </div>

                {!showExplanation && selectedAnswer !== null && (
                  <button className="btn btn-primary check-btn" onClick={handleCheckAnswer}>
                    Check Answer
                  </button>
                )}

                {showExplanation && (
                  <div className={`explanation-box ${selectedAnswer === currentQ.correct ? 'correct' : 'wrong'}`}>
                    <h4>{selectedAnswer === currentQ.correct ? '✓ Correct!' : '✗ Incorrect'}</h4>
                    <p>{currentQ.explanation}</p>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="question-navigation">
                <button 
                  className="btn btn-secondary"
                  onClick={handlePrevQuestion}
                  disabled={currentQuestion === 0}
                >
                  ← Previous
                </button>
                {currentQuestion < topicData.questions.length - 1 ? (
                  <button 
                    className="btn btn-primary"
                    onClick={handleNextQuestion}
                  >
                    Next →
                  </button>
                ) : (
                  <Link to={`/prep/${examId}/topics/${subjectId}`} className="btn btn-success">
                    Complete ✓
                  </Link>
                )}
              </div>

              {/* Question Palette */}
              <div className="question-palette">
                <h4>Question Palette</h4>
                <div className="palette-grid">
                  {topicData.questions.map((_, index) => (
                    <button
                      key={index}
                      className={`palette-btn ${index === currentQuestion ? 'current' : ''}`}
                      onClick={() => {
                        setCurrentQuestion(index);
                        setSelectedAnswer(null);
                        setShowExplanation(false);
                      }}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="bottom-nav">
          <Link to={`/prep/${examId}/topics/${subjectId}`} className="btn btn-secondary">
            ← Back to Topics
          </Link>
          <Link to={`/exam/${examData.examInfo.id}`} className="btn btn-primary">
            Full Practice Test →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExamTopicDetail;
