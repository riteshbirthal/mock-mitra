// Generic types for all topics

export interface LessonSection {
  title: string;
  type: 'text' | 'table' | 'list' | 'code' | 'highlight' | 'diagram' | 'flashcard';
  content?: string;
  items?: string[];
  tableData?: { headers: string[]; rows: string[][] };
  highlightType?: 'info' | 'warning' | 'tip' | 'important';
  flashcards?: { question: string; answer: string }[];
}

export interface Lesson {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  icon: string;
  objectives: string[];
  sections: LessonSection[];
  keyTerms?: { term: string; definition: string }[];
  shortcuts?: { shortcut: string; action: string }[];
  summary: string[];
  practicalTips?: string[];
}

export interface TopicModule {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  totalLessons: number;
  totalDuration: string;
  totalQuestions: number;
  objectives: string[];
  lessons: Lesson[];
  status: 'complete' | 'partial' | 'pending';
}

export interface TopicManifest {
  id: string;
  name: string;
  status: 'complete' | 'partial' | 'pending';
  filesGenerated: number;
  questionsGenerated: number;
}

// Topic metadata with icons and colors
export const topicMeta: Record<string, { icon: string; color: string; shortName: string }> = {
  'computer-knowledge': { icon: '💻', color: '#38b2ac', shortName: 'Computer' },
  'general-awareness': { icon: '🌍', color: '#667eea', shortName: 'GK' },
  'anatomy': { icon: '🦴', color: '#e53e3e', shortName: 'Anatomy' },
  'physiology': { icon: '💓', color: '#d53f8c', shortName: 'Physiology' },
  'microbiology': { icon: '🦠', color: '#805ad5', shortName: 'Microbiology' },
  'public-health': { icon: '🏥', color: '#319795', shortName: 'Public Health' },
  'first-aid': { icon: '🚑', color: '#dd6b20', shortName: 'First Aid' },
  'immunization': { icon: '💉', color: '#38a169', shortName: 'Immunization' },
  'health-hygiene': { icon: '🧼', color: '#3182ce', shortName: 'Hygiene' },
  'nutrition': { icon: '🥗', color: '#48bb78', shortName: 'Nutrition' },
  'maternal-child-health': { icon: '👶', color: '#ed64a6', shortName: 'MCH' },
  'health-education': { icon: '📢', color: '#9f7aea', shortName: 'Health Ed' },
  'mental-health': { icon: '🧠', color: '#667eea', shortName: 'Mental Health' },
  'infection-control': { icon: '🧴', color: '#38b2ac', shortName: 'Infection Ctrl' },
  'record-keeping': { icon: '📋', color: '#718096', shortName: 'Records' },
  'communication-skills': { icon: '🗣️', color: '#ed8936', shortName: 'Communication' },
  'occupational-health': { icon: '🏭', color: '#4a5568', shortName: 'Occupational' },
  'communicable-diseases': { icon: '🔬', color: '#c53030', shortName: 'Diseases' },
  'pharmacology': { icon: '💊', color: '#2b6cb0', shortName: 'Pharmacology' },
  'practical-skills': { icon: '🩺', color: '#b7791f', shortName: 'Practical' },
};
