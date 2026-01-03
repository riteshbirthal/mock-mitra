import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { communicableDiseasesLessons } from '../../data/communicableDiseasesContent';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'cd_completedLessons', ACTIVE_TAB: 'cd_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const cdQuestions = [
  { id: "cd_1", questionEn: "Malaria is transmitted by:", questionHi: "मलेरिया किससे फैलता है:", optionsEn: ["Anopheles mosquito", "Aedes mosquito", "Culex mosquito", "Housefly"], optionsHi: ["एनोफिलीज मच्छर", "एडीज मच्छर", "क्यूलेक्स मच्छर", "घरेलू मक्खी"], correctAnswer: 0, explanationEn: "Malaria is transmitted by female Anopheles mosquito.", explanationHi: "मलेरिया मादा एनोफिलीज मच्छर से फैलता है।", difficulty: 'easy' as const, topic: "cd" },
  { id: "cd_2", questionEn: "Dengue mosquito bites during:", questionHi: "डेंगू मच्छर कब काटता है:", optionsEn: ["Daytime", "Night", "Anytime", "Only morning"], optionsHi: ["दिन में", "रात में", "कभी भी", "केवल सुबह"], correctAnswer: 0, explanationEn: "Aedes (dengue) mosquito bites during daytime.", explanationHi: "एडीज (डेंगू) मच्छर दिन में काटता है।", difficulty: 'easy' as const, topic: "cd" },
  { id: "cd_3", questionEn: "TB is suspected if cough persists for:", questionHi: "खांसी कितने दिन रहने पर TB का संदेह:", optionsEn: [">2 weeks", ">1 week", ">3 days", ">1 month"], optionsHi: [">2 सप्ताह", ">1 सप्ताह", ">3 दिन", ">1 महीने"], correctAnswer: 0, explanationEn: "Suspect TB if cough persists for more than 2 weeks.", explanationHi: "2 सप्ताह से अधिक खांसी पर TB का संदेह करें।", difficulty: 'easy' as const, topic: "cd" },
  { id: "cd_4", questionEn: "DOTS stands for:", questionHi: "DOTS का अर्थ है:", optionsEn: ["Directly Observed Treatment Short-course", "Daily Oral Treatment System", "Direct Observation of TB Symptoms", "None"], optionsHi: ["प्रत्यक्ष निरीक्षित उपचार लघु-कोर्स", "दैनिक मौखिक उपचार प्रणाली", "TB लक्षणों का प्रत्यक्ष निरीक्षण", "कोई नहीं"], correctAnswer: 0, explanationEn: "DOTS = Directly Observed Treatment, Short-course.", explanationHi: "DOTS = प्रत्यक्ष निरीक्षित उपचार, लघु-कोर्स।", difficulty: 'easy' as const, topic: "cd" },
  { id: "cd_5", questionEn: "ORS Plan B is for:", questionHi: "ORS प्लान B किसके लिए है:", optionsEn: ["Some dehydration", "No dehydration", "Severe dehydration", "Cholera only"], optionsHi: ["कुछ निर्जलीकरण", "निर्जलीकरण नहीं", "गंभीर निर्जलीकरण", "केवल हैजा"], correctAnswer: 0, explanationEn: "Plan B = ORS at health facility for some dehydration.", explanationHi: "प्लान B = कुछ निर्जलीकरण के लिए स्वास्थ्य सुविधा में ORS।", difficulty: 'easy' as const, topic: "cd" },
  { id: "cd_6", questionEn: "HIV is transmitted through:", questionHi: "HIV किससे फैलता है:", optionsEn: ["Blood, sexual contact, mother to child", "Mosquito bite", "Handshake", "Sharing food"], optionsHi: ["रक्त, यौन संपर्क, माता से बच्चे", "मच्छर काटने", "हाथ मिलाने", "भोजन साझा करने"], correctAnswer: 0, explanationEn: "HIV transmits through blood, sexual contact, and mother to child.", explanationHi: "HIV रक्त, यौन संपर्क और माता से बच्चे में फैलता है।", difficulty: 'easy' as const, topic: "cd" },
  { id: "cd_7", questionEn: "P. falciparum malaria is:", questionHi: "P. falciparum मलेरिया है:", optionsEn: ["Most dangerous", "Mildest", "Non-fatal", "Rare"], optionsHi: ["सबसे खतरनाक", "सबसे हल्का", "घातक नहीं", "दुर्लभ"], correctAnswer: 0, explanationEn: "P. falciparum causes severe/cerebral malaria - most dangerous.", explanationHi: "P. falciparum गंभीर/सेरेब्रल मलेरिया करता है - सबसे खतरनाक।", difficulty: 'medium' as const, topic: "cd" },
  { id: "cd_8", questionEn: "Chain of infection has how many links?", questionHi: "संक्रमण श्रृंखला में कितनी कड़ियां हैं:", optionsEn: ["6", "4", "8", "3"], optionsHi: ["6", "4", "8", "3"], correctAnswer: 0, explanationEn: "Chain of infection has 6 links - agent, reservoir, exit, transmission, entry, host.", explanationHi: "संक्रमण श्रृंखला में 6 कड़ियां - एजेंट, जलाशय, निकास, संचरण, प्रवेश, मेजबान।", difficulty: 'easy' as const, topic: "cd" },
  { id: "cd_9", questionEn: "Skin pinch >2 seconds indicates:", questionHi: "त्वचा चुटकी >2 सेकंड इंगित करता है:", optionsEn: ["Severe dehydration", "No dehydration", "Mild dehydration", "Normal"], optionsHi: ["गंभीर निर्जलीकरण", "निर्जलीकरण नहीं", "हल्का निर्जलीकरण", "सामान्य"], correctAnswer: 0, explanationEn: "Skin pinch going back very slowly (>2 sec) indicates severe dehydration.", explanationHi: "त्वचा चुटकी बहुत धीरे वापस (>2 सेकंड) गंभीर निर्जलीकरण इंगित करती है।", difficulty: 'medium' as const, topic: "cd" },
  { id: "cd_10", questionEn: "ART for HIV is:", questionHi: "HIV के लिए ART है:", optionsEn: ["Lifelong treatment", "6 months only", "1 year only", "Until symptoms resolve"], optionsHi: ["आजीवन उपचार", "केवल 6 महीने", "केवल 1 वर्ष", "लक्षण ठीक होने तक"], correctAnswer: 0, explanationEn: "ART (Antiretroviral Therapy) is lifelong treatment for HIV.", explanationHi: "ART (एंटीरेट्रोवायरल थेरेपी) HIV के लिए आजीवन उपचार है।", difficulty: 'easy' as const, topic: "cd" }
];

export default function CommunicableDiseases() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / communicableDiseasesLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={communicableDiseasesLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} topicId="communicable-diseases" />;
      case 'quiz': return <QuizComponent questions={cdQuestions} questionCount={10} title={isHindi ? 'संचारी रोग क्विज़' : 'Communicable Diseases Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={cdQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">🦟</div><h3>{isHindi ? 'वेक्टर-जनित रोग' : 'Vector-borne Diseases'}</h3><div className="vector-list"><div className="vector-item"><span>{isHindi ? 'मलेरिया' : 'Malaria'}</span><span>Anopheles ({isHindi ? 'रात' : 'night'})</span></div><div className="vector-item"><span>{isHindi ? 'डेंगू' : 'Dengue'}</span><span>Aedes ({isHindi ? 'दिन' : 'day'})</span></div><div className="vector-item"><span>{isHindi ? 'फाइलेरिया' : 'Filariasis'}</span><span>Culex ({isHindi ? 'रात' : 'night'})</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">💧</div><h3>ORS {isHindi ? 'योजनाएं' : 'Plans'}</h3><div className="ors-list"><div className="ors-item plan-a">Plan A: {isHindi ? 'घर पर (निर्जलीकरण नहीं)' : 'Home (No dehydration)'}</div><div className="ors-item plan-b">Plan B: {isHindi ? 'सुविधा में (कुछ)' : 'Facility (Some)'}</div><div className="ors-item plan-c">Plan C: IV ({isHindi ? 'गंभीर' : 'Severe'})</div></div></div>
            <div className="resource-card"><div className="resource-icon">🫁</div><h3>TB {isHindi ? 'उपचार' : 'Treatment'}</h3><div className="tb-list"><div className="tb-item"><strong>{isHindi ? 'गहन' : 'Intensive'}</strong><span>2 {isHindi ? 'महीने' : 'months'} - HRZE</span></div><div className="tb-item"><strong>{isHindi ? 'निरंतरता' : 'Continuation'}</strong><span>4 {isHindi ? 'महीने' : 'months'} - HR</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🔗</div><h3>{isHindi ? 'संक्रमण श्रृंखला' : 'Chain of Infection'}</h3><div className="chain-list"><div className="chain-item">1. {isHindi ? 'संक्रामक एजेंट' : 'Infectious Agent'}</div><div className="chain-item">2. {isHindi ? 'जलाशय' : 'Reservoir'}</div><div className="chain-item">3. {isHindi ? 'निकास द्वार' : 'Portal of Exit'}</div><div className="chain-item">4. {isHindi ? 'संचरण' : 'Transmission'}</div><div className="chain-item">5. {isHindi ? 'प्रवेश द्वार' : 'Portal of Entry'}</div><div className="chain-item">6. {isHindi ? 'अतिसंवेदनशील मेजबान' : 'Susceptible Host'}</div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Communicable Diseases" titleHi="संचारी रोग" descriptionEn="Malaria, Dengue, TB, Diarrhea, HIV/AIDS and prevention" descriptionHi="मलेरिया, डेंगू, TB, दस्त, HIV/AIDS और रोकथाम" icon="🦠" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
