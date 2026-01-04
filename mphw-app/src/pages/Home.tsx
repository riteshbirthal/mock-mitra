import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { examInfo, examSections, subjects, getTotalQuestions } from '../data/examData';
import './Home.css';

const Home = () => {
  const { t, isHindi } = useLanguage();
  const { progress, getOverallProgress } = useProgress();

  const features = [
    { icon: '📖', titleKey: 'feature.studyMaterial', descKey: 'feature.studyMaterialDesc' },
    { icon: '✍️', titleKey: 'feature.practiceQuestions', descKey: 'feature.practiceQuestionsDesc' },
    { icon: '📝', titleKey: 'feature.mockTests', descKey: 'feature.mockTestsDesc' },
    { icon: '📊', titleKey: 'feature.progressTracking', descKey: 'feature.progressTrackingDesc' },
    { icon: '🌐', titleKey: 'feature.bilingualContent', descKey: 'feature.bilingualContentDesc' },
    { icon: '💡', titleKey: 'feature.expertTips', descKey: 'feature.expertTipsDesc' },
  ];

  const totalQuestions = getTotalQuestions();
  const overallProgress = getOverallProgress();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              {isHindi ? examInfo.organization.hi : examInfo.organization.en}
            </div>
            <h1 className="hero-title">
              <span className="hero-icon">{examInfo.icon}</span>
              {t('hero.title')}
            </h1>
            <p className="hero-subtitle">
              {isHindi ? examInfo.fullName.hi : examInfo.fullName.en}
            </p>
            <p className="hero-desc">{t('hero.description')}</p>
            
            <div className="hero-buttons">
              <Link to="/syllabus" className="btn btn-primary btn-lg">
                {t('hero.startLearning')} →
              </Link>
              <Link to="/mock-test" className="btn btn-secondary btn-lg">
                {t('hero.takeTest')}
              </Link>
            </div>

            {/* Progress Indicator for returning users */}
            {progress.overallStats.totalQuestionsAttempted > 0 && (
              <div className="hero-progress">
                <div className="progress-info">
                  <span>{t('progress.overall')}</span>
                  <span>{overallProgress}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-bar-fill" 
                    style={{ width: `${overallProgress}%` }}
                  />
                </div>
                <Link to="/progress" className="progress-link">
                  {t('btn.viewResults')} →
                </Link>
              </div>
            )}
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-icon">📝</span>
              <span className="stat-value">{totalQuestions.toLocaleString()}+</span>
              <span className="stat-label">{t('stats.questions')}</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">📚</span>
              <span className="stat-value">{subjects.length}</span>
              <span className="stat-label">{t('stats.topics')}</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🎯</span>
              <span className="stat-value">10+</span>
              <span className="stat-label">{t('stats.mockTests')}</span>
            </div>
            <div className="stat-card highlight">
              <span className="stat-icon">🔥</span>
              <span className="stat-value">{progress.overallStats.streak || 0}</span>
              <span className="stat-label">{t('progress.streak')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Info Section */}
      <section className="exam-info-section">
        <div className="container">
          <h2 className="section-title">{t('exam.info')}</h2>
          
          <div className="exam-info-grid">
            <div className="info-card">
              <span className="info-icon">📝</span>
              <span className="info-value">{examInfo.totalQuestions}</span>
              <span className="info-label">{t('exam.questions')}</span>
            </div>
            <div className="info-card">
              <span className="info-icon">🎯</span>
              <span className="info-value">{examInfo.totalMarks}</span>
              <span className="info-label">{t('exam.marks')}</span>
            </div>
            <div className="info-card">
              <span className="info-icon">⏱️</span>
              <span className="info-value">{examInfo.duration}</span>
              <span className="info-label">{t('exam.minutes')}</span>
            </div>
            <div className="info-card">
              <span className="info-icon">❌</span>
              <span className="info-value">{examInfo.negativeMarking ? t('exam.yes') : t('exam.no')}</span>
              <span className="info-label">{t('exam.negativeMarking')}</span>
            </div>
          </div>

          <div className="exam-details">
            <span>
              📋 {t('exam.mode')}: {isHindi ? examInfo.mode.hi : examInfo.mode.en}
            </span>
            <span>
              🎓 {t('exam.qualification')}: {isHindi ? examInfo.qualification.hi : examInfo.qualification.en}
            </span>
          </div>
        </div>
      </section>

      {/* Exam Pattern Section */}
      <section className="exam-pattern-section">
        <div className="container">
          <h2 className="section-title">{t('exam.pattern')}</h2>
          
          <div className="pattern-cards">
            {examSections.map((section) => (
              <div 
                key={section.id}
                className="pattern-card"
                style={{ '--section-color': section.color } as React.CSSProperties}
              >
                <div className="pattern-header">
                  <span className="pattern-icon">{section.icon}</span>
                  <div className="pattern-weightage">{section.weightage}</div>
                </div>
                <h3>{isHindi ? section.name.hi : section.name.en}</h3>
                <div className="pattern-stats">
                  <span>{section.questions} {t('exam.questions')}</span>
                  <span>•</span>
                  <span>{section.marks} {t('exam.marks')}</span>
                </div>
                <div className="pattern-subjects">
                  {section.subjects.slice(0, 3).map(subjectId => {
                    const subject = subjects.find(s => s.id === subjectId);
                    return subject ? (
                      <Link 
                        key={subject.id}
                        to={`/topics/${subject.id}`}
                        className="subject-chip"
                      >
                        {subject.icon} {isHindi ? subject.name.hi : subject.name.en}
                      </Link>
                    ) : null;
                  })}
                  {section.subjects.length > 3 && (
                    <span className="more-subjects">
                      +{section.subjects.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="subjects-section">
        <div className="container">
          <h2 className="section-title">{t('nav.syllabus')}</h2>
          <p className="section-subtitle">
            {isHindi 
              ? 'सभी विषयों में महारत हासिल करें अपनी विस्तृत अध्ययन सामग्री के साथ' 
              : 'Master each subject with our comprehensive study materials'}
          </p>
          
          <div className="subjects-grid">
            {subjects.slice(0, 8).map((subject) => (
              <Link
                key={subject.id}
                to={`/topics/${subject.id}`}
                className="subject-card"
                style={{ '--accent-color': subject.color } as React.CSSProperties}
              >
                <div className="subject-header">
                  <span className="subject-icon">{subject.icon}</span>
                  <span className="topic-count">{subject.topics.length} Topics</span>
                </div>
                <div className="subject-card-content">
                  <h3>{isHindi ? subject.name.hi : subject.name.en}</h3>
                  <p>{isHindi ? subject.description.hi : subject.description.en}</p>
                  <div className="subject-meta">
                    <span className="meta-badge">{subject.questions} Qs</span>
                    <span className="meta-badge">{subject.marks} Marks</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="view-all-wrapper">
            <Link to="/syllabus" className="btn btn-secondary">
              {t('btn.viewAll')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">
            {isHindi ? 'हमें क्यों चुनें?' : 'Why Choose Us?'}
          </h2>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <span className="feature-icon">{feature.icon}</span>
                <h3>{t(feature.titleKey)}</h3>
                <p>{t(feature.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="quick-start-section">
        <div className="container">
          <div className="quick-start-content">
            <div className="quick-start-text">
              <h2>
                {isHindi 
                  ? 'आज ही अपनी तैयारी शुरू करें!' 
                  : 'Start Your Preparation Today!'}
              </h2>
              <p>
                {isHindi 
                  ? 'हजारों विद्यार्थियों के साथ जुड़ें जो MPHW परीक्षा में सफलता प्राप्त कर रहे हैं' 
                  : 'Join thousands of students who are succeeding in MPHW exam'}
              </p>
            </div>
            <div className="quick-start-actions">
              <Link to="/practice" className="btn btn-primary btn-lg">
                {t('btn.startPractice')} →
              </Link>
              <Link to="/syllabus" className="btn btn-outline btn-lg">
                {t('nav.syllabus')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
