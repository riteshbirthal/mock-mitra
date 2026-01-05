import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { healthEducationLessons } from '../../data/healthEducationContent';
import { healthEducationQuestions } from '../../data/questionBanks/healthEducation';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'he_completedLessons', ACTIVE_TAB: 'he_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];


export default function HealthEducation() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / healthEducationLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={healthEducationLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={healthEducationQuestions} questionCount={10} title={isHindi ? 'स्वास्थ्य शिक्षा क्विज़' : 'Health Education Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={healthEducationQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">📊</div><h3>KAP</h3><div className="kap-list"><div className="kap-item"><strong>K</strong><span>{isHindi ? 'ज्ञान' : 'Knowledge'}</span></div><div className="kap-item"><strong>A</strong><span>{isHindi ? 'दृष्टिकोण' : 'Attitude'}</span></div><div className="kap-item"><strong>P</strong><span>{isHindi ? 'अभ्यास' : 'Practice'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">📣</div><h3>IEC vs BCC</h3><div className="iec-list"><div className="iec-item"><strong>IEC</strong><span>{isHindi ? 'जागरूकता' : 'Awareness'}</span></div><div className="iec-item"><strong>BCC</strong><span>{isHindi ? 'व्यवहार परिवर्तन' : 'Behavior change'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">📅</div><h3>{isHindi ? 'स्वास्थ्य दिवस' : 'Health Days'}</h3><div className="day-list"><div className="day-item"><span>{isHindi ? 'विश्व स्वास्थ्य दिवस' : 'World Health Day'}</span><span>Apr 7</span></div><div className="day-item"><span>{isHindi ? 'विश्व TB दिवस' : 'World TB Day'}</span><span>Mar 24</span></div><div className="day-item"><span>{isHindi ? 'विश्व एड्स दिवस' : 'World AIDS Day'}</span><span>Dec 1</span></div><div className="day-item"><span>{isHindi ? 'विश्व मलेरिया दिवस' : 'World Malaria Day'}</span><span>Apr 25</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🇮🇳</div><h3>{isHindi ? 'अभियान' : 'Campaigns'}</h3><div className="camp-list"><div className="camp-item"><strong>{isHindi ? 'पल्स पोलियो' : 'Pulse Polio'}</strong><span>{isHindi ? 'पोलियो उन्मूलन' : 'Polio eradication'}</span></div><div className="camp-item"><strong>{isHindi ? 'मिशन इंद्रधनुष' : 'Mission Indradhanush'}</strong><span>{isHindi ? 'टीकाकरण' : 'Immunization'}</span></div><div className="camp-item"><strong>{isHindi ? 'स्वच्छ भारत' : 'Swachh Bharat'}</strong><span>{isHindi ? 'स्वच्छता' : 'Sanitation'}</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Health Education (HIEC)" titleHi="स्वास्थ्य शिक्षा (HIEC)" descriptionEn="IEC, BCC, AV aids, health campaigns, evaluation" descriptionHi="IEC, BCC, AV सहायक, स्वास्थ्य अभियान, मूल्यांकन" icon="📢" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
