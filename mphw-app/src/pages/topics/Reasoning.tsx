import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { reasoningLessons } from '../../data/reasoningContent';
import { reasoningQuestions } from '../../data/questionBanks/reasoning';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'reasoning_completedLessons', ACTIVE_TAB: 'reasoning_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

export default function Reasoning() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / reasoningLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={reasoningLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={reasoningQuestions} questionCount={10} title={isHindi ? 'तर्कशक्ति क्विज़' : 'Reasoning Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={reasoningQuestions} testDuration={30} questionCount={20} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">🔢</div><h3>{isHindi ? 'संख्या श्रृंखला' : 'Number Series'}</h3><div className="const-list"><div className="const-item"><strong>AP</strong><span>{isHindi ? 'समान अंतर (+/-n)' : 'Constant diff (+/-n)'}</span></div><div className="const-item"><strong>GP</strong><span>{isHindi ? 'गुणा (×n)' : 'Multiply (×n)'}</span></div><div className="const-item"><strong>n²</strong><span>1, 4, 9, 16, 25...</span></div><div className="const-item"><strong>n³</strong><span>1, 8, 27, 64...</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🔤</div><h3>{isHindi ? 'अक्षर श्रृंखला' : 'Letter Series'}</h3><div className="act-list"><div className="act-item"><strong>+1</strong><span>A, B, C, D...</span></div><div className="act-item"><strong>+2</strong><span>A, C, E, G...</span></div><div className="act-item"><strong>{isHindi ? 'विपरीत' : 'Reverse'}</strong><span>A=26, Z=1</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">👨‍👩‍👧‍👦</div><h3>{isHindi ? 'रक्त संबंध' : 'Blood Relations'}</h3><div className="ayush-list"><div className="ayush-item"><strong>{isHindi ? 'पिता का पिता' : "Father's father"}</strong><span>{isHindi ? 'दादा' : 'Grandfather'}</span></div><div className="ayush-item"><strong>{isHindi ? 'माँ का भाई' : "Mother's brother"}</strong><span>{isHindi ? 'मामा' : 'Maternal Uncle'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🧭</div><h3>{isHindi ? 'दिशा ज्ञान' : 'Direction Sense'}</h3><div className="org-list"><div className="org-item"><strong>{isHindi ? 'बायां' : 'Left'}</strong><span>{isHindi ? 'वामावर्त' : 'Anti-clockwise'}</span></div><div className="org-item"><strong>{isHindi ? 'दायां' : 'Right'}</strong><span>{isHindi ? 'दक्षिणावर्त' : 'Clockwise'}</span></div><div className="org-item"><strong>{isHindi ? 'उलटा' : 'Opposite'}</strong><span>N↔S, E↔W</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Reasoning" titleHi="तर्कशक्ति" descriptionEn="Number Series, Letter Series, Coding-Decoding, Blood Relations, Direction" descriptionHi="संख्या श्रृंखला, अक्षर श्रृंखला, कोडिंग-डिकोडिंग, रक्त संबंध, दिशा" icon="🧩" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
