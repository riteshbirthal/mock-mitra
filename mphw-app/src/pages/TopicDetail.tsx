import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { getSubjectById, getTopicById } from '../data/examData';
import { sampleQuestions } from '../data/sampleQuestions';
import './TopicDetail.css';

const TopicDetail = () => {
  const { subjectId, topicId } = useParams<{ subjectId: string; topicId: string }>();
  const { t, isHindi } = useLanguage();
  const { recordAnswer, markTopicComplete, getTopicProgress, isBookmarked, addBookmark, removeBookmark } = useProgress();
  
  const [activeTab, setActiveTab] = useState<'theory' | 'practice'>('theory');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [startTime] = useState(Date.now());

  const subject = subjectId ? getSubjectById(subjectId) : null;
  const topic = subjectId && topicId ? getTopicById(subjectId, topicId) : null;
  const topicProgressId = `${subjectId}-${topicId}`;
  const topicProgress = getTopicProgress(topicProgressId);

  const questions = sampleQuestions[`${subjectId}-${topicId}`] || sampleQuestions['default'];

  if (!subject || !topic) {
    return (
      <div className="container">
        <div className="error-message">
          <h2>{isHindi ? 'टॉपिक नहीं मिला' : 'Topic not found'}</h2>
          <Link to="/syllabus" className="btn btn-primary mt-3">
            {t('btn.backToTopics')}
          </Link>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    
    const isCorrect = selectedAnswer === questions[currentQuestion].correct;
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    
    recordAnswer(topicProgressId, isCorrect, timeSpent);
    
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      wrong: prev.wrong + (isCorrect ? 0 : 1)
    }));
    
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      markTopicComplete(topicProgressId);
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
    setScore({ correct: 0, wrong: 0 });
  };

  const currentQ = questions[currentQuestion];
  const questionId = `${topicProgressId}-${currentQ.id}`;
  const bookmarked = isBookmarked(questionId);

  const toggleBookmark = () => {
    if (bookmarked) {
      removeBookmark(questionId);
    } else {
      addBookmark(questionId);
    }
  };

  return (
    <div className="topic-detail-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/syllabus">{t('nav.syllabus')}</Link>
          <span>/</span>
          <Link to={`/topics/${subjectId}`}>{isHindi ? subject.name.hi : subject.name.en}</Link>
          <span>/</span>
          <span>{isHindi ? topic.name.hi : topic.name.en}</span>
        </nav>

        {/* Topic Header */}
        <div 
          className="topic-header"
          style={{ '--topic-color': topic.color } as React.CSSProperties}
        >
          <div className="topic-header-main">
            <span className="topic-icon">{topic.icon}</span>
            <div className="topic-header-info">
              <h1>{isHindi ? topic.name.hi : topic.name.en}</h1>
              <p>{isHindi ? topic.description.hi : topic.description.en}</p>
              <div className="topic-badges">
                <span className="badge badge-primary">{isHindi ? subject.name.hi : subject.name.en}</span>
                <span className={`badge badge-${topic.difficulty.toLowerCase()}`}>
                  {isHindi 
                    ? topic.difficulty === 'Easy' ? 'आसान' : topic.difficulty === 'Medium' ? 'मध्यम' : 'कठिन'
                    : topic.difficulty}
                </span>
                <span className="badge badge-info">{topic.questionsCount} {isHindi ? 'प्रश्न' : 'Questions'}</span>
              </div>
            </div>
          </div>

          {topicProgress && (
            <div className="topic-stats">
              <div className="stat-item">
                <span className="stat-value">{topicProgress.questionsAttempted}</span>
                <span className="stat-label">{t('practice.attempted')}</span>
              </div>
              <div className="stat-item correct">
                <span className="stat-value">{topicProgress.correctAnswers}</span>
                <span className="stat-label">{t('practice.correct')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">
                  {topicProgress.questionsAttempted > 0 
                    ? Math.round((topicProgress.correctAnswers / topicProgress.questionsAttempted) * 100)
                    : 0}%
                </span>
                <span className="stat-label">{t('practice.accuracy')}</span>
              </div>
            </div>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'theory' ? 'active' : ''}`}
            onClick={() => setActiveTab('theory')}
          >
            📖 {isHindi ? 'थ्योरी और कॉन्सेप्ट' : 'Theory & Concepts'}
          </button>
          <button 
            className={`tab-btn ${activeTab === 'practice' ? 'active' : ''}`}
            onClick={() => setActiveTab('practice')}
          >
            ✍️ {isHindi ? 'अभ्यास प्रश्न' : 'Practice Questions'}
          </button>
        </div>

        {/* Content */}
        <div className="tab-content">
          {activeTab === 'theory' && (
            <div className="theory-section">
              <div className="theory-card">
                <h2>{isHindi ? 'परिचय' : 'Introduction'}</h2>
                <p>
                  {isHindi 
                    ? `यह टॉपिक ${subject.name.hi} का एक महत्वपूर्ण भाग है। इसे अच्छे से समझें और नियमित अभ्यास करें।`
                    : `This topic is an important part of ${subject.name.en}. Understand it well and practice regularly.`}
                </p>
              </div>

              <div className="theory-card">
                <h2>{isHindi ? 'मुख्य बिंदु' : 'Key Points'}</h2>
                <ul className="key-points">
                  <li>{isHindi ? 'मूल अवधारणाओं को समझें' : 'Understand the basic concepts'}</li>
                  <li>{isHindi ? 'विभिन्न कठिनाई स्तरों पर अभ्यास करें' : 'Practice with different difficulty levels'}</li>
                  <li>{isHindi ? 'शॉर्टकट और समय बचाने की तकनीकें सीखें' : 'Learn shortcuts and time-saving techniques'}</li>
                  <li>{isHindi ? 'गलत उत्तरों की व्याख्या देखें' : 'Review explanations for wrong answers'}</li>
                </ul>
              </div>

              <div className="theory-card tips-card">
                <h2>{isHindi ? 'परीक्षा टिप्स' : 'Exam Tips'}</h2>
                <ul>
                  <li>{isHindi 
                    ? 'प्रश्न को ध्यान से पढ़ें और सभी विकल्पों की जाँच करें' 
                    : 'Read the question carefully and check all options'}</li>
                  <li>{isHindi 
                    ? 'समय प्रबंधन पर ध्यान दें - प्रति प्रश्न लगभग 54 सेकंड' 
                    : 'Focus on time management - about 54 seconds per question'}</li>
                  <li>{isHindi 
                    ? 'कठिन प्रश्नों को छोड़ दें और बाद में वापस आएं' 
                    : 'Skip difficult questions and come back later'}</li>
                </ul>
              </div>

              <div className="theory-cta">
                <p>{isHindi ? 'अपना ज्ञान परीक्षण करने के लिए तैयार हैं?' : 'Ready to test your knowledge?'}</p>
                <button className="btn btn-primary" onClick={() => setActiveTab('practice')}>
                  {t('btn.startPractice')} →
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
                  <span className="score-label">{t('practice.correct')}</span>
                </div>
                <div className="score-item wrong">
                  <span className="score-value">{score.wrong}</span>
                  <span className="score-label">{t('practice.incorrect')}</span>
                </div>
                <div className="score-item total">
                  <span className="score-value">{currentQuestion + 1}/{questions.length}</span>
                  <span className="score-label">{isHindi ? 'प्रगति' : 'Progress'}</span>
                </div>
                <button className="reset-btn" onClick={resetPractice} title="Reset">
                  🔄
                </button>
              </div>

              {/* Question Card */}
              <div className="question-card">
                <div className="question-header">
                  <span className="question-number">
                    {isHindi ? 'प्रश्न' : 'Question'} {currentQuestion + 1}
                  </span>
                  <div className="question-actions">
                    <button 
                      className={`bookmark-btn ${bookmarked ? 'active' : ''}`}
                      onClick={toggleBookmark}
                      title={bookmarked ? 'Remove bookmark' : 'Bookmark'}
                    >
                      {bookmarked ? '🔖' : '📑'}
                    </button>
                    <span className={`difficulty-badge ${currentQ.difficulty}`}>
                      {isHindi 
                        ? currentQ.difficulty === 'easy' ? 'आसान' : currentQ.difficulty === 'medium' ? 'मध्यम' : 'कठिन'
                        : currentQ.difficulty}
                    </span>
                  </div>
                </div>

                <p className="question-text">
                  {isHindi ? currentQ.question.hi : currentQ.question.en}
                </p>

                <div className="options-list">
                  {currentQ.options.map((option, index) => (
                    <button
                      key={index}
                      className={`option-btn 
                        ${selectedAnswer === index ? 'selected' : ''} 
                        ${showExplanation && index === currentQ.correct ? 'correct' : ''}
                        ${showExplanation && selectedAnswer === index && index !== currentQ.correct ? 'wrong' : ''}`}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation}
                    >
                      <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                      <span className="option-text">{isHindi ? option.hi : option.en}</span>
                      {showExplanation && index === currentQ.correct && (
                        <span className="option-icon correct">✓</span>
                      )}
                      {showExplanation && selectedAnswer === index && index !== currentQ.correct && (
                        <span className="option-icon wrong">✗</span>
                      )}
                    </button>
                  ))}
                </div>

                {!showExplanation && selectedAnswer !== null && (
                  <button className="btn btn-primary check-btn" onClick={handleCheckAnswer}>
                    {t('btn.check')}
                  </button>
                )}

                {showExplanation && (
                  <div className={`explanation-box ${selectedAnswer === currentQ.correct ? 'correct' : 'wrong'}`}>
                    <h4>
                      {selectedAnswer === currentQ.correct 
                        ? (isHindi ? '✓ सही!' : '✓ Correct!') 
                        : (isHindi ? '✗ गलत' : '✗ Incorrect')}
                    </h4>
                    <p>{isHindi ? currentQ.explanation.hi : currentQ.explanation.en}</p>
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
                  ← {t('btn.previous')}
                </button>
                {currentQuestion < questions.length - 1 ? (
                  <button 
                    className="btn btn-primary"
                    onClick={handleNextQuestion}
                    disabled={!showExplanation}
                  >
                    {t('btn.next')} →
                  </button>
                ) : (
                  <Link 
                    to={`/topics/${subjectId}`} 
                    className="btn btn-success"
                    onClick={() => markTopicComplete(topicProgressId)}
                  >
                    {isHindi ? 'पूर्ण ✓' : 'Complete ✓'}
                  </Link>
                )}
              </div>

              {/* Question Palette */}
              <div className="question-palette">
                <h4>{isHindi ? 'प्रश्न पैलेट' : 'Question Palette'}</h4>
                <div className="palette-grid">
                  {questions.map((_, index) => (
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
          <Link to={`/topics/${subjectId}`} className="btn btn-secondary">
            ← {t('btn.backToTopics')}
          </Link>
          <Link to="/mock-test" className="btn btn-primary">
            {t('nav.mockTest')} →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;
