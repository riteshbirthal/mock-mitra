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

// Question with shuffled options for quiz display
export interface ShuffledQuestion extends Question {
  shuffledOptionsEn: string[];
  shuffledOptionsHi: string[];
  shuffledCorrectAnswer: number;
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

// Shuffle options and track new correct answer index
export const shuffleQuestionOptions = (question: Question): ShuffledQuestion => {
  // Create indices array [0, 1, 2, 3]
  const indices = question.optionsEn.map((_, i) => i);
  const shuffledIndices = shuffleArray(indices);
  
  // Rearrange options based on shuffled indices
  const shuffledOptionsEn = shuffledIndices.map(i => question.optionsEn[i]);
  const shuffledOptionsHi = shuffledIndices.map(i => question.optionsHi[i]);
  
  // Find new position of correct answer
  const shuffledCorrectAnswer = shuffledIndices.indexOf(question.correctAnswer);
  
  return {
    ...question,
    shuffledOptionsEn,
    shuffledOptionsHi,
    shuffledCorrectAnswer
  };
};

export const getRandomQuestions = (
  questions: Question[],
  count: number,
  config?: Partial<QuizConfig>
): ShuffledQuestion[] => {
  let filtered = [...questions];

  if (config?.difficulty && config.difficulty !== 'mixed') {
    filtered = filtered.filter(q => q.difficulty === config.difficulty);
  }

  if (config?.subtopics && config.subtopics.length > 0) {
    filtered = filtered.filter(q => 
      q.subtopic && config.subtopics!.includes(q.subtopic)
    );
  }

  // Shuffle questions and take required count
  const shuffled = shuffleArray(filtered);
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));
  
  // Shuffle options for each selected question
  return selected.map(q => shuffleQuestionOptions(q));
};

export const getQuestionsByDifficulty = (
  questions: Question[],
  easyCount: number,
  mediumCount: number,
  hardCount: number
): ShuffledQuestion[] => {
  const easy = shuffleArray(questions.filter(q => q.difficulty === 'easy')).slice(0, easyCount);
  const medium = shuffleArray(questions.filter(q => q.difficulty === 'medium')).slice(0, mediumCount);
  const hard = shuffleArray(questions.filter(q => q.difficulty === 'hard')).slice(0, hardCount);
  
  const combined = shuffleArray([...easy, ...medium, ...hard]);
  
  // Shuffle options for each question
  return combined.map(q => shuffleQuestionOptions(q));
};
