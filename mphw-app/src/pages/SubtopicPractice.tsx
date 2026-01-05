import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import QuizComponent from '../components/topic/QuizComponent';
import MockTestComponent from '../components/topic/MockTestComponent';
import { subjects, getSubjectById } from '../data/examData';
import {
  anatomyQuestions,
  physiologyQuestions,
  microbiologyQuestions,
  firstAidQuestions,
  healthHygieneQuestions,
  nutritionQuestions,
  immunizationQuestions,
  mchQuestions,
  communicableDiseasesQuestions,
  publicHealthQuestions,
  mentalHealthQuestions,
  pharmacologyQuestions,
  practicalSkillsQuestions,
  communicationSkillsQuestions,
  healthEducationQuestions,
  infectionControlQuestions,
  computerKnowledgeQuestions,
  generalAwarenessQuestions,
  occupationalHealthQuestions,
  mathematicsQuestions,
  reasoningQuestions,
  recordKeepingQuestions,
} from '../data/questionBanks';
import { Question } from '../data/questionBanks/types';
import './SubtopicPractice.css';

const questionBankMap: Record<string, Question[]> = {
  'anatomy': anatomyQuestions,
  'physiology': physiologyQuestions,
  'microbiology': microbiologyQuestions,
  'first-aid': firstAidQuestions,
  'health-hygiene': healthHygieneQuestions,
  'nutrition': nutritionQuestions,
  'immunization': immunizationQuestions,
  'maternal-child-health': mchQuestions,
  'communicable-diseases': communicableDiseasesQuestions,
  'public-health': publicHealthQuestions,
  'mental-health': mentalHealthQuestions,
  'pharmacology': pharmacologyQuestions,
  'practical-skills': practicalSkillsQuestions,
  'communication-skills': communicationSkillsQuestions,
  'health-education': healthEducationQuestions,
  'infection-control': infectionControlQuestions,
  'computer-knowledge': computerKnowledgeQuestions,
  'general-awareness': generalAwarenessQuestions,
  'occupational-health': occupationalHealthQuestions,
  'mathematics': mathematicsQuestions,
  'reasoning': reasoningQuestions,
  'vital-statistics': recordKeepingQuestions,
};

type PracticeMode = 'select' | 'quiz' | 'mocktest';

export default function SubtopicPractice() {
  const { subjectId, topicId } = useParams<{ subjectId?: string; topicId?: string }>();
  const { isHindi } = useLanguage();
  
  const [selectedSubject, setSelectedSubject] = useState<string>(subjectId || '');
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>(topicId || '');
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('select');
  const [questionCount, setQuestionCount] = useState(10);

  const subject = selectedSubject ? getSubjectById(selectedSubject) : null;
  
  const questions = useMemo(() => {
    if (!selectedSubject) return [];
    const allQuestions = questionBankMap[selectedSubject] || [];
    if (!selectedSubtopic || selectedSubtopic === 'all') {
      return allQuestions;
    }
    return allQuestions.filter(q => q.subtopic === selectedSubtopic);
  }, [selectedSubject, selectedSubtopic]);

  const subtopics = useMemo(() => {
    if (!selectedSubject) return [];
    const allQuestions = questionBankMap[selectedSubject] || [];
    const uniqueSubtopics = [...new Set(allQuestions.map(q => q.subtopic).filter(Boolean))];
    return uniqueSubtopics.sort();
  }, [selectedSubject]);

  const handleStartQuiz = () => {
    if (questions.length > 0) {
      setPracticeMode('quiz');
    }
  };

  const handleStartMockTest = () => {
    if (questions.length > 0) {
      setPracticeMode('mocktest');
    }
  };

  const handleBack = () => {
    setPracticeMode('select');
  };

  if (practiceMode === 'quiz') {
    return (
      <div className="subtopic-practice-page">
        <div className="container">
          <div className="practice-header-bar">
            <button className="back-btn" onClick={handleBack}>
              ← {isHindi ? 'वापस' : 'Back'}
            </button>
            <h2>
              {subject && (isHindi ? subject.name.hi : subject.name.en)} - 
              {selectedSubtopic === 'all' 
                ? (isHindi ? ' सभी प्रश्न' : ' All Questions')
                : ` ${selectedSubtopic}`}
            </h2>
          </div>
          <QuizComponent
            questions={questions}
            questionCount={Math.min(questionCount, questions.length)}
            title={isHindi 
              ? `${subject?.name.hi || ''} क्विज़` 
              : `${subject?.name.en || ''} Quiz`}
          />
        </div>
      </div>
    );
  }

  if (practiceMode === 'mocktest') {
    return (
      <div className="subtopic-practice-page">
        <div className="container">
          <div className="practice-header-bar">
            <button className="back-btn" onClick={handleBack}>
              ← {isHindi ? 'वापस' : 'Back'}
            </button>
            <h2>
              {subject && (isHindi ? subject.name.hi : subject.name.en)} - 
              {selectedSubtopic === 'all' 
                ? (isHindi ? ' सभी प्रश्न' : ' All Questions')
                : ` ${selectedSubtopic}`}
            </h2>
          </div>
          <MockTestComponent
            questions={questions}
            questionCount={Math.min(questionCount, questions.length)}
            testDuration={Math.ceil(questionCount * 1.5)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="subtopic-practice-page">
      <div className="container">
        <div className="page-header">
          <Link to="/practice" className="back-link">
            ← {isHindi ? 'अभ्यास पर वापस' : 'Back to Practice'}
          </Link>
          <h1>{isHindi ? 'विषय-वार अभ्यास' : 'Topic-wise Practice'}</h1>
          <p>{isHindi 
            ? 'विषय और उप-विषय चुनें और अभ्यास शुरू करें' 
            : 'Select a subject and subtopic to start practicing'}
          </p>
        </div>

        <div className="selection-section">
          <div className="selection-card">
            <h3>{isHindi ? '1. विषय चुनें' : '1. Select Subject'}</h3>
            <div className="subject-grid">
              {subjects.map(subj => (
                <button
                  key={subj.id}
                  className={`subject-btn ${selectedSubject === subj.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedSubject(subj.id);
                    setSelectedSubtopic('');
                  }}
                  style={{ '--subject-color': subj.color } as React.CSSProperties}
                >
                  <span className="subject-icon">{subj.icon}</span>
                  <span className="subject-name">{isHindi ? subj.name.hi : subj.name.en}</span>
                  <span className="question-count">
                    {(questionBankMap[subj.id] || []).length} Qs
                  </span>
                </button>
              ))}
            </div>
          </div>

          {selectedSubject && (
            <div className="selection-card">
              <h3>{isHindi ? '2. उप-विषय चुनें' : '2. Select Subtopic'}</h3>
              <div className="subtopic-grid">
                <button
                  className={`subtopic-btn ${selectedSubtopic === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtopic('all')}
                >
                  <span className="subtopic-icon">📚</span>
                  <span className="subtopic-name">{isHindi ? 'सभी प्रश्न' : 'All Questions'}</span>
                  <span className="subtopic-count">{questionBankMap[selectedSubject]?.length || 0}</span>
                </button>
                {subtopics.map(subtopic => {
                  const count = (questionBankMap[selectedSubject] || []).filter(q => q.subtopic === subtopic).length;
                  return (
                    <button
                      key={subtopic}
                      className={`subtopic-btn ${selectedSubtopic === subtopic ? 'active' : ''}`}
                      onClick={() => setSelectedSubtopic(subtopic as string)}
                    >
                      <span className="subtopic-icon">📖</span>
                      <span className="subtopic-name">{subtopic}</span>
                      <span className="subtopic-count">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {selectedSubject && selectedSubtopic && (
            <div className="selection-card practice-options">
              <h3>{isHindi ? '3. अभ्यास विकल्प' : '3. Practice Options'}</h3>
              
              <div className="options-row">
                <div className="option-group">
                  <label>{isHindi ? 'प्रश्नों की संख्या:' : 'Number of Questions:'}</label>
                  <div className="count-selector">
                    {[5, 10, 15, 20, 25, 30, 50].map(count => (
                      <button
                        key={count}
                        className={`count-btn ${questionCount === count ? 'active' : ''}`}
                        onClick={() => setQuestionCount(count)}
                        disabled={count > questions.length}
                      >
                        {count}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="practice-info">
                <div className="info-item">
                  <span className="info-icon">📝</span>
                  <span className="info-text">
                    {isHindi ? 'उपलब्ध प्रश्न:' : 'Available:'} <strong>{questions.length}</strong>
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-icon">🎯</span>
                  <span className="info-text">
                    {isHindi ? 'चयनित:' : 'Selected:'} <strong>{Math.min(questionCount, questions.length)}</strong>
                  </span>
                </div>
              </div>

              <div className="action-buttons">
                <button 
                  className="action-btn quiz-btn"
                  onClick={handleStartQuiz}
                  disabled={questions.length === 0}
                >
                  <span className="btn-icon">📝</span>
                  <div className="btn-content">
                    <span className="btn-title">{isHindi ? 'क्विज़ शुरू करें' : 'Start Quiz'}</span>
                    <span className="btn-desc">{isHindi ? 'कोई समय सीमा नहीं' : 'No time limit'}</span>
                  </div>
                </button>
                <button 
                  className="action-btn mocktest-btn"
                  onClick={handleStartMockTest}
                  disabled={questions.length === 0}
                >
                  <span className="btn-icon">📋</span>
                  <div className="btn-content">
                    <span className="btn-title">{isHindi ? 'मॉक टेस्ट' : 'Mock Test'}</span>
                    <span className="btn-desc">
                      {isHindi 
                        ? `${Math.ceil(Math.min(questionCount, questions.length) * 1.5)} मिनट` 
                        : `${Math.ceil(Math.min(questionCount, questions.length) * 1.5)} minutes`}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>

        {!selectedSubject && (
          <div className="empty-state">
            <span className="empty-icon">👆</span>
            <p>{isHindi ? 'शुरू करने के लिए ऊपर से एक विषय चुनें' : 'Select a subject above to get started'}</p>
          </div>
        )}
      </div>
    </div>
  );
}
