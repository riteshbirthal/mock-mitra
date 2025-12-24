import axios from 'axios';
import { API_BASE_URL, API_KEY } from '../config';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY,
  },
});

export interface Exam {
  _id: string;
  name: string;
  description: string;
  icon: string;
  duration: number;
  total_questions: number;
}

export interface Question {
  _id: string;
  question_no: number;
  question: string;
  options: string[];
  exam_id: string;
  category: string;
}

export interface ExamResult {
  score: number;
  correct: number;
  wrong: number;
  unanswered: number;
  total: number;
  results: {
    question_no: number;
    question: string;
    options: string[];
    correct_answer: number;
    user_answer: number;
    status: 'correct' | 'wrong' | 'unanswered';
    explanation: string;
    category: string;
  }[];
}

export interface Content {
  _id: string;
  title: string;
  category: string;
  content?: string;
  exam_tags: string[];
}

export interface Subject {
  _id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  topics: string[];
  content_ids: string[];
}

export const examApi = {
  getAll: () => api.get<{ exams: Exam[] }>('/exams'),
  getById: (id: string) => api.get<Exam>(`/exams/${id}`),
  getQuestions: (id: string) => api.get<{ questions: Question[]; total: number }>(`/exams/${id}/questions`),
  submit: (id: string, answers: Record<string, number>, questionIds?: string[]) => 
    api.post<ExamResult>(`/exams/${id}/submit`, { answers, question_ids: questionIds }),
};

export const contentApi = {
  getAll: () => api.get<{ contents: Content[] }>('/content'),
  getCategories: () => api.get<{ categories: string[] }>('/content/categories'),
  getByExam: (examId: string) => api.get<{ contents: Content[] }>(`/content/by-exam/${examId}`),
  getById: (id: string) => api.get<Content>(`/content/${id}`),
};

export const subjectApi = {
  getAll: () => api.get<{ subjects: Subject[] }>('/subjects'),
  getById: (id: string) => api.get<{ subject: Subject; contents: Content[] }>(`/subjects/${id}`),
};

export default api;
