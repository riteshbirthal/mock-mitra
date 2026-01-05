import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Question, ShuffledQuestion, getRandomQuestions, getQuestionsByDifficulty } from '../../data/questionBanks/types';
import './QuizComponent.css';

interface QuizComponentProps {
  questions: Question[];
  title?: string;
  questionCount?: number;
  difficulty?: 'easy' | 'medium' | 'hard' | 'mixed';
  balancedDifficulty?: boolean;
  onComplete?: (score: number, total: number) => void;
}

export default function QuizComponent({ 
  questions, 
  title,
  questionCount = 10,
  difficulty = 'mixed',
  balancedDifficulty = false,
  onComplete 
}: QuizComponentProps) {
  const { isHindi } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<ShuffledQuestion[]>([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [questionLang, setQuestionLang] = useState<'en' | 'hi' | 'app'>('app');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard' | 'mixed'>(difficulty);

  const startQuiz = () => {
    let selectedQuestions: ShuffledQuestion[];
    
    if (balancedDifficulty) {
      const easyCount = Math.ceil(questionCount * 0.4);
      const mediumCount = Math.ceil(questionCount * 0.4);
      const hardCount = questionCount - easyCount - mediumCount;
      selectedQuestions = getQuestionsByDifficulty(questions, easyCount, mediumCount, hardCount);
    } else {
      selectedQuestions = getRandomQuestions(questions, questionCount, { difficulty: selectedDifficulty });
    }
    
    setQuizQuestions(selectedQuestions);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswered([]);
    setQuizCompleted(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (answered.includes(currentQuestion)) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    setAnswered([...answered, currentQuestion]);
    
    // Use shuffledCorrectAnswer for comparison
    if (answerIndex === quizQuestions[currentQuestion].shuffledCorrectAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
      if (onComplete) {
        onComplete(score, quizQuestions.length);
      }
    }
  };

  const getDisplayLanguage = () => {
    if (questionLang === 'app') return isHindi;
    return questionLang === 'hi';
  };

  const displayHindi = getDisplayLanguage();

  // Calculate question counts by difficulty
  const easyCount = questions.filter(q => q.difficulty === 'easy').length;
  const mediumCount = questions.filter(q => q.difficulty === 'medium').length;
  const hardCount = questions.filter(q => q.difficulty === 'hard').length;

  // Get available count for selected difficulty
  const getAvailableCount = () => {
    if (selectedDifficulty === 'mixed') return questions.length;
    if (selectedDifficulty === 'easy') return easyCount;
    if (selectedDifficulty === 'medium') return mediumCount;
    if (selectedDifficulty === 'hard') return hardCount;
    return questions.length;
  };

  if (!quizStarted) {
    return (
      <div className="quiz-start">
        <div className="quiz-start-content">
          <div className="quiz-icon">📝</div>
          <h2>{title || (isHindi ? 'प्रश्नोत्तरी' : 'Quiz')}</h2>
          <p>{isHindi ? 'अपने ज्ञान का परीक्षण करें' : 'Test your knowledge'}</p>
          
          <div className="quiz-info">
            <div className="info-item">
              <span className="info-label">{isHindi ? 'प्रश्न' : 'Questions'}</span>
              <span className="info-value">{Math.min(questionCount, getAvailableCount())}</span>
            </div>
            <div className="info-item">
              <span className="info-label">{isHindi ? 'समय' : 'Time'}</span>
              <span className="info-value">{isHindi ? 'कोई सीमा नहीं' : 'No Limit'}</span>
            </div>
          </div>

          <div className="difficulty-selector">
            <label>{isHindi ? 'कठिनाई स्तर:' : 'Difficulty Level:'}</label>
            <div className="diff-options">
              <button 
                className={`diff-btn easy ${selectedDifficulty === 'easy' ? 'active' : ''} ${easyCount === 0 ? 'disabled' : ''}`}
                onClick={() => easyCount > 0 && setSelectedDifficulty('easy')}
                disabled={easyCount === 0}
              >
                {isHindi ? 'आसान' : 'Easy'} ({easyCount})
              </button>
              <button 
                className={`diff-btn medium ${selectedDifficulty === 'medium' ? 'active' : ''} ${mediumCount === 0 ? 'disabled' : ''}`}
                onClick={() => mediumCount > 0 && setSelectedDifficulty('medium')}
                disabled={mediumCount === 0}
              >
                {isHindi ? 'मध्यम' : 'Medium'} ({mediumCount})
              </button>
              <button 
                className={`diff-btn hard ${selectedDifficulty === 'hard' ? 'active' : ''} ${hardCount === 0 ? 'disabled' : ''}`}
                onClick={() => hardCount > 0 && setSelectedDifficulty('hard')}
                disabled={hardCount === 0}
              >
                {isHindi ? 'कठिन' : 'Hard'} ({hardCount})
              </button>
              <button 
                className={`diff-btn mixed ${selectedDifficulty === 'mixed' ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty('mixed')}
              >
                {isHindi ? 'मिश्रित' : 'Mixed'} ({questions.length})
              </button>
            </div>
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

          <button className="btn btn-primary btn-lg start-quiz-btn" onClick={startQuiz}>
            {isHindi ? 'क्विज़ शुरू करें' : 'Start Quiz'}
          </button>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const resultClass = percentage >= 70 ? 'excellent' : percentage >= 50 ? 'good' : 'needs-improvement';

    return (
      <div className="quiz-result">
        <div className={`result-card ${resultClass}`}>
          <div className="result-icon">
            {percentage >= 70 ? '🎉' : percentage >= 50 ? '👍' : '📚'}
          </div>
          <h2>
            {percentage >= 70 
              ? (isHindi ? 'शानदार!' : 'Excellent!') 
              : percentage >= 50 
                ? (isHindi ? 'अच्छा प्रदर्शन!' : 'Good Job!') 
                : (isHindi ? 'अभ्यास जारी रखें!' : 'Keep Practicing!')}
          </h2>
          
          <div className="score-display">
            <div className="score-circle">
              <span className="score-value">{score}</span>
              <span className="score-total">/{quizQuestions.length}</span>
            </div>
            <span className="score-percentage">{percentage}%</span>
          </div>

          <div className="result-stats">
            <div className="stat correct">
              <span className="stat-value">{score}</span>
              <span className="stat-label">{isHindi ? 'सही' : 'Correct'}</span>
            </div>
            <div className="stat wrong">
              <span className="stat-value">{quizQuestions.length - score}</span>
              <span className="stat-label">{isHindi ? 'गलत' : 'Wrong'}</span>
            </div>
          </div>

          <div className="result-actions">
            <button className="btn btn-primary" onClick={startQuiz}>
              {isHindi ? 'फिर से खेलें' : 'Play Again'}
            </button>
            <button className="btn btn-secondary" onClick={() => setQuizStarted(false)}>
              {isHindi ? 'वापस जाएं' : 'Go Back'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Guard against empty questions array
  if (quizQuestions.length === 0) {
    return (
      <div className="quiz-start">
        <div className="quiz-start-content">
          <div className="quiz-icon">⚠️</div>
          <h2>{isHindi ? 'कोई प्रश्न उपलब्ध नहीं' : 'No Questions Available'}</h2>
          <p>{isHindi ? 'इस कठिनाई स्तर के लिए कोई प्रश्न नहीं मिला।' : 'No questions found for this difficulty level.'}</p>
          <button className="btn btn-primary" onClick={() => setQuizStarted(false)}>
            {isHindi ? 'वापस जाएं' : 'Go Back'}
          </button>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  // Use shuffled options
  const options = displayHindi ? question.shuffledOptionsHi : question.shuffledOptionsEn;

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-progress">
          <span className="progress-text">
            {isHindi ? 'प्रश्न' : 'Question'} {currentQuestion + 1}/{quizQuestions.length}
          </span>
          <div className="progress-bar">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="quiz-score">
          {isHindi ? 'स्कोर' : 'Score'}: {score}
        </div>
      </div>

      <div className="question-card">
        <div className="question-meta">
          <span className={`difficulty-badge ${question.difficulty}`}>
            {question.difficulty === 'easy' 
              ? (isHindi ? 'आसान' : 'Easy')
              : question.difficulty === 'medium'
                ? (isHindi ? 'मध्यम' : 'Medium')
                : (isHindi ? 'कठिन' : 'Hard')}
          </span>
          <button 
            className="toggle-lang-btn"
            onClick={() => setQuestionLang(displayHindi ? 'en' : 'hi')}
          >
            {displayHindi ? 'EN' : 'हि'}
          </button>
        </div>

        <h3 className="question-text">
          {displayHindi ? question.questionHi : question.questionEn}
        </h3>

        <div className="options-list">
          {options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${
                selectedAnswer === index 
                  ? index === question.shuffledCorrectAnswer 
                    ? 'correct' 
                    : 'wrong'
                  : showExplanation && index === question.shuffledCorrectAnswer
                    ? 'correct'
                    : ''
              }`}
              onClick={() => handleAnswerSelect(index)}
              disabled={answered.includes(currentQuestion)}
            >
              <span className="option-letter">{String.fromCharCode(65 + index)}</span>
              <span className="option-text">{option}</span>
              {showExplanation && index === question.shuffledCorrectAnswer && (
                <span className="check-icon">✓</span>
              )}
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className={`explanation ${selectedAnswer === question.shuffledCorrectAnswer ? 'correct' : 'wrong'}`}>
            <div className="explanation-header">
              {selectedAnswer === question.shuffledCorrectAnswer 
                ? (isHindi ? '✓ सही उत्तर!' : '✓ Correct!') 
                : (isHindi ? '✗ गलत उत्तर' : '✗ Incorrect')}
            </div>
            <p>{displayHindi ? question.explanationHi : question.explanationEn}</p>
          </div>
        )}
      </div>

      <div className="quiz-footer">
        <button 
          className="btn btn-primary"
          onClick={nextQuestion}
          disabled={!showExplanation}
        >
          {currentQuestion < quizQuestions.length - 1 
            ? (isHindi ? 'अगला प्रश्न →' : 'Next Question →')
            : (isHindi ? 'परिणाम देखें' : 'View Results')}
        </button>
      </div>
    </div>
  );
}
