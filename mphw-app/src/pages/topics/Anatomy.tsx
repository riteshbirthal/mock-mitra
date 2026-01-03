import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { anatomyLessons } from '../../data/anatomyContent';
import './Anatomy.css';

const STORAGE_KEYS = {
  COMPLETED_LESSONS: 'anatomy_completedLessons',
  ACTIVE_TAB: 'anatomy_activeTab',
  ACTIVE_LESSON: 'anatomy_activeLesson',
};

const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

// Sample questions for quiz (would normally come from question bank)
const anatomyQuestions = [
  {
    id: "anat_1",
    questionEn: "How many bones are in an adult human body?",
    questionHi: "एक वयस्क मानव शरीर में कितनी हड्डियाँ होती हैं?",
    optionsEn: ["206", "270", "300", "180"],
    optionsHi: ["206", "270", "300", "180"],
    correctAnswer: 0,
    explanationEn: "An adult human body has 206 bones. Newborns have about 270 bones, but some fuse together as they grow.",
    explanationHi: "एक वयस्क मानव शरीर में 206 हड्डियाँ होती हैं। नवजात शिशुओं में लगभग 270 हड्डियाँ होती हैं।",
    difficulty: 'easy' as const,
    topic: "anatomy"
  },
  {
    id: "anat_2",
    questionEn: "Which is the largest bone in the human body?",
    questionHi: "मानव शरीर की सबसे बड़ी हड्डी कौन सी है?",
    optionsEn: ["Femur", "Tibia", "Humerus", "Spine"],
    optionsHi: ["फीमर", "टिबिया", "ह्यूमरस", "रीढ़"],
    correctAnswer: 0,
    explanationEn: "The femur (thigh bone) is the largest and strongest bone in the human body.",
    explanationHi: "फीमर (जांघ की हड्डी) मानव शरीर की सबसे बड़ी और मजबूत हड्डी है।",
    difficulty: 'easy' as const,
    topic: "anatomy"
  },
  {
    id: "anat_3",
    questionEn: "What does 'medial' mean in anatomical terms?",
    questionHi: "शारीरिक शब्दों में 'मीडियल' का क्या अर्थ है?",
    optionsEn: ["Toward the midline", "Away from midline", "Above", "Below"],
    optionsHi: ["मध्य रेखा की ओर", "मध्य रेखा से दूर", "ऊपर", "नीचे"],
    correctAnswer: 0,
    explanationEn: "Medial means toward the midline of the body. The nose is medial to the ears.",
    explanationHi: "मीडियल का अर्थ है शरीर की मध्य रेखा की ओर। नाक कानों से मीडियल है।",
    difficulty: 'easy' as const,
    topic: "anatomy"
  },
  {
    id: "anat_4",
    questionEn: "How many chambers does the heart have?",
    questionHi: "हृदय में कितने कक्ष होते हैं?",
    optionsEn: ["4", "2", "3", "5"],
    optionsHi: ["4", "2", "3", "5"],
    correctAnswer: 0,
    explanationEn: "The heart has 4 chambers: 2 atria (upper) and 2 ventricles (lower).",
    explanationHi: "हृदय में 4 कक्ष होते हैं: 2 अलिंद (ऊपरी) और 2 निलय (निचले)।",
    difficulty: 'medium' as const,
    topic: "anatomy"
  },
  {
    id: "anat_5",
    questionEn: "Which muscle is the main muscle of breathing?",
    questionHi: "श्वसन की मुख्य मांसपेशी कौन सी है?",
    optionsEn: ["Diaphragm", "Intercostals", "Abdominals", "Pectorals"],
    optionsHi: ["डायाफ्राम", "इंटरकोस्टल", "एब्डोमिनल", "पेक्टोरल"],
    correctAnswer: 0,
    explanationEn: "The diaphragm is the primary muscle of respiration. It contracts and flattens during inspiration.",
    explanationHi: "डायाफ्राम श्वसन की प्राथमिक मांसपेशी है।",
    difficulty: 'easy' as const,
    topic: "anatomy"
  },
  {
    id: "anat_6",
    questionEn: "How many lobes does the right lung have?",
    questionHi: "दाएं फेफड़े में कितनी पालियां होती हैं?",
    optionsEn: ["3", "2", "4", "1"],
    optionsHi: ["3", "2", "4", "1"],
    correctAnswer: 0,
    explanationEn: "The right lung has 3 lobes (upper, middle, lower). The left lung has 2 lobes due to cardiac notch.",
    explanationHi: "दाएं फेफड़े में 3 पालियां होती हैं। बाएं में 2 (हृदय खांचे के कारण)।",
    difficulty: 'easy' as const,
    topic: "anatomy"
  },
  {
    id: "anat_7",
    questionEn: "What is the normal adult respiratory rate at rest?",
    questionHi: "आराम के समय वयस्क की सामान्य श्वसन दर क्या है?",
    optionsEn: ["12-20 breaths/min", "30-40 breaths/min", "5-10 breaths/min", "25-30 breaths/min"],
    optionsHi: ["12-20 श्वास/मिनट", "30-40 श्वास/मिनट", "5-10 श्वास/मिनट", "25-30 श्वास/मिनट"],
    correctAnswer: 0,
    explanationEn: "Normal adult respiratory rate at rest is 12-20 breaths per minute.",
    explanationHi: "आराम के समय वयस्क की सामान्य श्वसन दर 12-20 श्वास प्रति मिनट है।",
    difficulty: 'easy' as const,
    topic: "anatomy"
  },
  {
    id: "anat_8",
    questionEn: "Which artery is used for blood pressure measurement?",
    questionHi: "रक्तचाप मापने के लिए कौन सी धमनी का उपयोग किया जाता है?",
    optionsEn: ["Brachial", "Radial", "Carotid", "Femoral"],
    optionsHi: ["ब्रेकियल", "रेडियल", "कैरोटिड", "फेमोरल"],
    correctAnswer: 0,
    explanationEn: "The brachial artery (inner elbow) is used for blood pressure measurement with a sphygmomanometer.",
    explanationHi: "ब्रेकियल धमनी (कोहनी का अंदरूनी भाग) का उपयोग BP मापने के लिए किया जाता है।",
    difficulty: 'medium' as const,
    topic: "anatomy"
  },
  {
    id: "anat_9",
    questionEn: "What is the safest IM injection site for infants?",
    questionHi: "शिशुओं के लिए सबसे सुरक्षित IM इंजेक्शन स्थल कौन सा है?",
    optionsEn: ["Vastus lateralis", "Deltoid", "Gluteus", "Dorsogluteal"],
    optionsHi: ["वास्टस लेटरालिस", "डेल्टॉइड", "ग्लूटस", "डोर्सोग्लूटियल"],
    correctAnswer: 0,
    explanationEn: "Vastus lateralis (thigh) is the safest IM injection site for infants due to good muscle mass and no major nerves.",
    explanationHi: "वास्टस लेटरालिस शिशुओं के लिए सबसे सुरक्षित है।",
    difficulty: 'medium' as const,
    topic: "anatomy"
  },
  {
    id: "anat_10",
    questionEn: "What is normal blood pressure?",
    questionHi: "सामान्य रक्तचाप क्या है?",
    optionsEn: ["120/80 mmHg", "140/90 mmHg", "100/60 mmHg", "160/100 mmHg"],
    optionsHi: ["120/80 mmHg", "140/90 mmHg", "100/60 mmHg", "160/100 mmHg"],
    correctAnswer: 0,
    explanationEn: "Normal blood pressure is 120/80 mmHg (systolic/diastolic).",
    explanationHi: "सामान्य रक्तचाप 120/80 mmHg है।",
    difficulty: 'easy' as const,
    topic: "anatomy"
  }
];

export default function Anatomy() {
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

  const progress = (completedLessons.length / anatomyLessons.length) * 100;

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
            lessons={anatomyLessons}
            completedLessons={completedLessons}
            onLessonComplete={handleLessonComplete}
            topicId="anatomy"
          />
        );
      case 'quiz':
        return (
          <QuizComponent 
            questions={anatomyQuestions}
            questionCount={10}
            title={isHindi ? 'शरीर रचना क्विज़' : 'Anatomy Quiz'}
          />
        );
      case 'mocktest':
        return (
          <MockTestComponent 
            questions={anatomyQuestions}
            testDuration={30}
            questionCount={10}
          />
        );
      case 'resources':
        return (
          <div className="resources-content">
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-icon">🦴</div>
                <h3>{isHindi ? 'हड्डियों की संख्या' : 'Bone Count'}</h3>
                <div className="resource-content">
                  <div className="bone-diagram">
                    <div className="bone-item">
                      <span className="bone-region">Skull</span>
                      <span className="bone-count">22</span>
                    </div>
                    <div className="bone-item">
                      <span className="bone-region">Vertebrae</span>
                      <span className="bone-count">26</span>
                    </div>
                    <div className="bone-item">
                      <span className="bone-region">Ribs & Sternum</span>
                      <span className="bone-count">25</span>
                    </div>
                    <div className="bone-item">
                      <span className="bone-region">Upper Limbs</span>
                      <span className="bone-count">64</span>
                    </div>
                    <div className="bone-item">
                      <span className="bone-region">Lower Limbs</span>
                      <span className="bone-count">62</span>
                    </div>
                    <div className="bone-item total">
                      <span className="bone-region">Total</span>
                      <span className="bone-count">206</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">🧭</div>
                <h3>{isHindi ? 'दिशात्मक शब्द' : 'Directional Terms'}</h3>
                <div className="terms-list">
                  <div className="term-item">
                    <span className="term">Superior</span>
                    <span className="meaning">{isHindi ? 'ऊपर' : 'Above'}</span>
                  </div>
                  <div className="term-item">
                    <span className="term">Inferior</span>
                    <span className="meaning">{isHindi ? 'नीचे' : 'Below'}</span>
                  </div>
                  <div className="term-item">
                    <span className="term">Anterior</span>
                    <span className="meaning">{isHindi ? 'आगे' : 'Front'}</span>
                  </div>
                  <div className="term-item">
                    <span className="term">Posterior</span>
                    <span className="meaning">{isHindi ? 'पीछे' : 'Back'}</span>
                  </div>
                  <div className="term-item">
                    <span className="term">Medial</span>
                    <span className="meaning">{isHindi ? 'मध्य की ओर' : 'Toward middle'}</span>
                  </div>
                  <div className="term-item">
                    <span className="term">Lateral</span>
                    <span className="meaning">{isHindi ? 'बाहर की ओर' : 'Away from middle'}</span>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">❤️</div>
                <h3>{isHindi ? 'हृदय कक्ष' : 'Heart Chambers'}</h3>
                <div className="heart-diagram">
                  <div className="chamber">
                    <span className="chamber-name">RA</span>
                    <span className="chamber-full">{isHindi ? 'दायां अलिंद' : 'Right Atrium'}</span>
                  </div>
                  <div className="chamber">
                    <span className="chamber-name">RV</span>
                    <span className="chamber-full">{isHindi ? 'दायां निलय' : 'Right Ventricle'}</span>
                  </div>
                  <div className="chamber">
                    <span className="chamber-name">LA</span>
                    <span className="chamber-full">{isHindi ? 'बायां अलिंद' : 'Left Atrium'}</span>
                  </div>
                  <div className="chamber">
                    <span className="chamber-name">LV</span>
                    <span className="chamber-full">{isHindi ? 'बायां निलय' : 'Left Ventricle'}</span>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">🫁</div>
                <h3>{isHindi ? 'फेफड़ों की संरचना' : 'Lung Structure'}</h3>
                <div className="lung-info">
                  <div className="lung-item">
                    <span className="lung-side">{isHindi ? 'दायां फेफड़ा' : 'Right Lung'}</span>
                    <span className="lung-detail">3 {isHindi ? 'पालियां' : 'Lobes'}</span>
                  </div>
                  <div className="lung-item">
                    <span className="lung-side">{isHindi ? 'बायां फेफड़ा' : 'Left Lung'}</span>
                    <span className="lung-detail">2 {isHindi ? 'पालियां' : 'Lobes'}</span>
                  </div>
                </div>
              </div>

              <div className="resource-card full-width">
                <div className="resource-icon">💉</div>
                <h3>{isHindi ? 'IM इंजेक्शन स्थल' : 'IM Injection Sites'}</h3>
                <div className="injection-grid">
                  <div className="injection-item">
                    <strong>Deltoid</strong>
                    <span>{isHindi ? 'अधिकतम' : 'Max'}: 1 mL</span>
                  </div>
                  <div className="injection-item">
                    <strong>Vastus Lateralis</strong>
                    <span>{isHindi ? 'अधिकतम' : 'Max'}: 5 mL</span>
                  </div>
                  <div className="injection-item">
                    <strong>Ventrogluteal</strong>
                    <span>{isHindi ? 'अधिकतम' : 'Max'}: 3 mL</span>
                  </div>
                  <div className="injection-item">
                    <strong>Dorsogluteal</strong>
                    <span>{isHindi ? 'अधिकतम' : 'Max'}: 3 mL</span>
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
      titleEn="Anatomy"
      titleHi="शरीर रचना विज्ञान"
      descriptionEn="Study of body structures - bones, muscles, organs, and systems"
      descriptionHi="शरीर की संरचनाओं का अध्ययन - हड्डियां, मांसपेशियां, अंग और तंत्र"
      icon="🫀"
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      progress={progress}
    >
      {renderContent()}
    </TopicLayout>
  );
}
