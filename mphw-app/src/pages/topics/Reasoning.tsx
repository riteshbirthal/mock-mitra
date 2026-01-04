import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { reasoningLessons } from '../../data/reasoningContent';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'reasoning_completedLessons', ACTIVE_TAB: 'reasoning_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const reasoningQuestions = [
  { id: "r_1", questionEn: "Find the next number: 2, 5, 8, 11, 14, ?", questionHi: "अगली संख्या ज्ञात करें: 2, 5, 8, 11, 14, ?", optionsEn: ["17", "15", "16", "18"], optionsHi: ["17", "15", "16", "18"], correctAnswer: 0, explanationEn: "Pattern: +3. Next = 14 + 3 = 17", explanationHi: "पैटर्न: +3। अगला = 14 + 3 = 17", difficulty: 'easy' as const, topic: "reasoning" },
  { id: "r_2", questionEn: "Find the next: A, C, E, G, ?", questionHi: "अगला ज्ञात करें: A, C, E, G, ?", optionsEn: ["I", "H", "J", "K"], optionsHi: ["I", "H", "J", "K"], correctAnswer: 0, explanationEn: "Pattern: Skip 1 letter. After G, skip H = I", explanationHi: "पैटर्न: 1 अक्षर छोड़ें। G के बाद, H छोड़ें = I", difficulty: 'easy' as const, topic: "reasoning" },
  { id: "r_3", questionEn: "If BOOK = CPPN, then LOOK = ?", questionHi: "यदि BOOK = CPPN, तो LOOK = ?", optionsEn: ["MPPN", "NQQO", "LPPL", "MOOO"], optionsHi: ["MPPN", "NQQO", "LPPL", "MOOO"], correctAnswer: 0, explanationEn: "Each letter +1. L→M, O→P, O→P, K→N = MPPN", explanationHi: "प्रत्येक अक्षर +1। L→M, O→P, O→P, K→N = MPPN", difficulty: 'easy' as const, topic: "reasoning" },
  { id: "r_4", questionEn: "Pointing to a man, Seema said 'He is my mother's only son's son'. How is the man related to Seema?", questionHi: "एक व्यक्ति की ओर इशारा करते हुए सीमा ने कहा 'वह मेरी माँ के इकलौते पुत्र का पुत्र है'। वह व्यक्ति सीमा से कैसे संबंधित है?", optionsEn: ["Nephew", "Son", "Brother", "Uncle"], optionsHi: ["भतीजा", "पुत्र", "भाई", "चाचा"], correctAnswer: 0, explanationEn: "Mother's only son = Seema's brother. His son = Seema's nephew", explanationHi: "माँ का इकलौता पुत्र = सीमा का भाई। उसका पुत्र = सीमा का भतीजा", difficulty: 'medium' as const, topic: "reasoning" },
  { id: "r_5", questionEn: "A walks 5km East, turns left walks 3km. Which direction is he from start?", questionHi: "A 5km पूर्व चलता है, बाएं मुड़ता है 3km चलता है। वह शुरुआत से किस दिशा में है?", optionsEn: ["North-East", "South-East", "North-West", "South-West"], optionsHi: ["उत्तर-पूर्व", "दक्षिण-पूर्व", "उत्तर-पश्चिम", "दक्षिण-पश्चिम"], correctAnswer: 0, explanationEn: "East + Left(North) = North-East from start", explanationHi: "पूर्व + बाएं(उत्तर) = शुरुआत से उत्तर-पूर्व", difficulty: 'easy' as const, topic: "reasoning" },
  { id: "r_6", questionEn: "Doctor : Patient :: Teacher : ?", questionHi: "डॉक्टर : मरीज :: शिक्षक : ?", optionsEn: ["Student", "School", "Book", "Principal"], optionsHi: ["छात्र", "स्कूल", "पुस्तक", "प्रधानाचार्य"], correctAnswer: 0, explanationEn: "Doctor serves Patient, Teacher serves Student", explanationHi: "डॉक्टर मरीज की सेवा करता है, शिक्षक छात्र की सेवा करता है", difficulty: 'easy' as const, topic: "reasoning" },
  { id: "r_7", questionEn: "Find the next: 2, 6, 18, 54, ?", questionHi: "अगला ज्ञात करें: 2, 6, 18, 54, ?", optionsEn: ["162", "108", "72", "216"], optionsHi: ["162", "108", "72", "216"], correctAnswer: 0, explanationEn: "Pattern: ×3. Next = 54 × 3 = 162", explanationHi: "पैटर्न: ×3। अगला = 54 × 3 = 162", difficulty: 'easy' as const, topic: "reasoning" },
  { id: "r_8", questionEn: "Find odd one: 3, 5, 7, 9, 11", questionHi: "विषम ज्ञात करें: 3, 5, 7, 9, 11", optionsEn: ["9", "3", "5", "11"], optionsHi: ["9", "3", "5", "11"], correctAnswer: 0, explanationEn: "All except 9 are prime numbers. 9 = 3×3", explanationHi: "9 को छोड़कर सभी अभाज्य संख्याएं हैं। 9 = 3×3", difficulty: 'medium' as const, topic: "reasoning" },
  { id: "r_9", questionEn: "If Monday = 1, then Friday = ?", questionHi: "यदि सोमवार = 1, तो शुक्रवार = ?", optionsEn: ["5", "4", "6", "7"], optionsHi: ["5", "4", "6", "7"], correctAnswer: 0, explanationEn: "Mon=1, Tue=2, Wed=3, Thu=4, Fri=5", explanationHi: "सोम=1, मंगल=2, बुध=3, गुरु=4, शुक्र=5", difficulty: 'easy' as const, topic: "reasoning" },
  { id: "r_10", questionEn: "Find next: 1, 4, 9, 16, 25, ?", questionHi: "अगला ज्ञात करें: 1, 4, 9, 16, 25, ?", optionsEn: ["36", "30", "35", "49"], optionsHi: ["36", "30", "35", "49"], correctAnswer: 0, explanationEn: "Pattern: 1², 2², 3², 4², 5², 6² = 36", explanationHi: "पैटर्न: 1², 2², 3², 4², 5², 6² = 36", difficulty: 'easy' as const, topic: "reasoning" }
];

export default function Reasoning() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / reasoningLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={reasoningLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={reasoningQuestions} questionCount={10} title={isHindi ? 'तर्कशक्ति क्विज़' : 'Reasoning Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={reasoningQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">🔢</div><h3>{isHindi ? 'संख्या श्रृंखला' : 'Number Series'}</h3><div className="const-list"><div className="const-item"><strong>AP</strong><span>{isHindi ? 'समान अंतर (+/-n)' : 'Constant diff (+/-n)'}</span></div><div className="const-item"><strong>GP</strong><span>{isHindi ? 'गुणा (×n)' : 'Multiply (×n)'}</span></div><div className="const-item"><strong>n²</strong><span>1, 4, 9, 16, 25...</span></div><div className="const-item"><strong>n³</strong><span>1, 8, 27, 64...</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🔤</div><h3>{isHindi ? 'अक्षर श्रृंखला' : 'Letter Series'}</h3><div className="act-list"><div className="act-item"><strong>+1</strong><span>A, B, C, D...</span></div><div className="act-item"><strong>+2</strong><span>A, C, E, G...</span></div><div className="act-item"><strong>{isHindi ? 'विपरीत' : 'Reverse'}</strong><span>A=26, Z=1</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">👨‍👩‍👧‍👦</div><h3>{isHindi ? 'रक्त संबंध' : 'Blood Relations'}</h3><div className="ayush-list"><div className="ayush-item"><strong>{isHindi ? 'पिता का पिता' : "Father's father"}</strong><span>{isHindi ? 'दादा' : 'Grandfather'}</span></div><div className="ayush-item"><strong>{isHindi ? 'माँ का भाई' : "Mother's brother"}</strong><span>{isHindi ? 'मामा' : 'Maternal Uncle'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🧭</div><h3>{isHindi ? 'दिशा ज्ञान' : 'Direction Sense'}</h3><div className="org-list"><div className="org-item"><strong>{isHindi ? 'बायां' : 'Left'}</strong><span>{isHindi ? 'वामावर्त' : 'Anti-clockwise'}</span></div><div className="org-item"><strong>{isHindi ? 'दायां' : 'Right'}</strong><span>{isHindi ? 'दक्षिणावर्त' : 'Clockwise'}</span></div><div className="org-item"><strong>{isHindi ? 'उलटा' : 'Opposite'}</strong><span>N↔S, E↔W</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Reasoning" titleHi="तर्कशक्ति" descriptionEn="Number Series, Letter Series, Coding-Decoding, Blood Relations, Direction" descriptionHi="संख्या श्रृंखला, अक्षर श्रृंखला, कोडिंग-डिकोडिंग, रक्त संबंध, दिशा" icon="🧩" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
