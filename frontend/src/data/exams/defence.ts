import { ExamData, ExamInfo, Subject, ExamSection } from './types';

export const examInfo: ExamInfo = {
  id: 'defence',
  name: 'Defence',
  fullName: 'NDA / CDS / AFCAT',
  organization: 'Union Public Service Commission (UPSC)',
  icon: '🎖️',
  totalQuestions: 150,
  totalMarks: 300,
  duration: 150,
  negativeMarking: true,
  negativeMarkingValue: 0.33,
  mode: 'Offline (OMR-based)',
  qualification: '12th Pass (NDA) / Graduate (CDS)',
  description: 'Defence exams are conducted by UPSC for recruitment to Indian Armed Forces through NDA, CDS, and AFCAT.',
  officialSyllabusUrl: 'https://upsc.gov.in',
};

export const subjects: Subject[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: '📐',
    color: '#48bb78',
    description: 'Algebra, Matrices, Calculus, Trigonometry, Statistics, Geometry',
    questions: 120,
    marks: 300,
    topics: [
      { id: 'algebra', name: 'Algebra', questionsCount: 20, difficulty: 'Medium', hasContent: false },
      { id: 'matrices', name: 'Matrices & Determinants', questionsCount: 15, difficulty: 'Medium-Hard', hasContent: false },
      { id: 'trigonometry', name: 'Trigonometry', questionsCount: 20, difficulty: 'Medium', hasContent: false },
      { id: 'calculus', name: 'Differential & Integral Calculus', questionsCount: 20, difficulty: 'Hard', hasContent: false },
      { id: 'geometry', name: 'Analytical Geometry', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'coordinate-geometry', name: 'Coordinate Geometry', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'statistics', name: 'Statistics & Probability', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'vectors', name: 'Vectors', questionsCount: 10, difficulty: 'Medium-Hard', hasContent: false },
      { id: 'number-system', name: 'Number System', questionsCount: 10, difficulty: 'Easy-Medium', hasContent: false },
      { id: 'complex-numbers', name: 'Complex Numbers', questionsCount: 10, difficulty: 'Medium', hasContent: false },
    ],
  },
  {
    id: 'general-ability',
    name: 'General Ability Test',
    icon: '📚',
    color: '#667eea',
    description: 'English, GK, Physics, Chemistry, Current Affairs, Geography',
    questions: 150,
    marks: 600,
    topics: [
      { id: 'english-grammar', name: 'English Grammar', questionsCount: 20, difficulty: 'Medium', hasContent: false },
      { id: 'english-comprehension', name: 'English Comprehension', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'vocabulary', name: 'Vocabulary', questionsCount: 15, difficulty: 'Easy-Medium', hasContent: false },
      { id: 'physics', name: 'Physics', questionsCount: 25, difficulty: 'Medium', hasContent: false },
      { id: 'chemistry', name: 'Chemistry', questionsCount: 20, difficulty: 'Medium', hasContent: false },
      { id: 'general-science', name: 'General Science', questionsCount: 15, difficulty: 'Easy-Medium', hasContent: false },
      { id: 'indian-history', name: 'Indian History', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'freedom-movement', name: 'Freedom Movement', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'indian-geography', name: 'Indian Geography', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'indian-polity', name: 'Indian Polity', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'indian-economy', name: 'Indian Economy', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'current-affairs', name: 'Current Affairs', questionsCount: 20, difficulty: 'Medium', hasContent: false },
      { id: 'defence-gk', name: 'Defence & Security', questionsCount: 15, difficulty: 'Medium', hasContent: false },
    ],
  },
  {
    id: 'reasoning',
    name: 'Intelligence & Personality',
    icon: '🧩',
    color: '#ed8936',
    description: 'Verbal, Non-Verbal Reasoning, Spatial Ability',
    questions: 50,
    marks: 100,
    topics: [
      { id: 'verbal-reasoning', name: 'Verbal Reasoning', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'non-verbal', name: 'Non-Verbal Reasoning', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'spatial-ability', name: 'Spatial Ability', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'analogies', name: 'Analogies', questionsCount: 10, difficulty: 'Easy-Medium', hasContent: false },
      { id: 'series', name: 'Series Completion', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'pattern-recognition', name: 'Pattern Recognition', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'coding-decoding', name: 'Coding & Decoding', questionsCount: 10, difficulty: 'Easy-Medium', hasContent: false },
      { id: 'direction-sense', name: 'Direction Sense', questionsCount: 10, difficulty: 'Easy', hasContent: false },
    ],
  },
];

export const examSections: ExamSection[] = [
  {
    id: 'section-1',
    name: 'Mathematics',
    questions: 120,
    marks: 300,
    subjects: ['mathematics'],
    color: '#48bb78',
    icon: '📐',
  },
  {
    id: 'section-2',
    name: 'General Ability Test',
    questions: 150,
    marks: 600,
    subjects: ['general-ability'],
    color: '#667eea',
    icon: '📚',
  },
  {
    id: 'section-3',
    name: 'Intelligence & Personality',
    questions: 50,
    marks: 100,
    subjects: ['reasoning'],
    color: '#ed8936',
    icon: '🧩',
  },
];

export const defenceExamData: ExamData = {
  examInfo,
  subjects,
  examSections,
};

export default defenceExamData;
