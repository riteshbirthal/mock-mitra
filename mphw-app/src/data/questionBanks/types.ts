export interface Question {
  id: string;
  questionEn: string;
  questionHi: string;
  optionsEn: string[];
  optionsHi: string[];
  correctAnswer: number;
  explanationEn: string;
  explanationHi: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
  subtopic?: string;
  tags?: string[];
}

export interface QuestionBank {
  topicId: string;
  topicNameEn: string;
  topicNameHi: string;
  totalQuestions: number;
  questions: Question[];
}

export interface QuizConfig {
  questionCount: number;
  difficulty?: 'easy' | 'medium' | 'hard' | 'mixed';
  subtopics?: string[];
  timeLimit?: number;
}

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getRandomQuestions = (
  questions: Question[],
  count: number,
  config?: Partial<QuizConfig>
): Question[] => {
  let filtered = [...questions];

  if (config?.difficulty && config.difficulty !== 'mixed') {
    filtered = filtered.filter(q => q.difficulty === config.difficulty);
  }

  if (config?.subtopics && config.subtopics.length > 0) {
    filtered = filtered.filter(q => 
      q.subtopic && config.subtopics!.includes(q.subtopic)
    );
  }

  const shuffled = shuffleArray(filtered);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export const getQuestionsByDifficulty = (
  questions: Question[],
  easyCount: number,
  mediumCount: number,
  hardCount: number
): Question[] => {
  const easy = shuffleArray(questions.filter(q => q.difficulty === 'easy')).slice(0, easyCount);
  const medium = shuffleArray(questions.filter(q => q.difficulty === 'medium')).slice(0, mediumCount);
  const hard = shuffleArray(questions.filter(q => q.difficulty === 'hard')).slice(0, hardCount);
  
  return shuffleArray([...easy, ...medium, ...hard]);
};
