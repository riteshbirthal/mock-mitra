import { ExamData, ExamInfo, Subject, ExamSection } from './types';

export const examInfo: ExamInfo = {
  id: 'state_psc',
  name: 'State PSC',
  fullName: 'State Public Service Commission Examinations',
  organization: 'State Public Service Commissions',
  icon: '📜',
  totalQuestions: 150,
  totalMarks: 200,
  duration: 120,
  negativeMarking: true,
  negativeMarkingValue: 0.25,
  mode: 'Offline/Online (varies by state)',
  qualification: 'Graduate from recognized University',
  description: 'State PSC exams are conducted by respective State Public Service Commissions for recruitment to state civil services.',
  officialSyllabusUrl: 'https://psc.gov.in',
};

export const subjects: Subject[] = [
  {
    id: 'general-studies',
    name: 'General Studies',
    icon: '📚',
    color: '#667eea',
    description: 'History, Geography, Polity, Economy, Science, State-specific GK',
    questions: 100,
    marks: 150,
    topics: [
      { id: 'indian-history', name: 'Indian History', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'state-history', name: 'State History', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'indian-geography', name: 'Indian Geography', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'state-geography', name: 'State Geography', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'indian-polity', name: 'Indian Polity', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'state-polity', name: 'State Administration', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'indian-economy', name: 'Indian Economy', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'state-economy', name: 'State Economy', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'general-science', name: 'General Science', questionsCount: 15, difficulty: 'Easy-Medium', hasContent: false },
      { id: 'environment', name: 'Environment & Ecology', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'current-affairs', name: 'Current Affairs (National)', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'state-current-affairs', name: 'Current Affairs (State)', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'state-culture', name: 'State Art & Culture', questionsCount: 15, difficulty: 'Medium', hasContent: false },
      { id: 'sports', name: 'Sports', questionsCount: 10, difficulty: 'Easy', hasContent: false },
    ],
  },
  {
    id: 'reasoning',
    name: 'Reasoning & Mental Ability',
    icon: '🧩',
    color: '#ed8936',
    description: 'Verbal, Non-Verbal, Logical Reasoning, Analytical Ability',
    questions: 25,
    marks: 25,
    topics: [
      { id: 'analogies', name: 'Analogies', questionsCount: 10, difficulty: 'Easy-Medium', hasContent: false },
      { id: 'classification', name: 'Classification', questionsCount: 10, difficulty: 'Easy', hasContent: false },
      { id: 'series', name: 'Number & Letter Series', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'coding-decoding', name: 'Coding & Decoding', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'blood-relations', name: 'Blood Relations', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'direction-sense', name: 'Direction Sense', questionsCount: 10, difficulty: 'Easy-Medium', hasContent: false },
      { id: 'syllogism', name: 'Syllogism', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'non-verbal', name: 'Non-Verbal Reasoning', questionsCount: 10, difficulty: 'Medium', hasContent: false },
    ],
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: '📐',
    color: '#48bb78',
    description: 'Arithmetic, Algebra, Geometry, Data Interpretation',
    questions: 25,
    marks: 25,
    topics: [
      { id: 'number-system', name: 'Number System', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'simplification', name: 'Simplification', questionsCount: 10, difficulty: 'Easy-Medium', hasContent: false },
      { id: 'percentage', name: 'Percentage', questionsCount: 10, difficulty: 'Easy-Medium', hasContent: false },
      { id: 'ratio-proportion', name: 'Ratio & Proportion', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'profit-loss', name: 'Profit & Loss', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'interest', name: 'Simple & Compound Interest', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'time-work', name: 'Time & Work', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'mensuration', name: 'Mensuration', questionsCount: 10, difficulty: 'Medium', hasContent: false },
      { id: 'data-interpretation', name: 'Data Interpretation', questionsCount: 10, difficulty: 'Medium', hasContent: false },
    ],
  },
];

export const examSections: ExamSection[] = [
  {
    id: 'section-1',
    name: 'General Studies',
    questions: 100,
    marks: 150,
    subjects: ['general-studies'],
    color: '#667eea',
    icon: '📚',
  },
  {
    id: 'section-2',
    name: 'Reasoning & Mental Ability',
    questions: 25,
    marks: 25,
    subjects: ['reasoning'],
    color: '#ed8936',
    icon: '🧩',
  },
  {
    id: 'section-3',
    name: 'Mathematics',
    questions: 25,
    marks: 25,
    subjects: ['mathematics'],
    color: '#48bb78',
    icon: '📐',
  },
];

export const statePscExamData: ExamData = {
  examInfo,
  subjects,
  examSections,
};

export default statePscExamData;
