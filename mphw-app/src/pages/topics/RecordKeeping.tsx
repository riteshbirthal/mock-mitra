import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { recordKeepingLessons } from '../../data/recordKeepingContent';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'rk_completedLessons', ACTIVE_TAB: 'rk_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const rkQuestions = [
  { id: "rk_1", questionEn: "EC Register tracks:", questionHi: "EC रजिस्टर ट्रैक करता है:", optionsEn: ["Eligible couples and family planning", "Employees", "Equipment", "Expenses"], optionsHi: ["पात्र दंपति और परिवार नियोजन", "कर्मचारी", "उपकरण", "खर्च"], correctAnswer: 0, explanationEn: "EC Register tracks eligible couples and their family planning methods.", explanationHi: "EC रजिस्टर पात्र दंपतियों और उनके परिवार नियोजन विधियों को ट्रैक करता है।", difficulty: 'easy' as const, topic: "rk" },
  { id: "rk_2", questionEn: "Monthly report should be submitted to PHC by:", questionHi: "मासिक रिपोर्ट PHC को कब तक जमा करनी चाहिए:", optionsEn: ["5th of month", "1st of month", "15th of month", "Last day"], optionsHi: ["महीने की 5 तारीख", "महीने की 1 तारीख", "महीने की 15 तारीख", "आखिरी दिन"], correctAnswer: 0, explanationEn: "Sub-centre submits monthly report to PHC by 5th of month.", explanationHi: "उप-केंद्र महीने की 5 तारीख तक PHC को मासिक रिपोर्ट जमा करता है।", difficulty: 'easy' as const, topic: "rk" },
  { id: "rk_3", questionEn: "IDSP S form is used at:", questionHi: "IDSP S फॉर्म कहां उपयोग होता है:", optionsEn: ["Sub-centre", "PHC", "District", "State"], optionsHi: ["उप-केंद्र", "PHC", "जिला", "राज्य"], correctAnswer: 0, explanationEn: "S form is used at Sub-centre for syndromic surveillance.", explanationHi: "S फॉर्म उप-केंद्र पर सिंड्रोमिक निगरानी के लिए उपयोग होता है।", difficulty: 'easy' as const, topic: "rk" },
  { id: "rk_4", questionEn: "Good record keeping principle includes:", questionHi: "अच्छे रिकॉर्ड रखने के सिद्धांत में शामिल है:", optionsEn: ["Accuracy, completeness, timeliness", "Only accuracy", "Only completeness", "None"], optionsHi: ["सटीकता, पूर्णता, समयबद्धता", "केवल सटीकता", "केवल पूर्णता", "कोई नहीं"], correctAnswer: 0, explanationEn: "Good records are accurate, complete, timely, legible, and confidential.", explanationHi: "अच्छे रिकॉर्ड सटीक, पूर्ण, समय पर, पठनीय और गोपनीय होते हैं।", difficulty: 'easy' as const, topic: "rk" },
  { id: "rk_5", questionEn: "Nikshay portal is used for:", questionHi: "निक्षय पोर्टल किसके लिए उपयोग होता है:", optionsEn: ["TB surveillance", "Malaria", "Immunization", "Family planning"], optionsHi: ["TB निगरानी", "मलेरिया", "टीकाकरण", "परिवार नियोजन"], correctAnswer: 0, explanationEn: "Nikshay is the TB surveillance and tracking portal.", explanationHi: "निक्षय TB निगरानी और ट्रैकिंग पोर्टल है।", difficulty: 'easy' as const, topic: "rk" },
  { id: "rk_6", questionEn: "ANC register tracks:", questionHi: "ANC रजिस्टर ट्रैक करता है:", optionsEn: ["Pregnant women", "Children", "Elderly", "All patients"], optionsHi: ["गर्भवती महिलाएं", "बच्चे", "बुजुर्ग", "सभी मरीज"], correctAnswer: 0, explanationEn: "ANC register tracks pregnant women from registration to delivery.", explanationHi: "ANC रजिस्टर गर्भवती महिलाओं को पंजीकरण से प्रसव तक ट्रैक करता है।", difficulty: 'easy' as const, topic: "rk" },
  { id: "rk_7", questionEn: "HMIS stands for:", questionHi: "HMIS का अर्थ है:", optionsEn: ["Health Management Information System", "Hospital Medical Info System", "Health Medical Insurance System", "None"], optionsHi: ["स्वास्थ्य प्रबंधन सूचना प्रणाली", "अस्पताल चिकित्सा सूचना प्रणाली", "स्वास्थ्य चिकित्सा बीमा प्रणाली", "कोई नहीं"], correctAnswer: 0, explanationEn: "HMIS = Health Management Information System.", explanationHi: "HMIS = स्वास्थ्य प्रबंधन सूचना प्रणाली।", difficulty: 'easy' as const, topic: "rk" },
  { id: "rk_8", questionEn: "Incidence calculation:", questionHi: "घटना गणना:", optionsEn: ["New cases / Population at risk", "Total cases / Population", "Deaths / Births", "None"], optionsHi: ["नए मामले / जोखिम जनसंख्या", "कुल मामले / जनसंख्या", "मृत्यु / जन्म", "कोई नहीं"], correctAnswer: 0, explanationEn: "Incidence = New cases / Population at risk in a period.", explanationHi: "घटना = अवधि में नए मामले / जोखिम वाली जनसंख्या।", difficulty: 'medium' as const, topic: "rk" },
  { id: "rk_9", questionEn: "P form is used at:", questionHi: "P फॉर्म कहां उपयोग होता है:", optionsEn: ["PHC", "Sub-centre", "District", "State"], optionsHi: ["PHC", "उप-केंद्र", "जिला", "राज्य"], correctAnswer: 0, explanationEn: "P form is used at PHC for presumptive surveillance data.", explanationHi: "P फॉर्म PHC पर प्रिज़म्प्टिव निगरानी डेटा के लिए उपयोग होता है।", difficulty: 'easy' as const, topic: "rk" },
  { id: "rk_10", questionEn: "Birth registration should be done within:", questionHi: "जन्म पंजीकरण कितने दिनों में होना चाहिए:", optionsEn: ["21 days", "7 days", "30 days", "1 year"], optionsHi: ["21 दिन", "7 दिन", "30 दिन", "1 वर्ष"], correctAnswer: 0, explanationEn: "Birth should be registered within 21 days (free registration).", explanationHi: "जन्म 21 दिनों के भीतर पंजीकृत होना चाहिए (मुफ्त पंजीकरण)।", difficulty: 'easy' as const, topic: "rk" }
];

export default function RecordKeeping() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / recordKeepingLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={recordKeepingLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={rkQuestions} questionCount={10} title={isHindi ? 'रिकॉर्ड रखना क्विज़' : 'Record Keeping Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={rkQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">📚</div><h3>{isHindi ? 'महत्वपूर्ण रजिस्टर' : 'Key Registers'}</h3><div className="reg-list"><div className="reg-item"><strong>EC</strong><span>{isHindi ? 'पात्र दंपति' : 'Eligible Couples'}</span></div><div className="reg-item"><strong>ANC</strong><span>{isHindi ? 'गर्भवती महिलाएं' : 'Pregnant Women'}</span></div><div className="reg-item"><strong>{isHindi ? 'टीकाकरण' : 'Immunization'}</strong><span>{isHindi ? 'बच्चों के टीके' : 'Child Vaccines'}</span></div><div className="reg-item"><strong>{isHindi ? 'जन्म/मृत्यु' : 'Birth/Death'}</strong><span>{isHindi ? 'महत्वपूर्ण घटनाएं' : 'Vital Events'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">📅</div><h3>{isHindi ? 'रिपोर्टिंग समयसीमा' : 'Reporting Timeline'}</h3><div className="time-list"><div className="time-item"><strong>SC → PHC</strong><span>5th</span></div><div className="time-item"><strong>PHC → Block</strong><span>7th</span></div><div className="time-item"><strong>Block → District</strong><span>10th</span></div><div className="time-item"><strong>District → State</strong><span>15th</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🔍</div><h3>IDSP {isHindi ? 'फॉर्म' : 'Forms'}</h3><div className="idsp-list"><div className="idsp-item"><strong>S</strong><span>SC ({isHindi ? 'सिंड्रोमिक' : 'Syndromic'})</span></div><div className="idsp-item"><strong>P</strong><span>PHC ({isHindi ? 'प्रिज़म्प्टिव' : 'Presumptive'})</span></div><div className="idsp-item"><strong>L</strong><span>Lab ({isHindi ? 'पुष्ट' : 'Confirmed'})</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">📱</div><h3>{isHindi ? 'डिजिटल उपकरण' : 'Digital Tools'}</h3><div className="tool-list"><div className="tool-item"><strong>RCH</strong><span>MCH {isHindi ? 'डेटा' : 'data'}</span></div><div className="tool-item"><strong>{isHindi ? 'निक्षय' : 'Nikshay'}</strong><span>TB</span></div><div className="tool-item"><strong>eVIN</strong><span>{isHindi ? 'टीका' : 'Vaccine'}</span></div><div className="tool-item"><strong>IHIP</strong><span>{isHindi ? 'रोग' : 'Disease'}</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Record Keeping" titleHi="रिकॉर्ड रखना" descriptionEn="Registers, forms, reports, surveillance, data analysis" descriptionHi="रजिस्टर, फॉर्म, रिपोर्ट, निगरानी, डेटा विश्लेषण" icon="📋" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
