import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { mathematicsLessons } from '../../data/mathematicsContent';
import { mathematicsQuestions } from '../../data/questionBanks/mathematics';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'math_completedLessons', ACTIVE_TAB: 'math_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

export default function Mathematics() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / mathematicsLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={mathematicsLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={mathematicsQuestions} questionCount={10} title={isHindi ? 'गणित क्विज़' : 'Mathematics Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={mathematicsQuestions} testDuration={30} questionCount={20} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">📊</div><h3>{isHindi ? 'प्रतिशत सूत्र' : 'Percentage Formulas'}</h3><div className="const-list"><div className="const-item"><strong>%</strong><span>{isHindi ? '(भाग/पूर्ण) × 100' : '(Part/Whole) × 100'}</span></div><div className="const-item"><strong>{isHindi ? 'वृद्धि' : 'Increase'}</strong><span>[(New-Old)/Old] × 100</span></div><div className="const-item"><strong>{isHindi ? 'कमी' : 'Decrease'}</strong><span>[(Old-New)/Old] × 100</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">💰</div><h3>{isHindi ? 'लाभ-हानि' : 'Profit & Loss'}</h3><div className="act-list"><div className="act-item"><strong>{isHindi ? 'लाभ%' : 'Profit%'}</strong><span>(P/CP)×100</span></div><div className="act-item"><strong>{isHindi ? 'हानि%' : 'Loss%'}</strong><span>(L/CP)×100</span></div><div className="act-item"><strong>SP</strong><span>CP × (100±P%)/100</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">⏱️</div><h3>{isHindi ? 'समय और कार्य' : 'Time & Work'}</h3><div className="ayush-list"><div className="ayush-item"><strong>{isHindi ? 'कार्य दर' : 'Work Rate'}</strong><span>1/{isHindi ? 'दिन' : 'Days'}</span></div><div className="ayush-item"><strong>{isHindi ? 'संयुक्त' : 'Combined'}</strong><span>1/A + 1/B</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🏥</div><h3>{isHindi ? 'स्वास्थ्य सूत्र' : 'Health Formulas'}</h3><div className="org-list"><div className="org-item"><strong>IMR</strong><span>(Deaths/Births)×1000</span></div><div className="org-item"><strong>MMR</strong><span>(Deaths/Births)×100000</span></div><div className="org-item"><strong>CDR</strong><span>(Deaths/Pop)×1000</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Mathematics" titleHi="गणित" descriptionEn="Percentage, Profit-Loss, Time & Work, Average, Number System" descriptionHi="प्रतिशत, लाभ-हानि, समय और कार्य, औसत, संख्या पद्धति" icon="📐" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
