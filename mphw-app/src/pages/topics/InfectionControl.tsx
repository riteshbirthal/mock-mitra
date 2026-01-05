import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { infectionControlLessons } from '../../data/infectionControlContent';
import { infectionControlQuestions } from '../../data/questionBanks/infectionControl';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'ic_completedLessons', ACTIVE_TAB: 'ic_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];


export default function InfectionControl() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / infectionControlLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={infectionControlLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={infectionControlQuestions} questionCount={10} title={isHindi ? 'संक्रमण नियंत्रण क्विज़' : 'Infection Control Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={infectionControlQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">✋</div><h3>WHO 5 {isHindi ? 'मोमेंट' : 'Moments'}</h3><div className="moment-list"><div className="mom-item">1. {isHindi ? 'मरीज छूने से पहले' : 'Before touching patient'}</div><div className="mom-item">2. {isHindi ? 'एसेप्टिक प्रक्रिया से पहले' : 'Before aseptic procedure'}</div><div className="mom-item">3. {isHindi ? 'शरीर द्रव जोखिम के बाद' : 'After body fluid risk'}</div><div className="mom-item">4. {isHindi ? 'मरीज छूने के बाद' : 'After touching patient'}</div><div className="mom-item">5. {isHindi ? 'आसपास छूने के बाद' : 'After touching surroundings'}</div></div></div>
            <div className="resource-card"><div className="resource-icon">🗑️</div><h3>{isHindi ? 'कचरा रंग कोड' : 'Waste Color Code'}</h3><div className="waste-list"><div className="waste-item" style={{color: '#d4a800'}}>{isHindi ? 'पीला' : 'Yellow'}: {isHindi ? 'संक्रामक' : 'Infectious'}</div><div className="waste-item" style={{color: '#c0392b'}}>{isHindi ? 'लाल' : 'Red'}: {isHindi ? 'प्लास्टिक' : 'Plastic'}</div><div className="waste-item" style={{color: '#2980b9'}}>{isHindi ? 'नीला/सफेद' : 'Blue/White'}: {isHindi ? 'शार्प्स' : 'Sharps'}</div><div className="waste-item" style={{color: '#2c3e50'}}>{isHindi ? 'काला' : 'Black'}: {isHindi ? 'सामान्य' : 'General'}</div></div></div>
            <div className="resource-card"><div className="resource-icon">🧤</div><h3>PPE {isHindi ? 'क्रम' : 'Order'}</h3><div className="ppe-list"><div className="ppe-item"><strong>{isHindi ? 'पहनें' : 'Don'}</strong><span>{isHindi ? 'गाउन→मास्क→गॉगल्स→दस्ताने' : 'Gown→Mask→Goggles→Gloves'}</span></div><div className="ppe-item"><strong>{isHindi ? 'उतारें' : 'Doff'}</strong><span>{isHindi ? 'दस्ताने→गाउन→गॉगल्स→मास्क' : 'Gloves→Gown→Goggles→Mask'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🔥</div><h3>{isHindi ? 'नसबंदी' : 'Sterilization'}</h3><div className="ster-list"><div className="ster-item"><strong>{isHindi ? 'उबालना' : 'Boiling'}</strong><span>100°C, 20 min</span></div><div className="ster-item"><strong>{isHindi ? 'ऑटोक्लेव' : 'Autoclave'}</strong><span>121°C, 15 psi</span></div><div className="ster-item"><strong>{isHindi ? 'हाथ धोना' : 'Hand wash'}</strong><span>40-60 sec</span></div><div className="ster-item"><strong>{isHindi ? 'हाथ रगड़ना' : 'Hand rub'}</strong><span>20-30 sec</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Infection Control" titleHi="संक्रमण नियंत्रण" descriptionEn="Hand hygiene, PPE, sterilization, biomedical waste management" descriptionHi="हाथ स्वच्छता, PPE, नसबंदी, बायोमेडिकल अपशिष्ट प्रबंधन" icon="🛡️" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
