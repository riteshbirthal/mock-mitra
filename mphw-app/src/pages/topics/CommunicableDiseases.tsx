import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { communicableDiseasesLessons } from '../../data/communicableDiseasesContent';
import { communicableDiseasesQuestions } from '../../data/questionBanks/communicableDiseases';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'cd_completedLessons', ACTIVE_TAB: 'cd_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];


export default function CommunicableDiseases() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / communicableDiseasesLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={communicableDiseasesLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={communicableDiseasesQuestions} questionCount={10} title={isHindi ? 'संचारी रोग क्विज़' : 'Communicable Diseases Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={communicableDiseasesQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">🦟</div><h3>{isHindi ? 'वेक्टर-जनित रोग' : 'Vector-borne Diseases'}</h3><div className="vector-list"><div className="vector-item"><span>{isHindi ? 'मलेरिया' : 'Malaria'}</span><span>Anopheles ({isHindi ? 'रात' : 'night'})</span></div><div className="vector-item"><span>{isHindi ? 'डेंगू' : 'Dengue'}</span><span>Aedes ({isHindi ? 'दिन' : 'day'})</span></div><div className="vector-item"><span>{isHindi ? 'फाइलेरिया' : 'Filariasis'}</span><span>Culex ({isHindi ? 'रात' : 'night'})</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">💧</div><h3>ORS {isHindi ? 'योजनाएं' : 'Plans'}</h3><div className="ors-list"><div className="ors-item plan-a">Plan A: {isHindi ? 'घर पर (निर्जलीकरण नहीं)' : 'Home (No dehydration)'}</div><div className="ors-item plan-b">Plan B: {isHindi ? 'सुविधा में (कुछ)' : 'Facility (Some)'}</div><div className="ors-item plan-c">Plan C: IV ({isHindi ? 'गंभीर' : 'Severe'})</div></div></div>
            <div className="resource-card"><div className="resource-icon">🫁</div><h3>TB {isHindi ? 'उपचार' : 'Treatment'}</h3><div className="tb-list"><div className="tb-item"><strong>{isHindi ? 'गहन' : 'Intensive'}</strong><span>2 {isHindi ? 'महीने' : 'months'} - HRZE</span></div><div className="tb-item"><strong>{isHindi ? 'निरंतरता' : 'Continuation'}</strong><span>4 {isHindi ? 'महीने' : 'months'} - HR</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🔗</div><h3>{isHindi ? 'संक्रमण श्रृंखला' : 'Chain of Infection'}</h3><div className="chain-list"><div className="chain-item">1. {isHindi ? 'संक्रामक एजेंट' : 'Infectious Agent'}</div><div className="chain-item">2. {isHindi ? 'जलाशय' : 'Reservoir'}</div><div className="chain-item">3. {isHindi ? 'निकास द्वार' : 'Portal of Exit'}</div><div className="chain-item">4. {isHindi ? 'संचरण' : 'Transmission'}</div><div className="chain-item">5. {isHindi ? 'प्रवेश द्वार' : 'Portal of Entry'}</div><div className="chain-item">6. {isHindi ? 'अतिसंवेदनशील मेजबान' : 'Susceptible Host'}</div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Communicable Diseases" titleHi="संचारी रोग" descriptionEn="Malaria, Dengue, TB, Diarrhea, HIV/AIDS and prevention" descriptionHi="मलेरिया, डेंगू, TB, दस्त, HIV/AIDS और रोकथाम" icon="🦠" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
