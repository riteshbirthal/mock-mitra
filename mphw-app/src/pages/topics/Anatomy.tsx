import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { anatomyLessons } from '../../data/anatomyContent';
import './Anatomy.css';
import { anatomyQuestions } from '../../data/questionBanks/anatomy';

const STORAGE_KEYS = {
  COMPLETED_LESSONS: 'anatomy_completedLessons',
  ACTIVE_TAB: 'anatomy_activeTab',
  ACTIVE_LESSON: 'anatomy_activeLesson',
};

const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];


export default function Anatomy() {
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

  const progress = (completedLessons.length / anatomyLessons.length) * 100;

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
            lessons={anatomyLessons}
            completedLessons={completedLessons}
            onLessonComplete={handleLessonComplete}
          />
        );
      case 'quiz':
        return (
          <QuizComponent 
            questions={anatomyQuestions}
            questionCount={10}
            title={isHindi ? 'शरीर रचना क्विज़' : 'Anatomy Quiz'}
          />
        );
      case 'mocktest':
        return (
          <MockTestComponent 
            questions={anatomyQuestions}
            testDuration={30}
            questionCount={10}
          />
        );
      case 'resources':
        return (
          <div className="resources-content">
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-icon">🦴</div>
                <h3>{isHindi ? 'हड्डियों की संख्या' : 'Bone Count'}</h3>
                <div className="resource-content">
                  <div className="bone-diagram">
                    <div className="bone-item">
                      <span className="bone-region">Skull</span>
                      <span className="bone-count">22</span>
                    </div>
                    <div className="bone-item">
                      <span className="bone-region">Vertebrae</span>
                      <span className="bone-count">26</span>
                    </div>
                    <div className="bone-item">
                      <span className="bone-region">Ribs & Sternum</span>
                      <span className="bone-count">25</span>
                    </div>
                    <div className="bone-item">
                      <span className="bone-region">Upper Limbs</span>
                      <span className="bone-count">64</span>
                    </div>
                    <div className="bone-item">
                      <span className="bone-region">Lower Limbs</span>
                      <span className="bone-count">62</span>
                    </div>
                    <div className="bone-item total">
                      <span className="bone-region">Total</span>
                      <span className="bone-count">206</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">🧭</div>
                <h3>{isHindi ? 'दिशात्मक शब्द' : 'Directional Terms'}</h3>
                <div className="terms-list">
                  <div className="term-item">
                    <span className="term">Superior</span>
                    <span className="meaning">{isHindi ? 'ऊपर' : 'Above'}</span>
                  </div>
                  <div className="term-item">
                    <span className="term">Inferior</span>
                    <span className="meaning">{isHindi ? 'नीचे' : 'Below'}</span>
                  </div>
                  <div className="term-item">
                    <span className="term">Anterior</span>
                    <span className="meaning">{isHindi ? 'आगे' : 'Front'}</span>
                  </div>
                  <div className="term-item">
                    <span className="term">Posterior</span>
                    <span className="meaning">{isHindi ? 'पीछे' : 'Back'}</span>
                  </div>
                  <div className="term-item">
                    <span className="term">Medial</span>
                    <span className="meaning">{isHindi ? 'मध्य की ओर' : 'Toward middle'}</span>
                  </div>
                  <div className="term-item">
                    <span className="term">Lateral</span>
                    <span className="meaning">{isHindi ? 'बाहर की ओर' : 'Away from middle'}</span>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">❤️</div>
                <h3>{isHindi ? 'हृदय कक्ष' : 'Heart Chambers'}</h3>
                <div className="heart-diagram">
                  <div className="chamber">
                    <span className="chamber-name">RA</span>
                    <span className="chamber-full">{isHindi ? 'दायां अलिंद' : 'Right Atrium'}</span>
                  </div>
                  <div className="chamber">
                    <span className="chamber-name">RV</span>
                    <span className="chamber-full">{isHindi ? 'दायां निलय' : 'Right Ventricle'}</span>
                  </div>
                  <div className="chamber">
                    <span className="chamber-name">LA</span>
                    <span className="chamber-full">{isHindi ? 'बायां अलिंद' : 'Left Atrium'}</span>
                  </div>
                  <div className="chamber">
                    <span className="chamber-name">LV</span>
                    <span className="chamber-full">{isHindi ? 'बायां निलय' : 'Left Ventricle'}</span>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">🫁</div>
                <h3>{isHindi ? 'फेफड़ों की संरचना' : 'Lung Structure'}</h3>
                <div className="lung-info">
                  <div className="lung-item">
                    <span className="lung-side">{isHindi ? 'दायां फेफड़ा' : 'Right Lung'}</span>
                    <span className="lung-detail">3 {isHindi ? 'पालियां' : 'Lobes'}</span>
                  </div>
                  <div className="lung-item">
                    <span className="lung-side">{isHindi ? 'बायां फेफड़ा' : 'Left Lung'}</span>
                    <span className="lung-detail">2 {isHindi ? 'पालियां' : 'Lobes'}</span>
                  </div>
                </div>
              </div>

              <div className="resource-card full-width">
                <div className="resource-icon">💉</div>
                <h3>{isHindi ? 'IM इंजेक्शन स्थल' : 'IM Injection Sites'}</h3>
                <div className="injection-grid">
                  <div className="injection-item">
                    <strong>Deltoid</strong>
                    <span>{isHindi ? 'अधिकतम' : 'Max'}: 1 mL</span>
                  </div>
                  <div className="injection-item">
                    <strong>Vastus Lateralis</strong>
                    <span>{isHindi ? 'अधिकतम' : 'Max'}: 5 mL</span>
                  </div>
                  <div className="injection-item">
                    <strong>Ventrogluteal</strong>
                    <span>{isHindi ? 'अधिकतम' : 'Max'}: 3 mL</span>
                  </div>
                  <div className="injection-item">
                    <strong>Dorsogluteal</strong>
                    <span>{isHindi ? 'अधिकतम' : 'Max'}: 3 mL</span>
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
      titleEn="Anatomy"
      titleHi="शरीर रचना विज्ञान"
      descriptionEn="Study of body structures - bones, muscles, organs, and systems"
      descriptionHi="शरीर की संरचनाओं का अध्ययन - हड्डियां, मांसपेशियां, अंग और तंत्र"
      icon="🫀"
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      progress={progress}
    >
      {renderContent()}
    </TopicLayout>
  );
}
