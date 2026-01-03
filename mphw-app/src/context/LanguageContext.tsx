import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isHindi: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.syllabus': 'Syllabus',
    'nav.practice': 'Practice',
    'nav.mockTest': 'Mock Test',
    'nav.progress': 'Progress',
    'nav.about': 'About',
    
    // Hero
    'hero.title': 'MPHW Exam Preparation',
    'hero.subtitle': 'Haryana Multi-Purpose Health Worker',
    'hero.description': 'Your complete guide to crack HSSC MPHW exam with comprehensive study material, practice questions, and mock tests',
    'hero.startLearning': 'Start Learning',
    'hero.takeTest': 'Take Mock Test',
    
    // Stats
    'stats.questions': 'Practice Questions',
    'stats.topics': 'Topics Covered',
    'stats.mockTests': 'Mock Tests',
    'stats.students': 'Students',
    
    // Exam Info
    'exam.info': 'Exam Information',
    'exam.pattern': 'Exam Pattern',
    'exam.questions': 'Questions',
    'exam.marks': 'Total Marks',
    'exam.duration': 'Duration',
    'exam.minutes': 'Minutes',
    'exam.mode': 'Mode',
    'exam.qualification': 'Qualification',
    'exam.negativeMarking': 'Negative Marking',
    'exam.yes': 'Yes',
    'exam.no': 'No',
    
    // Sections
    'section.generalAwareness': 'General Awareness & Studies',
    'section.computer': 'Computer Knowledge',
    'section.subject': 'Subject Specific (Health)',
    
    // Features
    'feature.studyMaterial': 'Study Material',
    'feature.studyMaterialDesc': 'Comprehensive notes in Hindi & English',
    'feature.practiceQuestions': 'Practice Questions',
    'feature.practiceQuestionsDesc': 'Topic-wise MCQs with explanations',
    'feature.mockTests': 'Mock Tests',
    'feature.mockTestsDesc': 'Full-length tests like real exam',
    'feature.progressTracking': 'Progress Tracking',
    'feature.progressTrackingDesc': 'Track your preparation journey',
    'feature.bilingualContent': 'Bilingual Content',
    'feature.bilingualContentDesc': 'Available in Hindi & English',
    'feature.expertTips': 'Expert Tips',
    'feature.expertTipsDesc': 'Strategies from toppers',
    
    // Topics
    'topic.anatomy': 'Anatomy',
    'topic.physiology': 'Physiology',
    'topic.microbiology': 'Microbiology',
    'topic.publicHealth': 'Public Health',
    'topic.healthHygiene': 'Health & Hygiene',
    'topic.firstAid': 'First Aid & Emergency',
    'topic.healthEducation': 'Health Education',
    'topic.mentalHealth': 'Mental Health',
    'topic.nutrition': 'Nutrition',
    'topic.immunization': 'Immunization',
    'topic.maternalChildHealth': 'Maternal & Child Health',
    'topic.communicableDiseases': 'Communicable Diseases',
    'topic.computerKnowledge': 'Computer Knowledge',
    'topic.generalAwareness': 'General Awareness',
    'topic.reasoning': 'Reasoning',
    'topic.mathematics': 'Mathematics',
    
    // Buttons
    'btn.start': 'Start',
    'btn.continue': 'Continue',
    'btn.next': 'Next',
    'btn.previous': 'Previous',
    'btn.submit': 'Submit',
    'btn.check': 'Check Answer',
    'btn.retry': 'Try Again',
    'btn.viewResults': 'View Results',
    'btn.backToTopics': 'Back to Topics',
    'btn.startPractice': 'Start Practice',
    'btn.viewAll': 'View All',
    'btn.download': 'Download PDF',
    
    // Practice
    'practice.correct': 'Correct',
    'practice.incorrect': 'Incorrect',
    'practice.attempted': 'Attempted',
    'practice.remaining': 'Remaining',
    'practice.score': 'Score',
    'practice.accuracy': 'Accuracy',
    'practice.timeSpent': 'Time Spent',
    'practice.explanation': 'Explanation',
    
    // Progress
    'progress.overall': 'Overall Progress',
    'progress.topicsCompleted': 'Topics Completed',
    'progress.questionsAttempted': 'Questions Attempted',
    'progress.averageScore': 'Average Score',
    'progress.streak': 'Day Streak',
    'progress.keepItUp': 'Keep it up!',
    'progress.almostThere': 'Almost there!',
    'progress.greatWork': 'Great work!',
    
    // Difficulty
    'difficulty.easy': 'Easy',
    'difficulty.medium': 'Medium',
    'difficulty.hard': 'Hard',
    
    // Common
    'common.language': 'Language',
    'common.english': 'English',
    'common.hindi': 'हिंदी',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.noData': 'No data available',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.sort': 'Sort',
    'common.share': 'Share',
    'common.bookmark': 'Bookmark',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.tagline': 'Your trusted companion for MPHW exam preparation',
    'footer.madeWith': 'Made with',
    'footer.forStudents': 'for students',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.syllabus': 'पाठ्यक्रम',
    'nav.practice': 'अभ्यास',
    'nav.mockTest': 'मॉक टेस्ट',
    'nav.progress': 'प्रगति',
    'nav.about': 'हमारे बारे में',
    
    // Hero
    'hero.title': 'MPHW परीक्षा तैयारी',
    'hero.subtitle': 'हरियाणा मल्टी पर्पस हेल्थ वर्कर',
    'hero.description': 'HSSC MPHW परीक्षा की संपूर्ण तैयारी - अध्ययन सामग्री, प्रैक्टिस प्रश्न और मॉक टेस्ट के साथ',
    'hero.startLearning': 'पढ़ाई शुरू करें',
    'hero.takeTest': 'मॉक टेस्ट दें',
    
    // Stats
    'stats.questions': 'प्रैक्टिस प्रश्न',
    'stats.topics': 'विषय शामिल',
    'stats.mockTests': 'मॉक टेस्ट',
    'stats.students': 'विद्यार्थी',
    
    // Exam Info
    'exam.info': 'परीक्षा जानकारी',
    'exam.pattern': 'परीक्षा पैटर्न',
    'exam.questions': 'प्रश्न',
    'exam.marks': 'कुल अंक',
    'exam.duration': 'अवधि',
    'exam.minutes': 'मिनट',
    'exam.mode': 'माध्यम',
    'exam.qualification': 'योग्यता',
    'exam.negativeMarking': 'नेगेटिव मार्किंग',
    'exam.yes': 'हाँ',
    'exam.no': 'नहीं',
    
    // Sections
    'section.generalAwareness': 'सामान्य जागरूकता एवं अध्ययन',
    'section.computer': 'कंप्यूटर ज्ञान',
    'section.subject': 'विषय विशेष (स्वास्थ्य)',
    
    // Features
    'feature.studyMaterial': 'अध्ययन सामग्री',
    'feature.studyMaterialDesc': 'हिंदी और अंग्रेजी में विस्तृत नोट्स',
    'feature.practiceQuestions': 'प्रैक्टिस प्रश्न',
    'feature.practiceQuestionsDesc': 'विषयवार MCQs व्याख्या सहित',
    'feature.mockTests': 'मॉक टेस्ट',
    'feature.mockTestsDesc': 'असली परीक्षा जैसे पूर्ण टेस्ट',
    'feature.progressTracking': 'प्रगति ट्रैकिंग',
    'feature.progressTrackingDesc': 'अपनी तैयारी की यात्रा देखें',
    'feature.bilingualContent': 'द्विभाषी सामग्री',
    'feature.bilingualContentDesc': 'हिंदी और अंग्रेजी में उपलब्ध',
    'feature.expertTips': 'एक्सपर्ट टिप्स',
    'feature.expertTipsDesc': 'टॉपर्स की रणनीतियाँ',
    
    // Topics
    'topic.anatomy': 'शरीर रचना विज्ञान',
    'topic.physiology': 'शरीर क्रिया विज्ञान',
    'topic.microbiology': 'सूक्ष्म जीव विज्ञान',
    'topic.publicHealth': 'सार्वजनिक स्वास्थ्य',
    'topic.healthHygiene': 'स्वास्थ्य एवं स्वच्छता',
    'topic.firstAid': 'प्राथमिक चिकित्सा',
    'topic.healthEducation': 'स्वास्थ्य शिक्षा',
    'topic.mentalHealth': 'मानसिक स्वास्थ्य',
    'topic.nutrition': 'पोषण',
    'topic.immunization': 'टीकाकरण',
    'topic.maternalChildHealth': 'मातृ एवं शिशु स्वास्थ्य',
    'topic.communicableDiseases': 'संचारी रोग',
    'topic.computerKnowledge': 'कंप्यूटर ज्ञान',
    'topic.generalAwareness': 'सामान्य जागरूकता',
    'topic.reasoning': 'तर्कशक्ति',
    'topic.mathematics': 'गणित',
    
    // Buttons
    'btn.start': 'शुरू करें',
    'btn.continue': 'जारी रखें',
    'btn.next': 'अगला',
    'btn.previous': 'पिछला',
    'btn.submit': 'जमा करें',
    'btn.check': 'उत्तर जाँचें',
    'btn.retry': 'फिर से कोशिश करें',
    'btn.viewResults': 'परिणाम देखें',
    'btn.backToTopics': 'विषयों पर वापस',
    'btn.startPractice': 'अभ्यास शुरू करें',
    'btn.viewAll': 'सभी देखें',
    'btn.download': 'PDF डाउनलोड',
    
    // Practice
    'practice.correct': 'सही',
    'practice.incorrect': 'गलत',
    'practice.attempted': 'प्रयास किए',
    'practice.remaining': 'शेष',
    'practice.score': 'स्कोर',
    'practice.accuracy': 'सटीकता',
    'practice.timeSpent': 'समय लगा',
    'practice.explanation': 'व्याख्या',
    
    // Progress
    'progress.overall': 'कुल प्रगति',
    'progress.topicsCompleted': 'विषय पूर्ण',
    'progress.questionsAttempted': 'प्रश्न प्रयास',
    'progress.averageScore': 'औसत स्कोर',
    'progress.streak': 'दिन की स्ट्रीक',
    'progress.keepItUp': 'जारी रखें!',
    'progress.almostThere': 'लगभग पहुँच गए!',
    'progress.greatWork': 'शानदार काम!',
    
    // Difficulty
    'difficulty.easy': 'आसान',
    'difficulty.medium': 'मध्यम',
    'difficulty.hard': 'कठिन',
    
    // Common
    'common.language': 'भाषा',
    'common.english': 'English',
    'common.hindi': 'हिंदी',
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'त्रुटि',
    'common.noData': 'कोई डेटा उपलब्ध नहीं',
    'common.search': 'खोजें',
    'common.filter': 'फ़िल्टर',
    'common.sort': 'क्रम',
    'common.share': 'शेयर करें',
    'common.bookmark': 'बुकमार्क',
    
    // Footer
    'footer.rights': 'सर्वाधिकार सुरक्षित',
    'footer.tagline': 'MPHW परीक्षा तैयारी के लिए आपका विश्वसनीय साथी',
    'footer.madeWith': 'बनाया गया',
    'footer.forStudents': 'विद्यार्थियों के लिए',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('mphw-language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('mphw-language', language);
    document.body.classList.toggle('hindi', language === 'hi');
    document.documentElement.lang = language === 'hi' ? 'hi' : 'en';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isHindi: language === 'hi' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
