import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { physiologyLessons } from '../../data/physiologyContent';
import './Physiology.css';

const STORAGE_KEYS = {
  COMPLETED_LESSONS: 'physiology_completedLessons',
  ACTIVE_TAB: 'physiology_activeTab',
};

const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const physiologyQuestions = [
  {
    id: "phys_1",
    questionEn: "What is homeostasis?",
    questionHi: "होमियोस्टेसिस क्या है?",
    optionsEn: ["Maintaining stable internal environment", "Increasing body temperature", "Decreasing heart rate", "Muscle contraction"],
    optionsHi: ["स्थिर आंतरिक वातावरण बनाए रखना", "शरीर का तापमान बढ़ाना", "हृदय गति कम करना", "मांसपेशी संकुचन"],
    correctAnswer: 0,
    explanationEn: "Homeostasis is the maintenance of a stable internal environment despite external changes.",
    explanationHi: "होमियोस्टेसिस बाहरी परिवर्तनों के बावजूद स्थिर आंतरिक वातावरण बनाए रखना है।",
    difficulty: 'easy' as const,
    topic: "physiology"
  },
  {
    id: "phys_2",
    questionEn: "What is the normal blood pH range?",
    questionHi: "सामान्य रक्त pH सीमा क्या है?",
    optionsEn: ["7.35-7.45", "6.5-7.0", "8.0-8.5", "7.0-7.2"],
    optionsHi: ["7.35-7.45", "6.5-7.0", "8.0-8.5", "7.0-7.2"],
    correctAnswer: 0,
    explanationEn: "Normal blood pH is 7.35-7.45, slightly alkaline.",
    explanationHi: "सामान्य रक्त pH 7.35-7.45 है, थोड़ा क्षारीय।",
    difficulty: 'easy' as const,
    topic: "physiology"
  },
  {
    id: "phys_3",
    questionEn: "What is the lifespan of RBCs?",
    questionHi: "RBC का जीवनकाल क्या है?",
    optionsEn: ["120 days", "30 days", "7 days", "1 year"],
    optionsHi: ["120 दिन", "30 दिन", "7 दिन", "1 वर्ष"],
    correctAnswer: 0,
    explanationEn: "Red blood cells live for approximately 120 days before being recycled.",
    explanationHi: "लाल रक्त कोशिकाएं पुनर्नवीनीकरण से पहले लगभग 120 दिन जीवित रहती हैं।",
    difficulty: 'easy' as const,
    topic: "physiology"
  },
  {
    id: "phys_4",
    questionEn: "Which hormone increases blood glucose?",
    questionHi: "कौन सा हार्मोन रक्त शर्करा बढ़ाता है?",
    optionsEn: ["Glucagon", "Insulin", "Calcitonin", "ADH"],
    optionsHi: ["ग्लूकागन", "इंसुलिन", "कैल्सिटोनिन", "ADH"],
    correctAnswer: 0,
    explanationEn: "Glucagon increases blood glucose by breaking down glycogen in the liver.",
    explanationHi: "ग्लूकागन यकृत में ग्लाइकोजन को तोड़कर रक्त शर्करा बढ़ाता है।",
    difficulty: 'medium' as const,
    topic: "physiology"
  },
  {
    id: "phys_5",
    questionEn: "What is the normal GFR?",
    questionHi: "सामान्य GFR क्या है?",
    optionsEn: ["120-125 mL/min", "50-60 mL/min", "200-250 mL/min", "10-20 mL/min"],
    optionsHi: ["120-125 mL/min", "50-60 mL/min", "200-250 mL/min", "10-20 mL/min"],
    correctAnswer: 0,
    explanationEn: "Normal glomerular filtration rate is 120-125 mL/min.",
    explanationHi: "सामान्य ग्लोमेरुलर निस्यंदन दर 120-125 mL/min है।",
    difficulty: 'medium' as const,
    topic: "physiology"
  },
  {
    id: "phys_6",
    questionEn: "What percentage of oxygen is carried by hemoglobin?",
    questionHi: "हीमोग्लोबिन द्वारा कितने प्रतिशत ऑक्सीजन ले जाई जाती है?",
    optionsEn: ["98.5%", "70%", "50%", "25%"],
    optionsHi: ["98.5%", "70%", "50%", "25%"],
    correctAnswer: 0,
    explanationEn: "About 98.5% of oxygen is carried bound to hemoglobin.",
    explanationHi: "लगभग 98.5% ऑक्सीजन हीमोग्लोबिन से बंधकर ले जाई जाती है।",
    difficulty: 'easy' as const,
    topic: "physiology"
  },
  {
    id: "phys_7",
    questionEn: "Which is the primary pacemaker of the heart?",
    questionHi: "हृदय का प्राथमिक पेसमेकर कौन सा है?",
    optionsEn: ["SA Node", "AV Node", "Bundle of His", "Purkinje fibers"],
    optionsHi: ["SA Node", "AV Node", "बंडल ऑफ हिस", "पर्किंजे फाइबर"],
    correctAnswer: 0,
    explanationEn: "The SA (sinoatrial) node is the primary pacemaker with a rate of 60-100 bpm.",
    explanationHi: "SA (साइनोएट्रियल) नोड 60-100 bpm की दर के साथ प्राथमिक पेसमेकर है।",
    difficulty: 'easy' as const,
    topic: "physiology"
  },
  {
    id: "phys_8",
    questionEn: "What does ADH hormone do?",
    questionHi: "ADH हार्मोन क्या करता है?",
    optionsEn: ["Increases water reabsorption", "Decreases water reabsorption", "Increases glucose", "Decreases calcium"],
    optionsHi: ["जल पुनःअवशोषण बढ़ाता है", "जल पुनःअवशोषण घटाता है", "ग्लूकोज बढ़ाता है", "कैल्शियम घटाता है"],
    correctAnswer: 0,
    explanationEn: "ADH (antidiuretic hormone) increases water reabsorption in kidneys.",
    explanationHi: "ADH वृक्क में जल पुनःअवशोषण बढ़ाता है।",
    difficulty: 'medium' as const,
    topic: "physiology"
  },
  {
    id: "phys_9",
    questionEn: "Negative feedback mechanism:",
    questionHi: "नेगेटिव फीडबैक तंत्र:",
    optionsEn: ["Reverses the change", "Amplifies the change", "Has no effect", "Only works in brain"],
    optionsHi: ["परिवर्तन को उलटता है", "परिवर्तन को बढ़ाता है", "कोई प्रभाव नहीं", "केवल मस्तिष्क में काम करता है"],
    correctAnswer: 0,
    explanationEn: "Negative feedback reverses changes to maintain homeostasis.",
    explanationHi: "नेगेटिव फीडबैक होमियोस्टेसिस बनाए रखने के लिए परिवर्तनों को उलटता है।",
    difficulty: 'easy' as const,
    topic: "physiology"
  },
  {
    id: "phys_10",
    questionEn: "Which enzyme digests protein in stomach?",
    questionHi: "आमाशय में प्रोटीन को कौन सा एंजाइम पचाता है?",
    optionsEn: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
    optionsHi: ["पेप्सिन", "एमाइलेज", "लाइपेज", "ट्रिप्सिन"],
    correctAnswer: 0,
    explanationEn: "Pepsin digests proteins in the acidic environment of the stomach.",
    explanationHi: "पेप्सिन आमाशय के अम्लीय वातावरण में प्रोटीन को पचाता है।",
    difficulty: 'easy' as const,
    topic: "physiology"
  }
];

export default function Physiology() {
  const { isHindi } = useLanguage();
  
  const [activeTab, setActiveTab] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB);
    return saved || 'learn';
  });
  
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons));
  }, [completedLessons]);

  const progress = (completedLessons.length / physiologyLessons.length) * 100;

  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn':
        return (
          <LessonContent 
            lessons={physiologyLessons}
            completedLessons={completedLessons}
            onLessonComplete={handleLessonComplete}
            topicId="physiology"
          />
        );
      case 'quiz':
        return (
          <QuizComponent 
            questions={physiologyQuestions}
            questionCount={10}
            title={isHindi ? 'शरीर क्रिया विज्ञान क्विज़' : 'Physiology Quiz'}
          />
        );
      case 'mocktest':
        return (
          <MockTestComponent 
            questions={physiologyQuestions}
            testDuration={30}
            questionCount={10}
          />
        );
      case 'resources':
        return (
          <div className="resources-content">
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-icon">⚖️</div>
                <h3>{isHindi ? 'होमियोस्टेसिस पैरामीटर' : 'Homeostasis Parameters'}</h3>
                <div className="param-list">
                  <div className="param-item">
                    <span className="param-name">🌡️ {isHindi ? 'शरीर तापमान' : 'Body Temp'}</span>
                    <span className="param-value">36.5-37.5°C</span>
                  </div>
                  <div className="param-item">
                    <span className="param-name">🍬 {isHindi ? 'फास्टिंग ग्लूकोज' : 'Fasting Glucose'}</span>
                    <span className="param-value">70-100 mg/dL</span>
                  </div>
                  <div className="param-item">
                    <span className="param-name">⚗️ {isHindi ? 'रक्त pH' : 'Blood pH'}</span>
                    <span className="param-value">7.35-7.45</span>
                  </div>
                  <div className="param-item">
                    <span className="param-name">❤️ {isHindi ? 'रक्तचाप' : 'Blood Pressure'}</span>
                    <span className="param-value">120/80 mmHg</span>
                  </div>
                  <div className="param-item">
                    <span className="param-name">🧂 {isHindi ? 'सोडियम' : 'Sodium'}</span>
                    <span className="param-value">135-145 mEq/L</span>
                  </div>
                  <div className="param-item">
                    <span className="param-name">🔋 {isHindi ? 'पोटैशियम' : 'Potassium'}</span>
                    <span className="param-value">3.5-5.0 mEq/L</span>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">🩸</div>
                <h3>{isHindi ? 'रक्त मान' : 'Blood Values'}</h3>
                <div className="blood-values">
                  <div className="blood-item">
                    <span className="blood-label">{isHindi ? 'हीमोग्लोबिन (पुरुष)' : 'Hemoglobin (M)'}</span>
                    <span className="blood-value">14-18 g/dL</span>
                  </div>
                  <div className="blood-item">
                    <span className="blood-label">{isHindi ? 'हीमोग्लोबिन (महिला)' : 'Hemoglobin (F)'}</span>
                    <span className="blood-value">12-16 g/dL</span>
                  </div>
                  <div className="blood-item">
                    <span className="blood-label">{isHindi ? 'RBC जीवनकाल' : 'RBC Lifespan'}</span>
                    <span className="blood-value">120 {isHindi ? 'दिन' : 'days'}</span>
                  </div>
                  <div className="blood-item">
                    <span className="blood-label">{isHindi ? 'कार्डियक आउटपुट' : 'Cardiac Output'}</span>
                    <span className="blood-value">5 L/min</span>
                  </div>
                  <div className="blood-item">
                    <span className="blood-label">{isHindi ? 'हृदय गति' : 'Heart Rate'}</span>
                    <span className="blood-value">60-100 bpm</span>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">🫁</div>
                <h3>{isHindi ? 'श्वसन मान' : 'Respiratory Values'}</h3>
                <div className="resp-values">
                  <div className="resp-item">
                    <span className="resp-label">{isHindi ? 'ज्वारीय आयतन' : 'Tidal Volume'}</span>
                    <span className="resp-value">500 mL</span>
                  </div>
                  <div className="resp-item">
                    <span className="resp-label">{isHindi ? 'जीवन क्षमता' : 'Vital Capacity'}</span>
                    <span className="resp-value">4600 mL</span>
                  </div>
                  <div className="resp-item">
                    <span className="resp-label">{isHindi ? 'श्वसन दर' : 'Resp. Rate'}</span>
                    <span className="resp-value">12-20/min</span>
                  </div>
                  <div className="resp-item">
                    <span className="resp-label">{isHindi ? 'O₂ संतृप्ति' : 'O₂ Saturation'}</span>
                    <span className="resp-value">95-100%</span>
                  </div>
                  <div className="resp-item">
                    <span className="resp-label">{isHindi ? 'Hb द्वारा O₂' : 'O₂ by Hb'}</span>
                    <span className="resp-value">98.5%</span>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">💧</div>
                <h3>{isHindi ? 'वृक्क मान' : 'Renal Values'}</h3>
                <div className="renal-values">
                  <div className="renal-item">
                    <span className="renal-label">GFR</span>
                    <span className="renal-value">120-125 mL/min</span>
                  </div>
                  <div className="renal-item">
                    <span className="renal-label">{isHindi ? 'दैनिक मूत्र' : 'Daily Urine'}</span>
                    <span className="renal-value">1-2 L</span>
                  </div>
                  <div className="renal-item">
                    <span className="renal-label">{isHindi ? 'मूत्र pH' : 'Urine pH'}</span>
                    <span className="renal-value">4.5-8.0</span>
                  </div>
                  <div className="renal-item">
                    <span className="renal-label">{isHindi ? 'विशिष्ट गुरुत्व' : 'Sp. Gravity'}</span>
                    <span className="renal-value">1.003-1.030</span>
                  </div>
                </div>
              </div>

              <div className="resource-card full-width">
                <div className="resource-icon">🧪</div>
                <h3>{isHindi ? 'प्रमुख हार्मोन' : 'Key Hormones'}</h3>
                <div className="hormone-grid">
                  <div className="hormone-item">
                    <strong>{isHindi ? 'इंसुलिन' : 'Insulin'}</strong>
                    <span>↓ {isHindi ? 'रक्त ग्लूकोज' : 'Blood Glucose'}</span>
                  </div>
                  <div className="hormone-item">
                    <strong>{isHindi ? 'ग्लूकागन' : 'Glucagon'}</strong>
                    <span>↑ {isHindi ? 'रक्त ग्लूकोज' : 'Blood Glucose'}</span>
                  </div>
                  <div className="hormone-item">
                    <strong>ADH</strong>
                    <span>↑ {isHindi ? 'जल पुनःअवशोषण' : 'Water Reabsorption'}</span>
                  </div>
                  <div className="hormone-item">
                    <strong>{isHindi ? 'एल्डोस्टेरोन' : 'Aldosterone'}</strong>
                    <span>↑ Na⁺ {isHindi ? 'पुनःअवशोषण' : 'Reabsorption'}</span>
                  </div>
                  <div className="hormone-item">
                    <strong>PTH</strong>
                    <span>↑ {isHindi ? 'रक्त कैल्शियम' : 'Blood Calcium'}</span>
                  </div>
                  <div className="hormone-item">
                    <strong>{isHindi ? 'कैल्सिटोनिन' : 'Calcitonin'}</strong>
                    <span>↓ {isHindi ? 'रक्त कैल्शियम' : 'Blood Calcium'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <TopicLayout
      titleEn="Physiology"
      titleHi="शरीर क्रिया विज्ञान"
      descriptionEn="Study of body functions - how organs and systems work"
      descriptionHi="शरीर के कार्यों का अध्ययन - अंग और तंत्र कैसे काम करते हैं"
      icon="🔬"
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      progress={progress}
    >
      {renderContent()}
    </TopicLayout>
  );
}
