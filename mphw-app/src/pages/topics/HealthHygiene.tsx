import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { healthHygieneLessons } from '../../data/healthHygieneContent';
import { healthHygieneQuestions } from '../../data/questionBanks/healthHygiene';

const STORAGE_KEYS = {
  COMPLETED_LESSONS: 'healthhygiene_completedLessons',
  ACTIVE_TAB: 'healthhygiene_activeTab',
};

const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];


export default function HealthHygiene() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / healthHygieneLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={healthHygieneLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={healthHygieneQuestions} questionCount={10} title={isHindi ? 'स्वास्थ्य और स्वच्छता क्विज़' : 'Health & Hygiene Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={healthHygieneQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">🖐️</div><h3>{isHindi ? 'हाथ धोने के 7 चरण' : '7 Steps of Handwashing'}</h3><div className="steps-list"><div className="step-item">1. {isHindi ? 'हाथ गीले करें' : 'Wet hands'}</div><div className="step-item">2. {isHindi ? 'साबुन लगाएं' : 'Apply soap'}</div><div className="step-item">3. {isHindi ? 'हथेली से हथेली' : 'Palm to palm'}</div><div className="step-item">4. {isHindi ? 'उंगलियों के बीच' : 'Between fingers'}</div><div className="step-item">5. {isHindi ? 'हाथों की पीठ' : 'Back of hands'}</div><div className="step-item">6. {isHindi ? 'अंगूठे और सिरे' : 'Thumbs and tips'}</div><div className="step-item">7. {isHindi ? 'धोएं और सुखाएं' : 'Rinse and dry'}</div></div></div>
            <div className="resource-card"><div className="resource-icon">💧</div><h3>{isHindi ? 'जल शुद्धिकरण' : 'Water Purification'}</h3><div className="methods-list"><div className="method-item"><strong>{isHindi ? 'उबालना' : 'Boiling'}</strong><span>{isHindi ? '1 मिनट रोलिंग बॉयल' : '1 min rolling boil'}</span></div><div className="method-item"><strong>{isHindi ? 'क्लोरीनीकरण' : 'Chlorination'}</strong><span>1-2 {isHindi ? 'बूंद/लीटर, 30 मिनट' : 'drops/L, 30 min'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🌡️</div><h3>{isHindi ? 'खाद्य सुरक्षा तापमान' : 'Food Safety Temps'}</h3><div className="temp-list"><div className="temp-item safe">&gt;60°C = {isHindi ? 'सुरक्षित (गर्म)' : 'Safe (hot)'}</div><div className="temp-item danger">5-60°C = {isHindi ? 'खतरा क्षेत्र' : 'DANGER ZONE'}</div><div className="temp-item safe">&lt;5°C = {isHindi ? 'सुरक्षित (ठंडा)' : 'Safe (cold)'}</div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Health & Hygiene" titleHi="स्वास्थ्य और स्वच्छता" descriptionEn="Personal and environmental hygiene for disease prevention" descriptionHi="रोग रोकथाम के लिए व्यक्तिगत और पर्यावरणीय स्वच्छता" icon="🧼" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
