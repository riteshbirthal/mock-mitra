import { ExamData, ExamInfo, Subject, ExamSection } from './types';

export const examInfo: ExamInfo = {
  id: 'upsc',
  name: 'UPSC',
  fullName: 'Union Public Service Commission - Civil Services Examination',
  organization: 'Union Public Service Commission (UPSC)',
  icon: '🏛️',
  totalQuestions: 100,
  totalMarks: 200,
  duration: 120,
  negativeMarking: true,
  negativeMarkingValue: 0.33,
  mode: 'Offline (OMR-based)',
  qualification: 'Graduate from recognized University',
  description: 'UPSC CSE is the premier examination for recruitment to IAS, IPS, IFS and other All India Services.',
  officialSyllabusUrl: 'https://upsc.gov.in',
};

export const subjects: Subject[] = [
  {
    id: 'general-studies',
    name: 'General Studies Paper I',
    icon: '📚',
    color: '#667eea',
    description: 'History, Geography, Polity, Economy, Environment, Science & Technology',
    questions: 100,
    marks: 200,
    topics: [
      { id: 'ancient-history', name: 'Ancient Indian History', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'medieval-history', name: 'Medieval Indian History', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'modern-history', name: 'Modern Indian History', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'art-culture', name: 'Indian Art & Culture', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'world-history', name: 'World History', questionsCount: 10, difficulty: 'Medium-Hard', hasContent: false },
      { id: 'physical-geography', name: 'Physical Geography', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'indian-geography', name: 'Indian Geography', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'world-geography', name: 'World Geography', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'polity-constitution', name: 'Indian Polity & Constitution', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'governance', name: 'Governance & Social Justice', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'indian-economy', name: 'Indian Economy', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'environment', name: 'Environment & Ecology', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'science-tech', name: 'Science & Technology', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'current-affairs', name: 'Current Affairs', questionsCount: 20, difficulty: 'Medium', hasContent: false },
      { id: 'international-relations', name: 'International Relations', questionsCount: 10, difficulty: 'Medium-Hard', hasContent: false },
    ],
  },
  {
    id: 'csat',
    name: 'CSAT (Paper II)',
    icon: '🧩',
    color: '#ed8936',
    description: 'Comprehension, Interpersonal Skills, Logical Reasoning, Analytical Ability',
    questions: 80,
    marks: 200,
    topics: [
      { id: 'comprehension', name: 'Comprehension', questionsCount: 20, difficulty: 'Medium', hasContent: false },
      { id: 'interpersonal-skills', name: 'Interpersonal Skills', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'logical-reasoning', name: 'Logical Reasoning', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'analytical-ability', name: 'Analytical Ability', questionsCount: 15, difficulty: 'Medium-Hard', hasContent: false },
      { id: 'decision-making', name: 'Decision Making', questionsCount: 10, difficulty: 'Medium-Hard', hasContent: false },
      { id: 'problem-solving', name: 'Problem Solving', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'basic-numeracy', name: 'Basic Numeracy', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'data-interpretation', name: 'Data Interpretation', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'english-comprehension', name: 'English Language Comprehension', questionsCount: 15, difficulty: 'Easy-Medium', hasContent: false },
      { id: 'mental-ability', name: 'Mental Ability', questionsCount: 10, difficulty: 'Medium', hasContent: false },
    ],
  },
];

export const examSections: ExamSection[] = [
  {
    id: 'section-1',
    name: 'General Studies (Paper I)',
    questions: 100,
    marks: 200,
    subjects: ['general-studies'],
    color: '#667eea',
    icon: '📚',
  },
  {
    id: 'section-2',
    name: 'CSAT (Paper II - Qualifying)',
    questions: 80,
    marks: 200,
    subjects: ['csat'],
    color: '#ed8936',
    icon: '🧩',
  },
];

export const upscExamData: ExamData = {
  examInfo,
  subjects,
  examSections,
};

export default upscExamData;
