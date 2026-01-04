import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { pharmacologyLessons } from '../../data/pharmacologyContent';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'pharm_completedLessons', ACTIVE_TAB: 'pharm_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const pharmQuestions = [
  { id: "pharm_1", questionEn: "Fastest route of drug administration:", questionHi: "दवा प्रशासन का सबसे तेज मार्ग:", optionsEn: ["Intravenous", "Oral", "Intramuscular", "Subcutaneous"], optionsHi: ["इंट्रावेनस", "मौखिक", "इंट्रामस्कुलर", "सबक्यूटेनियस"], correctAnswer: 0, explanationEn: "IV is the fastest route as drug goes directly into bloodstream.", explanationHi: "IV सबसे तेज है क्योंकि दवा सीधे रक्त में जाती है।", difficulty: 'easy' as const, topic: "pharm" },
  { id: "pharm_2", questionEn: "Maximum daily dose of Paracetamol in adults:", questionHi: "वयस्कों में पैरासिटामोल की अधिकतम दैनिक खुराक:", optionsEn: ["4 grams", "2 grams", "6 grams", "8 grams"], optionsHi: ["4 ग्राम", "2 ग्राम", "6 ग्राम", "8 ग्राम"], correctAnswer: 0, explanationEn: "Maximum 4g/day of Paracetamol to avoid liver damage.", explanationHi: "लिवर क्षति से बचने के लिए अधिकतम 4g/दिन पैरासिटामोल।", difficulty: 'easy' as const, topic: "pharm" },
  { id: "pharm_3", questionEn: "ILR temperature range:", questionHi: "ILR तापमान सीमा:", optionsEn: ["+2 to +8°C", "-15 to -25°C", "0 to 4°C", "10 to 20°C"], optionsHi: ["+2 से +8°C", "-15 से -25°C", "0 से 4°C", "10 से 20°C"], correctAnswer: 0, explanationEn: "ILR (Ice Lined Refrigerator) maintains +2°C to +8°C.", explanationHi: "ILR +2°C से +8°C बनाए रखता है।", difficulty: 'easy' as const, topic: "pharm" },
  { id: "pharm_4", questionEn: "IM injection angle:", questionHi: "IM इंजेक्शन का कोण:", optionsEn: ["90°", "45°", "15°", "30°"], optionsHi: ["90°", "45°", "15°", "30°"], correctAnswer: 0, explanationEn: "IM injection is given at 90° angle to the skin.", explanationHi: "IM इंजेक्शन त्वचा पर 90° कोण पर दिया जाता है।", difficulty: 'easy' as const, topic: "pharm" },
  { id: "pharm_5", questionEn: "Adrenaline dose for anaphylaxis:", questionHi: "एनाफिलेक्सिस के लिए एड्रेनालाइन खुराक:", optionsEn: ["0.5 mg IM", "1 mg IV", "0.1 mg SC", "2 mg oral"], optionsHi: ["0.5 mg IM", "1 mg IV", "0.1 mg SC", "2 mg मौखिक"], correctAnswer: 0, explanationEn: "Adrenaline 0.5 mg IM (thigh) for anaphylaxis.", explanationHi: "एनाफिलेक्सिस के लिए एड्रेनालाइन 0.5 mg IM (जांघ)।", difficulty: 'medium' as const, topic: "pharm" },
  { id: "pharm_6", questionEn: "Zinc is given for diarrhea for:", questionHi: "दस्त में जिंक कितने दिन दी जाती है:", optionsEn: ["14 days", "7 days", "3 days", "1 day"], optionsHi: ["14 दिन", "7 दिन", "3 दिन", "1 दिन"], correctAnswer: 0, explanationEn: "Zinc 20mg/day for 14 days in childhood diarrhea.", explanationHi: "बचपन के दस्त में जिंक 20mg/दिन 14 दिनों के लिए।", difficulty: 'easy' as const, topic: "pharm" },
  { id: "pharm_7", questionEn: "FEFO stands for:", questionHi: "FEFO का अर्थ है:", optionsEn: ["First Expiry First Out", "First Entry First Out", "Fast Exit Fast Out", "None"], optionsHi: ["पहली समाप्ति पहले बाहर", "पहली प्रविष्टि पहले बाहर", "तेज निकास तेज बाहर", "कोई नहीं"], correctAnswer: 0, explanationEn: "FEFO = First Expiry First Out (use drugs expiring soonest first).", explanationHi: "FEFO = पहली समाप्ति पहले बाहर (जल्द समाप्त होने वाली पहले उपयोग)।", difficulty: 'easy' as const, topic: "pharm" },
  { id: "pharm_8", questionEn: "BCG injection is given:", questionHi: "BCG इंजेक्शन दिया जाता है:", optionsEn: ["Intradermal", "Intramuscular", "Subcutaneous", "Intravenous"], optionsHi: ["इंट्राडर्मल", "इंट्रामस्कुलर", "सबक्यूटेनियस", "इंट्रावेनस"], correctAnswer: 0, explanationEn: "BCG is given intradermal at 5-15° angle.", explanationHi: "BCG इंट्राडर्मल 5-15° कोण पर दिया जाता है।", difficulty: 'easy' as const, topic: "pharm" },
  { id: "pharm_9", questionEn: "Vaccines that should NOT be frozen:", questionHi: "टीके जो फ्रीज नहीं होने चाहिए:", optionsEn: ["DPT, Hepatitis B, TT", "OPV, BCG", "Measles", "None"], optionsHi: ["DPT, हेपेटाइटिस B, TT", "OPV, BCG", "खसरा", "कोई नहीं"], correctAnswer: 0, explanationEn: "Never freeze DPT, Hep B, TT, Pentavalent, IPV.", explanationHi: "DPT, Hep B, TT, पेंटावेलेंट, IPV कभी फ्रीज न करें।", difficulty: 'medium' as const, topic: "pharm" },
  { id: "pharm_10", questionEn: "ADME stands for:", questionHi: "ADME का अर्थ है:", optionsEn: ["Absorption, Distribution, Metabolism, Excretion", "Administration, Dosage, Method, Effect", "None", "All"], optionsHi: ["अवशोषण, वितरण, चयापचय, उत्सर्जन", "प्रशासन, खुराक, विधि, प्रभाव", "कोई नहीं", "सभी"], correctAnswer: 0, explanationEn: "ADME describes what the body does to a drug.", explanationHi: "ADME बताता है कि शरीर दवा के साथ क्या करता है।", difficulty: 'easy' as const, topic: "pharm" }
];

export default function Pharmacology() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / pharmacologyLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={pharmacologyLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={pharmQuestions} questionCount={10} title={isHindi ? 'औषध विज्ञान क्विज़' : 'Pharmacology Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={pharmQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">💉</div><h3>{isHindi ? 'इंजेक्शन मार्ग' : 'Injection Routes'}</h3><div className="route-list"><div className="route-item"><strong>ID</strong><span>5-15° (BCG)</span></div><div className="route-item"><strong>SC</strong><span>45° ({isHindi ? 'इंसुलिन' : 'insulin'})</span></div><div className="route-item"><strong>IM</strong><span>90° ({isHindi ? 'टीके' : 'vaccines'})</span></div><div className="route-item"><strong>IV</strong><span>{isHindi ? 'सबसे तेज' : 'Fastest'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🧊</div><h3>{isHindi ? 'कोल्ड चेन' : 'Cold Chain'}</h3><div className="cold-list"><div className="cold-item"><strong>ILR</strong><span>+2°C to +8°C</span></div><div className="cold-item"><strong>{isHindi ? 'डीप फ्रीजर' : 'Deep Freezer'}</strong><span>-15°C to -25°C</span></div><div className="cold-item"><strong>{isHindi ? 'फ्रीज न करें' : 'Never freeze'}</strong><span>DPT, Hep B, TT</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">💊</div><h3>{isHindi ? 'आवश्यक दवाएं' : 'Essential Drugs'}</h3><div className="drug-list"><div className="drug-item"><strong>{isHindi ? 'पैरासिटामोल' : 'Paracetamol'}</strong><span>Max 4g/{isHindi ? 'दिन' : 'day'}</span></div><div className="drug-item"><strong>ORS</strong><span>1 {isHindi ? 'पैकेट' : 'packet'}/1L</span></div><div className="drug-item"><strong>{isHindi ? 'जिंक' : 'Zinc'}</strong><span>14 {isHindi ? 'दिन' : 'days'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">⚠️</div><h3>{isHindi ? 'एनाफिलेक्सिस' : 'Anaphylaxis'}</h3><div className="ana-list"><div className="ana-item"><strong>{isHindi ? 'दवा' : 'Drug'}</strong><span>{isHindi ? 'एड्रेनालाइन' : 'Adrenaline'}</span></div><div className="ana-item"><strong>{isHindi ? 'खुराक' : 'Dose'}</strong><span>0.5 mg IM</span></div><div className="ana-item"><strong>{isHindi ? 'स्थान' : 'Site'}</strong><span>{isHindi ? 'जांघ' : 'Thigh'}</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Pharmacology" titleHi="औषध विज्ञान" descriptionEn="Drug basics, essential medicines, cold chain, injections, ADR" descriptionHi="दवा मूल बातें, आवश्यक दवाएं, कोल्ड चेन, इंजेक्शन, ADR" icon="💊" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
