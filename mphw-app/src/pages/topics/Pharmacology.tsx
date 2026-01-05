import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { pharmacologyLessons } from '../../data/pharmacologyContent';
import { pharmacologyQuestions } from '../../data/questionBanks/pharmacology';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'pharm_completedLessons', ACTIVE_TAB: 'pharm_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];


export default function Pharmacology() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / pharmacologyLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={pharmacologyLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={pharmacologyQuestions} questionCount={10} title={isHindi ? 'औषध विज्ञान क्विज़' : 'Pharmacology Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={pharmacologyQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">💉</div><h3>{isHindi ? 'इंजेक्शन मार्ग' : 'Injection Routes'}</h3><div className="route-list"><div className="route-item"><strong>ID</strong><span>5-15° (BCG)</span></div><div className="route-item"><strong>SC</strong><span>45° ({isHindi ? 'इंसुलिन' : 'insulin'})</span></div><div className="route-item"><strong>IM</strong><span>90° ({isHindi ? 'टीके' : 'vaccines'})</span></div><div className="route-item"><strong>IV</strong><span>{isHindi ? 'सबसे तेज' : 'Fastest'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🧊</div><h3>{isHindi ? 'कोल्ड चेन' : 'Cold Chain'}</h3><div className="cold-list"><div className="cold-item"><strong>ILR</strong><span>+2°C to +8°C</span></div><div className="cold-item"><strong>{isHindi ? 'डीप फ्रीजर' : 'Deep Freezer'}</strong><span>-15°C to -25°C</span></div><div className="cold-item"><strong>{isHindi ? 'फ्रीज न करें' : 'Never freeze'}</strong><span>DPT, Hep B, TT</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">💊</div><h3>{isHindi ? 'आवश्यक दवाएं' : 'Essential Drugs'}</h3><div className="drug-list"><div className="drug-item"><strong>{isHindi ? 'पैरासिटामोल' : 'Paracetamol'}</strong><span>Max 4g/{isHindi ? 'दिन' : 'day'}</span></div><div className="drug-item"><strong>ORS</strong><span>1 {isHindi ? 'पैकेट' : 'packet'}/1L</span></div><div className="drug-item"><strong>{isHindi ? 'जिंक' : 'Zinc'}</strong><span>14 {isHindi ? 'दिन' : 'days'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">⚠️</div><h3>{isHindi ? 'एनाफिलेक्सिस' : 'Anaphylaxis'}</h3><div className="ana-list"><div className="ana-item"><strong>{isHindi ? 'दवा' : 'Drug'}</strong><span>{isHindi ? 'एड्रेनालाइन' : 'Adrenaline'}</span></div><div className="ana-item"><strong>{isHindi ? 'खुराक' : 'Dose'}</strong><span>0.5 mg IM</span></div><div className="ana-item"><strong>{isHindi ? 'स्थान' : 'Site'}</strong><span>{isHindi ? 'जांघ' : 'Thigh'}</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Pharmacology" titleHi="औषध विज्ञान" descriptionEn="Drug basics, essential medicines, cold chain, injections, ADR" descriptionHi="दवा मूल बातें, आवश्यक दवाएं, कोल्ड चेन, इंजेक्शन, ADR" icon="💊" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
