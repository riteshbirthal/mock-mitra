import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { examInfo, subjects } from '../data/examData';
import './MockTest.css';

const MockTest = () => {
  const { t, isHindi } = useLanguage();
  const [testStarted, setTestStarted] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard' | 'mixed'>('mixed');

  const mockTests = [
    {
      id: 1,
      name: { en: 'Full Mock Test 1', hi: 'पूर्ण मॉक टेस्ट 1' },
      questions: 100,
      duration: 90,
      difficulty: 'mixed',
      status: 'available'
    },
    {
      id: 2,
      name: { en: 'Full Mock Test 2', hi: 'पूर्ण मॉक टेस्ट 2' },
      questions: 100,
      duration: 90,
      difficulty: 'mixed',
      status: 'available'
    },
    {
      id: 3,
      name: { en: 'Practice Test - Easy', hi: 'अभ्यास टेस्ट - आसान' },
      questions: 50,
      duration: 45,
      difficulty: 'easy',
      status: 'available'
    },
    {
      id: 4,
      name: { en: 'Practice Test - Medium', hi: 'अभ्यास टेस्ट - मध्यम' },
      questions: 50,
      duration: 45,
      difficulty: 'medium',
      status: 'available'
    },
    {
      id: 5,
      name: { en: 'Subject Test - Health', hi: 'विषय टेस्ट - स्वास्थ्य' },
      questions: 70,
      duration: 60,
      difficulty: 'medium',
      status: 'available'
    },
    {
      id: 6,
      name: { en: 'Subject Test - Computer', hi: 'विषय टेस्ट - कंप्यूटर' },
      questions: 30,
      duration: 25,
      difficulty: 'easy',
      status: 'available'
    }
  ];

  if (testStarted) {
    return (
      <div className="mock-test-page">
        <div className="container">
          <div className="test-coming-soon">
            <span className="coming-icon">🚧</span>
            <h2>{isHindi ? 'जल्द आ रहा है!' : 'Coming Soon!'}</h2>
            <p>
              {isHindi 
                ? 'पूर्ण मॉक टेस्ट फीचर पर काम चल रहा है। कृपया टॉपिक-वाइज अभ्यास का उपयोग करें।' 
                : 'Full mock test feature is under development. Please use topic-wise practice for now.'}
            </p>
            <div className="coming-actions">
              <button 
                className="btn btn-secondary"
                onClick={() => setTestStarted(false)}
              >
                ← {isHindi ? 'वापस जाएं' : 'Go Back'}
              </button>
              <Link to="/practice" className="btn btn-primary">
                {t('btn.startPractice')} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mock-test-page">
      <div className="container">
        {/* Header */}
        <div className="mock-header">
          <h1>{t('nav.mockTest')}</h1>
          <p>
            {isHindi 
              ? 'वास्तविक परीक्षा जैसे माहौल में अपनी तैयारी का परीक्षण करें' 
              : 'Test your preparation in a real exam-like environment'}
          </p>
        </div>

        {/* Exam Info Card */}
        <div className="exam-info-card">
          <div className="exam-info-header">
            <span className="exam-icon">{examInfo.icon}</span>
            <div className="exam-title">
              <h2>{examInfo.name}</h2>
              <p>{isHindi ? examInfo.fullName.hi : examInfo.fullName.en}</p>
            </div>
          </div>
          <div className="exam-details-grid">
            <div className="detail-item">
              <span className="detail-icon">📝</span>
              <span className="detail-value">{examInfo.totalQuestions}</span>
              <span className="detail-label">{t('exam.questions')}</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">⏱️</span>
              <span className="detail-value">{examInfo.duration}</span>
              <span className="detail-label">{t('exam.minutes')}</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">🎯</span>
              <span className="detail-value">{examInfo.totalMarks}</span>
              <span className="detail-label">{t('exam.marks')}</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">❌</span>
              <span className="detail-value">{examInfo.negativeMarking ? t('exam.yes') : t('exam.no')}</span>
              <span className="detail-label">{t('exam.negativeMarking')}</span>
            </div>
          </div>
        </div>

        {/* Difficulty Filter */}
        <div className="difficulty-filter">
          <h3>{isHindi ? 'कठिनाई स्तर चुनें' : 'Select Difficulty'}</h3>
          <div className="difficulty-options">
            {[
              { value: 'easy', label: { en: 'Easy', hi: 'आसान' }, color: 'var(--success)' },
              { value: 'medium', label: { en: 'Medium', hi: 'मध्यम' }, color: 'var(--warning)' },
              { value: 'hard', label: { en: 'Hard', hi: 'कठिन' }, color: 'var(--danger)' },
              { value: 'mixed', label: { en: 'Mixed', hi: 'मिश्रित' }, color: 'var(--primary)' }
            ].map(diff => (
              <button
                key={diff.value}
                className={`difficulty-btn ${selectedDifficulty === diff.value ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty(diff.value as typeof selectedDifficulty)}
                style={{ '--diff-color': diff.color } as React.CSSProperties}
              >
                {isHindi ? diff.label.hi : diff.label.en}
              </button>
            ))}
          </div>
        </div>

        {/* Mock Tests Grid */}
        <div className="mock-tests-section">
          <h3>{isHindi ? 'उपलब्ध टेस्ट' : 'Available Tests'}</h3>
          
          <div className="mock-tests-grid">
            {mockTests
              .filter(test => selectedDifficulty === 'mixed' || test.difficulty === selectedDifficulty || test.difficulty === 'mixed')
              .map(test => (
                <div 
                  key={test.id}
                  className={`mock-test-card ${test.difficulty}`}
                >
                  <div className="test-card-header">
                    <span className="test-icon">📋</span>
                    <span className={`difficulty-badge ${test.difficulty}`}>
                      {test.difficulty === 'easy' && (isHindi ? 'आसान' : 'Easy')}
                      {test.difficulty === 'medium' && (isHindi ? 'मध्यम' : 'Medium')}
                      {test.difficulty === 'hard' && (isHindi ? 'कठिन' : 'Hard')}
                      {test.difficulty === 'mixed' && (isHindi ? 'मिश्रित' : 'Mixed')}
                    </span>
                  </div>

                  <h4>{isHindi ? test.name.hi : test.name.en}</h4>

                  <div className="test-info">
                    <span>{test.questions} {isHindi ? 'प्रश्न' : 'Questions'}</span>
                    <span>•</span>
                    <span>{test.duration} {isHindi ? 'मिनट' : 'min'}</span>
                  </div>

                  <button 
                    className="btn btn-primary start-test-btn"
                    onClick={() => setTestStarted(true)}
                  >
                    {t('btn.start')} →
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="test-instructions">
          <h3>{isHindi ? '📋 टेस्ट निर्देश' : '📋 Test Instructions'}</h3>
          <ul>
            <li>
              {isHindi 
                ? 'टेस्ट शुरू करने से पहले सुनिश्चित करें कि आपके पास पर्याप्त समय है।' 
                : 'Make sure you have enough time before starting the test.'}
            </li>
            <li>
              {isHindi 
                ? 'एक बार टेस्ट शुरू होने के बाद टाइमर स्वचालित रूप से चलना शुरू हो जाएगा।' 
                : 'Once the test starts, the timer will automatically begin.'}
            </li>
            <li>
              {isHindi 
                ? 'सभी प्रश्नों का उत्तर देने का प्रयास करें क्योंकि कोई नेगेटिव मार्किंग नहीं है।' 
                : 'Try to answer all questions as there is no negative marking.'}
            </li>
            <li>
              {isHindi 
                ? 'आप प्रश्नों के बीच आगे-पीछे जा सकते हैं।' 
                : 'You can navigate between questions back and forth.'}
            </li>
            <li>
              {isHindi 
                ? 'टेस्ट पूरा होने के बाद आप अपना स्कोर और विस्तृत विश्लेषण देख सकते हैं।' 
                : 'After completing the test, you can view your score and detailed analysis.'}
            </li>
          </ul>
        </div>

        {/* Subject-wise Practice */}
        <div className="subject-practice">
          <h3>{isHindi ? 'या विषय-वार अभ्यास करें' : 'Or Practice by Subject'}</h3>
          <div className="subject-cards">
            {subjects.slice(0, 6).map(subject => (
              <Link
                key={subject.id}
                to={`/topics/${subject.id}`}
                className="subject-practice-card"
                style={{ '--subject-color': subject.color } as React.CSSProperties}
              >
                <span className="subject-icon">{subject.icon}</span>
                <span className="subject-name">
                  {isHindi ? subject.name.hi : subject.name.en}
                </span>
                <span className="subject-topics">{subject.topics.length} topics</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTest;
