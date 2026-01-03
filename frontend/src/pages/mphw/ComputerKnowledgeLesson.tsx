import { useParams, Link, useNavigate } from 'react-router-dom';
import { getLessonById, computerKnowledgeLessons, LessonSection } from '../../data/computer-knowledge';
import './ComputerKnowledgeLesson.css';

const ComputerKnowledgeLesson = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  
  const lesson = lessonId ? getLessonById(lessonId) : undefined;
  
  if (!lesson) {
    return (
      <div className="ck-lesson-page">
        <div className="container">
          <div className="lesson-not-found">
            <h2>Lesson Not Found</h2>
            <p>The requested lesson could not be found.</p>
            <Link to="/mphw/computer-knowledge" className="btn btn-primary">
              Back to Course
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentIndex = computerKnowledgeLessons.findIndex(l => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? computerKnowledgeLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < computerKnowledgeLessons.length - 1 ? computerKnowledgeLessons[currentIndex + 1] : null;

  const renderSection = (section: LessonSection, index: number) => {
    switch (section.type) {
      case 'text':
        return (
          <div key={index} className="section-block section-text">
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        );
      
      case 'list':
        return (
          <div key={index} className="section-block section-list">
            <h3>{section.title}</h3>
            <ul>
              {section.items?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        );
      
      case 'table':
        return (
          <div key={index} className="section-block section-table">
            <h3>{section.title}</h3>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    {section.tableData?.headers.map((header, i) => (
                      <th key={i}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.tableData?.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case 'highlight':
        return (
          <div key={index} className={`section-block section-highlight highlight-${section.highlightType}`}>
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="ck-lesson-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/mphw">MPHW Prep</Link>
          <span>/</span>
          <Link to="/mphw/computer-knowledge">Computer Knowledge</Link>
          <span>/</span>
          <span>Lesson {lesson.number}</span>
        </nav>

        {/* Lesson Header */}
        <div className="lesson-header-card">
          <div className="lesson-header-content">
            <div className="lesson-meta">
              <span className="lesson-badge">Lesson {lesson.number} of {computerKnowledgeLessons.length}</span>
              <span className="lesson-duration-badge">
                <span className="duration-icon">⏱️</span>
                {lesson.duration}
              </span>
            </div>
            <div className="lesson-title-row">
              <span className="lesson-icon-large">{lesson.icon}</span>
              <div>
                <h1>{lesson.title}</h1>
                <p>{lesson.description}</p>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="lesson-progress-bar">
            {computerKnowledgeLessons.map((l, i) => (
              <div
                key={l.id}
                className={`progress-dot ${l.id === lesson.id ? 'active' : ''} ${i < currentIndex ? 'completed' : ''}`}
                onClick={() => navigate(`/mphw/computer-knowledge/${l.id}`)}
                title={l.title}
              />
            ))}
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="lesson-objectives-card">
          <h2>🎯 Learning Objectives</h2>
          <div className="objectives-list">
            {lesson.objectives.map((obj, i) => (
              <div key={i} className="objective-item">
                <span className="objective-check">✓</span>
                <span>{obj}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="lesson-content">
          {lesson.sections.map((section, index) => renderSection(section, index))}
        </div>

        {/* Key Terms */}
        {lesson.keyTerms && lesson.keyTerms.length > 0 && (
          <div className="key-terms-card">
            <h2>📖 Key Terms</h2>
            <div className="terms-grid">
              {lesson.keyTerms.map((term, i) => (
                <div key={i} className="term-item">
                  <span className="term-name">{term.term}</span>
                  <span className="term-definition">{term.definition}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Shortcuts */}
        {lesson.shortcuts && lesson.shortcuts.length > 0 && (
          <div className="shortcuts-card">
            <h2>⌨️ Keyboard Shortcuts</h2>
            <div className="shortcuts-grid">
              {lesson.shortcuts.map((shortcut, i) => (
                <div key={i} className="shortcut-item">
                  <kbd className="shortcut-key">{shortcut.shortcut}</kbd>
                  <span className="shortcut-action">{shortcut.action}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Summary */}
        <div className="summary-card">
          <h2>📝 Summary</h2>
          <ul className="summary-list">
            {lesson.summary.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div className="lesson-navigation">
          {prevLesson ? (
            <Link to={`/mphw/computer-knowledge/${prevLesson.id}`} className="nav-btn nav-prev">
              <span className="nav-direction">← Previous</span>
              <span className="nav-title">{prevLesson.title}</span>
            </Link>
          ) : (
            <div className="nav-btn nav-placeholder"></div>
          )}
          
          <Link to="/mphw/computer-knowledge" className="nav-btn nav-overview">
            <span className="nav-icon">📚</span>
            <span>All Lessons</span>
          </Link>
          
          {nextLesson ? (
            <Link to={`/mphw/computer-knowledge/${nextLesson.id}`} className="nav-btn nav-next">
              <span className="nav-direction">Next →</span>
              <span className="nav-title">{nextLesson.title}</span>
            </Link>
          ) : (
            <Link to="/mphw/topics/computer" className="nav-btn nav-next nav-complete">
              <span className="nav-direction">Practice →</span>
              <span className="nav-title">Take Quiz</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComputerKnowledgeLesson;
