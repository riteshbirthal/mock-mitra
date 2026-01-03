// Central topic registry - import all topic modules here
import { TopicModule, topicMeta } from '../types';
import { computerKnowledgeModule } from './computer-knowledge';

// All available topic modules
export const topicModules: Record<string, TopicModule> = {
  'computer-knowledge': computerKnowledgeModule,
};

// Get a specific topic module by ID
export const getTopicModule = (topicId: string): TopicModule | undefined => {
  return topicModules[topicId];
};

// Get lesson by topic and lesson ID
export const getLesson = (topicId: string, lessonId: string) => {
  const module = topicModules[topicId];
  if (!module) return undefined;
  return module.lessons.find(l => l.id === lessonId);
};

// Get all available topics with their metadata
export const getAvailableTopics = () => {
  return Object.entries(topicModules).map(([id, module]) => ({
    id,
    title: module.title,
    description: module.description,
    icon: module.icon,
    color: module.color,
    totalLessons: module.totalLessons,
    totalQuestions: module.totalQuestions,
    status: module.status,
  }));
};

// Get topic metadata (icon, color) for any topic
export const getTopicMeta = (topicId: string) => {
  return topicMeta[topicId] || { icon: '📚', color: '#666', shortName: topicId };
};

// Check if a topic has content available
export const hasTopicContent = (topicId: string): boolean => {
  return topicId in topicModules;
};

export { topicMeta };
