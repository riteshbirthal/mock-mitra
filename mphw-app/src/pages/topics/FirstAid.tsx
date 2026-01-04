import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { firstAidLessons } from '../../data/firstAidContent';
import './FirstAid.css';

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

const firstAidQuestions = [
  {
    id: "fa_1",
    questionEn: "The three aims of First Aid are (PPP):",
    questionHi: "प्राथमिक चिकित्सा के तीन उद्देश्य (PPP) हैं:",
    optionsEn: ["Preserve life, Prevent deterioration, Promote recovery", "Push, Pull, Press", "Pain, Pressure, Position", "None of these"],
    optionsHi: ["जीवन बचाओ, बिगड़ने से रोको, स्वास्थ्य लाभ", "धक्का, खींचो, दबाओ", "दर्द, दबाव, स्थिति", "इनमें से कोई नहीं"],
    correctAnswer: 0,
    explanationEn: "PPP = Preserve life, Prevent deterioration, Promote recovery.",
    explanationHi: "PPP = जीवन बचाओ, बिगड़ने से रोको, स्वास्थ्य लाभ।",
    difficulty: 'easy' as const,
    topic: "firstaid"
  },
  {
    id: "fa_2",
    questionEn: "CPR compression rate for adults is:",
    questionHi: "वयस्कों के लिए CPR संपीड़न दर है:",
    optionsEn: ["100-120 per minute", "60-80 per minute", "150-180 per minute", "40-50 per minute"],
    optionsHi: ["100-120 प्रति मिनट", "60-80 प्रति मिनट", "150-180 प्रति मिनट", "40-50 प्रति मिनट"],
    correctAnswer: 0,
    explanationEn: "High-quality CPR requires compressions at 100-120 per minute.",
    explanationHi: "उच्च गुणवत्ता CPR के लिए 100-120 प्रति मिनट संपीड़न आवश्यक है।",
    difficulty: 'easy' as const,
    topic: "firstaid"
  },
  {
    id: "fa_3",
    questionEn: "For controlling bleeding, the FIRST step is:",
    questionHi: "रक्तस्राव नियंत्रण के लिए पहला कदम है:",
    optionsEn: ["Direct pressure", "Tourniquet", "Elevation", "Cold compress"],
    optionsHi: ["सीधा दबाव", "टूर्निकेट", "ऊंचाई", "ठंडा सेक"],
    correctAnswer: 0,
    explanationEn: "Direct pressure on the wound is the first and most effective step.",
    explanationHi: "घाव पर सीधा दबाव पहला और सबसे प्रभावी कदम है।",
    difficulty: 'easy' as const,
    topic: "firstaid"
  },
  {
    id: "fa_4",
    questionEn: "For burns, cool with running water for:",
    questionHi: "जलने पर बहते पानी से ठंडा करें:",
    optionsEn: ["10-20 minutes", "1-2 minutes", "30-40 minutes", "5 seconds"],
    optionsHi: ["10-20 मिनट", "1-2 मिनट", "30-40 मिनट", "5 सेकंड"],
    correctAnswer: 0,
    explanationEn: "Cool burns under running water for 10-20 minutes.",
    explanationHi: "जलने को 10-20 मिनट तक बहते पानी में ठंडा करें।",
    difficulty: 'easy' as const,
    topic: "firstaid"
  },
  {
    id: "fa_5",
    questionEn: "In snake bite, you should NOT:",
    questionHi: "सांप के काटने पर आपको नहीं करना चाहिए:",
    optionsEn: ["Cut and suck venom", "Keep calm", "Immobilize limb", "Go to hospital"],
    optionsHi: ["काटकर जहर चूसना", "शांत रहना", "अंग स्थिर करना", "अस्पताल जाना"],
    correctAnswer: 0,
    explanationEn: "Never cut the wound or suck venom - this spreads infection and doesn't help.",
    explanationHi: "कभी घाव न काटें या जहर न चूसें - यह संक्रमण फैलाता है।",
    difficulty: 'easy' as const,
    topic: "firstaid"
  },
  {
    id: "fa_6",
    questionEn: "CPR compression to breath ratio in adults is:",
    questionHi: "वयस्कों में CPR संपीड़न से श्वास अनुपात है:",
    optionsEn: ["30:2", "15:2", "5:1", "10:1"],
    optionsHi: ["30:2", "15:2", "5:1", "10:1"],
    correctAnswer: 0,
    explanationEn: "The ratio is 30 compressions to 2 breaths for adults.",
    explanationHi: "वयस्कों के लिए अनुपात 30 संपीड़न से 2 श्वास है।",
    difficulty: 'easy' as const,
    topic: "firstaid"
  },
  {
    id: "fa_7",
    questionEn: "For dog bite, wound should be washed for:",
    questionHi: "कुत्ते के काटने पर घाव धोना चाहिए:",
    optionsEn: ["10-15 minutes", "1-2 minutes", "30 seconds", "Not necessary"],
    optionsHi: ["10-15 मिनट", "1-2 मिनट", "30 सेकंड", "आवश्यक नहीं"],
    correctAnswer: 0,
    explanationEn: "Wash dog bite wounds with soap and water for 10-15 minutes.",
    explanationHi: "कुत्ते के काटने पर साबुन और पानी से 10-15 मिनट धोएं।",
    difficulty: 'easy' as const,
    topic: "firstaid"
  },
  {
    id: "fa_8",
    questionEn: "Rule of Nines - Each arm represents:",
    questionHi: "नाइन का नियम - प्रत्येक बांह है:",
    optionsEn: ["9%", "18%", "1%", "4.5%"],
    optionsHi: ["9%", "18%", "1%", "4.5%"],
    correctAnswer: 0,
    explanationEn: "Each arm is 9% of body surface area in adults.",
    explanationHi: "वयस्कों में प्रत्येक बांह शरीर की सतह का 9% है।",
    difficulty: 'medium' as const,
    topic: "firstaid"
  },
  {
    id: "fa_9",
    questionEn: "Open fracture is:",
    questionHi: "खुला अस्थि भंग है:",
    optionsEn: ["Bone through skin", "Skin intact", "Hairline crack", "Greenstick"],
    optionsHi: ["हड्डी त्वचा से बाहर", "त्वचा बरकरार", "छोटी दरार", "ग्रीनस्टिक"],
    correctAnswer: 0,
    explanationEn: "Open fracture = bone pierces through the skin (high infection risk).",
    explanationHi: "खुला भंग = हड्डी त्वचा से बाहर (उच्च संक्रमण जोखिम)।",
    difficulty: 'easy' as const,
    topic: "firstaid"
  },
  {
    id: "fa_10",
    questionEn: "Emergency helpline number in India:",
    questionHi: "भारत में आपातकालीन हेल्पलाइन नंबर:",
    optionsEn: ["108", "100", "101", "102"],
    optionsHi: ["108", "100", "101", "102"],
    correctAnswer: 0,
    explanationEn: "108 is the emergency medical helpline in India.",
    explanationHi: "108 भारत में आपातकालीन चिकित्सा हेल्पलाइन है।",
    difficulty: 'easy' as const,
    topic: "firstaid"
  }
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
