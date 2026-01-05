import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { mentalHealthLessons } from '../../data/mentalHealthContent';
import { mentalHealthQuestions } from '../../data/questionBanks/mentalHealth';

const STORAGE_KEYS = { COMPLETED_LESSONS: 'mh_completedLessons', ACTIVE_TAB: 'mh_activeTab' };
const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
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
      case 'quiz': return <QuizComponent questions={mentalHealthQuestions} questionCount={10} title={isHindi ? 'मानसिक स्वास्थ्य क्विज़' : 'Mental Health Quiz'} />;
      case 'mocktest': return <MockTestComponent questions={mentalHealthQuestions} testDuration={30} questionCount={10} />;
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
