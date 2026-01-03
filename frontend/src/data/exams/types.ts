export interface Topic {
  id: string;
  name: string;
  description?: string;
  questionsCount: number;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Easy-Medium' | 'Medium-Hard';
  hasContent: boolean;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  questions: number;
  marks: number;
  topics: Topic[];
}

export interface ExamSection {
  id: string;
  name: string;
  questions: number;
  marks: number;
  subjects: string[];
  color: string;
  icon: string;
}

export interface ExamInfo {
  id: string;
  name: string;
  fullName: string;
  organization: string;
  icon: string;
  totalQuestions: number;
  totalMarks: number;
  duration: number;
  negativeMarking: boolean;
  negativeMarkingValue?: number;
  mode: string;
  qualification: string;
  description?: string;
  officialSyllabusUrl?: string;
}

export interface ExamData {
  examInfo: ExamInfo;
  subjects: Subject[];
  examSections: ExamSection[];
}

export const getSubjectById = (subjects: Subject[], id: string): Subject | undefined => {
  return subjects.find(s => s.id === id);
};

export const getSubjectsBySection = (subjects: Subject[], sections: ExamSection[], sectionId: string): Subject[] => {
  const section = sections.find(s => s.id === sectionId);
  if (!section) return [];
  return subjects.filter(s => section.subjects.includes(s.id));
};
