import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { subjects, getAllTopics } from '../data/examData';
import './Progress.css';

const Progress = () => {
  const { t, isHindi } = useLanguage();
  const { user, userProfile } = useAuth();
  const { progress, getOverallProgress, resetProgress } = useProgress();

  const overallProgress = getOverallProgress();
  const totalTopics = getAllTopics().length;
  const completedTopics = progress.overallStats.topicsCompleted;
  const accuracy = progress.overallStats.totalQuestionsAttempted > 0
    ? Math.round((progress.overallStats.totalCorrectAnswers / progress.overallStats.totalQuestionsAttempted) * 100)
    : 0;

  const achievements = [
    { id: 'century', icon: '💯', name: { en: 'Century Club', hi: 'शतक क्लब' }, desc: { en: '100 questions attempted', hi: '100 प्रश्न हल किए' }, unlocked: progress.achievements.includes('century') },
    { id: '500club', icon: '🎖️', name: { en: '500 Club', hi: '500 क्लब' }, desc: { en: '500 questions attempted', hi: '500 प्रश्न हल किए' }, unlocked: progress.achievements.includes('500club') },
    { id: 'weekStreak', icon: '🔥', name: { en: 'Week Warrior', hi: 'सप्ताह योद्धा' }, desc: { en: '7 day streak', hi: '7 दिन की स्ट्रीक' }, unlocked: progress.achievements.includes('weekStreak') },
    { id: 'monthStreak', icon: '👑', name: { en: 'Month Master', hi: 'माह मास्टर' }, desc: { en: '30 day streak', hi: '30 दिन की स्ट्रीक' }, unlocked: progress.achievements.includes('monthStreak') },
    { id: 'perfectScore', icon: '⭐', name: { en: 'Perfect Score', hi: 'परफेक्ट स्कोर' }, desc: { en: '100% in a topic', hi: 'किसी टॉपिक में 100%' }, unlocked: false },
    { id: 'earlyBird', icon: '🌅', name: { en: 'Early Bird', hi: 'अर्ली बर्ड' }, desc: { en: 'Study before 6 AM', hi: 'सुबह 6 बजे से पहले पढ़ाई' }, unlocked: false },
  ];

  const getSubjectProgress = (subjectId: string) => {
    const subject = subjects.find(s => s.id === subjectId);
    if (!subject) return { completed: 0, total: 0, questions: 0, correct: 0 };
    
    let completed = 0;
    let questions = 0;
    let correct = 0;

    subject.topics.forEach(topic => {
      const topicProgress = progress.topics[`${subjectId}-${topic.id}`];
      if (topicProgress?.completed) completed++;
      if (topicProgress) {
        questions += topicProgress.questionsAttempted;
        correct += topicProgress.correctAnswers;
      }
    });

    return { 
      completed, 
      total: subject.topics.length, 
      questions,
      correct,
      percentage: Math.round((completed / subject.topics.length) * 100)
    };
  };

  const formatTime = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins < 60) return `${mins}m ${secs}s`;
    const hours = Math.floor(mins / 60);
    const remainingMins = mins % 60;
    return `${hours}h ${remainingMins}m`;
  };

  return (
    <div className="progress-page">
      <div className="container">
        {/* Header */}
        <div className="progress-header">
          <h1>{t('nav.progress')}</h1>
          <p>
            {isHindi 
              ? 'अपनी तैयारी की यात्रा ट्रैक करें' 
              : 'Track your preparation journey'}
          </p>
        </div>

        {/* Overall Stats */}
        <div className="overall-stats">
          <div className="progress-circle-card">
            <div className="progress-circle large">
              <svg viewBox="0 0 36 36">
                <path
                  className="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle-fill"
                  strokeDasharray={`${overallProgress}, 100`}
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="progress-circle-content">
                <span className="progress-value">{overallProgress}%</span>
                <span className="progress-label">{t('progress.overall')}</span>
              </div>
            </div>
            <p className="progress-message">
              {overallProgress < 25 && (isHindi ? '🚀 अभी शुरुआत है!' : '🚀 Just getting started!')}
              {overallProgress >= 25 && overallProgress < 50 && (isHindi ? '💪 अच्छी प्रगति!' : '💪 Good progress!')}
              {overallProgress >= 50 && overallProgress < 75 && (isHindi ? '🎯 आधा रास्ता पार!' : '🎯 Halfway there!')}
              {overallProgress >= 75 && overallProgress < 100 && (isHindi ? '⭐ लगभग पूर्ण!' : '⭐ Almost done!')}
              {overallProgress === 100 && (isHindi ? '🏆 बधाई हो!' : '🏆 Congratulations!')}
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-icon">📝</span>
              <div className="stat-content">
                <span className="stat-value">{progress.overallStats.totalQuestionsAttempted}</span>
                <span className="stat-label">{t('progress.questionsAttempted')}</span>
              </div>
            </div>
            <div className="stat-card">
              <span className="stat-icon">✅</span>
              <div className="stat-content">
                <span className="stat-value">{progress.overallStats.totalCorrectAnswers}</span>
                <span className="stat-label">{t('practice.correct')}</span>
              </div>
            </div>
            <div className="stat-card">
              <span className="stat-icon">📊</span>
              <div className="stat-content">
                <span className="stat-value">{accuracy}%</span>
                <span className="stat-label">{t('practice.accuracy')}</span>
              </div>
            </div>
            <div className="stat-card">
              <span className="stat-icon">⏱️</span>
              <div className="stat-content">
                <span className="stat-value">{formatTime(progress.overallStats.totalTimeSpent)}</span>
                <span className="stat-label">{t('practice.timeSpent')}</span>
              </div>
            </div>
            <div className="stat-card highlight">
              <span className="stat-icon">🔥</span>
              <div className="stat-content">
                <span className="stat-value">{progress.overallStats.streak}</span>
                <span className="stat-label">{t('progress.streak')}</span>
              </div>
            </div>
            <div className="stat-card">
              <span className="stat-icon">📚</span>
              <div className="stat-content">
                <span className="stat-value">{completedTopics}/{totalTopics}</span>
                <span className="stat-label">{t('progress.topicsCompleted')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subject Progress */}
        <div className="subject-progress-section">
          <h2>{isHindi ? 'विषय-वार प्रगति' : 'Subject-wise Progress'}</h2>
          
          <div className="subject-progress-list">
            {subjects.map(subject => {
              const subjectProg = getSubjectProgress(subject.id);
              const subjectAccuracy = subjectProg.questions > 0
                ? Math.round((subjectProg.correct / subjectProg.questions) * 100)
                : 0;

              return (
                <Link
                  key={subject.id}
                  to={`/topics/${subject.id}`}
                  className="subject-progress-card"
                  style={{ '--subject-color': subject.color } as React.CSSProperties}
                >
                  <div className="subject-info">
                    <span className="subject-icon">{subject.icon}</span>
                    <div className="subject-details">
                      <h3>{isHindi ? subject.name.hi : subject.name.en}</h3>
                      <p>{subjectProg.completed}/{subjectProg.total} {isHindi ? 'टॉपिक्स' : 'topics'}</p>
                    </div>
                  </div>

                  <div className="subject-stats">
                    <div className="mini-stat">
                      <span className="mini-value">{subjectProg.questions}</span>
                      <span className="mini-label">Qs</span>
                    </div>
                    <div className="mini-stat">
                      <span className="mini-value">{subjectAccuracy}%</span>
                      <span className="mini-label">{isHindi ? 'सटीकता' : 'Accuracy'}</span>
                    </div>
                  </div>

                  <div className="subject-progress-bar-wrapper">
                    <div className="progress-bar">
                      <div 
                        className="progress-bar-fill"
                        style={{ width: `${subjectProg.percentage}%` }}
                      />
                    </div>
                    <span className="progress-percentage">{subjectProg.percentage}%</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="achievements-section">
          <h2>{isHindi ? '🏆 उपलब्धियाँ' : '🏆 Achievements'}</h2>
          
          <div className="achievements-grid">
            {achievements.map(achievement => (
              <div 
                key={achievement.id}
                className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
              >
                <span className="achievement-icon">{achievement.icon}</span>
                <h4>{isHindi ? achievement.name.hi : achievement.name.en}</h4>
                <p>{isHindi ? achievement.desc.hi : achievement.desc.en}</p>
                {!achievement.unlocked && <span className="lock-icon">🔒</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Bookmarks */}
        {progress.bookmarks.length > 0 && (
          <div className="bookmarks-section">
            <h2>{isHindi ? '🔖 बुकमार्क किए गए प्रश्न' : '🔖 Bookmarked Questions'}</h2>
            <p className="bookmark-count">
              {progress.bookmarks.length} {isHindi ? 'प्रश्न बुकमार्क किए' : 'questions bookmarked'}
            </p>
          </div>
        )}

        {/* User Points & Rewards (for logged in users) */}
        {user && userProfile && (
          <div className="user-rewards-banner">
            <div className="rewards-info">
              <span className="rewards-icon">⭐</span>
              <div className="rewards-text">
                <span className="rewards-points">{userProfile.totalPoints.toLocaleString()} {isHindi ? 'अंक' : 'Points'}</span>
                <span className="rewards-level">{isHindi ? 'स्तर' : 'Level'} {userProfile.level}</span>
              </div>
            </div>
            <Link to="/rewards" className="btn btn-warning">
              🎁 {isHindi ? 'रिवार्ड्स देखें' : 'View Rewards'}
            </Link>
          </div>
        )}

        {/* Actions */}
        <div className="progress-actions">
          <Link to="/practice" className="btn btn-primary btn-lg">
            {t('btn.continue')} {t('nav.practice')} →
          </Link>
          <Link to="/rewards" className="btn btn-secondary btn-lg">
            🎁 {isHindi ? 'रिवार्ड्स' : 'Rewards'}
          </Link>
          <button 
            className="btn btn-outline"
            onClick={() => {
              if (window.confirm(isHindi 
                ? 'क्या आप वाकई प्रगति रीसेट करना चाहते हैं?' 
                : 'Are you sure you want to reset progress?')) {
                resetProgress();
              }
            }}
          >
            🔄 {isHindi ? 'प्रगति रीसेट करें' : 'Reset Progress'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Progress;
