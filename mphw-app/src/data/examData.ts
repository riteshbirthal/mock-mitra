export interface Topic {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  icon: string;
  color: string;
  questionsCount: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  weightage: number;
}

export interface Subject {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  icon: string;
  color: string;
  description: {
    en: string;
    hi: string;
  };
  questions: number;
  marks: number;
  weightage: number;
  topics: Topic[];
}

export interface ExamSection {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  questions: number;
  marks: number;
  subjects: string[];
  color: string;
  icon: string;
  weightage: string;
}

export interface ExamInfo {
  id: string;
  name: string;
  fullName: {
    en: string;
    hi: string;
  };
  organization: {
    en: string;
    hi: string;
  };
  icon: string;
  totalQuestions: number;
  totalMarks: number;
  duration: number;
  negativeMarking: boolean;
  mode: {
    en: string;
    hi: string;
  };
  qualification: {
    en: string;
    hi: string;
  };
}

export const examInfo: ExamInfo = {
  id: 'hssc_mphw',
  name: 'HSSC MPHW',
  fullName: {
    en: 'Haryana Multi-Purpose Health Worker',
    hi: 'हरियाणा मल्टी पर्पस हेल्थ वर्कर'
  },
  organization: {
    en: 'Haryana Staff Selection Commission (HSSC)',
    hi: 'हरियाणा कर्मचारी चयन आयोग (HSSC)'
  },
  icon: '🏥',
  totalQuestions: 100,
  totalMarks: 100,
  duration: 90,
  negativeMarking: false,
  mode: {
    en: 'Offline (OMR-based)',
    hi: 'ऑफलाइन (OMR आधारित)'
  },
  qualification: {
    en: '10th Pass + MPHW Training Course',
    hi: '10वीं पास + MPHW ट्रेनिंग कोर्स'
  }
};

export const examSections: ExamSection[] = [
  {
    id: 'section-1',
    name: {
      en: 'General Awareness & Studies',
      hi: 'सामान्य जागरूकता एवं अध्ययन'
    },
    questions: 20,
    marks: 20,
    subjects: ['general-awareness', 'reasoning', 'mathematics'],
    color: '#667eea',
    icon: '📚',
    weightage: '20%'
  },
  {
    id: 'section-2',
    name: {
      en: 'Computer Knowledge',
      hi: 'कंप्यूटर ज्ञान'
    },
    questions: 10,
    marks: 10,
    subjects: ['computer-knowledge'],
    color: '#38b2ac',
    icon: '💻',
    weightage: '10%'
  },
  {
    id: 'section-3',
    name: {
      en: 'Subject Specific (Health)',
      hi: 'विषय विशेष (स्वास्थ्य)'
    },
    questions: 70,
    marks: 70,
    subjects: ['anatomy', 'physiology', 'microbiology', 'public-health', 'health-hygiene', 'first-aid', 'health-education', 'maternal-child-health', 'nutrition', 'immunization', 'mental-health', 'communicable-diseases', 'pharmacology', 'practical-skills'],
    color: '#e53e3e',
    icon: '🏥',
    weightage: '70%'
  }
];

export const subjects: Subject[] = [
  {
    id: 'general-awareness',
    name: { en: 'General Awareness', hi: 'सामान्य जागरूकता' },
    icon: '🌍',
    color: '#667eea',
    description: {
      en: 'GK, Current Affairs, History, Geography, Civics with Haryana focus',
      hi: 'सामान्य ज्ञान, समसामयिकी, इतिहास, भूगोल, नागरिक शास्त्र (हरियाणा केंद्रित)'
    },
    questions: 8,
    marks: 8,
    weightage: 8,
    topics: [
      { id: 'indian-history', name: { en: 'Indian History', hi: 'भारतीय इतिहास' }, description: { en: 'Ancient, Medieval & Modern India', hi: 'प्राचीन, मध्यकालीन और आधुनिक भारत' }, icon: '🏛️', color: '#b7791f', questionsCount: 50, difficulty: 'Medium', weightage: 1 },
      { id: 'haryana-gk', name: { en: 'Haryana GK', hi: 'हरियाणा सामान्य ज्ञान' }, description: { en: 'History, Culture, Geography of Haryana', hi: 'हरियाणा का इतिहास, संस्कृति, भूगोल' }, icon: '🗺️', color: '#2f855a', questionsCount: 100, difficulty: 'Medium', weightage: 3 },
      { id: 'current-affairs', name: { en: 'Current Affairs', hi: 'समसामयिकी' }, description: { en: 'National & International Events', hi: 'राष्ट्रीय और अंतर्राष्ट्रीय घटनाएं' }, icon: '📰', color: '#3182ce', questionsCount: 80, difficulty: 'Medium', weightage: 2 },
      { id: 'indian-polity', name: { en: 'Indian Polity', hi: 'भारतीय राजव्यवस्था' }, description: { en: 'Constitution, Government Structure', hi: 'संविधान, सरकार की संरचना' }, icon: '⚖️', color: '#805ad5', questionsCount: 50, difficulty: 'Medium', weightage: 1 },
      { id: 'general-science', name: { en: 'General Science', hi: 'सामान्य विज्ञान' }, description: { en: 'Physics, Chemistry, Biology Basics', hi: 'भौतिकी, रसायन, जीव विज्ञान की मूल बातें' }, icon: '🔬', color: '#38a169', questionsCount: 60, difficulty: 'Easy', weightage: 1 }
    ]
  },
  {
    id: 'reasoning',
    name: { en: 'Reasoning', hi: 'तर्कशक्ति' },
    icon: '🧩',
    color: '#ed8936',
    description: {
      en: 'Verbal & Non-Verbal Reasoning, Analogies, Series, Puzzles',
      hi: 'शाब्दिक और गैर-शाब्दिक तर्क, सादृश्य, श्रृंखला, पहेलियाँ'
    },
    questions: 6,
    marks: 6,
    weightage: 6,
    topics: [
      { id: 'analogies', name: { en: 'Analogies', hi: 'सादृश्य' }, description: { en: 'Word & Letter Analogies', hi: 'शब्द और अक्षर सादृश्य' }, icon: '🔄', color: '#ed8936', questionsCount: 50, difficulty: 'Easy', weightage: 1 },
      { id: 'coding-decoding', name: { en: 'Coding & Decoding', hi: 'कूट-लेखन' }, description: { en: 'Letter & Number Coding', hi: 'अक्षर और संख्या कूट-लेखन' }, icon: '🔐', color: '#9f7aea', questionsCount: 50, difficulty: 'Medium', weightage: 1 },
      { id: 'series', name: { en: 'Number & Letter Series', hi: 'संख्या एवं अक्षर श्रृंखला' }, description: { en: 'Finding Patterns in Series', hi: 'श्रृंखला में पैटर्न ढूंढना' }, icon: '🔢', color: '#48bb78', questionsCount: 60, difficulty: 'Medium', weightage: 1 },
      { id: 'blood-relations', name: { en: 'Blood Relations', hi: 'रक्त संबंध' }, description: { en: 'Family Tree Problems', hi: 'पारिवारिक वृक्ष समस्याएं' }, icon: '👨‍👩‍👧‍👦', color: '#e53e3e', questionsCount: 40, difficulty: 'Medium', weightage: 1 },
      { id: 'direction-sense', name: { en: 'Direction Sense', hi: 'दिशा ज्ञान' }, description: { en: 'Direction & Distance', hi: 'दिशा और दूरी' }, icon: '🧭', color: '#3182ce', questionsCount: 40, difficulty: 'Easy', weightage: 1 }
    ]
  },
  {
    id: 'mathematics',
    name: { en: 'Mathematics', hi: 'गणित' },
    icon: '📐',
    color: '#48bb78',
    description: {
      en: 'Number System, Percentage, Profit-Loss, Time & Work',
      hi: 'संख्या पद्धति, प्रतिशत, लाभ-हानि, समय और कार्य'
    },
    questions: 6,
    marks: 6,
    weightage: 6,
    topics: [
      { id: 'number-system', name: { en: 'Number System', hi: 'संख्या पद्धति' }, description: { en: 'Types of Numbers, Operations', hi: 'संख्याओं के प्रकार, संक्रियाएं' }, icon: '🔢', color: '#667eea', questionsCount: 40, difficulty: 'Medium', weightage: 1 },
      { id: 'percentage', name: { en: 'Percentage', hi: 'प्रतिशत' }, description: { en: 'Percentage Calculations', hi: 'प्रतिशत गणना' }, icon: '%', color: '#48bb78', questionsCount: 50, difficulty: 'Easy', weightage: 1 },
      { id: 'profit-loss', name: { en: 'Profit & Loss', hi: 'लाभ और हानि' }, description: { en: 'Business Mathematics', hi: 'व्यापारिक गणित' }, icon: '💰', color: '#ed8936', questionsCount: 50, difficulty: 'Medium', weightage: 1 },
      { id: 'time-work', name: { en: 'Time & Work', hi: 'समय और कार्य' }, description: { en: 'Work Efficiency Problems', hi: 'कार्य दक्षता समस्याएं' }, icon: '⏱️', color: '#9f7aea', questionsCount: 40, difficulty: 'Medium', weightage: 1 },
      { id: 'average', name: { en: 'Average', hi: 'औसत' }, description: { en: 'Average Calculations', hi: 'औसत गणना' }, icon: '📊', color: '#38b2ac', questionsCount: 30, difficulty: 'Easy', weightage: 1 }
    ]
  },
  {
    id: 'computer-knowledge',
    name: { en: 'Computer Knowledge', hi: 'कंप्यूटर ज्ञान' },
    icon: '💻',
    color: '#38b2ac',
    description: {
      en: 'Computer Basics, MS Office, Internet & Email',
      hi: 'कंप्यूटर की मूल बातें, MS Office, इंटरनेट और ईमेल'
    },
    questions: 10,
    marks: 10,
    weightage: 10,
    topics: [
      { id: 'computer-fundamentals', name: { en: 'Computer Fundamentals', hi: 'कंप्यूटर की मूल बातें' }, description: { en: 'Basic Concepts, Hardware, Software', hi: 'मूल अवधारणाएं, हार्डवेयर, सॉफ्टवेयर' }, icon: '🖥️', color: '#38b2ac', questionsCount: 100, difficulty: 'Easy', weightage: 3 },
      { id: 'ms-word', name: { en: 'Microsoft Word', hi: 'माइक्रोसॉफ्ट वर्ड' }, description: { en: 'Word Processing', hi: 'वर्ड प्रोसेसिंग' }, icon: '📝', color: '#2b6cb0', questionsCount: 80, difficulty: 'Easy', weightage: 2 },
      { id: 'ms-excel', name: { en: 'Microsoft Excel', hi: 'माइक्रोसॉफ्ट एक्सेल' }, description: { en: 'Spreadsheet & Formulas', hi: 'स्प्रेडशीट और फॉर्मूला' }, icon: '📊', color: '#38a169', questionsCount: 80, difficulty: 'Medium', weightage: 2 },
      { id: 'ms-powerpoint', name: { en: 'Microsoft PowerPoint', hi: 'माइक्रोसॉफ्ट पॉवरपॉइंट' }, description: { en: 'Presentations', hi: 'प्रस्तुतियाँ' }, icon: '📽️', color: '#dd6b20', questionsCount: 50, difficulty: 'Easy', weightage: 1 },
      { id: 'internet-email', name: { en: 'Internet & Email', hi: 'इंटरनेट और ईमेल' }, description: { en: 'Web Browsing, Email Communication', hi: 'वेब ब्राउज़िंग, ईमेल संचार' }, icon: '🌐', color: '#805ad5', questionsCount: 70, difficulty: 'Easy', weightage: 2 }
    ]
  },
  {
    id: 'anatomy',
    name: { en: 'Anatomy', hi: 'शरीर रचना विज्ञान' },
    icon: '🦴',
    color: '#e53e3e',
    description: {
      en: 'Human Body Structure, Skeletal, Circulatory, Nervous Systems',
      hi: 'मानव शरीर संरचना, कंकाल, परिसंचरण, तंत्रिका तंत्र'
    },
    questions: 10,
    marks: 10,
    weightage: 10,
    topics: [
      { id: 'skeletal-system', name: { en: 'Skeletal System', hi: 'कंकाल तंत्र' }, description: { en: 'Bones & Joints', hi: 'हड्डियाँ और जोड़' }, icon: '🦴', color: '#e53e3e', questionsCount: 100, difficulty: 'Medium', weightage: 3 },
      { id: 'circulatory-system', name: { en: 'Circulatory System', hi: 'परिसंचरण तंत्र' }, description: { en: 'Heart, Blood Vessels', hi: 'हृदय, रक्त वाहिकाएं' }, icon: '❤️', color: '#c53030', questionsCount: 80, difficulty: 'Medium', weightage: 2 },
      { id: 'respiratory-system', name: { en: 'Respiratory System', hi: 'श्वसन तंत्र' }, description: { en: 'Lungs, Breathing', hi: 'फेफड़े, श्वसन' }, icon: '🫁', color: '#4299e1', questionsCount: 80, difficulty: 'Medium', weightage: 2 },
      { id: 'digestive-system', name: { en: 'Digestive System', hi: 'पाचन तंत्र' }, description: { en: 'GI Tract, Digestion', hi: 'आहार नली, पाचन' }, icon: '🍽️', color: '#ed8936', questionsCount: 80, difficulty: 'Medium', weightage: 2 },
      { id: 'nervous-system', name: { en: 'Nervous System', hi: 'तंत्रिका तंत्र' }, description: { en: 'Brain, Nerves', hi: 'मस्तिष्क, तंत्रिकाएं' }, icon: '🧠', color: '#805ad5', questionsCount: 60, difficulty: 'Hard', weightage: 1 }
    ]
  },
  {
    id: 'physiology',
    name: { en: 'Physiology', hi: 'शरीर क्रिया विज्ञान' },
    icon: '💓',
    color: '#d53f8c',
    description: {
      en: 'Body Functions, Cell Biology, Blood, Metabolism',
      hi: 'शरीर की क्रियाएं, कोशिका विज्ञान, रक्त, चयापचय'
    },
    questions: 10,
    marks: 10,
    weightage: 10,
    topics: [
      { id: 'cell-biology', name: { en: 'Cell Biology', hi: 'कोशिका विज्ञान' }, description: { en: 'Cell Structure & Function', hi: 'कोशिका संरचना और कार्य' }, icon: '🔬', color: '#667eea', questionsCount: 80, difficulty: 'Medium', weightage: 2 },
      { id: 'blood-composition', name: { en: 'Blood & Composition', hi: 'रक्त एवं संरचना' }, description: { en: 'RBC, WBC, Platelets', hi: 'लाल रक्त कणिकाएं, श्वेत रक्त कणिकाएं, प्लेटलेट्स' }, icon: '🩸', color: '#e53e3e', questionsCount: 100, difficulty: 'Medium', weightage: 3 },
      { id: 'metabolism', name: { en: 'Metabolism', hi: 'चयापचय' }, description: { en: 'Energy Production', hi: 'ऊर्जा उत्पादन' }, icon: '⚡', color: '#ed8936', questionsCount: 60, difficulty: 'Hard', weightage: 2 },
      { id: 'hormones', name: { en: 'Hormones', hi: 'हार्मोन' }, description: { en: 'Endocrine Functions', hi: 'अंतःस्रावी कार्य' }, icon: '💉', color: '#9f7aea', questionsCount: 60, difficulty: 'Medium', weightage: 2 },
      { id: 'body-fluids', name: { en: 'Body Fluids', hi: 'शरीर के तरल पदार्थ' }, description: { en: 'CSF, Urine Analysis', hi: 'CSF, मूत्र विश्लेषण' }, icon: '💧', color: '#4299e1', questionsCount: 50, difficulty: 'Medium', weightage: 1 }
    ]
  },
  {
    id: 'microbiology',
    name: { en: 'Microbiology', hi: 'सूक्ष्म जीव विज्ञान' },
    icon: '🦠',
    color: '#805ad5',
    description: {
      en: 'Bacteria, Viruses, Fungi, Sterilization, Infection Control',
      hi: 'बैक्टीरिया, वायरस, फफूंद, विसंक्रमण, संक्रमण नियंत्रण'
    },
    questions: 8,
    marks: 8,
    weightage: 8,
    topics: [
      { id: 'bacteriology', name: { en: 'Bacteriology', hi: 'जीवाणु विज्ञान' }, description: { en: 'Types of Bacteria', hi: 'बैक्टीरिया के प्रकार' }, icon: '🦠', color: '#805ad5', questionsCount: 100, difficulty: 'Medium', weightage: 3 },
      { id: 'virology', name: { en: 'Virology', hi: 'विषाणु विज्ञान' }, description: { en: 'Types of Viruses', hi: 'वायरस के प्रकार' }, icon: '🧬', color: '#e53e3e', questionsCount: 80, difficulty: 'Medium', weightage: 2 },
      { id: 'sterilization', name: { en: 'Sterilization', hi: 'विसंक्रमण' }, description: { en: 'Sterilization Methods', hi: 'विसंक्रमण विधियाँ' }, icon: '🧴', color: '#38b2ac', questionsCount: 80, difficulty: 'Easy', weightage: 2 },
      { id: 'parasitology', name: { en: 'Parasitology', hi: 'परजीवी विज्ञान' }, description: { en: 'Parasites & Infections', hi: 'परजीवी और संक्रमण' }, icon: '🪱', color: '#ed8936', questionsCount: 50, difficulty: 'Medium', weightage: 1 }
    ]
  },
  {
    id: 'public-health',
    name: { en: 'Public Health', hi: 'सार्वजनिक स्वास्थ्य' },
    icon: '🏥',
    color: '#319795',
    description: {
      en: 'Health Programs, Epidemiology, Community Health',
      hi: 'स्वास्थ्य कार्यक्रम, महामारी विज्ञान, सामुदायिक स्वास्थ्य'
    },
    questions: 10,
    marks: 10,
    weightage: 10,
    topics: [
      { id: 'national-health-programs', name: { en: 'National Health Programs', hi: 'राष्ट्रीय स्वास्थ्य कार्यक्रम' }, description: { en: 'Govt Health Schemes', hi: 'सरकारी स्वास्थ्य योजनाएं' }, icon: '🏛️', color: '#319795', questionsCount: 120, difficulty: 'Medium', weightage: 4 },
      { id: 'epidemiology', name: { en: 'Epidemiology', hi: 'महामारी विज्ञान' }, description: { en: 'Disease Patterns', hi: 'रोग प्रतिरूप' }, icon: '📈', color: '#e53e3e', questionsCount: 80, difficulty: 'Hard', weightage: 2 },
      { id: 'community-health', name: { en: 'Community Health', hi: 'सामुदायिक स्वास्थ्य' }, description: { en: 'Health at Community Level', hi: 'समुदाय स्तर पर स्वास्थ्य' }, icon: '👥', color: '#48bb78', questionsCount: 100, difficulty: 'Medium', weightage: 3 },
      { id: 'health-indicators', name: { en: 'Health Indicators', hi: 'स्वास्थ्य संकेतक' }, description: { en: 'Health Statistics', hi: 'स्वास्थ्य सांख्यिकी' }, icon: '📊', color: '#667eea', questionsCount: 50, difficulty: 'Medium', weightage: 1 }
    ]
  },
  {
    id: 'health-hygiene',
    name: { en: 'Health & Hygiene', hi: 'स्वास्थ्य एवं स्वच्छता' },
    icon: '🧼',
    color: '#3182ce',
    description: {
      en: 'Personal Hygiene, Sanitation, Water & Food Safety',
      hi: 'व्यक्तिगत स्वच्छता, स्वच्छता, जल और खाद्य सुरक्षा'
    },
    questions: 6,
    marks: 6,
    weightage: 6,
    topics: [
      { id: 'personal-hygiene', name: { en: 'Personal Hygiene', hi: 'व्यक्तिगत स्वच्छता' }, description: { en: 'Personal Cleanliness', hi: 'व्यक्तिगत सफाई' }, icon: '🧼', color: '#3182ce', questionsCount: 60, difficulty: 'Easy', weightage: 2 },
      { id: 'environmental-sanitation', name: { en: 'Environmental Sanitation', hi: 'पर्यावरणीय स्वच्छता' }, description: { en: 'Clean Environment', hi: 'स्वच्छ पर्यावरण' }, icon: '🌿', color: '#48bb78', questionsCount: 80, difficulty: 'Medium', weightage: 2 },
      { id: 'water-sanitation', name: { en: 'Water Sanitation', hi: 'जल स्वच्छता' }, description: { en: 'Safe Water Supply', hi: 'सुरक्षित जल आपूर्ति' }, icon: '💧', color: '#4299e1', questionsCount: 60, difficulty: 'Medium', weightage: 1 },
      { id: 'food-hygiene', name: { en: 'Food Hygiene', hi: 'खाद्य स्वच्छता' }, description: { en: 'Food Safety', hi: 'खाद्य सुरक्षा' }, icon: '🍽️', color: '#ed8936', questionsCount: 50, difficulty: 'Easy', weightage: 1 }
    ]
  },
  {
    id: 'first-aid',
    name: { en: 'First Aid & Emergency', hi: 'प्राथमिक चिकित्सा एवं आपातकाल' },
    icon: '🚑',
    color: '#dd6b20',
    description: {
      en: 'Emergency Care, Wounds, Fractures, Burns, CPR',
      hi: 'आपातकालीन देखभाल, घाव, फ्रैक्चर, जलना, CPR'
    },
    questions: 8,
    marks: 8,
    weightage: 8,
    topics: [
      { id: 'first-aid-principles', name: { en: 'First Aid Principles', hi: 'प्राथमिक चिकित्सा सिद्धांत' }, description: { en: 'Basic First Aid', hi: 'मूल प्राथमिक चिकित्सा' }, icon: '🏥', color: '#dd6b20', questionsCount: 60, difficulty: 'Easy', weightage: 2 },
      { id: 'wounds-bleeding', name: { en: 'Wounds & Bleeding', hi: 'घाव और रक्तस्राव' }, description: { en: 'Wound Management', hi: 'घाव प्रबंधन' }, icon: '🩹', color: '#e53e3e', questionsCount: 80, difficulty: 'Medium', weightage: 2 },
      { id: 'fractures', name: { en: 'Fractures', hi: 'फ्रैक्चर' }, description: { en: 'Bone Injuries', hi: 'हड्डी की चोटें' }, icon: '🦴', color: '#718096', questionsCount: 60, difficulty: 'Medium', weightage: 2 },
      { id: 'cpr-resuscitation', name: { en: 'CPR & Resuscitation', hi: 'CPR और पुनर्जीवन' }, description: { en: 'Life Saving Techniques', hi: 'जीवन रक्षक तकनीकें' }, icon: '❤️', color: '#c53030', questionsCount: 50, difficulty: 'Medium', weightage: 1 },
      { id: 'burns-poisoning', name: { en: 'Burns & Poisoning', hi: 'जलना और विषाक्तता' }, description: { en: 'Burn & Poison Care', hi: 'जलने और विष की देखभाल' }, icon: '🔥', color: '#ed8936', questionsCount: 50, difficulty: 'Medium', weightage: 1 }
    ]
  },
  {
    id: 'maternal-child-health',
    name: { en: 'Maternal & Child Health', hi: 'मातृ एवं शिशु स्वास्थ्य' },
    icon: '👶',
    color: '#ed64a6',
    description: {
      en: 'Pregnancy Care, Child Development, Immunization',
      hi: 'गर्भावस्था देखभाल, बाल विकास, टीकाकरण'
    },
    questions: 8,
    marks: 8,
    weightage: 8,
    topics: [
      { id: 'antenatal-care', name: { en: 'Antenatal Care', hi: 'प्रसव पूर्व देखभाल' }, description: { en: 'Pregnancy Care', hi: 'गर्भावस्था देखभाल' }, icon: '🤰', color: '#ed64a6', questionsCount: 80, difficulty: 'Medium', weightage: 2 },
      { id: 'postnatal-care', name: { en: 'Postnatal Care', hi: 'प्रसव पश्चात देखभाल' }, description: { en: 'Post Delivery Care', hi: 'प्रसव के बाद देखभाल' }, icon: '👩‍🍼', color: '#d53f8c', questionsCount: 60, difficulty: 'Medium', weightage: 2 },
      { id: 'child-development', name: { en: 'Child Development', hi: 'बाल विकास' }, description: { en: 'Growth Milestones', hi: 'विकास के पड़ाव' }, icon: '👶', color: '#48bb78', questionsCount: 80, difficulty: 'Medium', weightage: 2 },
      { id: 'breastfeeding', name: { en: 'Breastfeeding', hi: 'स्तनपान' }, description: { en: 'Infant Nutrition', hi: 'शिशु पोषण' }, icon: '🍼', color: '#4299e1', questionsCount: 40, difficulty: 'Easy', weightage: 1 },
      { id: 'child-diseases', name: { en: 'Child Diseases', hi: 'बाल रोग' }, description: { en: 'Common Child Illnesses', hi: 'सामान्य बाल रोग' }, icon: '🤒', color: '#ed8936', questionsCount: 40, difficulty: 'Medium', weightage: 1 }
    ]
  },
  {
    id: 'immunization',
    name: { en: 'Immunization', hi: 'टीकाकरण' },
    icon: '💉',
    color: '#38a169',
    description: {
      en: 'Vaccines, Schedule, Cold Chain, Immunization Programs',
      hi: 'टीके, अनुसूची, कोल्ड चेन, टीकाकरण कार्यक्रम'
    },
    questions: 6,
    marks: 6,
    weightage: 6,
    topics: [
      { id: 'vaccine-types', name: { en: 'Vaccine Types', hi: 'टीकों के प्रकार' }, description: { en: 'Different Vaccines', hi: 'विभिन्न टीके' }, icon: '💉', color: '#38a169', questionsCount: 80, difficulty: 'Medium', weightage: 2 },
      { id: 'immunization-schedule', name: { en: 'Immunization Schedule', hi: 'टीकाकरण अनुसूची' }, description: { en: 'Vaccine Schedule', hi: 'टीका अनुसूची' }, icon: '📅', color: '#667eea', questionsCount: 100, difficulty: 'Easy', weightage: 2 },
      { id: 'cold-chain', name: { en: 'Cold Chain', hi: 'कोल्ड चेन' }, description: { en: 'Vaccine Storage', hi: 'टीका भंडारण' }, icon: '❄️', color: '#4299e1', questionsCount: 60, difficulty: 'Medium', weightage: 1 },
      { id: 'adverse-effects', name: { en: 'Adverse Effects', hi: 'दुष्प्रभाव' }, description: { en: 'Vaccine Reactions', hi: 'टीका प्रतिक्रियाएं' }, icon: '⚠️', color: '#ed8936', questionsCount: 40, difficulty: 'Medium', weightage: 1 }
    ]
  },
  {
    id: 'nutrition',
    name: { en: 'Nutrition', hi: 'पोषण' },
    icon: '🥗',
    color: '#48bb78',
    description: {
      en: 'Nutrients, Balanced Diet, Malnutrition, Deficiency Diseases',
      hi: 'पोषक तत्व, संतुलित आहार, कुपोषण, कमी रोग'
    },
    questions: 5,
    marks: 5,
    weightage: 5,
    topics: [
      { id: 'nutrients', name: { en: 'Nutrients', hi: 'पोषक तत्व' }, description: { en: 'Vitamins, Minerals', hi: 'विटामिन, खनिज' }, icon: '🥬', color: '#48bb78', questionsCount: 80, difficulty: 'Medium', weightage: 2 },
      { id: 'balanced-diet', name: { en: 'Balanced Diet', hi: 'संतुलित आहार' }, description: { en: 'Diet Planning', hi: 'आहार नियोजन' }, icon: '🍽️', color: '#38a169', questionsCount: 50, difficulty: 'Easy', weightage: 1 },
      { id: 'malnutrition', name: { en: 'Malnutrition', hi: 'कुपोषण' }, description: { en: 'Nutritional Disorders', hi: 'पोषण संबंधी विकार' }, icon: '⚠️', color: '#ed8936', questionsCount: 60, difficulty: 'Medium', weightage: 1 },
      { id: 'nutrition-programs', name: { en: 'Nutrition Programs', hi: 'पोषण कार्यक्रम' }, description: { en: 'Govt Nutrition Schemes', hi: 'सरकारी पोषण योजनाएं' }, icon: '🏛️', color: '#667eea', questionsCount: 40, difficulty: 'Medium', weightage: 1 }
    ]
  },
  {
    id: 'mental-health',
    name: { en: 'Mental Health', hi: 'मानसिक स्वास्थ्य' },
    icon: '🧠',
    color: '#667eea',
    description: {
      en: 'Psychology Basics, Mental Disorders, Counseling',
      hi: 'मनोविज्ञान की मूल बातें, मानसिक विकार, परामर्श'
    },
    questions: 4,
    marks: 4,
    weightage: 4,
    topics: [
      { id: 'mental-health-basics', name: { en: 'Mental Health Basics', hi: 'मानसिक स्वास्थ्य की मूल बातें' }, description: { en: 'Introduction to Mental Health', hi: 'मानसिक स्वास्थ्य का परिचय' }, icon: '🧠', color: '#667eea', questionsCount: 60, difficulty: 'Medium', weightage: 1 },
      { id: 'mental-disorders', name: { en: 'Mental Disorders', hi: 'मानसिक विकार' }, description: { en: 'Types of Mental Illness', hi: 'मानसिक बीमारियों के प्रकार' }, icon: '🏥', color: '#805ad5', questionsCount: 60, difficulty: 'Medium', weightage: 1 },
      { id: 'counseling', name: { en: 'Counseling', hi: 'परामर्श' }, description: { en: 'Counseling Techniques', hi: 'परामर्श तकनीकें' }, icon: '💬', color: '#48bb78', questionsCount: 40, difficulty: 'Easy', weightage: 1 },
      { id: 'stress-management', name: { en: 'Stress Management', hi: 'तनाव प्रबंधन' }, description: { en: 'Managing Stress', hi: 'तनाव को प्रबंधित करना' }, icon: '😌', color: '#38b2ac', questionsCount: 40, difficulty: 'Easy', weightage: 1 }
    ]
  },
  {
    id: 'communicable-diseases',
    name: { en: 'Communicable Diseases', hi: 'संचारी रोग' },
    icon: '🔬',
    color: '#c53030',
    description: {
      en: 'Infectious Diseases, Transmission, Prevention',
      hi: 'संक्रामक रोग, संचरण, रोकथाम'
    },
    questions: 6,
    marks: 6,
    weightage: 6,
    topics: [
      { id: 'airborne-diseases', name: { en: 'Airborne Diseases', hi: 'वायुजनित रोग' }, description: { en: 'TB, Influenza, COVID', hi: 'TB, इन्फ्लूएंजा, COVID' }, icon: '🌬️', color: '#4299e1', questionsCount: 80, difficulty: 'Medium', weightage: 2 },
      { id: 'waterborne-diseases', name: { en: 'Waterborne Diseases', hi: 'जलजनित रोग' }, description: { en: 'Cholera, Typhoid', hi: 'हैजा, टाइफाइड' }, icon: '💧', color: '#38b2ac', questionsCount: 60, difficulty: 'Medium', weightage: 1 },
      { id: 'vector-borne-diseases', name: { en: 'Vector-borne Diseases', hi: 'वेक्टर जनित रोग' }, description: { en: 'Malaria, Dengue', hi: 'मलेरिया, डेंगू' }, icon: '🦟', color: '#ed8936', questionsCount: 80, difficulty: 'Medium', weightage: 2 },
      { id: 'stds', name: { en: 'STDs/RTIs', hi: 'यौन संचारित रोग' }, description: { en: 'HIV/AIDS, Syphilis', hi: 'HIV/AIDS, सिफलिस' }, icon: '⚠️', color: '#e53e3e', questionsCount: 60, difficulty: 'Medium', weightage: 1 }
    ]
  },
  {
    id: 'health-education',
    name: { en: 'Health Education', hi: 'स्वास्थ्य शिक्षा' },
    icon: '📢',
    color: '#9f7aea',
    description: {
      en: 'Health Communication, IEC Materials, Behavior Change',
      hi: 'स्वास्थ्य संचार, IEC सामग्री, व्यवहार परिवर्तन'
    },
    questions: 4,
    marks: 4,
    weightage: 4,
    topics: [
      { id: 'communication-methods', name: { en: 'Communication Methods', hi: 'संचार विधियाँ' }, description: { en: 'Health Communication', hi: 'स्वास्थ्य संचार' }, icon: '📢', color: '#9f7aea', questionsCount: 60, difficulty: 'Easy', weightage: 1 },
      { id: 'iec-materials', name: { en: 'IEC Materials', hi: 'IEC सामग्री' }, description: { en: 'Educational Materials', hi: 'शैक्षिक सामग्री' }, icon: '📚', color: '#667eea', questionsCount: 50, difficulty: 'Easy', weightage: 1 },
      { id: 'bcc', name: { en: 'Behavior Change Communication', hi: 'व्यवहार परिवर्तन संचार' }, description: { en: 'Changing Health Behavior', hi: 'स्वास्थ्य व्यवहार बदलना' }, icon: '🔄', color: '#48bb78', questionsCount: 40, difficulty: 'Medium', weightage: 1 },
      { id: 'av-aids', name: { en: 'Audio-Visual Aids', hi: 'श्रव्य-दृश्य साधन' }, description: { en: 'Teaching Aids', hi: 'शिक्षण सहायक' }, icon: '📽️', color: '#ed8936', questionsCount: 30, difficulty: 'Easy', weightage: 1 }
    ]
  }
];

export const getSubjectById = (id: string): Subject | undefined => {
  return subjects.find(s => s.id === id);
};

export const getTopicById = (subjectId: string, topicId: string): Topic | undefined => {
  const subject = getSubjectById(subjectId);
  return subject?.topics.find(t => t.id === topicId);
};

export const getAllTopics = (): { subject: Subject; topic: Topic }[] => {
  const result: { subject: Subject; topic: Topic }[] = [];
  subjects.forEach(subject => {
    subject.topics.forEach(topic => {
      result.push({ subject, topic });
    });
  });
  return result;
};

export const getTotalQuestions = (): number => {
  return subjects.reduce((sum, subject) => 
    sum + subject.topics.reduce((topicSum, topic) => topicSum + topic.questionsCount, 0), 0
  );
};
