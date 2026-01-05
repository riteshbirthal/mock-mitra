import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { generalAwarenessLessons } from '../../data/generalAwarenessContent';
import { generalAwarenessQuestions } from '../../data/questionBanks/generalAwareness';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'ga_completedLessons', ACTIVE_TAB: 'ga_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];


export default function GeneralAwareness() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / generalAwarenessLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={generalAwarenessLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={generalAwarenessQuestions} questionCount={10} title={isHindi ? 'सामान्य जागरूकता क्विज़' : 'General Awareness Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={generalAwarenessQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">📜</div><h3>{isHindi ? 'संवैधानिक प्रावधान' : 'Constitutional Provisions'}</h3><div className="const-list"><div className="const-item"><strong>Art 21</strong><span>{isHindi ? 'जीवन का अधिकार' : 'Right to life'}</span></div><div className="const-item"><strong>Art 47</strong><span>{isHindi ? 'पोषण, स्वास्थ्य' : 'Nutrition, health'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">⚖️</div><h3>{isHindi ? 'स्वास्थ्य अधिनियम' : 'Health Acts'}</h3><div className="act-list"><div className="act-item"><strong>PCPNDT</strong><span>1994</span></div><div className="act-item"><strong>MTP</strong><span>1971/2021</span></div><div className="act-item"><strong>{isHindi ? 'मानसिक स्वास्थ्य' : 'Mental Health'}</strong><span>2017</span></div><div className="act-item"><strong>HIV/AIDS</strong><span>2017</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🏥</div><h3>{isHindi ? 'आयुष्मान भारत' : 'Ayushman Bharat'}</h3><div className="ayush-list"><div className="ayush-item"><strong>PMJAY</strong><span>Rs. 5 {isHindi ? 'लाख' : 'lakh'}</span></div><div className="ayush-item"><strong>HWC</strong><span>{isHindi ? 'प्राथमिक देखभाल' : 'Primary care'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🌍</div><h3>{isHindi ? 'अंतर्राष्ट्रीय संगठन' : 'International Orgs'}</h3><div className="org-list"><div className="org-item"><strong>WHO</strong><span>1948, {isHindi ? 'जिनेवा' : 'Geneva'}</span></div><div className="org-item"><strong>UNICEF</strong><span>{isHindi ? 'बच्चे' : 'Children'}</span></div><div className="org-item"><strong>GAVI</strong><span>{isHindi ? 'टीके' : 'Vaccines'}</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="General Awareness" titleHi="सामान्य जागरूकता" descriptionEn="Constitution, health acts, current affairs, WHO, ethics" descriptionHi="संविधान, स्वास्थ्य अधिनियम, समसामयिक, WHO, नैतिकता" icon="🌍" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
