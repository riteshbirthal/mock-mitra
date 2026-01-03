import { computerKnowledgeLessons } from './computerKnowledgeContent';
import { anatomyLessons } from './anatomyContent';
import { physiologyLessons } from './physiologyContent';
import { microbiologyLessons } from './microbiologyContent';
import { firstAidLessons } from './firstAidContent';
import { healthHygieneLessons } from './healthHygieneContent';
import { nutritionLessons } from './nutritionContent';
import { immunizationLessons } from './immunizationContent';
import { mchLessons } from './mchContent';
import { communicableDiseasesLessons } from './communicableDiseasesContent';
import { publicHealthLessons } from './publicHealthContent';
import { mentalHealthLessons } from './mentalHealthContent';
import { pharmacologyLessons } from './pharmacologyContent';
import { practicalSkillsLessons } from './practicalSkillsContent';
import { recordKeepingLessons } from './recordKeepingContent';
import { communicationSkillsLessons } from './communicationSkillsContent';
import { healthEducationLessons } from './healthEducationContent';
import { infectionControlLessons } from './infectionControlContent';
import { generalAwarenessLessons } from './generalAwarenessContent';
import { occupationalHealthLessons } from './occupationalHealthContent';

export interface TopicInfo {
  id: string;
  nameEn: string;
  nameHi: string;
  icon: string;
  color: string;
  lessons: {
    id: number;
    titleEn: string;
    titleHi: string;
    contentEn: string;
    contentHi: string;
  }[];
}

export const allTopics: TopicInfo[] = [
  {
    id: 'computer-knowledge',
    nameEn: 'Computer Knowledge',
    nameHi: 'कंप्यूटर ज्ञान',
    icon: '💻',
    color: '#38b2ac',
    lessons: computerKnowledgeLessons
  },
  {
    id: 'anatomy',
    nameEn: 'Anatomy',
    nameHi: 'शरीर रचना विज्ञान',
    icon: '🦴',
    color: '#e53e3e',
    lessons: anatomyLessons
  },
  {
    id: 'physiology',
    nameEn: 'Physiology',
    nameHi: 'शरीर क्रिया विज्ञान',
    icon: '💓',
    color: '#d53f8c',
    lessons: physiologyLessons
  },
  {
    id: 'microbiology',
    nameEn: 'Microbiology',
    nameHi: 'सूक्ष्म जीव विज्ञान',
    icon: '🦠',
    color: '#805ad5',
    lessons: microbiologyLessons
  },
  {
    id: 'first-aid',
    nameEn: 'First Aid',
    nameHi: 'प्राथमिक चिकित्सा',
    icon: '🚑',
    color: '#dd6b20',
    lessons: firstAidLessons
  },
  {
    id: 'health-hygiene',
    nameEn: 'Health & Hygiene',
    nameHi: 'स्वास्थ्य एवं स्वच्छता',
    icon: '🧼',
    color: '#3182ce',
    lessons: healthHygieneLessons
  },
  {
    id: 'nutrition',
    nameEn: 'Nutrition',
    nameHi: 'पोषण',
    icon: '🥗',
    color: '#48bb78',
    lessons: nutritionLessons
  },
  {
    id: 'immunization',
    nameEn: 'Immunization',
    nameHi: 'टीकाकरण',
    icon: '💉',
    color: '#38a169',
    lessons: immunizationLessons
  },
  {
    id: 'maternal-child-health',
    nameEn: 'Maternal & Child Health',
    nameHi: 'मातृ एवं शिशु स्वास्थ्य',
    icon: '👩‍👧',
    color: '#ed64a6',
    lessons: mchLessons
  },
  {
    id: 'communicable-diseases',
    nameEn: 'Communicable Diseases',
    nameHi: 'संचारी रोग',
    icon: '🔬',
    color: '#c53030',
    lessons: communicableDiseasesLessons
  },
  {
    id: 'public-health',
    nameEn: 'Public Health',
    nameHi: 'सार्वजनिक स्वास्थ्य',
    icon: '🏥',
    color: '#319795',
    lessons: publicHealthLessons
  },
  {
    id: 'mental-health',
    nameEn: 'Mental Health',
    nameHi: 'मानसिक स्वास्थ्य',
    icon: '🧠',
    color: '#667eea',
    lessons: mentalHealthLessons
  },
  {
    id: 'pharmacology',
    nameEn: 'Pharmacology',
    nameHi: 'औषध विज्ञान',
    icon: '💊',
    color: '#9f7aea',
    lessons: pharmacologyLessons
  },
  {
    id: 'practical-skills',
    nameEn: 'Practical Skills',
    nameHi: 'व्यावहारिक कौशल',
    icon: '🩺',
    color: '#38b2ac',
    lessons: practicalSkillsLessons
  },
  {
    id: 'record-keeping',
    nameEn: 'Record Keeping',
    nameHi: 'रिकॉर्ड रखना',
    icon: '📋',
    color: '#718096',
    lessons: recordKeepingLessons
  },
  {
    id: 'communication-skills',
    nameEn: 'Communication Skills',
    nameHi: 'संचार कौशल',
    icon: '💬',
    color: '#ed8936',
    lessons: communicationSkillsLessons
  },
  {
    id: 'health-education',
    nameEn: 'Health Education',
    nameHi: 'स्वास्थ्य शिक्षा',
    icon: '📢',
    color: '#9f7aea',
    lessons: healthEducationLessons
  },
  {
    id: 'infection-control',
    nameEn: 'Infection Control',
    nameHi: 'संक्रमण नियंत्रण',
    icon: '🛡️',
    color: '#e53e3e',
    lessons: infectionControlLessons
  },
  {
    id: 'general-awareness',
    nameEn: 'General Awareness',
    nameHi: 'सामान्य जागरूकता',
    icon: '🌍',
    color: '#667eea',
    lessons: generalAwarenessLessons
  },
  {
    id: 'occupational-health',
    nameEn: 'Occupational Health',
    nameHi: 'व्यावसायिक स्वास्थ्य',
    icon: '🏭',
    color: '#2d3748',
    lessons: occupationalHealthLessons
  }
];

export const getTopicById = (topicId: string): TopicInfo | undefined => {
  return allTopics.find(t => t.id === topicId);
};

export const getLessonByIds = (topicId: string, lessonId: number) => {
  const topic = getTopicById(topicId);
  if (!topic) return null;
  const lesson = topic.lessons.find(l => l.id === lessonId);
  if (!lesson) return null;
  return { topic, lesson };
};

export const getNextLesson = (topicId: string, currentLessonId: number) => {
  const topic = getTopicById(topicId);
  if (!topic) return null;
  const currentIndex = topic.lessons.findIndex(l => l.id === currentLessonId);
  if (currentIndex === -1 || currentIndex === topic.lessons.length - 1) return null;
  return topic.lessons[currentIndex + 1];
};

export const getPrevLesson = (topicId: string, currentLessonId: number) => {
  const topic = getTopicById(topicId);
  if (!topic) return null;
  const currentIndex = topic.lessons.findIndex(l => l.id === currentLessonId);
  if (currentIndex <= 0) return null;
  return topic.lessons[currentIndex - 1];
};
