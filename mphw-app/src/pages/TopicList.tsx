import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { getSubjectById, subjects } from '../data/examData';
import './TopicList.css';

const TopicList = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const { t, isHindi } = useLanguage();
  const { getTopicProgress } = useProgress();
  
  const subject = subjectId ? getSubjectById(subjectId) : null;

  if (!subject) {
    return (
      <div className="container">
        <div className="error-message">
          <h2>{isHindi ? 'विषय नहीं मिला' : 'Subject not found'}</h2>
          <Link to="/syllabus" className="btn btn-primary mt-3">
            {t('btn.backToTopics')}
          </Link>
        </div>
      </div>
    );
  }

  const getProgressStatus = (topicId: string) => {
    const progress = getTopicProgress(`${subjectId}-${topicId}`);
    if (!progress) return 'not-started';
    if (progress.completed) return 'completed';
    if (progress.questionsAttempted > 0) return 'in-progress';
    return 'not-started';
  };

  const completedTopics = subject.topics.filter(
    topic => getProgressStatus(topic.id) === 'completed'
  ).length;

  const subjectProgress = Math.round((completedTopics / subject.topics.length) * 100);

  return (
    <div className="topic-list-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/syllabus">{t('nav.syllabus')}</Link>
          <span>/</span>
          <span>{isHindi ? subject.name.hi : subject.name.en}</span>
        </nav>

        {/* Subject Header */}
        <div 
          className="subject-header"
          style={{ '--subject-color': subject.color } as React.CSSProperties}
        >
          <div className="subject-header-content">
            <span className="subject-icon">{subject.icon}</span>
            <div className="subject-header-info">
              <h1>{isHindi ? subject.name.hi : subject.name.en}</h1>
              <p>{isHindi ? subject.description.hi : subject.description.en}</p>
            </div>
          </div>
          
          <div className="subject-header-stats">
            <div className="header-stat">
              <span className="stat-value">{subject.topics.length}</span>
              <span className="stat-label">Topics</span>
            </div>
            <div className="header-stat">
              <span className="stat-value">{subject.marks}</span>
              <span className="stat-label">{t('exam.marks')}</span>
            </div>
            <div className="header-stat progress-stat">
              <div className="circular-progress">
                <svg viewBox="0 0 36 36">
                  <path
                    className="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle-fill"
                    strokeDasharray={`${subjectProgress}, 100`}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="progress-value">{subjectProgress}%</span>
              </div>
              <span className="stat-label">{t('progress.overall')}</span>
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="topics-section">
          <h2 className="section-title">
            {isHindi ? 'टॉपिक्स' : 'Topics'} ({subject.topics.length})
          </h2>

          <div className="topics-grid">
            {subject.topics.map((topic, index) => {
              const status = getProgressStatus(topic.id);
              const topicProgress = getTopicProgress(`${subjectId}-${topic.id}`);
              
              return (
                <Link
                  key={topic.id}
                  to={`/topic/${subjectId}/${topic.id}`}
                  className={`topic-card ${status}`}
                  style={{ '--topic-color': topic.color } as React.CSSProperties}
                >
                  <div className="topic-number">{String(index + 1).padStart(2, '0')}</div>
                  
                  <div className="topic-icon">{topic.icon}</div>
                  
                  <h3>{isHindi ? topic.name.hi : topic.name.en}</h3>
                  <p>{isHindi ? topic.description.hi : topic.description.en}</p>

                  <div className="topic-meta">
                    <span className={`difficulty ${topic.difficulty.toLowerCase()}`}>
                      {isHindi 
                        ? topic.difficulty === 'Easy' ? 'आसान' : topic.difficulty === 'Medium' ? 'मध्यम' : 'कठिन'
                        : topic.difficulty}
                    </span>
                    <span className="question-count">
                      {topic.questionsCount} {isHindi ? 'प्रश्न' : 'Qs'}
                    </span>
                  </div>

                  {topicProgress && topicProgress.questionsAttempted > 0 && (
                    <div className="topic-progress">
                      <div className="topic-progress-bar">
                        <div 
                          className="topic-progress-fill"
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

                  <div className="topic-status-badge">
                    {status === 'completed' && (
                      <span className="status-completed">✓ {isHindi ? 'पूर्ण' : 'Done'}</span>
                    )}
                    {status === 'in-progress' && (
                      <span className="status-progress">{isHindi ? 'जारी' : 'In Progress'}</span>
                    )}
                    {status === 'not-started' && (
                      <span className="status-new">{isHindi ? 'नया' : 'New'}</span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="topic-list-nav">
          <Link to="/syllabus" className="btn btn-secondary">
            ← {t('btn.backToTopics')}
          </Link>
          <Link to={`/practice/${subjectId}`} className="btn btn-primary">
            {t('btn.startPractice')} →
          </Link>
        </div>

        {/* Related Subjects */}
        <div className="related-subjects">
          <h3>{isHindi ? 'अन्य विषय' : 'Other Subjects'}</h3>
          <div className="related-grid">
            {subjects
              .filter(s => s.id !== subjectId)
              .slice(0, 4)
              .map(relatedSubject => (
                <Link
                  key={relatedSubject.id}
                  to={`/topics/${relatedSubject.id}`}
                  className="related-card"
                >
                  <span className="related-icon">{relatedSubject.icon}</span>
                  <span className="related-name">
                    {isHindi ? relatedSubject.name.hi : relatedSubject.name.en}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicList;
