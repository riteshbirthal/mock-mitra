import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { immunizationLessons } from '../../data/immunizationContent';
import { immunizationQuestions } from '../../data/questionBanks/immunization';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'immunization_completedLessons', ACTIVE_TAB: 'immunization_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];


export default function Immunization() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / immunizationLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={immunizationLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={immunizationQuestions} questionCount={10} title={isHindi ? 'टीकाकरण क्विज़' : 'Immunization Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={immunizationQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card full-width"><div className="resource-icon">📅</div><h3>{isHindi ? 'टीकाकरण अनुसूची' : 'Immunization Schedule'}</h3>
              <div className="schedule-table">
                <div className="schedule-row header"><span>{isHindi ? 'आयु' : 'Age'}</span><span>{isHindi ? 'टीके' : 'Vaccines'}</span></div>
                <div className="schedule-row"><span>{isHindi ? 'जन्म' : 'Birth'}</span><span>BCG, OPV-0, Hep B</span></div>
                <div className="schedule-row"><span>6 {isHindi ? 'सप्ताह' : 'weeks'}</span><span>OPV-1, Penta-1, Rota-1, IPV-1, PCV-1</span></div>
                <div className="schedule-row"><span>10 {isHindi ? 'सप्ताह' : 'weeks'}</span><span>OPV-2, Penta-2, Rota-2</span></div>
                <div className="schedule-row"><span>14 {isHindi ? 'सप्ताह' : 'weeks'}</span><span>OPV-3, Penta-3, Rota-3, IPV-2, PCV-2</span></div>
                <div className="schedule-row"><span>9-12 {isHindi ? 'महीने' : 'months'}</span><span>MR-1, JE-1, PCV-B</span></div>
                <div className="schedule-row"><span>16-24 {isHindi ? 'महीने' : 'months'}</span><span>MR-2, JE-2, DPT-B1, OPV-B</span></div>
              </div>
            </div>
            <div className="resource-card"><div className="resource-icon">❄️</div><h3>{isHindi ? 'कोल्ड चेन' : 'Cold Chain'}</h3><div className="cold-chain-list"><div className="cc-item freezer">{isHindi ? 'फ्रीजर' : 'Freezer'}: -15 to -25°C (OPV)</div><div className="cc-item ilr">ILR: +2 to +8°C ({isHindi ? 'अधिकांश' : 'Most'})</div><div className="cc-item danger">{isHindi ? 'कभी फ्रीज न करें' : 'Never freeze'}: DPT, HepB, TT</div></div></div>
            <div className="resource-card"><div className="resource-icon">💉</div><h3>{isHindi ? 'इंजेक्शन मार्ग' : 'Injection Routes'}</h3><div className="routes-list"><div className="route-item"><span>BCG</span><span>ID (15°)</span></div><div className="route-item"><span>MR, JE</span><span>SC (45°)</span></div><div className="route-item"><span>DPT, HepB</span><span>IM (90°)</span></div><div className="route-item"><span>OPV</span><span>{isHindi ? 'मौखिक' : 'Oral'}</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Immunization" titleHi="टीकाकरण" descriptionEn="Vaccines, schedule, cold chain, and AEFI management" descriptionHi="टीके, अनुसूची, कोल्ड चेन और AEFI प्रबंधन" icon="💉" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
