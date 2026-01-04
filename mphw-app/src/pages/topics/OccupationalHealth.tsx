import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { occupationalHealthLessons } from '../../data/occupationalHealthContent';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'oh_completedLessons', ACTIVE_TAB: 'oh_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const ohQuestions = [
  { id: "oh_1", questionEn: "Silicosis is caused by:", questionHi: "सिलिकोसिस किससे होता है:", optionsEn: ["Silica dust", "Asbestos", "Lead", "Noise"], optionsHi: ["सिलिका धूल", "एस्बेस्टस", "सीसा", "शोर"], correctAnswer: 0, explanationEn: "Silicosis is caused by inhaling silica dust.", explanationHi: "सिलिकोसिस सिलिका धूल साँस लेने से होता है।", difficulty: 'easy' as const, topic: "oh" },
  { id: "oh_2", questionEn: "Safe noise exposure limit for 8 hours:", questionHi: "8 घंटे के लिए सुरक्षित शोर सीमा:", optionsEn: ["85 dB", "60 dB", "100 dB", "120 dB"], optionsHi: ["85 dB", "60 dB", "100 dB", "120 dB"], correctAnswer: 0, explanationEn: "85 dB is the safe limit for 8-hour exposure.", explanationHi: "8 घंटे के जोखिम के लिए 85 dB सुरक्षित सीमा है।", difficulty: 'easy' as const, topic: "oh" },
  { id: "oh_3", questionEn: "PEP for HIV should be started within:", questionHi: "HIV के लिए PEP कब तक शुरू करें:", optionsEn: ["72 hours", "24 hours", "1 week", "1 month"], optionsHi: ["72 घंटे", "24 घंटे", "1 सप्ताह", "1 महीने"], correctAnswer: 0, explanationEn: "HIV PEP should be started within 72 hours.", explanationHi: "HIV PEP 72 घंटे के भीतर शुरू होना चाहिए।", difficulty: 'easy' as const, topic: "oh" },
  { id: "oh_4", questionEn: "Factories Act was enacted in:", questionHi: "कारखाना अधिनियम कब बना:", optionsEn: ["1948", "1950", "1960", "2000"], optionsHi: ["1948", "1950", "1960", "2000"], correctAnswer: 0, explanationEn: "Factories Act was enacted in 1948.", explanationHi: "कारखाना अधिनियम 1948 में बना।", difficulty: 'easy' as const, topic: "oh" },
  { id: "oh_5", questionEn: "Maximum working hours per week:", questionHi: "प्रति सप्ताह अधिकतम कार्य घंटे:", optionsEn: ["48 hours", "60 hours", "72 hours", "40 hours"], optionsHi: ["48 घंटे", "60 घंटे", "72 घंटे", "40 घंटे"], correctAnswer: 0, explanationEn: "Maximum 48 hours per week as per Factories Act.", explanationHi: "कारखाना अधिनियम के अनुसार अधिकतम 48 घंटे प्रति सप्ताह।", difficulty: 'easy' as const, topic: "oh" },
  { id: "oh_6", questionEn: "Hepatitis B vaccine schedule:", questionHi: "हेपेटाइटिस B टीका अनुसूची:", optionsEn: ["0, 1, 6 months", "0, 1, 2 months", "0, 3, 6 months", "Single dose"], optionsHi: ["0, 1, 6 महीने", "0, 1, 2 महीने", "0, 3, 6 महीने", "एकल खुराक"], correctAnswer: 0, explanationEn: "Hep B vaccine is given at 0, 1, and 6 months.", explanationHi: "Hep B टीका 0, 1, और 6 महीने पर दिया जाता है।", difficulty: 'easy' as const, topic: "oh" },
  { id: "oh_7", questionEn: "Maximum weight men should lift:", questionHi: "पुरुषों का अधिकतम उठाने का वजन:", optionsEn: ["25 kg", "50 kg", "10 kg", "100 kg"], optionsHi: ["25 kg", "50 kg", "10 kg", "100 kg"], correctAnswer: 0, explanationEn: "Men should not lift more than 25 kg.", explanationHi: "पुरुषों को 25 kg से अधिक नहीं उठाना चाहिए।", difficulty: 'easy' as const, topic: "oh" },
  { id: "oh_8", questionEn: "First step in hierarchy of controls:", questionHi: "नियंत्रण पदानुक्रम का पहला चरण:", optionsEn: ["Elimination", "PPE", "Engineering", "Administration"], optionsHi: ["उन्मूलन", "PPE", "इंजीनियरिंग", "प्रशासन"], correctAnswer: 0, explanationEn: "Elimination is the first and best control measure.", explanationHi: "उन्मूलन पहला और सबसे अच्छा नियंत्रण उपाय है।", difficulty: 'medium' as const, topic: "oh" },
  { id: "oh_9", questionEn: "After needle stick injury, first action:", questionHi: "सुई चुभने के बाद पहली कार्रवाई:", optionsEn: ["Wash with soap and water", "Apply bandage", "Ignore it", "Take antibiotics"], optionsHi: ["साबुन और पानी से धोएं", "पट्टी लगाएं", "अनदेखा करें", "एंटीबायोटिक लें"], correctAnswer: 0, explanationEn: "Immediately wash with soap and water.", explanationHi: "तुरंत साबुन और पानी से धोएं।", difficulty: 'easy' as const, topic: "oh" },
  { id: "oh_10", questionEn: "Ergonomics means:", questionHi: "एर्गोनॉमिक्स का अर्थ है:", optionsEn: ["Fit work to worker", "Fit worker to work", "Exercise at work", "None"], optionsHi: ["काम को श्रमिक के अनुकूल बनाना", "श्रमिक को काम के अनुकूल बनाना", "काम पर व्यायाम", "कोई नहीं"], correctAnswer: 0, explanationEn: "Ergonomics = Fit work to the worker.", explanationHi: "एर्गोनॉमिक्स = काम को श्रमिक के अनुकूल बनाना।", difficulty: 'easy' as const, topic: "oh" }
];

export default function OccupationalHealth() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / occupationalHealthLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={occupationalHealthLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={ohQuestions} questionCount={10} title={isHindi ? 'व्यावसायिक स्वास्थ्य क्विज़' : 'Occupational Health Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={ohQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">⚠️</div><h3>{isHindi ? 'खतरों के प्रकार' : 'Hazard Types'}</h3><div className="haz-list"><div className="haz-item"><strong>{isHindi ? 'भौतिक' : 'Physical'}</strong><span>{isHindi ? 'शोर, गर्मी' : 'Noise, heat'}</span></div><div className="haz-item"><strong>{isHindi ? 'रासायनिक' : 'Chemical'}</strong><span>{isHindi ? 'धूल, गैस' : 'Dust, gas'}</span></div><div className="haz-item"><strong>{isHindi ? 'जैविक' : 'Biological'}</strong><span>{isHindi ? 'संक्रमण' : 'Infections'}</span></div><div className="haz-item"><strong>{isHindi ? 'एर्गोनोमिक' : 'Ergonomic'}</strong><span>{isHindi ? 'मुद्रा' : 'Posture'}</span></div><div className="haz-item"><strong>{isHindi ? 'मनोसामाजिक' : 'Psychosocial'}</strong><span>{isHindi ? 'तनाव' : 'Stress'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🛡️</div><h3>{isHindi ? 'नियंत्रण पदानुक्रम' : 'Control Hierarchy'}</h3><div className="ctrl-list"><div className="ctrl-item">1. {isHindi ? 'उन्मूलन' : 'Elimination'}</div><div className="ctrl-item">2. {isHindi ? 'प्रतिस्थापन' : 'Substitution'}</div><div className="ctrl-item">3. {isHindi ? 'इंजीनियरिंग' : 'Engineering'}</div><div className="ctrl-item">4. {isHindi ? 'प्रशासनिक' : 'Administrative'}</div><div className="ctrl-item">5. PPE</div></div></div>
            <div className="resource-card"><div className="resource-icon">🏭</div><h3>{isHindi ? 'व्यावसायिक रोग' : 'Occupational Diseases'}</h3><div className="dis-list"><div className="dis-item"><strong>{isHindi ? 'सिलिकोसिस' : 'Silicosis'}</strong><span>{isHindi ? 'सिलिका धूल' : 'Silica dust'}</span></div><div className="dis-item"><strong>{isHindi ? 'एस्बेस्टोसिस' : 'Asbestosis'}</strong><span>{isHindi ? 'एस्बेस्टस' : 'Asbestos'}</span></div><div className="dis-item"><strong>{isHindi ? 'सीसा विषाक्तता' : 'Lead poisoning'}</strong><span>{isHindi ? 'सीसा' : 'Lead'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">⚖️</div><h3>{isHindi ? 'कारखाना अधिनियम' : 'Factories Act'}</h3><div className="act-list"><div className="act-item"><strong>{isHindi ? 'वर्ष' : 'Year'}</strong><span>1948</span></div><div className="act-item"><strong>{isHindi ? 'कार्य घंटे' : 'Hours'}</strong><span>48/{isHindi ? 'सप्ताह' : 'week'}</span></div><div className="act-item"><strong>{isHindi ? 'शोर सीमा' : 'Noise limit'}</strong><span>85 dB</span></div><div className="act-item"><strong>{isHindi ? 'उठाना पुरुष' : 'Lift (men)'}</strong><span>25 kg</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Occupational Health" titleHi="व्यावसायिक स्वास्थ्य" descriptionEn="Workplace hazards, ergonomics, health worker safety, laws" descriptionHi="कार्यस्थल खतरे, एर्गोनॉमिक्स, स्वास्थ्य कर्मी सुरक्षा, कानून" icon="🏭" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
