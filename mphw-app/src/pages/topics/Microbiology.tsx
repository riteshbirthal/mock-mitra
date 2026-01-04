import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { microbiologyLessons } from '../../data/microbiologyContent';
import './Microbiology.css';

const STORAGE_KEYS = {
  COMPLETED_LESSONS: 'microbiology_completedLessons',
  ACTIVE_TAB: 'microbiology_activeTab',
};

const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

const microbiologyQuestions = [
  {
    id: "micro_1",
    questionEn: "Who is known as the Father of Microbiology?",
    questionHi: "सूक्ष्म जीव विज्ञान के जनक किसे कहा जाता है?",
    optionsEn: ["Antonie van Leeuwenhoek", "Louis Pasteur", "Robert Koch", "Alexander Fleming"],
    optionsHi: ["एंटोनी वैन लीउवेनहॉक", "लुई पाश्चर", "रॉबर्ट कोच", "अलेक्जेंडर फ्लेमिंग"],
    correctAnswer: 0,
    explanationEn: "Antonie van Leeuwenhoek was the first to observe bacteria in 1674.",
    explanationHi: "एंटोनी वैन लीउवेनहॉक ने 1674 में पहली बार बैक्टीरिया देखे।",
    difficulty: 'easy' as const,
    topic: "microbiology"
  },
  {
    id: "micro_2",
    questionEn: "Gram positive bacteria appear:",
    questionHi: "ग्राम पॉजिटिव बैक्टीरिया दिखते हैं:",
    optionsEn: ["Purple/Blue", "Pink/Red", "Green", "Yellow"],
    optionsHi: ["बैंगनी/नीले", "गुलाबी/लाल", "हरे", "पीले"],
    correctAnswer: 0,
    explanationEn: "Gram positive bacteria retain crystal violet stain and appear purple.",
    explanationHi: "ग्राम पॉजिटिव बैक्टीरिया क्रिस्टल वायलेट स्टेन रखते हैं और बैंगनी दिखते हैं।",
    difficulty: 'easy' as const,
    topic: "microbiology"
  },
  {
    id: "micro_3",
    questionEn: "Which organism causes Malaria?",
    questionHi: "मलेरिया किस जीव से होता है?",
    optionsEn: ["Plasmodium", "Salmonella", "E. coli", "Candida"],
    optionsHi: ["प्लाज्मोडियम", "साल्मोनेला", "E. coli", "कैंडिडा"],
    correctAnswer: 0,
    explanationEn: "Malaria is caused by Plasmodium parasites transmitted by Anopheles mosquitoes.",
    explanationHi: "मलेरिया प्लाज्मोडियम परजीवी से होता है जो एनोफिलीज मच्छर से फैलता है।",
    difficulty: 'easy' as const,
    topic: "microbiology"
  },
  {
    id: "micro_4",
    questionEn: "Autoclave sterilization temperature is:",
    questionHi: "ऑटोक्लेव बंध्याकरण तापमान है:",
    optionsEn: ["121°C at 15 psi", "100°C at normal pressure", "160°C dry heat", "37°C"],
    optionsHi: ["121°C पर 15 psi", "सामान्य दबाव पर 100°C", "160°C शुष्क ताप", "37°C"],
    correctAnswer: 0,
    explanationEn: "Autoclaving uses moist heat at 121°C under 15 psi pressure for 15-20 minutes.",
    explanationHi: "ऑटोक्लेविंग 121°C पर 15 psi दबाव में 15-20 मिनट तक होती है।",
    difficulty: 'medium' as const,
    topic: "microbiology"
  },
  {
    id: "micro_5",
    questionEn: "Which is NOT a Koch's postulate?",
    questionHi: "कोच के अभिगृहीत में क्या शामिल नहीं है?",
    optionsEn: ["Organism must be visible to naked eye", "Organism found in all cases", "Organism isolated in pure culture", "Same organism re-isolated"],
    optionsHi: ["जीव नग्न आंखों से दिखना चाहिए", "सभी मामलों में जीव मिलना", "शुद्ध कल्चर में अलग करना", "वही जीव फिर से अलग"],
    correctAnswer: 0,
    explanationEn: "Koch's postulates don't require visibility to naked eye - they use microscopy.",
    explanationHi: "कोच के अभिगृहीत में नग्न आंखों से दिखने की आवश्यकता नहीं है।",
    difficulty: 'medium' as const,
    topic: "microbiology"
  },
  {
    id: "micro_6",
    questionEn: "Antibiotics do NOT work against:",
    questionHi: "एंटीबायोटिक्स किस पर काम नहीं करते:",
    optionsEn: ["Viruses", "Bacteria", "Both", "Neither"],
    optionsHi: ["विषाणु", "जीवाणु", "दोनों", "कोई नहीं"],
    correctAnswer: 0,
    explanationEn: "Antibiotics are ineffective against viruses. Antivirals are needed.",
    explanationHi: "एंटीबायोटिक्स विषाणुओं पर अप्रभावी हैं।",
    difficulty: 'easy' as const,
    topic: "microbiology"
  },
  {
    id: "micro_7",
    questionEn: "Most dangerous type of malaria is caused by:",
    questionHi: "सबसे खतरनाक मलेरिया किससे होता है:",
    optionsEn: ["P. falciparum", "P. vivax", "P. malariae", "P. ovale"],
    optionsHi: ["P. falciparum", "P. vivax", "P. malariae", "P. ovale"],
    correctAnswer: 0,
    explanationEn: "P. falciparum causes cerebral malaria which can be fatal.",
    explanationHi: "P. falciparum सेरेब्रल मलेरिया करता है जो घातक हो सकता है।",
    difficulty: 'medium' as const,
    topic: "microbiology"
  },
  {
    id: "micro_8",
    questionEn: "Ringworm is caused by:",
    questionHi: "दाद किससे होता है:",
    optionsEn: ["Fungus", "Worm", "Bacteria", "Virus"],
    optionsHi: ["कवक", "कीड़ा", "जीवाणु", "विषाणु"],
    correctAnswer: 0,
    explanationEn: "Ringworm is a fungal infection, NOT caused by a worm.",
    explanationHi: "दाद एक कवक संक्रमण है, कीड़े से नहीं होता।",
    difficulty: 'easy' as const,
    topic: "microbiology"
  },
  {
    id: "micro_9",
    questionEn: "Hand hygiene is:",
    questionHi: "हाथ स्वच्छता है:",
    optionsEn: ["#1 infection control measure", "Not important", "Only for doctors", "Optional"],
    optionsHi: ["#1 संक्रमण नियंत्रण उपाय", "महत्वपूर्ण नहीं", "केवल डॉक्टरों के लिए", "वैकल्पिक"],
    correctAnswer: 0,
    explanationEn: "Hand hygiene is the single most important measure to prevent infections.",
    explanationHi: "संक्रमण रोकने का सबसे महत्वपूर्ण उपाय हाथ स्वच्छता है।",
    difficulty: 'easy' as const,
    topic: "microbiology"
  },
  {
    id: "micro_10",
    questionEn: "Red bag is used for:",
    questionHi: "लाल बैग का उपयोग होता है:",
    optionsEn: ["Infectious waste", "General waste", "Sharps", "Paper"],
    optionsHi: ["संक्रामक अपशिष्ट", "सामान्य अपशिष्ट", "शार्प्स", "कागज"],
    correctAnswer: 0,
    explanationEn: "Red bags are used for infectious waste like blood-soaked items.",
    explanationHi: "लाल बैग संक्रामक अपशिष्ट जैसे रक्त-युक्त वस्तुओं के लिए है।",
    difficulty: 'easy' as const,
    topic: "microbiology"
  }
];

export default function Microbiology() {
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

  const progress = (completedLessons.length / microbiologyLessons.length) * 100;

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
            lessons={microbiologyLessons}
            completedLessons={completedLessons}
            onLessonComplete={handleLessonComplete}
          />
        );
      case 'quiz':
        return (
          <QuizComponent 
            questions={microbiologyQuestions}
            questionCount={10}
            title={isHindi ? 'सूक्ष्म जीव विज्ञान क्विज़' : 'Microbiology Quiz'}
          />
        );
      case 'mocktest':
        return (
          <MockTestComponent 
            questions={microbiologyQuestions}
            testDuration={30}
            questionCount={10}
          />
        );
      case 'resources':
        return (
          <div className="resources-content">
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-icon">🔬</div>
                <h3>{isHindi ? 'ग्राम स्टेनिंग' : 'Gram Staining'}</h3>
                <div className="gram-comparison">
                  <div className="gram-item gram-positive">
                    <span className="gram-label">Gram +</span>
                    <span className="gram-color">{isHindi ? 'बैंगनी' : 'Purple'}</span>
                    <span className="gram-examples">Staph, Strep</span>
                  </div>
                  <div className="gram-item gram-negative">
                    <span className="gram-label">Gram -</span>
                    <span className="gram-color">{isHindi ? 'गुलाबी' : 'Pink'}</span>
                    <span className="gram-examples">E. coli, Salmonella</span>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">🦠</div>
                <h3>{isHindi ? 'बैक्टीरिया आकार' : 'Bacterial Shapes'}</h3>
                <div className="shapes-list">
                  <div className="shape-item">
                    <span className="shape-icon">⚫</span>
                    <span className="shape-name">Cocci</span>
                    <span className="shape-desc">{isHindi ? 'गोल' : 'Round'}</span>
                  </div>
                  <div className="shape-item">
                    <span className="shape-icon">🥢</span>
                    <span className="shape-name">Bacilli</span>
                    <span className="shape-desc">{isHindi ? 'छड़' : 'Rod'}</span>
                  </div>
                  <div className="shape-item">
                    <span className="shape-icon">🌀</span>
                    <span className="shape-name">Spirilla</span>
                    <span className="shape-desc">{isHindi ? 'सर्पिल' : 'Spiral'}</span>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">🔥</div>
                <h3>{isHindi ? 'बंध्याकरण विधियां' : 'Sterilization Methods'}</h3>
                <div className="sterilization-list">
                  <div className="sterilization-item">
                    <span className="method">{isHindi ? 'ऑटोक्लेव' : 'Autoclave'}</span>
                    <span className="params">121°C, 15 psi, 15-20 min</span>
                  </div>
                  <div className="sterilization-item">
                    <span className="method">{isHindi ? 'शुष्क ताप' : 'Dry Heat'}</span>
                    <span className="params">160-180°C, 1-2 hours</span>
                  </div>
                  <div className="sterilization-item">
                    <span className="method">{isHindi ? 'उबालना' : 'Boiling'}</span>
                    <span className="params">100°C, 20 min</span>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">🗑️</div>
                <h3>{isHindi ? 'अपशिष्ट पृथक्करण' : 'Waste Segregation'}</h3>
                <div className="waste-colors">
                  <div className="waste-item red">
                    <span className="color-box"></span>
                    <span>{isHindi ? 'लाल - संक्रामक' : 'Red - Infectious'}</span>
                  </div>
                  <div className="waste-item yellow">
                    <span className="color-box"></span>
                    <span>{isHindi ? 'पीला - पैथोलॉजिकल' : 'Yellow - Pathological'}</span>
                  </div>
                  <div className="waste-item blue">
                    <span className="color-box"></span>
                    <span>{isHindi ? 'नीला - शार्प्स' : 'Blue - Sharps'}</span>
                  </div>
                  <div className="waste-item black">
                    <span className="color-box"></span>
                    <span>{isHindi ? 'काला - सामान्य' : 'Black - General'}</span>
                  </div>
                </div>
              </div>

              <div className="resource-card full-width">
                <div className="resource-icon">🖐️</div>
                <h3>{isHindi ? 'WHO 5 क्षण' : 'WHO 5 Moments'}</h3>
                <div className="five-moments">
                  <div className="moment-item">
                    <span className="moment-num">1</span>
                    <span>{isHindi ? 'रोगी छूने से पहले' : 'Before touching patient'}</span>
                  </div>
                  <div className="moment-item">
                    <span className="moment-num">2</span>
                    <span>{isHindi ? 'स्वच्छ प्रक्रिया से पहले' : 'Before clean procedure'}</span>
                  </div>
                  <div className="moment-item">
                    <span className="moment-num">3</span>
                    <span>{isHindi ? 'शरीर द्रव संपर्क के बाद' : 'After body fluid exposure'}</span>
                  </div>
                  <div className="moment-item">
                    <span className="moment-num">4</span>
                    <span>{isHindi ? 'रोगी छूने के बाद' : 'After touching patient'}</span>
                  </div>
                  <div className="moment-item">
                    <span className="moment-num">5</span>
                    <span>{isHindi ? 'परिवेश छूने के बाद' : 'After touching surroundings'}</span>
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
      titleEn="Microbiology"
      titleHi="सूक्ष्म जीव विज्ञान"
      descriptionEn="Study of microorganisms - bacteria, viruses, fungi, and parasites"
      descriptionHi="सूक्ष्मजीवों का अध्ययन - जीवाणु, विषाणु, कवक और परजीवी"
      icon="🦠"
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      progress={progress}
    >
      {renderContent()}
    </TopicLayout>
  );
}
