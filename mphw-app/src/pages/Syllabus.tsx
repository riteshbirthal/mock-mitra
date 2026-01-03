import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { examInfo, examSections, subjects } from '../data/examData';
import './Syllabus.css';

const Syllabus = () => {
  const { t, isHindi } = useLanguage();
  const { getTopicProgress } = useProgress();

  const getSubjectProgress = (subjectId: string) => {
    const subject = subjects.find(s => s.id === subjectId);
    if (!subject) return 0;
    
    let completed = 0;
    subject.topics.forEach(topic => {
      const topicProgress = getTopicProgress(`${subjectId}-${topic.id}`);
      if (topicProgress?.completed) completed++;
    });
    
    return Math.round((completed / subject.topics.length) * 100);
  };

  return (
    <div className="syllabus-page">
      <div className="container">
        {/* Header */}
        <div className="syllabus-header">
          <h1>
            <span className="header-icon">{examInfo.icon}</span>
            {isHindi ? examInfo.fullName.hi : examInfo.fullName.en}
          </h1>
          <p>{t('nav.syllabus')}</p>
          
          <div className="exam-quick-info">
            <div className="quick-info-item">
              <span className="qi-icon">📝</span>
              <span>{examInfo.totalQuestions} {t('exam.questions')}</span>
            </div>
            <div className="quick-info-item">
              <span className="qi-icon">🎯</span>
              <span>{examInfo.totalMarks} {t('exam.marks')}</span>
            </div>
            <div className="quick-info-item">
              <span className="qi-icon">⏱️</span>
              <span>{examInfo.duration} {t('exam.minutes')}</span>
            </div>
          </div>
        </div>

        {/* Exam Sections */}
        {examSections.map((section) => (
          <section key={section.id} className="syllabus-section">
            <div 
              className="section-header"
              style={{ '--section-color': section.color } as React.CSSProperties}
            >
              <div className="section-title-row">
                <span className="section-icon">{section.icon}</span>
                <div className="section-info">
                  <h2>{isHindi ? section.name.hi : section.name.en}</h2>
                  <p>{section.questions} {t('exam.questions')} • {section.marks} {t('exam.marks')}</p>
                </div>
              </div>
              <div className="section-weightage">{section.weightage}</div>
            </div>

            <div className="subjects-list">
              {section.subjects.map(subjectId => {
                const subject = subjects.find(s => s.id === subjectId);
                if (!subject) return null;

                const subjectProgress = getSubjectProgress(subject.id);

                return (
                  <Link
                    key={subject.id}
                    to={`/topics/${subject.id}`}
                    className="subject-row"
                    style={{ '--subject-color': subject.color } as React.CSSProperties}
                  >
                    <div className="subject-main">
                      <span className="subject-icon">{subject.icon}</span>
                      <div className="subject-info">
                        <h3>{isHindi ? subject.name.hi : subject.name.en}</h3>
                        <p>{isHindi ? subject.description.hi : subject.description.en}</p>
                      </div>
                    </div>

                    <div className="subject-stats">
                      <div className="stat-item">
                        <span className="stat-label">Topics</span>
                        <span className="stat-value">{subject.topics.length}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">{t('exam.marks')}</span>
                        <span className="stat-value">{subject.marks}</span>
                      </div>
                      <div className="stat-item progress-stat">
                        <div className="mini-progress">
                          <div 
                            className="mini-progress-fill"
                            style={{ width: `${subjectProgress}%` }}
                          />
                        </div>
                        <span className="progress-text">{subjectProgress}%</span>
                      </div>
                    </div>

                    <span className="subject-arrow">→</span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}

        {/* Study Tips */}
        <section className="study-tips">
          <h2>
            {isHindi ? '📚 परीक्षा की तैयारी के टिप्स' : '📚 Exam Preparation Tips'}
          </h2>
          <div className="tips-grid">
            <div className="tip-card">
              <span className="tip-icon">🎯</span>
              <h3>{isHindi ? 'विषय विशेष पर फोकस' : 'Focus on Subject'}</h3>
              <p>
                {isHindi 
                  ? '70% प्रश्न विषय विशेष (स्वास्थ्य) से आते हैं। इसे प्राथमिकता दें।' 
                  : '70% questions come from Subject Specific (Health). Prioritize this section.'}
              </p>
            </div>
            <div className="tip-card">
              <span className="tip-icon">📊</span>
              <h3>{isHindi ? 'हरियाणा GK' : 'Haryana GK'}</h3>
              <p>
                {isHindi 
                  ? 'सामान्य जागरूकता में हरियाणा से संबंधित प्रश्न महत्वपूर्ण हैं।' 
                  : 'Haryana-related questions in General Awareness are important.'}
              </p>
            </div>
            <div className="tip-card">
              <span className="tip-icon">💻</span>
              <h3>{isHindi ? 'कंप्यूटर स्कोरिंग' : 'Computer Scoring'}</h3>
              <p>
                {isHindi 
                  ? 'कंप्यूटर ज्ञान आसान है और 10 अंक का है। इसे पूरा करें।' 
                  : 'Computer Knowledge is easy and carries 10 marks. Complete it fully.'}
              </p>
            </div>
            <div className="tip-card">
              <span className="tip-icon">⏰</span>
              <h3>{isHindi ? 'समय प्रबंधन' : 'Time Management'}</h3>
              <p>
                {isHindi 
                  ? '90 मिनट में 100 प्रश्न। प्रति प्रश्न 54 सेकंड मिलते हैं।' 
                  : '100 questions in 90 minutes. You get 54 seconds per question.'}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="syllabus-cta">
          <Link to="/practice" className="btn btn-primary btn-lg">
            {t('btn.startPractice')} →
          </Link>
          <Link to="/mock-test" className="btn btn-secondary btn-lg">
            {t('nav.mockTest')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
