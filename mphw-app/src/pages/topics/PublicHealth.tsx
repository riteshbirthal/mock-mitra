import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { publicHealthLessons } from '../../data/publicHealthContent';
import { publicHealthQuestions } from '../../data/questionBanks/publicHealth';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'ph_completedLessons', ACTIVE_TAB: 'ph_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];


export default function PublicHealth() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / publicHealthLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={publicHealthLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={publicHealthQuestions} questionCount={10} title={isHindi ? 'सार्वजनिक स्वास्थ्य क्विज़' : 'Public Health Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={publicHealthQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">🏥</div><h3>{isHindi ? 'स्वास्थ्य सेवा प्रणाली' : 'Healthcare System'}</h3><div className="system-list"><div className="sys-item"><span>SC</span><span>5000 ({isHindi ? 'मैदान' : 'plain'})</span></div><div className="sys-item"><span>PHC</span><span>30000 ({isHindi ? 'मैदान' : 'plain'})</span></div><div className="sys-item"><span>CHC</span><span>120000, 30 {isHindi ? 'बेड' : 'beds'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🛡️</div><h3>{isHindi ? 'रोकथाम के स्तर' : 'Prevention Levels'}</h3><div className="prev-list"><div className="prev-item"><strong>{isHindi ? 'प्राथमिक' : 'Primary'}</strong><span>{isHindi ? 'टीकाकरण' : 'Vaccination'}</span></div><div className="prev-item"><strong>{isHindi ? 'द्वितीयक' : 'Secondary'}</strong><span>{isHindi ? 'स्क्रीनिंग' : 'Screening'}</span></div><div className="prev-item"><strong>{isHindi ? 'तृतीयक' : 'Tertiary'}</strong><span>{isHindi ? 'पुनर्वास' : 'Rehab'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">📊</div><h3>{isHindi ? 'स्वास्थ्य संकेतक' : 'Health Indicators'}</h3><div className="ind-list"><div className="ind-item"><span>IMR</span><span>{isHindi ? 'प्रति 1000 जन्म' : 'per 1000 births'}</span></div><div className="ind-item"><span>MMR</span><span>{isHindi ? 'प्रति 100,000' : 'per 100,000'}</span></div><div className="ind-item"><span>{isHindi ? 'घटना' : 'Incidence'}</span><span>{isHindi ? 'नए मामले' : 'New cases'}</span></div><div className="ind-item"><span>{isHindi ? 'प्रसार' : 'Prevalence'}</span><span>{isHindi ? 'कुल मामले' : 'Total cases'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🇮🇳</div><h3>{isHindi ? 'राष्ट्रीय कार्यक्रम' : 'National Programs'}</h3><div className="prog-list"><div className="prog-item"><strong>NTEP</strong><span>TB</span></div><div className="prog-item"><strong>NVBDCP</strong><span>{isHindi ? 'वेक्टर रोग' : 'Vector diseases'}</span></div><div className="prog-item"><strong>NACP</strong><span>HIV/AIDS</span></div><div className="prog-item"><strong>RMNCH+A</strong><span>MCH</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Public Health" titleHi="सार्वजनिक स्वास्थ्य" descriptionEn="Health indicators, prevention levels, national programs, healthcare delivery" descriptionHi="स्वास्थ्य संकेतक, रोकथाम के स्तर, राष्ट्रीय कार्यक्रम, स्वास्थ्य सेवा वितरण" icon="🏥" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
