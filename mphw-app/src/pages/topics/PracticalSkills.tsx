import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { practicalSkillsLessons } from '../../data/practicalSkillsContent';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'ps_completedLessons', ACTIVE_TAB: 'ps_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const psQuestions = [
  { id: "ps_1", questionEn: "Normal adult pulse rate:", questionHi: "सामान्य वयस्क नाड़ी दर:", optionsEn: ["60-100/min", "100-150/min", "40-60/min", "120-160/min"], optionsHi: ["60-100/मिनट", "100-150/मिनट", "40-60/मिनट", "120-160/मिनट"], correctAnswer: 0, explanationEn: "Normal adult pulse rate is 60-100 beats per minute.", explanationHi: "सामान्य वयस्क नाड़ी दर 60-100 प्रति मिनट है।", difficulty: 'easy' as const, topic: "ps" },
  { id: "ps_2", questionEn: "Normal oral temperature:", questionHi: "सामान्य मौखिक तापमान:", optionsEn: ["37°C (98.6°F)", "36°C", "38°C", "39°C"], optionsHi: ["37°C (98.6°F)", "36°C", "38°C", "39°C"], correctAnswer: 0, explanationEn: "Normal oral temperature is 37°C (98.6°F).", explanationHi: "सामान्य मौखिक तापमान 37°C (98.6°F) है।", difficulty: 'easy' as const, topic: "ps" },
  { id: "ps_3", questionEn: "Normal blood pressure:", questionHi: "सामान्य रक्तचाप:", optionsEn: ["120/80 mmHg", "140/90 mmHg", "100/60 mmHg", "160/100 mmHg"], optionsHi: ["120/80 mmHg", "140/90 mmHg", "100/60 mmHg", "160/100 mmHg"], correctAnswer: 0, explanationEn: "Normal BP is 120/80 mmHg or less.", explanationHi: "सामान्य BP 120/80 mmHg या कम है।", difficulty: 'easy' as const, topic: "ps" },
  { id: "ps_4", questionEn: "Sputum samples for TB diagnosis:", questionHi: "TB निदान के लिए थूक नमूने:", optionsEn: ["2 (spot + early morning)", "1", "3", "5"], optionsHi: ["2 (स्पॉट + सुबह)", "1", "3", "5"], correctAnswer: 0, explanationEn: "Collect 2 sputum samples - spot and early morning.", explanationHi: "2 थूक नमूने लें - स्पॉट और सुबह।", difficulty: 'easy' as const, topic: "ps" },
  { id: "ps_5", questionEn: "Severe anemia Hb level:", questionHi: "गंभीर एनीमिया Hb स्तर:", optionsEn: ["<7 g/dL", "<10 g/dL", "<11 g/dL", "<12 g/dL"], optionsHi: ["<7 g/dL", "<10 g/dL", "<11 g/dL", "<12 g/dL"], correctAnswer: 0, explanationEn: "Severe anemia is Hb <7 g/dL.", explanationHi: "गंभीर एनीमिया Hb <7 g/dL है।", difficulty: 'easy' as const, topic: "ps" },
  { id: "ps_6", questionEn: "Autoclaving temperature and pressure:", questionHi: "ऑटोक्लेविंग तापमान और दबाव:", optionsEn: ["121°C, 15 psi", "100°C, 10 psi", "150°C, 20 psi", "80°C, 5 psi"], optionsHi: ["121°C, 15 psi", "100°C, 10 psi", "150°C, 20 psi", "80°C, 5 psi"], correctAnswer: 0, explanationEn: "Autoclave works at 121°C, 15 psi for 15-20 minutes.", explanationHi: "ऑटोक्लेव 121°C, 15 psi पर 15-20 मिनट काम करता है।", difficulty: 'medium' as const, topic: "ps" },
  { id: "ps_7", questionEn: "Yellow bag is used for:", questionHi: "पीला बैग किसके लिए उपयोग होता है:", optionsEn: ["Infectious waste", "General waste", "Sharps", "Plastic"], optionsHi: ["संक्रामक कचरा", "सामान्य कचरा", "शार्प्स", "प्लास्टिक"], correctAnswer: 0, explanationEn: "Yellow bag is for infectious/biomedical waste.", explanationHi: "पीला बैग संक्रामक/बायोमेडिकल कचरे के लिए है।", difficulty: 'easy' as const, topic: "ps" },
  { id: "ps_8", questionEn: "Malaria RDT result read in:", questionHi: "मलेरिया RDT परिणाम कितने समय में पढ़ें:", optionsEn: ["15-20 minutes", "5 minutes", "1 hour", "30 seconds"], optionsHi: ["15-20 मिनट", "5 मिनट", "1 घंटा", "30 सेकंड"], correctAnswer: 0, explanationEn: "Read malaria RDT result in 15-20 minutes.", explanationHi: "मलेरिया RDT परिणाम 15-20 मिनट में पढ़ें।", difficulty: 'easy' as const, topic: "ps" },
  { id: "ps_9", questionEn: "Normal adult respiratory rate:", questionHi: "सामान्य वयस्क श्वसन दर:", optionsEn: ["12-20/min", "20-30/min", "30-40/min", "6-10/min"], optionsHi: ["12-20/मिनट", "20-30/मिनट", "30-40/मिनट", "6-10/मिनट"], correctAnswer: 0, explanationEn: "Normal adult respiratory rate is 12-20 breaths/minute.", explanationHi: "सामान्य वयस्क श्वसन दर 12-20 प्रति मिनट है।", difficulty: 'easy' as const, topic: "ps" },
  { id: "ps_10", questionEn: "Preferred vein for blood collection:", questionHi: "रक्त संग्रह के लिए पसंदीदा नस:", optionsEn: ["Median cubital", "Jugular", "Femoral", "Carotid"], optionsHi: ["मीडियन क्यूबिटल", "जुगुलर", "फेमोरल", "कैरोटिड"], correctAnswer: 0, explanationEn: "Median cubital vein is preferred for venipuncture.", explanationHi: "वेनिपंक्चर के लिए मीडियन क्यूबिटल वेन पसंदीदा है।", difficulty: 'easy' as const, topic: "ps" }
];

export default function PracticalSkills() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / practicalSkillsLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={practicalSkillsLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={psQuestions} questionCount={10} title={isHindi ? 'व्यावहारिक कौशल क्विज़' : 'Practical Skills Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={psQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">🩺</div><h3>{isHindi ? 'जीवन संकेत' : 'Vital Signs'}</h3><div className="vital-list"><div className="vital-item"><strong>{isHindi ? 'तापमान' : 'Temp'}</strong><span>37°C</span></div><div className="vital-item"><strong>{isHindi ? 'नाड़ी' : 'Pulse'}</strong><span>60-100/min</span></div><div className="vital-item"><strong>RR</strong><span>12-20/min</span></div><div className="vital-item"><strong>BP</strong><span>120/80 mmHg</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🩸</div><h3>{isHindi ? 'हीमोग्लोबिन' : 'Hemoglobin'}</h3><div className="hb-list"><div className="hb-item"><strong>{isHindi ? 'पुरुष' : 'Male'}</strong><span>13-17 g/dL</span></div><div className="hb-item"><strong>{isHindi ? 'महिला' : 'Female'}</strong><span>12-16 g/dL</span></div><div className="hb-item"><strong>{isHindi ? 'गंभीर एनीमिया' : 'Severe anemia'}</strong><span>&lt;7 g/dL</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🗑️</div><h3>{isHindi ? 'कचरा रंग कोड' : 'Waste Color Code'}</h3><div className="waste-list"><div className="waste-item yellow">{isHindi ? 'पीला' : 'Yellow'}: {isHindi ? 'संक्रामक' : 'Infectious'}</div><div className="waste-item red">{isHindi ? 'लाल' : 'Red'}: {isHindi ? 'प्लास्टिक' : 'Plastic'}</div><div className="waste-item blue">{isHindi ? 'नीला/सफेद' : 'Blue/White'}: {isHindi ? 'शार्प्स' : 'Sharps'}</div><div className="waste-item black">{isHindi ? 'काला' : 'Black'}: {isHindi ? 'सामान्य' : 'General'}</div></div></div>
            <div className="resource-card"><div className="resource-icon">🔥</div><h3>{isHindi ? 'नसबंदी' : 'Sterilization'}</h3><div className="ster-list"><div className="ster-item"><strong>{isHindi ? 'उबालना' : 'Boiling'}</strong><span>100°C, 20 min</span></div><div className="ster-item"><strong>{isHindi ? 'ऑटोक्लेव' : 'Autoclave'}</strong><span>121°C, 15 psi</span></div><div className="ster-item"><strong>{isHindi ? 'क्लोरीन' : 'Chlorine'}</strong><span>0.5%, 10 min</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Practical Skills" titleHi="व्यावहारिक कौशल" descriptionEn="Vital signs, wound care, sample collection, diagnostic tests, sterilization" descriptionHi="जीवन संकेत, घाव देखभाल, नमूना संग्रह, नैदानिक परीक्षण, नसबंदी" icon="🩺" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
