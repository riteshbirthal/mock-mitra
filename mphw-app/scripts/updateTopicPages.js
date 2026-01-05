/**
 * Script to update topic pages to import questions from question banks
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOPICS_DIR = path.join(__dirname, '../src/pages/topics');

// Mapping: page file -> question bank import and variable names
const TOPIC_MAP = {
  'Anatomy.tsx': {
    questionsVar: 'anatomyQuestions',
    importFrom: '../../data/questionBanks/anatomy',
  },
  'Physiology.tsx': {
    questionsVar: 'physiologyQuestions',
    importFrom: '../../data/questionBanks/physiology',
  },
  'Microbiology.tsx': {
    questionsVar: 'microbiologyQuestions', 
    importFrom: '../../data/questionBanks/microbiology',
  },
  'FirstAid.tsx': {
    questionsVar: 'firstAidQuestions',
    importFrom: '../../data/questionBanks/firstAid',
  },
  'HealthHygiene.tsx': {
    questionsVar: 'healthHygieneQuestions',
    importFrom: '../../data/questionBanks/healthHygiene',
  },
  'Nutrition.tsx': {
    questionsVar: 'nutritionQuestions',
    importFrom: '../../data/questionBanks/nutrition',
  },
  'Immunization.tsx': {
    questionsVar: 'immunizationQuestions',
    importFrom: '../../data/questionBanks/immunization',
  },
  'MCH.tsx': {
    questionsVar: 'mchQuestions',
    importFrom: '../../data/questionBanks/mch',
  },
  'CommunicableDiseases.tsx': {
    questionsVar: 'communicableDiseasesQuestions',
    importFrom: '../../data/questionBanks/communicableDiseases',
  },
  'PublicHealth.tsx': {
    questionsVar: 'publicHealthQuestions',
    importFrom: '../../data/questionBanks/publicHealth',
  },
  'MentalHealth.tsx': {
    questionsVar: 'mentalHealthQuestions',
    importFrom: '../../data/questionBanks/mentalHealth',
  },
  'Pharmacology.tsx': {
    questionsVar: 'pharmacologyQuestions',
    importFrom: '../../data/questionBanks/pharmacology',
  },
  'PracticalSkills.tsx': {
    questionsVar: 'practicalSkillsQuestions',
    importFrom: '../../data/questionBanks/practicalSkills',
  },
  'CommunicationSkills.tsx': {
    questionsVar: 'communicationSkillsQuestions',
    importFrom: '../../data/questionBanks/communicationSkills',
  },
  'HealthEducation.tsx': {
    questionsVar: 'healthEducationQuestions',
    importFrom: '../../data/questionBanks/healthEducation',
  },
  'InfectionControl.tsx': {
    questionsVar: 'infectionControlQuestions',
    importFrom: '../../data/questionBanks/infectionControl',
  },
  'ComputerKnowledge.tsx': {
    questionsVar: 'computerKnowledgeQuestions',
    importFrom: '../../data/questionBanks/computerKnowledge',
  },
  'GeneralAwareness.tsx': {
    questionsVar: 'generalAwarenessQuestions',
    importFrom: '../../data/questionBanks/generalAwareness',
  },
  'OccupationalHealth.tsx': {
    questionsVar: 'occupationalHealthQuestions',
    importFrom: '../../data/questionBanks/occupationalHealth',
  },
};

// Map of local question variable names in each file to their replacements
const LOCAL_VAR_MAP = {
  'Anatomy.tsx': ['anatomyQuestions'],
  'Physiology.tsx': ['physiologyQuestions'],
  'Microbiology.tsx': ['microbiologyQuestions'],
  'FirstAid.tsx': ['firstAidQuestions'],
  'HealthHygiene.tsx': ['healthHygieneQuestions'],
  'Nutrition.tsx': ['nutritionQuestions'],
  'Immunization.tsx': ['immunizationQuestions'],
  'MCH.tsx': ['mchQuestions'],
  'CommunicableDiseases.tsx': ['cdQuestions'],
  'PublicHealth.tsx': ['phQuestions'],
  'MentalHealth.tsx': ['mhQuestions'],
  'Pharmacology.tsx': ['pharmQuestions'],
  'PracticalSkills.tsx': ['psQuestions'],
  'CommunicationSkills.tsx': ['csQuestions'],
  'HealthEducation.tsx': ['heQuestions'],
  'InfectionControl.tsx': ['icQuestions'],
  'ComputerKnowledge.tsx': ['computerKnowledgeQuestions'],
  'GeneralAwareness.tsx': ['gaQuestions'],
  'OccupationalHealth.tsx': ['ohQuestions'],
};

function updateTopicPage(fileName, config) {
  const filePath = path.join(TOPICS_DIR, fileName);
  
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${fileName}: file not found`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if already has import from question bank
  if (content.includes('questionBanks/')) {
    console.log(`Skipping ${fileName}: already updated`);
    return;
  }
  
  // Add import statement after the last import line
  const importPattern = /(import [^;]+from\s+['"][^'"]+['"];?\n)(?!import)/;
  const newImport = `import { ${config.questionsVar} } from '${config.importFrom}';\n`;
  
  // Find where imports end
  const lines = content.split('\n');
  let lastImportLine = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) {
      lastImportLine = i;
    }
  }
  
  if (lastImportLine >= 0) {
    lines.splice(lastImportLine + 1, 0, `import { ${config.questionsVar} } from '${config.importFrom}';`);
    content = lines.join('\n');
  }
  
  // Remove the local questions array definition
  // Pattern: const xxxQuestions = [ ... ]; or const xxxQuestions: Question[] = [ ... ];
  const localVars = LOCAL_VAR_MAP[fileName] || [];
  for (const localVar of localVars) {
    // Remove the entire const block for questions
    const questionsPattern = new RegExp(
      `(// Sample questions[^\\n]*\\n)?const ${localVar}[^=]*=\\s*\\[([\\s\\S]*?)\\];\\n?`,
      'g'
    );
    content = content.replace(questionsPattern, '');
    
    // Also try without comment
    const questionsPattern2 = new RegExp(
      `const ${localVar}[^=]*=\\s*\\[([\\s\\S]*?)\\];\\n?`,
      'g'
    );
    content = content.replace(questionsPattern2, '');
    
    // Replace usage of local variable with imported variable
    if (localVar !== config.questionsVar) {
      content = content.replace(new RegExp(`questions={${localVar}}`, 'g'), `questions={${config.questionsVar}}`);
    }
  }
  
  // Remove import of './Anatomy.css' type imports for css if it's just for questions styling
  // (keep it if it exists)
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated: ${fileName}`);
}

function main() {
  console.log('Updating topic pages to use question banks...\n');
  
  for (const [fileName, config] of Object.entries(TOPIC_MAP)) {
    updateTopicPage(fileName, config);
  }
  
  console.log('\nDone!');
}

main();
