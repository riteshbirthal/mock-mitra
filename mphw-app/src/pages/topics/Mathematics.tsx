import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { mathematicsLessons } from '../../data/mathematicsContent';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'math_completedLessons', ACTIVE_TAB: 'math_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const mathQuestions = [
  { id: "math_1", questionEn: "If 25% of a number is 50, what is the number?", questionHi: "यदि एक संख्या का 25% 50 है, तो संख्या क्या है?", optionsEn: ["200", "150", "100", "250"], optionsHi: ["200", "150", "100", "250"], correctAnswer: 0, explanationEn: "25% = 50, so 100% = 50 × 4 = 200", explanationHi: "25% = 50, इसलिए 100% = 50 × 4 = 200", difficulty: 'easy' as const, topic: "math" },
  { id: "math_2", questionEn: "A shopkeeper sells an item for Rs.120 at 20% profit. What was the cost price?", questionHi: "एक दुकानदार एक वस्तु 20% लाभ पर Rs.120 में बेचता है। क्रय मूल्य क्या था?", optionsEn: ["Rs.100", "Rs.96", "Rs.110", "Rs.90"], optionsHi: ["Rs.100", "Rs.96", "Rs.110", "Rs.90"], correctAnswer: 0, explanationEn: "CP = SP × 100/120 = 120 × 100/120 = Rs.100", explanationHi: "CP = SP × 100/120 = 120 × 100/120 = Rs.100", difficulty: 'easy' as const, topic: "math" },
  { id: "math_3", questionEn: "If IMR is 40 per 1000 live births and there were 5000 live births, how many infant deaths?", questionHi: "यदि IMR 1000 जीवित जन्मों पर 40 है और 5000 जीवित जन्म हुए, तो शिशु मृत्यु कितनी?", optionsEn: ["200", "40", "400", "100"], optionsHi: ["200", "40", "400", "100"], correctAnswer: 0, explanationEn: "Infant deaths = (40/1000) × 5000 = 200", explanationHi: "शिशु मृत्यु = (40/1000) × 5000 = 200", difficulty: 'medium' as const, topic: "math" },
  { id: "math_4", questionEn: "A can do a work in 10 days, B in 15 days. Together they finish in?", questionHi: "A एक काम 10 दिनों में, B 15 दिनों में करता है। एक साथ वे कितने दिनों में समाप्त करेंगे?", optionsEn: ["6 days", "5 days", "8 days", "12 days"], optionsHi: ["6 दिन", "5 दिन", "8 दिन", "12 दिन"], correctAnswer: 0, explanationEn: "Combined rate = 1/10 + 1/15 = 5/30 = 1/6. Days = 6", explanationHi: "संयुक्त दर = 1/10 + 1/15 = 5/30 = 1/6। दिन = 6", difficulty: 'medium' as const, topic: "math" },
  { id: "math_5", questionEn: "Average of 5, 10, 15, 20, 25 is:", questionHi: "5, 10, 15, 20, 25 का औसत है:", optionsEn: ["15", "12", "18", "20"], optionsHi: ["15", "12", "18", "20"], correctAnswer: 0, explanationEn: "Sum = 75, Count = 5. Average = 75/5 = 15", explanationHi: "योग = 75, संख्या = 5। औसत = 75/5 = 15", difficulty: 'easy' as const, topic: "math" },
  { id: "math_6", questionEn: "What is 1/4 expressed as percentage?", questionHi: "1/4 को प्रतिशत में व्यक्त करें:", optionsEn: ["25%", "20%", "40%", "50%"], optionsHi: ["25%", "20%", "40%", "50%"], correctAnswer: 0, explanationEn: "1/4 × 100 = 25%", explanationHi: "1/4 × 100 = 25%", difficulty: 'easy' as const, topic: "math" },
  { id: "math_7", questionEn: "Loss% when CP=Rs.50, SP=Rs.40:", questionHi: "हानि% जब CP=Rs.50, SP=Rs.40:", optionsEn: ["20%", "25%", "10%", "15%"], optionsHi: ["20%", "25%", "10%", "15%"], correctAnswer: 0, explanationEn: "Loss = 50-40 = 10. Loss% = (10/50)×100 = 20%", explanationHi: "हानि = 50-40 = 10। हानि% = (10/50)×100 = 20%", difficulty: 'easy' as const, topic: "math" },
  { id: "math_8", questionEn: "Price increases from Rs.200 to Rs.250. % increase is:", questionHi: "मूल्य Rs.200 से Rs.250 हो जाता है। % वृद्धि है:", optionsEn: ["25%", "20%", "50%", "30%"], optionsHi: ["25%", "20%", "50%", "30%"], correctAnswer: 0, explanationEn: "Increase = 50. % = (50/200)×100 = 25%", explanationHi: "वृद्धि = 50। % = (50/200)×100 = 25%", difficulty: 'easy' as const, topic: "math" },
  { id: "math_9", questionEn: "HCF of 12 and 18 is:", questionHi: "12 और 18 का HCF है:", optionsEn: ["6", "3", "9", "12"], optionsHi: ["6", "3", "9", "12"], correctAnswer: 0, explanationEn: "Factors of 12: 1,2,3,4,6,12. Factors of 18: 1,2,3,6,9,18. HCF = 6", explanationHi: "12 के गुणनखंड: 1,2,3,4,6,12। 18 के गुणनखंड: 1,2,3,6,9,18। HCF = 6", difficulty: 'easy' as const, topic: "math" },
  { id: "math_10", questionEn: "If coverage increases from 60% to 75%, absolute increase is:", questionHi: "यदि कवरेज 60% से 75% हो जाता है, निरपेक्ष वृद्धि है:", optionsEn: ["15 percentage points", "15%", "25%", "None"], optionsHi: ["15 प्रतिशत अंक", "15%", "25%", "कोई नहीं"], correctAnswer: 0, explanationEn: "Absolute increase = 75 - 60 = 15 percentage points", explanationHi: "निरपेक्ष वृद्धि = 75 - 60 = 15 प्रतिशत अंक", difficulty: 'medium' as const, topic: "math" }
];

export default function Mathematics() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / mathematicsLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={mathematicsLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={mathQuestions} questionCount={10} title={isHindi ? 'गणित क्विज़' : 'Mathematics Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={mathQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">📊</div><h3>{isHindi ? 'प्रतिशत सूत्र' : 'Percentage Formulas'}</h3><div className="const-list"><div className="const-item"><strong>%</strong><span>{isHindi ? '(भाग/पूर्ण) × 100' : '(Part/Whole) × 100'}</span></div><div className="const-item"><strong>{isHindi ? 'वृद्धि' : 'Increase'}</strong><span>[(New-Old)/Old] × 100</span></div><div className="const-item"><strong>{isHindi ? 'कमी' : 'Decrease'}</strong><span>[(Old-New)/Old] × 100</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">💰</div><h3>{isHindi ? 'लाभ-हानि' : 'Profit & Loss'}</h3><div className="act-list"><div className="act-item"><strong>{isHindi ? 'लाभ%' : 'Profit%'}</strong><span>(P/CP)×100</span></div><div className="act-item"><strong>{isHindi ? 'हानि%' : 'Loss%'}</strong><span>(L/CP)×100</span></div><div className="act-item"><strong>SP</strong><span>CP × (100±P%)/100</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">⏱️</div><h3>{isHindi ? 'समय और कार्य' : 'Time & Work'}</h3><div className="ayush-list"><div className="ayush-item"><strong>{isHindi ? 'कार्य दर' : 'Work Rate'}</strong><span>1/{isHindi ? 'दिन' : 'Days'}</span></div><div className="ayush-item"><strong>{isHindi ? 'संयुक्त' : 'Combined'}</strong><span>1/A + 1/B</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🏥</div><h3>{isHindi ? 'स्वास्थ्य सूत्र' : 'Health Formulas'}</h3><div className="org-list"><div className="org-item"><strong>IMR</strong><span>(Deaths/Births)×1000</span></div><div className="org-item"><strong>MMR</strong><span>(Deaths/Births)×100000</span></div><div className="org-item"><strong>CDR</strong><span>(Deaths/Pop)×1000</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Mathematics" titleHi="गणित" descriptionEn="Percentage, Profit-Loss, Time & Work, Average, Number System" descriptionHi="प्रतिशत, लाभ-हानि, समय और कार्य, औसत, संख्या पद्धति" icon="📐" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
