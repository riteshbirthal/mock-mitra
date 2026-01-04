import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { mentalHealthLessons } from '../../data/mentalHealthContent';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'mh_completedLessons', ACTIVE_TAB: 'mh_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const mhQuestions = [
  { id: "mh_1", questionEn: "Depression symptoms should persist for at least:", questionHi: "अवसाद के लक्षण कम से कम कितने समय तक रहने चाहिए:", optionsEn: ["2 weeks", "1 week", "1 month", "6 months"], optionsHi: ["2 सप्ताह", "1 सप्ताह", "1 महीने", "6 महीने"], correctAnswer: 0, explanationEn: "Depression diagnosis requires symptoms for at least 2 weeks.", explanationHi: "अवसाद निदान के लिए कम से कम 2 सप्ताह लक्षण आवश्यक हैं।", difficulty: 'easy' as const, topic: "mh" },
  { id: "mh_2", questionEn: "ALGEE is used for:", questionHi: "ALGEE किसके लिए उपयोग किया जाता है:", optionsEn: ["Mental health first aid", "Physical first aid", "Surgery", "Diagnosis"], optionsHi: ["मानसिक स्वास्थ्य प्राथमिक चिकित्सा", "शारीरिक प्राथमिक चिकित्सा", "सर्जरी", "निदान"], correctAnswer: 0, explanationEn: "ALGEE is the action plan for mental health first aid.", explanationHi: "ALGEE मानसिक स्वास्थ्य प्राथमिक चिकित्सा के लिए एक्शन प्लान है।", difficulty: 'easy' as const, topic: "mh" },
  { id: "mh_3", questionEn: "DMHP stands for:", questionHi: "DMHP का अर्थ है:", optionsEn: ["District Mental Health Programme", "Daily Mental Health Plan", "Drug Mental Health Program", "None"], optionsHi: ["जिला मानसिक स्वास्थ्य कार्यक्रम", "दैनिक मानसिक स्वास्थ्य योजना", "दवा मानसिक स्वास्थ्य कार्यक्रम", "कोई नहीं"], correctAnswer: 0, explanationEn: "DMHP = District Mental Health Programme.", explanationHi: "DMHP = जिला मानसिक स्वास्थ्य कार्यक्रम।", difficulty: 'easy' as const, topic: "mh" },
  { id: "mh_4", questionEn: "Anxiety is characterized by:", questionHi: "चिंता की विशेषता है:", optionsEn: ["Excessive worry", "Hallucinations", "Memory loss", "Paralysis"], optionsHi: ["अत्यधिक चिंता", "मतिभ्रम", "स्मृति हानि", "लकवा"], correctAnswer: 0, explanationEn: "Anxiety is characterized by excessive, persistent worry.", explanationHi: "चिंता की विशेषता अत्यधिक, लगातार चिंता है।", difficulty: 'easy' as const, topic: "mh" },
  { id: "mh_5", questionEn: "Alcohol primarily damages:", questionHi: "शराब मुख्य रूप से क्षति पहुंचाती है:", optionsEn: ["Liver", "Heart only", "Bones", "Skin"], optionsHi: ["लिवर", "केवल हृदय", "हड्डियां", "त्वचा"], correctAnswer: 0, explanationEn: "Alcohol primarily damages the liver (fatty liver, cirrhosis).", explanationHi: "शराब मुख्य रूप से लिवर को नुकसान पहुंचाती है (फैटी लिवर, सिरोसिस)।", difficulty: 'easy' as const, topic: "mh" },
  { id: "mh_6", questionEn: "Warning sign of suicide includes:", questionHi: "आत्महत्या के चेतावनी संकेत में शामिल है:", optionsEn: ["Giving away possessions", "Increased appetite", "More social activity", "Better sleep"], optionsHi: ["संपत्ति दे देना", "भूख बढ़ना", "अधिक सामाजिक गतिविधि", "बेहतर नींद"], correctAnswer: 0, explanationEn: "Giving away possessions is a warning sign of suicidal intent.", explanationHi: "संपत्ति दे देना आत्महत्या के इरादे का चेतावनी संकेत है।", difficulty: 'medium' as const, topic: "mh" },
  { id: "mh_7", questionEn: "In suicide crisis, first action is:", questionHi: "आत्महत्या संकट में पहली कार्रवाई है:", optionsEn: ["Ask directly about suicide", "Ignore the person", "Call police first", "Leave them alone"], optionsHi: ["सीधे आत्महत्या के बारे में पूछें", "व्यक्ति को अनदेखा करें", "पहले पुलिस को बुलाएं", "उन्हें अकेला छोड़ें"], correctAnswer: 0, explanationEn: "Ask directly about suicide - it doesn't increase risk.", explanationHi: "सीधे आत्महत्या के बारे में पूछें - यह जोखिम नहीं बढ़ाता।", difficulty: 'medium' as const, topic: "mh" },
  { id: "mh_8", questionEn: "Mental illness is:", questionHi: "मानसिक बीमारी है:", optionsEn: ["Treatable medical condition", "Weakness", "Curse", "Not real"], optionsHi: ["उपचार योग्य चिकित्सा स्थिति", "कमजोरी", "श्राप", "वास्तविक नहीं"], correctAnswer: 0, explanationEn: "Mental illness is a treatable medical condition, not weakness.", explanationHi: "मानसिक बीमारी एक उपचार योग्य चिकित्सा स्थिति है, कमजोरी नहीं।", difficulty: 'easy' as const, topic: "mh" },
  { id: "mh_9", questionEn: "Schizophrenia is characterized by:", questionHi: "सिज़ोफ्रेनिया की विशेषता है:", optionsEn: ["Delusions and hallucinations", "Only sadness", "Only anxiety", "Memory loss"], optionsHi: ["भ्रम और मतिभ्रम", "केवल उदासी", "केवल चिंता", "स्मृति हानि"], correctAnswer: 0, explanationEn: "Schizophrenia is characterized by delusions and hallucinations.", explanationHi: "सिज़ोफ्रेनिया की विशेषता भ्रम और मतिभ्रम है।", difficulty: 'easy' as const, topic: "mh" },
  { id: "mh_10", questionEn: "MPHW role in mental health includes:", questionHi: "मानसिक स्वास्थ्य में MPHW की भूमिका शामिल है:", optionsEn: ["Identify and refer", "Prescribe medicines", "Perform surgery", "None"], optionsHi: ["पहचानना और रेफर करना", "दवाएं लिखना", "सर्जरी करना", "कोई नहीं"], correctAnswer: 0, explanationEn: "MPHW identifies mental health issues and refers to specialists.", explanationHi: "MPHW मानसिक स्वास्थ्य समस्याओं की पहचान और विशेषज्ञों को रेफर करता है।", difficulty: 'easy' as const, topic: "mh" }
];

export default function MentalHealth() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / mentalHealthLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={mentalHealthLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={mhQuestions} questionCount={10} title={isHindi ? 'मानसिक स्वास्थ्य क्विज़' : 'Mental Health Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={mhQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">🧠</div><h3>{isHindi ? 'सामान्य विकार' : 'Common Disorders'}</h3><div className="disorder-list"><div className="dis-item"><strong>{isHindi ? 'अवसाद' : 'Depression'}</strong><span>{isHindi ? 'लगातार उदासी' : 'Persistent sadness'}</span></div><div className="dis-item"><strong>{isHindi ? 'चिंता' : 'Anxiety'}</strong><span>{isHindi ? 'अत्यधिक चिंता' : 'Excessive worry'}</span></div><div className="dis-item"><strong>{isHindi ? 'सिज़ोफ्रेनिया' : 'Schizophrenia'}</strong><span>{isHindi ? 'भ्रम, मतिभ्रम' : 'Delusions, hallucinations'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🆘</div><h3>ALGEE</h3><div className="algee-list"><div className="alg-item"><strong>A</strong><span>{isHindi ? 'पहुंचें, आकलन, सहायता' : 'Approach, Assess, Assist'}</span></div><div className="alg-item"><strong>L</strong><span>{isHindi ? 'बिना निर्णय सुनें' : 'Listen non-judgmentally'}</span></div><div className="alg-item"><strong>G</strong><span>{isHindi ? 'समर्थन दें' : 'Give support'}</span></div><div className="alg-item"><strong>E</strong><span>{isHindi ? 'पेशेवर मदद' : 'Encourage professional help'}</span></div><div className="alg-item"><strong>E</strong><span>{isHindi ? 'स्व-सहायता' : 'Encourage self-help'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">📞</div><h3>{isHindi ? 'हेल्पलाइन' : 'Helplines'}</h3><div className="help-list"><div className="help-item"><strong>iCall</strong><span>9152987821</span></div><div className="help-item"><strong>Vandrevala</strong><span>1860-2662-345</span></div><div className="help-item"><strong>NIMHANS</strong><span>080-46110007</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">⚠️</div><h3>{isHindi ? 'चेतावनी संकेत' : 'Warning Signs'}</h3><div className="warn-list"><div className="warn-item">{isHindi ? 'लंबे समय तक उदासी' : 'Prolonged sadness'}</div><div className="warn-item">{isHindi ? 'सामाजिक अलगाव' : 'Social withdrawal'}</div><div className="warn-item">{isHindi ? 'नींद में गड़बड़ी' : 'Sleep disturbances'}</div><div className="warn-item">{isHindi ? 'आत्मघाती विचार' : 'Suicidal thoughts'}</div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="Mental Health" titleHi="मानसिक स्वास्थ्य" descriptionEn="Depression, anxiety, substance abuse, mental health first aid" descriptionHi="अवसाद, चिंता, मादक द्रव्य सेवन, मानसिक स्वास्थ्य प्राथमिक चिकित्सा" icon="🧠" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
