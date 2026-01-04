import { useState, useMemo, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useLanguage } from '../../context/LanguageContext';
import { Lesson } from '../../data/computerKnowledgeContent';
import './LessonContent.css';

const STORAGE_KEY_ACTIVE_LESSON = 'computerKnowledge_activeLesson';

interface LessonContentProps {
  lessons: Lesson[];
  onLessonComplete?: (lessonId: number) => void;
  completedLessons?: number[];
}

// Process custom callout syntax (:::info, :::tip, :::success, :::warning)
const processCallouts = (content: string): string => {
  const calloutRegex = /:::(info|tip|success|warning|danger)\n([\s\S]*?):::/g;
  return content.replace(calloutRegex, (_, type, text) => {
    const icons: Record<string, string> = {
      info: 'ℹ️',
      tip: '💡',
      success: '✅',
      warning: '⚠️',
      danger: '❌'
    };
    const titles: Record<string, string> = {
      info: 'Information',
      tip: 'Tip',
      success: 'Success',
      warning: 'Warning',
      danger: 'Important'
    };
    return `<div class="callout callout-${type}"><div class="callout-icon">${icons[type]}</div><div class="callout-content"><span class="callout-title">${titles[type]}</span>${text.trim()}</div></div>`;
  });
};

// Convert **text** to <mark> tags for semantic highlighting
const processBoldToMark = (content: string): string => {
  // Replace **text** with <mark>text</mark>
  return content.replace(/\*\*([^*]+)\*\*/g, '<mark>$1</mark>');
};

export default function LessonContent({ lessons, onLessonComplete, completedLessons = [] }: LessonContentProps) {
  const { isHindi } = useLanguage();
  
  // Initialize activeLesson from localStorage
  const [activeLesson, setActiveLesson] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY_ACTIVE_LESSON);
    const savedId = saved ? parseInt(saved, 10) : null;
    // Validate that saved lesson exists in lessons array
    if (savedId && lessons.some(l => l.id === savedId)) {
      return savedId;
    }
    return lessons[0]?.id || 1;
  });
  
  const [expandedLessons, setExpandedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_ACTIVE_LESSON);
    const savedId = saved ? parseInt(saved, 10) : null;
    if (savedId && lessons.some(l => l.id === savedId)) {
      return [savedId];
    }
    return [lessons[0]?.id || 1];
  });

  // Persist activeLesson to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_ACTIVE_LESSON, activeLesson.toString());
  }, [activeLesson]);

  const currentLesson = lessons.find(l => l.id === activeLesson);

  // Process content with callouts and convert **text** to <mark>
  const processedContent = useMemo(() => {
    if (!currentLesson) return '';
    const rawContent = isHindi ? currentLesson.contentHi : currentLesson.contentEn;
    const withCallouts = processCallouts(rawContent);
    const withMarks = processBoldToMark(withCallouts);
    return withMarks;
  }, [currentLesson, isHindi]);

  const toggleLesson = (lessonId: number) => {
    setActiveLesson(lessonId);
    if (!expandedLessons.includes(lessonId)) {
      setExpandedLessons([...expandedLessons, lessonId]);
    }
  };

  const handleComplete = (lessonId: number) => {
    if (onLessonComplete) {
      onLessonComplete(lessonId);
    }
  };

  return (
    <div className="lesson-content">
      <div className="lesson-sidebar">
        <h3 className="sidebar-title">
          {isHindi ? 'पाठ सूची' : 'Lessons'}
        </h3>
        <div className="lesson-list">
          {lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              className={`lesson-item ${activeLesson === lesson.id ? 'active' : ''} ${completedLessons.includes(lesson.id) ? 'completed' : ''}`}
              onClick={() => toggleLesson(lesson.id)}
            >
              <span className="lesson-number">
                {completedLessons.includes(lesson.id) ? '✓' : index + 1}
              </span>
              <span className="lesson-name">
                {isHindi ? lesson.titleHi : lesson.titleEn}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="lesson-main">
        {currentLesson && (
          <>
            <div className="lesson-header">
              <h2 className="lesson-title">
                {isHindi ? currentLesson.titleHi : currentLesson.titleEn}
              </h2>
              <div className="lesson-actions">
                {!completedLessons.includes(currentLesson.id) && (
                  <button 
                    className="btn btn-success btn-sm"
                    onClick={() => handleComplete(currentLesson.id)}
                  >
                    {isHindi ? 'पूर्ण चिह्नित करें' : 'Mark Complete'}
                  </button>
                )}
              </div>
            </div>

            <div className="lesson-body">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  // Custom table rendering for better styling
                  table: ({ children }) => (
                    <div className="table-wrapper">
                      <table>{children}</table>
                    </div>
                  ),
                }}
              >
                {processedContent}
              </ReactMarkdown>
            </div>

            <div className="lesson-navigation">
              <button
                className="btn btn-secondary"
                disabled={activeLesson === lessons[0]?.id}
                onClick={() => {
                  const currentIndex = lessons.findIndex(l => l.id === activeLesson);
                  if (currentIndex > 0) {
                    toggleLesson(lessons[currentIndex - 1].id);
                  }
                }}
              >
                ← {isHindi ? 'पिछला पाठ' : 'Previous Lesson'}
              </button>
              <button
                className="btn btn-primary"
                disabled={activeLesson === lessons[lessons.length - 1]?.id}
                onClick={() => {
                  const currentIndex = lessons.findIndex(l => l.id === activeLesson);
                  if (currentIndex < lessons.length - 1) {
                    toggleLesson(lessons[currentIndex + 1].id);
                  }
                }}
              >
                {isHindi ? 'अगला पाठ' : 'Next Lesson'} →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
