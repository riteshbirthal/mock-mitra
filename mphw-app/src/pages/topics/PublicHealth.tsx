import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { publicHealthLessons } from '../../data/publicHealthContent';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'ph_completedLessons', ACTIVE_TAB: 'ph_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const phQuestions = [
  { id: "ph_1", questionEn: "Public health focuses on:", questionHi: "सार्वजनिक स्वास्थ्य किस पर केंद्रित है:", optionsEn: ["Population health", "Individual treatment", "Hospital care", "Surgery"], optionsHi: ["जनसंख्या स्वास्थ्य", "व्यक्तिगत उपचार", "अस्पताल देखभाल", "सर्जरी"], correctAnswer: 0, explanationEn: "Public health focuses on population/community health, not individual treatment.", explanationHi: "सार्वजनिक स्वास्थ्य जनसंख्या/समुदाय स्वास्थ्य पर केंद्रित है।", difficulty: 'easy' as const, topic: "ph" },
  { id: "ph_2", questionEn: "Primary prevention includes:", questionHi: "प्राथमिक रोकथाम में शामिल है:", optionsEn: ["Vaccination", "Early diagnosis", "Rehabilitation", "Treatment"], optionsHi: ["टीकाकरण", "प्रारंभिक निदान", "पुनर्वास", "उपचार"], correctAnswer: 0, explanationEn: "Primary prevention prevents disease before it occurs (vaccination).", explanationHi: "प्राथमिक रोकथाम रोग होने से पहले रोकती है (टीकाकरण)।", difficulty: 'easy' as const, topic: "ph" },
  { id: "ph_3", questionEn: "Incidence refers to:", questionHi: "घटना का अर्थ है:", optionsEn: ["New cases in a period", "Total cases", "Deaths", "Recoveries"], optionsHi: ["अवधि में नए मामले", "कुल मामले", "मृत्यु", "रिकवरी"], correctAnswer: 0, explanationEn: "Incidence = New cases in a given time period.", explanationHi: "घटना = दी गई समय अवधि में नए मामले।", difficulty: 'easy' as const, topic: "ph" },
  { id: "ph_4", questionEn: "PHC population coverage in plains:", questionHi: "मैदानों में PHC जनसंख्या कवरेज:", optionsEn: ["30000", "5000", "120000", "50000"], optionsHi: ["30000", "5000", "120000", "50000"], correctAnswer: 0, explanationEn: "PHC covers 30,000 population in plains, 20,000 in hilly areas.", explanationHi: "PHC मैदानों में 30,000, पहाड़ी क्षेत्रों में 20,000 जनसंख्या कवर करता है।", difficulty: 'medium' as const, topic: "ph" },
  { id: "ph_5", questionEn: "CHC has how many beds?", questionHi: "CHC में कितने बेड होते हैं?", optionsEn: ["30", "10", "50", "100"], optionsHi: ["30", "10", "50", "100"], correctAnswer: 0, explanationEn: "CHC has 30 beds and 4 medical specialists.", explanationHi: "CHC में 30 बेड और 4 चिकित्सा विशेषज्ञ होते हैं।", difficulty: 'easy' as const, topic: "ph" },
  { id: "ph_6", questionEn: "NTEP target year for TB elimination:", questionHi: "TB उन्मूलन के लिए NTEP लक्ष्य वर्ष:", optionsEn: ["2025", "2030", "2020", "2035"], optionsHi: ["2025", "2030", "2020", "2035"], correctAnswer: 0, explanationEn: "NTEP aims to eliminate TB by 2025.", explanationHi: "NTEP 2025 तक TB उन्मूलन का लक्ष्य रखता है।", difficulty: 'easy' as const, topic: "ph" },
  { id: "ph_7", questionEn: "Secondary prevention includes:", questionHi: "द्वितीयक रोकथाम में शामिल है:", optionsEn: ["Screening", "Vaccination", "Rehabilitation", "Health promotion"], optionsHi: ["स्क्रीनिंग", "टीकाकरण", "पुनर्वास", "स्वास्थ्य संवर्धन"], correctAnswer: 0, explanationEn: "Secondary prevention = Early detection through screening.", explanationHi: "द्वितीयक रोकथाम = स्क्रीनिंग द्वारा प्रारंभिक पहचान।", difficulty: 'easy' as const, topic: "ph" },
  { id: "ph_8", questionEn: "Sub-centre is staffed by:", questionHi: "उप-केंद्र में स्टाफ है:", optionsEn: ["ANM", "Medical Officer", "Specialist", "Surgeon"], optionsHi: ["ANM", "चिकित्सा अधिकारी", "विशेषज्ञ", "सर्जन"], correctAnswer: 0, explanationEn: "Sub-centre is staffed by ANM (mandatory) and Male Health Worker.", explanationHi: "उप-केंद्र में ANM (अनिवार्य) और पुरुष स्वास्थ्य कार्यकर्ता होते हैं।", difficulty: 'easy' as const, topic: "ph" },
  { id: "ph_9", questionEn: "Endemic disease means:", questionHi: "एंडेमिक रोग का अर्थ है:", optionsEn: ["Constant presence in area", "Sudden outbreak", "Worldwide spread", "No cases"], optionsHi: ["क्षेत्र में निरंतर उपस्थिति", "अचानक प्रकोप", "विश्वव्यापी प्रसार", "कोई मामला नहीं"], correctAnswer: 0, explanationEn: "Endemic = Constant presence of disease in an area.", explanationHi: "एंडेमिक = किसी क्षेत्र में रोग की निरंतर उपस्थिति।", difficulty: 'easy' as const, topic: "ph" },
  { id: "ph_10", questionEn: "ASHA is:", questionHi: "ASHA है:", optionsEn: ["Community health activist", "Doctor", "Nurse", "Pharmacist"], optionsHi: ["सामुदायिक स्वास्थ्य कार्यकर्ता", "डॉक्टर", "नर्स", "फार्मासिस्ट"], correctAnswer: 0, explanationEn: "ASHA = Accredited Social Health Activist (community link worker).", explanationHi: "ASHA = मान्यता प्राप्त सामाजिक स्वास्थ्य कार्यकर्ता।", difficulty: 'easy' as const, topic: "ph" }
];

export default function PublicHealth() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / publicHealthLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={publicHealthLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} topicId="public-health" />;
      case 'quiz': return <QuizComponent questions={phQuestions} questionCount={10} title={isHindi ? 'सार्वजनिक स्वास्थ्य क्विज़' : 'Public Health Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={phQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">🏥</div><h3>{isHindi ? 'स्वास्थ्य सेवा प्रणाली' : 'Healthcare System'}</h3><div className="system-list"><div className="sys-item"><span>SC</span><span>5000 ({isHindi ? 'मैदान' : 'plain'})</span></div><div className="sys-item"><span>PHC</span><span>30000 ({isHindi ? 'मैदान' : 'plain'})</span></div><div className="sys-item"><span>CHC</span><span>120000, 30 {isHindi ? 'बेड' : 'beds'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🛡️</div><h3>{isHindi ? 'रोकथाम के स्तर' : 'Prevention Levels'}</h3><div className="prev-list"><div className="prev-item"><strong>{isHindi ? 'प्राथमिक' : 'Primary'}</strong><span>{isHindi ? 'टीकाकरण' : 'Vaccination'}</span></div><div className="prev-item"><strong>{isHindi ? 'द्वितीयक' : 'Secondary'}</strong><span>{isHindi ? 'स्क्रीनिंग' : 'Screening'}</span></div><div className="prev-item"><strong>{isHindi ? 'तृतीयक' : 'Tertiary'}</strong><span>{isHindi ? 'पुनर्वास' : 'Rehab'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">📊</div><h3>{isHindi ? 'स्वास्थ्य संकेतक' : 'Health Indicators'}</h3><div className="ind-list"><div className="ind-item"><span>IMR</span><span>{isHindi ? 'प्रति 1000 जन्म' : 'per 1000 births'}</span></div><div className="ind-item"><span>MMR</span><span>{isHindi ? 'प्रति 100,000' : 'per 100,000'}</span></div><div className="ind-item"><span>{isHindi ? 'घटना' : 'Incidence'}</span><span>{isHindi ? 'नए मामले' : 'New cases'}</span></div><div className="ind-item"><span>{isHindi ? 'प्रसार' : 'Prevalence'}</span><span>{isHindi ? 'कुल मामले' : 'Total cases'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🇮🇳</div><h3>{isHindi ? 'राष्ट्रीय कार्यक्रम' : 'National Programs'}</h3><div className="prog-list"><div className="prog-item"><strong>NTEP</strong><span>TB</span></div><div className="prog-item"><strong>NVBDCP</strong><span>{isHindi ? 'वेक्टर रोग' : 'Vector diseases'}</span></div><div className="prog-item"><strong>NACP</strong><span>HIV/AIDS</span></div><div className="prog-item"><strong>RMNCH+A</strong><span>MCH</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Public Health" titleHi="सार्वजनिक स्वास्थ्य" descriptionEn="Health indicators, prevention levels, national programs, healthcare delivery" descriptionHi="स्वास्थ्य संकेतक, रोकथाम के स्तर, राष्ट्रीय कार्यक्रम, स्वास्थ्य सेवा वितरण" icon="🏥" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
