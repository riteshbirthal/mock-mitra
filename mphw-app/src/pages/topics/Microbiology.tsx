import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { microbiologyLessons } from '../../data/microbiologyContent';
import './Microbiology.css';
import { microbiologyQuestions } from '../../data/questionBanks/microbiology';

const STORAGE_KEYS = {
  COMPLETED_LESSONS: 'microbiology_completedLessons',
  ACTIVE_TAB: 'microbiology_activeTab',
};

const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];


export default function Microbiology() {
  const { isHindi } = useLanguage();
  
  const [activeTab, setActiveTab] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB);
    return saved || 'learn';
  });
  
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons));
  }, [completedLessons]);

  const progress = (completedLessons.length / microbiologyLessons.length) * 100;

  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn':
        return (
          <LessonContent 
            lessons={microbiologyLessons}
            completedLessons={completedLessons}
            onLessonComplete={handleLessonComplete}
          />
        );
      case 'quiz':
        return (
          <QuizComponent 
            questions={microbiologyQuestions}
            questionCount={10}
            title={isHindi ? 'सूक्ष्म जीव विज्ञान क्विज़' : 'Microbiology Quiz'}
          />
        );
      case 'mocktest':
        return (
          <MockTestComponent 
            questions={microbiologyQuestions}
            testDuration={30}
            questionCount={10}
          />
        );
      case 'resources':
        return (
          <div className="resources-content">
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-icon">🔬</div>
                <h3>{isHindi ? 'ग्राम स्टेनिंग' : 'Gram Staining'}</h3>
                <div className="gram-comparison">
                  <div className="gram-item gram-positive">
                    <span className="gram-label">Gram +</span>
                    <span className="gram-color">{isHindi ? 'बैंगनी' : 'Purple'}</span>
                    <span className="gram-examples">Staph, Strep</span>
                  </div>
                  <div className="gram-item gram-negative">
                    <span className="gram-label">Gram -</span>
                    <span className="gram-color">{isHindi ? 'गुलाबी' : 'Pink'}</span>
                    <span className="gram-examples">E. coli, Salmonella</span>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">🦠</div>
                <h3>{isHindi ? 'बैक्टीरिया आकार' : 'Bacterial Shapes'}</h3>
                <div className="shapes-list">
                  <div className="shape-item">
                    <span className="shape-icon">⚫</span>
                    <span className="shape-name">Cocci</span>
                    <span className="shape-desc">{isHindi ? 'गोल' : 'Round'}</span>
                  </div>
                  <div className="shape-item">
                    <span className="shape-icon">🥢</span>
                    <span className="shape-name">Bacilli</span>
                    <span className="shape-desc">{isHindi ? 'छड़' : 'Rod'}</span>
                  </div>
                  <div className="shape-item">
                    <span className="shape-icon">🌀</span>
                    <span className="shape-name">Spirilla</span>
                    <span className="shape-desc">{isHindi ? 'सर्पिल' : 'Spiral'}</span>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">🔥</div>
                <h3>{isHindi ? 'बंध्याकरण विधियां' : 'Sterilization Methods'}</h3>
                <div className="sterilization-list">
                  <div className="sterilization-item">
                    <span className="method">{isHindi ? 'ऑटोक्लेव' : 'Autoclave'}</span>
                    <span className="params">121°C, 15 psi, 15-20 min</span>
                  </div>
                  <div className="sterilization-item">
                    <span className="method">{isHindi ? 'शुष्क ताप' : 'Dry Heat'}</span>
                    <span className="params">160-180°C, 1-2 hours</span>
                  </div>
                  <div className="sterilization-item">
                    <span className="method">{isHindi ? 'उबालना' : 'Boiling'}</span>
                    <span className="params">100°C, 20 min</span>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">🗑️</div>
                <h3>{isHindi ? 'अपशिष्ट पृथक्करण' : 'Waste Segregation'}</h3>
                <div className="waste-colors">
                  <div className="waste-item red">
                    <span className="color-box"></span>
                    <span>{isHindi ? 'लाल - संक्रामक' : 'Red - Infectious'}</span>
                  </div>
                  <div className="waste-item yellow">
                    <span className="color-box"></span>
                    <span>{isHindi ? 'पीला - पैथोलॉजिकल' : 'Yellow - Pathological'}</span>
                  </div>
                  <div className="waste-item blue">
                    <span className="color-box"></span>
                    <span>{isHindi ? 'नीला - शार्प्स' : 'Blue - Sharps'}</span>
                  </div>
                  <div className="waste-item black">
                    <span className="color-box"></span>
                    <span>{isHindi ? 'काला - सामान्य' : 'Black - General'}</span>
                  </div>
                </div>
              </div>

              <div className="resource-card full-width">
                <div className="resource-icon">🖐️</div>
                <h3>{isHindi ? 'WHO 5 क्षण' : 'WHO 5 Moments'}</h3>
                <div className="five-moments">
                  <div className="moment-item">
                    <span className="moment-num">1</span>
                    <span>{isHindi ? 'रोगी छूने से पहले' : 'Before touching patient'}</span>
                  </div>
                  <div className="moment-item">
                    <span className="moment-num">2</span>
                    <span>{isHindi ? 'स्वच्छ प्रक्रिया से पहले' : 'Before clean procedure'}</span>
                  </div>
                  <div className="moment-item">
                    <span className="moment-num">3</span>
                    <span>{isHindi ? 'शरीर द्रव संपर्क के बाद' : 'After body fluid exposure'}</span>
                  </div>
                  <div className="moment-item">
                    <span className="moment-num">4</span>
                    <span>{isHindi ? 'रोगी छूने के बाद' : 'After touching patient'}</span>
                  </div>
                  <div className="moment-item">
                    <span className="moment-num">5</span>
                    <span>{isHindi ? 'परिवेश छूने के बाद' : 'After touching surroundings'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <TopicLayout
      titleEn="Microbiology"
      titleHi="सूक्ष्म जीव विज्ञान"
      descriptionEn="Study of microorganisms - bacteria, viruses, fungi, and parasites"
      descriptionHi="सूक्ष्मजीवों का अध्ययन - जीवाणु, विषाणु, कवक और परजीवी"
      icon="🦠"
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      progress={progress}
    >
      {renderContent()}
    </TopicLayout>
  );
}
