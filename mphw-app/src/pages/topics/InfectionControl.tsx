import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { infectionControlLessons } from '../../data/infectionControlContent';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'ic_completedLessons', ACTIVE_TAB: 'ic_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const icQuestions = [
  { id: "ic_1", questionEn: "WHO 5 moments of hand hygiene includes:", questionHi: "WHO हाथ स्वच्छता के 5 मोमेंट में शामिल है:", optionsEn: ["Before touching patient", "Only after meals", "Only morning", "Never"], optionsHi: ["मरीज को छूने से पहले", "केवल भोजन के बाद", "केवल सुबह", "कभी नहीं"], correctAnswer: 0, explanationEn: "One of 5 moments is before touching a patient.", explanationHi: "5 मोमेंट में से एक मरीज को छूने से पहले है।", difficulty: 'easy' as const, topic: "ic" },
  { id: "ic_2", questionEn: "Hand washing duration:", questionHi: "हाथ धोने की अवधि:", optionsEn: ["40-60 seconds", "10 seconds", "5 seconds", "2 minutes"], optionsHi: ["40-60 सेकंड", "10 सेकंड", "5 सेकंड", "2 मिनट"], correctAnswer: 0, explanationEn: "Hand washing with soap and water takes 40-60 seconds.", explanationHi: "साबुन और पानी से हाथ धोने में 40-60 सेकंड लगते हैं।", difficulty: 'easy' as const, topic: "ic" },
  { id: "ic_3", questionEn: "N95 mask is used for:", questionHi: "N95 मास्क किसके लिए उपयोग होता है:", optionsEn: ["TB and airborne infections", "Only dust", "Swimming", "None"], optionsHi: ["TB और वायुजनित संक्रमण", "केवल धूल", "तैराकी", "कोई नहीं"], correctAnswer: 0, explanationEn: "N95 is used for TB and airborne infections.", explanationHi: "N95 TB और वायुजनित संक्रमण के लिए उपयोग होता है।", difficulty: 'easy' as const, topic: "ic" },
  { id: "ic_4", questionEn: "Yellow bag is used for:", questionHi: "पीला बैग किसके लिए उपयोग होता है:", optionsEn: ["Infectious waste", "General waste", "Plastic", "Paper"], optionsHi: ["संक्रामक कचरा", "सामान्य कचरा", "प्लास्टिक", "कागज"], correctAnswer: 0, explanationEn: "Yellow bag is for infectious/biomedical waste.", explanationHi: "पीला बैग संक्रामक/बायोमेडिकल कचरे के लिए है।", difficulty: 'easy' as const, topic: "ic" },
  { id: "ic_5", questionEn: "Autoclave temperature:", questionHi: "ऑटोक्लेव तापमान:", optionsEn: ["121°C", "100°C", "50°C", "200°C"], optionsHi: ["121°C", "100°C", "50°C", "200°C"], correctAnswer: 0, explanationEn: "Autoclave works at 121°C, 15 psi.", explanationHi: "ऑटोक्लेव 121°C, 15 psi पर काम करता है।", difficulty: 'easy' as const, topic: "ic" },
  { id: "ic_6", questionEn: "Steps of hand washing:", questionHi: "हाथ धोने के चरण:", optionsEn: ["7", "3", "10", "2"], optionsHi: ["7", "3", "10", "2"], correctAnswer: 0, explanationEn: "There are 7 steps of proper hand washing.", explanationHi: "उचित हाथ धोने के 7 चरण हैं।", difficulty: 'easy' as const, topic: "ic" },
  { id: "ic_7", questionEn: "PPE donning order:", questionHi: "PPE पहनने का क्रम:", optionsEn: ["Gown, Mask, Goggles, Gloves", "Gloves first", "Mask first", "Random"], optionsHi: ["गाउन, मास्क, गॉगल्स, दस्ताने", "पहले दस्ताने", "पहले मास्क", "कोई भी"], correctAnswer: 0, explanationEn: "Don: Gown → Mask → Goggles → Gloves.", explanationHi: "पहनें: गाउन → मास्क → गॉगल्स → दस्ताने।", difficulty: 'medium' as const, topic: "ic" },
  { id: "ic_8", questionEn: "Sharps container should be filled:", questionHi: "शार्प्स कंटेनर कितना भरना चाहिए:", optionsEn: ["3/4 full", "Completely full", "Half", "1/4"], optionsHi: ["3/4 भरा", "पूरा भरा", "आधा", "1/4"], correctAnswer: 0, explanationEn: "Sharps container should be filled only 3/4 full.", explanationHi: "शार्प्स कंटेनर केवल 3/4 भरना चाहिए।", difficulty: 'easy' as const, topic: "ic" },
  { id: "ic_9", questionEn: "Hand rubbing duration:", questionHi: "हाथ रगड़ने की अवधि:", optionsEn: ["20-30 seconds", "5 seconds", "2 minutes", "10 minutes"], optionsHi: ["20-30 सेकंड", "5 सेकंड", "2 मिनट", "10 मिनट"], correctAnswer: 0, explanationEn: "Alcohol hand rub takes 20-30 seconds.", explanationHi: "अल्कोहल हैंड रब में 20-30 सेकंड लगते हैं।", difficulty: 'easy' as const, topic: "ic" },
  { id: "ic_10", questionEn: "Critical items require:", questionHi: "क्रिटिकल वस्तुओं को चाहिए:", optionsEn: ["Sterilization", "Only washing", "Nothing", "Wiping"], optionsHi: ["नसबंदी", "केवल धोना", "कुछ नहीं", "पोंछना"], correctAnswer: 0, explanationEn: "Critical items (surgical instruments) require sterilization.", explanationHi: "क्रिटिकल वस्तुओं (सर्जिकल उपकरण) को नसबंदी चाहिए।", difficulty: 'easy' as const, topic: "ic" }
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
      case 'learn': return <LessonContent lessons={infectionControlLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} topicId="infection-control" />;
      case 'quiz': return <QuizComponent questions={icQuestions} questionCount={10} title={isHindi ? 'संक्रमण नियंत्रण क्विज़' : 'Infection Control Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={icQuestions} testDuration={30} questionCount={10} />;
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
