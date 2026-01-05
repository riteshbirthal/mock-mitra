/**
 * Script to generate question banks from mphw-modules content
 * Merges English and Hindi questions and generates TypeScript files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '../../content/mphw-modules');
const OUTPUT_DIR = path.join(__dirname, '../src/data/questionBanks');

// Topic mapping: directory name -> { id, nameEn, nameHi }
const TOPIC_MAP = {
  'anatomy': { id: 'anatomy', nameEn: 'Anatomy', nameHi: 'शरीर रचना विज्ञान' },
  'physiology': { id: 'physiology', nameEn: 'Physiology', nameHi: 'शरीर क्रिया विज्ञान' },
  'microbiology': { id: 'microbiology', nameEn: 'Microbiology', nameHi: 'सूक्ष्म जीव विज्ञान' },
  'microbiology-enhanced': { id: 'microbiology', nameEn: 'Microbiology', nameHi: 'सूक्ष्म जीव विज्ञान' },
  'first-aid': { id: 'first-aid', nameEn: 'First Aid', nameHi: 'प्राथमिक चिकित्सा' },
  'health-hygiene': { id: 'health-hygiene', nameEn: 'Health & Hygiene', nameHi: 'स्वास्थ्य एवं स्वच्छता' },
  'nutrition': { id: 'nutrition', nameEn: 'Nutrition', nameHi: 'पोषण' },
  'immunization': { id: 'immunization', nameEn: 'Immunization', nameHi: 'टीकाकरण' },
  'maternal-child-health': { id: 'mch', nameEn: 'Maternal & Child Health', nameHi: 'मातृ एवं शिशु स्वास्थ्य' },
  'communicable-diseases': { id: 'communicable-diseases', nameEn: 'Communicable Diseases', nameHi: 'संचारी रोग' },
  'public-health': { id: 'public-health', nameEn: 'Public Health', nameHi: 'सार्वजनिक स्वास्थ्य' },
  'mental-health': { id: 'mental-health', nameEn: 'Mental Health', nameHi: 'मानसिक स्वास्थ्य' },
  'pharmacology': { id: 'pharmacology', nameEn: 'Pharmacology', nameHi: 'औषध विज्ञान' },
  'practical-skills': { id: 'practical-skills', nameEn: 'Practical Skills', nameHi: 'व्यावहारिक कौशल' },
  'communication-skills': { id: 'communication-skills', nameEn: 'Communication Skills', nameHi: 'संचार कौशल' },
  'health-education': { id: 'health-education', nameEn: 'Health Education', nameHi: 'स्वास्थ्य शिक्षा' },
  'infection-control': { id: 'infection-control', nameEn: 'Infection Control', nameHi: 'संक्रमण नियंत्रण' },
  'computer-knowledge': { id: 'computer-knowledge', nameEn: 'Computer Knowledge', nameHi: 'कंप्यूटर ज्ञान' },
  'general-awareness': { id: 'general-awareness', nameEn: 'General Awareness', nameHi: 'सामान्य जागरूकता' },
  'occupational-health': { id: 'occupational-health', nameEn: 'Occupational Health', nameHi: 'व्यावसायिक स्वास्थ्य' },
  'mathematics': { id: 'mathematics', nameEn: 'Mathematics', nameHi: 'गणित' },
  'reasoning': { id: 'reasoning', nameEn: 'Reasoning', nameHi: 'तर्कशक्ति' },
  'family-planning': { id: 'family-planning', nameEn: 'Family Planning', nameHi: 'परिवार नियोजन' },
  'haematology-pathology': { id: 'haematology', nameEn: 'Haematology', nameHi: 'रक्त विज्ञान' },
  'haryana-gk': { id: 'haryana-gk', nameEn: 'Haryana GK', nameHi: 'हरियाणा सामान्य ज्ञान' },
  'vital-statistics': { id: 'vital-statistics', nameEn: 'Vital Statistics', nameHi: 'जन्म-मृत्यु सांख्यिकी' },
};

// Convert difficulty number to string
function getDifficulty(level) {
  if (typeof level === 'string') {
    if (level === 'easy' || level === 'medium' || level === 'hard') return level;
    return 'medium';
  }
  if (level === 1) return 'easy';
  if (level === 2) return 'medium';
  if (level === 3) return 'hard';
  return 'medium';
}

// Get correct answer index from answer field
function getCorrectAnswerIndex(question) {
  const answer = question.answer;
  
  // If answer is already a number (index), return it
  if (typeof answer === 'number') {
    return answer;
  }
  
  // If answer is the option text, find its index
  if (typeof answer === 'string' && question.options) {
    const idx = question.options.findIndex(opt => opt === answer);
    return idx >= 0 ? idx : 0;
  }
  
  return 0;
}

// Read all JSON question files from a directory
function readQuestionFiles(dirPath) {
  const questions = [];
  
  if (!fs.existsSync(dirPath)) {
    return questions;
  }
  
  const files = fs.readdirSync(dirPath);
  const jsonFiles = files.filter(f => f.endsWith('.json') && f.includes('questions'));
  
  for (const file of jsonFiles) {
    try {
      const content = fs.readFileSync(path.join(dirPath, file), 'utf8');
      const data = JSON.parse(content);
      if (data.questions && Array.isArray(data.questions)) {
        questions.push(...data.questions);
      }
    } catch (err) {
      console.error(`Error reading ${file}:`, err.message);
    }
  }
  
  return questions;
}

// Normalize ID to match English and Hindi questions
// English: ANA-001, Hindi: ANA-H-001
// We normalize by removing -H- from Hindi IDs
function normalizeId(id) {
  if (!id) return '';
  return String(id).replace(/-H-/, '-').replace(/-HI$/, '');
}

// Create a map of questions by normalized ID
function createQuestionMap(questions, isHindi = false) {
  const map = new Map();
  for (const q of questions) {
    if (!q.id) continue;
    const normalizedId = normalizeId(q.id);
    map.set(normalizedId, q);
  }
  return map;
}

// Merge English and Hindi questions
function mergeQuestions(enQuestions, hiQuestions, topicId) {
  const enMap = createQuestionMap(enQuestions);
  const hiMap = createQuestionMap(hiQuestions);
  
  const merged = [];
  let counter = 1;
  
  for (const [id, enQ] of enMap) {
    const hiQ = hiMap.get(id);
    
    const questionId = `${topicId.toUpperCase()}-${String(counter).padStart(3, '0')}`;
    counter++;
    
    // Get correct answer index
    const correctAnswer = getCorrectAnswerIndex(enQ);
    
    // Get options
    const optionsEn = enQ.options || [];
    const optionsHi = hiQ?.options || optionsEn;
    
    // Build merged question
    const mergedQ = {
      id: questionId,
      questionEn: enQ.question || '',
      questionHi: hiQ?.question || enQ.question || '',
      optionsEn: optionsEn,
      optionsHi: optionsHi,
      correctAnswer: correctAnswer,
      explanationEn: enQ.explanation || '',
      explanationHi: hiQ?.explanation || enQ.explanation || '',
      difficulty: getDifficulty(enQ.difficulty),
      topic: topicId,
      subtopic: String(enQ.subtopic || enQ.lesson || ''),
      tags: []
    };
    
    // Add tags based on subtopic
    if (mergedQ.subtopic && typeof mergedQ.subtopic === 'string') {
      mergedQ.tags.push(mergedQ.subtopic.toLowerCase().replace(/\s+/g, '-'));
    }
    
    merged.push(mergedQ);
  }
  
  // Add Hindi-only questions (if any don't have English counterparts)
  for (const [id, hiQ] of hiMap) {
    if (!enMap.has(id)) {
      const questionId = `${topicId.toUpperCase()}-${String(counter).padStart(3, '0')}`;
      counter++;
      
      const correctAnswer = getCorrectAnswerIndex(hiQ);
      
      merged.push({
        id: questionId,
        questionEn: hiQ.question || '',
        questionHi: hiQ.question || '',
        optionsEn: hiQ.options || [],
        optionsHi: hiQ.options || [],
        correctAnswer: correctAnswer,
        explanationEn: hiQ.explanation || '',
        explanationHi: hiQ.explanation || '',
        difficulty: getDifficulty(hiQ.difficulty),
        topic: topicId,
        subtopic: String(hiQ.subtopic || hiQ.lesson || ''),
        tags: []
      });
    }
  }
  
  return merged;
}

// Convert kebab-case to camelCase
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

// Generate TypeScript file content - simplified to avoid TS2590 error
function generateTsContent(topicInfo, questions) {
  const varName = toCamelCase(topicInfo.id);
  const exportName = `${varName}Questions`;
  const bankName = `${varName}QuestionBank`;
  
  // Use JSON.stringify for the entire array to avoid complex union types
  const questionsJson = JSON.stringify(questions, null, 2);
  
  return `import { Question, QuestionBank } from './types';

// @ts-ignore - Large question bank
export const ${exportName}: Question[] = ${questionsJson};

export const ${bankName}: QuestionBank = {
  topicId: '${topicInfo.id}',
  topicNameEn: '${topicInfo.nameEn}',
  topicNameHi: '${topicInfo.nameHi}',
  totalQuestions: ${exportName}.length,
  questions: ${exportName}
};
`;
}

// Main function
async function main() {
  console.log('Starting question bank generation...\n');
  
  const enDir = path.join(CONTENT_DIR, 'English');
  const hiDir = path.join(CONTENT_DIR, 'Hindi');
  
  const topics = Object.keys(TOPIC_MAP);
  const results = [];
  
  for (const topicDir of topics) {
    const topicInfo = TOPIC_MAP[topicDir];
    
    console.log(`Processing: ${topicDir} -> ${topicInfo.id}`);
    
    // Read English questions
    const enQuestions = readQuestionFiles(path.join(enDir, topicDir));
    
    // Read Hindi questions
    const hiQuestions = readQuestionFiles(path.join(hiDir, topicDir));
    
    if (enQuestions.length === 0 && hiQuestions.length === 0) {
      console.log(`  No questions found for ${topicDir}`);
      continue;
    }
    
    console.log(`  EN: ${enQuestions.length} questions, HI: ${hiQuestions.length} questions`);
    
    // Merge questions
    const merged = mergeQuestions(enQuestions, hiQuestions, topicInfo.id);
    
    if (merged.length === 0) {
      console.log(`  No merged questions for ${topicDir}`);
      continue;
    }
    
    console.log(`  Merged: ${merged.length} questions`);
    
    // Generate TypeScript file
    const tsContent = generateTsContent(topicInfo, merged);
    
    // Write to file
    const outputFile = path.join(OUTPUT_DIR, `${toCamelCase(topicInfo.id)}.ts`);
    fs.writeFileSync(outputFile, tsContent, 'utf8');
    
    console.log(`  Written: ${outputFile}\n`);
    
    results.push({
      topic: topicInfo.id,
      count: merged.length,
      file: outputFile
    });
  }
  
  console.log('\n=== Summary ===');
  let total = 0;
  for (const r of results) {
    console.log(`${r.topic}: ${r.count} questions`);
    total += r.count;
  }
  console.log(`\nTotal: ${total} questions across ${results.length} topics`);
}

main().catch(console.error);
