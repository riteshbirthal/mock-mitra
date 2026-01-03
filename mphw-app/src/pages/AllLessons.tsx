import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { allTopics } from '../data/lessonIndex';
import './AllLessons.css';

const AllLessons = () => {
  const { isHindi } = useLanguage();
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('completedLessons') || '{}');
    setCompletedLessons(stored);
  }, []);

  const totalLessons = allTopics.reduce((sum, topic) => sum + topic.lessons.length, 0);
  const completedCount = Object.keys(completedLessons).length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  const filteredTopics = allTopics.map(topic => ({
    ...topic,
    lessons: topic.lessons.filter(lesson => {
      const key = `${topic.id}-${lesson.id}`;
      const isCompleted = !!completedLessons[key];
      const matchesFilter = filter === 'all' || 
        (filter === 'completed' && isCompleted) || 
        (filter === 'pending' && !isCompleted);
      const matchesSearch = searchTerm === '' || 
        lesson.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lesson.titleHi.includes(searchTerm) ||
        topic.nameEn.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    })
  })).filter(topic => topic.lessons.length > 0);

  return (
    <div className="all-lessons-page">
      <div className="container">
        {/* Header */}
        <div className="all-lessons-header">
          <h1>
            📚 {isHindi ? 'सभी पाठ' : 'All Lessons'}
          </h1>
          <p>
            {isHindi 
              ? `${totalLessons} पाठ • ${allTopics.length} विषय` 
              : `${totalLessons} Lessons • ${allTopics.length} Topics`}
          </p>
        </div>

        {/* Progress Overview */}
        <div className="progress-overview">
          <div className="progress-stats">
            <div className="stat-box">
              <span className="stat-value">{completedCount}</span>
              <span className="stat-label">{isHindi ? 'पूर्ण' : 'Completed'}</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">{totalLessons - completedCount}</span>
              <span className="stat-label">{isHindi ? 'शेष' : 'Remaining'}</span>
            </div>
            <div className="stat-box highlight">
              <span className="stat-value">{progressPercent}%</span>
              <span className="stat-label">{isHindi ? 'प्रगति' : 'Progress'}</span>
            </div>
          </div>
          <div className="progress-bar-large">
            <div className="progress-fill-large" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        {/* Filters */}
        <div className="lessons-filters">
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              {isHindi ? 'सभी' : 'All'} ({totalLessons})
            </button>
            <button 
              className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              ✓ {isHindi ? 'पूर्ण' : 'Completed'} ({completedCount})
            </button>
            <button 
              className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
              onClick={() => setFilter('pending')}
            >
              ○ {isHindi ? 'शेष' : 'Pending'} ({totalLessons - completedCount})
            </button>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder={isHindi ? 'पाठ खोजें...' : 'Search lessons...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button className="clear-search" onClick={() => setSearchTerm('')}>×</button>
            )}
          </div>
        </div>

        {/* Topics and Lessons */}
        <div className="topics-lessons-list">
          {filteredTopics.map((topic) => {
            const topicCompletedCount = topic.lessons.filter(
              l => completedLessons[`${topic.id}-${l.id}`]
            ).length;
            const originalLessonsCount = allTopics.find(t => t.id === topic.id)?.lessons.length || 0;

            return (
              <div 
                key={topic.id} 
                className="topic-section"
                style={{ '--topic-color': topic.color } as React.CSSProperties}
              >
                <div className="topic-header">
                  <div className="topic-info">
                    <span className="topic-icon">{topic.icon}</span>
                    <div>
                      <h2>{isHindi ? topic.nameHi : topic.nameEn}</h2>
                      <p>
                        {topic.lessons.length} {isHindi ? 'पाठ' : 'lessons'}
                        {topicCompletedCount > 0 && (
                          <span className="completed-tag">
                            • {topicCompletedCount}/{originalLessonsCount} {isHindi ? 'पूर्ण' : 'done'}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <Link to={`/topics/${topic.id}`} className="view-topic-btn">
                    {isHindi ? 'विषय देखें' : 'View Topic'} →
                  </Link>
                </div>

                <div className="lessons-list">
                  {topic.lessons.map((lesson) => {
                    const key = `${topic.id}-${lesson.id}`;
                    const isCompleted = !!completedLessons[key];

                    return (
                      <Link
                        key={lesson.id}
                        to={`/lesson/${topic.id}/${lesson.id}`}
                        className={`lesson-item ${isCompleted ? 'completed' : ''}`}
                      >
                        <span className="lesson-number">{lesson.id}</span>
                        <span className="lesson-title">
                          {isHindi ? lesson.titleHi : lesson.titleEn}
                        </span>
                        {isCompleted ? (
                          <span className="lesson-status completed">✓</span>
                        ) : (
                          <span className="lesson-status pending">→</span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {filteredTopics.length === 0 && (
            <div className="no-results">
              <span className="no-results-icon">🔍</span>
              <p>{isHindi ? 'कोई पाठ नहीं मिला' : 'No lessons found'}</p>
              <button className="btn btn-secondary" onClick={() => { setFilter('all'); setSearchTerm(''); }}>
                {isHindi ? 'फ़िल्टर साफ़ करें' : 'Clear Filters'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllLessons;
