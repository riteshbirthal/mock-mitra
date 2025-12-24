import { Question } from '../services/api';
import './QuestionCard.css';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number;
  onSelectAnswer: (answer: number) => void;
  showResult?: boolean;
  correctAnswer?: number;
}

const QuestionCard = ({ 
  question, 
  selectedAnswer, 
  onSelectAnswer,
  showResult = false,
  correctAnswer
}: QuestionCardProps) => {
  const getOptionClass = (index: number) => {
    if (!showResult) {
      return selectedAnswer === index ? 'selected' : '';
    }
    
    if (index === correctAnswer) return 'correct';
    if (index === selectedAnswer && selectedAnswer !== correctAnswer) return 'wrong';
    return '';
  };

  return (
    <div className="question-card">
      <div className="question-header">
        <span className="question-number">Q{question.question_no}</span>
        <span className="question-category badge badge-primary">{question.category}</span>
      </div>
      <h3 className="question-text">{question.question}</h3>
      <div className="options-list">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${getOptionClass(index)}`}
            onClick={() => !showResult && onSelectAnswer(index)}
            disabled={showResult}
          >
            <span className="option-letter">{String.fromCharCode(65 + index)}</span>
            <span className="option-text">{option}</span>
            {showResult && index === correctAnswer && (
              <span className="option-icon">✓</span>
            )}
            {showResult && index === selectedAnswer && selectedAnswer !== correctAnswer && (
              <span className="option-icon">✗</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
