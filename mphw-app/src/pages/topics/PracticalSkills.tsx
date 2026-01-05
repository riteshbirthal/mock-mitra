import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { practicalSkillsLessons } from '../../data/practicalSkillsContent';
import { practicalSkillsQuestions } from '../../data/questionBanks/practicalSkills';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'ps_completedLessons', ACTIVE_TAB: 'ps_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];


export default function PracticalSkills() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / practicalSkillsLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={practicalSkillsLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={practicalSkillsQuestions} questionCount={10} title={isHindi ? 'व्यावहारिक कौशल क्विज़' : 'Practical Skills Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={practicalSkillsQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">🩺</div><h3>{isHindi ? 'जीवन संकेत' : 'Vital Signs'}</h3><div className="vital-list"><div className="vital-item"><strong>{isHindi ? 'तापमान' : 'Temp'}</strong><span>37°C</span></div><div className="vital-item"><strong>{isHindi ? 'नाड़ी' : 'Pulse'}</strong><span>60-100/min</span></div><div className="vital-item"><strong>RR</strong><span>12-20/min</span></div><div className="vital-item"><strong>BP</strong><span>120/80 mmHg</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🩸</div><h3>{isHindi ? 'हीमोग्लोबिन' : 'Hemoglobin'}</h3><div className="hb-list"><div className="hb-item"><strong>{isHindi ? 'पुरुष' : 'Male'}</strong><span>13-17 g/dL</span></div><div className="hb-item"><strong>{isHindi ? 'महिला' : 'Female'}</strong><span>12-16 g/dL</span></div><div className="hb-item"><strong>{isHindi ? 'गंभीर एनीमिया' : 'Severe anemia'}</strong><span>&lt;7 g/dL</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🗑️</div><h3>{isHindi ? 'कचरा रंग कोड' : 'Waste Color Code'}</h3><div className="waste-list"><div className="waste-item yellow">{isHindi ? 'पीला' : 'Yellow'}: {isHindi ? 'संक्रामक' : 'Infectious'}</div><div className="waste-item red">{isHindi ? 'लाल' : 'Red'}: {isHindi ? 'प्लास्टिक' : 'Plastic'}</div><div className="waste-item blue">{isHindi ? 'नीला/सफेद' : 'Blue/White'}: {isHindi ? 'शार्प्स' : 'Sharps'}</div><div className="waste-item black">{isHindi ? 'काला' : 'Black'}: {isHindi ? 'सामान्य' : 'General'}</div></div></div>
            <div className="resource-card"><div className="resource-icon">🔥</div><h3>{isHindi ? 'नसबंदी' : 'Sterilization'}</h3><div className="ster-list"><div className="ster-item"><strong>{isHindi ? 'उबालना' : 'Boiling'}</strong><span>100°C, 20 min</span></div><div className="ster-item"><strong>{isHindi ? 'ऑटोक्लेव' : 'Autoclave'}</strong><span>121°C, 15 psi</span></div><div className="ster-item"><strong>{isHindi ? 'क्लोरीन' : 'Chlorine'}</strong><span>0.5%, 10 min</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Practical Skills" titleHi="व्यावहारिक कौशल" descriptionEn="Vital signs, wound care, sample collection, diagnostic tests, sterilization" descriptionHi="जीवन संकेत, घाव देखभाल, नमूना संग्रह, नैदानिक परीक्षण, नसबंदी" icon="🩺" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
