// Export all question banks
export * from './types';
export * from './computerKnowledge';
export * from './anatomy';
export * from './physiology';
export * from './microbiology';
export * from './firstAid';
export * from './immunization';
export * from './nutrition';
export * from './mch';
export * from './publicHealth';
export * from './communicableDiseases';
export * from './healthHygiene';
export * from './mentalHealth';
export * from './pharmacology';
export * from './practicalSkills';
export * from './recordKeeping';
export * from './infectionControl';
export * from './communicationSkills';
export * from './healthEducation';
export * from './generalAwareness';
export * from './occupationalHealth';

// Import question banks for aggregation
import { computerKnowledgeBank } from './computerKnowledge';
import { anatomyQuestionBank } from './anatomy';
import { physiologyQuestionBank } from './physiology';
import { microbiologyQuestionBank } from './microbiology';
import { firstAidQuestionBank } from './firstAid';
import { immunizationQuestionBank } from './immunization';
import { nutritionQuestionBank } from './nutrition';
import { mchQuestionBank } from './mch';
import { publicHealthQuestionBank } from './publicHealth';
import { communicableDiseasesQuestionBank } from './communicableDiseases';
import { healthHygieneQuestionBank } from './healthHygiene';
import { mentalHealthQuestionBank } from './mentalHealth';
import { pharmacologyQuestionBank } from './pharmacology';
import { practicalSkillsQuestionBank } from './practicalSkills';
import { recordKeepingQuestionBank } from './recordKeeping';
import { infectionControlQuestionBank } from './infectionControl';
import { communicationSkillsQuestionBank } from './communicationSkills';
import { healthEducationQuestionBank } from './healthEducation';
import { generalAwarenessQuestionBank } from './generalAwareness';
import { occupationalHealthQuestionBank } from './occupationalHealth';

// All question banks
export const allQuestionBanks = [
  computerKnowledgeBank,
  anatomyQuestionBank,
  physiologyQuestionBank,
  microbiologyQuestionBank,
  firstAidQuestionBank,
  immunizationQuestionBank,
  nutritionQuestionBank,
  mchQuestionBank,
  publicHealthQuestionBank,
  communicableDiseasesQuestionBank,
  healthHygieneQuestionBank,
  mentalHealthQuestionBank,
  pharmacologyQuestionBank,
  practicalSkillsQuestionBank,
  recordKeepingQuestionBank,
  infectionControlQuestionBank,
  communicationSkillsQuestionBank,
  healthEducationQuestionBank,
  generalAwarenessQuestionBank,
  occupationalHealthQuestionBank,
];

// Get question bank by topic ID
export const getQuestionBankByTopicId = (topicId: string) => {
  return allQuestionBanks.find(qb => qb.topicId === topicId);
};

// Get all questions across all topics
export const getAllQuestions = () => {
  return allQuestionBanks.flatMap(qb => qb.questions);
};

// Get total question count
export const getTotalQuestionCount = () => {
  return allQuestionBanks.reduce((sum, qb) => sum + qb.totalQuestions, 0);
};
