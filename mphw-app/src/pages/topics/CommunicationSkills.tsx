import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { communicationSkillsLessons } from '../../data/communicationSkillsContent';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'cs_completedLessons', ACTIVE_TAB: 'cs_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const csQuestions = [
  { id: "cs_1", questionEn: "GATHER is used for:", questionHi: "GATHER किसके लिए उपयोग होता है:", optionsEn: ["Counseling", "Surgery", "Diagnosis", "Treatment"], optionsHi: ["परामर्श", "सर्जरी", "निदान", "उपचार"], correctAnswer: 0, explanationEn: "GATHER is a counseling approach (Greet, Ask, Tell, Help, Explain, Return).", explanationHi: "GATHER एक परामर्श दृष्टिकोण है।", difficulty: 'easy' as const, topic: "cs" },
  { id: "cs_2", questionEn: "SOLER is used for:", questionHi: "SOLER किसके लिए उपयोग होता है:", optionsEn: ["Active listening", "Speaking", "Writing", "Reading"], optionsHi: ["सक्रिय सुनना", "बोलना", "लिखना", "पढ़ना"], correctAnswer: 0, explanationEn: "SOLER is a technique for active listening.", explanationHi: "SOLER सक्रिय सुनने की एक तकनीक है।", difficulty: 'easy' as const, topic: "cs" },
  { id: "cs_3", questionEn: "Open-ended questions are used to:", questionHi: "खुले प्रश्नों का उपयोग होता है:", optionsEn: ["Get detailed information", "Get yes/no answer", "Close conversation", "None"], optionsHi: ["विस्तृत जानकारी प्राप्त करना", "हां/नहीं उत्तर", "बातचीत बंद करना", "कोई नहीं"], correctAnswer: 0, explanationEn: "Open questions get detailed information (How, What, Why).", explanationHi: "खुले प्रश्न विस्तृत जानकारी प्राप्त करते हैं।", difficulty: 'easy' as const, topic: "cs" },
  { id: "cs_4", questionEn: "Non-verbal communication includes:", questionHi: "गैर-मौखिक संचार में शामिल है:", optionsEn: ["Body language", "Speaking", "Writing", "Reading"], optionsHi: ["शारीरिक भाषा", "बोलना", "लिखना", "पढ़ना"], correctAnswer: 0, explanationEn: "Non-verbal = body language, gestures, facial expressions.", explanationHi: "गैर-मौखिक = शारीरिक भाषा, इशारे, चेहरे की अभिव्यक्ति।", difficulty: 'easy' as const, topic: "cs" },
  { id: "cs_5", questionEn: "VHND is conducted:", questionHi: "VHND कब आयोजित होता है:", optionsEn: ["Monthly at AWC", "Weekly", "Daily", "Yearly"], optionsHi: ["AWC पर मासिक", "साप्ताहिक", "दैनिक", "वार्षिक"], correctAnswer: 0, explanationEn: "VHND (Village Health and Nutrition Day) is monthly at AWC.", explanationHi: "VHND (ग्राम स्वास्थ्य एवं पोषण दिवस) AWC पर मासिक है।", difficulty: 'easy' as const, topic: "cs" },
  { id: "cs_6", questionEn: "Percentage of non-verbal communication:", questionHi: "गैर-मौखिक संचार का प्रतिशत:", optionsEn: ["55%", "10%", "90%", "25%"], optionsHi: ["55%", "10%", "90%", "25%"], correctAnswer: 0, explanationEn: "About 55% of communication is non-verbal (body language).", explanationHi: "लगभग 55% संचार गैर-मौखिक है।", difficulty: 'medium' as const, topic: "cs" },
  { id: "cs_7", questionEn: "KAP stands for:", questionHi: "KAP का अर्थ है:", optionsEn: ["Knowledge, Attitude, Practice", "Keep All Patients", "Know All Problems", "None"], optionsHi: ["ज्ञान, दृष्टिकोण, अभ्यास", "सभी मरीज रखें", "सभी समस्याएं जानें", "कोई नहीं"], correctAnswer: 0, explanationEn: "KAP = Knowledge, Attitude, Practice (health education goals).", explanationHi: "KAP = ज्ञान, दृष्टिकोण, अभ्यास (स्वास्थ्य शिक्षा लक्ष्य)।", difficulty: 'easy' as const, topic: "cs" },
  { id: "cs_8", questionEn: "VHSNC stands for:", questionHi: "VHSNC का अर्थ है:", optionsEn: ["Village Health Sanitation and Nutrition Committee", "Village Hospital System", "None", "All"], optionsHi: ["ग्राम स्वास्थ्य स्वच्छता और पोषण समिति", "ग्राम अस्पताल प्रणाली", "कोई नहीं", "सभी"], correctAnswer: 0, explanationEn: "VHSNC = Village Health Sanitation and Nutrition Committee.", explanationHi: "VHSNC = ग्राम स्वास्थ्य स्वच्छता और पोषण समिति।", difficulty: 'easy' as const, topic: "cs" },
  { id: "cs_9", questionEn: "Counseling should NOT include:", questionHi: "परामर्श में शामिल नहीं होना चाहिए:", optionsEn: ["Imposing views", "Active listening", "Privacy", "Empathy"], optionsHi: ["विचार थोपना", "सक्रिय सुनना", "गोपनीयता", "सहानुभूति"], correctAnswer: 0, explanationEn: "Never impose your views during counseling.", explanationHi: "परामर्श के दौरान कभी अपने विचार न थोपें।", difficulty: 'easy' as const, topic: "cs" },
  { id: "cs_10", questionEn: "7 C's of communication include:", questionHi: "संचार के 7 C में शामिल है:", optionsEn: ["Clear, Concise, Complete", "Cold, Calm, Careful", "None", "All"], optionsHi: ["स्पष्ट, संक्षिप्त, पूर्ण", "ठंडा, शांत, सावधान", "कोई नहीं", "सभी"], correctAnswer: 0, explanationEn: "7 C's: Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous.", explanationHi: "7 C: स्पष्ट, संक्षिप्त, ठोस, सही, सुसंगत, पूर्ण, विनम्र।", difficulty: 'easy' as const, topic: "cs" }
];

export default function CommunicationSkills() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / communicationSkillsLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={communicationSkillsLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={csQuestions} questionCount={10} title={isHindi ? 'संचार कौशल क्विज़' : 'Communication Skills Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={csQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">🤝</div><h3>GATHER</h3><div className="gather-list"><div className="gath-item"><strong>G</strong><span>{isHindi ? 'गर्मजोशी से स्वागत' : 'Greet warmly'}</span></div><div className="gath-item"><strong>A</strong><span>{isHindi ? 'चिंताओं के बारे में पूछें' : 'Ask about concerns'}</span></div><div className="gath-item"><strong>T</strong><span>{isHindi ? 'जानकारी बताएं' : 'Tell information'}</span></div><div className="gath-item"><strong>H</strong><span>{isHindi ? 'निर्णय में मदद' : 'Help decide'}</span></div><div className="gath-item"><strong>E</strong><span>{isHindi ? 'क्या करें समझाएं' : 'Explain what to do'}</span></div><div className="gath-item"><strong>R</strong><span>{isHindi ? 'फॉलो-अप के लिए वापसी' : 'Return for follow-up'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">👂</div><h3>SOLER</h3><div className="soler-list"><div className="sol-item"><strong>S</strong><span>{isHindi ? 'सामने बैठें' : 'Sit facing'}</span></div><div className="sol-item"><strong>O</strong><span>{isHindi ? 'खुली मुद्रा' : 'Open posture'}</span></div><div className="sol-item"><strong>L</strong><span>{isHindi ? 'आगे झुकें' : 'Lean forward'}</span></div><div className="sol-item"><strong>E</strong><span>{isHindi ? 'आंखों का संपर्क' : 'Eye contact'}</span></div><div className="sol-item"><strong>R</strong><span>{isHindi ? 'आराम से' : 'Relaxed'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">💬</div><h3>{isHindi ? 'प्रश्न प्रकार' : 'Question Types'}</h3><div className="quest-list"><div className="quest-item"><strong>{isHindi ? 'खुला' : 'Open'}</strong><span>{isHindi ? 'विस्तृत जानकारी' : 'Detailed info'}</span></div><div className="quest-item"><strong>{isHindi ? 'बंद' : 'Closed'}</strong><span>{isHindi ? 'हां/नहीं उत्तर' : 'Yes/No answer'}</span></div><div className="quest-item"><strong>{isHindi ? 'जांच' : 'Probing'}</strong><span>{isHindi ? 'अधिक विवरण' : 'More details'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🏘️</div><h3>{isHindi ? 'सामुदायिक मंच' : 'Community Platforms'}</h3><div className="plat-list"><div className="plat-item"><strong>VHSNC</strong><span>{isHindi ? 'ग्राम स्वास्थ्य समिति' : 'Village health committee'}</span></div><div className="plat-item"><strong>VHND</strong><span>{isHindi ? 'मासिक स्वास्थ्य दिवस' : 'Monthly health day'}</span></div><div className="plat-item"><strong>{isHindi ? 'ग्राम सभा' : 'Gram Sabha'}</strong><span>{isHindi ? 'सामुदायिक निर्णय' : 'Community decisions'}</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Communication Skills" titleHi="संचार कौशल" descriptionEn="IPC, counseling, health education, community mobilization" descriptionHi="IPC, परामर्श, स्वास्थ्य शिक्षा, सामुदायिक गतिशीलता" icon="💬" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
