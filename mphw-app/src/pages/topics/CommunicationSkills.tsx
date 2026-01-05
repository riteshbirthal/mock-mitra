import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { communicationSkillsLessons } from '../../data/communicationSkillsContent';
import { communicationSkillsQuestions } from '../../data/questionBanks/communicationSkills';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'cs_completedLessons', ACTIVE_TAB: 'cs_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];


export default function CommunicationSkills() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / communicationSkillsLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={communicationSkillsLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={communicationSkillsQuestions} questionCount={10} title={isHindi ? 'संचार कौशल क्विज़' : 'Communication Skills Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={communicationSkillsQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">🤝</div><h3>GATHER</h3><div className="gather-list"><div className="gath-item"><strong>G</strong><span>{isHindi ? 'गर्मजोशी से स्वागत' : 'Greet warmly'}</span></div><div className="gath-item"><strong>A</strong><span>{isHindi ? 'चिंताओं के बारे में पूछें' : 'Ask about concerns'}</span></div><div className="gath-item"><strong>T</strong><span>{isHindi ? 'जानकारी बताएं' : 'Tell information'}</span></div><div className="gath-item"><strong>H</strong><span>{isHindi ? 'निर्णय में मदद' : 'Help decide'}</span></div><div className="gath-item"><strong>E</strong><span>{isHindi ? 'क्या करें समझाएं' : 'Explain what to do'}</span></div><div className="gath-item"><strong>R</strong><span>{isHindi ? 'फॉलो-अप के लिए वापसी' : 'Return for follow-up'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">👂</div><h3>SOLER</h3><div className="soler-list"><div className="sol-item"><strong>S</strong><span>{isHindi ? 'सामने बैठें' : 'Sit facing'}</span></div><div className="sol-item"><strong>O</strong><span>{isHindi ? 'खुली मुद्रा' : 'Open posture'}</span></div><div className="sol-item"><strong>L</strong><span>{isHindi ? 'आगे झुकें' : 'Lean forward'}</span></div><div className="sol-item"><strong>E</strong><span>{isHindi ? 'आंखों का संपर्क' : 'Eye contact'}</span></div><div className="sol-item"><strong>R</strong><span>{isHindi ? 'आराम से' : 'Relaxed'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">💬</div><h3>{isHindi ? 'प्रश्न प्रकार' : 'Question Types'}</h3><div className="quest-list"><div className="quest-item"><strong>{isHindi ? 'खुला' : 'Open'}</strong><span>{isHindi ? 'विस्तृत जानकारी' : 'Detailed info'}</span></div><div className="quest-item"><strong>{isHindi ? 'बंद' : 'Closed'}</strong><span>{isHindi ? 'हां/नहीं उत्तर' : 'Yes/No answer'}</span></div><div className="quest-item"><strong>{isHindi ? 'जांच' : 'Probing'}</strong><span>{isHindi ? 'अधिक विवरण' : 'More details'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🏘️</div><h3>{isHindi ? 'सामुदायिक मंच' : 'Community Platforms'}</h3><div className="plat-list"><div className="plat-item"><strong>VHSNC</strong><span>{isHindi ? 'ग्राम स्वास्थ्य समिति' : 'Village health committee'}</span></div><div className="plat-item"><strong>VHND</strong><span>{isHindi ? 'मासिक स्वास्थ्य दिवस' : 'Monthly health day'}</span></div><div className="plat-item"><strong>{isHindi ? 'ग्राम सभा' : 'Gram Sabha'}</strong><span>{isHindi ? 'सामुदायिक निर्णय' : 'Community decisions'}</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Communication Skills" titleHi="संचार कौशल" descriptionEn="IPC, counseling, health education, community mobilization" descriptionHi="IPC, परामर्श, स्वास्थ्य शिक्षा, सामुदायिक गतिशीलता" icon="💬" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
