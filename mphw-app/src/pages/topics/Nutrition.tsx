import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { nutritionLessons } from '../../data/nutritionContent';
import { nutritionQuestions } from '../../data/questionBanks/nutrition';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'nutrition_completedLessons', ACTIVE_TAB: 'nutrition_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];


export default function Nutrition() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / nutritionLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={nutritionLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={nutritionQuestions} questionCount={10} title={isHindi ? 'पोषण क्विज़' : 'Nutrition Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={nutritionQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">⚡</div><h3>{isHindi ? 'ऊर्जा मान' : 'Energy Values'}</h3><div className="energy-list"><div className="energy-item carbs"><span>{isHindi ? 'कार्ब्स' : 'Carbs'}</span><span>4 kcal/g</span></div><div className="energy-item protein"><span>{isHindi ? 'प्रोटीन' : 'Protein'}</span><span>4 kcal/g</span></div><div className="energy-item fat"><span>{isHindi ? 'वसा' : 'Fat'}</span><span>9 kcal/g</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">⚠️</div><h3>{isHindi ? 'कमी रोग' : 'Deficiency Diseases'}</h3><div className="deficiency-list"><div className="def-item"><span>Vitamin A</span><span>{isHindi ? 'रतौंधी' : 'Night blindness'}</span></div><div className="def-item"><span>Vitamin D</span><span>{isHindi ? 'रिकेट्स' : 'Rickets'}</span></div><div className="def-item"><span>Vitamin C</span><span>{isHindi ? 'स्कर्वी' : 'Scurvy'}</span></div><div className="def-item"><span>Iron</span><span>{isHindi ? 'एनीमिया' : 'Anemia'}</span></div><div className="def-item"><span>Iodine</span><span>{isHindi ? 'गॉइटर' : 'Goiter'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🤰</div><h3>{isHindi ? 'गर्भावस्था पोषण' : 'Pregnancy Nutrition'}</h3><div className="preg-list"><div className="preg-item"><span>{isHindi ? 'कैलोरी' : 'Calories'}</span><span>+350 kcal/day</span></div><div className="preg-item"><span>{isHindi ? 'आयरन' : 'Iron'}</span><span>35 mg/day</span></div><div className="preg-item"><span>{isHindi ? 'फोलिक एसिड' : 'Folic acid'}</span><span>500 μg/day</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">📏</div><h3>MUAC {isHindi ? 'रंग कोड' : 'Color Codes'}</h3><div className="muac-list"><div className="muac-item green">&gt;13.5 cm = {isHindi ? 'सामान्य' : 'Normal'}</div><div className="muac-item yellow">12.5-13.5 cm = {isHindi ? 'मध्यम' : 'Moderate'}</div><div className="muac-item red">&lt;12.5 cm = {isHindi ? 'गंभीर' : 'Severe'}</div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Nutrition" titleHi="पोषण" descriptionEn="Nutrients, balanced diet, malnutrition, and special needs" descriptionHi="पोषक तत्व, संतुलित आहार, कुपोषण और विशेष आवश्यकताएं" icon="🥗" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
