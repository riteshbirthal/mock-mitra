import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { healthHygieneLessons } from '../../data/healthHygieneContent';

const STORAGE_KEYS = {
  COMPLETED_LESSONS: 'healthhygiene_completedLessons',
  ACTIVE_TAB: 'healthhygiene_activeTab',
};

const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const healthHygieneQuestions = [
  { id: "hh_1", questionEn: "WHO definition of health includes:", questionHi: "WHO की स्वास्थ्य परिभाषा में शामिल है:", optionsEn: ["Physical, mental, and social well-being", "Only absence of disease", "Only physical health", "Only mental health"], optionsHi: ["शारीरिक, मानसिक और सामाजिक कल्याण", "केवल रोग की अनुपस्थिति", "केवल शारीरिक स्वास्थ्य", "केवल मानसिक स्वास्थ्य"], correctAnswer: 0, explanationEn: "WHO defines health as complete physical, mental, and social well-being.", explanationHi: "WHO स्वास्थ्य को पूर्ण शारीरिक, मानसिक और सामाजिक कल्याण के रूप में परिभाषित करता है।", difficulty: 'easy' as const, topic: "healthhygiene" },
  { id: "hh_2", questionEn: "Handwashing should be done for:", questionHi: "हाथ धोना कितने समय तक करना चाहिए:", optionsEn: ["40-60 seconds", "5-10 seconds", "2-3 minutes", "10-15 seconds"], optionsHi: ["40-60 सेकंड", "5-10 सेकंड", "2-3 मिनट", "10-15 सेकंड"], correctAnswer: 0, explanationEn: "Proper handwashing with soap should take 40-60 seconds.", explanationHi: "साबुन से उचित हाथ धोने में 40-60 सेकंड लगने चाहिए।", difficulty: 'easy' as const, topic: "healthhygiene" },
  { id: "hh_3", questionEn: "Most effective household water purification method:", questionHi: "सबसे प्रभावी घरेलू जल शुद्धिकरण विधि:", optionsEn: ["Boiling", "Straining", "Settling", "None"], optionsHi: ["उबालना", "छानना", "बैठाना", "कोई नहीं"], correctAnswer: 0, explanationEn: "Boiling is the most effective household method to purify water.", explanationHi: "उबालना पानी शुद्ध करने की सबसे प्रभावी घरेलू विधि है।", difficulty: 'easy' as const, topic: "healthhygiene" },
  { id: "hh_4", questionEn: "Food danger zone temperature is:", questionHi: "खाद्य खतरा क्षेत्र तापमान है:", optionsEn: ["5-60°C", "0-5°C", "60-100°C", "Below 0°C"], optionsHi: ["5-60°C", "0-5°C", "60-100°C", "0°C से नीचे"], correctAnswer: 0, explanationEn: "Bacteria multiply rapidly between 5-60°C (danger zone).", explanationHi: "5-60°C (खतरा क्षेत्र) में बैक्टीरिया तेजी से बढ़ते हैं।", difficulty: 'medium' as const, topic: "healthhygiene" },
  { id: "hh_5", questionEn: "Chlorination contact time for water:", questionHi: "जल के लिए क्लोरीनीकरण संपर्क समय:", optionsEn: ["30 minutes", "5 minutes", "2 hours", "1 minute"], optionsHi: ["30 मिनट", "5 मिनट", "2 घंटे", "1 मिनट"], correctAnswer: 0, explanationEn: "Chlorine needs 30 minutes contact time to disinfect water.", explanationHi: "क्लोरीन को पानी कीटाणुरहित करने के लिए 30 मिनट संपर्क समय चाहिए।", difficulty: 'medium' as const, topic: "healthhygiene" },
  { id: "hh_6", questionEn: "Vector for malaria is:", questionHi: "मलेरिया का वाहक है:", optionsEn: ["Mosquito", "Housefly", "Rat", "Cockroach"], optionsHi: ["मच्छर", "घरेलू मक्खी", "चूहा", "तिलचट्टा"], correctAnswer: 0, explanationEn: "Malaria is transmitted by Anopheles mosquito.", explanationHi: "मलेरिया एनोफिलीज मच्छर द्वारा फैलता है।", difficulty: 'easy' as const, topic: "healthhygiene" },
  { id: "hh_7", questionEn: "3 R's of waste management:", questionHi: "अपशिष्ट प्रबंधन के 3 R:", optionsEn: ["Reduce, Reuse, Recycle", "Remove, Replace, Repair", "Read, Write, Review", "None"], optionsHi: ["कम करो, पुनः उपयोग, पुनर्चक्रण", "हटाओ, बदलो, मरम्मत", "पढ़ो, लिखो, समीक्षा", "कोई नहीं"], correctAnswer: 0, explanationEn: "3 R's: Reduce, Reuse, Recycle.", explanationHi: "3 R: कम करो, पुनः उपयोग, पुनर्चक्रण।", difficulty: 'easy' as const, topic: "healthhygiene" },
  { id: "hh_8", questionEn: "WHO 5 moments are for:", questionHi: "WHO 5 क्षण किसके लिए हैं:", optionsEn: ["Hand hygiene in healthcare", "Food safety", "Water purification", "Waste disposal"], optionsHi: ["स्वास्थ्य देखभाल में हाथ स्वच्छता", "खाद्य सुरक्षा", "जल शुद्धिकरण", "अपशिष्ट निपटान"], correctAnswer: 0, explanationEn: "WHO 5 Moments are guidelines for hand hygiene in healthcare settings.", explanationHi: "WHO 5 क्षण स्वास्थ्य देखभाल में हाथ स्वच्छता के दिशानिर्देश हैं।", difficulty: 'easy' as const, topic: "healthhygiene" },
  { id: "hh_9", questionEn: "Minimum space per person in housing:", questionHi: "आवास में प्रति व्यक्ति न्यूनतम स्थान:", optionsEn: ["50 sq ft", "25 sq ft", "100 sq ft", "10 sq ft"], optionsHi: ["50 वर्ग फुट", "25 वर्ग फुट", "100 वर्ग फुट", "10 वर्ग फुट"], correctAnswer: 0, explanationEn: "Minimum recommended space is 50 sq ft per person.", explanationHi: "न्यूनतम अनुशंसित स्थान प्रति व्यक्ति 50 वर्ग फुट है।", difficulty: 'medium' as const, topic: "healthhygiene" },
  { id: "hh_10", questionEn: "ODF stands for:", questionHi: "ODF का अर्थ है:", optionsEn: ["Open Defecation Free", "Open Door Free", "Open Disease Free", "None"], optionsHi: ["खुले में शौच मुक्त", "खुला दरवाजा मुक्त", "खुला रोग मुक्त", "कोई नहीं"], correctAnswer: 0, explanationEn: "ODF = Open Defecation Free, a goal of Swachh Bharat Mission.", explanationHi: "ODF = खुले में शौच मुक्त, स्वच्छ भारत मिशन का लक्ष्य।", difficulty: 'easy' as const, topic: "healthhygiene" }
];

export default function HealthHygiene() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / healthHygieneLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={healthHygieneLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} topicId="health-hygiene" />;
      case 'quiz': return <QuizComponent questions={healthHygieneQuestions} questionCount={10} title={isHindi ? 'स्वास्थ्य और स्वच्छता क्विज़' : 'Health & Hygiene Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={healthHygieneQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">🖐️</div><h3>{isHindi ? 'हाथ धोने के 7 चरण' : '7 Steps of Handwashing'}</h3><div className="steps-list"><div className="step-item">1. {isHindi ? 'हाथ गीले करें' : 'Wet hands'}</div><div className="step-item">2. {isHindi ? 'साबुन लगाएं' : 'Apply soap'}</div><div className="step-item">3. {isHindi ? 'हथेली से हथेली' : 'Palm to palm'}</div><div className="step-item">4. {isHindi ? 'उंगलियों के बीच' : 'Between fingers'}</div><div className="step-item">5. {isHindi ? 'हाथों की पीठ' : 'Back of hands'}</div><div className="step-item">6. {isHindi ? 'अंगूठे और सिरे' : 'Thumbs and tips'}</div><div className="step-item">7. {isHindi ? 'धोएं और सुखाएं' : 'Rinse and dry'}</div></div></div>
            <div className="resource-card"><div className="resource-icon">💧</div><h3>{isHindi ? 'जल शुद्धिकरण' : 'Water Purification'}</h3><div className="methods-list"><div className="method-item"><strong>{isHindi ? 'उबालना' : 'Boiling'}</strong><span>{isHindi ? '1 मिनट रोलिंग बॉयल' : '1 min rolling boil'}</span></div><div className="method-item"><strong>{isHindi ? 'क्लोरीनीकरण' : 'Chlorination'}</strong><span>1-2 {isHindi ? 'बूंद/लीटर, 30 मिनट' : 'drops/L, 30 min'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🌡️</div><h3>{isHindi ? 'खाद्य सुरक्षा तापमान' : 'Food Safety Temps'}</h3><div className="temp-list"><div className="temp-item safe">&gt;60°C = {isHindi ? 'सुरक्षित (गर्म)' : 'Safe (hot)'}</div><div className="temp-item danger">5-60°C = {isHindi ? 'खतरा क्षेत्र' : 'DANGER ZONE'}</div><div className="temp-item safe">&lt;5°C = {isHindi ? 'सुरक्षित (ठंडा)' : 'Safe (cold)'}</div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Health & Hygiene" titleHi="स्वास्थ्य और स्वच्छता" descriptionEn="Personal and environmental hygiene for disease prevention" descriptionHi="रोग रोकथाम के लिए व्यक्तिगत और पर्यावरणीय स्वच्छता" icon="🧼" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
