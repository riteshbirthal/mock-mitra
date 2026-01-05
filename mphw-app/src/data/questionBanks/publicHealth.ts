import { Question, QuestionBank } from './types';

// @ts-ignore - Large question bank
export const publicHealthQuestions: Question[] = [
  {
    "id": "PUBLIC-HEALTH-001",
    "questionEn": "Public health primarily focuses on:",
    "questionHi": "जन स्वास्थ्य (Public Health) की परिभाषा क्या है?",
    "optionsEn": [
      "Individual patient treatment",
      "Population health",
      "Hospital management",
      "Drug development"
    ],
    "optionsHi": [
      "केवल व्यक्तिगत उपचार",
      "समुदाय के स्वास्थ्य को बनाए रखने और सुधारने का विज्ञान और कला",
      "केवल अस्पताल सेवाएं",
      "केवल दवाइयां"
    ],
    "correctAnswer": 1,
    "explanationEn": "Public health focuses on protecting and improving the health of entire populations, unlike clinical medicine which treats individuals.",
    "explanationHi": "Public health = population health।",
    "difficulty": "easy",
    "topic": "public-health",
    "subtopic": "Introduction to Public Health",
    "tags": [
      "introduction-to-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-002",
    "questionEn": "Which is NOT a core function of public health?",
    "questionHi": "WHO के अनुसार स्वास्थ्य की परिभाषा क्या है?",
    "optionsEn": [
      "Assessment",
      "Policy development",
      "Surgery",
      "Assurance"
    ],
    "optionsHi": [
      "रोग का अभाव",
      "शारीरिक, मानसिक और सामाजिक रूप से पूर्ण कल्याण की स्थिति",
      "केवल शारीरिक स्वास्थ्य",
      "दवाई न लेना"
    ],
    "correctAnswer": 2,
    "explanationEn": "The three core functions of public health are Assessment, Policy Development, and Assurance. Surgery is a clinical intervention.",
    "explanationHi": "WHO 1948 definition।",
    "difficulty": "easy",
    "topic": "public-health",
    "subtopic": "Introduction to Public Health",
    "tags": [
      "introduction-to-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-003",
    "questionEn": "The concept of 'prevention is better than cure' is central to:",
    "questionHi": "WHO की स्थापना कब हुई?",
    "optionsEn": [
      "Curative medicine",
      "Public health",
      "Emergency care",
      "Palliative care"
    ],
    "optionsHi": [
      "1945",
      "1948",
      "1950",
      "1960"
    ],
    "correctAnswer": 1,
    "explanationEn": "Public health emphasizes prevention of disease rather than treatment, making it more cost-effective and impactful at population level.",
    "explanationHi": "7 April 1948 - World Health Day।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Introduction to Public Health",
    "tags": [
      "introduction-to-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-004",
    "questionEn": "MPHW stands for:",
    "questionHi": "WHO का मुख्यालय कहां है?",
    "optionsEn": [
      "Medical Public Health Worker",
      "Multipurpose Health Worker",
      "Municipal Public Health Worker",
      "Main Primary Health Worker"
    ],
    "optionsHi": [
      "न्यूयॉर्क",
      "जेनेवा",
      "पेरिस",
      "लंदन"
    ],
    "correctAnswer": 1,
    "explanationEn": "MPHW stands for Multipurpose Health Worker, a key functionary at the Sub-Centre level in India's primary healthcare system.",
    "explanationHi": "Geneva, Switzerland।",
    "difficulty": "easy",
    "topic": "public-health",
    "subtopic": "Introduction to Public Health",
    "tags": [
      "introduction-to-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-005",
    "questionEn": "The eradication of smallpox in 1980 is considered a major achievement of:",
    "questionHi": "स्वास्थ्य के निर्धारक (Determinants of Health) में क्या शामिल है?",
    "optionsEn": [
      "Clinical medicine",
      "Public health",
      "Traditional medicine",
      "Emergency medicine"
    ],
    "optionsHi": [
      "केवल आनुवंशिकता",
      "आनुवंशिकता, पर्यावरण, जीवनशैली, स्वास्थ्य सेवाएं",
      "केवल दवाइयां",
      "केवल डॉक्टर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Smallpox eradication was achieved through public health measures including surveillance, vaccination campaigns, and case isolation.",
    "explanationHi": "Multiple determinants।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Introduction to Public Health",
    "tags": [
      "introduction-to-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-006",
    "questionEn": "According to WHO, health is:",
    "questionHi": "स्वास्थ्य के सामाजिक निर्धारक (Social Determinants) में क्या शामिल है?",
    "optionsEn": [
      "Absence of disease",
      "Physical wellbeing only",
      "Complete physical, mental and social wellbeing",
      "Being able to work"
    ],
    "optionsHi": [
      "केवल जीन",
      "शिक्षा, आय, रोजगार, आवास, सामाजिक स्थिति",
      "केवल अस्पताल",
      "केवल दवाई"
    ],
    "correctAnswer": 2,
    "explanationEn": "WHO defines health as 'a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity.'",
    "explanationHi": "Social factors affecting health।",
    "difficulty": "easy",
    "topic": "public-health",
    "subtopic": "Health & Disease Concepts",
    "tags": [
      "health-&-disease-concepts"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-007",
    "questionEn": "The epidemiological triad consists of:",
    "questionHi": "प्राथमिक स्वास्थ्य देखभाल (Primary Health Care) की अवधारणा कब और कहां आई?",
    "optionsEn": [
      "Doctor, patient, hospital",
      "Agent, host, environment",
      "Prevention, treatment, cure",
      "Primary, secondary, tertiary"
    ],
    "optionsHi": [
      "1948 जेनेवा",
      "1978 अल्मा-आटा",
      "1986 ओटावा",
      "2000 दिल्ली"
    ],
    "correctAnswer": 1,
    "explanationEn": "The epidemiological triad explains disease causation through the interaction of disease agent, susceptible host, and environment.",
    "explanationHi": "Alma-Ata Declaration, Kazakhstan।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health & Disease Concepts",
    "tags": [
      "health-&-disease-concepts"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-008",
    "questionEn": "Which is a social determinant of health?",
    "questionHi": "अल्मा-आटा घोषणा का नारा क्या था?",
    "optionsEn": [
      "Virus",
      "Bacteria",
      "Income and education",
      "Climate"
    ],
    "optionsHi": [
      "स्वास्थ्य सबके लिए 2000",
      "स्वास्थ्य सबके लिए 2025",
      "केवल अमीरों के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Social determinants include income, education, employment, social support - factors that influence health but are not biological agents.",
    "explanationHi": "Health for All by 2000।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health & Disease Concepts",
    "tags": [
      "health-&-disease-concepts"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-009",
    "questionEn": "The health-disease continuum implies that:",
    "questionHi": "प्राथमिक स्वास्थ्य देखभाल के 8 तत्व में क्या शामिल नहीं है?",
    "optionsEn": [
      "You are either healthy or sick",
      "Health and disease exist on a spectrum",
      "Disease always leads to death",
      "Prevention is impossible"
    ],
    "optionsHi": [
      "स्वास्थ्य शिक्षा",
      "टीकाकरण",
      "MCH",
      "हृदय प्रत्यारोपण"
    ],
    "correctAnswer": 1,
    "explanationEn": "The health-disease continuum shows health and disease are not absolute states but exist on a continuous spectrum.",
    "explanationHi": "PHC = basic essential services।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health & Disease Concepts",
    "tags": [
      "health-&-disease-concepts"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-010",
    "questionEn": "Which factor belongs to the 'environment' component of the epidemiological triad?",
    "questionHi": "PHC के 8 तत्वों में कौन शामिल है?",
    "optionsEn": [
      "Nutritional status",
      "Genetic makeup",
      "Overcrowding",
      "Age"
    ],
    "optionsHi": [
      "MRI स्कैन",
      "स्वास्थ्य शिक्षा, पोषण, जल-स्वच्छता, MCH, टीकाकरण, स्थानिक रोग नियंत्रण, आवश्यक दवाएं, सामान्य रोग उपचार",
      "केवल सर्जरी",
      "केवल ICU"
    ],
    "correctAnswer": 2,
    "explanationEn": "Environmental factors include physical (climate, geography), biological (vectors), and social (overcrowding) conditions.",
    "explanationHi": "8 elements of PHC।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Health & Disease Concepts",
    "tags": [
      "health-&-disease-concepts"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-011",
    "questionEn": "Immunization is an example of which level of prevention?",
    "questionHi": "स्वास्थ्य संवर्धन (Health Promotion) पर ओटावा चार्टर कब आया?",
    "optionsEn": [
      "Primordial",
      "Primary",
      "Secondary",
      "Tertiary"
    ],
    "optionsHi": [
      "1978",
      "1986",
      "2000",
      "2015"
    ],
    "correctAnswer": 1,
    "explanationEn": "Primary prevention protects healthy people from getting disease. Immunization prevents infection before it occurs.",
    "explanationHi": "Ottawa Charter 1986।",
    "difficulty": "easy",
    "topic": "public-health",
    "subtopic": "Levels of Prevention",
    "tags": [
      "levels-of-prevention"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-012",
    "questionEn": "Screening programs to detect early cancer are an example of:",
    "questionHi": "रोग रोकथाम के स्तर कितने हैं?",
    "optionsEn": [
      "Primordial prevention",
      "Primary prevention",
      "Secondary prevention",
      "Tertiary prevention"
    ],
    "optionsHi": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "explanationEn": "Secondary prevention involves early detection of disease before symptoms appear, allowing early treatment and better outcomes.",
    "explanationHi": "Primary, Secondary, Tertiary prevention।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Levels of Prevention",
    "tags": [
      "levels-of-prevention"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-013",
    "questionEn": "Rehabilitation of a stroke patient to prevent disability is:",
    "questionHi": "प्राथमिक रोकथाम (Primary Prevention) का उदाहरण क्या है?",
    "optionsEn": [
      "Primordial prevention",
      "Primary prevention",
      "Secondary prevention",
      "Tertiary prevention"
    ],
    "optionsHi": [
      "स्क्रीनिंग",
      "टीकाकरण",
      "पुनर्वास",
      "सर्जरी"
    ],
    "correctAnswer": 3,
    "explanationEn": "Tertiary prevention aims to reduce disability and complications in people who already have disease.",
    "explanationHi": "Preventing disease before it occurs।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Levels of Prevention",
    "tags": [
      "levels-of-prevention"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-014",
    "questionEn": "Primordial prevention aims to:",
    "questionHi": "द्वितीयक रोकथाम (Secondary Prevention) का उदाहरण क्या है?",
    "optionsEn": [
      "Treat existing disease",
      "Detect disease early",
      "Prevent emergence of risk factors",
      "Rehabilitate patients"
    ],
    "optionsHi": [
      "टीकाकरण",
      "स्क्रीनिंग और शीघ्र निदान",
      "पुनर्वास",
      "स्वास्थ्य शिक्षा"
    ],
    "correctAnswer": 2,
    "explanationEn": "Primordial prevention prevents the emergence of risk factors themselves - e.g., promoting healthy lifestyles before unhealthy habits develop.",
    "explanationHi": "Early detection and treatment।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Levels of Prevention",
    "tags": [
      "levels-of-prevention"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-015",
    "questionEn": "Chlorination of water supply is which type of prevention?",
    "questionHi": "तृतीयक रोकथाम (Tertiary Prevention) का उदाहरण क्या है?",
    "optionsEn": [
      "Primordial",
      "Primary",
      "Secondary",
      "Tertiary"
    ],
    "optionsHi": [
      "टीकाकरण",
      "स्क्रीनिंग",
      "पुनर्वास और विकलांगता सीमित करना",
      "हाथ धोना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Water chlorination prevents infection by killing pathogens - this is primary prevention protecting healthy people.",
    "explanationHi": "Rehabilitation, limiting disability।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Levels of Prevention",
    "tags": [
      "levels-of-prevention"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-016",
    "questionEn": "Pap smear for cervical cancer screening is:",
    "questionHi": "Primordial Prevention क्या है?",
    "optionsEn": [
      "Primary prevention",
      "Secondary prevention",
      "Tertiary prevention",
      "Primordial prevention"
    ],
    "optionsHi": [
      "रोग के बाद",
      "जोखिम कारक ही न पनपने देना",
      "स्क्रीनिंग",
      "उपचार"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pap smear detects pre-cancerous and early cancer changes before symptoms appear - a secondary prevention measure.",
    "explanationHi": "Preventing risk factors from developing।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Levels of Prevention",
    "tags": [
      "levels-of-prevention"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-017",
    "questionEn": "Which prevents the emergence of risk factors in a population?",
    "questionHi": "महामारी विज्ञान (Epidemiology) क्या है?",
    "optionsEn": [
      "Primary prevention",
      "Secondary prevention",
      "Tertiary prevention",
      "Primordial prevention"
    ],
    "optionsHi": [
      "दवाई का अध्ययन",
      "जनसंख्या में रोग वितरण और निर्धारकों का अध्ययन",
      "सर्जरी",
      "केवल प्रयोगशाला"
    ],
    "correctAnswer": 3,
    "explanationEn": "Primordial prevention targets underlying social and environmental conditions that lead to risk factor development.",
    "explanationHi": "Study of disease distribution।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Levels of Prevention",
    "tags": [
      "levels-of-prevention"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-018",
    "questionEn": "Epidemiology is the study of:",
    "questionHi": "Incidence Rate क्या मापती है?",
    "optionsEn": [
      "Skin diseases",
      "Distribution and determinants of disease in populations",
      "Epidemic diseases only",
      "Laboratory diagnosis"
    ],
    "optionsHi": [
      "कुल मामले",
      "निश्चित समय में नए मामलों की दर",
      "पुराने मामले",
      "मृत्यु"
    ],
    "correctAnswer": 1,
    "explanationEn": "Epidemiology studies who gets disease (distribution), why they get it (determinants), and applies this to disease control.",
    "explanationHi": "New cases in a time period।",
    "difficulty": "easy",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-019",
    "questionEn": "Incidence rate measures:",
    "questionHi": "Prevalence Rate क्या मापती है?",
    "optionsEn": [
      "Total existing cases",
      "New cases occurring in a time period",
      "Deaths from disease",
      "Recovered cases"
    ],
    "optionsHi": [
      "केवल नए मामले",
      "किसी समय पर कुल मौजूदा मामले (पुराने + नए)",
      "केवल मृत्यु",
      "केवल जन्म"
    ],
    "correctAnswer": 1,
    "explanationEn": "Incidence measures the occurrence of NEW cases in a population during a specific time period.",
    "explanationHi": "Total cases at a point in time।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-020",
    "questionEn": "Prevalence measures:",
    "questionHi": "Endemic क्या है?",
    "optionsEn": [
      "Only new cases",
      "All existing cases at a point in time",
      "Only deaths",
      "Only recovered cases"
    ],
    "optionsHi": [
      "नया प्रकोप",
      "किसी क्षेत्र में रोग का निरंतर उपस्थित रहना",
      "विश्वव्यापी",
      "कोई रोग नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Prevalence measures all cases (new and old) existing in a population at a particular point or period of time.",
    "explanationHi": "Constant presence in an area।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-021",
    "questionEn": "In a village of 5000, 100 people have diabetes (old cases) and 20 new cases were diagnosed this year. The prevalence is:",
    "questionHi": "Epidemic क्या है?",
    "optionsEn": [
      "20/5000",
      "100/5000",
      "120/5000",
      "20/100"
    ],
    "optionsHi": [
      "सामान्य स्तर",
      "अपेक्षा से अधिक मामलों का अचानक बढ़ना",
      "विश्वव्यापी",
      "कोई रोग नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Prevalence includes ALL existing cases (old + new). So it's 100 + 20 = 120 out of 5000 population.",
    "explanationHi": "Sudden increase above expected।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-022",
    "questionEn": "The mortality rate is calculated per:",
    "questionHi": "Pandemic क्या है?",
    "optionsEn": [
      "100 population",
      "1,000 population",
      "10,000 population",
      "Any of the above depending on disease"
    ],
    "optionsHi": [
      "एक गांव में",
      "एक देश में",
      "कई देशों/महाद्वीपों में फैली महामारी",
      "कोई रोग नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Crude mortality rate is typically expressed per 1,000 population per year.",
    "explanationHi": "COVID-19 was a pandemic।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-023",
    "questionEn": "In an outbreak investigation, the first step is:",
    "questionHi": "Sporadic का अर्थ क्या है?",
    "optionsEn": [
      "Implement control measures",
      "Verify the outbreak",
      "Collect samples",
      "Report to media"
    ],
    "optionsHi": [
      "निरंतर",
      "छिटपुट/कभी-कभी होने वाले मामले",
      "महामारी",
      "विश्वव्यापी"
    ],
    "correctAnswer": 1,
    "explanationEn": "First step is to verify that an outbreak is actually occurring - confirm cases are real and numbers exceed expected levels.",
    "explanationHi": "Occasional cases।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-024",
    "questionEn": "An epidemic is:",
    "questionHi": "Morbidity Rate क्या है?",
    "optionsEn": [
      "A disease always present in an area",
      "An increase of cases above expected levels",
      "A global disease spread",
      "A disease affecting animals"
    ],
    "optionsHi": [
      "मृत्यु दर",
      "रुग्णता दर (बीमार होने की दर)",
      "जन्म दर",
      "प्रजनन दर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Epidemic (outbreak) means occurrence of disease clearly in excess of normal expectancy in a community or region.",
    "explanationHi": "Rate of disease/illness।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-025",
    "questionEn": "Endemic disease means:",
    "questionHi": "Mortality Rate क्या है?",
    "optionsEn": [
      "Disease from another country",
      "Constant presence of disease in an area",
      "Epidemic spread",
      "Disease in animals"
    ],
    "optionsHi": [
      "रुग्णता दर",
      "मृत्यु दर",
      "जन्म दर",
      "प्रजनन दर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Endemic refers to the constant presence of a disease at baseline level within a geographic area.",
    "explanationHi": "Rate of death।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-026",
    "questionEn": "The basic unit of primary healthcare in rural India is:",
    "questionHi": "Case Fatality Rate (CFR) क्या मापती है?",
    "optionsEn": [
      "District Hospital",
      "CHC",
      "PHC",
      "Sub-Centre"
    ],
    "optionsHi": [
      "कुल मृत्यु",
      "किसी रोग से ग्रस्त लोगों में मृत्यु का अनुपात",
      "जन्म दर",
      "रुग्णता"
    ],
    "correctAnswer": 3,
    "explanationEn": "Sub-Centre is the most peripheral and first contact point between the primary healthcare system and the community.",
    "explanationHi": "Deaths among cases।",
    "difficulty": "easy",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-027",
    "questionEn": "Population norm for a Sub-Centre in plain areas is:",
    "questionHi": "Crude Death Rate (CDR) की गणना कैसे होती है?",
    "optionsEn": [
      "3,000",
      "5,000",
      "30,000",
      "120,000"
    ],
    "optionsHi": [
      "जन्म/जनसंख्या",
      "कुल मृत्यु/कुल जनसंख्या × 1000",
      "रोगी/जनसंख्या",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "One Sub-Centre is established for every 5,000 population in plain areas and 3,000 in hilly/tribal areas.",
    "explanationHi": "Deaths per 1000 population।",
    "difficulty": "easy",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-028",
    "questionEn": "A PHC covers population of (in plain areas):",
    "questionHi": "Infant Mortality Rate (IMR) क्या है?",
    "optionsEn": [
      "5,000",
      "20,000",
      "30,000",
      "120,000"
    ],
    "optionsHi": [
      "5 वर्ष से कम मृत्यु",
      "1 वर्ष से कम आयु में मृत्यु प्रति 1000 जीवित जन्म",
      "मातृ मृत्यु",
      "सभी मृत्यु"
    ],
    "correctAnswer": 2,
    "explanationEn": "One PHC is established for 30,000 population in plain areas and 20,000 in hilly/tribal areas.",
    "explanationHi": "Deaths <1 year per 1000 live births।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-029",
    "questionEn": "A CHC should have how many beds?",
    "questionHi": "भारत का वर्तमान IMR (SRS 2020) लगभग कितना है?",
    "optionsEn": [
      "4-6 beds",
      "10 beds",
      "30 beds",
      "100 beds"
    ],
    "optionsHi": [
      "10",
      "28",
      "50",
      "100"
    ],
    "correctAnswer": 2,
    "explanationEn": "A Community Health Centre is a 30-bedded facility with specialists and serves as First Referral Unit.",
    "explanationHi": "IMR ~28 per 1000 live births।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-030",
    "questionEn": "The staff at a Sub-Centre includes:",
    "questionHi": "Neonatal Mortality Rate (NMR) किस अवधि की मृत्यु मापती है?",
    "optionsEn": [
      "Only doctor",
      "ANM and MPHW",
      "Specialists only",
      "Only nurses"
    ],
    "optionsHi": [
      "1 वर्ष",
      "28 दिन के भीतर",
      "5 वर्ष",
      "1 सप्ताह"
    ],
    "correctAnswer": 1,
    "explanationEn": "A Sub-Centre is staffed by one ANM (Auxiliary Nurse Midwife) and one MPHW (Male Health Worker).",
    "explanationHi": "Deaths in first 28 days।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-031",
    "questionEn": "India's healthcare delivery system has how many tiers?",
    "questionHi": "Under-5 Mortality Rate (U5MR) क्या है?",
    "optionsEn": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "optionsHi": [
      "1 वर्ष से कम",
      "5 वर्ष से कम आयु में मृत्यु प्रति 1000 जीवित जन्म",
      "10 वर्ष से कम",
      "वयस्क मृत्यु"
    ],
    "correctAnswer": 1,
    "explanationEn": "India has a three-tier system: Primary (SC, PHC, CHC), Secondary (SDH, DH), and Tertiary (Medical College).",
    "explanationHi": "Deaths <5 years per 1000 live births।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-032",
    "questionEn": "Which specialist is NOT required at a CHC?",
    "questionHi": "Maternal Mortality Ratio (MMR) क्या मापता है?",
    "optionsEn": [
      "Surgeon",
      "Physician",
      "OB-GYN",
      "Cardiologist"
    ],
    "optionsHi": [
      "शिशु मृत्यु",
      "गर्भावस्था/प्रसव संबंधी मातृ मृत्यु प्रति 1 लाख जीवित जन्म",
      "वृद्ध मृत्यु",
      "दुर्घटना मृत्यु"
    ],
    "correctAnswer": 3,
    "explanationEn": "CHC should have 4 specialists: General Surgeon, Physician, OB-GYN, and Pediatrician. Cardiologist is at tertiary level.",
    "explanationHi": "Maternal deaths per 100,000 live births।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-033",
    "questionEn": "The referral number for emergency ambulance in India is:",
    "questionHi": "भारत का वर्तमान MMR (SRS 2018-20) लगभग कितना है?",
    "optionsEn": [
      "100",
      "102",
      "108",
      "104"
    ],
    "optionsHi": [
      "50",
      "97",
      "200",
      "500"
    ],
    "correctAnswer": 2,
    "explanationEn": "108 is the emergency ambulance service. 102 is for pregnant women transport. 104 is for health helpline.",
    "explanationHi": "MMR ~97 per 100,000 live births।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-034",
    "questionEn": "Health & Wellness Centres are:",
    "questionHi": "Crude Birth Rate (CBR) क्या है?",
    "optionsEn": [
      "New hospitals",
      "Upgraded Sub-Centres/PHCs",
      "Private clinics",
      "Specialty centers"
    ],
    "optionsHi": [
      "मृत्यु दर",
      "प्रति 1000 जनसंख्या पर जीवित जन्म",
      "प्रजनन दर",
      "विकास दर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Under Ayushman Bharat, Sub-Centres and PHCs are upgraded to HWCs providing comprehensive primary healthcare.",
    "explanationHi": "Births per 1000 population।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-035",
    "questionEn": "Which is NOT a function of Sub-Centre?",
    "questionHi": "Total Fertility Rate (TFR) क्या है?",
    "optionsEn": [
      "Immunization",
      "ANC checkup",
      "Major surgery",
      "Health education"
    ],
    "optionsHi": [
      "जन्म दर",
      "एक महिला द्वारा प्रजनन आयु में जन्मे बच्चों की औसत संख्या",
      "मृत्यु दर",
      "विवाह दर"
    ],
    "correctAnswer": 2,
    "explanationEn": "Sub-Centres provide basic preventive and promotive services. Major surgeries are done at CHC/DH level.",
    "explanationHi": "Average children per woman।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-036",
    "questionEn": "The main focus of public health is:",
    "questionHi": "Replacement Level Fertility कितना है?",
    "optionsEn": [
      "Curing diseases",
      "Preventing diseases",
      "Building hospitals",
      "Training doctors"
    ],
    "optionsHi": [
      "1.0",
      "2.1",
      "3.0",
      "4.0"
    ],
    "correctAnswer": 1,
    "explanationEn": "Public health emphasizes prevention and health promotion rather than curative services.",
    "explanationHi": "TFR needed to replace population।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Introduction to Public Health",
    "tags": [
      "introduction-to-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-037",
    "questionEn": "Which is an example of host factor in disease causation?",
    "questionHi": "भारत का वर्तमान TFR (NFHS-5) कितना है?",
    "optionsEn": [
      "Malaria parasite",
      "Overcrowding",
      "Immunity status",
      "Temperature"
    ],
    "optionsHi": [
      "1.5",
      "2.0",
      "3.0",
      "4.0"
    ],
    "correctAnswer": 2,
    "explanationEn": "Host factors include age, sex, genetics, immunity, nutrition, and behavior - characteristics of the individual.",
    "explanationHi": "TFR = 2.0 (below replacement)।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health & Disease Concepts",
    "tags": [
      "health-&-disease-concepts"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-038",
    "questionEn": "In the epidemiological triad, a mosquito carrying malaria parasite is a/an:",
    "questionHi": "Life Expectancy at Birth क्या है?",
    "optionsEn": [
      "Host",
      "Agent",
      "Environment",
      "Vector"
    ],
    "optionsHi": [
      "मृत्यु आयु",
      "जन्म के समय अपेक्षित औसत जीवनकाल",
      "बीमारी की अवधि",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Vectors like mosquitoes are part of the environment - they transmit agents (parasites) from one host to another.",
    "explanationHi": "Expected years of life at birth।",
    "difficulty": "easy",
    "topic": "public-health",
    "subtopic": "Health & Disease Concepts",
    "tags": [
      "health-&-disease-concepts"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-039",
    "questionEn": "A pandemic is:",
    "questionHi": "भारत में Life Expectancy at Birth (2021) लगभग कितनी है?",
    "optionsEn": [
      "Local outbreak",
      "Disease in one country",
      "Worldwide epidemic",
      "Disease in animals"
    ],
    "optionsHi": [
      "50 वर्ष",
      "70 वर्ष",
      "80 वर्ष",
      "90 वर्ष"
    ],
    "correctAnswer": 2,
    "explanationEn": "Pandemic refers to an epidemic that has spread across multiple countries or continents, affecting many people.",
    "explanationHi": "~70 years in India।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-040",
    "questionEn": "Case fatality rate measures:",
    "questionHi": "DALY (Disability Adjusted Life Year) क्या मापता है?",
    "optionsEn": [
      "Deaths per population",
      "Deaths among all cases of a disease",
      "New cases per year",
      "Total prevalence"
    ],
    "optionsHi": [
      "केवल मृत्यु",
      "रोग के कारण खोए गए स्वस्थ जीवन वर्ष",
      "केवल विकलांगता",
      "आय"
    ],
    "correctAnswer": 1,
    "explanationEn": "Case Fatality Rate = (Deaths from disease / Total cases of disease) × 100. It measures disease severity.",
    "explanationHi": "Years lost due to ill-health।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-041",
    "questionEn": "ASHA stands for:",
    "questionHi": "QALY (Quality Adjusted Life Year) क्या है?",
    "optionsEn": [
      "Auxiliary Social Health Assistant",
      "Accredited Social Health Activist",
      "Approved Social Health Agent",
      "Area Social Health Administrator"
    ],
    "optionsHi": [
      "केवल जीवन वर्ष",
      "गुणवत्ता-समायोजित जीवन वर्ष",
      "केवल मृत्यु",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ASHA (Accredited Social Health Activist) is a community health volunteer serving as link between community and health system.",
    "explanationHi": "Life years adjusted for quality।",
    "difficulty": "easy",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-042",
    "questionEn": "One ASHA is appointed for every:",
    "questionHi": "जनसांख्यिकीय संक्रमण (Demographic Transition) में क्या होता है?",
    "optionsEn": [
      "500 population",
      "1,000 population",
      "5,000 population",
      "10,000 population"
    ],
    "optionsHi": [
      "जन्म और मृत्यु दर समान",
      "उच्च जन्म-मृत्यु से निम्न जन्म-मृत्यु दर की ओर परिवर्तन",
      "केवल मृत्यु बढ़ती है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "One ASHA is selected for every 1,000 population (or one per village in smaller habitations).",
    "explanationHi": "Transition in birth and death rates।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-043",
    "questionEn": "The apex referral facility in a district is:",
    "questionHi": "महामारी विज्ञान संक्रमण (Epidemiological Transition) में क्या होता है?",
    "optionsEn": [
      "PHC",
      "CHC",
      "District Hospital",
      "Sub-Centre"
    ],
    "optionsHi": [
      "संक्रामक रोग बढ़ते हैं",
      "संक्रामक से गैर-संक्रामक रोगों की ओर बदलाव",
      "कोई बदलाव नहीं",
      "केवल दुर्घटनाएं"
    ],
    "correctAnswer": 2,
    "explanationEn": "District Hospital is the apex referral center for the district, providing secondary level specialist care.",
    "explanationHi": "Shift from CD to NCD।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-044",
    "questionEn": "Health education about tobacco harms to prevent people from starting smoking is:",
    "questionHi": "भारत में जनगणना कितने वर्षों में होती है?",
    "optionsEn": [
      "Primary prevention",
      "Secondary prevention",
      "Tertiary prevention",
      "Primordial prevention"
    ],
    "optionsHi": [
      "5 वर्ष",
      "10 वर्ष",
      "15 वर्ष",
      "20 वर्ष"
    ],
    "correctAnswer": 3,
    "explanationEn": "Preventing the emergence of risk factors (starting to smoke) is primordial prevention - acting before risk develops.",
    "explanationHi": "Decennial census।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Levels of Prevention",
    "tags": [
      "levels-of-prevention"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-045",
    "questionEn": "DOTS for TB treatment to prevent spread is an example of:",
    "questionHi": "भारत की पहली जनगणना कब हुई?",
    "optionsEn": [
      "Primordial prevention",
      "Primary prevention",
      "Secondary prevention",
      "Tertiary prevention"
    ],
    "optionsHi": [
      "1872",
      "1881",
      "1901",
      "1951"
    ],
    "correctAnswer": 2,
    "explanationEn": "Early treatment of TB cases prevents complications and stops spread - this is secondary prevention.",
    "explanationHi": "First synchronous census 1881।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Levels of Prevention",
    "tags": [
      "levels-of-prevention"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-046",
    "questionEn": "Attack rate is used to describe:",
    "questionHi": "भारत की जनसंख्या (2011 जनगणना) लगभग कितनी है?",
    "optionsEn": [
      "Chronic disease frequency",
      "Outbreak/epidemic situations",
      "Death rates",
      "Birth rates"
    ],
    "optionsHi": [
      "100 करोड़",
      "121 करोड़",
      "140 करोड़",
      "150 करोड़"
    ],
    "correctAnswer": 1,
    "explanationEn": "Attack rate is a type of incidence used specifically during outbreaks to measure proportion of exposed persons who become ill.",
    "explanationHi": "1.21 billion in 2011।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-047",
    "questionEn": "In a food poisoning outbreak at a wedding, 100 people ate fish and 40 became ill. The attack rate is:",
    "questionHi": "SRS (Sample Registration System) क्या है?",
    "optionsEn": [
      "40%",
      "60%",
      "100%",
      "140%"
    ],
    "optionsHi": [
      "जनगणना",
      "जन्म और मृत्यु के नमूना पंजीकरण की प्रणाली",
      "सर्वेक्षण नहीं",
      "केवल शहरी"
    ],
    "correctAnswer": 0,
    "explanationEn": "Attack rate = (Number ill / Number exposed) × 100 = (40/100) × 100 = 40%",
    "explanationHi": "Sample registration for vital stats।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-048",
    "questionEn": "First Referral Unit (FRU) services are available at:",
    "questionHi": "NFHS (National Family Health Survey) का उद्देश्य क्या है?",
    "optionsEn": [
      "Sub-Centre",
      "PHC",
      "CHC",
      "All of the above"
    ],
    "optionsHi": [
      "जनगणना",
      "परिवार स्वास्थ्य और जनसंख्या संकेतकों का सर्वेक्षण",
      "केवल आय",
      "केवल शिक्षा"
    ],
    "correctAnswer": 2,
    "explanationEn": "CHC functions as First Referral Unit providing 24x7 emergency obstetric care, surgery, and blood storage.",
    "explanationHi": "Family health survey।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-049",
    "questionEn": "The Medical Officer at PHC supervises:",
    "questionHi": "NFHS-5 कब आयोजित हुआ?",
    "optionsEn": [
      "Only the PHC staff",
      "PHC and attached Sub-Centres",
      "District Hospital",
      "Medical College"
    ],
    "optionsHi": [
      "2015-16",
      "2019-21",
      "2022-23",
      "2010-11"
    ],
    "correctAnswer": 1,
    "explanationEn": "The PHC Medical Officer is responsible for the PHC and typically 5-6 Sub-Centres under the PHC's jurisdiction.",
    "explanationHi": "NFHS-5: 2019-21।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-050",
    "questionEn": "Which is NOT an essential public health service?",
    "questionHi": "DLHS (District Level Household Survey) का फोकस क्या है?",
    "optionsEn": [
      "Monitor health status",
      "Diagnose and investigate problems",
      "Provide individual psychotherapy",
      "Mobilize community partnerships"
    ],
    "optionsHi": [
      "राष्ट्रीय",
      "जिला स्तर पर स्वास्थ्य और परिवार कल्याण डेटा",
      "केवल शहर",
      "केवल गांव"
    ],
    "correctAnswer": 2,
    "explanationEn": "Essential public health services focus on population-level activities. Individual therapy is clinical care.",
    "explanationHi": "District-level health data।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Introduction to Public Health",
    "tags": [
      "introduction-to-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-051",
    "questionEn": "List any four social determinants of health.",
    "questionHi": "रोग निगरानी (Disease Surveillance) का उद्देश्य क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "केवल गिनती",
      "रोग प्रवृत्तियों की निगरानी, प्रकोप पहचान, नियंत्रण उपाय",
      "केवल उपचार",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Monitor trends, detect outbreaks।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health & Disease Concepts",
    "tags": [
      "health-&-disease-concepts"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-052",
    "questionEn": "Define primary, secondary, and tertiary prevention with one example each.",
    "questionHi": "IDSP (Integrated Disease Surveillance Programme) कब शुरू हुआ?",
    "optionsEn": [],
    "optionsHi": [
      "1997",
      "2004",
      "2010",
      "2015"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "IDSP started 2004।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Levels of Prevention",
    "tags": [
      "levels-of-prevention"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-053",
    "questionEn": "What is the difference between incidence and prevalence?",
    "questionHi": "IDSP में S, P, L फॉर्म क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "केवल एक फॉर्म",
      "S=Syndromic, P=Presumptive, L=Lab-confirmed",
      "कोई फॉर्म नहीं",
      "केवल L"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Three reporting formats।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-054",
    "questionEn": "Describe the three-tier healthcare system in India.",
    "questionHi": "प्रकोप (Outbreak) की परिभाषा क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "सामान्य मामले",
      "अपेक्षित संख्या से अधिक मामलों का होना",
      "कोई मामला नहीं",
      "केवल एक मामला"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "More cases than expected।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-055",
    "questionEn": "What are the core functions of public health?",
    "questionHi": "प्रकोप जांच के चरण क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "केवल उपचार",
      "तैयारी → पुष्टि → केस परिभाषा → केस खोज → विश्लेषण → परिकल्पना → नियंत्रण → रिपोर्ट",
      "कुछ नहीं",
      "केवल रिपोर्ट"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Systematic investigation steps।",
    "difficulty": "easy",
    "topic": "public-health",
    "subtopic": "Introduction to Public Health",
    "tags": [
      "introduction-to-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-056",
    "questionEn": "Calculate the incidence rate: In a village of 10,000 people, 50 new cases of dengue occurred in one month.",
    "questionHi": "Attack Rate क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "मृत्यु दर",
      "प्रकोप में जोखिम वाली जनसंख्या में बीमार होने की दर",
      "जन्म दर",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Rate of illness in outbreak।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-057",
    "questionEn": "List the key services provided at a Sub-Centre.",
    "questionHi": "Herd Immunity क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "व्यक्तिगत प्रतिरक्षा",
      "जनसंख्या का पर्याप्त अनुपात प्रतिरक्षित होने से रोग फैलाव रुकना",
      "कोई प्रतिरक्षा नहीं",
      "केवल जानवरों में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Population immunity।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-058",
    "questionEn": "Give three examples of primordial prevention.",
    "questionHi": "R0 (Basic Reproduction Number) क्या दर्शाता है?",
    "optionsEn": [],
    "optionsHi": [
      "मृत्यु",
      "एक संक्रमित व्यक्ति कितने लोगों को संक्रमित कर सकता है",
      "जन्म",
      "टीकाकरण"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Transmissibility measure।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Levels of Prevention",
    "tags": [
      "levels-of-prevention"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-059",
    "questionEn": "What is a case definition and why is it important in outbreak investigation?",
    "questionHi": "यदि R0 > 1 हो तो क्या होगा?",
    "optionsEn": [],
    "optionsHi": [
      "रोग समाप्त",
      "रोग फैलेगा",
      "कोई प्रभाव नहीं",
      "जनसंख्या घटेगी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Disease spreads if R0>1।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-060",
    "questionEn": "What is the role of ASHA in the healthcare system?",
    "questionHi": "संगरोध (Quarantine) और पृथक्करण (Isolation) में क्या अंतर है?",
    "optionsEn": [],
    "optionsHi": [
      "एक ही है",
      "Quarantine=स्वस्थ संपर्क, Isolation=बीमार व्यक्ति",
      "Quarantine=बीमार",
      "कोई अंतर नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Quarantine for contacts, Isolation for cases।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-061",
    "questionEn": "A village of 3000 population has high infant mortality. As an MPHW, what public health approach would you take to address this problem?",
    "questionHi": "Contact Tracing क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "फोन नंबर",
      "संक्रमित व्यक्ति के संपर्कों की पहचान और निगरानी",
      "केवल परिवार",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Identifying and monitoring contacts।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Introduction to Public Health",
    "tags": [
      "introduction-to-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-062",
    "questionEn": "In your Sub-Centre area, you notice 15 cases of acute diarrhea in one week, while normally you see only 2-3 cases. What should you do?",
    "questionHi": "Active Surveillance क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "रिपोर्ट का इंतजार",
      "सक्रिय रूप से मामलों की खोज",
      "कोई निगरानी नहीं",
      "केवल अस्पताल में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Actively searching for cases।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-063",
    "questionEn": "A pregnant woman in her 8th month has severe headache and blurred vision. She comes to Sub-Centre. What should you do?",
    "questionHi": "Passive Surveillance क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "सक्रिय खोज",
      "स्वास्थ्य सुविधाओं से आने वाली रिपोर्ट पर निर्भर",
      "कोई रिपोर्ट नहीं",
      "केवल घर पर"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Relying on reports coming in।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-064",
    "questionEn": "Design a prevention program for diabetes in your village covering all three levels of prevention.",
    "questionHi": "Sentinel Surveillance क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "सभी स्थान",
      "चुनिंदा स्थानों पर गहन निगरानी",
      "कोई निगरानी नहीं",
      "केवल ग्रामीण"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Intensive surveillance at selected sites।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Levels of Prevention",
    "tags": [
      "levels-of-prevention"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-065",
    "questionEn": "An unconscious patient is brought to your Sub-Centre. Describe your immediate actions and referral process.",
    "questionHi": "Notifiable Disease क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "कोई भी रोग",
      "जिसकी सूचना कानूनी रूप से देना अनिवार्य है",
      "केवल सर्दी",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Legally required to report।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-066",
    "questionEn": "Which historical event is considered the birth of modern public health?",
    "questionHi": "भारत में कौन सा रोग Notifiable है?",
    "optionsEn": [
      "Discovery of antibiotics",
      "John Snow's cholera investigation",
      "Invention of vaccines",
      "Building of hospitals"
    ],
    "optionsHi": [
      "सामान्य सर्दी",
      "हैजा, प्लेग, पीला बुखार",
      "सिर दर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "John Snow's investigation of the 1854 Broad Street cholera outbreak in London demonstrated epidemiological methods and the importance of clean water.",
    "explanationHi": "IHR notifiable diseases।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Introduction to Public Health",
    "tags": [
      "introduction-to-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-067",
    "questionEn": "The WHO definition of health was given in the year:",
    "questionHi": "IHR (International Health Regulations) क्या है?",
    "optionsEn": [
      "1946",
      "1948",
      "1950",
      "1978"
    ],
    "optionsHi": [
      "राष्ट्रीय कानून",
      "अंतर्राष्ट्रीय स्वास्थ्य आपातकाल के लिए WHO नियम",
      "केवल भारत के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WHO defined health in its 1948 constitution as 'a state of complete physical, mental and social well-being.'",
    "explanationHi": "International health regulations।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health & Disease Concepts",
    "tags": [
      "health-&-disease-concepts"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-068",
    "questionEn": "Iceberg phenomenon of disease refers to:",
    "questionHi": "PHEIC (Public Health Emergency of International Concern) क्या है?",
    "optionsEn": [
      "Cold-related diseases",
      "Majority of cases remaining undiagnosed",
      "Rare diseases",
      "Genetic disorders"
    ],
    "optionsHi": [
      "स्थानीय समस्या",
      "अंतर्राष्ट्रीय चिंता का जन स्वास्थ्य आपातकाल (WHO घोषणा)",
      "कोई आपातकाल नहीं",
      "केवल भारत में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Iceberg phenomenon: visible cases (tip) represent only a fraction; most cases (underwater part) are undiagnosed or subclinical.",
    "explanationHi": "COVID-19 was declared PHEIC।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health & Disease Concepts",
    "tags": [
      "health-&-disease-concepts"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-069",
    "questionEn": "In the natural history of disease, the period from exposure to onset of symptoms is called:",
    "questionHi": "One Health का क्या अर्थ है?",
    "optionsEn": [
      "Clinical period",
      "Incubation period",
      "Period of communicability",
      "Convalescence"
    ],
    "optionsHi": [
      "केवल मानव स्वास्थ्य",
      "मानव, पशु और पर्यावरण स्वास्थ्य का एकीकृत दृष्टिकोण",
      "केवल पशु",
      "केवल पर्यावरण"
    ],
    "correctAnswer": 1,
    "explanationEn": "Incubation period is the time interval between initial infection and appearance of first symptoms of disease.",
    "explanationHi": "Human-animal-environment health।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Health & Disease Concepts",
    "tags": [
      "health-&-disease-concepts"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-070",
    "questionEn": "A descriptive study answers which question?",
    "questionHi": "Zoonosis क्या है?",
    "optionsEn": [
      "Why did disease occur?",
      "Who is affected and where?",
      "What caused the outbreak?",
      "How to treat disease?"
    ],
    "optionsHi": [
      "मानव से मानव",
      "पशुओं से मनुष्यों में फैलने वाले रोग",
      "पौधों से",
      "हवा से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Descriptive epidemiology describes distribution by person (who), place (where), and time (when). Analytical studies explore causes (why).",
    "explanationHi": "Animal to human diseases।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-071",
    "questionEn": "Which study design is best for investigating a food poisoning outbreak?",
    "questionHi": "रेबीज, इन्फ्लुएंजा, लेप्टोस्पायरोसिस में क्या समानता है?",
    "optionsEn": [
      "Cohort study",
      "Case-control study",
      "Cross-sectional study",
      "Randomized trial"
    ],
    "optionsHi": [
      "सभी वायरल",
      "सभी Zoonotic रोग हैं",
      "सभी जल जनित",
      "कोई समानता नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Case-control studies compare exposures between cases and non-cases, ideal for rapid outbreak investigation when cases are identified.",
    "explanationHi": "All are zoonoses।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-072",
    "questionEn": "Secondary attack rate is calculated among:",
    "questionHi": "भारत में जन स्वास्थ्य का संवैधानिक प्रावधान किस सूची में है?",
    "optionsEn": [
      "All population",
      "Household contacts of cases",
      "Healthcare workers",
      "Travelers"
    ],
    "optionsHi": [
      "संघ सूची",
      "राज्य सूची",
      "समवर्ती सूची",
      "कोई सूची नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Secondary attack rate measures new cases among close contacts (usually household) of primary cases, indicating transmissibility.",
    "explanationHi": "Health is state subject।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-073",
    "questionEn": "The population norm for a CHC in plain areas is:",
    "questionHi": "केंद्रीय स्वास्थ्य मंत्रालय का पूरा नाम क्या है?",
    "optionsEn": [
      "30,000",
      "80,000",
      "120,000",
      "500,000"
    ],
    "optionsHi": [
      "स्वास्थ्य मंत्रालय",
      "स्वास्थ्य और परिवार कल्याण मंत्रालय",
      "चिकित्सा मंत्रालय",
      "अस्पताल मंत्रालय"
    ],
    "correctAnswer": 2,
    "explanationEn": "One CHC covers 120,000 population in plain areas and 80,000 in hilly/tribal areas.",
    "explanationHi": "Ministry of Health and Family Welfare।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-074",
    "questionEn": "Private sector accounts for approximately what percentage of outpatient care in India?",
    "questionHi": "DGHS का पूर्ण रूप क्या है?",
    "optionsEn": [
      "30%",
      "50%",
      "70%",
      "90%"
    ],
    "optionsHi": [
      "Director General Health",
      "Directorate General of Health Services",
      "District General",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Despite public health infrastructure, the private sector provides 60-70% of outpatient care in India due to accessibility and perceived quality.",
    "explanationHi": "Central technical authority।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-075",
    "questionEn": "102 ambulance service is specifically for:",
    "questionHi": "ICMR का पूर्ण रूप और कार्य क्या है?",
    "optionsEn": [
      "All emergencies",
      "Pregnant women transport",
      "Accident victims",
      "Child emergencies"
    ],
    "optionsHi": [
      "Indian Council of Medical Research - चिकित्सा अनुसंधान",
      "Indian College Medical",
      "कुछ नहीं",
      "केवल अस्पताल"
    ],
    "correctAnswer": 1,
    "explanationEn": "102 ambulance service (Janani Express) provides free transport for pregnant women to health facilities for delivery.",
    "explanationHi": "Medical research body।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-076",
    "questionEn": "The Alma Ata Declaration (1978) is associated with:",
    "questionHi": "NIHFW का पूर्ण रूप क्या है?",
    "optionsEn": [
      "Hospital care",
      "Primary Health Care",
      "Tertiary care",
      "Emergency services"
    ],
    "optionsHi": [
      "National Institute Health Family Welfare",
      "National Institute of Health and Family Welfare",
      "कुछ नहीं",
      "केवल परिवार"
    ],
    "correctAnswer": 1,
    "explanationEn": "The 1978 Alma Ata Declaration called for 'Health for All by 2000' through Primary Health Care as the key strategy.",
    "explanationHi": "Training and research institute।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Introduction to Public Health",
    "tags": [
      "introduction-to-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-077",
    "questionEn": "Contact tracing in TB is an example of:",
    "questionHi": "NCDC का पूर्ण रूप और कार्य क्या है?",
    "optionsEn": [
      "Primordial prevention",
      "Primary prevention",
      "Secondary prevention",
      "Tertiary prevention"
    ],
    "optionsHi": [
      "National Centre Disease Control - रोग नियंत्रण",
      "National College",
      "कुछ नहीं",
      "केवल शिक्षा"
    ],
    "correctAnswer": 2,
    "explanationEn": "Contact tracing identifies early/latent infections for treatment before disease progresses - secondary prevention.",
    "explanationHi": "Disease surveillance and control।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Levels of Prevention",
    "tags": [
      "levels-of-prevention"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-078",
    "questionEn": "Use of protective footwear to prevent hookworm infection is:",
    "questionHi": "NHM (National Health Mission) कब शुरू हुआ?",
    "optionsEn": [
      "Primordial prevention",
      "Primary prevention",
      "Secondary prevention",
      "Tertiary prevention"
    ],
    "optionsHi": [
      "2005",
      "2013",
      "2020",
      "2000"
    ],
    "correctAnswer": 1,
    "explanationEn": "Protective footwear prevents entry of hookworm larvae through skin - this protects healthy people (primary prevention).",
    "explanationHi": "NHM 2013 (NRHM 2005 + NUHM)।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Levels of Prevention",
    "tags": [
      "levels-of-prevention"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-079",
    "questionEn": "Crude death rate does NOT account for:",
    "questionHi": "NRHM (National Rural Health Mission) कब शुरू हुआ?",
    "optionsEn": [
      "Total deaths",
      "Total population",
      "Age distribution",
      "Time period"
    ],
    "optionsHi": [
      "2000",
      "2005",
      "2010",
      "2015"
    ],
    "correctAnswer": 2,
    "explanationEn": "Crude death rate is total deaths/total population - it doesn't adjust for age. Age-specific rates are needed for comparison.",
    "explanationHi": "NRHM launched 2005।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-080",
    "questionEn": "If a disease has high case fatality but low prevalence, what does this indicate?",
    "questionHi": "आयुष्मान भारत के दो घटक क्या हैं?",
    "optionsEn": [
      "Disease is mild",
      "Disease kills quickly or is rare",
      "Treatment is effective",
      "Disease is chronic"
    ],
    "optionsHi": [
      "केवल बीमा",
      "HWC (Health and Wellness Centres) और PM-JAY (बीमा)",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "High case fatality (many who get it die) + low prevalence (few total cases) suggests either rapid death or rare disease occurrence.",
    "explanationHi": "Two components of AB।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-081",
    "questionEn": "AWW stands for:",
    "questionHi": "PM-JAY (Ayushman Bharat - PMJAY) में कितना कवरेज है?",
    "optionsEn": [
      "Area Welfare Worker",
      "Anganwadi Worker",
      "Auxiliary Ward Worker",
      "Associated Woman Worker"
    ],
    "optionsHi": [
      "1 लाख",
      "5 लाख प्रति परिवार प्रति वर्ष",
      "10 लाख",
      "50 हजार"
    ],
    "correctAnswer": 1,
    "explanationEn": "AWW (Anganwadi Worker) provides nutrition and early childhood services under ICDS at the Anganwadi centre.",
    "explanationHi": "Rs 5 lakh coverage per family।",
    "difficulty": "easy",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-082",
    "questionEn": "MPHW directly reports to:",
    "questionHi": "HWC (Health and Wellness Centre) में कितनी सेवाएं दी जाती हैं?",
    "optionsEn": [
      "ASHA",
      "ANM",
      "Health Assistant/Supervisor",
      "District Medical Officer"
    ],
    "optionsHi": [
      "5",
      "12 (CPHC)",
      "20",
      "50"
    ],
    "correctAnswer": 2,
    "explanationEn": "MPHW reports to the Health Assistant (Male/Female) at PHC level, who in turn reports to the Medical Officer.",
    "explanationHi": "12 CPHC services।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-083",
    "questionEn": "Which is NOT a dimension of health according to WHO?",
    "questionHi": "राष्ट्रीय स्वास्थ्य नीति 2017 का मुख्य लक्ष्य क्या है?",
    "optionsEn": [
      "Physical",
      "Mental",
      "Financial",
      "Social"
    ],
    "optionsHi": [
      "केवल अस्पताल",
      "सार्वभौमिक स्वास्थ्य कवरेज (UHC)",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "WHO defines health with three dimensions: physical, mental, and social wellbeing. Financial status is a determinant but not a dimension.",
    "explanationHi": "Universal Health Coverage।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health & Disease Concepts",
    "tags": [
      "health-&-disease-concepts"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-084",
    "questionEn": "Biological agents causing disease include all EXCEPT:",
    "questionHi": "राष्ट्रीय स्वास्थ्य नीति 2017 में स्वास्थ्य पर GDP का कितना खर्च का लक्ष्य है?",
    "optionsEn": [
      "Bacteria",
      "Viruses",
      "Nutritional deficiencies",
      "Parasites"
    ],
    "optionsHi": [
      "1%",
      "2.5%",
      "5%",
      "10%"
    ],
    "correctAnswer": 2,
    "explanationEn": "Biological agents are living organisms (bacteria, viruses, parasites, fungi). Nutritional deficiencies are non-living factors.",
    "explanationHi": "Target 2.5% of GDP।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health & Disease Concepts",
    "tags": [
      "health-&-disease-concepts"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-085",
    "questionEn": "Point prevalence measures cases at:",
    "questionHi": "SDG (Sustainable Development Goals) कितने हैं?",
    "optionsEn": [
      "One specific time point",
      "Over a period of time",
      "Before disease onset",
      "After recovery"
    ],
    "optionsHi": [
      "8",
      "15",
      "17",
      "20"
    ],
    "correctAnswer": 0,
    "explanationEn": "Point prevalence counts all cases existing at one specific moment in time, like a snapshot.",
    "explanationHi": "17 SDGs by 2030।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-086",
    "questionEn": "For a chronic disease with long duration, which is typically higher?",
    "questionHi": "SDG 3 का क्या लक्ष्य है?",
    "optionsEn": [
      "Incidence",
      "Prevalence",
      "Attack rate",
      "Case fatality"
    ],
    "optionsHi": [
      "शिक्षा",
      "स्वस्थ जीवन और सभी के लिए कल्याण",
      "गरीबी",
      "जल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chronic diseases accumulate over time (people don't die or recover quickly), so prevalence exceeds incidence.",
    "explanationHi": "Good health and well-being।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-087",
    "questionEn": "Under Ayushman Bharat, PM-JAY provides coverage of:",
    "questionHi": "SDG लक्ष्य वर्ष क्या है?",
    "optionsEn": [
      "Rs 1 lakh per family",
      "Rs 3 lakh per family",
      "Rs 5 lakh per family",
      "Rs 10 lakh per family"
    ],
    "optionsHi": [
      "2025",
      "2030",
      "2040",
      "2050"
    ],
    "correctAnswer": 2,
    "explanationEn": "Pradhan Mantri Jan Arogya Yojana (PM-JAY) provides Rs 5 lakh per family per year for secondary and tertiary care hospitalization.",
    "explanationHi": "SDGs by 2030।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-088",
    "questionEn": "Health & Wellness Centres provide how many service packages?",
    "questionHi": "MDG (Millennium Development Goals) का लक्ष्य वर्ष क्या था?",
    "optionsEn": [
      "5",
      "8",
      "12",
      "15"
    ],
    "optionsHi": [
      "2000",
      "2015",
      "2020",
      "2030"
    ],
    "correctAnswer": 2,
    "explanationEn": "HWCs provide 12 service packages including maternal care, NCDs, mental health, oral health, eye care, elderly care, etc.",
    "explanationHi": "MDGs 2000-2015।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-089",
    "questionEn": "Self-care education for leprosy patients to prevent deformity is:",
    "questionHi": "स्वास्थ्य समानता (Health Equity) का क्या अर्थ है?",
    "optionsEn": [
      "Primary prevention",
      "Secondary prevention",
      "Tertiary prevention",
      "Primordial prevention"
    ],
    "optionsHi": [
      "सभी को समान दवाई",
      "सभी को स्वस्थ होने का समान अवसर, असमानताएं कम करना",
      "केवल अमीरों के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Preventing disability/deformity in someone who already has disease is tertiary prevention.",
    "explanationHi": "Fair opportunity for health।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Levels of Prevention",
    "tags": [
      "levels-of-prevention"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-090",
    "questionEn": "Newborn screening for metabolic disorders is:",
    "questionHi": "स्वास्थ्य असमानता (Health Disparity) क्या है?",
    "optionsEn": [
      "Primordial prevention",
      "Primary prevention",
      "Secondary prevention",
      "Tertiary prevention"
    ],
    "optionsHi": [
      "समानता",
      "विभिन्न समूहों में स्वास्थ्य परिणामों में अंतर",
      "कोई अंतर नहीं",
      "केवल आय में अंतर"
    ],
    "correctAnswer": 2,
    "explanationEn": "Screening detects disease early in asymptomatic phase - secondary prevention allows early treatment before complications.",
    "explanationHi": "Differences in health outcomes।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Levels of Prevention",
    "tags": [
      "levels-of-prevention"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-091",
    "questionEn": "Public health differs from clinical medicine primarily in its focus on:",
    "questionHi": "UHC (Universal Health Coverage) का क्या अर्थ है?",
    "optionsEn": [
      "Treatment methods",
      "Population vs individual",
      "Drug therapy",
      "Hospital care"
    ],
    "optionsHi": [
      "केवल अमीरों के लिए",
      "सभी को आवश्यक स्वास्थ्य सेवाएं बिना वित्तीय कठिनाई के",
      "केवल मुफ्त",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clinical medicine focuses on treating individual patients; public health focuses on improving health of entire populations.",
    "explanationHi": "Health services for all without hardship।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Introduction to Public Health",
    "tags": [
      "introduction-to-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-092",
    "questionEn": "A disease that can be transmitted from animals to humans is called:",
    "questionHi": "Out-of-Pocket Expenditure (OOPE) क्या है?",
    "optionsEn": [
      "Nosocomial infection",
      "Zoonosis",
      "Endemic disease",
      "Iatrogenic disease"
    ],
    "optionsHi": [
      "सरकारी खर्च",
      "स्वास्थ्य पर जेब से किया गया खर्च",
      "बीमा खर्च",
      "कोई खर्च नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Zoonotic diseases are transmitted from animals to humans (e.g., rabies, bird flu, COVID-19).",
    "explanationHi": "Direct payment by patients।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Health & Disease Concepts",
    "tags": [
      "health-&-disease-concepts"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-093",
    "questionEn": "The epidemiological term for a person who spreads disease without showing symptoms is:",
    "questionHi": "भारत में OOPE स्वास्थ्य खर्च का लगभग कितना प्रतिशत है?",
    "optionsEn": [
      "Case",
      "Contact",
      "Carrier",
      "Vector"
    ],
    "optionsHi": [
      "20%",
      "50-60%",
      "10%",
      "90%"
    ],
    "correctAnswer": 2,
    "explanationEn": "A carrier harbors and transmits disease-causing organisms without showing symptoms of disease.",
    "explanationHi": "High OOPE in India।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-094",
    "questionEn": "Herd immunity refers to:",
    "questionHi": "Catastrophic Health Expenditure क्या है?",
    "optionsEn": [
      "Individual immunity",
      "Immunity in cattle",
      "Community protection through high vaccination coverage",
      "Natural immunity"
    ],
    "optionsHi": [
      "कम खर्च",
      "स्वास्थ्य खर्च जो परिवार को गरीबी में धकेल दे",
      "सरकारी खर्च",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "When enough people are immune (through vaccination/infection), disease spread is limited, protecting even unvaccinated individuals.",
    "explanationHi": "Impoverishing health spending।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-095",
    "questionEn": "The first level of contact between individual and health system should ideally be:",
    "questionHi": "स्वास्थ्य बीमा का क्या लाभ है?",
    "optionsEn": [
      "District Hospital",
      "CHC",
      "PHC",
      "Sub-Centre"
    ],
    "optionsHi": [
      "कोई लाभ नहीं",
      "वित्तीय सुरक्षा, OOPE कम करना",
      "केवल डॉक्टर के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Sub-Centre is the most peripheral facility and should be the first point of contact for community members.",
    "explanationHi": "Financial protection।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-096",
    "questionEn": "New Born Care Corner (NBCC) is established at:",
    "questionHi": "ESIS (Employees' State Insurance Scheme) किसके लिए है?",
    "optionsEn": [
      "All delivery points",
      "Only District Hospitals",
      "Only Medical Colleges",
      "Only CHC"
    ],
    "optionsHi": [
      "सभी के लिए",
      "संगठित क्षेत्र के कर्मचारियों के लिए",
      "केवल सरकारी",
      "केवल किसान"
    ],
    "correctAnswer": 0,
    "explanationEn": "NBCC is established at all delivery points (PHC, CHC, DH) for immediate newborn care and resuscitation.",
    "explanationHi": "Social security for workers।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-097",
    "questionEn": "Iron-folic acid supplementation to pregnant women prevents:",
    "questionHi": "CGHS (Central Government Health Scheme) किसके लिए है?",
    "optionsEn": [
      "Diabetes",
      "Anemia",
      "Hypertension",
      "Obesity"
    ],
    "optionsHi": [
      "सभी",
      "केंद्रीय सरकारी कर्मचारियों के लिए",
      "केवल राज्य",
      "केवल किसान"
    ],
    "correctAnswer": 1,
    "explanationEn": "IFA supplementation during pregnancy prevents anemia and neural tube defects - this is primary prevention.",
    "explanationHi": "Central govt employees।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Levels of Prevention",
    "tags": [
      "levels-of-prevention"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-098",
    "questionEn": "In epidemiological studies, the term 'morbidity' refers to:",
    "questionHi": "Public-Private Partnership (PPP) स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Death rate",
      "Disease occurrence",
      "Birth rate",
      "Recovery rate"
    ],
    "optionsHi": [
      "केवल सरकारी",
      "सरकार और निजी क्षेत्र का सहयोग",
      "केवल निजी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Morbidity refers to the state of being diseased or unhealthy. Mortality refers to death.",
    "explanationHi": "Government-private collaboration।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Basic Epidemiology",
    "tags": [
      "basic-epidemiology"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-099",
    "questionEn": "SNCU (Special Newborn Care Unit) is available at:",
    "questionHi": "स्वास्थ्य के अधिकार (Right to Health) का क्या अर्थ है?",
    "optionsEn": [
      "Sub-Centre",
      "PHC",
      "CHC",
      "District Hospital"
    ],
    "optionsHi": [
      "मुफ्त दवाई",
      "प्रत्येक व्यक्ति का सर्वोच्च प्राप्य स्वास्थ्य स्तर का अधिकार",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "SNCU provides level 3 newborn care including ventilation and is established at District Hospital level.",
    "explanationHi": "Fundamental right to health।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Healthcare System in India",
    "tags": [
      "healthcare-system-in-india"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-100",
    "questionEn": "Which is a measure of public health success?",
    "questionHi": "जन स्वास्थ्य में MPHW की मुख्य भूमिका क्या है?",
    "optionsEn": [
      "Increase in hospital beds",
      "Decrease in disease incidence",
      "More doctors trained",
      "Higher drug sales"
    ],
    "optionsHi": [
      "सर्जरी करना",
      "समुदाय में स्वास्थ्य सेवाएं, निगरानी, शिक्षा, रोग नियंत्रण",
      "केवल दवाई देना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Public health success is measured by improved health outcomes like reduced disease occurrence, not just inputs like beds or staff.",
    "explanationHi": "Community health services।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Introduction to Public Health",
    "tags": [
      "introduction-to-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-101",
    "questionEn": "NHM stands for:",
    "questionHi": "भारत में त्रिस्तरीय स्वास्थ्य प्रणाली में प्राथमिक स्तर क्या है?",
    "optionsEn": [
      "National Hospital Mission",
      "National Health Ministry",
      "National Health Mission",
      "National Healthcare Management"
    ],
    "optionsHi": [
      "जिला अस्पताल",
      "उप-स्वास्थ्य केंद्र, PHC, HWC",
      "मेडिकल कॉलेज",
      "सुपर स्पेशलिटी"
    ],
    "correctAnswer": 2,
    "explanationEn": "NHM (National Health Mission) is the umbrella program for all public health programs in India.",
    "explanationHi": "Primary level = SC, PHC, HWC।",
    "difficulty": "easy",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-102",
    "questionEn": "NHM was formed by combining NRHM and NUHM in the year:",
    "questionHi": "द्वितीयक स्तर की स्वास्थ्य सुविधाएं क्या हैं?",
    "optionsEn": [
      "2005",
      "2010",
      "2013",
      "2018"
    ],
    "optionsHi": [
      "SC",
      "CHC, SDH, जिला अस्पताल",
      "मेडिकल कॉलेज",
      "PHC"
    ],
    "correctAnswer": 2,
    "explanationEn": "NHM was formed in 2013 by combining NRHM (National Rural Health Mission, 2005) and NUHM (National Urban Health Mission).",
    "explanationHi": "Secondary level = referral hospitals।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-103",
    "questionEn": "NRHM was launched in the year:",
    "questionHi": "तृतीयक स्तर की स्वास्थ्य सुविधाएं क्या हैं?",
    "optionsEn": [
      "2000",
      "2005",
      "2010",
      "2015"
    ],
    "optionsHi": [
      "SC",
      "PHC",
      "मेडिकल कॉलेज, सुपर स्पेशलिटी अस्पताल",
      "CHC"
    ],
    "correctAnswer": 1,
    "explanationEn": "NRHM (National Rural Health Mission) was launched in 2005 to improve rural healthcare access.",
    "explanationHi": "Tertiary = specialized care।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-104",
    "questionEn": "Which is NOT a goal of NHM?",
    "questionHi": "उप-स्वास्थ्य केंद्र (SC) की जनसंख्या कवरेज क्या है?",
    "optionsEn": [
      "Reduce maternal mortality",
      "Reduce infant mortality",
      "Build private hospitals",
      "Achieve population stabilization"
    ],
    "optionsHi": [
      "1000",
      "5000 (सामान्य), 3000 (पहाड़ी/जनजातीय)",
      "30000",
      "100000"
    ],
    "correctAnswer": 2,
    "explanationEn": "NHM focuses on strengthening public health system, not private hospitals. Goals include reducing MMR, IMR, and population stabilization.",
    "explanationHi": "SC population norms।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-105",
    "questionEn": "VHSNC meets at which level?",
    "questionHi": "PHC की जनसंख्या कवरेज क्या है?",
    "optionsEn": [
      "District",
      "Block",
      "PHC",
      "Village"
    ],
    "optionsHi": [
      "5000",
      "30000 (सामान्य), 20000 (पहाड़ी/जनजातीय)",
      "100000",
      "500000"
    ],
    "correctAnswer": 3,
    "explanationEn": "VHSNC (Village Health Sanitation & Nutrition Committee) operates at village level for community participation in health.",
    "explanationHi": "PHC population norms।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-106",
    "questionEn": "The untied fund given to VHSNC per year is:",
    "questionHi": "CHC की जनसंख्या कवरेज क्या है?",
    "optionsEn": [
      "Rs 5,000",
      "Rs 10,000",
      "Rs 25,000",
      "Rs 50,000"
    ],
    "optionsHi": [
      "30000",
      "80000",
      "120000 (सामान्य), 80000 (पहाड़ी/जनजातीय)",
      "500000"
    ],
    "correctAnswer": 1,
    "explanationEn": "VHSNC receives Rs 10,000 per year as untied fund to address local health needs as decided by the committee.",
    "explanationHi": "CHC population norms।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-107",
    "questionEn": "ASHA worker is primarily a:",
    "questionHi": "PHC में कितने बिस्तर होने चाहिए?",
    "optionsEn": [
      "Government employee",
      "Community volunteer",
      "NGO worker",
      "Hospital staff"
    ],
    "optionsHi": [
      "2",
      "4-6",
      "30",
      "100"
    ],
    "correctAnswer": 1,
    "explanationEn": "ASHA is a community volunteer (not a regular government employee) who receives performance-based incentives.",
    "explanationHi": "PHC = 4-6 beds।",
    "difficulty": "easy",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-108",
    "questionEn": "The minimum educational qualification for ASHA in most areas is:",
    "questionHi": "CHC में कितने बिस्तर होने चाहिए?",
    "optionsEn": [
      "5th pass",
      "8th pass",
      "10th pass",
      "12th pass"
    ],
    "optionsHi": [
      "6",
      "30",
      "100",
      "500"
    ],
    "correctAnswer": 1,
    "explanationEn": "ASHA should have passed 8th class (relaxable in tribal/difficult areas where educated women are scarce).",
    "explanationHi": "CHC = 30 beds।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-109",
    "questionEn": "How many ASHAs are there approximately in India?",
    "questionHi": "CHC में कितने विशेषज्ञ होने चाहिए?",
    "optionsEn": [
      "1 lakh",
      "5 lakh",
      "10 lakh",
      "20 lakh"
    ],
    "optionsHi": [
      "1",
      "4 (सर्जन, स्त्री रोग, बाल रोग, एनेस्थेटिस्ट)",
      "10",
      "20"
    ],
    "correctAnswer": 2,
    "explanationEn": "There are approximately 10 lakh (1 million) ASHAs working across India.",
    "explanationHi": "4 specialists at CHC।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-110",
    "questionEn": "The member secretary of VHSNC is:",
    "questionHi": "IPHS (Indian Public Health Standards) क्या है?",
    "optionsEn": [
      "Sarpanch",
      "ANM",
      "ASHA",
      "MPHW"
    ],
    "optionsHi": [
      "कानून",
      "स्वास्थ्य सुविधाओं के लिए गुणवत्ता मानक",
      "केवल शहरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "ASHA is the member secretary of VHSNC, responsible for maintaining records and organizing meetings.",
    "explanationHi": "Quality standards for facilities।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-111",
    "questionEn": "JSY stands for:",
    "questionHi": "HWC (Health and Wellness Centre) क्या है?",
    "optionsEn": [
      "Janani Suraksha Yojana",
      "Jeevan Suraksha Yojana",
      "Janata Swasthya Yojana",
      "Janak Seva Yojana"
    ],
    "optionsHi": [
      "अस्पताल",
      "SC/PHC का रूपांतरण जो CPHC प्रदान करता है",
      "केवल शहरी",
      "मेडिकल कॉलेज"
    ],
    "correctAnswer": 0,
    "explanationEn": "JSY (Janani Suraksha Yojana) provides cash incentive to promote institutional delivery.",
    "explanationHi": "Upgraded SC/PHC।",
    "difficulty": "easy",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-112",
    "questionEn": "JSY was launched in the year:",
    "questionHi": "CPHC (Comprehensive Primary Health Care) में कितनी सेवाएं हैं?",
    "optionsEn": [
      "2000",
      "2005",
      "2008",
      "2010"
    ],
    "optionsHi": [
      "5",
      "8",
      "12",
      "20"
    ],
    "correctAnswer": 1,
    "explanationEn": "JSY was launched in 2005 as part of NRHM to reduce maternal and neonatal mortality.",
    "explanationHi": "12 services at HWC।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-113",
    "questionEn": "Under JSY, the cash incentive for rural women in LPS states is:",
    "questionHi": "CHO (Community Health Officer) कौन है?",
    "optionsEn": [
      "Rs 500",
      "Rs 1000",
      "Rs 1400",
      "Rs 2000"
    ],
    "optionsHi": [
      "डॉक्टर",
      "HWC का प्रभारी (B.Sc./GNM + प्रशिक्षण)",
      "ASHA",
      "AWW"
    ],
    "correctAnswer": 2,
    "explanationEn": "In Low Performing States, rural women receive Rs 1400 for institutional delivery under JSY.",
    "explanationHi": "CHO leads HWC।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-114",
    "questionEn": "JSSK provides:",
    "questionHi": "ASHA कौन है?",
    "optionsEn": [
      "Cash incentive",
      "Free entitlements for delivery",
      "Insurance coverage",
      "Pension"
    ],
    "optionsHi": [
      "डॉक्टर",
      "मान्यता प्राप्त सामाजिक स्वास्थ्य कार्यकर्ता - समुदाय की कड़ी",
      "नर्स",
      "AWW"
    ],
    "correctAnswer": 1,
    "explanationEn": "JSSK (Janani Shishu Suraksha Karyakram) provides free delivery, drugs, diagnostics, blood, transport, and diet.",
    "explanationHi": "Community health activist।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-115",
    "questionEn": "PMSMA day is observed on which date every month?",
    "questionHi": "ASHA की जनसंख्या कवरेज क्या है?",
    "optionsEn": [
      "1st",
      "5th",
      "9th",
      "15th"
    ],
    "optionsHi": [
      "500",
      "1000 (सामान्य)",
      "5000",
      "10000"
    ],
    "correctAnswer": 2,
    "explanationEn": "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) provides quality ANC on 9th of every month.",
    "explanationHi": "1 ASHA per 1000 population।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-116",
    "questionEn": "Minimum number of ANC visits recommended is:",
    "questionHi": "ANM (Auxiliary Nurse Midwife) कहां कार्य करती है?",
    "optionsEn": [
      "2",
      "3",
      "4",
      "6"
    ],
    "optionsHi": [
      "CHC",
      "उप-स्वास्थ्य केंद्र/HWC",
      "जिला अस्पताल",
      "मेडिकल कॉलेज"
    ],
    "correctAnswer": 2,
    "explanationEn": "WHO and Government of India recommend minimum 4 ANC visits during pregnancy.",
    "explanationHi": "ANM at SC/HWC।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-117",
    "questionEn": "How many IFA tablets should a pregnant woman receive?",
    "questionHi": "AWW (Anganwadi Worker) किस विभाग से है?",
    "optionsEn": [
      "100",
      "150",
      "180",
      "200"
    ],
    "optionsHi": [
      "स्वास्थ्य विभाग",
      "महिला एवं बाल विकास विभाग",
      "शिक्षा विभाग",
      "कृषि"
    ],
    "correctAnswer": 2,
    "explanationEn": "A pregnant woman should receive 180 IFA tablets (1 daily for 6 months during pregnancy).",
    "explanationHi": "WCD department।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-118",
    "questionEn": "The green sticker in PMSMA risk stratification indicates:",
    "questionHi": "ICDS (Integrated Child Development Services) कब शुरू हुआ?",
    "optionsEn": [
      "High risk",
      "Moderate risk",
      "Low risk/normal",
      "Very high risk"
    ],
    "optionsHi": [
      "1965",
      "1975",
      "1985",
      "1995"
    ],
    "correctAnswer": 2,
    "explanationEn": "Green sticker = normal/low risk (can deliver at PHC). Yellow = some risk (CHC). Red = high risk (DH).",
    "explanationHi": "ICDS launched 1975।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-119",
    "questionEn": "HBNC stands for:",
    "questionHi": "ICDS की 6 सेवाएं क्या हैं?",
    "optionsEn": [
      "Hospital Based Newborn Care",
      "Home Based Newborn Care",
      "Health Based Nutrition Care",
      "High Birth Natal Care"
    ],
    "optionsHi": [
      "केवल पोषण",
      "पूरक पोषाहार, प्री-स्कूल शिक्षा, पोषण एवं स्वास्थ्य शिक्षा, टीकाकरण, स्वास्थ्य जांच, रेफरल",
      "केवल शिक्षा",
      "केवल टीकाकरण"
    ],
    "correctAnswer": 1,
    "explanationEn": "HBNC (Home Based Newborn Care) involves ASHA making home visits to newborns during first 42 days.",
    "explanationHi": "6 ICDS services।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-120",
    "questionEn": "How many home visits should ASHA make to a newborn in first 42 days?",
    "questionHi": "VHSNC (Village Health Sanitation and Nutrition Committee) में कौन शामिल है?",
    "optionsEn": [
      "3",
      "5",
      "7",
      "10"
    ],
    "optionsHi": [
      "केवल डॉक्टर",
      "PRI सदस्य, ASHA, AWW, ANM, समुदाय प्रतिनिधि",
      "केवल ASHA",
      "केवल सरकारी"
    ],
    "correctAnswer": 2,
    "explanationEn": "ASHA should make 7 visits: Day 1, 3, 7, 14, 21, 28, and 42 for Home Based Newborn Care.",
    "explanationHi": "Village health committee।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-121",
    "questionEn": "SNCU stands for:",
    "questionHi": "VHND (Village Health and Nutrition Day) कब आयोजित होता है?",
    "optionsEn": [
      "Sub-Centre Newborn Care Unit",
      "Special Newborn Care Unit",
      "Standard Neonatal Care Unit",
      "State Newborn Care Unit"
    ],
    "optionsHi": [
      "रोज़",
      "महीने में एक बार",
      "साल में एक बार",
      "कभी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SNCU (Special Newborn Care Unit) provides intensive care for sick newborns at district hospitals.",
    "explanationHi": "Monthly VHND।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-122",
    "questionEn": "NBSU is established at:",
    "questionHi": "VHND में क्या सेवाएं दी जाती हैं?",
    "optionsEn": [
      "Sub-Centre",
      "PHC",
      "CHC",
      "District Hospital"
    ],
    "optionsHi": [
      "सर्जरी",
      "ANC, टीकाकरण, पोषण, स्वास्थ्य शिक्षा",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "NBSU (Newborn Stabilization Unit) is at CHC level, providing stabilization before referral to SNCU.",
    "explanationHi": "MCH and health services।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-123",
    "questionEn": "IMNCI focuses on children of which age group?",
    "questionHi": "Rogi Kalyan Samiti (RKS) क्या है?",
    "optionsEn": [
      "0-1 year",
      "0-5 years",
      "5-10 years",
      "0-15 years"
    ],
    "optionsHi": [
      "रोगी संगठन",
      "स्वास्थ्य सुविधा प्रबंधन समिति",
      "केवल डॉक्टरों की",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "IMNCI (Integrated Management of Neonatal and Childhood Illness) targets children under 5 years.",
    "explanationHi": "Hospital management society।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-124",
    "questionEn": "RBSK screens children for:",
    "questionHi": "स्वास्थ्य सेवाओं में रेफरल प्रणाली का क्या महत्व है?",
    "optionsEn": [
      "1D",
      "2Ds",
      "3Ds",
      "4Ds"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "उचित स्तर पर उचित देखभाल, संसाधनों का सही उपयोग",
      "केवल बड़े अस्पताल के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "RBSK (Rashtriya Bal Swasthya Karyakram) screens for 4Ds: Defects, Deficiencies, Diseases, Developmental delays.",
    "explanationHi": "Appropriate care at appropriate level।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-125",
    "questionEn": "RKSK is for which age group?",
    "questionHi": "108/102 एम्बुलेंस सेवा क्या है?",
    "optionsEn": [
      "0-5 years",
      "5-10 years",
      "10-19 years",
      "15-45 years"
    ],
    "optionsHi": [
      "बस सेवा",
      "आपातकालीन/गर्भवती परिवहन सेवा",
      "ट्रेन",
      "विमान"
    ],
    "correctAnswer": 2,
    "explanationEn": "RKSK (Rashtriya Kishor Swasthya Karyakram) is the adolescent health program for ages 10-19 years.",
    "explanationHi": "Emergency transport।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-126",
    "questionEn": "WIFS provides iron-folic acid tablets:",
    "questionHi": "HMIS (Health Management Information System) क्या है?",
    "optionsEn": [
      "Daily",
      "Weekly",
      "Monthly",
      "Quarterly"
    ],
    "optionsHi": [
      "हॉस्पिटल",
      "स्वास्थ्य डेटा संग्रह और रिपोर्टिंग प्रणाली",
      "केवल फोन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WIFS (Weekly Iron Folic Acid Supplementation) provides one IFA tablet weekly to adolescents.",
    "explanationHi": "Health data system।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-127",
    "questionEn": "Breastfeeding should be initiated within how many hours of birth?",
    "questionHi": "ABDM (Ayushman Bharat Digital Mission) का उद्देश्य क्या है?",
    "optionsEn": [
      "1 hour",
      "6 hours",
      "12 hours",
      "24 hours"
    ],
    "optionsHi": [
      "केवल बीमा",
      "डिजिटल स्वास्थ्य पारिस्थितिकी तंत्र बनाना (Health ID, Records)",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Early initiation of breastfeeding within 1 hour of birth is crucial for both mother and baby.",
    "explanationHi": "Digital health ecosystem।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-128",
    "questionEn": "Exclusive breastfeeding is recommended for:",
    "questionHi": "ABHA (Ayushman Bharat Health Account) क्या है?",
    "optionsEn": [
      "3 months",
      "4 months",
      "6 months",
      "12 months"
    ],
    "optionsHi": [
      "बैंक खाता",
      "14 अंकों की स्वास्थ्य ID",
      "आधार",
      "पैन"
    ],
    "correctAnswer": 2,
    "explanationEn": "Exclusive breastfeeding (only breast milk, no water/other liquids) is recommended for first 6 months.",
    "explanationHi": "Health ID number।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-129",
    "questionEn": "The MAA Programme promotes:",
    "questionHi": "eVIN (Electronic Vaccine Intelligence Network) क्या है?",
    "optionsEn": [
      "Institutional delivery",
      "Breastfeeding",
      "Immunization",
      "Family planning"
    ],
    "optionsHi": [
      "वैक्सीन",
      "वैक्सीन स्टॉक और कोल्ड चेन निगरानी प्रणाली",
      "केवल इंटरनेट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MAA (Mothers' Absolute Affection) promotes breastfeeding - early initiation and exclusive breastfeeding for 6 months.",
    "explanationHi": "Vaccine logistics system।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-130",
    "questionEn": "PPIUCD is inserted:",
    "questionHi": "Co-WIN क्या है?",
    "optionsEn": [
      "Before delivery",
      "Within 48 hours of delivery",
      "After 6 weeks",
      "After 6 months"
    ],
    "optionsHi": [
      "गेम",
      "COVID-19 टीकाकरण प्रबंधन पोर्टल",
      "केवल रजिस्ट्रेशन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Post-Partum IUCD is inserted within 48 hours of delivery (ideally within 10 minutes of placental delivery).",
    "explanationHi": "COVID vaccination platform।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-131",
    "questionEn": "Ayushman Bharat has how many components?",
    "questionHi": "NIKSHAY क्या है?",
    "optionsEn": [
      "1",
      "2",
      "3",
      "4"
    ],
    "optionsHi": [
      "मलेरिया",
      "TB रोगी प्रबंधन और ट्रैकिंग पोर्टल",
      "HIV",
      "कुष्ठ"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ayushman Bharat has 2 components: Health & Wellness Centres (HWC) and PM-JAY (insurance scheme).",
    "explanationHi": "TB tracking system।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-132",
    "questionEn": "Community Health Officer (CHO) is posted at:",
    "questionHi": "RCH Portal क्या है?",
    "optionsEn": [
      "Sub-Centre",
      "Health & Wellness Centre",
      "PHC",
      "CHC"
    ],
    "optionsHi": [
      "रेडियो",
      "प्रजनन और बाल स्वास्थ्य ट्रैकिंग पोर्टल",
      "TV",
      "समाचार"
    ],
    "correctAnswer": 1,
    "explanationEn": "CHO is a mid-level health provider posted at HWCs to provide comprehensive primary healthcare services.",
    "explanationHi": "MCH tracking।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-133",
    "questionEn": "LPS in the context of JSY stands for:",
    "questionHi": "Aarogya Setu App क्या है?",
    "optionsEn": [
      "Low Priority States",
      "Low Performing States",
      "Large Population States",
      "Less Privileged States"
    ],
    "optionsHi": [
      "गेम",
      "COVID-19 संपर्क ट्रेसिंग और स्वास्थ्य सेवा ऐप",
      "बैंकिंग",
      "शॉपिंग"
    ],
    "correctAnswer": 1,
    "explanationEn": "LPS (Low Performing States) include states with high MMR/IMR like UP, Bihar, MP, Rajasthan, etc.",
    "explanationHi": "Contact tracing app।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-134",
    "questionEn": "ASHA receives Rs 600 under JSY for:",
    "questionHi": "eSanjeevani क्या है?",
    "optionsEn": [
      "Home delivery",
      "Accompanying woman for institutional delivery",
      "Post-natal visit",
      "Immunization"
    ],
    "optionsHi": [
      "अस्पताल",
      "टेलीमेडिसिन प्लेटफॉर्म",
      "दवाई",
      "प्रयोगशाला"
    ],
    "correctAnswer": 1,
    "explanationEn": "ASHA receives Rs 600 (rural) for accompanying pregnant woman to facility and staying during delivery.",
    "explanationHi": "Telemedicine service।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-135",
    "questionEn": "TT vaccination during pregnancy - how many doses for previously unvaccinated?",
    "questionHi": "टेलीमेडिसिन का क्या लाभ है?",
    "optionsEn": [
      "1 dose",
      "2 doses",
      "3 doses",
      "5 doses"
    ],
    "optionsHi": [
      "कोई लाभ नहीं",
      "दूरस्थ परामर्श, पहुंच बढ़ाना, समय बचाना",
      "केवल डॉक्टर के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Previously unvaccinated pregnant women need 2 TT doses with 4 weeks gap, first as early as possible.",
    "explanationHi": "Remote healthcare।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-136",
    "questionEn": "Delayed cord clamping means clamping the cord after:",
    "questionHi": "NTEP (National Tuberculosis Elimination Programme) का लक्ष्य क्या है?",
    "optionsEn": [
      "Immediately",
      "30 seconds",
      "1-3 minutes",
      "10 minutes"
    ],
    "optionsHi": [
      "TB बढ़ाना",
      "2025 तक भारत को TB मुक्त बनाना",
      "केवल उपचार",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Delayed cord clamping (1-3 minutes after birth) allows blood transfer to baby, reducing anemia.",
    "explanationHi": "TB elimination by 2025।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-137",
    "questionEn": "Kangaroo Mother Care involves:",
    "questionHi": "NVBDCP का पूर्ण रूप क्या है?",
    "optionsEn": [
      "Incubator care",
      "Skin-to-skin contact",
      "Bottle feeding",
      "Medication"
    ],
    "optionsHi": [
      "National Vaccine",
      "National Vector Borne Disease Control Programme",
      "National Virus",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "KMC involves holding the baby in skin-to-skin contact with mother, beneficial for preterm/low birth weight babies.",
    "explanationHi": "Vector-borne disease control।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-138",
    "questionEn": "First bath for newborn should ideally be delayed until:",
    "questionHi": "NVBDCP में कौन से रोग शामिल हैं?",
    "optionsEn": [
      "Immediately after birth",
      "6 hours",
      "24 hours",
      "1 week"
    ],
    "optionsHi": [
      "TB",
      "मलेरिया, डेंगू, चिकनगुनिया, JE, फाइलेरिया, काला-अजार",
      "HIV",
      "कुष्ठ"
    ],
    "correctAnswer": 2,
    "explanationEn": "Bathing should be delayed for at least 24 hours to maintain warmth and protect vernix.",
    "explanationHi": "6 vector-borne diseases।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-139",
    "questionEn": "What should be applied to newborn's umbilical cord?",
    "questionHi": "NLEP (National Leprosy Eradication Programme) का लक्ष्य क्या है?",
    "optionsEn": [
      "Ghee",
      "Antiseptic powder",
      "Oil",
      "Nothing (dry cord care)"
    ],
    "optionsHi": [
      "कुष्ठ बढ़ाना",
      "कुष्ठ उन्मूलन (<1/10000 prevalence)",
      "केवल उपचार",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Dry cord care is recommended - keep the cord clean and dry, do not apply any substance.",
    "explanationHi": "Leprosy elimination।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-140",
    "questionEn": "In IMNCI color coding, pink indicates:",
    "questionHi": "NACP (National AIDS Control Programme) का वर्तमान चरण क्या है?",
    "optionsEn": [
      "Home care",
      "Treatment at facility",
      "Urgent referral",
      "No treatment needed"
    ],
    "optionsHi": [
      "NACP-I",
      "NACP-IV",
      "NACP-V",
      "NACP-X"
    ],
    "correctAnswer": 2,
    "explanationEn": "IMNCI: Pink = urgent referral, Yellow = treat at facility, Green = home care with counseling.",
    "explanationHi": "NACP Phase 5।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-141",
    "questionEn": "Complementary feeding should start at:",
    "questionHi": "NPCDCS का पूर्ण रूप क्या है?",
    "optionsEn": [
      "3 months",
      "4 months",
      "6 months",
      "8 months"
    ],
    "optionsHi": [
      "National Programme Cancer",
      "National Programme for Prevention and Control of Cancer, Diabetes, CVD and Stroke",
      "National Pulse",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Complementary feeding (semi-solid foods) should start at 6 months while continuing breastfeeding.",
    "explanationHi": "NCD control programme।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-142",
    "questionEn": "India's target for IMR under NHM is:",
    "questionHi": "NMHP (National Mental Health Programme) कब शुरू हुआ?",
    "optionsEn": [
      "Less than 15",
      "Less than 25",
      "Less than 40",
      "Less than 50"
    ],
    "optionsHi": [
      "1972",
      "1982",
      "1992",
      "2002"
    ],
    "correctAnswer": 1,
    "explanationEn": "India targets to reduce IMR below 25 per 1000 live births under NHM goals.",
    "explanationHi": "NMHP started 1982।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-143",
    "questionEn": "Rogi Kalyan Samiti is established at:",
    "questionHi": "NPCB (National Programme for Control of Blindness) का मुख्य फोकस क्या है?",
    "optionsEn": [
      "Sub-Centre",
      "PHC",
      "CHC/DH level",
      "Village level"
    ],
    "optionsHi": [
      "कान",
      "अंधापन रोकथाम और नेत्र देखभाल",
      "दांत",
      "त्वचा"
    ],
    "correctAnswer": 2,
    "explanationEn": "Rogi Kalyan Samiti (Patient Welfare Committee) manages user charges and facility improvements at CHC/DH.",
    "explanationHi": "Eye care programme।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-144",
    "questionEn": "AFHC stands for:",
    "questionHi": "NPPC (National Programme for Prevention of Fluorosis) क्या है?",
    "optionsEn": [
      "Auxiliary First Health Centre",
      "Adolescent Friendly Health Clinic",
      "Area Family Health Centre",
      "Allied Family Health Care"
    ],
    "optionsHi": [
      "मलेरिया",
      "फ्लोरोसिस रोकथाम कार्यक्रम",
      "TB",
      "HIV"
    ],
    "correctAnswer": 1,
    "explanationEn": "AFHCs provide confidential, non-judgmental services to adolescents at PHC/CHC level under RKSK.",
    "explanationHi": "Fluorosis prevention।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-145",
    "questionEn": "WIFS targets which age group?",
    "questionHi": "NOHP (National Oral Health Programme) का उद्देश्य क्या है?",
    "optionsEn": [
      "0-5 years",
      "5-9 years",
      "10-19 years",
      "20-30 years"
    ],
    "optionsHi": [
      "आंख",
      "मुख स्वास्थ्य और दंत रोग रोकथाम",
      "कान",
      "नाक"
    ],
    "correctAnswer": 2,
    "explanationEn": "Weekly Iron Folic Acid Supplementation program targets adolescents aged 10-19 years.",
    "explanationHi": "Oral health programme।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-146",
    "questionEn": "Injectable contraceptive under family planning program is given every:",
    "questionHi": "RBSK (Rashtriya Bal Swasthya Karyakram) क्या है?",
    "optionsEn": [
      "1 month",
      "3 months",
      "6 months",
      "1 year"
    ],
    "optionsHi": [
      "वयस्क स्वास्थ्य",
      "0-18 वर्ष बच्चों की स्वास्थ्य जांच कार्यक्रम (4Ds)",
      "बुजुर्ग",
      "केवल महिला"
    ],
    "correctAnswer": 1,
    "explanationEn": "DMPA (Depot Medroxyprogesterone Acetate) is an injectable contraceptive given every 3 months.",
    "explanationHi": "Child health screening।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-147",
    "questionEn": "Cu-T 380A provides contraception for:",
    "questionHi": "RBSK में 4Ds क्या हैं?",
    "optionsEn": [
      "3 years",
      "5 years",
      "7 years",
      "10 years"
    ],
    "optionsHi": [
      "केवल बीमारी",
      "Defects, Diseases, Deficiencies, Development Delays",
      "केवल विकलांगता",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Cu-T 380A (Copper-T) is an IUCD that provides contraception for up to 10 years.",
    "explanationHi": "4D screening।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-148",
    "questionEn": "NSV in family planning stands for:",
    "questionHi": "RKSK (Rashtriya Kishor Swasthya Karyakram) किसके लिए है?",
    "optionsEn": [
      "Normal Surgical Vasectomy",
      "No-Scalpel Vasectomy",
      "Non-Surgical Vasectomy",
      "National Sterilization Voucher"
    ],
    "optionsHi": [
      "बच्चे",
      "10-19 वर्ष किशोरों के लिए",
      "बुजुर्ग",
      "गर्भवती"
    ],
    "correctAnswer": 1,
    "explanationEn": "NSV (No-Scalpel Vasectomy) is a male sterilization technique that is minimally invasive.",
    "explanationHi": "Adolescent health programme।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-149",
    "questionEn": "HMIS stands for:",
    "questionHi": "RKSK में कौन से क्षेत्र शामिल हैं?",
    "optionsEn": [
      "Hospital Management Information System",
      "Health Management Information System",
      "Health Ministry Information System",
      "Healthcare Monitoring Information System"
    ],
    "optionsHi": [
      "केवल पोषण",
      "पोषण, यौन स्वास्थ्य, मानसिक स्वास्थ्य, मादक द्रव्य, हिंसा, NCD",
      "केवल शिक्षा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HMIS is the web-based system for collecting and reporting health program data.",
    "explanationHi": "6 priority areas।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-150",
    "questionEn": "The target for institutional delivery under NHM is:",
    "questionHi": "NPHCE (National Programme for Health Care of the Elderly) किसके लिए है?",
    "optionsEn": [
      "50%",
      "75%",
      "90%",
      "100%"
    ],
    "optionsHi": [
      "बच्चे",
      "60 वर्ष से अधिक आयु के बुजुर्गों के लिए",
      "किशोर",
      "गर्भवती"
    ],
    "correctAnswer": 3,
    "explanationEn": "NHM aims for 100% institutional delivery to ensure safe delivery and reduce maternal/neonatal deaths.",
    "explanationHi": "Elderly care programme।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-151",
    "questionEn": "List the main components of National Health Mission (NHM).",
    "questionHi": "JSY (Janani Suraksha Yojana) का उद्देश्य क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "शिक्षा",
      "संस्थागत प्रसव को बढ़ावा देना (नकद सहायता)",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Cash for institutional delivery।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-152",
    "questionEn": "What are the key functions of ASHA worker?",
    "questionHi": "JSSK (Janani Shishu Suraksha Karyakram) में क्या मुफ्त है?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "प्रसव, C-section, दवाइयां, जांच, भोजन, परिवहन, रक्त",
      "केवल दवाई",
      "केवल जांच"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Free entitlements।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-153",
    "questionEn": "What services are provided free under JSSK?",
    "questionHi": "PMSMA (Pradhan Mantri Surakshit Matritva Abhiyan) कब आयोजित होता है?",
    "optionsEn": [],
    "optionsHi": [
      "हर दिन",
      "हर महीने की 9 तारीख",
      "हर साल",
      "कभी नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "9th of every month।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-154",
    "questionEn": "What are the 4Ds screened under RBSK?",
    "questionHi": "PMMVY (Pradhan Mantri Matru Vandana Yojana) में कितनी राशि मिलती है?",
    "optionsEn": [],
    "optionsHi": [
      "1000",
      "5000 (3 किस्तों में)",
      "10000",
      "50000"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Rs 5000 in 3 installments।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-155",
    "questionEn": "List the services provided at a routine ANC visit.",
    "questionHi": "SUMAN (Surakshit Matritva Aashwasan) का मुख्य सिद्धांत क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "भुगतान",
      "Zero out-of-pocket expenditure (बिना खर्च)",
      "अधिक खर्च",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "No out-of-pocket expenses।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-156",
    "questionEn": "What are the danger signs during pregnancy that require immediate referral?",
    "questionHi": "LaQshya का पूर्ण रूप और उद्देश्य क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "Labour",
      "Labour Room Quality Improvement - प्रसव कक्ष गुणवत्ता सुधार",
      "Learning",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Labour room quality।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-157",
    "questionEn": "Explain Essential Newborn Care (ENBC).",
    "questionHi": "MAA (Mothers' Absolute Affection) कार्यक्रम क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "पोषण",
      "स्तनपान प्रोत्साहन कार्यक्रम",
      "टीकाकरण",
      "परिवार नियोजन"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Breastfeeding promotion।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-158",
    "questionEn": "Describe the composition and functions of VHSNC.",
    "questionHi": "UIP (Universal Immunization Programme) कब शुरू हुआ?",
    "optionsEn": [],
    "optionsHi": [
      "1978",
      "1985",
      "1992",
      "2000"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "UIP started 1985।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-159",
    "questionEn": "List the spacing and limiting methods of family planning available in the program.",
    "questionHi": "Mission Indradhanush क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "वर्षा",
      "टीकाकरण कवरेज बढ़ाने का अभियान",
      "बिजली",
      "सड़क"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Immunization drive।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-160",
    "questionEn": "What are the six priority areas of RKSK (Adolescent Health Program)?",
    "questionHi": "Intensified Mission Indradhanush (IMI) का लक्ष्य क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "50%",
      "90% टीकाकरण कवरेज",
      "100%",
      "10%"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "90% coverage target।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-161",
    "questionEn": "A primigravida woman in her 7th month has not registered for ANC yet. What should you do as MPHW?",
    "questionHi": "Pulse Polio Programme का उद्देश्य क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "TB",
      "पोलियो उन्मूलन",
      "मलेरिया",
      "डेंगू"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Polio eradication।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-162",
    "questionEn": "A mother brings her 8-month-old infant who has not received any immunization. What is your approach?",
    "questionHi": "भारत को पोलियो मुक्त कब घोषित किया गया?",
    "optionsEn": [],
    "optionsHi": [
      "2010",
      "2014",
      "2018",
      "2020"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Polio-free India 2014।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-163",
    "questionEn": "As MPHW, how would you prepare for and conduct a VHND (Village Health and Nutrition Day) session?",
    "questionHi": "POSHAN Abhiyaan का लक्ष्य क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "पोषण बढ़ाना",
      "कुपोषण कम करना (Stunting 6%/वर्ष, Anemia 3%/वर्ष)",
      "केवल भोजन",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Nutrition targets।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-164",
    "questionEn": "A newborn (3 days old) is brought with fast breathing and poor feeding. What are the danger signs and what should you do?",
    "questionHi": "Anemia Mukt Bharat का लक्ष्य क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "एनीमिया बढ़ाना",
      "प्रति वर्ष एनीमिया में 3% कमी",
      "कोई लक्ष्य नहीं",
      "10% कमी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "3% annual reduction।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-165",
    "questionEn": "An eligible couple wants to know about spacing methods. How would you counsel them?",
    "questionHi": "स्वच्छ भारत मिशन कब शुरू हुआ?",
    "optionsEn": [],
    "optionsHi": [
      "2010",
      "2014",
      "2018",
      "2020"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "SBM launched 2 Oct 2014।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-166",
    "questionEn": "The current MMR target for India is:",
    "questionHi": "स्वच्छ भारत मिशन का मुख्य लक्ष्य क्या था?",
    "optionsEn": [
      "Below 50",
      "Below 70",
      "Below 100",
      "Below 130"
    ],
    "optionsHi": [
      "शिक्षा",
      "खुले में शौच मुक्त (ODF) भारत",
      "केवल शहर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "India aims to reduce MMR below 70 per 100,000 live births as per SDG targets.",
    "explanationHi": "ODF India।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-167",
    "questionEn": "PIP in NHM stands for:",
    "questionHi": "जल जीवन मिशन का लक्ष्य क्या है?",
    "optionsEn": [
      "Public Implementation Plan",
      "Programme Implementation Plan",
      "Population Improvement Plan",
      "Primary Intervention Plan"
    ],
    "optionsHi": [
      "बिजली",
      "2024 तक हर ग्रामीण घर में नल का पानी (Har Ghar Jal)",
      "सड़क",
      "शिक्षा"
    ],
    "correctAnswer": 1,
    "explanationEn": "States prepare annual Programme Implementation Plans (PIPs) detailing activities and budget under NHM.",
    "explanationHi": "Tap water for all।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-168",
    "questionEn": "PMTCT stands for:",
    "questionHi": "Fit India Movement का उद्देश्य क्या है?",
    "optionsEn": [
      "Prevention of Mother to Child Transmission",
      "Program for Maternal Treatment and Care",
      "Prenatal Maternal Test and Care",
      "Prevention of Malaria Through Chemotherapy"
    ],
    "optionsHi": [
      "केवल खेल",
      "शारीरिक गतिविधि और स्वस्थ जीवनशैली प्रोत्साहन",
      "केवल आहार",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "PMTCT aims to prevent HIV transmission from infected mother to baby during pregnancy, delivery, and breastfeeding.",
    "explanationHi": "Fitness promotion।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-169",
    "questionEn": "The target for full immunization coverage in India is:",
    "questionHi": "Eat Right India का उद्देश्य क्या है?",
    "optionsEn": [
      "70%",
      "80%",
      "90%",
      "100%"
    ],
    "optionsHi": [
      "अधिक खाना",
      "सुरक्षित और स्वस्थ भोजन को बढ़ावा देना",
      "कम खाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "India targets 90% full immunization coverage to achieve herd immunity and reduce vaccine-preventable diseases.",
    "explanationHi": "Healthy eating।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-170",
    "questionEn": "VHND is conducted at:",
    "questionHi": "NTCP (National Tobacco Control Programme) का उद्देश्य क्या है?",
    "optionsEn": [
      "Sub-Centre",
      "PHC",
      "Anganwadi Centre",
      "CHC"
    ],
    "optionsHi": [
      "तंबाकू बढ़ाना",
      "तंबाकू उपयोग और हानि कम करना",
      "केवल कर",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Village Health and Nutrition Day is conducted monthly at the Anganwadi Centre as a convergent service delivery platform.",
    "explanationHi": "Tobacco control।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-171",
    "questionEn": "Free drugs initiative under NHM follows:",
    "questionHi": "COTPA (Cigarettes and Other Tobacco Products Act) कब लागू हुआ?",
    "optionsEn": [
      "Any drug list",
      "Essential Drug List",
      "Expensive drug list",
      "Patent drug list"
    ],
    "optionsHi": [
      "1990",
      "2003",
      "2010",
      "2020"
    ],
    "correctAnswer": 1,
    "explanationEn": "NHM provides free essential medicines based on the Essential Drug List at public health facilities.",
    "explanationHi": "COTPA 2003।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-172",
    "questionEn": "Pentavalent vaccine protects against how many diseases?",
    "questionHi": "COTPA के तहत सार्वजनिक स्थानों पर धूम्रपान पर क्या प्रावधान है?",
    "optionsEn": [
      "3",
      "4",
      "5",
      "6"
    ],
    "optionsHi": [
      "अनुमति",
      "प्रतिबंध",
      "कभी-कभी",
      "कोई नियम नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Pentavalent vaccine protects against 5 diseases: Diphtheria, Pertussis, Tetanus, Hepatitis B, and Haemophilus influenzae type b.",
    "explanationHi": "Smoking ban in public places।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-173",
    "questionEn": "MR vaccine is given at which ages?",
    "questionHi": "शैक्षणिक संस्थानों के 100 मीटर के भीतर तंबाकू बिक्री पर क्या नियम है?",
    "optionsEn": [
      "6 weeks and 14 weeks",
      "9 months and 16-24 months",
      "Birth and 6 weeks",
      "6 months and 9 months"
    ],
    "optionsHi": [
      "अनुमति",
      "प्रतिबंध",
      "छूट",
      "कोई नियम नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MR (Measles-Rubella) vaccine is given at 9-12 months (MR1) and 16-24 months (MR2) as per national immunization schedule.",
    "explanationHi": "No sale near schools।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-174",
    "questionEn": "ORS under national program is provided:",
    "questionHi": "Quitline नंबर (तंबाकू छोड़ने के लिए) क्या है?",
    "optionsEn": [
      "Only at hospitals",
      "Through ASHA and facilities",
      "Only through pharmacies",
      "Only during epidemics"
    ],
    "optionsHi": [
      "100",
      "1800-11-2356",
      "108",
      "112"
    ],
    "correctAnswer": 1,
    "explanationEn": "ORS is available free through ASHAs, AWCs, Sub-Centres, and all public health facilities.",
    "explanationHi": "Tobacco quitline।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-175",
    "questionEn": "National Rural Health Mission (NRHM) was launched in:",
    "questionHi": "FSSAI का पूर्ण रूप क्या है?",
    "optionsEn": [
      "18 states",
      "All states",
      "Only north-eastern states",
      "Only southern states"
    ],
    "optionsHi": [
      "Food Safety",
      "Food Safety and Standards Authority of India",
      "Food Service",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "NRHM was initially launched in 18 states including high-focus states like UP, Bihar, MP, Rajasthan, Jharkhand, Odisha, etc.",
    "explanationHi": "Food regulator।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-176",
    "questionEn": "POSHAN Abhiyaan is focused on:",
    "questionHi": "FSSA (Food Safety and Standards Act) कब लागू हुआ?",
    "optionsEn": [
      "Immunization",
      "Nutrition improvement",
      "Sanitation",
      "Education"
    ],
    "optionsHi": [
      "2000",
      "2006",
      "2010",
      "2015"
    ],
    "correctAnswer": 1,
    "explanationEn": "POSHAN (Prime Minister's Overarching Scheme for Holistic Nutrition) Abhiyaan aims to reduce stunting, underweight, and anemia.",
    "explanationHi": "FSSA 2006।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-177",
    "questionEn": "The optimal time for registration of pregnancy is:",
    "questionHi": "Clinical Establishment Act का उद्देश्य क्या है?",
    "optionsEn": [
      "Any time",
      "First trimester (before 12 weeks)",
      "Second trimester",
      "Third trimester"
    ],
    "optionsHi": [
      "केवल सरकारी",
      "निजी और सरकारी नैदानिक प्रतिष्ठानों का पंजीकरण और विनियमन",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Early registration (before 12 weeks) allows complete ANC, early risk identification, and better outcomes.",
    "explanationHi": "Regulation of health facilities।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-178",
    "questionEn": "Under PMSMA, examination is done by:",
    "questionHi": "MTP Act (Medical Termination of Pregnancy) कब लागू हुआ?",
    "optionsEn": [
      "ASHA only",
      "ANM only",
      "Doctor/OB-GYN",
      "AWW only"
    ],
    "optionsHi": [
      "1960",
      "1971",
      "1985",
      "2000"
    ],
    "correctAnswer": 2,
    "explanationEn": "PMSMA provides ANC checkup by qualified doctors including volunteer OB-GYNs for quality examination.",
    "explanationHi": "MTP Act 1971।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-179",
    "questionEn": "Deworming tablet (Albendazole) during pregnancy is given in:",
    "questionHi": "MTP Act 2021 संशोधन के अनुसार, कितने सप्ताह तक गर्भपात की अनुमति है?",
    "optionsEn": [
      "First trimester",
      "Second trimester",
      "Third trimester",
      "Not given during pregnancy"
    ],
    "optionsHi": [
      "12",
      "20",
      "24 (विशेष श्रेणी में)",
      "30"
    ],
    "correctAnswer": 1,
    "explanationEn": "Albendazole 400mg is given once during second trimester after first 12 weeks for deworming.",
    "explanationHi": "24 weeks for special categories।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-180",
    "questionEn": "Total Fertility Rate (TFR) target for India is:",
    "questionHi": "PCPNDT Act का उद्देश्य क्या है?",
    "optionsEn": [
      "1.5",
      "2.1",
      "2.5",
      "3.0"
    ],
    "optionsHi": [
      "लिंग चयन बढ़ाना",
      "लिंग चयन और लिंग निर्धारण परीक्षण पर रोक",
      "केवल परीक्षण",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "TFR of 2.1 is the replacement level fertility - population stabilizes when women have on average 2.1 children.",
    "explanationHi": "Prevention of sex selection।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-181",
    "questionEn": "Peer educators under RKSK are:",
    "questionHi": "Mental Healthcare Act कब लागू हुआ?",
    "optionsEn": [
      "Doctors",
      "Nurses",
      "Trained adolescents",
      "Teachers"
    ],
    "optionsHi": [
      "2000",
      "2017",
      "2010",
      "2020"
    ],
    "correctAnswer": 2,
    "explanationEn": "Peer educators are trained adolescents (4 per 1000 adolescents) who conduct health education sessions for their peers.",
    "explanationHi": "MH Act 2017।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-182",
    "questionEn": "Low birth weight is defined as birth weight less than:",
    "questionHi": "Rights of Persons with Disabilities Act कब लागू हुआ?",
    "optionsEn": [
      "1.5 kg",
      "2 kg",
      "2.5 kg",
      "3 kg"
    ],
    "optionsHi": [
      "2000",
      "2016",
      "2010",
      "2020"
    ],
    "correctAnswer": 2,
    "explanationEn": "Low Birth Weight (LBW) is defined as birth weight less than 2500 grams (2.5 kg) regardless of gestational age.",
    "explanationHi": "RPWD Act 2016।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-183",
    "questionEn": "ICDS provides supplementary nutrition through:",
    "questionHi": "RPWD Act में कितने प्रकार की विकलांगताएं शामिल हैं?",
    "optionsEn": [
      "PHC",
      "Sub-Centre",
      "Anganwadi Centre",
      "District Hospital"
    ],
    "optionsHi": [
      "7",
      "21",
      "10",
      "50"
    ],
    "correctAnswer": 2,
    "explanationEn": "ICDS (Integrated Child Development Services) provides supplementary nutrition through Anganwadi Centres.",
    "explanationHi": "21 types of disabilities।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-184",
    "questionEn": "Jan Aushadhi Kendra provides:",
    "questionHi": "Epidemic Diseases Act कब लागू हुआ?",
    "optionsEn": [
      "Free medicines",
      "Generic medicines at low cost",
      "Only ayurvedic medicines",
      "Only emergency medicines"
    ],
    "optionsHi": [
      "1897",
      "1947",
      "1970",
      "2000"
    ],
    "correctAnswer": 1,
    "explanationEn": "Jan Aushadhi Kendras provide quality generic medicines at affordable prices (50-90% cheaper than branded).",
    "explanationHi": "Colonial-era law।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-185",
    "questionEn": "Mission Indradhanush aims to:",
    "questionHi": "Disaster Management Act कब लागू हुआ?",
    "optionsEn": [
      "Improve sanitation",
      "Full immunization coverage",
      "Reduce malnutrition",
      "Improve education"
    ],
    "optionsHi": [
      "2000",
      "2005",
      "2010",
      "2015"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mission Indradhanush (2014) and IMI aim to achieve full immunization coverage in underperforming districts.",
    "explanationHi": "DM Act 2005।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-186",
    "questionEn": "BCG vaccine provides protection against:",
    "questionHi": "NDMA का पूर्ण रूप क्या है?",
    "optionsEn": [
      "Typhoid",
      "Severe forms of TB",
      "Polio",
      "Measles"
    ],
    "optionsHi": [
      "National Drug",
      "National Disaster Management Authority",
      "National Disease",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "BCG (Bacille Calmette-Guerin) vaccine protects against severe forms of TB like TB meningitis in children.",
    "explanationHi": "Disaster management body।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-187",
    "questionEn": "Vitamin A supplementation starts at age:",
    "questionHi": "आपदा प्रबंधन में स्वास्थ्य क्षेत्र की भूमिका क्या है?",
    "optionsEn": [
      "Birth",
      "6 months",
      "9 months",
      "12 months"
    ],
    "optionsHi": [
      "कोई भूमिका नहीं",
      "आपातकालीन चिकित्सा, निगरानी, रोग नियंत्रण, मानसिक स्वास्थ्य",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "First dose of Vitamin A (100,000 IU) is given at 9 months along with MR vaccination.",
    "explanationHi": "Health role in disasters।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-188",
    "questionEn": "Hepatitis B birth dose should be given within:",
    "questionHi": "स्वास्थ्य आपातकाल में Surge Capacity क्या है?",
    "optionsEn": [
      "1 hour",
      "24 hours",
      "48 hours",
      "1 week"
    ],
    "optionsHi": [
      "सामान्य क्षमता",
      "आपातकाल में बढ़ी हुई सेवा क्षमता",
      "कम क्षमता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hepatitis B birth dose should ideally be given within 24 hours of birth to prevent mother-to-child transmission.",
    "explanationHi": "Expanded capacity in emergency।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-189",
    "questionEn": "Mobile Health Units under NHM primarily serve:",
    "questionHi": "Triage क्या है?",
    "optionsEn": [
      "Urban areas",
      "Hard-to-reach areas",
      "Only for emergencies",
      "Hospitals"
    ],
    "optionsHi": [
      "उपचार",
      "आपातकाल में रोगियों को गंभीरता के अनुसार वर्गीकृत करना",
      "निदान",
      "रोकथाम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mobile Medical Units (MMUs) provide health services to remote, hard-to-reach areas where fixed facilities are far.",
    "explanationHi": "Prioritizing patients।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-190",
    "questionEn": "PMMVY (Pradhan Mantri Matru Vandana Yojana) provides:",
    "questionHi": "Mass Casualty Incident (MCI) क्या है?",
    "optionsEn": [
      "Free delivery",
      "Cash benefit of Rs 5000",
      "Insurance",
      "Free transport"
    ],
    "optionsHi": [
      "एक रोगी",
      "बड़ी संख्या में हताहत जो सामान्य संसाधनों से अधिक हो",
      "कोई हताहत नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "PMMVY provides Rs 5000 in 3 installments to pregnant women for first live birth (partial wage compensation).",
    "explanationHi": "Overwhelming casualties।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-191",
    "questionEn": "Rotavirus vaccine prevents:",
    "questionHi": "IPC (Infection Prevention and Control) का मुख्य उद्देश्य क्या है?",
    "optionsEn": [
      "Respiratory infections",
      "Severe diarrhea",
      "Measles",
      "TB"
    ],
    "optionsHi": [
      "संक्रमण बढ़ाना",
      "स्वास्थ्य सुविधाओं में संक्रमण रोकना",
      "केवल सफाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rotavirus vaccine protects against severe rotavirus diarrhea, a major cause of child deaths in developing countries.",
    "explanationHi": "Healthcare infection prevention।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-192",
    "questionEn": "PCV vaccine protects against:",
    "questionHi": "HAI (Healthcare Associated Infection) क्या है?",
    "optionsEn": [
      "Polio",
      "Pneumonia and meningitis",
      "Pertussis",
      "Plague"
    ],
    "optionsHi": [
      "घर पर संक्रमण",
      "स्वास्थ्य सुविधा में भर्ती होने के बाद होने वाला संक्रमण",
      "जन्मजात",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pneumococcal Conjugate Vaccine (PCV) protects against pneumococcal pneumonia and meningitis.",
    "explanationHi": "Hospital-acquired infection।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-193",
    "questionEn": "NUHM focuses on health of:",
    "questionHi": "Standard Precautions में क्या शामिल है?",
    "optionsEn": [
      "Rural population",
      "Urban slum population",
      "Tribal population",
      "Industrial workers"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "हाथ स्वच्छता, PPE, श्वसन स्वच्छता, सुरक्षित इंजेक्शन",
      "केवल मास्क",
      "केवल दस्ताने"
    ],
    "correctAnswer": 1,
    "explanationEn": "National Urban Health Mission (NUHM) focuses on healthcare needs of urban poor living in slums.",
    "explanationHi": "Basic IPC practices।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-194",
    "questionEn": "Safe delivery kit is used for:",
    "questionHi": "BMW (Biomedical Waste Management) Rules किस वर्ष से हैं?",
    "optionsEn": [
      "Hospital deliveries only",
      "Home deliveries in emergency",
      "C-section only",
      "Premature deliveries only"
    ],
    "optionsHi": [
      "1990",
      "1998 (संशोधित 2016)",
      "2005",
      "2010"
    ],
    "correctAnswer": 1,
    "explanationEn": "Safe delivery kit ensures clean delivery in emergency home births, reducing sepsis and neonatal tetanus.",
    "explanationHi": "BMW Rules 1998, amended 2016।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-195",
    "questionEn": "LaQshya program focuses on:",
    "questionHi": "BMW में पीला बैग किसके लिए है?",
    "optionsEn": [
      "School health",
      "Quality of care in labor room",
      "Adolescent health",
      "Elderly care"
    ],
    "optionsHi": [
      "सामान्य कचरा",
      "संक्रामक अपशिष्ट (इंसीनरेशन के लिए)",
      "धारदार",
      "रासायनिक"
    ],
    "correctAnswer": 1,
    "explanationEn": "LaQshya (Labour room Quality improvement initiative) aims to improve quality of care in labor rooms and maternity OTs.",
    "explanationHi": "Yellow for incineration।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-196",
    "questionEn": "e-Sanjeevani is:",
    "questionHi": "BMW में लाल बैग किसके लिए है?",
    "optionsEn": [
      "Drug tracking system",
      "Telemedicine service",
      "Ambulance service",
      "Hospital management system"
    ],
    "optionsHi": [
      "सामान्य",
      "दूषित अपशिष्ट (ऑटोक्लेव/माइक्रोवेव)",
      "धारदार",
      "कांच"
    ],
    "correctAnswer": 1,
    "explanationEn": "e-Sanjeevani is the national telemedicine service providing online consultations during and beyond COVID-19.",
    "explanationHi": "Red for autoclaving।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-197",
    "questionEn": "Janani Express (102 service) is free for:",
    "questionHi": "BMW में नीला/सफेद पंक्चर प्रूफ कंटेनर किसके लिए है?",
    "optionsEn": [
      "All patients",
      "Pregnant women",
      "Children only",
      "Elderly only"
    ],
    "optionsHi": [
      "कागज",
      "धारदार अपशिष्ट (सुई, ब्लेड)",
      "भोजन",
      "दवाई"
    ],
    "correctAnswer": 1,
    "explanationEn": "102 Janani Express provides free transport service specifically for pregnant women to reach health facilities.",
    "explanationHi": "Sharps container।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-198",
    "questionEn": "Zinc supplementation in diarrhea is given for:",
    "questionHi": "Needle Stick Injury के बाद क्या करना चाहिए?",
    "optionsEn": [
      "3 days",
      "7 days",
      "14 days",
      "21 days"
    ],
    "optionsHi": [
      "अनदेखा करें",
      "धोएं, रिपोर्ट करें, PEP लें (यदि आवश्यक)",
      "केवल धोएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Zinc tablet 20mg (10mg for <6 months) is given daily for 14 days along with ORS in diarrhea management.",
    "explanationHi": "NSI management।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-199",
    "questionEn": "Under NHM, untied fund to Sub-Centre per year is:",
    "questionHi": "PEP (Post Exposure Prophylaxis) किसके लिए है?",
    "optionsEn": [
      "Rs 5,000",
      "Rs 10,000",
      "Rs 25,000",
      "Rs 50,000"
    ],
    "optionsHi": [
      "मलेरिया",
      "HIV/HBV जोखिम के बाद रोकथाम",
      "TB",
      "डेंगू"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sub-Centres receive Rs 10,000 per year as untied fund for local health needs at discretion of ANM.",
    "explanationHi": "Prevention after exposure।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "National Health Mission",
    "tags": [
      "national-health-mission"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-200",
    "questionEn": "Full immunization of a child is complete at age:",
    "questionHi": "AMR (Antimicrobial Resistance) क्या है?",
    "optionsEn": [
      "9 months",
      "12 months",
      "16 months",
      "24 months"
    ],
    "optionsHi": [
      "दवाई प्रभावी",
      "रोगाणुओं का दवाइयों के प्रति प्रतिरोधी होना",
      "नई दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Full immunization schedule is completed by 2 years (24 months) when all scheduled vaccines including boosters are given.",
    "explanationHi": "Drug resistance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "RMNCH+A Programs",
    "tags": [
      "rmnch+a-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-201",
    "questionEn": "NTEP stands for:",
    "questionHi": "AMR को रोकने के उपाय क्या हैं?",
    "optionsEn": [
      "National Treatment Elimination Programme",
      "National TB Elimination Programme",
      "National Tuberculosis Eradication Programme",
      "National TB Education Programme"
    ],
    "optionsHi": [
      "अधिक एंटीबायोटिक",
      "तर्कसंगत एंटीबायोटिक उपयोग, पूर्ण कोर्स, संक्रमण रोकथाम",
      "कोई उपाय नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "NTEP (National TB Elimination Programme) replaced RNTCP with the goal of eliminating TB by 2025.",
    "explanationHi": "Antimicrobial stewardship।",
    "difficulty": "easy",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-202",
    "questionEn": "India's target year for TB elimination is:",
    "questionHi": "NAP-AMR (National Action Plan on AMR) का उद्देश्य क्या है?",
    "optionsEn": [
      "2025",
      "2030",
      "2035",
      "2040"
    ],
    "optionsHi": [
      "AMR बढ़ाना",
      "भारत में AMR नियंत्रण की रणनीति",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "India aims to eliminate TB by 2025, five years ahead of the global SDG target of 2030.",
    "explanationHi": "AMR control strategy।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-203",
    "questionEn": "The most important symptom for suspecting TB is:",
    "questionHi": "Red Line Campaign क्या है?",
    "optionsEn": [
      "Fever",
      "Weight loss",
      "Cough for 2 or more weeks",
      "Night sweats"
    ],
    "optionsHi": [
      "सड़क सुरक्षा",
      "प्रिस्क्रिप्शन के बिना एंटीबायोटिक न देने के लिए जागरूकता",
      "रक्तदान",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Persistent cough for 2 weeks or more is the cardinal symptom that should prompt TB investigation.",
    "explanationHi": "Prescription-only antibiotics।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-204",
    "questionEn": "DOTS stands for:",
    "questionHi": "स्वास्थ्य संवर्धन (Health Promotion) और रोग रोकथाम में क्या अंतर है?",
    "optionsEn": [
      "Direct Observation of Treatment Supervision",
      "Directly Observed Treatment Short-course",
      "Daily Oral Treatment Strategy",
      "Diagnostic and Observation Treatment System"
    ],
    "optionsHi": [
      "एक ही है",
      "HP=स्वस्थ जीवनशैली बढ़ाना, Prevention=रोग टालना",
      "कोई अंतर नहीं",
      "विपरीत"
    ],
    "correctAnswer": 1,
    "explanationEn": "DOTS is the internationally recommended strategy for TB control involving direct observation of treatment.",
    "explanationHi": "Promotion vs Prevention।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-205",
    "questionEn": "How many sputum samples are collected for TB diagnosis?",
    "questionHi": "ओटावा चार्टर में स्वास्थ्य संवर्धन की 5 रणनीतियां क्या हैं?",
    "optionsEn": [
      "1",
      "2",
      "3",
      "5"
    ],
    "optionsHi": [
      "केवल शिक्षा",
      "स्वस्थ नीति, सहायक वातावरण, सामुदायिक कार्रवाई, व्यक्तिगत कौशल, स्वास्थ्य सेवा पुनर्निर्देशन",
      "केवल उपचार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Two sputum samples are collected - one spot sample and one early morning sample for microscopy.",
    "explanationHi": "5 Ottawa strategies।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-206",
    "questionEn": "Standard treatment duration for drug-sensitive TB is:",
    "questionHi": "Healthy Public Policy क्या है?",
    "optionsEn": [
      "3 months",
      "6 months",
      "9 months",
      "12 months"
    ],
    "optionsHi": [
      "केवल स्वास्थ्य विभाग",
      "सभी क्षेत्रों की नीतियां जो स्वास्थ्य पर प्रभाव डालती हैं",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Drug-sensitive TB treatment is 6 months - 2 months intensive phase (HRZE) + 4 months continuation phase (HR).",
    "explanationHi": "Health in all policies।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-207",
    "questionEn": "NIKSHAY is:",
    "questionHi": "Health in All Policies (HiAP) का क्या अर्थ है?",
    "optionsEn": [
      "TB drug",
      "TB vaccine",
      "Online TB notification system",
      "TB diagnostic test"
    ],
    "optionsHi": [
      "केवल स्वास्थ्य मंत्रालय",
      "सभी नीतियों में स्वास्थ्य पहलू का समावेश",
      "कोई नीति नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "NIKSHAY is the web-based case notification and monitoring system for all TB patients in India.",
    "explanationHi": "Intersectoral approach।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-208",
    "questionEn": "CBNAAT stands for:",
    "questionHi": "Intersectoral Coordination स्वास्थ्य में क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Complete Blood and Nucleic Acid Test",
      "Cartridge Based Nucleic Acid Amplification Test",
      "Culture Based New Assessment Test",
      "Clinical Based Novel Analysis Test"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "स्वास्थ्य के निर्धारक कई क्षेत्रों में होते हैं",
      "केवल स्वास्थ्य विभाग पर्याप्त",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CBNAAT (GeneXpert) is a rapid molecular test that can detect TB and rifampicin resistance in 2 hours.",
    "explanationHi": "Multiple determinants।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-209",
    "questionEn": "Active Case Finding (ACF) means:",
    "questionHi": "Community Participation का स्वास्थ्य में क्या महत्व है?",
    "optionsEn": [
      "Patient comes to facility",
      "Health worker searches for cases in community",
      "Laboratory finding",
      "Autopsy finding"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "स्थानीय जरूरतों की समझ, स्वामित्व, स्थिरता",
      "केवल सरकारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ACF involves systematic house-to-house screening and contact tracing to find TB cases who haven't sought care.",
    "explanationHi": "Community engagement।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-210",
    "questionEn": "MDR-TB stands for:",
    "questionHi": "Empowerment का स्वास्थ्य में क्या अर्थ है?",
    "optionsEn": [
      "Mild Drug Resistant TB",
      "Multi-Drug Resistant TB",
      "Minimal Drug Response TB",
      "Multiple Disease Related TB"
    ],
    "optionsHi": [
      "शक्ति छीनना",
      "लोगों को अपने स्वास्थ्य के बारे में निर्णय लेने में सक्षम बनाना",
      "केवल डॉक्टर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MDR-TB is TB resistant to at least Isoniazid and Rifampicin, the two most potent first-line drugs.",
    "explanationHi": "Health empowerment।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-211",
    "questionEn": "NVBDCP controls which diseases?",
    "questionHi": "Health Literacy क्या है?",
    "optionsEn": [
      "TB and Leprosy",
      "Vector-borne diseases",
      "HIV and Hepatitis",
      "Respiratory infections"
    ],
    "optionsHi": [
      "पढ़ना-लिखना",
      "स्वास्थ्य जानकारी को समझने और उपयोग करने की क्षमता",
      "केवल डॉक्टर के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "NVBDCP (National Vector Borne Disease Control Programme) controls malaria, dengue, chikungunya, JE, filariasis, and kala-azar.",
    "explanationHi": "Understanding health info।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-212",
    "questionEn": "The vector for malaria is:",
    "questionHi": "IEC (Information, Education, Communication) का उद्देश्य क्या है?",
    "optionsEn": [
      "Aedes mosquito",
      "Anopheles mosquito",
      "Culex mosquito",
      "Sandfly"
    ],
    "optionsHi": [
      "केवल जानकारी",
      "जागरूकता बढ़ाना, ज्ञान देना, व्यवहार परिवर्तन",
      "केवल शिक्षा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anopheles mosquito is the vector for malaria transmission. It bites mainly at night.",
    "explanationHi": "IEC objectives।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-213",
    "questionEn": "Dengue is transmitted by:",
    "questionHi": "BCC (Behavior Change Communication) IEC से कैसे अलग है?",
    "optionsEn": [
      "Anopheles mosquito",
      "Aedes mosquito",
      "Culex mosquito",
      "House fly"
    ],
    "optionsHi": [
      "एक ही है",
      "BCC व्यवहार परिवर्तन पर अधिक फोकस करता है",
      "BCC कम प्रभावी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aedes aegypti mosquito transmits dengue, chikungunya, and Zika. It is a day-biting mosquito.",
    "explanationHi": "BCC = behavior focus।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-214",
    "questionEn": "LLIN stands for:",
    "questionHi": "SBCC (Social and Behavior Change Communication) में क्या अतिरिक्त है?",
    "optionsEn": [
      "Long Length Insecticidal Net",
      "Long Lasting Insecticidal Net",
      "Light Level Insect Net",
      "Large Long Indoor Net"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "सामाजिक नॉर्म्स और वातावरण पर ध्यान",
      "केवल व्यक्तिगत",
      "कम प्रभावी"
    ],
    "correctAnswer": 1,
    "explanationEn": "LLIN is insecticide-treated bed net that remains effective for 3+ years, key for malaria prevention.",
    "explanationHi": "Social norms focus।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-215",
    "questionEn": "IRS in malaria control stands for:",
    "questionHi": "Advocacy का जन स्वास्थ्य में क्या अर्थ है?",
    "optionsEn": [
      "Indoor Residual Spraying",
      "Insect Reduction System",
      "Indoor Repellent Spray",
      "Integrated Response Strategy"
    ],
    "optionsHi": [
      "वकालत केवल",
      "नीति परिवर्तन और संसाधन जुटाने के लिए समर्थन",
      "केवल विरोध",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "IRS involves spraying insecticide on indoor walls where mosquitoes rest, killing them and reducing transmission.",
    "explanationHi": "Policy advocacy।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-216",
    "questionEn": "The 'Test and Treat' policy means:",
    "questionHi": "Social Marketing का जन स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "Test suspected cases only",
      "Test all and treat positive cases immediately",
      "Treat without testing",
      "Test annually"
    ],
    "optionsHi": [
      "उत्पाद बेचना",
      "स्वास्थ्य व्यवहार को बढ़ावा देने के लिए विपणन तकनीक",
      "केवल विज्ञापन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Test and Treat: All fever cases in endemic areas should be tested, and positive cases treated immediately.",
    "explanationHi": "Marketing for health।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-217",
    "questionEn": "ACT in malaria treatment stands for:",
    "questionHi": "Nudge Theory का स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "Advanced Clinical Treatment",
      "Artemisinin Combination Therapy",
      "Anti-malarial Chemotherapy Treatment",
      "Active Case Treatment"
    ],
    "optionsHi": [
      "जबरदस्ती",
      "छोटे बदलावों से स्वस्थ व्यवहार को प्रोत्साहित करना",
      "सजा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ACT is the first-line treatment for P. falciparum malaria, combining artemisinin with another antimalarial.",
    "explanationHi": "Behavioral nudges।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-218",
    "questionEn": "Dengue breeds in:",
    "questionHi": "स्क्रीनिंग (Screening) क्या है?",
    "optionsEn": [
      "Dirty water",
      "Clean stagnant water",
      "Running water",
      "Underground water"
    ],
    "optionsHi": [
      "निदान",
      "स्वस्थ दिखने वाले लोगों में रोग या जोखिम की पहचान",
      "उपचार",
      "रोकथाम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aedes mosquito breeds in clean stagnant water in containers like coolers, flower pots, tyres, tanks.",
    "explanationHi": "Early detection in asymptomatic।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-219",
    "questionEn": "Warning signs of severe dengue include all EXCEPT:",
    "questionHi": "अच्छी स्क्रीनिंग टेस्ट की विशेषताएं क्या हैं?",
    "optionsEn": [
      "Abdominal pain",
      "Persistent vomiting",
      "Skin rash",
      "Bleeding"
    ],
    "optionsHi": [
      "महंगा",
      "सरल, सस्ता, सुरक्षित, संवेदनशील, विशिष्ट, स्वीकार्य",
      "जटिल",
      "दर्दनाक"
    ],
    "correctAnswer": 2,
    "explanationEn": "Warning signs: abdominal pain, vomiting, bleeding, restlessness, cold extremities. Skin rash is common but not a warning sign.",
    "explanationHi": "Good screening test criteria।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-220",
    "questionEn": "NACP stands for:",
    "questionHi": "Sensitivity क्या मापती है?",
    "optionsEn": [
      "National AIDS Control Programme",
      "National Anti-malaria Control Programme",
      "National Anemia Control Programme",
      "National Awareness and Communication Programme"
    ],
    "optionsHi": [
      "स्वस्थ पहचान",
      "रोगियों को सही पहचानने की क्षमता (True Positive Rate)",
      "झूठे नकारात्मक",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "NACP is the national program for prevention and control of HIV/AIDS in India.",
    "explanationHi": "Detecting disease।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-221",
    "questionEn": "ICTC stands for:",
    "questionHi": "Specificity क्या मापती है?",
    "optionsEn": [
      "Integrated Communicable Testing Centre",
      "Integrated Counseling and Testing Centre",
      "Infection Control and Treatment Centre",
      "Indian Clinical Test Centre"
    ],
    "optionsHi": [
      "रोगी पहचान",
      "स्वस्थ लोगों को सही पहचानने की क्षमता (True Negative Rate)",
      "झूठे सकारात्मक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ICTC provides voluntary HIV testing with pre and post-test counseling.",
    "explanationHi": "Excluding non-disease।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-222",
    "questionEn": "ART stands for:",
    "questionHi": "False Positive का क्या अर्थ है?",
    "optionsEn": [
      "Anti-Retroviral Therapy",
      "Advanced Respiratory Treatment",
      "Anti-Resistant Therapy",
      "Acute Recovery Treatment"
    ],
    "optionsHi": [
      "सही पहचान",
      "स्वस्थ व्यक्ति को गलती से रोगी बताना",
      "रोगी को स्वस्थ",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "ART is lifelong treatment for HIV that suppresses viral load and prevents progression to AIDS.",
    "explanationHi": "Wrongly positive।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-223",
    "questionEn": "Under Test and Treat for HIV, when is ART started?",
    "questionHi": "False Negative का क्या अर्थ है?",
    "optionsEn": [
      "When CD4 drops below 500",
      "When symptoms appear",
      "Immediately after diagnosis",
      "After 6 months observation"
    ],
    "optionsHi": [
      "सही पहचान",
      "रोगी को गलती से स्वस्थ बताना",
      "स्वस्थ को रोगी",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Test and Treat policy: All HIV positive persons start ART immediately regardless of CD4 count.",
    "explanationHi": "Wrongly negative।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-224",
    "questionEn": "NLEP stands for:",
    "questionHi": "PPV (Positive Predictive Value) क्या है?",
    "optionsEn": [
      "National Lung Elimination Programme",
      "National Leprosy Eradication Programme",
      "National Liver Enhancement Programme",
      "National Life Extension Programme"
    ],
    "optionsHi": [
      "Sensitivity",
      "सकारात्मक परीक्षण वालों में वास्तव में रोग होने की संभावना",
      "Specificity",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "NLEP aims for zero transmission, zero disability, and zero discrimination in leprosy.",
    "explanationHi": "Probability of disease if positive।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-225",
    "questionEn": "Cardinal sign of leprosy is:",
    "questionHi": "NPV (Negative Predictive Value) क्या है?",
    "optionsEn": [
      "Fever",
      "Skin patch with loss of sensation",
      "Joint pain",
      "Cough"
    ],
    "optionsHi": [
      "Sensitivity",
      "नकारात्मक परीक्षण वालों में वास्तव में रोग न होने की संभावना",
      "Specificity",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hypopigmented or reddish skin patch with loss of sensation is the cardinal sign of leprosy.",
    "explanationHi": "Probability of no disease if negative।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-226",
    "questionEn": "PB leprosy has how many skin lesions?",
    "questionHi": "Lead Time Bias क्या है?",
    "optionsEn": [
      "1-5",
      "6-10",
      "More than 5",
      "More than 10"
    ],
    "optionsHi": [
      "सही अनुमान",
      "स्क्रीनिंग से जीवित रहने का समय बढ़ा लगना (वास्तव में नहीं बढ़ा)",
      "कोई बायस नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Paucibacillary (PB) leprosy: 1-5 skin lesions, 0-1 nerve involved. MB (Multibacillary): >5 lesions.",
    "explanationHi": "Apparent survival increase।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-227",
    "questionEn": "MDT in leprosy stands for:",
    "questionHi": "CBAC (Community Based Assessment Checklist) किसके लिए है?",
    "optionsEn": [
      "Multi-Drug Treatment",
      "Multi-Drug Therapy",
      "Minimal Dose Therapy",
      "Maximum Duration Treatment"
    ],
    "optionsHi": [
      "बच्चों के लिए",
      "30+ वर्ष आयु के लोगों में NCD जोखिम मूल्यांकन",
      "केवल महिलाओं",
      "केवल बुजुर्गों"
    ],
    "correctAnswer": 1,
    "explanationEn": "MDT is the combination drug treatment for leprosy using Rifampicin, Dapsone, and Clofazimine (for MB).",
    "explanationHi": "NCD risk screening।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-228",
    "questionEn": "Duration of MDT for PB leprosy is:",
    "questionHi": "Population-based Screening का उदाहरण क्या है?",
    "optionsEn": [
      "3 months",
      "6 months",
      "12 months",
      "18 months"
    ],
    "optionsHi": [
      "व्यक्तिगत जांच",
      "NCD स्क्रीनिंग (30+), कैंसर स्क्रीनिंग",
      "केवल अस्पताल में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "PB leprosy: 6 months MDT. MB leprosy: 12 months MDT.",
    "explanationHi": "Screening in community।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-229",
    "questionEn": "POD in leprosy stands for:",
    "questionHi": "Opportunistic Screening क्या है?",
    "optionsEn": [
      "Prevention of Disease",
      "Prevention of Disability",
      "Post Observation Department",
      "Primary Outcome Delivery"
    ],
    "optionsHi": [
      "जनसंख्या आधारित",
      "स्वास्थ्य सुविधा में आने वालों की जांच",
      "कोई स्क्रीनिंग नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "POD (Prevention of Disability) teaches self-care practices to prevent deformities in leprosy patients.",
    "explanationHi": "Screening when visiting facility।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-230",
    "questionEn": "India achieved leprosy elimination (prevalence <1/10,000) in:",
    "questionHi": "Evidence-Based Public Health क्या है?",
    "optionsEn": [
      "1995",
      "2000",
      "2005",
      "2010"
    ],
    "optionsHi": [
      "अनुमान आधारित",
      "वैज्ञानिक साक्ष्य पर आधारित निर्णय और हस्तक्षेप",
      "केवल अनुभव",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "India achieved leprosy elimination at national level in 2005, though pockets of high endemicity remain.",
    "explanationHi": "Scientific evidence for decisions।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-231",
    "questionEn": "Kala-azar is transmitted by:",
    "questionHi": "Randomized Controlled Trial (RCT) क्या है?",
    "optionsEn": [
      "Mosquito",
      "Sandfly",
      "Housefly",
      "Tsetse fly"
    ],
    "optionsHi": [
      "सर्वेक्षण",
      "हस्तक्षेप की प्रभावशीलता जांचने के लिए सबसे विश्वसनीय अध्ययन",
      "केस स्टडी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Kala-azar (visceral leishmaniasis) is transmitted by the bite of infected sandfly.",
    "explanationHi": "Gold standard study design।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-232",
    "questionEn": "Japanese Encephalitis is transmitted by:",
    "questionHi": "Cohort Study क्या है?",
    "optionsEn": [
      "Aedes mosquito",
      "Anopheles mosquito",
      "Culex mosquito",
      "Sandfly"
    ],
    "optionsHi": [
      "पीछे देखना",
      "समूह को आगे समय में फॉलो करना (जोखिम → रोग)",
      "केस-कंट्रोल",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "JE is transmitted by Culex mosquitoes that breed in rice paddies. Pigs are the amplifying hosts.",
    "explanationHi": "Prospective study।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-233",
    "questionEn": "MDA for filariasis stands for:",
    "questionHi": "Case-Control Study क्या है?",
    "optionsEn": [
      "Minimum Drug Administration",
      "Mass Drug Administration",
      "Monthly Drug Administration",
      "Medical Drug Analysis"
    ],
    "optionsHi": [
      "आगे देखना",
      "रोगियों और नियंत्रण की पिछली जोखिम की तुलना",
      "Cohort",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MDA involves giving DEC + Albendazole to entire population in endemic areas to interrupt filariasis transmission.",
    "explanationHi": "Retrospective study।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-234",
    "questionEn": "RDT for malaria can be done by:",
    "questionHi": "Cross-Sectional Study क्या है?",
    "optionsEn": [
      "Only doctors",
      "Only lab technicians",
      "ASHA and health workers",
      "Only at district level"
    ],
    "optionsHi": [
      "लंबा समय",
      "एक समय बिंदु पर जोखिम और रोग दोनों मापना",
      "केवल रोग",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Rapid Diagnostic Tests (RDT) are simple enough to be done by trained ASHAs and MPHWs at community level.",
    "explanationHi": "Point prevalence study।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-235",
    "questionEn": "The national toll-free helpline for TB is:",
    "questionHi": "Relative Risk (RR) कहां उपयोग होता है?",
    "optionsEn": [
      "1800-11-1234",
      "1800-11-6666",
      "104",
      "108"
    ],
    "optionsHi": [
      "Case-Control",
      "Cohort Study में",
      "Cross-sectional",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "1800-11-6666 is the toll-free helpline for TB information and patient support services.",
    "explanationHi": "Risk ratio in cohort।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-236",
    "questionEn": "Window period in HIV infection is:",
    "questionHi": "Odds Ratio (OR) कहां उपयोग होता है?",
    "optionsEn": [
      "Time from infection to symptoms",
      "Time from infection to detectable antibodies",
      "Time from treatment to cure",
      "Time between two doses"
    ],
    "optionsHi": [
      "Cohort",
      "Case-Control Study में",
      "RCT",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Window period is when person is infected but antibody test may be negative (usually 3-12 weeks).",
    "explanationHi": "OR in case-control।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-237",
    "questionEn": "Source reduction in dengue control means:",
    "questionHi": "Systematic Review क्या है?",
    "optionsEn": [
      "Reducing hospitals",
      "Eliminating mosquito breeding sites",
      "Reducing population",
      "Reducing vaccines"
    ],
    "optionsHi": [
      "एक अध्ययन",
      "कई अध्ययनों का व्यवस्थित संकलन और विश्लेषण",
      "केवल राय",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Source reduction eliminates water collections where Aedes breeds - coolers, pots, tyres, containers.",
    "explanationHi": "Synthesis of studies।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-238",
    "questionEn": "TB contact tracing focuses on:",
    "questionHi": "Meta-Analysis क्या है?",
    "optionsEn": [
      "All neighbors",
      "Household contacts",
      "All hospital patients",
      "Random community members"
    ],
    "optionsHi": [
      "एक अध्ययन",
      "कई अध्ययनों के आंकड़ों का सांख्यिकीय संयोजन",
      "Systematic Review नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Contact tracing prioritizes household and close contacts of TB patients who have highest risk of infection.",
    "explanationHi": "Statistical pooling।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-239",
    "questionEn": "Follow-up sputum examination during TB treatment is done at:",
    "questionHi": "Confounding क्या है?",
    "optionsEn": [
      "Every week",
      "End of 2, 4, and 6 months",
      "Only at end of treatment",
      "Every 2 weeks"
    ],
    "optionsHi": [
      "सही संबंध",
      "तीसरे कारक का संबंध को प्रभावित करना",
      "कोई प्रभाव नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sputum microscopy is done at end of intensive phase (2 months), and during continuation phase to monitor response.",
    "explanationHi": "Third variable effect।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-240",
    "questionEn": "Which is NOT a mode of HIV transmission?",
    "questionHi": "Bias क्या है?",
    "optionsEn": [
      "Unprotected sex",
      "Blood transfusion",
      "Mother to child",
      "Mosquito bite"
    ],
    "optionsHi": [
      "सही अनुमान",
      "व्यवस्थित त्रुटि जो परिणाम को प्रभावित करे",
      "यादृच्छिक त्रुटि",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "HIV is NOT transmitted by mosquito bites. Routes: sexual, blood, and mother-to-child transmission.",
    "explanationHi": "Systematic error।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-241",
    "questionEn": "For malaria, primaquine is given to:",
    "questionHi": "Selection Bias क्या है?",
    "optionsEn": [
      "Kill blood stage parasites",
      "Prevent relapse of P. vivax",
      "Prevent mosquito breeding",
      "As prophylaxis"
    ],
    "optionsHi": [
      "सही चयन",
      "अध्ययन में प्रतिभागियों के चयन में त्रुटि",
      "मापन त्रुटि",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Primaquine kills liver stage (hypnozoites) of P. vivax preventing relapse. It's radical cure.",
    "explanationHi": "Sampling error।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-242",
    "questionEn": "The target group for HIV testing includes:",
    "questionHi": "Information Bias क्या है?",
    "optionsEn": [
      "All pregnant women",
      "Only high-risk groups",
      "Only hospitalized patients",
      "Only blood donors"
    ],
    "optionsHi": [
      "सही जानकारी",
      "जानकारी संग्रह में त्रुटि",
      "चयन त्रुटि",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "All pregnant women should be tested for HIV as part of ANC for PMTCT (Prevention of Mother-to-Child Transmission).",
    "explanationHi": "Measurement error।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-243",
    "questionEn": "Nikshay Poshan Yojana provides:",
    "questionHi": "Recall Bias क्या है?",
    "optionsEn": [
      "Free drugs",
      "Nutritional support of Rs 500/month",
      "Hospital admission",
      "Transport allowance"
    ],
    "optionsHi": [
      "अच्छी याददाश्त",
      "रोगियों का पिछली घटनाओं को अधिक याद रखना",
      "कोई बायस नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "TB patients receive Rs 500/month through DBT for nutritional support during treatment.",
    "explanationHi": "Better recall in cases।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-244",
    "questionEn": "Grade 2 disability in leprosy means:",
    "questionHi": "Cost-Effectiveness Analysis क्या है?",
    "optionsEn": [
      "Loss of sensation only",
      "Visible deformity",
      "No disability",
      "Complete paralysis"
    ],
    "optionsHi": [
      "केवल लागत",
      "हस्तक्षेप की लागत और स्वास्थ्य परिणाम की तुलना",
      "केवल प्रभाव",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Grade 0: No disability. Grade 1: Loss of sensation. Grade 2: Visible deformity or damage.",
    "explanationHi": "Value for money।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-245",
    "questionEn": "Peripheral smear for malaria should be collected:",
    "questionHi": "Cost-Benefit Analysis क्या है?",
    "optionsEn": [
      "Only when fever is high",
      "Any time",
      "Only in morning",
      "Only after treatment"
    ],
    "optionsHi": [
      "केवल लागत",
      "लागत और लाभ दोनों को मौद्रिक मूल्य में मापना",
      "केवल लाभ",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Blood smear for malaria can be collected any time, but preferably during fever spike for highest parasite density.",
    "explanationHi": "Monetary comparison।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-246",
    "questionEn": "The World TB Day is observed on:",
    "questionHi": "Health Technology Assessment (HTA) क्या है?",
    "optionsEn": [
      "March 24",
      "July 28",
      "December 1",
      "October 10"
    ],
    "optionsHi": [
      "केवल मशीनें",
      "स्वास्थ्य तकनीकों की प्रभावशीलता, सुरक्षा, लागत का मूल्यांकन",
      "केवल दवाइयां",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "World TB Day on March 24 commemorates the date in 1882 when Dr. Robert Koch announced discovery of TB bacillus.",
    "explanationHi": "Evaluating health tech।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-247",
    "questionEn": "World AIDS Day is observed on:",
    "questionHi": "Quality Improvement (QI) का स्वास्थ्य में क्या अर्थ है?",
    "optionsEn": [
      "March 24",
      "July 28",
      "December 1",
      "October 10"
    ],
    "optionsHi": [
      "कुछ नहीं करना",
      "सेवाओं की गुणवत्ता में निरंतर सुधार",
      "केवल एक बार",
      "गुणवत्ता कम करना"
    ],
    "correctAnswer": 2,
    "explanationEn": "World AIDS Day on December 1 raises awareness about HIV/AIDS and remembers those who have died.",
    "explanationHi": "Continuous improvement।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-248",
    "questionEn": "DBT in TB program refers to:",
    "questionHi": "PDCA Cycle (Deming Cycle) क्या है?",
    "optionsEn": [
      "Direct Benefit Transfer",
      "Diagnosis Based Treatment",
      "Drug Based Therapy",
      "Daily Bacteriology Test"
    ],
    "optionsHi": [
      "दवाई",
      "Plan-Do-Check-Act (गुणवत्ता सुधार चक्र)",
      "बीमारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "DBT is used to transfer nutritional support (Rs 500/month) directly to TB patient's bank account.",
    "explanationHi": "QI methodology।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-249",
    "questionEn": "Intensive phase drugs in TB include:",
    "questionHi": "Patient Safety क्या है?",
    "optionsEn": [
      "HR only",
      "HRZE",
      "H only",
      "RE only"
    ],
    "optionsHi": [
      "रोगी को नुकसान",
      "स्वास्थ्य देखभाल से रोगी को होने वाली हानि रोकना",
      "केवल डॉक्टर सुरक्षा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Intensive phase (2 months): H (Isoniazid), R (Rifampicin), Z (Pyrazinamide), E (Ethambutol).",
    "explanationHi": "Preventing harm to patients।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-250",
    "questionEn": "Red Cross sign in HIV/AIDS program indicates:",
    "questionHi": "Adverse Event क्या है?",
    "optionsEn": [
      "Emergency care",
      "ART center",
      "Blood bank",
      "Trauma care"
    ],
    "optionsHi": [
      "अच्छा परिणाम",
      "स्वास्थ्य देखभाल से होने वाला अनचाहा नुकसान",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Blood safety through licensed blood banks (with Red Cross or other authorized centers) prevents HIV transmission.",
    "explanationHi": "Unintended harm।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-251",
    "questionEn": "List the components of DOTS strategy.",
    "questionHi": "Medical Error क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "सही काम",
      "स्वास्थ्य देखभाल में गलती जो रोगी को नुकसान पहुंचा सकती है",
      "कोई गलती नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Healthcare mistake।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-252",
    "questionEn": "What are the roles of MPHW in TB control?",
    "questionHi": "Sentinel Event क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "सामान्य घटना",
      "गंभीर अप्रत्याशित घटना जो मृत्यु या गंभीर हानि का कारण बने",
      "मामूली घटना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Serious unexpected event।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-253",
    "questionEn": "Describe the key malaria control strategies.",
    "questionHi": "Root Cause Analysis (RCA) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "दोषारोपण",
      "समस्या के मूल कारण खोजने की विधि",
      "केवल सजा",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Finding root causes।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-254",
    "questionEn": "What are the cardinal signs of leprosy?",
    "questionHi": "Accreditation स्वास्थ्य में क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "लाइसेंस",
      "स्वास्थ्य सुविधाओं का गुणवत्ता मानकों के अनुसार प्रमाणन",
      "केवल सरकारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Quality certification।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-255",
    "questionEn": "Explain the PMTCT protocol for HIV.",
    "questionHi": "NABH (National Accreditation Board for Hospitals) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "खेल बोर्ड",
      "भारत में अस्पतालों की गुणवत्ता मान्यता संस्था",
      "शिक्षा बोर्ड",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Hospital accreditation।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-256",
    "questionEn": "List the diseases covered under NVBDCP.",
    "questionHi": "NQAS (National Quality Assurance Standards) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "खेल मानक",
      "सरकारी स्वास्थ्य सुविधाओं के गुणवत्ता मानक",
      "खाद्य मानक",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Public sector standards।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-257",
    "questionEn": "What are the self-care practices to prevent disability in leprosy?",
    "questionHi": "Kayakalp Award किसके लिए है?",
    "optionsEn": [],
    "optionsHi": [
      "खेल",
      "स्वास्थ्य सुविधाओं की स्वच्छता और गुणवत्ता के लिए",
      "फिल्म",
      "शिक्षा"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Facility cleanliness award।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-258",
    "questionEn": "Describe dengue prevention and control measures.",
    "questionHi": "स्वास्थ्य नैतिकता (Health Ethics) के मूल सिद्धांत क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "केवल लाभ",
      "Autonomy, Beneficence, Non-maleficence, Justice",
      "केवल हानि",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "4 principles of ethics।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-259",
    "questionEn": "Compare MDT regimen for PB and MB leprosy.",
    "questionHi": "Autonomy का नैतिकता में क्या अर्थ है?",
    "optionsEn": [],
    "optionsHi": [
      "डॉक्टर का निर्णय",
      "रोगी की स्वतंत्र निर्णय लेने की क्षमता का सम्मान",
      "कोई निर्णय नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Patient's choice।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-260",
    "questionEn": "What is the role of MPHW in vector-borne disease control?",
    "questionHi": "Beneficence का क्या अर्थ है?",
    "optionsEn": [],
    "optionsHi": [
      "हानि पहुंचाना",
      "रोगी का भला करना",
      "कुछ नहीं करना",
      "केवल पैसा लेना"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Doing good।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-261",
    "questionEn": "A person in your area has been coughing for 3 weeks. He is also losing weight. What is your approach as MPHW?",
    "questionHi": "Non-maleficence का क्या अर्थ है?",
    "optionsEn": [],
    "optionsHi": [
      "लाभ पहुंचाना",
      "हानि नहीं पहुंचाना (Do no harm)",
      "कुछ नहीं",
      "केवल उपचार"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Avoid harm।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-262",
    "questionEn": "10 cases of fever with chills have been reported in your Sub-Centre area within one week. Malaria is endemic. What should you do?",
    "questionHi": "Justice का नैतिकता में क्या अर्थ है?",
    "optionsEn": [],
    "optionsHi": [
      "केवल अदालत",
      "संसाधनों का न्यायसंगत वितरण",
      "असमानता",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Fair distribution।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-263",
    "questionEn": "A TB patient has completed 2 months of treatment but wants to stop because he is feeling better. What do you advise?",
    "questionHi": "Informed Consent क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "जबरदस्ती",
      "जानकारी देने के बाद रोगी की स्वैच्छिक सहमति",
      "केवल हस्ताक्षर",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Voluntary consent।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-264",
    "questionEn": "A pregnant woman in your area tested HIV positive. What are your responsibilities as MPHW?",
    "questionHi": "Confidentiality का स्वास्थ्य में क्या महत्व है?",
    "optionsEn": [],
    "optionsHi": [
      "कोई महत्व नहीं",
      "रोगी की जानकारी गुप्त रखना, विश्वास बनाना",
      "सबको बताना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Patient privacy।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-265",
    "questionEn": "You notice a person in your village with a pale patch on the cheek which has no sensation. What should you do?",
    "questionHi": "जन स्वास्थ्य में नैतिक दुविधाएं (Ethical Dilemmas) का उदाहरण क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "कोई दुविधा नहीं",
      "व्यक्तिगत स्वतंत्रता vs सार्वजनिक हित (जैसे संगरोध)",
      "केवल व्यक्तिगत",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Individual vs public good।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-266",
    "questionEn": "TrueNat is used for diagnosis of:",
    "questionHi": "Research Ethics में IRB/Ethics Committee का क्या काम है?",
    "optionsEn": [
      "Malaria",
      "TB",
      "HIV",
      "Dengue"
    ],
    "optionsHi": [
      "शोध रोकना",
      "मानव विषयों पर शोध की नैतिक समीक्षा",
      "केवल अनुमति",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "TrueNat is a rapid molecular test for TB diagnosis, similar to CBNAAT but portable and battery-operated.",
    "explanationHi": "Ethics review।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-267",
    "questionEn": "The first-line drug regimen for TB includes all EXCEPT:",
    "questionHi": "Helsinki Declaration किससे संबंधित है?",
    "optionsEn": [
      "Isoniazid",
      "Rifampicin",
      "Streptomycin",
      "Ethambutol"
    ],
    "optionsHi": [
      "पर्यावरण",
      "मानव विषयों पर चिकित्सा अनुसंधान की नैतिकता",
      "खाद्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "First-line oral drugs: HRZE (Isoniazid, Rifampicin, Pyrazinamide, Ethambutol). Streptomycin is injectable, used in specific situations.",
    "explanationHi": "Medical research ethics।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-268",
    "questionEn": "DMC stands for:",
    "questionHi": "जन स्वास्थ्य में Equity और Equality में क्या अंतर है?",
    "optionsEn": [
      "Disease Management Centre",
      "Designated Microscopy Centre",
      "District Medical Centre",
      "Drug Manufacturing Centre"
    ],
    "optionsHi": [
      "एक ही है",
      "Equality=समान, Equity=जरूरत के अनुसार (असमानता दूर करना)",
      "कोई अंतर नहीं",
      "विपरीत"
    ],
    "correctAnswer": 1,
    "explanationEn": "DMCs provide sputum microscopy services for TB diagnosis, usually located at PHC/CHC level.",
    "explanationHi": "Equal vs equitable।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-269",
    "questionEn": "Aedes mosquito breeds in:",
    "questionHi": "Vulnerable Population का जन स्वास्थ्य में क्या अर्थ है?",
    "optionsEn": [
      "Running water",
      "Stagnant dirty water",
      "Clean stagnant water containers",
      "Underground water"
    ],
    "optionsHi": [
      "शक्तिशाली",
      "कमजोर/वंचित समूह जिन्हें विशेष ध्यान की जरूरत",
      "सभी समान",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Aedes breeds in clean water collected in containers - coolers, pots, tyres, overhead tanks.",
    "explanationHi": "At-risk groups।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-270",
    "questionEn": "World Malaria Day is observed on:",
    "questionHi": "Marginalized Population का उदाहरण क्या है?",
    "optionsEn": [
      "March 24",
      "April 25",
      "July 28",
      "December 1"
    ],
    "optionsHi": [
      "अमीर",
      "जनजाति, दलित, विकलांग, प्रवासी, LGBTQ",
      "शहरी अमीर",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "World Malaria Day on April 25 highlights global efforts to control and eliminate malaria.",
    "explanationHi": "Socially excluded groups।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-271",
    "questionEn": "The antidote for organophosphate poisoning (malathion/temephos overdose) is:",
    "questionHi": "Gender और Health में क्या संबंध है?",
    "optionsEn": [
      "Atropine",
      "Vitamin K",
      "Calcium gluconate",
      "Naloxone"
    ],
    "optionsHi": [
      "कोई संबंध नहीं",
      "लिंग के अनुसार स्वास्थ्य जोखिम, पहुंच और परिणाम भिन्न होते हैं",
      "समान",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Atropine is the antidote for organophosphate toxicity, which can occur with insecticide exposure.",
    "explanationHi": "Gender affects health।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-272",
    "questionEn": "Red Ribbon is the symbol of:",
    "questionHi": "Gender Mainstreaming स्वास्थ्य में क्या है?",
    "optionsEn": [
      "TB awareness",
      "HIV/AIDS awareness",
      "Cancer awareness",
      "Leprosy awareness"
    ],
    "optionsHi": [
      "केवल महिला",
      "सभी स्वास्थ्य नीतियों और कार्यक्रमों में लिंग पहलू का समावेश",
      "केवल पुरुष",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Red Ribbon is the international symbol of HIV/AIDS awareness and support.",
    "explanationHi": "Gender in all policies।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-273",
    "questionEn": "VDRL test is used to diagnose:",
    "questionHi": "जलवायु परिवर्तन का जन स्वास्थ्य पर क्या प्रभाव है?",
    "optionsEn": [
      "HIV",
      "Syphilis",
      "TB",
      "Leprosy"
    ],
    "optionsHi": [
      "कोई प्रभाव नहीं",
      "गर्मी की बीमारी, वेक्टर-जनित रोग, जल संकट, पोषण प्रभाव",
      "केवल लाभ",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "VDRL (Venereal Disease Research Laboratory) test is a screening test for syphilis, an STI.",
    "explanationHi": "Climate-health link।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-274",
    "questionEn": "Chloroquine resistance is a major problem in:",
    "questionHi": "Planetary Health क्या है?",
    "optionsEn": [
      "P. vivax malaria",
      "P. falciparum malaria",
      "Kala-azar",
      "Filariasis"
    ],
    "optionsHi": [
      "केवल पृथ्वी",
      "मानव स्वास्थ्य और पृथ्वी की प्राकृतिक प्रणालियों का परस्पर संबंध",
      "केवल मनुष्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "P. falciparum has developed resistance to chloroquine in most areas, hence ACT is the first-line treatment.",
    "explanationHi": "Human-planet health link।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-275",
    "questionEn": "Fogging for mosquito control uses:",
    "questionHi": "Sustainable Development का स्वास्थ्य से क्या संबंध है?",
    "optionsEn": [
      "Pyrethroid insecticides",
      "DDT only",
      "Antibiotics",
      "Herbicides"
    ],
    "optionsHi": [
      "कोई संबंध नहीं",
      "स्वस्थ जनसंख्या = सतत विकास, पर्यावरण संरक्षण = स्वास्थ्य",
      "विपरीत",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Pyrethroid insecticides are used for fogging during dengue outbreaks to kill adult mosquitoes.",
    "explanationHi": "Health-sustainability link।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-276",
    "questionEn": "Hemoptysis in TB means:",
    "questionHi": "WHO SEARO (South-East Asia Regional Office) कहां है?",
    "optionsEn": [
      "Blood in urine",
      "Blood in sputum",
      "Blood in stool",
      "Nose bleeding"
    ],
    "optionsHi": [
      "जेनेवा",
      "नई दिल्ली",
      "बैंकॉक",
      "मनीला"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hemoptysis (coughing up blood) is a symptom of pulmonary TB indicating lung tissue damage.",
    "explanationHi": "SEARO in Delhi।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-277",
    "questionEn": "Sputum sample container for TB should be:",
    "questionHi": "UNICEF का पूर्ण रूप क्या है?",
    "optionsEn": [
      "Glass bottle",
      "Wide-mouth screw cap container",
      "Any bottle",
      "Metal container"
    ],
    "optionsHi": [
      "United Nations Child",
      "United Nations Children's Fund",
      "United Network",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Wide-mouth container allows easy collection, screw cap prevents spillage and contamination during transport.",
    "explanationHi": "UN children's agency।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-278",
    "questionEn": "The organism causing TB is:",
    "questionHi": "UNICEF का स्वास्थ्य में क्या योगदान है?",
    "optionsEn": [
      "Mycobacterium leprae",
      "Mycobacterium tuberculosis",
      "Streptococcus pneumoniae",
      "Vibrio cholerae"
    ],
    "optionsHi": [
      "कोई योगदान नहीं",
      "बाल स्वास्थ्य, पोषण, टीकाकरण, WASH",
      "केवल शिक्षा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "M. tuberculosis (Koch's bacillus) causes tuberculosis. M. leprae causes leprosy.",
    "explanationHi": "Child health focus।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-279",
    "questionEn": "IPT in TB stands for:",
    "questionHi": "UNFPA का पूर्ण रूप और कार्य क्या है?",
    "optionsEn": [
      "Intensive Phase Treatment",
      "Isoniazid Preventive Therapy",
      "Initial Patient Testing",
      "Integrated Program Treatment"
    ],
    "optionsHi": [
      "United Nations",
      "United Nations Population Fund - जनसंख्या और प्रजनन स्वास्थ्य",
      "Food Agency",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "IPT is given to close contacts (especially children) of TB patients to prevent development of active TB.",
    "explanationHi": "Population and RH।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-280",
    "questionEn": "The elimination target for Kala-azar is:",
    "questionHi": "World Bank का स्वास्थ्य में क्या योगदान है?",
    "optionsEn": [
      "<1/1000",
      "<1/10,000",
      "<1/100,000",
      "Zero cases"
    ],
    "optionsHi": [
      "केवल बैंकिंग",
      "स्वास्थ्य क्षेत्र में वित्तीय और तकनीकी सहायता",
      "कोई योगदान नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Kala-azar elimination target is <1 case per 10,000 population at block level.",
    "explanationHi": "Health financing।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-281",
    "questionEn": "Miltefosine is used to treat:",
    "questionHi": "GAVI (Global Alliance for Vaccines and Immunization) क्या करता है?",
    "optionsEn": [
      "Malaria",
      "TB",
      "Kala-azar",
      "Leprosy"
    ],
    "optionsHi": [
      "दवाइयां",
      "गरीब देशों में टीकाकरण को बढ़ावा और वित्तपोषण",
      "केवल अमीर देश",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Miltefosine is an oral drug for treatment of visceral leishmaniasis (Kala-azar).",
    "explanationHi": "Vaccine alliance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-282",
    "questionEn": "Genu valgum (knock knees) is a deformity seen in:",
    "questionHi": "Global Fund क्या है?",
    "optionsEn": [
      "TB",
      "Leprosy",
      "Filariasis",
      "Fluorosis"
    ],
    "optionsHi": [
      "बैंक",
      "HIV, TB, मलेरिया के खिलाफ वित्तपोषण संस्था",
      "केवल मलेरिया",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Fluorosis causes dental and skeletal problems including genu valgum due to excessive fluoride intake.",
    "explanationHi": "Funding for 3 diseases।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-283",
    "questionEn": "Triple drug therapy (MDT) for MB leprosy was introduced in:",
    "questionHi": "Bill and Melinda Gates Foundation का स्वास्थ्य में क्या योगदान है?",
    "optionsEn": [
      "1972",
      "1982",
      "1992",
      "2002"
    ],
    "optionsHi": [
      "कोई योगदान नहीं",
      "टीकाकरण, पोलियो उन्मूलन, MCH, संक्रामक रोग",
      "केवल कंप्यूटर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WHO introduced MDT for leprosy in 1982, revolutionizing treatment and reducing prevalence dramatically.",
    "explanationHi": "Health philanthropy।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-284",
    "questionEn": "Sulfones (Dapsone) is used in treatment of:",
    "questionHi": "PEPFAR (US President's Emergency Plan for AIDS Relief) क्या है?",
    "optionsEn": [
      "TB",
      "Leprosy",
      "Malaria",
      "HIV"
    ],
    "optionsHi": [
      "मलेरिया",
      "अमेरिका का वैश्विक HIV/AIDS कार्यक्रम",
      "TB",
      "पोलियो"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dapsone is a sulfone antibiotic that has been used for leprosy treatment since the 1940s.",
    "explanationHi": "US AIDS program।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-285",
    "questionEn": "World Leprosy Day falls on:",
    "questionHi": "CDC (Centers for Disease Control and Prevention) किस देश की संस्था है?",
    "optionsEn": [
      "Last Sunday of January",
      "March 24",
      "April 7",
      "December 1"
    ],
    "optionsHi": [
      "भारत",
      "अमेरिका (USA)",
      "ब्रिटेन",
      "चीन"
    ],
    "correctAnswer": 0,
    "explanationEn": "World Leprosy Day is observed on the last Sunday of January to raise awareness about leprosy.",
    "explanationHi": "US CDC।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-286",
    "questionEn": "Genital ulcer disease may be caused by all EXCEPT:",
    "questionHi": "जन स्वास्थ्य में NGO की क्या भूमिका है?",
    "optionsEn": [
      "Syphilis",
      "Herpes",
      "Gonorrhea",
      "Chancroid"
    ],
    "optionsHi": [
      "कोई भूमिका नहीं",
      "सेवा वितरण, वकालत, नवाचार, सरकार का सहयोग",
      "सरकार के विरुद्ध",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Syphilis, herpes, and chancroid cause ulcers. Gonorrhea causes urethral/vaginal discharge, not ulcers.",
    "explanationHi": "NGO contributions।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-287",
    "questionEn": "PEP in HIV context stands for:",
    "questionHi": "CSR (Corporate Social Responsibility) का स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "Post Exposure Prophylaxis",
      "Pre Exposure Prevention",
      "Patient Education Program",
      "Positive Elimination Plan"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "निजी कंपनियों का स्वास्थ्य क्षेत्र में योगदान",
      "केवल लाभ",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "PEP involves taking ARV drugs after potential HIV exposure (occupational, sexual) to prevent infection.",
    "explanationHi": "Corporate contributions।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-288",
    "questionEn": "PrEP in HIV prevention is given:",
    "questionHi": "स्वास्थ्य में Innovation का क्या महत्व है?",
    "optionsEn": [
      "After exposure",
      "Before potential exposure",
      "Only to HIV positive persons",
      "To children only"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "नई तकनीक, विधियां, दृष्टिकोण से स्वास्थ्य सुधार",
      "पुराना ही सही",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "PrEP (Pre-Exposure Prophylaxis) is taken by HIV-negative high-risk individuals before potential exposure.",
    "explanationHi": "Health innovation।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-289",
    "questionEn": "Cotrimoxazole prophylaxis for HIV patients prevents:",
    "questionHi": "mHealth (Mobile Health) क्या है?",
    "optionsEn": [
      "TB only",
      "Opportunistic infections",
      "AIDS",
      "Drug resistance"
    ],
    "optionsHi": [
      "अस्पताल",
      "मोबाइल तकनीक का स्वास्थ्य में उपयोग",
      "केवल फोन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cotrimoxazole prevents opportunistic infections like Pneumocystis pneumonia in HIV patients.",
    "explanationHi": "Mobile for health।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-290",
    "questionEn": "The target for malaria elimination in India is:",
    "questionHi": "AI (Artificial Intelligence) का जन स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "2025",
      "2027",
      "2030",
      "2035"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "निदान, भविष्यवाणी, निगरानी, संसाधन आवंटन में सहायता",
      "केवल रोबोट",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "India aims to eliminate malaria by 2030 as per the National Framework for Malaria Elimination.",
    "explanationHi": "AI applications।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-291",
    "questionEn": "G6PD testing is required before giving:",
    "questionHi": "Big Data का जन स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "Chloroquine",
      "Primaquine",
      "ACT",
      "Doxycycline"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "रोग प्रवृत्ति विश्लेषण, निर्णय समर्थन, अनुसंधान",
      "केवल डेटा संग्रह",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Primaquine can cause hemolysis in G6PD deficient individuals, so testing may be needed before use.",
    "explanationHi": "Data analytics।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-292",
    "questionEn": "The drug given as DOT in leprosy is:",
    "questionHi": "GIS (Geographic Information System) का जन स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "Dapsone",
      "Rifampicin",
      "Clofazimine daily dose",
      "All of the above"
    ],
    "optionsHi": [
      "केवल नक्शे",
      "रोग मानचित्रण, संसाधन योजना, प्रकोप विश्लेषण",
      "कोई उपयोग नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Monthly dose of Rifampicin (and Clofazimine 300mg in MB) is given under supervision (DOT).",
    "explanationHi": "Spatial analysis।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-293",
    "questionEn": "Clofazimine causes:",
    "questionHi": "Point-of-Care Testing क्या है?",
    "optionsEn": [
      "Liver damage",
      "Skin discoloration",
      "Kidney failure",
      "Hearing loss"
    ],
    "optionsHi": [
      "प्रयोगशाला में",
      "रोगी के पास ही त्वरित परीक्षण",
      "कोई परीक्षण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clofazimine causes brownish skin discoloration which is reversible after stopping the drug.",
    "explanationHi": "Bedside testing।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-294",
    "questionEn": "Lymphedema is a complication of:",
    "questionHi": "Drone का स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "TB",
      "Filariasis",
      "Leprosy",
      "Malaria"
    ],
    "optionsHi": [
      "युद्ध",
      "दुर्गम क्षेत्रों में दवाई/वैक्सीन/रक्त पहुंचाना",
      "केवल फोटोग्राफी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lymphatic filariasis causes lymphedema (swelling) of limbs and elephantiasis due to lymphatic obstruction.",
    "explanationHi": "Medical delivery।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-295",
    "questionEn": "DEC tablet is used for:",
    "questionHi": "जन स्वास्थ्य में Leadership क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "TB",
      "Filariasis",
      "Kala-azar",
      "Dengue"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "दिशा, प्रेरणा, समन्वय, परिवर्तन प्रबंधन",
      "केवल आदेश",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Diethylcarbamazine (DEC) is used in MDA for filariasis to kill microfilariae.",
    "explanationHi": "Leadership importance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-296",
    "questionEn": "ELISA test is a confirmatory test for:",
    "questionHi": "स्वास्थ्य में Governance का क्या अर्थ है?",
    "optionsEn": [
      "TB",
      "HIV",
      "Malaria",
      "Leprosy"
    ],
    "optionsHi": [
      "केवल सरकार",
      "स्वास्थ्य प्रणाली का प्रभावी प्रबंधन और जवाबदेही",
      "कोई प्रबंधन नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ELISA (Enzyme-Linked Immunosorbent Assay) is used to confirm HIV infection after rapid test.",
    "explanationHi": "Health governance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-297",
    "questionEn": "The CDC staging for HIV is based on:",
    "questionHi": "Accountability का स्वास्थ्य प्रणाली में क्या महत्व है?",
    "optionsEn": [
      "Viral load",
      "CD4 count",
      "Symptoms only",
      "Duration of infection"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "पारदर्शिता, जनता का विश्वास, बेहतर सेवाएं",
      "केवल सजा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CDC classification uses CD4 count (and clinical conditions) to stage HIV disease progression.",
    "explanationHi": "System accountability।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-298",
    "questionEn": "Zero-dose in immunization refers to:",
    "questionHi": "जन स्वास्थ्य में भविष्य की चुनौतियां क्या हैं?",
    "optionsEn": [
      "No vaccine given",
      "Birth dose",
      "First dose",
      "Booster dose"
    ],
    "optionsHi": [
      "कोई चुनौती नहीं",
      "NCD, AMR, जलवायु परिवर्तन, उभरते संक्रमण, असमानता",
      "सब ठीक है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Zero-dose vaccines are given at birth (BCG, OPV-0, Hepatitis B birth dose).",
    "explanationHi": "Future challenges।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-299",
    "questionEn": "AFB in TB diagnosis stands for:",
    "questionHi": "Emerging Infectious Diseases क्या हैं?",
    "optionsEn": [
      "Anti-fungal Bacteria",
      "Acid Fast Bacilli",
      "Aerobic Facultative Bacteria",
      "Active Form Bacteria"
    ],
    "optionsHi": [
      "पुरानी बीमारियां",
      "नए या पुनः उभरते संक्रामक रोग (COVID-19, Ebola, Nipah)",
      "NCD",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "AFB (Acid Fast Bacilli) refers to mycobacteria that retain stain after acid wash in Ziehl-Neelsen staining.",
    "explanationHi": "New infections।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-300",
    "questionEn": "The stigma of leprosy is mainly due to:",
    "questionHi": "Pandemic Preparedness क्या है?",
    "optionsEn": [
      "High mortality",
      "Visible deformities",
      "Need for hospitalization",
      "High cost of treatment"
    ],
    "optionsHi": [
      "कोई तैयारी नहीं",
      "महामारी से पहले योजना, संसाधन और क्षमता निर्माण",
      "केवल प्रतिक्रिया",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Historical stigma around leprosy is largely due to visible deformities when untreated, though MDT prevents this.",
    "explanationHi": "Planning for pandemics।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Communicable Disease Programs",
    "tags": [
      "communicable-disease-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-301",
    "questionEn": "NPCDCS stands for:",
    "questionHi": "Health Emergency Preparedness में क्या शामिल है?",
    "optionsEn": [
      "National Programme for Care of Diabetes and Stroke",
      "National Programme for Prevention and Control of Cancer, Diabetes, CVD and Stroke",
      "National Prevention of Communicable Disease Control System",
      "National Programme for Chronic Disease Services"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "योजना, प्रशिक्षण, स्टॉकपाइल, समन्वय तंत्र",
      "केवल दवाइयां",
      "केवल अस्पताल"
    ],
    "correctAnswer": 1,
    "explanationEn": "NPCDCS focuses on NCDs: Cancer, Diabetes, Cardiovascular diseases, and Stroke.",
    "explanationHi": "Preparedness components।",
    "difficulty": "easy",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-302",
    "questionEn": "NCDs account for what percentage of deaths in India?",
    "questionHi": "Health Security क्या है?",
    "optionsEn": [
      "30%",
      "45%",
      "63%",
      "80%"
    ],
    "optionsHi": [
      "केवल सुरक्षा",
      "संक्रामक रोग खतरों से जनसंख्या की सुरक्षा",
      "केवल सेना",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Non-communicable diseases cause approximately 63% of all deaths in India.",
    "explanationHi": "Protection from health threats।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-303",
    "questionEn": "Population-based NCD screening targets adults above age:",
    "questionHi": "Health System Strengthening (HSS) के 6 Building Blocks क्या हैं?",
    "optionsEn": [
      "18 years",
      "25 years",
      "30 years",
      "40 years"
    ],
    "optionsHi": [
      "केवल 3",
      "Service Delivery, Health Workforce, Information, Medical Products, Financing, Leadership/Governance",
      "केवल पैसा",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "NPCDCS recommends screening all adults ≥30 years for common NCDs.",
    "explanationHi": "WHO building blocks।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-304",
    "questionEn": "Fasting blood glucose level for diabetes diagnosis is:",
    "questionHi": "Health Workforce Crisis क्या है?",
    "optionsEn": [
      "≥100 mg/dL",
      "≥126 mg/dL",
      "≥140 mg/dL",
      "≥200 mg/dL"
    ],
    "optionsHi": [
      "पर्याप्त कर्मचारी",
      "स्वास्थ्य कर्मियों की वैश्विक कमी",
      "अधिक कर्मचारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fasting glucose ≥126 mg/dL on two occasions indicates diabetes. 100-125 is prediabetes.",
    "explanationHi": "Shortage of health workers।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-305",
    "questionEn": "Stage 2 hypertension is defined as BP:",
    "questionHi": "भारत में डॉक्टर-जनसंख्या अनुपात WHO मानक से कैसा है?",
    "optionsEn": [
      "120-129/<80",
      "130-139/80-89",
      "≥140/≥90",
      ">180/>120"
    ],
    "optionsHi": [
      "अधिक",
      "कम (WHO: 1:1000, भारत: ~1:1456)",
      "बराबर",
      "कोई डेटा नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Stage 2 HTN: Systolic ≥140 OR Diastolic ≥90 mmHg.",
    "explanationHi": "Below WHO standard।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-306",
    "questionEn": "Normal blood pressure is:",
    "questionHi": "Task Shifting क्या है?",
    "optionsEn": [
      "<100/<60",
      "<120 and <80",
      "<130/<85",
      "<140/<90"
    ],
    "optionsHi": [
      "काम छोड़ना",
      "कार्यों को कम प्रशिक्षित कर्मियों को सौंपना (कमी दूर करने के लिए)",
      "अधिक काम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Normal BP is systolic <120 AND diastolic <80 mmHg.",
    "explanationHi": "Delegating tasks।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-307",
    "questionEn": "The recommended salt intake per day is:",
    "questionHi": "Mid-Level Health Provider का उदाहरण क्या है?",
    "optionsEn": [
      "<3 grams",
      "<5 grams",
      "<8 grams",
      "<10 grams"
    ],
    "optionsHi": [
      "विशेषज्ञ डॉक्टर",
      "CHO, Health Assistant, Community Health Worker",
      "केवल MBBS",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WHO recommends <5g salt (about 1 teaspoon) per day to prevent hypertension.",
    "explanationHi": "Non-physician providers।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-308",
    "questionEn": "VIA stands for:",
    "questionHi": "Essential Medicines List क्या है?",
    "optionsEn": [
      "Visual Inspection with Acid",
      "Visual Inspection with Acetic Acid",
      "Vaginal Internal Assessment",
      "Viral Infection Analysis"
    ],
    "optionsHi": [
      "सभी दवाइयां",
      "जनसंख्या की मूलभूत स्वास्थ्य जरूरतों के लिए आवश्यक दवाइयों की सूची",
      "केवल महंगी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "VIA is a cervical cancer screening method using 5% acetic acid to detect precancerous changes.",
    "explanationHi": "WHO EML concept।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-309",
    "questionEn": "CBE stands for:",
    "questionHi": "NLEM (National List of Essential Medicines) भारत में क्या है?",
    "optionsEn": [
      "Complete Body Examination",
      "Clinical Breast Examination",
      "Cancer Blood Estimation",
      "Cervical Body Evaluation"
    ],
    "optionsHi": [
      "सभी दवाइयां",
      "भारत की आवश्यक दवाइयों की राष्ट्रीय सूची",
      "केवल आयुर्वेदिक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CBE is physical examination of breasts by trained health worker to detect abnormalities.",
    "explanationHi": "India's essential medicines।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-310",
    "questionEn": "Oral cancer is most common in people who use:",
    "questionHi": "Jan Aushadhi Scheme क्या है?",
    "optionsEn": [
      "Only alcohol",
      "Only smoking",
      "Tobacco (smoking and chewing)",
      "Fast food"
    ],
    "optionsHi": [
      "महंगी दवाइयां",
      "सस्ती जेनेरिक दवाइयां उपलब्ध कराने की योजना",
      "केवल सरकारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Tobacco use (smoking and smokeless) is the major risk factor for oral cancer in India.",
    "explanationHi": "Affordable generics।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-311",
    "questionEn": "White patch in mouth that doesn't scrape off is called:",
    "questionHi": "Generic Medicine क्या है?",
    "optionsEn": [
      "Erythroplakia",
      "Leukoplakia",
      "Oral thrush",
      "Glossitis"
    ],
    "optionsHi": [
      "ब्रांड नाम",
      "पेटेंट समाप्त होने के बाद बनी समान दवाई (सस्ती)",
      "केवल महंगी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Leukoplakia is a white patch that may be precancerous and needs biopsy evaluation.",
    "explanationHi": "Off-patent medicines।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-312",
    "questionEn": "World Diabetes Day is observed on:",
    "questionHi": "Drug Price Control Order (DPCO) क्या है?",
    "optionsEn": [
      "April 7",
      "October 10",
      "November 14",
      "December 1"
    ],
    "optionsHi": [
      "मूल्य बढ़ाना",
      "आवश्यक दवाइयों के मूल्य नियंत्रण का आदेश",
      "कोई नियंत्रण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "World Diabetes Day on November 14 (birthday of insulin discoverer Frederick Banting).",
    "explanationHi": "Price regulation।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-313",
    "questionEn": "Metformin is first-line drug for:",
    "questionHi": "NPPA (National Pharmaceutical Pricing Authority) क्या करता है?",
    "optionsEn": [
      "Hypertension",
      "Type 2 Diabetes",
      "Heart failure",
      "Cancer"
    ],
    "optionsHi": [
      "दवाई बनाना",
      "दवाइयों के मूल्य निर्धारण और नियंत्रण",
      "केवल विज्ञापन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Metformin is the first-line oral antidiabetic drug for Type 2 DM with lifestyle modification.",
    "explanationHi": "Drug pricing authority।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-314",
    "questionEn": "BMI indicating obesity is:",
    "questionHi": "Rational Use of Medicines क्या है?",
    "optionsEn": [
      ">23",
      ">25",
      ">27",
      ">30"
    ],
    "optionsHi": [
      "अंधाधुंध उपयोग",
      "सही दवाई, सही खुराक, सही समय, सही रोगी",
      "कोई दवाई नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "For Asians: BMI 23-24.9 is overweight, ≥25 is obese. International: ≥30 is obese.",
    "explanationHi": "Appropriate medicine use।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-315",
    "questionEn": "NMHP stands for:",
    "questionHi": "Polypharmacy क्या है और इसकी समस्या क्या है?",
    "optionsEn": [
      "National Maternal Health Programme",
      "National Mental Health Programme",
      "National Malaria Health Programme",
      "National Medical Hospital Programme"
    ],
    "optionsHi": [
      "एक दवाई",
      "एक साथ कई दवाइयां - दुष्प्रभाव और इंटरैक्शन का जोखिम",
      "कोई दवाई नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "NMHP addresses mental health through community-based services and training.",
    "explanationHi": "Multiple medications।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-316",
    "questionEn": "DMHP stands for:",
    "questionHi": "Self-Medication की समस्या क्या है?",
    "optionsEn": [
      "District Maternal Health Programme",
      "District Mental Health Programme",
      "District Medical Health Programme",
      "District Medicine and Hospital Programme"
    ],
    "optionsHi": [
      "कोई समस्या नहीं",
      "गलत निदान, दुष्प्रभाव, AMR, उचित उपचार में देरी",
      "हमेशा सही",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "DMHP provides mental health services at district level through DH and outreach.",
    "explanationHi": "Risks of self-medication।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-317",
    "questionEn": "Common mental health problem in India is:",
    "questionHi": "Pharmacovigilance क्या है?",
    "optionsEn": [
      "Schizophrenia",
      "Depression and anxiety",
      "Bipolar disorder",
      "Autism"
    ],
    "optionsHi": [
      "दवाई बनाना",
      "दवाइयों के दुष्प्रभावों की निगरानी और रिपोर्टिंग",
      "केवल बिक्री",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Depression and anxiety are the most common mental health conditions, affecting 10-20% population.",
    "explanationHi": "Drug safety monitoring।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-318",
    "questionEn": "World Mental Health Day is observed on:",
    "questionHi": "ADR (Adverse Drug Reaction) क्या है?",
    "optionsEn": [
      "March 24",
      "July 28",
      "October 10",
      "December 1"
    ],
    "optionsHi": [
      "सही प्रभाव",
      "दवाई से होने वाला अनचाहा हानिकारक प्रभाव",
      "कोई प्रभाव नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "World Mental Health Day on October 10 raises awareness about mental health issues.",
    "explanationHi": "Unwanted drug effect।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-319",
    "questionEn": "NPHCE stands for:",
    "questionHi": "CDSCO का पूर्ण रूप और कार्य क्या है?",
    "optionsEn": [
      "National Programme for Health Care of Elderly",
      "National Prevention of Heart and Cardiovascular Events",
      "National Programme for Hospital Care Enhancement",
      "National Plan for Health Coverage Extension"
    ],
    "optionsHi": [
      "Central Drug",
      "Central Drugs Standard Control Organisation - दवाई नियामक",
      "केवल आयात",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "NPHCE addresses health needs of population ≥60 years through dedicated services.",
    "explanationHi": "Drug regulator।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-320",
    "questionEn": "Elderly population in India is defined as age:",
    "questionHi": "DCGI क्या है?",
    "optionsEn": [
      "≥55 years",
      "≥60 years",
      "≥65 years",
      "≥70 years"
    ],
    "optionsHi": [
      "डॉक्टर",
      "Drugs Controller General of India - दवाई नियंत्रक",
      "केवल निर्माण",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "In India, persons ≥60 years are classified as elderly (senior citizens).",
    "explanationHi": "Head of CDSCO।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-321",
    "questionEn": "Diabetic foot care includes all EXCEPT:",
    "questionHi": "Medical Devices Regulation क्या है?",
    "optionsEn": [
      "Daily foot inspection",
      "Walking barefoot",
      "Wearing proper footwear",
      "Keeping feet clean and dry"
    ],
    "optionsHi": [
      "केवल दवाइयां",
      "चिकित्सा उपकरणों की गुणवत्ता और सुरक्षा का नियमन",
      "कोई नियमन नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Diabetics should NEVER walk barefoot to prevent injuries that may go unnoticed due to neuropathy.",
    "explanationHi": "Device safety।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-322",
    "questionEn": "DASH diet is recommended for:",
    "questionHi": "AYUSH का पूर्ण रूप क्या है?",
    "optionsEn": [
      "Diabetes",
      "Hypertension",
      "Cancer",
      "TB"
    ],
    "optionsHi": [
      "Ayurveda Yoga",
      "Ayurveda, Yoga, Unani, Siddha, Homeopathy",
      "केवल Ayurveda",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "DASH (Dietary Approaches to Stop Hypertension) diet reduces salt and emphasizes fruits, vegetables.",
    "explanationHi": "Traditional medicine systems।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-323",
    "questionEn": "Tobacco Quitline number in India is:",
    "questionHi": "National AYUSH Mission का उद्देश्य क्या है?",
    "optionsEn": [
      "104",
      "108",
      "1800-11-2356",
      "1800-11-0031"
    ],
    "optionsHi": [
      "केवल आयुर्वेद",
      "AYUSH सेवाओं को मुख्यधारा में लाना और पहुंच बढ़ाना",
      "AYUSH बंद करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "1800-11-0031 is the national toll-free Tobacco Quitline for cessation support.",
    "explanationHi": "Mainstreaming AYUSH।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-324",
    "questionEn": "NCD clinic is established at:",
    "questionHi": "Integrative Medicine क्या है?",
    "optionsEn": [
      "Sub-Centre",
      "PHC",
      "CHC/DH",
      "Medical College only"
    ],
    "optionsHi": [
      "केवल आधुनिक",
      "आधुनिक और पारंपरिक चिकित्सा का संयोजन",
      "केवल पारंपरिक",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "NCD clinics at CHC and DH provide specialized diagnosis, treatment, and follow-up for NCDs.",
    "explanationHi": "Combining systems।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-325",
    "questionEn": "VIA positive result indicates:",
    "questionHi": "जन स्वास्थ्य में योग का क्या महत्व है?",
    "optionsEn": [
      "Normal cervix",
      "Possible precancer/cancer",
      "Pregnancy",
      "Infection"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "स्वास्थ्य संवर्धन, तनाव प्रबंधन, NCD रोकथाम",
      "केवल व्यायाम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Acetowhite areas on VIA suggest abnormal cells requiring further evaluation (colposcopy/biopsy).",
    "explanationHi": "Yoga for health।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-326",
    "questionEn": "HbA1c test measures blood glucose control over:",
    "questionHi": "International Yoga Day कब है?",
    "optionsEn": [
      "1 week",
      "1 month",
      "2-3 months",
      "6 months"
    ],
    "optionsHi": [
      "1 जनवरी",
      "21 जून",
      "15 अगस्त",
      "2 अक्टूबर"
    ],
    "correctAnswer": 2,
    "explanationEn": "HbA1c (glycated hemoglobin) reflects average blood glucose over past 2-3 months.",
    "explanationHi": "UN declared।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-327",
    "questionEn": "Target HbA1c for diabetic patients is generally:",
    "questionHi": "World Health Day कब है?",
    "optionsEn": [
      "<5%",
      "<7%",
      "<9%",
      "<11%"
    ],
    "optionsHi": [
      "1 जनवरी",
      "7 अप्रैल",
      "15 अगस्त",
      "31 दिसंबर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Target HbA1c <7% for most diabetics indicates good glycemic control.",
    "explanationHi": "WHO founding day।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-328",
    "questionEn": "Recommended physical activity per day is:",
    "questionHi": "World TB Day कब है?",
    "optionsEn": [
      "10 minutes",
      "20 minutes",
      "30 minutes",
      "60 minutes"
    ],
    "optionsHi": [
      "7 अप्रैल",
      "24 मार्च",
      "1 दिसंबर",
      "31 मई"
    ],
    "correctAnswer": 2,
    "explanationEn": "WHO recommends at least 30 minutes of moderate physical activity daily for adults.",
    "explanationHi": "TB awareness day।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-329",
    "questionEn": "Breast self-examination should be done:",
    "questionHi": "World AIDS Day कब है?",
    "optionsEn": [
      "Daily",
      "Weekly",
      "Monthly",
      "Yearly"
    ],
    "optionsHi": [
      "7 अप्रैल",
      "24 मार्च",
      "1 दिसंबर",
      "31 मई"
    ],
    "correctAnswer": 2,
    "explanationEn": "BSE should be done monthly, ideally 7-10 days after menstrual period.",
    "explanationHi": "AIDS awareness day।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-330",
    "questionEn": "Warning sign of stroke includes:",
    "questionHi": "World No Tobacco Day कब है?",
    "optionsEn": [
      "Gradual weakness over weeks",
      "Sudden weakness on one side",
      "Joint pain",
      "Skin rash"
    ],
    "optionsHi": [
      "7 अप्रैल",
      "24 मार्च",
      "1 दिसंबर",
      "31 मई"
    ],
    "correctAnswer": 1,
    "explanationEn": "Stroke causes sudden onset symptoms: weakness, speech difficulty, vision problems.",
    "explanationHi": "Anti-tobacco day।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-331",
    "questionEn": "Retinopathy is a complication of:",
    "questionHi": "World Malaria Day कब है?",
    "optionsEn": [
      "Hypertension only",
      "Diabetes only",
      "Both diabetes and hypertension",
      "Neither"
    ],
    "optionsHi": [
      "25 अप्रैल",
      "24 मार्च",
      "1 दिसंबर",
      "31 मई"
    ],
    "correctAnswer": 2,
    "explanationEn": "Both conditions can damage retinal blood vessels causing vision problems.",
    "explanationHi": "Malaria awareness।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-332",
    "questionEn": "Microalbuminuria indicates:",
    "questionHi": "World Immunization Week कब है?",
    "optionsEn": [
      "Liver disease",
      "Early kidney damage",
      "Heart disease",
      "Brain damage"
    ],
    "optionsHi": [
      "जनवरी",
      "अप्रैल का अंतिम सप्ताह",
      "दिसंबर",
      "अगस्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "Protein in urine (microalbuminuria) is an early sign of diabetic nephropathy.",
    "explanationHi": "Immunization week।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-333",
    "questionEn": "The most common cancer in Indian women is:",
    "questionHi": "World Mental Health Day कब है?",
    "optionsEn": [
      "Lung cancer",
      "Breast cancer",
      "Cervical cancer",
      "Ovarian cancer"
    ],
    "optionsHi": [
      "7 अप्रैल",
      "10 अक्टूबर",
      "1 दिसंबर",
      "31 मई"
    ],
    "correctAnswer": 1,
    "explanationEn": "Breast cancer is now the most common cancer in Indian women, surpassing cervical cancer.",
    "explanationHi": "Mental health day।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-334",
    "questionEn": "Amlodipine is used to treat:",
    "questionHi": "World Diabetes Day कब है?",
    "optionsEn": [
      "Diabetes",
      "Hypertension",
      "Asthma",
      "TB"
    ],
    "optionsHi": [
      "7 अप्रैल",
      "14 नवंबर",
      "1 दिसंबर",
      "31 मई"
    ],
    "correctAnswer": 1,
    "explanationEn": "Amlodipine is a calcium channel blocker used as first-line treatment for hypertension.",
    "explanationHi": "Diabetes awareness।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-335",
    "questionEn": "COTPA relates to:",
    "questionHi": "Global Handwashing Day कब है?",
    "optionsEn": [
      "Cancer treatment",
      "Tobacco control",
      "Communicable disease",
      "Child health"
    ],
    "optionsHi": [
      "7 अप्रैल",
      "15 अक्टूबर",
      "1 दिसंबर",
      "31 मई"
    ],
    "correctAnswer": 1,
    "explanationEn": "COTPA (Cigarettes and Other Tobacco Products Act) 2003 regulates tobacco use and advertising in India.",
    "explanationHi": "Hand hygiene day।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-336",
    "questionEn": "World No Tobacco Day is observed on:",
    "questionHi": "World Toilet Day कब है?",
    "optionsEn": [
      "March 24",
      "May 31",
      "July 28",
      "October 10"
    ],
    "optionsHi": [
      "7 अप्रैल",
      "19 नवंबर",
      "1 दिसंबर",
      "31 मई"
    ],
    "correctAnswer": 1,
    "explanationEn": "World No Tobacco Day on May 31 highlights health risks of tobacco and advocates for effective policies.",
    "explanationHi": "Sanitation day।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-337",
    "questionEn": "Common risk factors for NCDs include all EXCEPT:",
    "questionHi": "National Immunization Day (NID) भारत में किसके लिए है?",
    "optionsEn": [
      "Tobacco use",
      "Unhealthy diet",
      "Physical inactivity",
      "Vaccination"
    ],
    "optionsHi": [
      "सभी टीके",
      "पोलियो टीकाकरण अभियान",
      "केवल BCG",
      "कोई टीका नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "NCD risk factors: tobacco, unhealthy diet, physical inactivity, harmful alcohol. Vaccination is protective.",
    "explanationHi": "Pulse Polio day।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-338",
    "questionEn": "Depression is characterized by:",
    "questionHi": "MPHW की जन स्वास्थ्य में प्राथमिक भूमिका क्या है?",
    "optionsEn": [
      "Persistent sadness >2 weeks",
      "Brief sadness for 1-2 days",
      "Happiness",
      "Excitement"
    ],
    "optionsHi": [
      "सर्जरी",
      "समुदाय में रोग नियंत्रण, निगरानी, स्वास्थ्य शिक्षा",
      "केवल अस्पताल में",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Depression: persistent sadness, loss of interest, sleep problems, fatigue for ≥2 weeks.",
    "explanationHi": "Community health work।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-339",
    "questionEn": "Mental health stigma means:",
    "questionHi": "MPHW (Male) का मुख्य फोकस क्या है?",
    "optionsEn": [
      "Medical treatment",
      "Negative attitudes and discrimination",
      "Insurance coverage",
      "Hospital admission"
    ],
    "optionsHi": [
      "MCH",
      "संक्रामक रोग नियंत्रण, पर्यावरणीय स्वास्थ्य, वेक्टर नियंत्रण",
      "केवल परिवार नियोजन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Stigma involves negative attitudes, discrimination, and social exclusion of people with mental illness.",
    "explanationHi": "Male MPHW focus।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-340",
    "questionEn": "Palliative care focuses on:",
    "questionHi": "MPHW का क्षेत्रीय कार्य क्षेत्र क्या है?",
    "optionsEn": [
      "Curing disease",
      "Comfort and quality of life",
      "Surgery",
      "Prevention"
    ],
    "optionsHi": [
      "पूरा जिला",
      "निर्धारित उप-स्वास्थ्य केंद्र क्षेत्र (~5000 जनसंख्या)",
      "पूरा राज्य",
      "केवल शहर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Palliative care provides relief from symptoms and improves quality of life for serious illness.",
    "explanationHi": "SC area coverage।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-341",
    "questionEn": "List the modifiable risk factors for NCDs.",
    "questionHi": "MPHW द्वारा मलेरिया नियंत्रण में क्या कार्य होते हैं?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "स्लाइड संग्रह, RDT, IRS, LLIN वितरण, स्वास्थ्य शिक्षा",
      "केवल दवाई",
      "सर्जरी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Malaria control activities।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-342",
    "questionEn": "What are the components of NCD screening at HWC?",
    "questionHi": "MPHW द्वारा TB नियंत्रण में क्या कार्य होते हैं?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "संदिग्ध पहचान, बलगम संग्रह, DOTS सहयोग, संपर्क ट्रेसिंग",
      "केवल दवाई",
      "सर्जरी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "TB control activities।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-343",
    "questionEn": "Describe the lifestyle modifications advised for hypertension.",
    "questionHi": "MPHW द्वारा कुष्ठ नियंत्रण में क्या कार्य होते हैं?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "केस खोज, MDT सहयोग, विकलांगता रोकथाम, स्वास्थ्य शिक्षा",
      "केवल दवाई",
      "सर्जरी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Leprosy control।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-344",
    "questionEn": "What are the danger signs of diabetes that require immediate referral?",
    "questionHi": "MPHW द्वारा फाइलेरिया नियंत्रण में क्या कार्य होते हैं?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "MDA में भागीदारी, रात्रि रक्त स्लाइड, MMDP",
      "केवल दवाई",
      "सर्जरी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Filaria control।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-345",
    "questionEn": "Explain the MPHW's role in NCD prevention and control.",
    "questionHi": "MPHW द्वारा पर्यावरणीय स्वास्थ्य में क्या कार्य होते हैं?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "जल स्रोत निरीक्षण, क्लोरीनेशन, स्वच्छता निरीक्षण",
      "केवल अस्पताल",
      "सर्जरी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Environmental health।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-346",
    "questionEn": "What cancers are screened at primary level and how?",
    "questionHi": "MPHW द्वारा वेक्टर नियंत्रण में क्या कार्य होते हैं?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "लार्वा सर्वे, स्रोत कमी, लार्विसाइड, IRS, फॉगिंग सहयोग",
      "केवल दवाई",
      "सर्जरी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Vector control activities।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-347",
    "questionEn": "List common problems in elderly and MPHW's role.",
    "questionHi": "MPHW द्वारा रोग निगरानी में क्या कार्य होते हैं?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "IDSP रिपोर्टिंग, प्रकोप पहचान, नमूना संग्रह",
      "केवल अस्पताल",
      "सर्जरी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Surveillance activities।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-348",
    "questionEn": "Describe the services under NMHP at district level.",
    "questionHi": "MPHW द्वारा NCD कार्यक्रम में क्या कार्य होते हैं?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "CBAC भरना, 30+ सूची, HWC रेफर, स्वास्थ्य शिक्षा",
      "केवल दवाई",
      "सर्जरी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "NCD screening support।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-349",
    "questionEn": "What is the correct technique for measuring blood pressure?",
    "questionHi": "MPHW द्वारा MCH में क्या सहयोग दिया जाता है?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "ANC सत्र, टीकाकरण, VHND में भागीदारी",
      "केवल प्रसव",
      "सर्जरी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "MCH support।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-350",
    "questionEn": "What counseling is given for tobacco cessation?",
    "questionHi": "MPHW द्वारा स्वास्थ्य शिक्षा में क्या कार्य होते हैं?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "व्यक्तिगत/समूह शिक्षा, प्रदर्शन, IEC सामग्री वितरण",
      "केवल पढ़ाना",
      "सर्जरी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Health education activities।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-351",
    "questionEn": "A 45-year-old man has BP 160/100 mmHg on two visits. He is overweight and chews tobacco. How would you counsel him?",
    "questionHi": "MPHW द्वारा रिकॉर्ड और रिपोर्टिंग में क्या कार्य होते हैं?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "रजिस्टर रखना, मासिक रिपोर्ट, HMIS डेटा",
      "केवल पढ़ना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Record keeping।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-352",
    "questionEn": "A 50-year-old woman has blood glucose 200 mg/dL (random). She has no symptoms. What should you do?",
    "questionHi": "MPHW को किसके साथ समन्वय करना होता है?",
    "optionsEn": [],
    "optionsHi": [
      "किसी से नहीं",
      "ANM, ASHA, AWW, MO, समुदाय",
      "केवल डॉक्टर",
      "केवल अस्पताल"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Team coordination।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-353",
    "questionEn": "A person with depression refuses to go to doctor saying 'mental illness is shameful'. How would you counsel?",
    "questionHi": "MPHW की VHSNC में क्या भूमिका है?",
    "optionsEn": [],
    "optionsHi": [
      "कोई भूमिका नहीं",
      "सदस्य के रूप में भागीदारी, स्वास्थ्य जानकारी प्रदान करना",
      "अध्यक्ष",
      "केवल निरीक्षण"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "VHSNC member।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-354",
    "questionEn": "During oral screening, you find a white patch on the inner cheek of a 55-year-old tobacco chewer. What should you do?",
    "questionHi": "MPHW की प्रकोप प्रबंधन में क्या भूमिका है?",
    "optionsEn": [],
    "optionsHi": [
      "कोई भूमिका नहीं",
      "शीघ्र रिपोर्टिंग, नमूना संग्रह, नियंत्रण उपाय, स्वास्थ्य शिक्षा",
      "केवल रिपोर्टिंग",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Outbreak response।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-355",
    "questionEn": "An elderly woman living alone complains of loneliness and not feeling like eating. How can you help?",
    "questionHi": "MPHW की आपदा प्रबंधन में क्या भूमिका है?",
    "optionsEn": [],
    "optionsHi": [
      "कोई भूमिका नहीं",
      "स्वास्थ्य शिविर, निगरानी, स्वास्थ्य शिक्षा, समन्वय",
      "केवल बचाव",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Disaster health response।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-356",
    "questionEn": "COPD is commonly caused by:",
    "questionHi": "MPHW के पेशेवर आचरण में क्या शामिल है?",
    "optionsEn": [
      "Diabetes",
      "Smoking",
      "High BP",
      "Obesity"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "समय पर उपस्थिति, ईमानदारी, सम्मान, गोपनीयता",
      "केवल काम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chronic Obstructive Pulmonary Disease (COPD) is primarily caused by smoking and air pollution.",
    "explanationHi": "Professional conduct।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-357",
    "questionEn": "Gestational diabetes occurs during:",
    "questionHi": "MPHW के लिए निरंतर शिक्षा क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Childhood",
      "Adolescence",
      "Pregnancy",
      "Old age"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "नई जानकारी, कौशल विकास, बेहतर सेवाएं",
      "पुराना ज्ञान पर्याप्त",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Gestational diabetes develops during pregnancy and usually resolves after delivery but increases future DM risk.",
    "explanationHi": "Continuous learning।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-358",
    "questionEn": "White coat hypertension means:",
    "questionHi": "जन स्वास्थ्य का अंतिम लक्ष्य क्या है?",
    "optionsEn": [
      "BP always high",
      "BP high only in clinic setting",
      "BP always normal",
      "BP high only at home"
    ],
    "optionsHi": [
      "केवल उपचार",
      "जनसंख्या के स्वास्थ्य में सुधार और स्वास्थ्य असमानताएं कम करना",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "White coat hypertension: elevated BP in medical setting due to anxiety, but normal elsewhere.",
    "explanationHi": "Population health improvement।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-359",
    "questionEn": "Major risk factor for cervical cancer is:",
    "questionHi": "Preventive Medicine और Curative Medicine में क्या अंतर है?",
    "optionsEn": [
      "Smoking",
      "HPV infection",
      "Obesity",
      "Diabetes"
    ],
    "optionsHi": [
      "एक ही है",
      "Preventive=रोग रोकना, Curative=रोग का उपचार",
      "कोई अंतर नहीं",
      "विपरीत"
    ],
    "correctAnswer": 1,
    "explanationEn": "Human Papillomavirus (HPV) infection is the major cause of cervical cancer; vaccine is available.",
    "explanationHi": "Prevention vs treatment।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-360",
    "questionEn": "Cachexia is seen in:",
    "questionHi": "Promotive, Preventive, Curative, Rehabilitative में से जन स्वास्थ्य का मुख्य फोकस क्या है?",
    "optionsEn": [
      "Obesity",
      "Advanced cancer",
      "Pregnancy",
      "Diabetes"
    ],
    "optionsHi": [
      "केवल Curative",
      "Promotive और Preventive",
      "केवल Rehabilitative",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cachexia (severe weight loss and wasting) occurs in advanced cancer and chronic diseases.",
    "explanationHi": "Prevention focus।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-361",
    "questionEn": "Peripheral neuropathy in diabetes causes:",
    "questionHi": "Population Medicine क्या है?",
    "optionsEn": [
      "Joint pain",
      "Numbness and tingling in feet",
      "Skin rash",
      "Hair loss"
    ],
    "optionsHi": [
      "व्यक्तिगत चिकित्सा",
      "जनसंख्या स्तर पर स्वास्थ्य और रोग का अध्ययन और हस्तक्षेप",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Diabetic neuropathy causes numbness, tingling, burning in feet, increasing risk of unnoticed injuries.",
    "explanationHi": "Population-level medicine।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-362",
    "questionEn": "The 'golden hour' in heart attack refers to:",
    "questionHi": "Community Medicine और Public Health में क्या संबंध है?",
    "optionsEn": [
      "Best time for surgery",
      "First hour for treatment to save heart muscle",
      "Time for diagnosis",
      "Recovery period"
    ],
    "optionsHi": [
      "अलग-अलग",
      "Community Medicine जन स्वास्थ्य का चिकित्सा शिक्षा में रूप है",
      "विपरीत",
      "कोई संबंध नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Treatment within first hour of heart attack symptoms can save maximum heart muscle and life.",
    "explanationHi": "Academic discipline।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-363",
    "questionEn": "F.A.S.T. for stroke recognition stands for:",
    "questionHi": "Social Medicine क्या है?",
    "optionsEn": [
      "Face drooping, Arm weakness, Speech difficulty, Time to call emergency",
      "Fast Action for Stroke Treatment",
      "First Aid for Stroke Treatment",
      "Federal Action Stroke Team"
    ],
    "optionsHi": [
      "सामाजिक कार्य",
      "स्वास्थ्य के सामाजिक, आर्थिक, सांस्कृतिक पहलुओं का अध्ययन",
      "केवल चिकित्सा",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "F.A.S.T. helps recognize stroke symptoms quickly for emergency response.",
    "explanationHi": "Social aspects of health।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-364",
    "questionEn": "Insulin is needed in which type of diabetes?",
    "questionHi": "Preventive and Social Medicine (PSM) भारत में क्या है?",
    "optionsEn": [
      "Type 1 always",
      "Type 2 always",
      "Gestational always",
      "None"
    ],
    "optionsHi": [
      "विशेषज्ञता नहीं",
      "मेडिकल कॉलेज में जन स्वास्थ्य का विभाग",
      "केवल सर्जरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Type 1 diabetes requires insulin as the body doesn't produce it. Type 2 may need insulin later.",
    "explanationHi": "PSM department।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-365",
    "questionEn": "Prediabetes is defined as fasting glucose:",
    "questionHi": "जन स्वास्थ्य में Public Health Specialist कौन होता है?",
    "optionsEn": [
      "<100 mg/dL",
      "100-125 mg/dL",
      "126-199 mg/dL",
      ">200 mg/dL"
    ],
    "optionsHi": [
      "कोई भी",
      "MPH/MD Community Medicine धारक",
      "केवल MBBS",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Prediabetes: fasting glucose 100-125 mg/dL. Important to identify for prevention through lifestyle changes.",
    "explanationHi": "Public health degree holders।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-366",
    "questionEn": "World Cancer Day is observed on:",
    "questionHi": "MPH का पूर्ण रूप क्या है?",
    "optionsEn": [
      "February 4",
      "March 24",
      "July 28",
      "November 14"
    ],
    "optionsHi": [
      "Medical Public",
      "Master of Public Health",
      "Master of Private",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "World Cancer Day on February 4 raises awareness and encourages prevention and treatment.",
    "explanationHi": "Public health degree।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-367",
    "questionEn": "Cholesterol level should ideally be:",
    "questionHi": "जन स्वास्थ्य में Team Approach क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "<100 mg/dL",
      "<150 mg/dL",
      "<200 mg/dL",
      "<300 mg/dL"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "विभिन्न विशेषज्ञताओं का संयोजन, व्यापक सेवाएं",
      "अकेले काम बेहतर",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Total cholesterol <200 mg/dL is desirable; >240 is high risk for heart disease.",
    "explanationHi": "Multidisciplinary approach।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-368",
    "questionEn": "ECG is used to diagnose:",
    "questionHi": "जन स्वास्थ्य में Multisectoral Approach क्या है?",
    "optionsEn": [
      "Diabetes",
      "Heart problems",
      "Kidney disease",
      "Liver disease"
    ],
    "optionsHi": [
      "केवल स्वास्थ्य विभाग",
      "स्वास्थ्य के लिए विभिन्न विभागों का सहयोग",
      "कोई सहयोग नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ECG (Electrocardiogram) records heart's electrical activity, diagnosing heart attacks, arrhythmias.",
    "explanationHi": "Cross-sector collaboration।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-369",
    "questionEn": "Osteoporosis means:",
    "questionHi": "जन स्वास्थ्य में Community Participation के लाभ क्या हैं?",
    "optionsEn": [
      "Strong bones",
      "Weak/brittle bones",
      "Joint inflammation",
      "Muscle weakness"
    ],
    "optionsHi": [
      "कोई लाभ नहीं",
      "स्थानीय जरूरतों की समझ, स्वामित्व, स्थिरता, संसाधन जुटाव",
      "केवल सरकारी काम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Osteoporosis causes bones to become weak and brittle, common in elderly, especially women.",
    "explanationHi": "Community involvement benefits।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-370",
    "questionEn": "Dementia is characterized by:",
    "questionHi": "जन स्वास्थ्य में Social Mobilization क्या है?",
    "optionsEn": [
      "Only memory loss",
      "Progressive decline in cognitive function",
      "Temporary confusion",
      "Physical weakness only"
    ],
    "optionsHi": [
      "सामाजिक अलगाव",
      "स्वास्थ्य लक्ष्यों के लिए समुदाय को जुटाना",
      "केवल सरकारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dementia involves progressive decline in memory, thinking, behavior affecting daily life.",
    "explanationHi": "Mobilizing community।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-371",
    "questionEn": "Angina chest pain is typically:",
    "questionHi": "जन स्वास्थ्य में Capacity Building क्या है?",
    "optionsEn": [
      "Continuous for days",
      "Relieved by rest and nitroglycerin",
      "Only on lying down",
      "Only on sitting"
    ],
    "optionsHi": [
      "इमारत बनाना",
      "व्यक्तियों और संस्थाओं की क्षमता विकास",
      "केवल प्रशिक्षण",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Angina (heart-related chest pain) typically occurs on exertion and is relieved by rest or nitroglycerin.",
    "explanationHi": "Strengthening capacity।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-372",
    "questionEn": "Blindness prevention program in India is called:",
    "questionHi": "जन स्वास्थ्य में Sustainability क्या है?",
    "optionsEn": [
      "NMHP",
      "NPCB",
      "NPCDCS",
      "NLEP"
    ],
    "optionsHi": [
      "अस्थायी",
      "कार्यक्रमों और परिणामों का दीर्घकालिक बनाए रखना",
      "केवल शुरुआत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "NPCB (National Programme for Control of Blindness) aims to reduce preventable blindness.",
    "explanationHi": "Long-term maintenance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-373",
    "questionEn": "Cataract causes:",
    "questionHi": "जन स्वास्थ्य में Scalability क्या है?",
    "optionsEn": [
      "Red eye",
      "Clouding of lens leading to vision loss",
      "Eye pain",
      "Double vision"
    ],
    "optionsHi": [
      "छोटा करना",
      "सफल कार्यक्रम को बड़े पैमाने पर लागू करना",
      "कम करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cataract is clouding of the eye's lens, common in elderly, treatable with surgery.",
    "explanationHi": "Expanding programs।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-374",
    "questionEn": "Glaucoma is caused by:",
    "questionHi": "जन स्वास्थ्य में Replicability क्या है?",
    "optionsEn": [
      "Lens clouding",
      "Increased pressure inside eye",
      "Retinal detachment",
      "Eye infection"
    ],
    "optionsHi": [
      "दोहराना नहीं",
      "सफल मॉडल को अन्य स्थानों पर दोहराना",
      "एक बार ही",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Glaucoma is increased eye pressure damaging the optic nerve, causing gradual vision loss.",
    "explanationHi": "Reproducing success।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-375",
    "questionEn": "HPV vaccine prevents:",
    "questionHi": "जन स्वास्थ्य में Best Practices क्या हैं?",
    "optionsEn": [
      "HIV",
      "Cervical cancer",
      "Breast cancer",
      "Oral cancer"
    ],
    "optionsHi": [
      "कोई भी तरीका",
      "सिद्ध और प्रभावी तरीके जो साझा किए जा सकें",
      "केवल पुराने",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HPV vaccine prevents infection with high-risk HPV types that cause cervical cancer.",
    "explanationHi": "Proven effective methods।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-376",
    "questionEn": "Main symptom of hypoglycemia is:",
    "questionHi": "जन स्वास्थ्य में Lessons Learned क्या हैं?",
    "optionsEn": [
      "Excessive thirst",
      "Sweating and trembling",
      "Frequent urination",
      "Slow wound healing"
    ],
    "optionsHi": [
      "स्कूल का पाठ",
      "अनुभव से प्राप्त सीख (सफलता और असफलता दोनों)",
      "केवल सफलता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hypoglycemia (low blood sugar) causes sweating, trembling, confusion - needs immediate sugar.",
    "explanationHi": "Learning from experience।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-377",
    "questionEn": "Polydipsia means:",
    "questionHi": "जन स्वास्थ्य में Documentation का क्या महत्व है?",
    "optionsEn": [
      "Frequent urination",
      "Excessive hunger",
      "Excessive thirst",
      "Weight loss"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "सीखना, साझा करना, जवाबदेही, संस्थागत स्मृति",
      "केवल कागज़ी काम",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Polydipsia (excessive thirst) is classic symptom of diabetes along with polyuria and polyphagia.",
    "explanationHi": "Recording for learning।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-378",
    "questionEn": "LDL cholesterol is called:",
    "questionHi": "जन स्वास्थ्य में Knowledge Management क्या है?",
    "optionsEn": [
      "Good cholesterol",
      "Bad cholesterol",
      "Total cholesterol",
      "Neutral cholesterol"
    ],
    "optionsHi": [
      "केवल पुस्तकें",
      "ज्ञान का संग्रह, संगठन, साझा करना, उपयोग",
      "केवल परीक्षा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "LDL (Low-Density Lipoprotein) is 'bad' cholesterol that deposits in arteries. HDL is 'good' cholesterol.",
    "explanationHi": "Managing knowledge।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-379",
    "questionEn": "Aspirin is given in heart attack to:",
    "questionHi": "जन स्वास्थ्य में Operations Research क्या है?",
    "optionsEn": [
      "Relieve pain",
      "Prevent clot formation",
      "Reduce fever",
      "Lower BP"
    ],
    "optionsHi": [
      "सर्जरी",
      "सेवा वितरण में सुधार के लिए व्यवस्थित अध्ययन",
      "केवल गणित",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aspirin prevents platelet aggregation, reducing clot formation in heart attack - given as first aid.",
    "explanationHi": "Service improvement research।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-380",
    "questionEn": "MACE in cardiology stands for:",
    "questionHi": "जन स्वास्थ्य में Implementation Research क्या है?",
    "optionsEn": [
      "Major Adverse Cardiovascular Events",
      "Medical Assessment for Cardiac Emergency",
      "Medication for Acute Cardiac Episode",
      "Minor Arterial Cardiac Examination"
    ],
    "optionsHi": [
      "केवल शोध",
      "साक्ष्य-आधारित हस्तक्षेपों को व्यवहार में लाने का अध्ययन",
      "केवल सिद्धांत",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "MACE includes heart attack, stroke, cardiovascular death - used as outcome measure.",
    "explanationHi": "Studying implementation।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-381",
    "questionEn": "Waist circumference indicating risk in Indian men is:",
    "questionHi": "जन स्वास्थ्य में Monitoring और Evaluation में क्या अंतर है?",
    "optionsEn": [
      ">80 cm",
      ">90 cm",
      ">100 cm",
      ">110 cm"
    ],
    "optionsHi": [
      "एक ही है",
      "Monitoring=निरंतर, Evaluation=समय-समय पर गहन मूल्यांकन",
      "कोई अंतर नहीं",
      "विपरीत"
    ],
    "correctAnswer": 1,
    "explanationEn": "Abdominal obesity risk: >90 cm in men, >80 cm in women (Asian cutoffs).",
    "explanationHi": "M vs E।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-382",
    "questionEn": "Trans fats are found in:",
    "questionHi": "जन स्वास्थ्य में Input, Process, Output, Outcome, Impact में क्या अंतर है?",
    "optionsEn": [
      "Fresh fruits",
      "Partially hydrogenated vegetable oils/vanaspati",
      "Fish",
      "Whole grains"
    ],
    "optionsHi": [
      "सब एक है",
      "संसाधन → गतिविधियां → तत्काल परिणाम → मध्यम परिणाम → दीर्घकालिक प्रभाव",
      "कोई अंतर नहीं",
      "विपरीत"
    ],
    "correctAnswer": 1,
    "explanationEn": "Trans fats in vanaspati and processed foods increase heart disease risk; should be avoided.",
    "explanationHi": "Program logic।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-383",
    "questionEn": "Morning stiffness >30 minutes suggests:",
    "questionHi": "जन स्वास्थ्य में Indicator क्या है?",
    "optionsEn": [
      "Osteoarthritis",
      "Rheumatoid arthritis",
      "Gout",
      "Fracture"
    ],
    "optionsHi": [
      "केवल संख्या",
      "प्रगति या परिवर्तन मापने का माप",
      "कोई माप नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Prolonged morning stiffness (>30-60 min) is characteristic of inflammatory arthritis like RA.",
    "explanationHi": "Measuring progress।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-384",
    "questionEn": "Suicide risk is highest in:",
    "questionHi": "जन स्वास्थ्य में Target क्या है?",
    "optionsEn": [
      "Children",
      "Adolescents",
      "Middle-aged",
      "All ages equally"
    ],
    "optionsHi": [
      "कोई लक्ष्य नहीं",
      "निर्धारित समय में प्राप्त करने का विशिष्ट मान",
      "केवल अनुमान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Suicide is a leading cause of death in adolescents and young adults; requires attention.",
    "explanationHi": "Specific goal।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-385",
    "questionEn": "Delirium differs from dementia as it is:",
    "questionHi": "जन स्वास्थ्य में Baseline क्या है?",
    "optionsEn": [
      "Permanent",
      "Acute and fluctuating",
      "Always inherited",
      "Only in elderly"
    ],
    "optionsHi": [
      "अंतिम मान",
      "हस्तक्षेप से पहले की स्थिति (तुलना के लिए)",
      "केवल लक्ष्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Delirium is acute, fluctuating confusion (often due to illness/drugs). Dementia is chronic, progressive.",
    "explanationHi": "Starting point।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-386",
    "questionEn": "Pulse oximeter measures:",
    "questionHi": "जन स्वास्थ्य में Log Frame क्या है?",
    "optionsEn": [
      "Blood pressure",
      "Blood glucose",
      "Oxygen saturation",
      "Heart rate only"
    ],
    "optionsHi": [
      "लकड़ी का फ्रेम",
      "कार्यक्रम योजना और निगरानी का उपकरण",
      "फोटो फ्रेम",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Pulse oximeter measures blood oxygen saturation (SpO2) non-invasively, also shows pulse rate.",
    "explanationHi": "Logical framework।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-387",
    "questionEn": "Normal oxygen saturation is:",
    "questionHi": "जन स्वास्थ्य में SMART Objectives क्या हैं?",
    "optionsEn": [
      ">80%",
      ">90%",
      ">95%",
      "100%"
    ],
    "optionsHi": [
      "बुद्धिमान",
      "Specific, Measurable, Achievable, Relevant, Time-bound",
      "केवल बड़े",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Normal SpO2 is 95-100%. Below 90% indicates hypoxia requiring medical attention.",
    "explanationHi": "Good objectives।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-388",
    "questionEn": "Rehabilitation in NCD means:",
    "questionHi": "जन स्वास्थ्य में Theory of Change क्या है?",
    "optionsEn": [
      "Surgery",
      "Restoring function and quality of life",
      "Prevention only",
      "Diagnosis"
    ],
    "optionsHi": [
      "कोई सिद्धांत नहीं",
      "कार्यक्रम कैसे परिवर्तन लाएगा इसका तर्कसंगत मॉडल",
      "केवल अनुमान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rehabilitation helps patients regain function and improve quality of life after disease/disability.",
    "explanationHi": "Pathway to change।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-389",
    "questionEn": "End of life care is also called:",
    "questionHi": "जन स्वास्थ्य में Health Impact Assessment (HIA) क्या है?",
    "optionsEn": [
      "Primary care",
      "Palliative care",
      "Preventive care",
      "Emergency care"
    ],
    "optionsHi": [
      "केवल स्वास्थ्य",
      "नीतियों/परियोजनाओं के स्वास्थ्य प्रभाव का पूर्व मूल्यांकन",
      "केवल पर्यावरण",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Palliative care focuses on comfort and quality of life in serious illness, including end of life.",
    "explanationHi": "Assessing health impact।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-390",
    "questionEn": "Alcohol dependence is characterized by:",
    "questionHi": "जन स्वास्थ्य में Needs Assessment क्या है?",
    "optionsEn": [
      "Occasional drinking",
      "Craving and withdrawal symptoms",
      "Social drinking only",
      "Drinking at festivals"
    ],
    "optionsHi": [
      "जरूरत नहीं",
      "जनसंख्या की स्वास्थ्य जरूरतों की पहचान",
      "केवल इच्छाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Alcohol dependence involves craving, tolerance, withdrawal symptoms, and continued use despite harm.",
    "explanationHi": "Identifying needs।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-391",
    "questionEn": "Schizophrenia typically begins in:",
    "questionHi": "जन स्वास्थ्य में Situational Analysis क्या है?",
    "optionsEn": [
      "Childhood",
      "Late adolescence/early adulthood",
      "Middle age",
      "Old age"
    ],
    "optionsHi": [
      "कोई विश्लेषण नहीं",
      "वर्तमान स्थिति, समस्याएं, संसाधन का विश्लेषण",
      "केवल समस्याएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Schizophrenia usually starts in late teens to early 20s, earlier in men than women.",
    "explanationHi": "Analyzing situation।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-392",
    "questionEn": "Epilepsy is characterized by:",
    "questionHi": "जन स्वास्थ्य में SWOT Analysis क्या है?",
    "optionsEn": [
      "Continuous unconsciousness",
      "Recurrent seizures",
      "Progressive weakness",
      "Memory loss"
    ],
    "optionsHi": [
      "खेल",
      "Strengths, Weaknesses, Opportunities, Threats का विश्लेषण",
      "बीमारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Epilepsy is a neurological condition with recurrent seizures; treatable with medications.",
    "explanationHi": "Situation analysis tool।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-393",
    "questionEn": "Colonoscopy is used to screen for:",
    "questionHi": "जन स्वास्थ्य में Stakeholder Analysis क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Cervical cancer",
      "Breast cancer",
      "Colorectal cancer",
      "Oral cancer"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "प्रभावित पक्षों की पहचान, उनकी रुचि और प्रभाव समझना",
      "केवल औपचारिकता",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Colonoscopy examines the colon for polyps and cancer; recommended for colorectal cancer screening.",
    "explanationHi": "Understanding stakeholders।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-394",
    "questionEn": "PSA test screens for:",
    "questionHi": "जन स्वास्थ्य में Priority Setting क्यों जरूरी है?",
    "optionsEn": [
      "Breast cancer",
      "Prostate cancer",
      "Lung cancer",
      "Liver cancer"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "सीमित संसाधनों का सर्वोत्तम उपयोग",
      "सब कुछ समान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "PSA (Prostate Specific Antigen) is a blood test to screen for prostate cancer in men.",
    "explanationHi": "Resource allocation।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-395",
    "questionEn": "Mammography is used for:",
    "questionHi": "जन स्वास्थ्य में Resource Allocation क्या है?",
    "optionsEn": [
      "Cervical cancer screening",
      "Breast cancer screening",
      "Ovarian cancer screening",
      "Oral cancer screening"
    ],
    "optionsHi": [
      "असीमित संसाधन",
      "सीमित संसाधनों को प्राथमिकताओं के अनुसार वितरित करना",
      "कोई वितरण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mammography is X-ray of breast used for breast cancer screening in women above 40-50 years.",
    "explanationHi": "Distributing resources।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-396",
    "questionEn": "Common side effect of statins (cholesterol drugs) is:",
    "questionHi": "जन स्वास्थ्य में Budget और Expenditure Tracking क्यों जरूरी है?",
    "optionsEn": [
      "Muscle pain",
      "Hair loss",
      "Skin rash",
      "Vision changes"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "जवाबदेही, दक्षता, पारदर्शिता",
      "केवल हिसाब",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Statins may cause muscle pain (myalgia) in some patients; should be reported to doctor.",
    "explanationHi": "Financial accountability।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-397",
    "questionEn": "Smoking causes all EXCEPT:",
    "questionHi": "जन स्वास्थ्य में Performance Management क्या है?",
    "optionsEn": [
      "Lung cancer",
      "Heart disease",
      "COPD",
      "Improved memory"
    ],
    "optionsHi": [
      "केवल सजा",
      "कर्मचारियों और कार्यक्रमों के प्रदर्शन की निगरानी और सुधार",
      "कोई प्रबंधन नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Smoking causes lung cancer, heart disease, COPD, stroke, and many other health problems.",
    "explanationHi": "Managing performance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-398",
    "questionEn": "Units of alcohol mean:",
    "questionHi": "जन स्वास्थ्य में Supervision का क्या महत्व है?",
    "optionsEn": [
      "Number of drinks",
      "Standard measure of pure alcohol content",
      "Type of drink",
      "Time of drinking"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "मार्गदर्शन, गुणवत्ता सुनिश्चित करना, समस्या समाधान",
      "केवल निगरानी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "One unit = 10g pure alcohol. Helps standardize measurement of alcohol consumption.",
    "explanationHi": "Supportive supervision।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-399",
    "questionEn": "Binge drinking is defined as:",
    "questionHi": "जन स्वास्थ्य में Feedback का क्या महत्व है?",
    "optionsEn": [
      "Daily drinking",
      "5+ drinks on one occasion for men",
      "Drinking alone",
      "Drinking at meals"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "सुधार, प्रेरणा, दोतरफा संवाद",
      "केवल शिकायत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Binge drinking: 5+ drinks for men, 4+ for women on one occasion; high risk behavior.",
    "explanationHi": "Feedback for improvement।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-400",
    "questionEn": "Which vitamin deficiency causes night blindness?",
    "questionHi": "जन स्वास्थ्य में MPHW का अंतिम लक्ष्य क्या है?",
    "optionsEn": [
      "Vitamin A",
      "Vitamin B",
      "Vitamin C",
      "Vitamin D"
    ],
    "optionsHi": [
      "केवल नौकरी",
      "समुदाय के स्वास्थ्य में सुधार और रोग भार कम करना",
      "केवल वेतन",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Vitamin A deficiency causes night blindness (nyctalopia) and can lead to complete blindness.",
    "explanationHi": "Community health improvement।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "NCD Programs",
    "tags": [
      "ncd-programs"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-401",
    "questionEn": "The Ottawa Charter defines health promotion as:",
    "questionHi": "परिवार नियोजन (Family Planning) का मुख्य उद्देश्य क्या है?",
    "optionsEn": [
      "Treatment of disease",
      "Process of enabling people to increase control over and improve their health",
      "Building hospitals",
      "Training doctors"
    ],
    "optionsHi": [
      "जनसंख्या बढ़ाना",
      "जिम्मेदार माता-पिता, बच्चों में अंतर, माता-शिशु स्वास्थ्य",
      "केवल गर्भनिरोध",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ottawa Charter (1986) defined health promotion as empowering people to take control of their health.",
    "explanationHi": "Responsible parenthood।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-402",
    "questionEn": "IEC stands for:",
    "questionHi": "भारत में राष्ट्रीय परिवार नियोजन कार्यक्रम कब शुरू हुआ?",
    "optionsEn": [
      "Information, Education, Communication",
      "Integrated Essential Care",
      "Indian Education Centre",
      "Internal Emergency Care"
    ],
    "optionsHi": [
      "1947",
      "1952",
      "1960",
      "1970"
    ],
    "correctAnswer": 0,
    "explanationEn": "IEC involves providing information, educating, and communicating health messages.",
    "explanationHi": "First in world।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-403",
    "questionEn": "BCC stands for:",
    "questionHi": "परिवार नियोजन विधियों को कितने प्रकार में बांटा जाता है?",
    "optionsEn": [
      "Basic Care Communication",
      "Behavior Change Communication",
      "Block Communication Centre",
      "Basic Clinical Care"
    ],
    "optionsHi": [
      "2",
      "3 (अस्थायी, अर्ध-स्थायी, स्थायी)",
      "5",
      "10"
    ],
    "correctAnswer": 1,
    "explanationEn": "BCC goes beyond IEC to actually change behaviors through audience-centered communication.",
    "explanationHi": "Spacing and limiting।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-404",
    "questionEn": "Health education at individual level is best done through:",
    "questionHi": "कंडोम किस प्रकार की विधि है?",
    "optionsEn": [
      "Mass media",
      "Posters",
      "Personal counseling",
      "Newspapers"
    ],
    "optionsHi": [
      "स्थायी",
      "अस्थायी (Barrier method)",
      "अर्ध-स्थायी",
      "सर्जिकल"
    ],
    "correctAnswer": 2,
    "explanationEn": "One-to-one counseling allows individualized, confidential discussion and behavior change support.",
    "explanationHi": "Temporary barrier।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-405",
    "questionEn": "Demonstration is best suited for:",
    "questionHi": "OCP (Oral Contraceptive Pills) में क्या होता है?",
    "optionsEn": [
      "Giving information",
      "Teaching skills",
      "Reaching masses",
      "Policy advocacy"
    ],
    "optionsHi": [
      "केवल विटामिन",
      "हार्मोन (एस्ट्रोजन और/या प्रोजेस्टेरोन)",
      "केवल आयरन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Demonstration allows showing and practicing skills like handwashing, ORS preparation.",
    "explanationHi": "Hormonal contraception।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-406",
    "questionEn": "Ideal duration for a health talk is:",
    "questionHi": "Mala-N क्या है?",
    "optionsEn": [
      "5 minutes",
      "15-20 minutes",
      "45 minutes",
      "1 hour"
    ],
    "optionsHi": [
      "इंजेक्शन",
      "सरकारी OCP (28 गोलियां - 21 सफेद + 7 भूरी)",
      "कंडोम",
      "IUCD"
    ],
    "correctAnswer": 1,
    "explanationEn": "Health talks should be short (15-20 min) to maintain attention and deliver key messages.",
    "explanationHi": "Government OCP।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-407",
    "questionEn": "Flip chart is used for:",
    "questionHi": "Centchroman (Chhaya/Saheli) क्या है?",
    "optionsEn": [
      "Individual counseling",
      "Group education",
      "Mass communication",
      "Policy making"
    ],
    "optionsHi": [
      "हार्मोनल",
      "Non-hormonal weekly oral pill",
      "IUCD",
      "इंजेक्शन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Flip charts are visual aids for group education sessions, showing key messages pictorially.",
    "explanationHi": "Non-hormonal pill।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-408",
    "questionEn": "Pre-testing of IEC materials means:",
    "questionHi": "Emergency Contraceptive Pill (ECP) कब लेनी चाहिए?",
    "optionsEn": [
      "Testing before printing",
      "Testing with target audience",
      "Quality control",
      "Cost analysis"
    ],
    "optionsHi": [
      "1 महीने बाद",
      "असुरक्षित संभोग के 72 घंटे (3 दिन) के भीतर",
      "1 सप्ताह बाद",
      "कभी भी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pre-testing ensures materials are understood, accepted, and effective with intended audience.",
    "explanationHi": "Within 72 hours।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-409",
    "questionEn": "An effective health message should have maximum:",
    "questionHi": "IUCD का पूर्ण रूप क्या है?",
    "optionsEn": [
      "1-2 points",
      "3-5 points",
      "10 points",
      "As many as possible"
    ],
    "optionsHi": [
      "Internal Uterine",
      "Intrauterine Contraceptive Device",
      "Indian Union",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Focus on 3-5 key messages for clarity and retention; too many messages confuse.",
    "explanationHi": "Copper-T etc।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-410",
    "questionEn": "Role play in health education helps:",
    "questionHi": "CuT 380A कितने वर्षों के लिए प्रभावी है?",
    "optionsEn": [
      "Memorize facts",
      "Practice communication skills",
      "Read faster",
      "Calculate doses"
    ],
    "optionsHi": [
      "1 वर्ष",
      "5 वर्ष",
      "10 वर्ष",
      "20 वर्ष"
    ],
    "correctAnswer": 1,
    "explanationEn": "Role play allows practicing challenging conversations in a safe environment.",
    "explanationHi": "10-year IUCD।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-411",
    "questionEn": "GATHER technique is used in:",
    "questionHi": "Cu IUCD 375 कितने वर्षों के लिए प्रभावी है?",
    "optionsEn": [
      "Surgery",
      "Counseling",
      "Laboratory diagnosis",
      "Vaccination"
    ],
    "optionsHi": [
      "1 वर्ष",
      "5 वर्ष",
      "10 वर्ष",
      "20 वर्ष"
    ],
    "correctAnswer": 1,
    "explanationEn": "GATHER: Greet, Ask, Tell, Help, Explain, Return - counseling framework.",
    "explanationHi": "5-year IUCD।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-412",
    "questionEn": "The stages of behavior change model includes all EXCEPT:",
    "questionHi": "PPIUCD क्या है?",
    "optionsEn": [
      "Precontemplation",
      "Contemplation",
      "Investigation",
      "Action"
    ],
    "optionsHi": [
      "प्रसव पूर्व",
      "Postpartum IUCD - प्रसव के तुरंत बाद लगाना",
      "केवल C-section में",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Stages: Precontemplation, Contemplation, Preparation, Action, Maintenance (and Relapse).",
    "explanationHi": "Post-delivery insertion।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-413",
    "questionEn": "Active listening involves:",
    "questionHi": "Injectable Contraceptive (Antara) कब दी जाती है?",
    "optionsEn": [
      "Giving advice immediately",
      "Giving full attention without interrupting",
      "Reading while listening",
      "Talking more than listening"
    ],
    "optionsHi": [
      "रोज़",
      "हर 3 महीने में",
      "हर साल",
      "एक बार"
    ],
    "correctAnswer": 1,
    "explanationEn": "Active listening: full attention, not interrupting, showing empathy, paraphrasing.",
    "explanationHi": "DMPA injection।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-414",
    "questionEn": "Empathy in counseling means:",
    "questionHi": "महिला नसबंदी (Tubectomy) क्या है?",
    "optionsEn": [
      "Feeling sorry",
      "Understanding and sharing feelings",
      "Giving money",
      "Agreeing with everything"
    ],
    "optionsHi": [
      "अस्थायी",
      "स्थायी विधि - फैलोपियन ट्यूब बंद करना",
      "IUCD",
      "इंजेक्शन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Empathy is understanding another's feelings from their perspective, not sympathy (feeling sorry).",
    "explanationHi": "Female sterilization।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-415",
    "questionEn": "Open-ended questions start with:",
    "questionHi": "पुरुष नसबंदी (Vasectomy) क्या है?",
    "optionsEn": [
      "Did you",
      "Are you",
      "What, how, why, tell me",
      "Is there"
    ],
    "optionsHi": [
      "अस्थायी",
      "स्थायी विधि - वास डिफरेंस बंद करना",
      "IUCD",
      "कंडोम"
    ],
    "correctAnswer": 2,
    "explanationEn": "Open-ended questions encourage detailed responses, not just yes/no answers.",
    "explanationHi": "Male sterilization।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-416",
    "questionEn": "Confidentiality in counseling means:",
    "questionHi": "NSV (No-Scalpel Vasectomy) का क्या लाभ है?",
    "optionsEn": [
      "Sharing with family",
      "Keeping information private",
      "Writing in newspaper",
      "Discussing with friends"
    ],
    "optionsHi": [
      "अधिक कट",
      "कम दर्द, जल्दी ठीक, कम जटिलताएं",
      "अधिक समय",
      "कम प्रभावी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Confidentiality is ethical obligation to keep patient information private without consent.",
    "explanationHi": "Less invasive।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-417",
    "questionEn": "VHND provides opportunity for:",
    "questionHi": "परिवार नियोजन में Informed Choice क्या है?",
    "optionsEn": [
      "Surgery",
      "Health education at village level",
      "Specialized care",
      "Research"
    ],
    "optionsHi": [
      "जबरदस्ती",
      "व्यक्ति को सभी विधियों की जानकारी देकर स्वयं चुनने देना",
      "केवल एक विधि",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Village Health and Nutrition Day is a platform for community health education.",
    "explanationHi": "Client choice।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-418",
    "questionEn": "Mass media for health education includes:",
    "questionHi": "Eligible Couple (पात्र दंपति) कौन है?",
    "optionsEn": [
      "One-to-one counseling",
      "Home visits",
      "Radio, TV, newspapers",
      "Focus groups"
    ],
    "optionsHi": [
      "कोई भी",
      "विवाहित जोड़ा जिसमें महिला 15-49 वर्ष की हो",
      "केवल बुजुर्ग",
      "अविवाहित"
    ],
    "correctAnswer": 2,
    "explanationEn": "Mass media reaches large audiences simultaneously through radio, TV, newspapers, social media.",
    "explanationHi": "Reproductive age couple।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-419",
    "questionEn": "Non-verbal communication includes:",
    "questionHi": "CPR (Contraceptive Prevalence Rate) क्या है?",
    "optionsEn": [
      "Talking",
      "Writing",
      "Body language and facial expressions",
      "Phone calls"
    ],
    "optionsHi": [
      "मृत्यु दर",
      "पात्र दंपतियों में गर्भनिरोधक उपयोगकर्ताओं का प्रतिशत",
      "जन्म दर",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Non-verbal: facial expressions, gestures, posture, eye contact, tone of voice.",
    "explanationHi": "Contraceptive use rate।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-420",
    "questionEn": "Health education should use:",
    "questionHi": "Unmet Need for Family Planning क्या है?",
    "optionsEn": [
      "Medical jargon",
      "Complex language",
      "Simple local language",
      "English only"
    ],
    "optionsHi": [
      "पूर्ण जरूरत",
      "गर्भनिरोध चाहने वाली लेकिन उपयोग न करने वाली महिलाएं",
      "कोई जरूरत नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Use simple, local language that the community understands; avoid medical terms.",
    "explanationHi": "Gap in FP services।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-421",
    "questionEn": "IDSP stands for:",
    "questionHi": "Mission Parivar Vikas क्या है?",
    "optionsEn": [
      "Indian Disease Surveillance Programme",
      "Integrated Disease Surveillance Programme",
      "International Disease System Programme",
      "Indoor Disease Spread Prevention"
    ],
    "optionsHi": [
      "जनसंख्या बढ़ाना",
      "उच्च TFR वाले जिलों में परिवार नियोजन सेवाएं बढ़ाना",
      "केवल शहरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "IDSP is India's disease surveillance system for early outbreak detection and response.",
    "explanationHi": "High TFR districts।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-422",
    "questionEn": "S form in IDSP is filled by:",
    "questionHi": "किशोर स्वास्थ्य (Adolescent Health) किस आयु समूह को संदर्भित करता है?",
    "optionsEn": [
      "Doctor",
      "Lab technician",
      "MPHW/ANM",
      "Specialist"
    ],
    "optionsHi": [
      "0-5 वर्ष",
      "10-19 वर्ष",
      "20-30 वर्ष",
      "60+ वर्ष"
    ],
    "correctAnswer": 2,
    "explanationEn": "S form (Syndromic surveillance) is filled weekly by MPHW/ANM at Sub-Centre level.",
    "explanationHi": "WHO adolescent definition।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-423",
    "questionEn": "P form in IDSP is filled by:",
    "questionHi": "RKSK (Rashtriya Kishor Swasthya Karyakram) के 6 प्राथमिकता क्षेत्र क्या हैं?",
    "optionsEn": [
      "ASHA",
      "MPHW",
      "Medical Officer",
      "Lab technician"
    ],
    "optionsHi": [
      "केवल पोषण",
      "पोषण, यौन स्वास्थ्य, मानसिक स्वास्थ्य, मादक द्रव्य, हिंसा, NCD",
      "केवल शिक्षा",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "P form (Presumptive diagnosis) is filled by Medical Officer at PHC/CHC based on clinical diagnosis.",
    "explanationHi": "6 priority areas।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-424",
    "questionEn": "L form in IDSP is filled by:",
    "questionHi": "AFHS (Adolescent Friendly Health Services) क्या है?",
    "optionsEn": [
      "ASHA",
      "MPHW",
      "Medical Officer",
      "Lab technician"
    ],
    "optionsHi": [
      "वयस्क सेवाएं",
      "किशोरों की जरूरतों के अनुकूल स्वास्थ्य सेवाएं",
      "बुजुर्ग सेवाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "L form (Laboratory confirmed) is filled by Lab Technician with lab-confirmed diagnoses.",
    "explanationHi": "Youth-friendly services।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-425",
    "questionEn": "S form is submitted:",
    "questionHi": "WIFS (Weekly Iron Folic Acid Supplementation) किसके लिए है?",
    "optionsEn": [
      "Daily",
      "Weekly",
      "Monthly",
      "Yearly"
    ],
    "optionsHi": [
      "बुजुर्ग",
      "किशोर लड़के और लड़कियां (10-19 वर्ष)",
      "गर्भवती",
      "केवल पुरुष"
    ],
    "correctAnswer": 1,
    "explanationEn": "S form is submitted weekly (every Monday for previous week) to PHC.",
    "explanationHi": "Adolescent IFA।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-426",
    "questionEn": "Zero reporting means:",
    "questionHi": "WIFS में IFA टैबलेट कैसे दी जाती है?",
    "optionsEn": [
      "No staff present",
      "Reporting even when no cases",
      "No report submitted",
      "Zero deaths"
    ],
    "optionsHi": [
      "रोज़",
      "सप्ताह में एक बार (52 गोलियां/वर्ष)",
      "महीने में एक बार",
      "साल में एक बार"
    ],
    "correctAnswer": 1,
    "explanationEn": "Zero reporting is important - confirms surveillance is active even when no cases detected.",
    "explanationHi": "Weekly supplementation।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-427",
    "questionEn": "AFP surveillance is for:",
    "questionHi": "Menstrual Hygiene Day कब है?",
    "optionsEn": [
      "Malaria",
      "Polio",
      "TB",
      "HIV"
    ],
    "optionsHi": [
      "7 अप्रैल",
      "28 मई",
      "1 दिसंबर",
      "31 मई"
    ],
    "correctAnswer": 1,
    "explanationEn": "AFP (Acute Flaccid Paralysis) surveillance is critical for maintaining polio-free status.",
    "explanationHi": "MH awareness day।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-428",
    "questionEn": "AFP should be reported within:",
    "questionHi": "Peer Educator किशोर स्वास्थ्य में क्या भूमिका निभाता है?",
    "optionsEn": [
      "1 week",
      "48 hours",
      "24 hours",
      "1 month"
    ],
    "optionsHi": [
      "कोई भूमिका नहीं",
      "समान आयु के साथियों को स्वास्थ्य जानकारी देना",
      "डॉक्टर",
      "शिक्षक"
    ],
    "correctAnswer": 2,
    "explanationEn": "Any AFP case in child <15 years must be reported within 24 hours.",
    "explanationHi": "Peer-to-peer education।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-429",
    "questionEn": "Epidemic means:",
    "questionHi": "बुजुर्ग स्वास्थ्य (Geriatric Health) किस आयु से संबंधित है?",
    "optionsEn": [
      "Disease always present",
      "Cases exceeding normal expected level",
      "Disease in animals",
      "Worldwide spread"
    ],
    "optionsHi": [
      "40+",
      "50+",
      "60+ वर्ष",
      "70+"
    ],
    "correctAnswer": 1,
    "explanationEn": "Epidemic/outbreak is occurrence of disease clearly above what is normally expected.",
    "explanationHi": "Elderly definition।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-430",
    "questionEn": "Endemic disease is:",
    "questionHi": "NPHCE (National Programme for Health Care of the Elderly) कब शुरू हुआ?",
    "optionsEn": [
      "Sudden outbreak",
      "Constant presence in an area",
      "Worldwide epidemic",
      "New disease"
    ],
    "optionsHi": [
      "2000",
      "2010",
      "2015",
      "2020"
    ],
    "correctAnswer": 1,
    "explanationEn": "Endemic means constant baseline presence of disease in a geographic area.",
    "explanationHi": "Elderly care program।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-431",
    "questionEn": "Pandemic is:",
    "questionHi": "बुजुर्गों में आम स्वास्थ्य समस्याएं क्या हैं?",
    "optionsEn": [
      "Local outbreak",
      "National epidemic",
      "Epidemic across countries/continents",
      "Animal disease"
    ],
    "optionsHi": [
      "बचपन की बीमारियां",
      "NCDs, गिरना, मानसिक स्वास्थ्य, दृष्टि/श्रवण समस्या, अकेलापन",
      "केवल संक्रमण",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Pandemic is an epidemic that has spread across multiple countries or continents.",
    "explanationHi": "Geriatric health issues।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-432",
    "questionEn": "First step in outbreak investigation is:",
    "questionHi": "Dementia (मनोभ्रंश) क्या है?",
    "optionsEn": [
      "Implement control measures",
      "Verify the outbreak",
      "Send samples",
      "Call media"
    ],
    "optionsHi": [
      "सामान्य बुढ़ापा",
      "स्मृति और सोचने की क्षमता में गिरावट",
      "केवल अवसाद",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "First step: verify outbreak is real - confirm cases and compare to expected baseline.",
    "explanationHi": "Cognitive decline।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-433",
    "questionEn": "Line listing is:",
    "questionHi": "बुजुर्गों में गिरना (Falls) क्यों चिंता का विषय है?",
    "optionsEn": [
      "Queue of patients",
      "List of all outbreak cases with details",
      "List of drugs",
      "Staff roster"
    ],
    "optionsHi": [
      "चिंता नहीं",
      "फ्रैक्चर, विकलांगता, मृत्यु का जोखिम",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Line listing records all cases with details (name, age, sex, address, symptoms, date).",
    "explanationHi": "Falls risk।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-434",
    "questionEn": "DSU stands for:",
    "questionHi": "मानसिक स्वास्थ्य (Mental Health) की WHO परिभाषा क्या है?",
    "optionsEn": [
      "Disease Spread Unit",
      "District Surveillance Unit",
      "Drug Supply Unit",
      "Diagnostic Service Unit"
    ],
    "optionsHi": [
      "रोग का अभाव",
      "कल्याण की स्थिति जिसमें व्यक्ति अपनी क्षमताओं को पहचाने, तनाव से निपटे, उत्पादक हो",
      "केवल खुशी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "DSU at district level coordinates surveillance, compiles data, investigates outbreaks.",
    "explanationHi": "WHO definition।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-435",
    "questionEn": "Notifiable disease must be reported:",
    "questionHi": "भारत में आम मानसिक विकार (Common Mental Disorders) क्या हैं?",
    "optionsEn": [
      "Never",
      "Only if serious",
      "Within 24 hours to authorities",
      "Only to hospital"
    ],
    "optionsHi": [
      "केवल स्किज़ोफ्रेनिया",
      "अवसाद (Depression) और चिंता (Anxiety)",
      "केवल मनोविकृति",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Notifiable/epidemic-prone diseases must be reported immediately (within 24 hours).",
    "explanationHi": "CMD prevalence।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-436",
    "questionEn": "Which is a notifiable disease?",
    "questionHi": "Depression के लक्षण क्या हैं?",
    "optionsEn": [
      "Common cold",
      "Headache",
      "Cholera",
      "Back pain"
    ],
    "optionsHi": [
      "खुशी",
      "उदासी, रुचि की कमी, नींद में बदलाव, थकान, आत्महत्या के विचार",
      "केवल नींद",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Cholera is a notifiable disease requiring immediate reporting.",
    "explanationHi": "Depression symptoms।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-437",
    "questionEn": "Active surveillance involves:",
    "questionHi": "भारत में आत्महत्या रोकथाम के लिए हेल्पलाइन क्या है?",
    "optionsEn": [
      "Waiting for cases to come",
      "Actively searching for cases in community",
      "Laboratory tests only",
      "No surveillance"
    ],
    "optionsHi": [
      "100",
      "iCall: 9152987821, Vandrevala: 1860-2662-345",
      "108",
      "112"
    ],
    "correctAnswer": 1,
    "explanationEn": "Active surveillance: health workers go out to find cases through house-to-house visits.",
    "explanationHi": "Mental health helplines।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-438",
    "questionEn": "Passive surveillance involves:",
    "questionHi": "DMHP (District Mental Health Programme) क्या है?",
    "optionsEn": [
      "Active case search",
      "Cases coming to health facility",
      "No reporting",
      "Only lab tests"
    ],
    "optionsHi": [
      "मलेरिया",
      "जिला स्तर पर मानसिक स्वास्थ्य सेवाएं",
      "TB",
      "HIV"
    ],
    "correctAnswer": 1,
    "explanationEn": "Passive surveillance: routine reporting of cases that present to health facilities.",
    "explanationHi": "District MH services।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-439",
    "questionEn": "Sentinel surveillance uses:",
    "questionHi": "Tele-MANAS क्या है?",
    "optionsEn": [
      "All health facilities",
      "Selected representative sites",
      "Only hospitals",
      "Only labs"
    ],
    "optionsHi": [
      "TV शो",
      "राष्ट्रीय टेली मानसिक स्वास्थ्य कार्यक्रम (14416)",
      "रेडियो",
      "अखबार"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sentinel surveillance collects data from selected representative sites for specific diseases.",
    "explanationHi": "Tele mental health।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-440",
    "questionEn": "RRT stands for:",
    "questionHi": "Mental Healthcare Act 2017 में रोगी के क्या अधिकार हैं?",
    "optionsEn": [
      "Regular Response Team",
      "Rapid Response Team",
      "Regional Research Team",
      "Rural Resource Team"
    ],
    "optionsHi": [
      "कोई अधिकार नहीं",
      "गोपनीयता, सूचना, उपचार तक पहुंच, Advance Directive",
      "केवल उपचार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "RRT at district level investigates and responds to disease outbreaks.",
    "explanationHi": "Patient rights।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-441",
    "questionEn": "Micro-planning is done at:",
    "questionHi": "मानसिक स्वास्थ्य में कलंक (Stigma) क्या है और क्यों हानिकारक है?",
    "optionsEn": [
      "National level",
      "State level",
      "District level",
      "Sub-Centre/village level"
    ],
    "optionsHi": [
      "लाभदायक",
      "नकारात्मक दृष्टिकोण जो मदद लेने से रोकता है",
      "सहायक",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Micro-planning is detailed planning at Sub-Centre level to cover every beneficiary.",
    "explanationHi": "Barrier to seeking help।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-442",
    "questionEn": "Due list contains:",
    "questionHi": "मादक द्रव्य सेवन (Substance Abuse) में कौन से पदार्थ शामिल हैं?",
    "optionsEn": [
      "Staff attendance",
      "Beneficiaries needing services that month",
      "Drug inventory",
      "Equipment list"
    ],
    "optionsHi": [
      "केवल शराब",
      "शराब, तंबाकू, भांग, ओपियोइड, अन्य नशीले पदार्थ",
      "केवल दवाइयां",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Due list identifies who needs immunization, ANC, etc. in the upcoming period.",
    "explanationHi": "Various substances।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-443",
    "questionEn": "Eligible couple register contains:",
    "questionHi": "NMHP (National Mental Health Programme) का उद्देश्य क्या है?",
    "optionsEn": [
      "Child immunization data",
      "All married women 15-49 years",
      "TB patients",
      "NCD patients"
    ],
    "optionsHi": [
      "मानसिक रोग बढ़ाना",
      "मानसिक स्वास्थ्य सेवाओं को समुदाय में उपलब्ध कराना",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "EC register lists all married women of reproductive age for FP and maternal health tracking.",
    "explanationHi": "Community MH services।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-444",
    "questionEn": "HMIS is:",
    "questionHi": "विकलांगता (Disability) की परिभाषा RPWD Act के अनुसार क्या है?",
    "optionsEn": [
      "Hospital Management System",
      "Health Management Information System",
      "Health Ministry Information Service",
      "Hospital Medical Insurance System"
    ],
    "optionsHi": [
      "केवल शारीरिक",
      "शारीरिक, मानसिक, बौद्धिक या संवेदी हानि जो भागीदारी में बाधा डाले",
      "केवल मानसिक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HMIS is web-based system for health data collection, compilation, and reporting.",
    "explanationHi": "RPWD definition।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-445",
    "questionEn": "Monthly reports are submitted to:",
    "questionHi": "RPWD Act 2016 में कितने प्रकार की विकलांगताएं शामिल हैं?",
    "optionsEn": [
      "Village",
      "Sub-Centre",
      "PHC",
      "District"
    ],
    "optionsHi": [
      "7",
      "14",
      "21",
      "30"
    ],
    "correctAnswer": 2,
    "explanationEn": "MPHW submits monthly activity reports to PHC for compilation and further reporting.",
    "explanationHi": "21 disabilities।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-446",
    "questionEn": "Health indicator is:",
    "questionHi": "UDID (Unique Disability Identity Card) क्या है?",
    "optionsEn": [
      "A medicine",
      "A measurable variable reflecting health status",
      "A disease",
      "An equipment"
    ],
    "optionsHi": [
      "आधार",
      "विकलांग व्यक्तियों के लिए राष्ट्रीय पहचान पत्र",
      "PAN",
      "राशन कार्ड"
    ],
    "correctAnswer": 1,
    "explanationEn": "Health indicators are measurable characteristics that indicate health status of population.",
    "explanationHi": "Disability ID।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-447",
    "questionEn": "IMR is calculated per:",
    "questionHi": "CBR (Community Based Rehabilitation) क्या है?",
    "optionsEn": [
      "100 population",
      "1,000 live births",
      "10,000 population",
      "100,000 population"
    ],
    "optionsHi": [
      "अस्पताल में",
      "समुदाय में विकलांग व्यक्तियों का पुनर्वास",
      "केवल संस्थागत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Infant Mortality Rate = (Infant deaths / Live births) × 1000.",
    "explanationHi": "Community rehab।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-448",
    "questionEn": "MMR is calculated per:",
    "questionHi": "RBSK में विकलांगता स्क्रीनिंग का क्या महत्व है?",
    "optionsEn": [
      "1,000 population",
      "10,000 births",
      "100,000 live births",
      "1,000,000 population"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "शीघ्र पहचान और हस्तक्षेप से बेहतर परिणाम",
      "केवल गिनती",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Maternal Mortality Ratio = (Maternal deaths / Live births) × 100,000.",
    "explanationHi": "Early intervention।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-449",
    "questionEn": "Monitoring differs from evaluation as it is:",
    "questionHi": "Assistive Devices/Technology क्या है?",
    "optionsEn": [
      "Done once",
      "Continuous",
      "External only",
      "Academic only"
    ],
    "optionsHi": [
      "केवल कंप्यूटर",
      "विकलांग व्यक्तियों की मदद के लिए उपकरण (व्हीलचेयर, श्रवण यंत्र)",
      "केवल दवाइयां",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Monitoring: continuous tracking of activities. Evaluation: periodic assessment of outcomes.",
    "explanationHi": "Assistive devices।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-450",
    "questionEn": "Social audit involves:",
    "questionHi": "ADIP Scheme क्या है?",
    "optionsEn": [
      "Financial audit only",
      "Community reviewing health services",
      "Hospital inspection",
      "Staff appraisal"
    ],
    "optionsHi": [
      "शिक्षा",
      "Assistance to Disabled Persons - विकलांगों को सहायक उपकरण वितरण",
      "रोजगार",
      "आवास"
    ],
    "correctAnswer": 1,
    "explanationEn": "Social audit involves community members reviewing and assessing health services.",
    "explanationHi": "Device distribution।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-451",
    "questionEn": "List the five action areas of Ottawa Charter for Health Promotion.",
    "questionHi": "व्यावसायिक स्वास्थ्य (Occupational Health) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "घरेलू स्वास्थ्य",
      "कार्यस्थल पर स्वास्थ्य और सुरक्षा",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Workplace health।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-452",
    "questionEn": "What are the principles of effective IEC materials?",
    "questionHi": "व्यावसायिक रोग (Occupational Disease) का उदाहरण क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "सामान्य सर्दी",
      "सिलिकोसिस (खनन), बिसिनोसिस (कपड़ा), लेड पॉइज़निंग",
      "डेंगू",
      "मलेरिया"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Work-related diseases।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-453",
    "questionEn": "Describe the GATHER technique for counseling.",
    "questionHi": "PPE (Personal Protective Equipment) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "दवाई",
      "कार्यस्थल पर सुरक्षा उपकरण (हेलमेट, दस्ताने, मास्क)",
      "भोजन",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Safety equipment।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-454",
    "questionEn": "What syndromes are reported in the S-form of IDSP?",
    "questionHi": "ESIS (Employees' State Insurance Scheme) क्या प्रदान करता है?",
    "optionsEn": [],
    "optionsHi": [
      "केवल वेतन",
      "चिकित्सा लाभ, नकद लाभ, मातृत्व लाभ, विकलांगता लाभ",
      "केवल पेंशन",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "ESI benefits।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-455",
    "questionEn": "List the steps in outbreak investigation.",
    "questionHi": "Occupational Safety and Health Act किस देश में है?",
    "optionsEn": [],
    "optionsHi": [
      "भारत",
      "अमेरिका (OSHA)",
      "चीन",
      "जापान"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "US law reference।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-456",
    "questionEn": "What is the role of MPHW in disease surveillance?",
    "questionHi": "भारत में Factories Act किस वर्ष का है?",
    "optionsEn": [],
    "optionsHi": [
      "1900",
      "1948",
      "1970",
      "2000"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Indian factories law।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-457",
    "questionEn": "What are the essential registers maintained at Sub-Centre?",
    "questionHi": "स्कूल स्वास्थ्य कार्यक्रम (School Health Programme) का उद्देश्य क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "केवल शिक्षा",
      "विद्यार्थियों के स्वास्थ्य की जांच, शिक्षा, स्वस्थ वातावरण",
      "केवल खेल",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Student health।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-458",
    "questionEn": "Explain how to develop a micro-plan for immunization.",
    "questionHi": "School Health Programme में क्या गतिविधियां होती हैं?",
    "optionsEn": [],
    "optionsHi": [
      "केवल पढ़ाई",
      "स्वास्थ्य जांच, टीकाकरण, IFA, कृमि निवारण, स्वास्थ्य शिक्षा",
      "केवल खेल",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "SHP activities।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-459",
    "questionEn": "How do you calculate Infant Mortality Rate? Give an example.",
    "questionHi": "Health Promoting Schools क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "केवल अस्पताल",
      "स्कूल जो स्वास्थ्य संवर्धन को पाठ्यक्रम और वातावरण में शामिल करे",
      "केवल खेल",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "WHO concept।",
    "difficulty": "hard",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-460",
    "questionEn": "What is the difference between monitoring and evaluation?",
    "questionHi": "WASH in Schools क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "केवल कपड़े धोना",
      "स्कूलों में जल, स्वच्छता और हाथ धोने की सुविधाएं",
      "केवल बर्तन",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "School WASH।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-461",
    "questionEn": "Which is NOT a method of group health education?",
    "questionHi": "Mid-Day Meal Scheme का स्वास्थ्य लाभ क्या है?",
    "optionsEn": [
      "Health talk",
      "Demonstration",
      "Personal counseling",
      "Role play"
    ],
    "optionsHi": [
      "कोई लाभ नहीं",
      "पोषण सुधार, स्कूल उपस्थिति, सीखने की क्षमता",
      "केवल भोजन",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Personal counseling is individual method. Group methods: health talk, demonstration, role play, discussion.",
    "explanationHi": "Nutrition benefits।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-462",
    "questionEn": "Focus group discussion is best for:",
    "questionHi": "शहरी स्वास्थ्य (Urban Health) की चुनौतियां क्या हैं?",
    "optionsEn": [
      "Mass communication",
      "Understanding community perceptions",
      "Individual treatment",
      "Laboratory diagnosis"
    ],
    "optionsHi": [
      "कोई चुनौती नहीं",
      "झुग्गी-झोपड़ी, प्रदूषण, भीड़, NCDs, मानसिक स्वास्थ्य",
      "सब कुछ आसान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "FGD explores attitudes, perceptions, and beliefs of community groups on health issues.",
    "explanationHi": "Urban health issues।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-463",
    "questionEn": "Flash cards are used for:",
    "questionHi": "NUHM (National Urban Health Mission) का उद्देश्य क्या है?",
    "optionsEn": [
      "Group education",
      "Individual counseling with pictures",
      "Mass media",
      "Policy making"
    ],
    "optionsHi": [
      "ग्रामीण स्वास्थ्य",
      "शहरी गरीबों को स्वास्थ्य सेवाएं",
      "केवल अमीर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Flash cards with pictures aid one-to-one counseling, especially for illiterate populations.",
    "explanationHi": "Urban poor health।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-464",
    "questionEn": "World Health Day is observed on:",
    "questionHi": "U-PHC (Urban Primary Health Centre) क्या है?",
    "optionsEn": [
      "March 24",
      "April 7",
      "July 28",
      "December 1"
    ],
    "optionsHi": [
      "ग्रामीण PHC",
      "शहरी क्षेत्रों में प्राथमिक स्वास्थ्य केंद्र",
      "जिला अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "World Health Day on April 7 (WHO founding date) highlights specific health themes each year.",
    "explanationHi": "Urban PHC।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-465",
    "questionEn": "Street plays for health education are called:",
    "questionHi": "MAS (Mahila Arogya Samiti) क्या है?",
    "optionsEn": [
      "Drama",
      "Nukkad natak",
      "Movies",
      "Radio shows"
    ],
    "optionsHi": [
      "ग्रामीण",
      "शहरी स्लम में महिला स्वास्थ्य समिति",
      "केवल पुरुष",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Nukkad natak (street plays) effectively reach communities with health messages in engaging way.",
    "explanationHi": "Urban women's committee।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-466",
    "questionEn": "Which communication is most powerful?",
    "questionHi": "जनजातीय स्वास्थ्य (Tribal Health) की विशेष चुनौतियां क्या हैं?",
    "optionsEn": [
      "Verbal only",
      "Non-verbal only",
      "Combination of verbal and non-verbal",
      "Written only"
    ],
    "optionsHi": [
      "कोई चुनौती नहीं",
      "दुर्गम क्षेत्र, कुपोषण, संक्रमण, सेवाओं तक कम पहुंच",
      "सब कुछ आसान",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Most effective communication combines verbal (words) and non-verbal (body language, tone) elements.",
    "explanationHi": "Tribal health issues।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-467",
    "questionEn": "Resistance in behavior change counseling should be:",
    "questionHi": "जनजातीय क्षेत्रों में SC की जनसंख्या कवरेज क्या है?",
    "optionsEn": [
      "Argued against strongly",
      "Ignored completely",
      "Acknowledged and explored",
      "Punished"
    ],
    "optionsHi": [
      "5000",
      "3000",
      "10000",
      "500"
    ],
    "correctAnswer": 2,
    "explanationEn": "Motivational interviewing: acknowledge resistance, explore concerns, don't argue or force.",
    "explanationHi": "Relaxed norms।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-468",
    "questionEn": "The term 'health literacy' means:",
    "questionHi": "प्रवासी स्वास्थ्य (Migrant Health) की चुनौतियां क्या हैं?",
    "optionsEn": [
      "Reading health books",
      "Ability to obtain and understand health information",
      "Medical degree",
      "Health insurance"
    ],
    "optionsHi": [
      "कोई चुनौती नहीं",
      "सेवाओं तक पहुंच की कमी, रिकॉर्ड में अंतर, भाषा बाधा",
      "सब कुछ आसान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Health literacy is capacity to obtain, process, and understand health information for decisions.",
    "explanationHi": "Migrant health issues।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-469",
    "questionEn": "IHR stands for:",
    "questionHi": "शरणार्थी स्वास्थ्य (Refugee Health) में क्या विशेष विचार हैं?",
    "optionsEn": [
      "Indian Health Regulations",
      "International Health Regulations",
      "Integrated Health Reporting",
      "International Hospital Rules"
    ],
    "optionsHi": [
      "कोई विचार नहीं",
      "मानसिक स्वास्थ्य, पोषण, संक्रमण, मातृ स्वास्थ्य",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "IHR (2005) is international legal framework for reporting and responding to health events.",
    "explanationHi": "Refugee health needs।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-470",
    "questionEn": "Index case means:",
    "questionHi": "लिंग आधारित हिंसा (Gender Based Violence) जन स्वास्थ्य समस्या क्यों है?",
    "optionsEn": [
      "Last case",
      "First identified case",
      "Most severe case",
      "Child case"
    ],
    "optionsHi": [
      "नहीं है",
      "शारीरिक और मानसिक स्वास्थ्य पर गंभीर प्रभाव",
      "केवल सामाजिक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Index case is the first case identified that brings outbreak to attention of authorities.",
    "explanationHi": "GBV health impact।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-471",
    "questionEn": "Secondary attack rate is calculated among:",
    "questionHi": "One Stop Centre (Sakhi) क्या है?",
    "optionsEn": [
      "All population",
      "Contacts of cases",
      "Healthcare workers",
      "Travelers"
    ],
    "optionsHi": [
      "शॉपिंग सेंटर",
      "हिंसा पीड़ित महिलाओं के लिए एकीकृत सहायता केंद्र",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Secondary attack rate measures new cases among contacts of primary cases, showing transmissibility.",
    "explanationHi": "Women's support center।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-472",
    "questionEn": "Epidemic curve helps to determine:",
    "questionHi": "Women Helpline नंबर क्या है?",
    "optionsEn": [
      "Only number of cases",
      "Source and spread pattern",
      "Treatment needed",
      "Drug supply"
    ],
    "optionsHi": [
      "100",
      "181",
      "108",
      "112"
    ],
    "correctAnswer": 1,
    "explanationEn": "Epidemic curve shows timing and pattern of cases, helping identify source and transmission.",
    "explanationHi": "Women's helpline।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-473",
    "questionEn": "Common source outbreak has:",
    "questionHi": "दुर्घटना और आघात (Accidents and Trauma) जन स्वास्थ्य में क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Continuous exposure",
      "Single exposure with rapid rise",
      "Person-to-person spread",
      "No pattern"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "मृत्यु और विकलांगता का प्रमुख कारण",
      "केवल सड़क पर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Point source: single exposure causes rapid rise in cases (e.g., food poisoning at one event).",
    "explanationHi": "Injury burden।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-474",
    "questionEn": "Propagated outbreak shows:",
    "questionHi": "Road Traffic Injuries (RTI) को कम करने के उपाय क्या हैं?",
    "optionsEn": [
      "Single peak",
      "Multiple waves/peaks",
      "No peaks",
      "Continuous flat line"
    ],
    "optionsHi": [
      "कोई उपाय नहीं",
      "हेलमेट, सीट बेल्ट, गति सीमा, शराब पीकर न चलाना",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Propagated outbreak: person-to-person transmission shows successive waves of cases.",
    "explanationHi": "Road safety।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-475",
    "questionEn": "Case definition includes:",
    "questionHi": "Emergency Response System 112 क्या है?",
    "optionsEn": [
      "Treatment protocol",
      "Clinical criteria + person + place + time",
      "Only laboratory tests",
      "Only symptoms"
    ],
    "optionsHi": [
      "केवल पुलिस",
      "एकीकृत आपातकालीन नंबर (पुलिस, एम्बुलेंस, अग्निशमन)",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Case definition specifies who qualifies as case - symptoms/signs, person, place, time characteristics.",
    "explanationHi": "Unified emergency number।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-476",
    "questionEn": "Left-out in immunization means:",
    "questionHi": "Trauma Care Network क्या है?",
    "optionsEn": [
      "Child who completed immunization",
      "Child never brought for immunization",
      "Child with reaction",
      "Fully immunized child"
    ],
    "optionsHi": [
      "केवल एक अस्पताल",
      "राजमार्गों पर आघात देखभाल सुविधाओं का नेटवर्क",
      "केवल शहरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Left-out: never started immunization. Drop-out: started but didn't complete.",
    "explanationHi": "Highway trauma care।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-477",
    "questionEn": "Drop-out in immunization means:",
    "questionHi": "Golden Hour क्या है?",
    "optionsEn": [
      "Child who never came",
      "Child who started but didn't complete",
      "Child who completed all",
      "Child with reaction"
    ],
    "optionsHi": [
      "सोने का समय",
      "आघात के बाद पहला एक घंटा जब उपचार सबसे प्रभावी",
      "केवल सुबह",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Drop-out received some vaccines but didn't complete schedule (e.g., got DPT1 but not DPT3).",
    "explanationHi": "Critical hour।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-478",
    "questionEn": "Session site for immunization is decided based on:",
    "questionHi": "आत्महत्या रोकथाम (Suicide Prevention) जन स्वास्थ्य रणनीति में क्या शामिल है?",
    "optionsEn": [
      "Staff preference",
      "Population and accessibility",
      "Weather only",
      "Random selection"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "जागरूकता, हेल्पलाइन, गेटकीपर प्रशिक्षण, मीडिया दिशानिर्देश",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Session sites should cover population with reasonable travel distance for beneficiaries.",
    "explanationHi": "Suicide prevention।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-479",
    "questionEn": "Birth rate is calculated per:",
    "questionHi": "डूबने (Drowning) की रोकथाम के उपाय क्या हैं?",
    "optionsEn": [
      "100 population",
      "1,000 population",
      "10,000 population",
      "100,000 population"
    ],
    "optionsHi": [
      "कोई उपाय नहीं",
      "तैराकी सीखना, निगरानी, बाड़ लगाना, जागरूकता",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Crude Birth Rate = (Live births / Mid-year population) × 1000.",
    "explanationHi": "Drowning prevention।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-480",
    "questionEn": "Death rate is calculated per:",
    "questionHi": "जलने (Burns) की रोकथाम के उपाय क्या हैं?",
    "optionsEn": [
      "100 population",
      "1,000 population",
      "10,000 population",
      "100,000 population"
    ],
    "optionsHi": [
      "कोई उपाय नहीं",
      "स्टोव सुरक्षा, बच्चों की निगरानी, सुरक्षित ईंधन, जागरूकता",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Crude Death Rate = (Deaths / Mid-year population) × 1000.",
    "explanationHi": "Burns prevention।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-481",
    "questionEn": "Full immunization coverage is calculated as:",
    "questionHi": "विषाक्तता (Poisoning) की रोकथाम के उपाय क्या हैं?",
    "optionsEn": [
      "BCG only",
      "All vaccines as per schedule completed",
      "Any 3 vaccines",
      "DPT only"
    ],
    "optionsHi": [
      "कोई उपाय नहीं",
      "रसायनों को सुरक्षित रखना, लेबलिंग, बच्चों से दूर, जागरूकता",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Full immunization: child received all scheduled vaccines (BCG, DPT, OPV, MR, etc.) by age 1 year.",
    "explanationHi": "Poisoning prevention।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-482",
    "questionEn": "Institutional delivery rate is:",
    "questionHi": "Snakebite जन स्वास्थ्य समस्या क्यों है?",
    "optionsEn": [
      "Home deliveries/Total deliveries",
      "Facility deliveries/Total deliveries × 100",
      "C-sections only",
      "Normal deliveries only"
    ],
    "optionsHi": [
      "नहीं है",
      "ग्रामीण क्षेत्रों में मृत्यु और विकलांगता का कारण",
      "केवल शहरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Institutional delivery rate = (Deliveries in health facility / Total deliveries) × 100.",
    "explanationHi": "Rural health issue।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-483",
    "questionEn": "Social marketing in health uses:",
    "questionHi": "Snakebite की रोकथाम के उपाय क्या हैं?",
    "optionsEn": [
      "Commercial marketing principles for health",
      "Selling health products for profit",
      "Marketing unhealthy products",
      "Political campaigns"
    ],
    "optionsHi": [
      "कोई उपाय नहीं",
      "जूते पहनना, टॉर्च, जमीन पर न सोना, Anti-Snake Venom उपलब्धता",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Social marketing applies marketing principles to promote health behaviors and social good.",
    "explanationHi": "Snakebite prevention।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-484",
    "questionEn": "Peer education is effective because:",
    "questionHi": "Dog Bite और Rabies रोकथाम में क्या शामिल है?",
    "optionsEn": [
      "Peers have medical knowledge",
      "People relate better to peers",
      "Peers are paid more",
      "Peers are older"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "कुत्तों का टीकाकरण, काटने पर धोना, ARV/RIG",
      "केवल मारना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Peer education works because people trust and relate to those similar to themselves.",
    "explanationHi": "Rabies prevention।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-485",
    "questionEn": "Contact tracing is important for:",
    "questionHi": "भोजन सुरक्षा (Food Safety) जन स्वास्थ्य में क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "All diseases equally",
      "Highly transmissible diseases",
      "Non-communicable diseases",
      "Chronic diseases"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "खाद्य जनित रोग बड़ी संख्या में प्रभावित करते हैं",
      "केवल स्वाद",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Contact tracing is crucial for transmissible diseases to identify and prevent further spread.",
    "explanationHi": "Foodborne illness।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-486",
    "questionEn": "Quarantine means:",
    "questionHi": "Food Fortification क्या है?",
    "optionsEn": [
      "Treatment in hospital",
      "Restriction of movement of exposed persons",
      "Isolation of sick persons",
      "Vaccination"
    ],
    "optionsHi": [
      "भोजन कम करना",
      "खाद्य पदार्थों में पोषक तत्व मिलाना",
      "भोजन खराब करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Quarantine: restriction of healthy persons who were exposed. Isolation: separation of sick persons.",
    "explanationHi": "Adding nutrients।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-487",
    "questionEn": "Isolation means:",
    "questionHi": "+F लोगो किस पर होता है?",
    "optionsEn": [
      "Restriction of healthy contacts",
      "Separation of sick persons from others",
      "Normal hospital admission",
      "Community treatment"
    ],
    "optionsHi": [
      "दवाई",
      "फोर्टिफाइड खाद्य पदार्थों पर",
      "कपड़े",
      "इलेक्ट्रॉनिक्स"
    ],
    "correctAnswer": 1,
    "explanationEn": "Isolation separates sick persons to prevent transmission to others.",
    "explanationHi": "Fortification logo।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-488",
    "questionEn": "Community needs assessment identifies:",
    "questionHi": "दवाई प्रतिरोध (Drug Resistance) के प्रकार क्या हैं?",
    "optionsEn": [
      "Only deaths",
      "Health problems and their determinants",
      "Only hospital needs",
      "Only drug needs"
    ],
    "optionsHi": [
      "केवल एक",
      "AMR (Antimicrobial), MDR-TB, XDR-TB, Drug-resistant Malaria",
      "कोई प्रतिरोध नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CNA identifies health problems, their causes, and resources needed to address them.",
    "explanationHi": "Types of resistance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-489",
    "questionEn": "SMART objectives are:",
    "questionHi": "Health Impact of Pollution में क्या शामिल है?",
    "optionsEn": [
      "Intelligent objectives",
      "Specific, Measurable, Achievable, Relevant, Time-bound",
      "Simple objectives",
      "Short objectives"
    ],
    "optionsHi": [
      "कोई प्रभाव नहीं",
      "श्वसन रोग, हृदय रोग, कैंसर, न्यूरोलॉजिकल प्रभाव",
      "केवल खांसी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SMART framework helps create clear, achievable objectives for planning.",
    "explanationHi": "Pollution health effects।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-490",
    "questionEn": "Process indicator measures:",
    "questionHi": "National Clean Air Programme (NCAP) का लक्ष्य क्या है?",
    "optionsEn": [
      "Final health outcomes",
      "Activities being done",
      "Impact only",
      "Deaths only"
    ],
    "optionsHi": [
      "प्रदूषण बढ़ाना",
      "PM2.5 और PM10 में 20-30% कमी (2024 तक)",
      "केवल निगरानी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Process indicators track activities (sessions conducted, visits made). Outcome indicators track results.",
    "explanationHi": "Air quality improvement।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-491",
    "questionEn": "Health belief model suggests behavior change depends on:",
    "questionHi": "Namami Gange Programme क्या है?",
    "optionsEn": [
      "Only knowledge",
      "Perceived susceptibility, severity, benefits, barriers",
      "Only fear",
      "Only rewards"
    ],
    "optionsHi": [
      "वायु प्रदूषण",
      "गंगा नदी की सफाई और पुनर्जीवन",
      "सड़क निर्माण",
      "शिक्षा"
    ],
    "correctAnswer": 1,
    "explanationEn": "HBM: behavior influenced by perceived risk, seriousness, benefits of action, and barriers.",
    "explanationHi": "Ganga cleaning।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-492",
    "questionEn": "Self-efficacy means:",
    "questionHi": "Health and Wellness Ambassador Initiative क्या है?",
    "optionsEn": [
      "Self-treatment",
      "Belief in one's ability to succeed",
      "Self-diagnosis",
      "Self-medication"
    ],
    "optionsHi": [
      "केवल डॉक्टर",
      "शिक्षकों को स्वास्थ्य संदेश देने के लिए प्रशिक्षित करना",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Self-efficacy is confidence in one's ability to perform a behavior successfully.",
    "explanationHi": "Teacher health training।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-493",
    "questionEn": "Fomite transmission is through:",
    "questionHi": "Yoga Protocol क्या है?",
    "optionsEn": [
      "Air",
      "Water",
      "Contaminated objects",
      "Insects"
    ],
    "optionsHi": [
      "केवल व्यायाम",
      "HWC पर योग सत्र के लिए मानकीकृत प्रोटोकॉल",
      "केवल ध्यान",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Fomites are inanimate objects (doorknobs, utensils) that carry infectious agents.",
    "explanationHi": "Standardized yoga।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-494",
    "questionEn": "Vector in disease transmission is:",
    "questionHi": "Population Stabilization का क्या अर्थ है?",
    "optionsEn": [
      "Water",
      "Living organism carrying disease",
      "Food",
      "Soil"
    ],
    "optionsHi": [
      "जनसंख्या बढ़ाना",
      "जनसंख्या वृद्धि को स्थिर करना (TFR को replacement level पर)",
      "जनसंख्या कम करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vector: living organism (mosquito, tick, fly) that transmits disease from one host to another.",
    "explanationHi": "Stable population।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-495",
    "questionEn": "Incubation period is:",
    "questionHi": "जन स्वास्थ्य में Advocacy का क्या अर्थ है?",
    "optionsEn": [
      "Time from treatment to cure",
      "Time from infection to symptom onset",
      "Time in hospital",
      "Time between doses"
    ],
    "optionsHi": [
      "केवल वकालत",
      "नीति परिवर्तन और संसाधनों के लिए समर्थन जुटाना",
      "केवल विरोध",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Incubation period: interval between infection and appearance of first symptoms.",
    "explanationHi": "Policy advocacy।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Disease Surveillance",
    "tags": [
      "disease-surveillance"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-496",
    "questionEn": "Prioritization of health problems uses:",
    "questionHi": "जन स्वास्थ्य में Policy Brief क्या है?",
    "optionsEn": [
      "Random selection",
      "Criteria like magnitude, severity, feasibility",
      "Only cost",
      "Only staff preference"
    ],
    "optionsHi": [
      "लंबी रिपोर्ट",
      "नीति निर्माताओं के लिए संक्षिप्त साक्ष्य-आधारित दस्तावेज",
      "कोई दस्तावेज नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Problems prioritized based on magnitude, severity, feasibility, community concern, effectiveness.",
    "explanationHi": "Policy summary।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-497",
    "questionEn": "Data quality means data should be:",
    "questionHi": "जन स्वास्थ्य में Research to Policy Gap क्या है?",
    "optionsEn": [
      "Only accurate",
      "Complete, accurate, timely, consistent",
      "Only timely",
      "Only consistent"
    ],
    "optionsHi": [
      "कोई अंतर नहीं",
      "शोध के निष्कर्षों को नीति में लागू करने में देरी/बाधा",
      "हमेशा तुरंत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Quality data: complete (all fields), accurate (correct), timely (on time), consistent (matching).",
    "explanationHi": "Translation gap।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-498",
    "questionEn": "Expected pregnancies in a population are estimated as:",
    "questionHi": "जन स्वास्थ्य में Knowledge Translation क्या है?",
    "optionsEn": [
      "1% of population",
      "3% of population",
      "5% of population",
      "10% of population"
    ],
    "optionsHi": [
      "केवल अनुवाद",
      "शोध ज्ञान को व्यवहार में लाना",
      "केवल पढ़ना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Expected pregnancies = approximately 3% of total population (varies by birth rate).",
    "explanationHi": "Applying research।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-499",
    "questionEn": "Feedback in communication means:",
    "questionHi": "जन स्वास्थ्य में साक्ष्य का उपयोग क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "One-way message",
      "Response from receiver",
      "Written report",
      "Final decision"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "प्रभावी और दक्ष हस्तक्षेप, संसाधनों का सही उपयोग",
      "केवल अनुमान पर्याप्त",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Feedback is receiver's response indicating whether message was understood.",
    "explanationHi": "Evidence-based decisions।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Health Promotion & IEC",
    "tags": [
      "health-promotion-&-iec"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-500",
    "questionEn": "Coverage gap analysis helps identify:",
    "questionHi": "जन स्वास्थ्य का मूल मंत्र क्या है?",
    "optionsEn": [
      "Only successful areas",
      "Areas and populations not being reached",
      "Only financial gaps",
      "Only staff gaps"
    ],
    "optionsHi": [
      "केवल उपचार",
      "रोकथाम इलाज से बेहतर है (Prevention is better than cure)",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Gap analysis identifies who/where services are not reaching to plan targeted interventions.",
    "explanationHi": "Public health principle।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Community Health Planning",
    "tags": [
      "community-health-planning"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-501",
    "questionEn": "The fundamental difference between public health and clinical medicine is:",
    "questionHi": "भारत में स्वास्थ्य क्षेत्र पर सकल घरेलू उत्पाद (GDP) का कितना प्रतिशत खर्च होता है?",
    "optionsEn": [
      "Public health treats individuals",
      "Public health focuses on populations",
      "Clinical medicine prevents disease",
      "They are the same"
    ],
    "optionsHi": [
      "1%",
      "लगभग 1.2-1.5%",
      "5%",
      "10%"
    ],
    "correctAnswer": 1,
    "explanationEn": "Public health targets population-level health; clinical medicine treats individuals.",
    "explanationHi": "Low public health spending।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-502",
    "questionEn": "Alma Ata Declaration was adopted in:",
    "questionHi": "राष्ट्रीय स्वास्थ्य नीति 2017 में GDP का कितना प्रतिशत स्वास्थ्य पर खर्च का लक्ष्य है?",
    "optionsEn": [
      "1948",
      "1978",
      "2000",
      "2015"
    ],
    "optionsHi": [
      "1%",
      "2.5%",
      "5%",
      "10%"
    ],
    "correctAnswer": 1,
    "explanationEn": "Alma Ata Declaration (1978) called for 'Health for All by 2000' through Primary Health Care.",
    "explanationHi": "NHP 2017 target।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-503",
    "questionEn": "SDG 3 relates to:",
    "questionHi": "भारत में स्वास्थ्य वित्तपोषण के मुख्य स्रोत क्या हैं?",
    "optionsEn": [
      "Education",
      "Health and Wellbeing",
      "Clean Water",
      "Poverty"
    ],
    "optionsHi": [
      "केवल सरकार",
      "सरकार, OOPE, बीमा, विदेशी सहायता",
      "केवल बीमा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sustainable Development Goal 3 is to ensure healthy lives and promote well-being for all.",
    "explanationHi": "Multiple sources।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-504",
    "questionEn": "Universal Health Coverage means:",
    "questionHi": "Tax-Based Health Financing क्या है?",
    "optionsEn": [
      "Free private healthcare",
      "All people receive quality health services without financial hardship",
      "Hospital for every village",
      "Free medicines only"
    ],
    "optionsHi": [
      "बीमा",
      "सरकारी कर राजस्व से स्वास्थ्य सेवाओं का वित्तपोषण",
      "OOPE",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "UHC ensures everyone accesses quality health services without suffering financial hardship.",
    "explanationHi": "Tax-funded health।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-505",
    "questionEn": "India's current IMR is approximately:",
    "questionHi": "Social Health Insurance क्या है?",
    "optionsEn": [
      "10 per 1000",
      "28 per 1000",
      "50 per 1000",
      "80 per 1000"
    ],
    "optionsHi": [
      "निजी बीमा",
      "अनिवार्य योगदान आधारित सामाजिक बीमा (जैसे ESIS)",
      "केवल अमीरों के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "India's IMR has declined to about 28 per 1000 live births (2020).",
    "explanationHi": "Mandatory contribution।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-506",
    "questionEn": "India's current MMR is approximately:",
    "questionHi": "Private Health Insurance भारत में कितनी आबादी को कवर करता है?",
    "optionsEn": [
      "50 per 100,000",
      "97 per 100,000",
      "200 per 100,000",
      "400 per 100,000"
    ],
    "optionsHi": [
      "90%",
      "लगभग 5-10%",
      "50%",
      "0%"
    ],
    "correctAnswer": 1,
    "explanationEn": "India's MMR has declined to about 97 per 100,000 live births (2020).",
    "explanationHi": "Low private coverage।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-507",
    "questionEn": "Life expectancy at birth in India is approximately:",
    "questionHi": "Community-Based Health Insurance क्या है?",
    "optionsEn": [
      "50 years",
      "60 years",
      "70 years",
      "80 years"
    ],
    "optionsHi": [
      "सरकारी",
      "समुदाय द्वारा संचालित स्वास्थ्य बीमा (जैसे SEWA)",
      "निजी कंपनी",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Life expectancy at birth in India is approximately 70 years (2020).",
    "explanationHi": "Community-run insurance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-508",
    "questionEn": "Leading cause of death in India currently is:",
    "questionHi": "Strategic Purchasing स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Infectious diseases",
      "Non-communicable diseases",
      "Injuries",
      "Maternal causes"
    ],
    "optionsHi": [
      "कुछ भी खरीदना",
      "स्वास्थ्य परिणामों के आधार पर सेवाओं की खरीद",
      "केवल दवाइयां",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "NCDs now cause about 63% of all deaths in India, surpassing infectious diseases.",
    "explanationHi": "Outcome-based purchasing।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-509",
    "questionEn": "ASHA program was launched under:",
    "questionHi": "Capitation Payment क्या है?",
    "optionsEn": [
      "Family Planning Program",
      "NRHM",
      "NACP",
      "NTEP"
    ],
    "optionsHi": [
      "प्रति सेवा",
      "प्रति व्यक्ति प्रति अवधि निश्चित भुगतान",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ASHA (Accredited Social Health Activist) was launched under NRHM in 2005.",
    "explanationHi": "Per capita payment।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-510",
    "questionEn": "Number of Sub-Centres in India is approximately:",
    "questionHi": "Fee-for-Service Payment की समस्या क्या है?",
    "optionsEn": [
      "50,000",
      "100,000",
      "158,000",
      "250,000"
    ],
    "optionsHi": [
      "कोई समस्या नहीं",
      "अनावश्यक सेवाओं का प्रोत्साहन",
      "कम सेवाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "India has about 158,000 Sub-Centres forming the base of primary healthcare.",
    "explanationHi": "Over-servicing risk।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-511",
    "questionEn": "Number of PHCs in India is approximately:",
    "questionHi": "DRG (Diagnosis Related Groups) क्या है?",
    "optionsEn": [
      "10,000",
      "30,000",
      "50,000",
      "100,000"
    ],
    "optionsHi": [
      "दवाई समूह",
      "निदान के आधार पर भुगतान की प्रणाली",
      "डॉक्टर समूह",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "India has about 30,000 Primary Health Centres.",
    "explanationHi": "Case-based payment।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-512",
    "questionEn": "Number of CHCs in India is approximately:",
    "questionHi": "Performance-Based Financing क्या है?",
    "optionsEn": [
      "2,000",
      "5,700",
      "10,000",
      "20,000"
    ],
    "optionsHi": [
      "निश्चित वेतन",
      "प्रदर्शन के आधार पर भुगतान/प्रोत्साहन",
      "कोई भुगतान नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "India has about 5,700 Community Health Centres.",
    "explanationHi": "Pay for performance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-513",
    "questionEn": "Health expenditure as percentage of GDP in India is approximately:",
    "questionHi": "Risk Pooling स्वास्थ्य बीमा में क्या है?",
    "optionsEn": [
      "1%",
      "2.5%",
      "5%",
      "10%"
    ],
    "optionsHi": [
      "व्यक्तिगत जोखिम",
      "कई लोगों के जोखिम को एकत्र करना",
      "कोई जोखिम नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "India spends about 2.5% of GDP on health (government + private combined).",
    "explanationHi": "Sharing risk।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-514",
    "questionEn": "Out-of-pocket health expenditure in India is:",
    "questionHi": "Moral Hazard बीमा में क्या है?",
    "optionsEn": [
      "Low (20%)",
      "Moderate (40%)",
      "High (60%)",
      "Very high (80%)"
    ],
    "optionsHi": [
      "नैतिक व्यवहार",
      "बीमा होने पर अधिक जोखिम लेना/सेवाएं उपयोग करना",
      "कम उपयोग",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Out-of-pocket expenditure is high (~60%) causing financial hardship for many families.",
    "explanationHi": "Over-utilization risk।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-515",
    "questionEn": "Swachh Bharat Mission focuses on:",
    "questionHi": "Adverse Selection बीमा में क्या है?",
    "optionsEn": [
      "Hospital construction",
      "Sanitation and open defecation free status",
      "Drug supply",
      "Training doctors"
    ],
    "optionsHi": [
      "अच्छा चयन",
      "उच्च जोखिम वाले लोगों का अधिक बीमा खरीदना",
      "कम जोखिम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Swachh Bharat Mission aims to achieve ODF (Open Defecation Free) status across India.",
    "explanationHi": "Selection bias।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-516",
    "questionEn": "National Health Policy 2017 aims for health expenditure of:",
    "questionHi": "Co-Payment क्या है?",
    "optionsEn": [
      "1.5% of GDP",
      "2.5% of GDP",
      "5% of GDP",
      "10% of GDP"
    ],
    "optionsHi": [
      "पूरा भुगतान बीमा से",
      "बीमित व्यक्ति द्वारा सेवा का कुछ हिस्सा भुगतान",
      "कोई भुगतान नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "NHP 2017 targets increasing government health expenditure to 2.5% of GDP.",
    "explanationHi": "Cost sharing।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-517",
    "questionEn": "Demographic transition refers to:",
    "questionHi": "Deductible बीमा में क्या है?",
    "optionsEn": [
      "Population movement",
      "Shift from high to low birth and death rates",
      "Economic development",
      "Political change"
    ],
    "optionsHi": [
      "कोई कटौती नहीं",
      "बीमा लाभ शुरू होने से पहले भुगतान की जाने वाली राशि",
      "पूरा भुगतान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Demographic transition: societies progress from high birth/death rates to low rates.",
    "explanationHi": "Initial payment।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-518",
    "questionEn": "Epidemiological transition refers to:",
    "questionHi": "Pre-Authorization बीमा में क्या है?",
    "optionsEn": [
      "Change in disease patterns from infectious to NCDs",
      "Population growth",
      "Economic change",
      "Political change"
    ],
    "optionsHi": [
      "कोई अनुमति नहीं",
      "उपचार से पहले बीमा कंपनी की स्वीकृति",
      "बाद में अनुमति",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Epidemiological transition: shift in disease burden from communicable to non-communicable diseases.",
    "explanationHi": "Prior approval।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-519",
    "questionEn": "Social vaccine refers to:",
    "questionHi": "Reimbursement Model बीमा में क्या है?",
    "optionsEn": [
      "New vaccine type",
      "Community participation in disease prevention",
      "Government policy",
      "Hospital service"
    ],
    "optionsHi": [
      "पहले भुगतान नहीं",
      "रोगी पहले भुगतान करे फिर बीमा से वापसी",
      "केवल बीमा भुगतान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Social vaccine: community engagement and behavior change that protects against disease.",
    "explanationHi": "Pay and claim।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-520",
    "questionEn": "Health in All Policies means:",
    "questionHi": "Cashless Treatment बीमा में क्या है?",
    "optionsEn": [
      "Only health ministry makes policy",
      "All sectors consider health impacts in their policies",
      "Only health policies needed",
      "Policies made by hospitals"
    ],
    "optionsHi": [
      "मुफ्त",
      "बीमा सीधे अस्पताल को भुगतान करे (रोगी को नहीं देना)",
      "केवल नकद",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HiAP: all government sectors (education, transport, agriculture) consider health in policy-making.",
    "explanationHi": "Direct payment।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-521",
    "questionEn": "One Health approach addresses:",
    "questionHi": "PM-JAY में कवरेज राशि कितनी है?",
    "optionsEn": [
      "Only human health",
      "Only animal health",
      "Human, animal, and environmental health together",
      "Only environmental health"
    ],
    "optionsHi": [
      "1 लाख",
      "5 लाख प्रति परिवार प्रति वर्ष",
      "10 लाख",
      "50 लाख"
    ],
    "correctAnswer": 2,
    "explanationEn": "One Health recognizes interconnection of human, animal, and environmental health.",
    "explanationHi": "Rs 5 lakh coverage।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-522",
    "questionEn": "Which is a waterborne disease?",
    "questionHi": "PM-JAY में लाभार्थी कैसे चुने जाते हैं?",
    "optionsEn": [
      "Malaria",
      "TB",
      "Cholera",
      "Measles"
    ],
    "optionsHi": [
      "आय प्रमाण",
      "SECC 2011 के आधार पर वंचित परिवार",
      "कोई भी",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Cholera is transmitted through contaminated water. Malaria is vector-borne.",
    "explanationHi": "SECC-based selection।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-523",
    "questionEn": "Which is an airborne disease?",
    "questionHi": "PM-JAY में कितने पैकेज (प्रक्रियाएं) कवर हैं?",
    "optionsEn": [
      "Cholera",
      "Typhoid",
      "TB",
      "Hepatitis A"
    ],
    "optionsHi": [
      "100",
      "लगभग 1,900+",
      "50",
      "10"
    ],
    "correctAnswer": 2,
    "explanationEn": "TB spreads through air (droplet nuclei). Cholera and typhoid are waterborne.",
    "explanationHi": "Many procedures covered।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-524",
    "questionEn": "Herd immunity threshold for measles is approximately:",
    "questionHi": "Empanelled Hospital PM-JAY में क्या है?",
    "optionsEn": [
      "50%",
      "70%",
      "85%",
      "95%"
    ],
    "optionsHi": [
      "कोई भी अस्पताल",
      "PM-JAY में पंजीकृत और मान्यता प्राप्त अस्पताल",
      "केवल सरकारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Measles is highly contagious; needs 95%+ immunity to prevent outbreaks.",
    "explanationHi": "Approved hospitals।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-525",
    "questionEn": "R0 (basic reproduction number) indicates:",
    "questionHi": "Ayushman Card कैसे बनता है?",
    "optionsEn": [
      "Recovery rate",
      "Average new cases from one case in susceptible population",
      "Death rate",
      "Vaccination coverage"
    ],
    "optionsHi": [
      "स्वचालित",
      "CSC, अस्पताल, या ऑनलाइन पोर्टल से",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "R0: average number of secondary cases from one case in fully susceptible population.",
    "explanationHi": "Card generation।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-526",
    "questionEn": "If R0 < 1, the outbreak will:",
    "questionHi": "Trust Model और Insurance Model PM-JAY में क्या है?",
    "optionsEn": [
      "Spread rapidly",
      "Die out",
      "Stay constant",
      "Become endemic"
    ],
    "optionsHi": [
      "एक ही",
      "Trust=सरकार सीधे भुगतान, Insurance=बीमा कंपनी के माध्यम से",
      "कोई मॉडल नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "R0 < 1: each case generates less than one new case, outbreak declines and dies out.",
    "explanationHi": "Implementation models।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-527",
    "questionEn": "Diphtheria toxoid is given in:",
    "questionHi": "Portability PM-JAY में क्या है?",
    "optionsEn": [
      "BCG",
      "OPV",
      "Pentavalent/DPT",
      "MR"
    ],
    "optionsHi": [
      "एक राज्य में ही",
      "किसी भी राज्य में empanelled अस्पताल में इलाज",
      "केवल घर",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Diphtheria toxoid is part of DPT (Diphtheria-Pertussis-Tetanus) and Pentavalent vaccines.",
    "explanationHi": "Inter-state portability।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-528",
    "questionEn": "Polio eradication in India was achieved in:",
    "questionHi": "PM-JAY Helpline नंबर क्या है?",
    "optionsEn": [
      "2000",
      "2011",
      "2014",
      "2020"
    ],
    "optionsHi": [
      "100",
      "14555",
      "108",
      "112"
    ],
    "correctAnswer": 1,
    "explanationEn": "Last indigenous polio case in India was January 2011. Certified polio-free in 2014.",
    "explanationHi": "PM-JAY helpline।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-529",
    "questionEn": "Mission Indradhanush targets:",
    "questionHi": "स्वास्थ्य में Human Resources Planning क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Elderly care",
      "Full immunization in underperforming areas",
      "TB elimination",
      "Cancer screening"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "सही संख्या, कौशल, वितरण सुनिश्चित करना",
      "केवल भर्ती",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mission Indradhanush aims to achieve full immunization in low-coverage districts.",
    "explanationHi": "Workforce planning।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-530",
    "questionEn": "Cold chain maintains vaccine temperature at:",
    "questionHi": "भारत में स्वास्थ्य कर्मियों की कमी का मुख्य कारण क्या है?",
    "optionsEn": [
      "-20 to -30°C",
      "+2 to +8°C",
      "+15 to +25°C",
      "Room temperature"
    ],
    "optionsHi": [
      "अधिक उत्पादन",
      "कम उत्पादन, असमान वितरण, Brain drain",
      "पर्याप्त",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Most vaccines need storage at +2°C to +8°C to maintain potency.",
    "explanationHi": "Shortage reasons।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-531",
    "questionEn": "Vaccine vial monitor (VVM) indicates:",
    "questionHi": "Brain Drain स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Vaccine potency",
      "Cumulative heat exposure",
      "Expiry date",
      "Dose volume"
    ],
    "optionsHi": [
      "बुद्धि बढ़ना",
      "प्रशिक्षित स्वास्थ्य कर्मियों का विकसित देशों में जाना",
      "बुद्धि कम होना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "VVM changes color with cumulative heat exposure, indicating if vaccine may be damaged.",
    "explanationHi": "Migration of workers।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-532",
    "questionEn": "Open vial policy applies to:",
    "questionHi": "Rural-Urban Disparity स्वास्थ्य कर्मियों में क्या है?",
    "optionsEn": [
      "All vaccines",
      "Only OPV and Hepatitis B",
      "Only freeze-dried vaccines",
      "Only DPT"
    ],
    "optionsHi": [
      "समान वितरण",
      "शहरों में अधिक, ग्रामीण में कम स्वास्थ्य कर्मी",
      "ग्रामीण में अधिक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Open vial policy: opened OPV and Hep B can be used up to 28 days if stored properly.",
    "explanationHi": "Uneven distribution।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-533",
    "questionEn": "AEFI stands for:",
    "questionHi": "Retention of Health Workers ग्रामीण क्षेत्रों में कैसे बढ़ाई जा सकती है?",
    "optionsEn": [
      "Adverse Effect Following Infection",
      "Adverse Event Following Immunization",
      "Alternative Effect Following Injection",
      "Annual Evaluation For Immunization"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "प्रोत्साहन, आवास, करियर विकास, स्थानीय भर्ती",
      "केवल वेतन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "AEFI: any untoward medical event after vaccination, whether or not caused by vaccine.",
    "explanationHi": "Retention strategies।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-534",
    "questionEn": "Anaphylaxis after vaccination is:",
    "questionHi": "Continuing Medical Education (CME) क्या है?",
    "optionsEn": [
      "Common",
      "Rare but serious",
      "Not possible",
      "Always fatal"
    ],
    "optionsHi": [
      "केवल MBBS",
      "चिकित्सा पेशेवरों का निरंतर प्रशिक्षण",
      "केवल एक बार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anaphylaxis is rare but serious; facilities should have emergency kit available.",
    "explanationHi": "Ongoing training।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-535",
    "questionEn": "Injection safety includes all EXCEPT:",
    "questionHi": "In-Service Training का क्या महत्व है?",
    "optionsEn": [
      "Using AD syringes",
      "One needle per patient",
      "Reusing syringes to save cost",
      "Safe disposal"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "नवीनतम ज्ञान, कौशल विकास, गुणवत्ता सुधार",
      "पुराना ज्ञान पर्याप्त",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "NEVER reuse syringes. Use AD syringes, one per patient, dispose safely.",
    "explanationHi": "Skills update।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-536",
    "questionEn": "AD syringe stands for:",
    "questionHi": "Skill Lab Training क्या है?",
    "optionsEn": [
      "Automatic Dosing syringe",
      "Auto-Disable syringe",
      "Advanced Design syringe",
      "Anti-Disease syringe"
    ],
    "optionsHi": [
      "केवल किताब",
      "मॉडल/सिम्युलेशन पर कौशल अभ्यास",
      "केवल रोगी पर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "AD syringe automatically disables after one use, preventing reuse.",
    "explanationHi": "Simulation training।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-537",
    "questionEn": "Biomedical waste from Sub-Centre should be disposed in:",
    "questionHi": "Telemedicine का ग्रामीण स्वास्थ्य में क्या लाभ है?",
    "optionsEn": [
      "Open pit",
      "Regular garbage",
      "Colored bins as per BMW rules",
      "River/pond"
    ],
    "optionsHi": [
      "कोई लाभ नहीं",
      "विशेषज्ञ परामर्श, दूरी कम, समय बचत",
      "केवल शहरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "BMW rules require segregation into colored bins for proper disposal.",
    "explanationHi": "Remote consultation।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-538",
    "questionEn": "Yellow bin is used for:",
    "questionHi": "eSanjeevani में कितने प्रकार की सेवाएं हैं?",
    "optionsEn": [
      "General waste",
      "Infected/anatomical waste",
      "Sharps",
      "Glass"
    ],
    "optionsHi": [
      "एक",
      "दो (eSanjeevani AB-HWC और eSanjeevani OPD)",
      "पांच",
      "दस"
    ],
    "correctAnswer": 1,
    "explanationEn": "Yellow bin: infectious/pathological waste. Blue: sharps. Black: general waste.",
    "explanationHi": "Two platforms।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-539",
    "questionEn": "Sharps should be disposed in:",
    "questionHi": "eSanjeevani AB-HWC क्या है?",
    "optionsEn": [
      "Yellow bag",
      "Black bag",
      "Puncture-proof container",
      "Regular dustbin"
    ],
    "optionsHi": [
      "सीधे रोगी से",
      "HWC से विशेषज्ञ परामर्श (Doctor-to-Doctor)",
      "केवल शहरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Sharps (needles, blades) in puncture-proof containers to prevent needle-stick injuries.",
    "explanationHi": "Hub-spoke model।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-540",
    "questionEn": "Hand hygiene is most important:",
    "questionHi": "eSanjeevani OPD क्या है?",
    "optionsEn": [
      "Once a day",
      "Before and after patient contact",
      "Only after work",
      "Only when hands are visibly dirty"
    ],
    "optionsHi": [
      "अस्पताल में",
      "घर से सीधे डॉक्टर से परामर्श (Patient-to-Doctor)",
      "केवल HWC",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hand hygiene before and after each patient contact prevents infection transmission.",
    "explanationHi": "Direct consultation।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-541",
    "questionEn": "Standard precautions apply to:",
    "questionHi": "e-Prescription क्या है?",
    "optionsEn": [
      "Only HIV patients",
      "Only TB patients",
      "All patients regardless of diagnosis",
      "Only hospitalized patients"
    ],
    "optionsHi": [
      "कागज़ पर",
      "इलेक्ट्रॉनिक प्रिस्क्रिप्शन",
      "मौखिक",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Standard precautions: treat all patients as potentially infectious regardless of diagnosis.",
    "explanationHi": "Digital prescription।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-542",
    "questionEn": "PPE stands for:",
    "questionHi": "Electronic Health Records (EHR) का क्या लाभ है?",
    "optionsEn": [
      "Personal Patient Equipment",
      "Personal Protective Equipment",
      "Primary Protection Equipment",
      "Public Protection Equipment"
    ],
    "optionsHi": [
      "कोई लाभ नहीं",
      "रिकॉर्ड की उपलब्धता, निरंतरता, डेटा विश्लेषण",
      "केवल कागज़",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "PPE includes gloves, masks, gowns, eye protection to protect health workers.",
    "explanationHi": "Digital records।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-543",
    "questionEn": "N95 mask filters particles of size:",
    "questionHi": "ABDM में Health ID (ABHA) क्या है?",
    "optionsEn": [
      "0.3 microns and larger with 95% efficiency",
      "All particles 100%",
      "Only large droplets",
      "Only gas"
    ],
    "optionsHi": [
      "आधार",
      "14 अंकों की विशिष्ट स्वास्थ्य पहचान संख्या",
      "PAN",
      "वोटर ID"
    ],
    "correctAnswer": 0,
    "explanationEn": "N95 filters at least 95% of 0.3 micron particles; used for airborne precautions.",
    "explanationHi": "Health ID number।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-544",
    "questionEn": "Chlorine solution for disinfection should be:",
    "questionHi": "ABDM में Health Facility Registry क्या है?",
    "optionsEn": [
      "0.1%",
      "0.5%",
      "5%",
      "50%"
    ],
    "optionsHi": [
      "रोगी सूची",
      "सभी स्वास्थ्य सुविधाओं का डिजिटल रजिस्टर",
      "केवल सरकारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "0.5% chlorine solution (5000 ppm) for surface disinfection; 0.05% for hand wash.",
    "explanationHi": "Facility database।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-545",
    "questionEn": "Autoclave sterilization uses:",
    "questionHi": "ABDM में Health Professional Registry क्या है?",
    "optionsEn": [
      "Dry heat",
      "Steam under pressure",
      "Chemical",
      "Radiation"
    ],
    "optionsHi": [
      "रोगी सूची",
      "सभी स्वास्थ्य पेशेवरों का डिजिटल रजिस्टर",
      "केवल डॉक्टर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Autoclave: steam sterilization at 121°C for 15 min under pressure.",
    "explanationHi": "Professional database।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-546",
    "questionEn": "ORS contains:",
    "questionHi": "Personal Health Records (PHR) का ABDM में क्या अर्थ है?",
    "optionsEn": [
      "Glucose and salt only",
      "Glucose, sodium, potassium, chloride, citrate",
      "Only water",
      "Antibiotics"
    ],
    "optionsHi": [
      "अस्पताल रिकॉर्ड",
      "व्यक्ति के अपने नियंत्रण में स्वास्थ्य रिकॉर्ड",
      "केवल डॉक्टर के पास",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ORS contains balanced electrolytes to replace losses and glucose to aid absorption.",
    "explanationHi": "Patient-controlled records।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-547",
    "questionEn": "ORS preparation: one packet mixed in:",
    "questionHi": "Consent Manager ABDM में क्या है?",
    "optionsEn": [
      "100 ml water",
      "500 ml water",
      "1 liter water",
      "2 liters water"
    ],
    "optionsHi": [
      "स्वचालित साझा",
      "रोगी की अनुमति से ही स्वास्थ्य डेटा साझा करना",
      "कोई अनुमति नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "One ORS packet dissolved in 1 liter of clean water for proper concentration.",
    "explanationHi": "Patient consent।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-548",
    "questionEn": "Prepared ORS should be used within:",
    "questionHi": "Data Privacy स्वास्थ्य में क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "6 hours",
      "24 hours",
      "48 hours",
      "1 week"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "संवेदनशील जानकारी की सुरक्षा, विश्वास बनाए रखना",
      "सबको पता होना चाहिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Use prepared ORS within 24 hours; discard and make fresh after that.",
    "explanationHi": "Health data privacy।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-549",
    "questionEn": "Severe dehydration requires:",
    "questionHi": "Cybersecurity स्वास्थ्य में क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "ORS only",
      "IV fluids",
      "Antibiotics only",
      "Surgery"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "स्वास्थ्य डेटा की सुरक्षा, सेवा निरंतरता",
      "केवल बैंकिंग में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Severe dehydration (shock, inability to drink) requires immediate IV fluid replacement.",
    "explanationHi": "Digital security।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-550",
    "questionEn": "Plan A for diarrhea treatment is:",
    "questionHi": "Interoperability स्वास्थ्य IT में क्या है?",
    "optionsEn": [
      "IV fluids",
      "ORS at home, continue feeding",
      "Hospitalization",
      "Antibiotics only"
    ],
    "optionsHi": [
      "अलग-अलग सिस्टम",
      "विभिन्न सिस्टम के बीच डेटा साझा करने की क्षमता",
      "कोई साझा नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Plan A: no dehydration - ORS at home, continue breastfeeding/feeding.",
    "explanationHi": "System communication।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-551",
    "questionEn": "Plan B for diarrhea is:",
    "questionHi": "Wearable Devices का स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "Home treatment",
      "ORS under supervision at health facility",
      "IV fluids",
      "Surgery"
    ],
    "optionsHi": [
      "केवल फैशन",
      "स्वास्थ्य निगरानी (हृदय गति, कदम, नींद)",
      "कोई उपयोग नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Plan B: some dehydration - ORS therapy at health facility with observation.",
    "explanationHi": "Health monitoring।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-552",
    "questionEn": "Plan C for diarrhea is:",
    "questionHi": "Remote Patient Monitoring क्या है?",
    "optionsEn": [
      "Home ORS",
      "Facility ORS",
      "IV fluid therapy",
      "Antibiotics only"
    ],
    "optionsHi": [
      "अस्पताल में ही",
      "घर पर रोगी की स्वास्थ्य निगरानी",
      "कोई निगरानी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Plan C: severe dehydration - IV fluids urgently (Ringer's lactate).",
    "explanationHi": "Home monitoring।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-553",
    "questionEn": "Exclusive breastfeeding prevents:",
    "questionHi": "Predictive Analytics स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Only malnutrition",
      "Diarrhea and respiratory infections",
      "Only allergies",
      "Only obesity"
    ],
    "optionsHi": [
      "भविष्यवाणी नहीं",
      "डेटा से स्वास्थ्य घटनाओं की भविष्यवाणी",
      "केवल पिछला डेटा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Exclusive breastfeeding significantly reduces diarrhea and respiratory infections in infants.",
    "explanationHi": "Forecasting health events।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-554",
    "questionEn": "Colostrum is important because:",
    "questionHi": "Machine Learning का स्वास्थ्य में उपयोग क्या है?",
    "optionsEn": [
      "High volume",
      "High in antibodies",
      "High in sugar",
      "Easy to digest only"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "निदान सहायता, पैटर्न पहचान, जोखिम भविष्यवाणी",
      "केवल मशीन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Colostrum (first milk) is rich in antibodies providing passive immunity to newborn.",
    "explanationHi": "AI applications।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-555",
    "questionEn": "Growth monitoring uses:",
    "questionHi": "Natural Language Processing (NLP) का स्वास्थ्य में उपयोग क्या है?",
    "optionsEn": [
      "Only weight",
      "Only height",
      "Weight-for-age/height-for-age",
      "Only head circumference"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "क्लिनिकल नोट्स का विश्लेषण, चैटबॉट",
      "केवल अनुवाद",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Growth monitoring uses weight-for-age, height-for-age, weight-for-height indicators.",
    "explanationHi": "Text analysis।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-556",
    "questionEn": "MUAC measures:",
    "questionHi": "Blockchain का स्वास्थ्य में संभावित उपयोग क्या है?",
    "optionsEn": [
      "Height",
      "Weight",
      "Mid-Upper Arm Circumference",
      "Head size"
    ],
    "optionsHi": [
      "केवल क्रिप्टो",
      "सुरक्षित स्वास्थ्य रिकॉर्ड, दवाई ट्रैकिंग",
      "कोई उपयोग नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "MUAC: quick screening for acute malnutrition; <11.5 cm indicates severe acute malnutrition.",
    "explanationHi": "Secure records।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-557",
    "questionEn": "Severe acute malnutrition (SAM) is indicated by:",
    "questionHi": "3D Printing का स्वास्थ्य में उपयोग क्या है?",
    "optionsEn": [
      "MUAC >13.5 cm",
      "MUAC <11.5 cm",
      "MUAC 12-13 cm",
      "MUAC >15 cm"
    ],
    "optionsHi": [
      "कागज़ प्रिंटिंग",
      "प्रोस्थेटिक्स, इम्प्लांट्स, सर्जिकल मॉडल",
      "केवल खिलौने",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MUAC <11.5 cm (red zone) indicates SAM requiring urgent treatment.",
    "explanationHi": "Medical devices।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-558",
    "questionEn": "Stunting indicates:",
    "questionHi": "Genomics और Precision Medicine क्या है?",
    "optionsEn": [
      "Acute malnutrition",
      "Chronic malnutrition",
      "Overweight",
      "Normal growth"
    ],
    "optionsHi": [
      "सामान्य उपचार",
      "आनुवंशिक जानकारी के आधार पर व्यक्तिगत उपचार",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Stunting (low height-for-age) indicates chronic/long-term malnutrition.",
    "explanationHi": "Personalized medicine।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-559",
    "questionEn": "Wasting indicates:",
    "questionHi": "Pharmacogenomics क्या है?",
    "optionsEn": [
      "Chronic malnutrition",
      "Acute malnutrition",
      "Overweight",
      "Normal growth"
    ],
    "optionsHi": [
      "सामान्य दवाई",
      "जीन के आधार पर दवाई प्रतिक्रिया की भविष्यवाणी",
      "केवल फार्मेसी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Wasting (low weight-for-height) indicates acute/recent malnutrition.",
    "explanationHi": "Drug response genes।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-560",
    "questionEn": "Iron deficiency anemia in children causes:",
    "questionHi": "Gene Therapy क्या है?",
    "optionsEn": [
      "Only pallor",
      "Developmental delays and poor cognitive function",
      "Only fatigue",
      "No symptoms"
    ],
    "optionsHi": [
      "सामान्य उपचार",
      "दोषपूर्ण जीन को ठीक करना या बदलना",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Iron deficiency affects brain development, learning, and physical growth in children.",
    "explanationHi": "Genetic treatment।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-561",
    "questionEn": "Vitamin A deficiency causes:",
    "questionHi": "CRISPR का जन स्वास्थ्य में क्या संभावित उपयोग है?",
    "optionsEn": [
      "Bone problems",
      "Night blindness and xerophthalmia",
      "Skin rashes",
      "Bleeding"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "जीन संपादन से आनुवंशिक रोगों का उपचार",
      "केवल कृषि",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vitamin A deficiency causes night blindness, dry eyes (xerophthalmia), and increased infections.",
    "explanationHi": "Gene editing।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-562",
    "questionEn": "Iodine deficiency causes:",
    "questionHi": "Stem Cell Therapy क्या है?",
    "optionsEn": [
      "Anemia",
      "Goiter and cretinism",
      "Night blindness",
      "Scurvy"
    ],
    "optionsHi": [
      "सामान्य दवाई",
      "स्टेम कोशिकाओं से ऊतकों की मरम्मत/पुनर्जनन",
      "केवल सर्जरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Iodine deficiency causes thyroid problems (goiter) and developmental issues (cretinism).",
    "explanationHi": "Regenerative medicine।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-563",
    "questionEn": "Salt iodization is a:",
    "questionHi": "Bioethics का जन स्वास्थ्य में क्या महत्व है?",
    "optionsEn": [
      "Treatment",
      "Public health intervention for iodine deficiency",
      "Surgery",
      "Individual supplement"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "नई तकनीकों के नैतिक पहलुओं पर विचार",
      "केवल कानून",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Universal salt iodization is a cost-effective public health measure preventing IDD.",
    "explanationHi": "Ethics of new tech।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-564",
    "questionEn": "Rickets is caused by deficiency of:",
    "questionHi": "Social Media Infodemic क्या है?",
    "optionsEn": [
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Vitamin E"
    ],
    "optionsHi": [
      "अच्छी जानकारी",
      "सोशल मीडिया पर गलत स्वास्थ्य जानकारी का तेजी से फैलाव",
      "कोई फैलाव नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Vitamin D deficiency causes rickets (soft bones) in children and osteomalacia in adults.",
    "explanationHi": "Misinformation spread।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-565",
    "questionEn": "Scurvy is caused by deficiency of:",
    "questionHi": "Vaccine Hesitancy क्या है?",
    "optionsEn": [
      "Vitamin A",
      "Vitamin B",
      "Vitamin C",
      "Vitamin D"
    ],
    "optionsHi": [
      "टीका स्वीकार",
      "टीकाकरण के प्रति झिझक या अस्वीकृति",
      "टीका अनिवार्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Vitamin C deficiency causes scurvy (bleeding gums, poor wound healing).",
    "explanationHi": "Vaccine reluctance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-566",
    "questionEn": "ICDS provides how many services?",
    "questionHi": "Vaccine Hesitancy को कैसे संबोधित करें?",
    "optionsEn": [
      "4",
      "6",
      "8",
      "10"
    ],
    "optionsHi": [
      "जबरदस्ती",
      "विश्वसनीय जानकारी, संवाद, समुदाय जुड़ाव, चिंताओं का समाधान",
      "अनदेखा करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ICDS provides 6 services: supplementary nutrition, immunization, health checkup, referral, nutrition education, preschool education.",
    "explanationHi": "Building confidence।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-567",
    "questionEn": "Take Home Ration under ICDS provides:",
    "questionHi": "Rumor Management स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Cooked food only",
      "Dry ration for home consumption",
      "Medicine",
      "Vaccines"
    ],
    "optionsHi": [
      "अफवाह फैलाना",
      "गलत सूचनाओं की पहचान और प्रतिक्रिया",
      "अनदेखा करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "THR provides dry ration for pregnant/lactating women and children to prepare at home.",
    "explanationHi": "Countering rumors।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-568",
    "questionEn": "SNP under ICDS stands for:",
    "questionHi": "Risk Communication स्वास्थ्य आपातकाल में क्या है?",
    "optionsEn": [
      "Special Nutrition Plan",
      "Supplementary Nutrition Programme",
      "Standard Nutrition Protocol",
      "Simple Nutrition Package"
    ],
    "optionsHi": [
      "कुछ नहीं बताना",
      "जोखिम के बारे में स्पष्ट और समय पर संवाद",
      "घबराहट फैलाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SNP provides supplementary food to children, pregnant and lactating mothers.",
    "explanationHi": "Clear communication।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-569",
    "questionEn": "Mid-Day Meal scheme is for:",
    "questionHi": "Crisis Communication के सिद्धांत क्या हैं?",
    "optionsEn": [
      "Hospital patients",
      "Government school children",
      "Private school children only",
      "Elderly"
    ],
    "optionsHi": [
      "देरी से बताना",
      "शीघ्र, सटीक, सुसंगत, सहानुभूतिपूर्ण संवाद",
      "गुप्त रखना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MDM provides free lunch to children in government/aided schools to improve nutrition and enrollment.",
    "explanationHi": "Crisis communication।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-570",
    "questionEn": "Safe drinking water means water free from:",
    "questionHi": "Community Engagement स्वास्थ्य आपातकाल में क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "All minerals",
      "Pathogens and harmful chemicals",
      "All chemicals",
      "Color only"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "विश्वास, सहयोग, स्थानीय समाधान",
      "केवल सरकारी काम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Safe water: free from disease-causing organisms and harmful levels of chemicals.",
    "explanationHi": "Community involvement।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-571",
    "questionEn": "Most common method of household water treatment is:",
    "questionHi": "Psychosocial Support स्वास्थ्य आपातकाल में क्या है?",
    "optionsEn": [
      "RO plant",
      "Boiling",
      "UV treatment",
      "Distillation"
    ],
    "optionsHi": [
      "केवल दवाई",
      "मानसिक और सामाजिक सहायता",
      "कोई सहायता नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Boiling is simple, effective household method to kill pathogens in water.",
    "explanationHi": "Mental health support।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-572",
    "questionEn": "Chlorination of water kills:",
    "questionHi": "MHPSS (Mental Health and Psychosocial Support) क्या है?",
    "optionsEn": [
      "All chemicals",
      "Bacteria and viruses",
      "Heavy metals",
      "Minerals"
    ],
    "optionsHi": [
      "केवल मानसिक",
      "आपातकाल में मानसिक स्वास्थ्य और मनोसामाजिक सहायता",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chlorination effectively kills most bacteria and viruses; residual chlorine prevents recontamination.",
    "explanationHi": "Emergency MH support।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-573",
    "questionEn": "Arsenic contamination of groundwater is a problem in:",
    "questionHi": "Psychological First Aid (PFA) क्या है?",
    "optionsEn": [
      "Hilly areas",
      "West Bengal, Bihar, UP",
      "Southern India only",
      "Coastal areas only"
    ],
    "optionsHi": [
      "दवाई",
      "आपातकाल में प्रारंभिक मनोवैज्ञानिक सहायता",
      "सर्जरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Arsenic contamination affects groundwater in Gangetic plain, especially West Bengal, Bihar.",
    "explanationHi": "Initial psych support।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-574",
    "questionEn": "Fluorosis is caused by:",
    "questionHi": "Post-Traumatic Stress Disorder (PTSD) क्या है?",
    "optionsEn": [
      "Low fluoride",
      "Excess fluoride in water",
      "Chlorine",
      "Arsenic"
    ],
    "optionsHi": [
      "सामान्य",
      "दर्दनाक घटना के बाद मानसिक विकार",
      "केवल शारीरिक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Excess fluoride causes dental and skeletal fluorosis; endemic in parts of India.",
    "explanationHi": "Trauma-related disorder।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-575",
    "questionEn": "Open defecation leads to:",
    "questionHi": "Burnout स्वास्थ्य कर्मियों में क्या है?",
    "optionsEn": [
      "Better sanitation",
      "Spread of diseases like diarrhea",
      "Clean environment",
      "No health impact"
    ],
    "optionsHi": [
      "ऊर्जावान",
      "काम से संबंधित थकान, निराशा, अलगाव",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Open defecation contaminates water/soil, spreading diarrhea, cholera, typhoid, worms.",
    "explanationHi": "Work exhaustion।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-576",
    "questionEn": "F-diagram shows:",
    "questionHi": "Self-Care स्वास्थ्य कर्मियों के लिए क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Food pyramid",
      "Fecal-oral transmission routes",
      "Family planning",
      "Financial planning"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "Burnout रोकथाम, बेहतर सेवा, व्यक्तिगत स्वास्थ्य",
      "स्वार्थी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "F-diagram illustrates fecal-oral disease transmission: Fingers, Flies, Fields, Fluids, Food.",
    "explanationHi": "Worker well-being।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-577",
    "questionEn": "Minimum safe distance of toilet from water source is:",
    "questionHi": "Work-Life Balance का स्वास्थ्य कर्मियों पर क्या प्रभाव है?",
    "optionsEn": [
      "5 meters",
      "10 meters",
      "15 meters",
      "50 meters"
    ],
    "optionsHi": [
      "कोई प्रभाव नहीं",
      "बेहतर मानसिक स्वास्थ्य, कार्य संतुष्टि, गुणवत्ता सेवा",
      "केवल काम",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Toilets should be at least 15 meters from water sources to prevent contamination.",
    "explanationHi": "Balance importance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-578",
    "questionEn": "Twin pit toilet advantage is:",
    "questionHi": "Workplace Violence स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Uses less water",
      "Pits used alternately, contents become compost",
      "No maintenance needed",
      "Can be inside house"
    ],
    "optionsHi": [
      "कोई समस्या नहीं",
      "स्वास्थ्य कर्मियों के खिलाफ हिंसा (शारीरिक/मौखिक)",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Twin pit: when one fills, use other; filled pit contents become safe compost in 2 years.",
    "explanationHi": "Violence against HCW।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-579",
    "questionEn": "Solid waste management includes:",
    "questionHi": "स्वास्थ्य कर्मियों की सुरक्षा के उपाय क्या हैं?",
    "optionsEn": [
      "Only collection",
      "Collection, segregation, treatment, disposal",
      "Only burning",
      "Only burying"
    ],
    "optionsHi": [
      "कोई उपाय नहीं",
      "कानून, प्रशिक्षण, सुरक्षा कर्मी, रिपोर्टिंग तंत्र",
      "केवल भाग्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SWM: source segregation, collection, transport, processing, treatment, disposal.",
    "explanationHi": "Worker protection।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-580",
    "questionEn": "Wet waste includes:",
    "questionHi": "Epidemic Diseases (Amendment) Ordinance 2020 क्या प्रदान करता है?",
    "optionsEn": [
      "Plastic",
      "Glass",
      "Kitchen/food waste",
      "Paper"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "स्वास्थ्य कर्मियों पर हमले के लिए कड़ी सजा",
      "केवल डॉक्टर",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Wet/biodegradable waste: food scraps, vegetable peels. Dry waste: plastic, paper, glass.",
    "explanationHi": "HCW protection law।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-581",
    "questionEn": "Vector control includes:",
    "questionHi": "जन स्वास्थ्य में Volunteerism का क्या महत्व है?",
    "optionsEn": [
      "Only chemical spraying",
      "Environmental, biological, and chemical methods",
      "Only bed nets",
      "Only vaccines"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "संसाधन विस्तार, समुदाय जुड़ाव, आपातकाल प्रतिक्रिया",
      "केवल मुफ्त काम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Integrated vector management: environmental (source reduction), biological (fish), chemical (IRS).",
    "explanationHi": "Volunteer contribution।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-582",
    "questionEn": "Source reduction for mosquito control means:",
    "questionHi": "Community Health Volunteers का उदाहरण क्या है?",
    "optionsEn": [
      "Killing mosquitoes",
      "Eliminating breeding sites",
      "Using repellents",
      "Fogging"
    ],
    "optionsHi": [
      "केवल डॉक्टर",
      "ASHA, AWW, स्वयंसेवक",
      "कोई नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Source reduction: eliminate standing water where mosquitoes breed - most sustainable method.",
    "explanationHi": "Frontline volunteers।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-583",
    "questionEn": "Guppy fish are used for:",
    "questionHi": "Blood Donation जन स्वास्थ्य में क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Food",
      "Biological control of mosquito larvae",
      "Pet keeping",
      "Water purification"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "जीवन बचाना, आपातकाल में आवश्यक",
      "केवल पैसे के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Guppy and gambusia fish eat mosquito larvae - biological vector control method.",
    "explanationHi": "Life-saving donation।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-584",
    "questionEn": "Occupational health focuses on:",
    "questionHi": "World Blood Donor Day कब है?",
    "optionsEn": [
      "Any health problem",
      "Work-related health and safety",
      "Only accidents",
      "Only mental health"
    ],
    "optionsHi": [
      "7 अप्रैल",
      "14 जून",
      "1 दिसंबर",
      "31 मई"
    ],
    "correctAnswer": 1,
    "explanationEn": "Occupational health addresses health hazards and diseases related to workplace.",
    "explanationHi": "Blood donation day।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-585",
    "questionEn": "Silicosis is caused by exposure to:",
    "questionHi": "Organ Donation जन स्वास्थ्य में क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Asbestos",
      "Silica dust",
      "Coal dust",
      "Lead"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "अंग विफलता रोगियों को जीवन देना",
      "केवल अमीरों के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Silicosis: lung disease from inhaling crystalline silica dust (mining, stone cutting).",
    "explanationHi": "Organ transplant।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-586",
    "questionEn": "Lead poisoning can cause:",
    "questionHi": "THOA (Transplantation of Human Organs Act) कब लागू हुआ?",
    "optionsEn": [
      "Only skin problems",
      "Neurological damage especially in children",
      "Only respiratory problems",
      "No health effects"
    ],
    "optionsHi": [
      "1980",
      "1994",
      "2000",
      "2010"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lead causes brain damage, developmental delays in children; no safe level exists.",
    "explanationHi": "Organ transplant law।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-587",
    "questionEn": "Pesticide poisoning is common among:",
    "questionHi": "Brain Death क्या है?",
    "optionsEn": [
      "Office workers",
      "Farmers and agricultural workers",
      "Teachers",
      "IT workers"
    ],
    "optionsHi": [
      "सामान्य नींद",
      "मस्तिष्क की स्थायी और अपरिवर्तनीय कार्य समाप्ति",
      "बेहोशी",
      "कोमा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Agricultural workers at risk of pesticide poisoning from improper handling/spraying.",
    "explanationHi": "Legal death।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-588",
    "questionEn": "Heat stroke is a medical emergency because:",
    "questionHi": "NOTTO (National Organ and Tissue Transplant Organisation) क्या है?",
    "optionsEn": [
      "Causes mild discomfort",
      "Body temperature rises dangerously, can be fatal",
      "Only affects skin",
      "Always recovers spontaneously"
    ],
    "optionsHi": [
      "बैंक",
      "अंग प्रत्यारोपण का राष्ट्रीय संगठन",
      "केवल आंख",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Heat stroke: body temp >40°C with neurological dysfunction; can be fatal without treatment.",
    "explanationHi": "Transplant organization।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-589",
    "questionEn": "Disaster management cycle includes:",
    "questionHi": "Palliative Care क्या है?",
    "optionsEn": [
      "Only response",
      "Prevention, preparedness, response, recovery",
      "Only recovery",
      "Only mitigation"
    ],
    "optionsHi": [
      "इलाज",
      "गंभीर बीमारी में दर्द और कष्ट कम करने वाली देखभाल",
      "केवल मृत्यु",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "DM cycle: prevention/mitigation, preparedness, response, recovery - continuous cycle.",
    "explanationHi": "Comfort care।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-590",
    "questionEn": "Triage in disaster means:",
    "questionHi": "Hospice Care क्या है?",
    "optionsEn": [
      "Treatment",
      "Sorting patients by severity for priority treatment",
      "Transportation",
      "Documentation"
    ],
    "optionsHi": [
      "अस्पताल",
      "जीवन के अंतिम चरण में देखभाल",
      "शुरुआती इलाज",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Triage prioritizes casualties by severity to make best use of limited resources.",
    "explanationHi": "End-of-life care।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-591",
    "questionEn": "START triage uses colors:",
    "questionHi": "Pain Management जन स्वास्थ्य में क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Only red and green",
      "Black, red, yellow, green",
      "Only black and white",
      "Blue and orange"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "जीवन गुणवत्ता, मानवीय अधिकार",
      "केवल कमजोरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "START triage: Black (deceased), Red (immediate), Yellow (delayed), Green (minor).",
    "explanationHi": "Pain relief importance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-592",
    "questionEn": "NDMA stands for:",
    "questionHi": "NPPC (National Programme for Palliative Care) का उद्देश्य क्या है?",
    "optionsEn": [
      "National Disease Management Authority",
      "National Disaster Management Authority",
      "National Drug Management Authority",
      "National Development Management Authority"
    ],
    "optionsHi": [
      "केवल कैंसर",
      "सभी गंभीर बीमारियों में प्रशामक देखभाल उपलब्ध कराना",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "NDMA is apex body for disaster management policy and guidelines in India.",
    "explanationHi": "Palliative care access।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-593",
    "questionEn": "School health program includes:",
    "questionHi": "Medical Certification of Cause of Death (MCCD) क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Only vaccination",
      "Health checkup, education, environment, mid-day meal",
      "Only treatment",
      "Only sports"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "मृत्यु कारणों का डेटा, नीति निर्माण, निगरानी",
      "केवल कागज़ी काम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "School health: health checkups, health education, safe environment, nutrition (MDM).",
    "explanationHi": "Death data importance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-594",
    "questionEn": "Adolescent pregnancy is high risk because:",
    "questionHi": "Verbal Autopsy क्या है?",
    "optionsEn": [
      "No risk",
      "Physical and social complications for young mother",
      "Better outcomes",
      "Easier delivery"
    ],
    "optionsHi": [
      "शव परीक्षा",
      "परिवार से साक्षात्कार द्वारा मृत्यु कारण का अनुमान",
      "केवल डॉक्टर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Teen pregnancy: higher risk of complications, anemia, LBW baby; social/educational impacts.",
    "explanationHi": "Death cause estimation।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-595",
    "questionEn": "Gender-based violence includes:",
    "questionHi": "Civil Registration and Vital Statistics (CRVS) क्या है?",
    "optionsEn": [
      "Only physical violence",
      "Physical, sexual, psychological, economic abuse",
      "Only sexual violence",
      "Only verbal abuse"
    ],
    "optionsHi": [
      "केवल जनगणना",
      "जन्म, मृत्यु और अन्य महत्वपूर्ण घटनाओं का पंजीकरण",
      "केवल आय",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "GBV encompasses all forms of violence rooted in gender inequality.",
    "explanationHi": "Vital events registration।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-596",
    "questionEn": "PCPNDT Act regulates:",
    "questionHi": "जन्म और मृत्यु पंजीकरण अधिनियम कब लागू हुआ?",
    "optionsEn": [
      "Drug manufacturing",
      "Pre-natal sex determination",
      "Post-natal care",
      "Child immunization"
    ],
    "optionsHi": [
      "1947",
      "1969",
      "1980",
      "2000"
    ],
    "correctAnswer": 1,
    "explanationEn": "PCPNDT Act prohibits sex determination and sex selective abortion to address sex ratio imbalance.",
    "explanationHi": "Registration of Births and Deaths Act।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-597",
    "questionEn": "Normal sex ratio at birth is approximately:",
    "questionHi": "जन्म पंजीकरण कितने दिनों के भीतर होना चाहिए?",
    "optionsEn": [
      "900 females/1000 males",
      "950 females/1000 males",
      "1000 females/1000 males",
      "1050 females/1000 males"
    ],
    "optionsHi": [
      "7 दिन",
      "21 दिन",
      "30 दिन",
      "1 वर्ष"
    ],
    "correctAnswer": 1,
    "explanationEn": "Normal biological sex ratio is 943-952 females per 1000 males at birth.",
    "explanationHi": "Within 21 days।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-598",
    "questionEn": "Child sex ratio in India (0-6 years) is concerning because:",
    "questionHi": "मृत्यु पंजीकरण कितने दिनों के भीतर होना चाहिए?",
    "optionsEn": [
      "Too many girls",
      "Declining number of girls due to sex selection",
      "Equal ratio",
      "Improving rapidly"
    ],
    "optionsHi": [
      "7 दिन",
      "21 दिन",
      "30 दिन",
      "1 वर्ष"
    ],
    "correctAnswer": 1,
    "explanationEn": "Child sex ratio has declined in many states due to sex selective abortion.",
    "explanationHi": "Within 21 days।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-599",
    "questionEn": "Beti Bachao Beti Padhao aims to:",
    "questionHi": "जन स्वास्थ्य में Data Quality क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Only education",
      "Address declining CSR and empower girls",
      "Only health",
      "Only employment"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "सही निर्णय, प्रभावी हस्तक्षेप, जवाबदेही",
      "कोई भी डेटा चलेगा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "BBBP addresses girl child survival, education, and empowerment.",
    "explanationHi": "Data quality importance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-600",
    "questionEn": "Medical termination of pregnancy in India is legal up to:",
    "questionHi": "जन स्वास्थ्य में डेटा का उपयोग किसके लिए होता है?",
    "optionsEn": [
      "8 weeks",
      "12 weeks",
      "20 weeks (24 weeks in special cases)",
      "Any time"
    ],
    "optionsHi": [
      "केवल रिपोर्ट",
      "योजना, निगरानी, मूल्यांकन, नीति निर्माण, अनुसंधान",
      "कुछ नहीं",
      "केवल गिनती"
    ],
    "correctAnswer": 2,
    "explanationEn": "MTP Act allows abortion up to 20 weeks (24 weeks for special categories) with proper indication.",
    "explanationHi": "Data for decision-making।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-601",
    "questionEn": "Safe motherhood initiative focuses on:",
    "questionHi": "Health Information System (HIS) के घटक क्या हैं?",
    "optionsEn": [
      "Only delivery",
      "Reducing maternal mortality through comprehensive care",
      "Only ANC",
      "Only family planning"
    ],
    "optionsHi": [
      "केवल कंप्यूटर",
      "डेटा संग्रह, प्रसंस्करण, विश्लेषण, प्रस्तुति, उपयोग",
      "केवल रिपोर्ट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Safe motherhood addresses all delays and barriers to reduce maternal mortality.",
    "explanationHi": "HIS components।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-602",
    "questionEn": "Three delays model in maternal mortality includes all EXCEPT:",
    "questionHi": "Routine Health Information System (RHIS) क्या है?",
    "optionsEn": [
      "Delay in deciding to seek care",
      "Delay in reaching facility",
      "Delay in receiving care",
      "Delay in diagnosis"
    ],
    "optionsHi": [
      "विशेष सर्वे",
      "स्वास्थ्य सुविधाओं से नियमित डेटा संग्रह",
      "एक बार का सर्वे",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Three delays: deciding to seek care, reaching facility, receiving appropriate care at facility.",
    "explanationHi": "Regular data collection।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-603",
    "questionEn": "Most maternal deaths occur during:",
    "questionHi": "HMIS Portal का उद्देश्य क्या है?",
    "optionsEn": [
      "Pregnancy",
      "Labor and delivery",
      "Post-partum period",
      "Before pregnancy"
    ],
    "optionsHi": [
      "खेल",
      "स्वास्थ्य सेवाओं का डेटा संग्रह और रिपोर्टिंग",
      "केवल शिक्षा",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Most maternal deaths occur within 24-48 hours after delivery (postpartum hemorrhage, eclampsia).",
    "explanationHi": "Health data portal।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-604",
    "questionEn": "Leading cause of maternal death in India is:",
    "questionHi": "HMIS में डेटा कौन भरता है?",
    "optionsEn": [
      "Infection",
      "Hemorrhage",
      "Eclampsia",
      "Abortion"
    ],
    "optionsHi": [
      "केवल डॉक्टर",
      "ANM, MPHW, स्टाफ नर्स, अन्य स्वास्थ्य कर्मी",
      "केवल रोगी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hemorrhage (PPH) is the leading cause, followed by hypertensive disorders and sepsis.",
    "explanationHi": "Data entry by staff।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-605",
    "questionEn": "Active management of third stage of labor prevents:",
    "questionHi": "DHIS2 क्या है?",
    "optionsEn": [
      "Infection",
      "PPH (postpartum hemorrhage)",
      "Eclampsia",
      "Obstructed labor"
    ],
    "optionsHi": [
      "बीमारी",
      "District Health Information Software - स्वास्थ्य डेटा प्रबंधन सॉफ्टवेयर",
      "केवल जिला",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "AMTSL (oxytocin, cord traction, uterine massage) reduces PPH by 60-70%.",
    "explanationHi": "Health data software।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-606",
    "questionEn": "Misoprostol is used for:",
    "questionHi": "Data Disaggregation क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Pain relief",
      "Prevention/treatment of PPH",
      "Infection",
      "Hypertension"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "उप-समूहों में असमानताएं पहचानना (लिंग, आयु, क्षेत्र)",
      "कुल संख्या पर्याप्त",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Misoprostol causes uterine contraction, used for PPH prevention when oxytocin unavailable.",
    "explanationHi": "Breaking down data।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-607",
    "questionEn": "Magnesium sulfate is used for:",
    "questionHi": "Data Triangulation क्या है?",
    "optionsEn": [
      "PPH",
      "Eclampsia/pre-eclampsia",
      "Infection",
      "Pain relief"
    ],
    "optionsHi": [
      "एक स्रोत",
      "कई स्रोतों से डेटा की तुलना करके सत्यापन",
      "कोई तुलना नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MgSO4 is the drug of choice for prevention and treatment of eclamptic convulsions.",
    "explanationHi": "Cross-checking data।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-608",
    "questionEn": "EmOC stands for:",
    "questionHi": "Data Visualization का क्या लाभ है?",
    "optionsEn": [
      "Emergency Obstetric Care",
      "Essential Medical Outpatient Care",
      "Emergency Medical Operation Centre",
      "Essential Maternal Outreach Care"
    ],
    "optionsHi": [
      "कोई लाभ नहीं",
      "डेटा को समझना आसान, पैटर्न पहचानना",
      "केवल सुंदर",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "EmOC: life-saving obstetric interventions for complications (C-section, blood transfusion, etc.).",
    "explanationHi": "Making data understandable।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-609",
    "questionEn": "BEmOC services include all EXCEPT:",
    "questionHi": "Dashboard स्वास्थ्य प्रबंधन में क्या है?",
    "optionsEn": [
      "IV antibiotics",
      "Oxytocics",
      "Cesarean section",
      "Manual removal of placenta"
    ],
    "optionsHi": [
      "कार का",
      "मुख्य संकेतकों का एक नज़र में दृश्य प्रदर्शन",
      "केवल सजावट",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Basic EmOC: antibiotics, oxytocics, anticonvulsants, manual placenta removal. C-section is CEmOC.",
    "explanationHi": "Performance display।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-610",
    "questionEn": "CEmOC includes all BEmOC plus:",
    "questionHi": "Scorecard स्वास्थ्य प्रबंधन में क्या है?",
    "optionsEn": [
      "Only C-section",
      "C-section and blood transfusion",
      "Only blood transfusion",
      "Only antibiotics"
    ],
    "optionsHi": [
      "खेल का स्कोर",
      "प्रदर्शन को मानकों से तुलना करने वाला उपकरण",
      "केवल अंक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Comprehensive EmOC adds cesarean section and blood transfusion to Basic EmOC services.",
    "explanationHi": "Performance comparison।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-611",
    "questionEn": "Partograph is used to monitor:",
    "questionHi": "Health Situation Analysis क्या है?",
    "optionsEn": [
      "Pregnancy",
      "Progress of labor",
      "Newborn growth",
      "Child development"
    ],
    "optionsHi": [
      "केवल समस्याएं",
      "स्वास्थ्य स्थिति, निर्धारक, संसाधन, सेवाओं का विश्लेषण",
      "केवल डेटा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Partograph graphically records labor progress to detect abnormalities early.",
    "explanationHi": "Comprehensive analysis।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-612",
    "questionEn": "Alert line on partograph indicates:",
    "questionHi": "District Health Profile क्या है?",
    "optionsEn": [
      "Normal progress",
      "Slow progress needing attention",
      "Need for immediate intervention",
      "Labor completed"
    ],
    "optionsHi": [
      "व्यक्तिगत प्रोफाइल",
      "जिले की स्वास्थ्य स्थिति का विस्तृत विवरण",
      "केवल नक्शा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Crossing alert line indicates slow progress; crossing action line requires intervention.",
    "explanationHi": "District health status।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-613",
    "questionEn": "Neonatal period is:",
    "questionHi": "Burden of Disease क्या मापता है?",
    "optionsEn": [
      "First 7 days",
      "First 28 days",
      "First 3 months",
      "First year"
    ],
    "optionsHi": [
      "केवल मृत्यु",
      "रोगों से होने वाली मृत्यु और विकलांगता का समग्र प्रभाव",
      "केवल खर्च",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Neonatal period: birth to 28 days. Most vulnerable period for infant survival.",
    "explanationHi": "Overall disease impact।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-614",
    "questionEn": "Early neonatal period is:",
    "questionHi": "Global Burden of Disease (GBD) Study क्या है?",
    "optionsEn": [
      "First 7 days",
      "First 14 days",
      "First 28 days",
      "First 3 days"
    ],
    "optionsHi": [
      "स्थानीय अध्ययन",
      "विश्व स्तर पर रोग भार का व्यापक अध्ययन (IHME)",
      "केवल भारत",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Early neonatal: first 7 days (most deaths occur here). Late neonatal: 8-28 days.",
    "explanationHi": "Global disease study।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-615",
    "questionEn": "Leading cause of neonatal death is:",
    "questionHi": "Top Causes of Death भारत में क्या हैं?",
    "optionsEn": [
      "Diarrhea",
      "Prematurity and low birth weight",
      "Measles",
      "Malaria"
    ],
    "optionsHi": [
      "संक्रामक रोग केवल",
      "हृदय रोग, COPD, स्ट्रोक, दस्त, नवजात विकार",
      "केवल दुर्घटनाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Prematurity/LBW is leading cause, followed by birth asphyxia and infections.",
    "explanationHi": "Leading causes।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-616",
    "questionEn": "Birth asphyxia is:",
    "questionHi": "Double Burden of Disease भारत में क्या है?",
    "optionsEn": [
      "Normal at birth",
      "Failure to establish breathing at birth",
      "Low birth weight",
      "Prematurity"
    ],
    "optionsHi": [
      "एक ही बोझ",
      "संक्रामक और गैर-संक्रामक दोनों रोगों का उच्च भार",
      "कोई बोझ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Birth asphyxia: baby doesn't breathe adequately at birth; causes brain damage/death.",
    "explanationHi": "Dual disease burden।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-617",
    "questionEn": "APGAR score assesses:",
    "questionHi": "Triple Burden of Disease क्या है?",
    "optionsEn": [
      "Pregnancy risk",
      "Newborn condition at birth",
      "Maternal health",
      "Labor progress"
    ],
    "optionsHi": [
      "दो बोझ",
      "संक्रामक, NCD, और दुर्घटना/हिंसा का तीन तरफा बोझ",
      "एक बोझ",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "APGAR: Appearance, Pulse, Grimace, Activity, Respiration at 1 and 5 minutes.",
    "explanationHi": "Three disease categories।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-618",
    "questionEn": "Normal APGAR score is:",
    "questionHi": "Years of Life Lost (YLL) क्या मापता है?",
    "optionsEn": [
      "0-3",
      "4-6",
      "7-10",
      "11-15"
    ],
    "optionsHi": [
      "जीवन वर्ष बढ़े",
      "समय से पहले मृत्यु से खोए गए जीवन वर्ष",
      "केवल विकलांगता",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "APGAR 7-10 normal; 4-6 needs resuscitation; 0-3 severely depressed.",
    "explanationHi": "Premature mortality।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-619",
    "questionEn": "Golden minute in neonatal resuscitation refers to:",
    "questionHi": "Years Lived with Disability (YLD) क्या मापता है?",
    "optionsEn": [
      "First minute to establish breathing",
      "First hour of life",
      "First day",
      "First week"
    ],
    "optionsHi": [
      "केवल मृत्यु",
      "विकलांगता के साथ जीए गए वर्ष",
      "स्वस्थ वर्ष",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Golden minute: most important 60 seconds to establish breathing and prevent brain damage.",
    "explanationHi": "Living with disability।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-620",
    "questionEn": "Helping Babies Breathe initiative focuses on:",
    "questionHi": "DALY = ?",
    "optionsEn": [
      "Hospital care",
      "Basic neonatal resuscitation skills",
      "Surgery",
      "Drug therapy"
    ],
    "optionsHi": [
      "YLL केवल",
      "YLL + YLD (विकलांगता समायोजित जीवन वर्ष)",
      "YLD केवल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HBB trains health workers in basic resuscitation to reduce asphyxia deaths.",
    "explanationHi": "DALY formula।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-621",
    "questionEn": "Preterm baby is born before:",
    "questionHi": "Health Adjusted Life Expectancy (HALE) क्या है?",
    "optionsEn": [
      "37 weeks",
      "38 weeks",
      "40 weeks",
      "42 weeks"
    ],
    "optionsHi": [
      "कुल जीवन प्रत्याशा",
      "पूर्ण स्वास्थ्य में जीने की अपेक्षित अवधि",
      "केवल मृत्यु",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Preterm: <37 completed weeks gestation. Term: 37-42 weeks. Post-term: >42 weeks.",
    "explanationHi": "Healthy life expectancy।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-622",
    "questionEn": "Very low birth weight is:",
    "questionHi": "Compression of Morbidity क्या है?",
    "optionsEn": [
      "<1000 g",
      "<1500 g",
      "<2000 g",
      "<2500 g"
    ],
    "optionsHi": [
      "बीमारी बढ़ाना",
      "जीवन के अंत में बीमारी की अवधि को कम करना",
      "अधिक बीमारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "VLBW: <1500g. ELBW (extremely low): <1000g. LBW: <2500g.",
    "explanationHi": "Shorter illness period।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-623",
    "questionEn": "Kangaroo Mother Care benefits include all EXCEPT:",
    "questionHi": "Healthy Ageing क्या है?",
    "optionsEn": [
      "Warmth",
      "Bonding",
      "Weight gain",
      "Increased infection"
    ],
    "optionsHi": [
      "केवल लंबा जीवन",
      "कार्यात्मक क्षमता बनाए रखते हुए बुढ़ापा",
      "बीमार बुढ़ापा",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "KMC benefits: warmth, bonding, breastfeeding support, weight gain, reduced infection.",
    "explanationHi": "Active ageing।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-624",
    "questionEn": "Sepsis in newborn is most commonly caused by:",
    "questionHi": "Demographic Dividend क्या है?",
    "optionsEn": [
      "Virus",
      "Bacteria",
      "Fungus",
      "Parasite"
    ],
    "optionsHi": [
      "जनसंख्या समस्या",
      "कार्यशील आयु जनसंख्या अधिक होने का आर्थिक लाभ",
      "केवल बुजुर्ग",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Neonatal sepsis commonly caused by bacteria (E. coli, Klebsiella, Staph, Strep).",
    "explanationHi": "Working age advantage।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-625",
    "questionEn": "Signs of neonatal sepsis include all EXCEPT:",
    "questionHi": "भारत Demographic Dividend का लाभ कैसे उठा सकता है?",
    "optionsEn": [
      "Poor feeding",
      "Lethargy",
      "Active and alert",
      "Fever or hypothermia"
    ],
    "optionsHi": [
      "कुछ नहीं करना",
      "शिक्षा, कौशल विकास, रोजगार, स्वास्थ्य में निवेश",
      "जनसंख्या बढ़ाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Sepsis signs: poor feeding, lethargy, fever/hypothermia, fast breathing, not active.",
    "explanationHi": "Human capital investment।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-626",
    "questionEn": "Neonatal jaundice appearing within 24 hours is:",
    "questionHi": "Population Ageing क्या है?",
    "optionsEn": [
      "Physiological",
      "Always pathological",
      "Normal",
      "No concern"
    ],
    "optionsHi": [
      "युवा जनसंख्या",
      "जनसंख्या में बुजुर्गों का अनुपात बढ़ना",
      "बच्चे बढ़ना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Jaundice <24 hours is pathological (hemolysis, infection). Physiological appears day 2-3.",
    "explanationHi": "Aging population।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-627",
    "questionEn": "Phototherapy is used to treat:",
    "questionHi": "Population Ageing का स्वास्थ्य प्रणाली पर क्या प्रभाव है?",
    "optionsEn": [
      "Anemia",
      "Jaundice",
      "Infection",
      "Dehydration"
    ],
    "optionsHi": [
      "कोई प्रभाव नहीं",
      "NCDs बढ़ना, देखभाल की मांग बढ़ना, खर्च बढ़ना",
      "खर्च कम होना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Phototherapy uses blue light to convert bilirubin to water-soluble form for excretion.",
    "explanationHi": "Aging impact।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-628",
    "questionEn": "Kernicterus is:",
    "questionHi": "Long-Term Care क्या है?",
    "optionsEn": [
      "Mild jaundice",
      "Brain damage from severe unconjugated bilirubin",
      "Skin condition",
      "Normal finding"
    ],
    "optionsHi": [
      "अस्पताल में",
      "दीर्घकालिक देखभाल जरूरतमंदों के लिए सेवाएं (बुजुर्ग, विकलांग)",
      "केवल तीव्र देखभाल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Kernicterus: bilirubin encephalopathy from very high unconjugated bilirubin levels.",
    "explanationHi": "Extended care needs।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-629",
    "questionEn": "Congenital hypothyroidism screening is done by:",
    "questionHi": "Home-Based Care क्या है?",
    "optionsEn": [
      "Blood glucose",
      "TSH/T4 from heel prick",
      "Urine test",
      "X-ray"
    ],
    "optionsHi": [
      "अस्पताल में",
      "घर पर स्वास्थ्य देखभाल सेवाएं",
      "केवल संस्थागत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Newborn screening for CH uses TSH from heel prick blood; early treatment prevents mental retardation.",
    "explanationHi": "Care at home।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-630",
    "questionEn": "Developmental milestones are assessed at:",
    "questionHi": "Caregiver Burden क्या है?",
    "optionsEn": [
      "Only at birth",
      "Regular intervals during childhood",
      "Only at 5 years",
      "Only if problems noted"
    ],
    "optionsHi": [
      "कोई बोझ नहीं",
      "देखभालकर्ता पर शारीरिक, मानसिक, आर्थिक तनाव",
      "केवल रोगी पर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Developmental assessment at regular visits to detect delays early for intervention.",
    "explanationHi": "Caregiver stress।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-631",
    "questionEn": "Social smile appears at:",
    "questionHi": "Respite Care क्या है?",
    "optionsEn": [
      "Birth",
      "6-8 weeks",
      "6 months",
      "1 year"
    ],
    "optionsHi": [
      "निरंतर देखभाल",
      "देखभालकर्ता को अस्थायी आराम देने के लिए वैकल्पिक देखभाल",
      "कोई आराम नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Social smile (responsive smile to face) appears around 6-8 weeks of age.",
    "explanationHi": "Caregiver break।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-632",
    "questionEn": "Head control is achieved by:",
    "questionHi": "Integrated Care क्या है?",
    "optionsEn": [
      "Birth",
      "3-4 months",
      "6 months",
      "1 year"
    ],
    "optionsHi": [
      "अलग-अलग सेवाएं",
      "विभिन्न सेवाओं का समन्वित और निर्बाध वितरण",
      "केवल एक सेवा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Head control (holding head steady) develops by 3-4 months of age.",
    "explanationHi": "Coordinated care।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-633",
    "questionEn": "Sitting without support is achieved by:",
    "questionHi": "Continuum of Care क्या है?",
    "optionsEn": [
      "3 months",
      "6-8 months",
      "12 months",
      "18 months"
    ],
    "optionsHi": [
      "एक बार सेवा",
      "जीवन के विभिन्न चरणों में निरंतर देखभाल",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Most children sit without support by 6-8 months of age.",
    "explanationHi": "Lifelong care।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-634",
    "questionEn": "Walking independently is achieved by:",
    "questionHi": "Patient-Centered Care क्या है?",
    "optionsEn": [
      "6 months",
      "9 months",
      "12-15 months",
      "24 months"
    ],
    "optionsHi": [
      "डॉक्टर केंद्रित",
      "रोगी की जरूरतों और प्राथमिकताओं पर केंद्रित देखभाल",
      "संस्था केंद्रित",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Most children walk independently by 12-15 months; up to 18 months is normal.",
    "explanationHi": "Patient focus।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-635",
    "questionEn": "First words appear at:",
    "questionHi": "Family-Centered Care क्या है?",
    "optionsEn": [
      "6 months",
      "9-12 months",
      "18 months",
      "24 months"
    ],
    "optionsHi": [
      "केवल रोगी",
      "रोगी और परिवार दोनों को देखभाल में शामिल करना",
      "परिवार को बाहर रखना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "First meaningful words (mama, dada) appear around 9-12 months.",
    "explanationHi": "Family involvement।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-636",
    "questionEn": "Red flag in development requiring referral:",
    "questionHi": "Community-Oriented Primary Care (COPC) क्या है?",
    "optionsEn": [
      "Walking at 14 months",
      "No words at 18 months",
      "Sitting at 7 months",
      "Social smile at 8 weeks"
    ],
    "optionsHi": [
      "केवल व्यक्तिगत",
      "व्यक्तिगत और सामुदायिक स्वास्थ्य दोनों पर ध्यान",
      "केवल सामुदायिक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "No words by 18 months is concerning; needs developmental evaluation.",
    "explanationHi": "Population and individual।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-637",
    "questionEn": "Autism spectrum disorder affects:",
    "questionHi": "Population Health Management क्या है?",
    "optionsEn": [
      "Only motor skills",
      "Social communication and behavior",
      "Only speech",
      "Only intelligence"
    ],
    "optionsHi": [
      "व्यक्तिगत उपचार",
      "परिभाषित जनसंख्या के स्वास्थ्य परिणामों में सुधार के प्रयास",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ASD: impaired social interaction, communication, restricted/repetitive behaviors.",
    "explanationHi": "Population health focus।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-638",
    "questionEn": "ADHD stands for:",
    "questionHi": "Risk Stratification क्या है?",
    "optionsEn": [
      "Attention Deficit Hyperactivity Disorder",
      "Acute Disease Health Department",
      "Advanced Development Health Division",
      "Adolescent Disease Help Desk"
    ],
    "optionsHi": [
      "कोई वर्गीकरण नहीं",
      "जनसंख्या को स्वास्थ्य जोखिम के आधार पर वर्गीकृत करना",
      "समान उपचार",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "ADHD: inattention, hyperactivity, impulsivity affecting functioning.",
    "explanationHi": "Risk-based grouping।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-639",
    "questionEn": "Cerebral palsy is caused by:",
    "questionHi": "High-Risk Approach क्या है?",
    "optionsEn": [
      "Infection after birth",
      "Brain damage before/during/after birth",
      "Genetic disease always",
      "Nutritional deficiency"
    ],
    "optionsHi": [
      "सभी पर ध्यान",
      "उच्च जोखिम वाले व्यक्तियों पर लक्षित हस्तक्षेप",
      "कम जोखिम पर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CP: non-progressive motor disorder from brain damage in early development.",
    "explanationHi": "Targeting high risk।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-640",
    "questionEn": "Early intervention for developmental disabilities should start:",
    "questionHi": "Population Approach क्या है?",
    "optionsEn": [
      "Only at school age",
      "As early as possible when identified",
      "Only if severe",
      "Never helpful"
    ],
    "optionsHi": [
      "केवल उच्च जोखिम",
      "पूरी जनसंख्या में जोखिम कम करने का प्रयास",
      "कोई प्रयास नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Early intervention improves outcomes; brain plasticity is highest in early years.",
    "explanationHi": "Whole population focus।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-641",
    "questionEn": "Disability certificate is issued by:",
    "questionHi": "Prevention Paradox क्या है?",
    "optionsEn": [
      "ASHA",
      "ANM",
      "Certified medical authority/board",
      "Village head"
    ],
    "optionsHi": [
      "रोकथाम बेकार",
      "जनसंख्या दृष्टिकोण से व्यक्तिगत लाभ कम लेकिन कुल लाभ अधिक",
      "व्यक्तिगत लाभ अधिक",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Disability certificate issued by designated medical authority for accessing benefits.",
    "explanationHi": "Geoffrey Rose concept।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-642",
    "questionEn": "Rights of Persons with Disabilities Act was passed in:",
    "questionHi": "Proportionate Universalism क्या है?",
    "optionsEn": [
      "1995",
      "2005",
      "2016",
      "2020"
    ],
    "optionsHi": [
      "सभी को समान",
      "सार्वभौमिक सेवाओं के साथ वंचितों पर अधिक ध्यान",
      "केवल वंचितों को",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "RPWD Act 2016 replaced PWD Act 1995, recognizing 21 types of disabilities.",
    "explanationHi": "Universal with extra for needy।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-643",
    "questionEn": "Contraceptive prevalence rate in India is approximately:",
    "questionHi": "Social Prescribing क्या है?",
    "optionsEn": [
      "30%",
      "50%",
      "67%",
      "90%"
    ],
    "optionsHi": [
      "केवल दवाई",
      "स्वास्थ्य पेशेवर द्वारा गैर-चिकित्सा सेवाओं का संदर्भ (व्यायाम, समूह)",
      "कोई प्रिस्क्रिप्शन नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "CPR in India is about 67% (modern methods ~54%) per NFHS-5.",
    "explanationHi": "Non-medical referral।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-644",
    "questionEn": "Unmet need for family planning means:",
    "questionHi": "Health Coaching क्या है?",
    "optionsEn": [
      "Everyone using contraception",
      "Wanting to delay/limit births but not using contraception",
      "No interest in FP",
      "Using all methods"
    ],
    "optionsHi": [
      "खेल कोचिंग",
      "स्वास्थ्य लक्ष्यों के लिए व्यक्तिगत मार्गदर्शन और समर्थन",
      "कोई मार्गदर्शन नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Unmet need: women wanting to avoid pregnancy but not using any contraceptive method.",
    "explanationHi": "Personalized support।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-645",
    "questionEn": "Most commonly used contraceptive method in India is:",
    "questionHi": "Motivational Interviewing क्या है?",
    "optionsEn": [
      "Condoms",
      "Pills",
      "Female sterilization",
      "IUCD"
    ],
    "optionsHi": [
      "जबरदस्ती",
      "व्यवहार परिवर्तन के लिए प्रेरक संवाद तकनीक",
      "कोई संवाद नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Female sterilization is most prevalent method; need for more spacing method promotion.",
    "explanationHi": "Behavior change technique।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-646",
    "questionEn": "LAM (Lactational Amenorrhea Method) is effective if:",
    "questionHi": "Shared Decision Making क्या है?",
    "optionsEn": [
      "Any time postpartum",
      "Exclusive BF, <6 months, amenorrheic",
      "Only if using pills",
      "Only for one month"
    ],
    "optionsHi": [
      "केवल डॉक्टर का निर्णय",
      "डॉक्टर और रोगी मिलकर उपचार निर्णय लेना",
      "केवल रोगी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "LAM effective: 1) exclusive breastfeeding, 2) baby <6 months, 3) periods not returned.",
    "explanationHi": "Joint decision making।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-647",
    "questionEn": "Emergency contraceptive pill should be taken within:",
    "questionHi": "Health Navigator क्या है?",
    "optionsEn": [
      "24 hours",
      "72 hours",
      "1 week",
      "1 month"
    ],
    "optionsHi": [
      "GPS",
      "स्वास्थ्य प्रणाली में रोगी को मार्गदर्शन देने वाला व्यक्ति",
      "कोई मार्गदर्शन नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "EC pill most effective within 72 hours; can be given up to 120 hours with decreasing efficacy.",
    "explanationHi": "Patient guide।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-648",
    "questionEn": "Medical eligibility criteria for contraceptives helps determine:",
    "questionHi": "Case Management क्या है?",
    "optionsEn": [
      "Cost of method",
      "Who can safely use which method",
      "Availability",
      "Patient preference only"
    ],
    "optionsHi": [
      "कोई प्रबंधन नहीं",
      "जटिल स्वास्थ्य जरूरतों वाले रोगियों की समन्वित देखभाल",
      "केवल एक सेवा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MEC guides safe contraceptive use based on medical conditions.",
    "explanationHi": "Coordinated patient care।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-649",
    "questionEn": "Contraindication for combined oral pills includes:",
    "questionHi": "Care Coordination क्या है?",
    "optionsEn": [
      "Young age",
      "Migraine with aura, smoking >35 years",
      "Regular periods",
      "Previous pregnancy"
    ],
    "optionsHi": [
      "अलग-अलग सेवाएं",
      "विभिन्न प्रदाताओं के बीच देखभाल का समन्वय",
      "कोई समन्वय नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "COCs contraindicated in smokers >35 years, migraine with aura (stroke risk).",
    "explanationHi": "Provider coordination।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-650",
    "questionEn": "IUCD can be inserted:",
    "questionHi": "Gatekeeping स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Only during menstruation",
      "Any time if not pregnant",
      "Only postpartum",
      "Only after 6 weeks"
    ],
    "optionsHi": [
      "द्वार पर पहरा",
      "विशेषज्ञ सेवाओं तक पहुंच के लिए प्राथमिक देखभाल से रेफरल",
      "सीधी पहुंच",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "IUCD can be inserted any time if reasonably certain woman is not pregnant.",
    "explanationHi": "Referral system।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-651",
    "questionEn": "Spacing between two children recommended is:",
    "questionHi": "Gatekeeping के फायदे और नुकसान क्या हैं?",
    "optionsEn": [
      "6 months",
      "1 year",
      "At least 3 years",
      "Any time"
    ],
    "optionsHi": [
      "केवल फायदे",
      "फायदे: संसाधन उपयोग, निरंतरता; नुकसान: पहुंच में देरी",
      "केवल नुकसान",
      "कोई प्रभाव नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "3+ years spacing recommended for optimal maternal and child health outcomes.",
    "explanationHi": "Pros and cons।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-652",
    "questionEn": "First pregnancy ideally should be after age:",
    "questionHi": "Hub and Spoke Model स्वास्थ्य में क्या है?",
    "optionsEn": [
      "15 years",
      "18 years",
      "20 years",
      "25 years"
    ],
    "optionsHi": [
      "साइकिल का पहिया",
      "केंद्रीय सुविधा (Hub) से जुड़ी सहायक सुविधाएं (Spokes)",
      "केवल एक सुविधा",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "First pregnancy ideally after 20 years when body is physically mature; legal age 18+.",
    "explanationHi": "Network model।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-653",
    "questionEn": "Infertility is defined as inability to conceive after:",
    "questionHi": "Decentralization स्वास्थ्य में क्या है?",
    "optionsEn": [
      "6 months",
      "1 year of unprotected intercourse",
      "2 years",
      "5 years"
    ],
    "optionsHi": [
      "केंद्रीकरण",
      "निर्णय और संसाधन को स्थानीय स्तर पर स्थानांतरित करना",
      "सब कुछ केंद्र में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Infertility: failure to conceive after 1 year of regular unprotected intercourse.",
    "explanationHi": "Local control।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-654",
    "questionEn": "Causes of infertility can be:",
    "questionHi": "Devolution स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Only female factors",
      "Only male factors",
      "Both male and female factors",
      "Neither"
    ],
    "optionsHi": [
      "केंद्रीकरण",
      "स्थानीय सरकारों को स्वास्थ्य जिम्मेदारी हस्तांतरित करना",
      "कोई हस्तांतरण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Infertility causes: male (30-40%), female (40-50%), both (10-20%), unexplained (10-20%).",
    "explanationHi": "Local governance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-655",
    "questionEn": "RTI stands for:",
    "questionHi": "Privatization स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Reproductive Tract Infection",
      "Rapid Test Interpretation",
      "Regular Treatment Interval",
      "Research Training Institute"
    ],
    "optionsHi": [
      "सरकारीकरण",
      "सरकारी सेवाओं/परिसंपत्तियों को निजी क्षेत्र को स्थानांतरित करना",
      "कोई परिवर्तन नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "RTI: infections of reproductive tract including STIs and endogenous infections.",
    "explanationHi": "Private sector transfer।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-656",
    "questionEn": "STI stands for:",
    "questionHi": "Contracting Out स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Standard Treatment Initiative",
      "Sexually Transmitted Infection",
      "Special Treatment Institution",
      "Social Treatment Intervention"
    ],
    "optionsHi": [
      "सब कुछ सरकारी",
      "निजी प्रदाताओं से सेवाएं खरीदना",
      "कोई खरीद नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "STIs are infections transmitted primarily through sexual contact.",
    "explanationHi": "Outsourcing services।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-657",
    "questionEn": "Syndromic management of STI means:",
    "questionHi": "Social Franchising स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Only lab diagnosis",
      "Treatment based on symptoms without waiting for lab results",
      "No treatment",
      "Only counseling"
    ],
    "optionsHi": [
      "व्यापारिक फ्रेंचाइज़",
      "मानकीकृत स्वास्थ्य सेवाओं के लिए निजी प्रदाताओं का नेटवर्क",
      "कोई मानक नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Syndromic management: treat based on symptoms (discharge, ulcer) to cover common causes.",
    "explanationHi": "Franchise model।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-658",
    "questionEn": "Partner notification in STI is important for:",
    "questionHi": "Voucher Scheme स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Legal requirement only",
      "Preventing reinfection and further spread",
      "Punishment",
      "Documentation only"
    ],
    "optionsHi": [
      "नकद",
      "विशिष्ट सेवाओं के लिए वाउचर जो प्रदाता से भुनाया जा सके",
      "कोई वाउचर नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Partner treatment prevents reinfection of index case and further transmission.",
    "explanationHi": "Service vouchers।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-659",
    "questionEn": "Menstrual hygiene management includes:",
    "questionHi": "Conditional Cash Transfer (CCT) स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Only pad use",
      "Safe materials, facilities, disposal, education",
      "Only during heavy flow",
      "No specific management needed"
    ],
    "optionsHi": [
      "बिना शर्त",
      "स्वास्थ्य व्यवहार की शर्त पर नकद हस्तांतरण (जैसे JSY)",
      "कोई नकद नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MHM: access to safe materials, washing facilities, disposal options, and education.",
    "explanationHi": "Cash for behavior।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-660",
    "questionEn": "Menstrual cup is:",
    "questionHi": "Direct Benefit Transfer (DBT) स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Disposable",
      "Reusable collection device",
      "Oral medication",
      "Injection"
    ],
    "optionsHi": [
      "बिचौलियों से",
      "सीधे लाभार्थी के खाते में लाभ हस्तांतरण",
      "नकद वितरण",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Menstrual cup: reusable silicone cup inserted to collect menstrual blood; environmentally friendly.",
    "explanationHi": "Direct transfer।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-661",
    "questionEn": "PCOS stands for:",
    "questionHi": "Results-Based Financing (RBF) क्या है?",
    "optionsEn": [
      "Primary Care Outpatient Services",
      "Polycystic Ovary Syndrome",
      "Preventive Child Outreach Services",
      "Public Community Outreach System"
    ],
    "optionsHi": [
      "इनपुट पर",
      "परिणामों के आधार पर भुगतान/प्रोत्साहन",
      "कोई भुगतान नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "PCOS: hormonal disorder causing irregular periods, excess androgen, polycystic ovaries.",
    "explanationHi": "Outcome-based payment।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-662",
    "questionEn": "Menopause typically occurs at age:",
    "questionHi": "Social Impact Bond क्या है?",
    "optionsEn": [
      "35-40 years",
      "45-55 years",
      "60-65 years",
      "70+ years"
    ],
    "optionsHi": [
      "सरकारी बांड",
      "सामाजिक परिणामों के आधार पर निजी निवेश पर रिटर्न",
      "कोई निवेश नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Average age of menopause in India is around 47-48 years (range 45-55).",
    "explanationHi": "Outcome-based investment।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-663",
    "questionEn": "Rabies is transmitted by:",
    "questionHi": "Sin Tax क्या है?",
    "optionsEn": [
      "Mosquito bite",
      "Animal bite (dog, cat, etc.)",
      "Water",
      "Air"
    ],
    "optionsHi": [
      "धार्मिक कर",
      "हानिकारक उत्पादों (तंबाकू, शराब) पर उच्च कर",
      "सामान्य कर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rabies transmitted through saliva of infected animal, mainly dog bites in India.",
    "explanationHi": "Tax on harmful products।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-664",
    "questionEn": "Post-exposure prophylaxis for rabies includes:",
    "questionHi": "Sugar Tax का जन स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "Only wound washing",
      "Wound washing + vaccine ± RIG",
      "Only antibiotics",
      "Nothing needed"
    ],
    "optionsHi": [
      "चीनी बढ़ाना",
      "मीठे पेय पदार्थों की खपत कम करना",
      "कोई प्रभाव नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "PEP: immediate wound washing, rabies vaccine course, RIG for category III exposures.",
    "explanationHi": "Reducing sugar consumption।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-665",
    "questionEn": "Category III animal bite requires:",
    "questionHi": "Health Cess क्या है?",
    "optionsEn": [
      "No treatment",
      "Vaccine only",
      "Vaccine + RIG (Rabies Immunoglobulin)",
      "Wound washing only"
    ],
    "optionsHi": [
      "सामान्य कर",
      "स्वास्थ्य क्षेत्र के लिए विशेष उपकर",
      "कोई उपकर नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Category III (bleeding wounds, mucous membrane exposure): vaccine + RIG + wound care.",
    "explanationHi": "Earmarked tax।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-666",
    "questionEn": "Anti-Rabies Vaccine schedule is:",
    "questionHi": "Earmarked Taxation स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Single dose",
      "0, 3, 7, 14, 28 days (IM)",
      "Monthly for 6 months",
      "Yearly"
    ],
    "optionsHi": [
      "सामान्य कोष में",
      "विशिष्ट स्वास्थ्य उद्देश्य के लिए निर्धारित कर",
      "कोई निर्धारण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Post-exposure ARV: 5 doses on days 0, 3, 7, 14, 28 (Essen regimen).",
    "explanationHi": "Dedicated tax।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-667",
    "questionEn": "Snake bite first aid includes:",
    "questionHi": "Cross-Subsidy स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Tourniquet tightly",
      "Cut and suck venom",
      "Immobilize limb, reassure, transport to hospital",
      "Apply ice"
    ],
    "optionsHi": [
      "समान शुल्क",
      "सक्षम से अधिक शुल्क लेकर गरीबों को रियायत देना",
      "कोई रियायत नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "First aid: immobilize, reassure, rapid transport. DON'T: tourniquet, cut, suck, apply ice.",
    "explanationHi": "Rich subsidize poor।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-668",
    "questionEn": "Anti-Snake Venom (ASV) is indicated for:",
    "questionHi": "User Fees स्वास्थ्य में क्या है?",
    "optionsEn": [
      "All snake bites",
      "Only cobra bites",
      "Bites with signs of envenomation",
      "Never needed"
    ],
    "optionsHi": [
      "मुफ्त सेवाएं",
      "सेवा के समय रोगी से शुल्क",
      "कोई शुल्क नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "ASV given for signs of systemic envenomation, not all bites (many are non-venomous).",
    "explanationHi": "Point-of-service fees।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-669",
    "questionEn": "Common venomous snakes in India include all EXCEPT:",
    "questionHi": "User Fees का गरीबों पर क्या प्रभाव है?",
    "optionsEn": [
      "Cobra",
      "Krait",
      "Russell's viper",
      "Python"
    ],
    "optionsHi": [
      "कोई प्रभाव नहीं",
      "सेवाओं तक पहुंच में बाधा",
      "पहुंच बढ़ती है",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Big Four: Cobra, Krait, Russell's Viper, Saw-scaled Viper. Python is non-venomous.",
    "explanationHi": "Barrier for poor।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-670",
    "questionEn": "Scorpion sting is treated with:",
    "questionHi": "Exemption Mechanism क्या है?",
    "optionsEn": [
      "ASV",
      "Prazosin (for severe envenomation)",
      "Antibiotics",
      "No treatment"
    ],
    "optionsHi": [
      "सभी पर शुल्क",
      "कुछ समूहों को शुल्क से छूट देना",
      "कोई छूट नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Prazosin reduces cardiac effects of scorpion venom; supportive care for symptoms.",
    "explanationHi": "Fee waivers।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-671",
    "questionEn": "First aid for burns includes:",
    "questionHi": "BPL (Below Poverty Line) की पहचान का स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "Apply butter",
      "Cool with running water",
      "Apply toothpaste",
      "Apply ice directly"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "मुफ्त/रियायती स्वास्थ्य सेवाओं के लिए पात्रता",
      "केवल राशन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "First aid: cool under running water 10-20 min. DON'T apply butter, toothpaste, ice.",
    "explanationHi": "Targeting poor।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-672",
    "questionEn": "Rule of nines for burns - head in adult is:",
    "questionHi": "SECC (Socio-Economic and Caste Census) का PM-JAY में क्या उपयोग है?",
    "optionsEn": [
      "1%",
      "4.5%",
      "9%",
      "18%"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "लाभार्थियों की पहचान",
      "केवल जाति",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Rule of 9s adult: head 9%, each arm 9%, front torso 18%, back 18%, each leg 18%, perineum 1%.",
    "explanationHi": "Beneficiary identification।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-673",
    "questionEn": "Drowning victim first aid:",
    "questionHi": "Means Testing क्या है?",
    "optionsEn": [
      "Hold upside down to drain water",
      "Start CPR if not breathing",
      "Slap to revive",
      "Give food"
    ],
    "optionsHi": [
      "कोई परीक्षण नहीं",
      "आय/संपत्ति के आधार पर पात्रता निर्धारण",
      "सभी पात्र",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Remove from water, check breathing, start CPR if not breathing; don't waste time draining.",
    "explanationHi": "Income-based eligibility।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-674",
    "questionEn": "Choking in adult is relieved by:",
    "questionHi": "Targeting vs Universal Coverage में क्या अंतर है?",
    "optionsEn": [
      "Back blows only",
      "Abdominal thrusts (Heimlich maneuver)",
      "Drinking water",
      "Slapping face"
    ],
    "optionsHi": [
      "एक ही",
      "Targeting=चयनित समूह, Universal=सभी",
      "कोई अंतर नहीं",
      "विपरीत"
    ],
    "correctAnswer": 1,
    "explanationEn": "Conscious adult: abdominal thrusts (Heimlich). Back blows + chest thrusts for infants.",
    "explanationHi": "Selective vs all।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-675",
    "questionEn": "CPR compression to ventilation ratio in adults is:",
    "questionHi": "Targeting के फायदे और नुकसान क्या हैं?",
    "optionsEn": [
      "15:2",
      "30:2",
      "15:1",
      "5:1"
    ],
    "optionsHi": [
      "केवल फायदे",
      "फायदे: कम लागत; नुकसान: Exclusion error, कलंक, प्रशासनिक लागत",
      "केवल नुकसान",
      "कोई प्रभाव नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adult CPR: 30 compressions to 2 breaths; compress hard and fast (100-120/min).",
    "explanationHi": "Pros and cons।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-676",
    "questionEn": "AED stands for:",
    "questionHi": "Inclusion Error क्या है?",
    "optionsEn": [
      "Automatic Emergency Device",
      "Automated External Defibrillator",
      "Advanced Emergency Department",
      "Acute Emergency Detection"
    ],
    "optionsHi": [
      "सही समावेश",
      "अपात्र व्यक्तियों को लाभ में शामिल करना",
      "Exclusion",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "AED: device that analyzes heart rhythm and delivers shock if needed; used in cardiac arrest.",
    "explanationHi": "Wrong inclusion।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-677",
    "questionEn": "Recovery position is used for:",
    "questionHi": "Exclusion Error क्या है?",
    "optionsEn": [
      "Heart attack",
      "Unconscious breathing person",
      "Choking",
      "Burns"
    ],
    "optionsHi": [
      "सही बहिष्कार",
      "पात्र व्यक्तियों को लाभ से बाहर रखना",
      "Inclusion",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Recovery position: unconscious but breathing - prevents aspiration, maintains airway.",
    "explanationHi": "Wrong exclusion।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-678",
    "questionEn": "Fracture first aid includes:",
    "questionHi": "Last Mile Delivery स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Moving the limb frequently",
      "Immobilizing and supporting the injured part",
      "Applying heat",
      "Massage"
    ],
    "optionsHi": [
      "पहला मील",
      "सेवाओं को अंतिम लाभार्थी तक पहुंचाना",
      "केवल शहर में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Immobilize fracture in position found; don't move unnecessarily; splint if possible.",
    "explanationHi": "Reaching beneficiaries।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-679",
    "questionEn": "Suspected spinal injury - patient should be:",
    "questionHi": "Left Out Population स्वास्थ्य में कौन है?",
    "optionsEn": [
      "Moved immediately",
      "Kept still with spinal immobilization",
      "Made to sit up",
      "Given food and water"
    ],
    "optionsHi": [
      "सभी कवर",
      "सेवाओं से वंचित समूह (दूरस्थ, प्रवासी, बेघर)",
      "कोई नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Spinal injury: don't move; maintain alignment; wait for proper immobilization equipment.",
    "explanationHi": "Unreached populations।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-680",
    "questionEn": "Shock symptoms include all EXCEPT:",
    "questionHi": "जन स्वास्थ्य में Zero Dose Children कौन हैं?",
    "optionsEn": [
      "Cold clammy skin",
      "Rapid weak pulse",
      "Normal blood pressure",
      "Altered consciousness"
    ],
    "optionsHi": [
      "पूर्ण टीकाकृत",
      "कोई टीका न लगे बच्चे",
      "केवल कुछ टीके",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Shock: cold/clammy, rapid/weak pulse, low BP, altered consciousness, rapid breathing.",
    "explanationHi": "Unvaccinated children।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-681",
    "questionEn": "Anaphylaxis is treated with:",
    "questionHi": "Drop-Out Rate टीकाकरण में क्या है?",
    "optionsEn": [
      "Antihistamines only",
      "Epinephrine (adrenaline)",
      "Antibiotics",
      "Rest only"
    ],
    "optionsHi": [
      "कम दर",
      "टीकाकरण शुरू करने वालों में से पूरा न करने वालों का अनुपात",
      "पूर्ण दर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Epinephrine is life-saving first-line treatment for anaphylaxis; given IM in thigh.",
    "explanationHi": "Incomplete vaccination।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-682",
    "questionEn": "Poisoning first aid - if swallowed:",
    "questionHi": "Catch-Up Vaccination क्या है?",
    "optionsEn": [
      "Always induce vomiting",
      "Do not induce vomiting for corrosives/petroleum",
      "Give milk always",
      "Ignore"
    ],
    "optionsHi": [
      "नियमित टीकाकरण",
      "छूटे हुए बच्चों को टीके लगाना",
      "अतिरिक्त टीके",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Don't induce vomiting for corrosives (burns again) or petroleum products (aspiration risk).",
    "explanationHi": "Vaccinating missed।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-683",
    "questionEn": "Poison information center helpline in India:",
    "questionHi": "Micro-Planning स्वास्थ्य सेवाओं में क्या है?",
    "optionsEn": [
      "100",
      "108",
      "1066",
      "1800-116-117"
    ],
    "optionsHi": [
      "बड़ी योजना",
      "स्थानीय स्तर पर विस्तृत कार्य योजना",
      "कोई योजना नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "National Poison Information Centre helpline for guidance on poisoning cases.",
    "explanationHi": "Local planning।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-684",
    "questionEn": "Electric shock victim - first step:",
    "questionHi": "Head Count स्वास्थ्य सेवाओं में क्या है?",
    "optionsEn": [
      "Touch and pull away",
      "Turn off power source/separate with non-conductor",
      "Pour water",
      "Give CPR immediately"
    ],
    "optionsHi": [
      "गिनती नहीं",
      "लाभार्थियों की सूची और गिनती",
      "अनुमान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Safety first: turn off power or use non-conductor to separate; don't touch with bare hands.",
    "explanationHi": "Beneficiary enumeration।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-685",
    "questionEn": "Hypothermia is body temperature below:",
    "questionHi": "Due List क्या है?",
    "optionsEn": [
      "37°C",
      "36°C",
      "35°C",
      "34°C"
    ],
    "optionsHi": [
      "भुगतान सूची",
      "सेवा के लिए देय लाभार्थियों की सूची",
      "कोई सूची नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Hypothermia: core temperature <35°C. Mild 32-35°C, Moderate 28-32°C, Severe <28°C.",
    "explanationHi": "Service due list।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-686",
    "questionEn": "RICE for sprains stands for:",
    "questionHi": "Line Listing क्या है?",
    "optionsEn": [
      "Rest, Ice, Compression, Elevation",
      "Run, Ignore, Continue, Exercise",
      "Relax, Immerse, Clean, Examine",
      "Rub, Ice, Cool, Elevate"
    ],
    "optionsHi": [
      "कतार",
      "मामलों/लाभार्थियों की विस्तृत सूची",
      "कोई सूची नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "RICE: immediate management of soft tissue injuries (sprains, strains).",
    "explanationHi": "Case listing।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-687",
    "questionEn": "Bleeding control - direct pressure should be applied for:",
    "questionHi": "Tracking स्वास्थ्य सेवाओं में क्या है?",
    "optionsEn": [
      "1 minute",
      "5 minutes",
      "10-15 minutes without lifting",
      "30 seconds"
    ],
    "optionsHi": [
      "खोजना नहीं",
      "लाभार्थियों का अनुसरण और सेवा सुनिश्चित करना",
      "छोड़ देना",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Apply firm direct pressure for 10-15 minutes continuously without checking.",
    "explanationHi": "Following beneficiaries।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-688",
    "questionEn": "Tourniquet for bleeding is:",
    "questionHi": "Follow-Up स्वास्थ्य सेवाओं में क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "First choice always",
      "Last resort for life-threatening limb bleeding",
      "Never used",
      "Used for all cuts"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "उपचार पूर्णता, जटिलता पहचान, निरंतरता",
      "एक बार सेवा पर्याप्त",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tourniquet: only for life-threatening bleeding when direct pressure fails; note time applied.",
    "explanationHi": "Continuity of care।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-689",
    "questionEn": "Eye injury with chemical splash - first aid:",
    "questionHi": "Default Tracing क्या है?",
    "optionsEn": [
      "Cover and transport",
      "Irrigate with water immediately for 20 minutes",
      "Apply ointment",
      "No treatment"
    ],
    "optionsHi": [
      "छोड़ देना",
      "उपचार छोड़ने वालों को खोजना और वापस लाना",
      "कोई खोज नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chemical eye injury: immediate continuous irrigation with clean water for 20+ minutes.",
    "explanationHi": "Finding defaulters।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-690",
    "questionEn": "Nose bleeding - position should be:",
    "questionHi": "Treatment Adherence क्या है?",
    "optionsEn": [
      "Head tilted back",
      "Head tilted forward, pinch soft part",
      "Lying flat",
      "Head between knees"
    ],
    "optionsHi": [
      "उपचार न लेना",
      "निर्धारित उपचार का पालन करना",
      "आधा उपचार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lean forward (prevents swallowing blood), pinch soft part of nose for 10-15 minutes.",
    "explanationHi": "Following treatment।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-691",
    "questionEn": "Fever in a child should be treated when temperature is:",
    "questionHi": "Treatment Compliance और Adherence में क्या अंतर है?",
    "optionsEn": [
      "Any temperature",
      "Only if causing discomfort, usually >38.5°C",
      "Never",
      "Always with antibiotics"
    ],
    "optionsHi": [
      "एक ही",
      "Compliance=डॉक्टर की आज्ञा, Adherence=रोगी की सहमति से",
      "विपरीत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Treat fever if child uncomfortable; fever itself is not harmful and may help fight infection.",
    "explanationHi": "Paternalistic vs collaborative।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-692",
    "questionEn": "Paracetamol dose for children is based on:",
    "questionHi": "Treatment Literacy क्या है?",
    "optionsEn": [
      "Age only",
      "Weight (10-15 mg/kg per dose)",
      "Height",
      "Fixed dose for all"
    ],
    "optionsHi": [
      "पढ़ना-लिखना",
      "उपचार के बारे में समझ और जानकारी",
      "कोई जानकारी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Paracetamol dosed by weight: 10-15 mg/kg per dose, max 4 doses per day.",
    "explanationHi": "Understanding treatment।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-693",
    "questionEn": "Febrile convulsion in children is:",
    "questionHi": "DOTS (Directly Observed Treatment Short-course) क्या है?",
    "optionsEn": [
      "Always dangerous",
      "Usually benign, self-limiting with fever",
      "Requires brain surgery",
      "Only in adults"
    ],
    "optionsHi": [
      "स्व-उपचार",
      "स्वास्थ्य कर्मी की देखरेख में TB उपचार",
      "लंबा कोर्स",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Simple febrile seizures: common, benign; protect during seizure, treat fever after.",
    "explanationHi": "Supervised TB treatment।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-694",
    "questionEn": "During a seizure, you should:",
    "questionHi": "Treatment Supporter क्या है?",
    "optionsEn": [
      "Put something in mouth",
      "Restrain forcefully",
      "Protect from injury, position on side after",
      "Pour water on face"
    ],
    "optionsHi": [
      "विरोधी",
      "उपचार में रोगी की मदद करने वाला व्यक्ति (परिवार/समुदाय)",
      "कोई मदद नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Don't restrain or put anything in mouth; protect from injury; recovery position after.",
    "explanationHi": "Treatment buddy।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-695",
    "questionEn": "Status epilepticus is:",
    "questionHi": "Pill Box/Reminder का उपचार में क्या उपयोग है?",
    "optionsEn": [
      "Brief seizure",
      "Seizure lasting >5 minutes or repeated without recovery",
      "Single seizure",
      "Mild tremor"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "दवाई याद रखने और अनुपालन में मदद",
      "केवल भंडारण",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Status epilepticus is a medical emergency requiring urgent treatment.",
    "explanationHi": "Medication reminder।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-696",
    "questionEn": "FAST test for stroke checks for:",
    "questionHi": "SMS/Call Reminder का स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "Blood pressure",
      "Face drooping, Arm weakness, Speech difficulty, Time",
      "Fever level",
      "Fractures"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "अपॉइंटमेंट और दवाई की याद दिलाना",
      "केवल विज्ञापन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "FAST: quick stroke recognition - Face, Arm, Speech, Time to call emergency.",
    "explanationHi": "Digital reminders।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-697",
    "questionEn": "Heart attack symptoms include all EXCEPT:",
    "questionHi": "mHealth का उपचार अनुपालन में क्या उपयोग है?",
    "optionsEn": [
      "Chest pain/pressure",
      "Pain radiating to arm/jaw",
      "Shortness of breath",
      "Improvement with exercise"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "रिमाइंडर, ट्रैकिंग, शिक्षा, सपोर्ट",
      "केवल गेम",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Heart attack: chest pain, radiation to arm/jaw, SOB, sweating, nausea; worsens with exertion.",
    "explanationHi": "Mobile for adherence।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-698",
    "questionEn": "Aspirin in suspected heart attack:",
    "questionHi": "Patient Support Group क्या है?",
    "optionsEn": [
      "Never give",
      "Give 325mg to chew if not allergic",
      "Give injection",
      "Give after reaching hospital only"
    ],
    "optionsHi": [
      "केवल डॉक्टर",
      "समान स्थिति वाले रोगियों का सहायता समूह",
      "कोई समूह नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aspirin 325mg chewed reduces clot formation; give while waiting for emergency care.",
    "explanationHi": "Peer support।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-699",
    "questionEn": "Hypoglycemia (low blood sugar) is treated with:",
    "questionHi": "Expert Patient क्या है?",
    "optionsEn": [
      "Insulin",
      "Sugar/glucose if conscious",
      "Salt",
      "Protein"
    ],
    "optionsHi": [
      "डॉक्टर",
      "अपनी बीमारी का अनुभवी रोगी जो दूसरों की मदद करे",
      "कोई अनुभव नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Give sugar/glucose orally if conscious; glucagon or IV glucose if unconscious.",
    "explanationHi": "Experienced patient।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-700",
    "questionEn": "Rule of 15 for hypoglycemia:",
    "questionHi": "जन स्वास्थ्य की सफलता का मापदंड क्या है?",
    "optionsEn": [
      "Give 15 grams glucose, recheck in 15 minutes",
      "Give insulin after 15 minutes",
      "Check 15 times",
      "Wait 15 hours"
    ],
    "optionsHi": [
      "अस्पतालों की संख्या",
      "जनसंख्या के स्वास्थ्य परिणामों में सुधार",
      "दवाइयों की बिक्री",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Rule of 15: give 15g glucose, recheck BG in 15 min, repeat if still low.",
    "explanationHi": "Population health outcomes।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Mixed Review",
    "tags": [
      "mixed-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-701",
    "questionEn": "India's total population is approximately:",
    "questionHi": "Self-Management Support क्या है?",
    "optionsEn": [
      "800 million",
      "1.1 billion",
      "1.4 billion",
      "2 billion"
    ],
    "optionsHi": [
      "डॉक्टर प्रबंधन",
      "रोगी को अपनी स्थिति प्रबंधित करने में सक्षम बनाना",
      "कोई सहायता नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "India's population is approximately 1.4 billion (140 crore), second largest globally.",
    "explanationHi": "Patient empowerment।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-702",
    "questionEn": "Rural population in India is approximately:",
    "questionHi": "Chronic Care Model के घटक क्या हैं?",
    "optionsEn": [
      "40%",
      "55%",
      "65%",
      "80%"
    ],
    "optionsHi": [
      "केवल दवाई",
      "Self-Management, Delivery Design, Decision Support, Clinical Info Systems, Community, Health System",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "About 65% of India's population lives in rural areas.",
    "explanationHi": "CCM components।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-703",
    "questionEn": "Literacy rate in India (Census 2011) is approximately:",
    "questionHi": "Disease Management Programme क्या है?",
    "optionsEn": [
      "55%",
      "65%",
      "74%",
      "90%"
    ],
    "optionsHi": [
      "केवल तीव्र देखभाल",
      "दीर्घकालिक रोगों के लिए व्यवस्थित देखभाल कार्यक्रम",
      "कोई कार्यक्रम नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Overall literacy rate 74% (Male 82%, Female 65%) per Census 2011.",
    "explanationHi": "Chronic disease care।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-704",
    "questionEn": "Sex ratio in India (Census 2011) is:",
    "questionHi": "Clinical Pathway क्या है?",
    "optionsEn": [
      "940 females per 1000 males",
      "1000 females per 1000 males",
      "1050 females per 1000 males",
      "900 females per 1000 males"
    ],
    "optionsHi": [
      "अस्पताल का रास्ता",
      "विशिष्ट स्थिति के लिए मानकीकृत देखभाल प्रोटोकॉल",
      "कोई प्रोटोकॉल नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Sex ratio improved to 940 per Census 2011 but still indicates gender inequality.",
    "explanationHi": "Standardized care।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-705",
    "questionEn": "India's current TFR (Total Fertility Rate) is approximately:",
    "questionHi": "Clinical Guidelines क्या हैं?",
    "optionsEn": [
      "1.5",
      "2.0",
      "2.5",
      "3.0"
    ],
    "optionsHi": [
      "कोई दिशानिर्देश नहीं",
      "साक्ष्य-आधारित नैदानिक सिफारिशें",
      "केवल राय",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "TFR has declined to about 2.0, at replacement level (NFHS-5).",
    "explanationHi": "Evidence-based recommendations।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-706",
    "questionEn": "NFHS stands for:",
    "questionHi": "Standard Treatment Guidelines (STG) क्या हैं?",
    "optionsEn": [
      "National Family Health Survey",
      "National Federation of Health Services",
      "National Foundation for Health Standards",
      "New Framework for Health System"
    ],
    "optionsHi": [
      "कोई मानक नहीं",
      "विशिष्ट स्थितियों के लिए मानक उपचार प्रोटोकॉल",
      "केवल सुझाव",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "NFHS provides data on population, health, nutrition indicators.",
    "explanationHi": "Standard treatment।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-707",
    "questionEn": "Bhore Committee report was published in:",
    "questionHi": "Clinical Audit क्या है?",
    "optionsEn": [
      "1946",
      "1978",
      "2000",
      "2010"
    ],
    "optionsHi": [
      "वित्तीय ऑडिट",
      "नैदानिक देखभाल की गुणवत्ता का मूल्यांकन",
      "कोई ऑडिट नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Bhore Committee (1946) laid foundation for India's health services - recommended integration.",
    "explanationHi": "Care quality review।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-708",
    "questionEn": "Primary Health Care approach was adopted at:",
    "questionHi": "Peer Review क्या है?",
    "optionsEn": [
      "Delhi Conference 1947",
      "Alma Ata Declaration 1978",
      "Rome Conference 2000",
      "Paris Agreement 2015"
    ],
    "optionsHi": [
      "आत्म-समीक्षा",
      "सहकर्मियों द्वारा नैदानिक कार्य की समीक्षा",
      "कोई समीक्षा नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Alma Ata Declaration 1978 promoted PHC as key to achieving Health for All.",
    "explanationHi": "Colleague review।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-709",
    "questionEn": "Millennium Development Goals were from:",
    "questionHi": "Mortality Review/Death Audit क्या है?",
    "optionsEn": [
      "1990-2000",
      "2000-2015",
      "2015-2030",
      "2020-2035"
    ],
    "optionsHi": [
      "कोई समीक्षा नहीं",
      "मृत्यु के कारणों और देखभाल में कमियों की समीक्षा",
      "केवल गिनती",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MDGs (2000-2015) were 8 goals; succeeded by 17 SDGs (2015-2030).",
    "explanationHi": "Death review।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-710",
    "questionEn": "Sustainable Development Goals are:",
    "questionHi": "MDSR (Maternal Death Surveillance and Response) क्या है?",
    "optionsEn": [
      "8 goals",
      "10 goals",
      "17 goals",
      "25 goals"
    ],
    "optionsHi": [
      "केवल गिनती",
      "मातृ मृत्यु की निगरानी, समीक्षा और प्रतिक्रिया",
      "कोई प्रतिक्रिया नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "17 SDGs adopted in 2015 for achievement by 2030; SDG 3 is health.",
    "explanationHi": "Maternal death review।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-711",
    "questionEn": "India's target to eliminate TB is:",
    "questionHi": "CDR (Child Death Review) क्या है?",
    "optionsEn": [
      "2020",
      "2025",
      "2030",
      "2035"
    ],
    "optionsHi": [
      "केवल गिनती",
      "बाल मृत्यु की समीक्षा और रोकथाम के उपाय",
      "कोई समीक्षा नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "India targets TB elimination by 2025, five years ahead of global 2030 target.",
    "explanationHi": "Child death review।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-712",
    "questionEn": "India was declared polio-free in:",
    "questionHi": "Near Miss Review क्या है?",
    "optionsEn": [
      "2005",
      "2011",
      "2014",
      "2020"
    ],
    "optionsHi": [
      "केवल मृत्यु",
      "गंभीर जटिलता से बचने वाले मामलों की समीक्षा",
      "कोई समीक्षा नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "WHO certified India polio-free in 2014 (last case January 2011).",
    "explanationHi": "Close call review।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-713",
    "questionEn": "India eliminated maternal and neonatal tetanus in:",
    "questionHi": "No Blame Culture स्वास्थ्य में क्या है?",
    "optionsEn": [
      "2000",
      "2005",
      "2015",
      "2020"
    ],
    "optionsHi": [
      "दोषारोपण",
      "गलतियों से सीखने के लिए दोष न लगाने की संस्कृति",
      "सजा देना",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "India validated for elimination of maternal and neonatal tetanus in 2015.",
    "explanationHi": "Learning from errors।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-714",
    "questionEn": "Yaws elimination target year for India:",
    "questionHi": "Just Culture स्वास्थ्य में क्या है?",
    "optionsEn": [
      "2020",
      "2023",
      "2030",
      "Eliminated"
    ],
    "optionsHi": [
      "सभी को सजा",
      "जवाबदेही और सीखने का संतुलन",
      "कोई जवाबदेही नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "India eliminated yaws; among first countries to do so globally.",
    "explanationHi": "Balanced accountability।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-715",
    "questionEn": "Guinea worm disease status in India:",
    "questionHi": "Patient Safety Culture क्या है?",
    "optionsEn": [
      "Endemic",
      "Eliminated",
      "Increasing",
      "Just started"
    ],
    "optionsHi": [
      "असुरक्षित",
      "संगठन में सुरक्षा को प्राथमिकता देने वाले मूल्य और व्यवहार",
      "केवल नियम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "India certified free of guinea worm disease (dracunculiasis) in 2000.",
    "explanationHi": "Safety-first culture।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-716",
    "questionEn": "NCD burden is highest in which age group?",
    "questionHi": "Incident Reporting System क्या है?",
    "optionsEn": [
      "0-14 years",
      "15-29 years",
      "30-69 years",
      "70+ years"
    ],
    "optionsHi": [
      "छुपाना",
      "सुरक्षा घटनाओं की रिपोर्टिंग प्रणाली",
      "कोई रिपोर्टिंग नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "NCDs increasingly affect productive age group 30-69 years.",
    "explanationHi": "Event reporting।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-717",
    "questionEn": "Most common NCD in India is:",
    "questionHi": "Hand Hygiene Compliance Monitoring क्या है?",
    "optionsEn": [
      "Diabetes",
      "Cardiovascular disease",
      "Cancer",
      "COPD"
    ],
    "optionsHi": [
      "कोई निगरानी नहीं",
      "हाथ स्वच्छता पालन की निगरानी",
      "केवल देखना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CVD (heart disease, stroke) is leading cause of NCD deaths in India.",
    "explanationHi": "Hand hygiene monitoring।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-718",
    "questionEn": "India has how many diabetic patients approximately?",
    "questionHi": "5 Moments of Hand Hygiene (WHO) क्या हैं?",
    "optionsEn": [
      "20 million",
      "50 million",
      "77 million",
      "120 million"
    ],
    "optionsHi": [
      "केवल 2",
      "रोगी से पहले, साफ/सेप्टिक प्रक्रिया से पहले, शारीरिक तरल पदार्थ के बाद, रोगी के बाद, वातावरण के बाद",
      "केवल 1",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "India has about 77 million diabetics, second highest globally after China.",
    "explanationHi": "WHO 5 moments।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-719",
    "questionEn": "Road traffic injuries are leading cause of death in age group:",
    "questionHi": "Surgical Safety Checklist का उपयोग क्या है?",
    "optionsEn": [
      "0-5 years",
      "5-14 years",
      "15-29 years",
      "60+ years"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "सर्जिकल त्रुटियों को रोकना (गलत स्थान, गलत रोगी)",
      "केवल कागज़ी काम",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "RTIs are leading cause of death in young adults 15-29 years globally.",
    "explanationHi": "Surgery safety।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-720",
    "questionEn": "Mental disorders affect approximately what percentage of Indians?",
    "questionHi": "Time Out सर्जरी में क्या है?",
    "optionsEn": [
      "5%",
      "10-15%",
      "30%",
      "50%"
    ],
    "optionsHi": [
      "आराम",
      "सर्जरी से पहले टीम द्वारा रोगी और प्रक्रिया की पुष्टि",
      "देरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "About 10-15% of population has some mental health condition.",
    "explanationHi": "Pre-surgery verification।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-721",
    "questionEn": "Suicide rate is highest among:",
    "questionHi": "Medication Safety में LASA क्या है?",
    "optionsEn": [
      "Children",
      "Young adults",
      "Middle aged",
      "Elderly"
    ],
    "optionsHi": [
      "दवाई नहीं",
      "Look-Alike Sound-Alike दवाइयां जो भ्रम पैदा करें",
      "सुरक्षित दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Suicide is major cause of death in 15-29 age group in India.",
    "explanationHi": "Confusing medications।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-722",
    "questionEn": "Anemia affects what percentage of women in India?",
    "questionHi": "High Alert Medications क्या हैं?",
    "optionsEn": [
      "20%",
      "35%",
      "57%",
      "80%"
    ],
    "optionsHi": [
      "सुरक्षित दवाइयां",
      "गलत उपयोग से गंभीर नुकसान की संभावना वाली दवाइयां",
      "सामान्य दवाइयां",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Anemia affects about 57% of women 15-49 years per NFHS-5.",
    "explanationHi": "Dangerous if misused।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-723",
    "questionEn": "Stunting affects what percentage of children under 5?",
    "questionHi": "Medication Reconciliation क्या है?",
    "optionsEn": [
      "15%",
      "25%",
      "35%",
      "50%"
    ],
    "optionsHi": [
      "दवाई बदलना",
      "स्थानांतरण पर दवाई सूची की जांच और मिलान",
      "कोई जांच नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "About 35% of children under 5 are stunted (NFHS-5), improved from 48% earlier.",
    "explanationHi": "Medication verification।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-724",
    "questionEn": "Full immunization coverage in India is approximately:",
    "questionHi": "Patient Identification Band का क्या उपयोग है?",
    "optionsEn": [
      "50%",
      "62%",
      "76%",
      "95%"
    ],
    "optionsHi": [
      "सजावट",
      "रोगी की सही पहचान सुनिश्चित करना",
      "केवल नाम",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Full immunization coverage improved to about 76% per NFHS-5.",
    "explanationHi": "Correct identification।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-725",
    "questionEn": "Institutional delivery rate in India is approximately:",
    "questionHi": "Two-Patient Identifiers क्या है?",
    "optionsEn": [
      "50%",
      "70%",
      "89%",
      "98%"
    ],
    "optionsHi": [
      "एक पहचान",
      "दो अलग-अलग तरीकों से रोगी की पुष्टि (नाम + जन्म तिथि)",
      "कोई पहचान नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Institutional delivery has increased to about 89% per NFHS-5.",
    "explanationHi": "Double verification।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-726",
    "questionEn": "Open defecation free (ODF) target under Swachh Bharat was:",
    "questionHi": "Fall Prevention स्वास्थ्य सुविधाओं में क्या है?",
    "optionsEn": [
      "2014",
      "2019",
      "2025",
      "2030"
    ],
    "optionsHi": [
      "गिरने देना",
      "रोगियों को गिरने से बचाने के उपाय",
      "कोई उपाय नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Swachh Bharat Mission targeted ODF India by October 2019.",
    "explanationHi": "Preventing falls।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-727",
    "questionEn": "Safe drinking water access in rural India is approximately:",
    "questionHi": "Pressure Ulcer Prevention क्या है?",
    "optionsEn": [
      "50%",
      "70%",
      "85%",
      "95%"
    ],
    "optionsHi": [
      "घाव होने देना",
      "बिस्तर पर पड़े रोगियों में दबाव घाव रोकना",
      "कोई रोकथाम नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "About 85% have access to improved drinking water source, though quality varies.",
    "explanationHi": "Bedsore prevention।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-728",
    "questionEn": "Health insurance coverage in India is approximately:",
    "questionHi": "VTE (Venous Thromboembolism) Prophylaxis क्या है?",
    "optionsEn": [
      "20%",
      "41%",
      "65%",
      "90%"
    ],
    "optionsHi": [
      "कोई रोकथाम नहीं",
      "भर्ती रोगियों में रक्त के थक्के की रोकथाम",
      "थक्का बनाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Health insurance coverage about 41% per NFHS-5, PM-JAY expanding coverage.",
    "explanationHi": "Blood clot prevention।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-729",
    "questionEn": "Doctor-population ratio in India is:",
    "questionHi": "Central Line Bundle क्या है?",
    "optionsEn": [
      "1:500",
      "1:834",
      "1:1500",
      "1:3000"
    ],
    "optionsHi": [
      "केवल एक उपाय",
      "Central Line संक्रमण रोकने के लिए उपायों का समूह",
      "कोई उपाय नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "India has about 1 doctor per 834 population (improving but unevenly distributed).",
    "explanationHi": "Bundle of interventions।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-730",
    "questionEn": "WHO recommendation for doctor-population ratio is:",
    "questionHi": "Catheter-Associated UTI Prevention क्या है?",
    "optionsEn": [
      "1:500",
      "1:1000",
      "1:2000",
      "1:5000"
    ],
    "optionsHi": [
      "UTI होने देना",
      "कैथेटर से जुड़े मूत्र मार्ग संक्रमण की रोकथाम",
      "कोई रोकथाम नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WHO recommends minimum 1 doctor per 1000 population.",
    "explanationHi": "CAUTI prevention।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-731",
    "questionEn": "Number of medical colleges in India is approximately:",
    "questionHi": "SSI (Surgical Site Infection) Prevention क्या है?",
    "optionsEn": [
      "200",
      "400",
      "600",
      "1000"
    ],
    "optionsHi": [
      "संक्रमण होने देना",
      "सर्जिकल घाव के संक्रमण की रोकथाम",
      "कोई रोकथाम नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "India has about 600+ medical colleges, increased significantly in recent years.",
    "explanationHi": "Surgical infection prevention।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-732",
    "questionEn": "COVID-19 vaccination in India started in:",
    "questionHi": "Antimicrobial Stewardship का उद्देश्य क्या है?",
    "optionsEn": [
      "December 2020",
      "January 2021",
      "March 2021",
      "May 2021"
    ],
    "optionsHi": [
      "अधिक एंटीबायोटिक",
      "एंटीबायोटिक का उचित उपयोग, AMR कम करना",
      "कोई नियंत्रण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "India's COVID-19 vaccination campaign started on January 16, 2021.",
    "explanationHi": "Appropriate antibiotic use।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-733",
    "questionEn": "Covishield vaccine is manufactured by:",
    "questionHi": "Antibiotic Prophylaxis सर्जरी में क्या है?",
    "optionsEn": [
      "Bharat Biotech",
      "Serum Institute of India",
      "Zydus",
      "Biological E"
    ],
    "optionsHi": [
      "सर्जरी के बाद",
      "सर्जरी से पहले संक्रमण रोकने के लिए एंटीबायोटिक",
      "कोई एंटीबायोटिक नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Covishield (AstraZeneca vaccine) manufactured by Serum Institute, Pune.",
    "explanationHi": "Preventive antibiotics।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-734",
    "questionEn": "Covaxin is manufactured by:",
    "questionHi": "Sepsis Bundle क्या है?",
    "optionsEn": [
      "Serum Institute",
      "Bharat Biotech",
      "Cadila",
      "Pfizer India"
    ],
    "optionsHi": [
      "केवल एक उपाय",
      "सेप्सिस प्रबंधन के लिए समयबद्ध उपायों का समूह",
      "कोई उपाय नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Covaxin is India's indigenous COVID vaccine by Bharat Biotech.",
    "explanationHi": "Sepsis treatment bundle।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-735",
    "questionEn": "CoWIN platform is for:",
    "questionHi": "Blood Safety का जन स्वास्थ्य में क्या महत्व है?",
    "optionsEn": [
      "Food distribution",
      "COVID vaccination registration",
      "Education",
      "Banking"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "संक्रमण रोकथाम, सही रक्त मिलान, जीवन बचाना",
      "केवल बैंक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CoWIN: digital platform for COVID-19 vaccination registration and certificates.",
    "explanationHi": "Safe transfusion।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-736",
    "questionEn": "Climate change affects health through:",
    "questionHi": "Voluntary Non-Remunerated Blood Donation क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Heat stress only",
      "Multiple pathways including vector-borne diseases",
      "No health impact",
      "Improved health only"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "सुरक्षित रक्त, कम संक्रमण जोखिम",
      "भुगतान वाला बेहतर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Climate change: heat waves, vector expansion, food/water insecurity, extreme events.",
    "explanationHi": "Safe blood supply।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-737",
    "questionEn": "Air pollution is responsible for approximately how many deaths in India yearly?",
    "questionHi": "TTI (Transfusion Transmissible Infections) में क्या शामिल हैं?",
    "optionsEn": [
      "50,000",
      "500,000",
      "1.2 million",
      "5 million"
    ],
    "optionsHi": [
      "कोई संक्रमण नहीं",
      "HIV, HBV, HCV, Syphilis, Malaria",
      "केवल HIV",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Air pollution causes about 1.2 million premature deaths annually in India.",
    "explanationHi": "Blood-borne infections।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-738",
    "questionEn": "PM2.5 refers to particulate matter of size:",
    "questionHi": "Cross-Matching रक्त आधान में क्या है?",
    "optionsEn": [
      "Less than 2.5 mm",
      "Less than 2.5 microns",
      "More than 2.5 mm",
      "Exactly 2.5 cm"
    ],
    "optionsHi": [
      "कोई मिलान नहीं",
      "दाता और प्राप्तकर्ता के रक्त की अनुकूलता जांच",
      "रंग मिलान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "PM2.5: particles <2.5 micrometers, penetrate deep into lungs, very harmful.",
    "explanationHi": "Blood compatibility।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-739",
    "questionEn": "AQI stands for:",
    "questionHi": "Haemovigilance क्या है?",
    "optionsEn": [
      "Air Quality Index",
      "Annual Quality Indicator",
      "Atmospheric Quality Index",
      "Average Quantity Index"
    ],
    "optionsHi": [
      "रक्त बर्बाद करना",
      "रक्त आधान से संबंधित प्रतिकूल घटनाओं की निगरानी",
      "कोई निगरानी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "AQI measures air quality on 0-500 scale; higher values indicate more pollution.",
    "explanationHi": "Transfusion monitoring।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-740",
    "questionEn": "National Ambient Air Quality Standards are set by:",
    "questionHi": "Injection Safety का जन स्वास्थ्य में क्या महत्व है?",
    "optionsEn": [
      "WHO",
      "Central Pollution Control Board",
      "Ministry of Health",
      "WHO only"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "संक्रमण रोकथाम, सुरक्षित प्रयोग",
      "कोई सुरक्षा नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CPCB under MoEF&CC sets NAAQS for India.",
    "explanationHi": "Safe injections।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-741",
    "questionEn": "Antimicrobial resistance is caused by:",
    "questionHi": "Auto-Disable (AD) Syringe क्या है?",
    "optionsEn": [
      "Over/misuse of antibiotics",
      "Handwashing",
      "Vaccination",
      "Clean water"
    ],
    "optionsHi": [
      "पुन: प्रयोग योग्य",
      "एक बार उपयोग के बाद अक्षम होने वाली सिरिंज",
      "सामान्य सिरिंज",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "AMR develops from overuse, misuse, incomplete courses of antimicrobials.",
    "explanationHi": "Single-use syringe।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-742",
    "questionEn": "National Action Plan on AMR was launched in:",
    "questionHi": "Safe Injection Practices में क्या शामिल है?",
    "optionsEn": [
      "2010",
      "2017",
      "2020",
      "2022"
    ],
    "optionsHi": [
      "पुन: उपयोग",
      "नई सुई, सही निपटान, हाथ स्वच्छता, सही तकनीक",
      "कोई नियम नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "India's National Action Plan on AMR launched in 2017 based on WHO Global Action Plan.",
    "explanationHi": "Injection safety।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-743",
    "questionEn": "Red line on antibiotic packaging indicates:",
    "questionHi": "One Needle One Syringe One Time क्या है?",
    "optionsEn": [
      "Expensive medicine",
      "Prescription-only antibiotic",
      "OTC medicine",
      "Banned drug"
    ],
    "optionsHi": [
      "पुन: उपयोग",
      "प्रत्येक इंजेक्शन के लिए नई सुई और सिरिंज",
      "बार-बार उपयोग",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Red line campaign: antibiotics marked with red line are prescription-only.",
    "explanationHi": "Single use policy।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-744",
    "questionEn": "WASH stands for:",
    "questionHi": "Sharps Container क्या है?",
    "optionsEn": [
      "Western Association of Standard Health",
      "Water, Sanitation and Hygiene",
      "World Action for Sustainable Health",
      "Wide Area Sanitation Hub"
    ],
    "optionsHi": [
      "कागज़ का डिब्बा",
      "सुई और धारदार वस्तुओं का पंक्चर-प्रूफ कंटेनर",
      "खुला डिब्बा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WASH: Water, Sanitation, and Hygiene - key for disease prevention.",
    "explanationHi": "Puncture-proof container।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-745",
    "questionEn": "Handwashing with soap can reduce diarrhea by:",
    "questionHi": "Needle Recapping क्यों खतरनाक है?",
    "optionsEn": [
      "10%",
      "25%",
      "45%",
      "90%"
    ],
    "optionsHi": [
      "खतरनाक नहीं",
      "Needle Stick Injury का जोखिम",
      "सुरक्षित",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Handwashing with soap can reduce diarrhea incidence by about 45%.",
    "explanationHi": "NSI risk।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-746",
    "questionEn": "Global Handwashing Day is observed on:",
    "questionHi": "BMW (Biomedical Waste) का सही प्रबंधन क्यों जरूरी है?",
    "optionsEn": [
      "March 22",
      "May 5",
      "October 15",
      "December 1"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "संक्रमण रोकथाम, पर्यावरण सुरक्षा, कानूनी आवश्यकता",
      "केवल दिखावा",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Global Handwashing Day on October 15 promotes handwashing with soap.",
    "explanationHi": "BMW importance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-747",
    "questionEn": "World Water Day is observed on:",
    "questionHi": "BMW में पीला बैग किसके लिए है?",
    "optionsEn": [
      "March 22",
      "April 22",
      "June 5",
      "October 15"
    ],
    "optionsHi": [
      "सामान्य कचरा",
      "संक्रामक अपशिष्ट (इंसीनरेशन के लिए)",
      "धारदार",
      "रासायनिक"
    ],
    "correctAnswer": 0,
    "explanationEn": "World Water Day on March 22 raises awareness about freshwater importance.",
    "explanationHi": "Yellow for incineration।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-748",
    "questionEn": "World Environment Day is observed on:",
    "questionHi": "BMW में लाल बैग किसके लिए है?",
    "optionsEn": [
      "March 22",
      "April 22",
      "June 5",
      "November 5"
    ],
    "optionsHi": [
      "सामान्य",
      "प्लास्टिक दूषित अपशिष्ट (ऑटोक्लेव)",
      "धारदार",
      "कांच"
    ],
    "correctAnswer": 2,
    "explanationEn": "World Environment Day on June 5 encourages environmental protection action.",
    "explanationHi": "Red for autoclaving।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-749",
    "questionEn": "Earth Day is observed on:",
    "questionHi": "BMW में नीला/सफेद पंक्चर प्रूफ कंटेनर किसके लिए है?",
    "optionsEn": [
      "March 22",
      "April 22",
      "June 5",
      "October 15"
    ],
    "optionsHi": [
      "कागज",
      "धारदार अपशिष्ट (सुई, ब्लेड)",
      "भोजन",
      "दवाई"
    ],
    "correctAnswer": 1,
    "explanationEn": "Earth Day on April 22 promotes environmental awareness and action.",
    "explanationHi": "Sharps container।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-750",
    "questionEn": "World Population Day is observed on:",
    "questionHi": "BMW में काला बैग किसके लिए है?",
    "optionsEn": [
      "May 1",
      "July 11",
      "September 15",
      "December 10"
    ],
    "optionsHi": [
      "संक्रामक",
      "सामान्य अपशिष्ट (Non-biomedical)",
      "धारदार",
      "रासायनिक"
    ],
    "correctAnswer": 1,
    "explanationEn": "World Population Day on July 11 raises awareness about population issues.",
    "explanationHi": "General waste।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-751",
    "questionEn": "International Day of the Girl Child is:",
    "questionHi": "Incineration BMW प्रबंधन में क्या है?",
    "optionsEn": [
      "March 8",
      "October 11",
      "November 19",
      "December 10"
    ],
    "optionsHi": [
      "दबाना",
      "उच्च तापमान पर जलाकर नष्ट करना",
      "पानी में डालना",
      "मिट्टी में गाड़ना"
    ],
    "correctAnswer": 1,
    "explanationEn": "International Day of the Girl Child on October 11 promotes girls' rights.",
    "explanationHi": "High-temperature burning।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-752",
    "questionEn": "World Breastfeeding Week is observed in:",
    "questionHi": "Autoclave BMW प्रबंधन में क्या है?",
    "optionsEn": [
      "First week of January",
      "First week of August",
      "Last week of December",
      "First week of March"
    ],
    "optionsHi": [
      "जलाना",
      "भाप और दबाव से निष्क्रिय करना",
      "पानी में डालना",
      "धूप में रखना"
    ],
    "correctAnswer": 1,
    "explanationEn": "World Breastfeeding Week August 1-7 promotes breastfeeding.",
    "explanationHi": "Steam sterilization।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-753",
    "questionEn": "National Immunization Day in India is for:",
    "questionHi": "Shredding BMW प्रबंधन में क्या है?",
    "optionsEn": [
      "All vaccines",
      "Pulse Polio",
      "COVID only",
      "BCG only"
    ],
    "optionsHi": [
      "जलाना",
      "प्लास्टिक को काटकर छोटे टुकड़े करना",
      "दबाना",
      "पानी में डालना"
    ],
    "correctAnswer": 1,
    "explanationEn": "NIDs (National Immunization Days) for Pulse Polio campaign supplementary doses.",
    "explanationHi": "Cutting plastic।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-754",
    "questionEn": "Intensified Mission Indradhanush targets:",
    "questionHi": "Deep Burial BMW प्रबंधन में कब उपयोग होता है?",
    "optionsEn": [
      "All districts equally",
      "Low coverage districts for catch-up",
      "Only urban areas",
      "Only tribal areas"
    ],
    "optionsHi": [
      "शहरों में",
      "दूरस्थ क्षेत्रों में जहां अन्य सुविधा न हो",
      "हर जगह",
      "कभी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "IMI intensively covers low-performing areas for rapid coverage improvement.",
    "explanationHi": "Remote area disposal।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-755",
    "questionEn": "EPI stands for:",
    "questionHi": "CBWTF (Common Biomedical Waste Treatment Facility) क्या है?",
    "optionsEn": [
      "Essential Program for India",
      "Expanded Programme on Immunization",
      "Emergency Prevention Initiative",
      "Extended Protection for Infants"
    ],
    "optionsHi": [
      "व्यक्तिगत",
      "कई स्वास्थ्य सुविधाओं के लिए सामान्य BMW उपचार",
      "कोई सुविधा नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "EPI: WHO's global program providing vaccines to children worldwide.",
    "explanationHi": "Common treatment facility।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-756",
    "questionEn": "Universal Immunization Programme in India started in:",
    "questionHi": "BMW Rules 2016 के अनुसार, BMW का भंडारण कितने समय से अधिक नहीं होना चाहिए?",
    "optionsEn": [
      "1978",
      "1985",
      "1992",
      "2000"
    ],
    "optionsHi": [
      "24 घंटे",
      "48 घंटे",
      "1 सप्ताह",
      "1 महीना"
    ],
    "correctAnswer": 1,
    "explanationEn": "UIP started in 1985, covering 6 vaccine-preventable diseases initially.",
    "explanationHi": "Maximum storage time।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-757",
    "questionEn": "Vaccines under UIP currently number:",
    "questionHi": "PPE (Personal Protective Equipment) BMW हैंडलिंग में क्या शामिल है?",
    "optionsEn": [
      "6",
      "8",
      "12",
      "15"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "दस्ताने, मास्क, एप्रन, जूते, गॉगल्स",
      "केवल दस्ताने",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "UIP now covers 12 VPDs with various vaccines at different ages.",
    "explanationHi": "BMW handling PPE।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-758",
    "questionEn": "Japanese Encephalitis vaccine added to UIP in:",
    "questionHi": "E-Waste का स्वास्थ्य पर क्या प्रभाव है?",
    "optionsEn": [
      "2000",
      "2006",
      "2010",
      "2015"
    ],
    "optionsHi": [
      "कोई प्रभाव नहीं",
      "भारी धातुओं से विषाक्तता, पर्यावरण प्रदूषण",
      "लाभदायक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "JE vaccine added to UIP in endemic districts starting 2006.",
    "explanationHi": "Electronic waste hazards।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-759",
    "questionEn": "Rotavirus vaccine was added to UIP in:",
    "questionHi": "स्वास्थ्य सुविधा में Spill Management क्या है?",
    "optionsEn": [
      "2010",
      "2016",
      "2018",
      "2020"
    ],
    "optionsHi": [
      "छोड़ देना",
      "रक्त/शारीरिक तरल पदार्थ के फैलाव को सुरक्षित रूप से साफ करना",
      "पानी डालना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rotavirus vaccine introduced in UIP starting 2016 in phased manner.",
    "explanationHi": "Spill cleanup।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-760",
    "questionEn": "Pneumococcal Conjugate Vaccine (PCV) added in:",
    "questionHi": "Disinfectant Solution का BMW में क्या उपयोग है?",
    "optionsEn": [
      "2015",
      "2017",
      "2019",
      "2021"
    ],
    "optionsHi": [
      "पीने के लिए",
      "रोगाणु नष्ट करने के लिए (1% Sodium Hypochlorite)",
      "केवल सफाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "PCV introduced in UIP from 2017 in selected states, expanded gradually.",
    "explanationHi": "Killing germs।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-761",
    "questionEn": "MR vaccine replaced which vaccine?",
    "questionHi": "स्वास्थ्य सुविधा में 5S क्या है?",
    "optionsEn": [
      "BCG",
      "OPV",
      "Measles mono vaccine",
      "DPT"
    ],
    "optionsHi": [
      "5 दवाइयां",
      "Sort, Set, Shine, Standardize, Sustain (कार्यस्थल व्यवस्था)",
      "5 डॉक्टर",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Measles-Rubella vaccine replaced standalone measles vaccine for added rubella protection.",
    "explanationHi": "Workplace organization।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-762",
    "questionEn": "Pentavalent vaccine replaced:",
    "questionHi": "Kaizen स्वास्थ्य में क्या है?",
    "optionsEn": [
      "BCG",
      "DPT + Hep B + Hib as separate vaccines",
      "OPV",
      "Measles"
    ],
    "optionsHi": [
      "जापानी दवाई",
      "निरंतर छोटे-छोटे सुधार",
      "बड़ा बदलाव केवल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pentavalent combines DPT + Hep B + Hib, reducing number of injections.",
    "explanationHi": "Continuous improvement।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-763",
    "questionEn": "IPV was introduced in UIP in:",
    "questionHi": "Lean Management का स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "2010",
      "2015",
      "2018",
      "2021"
    ],
    "optionsHi": [
      "वजन कम करना",
      "अपव्यय कम करके दक्षता बढ़ाना",
      "केवल उद्योग में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Injectable Polio Vaccine introduced in 2015 as part of polio endgame strategy.",
    "explanationHi": "Efficiency improvement।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-764",
    "questionEn": "Bivalent OPV replaced:",
    "questionHi": "Six Sigma का स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "IPV",
      "Trivalent OPV",
      "Monovalent OPV",
      "No replacement"
    ],
    "optionsHi": [
      "6 सिग्मा बैंड",
      "दोष और विविधता कम करके गुणवत्ता सुधारना",
      "केवल उद्योग में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Switch from trivalent (types 1,2,3) to bivalent OPV (types 1,3) in 2016 after type 2 eradication.",
    "explanationHi": "Quality methodology।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-765",
    "questionEn": "HPV vaccine target group in India is:",
    "questionHi": "Total Quality Management (TQM) क्या है?",
    "optionsEn": [
      "All women",
      "Girls 9-14 years",
      "Only married women",
      "Only after first pregnancy"
    ],
    "optionsHi": [
      "कुछ गुणवत्ता",
      "संगठन में सभी स्तरों पर गुणवत्ता पर ध्यान",
      "केवल उत्पादन में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HPV vaccine most effective before sexual debut; targets adolescent girls.",
    "explanationHi": "Organization-wide quality।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-766",
    "questionEn": "EVIN system is for:",
    "questionHi": "Pareto Principle (80/20 Rule) का स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "Patient records",
      "Vaccine cold chain monitoring",
      "Staff attendance",
      "Drug inventory only"
    ],
    "optionsHi": [
      "समान प्रभाव",
      "80% समस्याएं 20% कारणों से - प्राथमिकता निर्धारण",
      "कोई नियम नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Electronic Vaccine Intelligence Network monitors cold chain, stock in real-time.",
    "explanationHi": "Focusing on vital few।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-767",
    "questionEn": "U-WIN portal is for:",
    "questionHi": "Process Mapping स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Education",
      "Immunization tracking",
      "Banking",
      "Employment"
    ],
    "optionsHi": [
      "नक्शा बनाना",
      "सेवा प्रक्रिया को चित्रित करना और सुधार के अवसर खोजना",
      "कोई मानचित्रण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "U-WIN: digital platform for tracking routine immunization like CoWIN for COVID.",
    "explanationHi": "Visualizing processes।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-768",
    "questionEn": "AEFI reporting should be done:",
    "questionHi": "Value Stream Mapping क्या है?",
    "optionsEn": [
      "Never",
      "Only for deaths",
      "All serious events within 24 hours",
      "Only annually"
    ],
    "optionsHi": [
      "केवल मूल्य",
      "प्रक्रिया में मूल्य जोड़ने वाले और अपव्यय चरणों की पहचान",
      "कोई मानचित्रण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Serious AEFIs (death, hospitalization) reported within 24 hours.",
    "explanationHi": "Identifying waste।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-769",
    "questionEn": "Causality assessment of AEFI is done by:",
    "questionHi": "Bottleneck स्वास्थ्य सेवाओं में क्या है?",
    "optionsEn": [
      "ASHA",
      "MPHW",
      "AEFI Committee at state/national level",
      "Patient family"
    ],
    "optionsHi": [
      "बोतल",
      "प्रक्रिया में वह बिंदु जो पूरी प्रणाली को धीमा करे",
      "कोई बाधा नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Expert committees investigate and determine causality of serious AEFIs.",
    "explanationHi": "Constraint point।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-770",
    "questionEn": "Brighton Collaboration develops:",
    "questionHi": "Waiting Time Reduction स्वास्थ्य में क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Vaccines",
      "Standardized AEFI case definitions",
      "Cold chain equipment",
      "Training modules"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "रोगी संतुष्टि, दक्षता, बेहतर परिणाम",
      "लंबा इंतजार अच्छा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Brighton Collaboration develops standardized case definitions for AEFI assessment.",
    "explanationHi": "Reducing delays।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-771",
    "questionEn": "Vaccine hesitancy is:",
    "questionHi": "Appointment System का स्वास्थ्य में क्या लाभ है?",
    "optionsEn": [
      "Complete acceptance",
      "Complete refusal",
      "Delay or refusal despite availability",
      "No opinion"
    ],
    "optionsHi": [
      "कोई लाभ नहीं",
      "प्रतीक्षा समय कम, बेहतर योजना, रोगी सुविधा",
      "केवल डॉक्टर के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Vaccine hesitancy: delay or refusal of vaccines despite availability of services.",
    "explanationHi": "Scheduled visits।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-772",
    "questionEn": "3Cs of vaccine hesitancy are:",
    "questionHi": "Token System का स्वास्थ्य सुविधाओं में क्या उपयोग है?",
    "optionsEn": [
      "Cost, Coverage, Care",
      "Confidence, Complacency, Convenience",
      "Clean, Cold, Complete",
      "Communicate, Counsel, Convince"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "क्रम में सेवा, भीड़ प्रबंधन",
      "केवल बैंक में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WHO model: Confidence (trust), Complacency (perceived need), Convenience (access).",
    "explanationHi": "Queue management।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-773",
    "questionEn": "Misinformation about vaccines is best addressed by:",
    "questionHi": "Patient Flow Management क्या है?",
    "optionsEn": [
      "Ignoring it",
      "Providing accurate information from trusted sources",
      "Arguing aggressively",
      "Punishment"
    ],
    "optionsHi": [
      "रोगी रोकना",
      "स्वास्थ्य सुविधा में रोगियों की सुचारू आवाजाही",
      "कोई प्रबंधन नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Address misinformation with facts from credible sources; build trust.",
    "explanationHi": "Smooth patient movement।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-774",
    "questionEn": "GAVI is:",
    "questionHi": "Bed Management का अस्पताल में क्या महत्व है?",
    "optionsEn": [
      "Indian organization",
      "Global alliance for vaccines",
      "US agency",
      "Drug company"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "बिस्तरों का कुशल उपयोग, भर्ती-छुट्टी समन्वय",
      "केवल गिनती",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "GAVI (Global Alliance for Vaccines and Immunization) supports immunization in developing countries.",
    "explanationHi": "Efficient bed use।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-775",
    "questionEn": "Decade of Vaccines is:",
    "questionHi": "Average Length of Stay (ALOS) क्या है?",
    "optionsEn": [
      "2000-2010",
      "2011-2020",
      "2021-2030",
      "2025-2035"
    ],
    "optionsHi": [
      "प्रतीक्षा समय",
      "अस्पताल में औसत भर्ती अवधि",
      "जीवन प्रत्याशा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Decade of Vaccines 2011-2020 aimed to extend benefits of immunization to all.",
    "explanationHi": "Hospital stay duration।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-776",
    "questionEn": "Immunization Agenda 2030 aims for:",
    "questionHi": "Bed Occupancy Rate (BOR) क्या है?",
    "optionsEn": [
      "Reduce coverage",
      "Leave no one behind",
      "Only rich countries",
      "Stop vaccination"
    ],
    "optionsHi": [
      "खाली बिस्तर",
      "उपलब्ध बिस्तरों में से भरे हुए बिस्तरों का प्रतिशत",
      "केवल गिनती",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "IA2030: WHO strategy for equitable access to vaccines globally.",
    "explanationHi": "Bed utilization।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-777",
    "questionEn": "Zero-dose children are:",
    "questionHi": "Bed Turnover Rate क्या है?",
    "optionsEn": [
      "Fully immunized",
      "Never received any vaccine",
      "Partially immunized",
      "Over-immunized"
    ],
    "optionsHi": [
      "बिस्तर बदलना",
      "एक निश्चित अवधि में प्रति बिस्तर भर्ती रोगियों की संख्या",
      "केवल सफाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Zero-dose children have never received any vaccine; high priority for outreach.",
    "explanationHi": "Bed utilization rate।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-778",
    "questionEn": "Reaching every district (RED) strategy focuses on:",
    "questionHi": "Discharge Planning का क्या महत्व है?",
    "optionsEn": [
      "Only urban areas",
      "Improving immunization in underserved areas",
      "Only private sector",
      "Research only"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "सुचारू छुट्टी, देखभाल निरंतरता, पुन: भर्ती कम करना",
      "जल्दी निकालना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "RED: WHO strategy for improving immunization in hard-to-reach areas.",
    "explanationHi": "Planning discharge।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-779",
    "questionEn": "Supportive supervision differs from inspection by:",
    "questionHi": "Re-Admission Rate क्या दर्शाता है?",
    "optionsEn": [
      "Being punitive",
      "Helping improve performance through mentoring",
      "Being annual only",
      "Focusing only on problems"
    ],
    "optionsHi": [
      "सफलता",
      "छुट्टी के बाद जल्दी पुन: भर्ती - देखभाल गुणवत्ता का संकेतक",
      "कोई संकेत नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Supportive supervision: collaborative approach to identify gaps and build capacity.",
    "explanationHi": "Quality indicator।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-780",
    "questionEn": "Data quality review focuses on:",
    "questionHi": "Day Care Services क्या हैं?",
    "optionsEn": [
      "Only increasing numbers",
      "Accuracy, completeness, timeliness",
      "Hiding problems",
      "Punishing staff"
    ],
    "optionsHi": [
      "रात्रि सेवाएं",
      "बिना रात्रि भर्ती के प्रक्रियाएं/उपचार",
      "केवल भर्ती",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "DQR assesses data quality dimensions to improve decision-making.",
    "explanationHi": "Same-day procedures।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-781",
    "questionEn": "Coverage evaluation survey verifies:",
    "questionHi": "Ambulatory Care क्या है?",
    "optionsEn": [
      "Only registration data",
      "Administrative data against survey findings",
      "Only deaths",
      "Only births"
    ],
    "optionsHi": [
      "एम्बुलेंस",
      "बिना भर्ती के OPD आधारित देखभाल",
      "केवल भर्ती",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CES compares reported coverage with survey-based estimates.",
    "explanationHi": "Outpatient care।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-782",
    "questionEn": "LQAS stands for:",
    "questionHi": "OPD (Outpatient Department) की दक्षता कैसे मापें?",
    "optionsEn": [
      "Large Quality Assessment Survey",
      "Lot Quality Assurance Sampling",
      "Local Quality Audit System",
      "Learning Quality Assessment Standard"
    ],
    "optionsHi": [
      "केवल संख्या",
      "प्रतीक्षा समय, रोगी संतुष्टि, प्रति घंटा रोगी",
      "कोई माप नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "LQAS: rapid method to assess if coverage meets threshold in defined areas.",
    "explanationHi": "OPD efficiency metrics।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-783",
    "questionEn": "Effective Vaccine Management Assessment evaluates:",
    "questionHi": "IPD (Inpatient Department) की गुणवत्ता संकेतक क्या हैं?",
    "optionsEn": [
      "Only cold chain",
      "All aspects of vaccine management",
      "Only procurement",
      "Only distribution"
    ],
    "optionsHi": [
      "केवल भर्ती संख्या",
      "मृत्यु दर, ALOS, संक्रमण दर, रोगी संतुष्टि",
      "कोई संकेतक नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "EVM assesses vaccine arrival, storage, distribution, management, monitoring.",
    "explanationHi": "IPD quality metrics।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-784",
    "questionEn": "Temperature logger records:",
    "questionHi": "Emergency Department की गुणवत्ता संकेतक क्या हैं?",
    "optionsEn": [
      "Patient temperature",
      "Cold chain temperature continuously",
      "Room temperature only",
      "Staff attendance"
    ],
    "optionsHi": [
      "केवल संख्या",
      "Door-to-Doctor Time, Left Without Treatment, Mortality",
      "कोई संकेतक नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Temperature loggers continuously record and display cold chain temperatures.",
    "explanationHi": "ED quality metrics।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-785",
    "questionEn": "Shake test is done for:",
    "questionHi": "Patient Satisfaction Survey का क्या उपयोग है?",
    "optionsEn": [
      "OPV",
      "Freeze-sensitive vaccines like DPT",
      "Measles",
      "BCG"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "सेवा गुणवत्ता का आकलन, सुधार के क्षेत्र पहचानना",
      "केवल औपचारिकता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Shake test checks if freeze-sensitive vaccines (DPT, Hep B) have been frozen.",
    "explanationHi": "Feedback for improvement।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-786",
    "questionEn": "Freeze-dried vaccines include:",
    "questionHi": "Net Promoter Score (NPS) क्या है?",
    "optionsEn": [
      "DPT",
      "BCG and Measles",
      "Hepatitis B",
      "IPV"
    ],
    "optionsHi": [
      "वित्तीय स्कोर",
      "रोगी की अनुशंसा करने की संभावना का माप",
      "खेल स्कोर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lyophilized (freeze-dried) vaccines: BCG, Measles, MR, JE; need diluent.",
    "explanationHi": "Recommendation likelihood।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-787",
    "questionEn": "Reconstituted BCG must be used within:",
    "questionHi": "Patient Experience क्या है?",
    "optionsEn": [
      "30 minutes",
      "4 hours",
      "24 hours",
      "7 days"
    ],
    "optionsHi": [
      "केवल संतुष्टि",
      "देखभाल के दौरान रोगी की समग्र धारणा और अनुभव",
      "केवल उपचार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Use reconstituted BCG within 4 hours or end of session, whichever is earlier.",
    "explanationHi": "Overall patient perception।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-788",
    "questionEn": "Ice-lined refrigerator maintains temperature during:",
    "questionHi": "Complaint Management System का क्या उपयोग है?",
    "optionsEn": [
      "Power supply only",
      "Power failure also using ice lining",
      "Never",
      "Only daytime"
    ],
    "optionsHi": [
      "शिकायत दबाना",
      "शिकायतों को दर्ज करना, समाधान करना, सुधार करना",
      "शिकायत अनदेखा करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ILR maintains cold chain during power cuts due to ice-lining around vaccine chamber.",
    "explanationHi": "Grievance redressal।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-789",
    "questionEn": "Deep freezer is set at:",
    "questionHi": "Grievance Redressal Mechanism क्या है?",
    "optionsEn": [
      "2-8°C",
      "-15 to -25°C",
      "0°C",
      "+10°C"
    ],
    "optionsHi": [
      "कोई तंत्र नहीं",
      "शिकायतों के समाधान के लिए व्यवस्थित प्रक्रिया",
      "शिकायत रोकना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Deep freezers store OPV and make ice packs at -15 to -25°C.",
    "explanationHi": "Complaint resolution।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-790",
    "questionEn": "Vaccine carrier maintains temperature for:",
    "questionHi": "Citizen Charter स्वास्थ्य सुविधा में क्या है?",
    "optionsEn": [
      "1 hour",
      "6-12 hours",
      "7 days",
      "1 month"
    ],
    "optionsHi": [
      "कानून",
      "सेवाओं और मानकों की सार्वजनिक प्रतिबद्धता",
      "केवल कागज",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vaccine carrier with 4 conditioned ice packs maintains +2 to +8°C for 6-12 hours.",
    "explanationHi": "Service commitment।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-791",
    "questionEn": "Ice pack conditioning means:",
    "questionHi": "Right to Information (RTI) का स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "Freezing completely",
      "Thawing until water starts forming",
      "Keeping at room temperature",
      "Discarding"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "स्वास्थ्य सेवाओं की जानकारी प्राप्त करना, जवाबदेही",
      "केवल सरकारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Conditioning: thaw frozen ice packs until sweating before use in carrier.",
    "explanationHi": "Transparency tool।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-792",
    "questionEn": "Solar refrigerators are used in:",
    "questionHi": "Social Audit स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Areas with reliable power",
      "Areas without reliable electricity",
      "Only in cities",
      "Never for vaccines"
    ],
    "optionsHi": [
      "वित्तीय ऑडिट",
      "समुदाय की भागीदारी से कार्यक्रम का मूल्यांकन",
      "कंपनी ऑडिट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Solar direct drive refrigerators used in remote areas without grid power.",
    "explanationHi": "Community audit।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-793",
    "questionEn": "NRHM was launched by Prime Minister:",
    "questionHi": "Jan Sunwai/Public Hearing क्या है?",
    "optionsEn": [
      "Atal Bihari Vajpayee",
      "Manmohan Singh",
      "Narendra Modi",
      "Rajiv Gandhi"
    ],
    "optionsHi": [
      "अदालत",
      "जनता के सामने शिकायतें और समस्याएं सुनने का मंच",
      "केवल सरकारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "NRHM launched in 2005 by PM Manmohan Singh.",
    "explanationHi": "Public grievance forum।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-794",
    "questionEn": "Ayushman Bharat was launched by Prime Minister:",
    "questionHi": "Mera Aspataal (MyHospital) क्या है?",
    "optionsEn": [
      "Atal Bihari Vajpayee",
      "Manmohan Singh",
      "Narendra Modi",
      "Rajiv Gandhi"
    ],
    "optionsHi": [
      "अस्पताल निर्माण",
      "सरकारी अस्पतालों के लिए रोगी प्रतिक्रिया प्रणाली",
      "निजी अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Ayushman Bharat launched in 2018 by PM Narendra Modi.",
    "explanationHi": "Patient feedback system।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-795",
    "questionEn": "National Health Protection Scheme is another name for:",
    "questionHi": "104 Health Helpline क्या है?",
    "optionsEn": [
      "NRHM",
      "PM-JAY",
      "Ayushman Bharat",
      "RSBY"
    ],
    "optionsHi": [
      "आपातकालीन",
      "स्वास्थ्य जानकारी और परामर्श हेल्पलाइन",
      "पुलिस",
      "अग्निशमन"
    ],
    "correctAnswer": 1,
    "explanationEn": "NHPS/PM-JAY is the insurance component of Ayushman Bharat.",
    "explanationHi": "Health information line।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-796",
    "questionEn": "RSBY was replaced by:",
    "questionHi": "108 क्या है?",
    "optionsEn": [
      "NRHM",
      "PM-JAY",
      "ESI",
      "CGHS"
    ],
    "optionsHi": [
      "सामान्य",
      "आपातकालीन एम्बुलेंस सेवा",
      "104",
      "112"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rashtriya Swasthya Bima Yojana was subsumed into PM-JAY.",
    "explanationHi": "Emergency ambulance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-797",
    "questionEn": "CGHS is for:",
    "questionHi": "102 क्या है?",
    "optionsEn": [
      "Rural population",
      "Central government employees",
      "State employees",
      "Private sector"
    ],
    "optionsHi": [
      "पुलिस",
      "गर्भवती महिलाओं के लिए मुफ्त परिवहन सेवा",
      "अग्निशमन",
      "108"
    ],
    "correctAnswer": 1,
    "explanationEn": "Central Government Health Scheme provides healthcare to central govt employees.",
    "explanationHi": "Maternal transport।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-798",
    "questionEn": "ESI covers:",
    "questionHi": "1800 Numbers स्वास्थ्य में क्या हैं?",
    "optionsEn": [
      "All citizens",
      "Organized sector workers",
      "Only farmers",
      "Only students"
    ],
    "optionsHi": [
      "भुगतान वाले",
      "टोल-फ्री हेल्पलाइन नंबर",
      "केवल शहरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ESI provides healthcare to organized sector workers and families.",
    "explanationHi": "Free helplines।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-799",
    "questionEn": "National Health Authority implements:",
    "questionHi": "MPHW को कौन से हेल्पलाइन नंबर याद रखने चाहिए?",
    "optionsEn": [
      "NRHM",
      "Ayushman Bharat PM-JAY",
      "All programs",
      "Only research"
    ],
    "optionsHi": [
      "कोई नहीं",
      "104, 108, 102, 181, 112, 14555, Quitline",
      "केवल 100",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "NHA is apex body implementing Ayushman Bharat PM-JAY.",
    "explanationHi": "Important helplines।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-800",
    "questionEn": "Ayushman Bharat Health Account (ABHA) is:",
    "questionHi": "जन स्वास्थ्य में MPHW का सबसे महत्वपूर्ण गुण क्या है?",
    "optionsEn": [
      "Bank account",
      "Unique health ID",
      "Insurance card",
      "Hospital ID"
    ],
    "optionsHi": [
      "केवल ज्ञान",
      "समुदाय के प्रति समर्पण और सेवा भावना",
      "केवल वेतन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ABHA (earlier Health ID) is 14-digit unique identifier for health records.",
    "explanationHi": "Dedication to community।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Comprehensive Review",
    "tags": [
      "comprehensive-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-801",
    "questionEn": "Digital health includes:",
    "questionHi": "National Health Mission (NHM) में कौन से घटक शामिल हैं?",
    "optionsEn": [
      "Only telemedicine",
      "mHealth, telemedicine, health informatics",
      "Only paper records",
      "Only hospital systems"
    ],
    "optionsHi": [
      "केवल NRHM",
      "NRHM, NUHM, और सहायक प्रणालियां",
      "केवल NUHM",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Digital health encompasses mobile health, telemedicine, EHR, and health informatics.",
    "explanationHi": "NHM components।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-802",
    "questionEn": "mHealth refers to:",
    "questionHi": "NRHM (National Rural Health Mission) कब शुरू हुआ?",
    "optionsEn": [
      "Men's health",
      "Mobile health applications",
      "Mental health",
      "Maternal health"
    ],
    "optionsHi": [
      "2000",
      "2005",
      "2010",
      "2015"
    ],
    "correctAnswer": 1,
    "explanationEn": "mHealth: use of mobile devices and apps for health services and information.",
    "explanationHi": "NRHM launch year।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-803",
    "questionEn": "Telemedicine is especially useful for:",
    "questionHi": "NUHM (National Urban Health Mission) का उद्देश्य क्या है?",
    "optionsEn": [
      "Surgery",
      "Remote consultations and follow-ups",
      "Emergency surgery",
      "Blood transfusion"
    ],
    "optionsHi": [
      "ग्रामीण स्वास्थ्य",
      "शहरी गरीबों को स्वास्थ्य सेवाएं",
      "केवल अमीरों को",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Telemedicine enables healthcare delivery to remote areas without physical travel.",
    "explanationHi": "Urban poor health।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-804",
    "questionEn": "Aarogya Setu app was developed for:",
    "questionHi": "UPHC (Urban Primary Health Centre) क्या है?",
    "optionsEn": [
      "Banking",
      "COVID-19 contact tracing",
      "Education",
      "Entertainment"
    ],
    "optionsHi": [
      "ग्रामीण केंद्र",
      "शहरी क्षेत्रों में प्राथमिक स्वास्थ्य केंद्र",
      "जिला अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aarogya Setu: COVID contact tracing and health status app launched in 2020.",
    "explanationHi": "Urban PHC।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-805",
    "questionEn": "RCH portal tracks:",
    "questionHi": "U-CHC (Urban Community Health Centre) क्या है?",
    "optionsEn": [
      "Road accidents",
      "Reproductive Child Health services",
      "Research data",
      "Revenue collection"
    ],
    "optionsHi": [
      "ग्रामीण CHC",
      "शहरी क्षेत्रों में सामुदायिक स्वास्थ्य केंद्र",
      "निजी अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "RCH portal: Mother and Child Tracking System for MCH services.",
    "explanationHi": "Urban CHC।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-806",
    "questionEn": "ANMOL app is used by:",
    "questionHi": "Mahila Arogya Samiti (MAS) क्या है?",
    "optionsEn": [
      "Doctors",
      "ANMs for service delivery",
      "Patients",
      "Pharmacists"
    ],
    "optionsHi": [
      "पुरुष समिति",
      "शहरी स्लम में महिला स्वास्थ्य समिति (50-100 परिवार)",
      "ग्रामीण समिति",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ANMOL (ANM Online): mobile app for ANMs to record service delivery.",
    "explanationHi": "Urban women's health committee।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-807",
    "questionEn": "Nikshay is the portal for:",
    "questionHi": "Link Worker NUHM में कौन है?",
    "optionsEn": [
      "Malaria",
      "TB case notification",
      "HIV",
      "Cancer"
    ],
    "optionsHi": [
      "ANM",
      "शहरी ASHA - समुदाय और स्वास्थ्य सेवाओं के बीच कड़ी",
      "डॉक्टर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Nikshay: web-based TB notification and case management system.",
    "explanationHi": "Urban ASHA।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-808",
    "questionEn": "IHIP stands for:",
    "questionHi": "Slum Population के स्वास्थ्य चुनौतियां क्या हैं?",
    "optionsEn": [
      "Indian Health Insurance Programme",
      "Integrated Health Information Platform",
      "International Health Initiative Programme",
      "Internal Health Improvement Plan"
    ],
    "optionsHi": [
      "कोई चुनौती नहीं",
      "भीड़भाड़, खराब स्वच्छता, संक्रामक रोग, पहुंच की कमी",
      "केवल NCDs",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "IHIP is the updated platform for disease surveillance replacing IDSP portal.",
    "explanationHi": "Slum health challenges।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-809",
    "questionEn": "National Digital Health Mission was launched in:",
    "questionHi": "Urban Health Index में क्या शामिल है?",
    "optionsEn": [
      "2018",
      "2020",
      "2022",
      "2015"
    ],
    "optionsHi": [
      "केवल जनसंख्या",
      "स्वास्थ्य परिणाम, सेवा उपयोग, पर्यावरण संकेतक",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "NDHM (now ABDM) launched August 2020 for digital health ecosystem.",
    "explanationHi": "Urban health measurement।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-810",
    "questionEn": "ABDM stands for:",
    "questionHi": "Rashtriya Swasthya Bima Yojana (RSBY) क्या थी?",
    "optionsEn": [
      "Ayushman Bharat Digital Mission",
      "All Basic Digital Medicine",
      "Advanced Biomedical Data Management",
      "Assisted Birth Digital Monitoring"
    ],
    "optionsHi": [
      "वेतन योजना",
      "BPL परिवारों के लिए स्वास्थ्य बीमा (अब PM-JAY में)",
      "शिक्षा योजना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "ABDM creates digital health ecosystem with health IDs, records, registries.",
    "explanationHi": "Previous health insurance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-811",
    "questionEn": "Health Facility Registry under ABDM contains:",
    "questionHi": "Ayushman Bharat की दो पहलें क्या हैं?",
    "optionsEn": [
      "Patient records",
      "List of all health facilities",
      "Drug inventory",
      "Staff roster"
    ],
    "optionsHi": [
      "दवाई और सर्जरी",
      "Health and Wellness Centres (HWC) और PM-JAY",
      "केवल बीमा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HFR: comprehensive database of all health facilities in India.",
    "explanationHi": "AB components।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-812",
    "questionEn": "Healthcare Professionals Registry contains:",
    "questionHi": "HWC (Health and Wellness Centre) में कितनी सेवाएं मिलती हैं?",
    "optionsEn": [
      "Patient list",
      "Registered doctors and health workers",
      "Medicine list",
      "Disease list"
    ],
    "optionsHi": [
      "5",
      "12 प्रकार की CPHC सेवाएं",
      "3",
      "20"
    ],
    "correctAnswer": 1,
    "explanationEn": "HPR: verified database of healthcare professionals.",
    "explanationHi": "HWC service package।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-813",
    "questionEn": "Personal Health Record under ABDM stores:",
    "questionHi": "PM-JAY में प्रति परिवार कितना कवर है?",
    "optionsEn": [
      "Hospital finances",
      "Individual's health data longitudinally",
      "Population data",
      "Research data"
    ],
    "optionsHi": [
      "1 लाख",
      "5 लाख रुपये प्रति वर्ष",
      "10 लाख",
      "50 हजार"
    ],
    "correctAnswer": 1,
    "explanationEn": "PHR: lifelong health records accessible to individual.",
    "explanationHi": "PM-JAY coverage।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-814",
    "questionEn": "Data privacy in digital health is governed by:",
    "questionHi": "PM-JAY में कितने परिवार कवर हैं?",
    "optionsEn": [
      "No rules exist",
      "IT Act and upcoming data protection laws",
      "Only WHO guidelines",
      "Hospital policy only"
    ],
    "optionsHi": [
      "1 करोड़",
      "लगभग 10.74 करोड़ परिवार (50 करोड़ लाभार्थी)",
      "5 करोड़",
      "20 करोड़"
    ],
    "correctAnswer": 1,
    "explanationEn": "Health data privacy under IT Act 2000 and Digital Personal Data Protection Act.",
    "explanationHi": "PM-JAY beneficiaries।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-815",
    "questionEn": "Evidence-based public health uses:",
    "questionHi": "PM-JAY में कौन से उपचार कवर हैं?",
    "optionsEn": [
      "Opinions only",
      "Best available research evidence for decisions",
      "Tradition only",
      "Political preference"
    ],
    "optionsHi": [
      "केवल OPD",
      "द्वितीयक और तृतीयक स्तर के अस्पताल उपचार",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "EBPH integrates best evidence, practitioner expertise, community preferences.",
    "explanationHi": "Secondary and tertiary care।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-816",
    "questionEn": "Systematic review is:",
    "questionHi": "PM-JAY में Pre-Existing Diseases कवर हैं?",
    "optionsEn": [
      "Quick opinion",
      "Rigorous synthesis of all relevant studies",
      "Single study",
      "Expert opinion"
    ],
    "optionsHi": [
      "नहीं",
      "हां, Day 1 से",
      "1 वर्ष बाद",
      "कभी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Systematic reviews comprehensively identify, appraise, synthesize research evidence.",
    "explanationHi": "Pre-existing coverage।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-817",
    "questionEn": "Randomized Controlled Trial is considered:",
    "questionHi": "PM-JAY में Portability क्या है?",
    "optionsEn": [
      "Weak evidence",
      "Gold standard for effectiveness",
      "Opinion-based",
      "Observational"
    ],
    "optionsHi": [
      "कोई Portability नहीं",
      "देश के किसी भी empanelled अस्पताल में इलाज",
      "केवल राज्य में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "RCTs minimize bias; considered strongest evidence for intervention effectiveness.",
    "explanationHi": "Pan-India coverage।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-818",
    "questionEn": "Cochrane Library provides:",
    "questionHi": "Empanelled Hospital क्या है?",
    "optionsEn": [
      "Textbooks",
      "Systematic reviews of healthcare interventions",
      "Newspapers",
      "Magazines"
    ],
    "optionsHi": [
      "कोई भी अस्पताल",
      "PM-JAY के तहत सूचीबद्ध और मान्यता प्राप्त अस्पताल",
      "केवल सरकारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cochrane Library: collection of systematic reviews for evidence-based healthcare.",
    "explanationHi": "Registered hospitals।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-819",
    "questionEn": "Implementation science studies:",
    "questionHi": "Ayushman Card क्या है?",
    "optionsEn": [
      "New drugs only",
      "How to translate evidence into practice",
      "Basic science only",
      "Historical events"
    ],
    "optionsHi": [
      "ATM Card",
      "PM-JAY के तहत स्वास्थ्य सेवाओं का पहचान पत्र",
      "राशन कार्ड",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Implementation science: methods to adopt evidence-based practices in real settings.",
    "explanationHi": "Health ID card।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-820",
    "questionEn": "Quality improvement in healthcare uses:",
    "questionHi": "ABDM (Ayushman Bharat Digital Mission) का उद्देश्य क्या है?",
    "optionsEn": [
      "Only inspection",
      "PDSA cycles and continuous improvement",
      "Punishment only",
      "No methodology"
    ],
    "optionsHi": [
      "पेपर रिकॉर्ड",
      "स्वास्थ्य डेटा का डिजिटलीकरण और इंटरऑपरेबिलिटी",
      "केवल बीमा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "QI uses Plan-Do-Study-Act cycles for continuous improvement.",
    "explanationHi": "Digital health।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-821",
    "questionEn": "PDSA stands for:",
    "questionHi": "ABHA (Ayushman Bharat Health Account) क्या है?",
    "optionsEn": [
      "Public Disease Surveillance Action",
      "Plan-Do-Study-Act",
      "Primary Disease Service Area",
      "Patient Data System Analysis"
    ],
    "optionsHi": [
      "बैंक खाता",
      "14 अंकों की स्वास्थ्य पहचान संख्या",
      "Aadhaar",
      "PAN"
    ],
    "correctAnswer": 1,
    "explanationEn": "PDSA cycle: iterative approach to testing and implementing changes.",
    "explanationHi": "Health ID number।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-822",
    "questionEn": "Patient safety focuses on:",
    "questionHi": "Health Information Exchange (HIE) क्या है?",
    "optionsEn": [
      "Cost reduction only",
      "Preventing harm from healthcare itself",
      "Profit increase",
      "Staff comfort only"
    ],
    "optionsHi": [
      "कोई आदान-प्रदान नहीं",
      "विभिन्न स्वास्थ्य प्रदाताओं के बीच डेटा साझा करना",
      "केवल एक अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Patient safety: preventing adverse events and harm from healthcare delivery.",
    "explanationHi": "Data sharing।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-823",
    "questionEn": "Adverse event in healthcare is:",
    "questionHi": "Personal Health Record (PHR) क्या है?",
    "optionsEn": [
      "Expected outcome",
      "Unintended harm from care, not the disease",
      "Normal healing",
      "Good outcome"
    ],
    "optionsHi": [
      "अस्पताल का रिकॉर्ड",
      "व्यक्ति के स्वास्थ्य का डिजिटल रिकॉर्ड",
      "सरकारी रिकॉर्ड",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adverse event: injury/harm caused by medical management, not underlying disease.",
    "explanationHi": "Personal health data।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-824",
    "questionEn": "Medication error is:",
    "questionHi": "Electronic Health Record (EHR) क्या है?",
    "optionsEn": [
      "Correct prescription",
      "Any error in prescribing, dispensing, administering drugs",
      "Normal practice",
      "Patient preference"
    ],
    "optionsHi": [
      "कागज़ी रिकॉर्ड",
      "स्वास्थ्य सुविधा का डिजिटल रोगी रिकॉर्ड",
      "व्यक्तिगत डायरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Medication errors can occur at any stage of medication use process.",
    "explanationHi": "Facility health record।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-825",
    "questionEn": "Hospital-acquired infection is also called:",
    "questionHi": "Health Facility Registry (HFR) क्या है?",
    "optionsEn": [
      "Community infection",
      "Nosocomial infection",
      "Genetic disease",
      "Chronic disease"
    ],
    "optionsHi": [
      "बीमा",
      "सभी स्वास्थ्य सुविधाओं का मानक डेटाबेस",
      "केवल सरकारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HAI/nosocomial infection: infection acquired during hospital stay.",
    "explanationHi": "Facility database।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-826",
    "questionEn": "Healthcare-associated infection can be reduced by:",
    "questionHi": "Healthcare Professionals Registry (HPR) क्या है?",
    "optionsEn": [
      "More antibiotics",
      "Hand hygiene and standard precautions",
      "Longer hospital stay",
      "Less cleaning"
    ],
    "optionsHi": [
      "मरीज़ों का",
      "स्वास्थ्य पेशेवरों का मानक डेटाबेस",
      "केवल डॉक्टर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HAIs reduced by hand hygiene, standard precautions, aseptic techniques.",
    "explanationHi": "Professional database।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-827",
    "questionEn": "Surgical site infection prevention includes:",
    "questionHi": "CoWIN क्या था?",
    "optionsEn": [
      "No preparation",
      "Skin preparation, prophylactic antibiotics, sterile technique",
      "Longer surgery",
      "More visitors"
    ],
    "optionsHi": [
      "बीमारी",
      "COVID-19 टीकाकरण प्रबंधन पोर्टल",
      "दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SSI prevention: pre-op preparation, timely antibiotics, sterile technique.",
    "explanationHi": "Vaccination portal।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-828",
    "questionEn": "Five moments of hand hygiene include:",
    "questionHi": "e-Sanjeevani क्या है?",
    "optionsEn": [
      "Only before patient contact",
      "Before patient, after patient, after touching environment, etc.",
      "Only after toilet",
      "Never needed"
    ],
    "optionsHi": [
      "दवाई",
      "राष्ट्रीय टेलीमेडिसिन सेवा",
      "बीमा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WHO 5 moments: before patient contact, before aseptic procedure, after body fluid exposure, after patient contact, after touching surroundings.",
    "explanationHi": "Telemedicine platform।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-829",
    "questionEn": "Alcohol-based hand rub is effective against:",
    "questionHi": "e-Sanjeevani OPD क्या है?",
    "optionsEn": [
      "No organisms",
      "Most bacteria and viruses",
      "Only bacteria",
      "Nothing"
    ],
    "optionsHi": [
      "भर्ती सेवा",
      "Patient-to-Doctor टेलीकंसल्टेशन",
      "डॉक्टर से डॉक्टर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ABHR effective against most pathogens; quick and convenient.",
    "explanationHi": "Patient teleconsultation।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-830",
    "questionEn": "When should soap and water be used instead of ABHR?",
    "questionHi": "e-Sanjeevani HWC क्या है?",
    "optionsEn": [
      "Never",
      "When hands are visibly soiled",
      "Always",
      "Only at home"
    ],
    "optionsHi": [
      "Patient-to-Doctor",
      "Hub and Spoke टेलीमेडिसिन - HWC से विशेषज्ञ तक",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Use soap and water when hands visibly dirty or contaminated.",
    "explanationHi": "HWC teleconsultation।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-831",
    "questionEn": "National Quality Assurance Standards for healthcare have:",
    "questionHi": "Nikshay क्या है?",
    "optionsEn": [
      "No standards",
      "8 areas of concern",
      "Only 1 standard",
      "100 standards"
    ],
    "optionsHi": [
      "TB दवाई",
      "TB रोगियों के प्रबंधन का पोर्टल",
      "HIV पोर्टल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "NQAS: 8 areas including service provision, patient rights, infection control, etc.",
    "explanationHi": "TB management portal।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-832",
    "questionEn": "NABH stands for:",
    "questionHi": "Nikshay Poshan Yojana क्या है?",
    "optionsEn": [
      "National Accreditation Board for Hospitals",
      "National Association of Basic Health",
      "New Approach to Better Healthcare",
      "National Alliance for Better Hospitals"
    ],
    "optionsHi": [
      "TB उपचार",
      "TB रोगियों को पोषण सहायता (Rs 500/माह)",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "NABH: constituent board of QCI for hospital accreditation.",
    "explanationHi": "TB nutrition support।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-833",
    "questionEn": "Kayakalp award is for:",
    "questionHi": "eVIN क्या है?",
    "optionsEn": [
      "Research",
      "Cleanliness and hygiene in public health facilities",
      "Sports",
      "Education"
    ],
    "optionsHi": [
      "विटामिन",
      "Electronic Vaccine Intelligence Network - वैक्सीन स्टॉक प्रबंधन",
      "बीमारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Kayakalp: national award for cleanliness and hygiene in public health facilities.",
    "explanationHi": "Vaccine tracking।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-834",
    "questionEn": "Mera Aspataal is:",
    "questionHi": "RCH (Reproductive and Child Health) Portal क्या है?",
    "optionsEn": [
      "New hospital",
      "Patient feedback mechanism",
      "Staff portal",
      "Drug supply system"
    ],
    "optionsHi": [
      "बीमा",
      "मातृ-शिशु स्वास्थ्य सेवाओं का डिजिटल प्लेटफॉर्म",
      "TB पोर्टल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mera Aspataal: patient feedback system for public health facilities.",
    "explanationHi": "MCH services portal।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-835",
    "questionEn": "Health equity means:",
    "questionHi": "ANMOL (ANM Online) App क्या है?",
    "optionsEn": [
      "Everyone gets same treatment",
      "Everyone has opportunity to attain full health potential",
      "Only rich get treatment",
      "No healthcare"
    ],
    "optionsHi": [
      "गेम",
      "ANM के लिए डेटा संग्रह और प्रबंधन ऐप",
      "सोशल मीडिया",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Health equity: absence of unfair, avoidable differences in health status.",
    "explanationHi": "ANM mobile app।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-836",
    "questionEn": "Social gradient in health means:",
    "questionHi": "POSHAN Tracker क्या है?",
    "optionsEn": [
      "No relationship",
      "Lower social position = worse health outcomes",
      "Higher income = worse health",
      "Random distribution"
    ],
    "optionsHi": [
      "खेल",
      "पोषण कार्यक्रमों की निगरानी के लिए ऐप",
      "मौसम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Social gradient: health improves with each step up socioeconomic ladder.",
    "explanationHi": "Nutrition tracking app।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-837",
    "questionEn": "Vulnerable populations in health include:",
    "questionHi": "Kilkari क्या है?",
    "optionsEn": [
      "Only rich people",
      "Poor, elderly, children, disabled, minorities",
      "Only hospital staff",
      "No one is vulnerable"
    ],
    "optionsHi": [
      "बच्चे का नाम",
      "गर्भवती महिलाओं के लिए IVR आधारित स्वास्थ्य संदेश",
      "दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vulnerable groups face higher health risks due to social/economic factors.",
    "explanationHi": "Audio health messages।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-838",
    "questionEn": "Gender mainstreaming in health means:",
    "questionHi": "Mobile Academy क्या है?",
    "optionsEn": [
      "Ignoring gender",
      "Considering gender impact in all health policies",
      "Only women's health",
      "Only men's health"
    ],
    "optionsHi": [
      "स्कूल",
      "ASHA/AWW के लिए मोबाइल प्रशिक्षण पाठ्यक्रम",
      "कॉलेज",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Gender mainstreaming: integrate gender perspectives in all health strategies.",
    "explanationHi": "Mobile training।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-839",
    "questionEn": "Tribal health is a concern because:",
    "questionHi": "Swasth Bharat क्या है?",
    "optionsEn": [
      "No issues exist",
      "Higher disease burden and lower access to services",
      "Better than urban areas",
      "Only mental health issues"
    ],
    "optionsHi": [
      "अस्पताल",
      "स्वास्थ्य जागरूकता के लिए सरकारी मोबाइल ऐप",
      "बीमा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tribal populations face disparities in health indicators and service access.",
    "explanationHi": "Health awareness app।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-840",
    "questionEn": "Urban health challenges include:",
    "questionHi": "India Fights Dengue App क्या है?",
    "optionsEn": [
      "No challenges",
      "Slum health, pollution, non-communicable diseases",
      "Only rural issues",
      "No NCDs"
    ],
    "optionsHi": [
      "गेम",
      "डेंगू रोकथाम और जागरूकता के लिए ऐप",
      "मौसम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Urban health: NCDs, mental health, pollution, slum conditions, lifestyle diseases.",
    "explanationHi": "Dengue prevention app।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-841",
    "questionEn": "Migrant health issues include:",
    "questionHi": "Jan Aushadhi Scheme क्या है?",
    "optionsEn": [
      "No issues",
      "Access barriers, occupational hazards, social isolation",
      "Better than residents",
      "Only financial issues"
    ],
    "optionsHi": [
      "महंगी दवाइयां",
      "सस्ती जेनेरिक दवाइयों की उपलब्धता",
      "केवल अस्पताल में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Migrants face multiple barriers to healthcare access and occupational risks.",
    "explanationHi": "Affordable medicines।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-842",
    "questionEn": "Global health focuses on:",
    "questionHi": "Jan Aushadhi Kendra क्या है?",
    "optionsEn": [
      "Only one country",
      "Health issues transcending national boundaries",
      "Local issues only",
      "Hospital management"
    ],
    "optionsHi": [
      "महंगी दुकान",
      "सस्ती जेनेरिक दवाइयों की दुकान",
      "केवल सरकारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Global health addresses health issues requiring international cooperation.",
    "explanationHi": "Generic medicine store।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-843",
    "questionEn": "WHO headquarters is in:",
    "questionHi": "Generic Medicine क्या है?",
    "optionsEn": [
      "New York",
      "Geneva",
      "Washington",
      "London"
    ],
    "optionsHi": [
      "ब्रांडेड महंगी",
      "समान गुणवत्ता की सस्ती दवाई (पेटेंट समाप्त)",
      "नकली दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WHO headquartered in Geneva, Switzerland.",
    "explanationHi": "Off-patent medicine।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-844",
    "questionEn": "UNICEF focuses on:",
    "questionHi": "Essential Medicine List (EML) क्या है?",
    "optionsEn": [
      "All ages",
      "Children's health and development",
      "Only elderly",
      "Only research"
    ],
    "optionsHi": [
      "सभी दवाइयां",
      "प्राथमिक स्वास्थ्य जरूरतों के लिए आवश्यक दवाइयों की सूची",
      "महंगी दवाइयां",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "UNICEF works for children's survival, protection, and development.",
    "explanationHi": "Essential drugs list।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-845",
    "questionEn": "World Bank supports health through:",
    "questionHi": "Free Drug Service का जन स्वास्थ्य में क्या महत्व है?",
    "optionsEn": [
      "Only research",
      "Financing and technical assistance",
      "No health support",
      "Only emergencies"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "OOPE कम करना, पहुंच बढ़ाना, उपचार अनुपालन",
      "केवल बचत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "World Bank provides loans, grants, and technical support for health.",
    "explanationHi": "Free medicines importance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-846",
    "questionEn": "Global Fund fights which diseases?",
    "questionHi": "Free Diagnostic Service का क्या महत्व है?",
    "optionsEn": [
      "All NCDs",
      "AIDS, TB, and Malaria",
      "Only cancer",
      "Only diabetes"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "सही निदान, OOPE कम, समय पर उपचार",
      "केवल बचत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Global Fund: largest funder for AIDS, TB, malaria programs globally.",
    "explanationHi": "Free diagnostics importance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-847",
    "questionEn": "Bill & Melinda Gates Foundation focuses on:",
    "questionHi": "NCD Screening कौन करता है?",
    "optionsEn": [
      "Only USA",
      "Global health including vaccines, infectious diseases",
      "Only business",
      "Only education"
    ],
    "optionsHi": [
      "केवल डॉक्टर",
      "MPHW, ANM, ASHA भी कर सकते हैं (CBAC Form)",
      "कोई नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Gates Foundation major funder for global health, especially vaccines and infectious diseases.",
    "explanationHi": "NCD screening by CHWs।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-848",
    "questionEn": "Public health emergency of international concern (PHEIC) is declared by:",
    "questionHi": "CBAC (Community Based Assessment Checklist) में क्या पूछा जाता है?",
    "optionsEn": [
      "Individual countries",
      "WHO Director-General",
      "UN Secretary-General",
      "World Bank"
    ],
    "optionsHi": [
      "केवल नाम",
      "आयु, लिंग, तंबाकू, शराब, कमर माप, शारीरिक गतिविधि, पारिवारिक इतिहास",
      "कुछ नहीं",
      "केवल पता"
    ],
    "correctAnswer": 1,
    "explanationEn": "PHEIC declared by WHO DG under International Health Regulations.",
    "explanationHi": "CBAC questions।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-849",
    "questionEn": "Pandemic preparedness includes:",
    "questionHi": "CBAC Score 4 या अधिक का क्या मतलब है?",
    "optionsEn": [
      "No planning needed",
      "Surveillance, stockpiles, response plans, drills",
      "Only during pandemic",
      "Only vaccines"
    ],
    "optionsHi": [
      "स्वस्थ",
      "NCD का जोखिम - आगे की जांच जरूरी",
      "कोई जोखिम नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Preparedness: surveillance, stockpiles, plans, training, drills before pandemic occurs.",
    "explanationHi": "High risk score।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-850",
    "questionEn": "Epidemic intelligence is:",
    "questionHi": "Population Enumeration MPHW की जिम्मेदारी में क्या है?",
    "optionsEn": [
      "Spy networks",
      "Early detection and assessment of health threats",
      "Hospital security",
      "Drug intelligence"
    ],
    "optionsHi": [
      "केवल गिनती",
      "घर-घर सर्वे, परिवार रजिस्टर, जनसंख्या डेटा",
      "कुछ नहीं",
      "केवल रिपोर्ट"
    ],
    "correctAnswer": 1,
    "explanationEn": "Epidemic intelligence: systematic gathering, analysis of information for early warning.",
    "explanationHi": "Population data collection।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-851",
    "questionEn": "Health impact assessment evaluates:",
    "questionHi": "Eligible Couple Register क्या है?",
    "optionsEn": [
      "Only costs",
      "Potential health effects of policies/projects",
      "Only benefits",
      "Hospital design only"
    ],
    "optionsHi": [
      "केवल विवाहित",
      "परिवार नियोजन के लिए पात्र दंपतियों (15-49 वर्ष) का रिकॉर्ड",
      "सभी जोड़े",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HIA assesses potential health impacts of non-health sector policies.",
    "explanationHi": "EC register।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-852",
    "questionEn": "Health economics studies:",
    "questionHi": "Birth Registration का जन स्वास्थ्य में क्या महत्व है?",
    "optionsEn": [
      "Only hospital finances",
      "Allocation of health resources for maximum benefit",
      "Only drug prices",
      "Only salaries"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "पहचान, अधिकार, योजना, सेवाओं तक पहुंच",
      "केवल प्रमाण पत्र",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Health economics: efficient allocation of limited health resources.",
    "explanationHi": "Birth registration importance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-853",
    "questionEn": "Cost-effectiveness analysis compares:",
    "questionHi": "Death Registration का जन स्वास्थ्य में क्या महत्व है?",
    "optionsEn": [
      "Only costs",
      "Costs relative to health outcomes achieved",
      "Only outcomes",
      "Profits only"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "मृत्यु दर गणना, कारण विश्लेषण, योजना",
      "केवल औपचारिकता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CEA: compares interventions by cost per unit of health outcome.",
    "explanationHi": "Death registration importance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-854",
    "questionEn": "QALY stands for:",
    "questionHi": "MCCD (Medical Certificate of Cause of Death) क्या है?",
    "optionsEn": [
      "Quality Assessment of Life Years",
      "Quality-Adjusted Life Year",
      "Quantified Annual Life Yield",
      "Quick Analysis of Longevity Years"
    ],
    "optionsHi": [
      "जन्म प्रमाण पत्र",
      "मृत्यु का चिकित्सा कारण प्रमाण पत्र",
      "विवाह प्रमाण पत्र",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "QALY: measure combining quantity and quality of life for CEA.",
    "explanationHi": "Cause of death certificate।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-855",
    "questionEn": "DALY stands for:",
    "questionHi": "Verbal Autopsy क्या है?",
    "optionsEn": [
      "Daily Activity Life Years",
      "Disability-Adjusted Life Year",
      "Disease Annual Life Yield",
      "Direct Assessment of Longevity Years"
    ],
    "optionsHi": [
      "शव परीक्षण",
      "मृत्यु का कारण जानने के लिए परिवार से साक्षात्कार",
      "सर्जरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "DALY: measure of disease burden (years lost to death + disability).",
    "explanationHi": "Interview-based cause of death।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-856",
    "questionEn": "Primary healthcare includes:",
    "questionHi": "Civil Registration System (CRS) क्या है?",
    "optionsEn": [
      "Only hospital care",
      "Essential healthcare accessible to all",
      "Only specialist care",
      "Only emergency care"
    ],
    "optionsHi": [
      "सैन्य",
      "जन्म, मृत्यु, विवाह का पंजीकरण तंत्र",
      "केवल मतदान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "PHC: essential, accessible, affordable, community-based healthcare.",
    "explanationHi": "Vital events registration।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-857",
    "questionEn": "Comprehensive primary care includes:",
    "questionHi": "Sample Registration System (SRS) क्या है?",
    "optionsEn": [
      "Only curative",
      "Promotive, preventive, curative, rehabilitative, palliative",
      "Only preventive",
      "Only promotive"
    ],
    "optionsHi": [
      "पूर्ण गणना",
      "नमूना जनसंख्या से जन्म-मृत्यु दर का अनुमान",
      "केवल शहरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Comprehensive PHC addresses full spectrum of health needs.",
    "explanationHi": "Sample vital statistics।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-858",
    "questionEn": "Selective primary care focuses on:",
    "questionHi": "NFHS (National Family Health Survey) क्या है?",
    "optionsEn": [
      "All services",
      "Specific high-impact interventions",
      "Only expensive care",
      "No services"
    ],
    "optionsHi": [
      "जनगणना",
      "स्वास्थ्य और परिवार कल्याण का राष्ट्रीय सर्वेक्षण",
      "केवल जनसंख्या",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Selective PHC prioritizes specific cost-effective interventions.",
    "explanationHi": "National health survey।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-859",
    "questionEn": "GOBI-FFF stands for:",
    "questionHi": "NFHS-5 कब हुआ?",
    "optionsEn": [
      "Government of Basic Initiatives",
      "Growth monitoring, ORS, Breastfeeding, Immunization, Family planning, Food supplements, Female education",
      "General Overview of Basic Information",
      "Group of Basic International Functions"
    ],
    "optionsHi": [
      "2010",
      "2019-21",
      "2015",
      "2025"
    ],
    "correctAnswer": 1,
    "explanationEn": "GOBI-FFF: key child survival interventions in selective PHC approach.",
    "explanationHi": "NFHS-5 period।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-860",
    "questionEn": "Intersectoral coordination means:",
    "questionHi": "NFHS में क्या जानकारी मिलती है?",
    "optionsEn": [
      "Only health ministry working",
      "Different sectors working together for health",
      "No coordination",
      "Only hospitals working"
    ],
    "optionsHi": [
      "केवल जनसंख्या",
      "प्रजनन दर, शिशु मृत्यु, पोषण, टीकाकरण, परिवार नियोजन",
      "केवल आर्थिक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Intersectoral action: collaboration across health, education, water, etc.",
    "explanationHi": "NFHS data points।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-861",
    "questionEn": "Community participation in health means:",
    "questionHi": "DLHS (District Level Household Survey) क्या है?",
    "optionsEn": [
      "Community only receiving services",
      "Community involved in planning and decision-making",
      "No community role",
      "Only paying fees"
    ],
    "optionsHi": [
      "राष्ट्रीय सर्वे",
      "जिला स्तरीय स्वास्थ्य सर्वेक्षण",
      "ग्राम स्तरीय",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Community participation: involvement in planning, implementing, evaluating health services.",
    "explanationHi": "District health survey।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-862",
    "questionEn": "Empowerment in health means:",
    "questionHi": "AHS (Annual Health Survey) क्या था?",
    "optionsEn": [
      "Giving money",
      "Enabling people to control health determinants",
      "Disempowering people",
      "Only provider decisions"
    ],
    "optionsHi": [
      "दैनिक सर्वे",
      "EAG राज्यों में वार्षिक स्वास्थ्य सर्वेक्षण",
      "मासिक सर्वे",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Empowerment: process enabling people to gain control over their health.",
    "explanationHi": "Annual health survey।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-863",
    "questionEn": "Community health workers are effective because:",
    "questionHi": "EAG (Empowered Action Group) States कौन से हैं?",
    "optionsEn": [
      "They cost nothing",
      "They understand local context and are trusted",
      "They are doctors",
      "They have no training"
    ],
    "optionsHi": [
      "दक्षिणी राज्य",
      "8 राज्य: UP, MP, Bihar, Jharkhand, Odisha, Rajasthan, Chhattisgarh, Uttarakhand",
      "पूर्वोत्तर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CHWs effective due to cultural understanding, trust, accessibility.",
    "explanationHi": "High focus states।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-864",
    "questionEn": "Task shifting means:",
    "questionHi": "EAG States पर विशेष ध्यान क्यों है?",
    "optionsEn": [
      "Moving furniture",
      "Delegating tasks to less specialized workers",
      "Only specialists doing all work",
      "No work distribution"
    ],
    "optionsHi": [
      "अमीर हैं",
      "खराब स्वास्थ्य संकेतक, उच्च जनसंख्या वृद्धि",
      "बेहतर संकेतक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Task shifting: rational redistribution of tasks to address workforce shortages.",
    "explanationHi": "High burden states।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-865",
    "questionEn": "Health workforce crisis refers to:",
    "questionHi": "Aspirational Districts Programme क्या है?",
    "optionsEn": [
      "Too many workers",
      "Shortage and maldistribution of health workers",
      "Perfect balance",
      "Only rural surplus"
    ],
    "optionsHi": [
      "विकसित जिले",
      "पिछड़े जिलों के तेज़ विकास के लिए NITI Aayog पहल",
      "केवल शहरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Crisis: global shortage and uneven distribution of health workers.",
    "explanationHi": "District development program।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-866",
    "questionEn": "Brain drain in health refers to:",
    "questionHi": "Health Index क्या है?",
    "optionsEn": [
      "Memory loss",
      "Migration of health workers to other countries",
      "Mental illness",
      "Drug use"
    ],
    "optionsHi": [
      "केवल मृत्यु दर",
      "राज्यों की स्वास्थ्य प्रदर्शन तुलना का उपकरण",
      "केवल जन्म दर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Brain drain: emigration of trained health workers from developing countries.",
    "explanationHi": "State health comparison।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-867",
    "questionEn": "Continuing medical education is:",
    "questionHi": "NITI Aayog Health Index में कौन से डोमेन हैं?",
    "optionsEn": [
      "Only for students",
      "Lifelong learning for practicing professionals",
      "One-time training",
      "Only for nurses"
    ],
    "optionsHi": [
      "केवल एक",
      "Health Outcomes, Governance & Information, Key Inputs/Processes",
      "केवल दो",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CME: ongoing education to maintain and improve competence.",
    "explanationHi": "Health index domains।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-868",
    "questionEn": "Competency-based medical education focuses on:",
    "questionHi": "SDG (Sustainable Development Goals) में स्वास्थ्य कौन सा Goal है?",
    "optionsEn": [
      "Time spent",
      "Demonstrated abilities and outcomes",
      "Attendance only",
      "Textbook memorization"
    ],
    "optionsHi": [
      "Goal 1",
      "Goal 3 - Good Health and Well-being",
      "Goal 5",
      "Goal 10"
    ],
    "correctAnswer": 1,
    "explanationEn": "CBME: education based on demonstrating competencies, not just time.",
    "explanationHi": "SDG health goal।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-869",
    "questionEn": "Simulation-based learning uses:",
    "questionHi": "SDG 3 के प्रमुख लक्ष्य क्या हैं?",
    "optionsEn": [
      "Real patients always",
      "Mannequins and virtual patients for practice",
      "No practice",
      "Only lectures"
    ],
    "optionsHi": [
      "केवल मृत्यु कम करना",
      "MMR, U5MR, NMR कम करना, NCD नियंत्रण, UHC, सभी के लिए स्वास्थ्य",
      "केवल बीमा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Simulation: safe environment to practice skills without patient risk.",
    "explanationHi": "SDG 3 targets।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-870",
    "questionEn": "Health technology assessment evaluates:",
    "questionHi": "SDG के अनुसार MMR 2030 तक कितना होना चाहिए?",
    "optionsEn": [
      "Only cost",
      "Safety, effectiveness, cost, ethical/social implications",
      "Only safety",
      "Nothing"
    ],
    "optionsHi": [
      "140",
      "70 प्रति 1 लाख जीवित जन्म से कम",
      "200",
      "100"
    ],
    "correctAnswer": 1,
    "explanationEn": "HTA: comprehensive evaluation of health technologies for decision-making.",
    "explanationHi": "SDG MMR target।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-871",
    "questionEn": "Essential medicines list is:",
    "questionHi": "SDG के अनुसार U5MR 2030 तक कितना होना चाहिए?",
    "optionsEn": [
      "All medicines available",
      "Priority medicines meeting population health needs",
      "Only expensive drugs",
      "Only traditional medicines"
    ],
    "optionsHi": [
      "50",
      "25 प्रति 1000 जीवित जन्म से कम",
      "100",
      "75"
    ],
    "correctAnswer": 1,
    "explanationEn": "EML: medicines meeting priority health needs, available at affordable cost.",
    "explanationHi": "SDG U5MR target।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-872",
    "questionEn": "Generic medicines are:",
    "questionHi": "SDG के अनुसार NMR 2030 तक कितना होना चाहिए?",
    "optionsEn": [
      "Ineffective",
      "Same active ingredient as brand-name at lower cost",
      "Always inferior",
      "Never available"
    ],
    "optionsHi": [
      "20",
      "12 प्रति 1000 जीवित जन्म से कम",
      "30",
      "25"
    ],
    "correctAnswer": 1,
    "explanationEn": "Generics: same quality and efficacy as brand names but cheaper.",
    "explanationHi": "SDG NMR target।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-873",
    "questionEn": "Drug price control in India is done by:",
    "questionHi": "National Health Policy 2017 का मुख्य उद्देश्य क्या है?",
    "optionsEn": [
      "No control",
      "National Pharmaceutical Pricing Authority",
      "WHO only",
      "Hospitals only"
    ],
    "optionsHi": [
      "केवल बीमा",
      "सभी के लिए सर्वोच्च संभव स्वास्थ्य स्तर प्राप्त करना",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "NPPA regulates prices of essential medicines under DPCO.",
    "explanationHi": "NHP 2017 objective।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-874",
    "questionEn": "Rational use of medicines means:",
    "questionHi": "NHP 2017 के अनुसार स्वास्थ्य पर सरकारी खर्च GDP का कितना होना चाहिए?",
    "optionsEn": [
      "Any use",
      "Right drug, dose, duration for the right patient at lowest cost",
      "Most expensive drugs",
      "No medicines"
    ],
    "optionsHi": [
      "1%",
      "2.5% तक 2025",
      "5%",
      "0.5%"
    ],
    "correctAnswer": 1,
    "explanationEn": "RUM: appropriate prescribing and use of medicines.",
    "explanationHi": "Health expenditure target।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-875",
    "questionEn": "Irrational prescribing includes:",
    "questionHi": "वर्तमान में भारत का स्वास्थ्य खर्च GDP का कितना है?",
    "optionsEn": [
      "Following guidelines",
      "Polypharmacy, wrong drugs, unnecessary injections",
      "Evidence-based practice",
      "Correct dosing"
    ],
    "optionsHi": [
      "3%",
      "लगभग 1.2-1.5%",
      "5%",
      "0.5%"
    ],
    "correctAnswer": 1,
    "explanationEn": "Irrational use: overuse, underuse, misuse, polypharmacy.",
    "explanationHi": "Current health expenditure।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-876",
    "questionEn": "Pharmacovigilance monitors:",
    "questionHi": "Vision 2025 के स्वास्थ्य लक्ष्य क्या हैं?",
    "optionsEn": [
      "Drug prices",
      "Safety of medicines after marketing",
      "Drug manufacturing",
      "Drug advertising"
    ],
    "optionsHi": [
      "कोई लक्ष्य नहीं",
      "MMR<100, NMR<16, U5MR<23, TFR=2.1",
      "केवल जनसंख्या",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pharmacovigilance: detection, assessment, prevention of adverse drug effects.",
    "explanationHi": "Health targets 2025।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-877",
    "questionEn": "Adverse drug reaction reporting in India goes to:",
    "questionHi": "India का वर्तमान MMR (SRS 2020) लगभग कितना है?",
    "optionsEn": [
      "No reporting system",
      "PvPI (Pharmacovigilance Programme of India)",
      "Newspapers only",
      "Social media only"
    ],
    "optionsHi": [
      "200",
      "97 प्रति 1 लाख जीवित जन्म",
      "50",
      "150"
    ],
    "correctAnswer": 1,
    "explanationEn": "PvPI under CDSCO collects and analyzes ADR reports.",
    "explanationHi": "Current MMR।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-878",
    "questionEn": "Medical ethics principles include:",
    "questionHi": "India का वर्तमान IMR (SRS 2020) लगभग कितना है?",
    "optionsEn": [
      "Only profit",
      "Autonomy, beneficence, non-maleficence, justice",
      "Only confidentiality",
      "No principles"
    ],
    "optionsHi": [
      "50",
      "28 प्रति 1000 जीवित जन्म",
      "100",
      "75"
    ],
    "correctAnswer": 1,
    "explanationEn": "Four principles: respect autonomy, do good, do no harm, be fair.",
    "explanationHi": "Current IMR।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-879",
    "questionEn": "Informed consent requires:",
    "questionHi": "India का वर्तमान TFR (NFHS-5) कितना है?",
    "optionsEn": [
      "No information",
      "Full information, understanding, voluntary agreement",
      "Only signature",
      "Force if needed"
    ],
    "optionsHi": [
      "3.0",
      "2.0 (प्रतिस्थापन स्तर के नीचे)",
      "4.0",
      "2.5"
    ],
    "correctAnswer": 1,
    "explanationEn": "Informed consent: information, comprehension, voluntariness, competence.",
    "explanationHi": "Current TFR।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-880",
    "questionEn": "Patient rights include:",
    "questionHi": "Replacement Level Fertility क्या है?",
    "optionsEn": [
      "No rights",
      "Information, consent, confidentiality, dignity",
      "Only free treatment",
      "Only complaint right"
    ],
    "optionsHi": [
      "1.0",
      "2.1 बच्चे प्रति महिला",
      "3.0",
      "4.0"
    ],
    "correctAnswer": 1,
    "explanationEn": "Patient rights: information, informed consent, confidentiality, dignity, second opinion.",
    "explanationHi": "Population replacement rate।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-881",
    "questionEn": "Clinical Establishments Act regulates:",
    "questionHi": "Life Expectancy at Birth India में (2020) लगभग कितना है?",
    "optionsEn": [
      "Only government hospitals",
      "Registration and standards for clinical establishments",
      "Only pharmacies",
      "Only labs"
    ],
    "optionsHi": [
      "60 वर्ष",
      "70 वर्ष (पुरुष 69, महिला 72)",
      "80 वर्ष",
      "55 वर्ष"
    ],
    "correctAnswer": 1,
    "explanationEn": "CEA 2010: mandatory registration and minimum standards for clinical establishments.",
    "explanationHi": "Current life expectancy।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-882",
    "questionEn": "Consumer protection for patients comes under:",
    "questionHi": "India में Full Immunization Coverage (NFHS-5) कितना है?",
    "optionsEn": [
      "No protection",
      "Consumer Protection Act for medical negligence",
      "Only criminal law",
      "No legal remedy"
    ],
    "optionsHi": [
      "50%",
      "76.4% (12-23 माह के बच्चे)",
      "90%",
      "30%"
    ],
    "correctAnswer": 1,
    "explanationEn": "CPA 2019 includes healthcare services; patients can seek redress for negligence.",
    "explanationHi": "Immunization coverage।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-883",
    "questionEn": "Medical negligence requires proving:",
    "questionHi": "India में Institutional Delivery (NFHS-5) कितनी है?",
    "optionsEn": [
      "Only bad outcome",
      "Duty, breach, causation, damage",
      "Only intention",
      "Nothing"
    ],
    "optionsHi": [
      "50%",
      "88.6%",
      "100%",
      "70%"
    ],
    "correctAnswer": 1,
    "explanationEn": "Negligence: duty of care existed, breach occurred, caused harm, damage resulted.",
    "explanationHi": "Hospital delivery rate।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-884",
    "questionEn": "Right to Health is:",
    "questionHi": "India में Stunting (कम लंबाई) प्रतिशत (NFHS-5) कितना है?",
    "optionsEn": [
      "Not a right",
      "Recognized as fundamental human right",
      "Only for rich",
      "Only in some countries"
    ],
    "optionsHi": [
      "50%",
      "35.5% (5 वर्ष से कम)",
      "20%",
      "10%"
    ],
    "correctAnswer": 1,
    "explanationEn": "Right to health recognized in ICESCR; India includes under Article 21.",
    "explanationHi": "Child stunting rate।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-885",
    "questionEn": "Public health law includes:",
    "questionHi": "India में Wasting (कम वजन-लंबाई) प्रतिशत (NFHS-5) कितना है?",
    "optionsEn": [
      "No laws",
      "Epidemic Diseases Act, MTP Act, COTPA, etc.",
      "Only one law",
      "Only criminal law"
    ],
    "optionsHi": [
      "50%",
      "19.3% (5 वर्ष से कम)",
      "5%",
      "30%"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple laws govern public health: Epidemic Diseases Act, FDA, PCPNDT, COTPA, MTP Act.",
    "explanationHi": "Child wasting rate।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-886",
    "questionEn": "Epidemic Diseases Act was enacted in:",
    "questionHi": "India में Anaemia in Women (15-49) प्रतिशत (NFHS-5) कितना है?",
    "optionsEn": [
      "1897",
      "1947",
      "1980",
      "2020"
    ],
    "optionsHi": [
      "30%",
      "57% (गंभीर समस्या)",
      "20%",
      "80%"
    ],
    "correctAnswer": 0,
    "explanationEn": "Epidemic Diseases Act 1897 provides powers to control epidemic outbreaks.",
    "explanationHi": "Women anemia rate।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-887",
    "questionEn": "Food Safety and Standards Authority of India (FSSAI) regulates:",
    "questionHi": "India में Anaemia in Children (6-59 माह) प्रतिशत (NFHS-5) कितना है?",
    "optionsEn": [
      "Only imports",
      "Food safety and standards in India",
      "Only exports",
      "Only restaurants"
    ],
    "optionsHi": [
      "30%",
      "67.1%",
      "20%",
      "50%"
    ],
    "correctAnswer": 1,
    "explanationEn": "FSSAI regulates food safety, standards, labeling in India.",
    "explanationHi": "Child anemia rate।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-888",
    "questionEn": "FSSAI was established under:",
    "questionHi": "Health Transition India में क्या हो रहा है?",
    "optionsEn": [
      "Companies Act",
      "Food Safety and Standards Act 2006",
      "Consumer Protection Act",
      "Health Act"
    ],
    "optionsHi": [
      "कोई बदलाव नहीं",
      "संक्रामक से NCDs की ओर रोग भार का स्थानांतरण",
      "NCDs कम हो रहे",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "FSS Act 2006 established FSSAI for food safety regulation.",
    "explanationHi": "Epidemiological transition।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-889",
    "questionEn": "Food adulteration means:",
    "questionHi": "Demographic Transition India में किस चरण में है?",
    "optionsEn": [
      "Pure food",
      "Adding substances that reduce quality or make food unsafe",
      "Improving food",
      "Food storage"
    ],
    "optionsHi": [
      "पहला",
      "तीसरा/चौथा - घटती जन्म और मृत्यु दर",
      "दूसरा",
      "पांचवां"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adulteration: adding substances that make food impure, unsafe, or inferior.",
    "explanationHi": "Transition stage।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-890",
    "questionEn": "Eat Right Movement promotes:",
    "questionHi": "NCDs भारत में कुल मृत्यु का कितना प्रतिशत हैं?",
    "optionsEn": [
      "Eating more",
      "Safe, healthy, sustainable food",
      "Only expensive food",
      "Fasting only"
    ],
    "optionsHi": [
      "30%",
      "60-65%",
      "10%",
      "90%"
    ],
    "correctAnswer": 1,
    "explanationEn": "FSSAI's Eat Right India movement promotes safe and healthy food choices.",
    "explanationHi": "NCD mortality share।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-891",
    "questionEn": "Trans fat free India target:",
    "questionHi": "Cardiovascular Diseases भारत में मृत्यु का कौन सा प्रमुख कारण है?",
    "optionsEn": [
      "No target",
      "Eliminate industrial trans fat",
      "Increase trans fat",
      "Only labeling"
    ],
    "optionsHi": [
      "पांचवां",
      "पहला",
      "दसवां",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "India aims to eliminate industrial trans fat in food by 2% limit.",
    "explanationHi": "Leading cause of death।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-892",
    "questionEn": "Front-of-pack labeling helps consumers:",
    "questionHi": "COPD भारत में मृत्यु का कौन सा प्रमुख कारण है?",
    "optionsEn": [
      "Nothing",
      "Quickly identify high sugar/salt/fat foods",
      "Confuse consumers",
      "Only for experts"
    ],
    "optionsHi": [
      "पहला",
      "दूसरा",
      "दसवां",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "FOPL: visual symbols for quick identification of nutritional content.",
    "explanationHi": "Second leading cause।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-893",
    "questionEn": "Fortification of food means:",
    "questionHi": "Road Traffic Injuries भारत में एक प्रमुख जन स्वास्थ्य समस्या क्यों है?",
    "optionsEn": [
      "Removing nutrients",
      "Adding essential nutrients to food",
      "Reducing food quantity",
      "Only for special foods"
    ],
    "optionsHi": [
      "समस्या नहीं",
      "उच्च मृत्यु दर, युवा प्रभावित, विकलांगता, आर्थिक नुकसान",
      "कम दुर्घटनाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fortification: adding vitamins/minerals to food to address deficiencies.",
    "explanationHi": "RTI burden।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-894",
    "questionEn": "Double fortified salt contains:",
    "questionHi": "भारत में प्रति वर्ष Road Accidents में लगभग कितनी मृत्यु होती है?",
    "optionsEn": [
      "Only iodine",
      "Iodine and iron",
      "Only iron",
      "No additions"
    ],
    "optionsHi": [
      "10,000",
      "1.5 लाख से अधिक",
      "1,000",
      "10 लाख"
    ],
    "correctAnswer": 1,
    "explanationEn": "DFS contains both iodine and iron to address multiple deficiencies.",
    "explanationHi": "RTI deaths annually।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-895",
    "questionEn": "HACCP in food safety stands for:",
    "questionHi": "Mental Health भारत में एक जन स्वास्थ्य प्राथमिकता क्यों है?",
    "optionsEn": [
      "Healthy And Clean Cooking Process",
      "Hazard Analysis Critical Control Points",
      "Hospital Associated Cooking Protocol",
      "High Alert Catering Control Plan"
    ],
    "optionsHi": [
      "प्राथमिकता नहीं",
      "उच्च भार, कलंक, संसाधन की कमी, आत्महत्या दर",
      "कोई समस्या नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HACCP: systematic approach to identify and control food safety hazards.",
    "explanationHi": "Mental health importance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-896",
    "questionEn": "Food poisoning is most commonly caused by:",
    "questionHi": "NMHP (National Mental Health Programme) कब शुरू हुआ?",
    "optionsEn": [
      "Chemicals only",
      "Bacteria like Salmonella, Staphylococcus",
      "Viruses only",
      "Metals only"
    ],
    "optionsHi": [
      "2000",
      "1982",
      "1990",
      "2010"
    ],
    "correctAnswer": 1,
    "explanationEn": "Bacterial food poisoning most common: Salmonella, Staph, E. coli, Clostridium.",
    "explanationHi": "NMHP launch।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-897",
    "questionEn": "Five keys to safer food include:",
    "questionHi": "DMHP (District Mental Health Programme) क्या है?",
    "optionsEn": [
      "Only cooking",
      "Keep clean, separate, cook thoroughly, safe temperatures, safe water",
      "Only refrigeration",
      "Only washing"
    ],
    "optionsHi": [
      "राष्ट्रीय",
      "जिला स्तर पर मानसिक स्वास्थ्य सेवाएं",
      "केवल शहरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WHO 5 keys: cleanliness, separation, cooking, temperatures, safe water.",
    "explanationHi": "District mental health।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-898",
    "questionEn": "Safe food storage temperature is:",
    "questionHi": "Mental Healthcare Act 2017 का मुख्य प्रावधान क्या है?",
    "optionsEn": [
      "Room temperature always",
      "Cold chain (<5°C for cold foods, >60°C for hot)",
      "Any temperature",
      "Only freezing"
    ],
    "optionsHi": [
      "कोई अधिकार नहीं",
      "मानसिक स्वास्थ्य देखभाल का अधिकार",
      "केवल बीमा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Danger zone 5-60°C; keep cold foods cold, hot foods hot.",
    "explanationHi": "Right to mental healthcare।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-899",
    "questionEn": "Street food safety is addressed through:",
    "questionHi": "iCall, Vandrevala Foundation क्या हैं?",
    "optionsEn": [
      "Ignoring it",
      "Training vendors, hygiene standards, licensing",
      "Banning all street food",
      "No intervention"
    ],
    "optionsHi": [
      "अस्पताल",
      "मानसिक स्वास्थ्य हेल्पलाइन",
      "बीमा कंपनी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Street food safety: training, hygiene, licensing, inspection.",
    "explanationHi": "Mental health helplines।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-900",
    "questionEn": "World Food Safety Day is observed on:",
    "questionHi": "जन स्वास्थ्य में MPHW का योगदान सबसे महत्वपूर्ण किस स्तर पर है?",
    "optionsEn": [
      "March 22",
      "June 7",
      "October 16",
      "December 1"
    ],
    "optionsHi": [
      "तृतीयक",
      "प्राथमिक और समुदाय स्तर",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "World Food Safety Day on June 7 raises awareness about food safety.",
    "explanationHi": "PHC and community level।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Applied Public Health",
    "tags": [
      "applied-public-health"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-901",
    "questionEn": "The most cost-effective health intervention is:",
    "questionHi": "TB (Tuberculosis) भारत में एक प्रमुख जन स्वास्थ्य समस्या क्यों है?",
    "optionsEn": [
      "Organ transplant",
      "Immunization",
      "Heart surgery",
      "Dialysis"
    ],
    "optionsHi": [
      "समस्या नहीं",
      "उच्च भार, MDR-TB, HIV सह-संक्रमण, आर्थिक प्रभाव",
      "कम मामले",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Immunization is among most cost-effective interventions with high impact at low cost.",
    "explanationHi": "TB burden in India।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-902",
    "questionEn": "80% of health outcomes are determined by:",
    "questionHi": "NTEP (National Tuberculosis Elimination Programme) का लक्ष्य क्या है?",
    "optionsEn": [
      "Hospitals",
      "Doctors",
      "Social and environmental factors",
      "Medicines"
    ],
    "optionsHi": [
      "2050 तक",
      "2025 तक TB उन्मूलन",
      "कभी नहीं",
      "2030"
    ],
    "correctAnswer": 2,
    "explanationEn": "Social determinants (income, education, environment) determine majority of health outcomes.",
    "explanationHi": "TB elimination target।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-903",
    "questionEn": "Best time for health education is:",
    "questionHi": "NVBDCP का पूरा नाम क्या है?",
    "optionsEn": [
      "Only during illness",
      "Every contact with community",
      "Only in hospitals",
      "Never"
    ],
    "optionsHi": [
      "वायरस कार्यक्रम",
      "National Vector Borne Disease Control Programme",
      "पोषण कार्यक्रम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Use every interaction as opportunity for health education.",
    "explanationHi": "Vector disease program।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-904",
    "questionEn": "Primary prevention saves more lives than:",
    "questionHi": "NVBDCP में कौन से रोग शामिल हैं?",
    "optionsEn": [
      "Nothing",
      "Secondary and tertiary prevention combined",
      "Only treatment",
      "Only rehabilitation"
    ],
    "optionsHi": [
      "केवल मलेरिया",
      "मलेरिया, डेंगू, चिकनगुनिया, JE, फाइलेरिया, काला-अजार",
      "केवल डेंगू",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Prevention before disease is more effective than early detection or treatment.",
    "explanationHi": "VBDs covered।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-905",
    "questionEn": "Community participation leads to:",
    "questionHi": "Malaria Elimination का भारत का लक्ष्य क्या है?",
    "optionsEn": [
      "Failure",
      "Sustainability and ownership of health programs",
      "Increased costs",
      "No difference"
    ],
    "optionsHi": [
      "2050",
      "2030 तक",
      "कभी नहीं",
      "2025"
    ],
    "correctAnswer": 1,
    "explanationEn": "Community involvement increases ownership, sustainability, and effectiveness.",
    "explanationHi": "Malaria elimination target।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-906",
    "questionEn": "MPHW is part of which level of healthcare?",
    "questionHi": "NLEP (National Leprosy Eradication Programme) का लक्ष्य क्या है?",
    "optionsEn": [
      "Tertiary",
      "Secondary",
      "Primary",
      "Super-specialty"
    ],
    "optionsHi": [
      "नियंत्रण",
      "कुष्ठ रोग उन्मूलन (PR<1/10000)",
      "बढ़ाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "MPHW works at Sub-Centre, the most peripheral primary healthcare level.",
    "explanationHi": "Leprosy elimination।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-907",
    "questionEn": "The most important quality of a health worker is:",
    "questionHi": "NACP (National AIDS Control Programme) का वर्तमान चरण क्या है?",
    "optionsEn": [
      "High salary",
      "Empathy and commitment to community",
      "Working in city",
      "Only technical skills"
    ],
    "optionsHi": [
      "NACP-I",
      "NACP-V",
      "NACP-II",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Technical skills matter, but empathy and dedication are essential for effectiveness.",
    "explanationHi": "Current AIDS program phase।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-908",
    "questionEn": "Health data should be used for:",
    "questionHi": "HIV/AIDS के लिए 95-95-95 Target क्या है?",
    "optionsEn": [
      "Decoration",
      "Decision-making and action",
      "Filing only",
      "Reporting only"
    ],
    "optionsHi": [
      "50% लक्ष्य",
      "95% निदान, 95% उपचार पर, 95% वायरल सप्रेशन",
      "केवल निदान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Data valuable only when used for decisions and improving services.",
    "explanationHi": "UNAIDS targets।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-909",
    "questionEn": "Early reporting of outbreaks is important because:",
    "questionHi": "NPCB (National Programme for Control of Blindness) का उद्देश्य क्या है?",
    "optionsEn": [
      "No importance",
      "Early intervention saves lives",
      "Creates panic",
      "Not needed"
    ],
    "optionsHi": [
      "अंधापन बढ़ाना",
      "रोकथाम योग्य अंधापन कम करना",
      "केवल चश्मा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Early detection and response can prevent spread and save lives.",
    "explanationHi": "Blindness prevention।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-910",
    "questionEn": "Zero reporting indicates:",
    "questionHi": "Cataract Surgery भारत में अंधापन का प्रमुख उपचार क्यों है?",
    "optionsEn": [
      "Failure",
      "Active surveillance even when no cases",
      "No surveillance",
      "System not working"
    ],
    "optionsHi": [
      "अंधापन नहीं",
      "मोतियाबिंद अंधापन का प्रमुख कारण है",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Zero report confirms surveillance is active, not just absent reporting.",
    "explanationHi": "Cataract surgery importance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-911",
    "questionEn": "Health worker burnout can be prevented by:",
    "questionHi": "RBSK (Rashtriya Bal Swasthya Karyakram) क्या है?",
    "optionsEn": [
      "More work",
      "Support, reasonable workload, appreciation",
      "Ignoring stress",
      "Working alone"
    ],
    "optionsHi": [
      "वयस्क स्वास्थ्य",
      "0-18 वर्ष के बच्चों की स्वास्थ्य जांच",
      "केवल टीकाकरण",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Supportive supervision, manageable workload, recognition prevent burnout.",
    "explanationHi": "Child health screening।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-912",
    "questionEn": "Teamwork in health is important because:",
    "questionHi": "RBSK में 4Ds क्या हैं?",
    "optionsEn": [
      "Not important",
      "No one person can address all health needs",
      "Creates conflict",
      "Wastes time"
    ],
    "optionsHi": [
      "केवल 2D",
      "Defects, Diseases, Deficiencies, Developmental Delays",
      "केवल 1D",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Healthcare requires teamwork across different skills and sectors.",
    "explanationHi": "4Ds of RBSK।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-913",
    "questionEn": "Continuing education for health workers:",
    "questionHi": "RKSK (Rashtriya Kishor Swasthya Karyakram) किस आयु वर्ग के लिए है?",
    "optionsEn": [
      "Not needed after training",
      "Essential for keeping skills updated",
      "Waste of time",
      "Only for doctors"
    ],
    "optionsHi": [
      "0-5 वर्ष",
      "10-19 वर्ष (किशोर)",
      "40-60 वर्ष",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ongoing learning necessary as knowledge and practices evolve.",
    "explanationHi": "Adolescent health program।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-914",
    "questionEn": "Cultural sensitivity in health means:",
    "questionHi": "RKSK के 6 प्रमुख क्षेत्र क्या हैं?",
    "optionsEn": [
      "Ignoring culture",
      "Respecting and adapting to community beliefs",
      "Imposing one culture",
      "Only traditional medicine"
    ],
    "optionsHi": [
      "केवल 2",
      "पोषण, SRH, NCD, मानसिक स्वास्थ्य, हिंसा, मादक द्रव्य",
      "केवल पोषण",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Culturally sensitive care respects beliefs while providing evidence-based services.",
    "explanationHi": "6 strategic priorities।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-915",
    "questionEn": "Confidentiality is important because:",
    "questionHi": "AFHCs (Adolescent Friendly Health Clinics) क्या हैं?",
    "optionsEn": [
      "Legal requirement only",
      "Builds trust and protects dignity",
      "Not important",
      "Only for HIV"
    ],
    "optionsHi": [
      "वृद्धों के लिए",
      "किशोरों के लिए विशेष स्वास्थ्य क्लीनिक",
      "केवल महिलाओं के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Confidentiality essential for trust and protecting patient dignity.",
    "explanationHi": "Youth-friendly clinics।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-916",
    "questionEn": "Gender equity in health means:",
    "questionHi": "PMSMA (Pradhan Mantri Surakshit Matritva Abhiyan) क्या है?",
    "optionsEn": [
      "Same services for all",
      "Addressing different needs of men and women fairly",
      "Only women's programs",
      "Ignoring gender"
    ],
    "optionsHi": [
      "बच्चों के लिए",
      "गर्भवती महिलाओं की मुफ्त जांच (हर माह 9 तारीख)",
      "केवल प्रसव",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Gender equity: fair treatment considering different needs and barriers.",
    "explanationHi": "Safe motherhood checkup।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-917",
    "questionEn": "Referral system is important for:",
    "questionHi": "LaQshya क्या है?",
    "optionsEn": [
      "Creating paperwork",
      "Ensuring appropriate level of care",
      "Avoiding work",
      "Only serious cases"
    ],
    "optionsHi": [
      "लक्ष्य",
      "Labour Room Quality Initiative - प्रसव कक्ष गुणवत्ता",
      "केवल उपकरण",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Referral ensures patients get care at appropriate level without delay.",
    "explanationHi": "Labour room quality।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-918",
    "questionEn": "Follow-up after referral is needed to:",
    "questionHi": "MAA (Mothers' Absolute Affection) क्या है?",
    "optionsEn": [
      "Not needed",
      "Ensure patient received and benefited from care",
      "Create more work",
      "Only for records"
    ],
    "optionsHi": [
      "दवाई",
      "स्तनपान संवर्धन कार्यक्रम",
      "टीकाकरण",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Follow-up ensures continuity and completion of care after referral.",
    "explanationHi": "Breastfeeding promotion।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-919",
    "questionEn": "Involving men in maternal health:",
    "questionHi": "SUMAN (Surakshit Matritva Aashwasan) क्या है?",
    "optionsEn": [
      "Not needed",
      "Improves outcomes and health-seeking",
      "Only women's issue",
      "Creates problems"
    ],
    "optionsHi": [
      "बीमा",
      "मातृ-शिशु को मुफ्त और गुणवत्तापूर्ण सेवाओं की गारंटी",
      "केवल प्रसव",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Male involvement in MCH improves care-seeking, outcomes, and family support.",
    "explanationHi": "Free assured services।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-920",
    "questionEn": "Home visits are valuable because:",
    "questionHi": "Mission Indradhanush क्या है?",
    "optionsEn": [
      "Waste of time",
      "Assess real conditions, reach non-attenders",
      "Only for emergencies",
      "Not effective"
    ],
    "optionsHi": [
      "बिजली",
      "पूर्ण टीकाकरण कवरेज के लिए अभियान",
      "केवल मलेरिया",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Home visits allow assessment of conditions, reaching those who don't come.",
    "explanationHi": "Full immunization mission।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-921",
    "questionEn": "The best way to deal with rumors about vaccines is:",
    "questionHi": "IMI (Intensified Mission Indradhanush) क्या है?",
    "optionsEn": [
      "Ignore them",
      "Provide accurate information from trusted sources",
      "Argue aggressively",
      "Force vaccination"
    ],
    "optionsHi": [
      "सामान्य टीकाकरण",
      "त्वरित टीकाकरण अभियान (90% कवरेज लक्ष्य)",
      "केवल शहरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Counter misinformation with accurate, clear communication from trusted sources.",
    "explanationHi": "Intensified immunization।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-922",
    "questionEn": "When community refuses a health service, you should:",
    "questionHi": "Universal Immunization Programme में कितने रोगों के टीके हैं?",
    "optionsEn": [
      "Force them",
      "Understand concerns and address them respectfully",
      "Abandon the area",
      "Report to police"
    ],
    "optionsHi": [
      "5",
      "12 रोगों के टीके (2024)",
      "3",
      "20"
    ],
    "correctAnswer": 1,
    "explanationEn": "Listen, understand barriers, address concerns, involve community leaders.",
    "explanationHi": "UIP vaccines।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-923",
    "questionEn": "Good record-keeping helps in:",
    "questionHi": "NTCP (National Tobacco Control Programme) का उद्देश्य क्या है?",
    "optionsEn": [
      "Nothing",
      "Planning, monitoring, accountability",
      "Creating work",
      "Only legal cases"
    ],
    "optionsHi": [
      "तंबाकू बढ़ाना",
      "तंबाकू सेवन और जोखिम कम करना",
      "केवल जागरूकता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Records essential for planning, monitoring progress, and accountability.",
    "explanationHi": "Tobacco control।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-924",
    "questionEn": "An emergency in your area should be:",
    "questionHi": "COTPA (Cigarettes and Other Tobacco Products Act) कब लागू हुआ?",
    "optionsEn": [
      "Kept secret",
      "Reported immediately to supervisor",
      "Handled alone",
      "Ignored"
    ],
    "optionsHi": [
      "2000",
      "2003",
      "2010",
      "1990"
    ],
    "correctAnswer": 1,
    "explanationEn": "Report emergencies immediately for appropriate response and support.",
    "explanationHi": "Tobacco act year।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-925",
    "questionEn": "Personal protective equipment protects:",
    "questionHi": "COTPA के प्रमुख प्रावधान क्या हैं?",
    "optionsEn": [
      "Only patients",
      "Both health worker and patients",
      "Only visitors",
      "No one"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "सार्वजनिक स्थानों पर धूम्रपान निषेध, विज्ञापन प्रतिबंध, चेतावनी लेबल",
      "केवल कर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "PPE protects health worker from exposure and patients from cross-infection.",
    "explanationHi": "COTPA provisions।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-926",
    "questionEn": "When you don't know something, you should:",
    "questionHi": "Tobacco Quitline India का नंबर क्या है?",
    "optionsEn": [
      "Pretend to know",
      "Acknowledge and seek correct information",
      "Make up answer",
      "Ignore the question"
    ],
    "optionsHi": [
      "100",
      "1800-11-2356",
      "108",
      "112"
    ],
    "correctAnswer": 1,
    "explanationEn": "Honesty builds trust; find accurate information rather than guess.",
    "explanationHi": "Tobacco quitline।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-927",
    "questionEn": "Behavior change takes:",
    "questionHi": "NPCDCS क्या है?",
    "optionsEn": [
      "One lecture",
      "Time and repeated reinforcement",
      "Force",
      "No effort"
    ],
    "optionsHi": [
      "संक्रामक रोग",
      "National Programme for Prevention and Control of Cancer, Diabetes, CVD and Stroke",
      "केवल कैंसर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Behavior change is gradual; needs sustained support and reinforcement.",
    "explanationHi": "NCD control program।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-928",
    "questionEn": "The most vulnerable period for child survival is:",
    "questionHi": "NPCDCS के प्रमुख घटक क्या हैं?",
    "optionsEn": [
      "Childhood",
      "First 28 days of life",
      "School age",
      "Adolescence"
    ],
    "optionsHi": [
      "केवल उपचार",
      "स्वास्थ्य संवर्धन, जांच, उपचार, पुनर्वास",
      "कुछ नहीं",
      "केवल दवाई"
    ],
    "correctAnswer": 1,
    "explanationEn": "Neonatal period has highest mortality risk; needs focused interventions.",
    "explanationHi": "NPCDCS components।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-929",
    "questionEn": "Triple burden of disease in India means:",
    "questionHi": "NCD Clinics कहां होते हैं?",
    "optionsEn": [
      "Only infections",
      "Infectious, NCDs, and injuries together",
      "Only NCDs",
      "Only injuries"
    ],
    "optionsHi": [
      "केवल जिला अस्पताल",
      "CHC और जिला अस्पताल",
      "केवल SC",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "India faces triple burden: ongoing infectious diseases, rising NCDs, and injuries.",
    "explanationHi": "NCD clinic locations।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-930",
    "questionEn": "Malnutrition affects:",
    "questionHi": "Oral Cancer Screening कैसे होती है?",
    "optionsEn": [
      "Only weight",
      "Growth, immunity, cognition, productivity",
      "Only children",
      "Only poor"
    ],
    "optionsHi": [
      "रक्त परीक्षण",
      "मुंह की दृश्य जांच",
      "X-Ray",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Malnutrition has wide-ranging effects on physical and mental development.",
    "explanationHi": "Visual oral examination।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-931",
    "questionEn": "Adolescents need special attention because:",
    "questionHi": "Cervical Cancer Screening के लिए कौन सा परीक्षण उपयोग होता है?",
    "optionsEn": [
      "They are healthy",
      "Unique physical, mental, social changes and risks",
      "No health needs",
      "Same as adults"
    ],
    "optionsHi": [
      "रक्त परीक्षण",
      "VIA (Visual Inspection with Acetic Acid) / Pap Smear",
      "X-Ray",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adolescence: rapid changes, new risks, habits formed for life.",
    "explanationHi": "Cervical screening methods।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-932",
    "questionEn": "Elderly care is important because:",
    "questionHi": "Breast Cancer Screening कैसे होती है?",
    "optionsEn": [
      "They don't contribute",
      "Growing population with specific health needs",
      "They are burden",
      "Not priority"
    ],
    "optionsHi": [
      "रक्त परीक्षण",
      "Clinical Breast Examination / Self-Examination",
      "X-Ray",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Growing elderly population needs appropriate healthcare services.",
    "explanationHi": "Breast screening methods।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-933",
    "questionEn": "Mental health should be:",
    "questionHi": "POSHAN Abhiyaan (National Nutrition Mission) कब शुरू हुआ?",
    "optionsEn": [
      "Stigmatized",
      "Integrated into primary care",
      "Ignored",
      "Only for psychiatrists"
    ],
    "optionsHi": [
      "2010",
      "2018",
      "2000",
      "2020"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mental health integration into PHC increases access and reduces stigma.",
    "explanationHi": "POSHAN Abhiyaan launch।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-934",
    "questionEn": "Disability is:",
    "questionHi": "POSHAN Abhiyaan के लक्ष्य क्या हैं?",
    "optionsEn": [
      "Inability only",
      "Interaction between impairment and barriers",
      "Fault of person",
      "Unchangeable"
    ],
    "optionsHi": [
      "कोई लक्ष्य नहीं",
      "Stunting, Underweight, Anaemia कम करना",
      "केवल जागरूकता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Disability results from interaction of impairment with environmental barriers.",
    "explanationHi": "Nutrition mission targets।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-935",
    "questionEn": "Inclusive health services mean:",
    "questionHi": "POSHAN Maah कब मनाया जाता है?",
    "optionsEn": [
      "Separate services for disabled",
      "Services accessible to all including disabled",
      "No special provisions",
      "Only for some"
    ],
    "optionsHi": [
      "जनवरी",
      "सितंबर (पोषण महीना)",
      "मार्च",
      "जून"
    ],
    "correctAnswer": 1,
    "explanationEn": "Inclusive services remove barriers for people with disabilities.",
    "explanationHi": "Nutrition month।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-936",
    "questionEn": "Climate change affects health through:",
    "questionHi": "Anemia Mukt Bharat के लक्ष्य क्या हैं?",
    "optionsEn": [
      "No effect",
      "Heat, vectors, water, food, disasters",
      "Only temperature",
      "Only floods"
    ],
    "optionsHi": [
      "कोई लक्ष्य नहीं",
      "2022 तक एनीमिया में 3% वार्षिक कमी",
      "बढ़ाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Climate change impacts health through multiple pathways.",
    "explanationHi": "Anemia reduction target।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-937",
    "questionEn": "One Health recognizes that human health is connected to:",
    "questionHi": "IFA (Iron Folic Acid) Supplementation का उद्देश्य क्या है?",
    "optionsEn": [
      "Nothing else",
      "Animal and environmental health",
      "Only economics",
      "Only politics"
    ],
    "optionsHi": [
      "विटामिन C",
      "एनीमिया की रोकथाम और उपचार",
      "केवल गर्भवती",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "One Health: interconnection of human, animal, and environmental health.",
    "explanationHi": "IFA for anemia।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-938",
    "questionEn": "Hand hygiene prevents:",
    "questionHi": "WIFS (Weekly Iron Folic Acid Supplementation) किसके लिए है?",
    "optionsEn": [
      "Nothing",
      "Many infections",
      "Only COVID",
      "Only diarrhea"
    ],
    "optionsHi": [
      "वृद्धों के लिए",
      "किशोरियों और महिलाओं के लिए",
      "केवल पुरुषों के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hand hygiene prevents multiple infections: diarrhea, respiratory, skin.",
    "explanationHi": "Weekly IFA program।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-939",
    "questionEn": "Safe water and sanitation prevent:",
    "questionHi": "Deworming किसे और कब दिया जाता है?",
    "optionsEn": [
      "Only cholera",
      "Multiple infectious diseases",
      "No diseases",
      "Only in rural areas"
    ],
    "optionsHi": [
      "केवल वयस्क",
      "1-19 वर्ष, वर्ष में 2 बार (फरवरी, अगस्त)",
      "केवल शिशु",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WASH prevents diarrhea, typhoid, cholera, hepatitis, worm infections.",
    "explanationHi": "National Deworming Day।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-940",
    "questionEn": "Tobacco use is:",
    "questionHi": "Swachh Bharat Mission का स्वास्थ्य पर क्या प्रभाव है?",
    "optionsEn": [
      "Safe in moderation",
      "Single largest preventable cause of death",
      "Only harmful if smoking",
      "Not a concern"
    ],
    "optionsHi": [
      "कोई प्रभाव नहीं",
      "ODF से डायरिया, हेल्मिंथ, पोषण में सुधार",
      "केवल सफाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tobacco causes more preventable deaths than any other single factor.",
    "explanationHi": "Sanitation and health।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-941",
    "questionEn": "Physical activity should be:",
    "questionHi": "Jal Jeevan Mission का स्वास्थ्य पर क्या प्रभाव है?",
    "optionsEn": [
      "Avoided",
      "Part of daily routine",
      "Only for athletes",
      "Only when sick"
    ],
    "optionsHi": [
      "कोई प्रभाव नहीं",
      "सुरक्षित पेयजल से जलजनित रोग कम",
      "केवल पानी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Regular physical activity (30 min/day) prevents many diseases.",
    "explanationHi": "Safe water and health।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-942",
    "questionEn": "Healthy diet includes:",
    "questionHi": "PMJAY का विस्तार किन समूहों में हुआ?",
    "optionsEn": [
      "Only expensive food",
      "Balanced nutrition from diverse foods",
      "Only supplements",
      "Fasting always"
    ],
    "optionsHi": [
      "कोई विस्तार नहीं",
      "70 वर्ष से अधिक आयु के वरिष्ठ नागरिक (2024)",
      "केवल BPL",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Healthy diet: variety, balance, fruits/vegetables, limited salt/sugar/fat.",
    "explanationHi": "PM-JAY expansion।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-943",
    "questionEn": "Screening programs are effective when:",
    "questionHi": "Fit India Movement का उद्देश्य क्या है?",
    "optionsEn": [
      "For all diseases",
      "Disease is detectable early, treatment improves outcomes",
      "Always cost-effective",
      "Only in hospitals"
    ],
    "optionsHi": [
      "केवल खेल",
      "शारीरिक गतिविधि और स्वस्थ जीवनशैली को बढ़ावा",
      "केवल व्यायाम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Screening effective when early detection leads to better outcomes.",
    "explanationHi": "Fitness promotion।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-944",
    "questionEn": "Health promotion addresses:",
    "questionHi": "Eat Right India Movement क्या है?",
    "optionsEn": [
      "Only disease",
      "Wider determinants of health",
      "Only treatment",
      "Only hospitals"
    ],
    "optionsHi": [
      "केवल आहार",
      "स्वस्थ, सुरक्षित और टिकाऊ भोजन को बढ़ावा (FSSAI)",
      "केवल व्यायाम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Health promotion addresses social, environmental determinants beyond healthcare.",
    "explanationHi": "Healthy eating।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-945",
    "questionEn": "Empowerment differs from education by:",
    "questionHi": "Trans Fat Free India का लक्ष्य क्या है?",
    "optionsEn": [
      "Same thing",
      "Enabling action and control",
      "Only giving information",
      "No difference"
    ],
    "optionsHi": [
      "बढ़ाना",
      "2022 तक Trans Fat <2% (FSSAI)",
      "कोई लक्ष्य नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Empowerment enables action; education provides knowledge.",
    "explanationHi": "Trans fat elimination।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-946",
    "questionEn": "Public health success is measured by:",
    "questionHi": "Yoga Day कब मनाया जाता है?",
    "optionsEn": [
      "Number of hospitals",
      "Improvement in population health indicators",
      "Budget spent",
      "Staff hired"
    ],
    "optionsHi": [
      "21 मार्च",
      "21 जून (International Day of Yoga)",
      "21 सितंबर",
      "21 दिसंबर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Success measured by reduced mortality, morbidity, improved quality of life.",
    "explanationHi": "Yoga day।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-947",
    "questionEn": "Health equity requires addressing:",
    "questionHi": "AYUSH का जन स्वास्थ्य में क्या योगदान है?",
    "optionsEn": [
      "Only healthcare access",
      "Root causes of health inequalities",
      "Only genetics",
      "Nothing"
    ],
    "optionsHi": [
      "कोई योगदान नहीं",
      "रोकथाम, स्वास्थ्य संवर्धन, पूरक चिकित्सा",
      "केवल उपचार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Equity requires addressing social determinants causing health disparities.",
    "explanationHi": "AYUSH role।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-948",
    "questionEn": "Local evidence is important because:",
    "questionHi": "National AYUSH Mission क्या है?",
    "optionsEn": [
      "Global evidence is enough",
      "Context affects what works",
      "No difference",
      "Only global matters"
    ],
    "optionsHi": [
      "केवल योग",
      "AYUSH सेवाओं को बढ़ावा और एकीकृत करना",
      "केवल आयुर्वेद",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Local context affects intervention effectiveness; need local data.",
    "explanationHi": "AYUSH promotion।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-949",
    "questionEn": "Innovation in public health:",
    "questionHi": "One Health Approach क्या है?",
    "optionsEn": [
      "Not needed",
      "Essential for new solutions",
      "Only technology",
      "Only expensive"
    ],
    "optionsHi": [
      "केवल मानव",
      "मानव, पशु और पर्यावरण स्वास्थ्य का एकीकृत दृष्टिकोण",
      "केवल पशु",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Innovation needed to address evolving challenges effectively.",
    "explanationHi": "One Health concept।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-950",
    "questionEn": "Public health challenges require:",
    "questionHi": "Zoonotic Diseases क्या हैं?",
    "optionsEn": [
      "Only government action",
      "Multi-stakeholder collaboration",
      "Only NGO work",
      "Individual action only"
    ],
    "optionsHi": [
      "केवल मानव",
      "पशुओं से मनुष्यों में फैलने वाले रोग",
      "पौधों के रोग",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Complex challenges need collaboration across government, civil society, private sector.",
    "explanationHi": "Animal to human diseases।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-951",
    "questionEn": "Leadership in public health:",
    "questionHi": "Zoonoses के उदाहरण क्या हैं?",
    "optionsEn": [
      "Only for senior officers",
      "Needed at all levels",
      "Not important",
      "Only political"
    ],
    "optionsHi": [
      "मधुमेह",
      "रेबीज, बर्ड फ्लू, स्वाइन फ्लू, लेप्टोस्पायरोसिस, प्लेग",
      "हृदय रोग",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Leadership and advocacy needed at every level including frontline.",
    "explanationHi": "Zoonotic disease examples।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-952",
    "questionEn": "The future of public health depends on:",
    "questionHi": "Antimicrobial Resistance (AMR) एक जन स्वास्थ्य खतरा क्यों है?",
    "optionsEn": [
      "More hospitals only",
      "Prevention, primary care, community engagement",
      "Only specialists",
      "Only technology"
    ],
    "optionsHi": [
      "खतरा नहीं",
      "उपचार विफलता, मृत्यु दर बढ़ना, स्वास्थ्य खर्च बढ़ना",
      "लाभदायक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sustainable health depends on prevention, strong PHC, and community involvement.",
    "explanationHi": "AMR threat।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-953",
    "questionEn": "MPHW contributes to health by:",
    "questionHi": "NAP-AMR (National Action Plan on AMR) कब शुरू हुआ?",
    "optionsEn": [
      "Only treatment",
      "Prevention, promotion, basic care, surveillance, education",
      "Nothing significant",
      "Only paperwork"
    ],
    "optionsHi": [
      "2010",
      "2017",
      "2000",
      "2020"
    ],
    "correctAnswer": 1,
    "explanationEn": "MPHW has comprehensive role in primary healthcare delivery.",
    "explanationHi": "India's AMR plan।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-954",
    "questionEn": "Job satisfaction for health workers increases with:",
    "questionHi": "AMR से बचाव के लिए MPHW क्या कर सकते हैं?",
    "optionsEn": [
      "High salary only",
      "Support, resources, recognition, meaningful work",
      "Less work",
      "Working alone"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "एंटीबायोटिक के उचित उपयोग की जागरूकता, प्रिस्क्रिप्शन का पालन",
      "अधिक एंटीबायोटिक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Satisfaction from supportive environment, adequate resources, recognition.",
    "explanationHi": "MPHW role in AMR।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-955",
    "questionEn": "Professional development for MPHW includes:",
    "questionHi": "Climate Change का स्वास्थ्य पर क्या प्रभाव है?",
    "optionsEn": [
      "No development needed",
      "Training, supervision, career opportunities",
      "Only one course",
      "Self-study only"
    ],
    "optionsHi": [
      "कोई प्रभाव नहीं",
      "गर्मी से मृत्यु, वेक्टर रोग, जलजनित रोग, पोषण",
      "केवल तापमान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Professional development: ongoing training, supportive supervision, career progression.",
    "explanationHi": "Climate health impacts।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-956",
    "questionEn": "When facing ethical dilemma, MPHW should:",
    "questionHi": "Heat Action Plan क्या है?",
    "optionsEn": [
      "Decide alone",
      "Consult supervisor and follow guidelines",
      "Ignore ethics",
      "Act based on personal gain"
    ],
    "optionsHi": [
      "ठंडक योजना",
      "गर्मी से होने वाली मृत्यु रोकने की योजना",
      "केवल गर्मी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Seek guidance when facing ethical issues; follow professional standards.",
    "explanationHi": "Heat wave prevention।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-957",
    "questionEn": "Conflict between community beliefs and health practice should be handled by:",
    "questionHi": "Air Pollution का स्वास्थ्य पर क्या प्रभाव है?",
    "optionsEn": [
      "Forcing change",
      "Respectful dialogue and education",
      "Ignoring beliefs",
      "Abandoning the community"
    ],
    "optionsHi": [
      "कोई प्रभाव नहीं",
      "श्वसन रोग, हृदय रोग, कैंसर, समय से पहले मृत्यु",
      "केवल खांसी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Respect beliefs while providing accurate information; find common ground.",
    "explanationHi": "Air pollution health effects।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-958",
    "questionEn": "MPHW's relationship with ASHA should be:",
    "questionHi": "NCAP (National Clean Air Programme) का लक्ष्य क्या है?",
    "optionsEn": [
      "Competitive",
      "Collaborative and supportive",
      "Supervisory only",
      "No relationship"
    ],
    "optionsHi": [
      "प्रदूषण बढ़ाना",
      "2025-26 तक PM2.5 में 40% कमी",
      "कोई लक्ष्य नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MPHW and ASHA work together as team for community health.",
    "explanationHi": "Clean air target।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-959",
    "questionEn": "Working with AWW helps in:",
    "questionHi": "Pandemic Preparedness में क्या शामिल है?",
    "optionsEn": [
      "Nothing",
      "Convergent nutrition and health services",
      "Competition",
      "Conflict"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "निगरानी, रिस्क कम्युनिकेशन, स्वास्थ्य प्रणाली मजबूती, अनुसंधान",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Coordination with AWW enables integrated health-nutrition services.",
    "explanationHi": "Pandemic readiness।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-960",
    "questionEn": "Village Health and Nutrition Day brings together:",
    "questionHi": "IDSP (Integrated Disease Surveillance Programme) क्या है?",
    "optionsEn": [
      "Only health workers",
      "Health, nutrition, community for integrated services",
      "Only children",
      "Only women"
    ],
    "optionsHi": [
      "उपचार कार्यक्रम",
      "महामारी-प्रवण रोगों की एकीकृत निगरानी",
      "केवल मलेरिया",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "VHND: platform for convergent service delivery at village level.",
    "explanationHi": "Disease surveillance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-961",
    "questionEn": "MPHW can advocate for community by:",
    "questionHi": "IHIP (Integrated Health Information Platform) क्या है?",
    "optionsEn": [
      "Not possible",
      "Raising issues with supervisors and authorities",
      "Ignoring problems",
      "Creating conflict"
    ],
    "optionsHi": [
      "बीमा",
      "IDSP का डिजिटल प्लेटफॉर्म",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MPHW can be voice for community health needs.",
    "explanationHi": "Digital surveillance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-962",
    "questionEn": "Documentation of good practices helps:",
    "questionHi": "Syndromic Surveillance क्या है?",
    "optionsEn": [
      "No one",
      "Others learn and replicate success",
      "Only the documenter",
      "Creates problems"
    ],
    "optionsHi": [
      "लैब निदान",
      "लक्षणों के आधार पर रोग निगरानी (निदान से पहले)",
      "केवल मृत्यु",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Documenting success enables learning and scale-up.",
    "explanationHi": "Symptom-based surveillance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-963",
    "questionEn": "When program doesn't work, MPHW should:",
    "questionHi": "Event-Based Surveillance क्या है?",
    "optionsEn": [
      "Continue same way",
      "Analyze barriers and adapt approach",
      "Stop working",
      "Blame community"
    ],
    "optionsHi": [
      "नियमित रिपोर्टिंग",
      "असामान्य स्वास्थ्य घटनाओं की त्वरित रिपोर्टिंग",
      "कोई रिपोर्टिंग नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Identify why not working and modify approach.",
    "explanationHi": "Unusual event reporting।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-964",
    "questionEn": "Resource constraints should be addressed by:",
    "questionHi": "Notifiable Disease क्या है?",
    "optionsEn": [
      "Stopping work",
      "Prioritization and creative solutions",
      "Complaining only",
      "Doing nothing"
    ],
    "optionsHi": [
      "कोई भी रोग",
      "कानूनी रूप से रिपोर्ट करना अनिवार्य रोग",
      "केवल NCD",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Prioritize limited resources; find innovative solutions.",
    "explanationHi": "Mandatory reporting disease।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-965",
    "questionEn": "Technology in healthcare is:",
    "questionHi": "भारत में Notifiable Diseases के उदाहरण क्या हैं?",
    "optionsEn": [
      "Replacement for health workers",
      "Tool to enhance health worker effectiveness",
      "Not useful in rural areas",
      "Only for doctors"
    ],
    "optionsHi": [
      "सर्दी-जुकाम",
      "हैजा, मलेरिया, डेंगू, TB, HIV, COVID-19",
      "मधुमेह",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Technology supports but doesn't replace human connection in care.",
    "explanationHi": "Notifiable disease examples।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-966",
    "questionEn": "Mobile phones in health can help with:",
    "questionHi": "Epidemic Diseases Act 1897 क्या है?",
    "optionsEn": [
      "Nothing",
      "Data collection, communication, reminders",
      "Only calling supervisor",
      "Creating problems"
    ],
    "optionsHi": [
      "नया कानून",
      "महामारी नियंत्रण के लिए पुराना कानून (COVID में उपयोग)",
      "केवल टीकाकरण",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "mHealth: data collection, beneficiary tracking, communication, health information.",
    "explanationHi": "Epidemic control act।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-967",
    "questionEn": "Health worker safety is:",
    "questionHi": "Disaster Management Act 2005 का स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "Not important",
      "Essential for sustainable service delivery",
      "Worker's personal problem",
      "Only employer concern"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "आपदा और महामारी प्रबंधन के लिए कानूनी ढांचा",
      "केवल बाढ़",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Healthy, safe workers are essential for healthcare delivery.",
    "explanationHi": "Disaster management law।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-968",
    "questionEn": "Stress management for health workers:",
    "questionHi": "IHR (International Health Regulations) क्या है?",
    "optionsEn": [
      "Not needed",
      "Important for wellbeing and performance",
      "Sign of weakness",
      "Not possible"
    ],
    "optionsHi": [
      "राष्ट्रीय नियम",
      "WHO का अंतर्राष्ट्रीय स्वास्थ्य नियम (PHEIC)",
      "केवल भारत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Managing stress essential for personal wellbeing and work quality.",
    "explanationHi": "International health rules।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-969",
    "questionEn": "Work-life balance for MPHW:",
    "questionHi": "PHEIC (Public Health Emergency of International Concern) क्या है?",
    "optionsEn": [
      "Not possible",
      "Important for sustained effectiveness",
      "Work should be only priority",
      "Personal life doesn't matter"
    ],
    "optionsHi": [
      "स्थानीय समस्या",
      "WHO द्वारा घोषित अंतर्राष्ट्रीय जन स्वास्थ्य आपातकाल",
      "राष्ट्रीय",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Balance prevents burnout and enables sustained service.",
    "explanationHi": "WHO emergency declaration।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-970",
    "questionEn": "Professional integrity means:",
    "questionHi": "COVID-19 से जन स्वास्थ्य ने क्या सीखा?",
    "optionsEn": [
      "Only following rules",
      "Honesty, accountability, ethical practice",
      "Doing minimum work",
      "Avoiding responsibility"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "तैयारी का महत्व, प्रणाली मजबूती, समुदाय भागीदारी, डिजिटल स्वास्थ्य",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Integrity: ethical behavior, honesty, and accountability in all work.",
    "explanationHi": "COVID lessons।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-971",
    "questionEn": "Corruption in health affects:",
    "questionHi": "Infodemic क्या है?",
    "optionsEn": [
      "No one",
      "Poor patients most severely",
      "Only rich people",
      "Only government"
    ],
    "optionsHi": [
      "महामारी",
      "जानकारी और गलत सूचना का अत्यधिक प्रसार",
      "केवल सही जानकारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Corruption diverts resources and affects poor who can't afford alternatives.",
    "explanationHi": "Information epidemic।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-972",
    "questionEn": "MPHW should refuse to participate in:",
    "questionHi": "Vaccine Hesitancy क्या है?",
    "optionsEn": [
      "Nothing",
      "Unethical practices",
      "Extra work",
      "Training programs"
    ],
    "optionsHi": [
      "टीका लेना",
      "टीकाकरण के प्रति अनिच्छा या देरी",
      "कोई टीका नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Refuse participation in unethical activities; report if necessary.",
    "explanationHi": "Reluctance to vaccinate।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-973",
    "questionEn": "Patient complaints should be seen as:",
    "questionHi": "Vaccine Hesitancy से निपटने के लिए MPHW क्या कर सकते हैं?",
    "optionsEn": [
      "Nuisance",
      "Opportunity for improvement",
      "Attack on staff",
      "To be ignored"
    ],
    "optionsHi": [
      "जबरदस्ती",
      "सुनना, सही जानकारी देना, विश्वास बनाना, रोल मॉडल बनना",
      "अनदेखा करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Complaints provide feedback for improving services.",
    "explanationHi": "Addressing vaccine hesitancy।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-974",
    "questionEn": "Accountability in public health means:",
    "questionHi": "Risk Communication क्या है?",
    "optionsEn": [
      "No responsibility",
      "Answerable for actions and outcomes",
      "Only to supervisors",
      "Not needed"
    ],
    "optionsHi": [
      "जोखिम छुपाना",
      "जोखिम के बारे में प्रभावी संवाद",
      "केवल डराना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Accountable to community, government, and professional standards.",
    "explanationHi": "Communicating risks।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-975",
    "questionEn": "MPHW contributes to national health goals by:",
    "questionHi": "Community Engagement जन स्वास्थ्य में क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Not contributing",
      "Local implementation of national programs",
      "Ignoring programs",
      "Only reporting"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "विश्वास, स्वामित्व, स्थानीय समाधान, टिकाऊ परिणाम",
      "केवल सरकारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MPHW translates national programs into local action at community level.",
    "explanationHi": "Community involvement importance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-976",
    "questionEn": "SDG 3 (Good Health) can be achieved through:",
    "questionHi": "SBCC (Social and Behaviour Change Communication) क्या है?",
    "optionsEn": [
      "Hospitals only",
      "Universal access to quality services",
      "Only urban development",
      "Ignoring rural areas"
    ],
    "optionsHi": [
      "केवल विज्ञापन",
      "व्यवहार परिवर्तन के लिए व्यवस्थित संचार रणनीति",
      "कोई संचार नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SDG 3 requires universal access including primary care for all.",
    "explanationHi": "Behavior change communication।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-977",
    "questionEn": "Universal Health Coverage needs:",
    "questionHi": "Nudge Theory जन स्वास्थ्य में क्या है?",
    "optionsEn": [
      "More hospitals only",
      "Financial protection and service coverage",
      "Private sector only",
      "No government role"
    ],
    "optionsHi": [
      "जबरदस्ती",
      "छोटे परिवर्तनों से स्वस्थ विकल्प को आसान बनाना",
      "कोई प्रभाव नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "UHC: access to services without financial hardship.",
    "explanationHi": "Gentle behavior push।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-978",
    "questionEn": "Health is:",
    "questionHi": "Default Option जन स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Only absence of disease",
      "Complete physical, mental, social wellbeing",
      "Only physical fitness",
      "Only medical care"
    ],
    "optionsHi": [
      "कोई विकल्प नहीं",
      "स्वस्थ विकल्प को पूर्व-निर्धारित बनाना",
      "केवल अस्वस्थ",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WHO definition: complete wellbeing, not just absence of disease.",
    "explanationHi": "Pre-set healthy choice।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-979",
    "questionEn": "Prevention is better than cure because:",
    "questionHi": "Health Impact Assessment (HIA) क्या है?",
    "optionsEn": [
      "Treatment is easy",
      "Prevention avoids suffering and cost",
      "Cure is always possible",
      "No reason"
    ],
    "optionsHi": [
      "केवल स्वास्थ्य",
      "नीतियों/परियोजनाओं के स्वास्थ्य प्रभाव का मूल्यांकन",
      "कोई मूल्यांकन नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Prevention saves lives, reduces suffering, and is more cost-effective.",
    "explanationHi": "Policy health assessment।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-980",
    "questionEn": "Public health's ultimate goal is:",
    "questionHi": "Health in All Policies (HiAP) क्या है?",
    "optionsEn": [
      "Employment for health workers",
      "Healthy populations and health equity",
      "Hospital profits",
      "Research publications"
    ],
    "optionsHi": [
      "केवल स्वास्थ्य विभाग",
      "सभी क्षेत्रों की नीतियों में स्वास्थ्य को शामिल करना",
      "कोई नीति नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Goal: improved health for all, especially disadvantaged populations.",
    "explanationHi": "Intersectoral health policy।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-981",
    "questionEn": "MPHW exam preparation should include:",
    "questionHi": "Multi-Sectoral Action जन स्वास्थ्य में क्यों जरूरी है?",
    "optionsEn": [
      "Memorizing only",
      "Understanding concepts and practical application",
      "Only theory",
      "No preparation needed"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "स्वास्थ्य निर्धारक कई क्षेत्रों में हैं (शिक्षा, पर्यावरण, रोजगार)",
      "केवल स्वास्थ्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Exam tests understanding and ability to apply knowledge practically.",
    "explanationHi": "Multiple sector involvement।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-982",
    "questionEn": "Regular revision helps because:",
    "questionHi": "Convergence जन स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Not helpful",
      "Reinforces learning and aids recall",
      "Wastes time",
      "Only for weak students"
    ],
    "optionsHi": [
      "अलगाव",
      "विभिन्न विभागों/कार्यक्रमों का समन्वित कार्य",
      "कोई समन्वय नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Spaced repetition enhances long-term retention.",
    "explanationHi": "Program convergence।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-983",
    "questionEn": "Practice questions help in:",
    "questionHi": "District Health Plan क्या है?",
    "optionsEn": [
      "Nothing",
      "Identifying gaps and exam familiarity",
      "Wasting time",
      "Only for competition"
    ],
    "optionsHi": [
      "राष्ट्रीय योजना",
      "जिला स्तरीय स्वास्थ्य योजना (स्थानीय जरूरतों के अनुसार)",
      "कोई योजना नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Practice identifies weak areas and builds exam confidence.",
    "explanationHi": "District health planning।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-984",
    "questionEn": "Group study can help by:",
    "questionHi": "PIP (Programme Implementation Plan) क्या है?",
    "optionsEn": [
      "Creating confusion",
      "Sharing knowledge and clarifying doubts",
      "Wasting time",
      "Creating competition only"
    ],
    "optionsHi": [
      "कोई योजना नहीं",
      "राज्य/जिला स्तरीय कार्यक्रम कार्यान्वयन योजना",
      "केवल राष्ट्रीय",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Group learning enables discussion and mutual support.",
    "explanationHi": "Implementation plan।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-985",
    "questionEn": "During exam, if unsure about answer:",
    "questionHi": "Block Health Plan क्या है?",
    "optionsEn": [
      "Leave blank",
      "Use elimination method to choose best option",
      "Choose randomly",
      "Choose longest answer"
    ],
    "optionsHi": [
      "जिला योजना",
      "ब्लॉक स्तरीय स्वास्थ्य योजना",
      "राष्ट्रीय",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Eliminate obviously wrong options; choose most likely from remaining.",
    "explanationHi": "Block level planning।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-986",
    "questionEn": "Reading question carefully is important because:",
    "questionHi": "Village Health Plan क्या है?",
    "optionsEn": [
      "Not important",
      "Details affect correct answer",
      "All questions are same",
      "Speed is everything"
    ],
    "optionsHi": [
      "जिला योजना",
      "ग्राम स्तरीय स्वास्थ्य योजना (VHSNC द्वारा)",
      "राष्ट्रीय",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Key words and details change what question is asking.",
    "explanationHi": "Village level planning।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-987",
    "questionEn": "Time management in exam means:",
    "questionHi": "MPHW के लिए Leadership Skills क्यों जरूरी हैं?",
    "optionsEn": [
      "Spending all time on hard questions",
      "Allocating time across all questions",
      "Rushing through all",
      "Taking long breaks"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "टीम प्रबंधन, समुदाय प्रेरणा, समस्या समाधान",
      "केवल डॉक्टर के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Balance time; don't spend too long on any single question.",
    "explanationHi": "Leadership importance।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-988",
    "questionEn": "Stress before exam is:",
    "questionHi": "Time Management MPHW के लिए क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Unusual",
      "Common and manageable",
      "Sign of failure",
      "Permanent"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "कई जिम्मेदारियां, सीमित समय, प्राथमिकता",
      "समय अधिक है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Some stress is normal; manage with preparation and relaxation.",
    "explanationHi": "Time management need।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-989",
    "questionEn": "Sleep before exam should be:",
    "questionHi": "Stress Management MPHW के लिए क्यों जरूरी है?",
    "optionsEn": [
      "Skipped for study",
      "Adequate for alertness",
      "Minimum 2 hours",
      "Doesn't matter"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "काम का दबाव, बर्नआउट रोकथाम, बेहतर प्रदर्शन",
      "कोई तनाव नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Good sleep night before exam improves recall and performance.",
    "explanationHi": "Stress management need।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-990",
    "questionEn": "On exam day, arrive:",
    "questionHi": "Continuous Professional Development (CPD) क्या है?",
    "optionsEn": [
      "Just on time",
      "Early with required materials",
      "Late is fine",
      "Any time"
    ],
    "optionsHi": [
      "एक बार प्रशिक्षण",
      "निरंतर सीखना और कौशल विकास",
      "कोई विकास नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Arrive early to settle; have all required documents and stationery.",
    "explanationHi": "Ongoing learning।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-991",
    "questionEn": "After exam, focus should be on:",
    "questionHi": "Ethical Decision Making जन स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Worrying about result",
      "Preparing for next step",
      "Discussing every answer",
      "Giving up"
    ],
    "optionsHi": [
      "कोई नैतिकता नहीं",
      "नैतिक सिद्धांतों के आधार पर निर्णय लेना",
      "केवल नियम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Focus forward; learn from experience; prepare for work or next exam.",
    "explanationHi": "Ethics in decisions।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-992",
    "questionEn": "Passing exam is beginning of:",
    "questionHi": "Privacy और Confidentiality जन स्वास्थ्य में क्या है?",
    "optionsEn": [
      "End of learning",
      "Lifelong learning and service",
      "No more development needed",
      "Retirement"
    ],
    "optionsHi": [
      "कोई गोपनीयता नहीं",
      "रोगी की जानकारी को सुरक्षित रखना",
      "सार्वजनिक करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Exam success is start of career journey with ongoing learning.",
    "explanationHi": "Patient privacy।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-993",
    "questionEn": "MPHW career can be fulfilling because:",
    "questionHi": "Informed Consent क्या है?",
    "optionsEn": [
      "Easy work",
      "Making difference in community health",
      "High salary",
      "No responsibility"
    ],
    "optionsHi": [
      "बिना सहमति",
      "जानकारी देने के बाद रोगी की सहमति लेना",
      "जबरदस्ती",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Meaningful work improving community health provides satisfaction.",
    "explanationHi": "Informed agreement।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-994",
    "questionEn": "Challenges in MPHW work can be overcome by:",
    "questionHi": "Public Health Ethics के सिद्धांत क्या हैं?",
    "optionsEn": [
      "Giving up",
      "Skills, support, and persistence",
      "Working alone",
      "Ignoring them"
    ],
    "optionsHi": [
      "कोई सिद्धांत नहीं",
      "न्याय, उपकार, अहानि, स्वायत्तता, सामाजिक हित",
      "केवल व्यक्तिगत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Competence, support systems, and determination overcome challenges.",
    "explanationHi": "PH ethical principles।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-995",
    "questionEn": "MPHW should see their role as:",
    "questionHi": "जन स्वास्थ्य में Advocacy क्या है?",
    "optionsEn": [
      "Just a job",
      "Service to community and profession",
      "Temporary work",
      "Unimportant"
    ],
    "optionsHi": [
      "विरोध",
      "स्वास्थ्य मुद्दों के लिए समर्थन और पक्षपोषण",
      "कुछ नहीं करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Beyond employment; commitment to community health improvement.",
    "explanationHi": "Health advocacy।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-996",
    "questionEn": "Public health history shows that:",
    "questionHi": "जन स्वास्थ्य में Partnership क्या है?",
    "optionsEn": [
      "Progress is impossible",
      "Concerted action achieves major gains",
      "Only medicine matters",
      "Prevention doesn't work"
    ],
    "optionsHi": [
      "अकेले काम",
      "विभिन्न संगठनों के साथ मिलकर काम करना",
      "कोई साझेदारी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "History shows major health improvements through organized public health action.",
    "explanationHi": "Working together।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-997",
    "questionEn": "Future public health challenges will require:",
    "questionHi": "जन स्वास्थ्य में Innovation क्या है?",
    "optionsEn": [
      "Same old approaches",
      "Innovation and adaptation",
      "Less investment",
      "Only technology"
    ],
    "optionsHi": [
      "पुरानी विधियां",
      "स्वास्थ्य समस्याओं के नए समाधान खोजना",
      "कोई नवाचार नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Evolving challenges need innovative and adaptive approaches.",
    "explanationHi": "New solutions।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-998",
    "questionEn": "MPHW of the future will need:",
    "questionHi": "जन स्वास्थ्य में Research का क्या महत्व है?",
    "optionsEn": [
      "Less training",
      "New skills including digital health",
      "Same old skills only",
      "No community work"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "साक्ष्य आधारित नीति और अभ्यास के लिए",
      "केवल अकादमिक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Future MPHWs need evolving skills including technology.",
    "explanationHi": "Evidence for practice।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-999",
    "questionEn": "The legacy of a good MPHW is:",
    "questionHi": "जन स्वास्थ्य की भविष्य की चुनौतियां क्या हैं?",
    "optionsEn": [
      "Paperwork",
      "Healthier community",
      "Personal wealth",
      "Political power"
    ],
    "optionsHi": [
      "कोई चुनौती नहीं",
      "NCDs, जनसंख्या वृद्धावस्था, जलवायु परिवर्तन, AMR, महामारी",
      "सभी समस्याएं हल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lasting impact is improved health and wellbeing of community served.",
    "explanationHi": "Future challenges।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  },
  {
    "id": "PUBLIC-HEALTH-1000",
    "questionEn": "Public health ultimately succeeds when:",
    "questionHi": "MPHW के लिए जन स्वास्थ्य का सबसे महत्वपूर्ण संदेश क्या है?",
    "optionsEn": [
      "Everyone has hospital access",
      "Everyone achieves their full health potential",
      "There are more doctors",
      "Diseases are eliminated"
    ],
    "optionsHi": [
      "केवल उपचार",
      "रोकथाम इलाज से बेहतर है - समुदाय के स्वास्थ्य की रक्षा करें",
      "केवल वेतन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Success: all people can attain full health potential regardless of circumstances.",
    "explanationHi": "Prevention is better than cure।",
    "difficulty": "medium",
    "topic": "public-health",
    "subtopic": "Final Review",
    "tags": [
      "final-review"
    ]
  }
];

export const publicHealthQuestionBank: QuestionBank = {
  topicId: 'public-health',
  topicNameEn: 'Public Health',
  topicNameHi: 'सार्वजनिक स्वास्थ्य',
  totalQuestions: publicHealthQuestions.length,
  questions: publicHealthQuestions
};
