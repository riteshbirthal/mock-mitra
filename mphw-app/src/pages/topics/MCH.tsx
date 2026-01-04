import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { mchLessons } from '../../data/mchContent';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'mch_completedLessons', ACTIVE_TAB: 'mch_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const mchQuestions = [
  { id: "mch_1", questionEn: "IMR is defined as deaths per:", questionHi: "IMR किसके अनुसार मृत्यु है:", optionsEn: ["1000 live births (under 1 year)", "100,000 live births", "1000 population", "100 births"], optionsHi: ["1000 जीवित जन्म (1 वर्ष से कम)", "100,000 जीवित जन्म", "1000 जनसंख्या", "100 जन्म"], correctAnswer: 0, explanationEn: "IMR = Infant deaths (under 1 year) per 1000 live births.", explanationHi: "IMR = शिशु मृत्यु (1 वर्ष से कम) प्रति 1000 जीवित जन्म।", difficulty: 'easy' as const, topic: "mch" },
  { id: "mch_2", questionEn: "Minimum ANC visits recommended:", questionHi: "अनुशंसित न्यूनतम ANC विज़िट:", optionsEn: ["4", "2", "6", "8"], optionsHi: ["4", "2", "6", "8"], correctAnswer: 0, explanationEn: "WHO recommends minimum 4 ANC visits during pregnancy.", explanationHi: "WHO गर्भावस्था में न्यूनतम 4 ANC विज़िट की सलाह देता है।", difficulty: 'easy' as const, topic: "mch" },
  { id: "mch_3", questionEn: "Exclusive breastfeeding is recommended for:", questionHi: "केवल स्तनपान की सलाह है:", optionsEn: ["6 months", "3 months", "12 months", "9 months"], optionsHi: ["6 महीने", "3 महीने", "12 महीने", "9 महीने"], correctAnswer: 0, explanationEn: "Exclusive breastfeeding (only breast milk) for first 6 months.", explanationHi: "पहले 6 महीने केवल स्तनपान (केवल मां का दूध)।", difficulty: 'easy' as const, topic: "mch" },
  { id: "mch_4", questionEn: "JSSK provides:", questionHi: "JSSK प्रदान करता है:", optionsEn: ["Free delivery and transport", "Cash incentive", "Immunization only", "Family planning only"], optionsHi: ["मुफ्त प्रसव और परिवहन", "नकद प्रोत्साहन", "केवल टीकाकरण", "केवल परिवार नियोजन"], correctAnswer: 0, explanationEn: "JSSK provides free delivery, drugs, diagnostics, and transport.", explanationHi: "JSSK मुफ्त प्रसव, दवाएं, निदान और परिवहन प्रदान करता है।", difficulty: 'easy' as const, topic: "mch" },
  { id: "mch_5", questionEn: "Breastfeeding should be initiated within:", questionHi: "स्तनपान कब तक शुरू करना चाहिए:", optionsEn: ["1 hour of birth", "24 hours", "6 hours", "12 hours"], optionsHi: ["जन्म के 1 घंटे में", "24 घंटे", "6 घंटे", "12 घंटे"], correctAnswer: 0, explanationEn: "Breastfeeding should start within 1 hour of birth.", explanationHi: "जन्म के 1 घंटे के भीतर स्तनपान शुरू करना चाहिए।", difficulty: 'easy' as const, topic: "mch" },
  { id: "mch_6", questionEn: "Fast breathing in infant 0-2 months is:", questionHi: "0-2 महीने के शिशु में तेज सांस है:", optionsEn: ["≥60/min", "≥50/min", "≥40/min", "≥30/min"], optionsHi: ["≥60/मिनट", "≥50/मिनट", "≥40/मिनट", "≥30/मिनट"], correctAnswer: 0, explanationEn: "Fast breathing in 0-2 months = ≥60 breaths per minute.", explanationHi: "0-2 महीने में तेज सांस = ≥60 प्रति मिनट।", difficulty: 'medium' as const, topic: "mch" },
  { id: "mch_7", questionEn: "Cu-T 380A is effective for:", questionHi: "Cu-T 380A प्रभावी है:", optionsEn: ["10 years", "5 years", "3 years", "1 year"], optionsHi: ["10 वर्ष", "5 वर्ष", "3 वर्ष", "1 वर्ष"], correctAnswer: 0, explanationEn: "Cu-T 380A provides contraception for up to 10 years.", explanationHi: "Cu-T 380A 10 वर्ष तक गर्भनिरोधक प्रदान करता है।", difficulty: 'easy' as const, topic: "mch" },
  { id: "mch_8", questionEn: "5 Cleans for safe delivery include:", questionHi: "सुरक्षित प्रसव के 5 स्वच्छ में शामिल:", optionsEn: ["Clean hands, surface, blade, cord tie, cloth", "Only clean hands", "Clean water only", "Clean room only"], optionsHi: ["साफ हाथ, सतह, ब्लेड, गर्भनाल बंधन, कपड़ा", "केवल साफ हाथ", "केवल साफ पानी", "केवल साफ कमरा"], correctAnswer: 0, explanationEn: "5 Cleans: hands, surface, blade, cord tie, cloth to wrap baby.", explanationHi: "5 स्वच्छ: हाथ, सतह, ब्लेड, गर्भनाल बंधन, बच्चे का कपड़ा।", difficulty: 'easy' as const, topic: "mch" },
  { id: "mch_9", questionEn: "PMSMA is conducted on:", questionHi: "PMSMA किस दिन होता है:", optionsEn: ["9th of every month", "1st of every month", "15th of every month", "Last day of month"], optionsHi: ["हर महीने की 9 तारीख", "हर महीने की 1 तारीख", "हर महीने की 15 तारीख", "महीने का आखिरी दिन"], correctAnswer: 0, explanationEn: "PMSMA (quality ANC) is conducted on 9th of every month.", explanationHi: "PMSMA (गुणवत्ता ANC) हर महीने की 9 तारीख को होता है।", difficulty: 'easy' as const, topic: "mch" },
  { id: "mch_10", questionEn: "Colostrum is:", questionHi: "कोलोस्ट्रम है:", optionsEn: ["First milk rich in antibodies", "Formula milk", "Cow's milk", "Water with sugar"], optionsHi: ["एंटीबॉडी से भरपूर पहला दूध", "फॉर्मूला दूध", "गाय का दूध", "चीनी का पानी"], correctAnswer: 0, explanationEn: "Colostrum is the first milk, rich in antibodies and must be given to newborn.", explanationHi: "कोलोस्ट्रम पहला दूध है, एंटीबॉडी से भरपूर और नवजात को देना जरूरी है।", difficulty: 'easy' as const, topic: "mch" }
];

export default function MCH() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / mchLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={mchLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={mchQuestions} questionCount={10} title={isHindi ? 'MCH क्विज़' : 'MCH Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={mchQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">📊</div><h3>{isHindi ? 'MCH संकेतक' : 'MCH Indicators'}</h3><div className="indicator-list"><div className="ind-item"><span>MMR</span><span>{isHindi ? 'प्रति 100,000 जन्म' : 'per 100,000 births'}</span></div><div className="ind-item"><span>IMR</span><span>{isHindi ? 'प्रति 1000 जन्म' : 'per 1000 births'}</span></div><div className="ind-item"><span>NMR</span><span>{isHindi ? '<28 दिन मृत्यु' : '<28 days deaths'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">📅</div><h3>{isHindi ? 'ANC अनुसूची' : 'ANC Schedule'}</h3><div className="anc-list"><div className="anc-item">1st: &lt;12 {isHindi ? 'सप्ताह' : 'weeks'}</div><div className="anc-item">2nd: 14-26 {isHindi ? 'सप्ताह' : 'weeks'}</div><div className="anc-item">3rd: 28-34 {isHindi ? 'सप्ताह' : 'weeks'}</div><div className="anc-item">4th: 36-40 {isHindi ? 'सप्ताह' : 'weeks'}</div></div></div>
            <div className="resource-card"><div className="resource-icon">🏥</div><h3>{isHindi ? 'MCH कार्यक्रम' : 'MCH Programs'}</h3><div className="prog-list"><div className="prog-item"><strong>JSY</strong><span>{isHindi ? 'प्रसव के लिए नकद' : 'Cash for delivery'}</span></div><div className="prog-item"><strong>JSSK</strong><span>{isHindi ? 'मुफ्त प्रसव' : 'Free delivery'}</span></div><div className="prog-item"><strong>PMSMA</strong><span>9th {isHindi ? 'तारीख ANC' : 'of month ANC'}</span></div><div className="prog-item"><strong>PMMVY</strong><span>Rs. 5000</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🌬️</div><h3>{isHindi ? 'तेज सांस कट-ऑफ' : 'Fast Breathing Cut-offs'}</h3><div className="breath-list"><div className="breath-item"><span>0-2m</span><span>≥60/min</span></div><div className="breath-item"><span>2-12m</span><span>≥50/min</span></div><div className="breath-item"><span>1-5y</span><span>≥40/min</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Maternal & Child Health" titleHi="मातृ एवं शिशु स्वास्थ्य" descriptionEn="Pregnancy care, safe delivery, newborn care, family planning" descriptionHi="गर्भावस्था देखभाल, सुरक्षित प्रसव, नवजात देखभाल, परिवार नियोजन" icon="👩‍👧" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
