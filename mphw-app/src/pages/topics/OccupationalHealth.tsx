import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { occupationalHealthLessons } from '../../data/occupationalHealthContent';
import { occupationalHealthQuestions } from '../../data/questionBanks/occupationalHealth';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'oh_completedLessons', ACTIVE_TAB: 'oh_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];


export default function OccupationalHealth() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / occupationalHealthLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={occupationalHealthLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={occupationalHealthQuestions} questionCount={10} title={isHindi ? 'व्यावसायिक स्वास्थ्य क्विज़' : 'Occupational Health Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={occupationalHealthQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">⚠️</div><h3>{isHindi ? 'खतरों के प्रकार' : 'Hazard Types'}</h3><div className="haz-list"><div className="haz-item"><strong>{isHindi ? 'भौतिक' : 'Physical'}</strong><span>{isHindi ? 'शोर, गर्मी' : 'Noise, heat'}</span></div><div className="haz-item"><strong>{isHindi ? 'रासायनिक' : 'Chemical'}</strong><span>{isHindi ? 'धूल, गैस' : 'Dust, gas'}</span></div><div className="haz-item"><strong>{isHindi ? 'जैविक' : 'Biological'}</strong><span>{isHindi ? 'संक्रमण' : 'Infections'}</span></div><div className="haz-item"><strong>{isHindi ? 'एर्गोनोमिक' : 'Ergonomic'}</strong><span>{isHindi ? 'मुद्रा' : 'Posture'}</span></div><div className="haz-item"><strong>{isHindi ? 'मनोसामाजिक' : 'Psychosocial'}</strong><span>{isHindi ? 'तनाव' : 'Stress'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🛡️</div><h3>{isHindi ? 'नियंत्रण पदानुक्रम' : 'Control Hierarchy'}</h3><div className="ctrl-list"><div className="ctrl-item">1. {isHindi ? 'उन्मूलन' : 'Elimination'}</div><div className="ctrl-item">2. {isHindi ? 'प्रतिस्थापन' : 'Substitution'}</div><div className="ctrl-item">3. {isHindi ? 'इंजीनियरिंग' : 'Engineering'}</div><div className="ctrl-item">4. {isHindi ? 'प्रशासनिक' : 'Administrative'}</div><div className="ctrl-item">5. PPE</div></div></div>
            <div className="resource-card"><div className="resource-icon">🏭</div><h3>{isHindi ? 'व्यावसायिक रोग' : 'Occupational Diseases'}</h3><div className="dis-list"><div className="dis-item"><strong>{isHindi ? 'सिलिकोसिस' : 'Silicosis'}</strong><span>{isHindi ? 'सिलिका धूल' : 'Silica dust'}</span></div><div className="dis-item"><strong>{isHindi ? 'एस्बेस्टोसिस' : 'Asbestosis'}</strong><span>{isHindi ? 'एस्बेस्टस' : 'Asbestos'}</span></div><div className="dis-item"><strong>{isHindi ? 'सीसा विषाक्तता' : 'Lead poisoning'}</strong><span>{isHindi ? 'सीसा' : 'Lead'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">⚖️</div><h3>{isHindi ? 'कारखाना अधिनियम' : 'Factories Act'}</h3><div className="act-list"><div className="act-item"><strong>{isHindi ? 'वर्ष' : 'Year'}</strong><span>1948</span></div><div className="act-item"><strong>{isHindi ? 'कार्य घंटे' : 'Hours'}</strong><span>48/{isHindi ? 'सप्ताह' : 'week'}</span></div><div className="act-item"><strong>{isHindi ? 'शोर सीमा' : 'Noise limit'}</strong><span>85 dB</span></div><div className="act-item"><strong>{isHindi ? 'उठाना पुरुष' : 'Lift (men)'}</strong><span>25 kg</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Occupational Health" titleHi="व्यावसायिक स्वास्थ्य" descriptionEn="Workplace hazards, ergonomics, health worker safety, laws" descriptionHi="कार्यस्थल खतरे, एर्गोनॉमिक्स, स्वास्थ्य कर्मी सुरक्षा, कानून" icon="🏭" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
