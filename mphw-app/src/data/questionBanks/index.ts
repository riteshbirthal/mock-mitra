// Export types
export * from './types';

// Export all question banks
export { anatomyQuestions, anatomyQuestionBank } from './anatomy';
export { physiologyQuestions, physiologyQuestionBank } from './physiology';
export { microbiologyQuestions, microbiologyQuestionBank } from './microbiology';
export { firstAidQuestions, firstAidQuestionBank } from './firstAid';
export { healthHygieneQuestions, healthHygieneQuestionBank } from './healthHygiene';
export { nutritionQuestions, nutritionQuestionBank } from './nutrition';
export { immunizationQuestions, immunizationQuestionBank } from './immunization';
export { mchQuestions, mchQuestionBank } from './mch';
export { communicableDiseasesQuestions, communicableDiseasesQuestionBank } from './communicableDiseases';
export { publicHealthQuestions, publicHealthQuestionBank } from './publicHealth';
export { mentalHealthQuestions, mentalHealthQuestionBank } from './mentalHealth';
export { pharmacologyQuestions, pharmacologyQuestionBank } from './pharmacology';
export { practicalSkillsQuestions, practicalSkillsQuestionBank } from './practicalSkills';
export { communicationSkillsQuestions, communicationSkillsQuestionBank } from './communicationSkills';
export { healthEducationQuestions, healthEducationQuestionBank } from './healthEducation';
export { infectionControlQuestions, infectionControlQuestionBank } from './infectionControl';
export { computerKnowledgeQuestions, computerKnowledgeQuestionBank } from './computerKnowledge';
export { generalAwarenessQuestions, generalAwarenessQuestionBank } from './generalAwareness';
export { occupationalHealthQuestions, occupationalHealthQuestionBank } from './occupationalHealth';
export { mathematicsQuestions, mathematicsQuestionBank } from './mathematics';
export { reasoningQuestions, reasoningQuestionBank } from './reasoning';

// Import question banks for aggregation
import { anatomyQuestionBank } from './anatomy';
import { physiologyQuestionBank } from './physiology';
import { microbiologyQuestionBank } from './microbiology';
import { firstAidQuestionBank } from './firstAid';
import { healthHygieneQuestionBank } from './healthHygiene';
import { nutritionQuestionBank } from './nutrition';
import { immunizationQuestionBank } from './immunization';
import { mchQuestionBank } from './mch';
import { communicableDiseasesQuestionBank } from './communicableDiseases';
import { publicHealthQuestionBank } from './publicHealth';
import { mentalHealthQuestionBank } from './mentalHealth';
import { pharmacologyQuestionBank } from './pharmacology';
import { practicalSkillsQuestionBank } from './practicalSkills';
import { communicationSkillsQuestionBank } from './communicationSkills';
import { healthEducationQuestionBank } from './healthEducation';
import { infectionControlQuestionBank } from './infectionControl';
import { computerKnowledgeQuestionBank } from './computerKnowledge';
import { generalAwarenessQuestionBank } from './generalAwareness';
import { occupationalHealthQuestionBank } from './occupationalHealth';
import { mathematicsQuestionBank } from './mathematics';
import { reasoningQuestionBank } from './reasoning';

// All question banks
export const allQuestionBanks = [
  anatomyQuestionBank,
  physiologyQuestionBank,
  microbiologyQuestionBank,
  firstAidQuestionBank,
  healthHygieneQuestionBank,
  nutritionQuestionBank,
  immunizationQuestionBank,
  mchQuestionBank,
  communicableDiseasesQuestionBank,
  publicHealthQuestionBank,
  mentalHealthQuestionBank,
  pharmacologyQuestionBank,
  practicalSkillsQuestionBank,
  communicationSkillsQuestionBank,
  healthEducationQuestionBank,
  infectionControlQuestionBank,
  computerKnowledgeQuestionBank,
  generalAwarenessQuestionBank,
  occupationalHealthQuestionBank,
  mathematicsQuestionBank,
  reasoningQuestionBank,
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
