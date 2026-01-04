import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { immunizationLessons } from '../../data/immunizationContent';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'immunization_completedLessons', ACTIVE_TAB: 'immunization_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const immunizationQuestions = [
  { id: "imm_1", questionEn: "BCG vaccine is given by which route?", questionHi: "BCG टीका किस मार्ग से दिया जाता है?", optionsEn: ["Intradermal", "Intramuscular", "Subcutaneous", "Oral"], optionsHi: ["इंट्राडर्मल", "इंट्रामस्क्युलर", "सबक्यूटेनियस", "मौखिक"], correctAnswer: 0, explanationEn: "BCG is given intradermal (into skin) on left upper arm.", explanationHi: "BCG इंट्राडर्मल (त्वचा में) बाएं ऊपरी बांह पर दी जाती है।", difficulty: 'easy' as const, topic: "immunization" },
  { id: "imm_2", questionEn: "Cold chain temperature for most vaccines:", questionHi: "अधिकांश टीकों के लिए कोल्ड चेन तापमान:", optionsEn: ["+2 to +8°C", "-15 to -25°C", "0 to +2°C", "+10 to +15°C"], optionsHi: ["+2 से +8°C", "-15 से -25°C", "0 से +2°C", "+10 से +15°C"], correctAnswer: 0, explanationEn: "Most vaccines are stored at +2 to +8°C in ILR.", explanationHi: "अधिकांश टीके ILR में +2 से +8°C पर रखे जाते हैं।", difficulty: 'easy' as const, topic: "immunization" },
  { id: "imm_3", questionEn: "OPV is stored in:", questionHi: "OPV कहां रखी जाती है:", optionsEn: ["Freezer (-15 to -25°C)", "ILR (+2 to +8°C)", "Room temperature", "None"], optionsHi: ["फ्रीजर (-15 से -25°C)", "ILR (+2 से +8°C)", "कमरे का तापमान", "कोई नहीं"], correctAnswer: 0, explanationEn: "OPV is stored in freezer at -15 to -25°C.", explanationHi: "OPV फ्रीजर में -15 से -25°C पर रखी जाती है।", difficulty: 'easy' as const, topic: "immunization" },
  { id: "imm_4", questionEn: "Which vaccine should NEVER be frozen?", questionHi: "कौन सा टीका कभी फ्रीज नहीं करना चाहिए?", optionsEn: ["DPT", "OPV", "BCG", "Measles"], optionsHi: ["DPT", "OPV", "BCG", "खसरा"], correctAnswer: 0, explanationEn: "DPT (and Hepatitis B, TT) are freeze-sensitive and get damaged if frozen.", explanationHi: "DPT (और हेपेटाइटिस B, TT) फ्रीज-संवेदनशील हैं और जमने पर खराब हो जाते हैं।", difficulty: 'medium' as const, topic: "immunization" },
  { id: "imm_5", questionEn: "Pentavalent vaccine contains:", questionHi: "पेंटावैलेंट टीके में शामिल है:", optionsEn: ["DPT + Hib + HepB", "DPT + OPV", "BCG + OPV", "MR + JE"], optionsHi: ["DPT + Hib + HepB", "DPT + OPV", "BCG + OPV", "MR + JE"], correctAnswer: 0, explanationEn: "Pentavalent = DPT (Diphtheria, Pertussis, Tetanus) + Hib + Hepatitis B.", explanationHi: "पेंटावैलेंट = DPT + Hib + हेपेटाइटिस B।", difficulty: 'medium' as const, topic: "immunization" },
  { id: "imm_6", questionEn: "MR vaccine first dose is given at:", questionHi: "MR टीके की पहली खुराक कब दी जाती है:", optionsEn: ["9-12 months", "Birth", "6 weeks", "5 years"], optionsHi: ["9-12 महीने", "जन्म", "6 सप्ताह", "5 वर्ष"], correctAnswer: 0, explanationEn: "MR-1 (Measles-Rubella) is given at 9-12 months.", explanationHi: "MR-1 9-12 महीने पर दी जाती है।", difficulty: 'easy' as const, topic: "immunization" },
  { id: "imm_7", questionEn: "VVM square darker than circle means:", questionHi: "VVM वर्ग वृत्त से गहरा होने का अर्थ:", optionsEn: ["Discard vaccine", "Use vaccine", "Store in freezer", "Give immediately"], optionsHi: ["टीका फेंक दें", "टीका उपयोग करें", "फ्रीजर में रखें", "तुरंत दें"], correctAnswer: 0, explanationEn: "VVM square darker than circle = vaccine damaged, must discard.", explanationHi: "VVM वर्ग गहरा = टीका खराब, फेंक दें।", difficulty: 'easy' as const, topic: "immunization" },
  { id: "imm_8", questionEn: "Anaphylaxis treatment:", questionHi: "एनाफिलेक्सिस का उपचार:", optionsEn: ["Adrenaline 1:1000 IM", "Paracetamol", "Antibiotics", "Antacids"], optionsHi: ["एड्रेनालाइन 1:1000 IM", "पैरासिटामोल", "एंटीबायोटिक्स", "एंटासिड"], correctAnswer: 0, explanationEn: "Anaphylaxis is treated with Adrenaline 1:1000 intramuscular.", explanationHi: "एनाफिलेक्सिस का इलाज एड्रेनालाइन 1:1000 इंट्रामस्क्युलर से होता है।", difficulty: 'medium' as const, topic: "immunization" },
  { id: "imm_9", questionEn: "IM injection site for infants:", questionHi: "शिशुओं में IM इंजेक्शन स्थान:", optionsEn: ["Anterolateral thigh", "Deltoid", "Buttock", "Forearm"], optionsHi: ["एंटेरोलेटरल जांघ", "डेल्टॉइड", "नितंब", "अग्रबाहु"], correctAnswer: 0, explanationEn: "Anterolateral thigh is the preferred IM site for infants.", explanationHi: "शिशुओं के लिए एंटेरोलेटरल जांघ पसंदीदा IM स्थान है।", difficulty: 'easy' as const, topic: "immunization" },
  { id: "imm_10", questionEn: "Live attenuated vaccines include:", questionHi: "जीवित क्षीण टीकों में शामिल हैं:", optionsEn: ["BCG, OPV, Measles", "DPT, Hepatitis B", "TT, IPV", "None"], optionsHi: ["BCG, OPV, खसरा", "DPT, हेपेटाइटिस B", "TT, IPV", "कोई नहीं"], correctAnswer: 0, explanationEn: "BCG, OPV, Measles/MR are live attenuated vaccines.", explanationHi: "BCG, OPV, खसरा/MR जीवित क्षीण टीके हैं।", difficulty: 'easy' as const, topic: "immunization" }
];

export default function Immunization() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / immunizationLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={immunizationLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={immunizationQuestions} questionCount={10} title={isHindi ? 'टीकाकरण क्विज़' : 'Immunization Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={immunizationQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card full-width"><div className="resource-icon">📅</div><h3>{isHindi ? 'टीकाकरण अनुसूची' : 'Immunization Schedule'}</h3>
              <div className="schedule-table">
                <div className="schedule-row header"><span>{isHindi ? 'आयु' : 'Age'}</span><span>{isHindi ? 'टीके' : 'Vaccines'}</span></div>
                <div className="schedule-row"><span>{isHindi ? 'जन्म' : 'Birth'}</span><span>BCG, OPV-0, Hep B</span></div>
                <div className="schedule-row"><span>6 {isHindi ? 'सप्ताह' : 'weeks'}</span><span>OPV-1, Penta-1, Rota-1, IPV-1, PCV-1</span></div>
                <div className="schedule-row"><span>10 {isHindi ? 'सप्ताह' : 'weeks'}</span><span>OPV-2, Penta-2, Rota-2</span></div>
                <div className="schedule-row"><span>14 {isHindi ? 'सप्ताह' : 'weeks'}</span><span>OPV-3, Penta-3, Rota-3, IPV-2, PCV-2</span></div>
                <div className="schedule-row"><span>9-12 {isHindi ? 'महीने' : 'months'}</span><span>MR-1, JE-1, PCV-B</span></div>
                <div className="schedule-row"><span>16-24 {isHindi ? 'महीने' : 'months'}</span><span>MR-2, JE-2, DPT-B1, OPV-B</span></div>
              </div>
            </div>
            <div className="resource-card"><div className="resource-icon">❄️</div><h3>{isHindi ? 'कोल्ड चेन' : 'Cold Chain'}</h3><div className="cold-chain-list"><div className="cc-item freezer">{isHindi ? 'फ्रीजर' : 'Freezer'}: -15 to -25°C (OPV)</div><div className="cc-item ilr">ILR: +2 to +8°C ({isHindi ? 'अधिकांश' : 'Most'})</div><div className="cc-item danger">{isHindi ? 'कभी फ्रीज न करें' : 'Never freeze'}: DPT, HepB, TT</div></div></div>
            <div className="resource-card"><div className="resource-icon">💉</div><h3>{isHindi ? 'इंजेक्शन मार्ग' : 'Injection Routes'}</h3><div className="routes-list"><div className="route-item"><span>BCG</span><span>ID (15°)</span></div><div className="route-item"><span>MR, JE</span><span>SC (45°)</span></div><div className="route-item"><span>DPT, HepB</span><span>IM (90°)</span></div><div className="route-item"><span>OPV</span><span>{isHindi ? 'मौखिक' : 'Oral'}</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Immunization" titleHi="टीकाकरण" descriptionEn="Vaccines, schedule, cold chain, and AEFI management" descriptionHi="टीके, अनुसूची, कोल्ड चेन और AEFI प्रबंधन" icon="💉" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
