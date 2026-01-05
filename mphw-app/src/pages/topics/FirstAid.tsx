import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { firstAidLessons } from '../../data/firstAidContent';
import './FirstAid.css';
import { firstAidQuestions } from '../../data/questionBanks/firstAid';

const STORAGE_KEYS = {
  COMPLETED_LESSONS: 'firstaid_completedLessons',
  ACTIVE_TAB: 'firstaid_activeTab',
};

const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];


export default function FirstAid() {
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

  const progress = (completedLessons.length / firstAidLessons.length) * 100;

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
            lessons={firstAidLessons}
            completedLessons={completedLessons}
            onLessonComplete={handleLessonComplete}
          />
        );
      case 'quiz':
        return (
          <QuizComponent 
            questions={firstAidQuestions}
            questionCount={10}
            title={isHindi ? 'प्राथमिक चिकित्सा क्विज़' : 'First Aid Quiz'}
          />
        );
      case 'mocktest':
        return (
          <MockTestComponent 
            questions={firstAidQuestions}
            testDuration={30}
            questionCount={10}
          />
        );
      case 'resources':
        return (
          <div className="resources-content">
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-icon">📋</div>
                <h3>{isHindi ? 'DRABC सर्वेक्षण' : 'DRABC Survey'}</h3>
                <div className="drabc-list">
                  <div className="drabc-item"><span className="letter">D</span><span>{isHindi ? 'खतरा' : 'Danger'}</span></div>
                  <div className="drabc-item"><span className="letter">R</span><span>{isHindi ? 'प्रतिक्रिया' : 'Response'}</span></div>
                  <div className="drabc-item"><span className="letter">A</span><span>{isHindi ? 'वायुमार्ग' : 'Airway'}</span></div>
                  <div className="drabc-item"><span className="letter">B</span><span>{isHindi ? 'श्वसन' : 'Breathing'}</span></div>
                  <div className="drabc-item"><span className="letter">C</span><span>{isHindi ? 'परिसंचरण' : 'Circulation'}</span></div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">❤️</div>
                <h3>{isHindi ? 'CPR मान' : 'CPR Values'}</h3>
                <div className="cpr-values">
                  <div className="cpr-item">
                    <span className="cpr-label">{isHindi ? 'दर' : 'Rate'}</span>
                    <span className="cpr-value">100-120/min</span>
                  </div>
                  <div className="cpr-item">
                    <span className="cpr-label">{isHindi ? 'गहराई' : 'Depth'}</span>
                    <span className="cpr-value">5 cm (2")</span>
                  </div>
                  <div className="cpr-item">
                    <span className="cpr-label">{isHindi ? 'अनुपात' : 'Ratio'}</span>
                    <span className="cpr-value">30:2</span>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">🔥</div>
                <h3>{isHindi ? 'नाइन का नियम' : 'Rule of Nines'}</h3>
                <div className="rule-nines">
                  <div className="nine-item"><span>{isHindi ? 'सिर' : 'Head'}</span><span>9%</span></div>
                  <div className="nine-item"><span>{isHindi ? 'प्रत्येक बांह' : 'Each Arm'}</span><span>9%</span></div>
                  <div className="nine-item"><span>{isHindi ? 'सामने धड़' : 'Front Torso'}</span><span>18%</span></div>
                  <div className="nine-item"><span>{isHindi ? 'पीछे धड़' : 'Back Torso'}</span><span>18%</span></div>
                  <div className="nine-item"><span>{isHindi ? 'प्रत्येक पैर' : 'Each Leg'}</span><span>18%</span></div>
                  <div className="nine-item"><span>{isHindi ? 'पेरिनियम' : 'Perineum'}</span><span>1%</span></div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">📞</div>
                <h3>{isHindi ? 'आपातकालीन नंबर' : 'Emergency Numbers'}</h3>
                <div className="emergency-numbers">
                  <div className="number-item emergency"><span>108</span><span>{isHindi ? 'आपातकालीन' : 'Emergency'}</span></div>
                  <div className="number-item ambulance"><span>102</span><span>{isHindi ? 'एम्बुलेंस' : 'Ambulance'}</span></div>
                  <div className="number-item police"><span>100</span><span>{isHindi ? 'पुलिस' : 'Police'}</span></div>
                  <div className="number-item fire"><span>101</span><span>{isHindi ? 'अग्निशमन' : 'Fire'}</span></div>
                </div>
              </div>

              <div className="resource-card full-width">
                <div className="resource-icon">🩸</div>
                <h3>{isHindi ? 'दबाव बिंदु' : 'Pressure Points'}</h3>
                <div className="pressure-points">
                  <div className="point-item">
                    <strong>Brachial</strong>
                    <span>{isHindi ? 'बांह के अंदर → बांह/हाथ रक्तस्राव' : 'Inner arm → Arm/Hand bleeding'}</span>
                  </div>
                  <div className="point-item">
                    <strong>Femoral</strong>
                    <span>{isHindi ? 'जंघा/पैर → पैर रक्तस्राव' : 'Groin → Leg bleeding'}</span>
                  </div>
                  <div className="point-item">
                    <strong>Temporal</strong>
                    <span>{isHindi ? 'कनपटी → खोपड़ी रक्तस्राव' : 'Temple → Scalp bleeding'}</span>
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
      titleEn="First Aid & Emergency Care"
      titleHi="प्राथमिक चिकित्सा"
      descriptionEn="Life-saving techniques for emergencies - CPR, bleeding, burns, fractures"
      descriptionHi="आपातकालीन स्थितियों के लिए जीवन-रक्षक तकनीक"
      icon="🚑"
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      progress={progress}
    >
      {renderContent()}
    </TopicLayout>
  );
}
