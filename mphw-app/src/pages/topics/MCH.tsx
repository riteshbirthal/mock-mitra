import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { mchLessons } from '../../data/mchContent';
import { mchQuestions } from '../../data/questionBanks/mch';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'mch_completedLessons', ACTIVE_TAB: 'mch_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];


export default function MCH() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / mchLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={mchLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={mchQuestions} questionCount={10} title={isHindi ? 'MCH क्विज़' : 'MCH Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={mchQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">📊</div><h3>{isHindi ? 'MCH संकेतक' : 'MCH Indicators'}</h3><div className="indicator-list"><div className="ind-item"><span>MMR</span><span>{isHindi ? 'प्रति 100,000 जन्म' : 'per 100,000 births'}</span></div><div className="ind-item"><span>IMR</span><span>{isHindi ? 'प्रति 1000 जन्म' : 'per 1000 births'}</span></div><div className="ind-item"><span>NMR</span><span>{isHindi ? '<28 दिन मृत्यु' : '<28 days deaths'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">📅</div><h3>{isHindi ? 'ANC अनुसूची' : 'ANC Schedule'}</h3><div className="anc-list"><div className="anc-item">1st: &lt;12 {isHindi ? 'सप्ताह' : 'weeks'}</div><div className="anc-item">2nd: 14-26 {isHindi ? 'सप्ताह' : 'weeks'}</div><div className="anc-item">3rd: 28-34 {isHindi ? 'सप्ताह' : 'weeks'}</div><div className="anc-item">4th: 36-40 {isHindi ? 'सप्ताह' : 'weeks'}</div></div></div>
            <div className="resource-card"><div className="resource-icon">🏥</div><h3>{isHindi ? 'MCH कार्यक्रम' : 'MCH Programs'}</h3><div className="prog-list"><div className="prog-item"><strong>JSY</strong><span>{isHindi ? 'प्रसव के लिए नकद' : 'Cash for delivery'}</span></div><div className="prog-item"><strong>JSSK</strong><span>{isHindi ? 'मुफ्त प्रसव' : 'Free delivery'}</span></div><div className="prog-item"><strong>PMSMA</strong><span>9th {isHindi ? 'तारीख ANC' : 'of month ANC'}</span></div><div className="prog-item"><strong>PMMVY</strong><span>Rs. 5000</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🌬️</div><h3>{isHindi ? 'तेज सांस कट-ऑफ' : 'Fast Breathing Cut-offs'}</h3><div className="breath-list"><div className="breath-item"><span>0-2m</span><span>≥60/min</span></div><div className="breath-item"><span>2-12m</span><span>≥50/min</span></div><div className="breath-item"><span>1-5y</span><span>≥40/min</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Maternal & Child Health" titleHi="मातृ एवं शिशु स्वास्थ्य" descriptionEn="Pregnancy care, safe delivery, newborn care, family planning" descriptionHi="गर्भावस्था देखभाल, सुरक्षित प्रसव, नवजात देखभाल, परिवार नियोजन" icon="👩‍👧" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
