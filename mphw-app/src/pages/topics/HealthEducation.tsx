import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { healthEducationLessons } from '../../data/healthEducationContent';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'he_completedLessons', ACTIVE_TAB: 'he_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const heQuestions = [
  { id: "he_1", questionEn: "KAP stands for:", questionHi: "KAP का अर्थ है:", optionsEn: ["Knowledge, Attitude, Practice", "Know All Problems", "Keep All Patients", "None"], optionsHi: ["ज्ञान, दृष्टिकोण, अभ्यास", "सभी समस्याएं जानें", "सभी मरीज रखें", "कोई नहीं"], correctAnswer: 0, explanationEn: "KAP = Knowledge, Attitude, Practice (health education goals).", explanationHi: "KAP = ज्ञान, दृष्टिकोण, अभ्यास (स्वास्थ्य शिक्षा लक्ष्य)।", difficulty: 'easy' as const, topic: "he" },
  { id: "he_2", questionEn: "IEC stands for:", questionHi: "IEC का अर्थ है:", optionsEn: ["Information, Education, Communication", "International Education Center", "Indoor Education Class", "None"], optionsHi: ["सूचना, शिक्षा, संचार", "अंतर्राष्ट्रीय शिक्षा केंद्र", "इनडोर शिक्षा कक्षा", "कोई नहीं"], correctAnswer: 0, explanationEn: "IEC = Information, Education, Communication.", explanationHi: "IEC = सूचना, शिक्षा, संचार।", difficulty: 'easy' as const, topic: "he" },
  { id: "he_3", questionEn: "BCC focuses on:", questionHi: "BCC किस पर केंद्रित है:", optionsEn: ["Behavior change", "Building construction", "Blood collection", "None"], optionsHi: ["व्यवहार परिवर्तन", "भवन निर्माण", "रक्त संग्रह", "कोई नहीं"], correctAnswer: 0, explanationEn: "BCC = Behavior Change Communication.", explanationHi: "BCC = व्यवहार परिवर्तन संचार।", difficulty: 'easy' as const, topic: "he" },
  { id: "he_4", questionEn: "World Health Day is observed on:", questionHi: "विश्व स्वास्थ्य दिवस कब मनाया जाता है:", optionsEn: ["April 7", "March 24", "December 1", "May 31"], optionsHi: ["7 अप्रैल", "24 मार्च", "1 दिसंबर", "31 मई"], correctAnswer: 0, explanationEn: "World Health Day is April 7 (WHO founding day).", explanationHi: "विश्व स्वास्थ्य दिवस 7 अप्रैल (WHO स्थापना दिवस) है।", difficulty: 'easy' as const, topic: "he" },
  { id: "he_5", questionEn: "Flipcharts are best for:", questionHi: "फ्लिपचार्ट किसके लिए सबसे अच्छे हैं:", optionsEn: ["Sequential teaching", "Mass communication", "Surgery", "None"], optionsHi: ["क्रमिक शिक्षण", "जन संचार", "सर्जरी", "कोई नहीं"], correctAnswer: 0, explanationEn: "Flipcharts are best for sequential/step-by-step teaching.", explanationHi: "फ्लिपचार्ट क्रमिक/चरण-दर-चरण शिक्षण के लिए सबसे अच्छे हैं।", difficulty: 'easy' as const, topic: "he" },
  { id: "he_6", questionEn: "World TB Day is:", questionHi: "विश्व TB दिवस है:", optionsEn: ["March 24", "April 7", "December 1", "May 31"], optionsHi: ["24 मार्च", "7 अप्रैल", "1 दिसंबर", "31 मई"], correctAnswer: 0, explanationEn: "World TB Day is March 24.", explanationHi: "विश्व TB दिवस 24 मार्च है।", difficulty: 'easy' as const, topic: "he" },
  { id: "he_7", questionEn: "Formative evaluation is done:", questionHi: "फॉर्मेटिव मूल्यांकन कब होता है:", optionsEn: ["During planning", "After completion", "Never", "During treatment"], optionsHi: ["योजना के दौरान", "पूर्ण होने के बाद", "कभी नहीं", "उपचार के दौरान"], correctAnswer: 0, explanationEn: "Formative evaluation is done during planning to improve design.", explanationHi: "फॉर्मेटिव मूल्यांकन योजना के दौरान डिजाइन सुधारने के लिए होता है।", difficulty: 'medium' as const, topic: "he" },
  { id: "he_8", questionEn: "Pulse Polio campaign is for:", questionHi: "पल्स पोलियो अभियान किसके लिए है:", optionsEn: ["Polio eradication", "TB control", "Malaria", "HIV"], optionsHi: ["पोलियो उन्मूलन", "TB नियंत्रण", "मलेरिया", "HIV"], correctAnswer: 0, explanationEn: "Pulse Polio is India's polio eradication campaign.", explanationHi: "पल्स पोलियो भारत का पोलियो उन्मूलन अभियान है।", difficulty: 'easy' as const, topic: "he" },
  { id: "he_9", questionEn: "Mission Indradhanush is for:", questionHi: "मिशन इंद्रधनुष किसके लिए है:", optionsEn: ["Immunization", "Sanitation", "Nutrition", "TB"], optionsHi: ["टीकाकरण", "स्वच्छता", "पोषण", "TB"], correctAnswer: 0, explanationEn: "Mission Indradhanush aims to increase immunization coverage.", explanationHi: "मिशन इंद्रधनुष का उद्देश्य टीकाकरण कवरेज बढ़ाना है।", difficulty: 'easy' as const, topic: "he" },
  { id: "he_10", questionEn: "Health education aims to change:", questionHi: "स्वास्थ्य शिक्षा का उद्देश्य बदलना है:", optionsEn: ["Behavior", "Genes", "Blood group", "None"], optionsHi: ["व्यवहार", "जीन", "रक्त समूह", "कोई नहीं"], correctAnswer: 0, explanationEn: "Health education aims to change health behavior.", explanationHi: "स्वास्थ्य शिक्षा का उद्देश्य स्वास्थ्य व्यवहार बदलना है।", difficulty: 'easy' as const, topic: "he" }
];

export default function HealthEducation() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / healthEducationLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={healthEducationLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} topicId="health-education" />;
      case 'quiz': return <QuizComponent questions={heQuestions} questionCount={10} title={isHindi ? 'स्वास्थ्य शिक्षा क्विज़' : 'Health Education Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={heQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">📊</div><h3>KAP</h3><div className="kap-list"><div className="kap-item"><strong>K</strong><span>{isHindi ? 'ज्ञान' : 'Knowledge'}</span></div><div className="kap-item"><strong>A</strong><span>{isHindi ? 'दृष्टिकोण' : 'Attitude'}</span></div><div className="kap-item"><strong>P</strong><span>{isHindi ? 'अभ्यास' : 'Practice'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">📣</div><h3>IEC vs BCC</h3><div className="iec-list"><div className="iec-item"><strong>IEC</strong><span>{isHindi ? 'जागरूकता' : 'Awareness'}</span></div><div className="iec-item"><strong>BCC</strong><span>{isHindi ? 'व्यवहार परिवर्तन' : 'Behavior change'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">📅</div><h3>{isHindi ? 'स्वास्थ्य दिवस' : 'Health Days'}</h3><div className="day-list"><div className="day-item"><span>{isHindi ? 'विश्व स्वास्थ्य दिवस' : 'World Health Day'}</span><span>Apr 7</span></div><div className="day-item"><span>{isHindi ? 'विश्व TB दिवस' : 'World TB Day'}</span><span>Mar 24</span></div><div className="day-item"><span>{isHindi ? 'विश्व एड्स दिवस' : 'World AIDS Day'}</span><span>Dec 1</span></div><div className="day-item"><span>{isHindi ? 'विश्व मलेरिया दिवस' : 'World Malaria Day'}</span><span>Apr 25</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🇮🇳</div><h3>{isHindi ? 'अभियान' : 'Campaigns'}</h3><div className="camp-list"><div className="camp-item"><strong>{isHindi ? 'पल्स पोलियो' : 'Pulse Polio'}</strong><span>{isHindi ? 'पोलियो उन्मूलन' : 'Polio eradication'}</span></div><div className="camp-item"><strong>{isHindi ? 'मिशन इंद्रधनुष' : 'Mission Indradhanush'}</strong><span>{isHindi ? 'टीकाकरण' : 'Immunization'}</span></div><div className="camp-item"><strong>{isHindi ? 'स्वच्छ भारत' : 'Swachh Bharat'}</strong><span>{isHindi ? 'स्वच्छता' : 'Sanitation'}</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Health Education (HIEC)" titleHi="स्वास्थ्य शिक्षा (HIEC)" descriptionEn="IEC, BCC, AV aids, health campaigns, evaluation" descriptionHi="IEC, BCC, AV सहायक, स्वास्थ्य अभियान, मूल्यांकन" icon="📢" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
