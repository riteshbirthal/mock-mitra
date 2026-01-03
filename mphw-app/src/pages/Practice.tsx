import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { subjects, getAllTopics } from '../data/examData';
import './Practice.css';

const Practice = () => {
  const { topicId: paramTopicId } = useParams<{ topicId: string }>();
  const { t, isHindi } = useLanguage();
  const { progress } = useProgress();
  
  const [selectedSubject, setSelectedSubject] = useState<string | null>(paramTopicId || null);
  const [searchQuery, setSearchQuery] = useState('');

  const allTopics = getAllTopics();

  const filteredTopics = allTopics.filter(({ subject, topic }) => {
    const subjectMatch = !selectedSubject || subject.id === selectedSubject;
    const searchMatch = !searchQuery || 
      (isHindi ? topic.name.hi : topic.name.en).toLowerCase().includes(searchQuery.toLowerCase()) ||
      (isHindi ? subject.name.hi : subject.name.en).toLowerCase().includes(searchQuery.toLowerCase());
    return subjectMatch && searchMatch;
  });

  const getTopicStatus = (subjectId: string, topicId: string) => {
    const topicProgress = progress.topics[`${subjectId}-${topicId}`];
    if (!topicProgress) return 'new';
    if (topicProgress.completed) return 'completed';
    if (topicProgress.questionsAttempted > 0) return 'in-progress';
    return 'new';
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
              placeholder={isHindi ? 'टॉपिक खोजें...' : 'Search topics...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="subject-filters">
            <button
              className={`filter-btn ${!selectedSubject ? 'active' : ''}`}
              onClick={() => setSelectedSubject(null)}
            >
              {isHindi ? 'सभी' : 'All'}
            </button>
            {subjects.slice(0, 6).map(subject => (
              <button
                key={subject.id}
                className={`filter-btn ${selectedSubject === subject.id ? 'active' : ''}`}
                onClick={() => setSelectedSubject(subject.id)}
              >
                {subject.icon} {isHindi ? subject.name.hi : subject.name.en}
              </button>
            ))}
            <Link to="/syllabus" className="filter-btn more">
              {isHindi ? 'और देखें' : 'More'} →
            </Link>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="practice-topics">
          <h2>
            {isHindi ? 'टॉपिक्स चुनें' : 'Choose a Topic'} ({filteredTopics.length})
          </h2>

          <div className="topics-grid">
            {filteredTopics.map(({ subject, topic }) => {
              const status = getTopicStatus(subject.id, topic.id);
              const topicProgress = progress.topics[`${subject.id}-${topic.id}`];
              
              return (
                <Link
                  key={`${subject.id}-${topic.id}`}
                  to={`/topic/${subject.id}/${topic.id}`}
                  className={`practice-topic-card ${status}`}
                  style={{ '--topic-color': topic.color } as React.CSSProperties}
                >
                  <div className="topic-card-header">
                    <span className="topic-icon">{topic.icon}</span>
                    <span className={`status-badge ${status}`}>
                      {status === 'completed' && '✓'}
                      {status === 'in-progress' && '○'}
                      {status === 'new' && '●'}
                    </span>
                  </div>

                  <h3>{isHindi ? topic.name.hi : topic.name.en}</h3>
                  <p className="subject-name">
                    {subject.icon} {isHindi ? subject.name.hi : subject.name.en}
                  </p>

                  <div className="topic-card-meta">
                    <span className={`difficulty ${topic.difficulty.toLowerCase()}`}>
                      {isHindi 
                        ? topic.difficulty === 'Easy' ? 'आसान' : topic.difficulty === 'Medium' ? 'मध्यम' : 'कठिन'
                        : topic.difficulty}
                    </span>
                    <span className="questions-count">
                      {topic.questionsCount} Qs
                    </span>
                  </div>

                  {topicProgress && topicProgress.questionsAttempted > 0 && (
                    <div className="topic-card-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-bar-fill"
                          style={{ 
                            width: `${Math.min(100, (topicProgress.questionsAttempted / topic.questionsCount) * 100)}%` 
                          }}
                        />
                      </div>
                      <span className="progress-text">
                        {topicProgress.questionsAttempted}/{topic.questionsCount}
                      </span>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>

          {filteredTopics.length === 0 && (
            <div className="no-results">
              <span className="no-results-icon">🔍</span>
              <p>{isHindi ? 'कोई टॉपिक नहीं मिला' : 'No topics found'}</p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
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
