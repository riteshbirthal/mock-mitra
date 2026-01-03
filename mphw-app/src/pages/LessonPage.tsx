import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useLanguage } from '../context/LanguageContext';
import { getLessonByIds, getNextLesson, getPrevLesson } from '../data/lessonIndex';
import './LessonPage.css';

const LessonPage = () => {
  const { topicId, lessonId } = useParams<{ topicId: string; lessonId: string }>();
  const { isHindi } = useLanguage();
  const [isCompleted, setIsCompleted] = useState(false);

  const lessonIdNum = parseInt(lessonId || '1', 10);
  const data = topicId ? getLessonByIds(topicId, lessonIdNum) : null;
  const nextLesson = topicId ? getNextLesson(topicId, lessonIdNum) : null;
  const prevLesson = topicId ? getPrevLesson(topicId, lessonIdNum) : null;

  useEffect(() => {
    const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '{}');
    const key = `${topicId}-${lessonId}`;
    setIsCompleted(!!completedLessons[key]);
    window.scrollTo(0, 0);
  }, [topicId, lessonId]);

  const markComplete = () => {
    const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '{}');
    const key = `${topicId}-${lessonId}`;
    completedLessons[key] = true;
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
    setIsCompleted(true);
  };

  const processContent = (content: string) => {
    return content
      .replace(/:::info\n?([\s\S]*?):::/g, '<div class="callout callout-info"><div class="callout-icon">ℹ️</div><div class="callout-content">$1</div></div>')
      .replace(/:::tip\n?([\s\S]*?):::/g, '<div class="callout callout-tip"><div class="callout-icon">💡</div><div class="callout-content">$1</div></div>')
      .replace(/:::success\n?([\s\S]*?):::/g, '<div class="callout callout-success"><div class="callout-icon">✅</div><div class="callout-content">$1</div></div>')
      .replace(/:::warning\n?([\s\S]*?):::/g, '<div class="callout callout-warning"><div class="callout-icon">⚠️</div><div class="callout-content">$1</div></div>')
      .replace(/:::danger\n?([\s\S]*?):::/g, '<div class="callout callout-danger"><div class="callout-icon">🚨</div><div class="callout-content">$1</div></div>');
  };

  if (!data) {
    return (
      <div className="lesson-page">
        <div className="container">
          <div className="lesson-not-found">
            <h2>{isHindi ? 'पाठ नहीं मिला' : 'Lesson not found'}</h2>
            <Link to="/syllabus" className="btn btn-primary">
              {isHindi ? 'पाठ्यक्रम पर वापस जाएं' : 'Back to Syllabus'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { topic, lesson } = data;
  const content = isHindi ? lesson.contentHi : lesson.contentEn;
  const title = isHindi ? lesson.titleHi : lesson.titleEn;
  const topicName = isHindi ? topic.nameHi : topic.nameEn;

  return (
    <div className="lesson-page" style={{ '--topic-color': topic.color } as React.CSSProperties}>
      <div className="container">
        {/* Breadcrumb */}
        <nav className="lesson-breadcrumb">
          <Link to="/syllabus">{isHindi ? 'पाठ्यक्रम' : 'Syllabus'}</Link>
          <span>/</span>
          <Link to={`/topics/${topic.id}`}>{topicName}</Link>
          <span>/</span>
          <span>{isHindi ? `पाठ ${lesson.id}` : `Lesson ${lesson.id}`}</span>
        </nav>

        {/* Lesson Header */}
        <div className="lesson-header">
          <div className="lesson-topic-badge">
            <span className="topic-icon">{topic.icon}</span>
            <span>{topicName}</span>
          </div>
          <h1 className="lesson-title">
            <span className="lesson-number">{lesson.id}</span>
            {title}
          </h1>
          <div className="lesson-meta">
            <span className="meta-item">
              📖 {isHindi ? `पाठ ${lesson.id} / ${topic.lessons.length}` : `Lesson ${lesson.id} of ${topic.lessons.length}`}
            </span>
            {isCompleted && (
              <span className="meta-item completed-badge">
                ✅ {isHindi ? 'पूर्ण' : 'Completed'}
              </span>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="lesson-progress-bar">
          <div 
            className="lesson-progress-fill" 
            style={{ width: `${(lesson.id / topic.lessons.length) * 100}%` }}
          />
        </div>

        {/* Lesson Content */}
        <article className="lesson-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {processContent(content)}
          </ReactMarkdown>
        </article>

        {/* Completion Section */}
        {!isCompleted && (
          <div className="lesson-completion">
            <button className="btn btn-success btn-lg" onClick={markComplete}>
              ✓ {isHindi ? 'पाठ पूर्ण करें' : 'Mark as Complete'}
            </button>
          </div>
        )}

        {/* Navigation */}
        <div className="lesson-navigation">
          {prevLesson ? (
            <Link 
              to={`/lesson/${topic.id}/${prevLesson.id}`} 
              className="nav-btn nav-prev"
            >
              <span className="nav-direction">← {isHindi ? 'पिछला' : 'Previous'}</span>
              <span className="nav-title">{isHindi ? prevLesson.titleHi : prevLesson.titleEn}</span>
            </Link>
          ) : (
            <div className="nav-btn nav-placeholder" />
          )}

          <Link to={`/topics/${topic.id}`} className="nav-btn nav-center">
            <span className="nav-icon">{topic.icon}</span>
            <span>{isHindi ? 'सभी पाठ' : 'All Lessons'}</span>
          </Link>

          {nextLesson ? (
            <Link 
              to={`/lesson/${topic.id}/${nextLesson.id}`} 
              className="nav-btn nav-next"
              onClick={() => !isCompleted && markComplete()}
            >
              <span className="nav-direction">{isHindi ? 'अगला' : 'Next'} →</span>
              <span className="nav-title">{isHindi ? nextLesson.titleHi : nextLesson.titleEn}</span>
            </Link>
          ) : (
            <Link 
              to={`/topics/${topic.id}`} 
              className="nav-btn nav-next nav-complete"
              onClick={() => !isCompleted && markComplete()}
            >
              <span className="nav-direction">🎉 {isHindi ? 'पूर्ण!' : 'Complete!'}</span>
              <span className="nav-title">{isHindi ? 'विषय समाप्त' : 'Topic Finished'}</span>
            </Link>
          )}
        </div>

        {/* All Lessons in Topic */}
        <div className="all-lessons-section">
          <h3>{isHindi ? 'इस विषय के सभी पाठ' : 'All Lessons in This Topic'}</h3>
          <div className="lessons-grid">
            {topic.lessons.map((l) => {
              const key = `${topic.id}-${l.id}`;
              const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '{}');
              const isLessonCompleted = !!completedLessons[key];
              const isCurrent = l.id === lesson.id;
              
              return (
                <Link 
                  key={l.id}
                  to={`/lesson/${topic.id}/${l.id}`}
                  className={`lesson-card ${isCurrent ? 'current' : ''} ${isLessonCompleted ? 'completed' : ''}`}
                >
                  <span className="lesson-card-number">{l.id}</span>
                  <span className="lesson-card-title">{isHindi ? l.titleHi : l.titleEn}</span>
                  {isLessonCompleted && <span className="lesson-card-check">✓</span>}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
