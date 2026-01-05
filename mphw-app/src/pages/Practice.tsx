import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { subjects } from '../data/examData';
import './Practice.css';

const subjectRouteMap: Record<string, string> = {
  'anatomy': '/topics/anatomy',
  'physiology': '/topics/physiology',
  'microbiology': '/topics/microbiology',
  'first-aid': '/topics/first-aid',
  'health-hygiene': '/topics/health-hygiene',
  'nutrition': '/topics/nutrition',
  'immunization': '/topics/immunization',
  'maternal-child-health': '/topics/maternal-child-health',
  'communicable-diseases': '/topics/communicable-diseases',
  'public-health': '/topics/public-health',
  'mental-health': '/topics/mental-health',
  'pharmacology': '/topics/pharmacology',
  'practical-skills': '/topics/practical-skills',
  'communication-skills': '/topics/communication-skills',
  'health-education': '/topics/health-education',
  'infection-control': '/topics/infection-control',
  'computer-knowledge': '/topics/computer-knowledge',
  'general-awareness': '/topics/general-awareness',
  'occupational-health': '/topics/occupational-health',
  'mathematics': '/topics/mathematics',
  'reasoning': '/topics/reasoning',
  'vital-statistics': '/topics/record-keeping',
};

const Practice = () => {
  useParams<{ topicId: string }>();
  const { t, isHindi } = useLanguage();
  const { progress } = useProgress();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'health' | 'general'>('all');

  const filteredSubjects = subjects.filter(subject => {
    const searchMatch = !searchQuery || 
      (isHindi ? subject.name.hi : subject.name.en).toLowerCase().includes(searchQuery.toLowerCase()) ||
      (isHindi ? subject.description.hi : subject.description.en).toLowerCase().includes(searchQuery.toLowerCase());
    
    const categoryMatch = selectedCategory === 'all' || 
      (selectedCategory === 'health' && ['anatomy', 'physiology', 'microbiology', 'first-aid', 'health-hygiene', 'nutrition', 'immunization', 'maternal-child-health', 'communicable-diseases', 'public-health', 'mental-health', 'pharmacology', 'practical-skills', 'health-education', 'infection-control', 'occupational-health', 'vital-statistics'].includes(subject.id)) ||
      (selectedCategory === 'general' && ['general-awareness', 'reasoning', 'mathematics', 'computer-knowledge', 'communication-skills'].includes(subject.id));
    
    return searchMatch && categoryMatch;
  });

  const getSubjectProgress = (subjectId: string) => {
    let attempted = 0;
    let correct = 0;
    subjects.find(s => s.id === subjectId)?.topics.forEach(topic => {
      const topicProgress = progress.topics[`${subjectId}-${topic.id}`];
      if (topicProgress) {
        attempted += topicProgress.questionsAttempted;
        correct += topicProgress.correctAnswers;
      }
    });
    return { attempted, correct, accuracy: attempted > 0 ? Math.round((correct / attempted) * 100) : 0 };
  };

  return (
    <div className="practice-page">
      <div className="container">
        {/* Header */}
        <div className="practice-header">
          <h1>{t('nav.practice')}</h1>
          <p>
            {isHindi 
              ? 'अपनी पसंद के विषय और टॉपिक चुनें और अभ्यास शुरू करें' 
              : 'Choose your preferred subject and topic to start practicing'}
          </p>
        </div>

        {/* Stats */}
        <div className="practice-stats">
          <div className="stat-card">
            <span className="stat-icon">📝</span>
            <div className="stat-info">
              <span className="stat-value">{progress.overallStats.totalQuestionsAttempted}</span>
              <span className="stat-label">{t('practice.attempted')}</span>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">✅</span>
            <div className="stat-info">
              <span className="stat-value">{progress.overallStats.totalCorrectAnswers}</span>
              <span className="stat-label">{t('practice.correct')}</span>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">📊</span>
            <div className="stat-info">
              <span className="stat-value">
                {progress.overallStats.totalQuestionsAttempted > 0 
                  ? Math.round((progress.overallStats.totalCorrectAnswers / progress.overallStats.totalQuestionsAttempted) * 100)
                  : 0}%
              </span>
              <span className="stat-label">{t('practice.accuracy')}</span>
            </div>
          </div>
          <div className="stat-card highlight">
            <span className="stat-icon">🔥</span>
            <div className="stat-info">
              <span className="stat-value">{progress.overallStats.streak}</span>
              <span className="stat-label">{t('progress.streak')}</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="practice-filters">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder={isHindi ? 'विषय खोजें...' : 'Search subjects...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="subject-filters">
            <button
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              {isHindi ? 'सभी' : 'All'}
            </button>
            <button
              className={`filter-btn ${selectedCategory === 'health' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('health')}
            >
              🏥 {isHindi ? 'स्वास्थ्य विषय' : 'Health Topics'}
            </button>
            <button
              className={`filter-btn ${selectedCategory === 'general' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('general')}
            >
              📚 {isHindi ? 'सामान्य विषय' : 'General Topics'}
            </button>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="practice-topics">
          <h2>
            {isHindi ? 'विषय चुनें' : 'Choose a Subject'} ({filteredSubjects.length})
          </h2>

          <div className="topics-grid">
            {filteredSubjects.map(subject => {
              const subjectProgress = getSubjectProgress(subject.id);
              const route = subjectRouteMap[subject.id] || `/topics/${subject.id}`;
              
              return (
                <Link
                  key={subject.id}
                  to={route}
                  className={`practice-topic-card ${subjectProgress.attempted > 0 ? 'in-progress' : 'new'}`}
                  style={{ '--topic-color': subject.color } as React.CSSProperties}
                >
                  <div className="topic-card-header">
                    <span className="topic-icon">{subject.icon}</span>
                    <span className="questions-badge">{subject.questions} Qs</span>
                  </div>

                  <h3>{isHindi ? subject.name.hi : subject.name.en}</h3>
                  <p className="subject-description">
                    {isHindi ? subject.description.hi : subject.description.en}
                  </p>

                  <div className="topic-card-meta">
                    <span className="topics-count">
                      {subject.topics.length} {isHindi ? 'उप-विषय' : 'subtopics'}
                    </span>
                    <span className="weightage">
                      {subject.weightage}% {isHindi ? 'वेटेज' : 'weightage'}
                    </span>
                  </div>

                  {subjectProgress.attempted > 0 && (
                    <div className="topic-card-progress">
                      <div className="progress-stats">
                        <span>{subjectProgress.attempted} {isHindi ? 'प्रयास' : 'attempted'}</span>
                        <span>{subjectProgress.accuracy}% {isHindi ? 'सटीकता' : 'accuracy'}</span>
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>

          {filteredSubjects.length === 0 && (
            <div className="no-results">
              <span className="no-results-icon">🔍</span>
              <p>{isHindi ? 'कोई विषय नहीं मिला' : 'No subjects found'}</p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <Link to="/subtopic-practice" className="action-card">
            <span className="action-icon">🎯</span>
            <div className="action-info">
              <h3>{isHindi ? 'विषय-वार अभ्यास' : 'Topic-wise Practice'}</h3>
              <p>{isHindi ? 'उप-विषय के अनुसार अभ्यास करें' : 'Practice by subtopic'}</p>
            </div>
            <span className="action-arrow">→</span>
          </Link>
          <Link to="/mock-test" className="action-card">
            <span className="action-icon">📝</span>
            <div className="action-info">
              <h3>{t('nav.mockTest')}</h3>
              <p>{isHindi ? 'पूर्ण परीक्षा का अभ्यास करें' : 'Practice full exam'}</p>
            </div>
            <span className="action-arrow">→</span>
          </Link>
          <Link to="/progress" className="action-card">
            <span className="action-icon">📊</span>
            <div className="action-info">
              <h3>{t('nav.progress')}</h3>
              <p>{isHindi ? 'अपनी प्रगति देखें' : 'View your progress'}</p>
            </div>
            <span className="action-arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Practice;
