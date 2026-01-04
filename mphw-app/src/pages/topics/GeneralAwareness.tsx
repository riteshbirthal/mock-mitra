import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { generalAwarenessLessons } from '../../data/generalAwarenessContent';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'ga_completedLessons', ACTIVE_TAB: 'ga_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const gaQuestions = [
  { id: "ga_1", questionEn: "Article 21 of Constitution relates to:", questionHi: "संविधान का अनुच्छेद 21 संबंधित है:", optionsEn: ["Right to life", "Right to property", "Right to vote", "None"], optionsHi: ["जीवन का अधिकार", "संपत्ति का अधिकार", "मतदान का अधिकार", "कोई नहीं"], correctAnswer: 0, explanationEn: "Article 21 = Right to life (includes right to health).", explanationHi: "अनुच्छेद 21 = जीवन का अधिकार (स्वास्थ्य शामिल)।", difficulty: 'easy' as const, topic: "ga" },
  { id: "ga_2", questionEn: "WHO was established in:", questionHi: "WHO की स्थापना कब हुई:", optionsEn: ["1948", "1950", "1960", "2000"], optionsHi: ["1948", "1950", "1960", "2000"], correctAnswer: 0, explanationEn: "WHO was established in 1948, HQ Geneva.", explanationHi: "WHO 1948 में स्थापित हुआ, मुख्यालय जिनेवा।", difficulty: 'easy' as const, topic: "ga" },
  { id: "ga_3", questionEn: "PMJAY coverage is:", questionHi: "PMJAY कवरेज है:", optionsEn: ["Rs. 5 lakh", "Rs. 1 lakh", "Rs. 10 lakh", "Rs. 50,000"], optionsHi: ["Rs. 5 लाख", "Rs. 1 लाख", "Rs. 10 लाख", "Rs. 50,000"], correctAnswer: 0, explanationEn: "PMJAY provides Rs. 5 lakh coverage per family per year.", explanationHi: "PMJAY प्रति परिवार प्रति वर्ष Rs. 5 लाख कवरेज प्रदान करता है।", difficulty: 'easy' as const, topic: "ga" },
  { id: "ga_4", questionEn: "PCPNDT Act is for:", questionHi: "PCPNDT अधिनियम किसके लिए है:", optionsEn: ["Prevent sex determination", "Food safety", "Drug control", "None"], optionsHi: ["लिंग निर्धारण रोकना", "खाद्य सुरक्षा", "दवा नियंत्रण", "कोई नहीं"], correctAnswer: 0, explanationEn: "PCPNDT prevents prenatal sex determination.", explanationHi: "PCPNDT प्रसवपूर्व लिंग निर्धारण रोकता है।", difficulty: 'easy' as const, topic: "ga" },
  { id: "ga_5", questionEn: "MTP is legal up to:", questionHi: "MTP कानूनी है:", optionsEn: ["20 weeks (single doctor)", "12 weeks", "28 weeks", "Any time"], optionsHi: ["20 सप्ताह (एक डॉक्टर)", "12 सप्ताह", "28 सप्ताह", "कभी भी"], correctAnswer: 0, explanationEn: "MTP up to 20 weeks with single doctor opinion.", explanationHi: "एक डॉक्टर की राय से 20 सप्ताह तक MTP।", difficulty: 'easy' as const, topic: "ga" },
  { id: "ga_6", questionEn: "Public health is in which list:", questionHi: "सार्वजनिक स्वास्थ्य किस सूची में है:", optionsEn: ["State List", "Union List", "Concurrent List", "None"], optionsHi: ["राज्य सूची", "संघ सूची", "समवर्ती सूची", "कोई नहीं"], correctAnswer: 0, explanationEn: "Public health is in the State List.", explanationHi: "सार्वजनिक स्वास्थ्य राज्य सूची में है।", difficulty: 'medium' as const, topic: "ga" },
  { id: "ga_7", questionEn: "Informed consent is required for:", questionHi: "सूचित सहमति किसके लिए आवश्यक:", optionsEn: ["All medical procedures", "Only surgery", "Only TB treatment", "Never"], optionsHi: ["सभी चिकित्सा प्रक्रियाएं", "केवल सर्जरी", "केवल TB उपचार", "कभी नहीं"], correctAnswer: 0, explanationEn: "Informed consent is required for all medical procedures.", explanationHi: "सभी चिकित्सा प्रक्रियाओं के लिए सूचित सहमति आवश्यक है।", difficulty: 'easy' as const, topic: "ga" },
  { id: "ga_8", questionEn: "UNICEF focuses on:", questionHi: "UNICEF किस पर केंद्रित है:", optionsEn: ["Children's welfare", "Adult health only", "Environment", "None"], optionsHi: ["बच्चों का कल्याण", "केवल वयस्क स्वास्थ्य", "पर्यावरण", "कोई नहीं"], correctAnswer: 0, explanationEn: "UNICEF focuses on children's rights and welfare.", explanationHi: "UNICEF बच्चों के अधिकार और कल्याण पर केंद्रित है।", difficulty: 'easy' as const, topic: "ga" },
  { id: "ga_9", questionEn: "Patient confidentiality means:", questionHi: "रोगी गोपनीयता का अर्थ है:", optionsEn: ["Keep patient info private", "Share with everyone", "Ignore patient", "None"], optionsHi: ["रोगी जानकारी निजी रखें", "सभी के साथ साझा करें", "रोगी को अनदेखा करें", "कोई नहीं"], correctAnswer: 0, explanationEn: "Confidentiality means keeping patient information private.", explanationHi: "गोपनीयता का अर्थ रोगी जानकारी निजी रखना है।", difficulty: 'easy' as const, topic: "ga" },
  { id: "ga_10", questionEn: "Mental Healthcare Act year:", questionHi: "मानसिक स्वास्थ्य अधिनियम का वर्ष:", optionsEn: ["2017", "2000", "1990", "2020"], optionsHi: ["2017", "2000", "1990", "2020"], correctAnswer: 0, explanationEn: "Mental Healthcare Act was passed in 2017.", explanationHi: "मानसिक स्वास्थ्य अधिनियम 2017 में पारित हुआ।", difficulty: 'easy' as const, topic: "ga" }
];

export default function GeneralAwareness() {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'learn');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab); }, [activeTab]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons)); }, [completedLessons]);

  const progress = (completedLessons.length / generalAwarenessLessons.length) * 100;
  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) setCompletedLessons([...completedLessons, lessonId]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn': return <LessonContent lessons={generalAwarenessLessons} completedLessons={completedLessons} onLessonComplete={handleLessonComplete} />;
      case 'quiz': return <QuizComponent questions={gaQuestions} questionCount={10} title={isHindi ? 'सामान्य जागरूकता क्विज़' : 'General Awareness Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={gaQuestions} testDuration={30} questionCount={10} />;
      case 'resources': return (
        <div className="resources-content">
          <div className="resources-grid">
            <div className="resource-card"><div className="resource-icon">📜</div><h3>{isHindi ? 'संवैधानिक प्रावधान' : 'Constitutional Provisions'}</h3><div className="const-list"><div className="const-item"><strong>Art 21</strong><span>{isHindi ? 'जीवन का अधिकार' : 'Right to life'}</span></div><div className="const-item"><strong>Art 47</strong><span>{isHindi ? 'पोषण, स्वास्थ्य' : 'Nutrition, health'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">⚖️</div><h3>{isHindi ? 'स्वास्थ्य अधिनियम' : 'Health Acts'}</h3><div className="act-list"><div className="act-item"><strong>PCPNDT</strong><span>1994</span></div><div className="act-item"><strong>MTP</strong><span>1971/2021</span></div><div className="act-item"><strong>{isHindi ? 'मानसिक स्वास्थ्य' : 'Mental Health'}</strong><span>2017</span></div><div className="act-item"><strong>HIV/AIDS</strong><span>2017</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🏥</div><h3>{isHindi ? 'आयुष्मान भारत' : 'Ayushman Bharat'}</h3><div className="ayush-list"><div className="ayush-item"><strong>PMJAY</strong><span>Rs. 5 {isHindi ? 'लाख' : 'lakh'}</span></div><div className="ayush-item"><strong>HWC</strong><span>{isHindi ? 'प्राथमिक देखभाल' : 'Primary care'}</span></div></div></div>
            <div className="resource-card"><div className="resource-icon">🌍</div><h3>{isHindi ? 'अंतर्राष्ट्रीय संगठन' : 'International Orgs'}</h3><div className="org-list"><div className="org-item"><strong>WHO</strong><span>1948, {isHindi ? 'जिनेवा' : 'Geneva'}</span></div><div className="org-item"><strong>UNICEF</strong><span>{isHindi ? 'बच्चे' : 'Children'}</span></div><div className="org-item"><strong>GAVI</strong><span>{isHindi ? 'टीके' : 'Vaccines'}</span></div></div></div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <TopicLayout titleEn="General Awareness" titleHi="सामान्य जागरूकता" descriptionEn="Constitution, health acts, current affairs, WHO, ethics" descriptionHi="संविधान, स्वास्थ्य अधिनियम, समसामयिक, WHO, नैतिकता" icon="🌍" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} progress={progress}>
      {renderContent()}
    </TopicLayout>
  );
}
