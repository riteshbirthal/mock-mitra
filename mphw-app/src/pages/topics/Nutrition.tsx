import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { nutritionLessons } from '../../data/nutritionContent';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'nutrition_completedLessons', ACTIVE_TAB: 'nutrition_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const nutritionQuestions = [
  { id: "nut_1", questionEn: "Energy value of 1 gram fat:", questionHi: "1 ग्राम वसा का ऊर्जा मान:", optionsEn: ["9 kcal", "4 kcal", "7 kcal", "2 kcal"], optionsHi: ["9 kcal", "4 kcal", "7 kcal", "2 kcal"], correctAnswer: 0, explanationEn: "Fat provides 9 kcal per gram - the highest among macronutrients.", explanationHi: "वसा प्रति ग्राम 9 kcal प्रदान करती है - मैक्रोन्यूट्रिएंट्स में सबसे अधिक।", difficulty: 'easy' as const, topic: "nutrition" },
  { id: "nut_2", questionEn: "Vitamin A deficiency causes:", questionHi: "विटामिन A की कमी से होता है:", optionsEn: ["Night blindness", "Scurvy", "Rickets", "Beriberi"], optionsHi: ["रतौंधी", "स्कर्वी", "रिकेट्स", "बेरीबेरी"], correctAnswer: 0, explanationEn: "Vitamin A deficiency causes night blindness (difficulty seeing in dim light).", explanationHi: "विटामिन A की कमी से रतौंधी होती है।", difficulty: 'easy' as const, topic: "nutrition" },
  { id: "nut_3", questionEn: "Iodine deficiency causes:", questionHi: "आयोडीन की कमी से होता है:", optionsEn: ["Goiter", "Anemia", "Scurvy", "Pellagra"], optionsHi: ["गॉइटर", "एनीमिया", "स्कर्वी", "पेलाग्रा"], correctAnswer: 0, explanationEn: "Iodine deficiency causes goiter (enlarged thyroid).", explanationHi: "आयोडीन की कमी से गॉइटर (बढ़ी थायरॉइड) होता है।", difficulty: 'easy' as const, topic: "nutrition" },
  { id: "nut_4", questionEn: "Extra calories needed in pregnancy:", questionHi: "गर्भावस्था में अतिरिक्त कैलोरी:", optionsEn: ["+350 kcal/day", "+600 kcal/day", "+100 kcal/day", "+1000 kcal/day"], optionsHi: ["+350 kcal/दिन", "+600 kcal/दिन", "+100 kcal/दिन", "+1000 kcal/दिन"], correctAnswer: 0, explanationEn: "Pregnancy requires +350 kcal/day extra.", explanationHi: "गर्भावस्था में +350 kcal/दिन अतिरिक्त चाहिए।", difficulty: 'medium' as const, topic: "nutrition" },
  { id: "nut_5", questionEn: "MUAC <12.5 cm indicates:", questionHi: "MUAC <12.5 cm इंगित करता है:", optionsEn: ["Severe acute malnutrition", "Normal", "Mild malnutrition", "Obesity"], optionsHi: ["गंभीर तीव्र कुपोषण", "सामान्य", "हल्का कुपोषण", "मोटापा"], correctAnswer: 0, explanationEn: "MUAC <12.5 cm (red zone) indicates severe acute malnutrition.", explanationHi: "MUAC <12.5 cm (लाल क्षेत्र) गंभीर तीव्र कुपोषण इंगित करता है।", difficulty: 'medium' as const, topic: "nutrition" },
  { id: "nut_6", questionEn: "Kwashiorkor is caused by:", questionHi: "क्वाशियोरकोर किससे होता है:", optionsEn: ["Protein deficiency", "Calorie deficiency", "Vitamin deficiency", "Iron deficiency"], optionsHi: ["प्रोटीन की कमी", "कैलोरी की कमी", "विटामिन की कमी", "आयरन की कमी"], correctAnswer: 0, explanationEn: "Kwashiorkor is caused by protein deficiency, characterized by edema.", explanationHi: "क्वाशियोरकोर प्रोटीन की कमी से होता है, सूजन इसकी विशेषता है।", difficulty: 'easy' as const, topic: "nutrition" },
  { id: "nut_7", questionEn: "Exclusive breastfeeding duration:", questionHi: "केवल स्तनपान की अवधि:", optionsEn: ["0-6 months", "0-3 months", "0-12 months", "0-2 months"], optionsHi: ["0-6 महीने", "0-3 महीने", "0-12 महीने", "0-2 महीने"], correctAnswer: 0, explanationEn: "Exclusive breastfeeding is recommended for first 6 months.", explanationHi: "पहले 6 महीने केवल स्तनपान की सलाह है।", difficulty: 'easy' as const, topic: "nutrition" },
  { id: "nut_8", questionEn: "Colostrum is rich in:", questionHi: "कोलोस्ट्रम में भरपूर है:", optionsEn: ["Antibodies", "Fat", "Carbohydrates", "Water"], optionsHi: ["एंटीबॉडी", "वसा", "कार्बोहाइड्रेट", "पानी"], correctAnswer: 0, explanationEn: "Colostrum (first milk) is rich in antibodies for immunity.", explanationHi: "कोलोस्ट्रम (पहला दूध) प्रतिरक्षा के लिए एंटीबॉडी से भरपूर है।", difficulty: 'easy' as const, topic: "nutrition" },
  { id: "nut_9", questionEn: "Pellagra is caused by deficiency of:", questionHi: "पेलाग्रा किसकी कमी से होता है:", optionsEn: ["Niacin (B3)", "Vitamin C", "Iron", "Calcium"], optionsHi: ["नियासिन (B3)", "विटामिन C", "आयरन", "कैल्शियम"], correctAnswer: 0, explanationEn: "Pellagra (3 D's: Dermatitis, Diarrhea, Dementia) is caused by Niacin deficiency.", explanationHi: "पेलाग्रा (3 D) नियासिन की कमी से होता है।", difficulty: 'medium' as const, topic: "nutrition" },
  { id: "nut_10", questionEn: "Fat-soluble vitamins are:", questionHi: "वसा में घुलनशील विटामिन हैं:", optionsEn: ["A, D, E, K", "B, C", "B1, B2, B12", "C only"], optionsHi: ["A, D, E, K", "B, C", "B1, B2, B12", "केवल C"], correctAnswer: 0, explanationEn: "ADEK are fat-soluble vitamins stored in body fat.", explanationHi: "ADEK वसा में घुलनशील विटामिन हैं जो शरीर में संग्रहित होते हैं।", difficulty: 'easy' as const, topic: "nutrition" }
];

export default function Nutrition() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / nutritionLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={nutritionLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={nutritionQuestions} questionCount={10} title={isHindi ? 'पोषण क्विज़' : 'Nutrition Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={nutritionQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">⚡</div><h3>{isHindi ? 'ऊर्जा मान' : 'Energy Values'}</h3><div className="energy-list"><div className="energy-item carbs"><span>{isHindi ? 'कार्ब्स' : 'Carbs'}</span><span>4 kcal/g</span></div><div className="energy-item protein"><span>{isHindi ? 'प्रोटीन' : 'Protein'}</span><span>4 kcal/g</span></div><div className="energy-item fat"><span>{isHindi ? 'वसा' : 'Fat'}</span><span>9 kcal/g</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">⚠️</div><h3>{isHindi ? 'कमी रोग' : 'Deficiency Diseases'}</h3><div className="deficiency-list"><div className="def-item"><span>Vitamin A</span><span>{isHindi ? 'रतौंधी' : 'Night blindness'}</span></div><div className="def-item"><span>Vitamin D</span><span>{isHindi ? 'रिकेट्स' : 'Rickets'}</span></div><div className="def-item"><span>Vitamin C</span><span>{isHindi ? 'स्कर्वी' : 'Scurvy'}</span></div><div className="def-item"><span>Iron</span><span>{isHindi ? 'एनीमिया' : 'Anemia'}</span></div><div className="def-item"><span>Iodine</span><span>{isHindi ? 'गॉइटर' : 'Goiter'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🤰</div><h3>{isHindi ? 'गर्भावस्था पोषण' : 'Pregnancy Nutrition'}</h3><div className="preg-list"><div className="preg-item"><span>{isHindi ? 'कैलोरी' : 'Calories'}</span><span>+350 kcal/day</span></div><div className="preg-item"><span>{isHindi ? 'आयरन' : 'Iron'}</span><span>35 mg/day</span></div><div className="preg-item"><span>{isHindi ? 'फोलिक एसिड' : 'Folic acid'}</span><span>500 μg/day</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">📏</div><h3>MUAC {isHindi ? 'रंग कोड' : 'Color Codes'}</h3><div className="muac-list"><div className="muac-item green">&gt;13.5 cm = {isHindi ? 'सामान्य' : 'Normal'}</div><div className="muac-item yellow">12.5-13.5 cm = {isHindi ? 'मध्यम' : 'Moderate'}</div><div className="muac-item red">&lt;12.5 cm = {isHindi ? 'गंभीर' : 'Severe'}</div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Nutrition" titleHi="पोषण" descriptionEn="Nutrients, balanced diet, malnutrition, and special needs" descriptionHi="पोषक तत्व, संतुलित आहार, कुपोषण और विशेष आवश्यकताएं" icon="🥗" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
