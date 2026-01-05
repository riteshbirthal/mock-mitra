import { Question, QuestionBank } from './types';

// @ts-ignore - Large question bank
export const healthHygieneQuestions: Question[] = [
  {
    "id": "HEALTH-HYGIENE-001",
    "questionEn": "According to WHO, health is defined as:",
    "questionHi": "WHO के अनुसार स्वास्थ्य की परिभाषा क्या है?",
    "optionsEn": [
      "Absence of disease",
      "Complete physical, mental, and social well-being",
      "Physical fitness only",
      "Being able to work"
    ],
    "optionsHi": [
      "केवल रोग का अभाव",
      "शारीरिक, मानसिक और सामाजिक कल्याण की पूर्ण स्थिति",
      "केवल शारीरिक फिटनेस",
      "लंबी आयु"
    ],
    "correctAnswer": 1,
    "explanationEn": "WHO defines health as complete physical, mental, and social well-being, not merely absence of disease.",
    "explanationHi": "WHO ने 1948 में यह परिभाषा दी।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-002",
    "questionEn": "Hygiene refers to:",
    "questionHi": "स्वास्थ्य के कितने आयाम (Dimensions) हैं?",
    "optionsEn": [
      "Treatment of diseases",
      "Conditions and practices to maintain health",
      "Surgery procedures",
      "Medical diagnosis"
    ],
    "optionsHi": [
      "2",
      "3",
      "6",
      "10"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hygiene includes practices and conditions that help maintain health and prevent disease spread.",
    "explanationHi": "शारीरिक, मानसिक, सामाजिक, आध्यात्मिक, भावनात्मक, व्यावसायिक।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-003",
    "questionEn": "Personal hygiene includes all EXCEPT:",
    "questionHi": "स्वास्थ्य के निर्धारक (Determinants) में कौन शामिल नहीं है?",
    "optionsEn": [
      "Hand washing",
      "Dental care",
      "Sewage disposal",
      "Bathing"
    ],
    "optionsHi": [
      "आनुवंशिकता",
      "पर्यावरण",
      "जीवनशैली",
      "शेयर बाजार"
    ],
    "correctAnswer": 2,
    "explanationEn": "Sewage disposal is part of environmental hygiene, not personal hygiene.",
    "explanationHi": "आनुवंशिकता, पर्यावरण, जीवनशैली, स्वास्थ्य सेवाएं मुख्य निर्धारक हैं।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-004",
    "questionEn": "Environmental hygiene includes:",
    "questionHi": "प्राथमिक रोकथाम (Primary Prevention) का उदाहरण क्या है?",
    "optionsEn": [
      "Brushing teeth",
      "Hair care",
      "Safe water supply",
      "Nail trimming"
    ],
    "optionsHi": [
      "रोग का इलाज",
      "टीकाकरण",
      "पुनर्वास",
      "स्क्रीनिंग"
    ],
    "correctAnswer": 2,
    "explanationEn": "Safe water supply is a component of environmental hygiene.",
    "explanationHi": "रोग होने से पहले रोकना।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-005",
    "questionEn": "The chain of infection includes all EXCEPT:",
    "questionHi": "द्वितीयक रोकथाम (Secondary Prevention) का उदाहरण क्या है?",
    "optionsEn": [
      "Infectious agent",
      "Reservoir",
      "Mode of transmission",
      "Physical exercise"
    ],
    "optionsHi": [
      "टीकाकरण",
      "स्वास्थ्य शिक्षा",
      "स्क्रीनिंग और शीघ्र निदान",
      "पुनर्वास"
    ],
    "correctAnswer": 3,
    "explanationEn": "Physical exercise is not part of the chain of infection.",
    "explanationHi": "रोग को जल्दी पकड़ना।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-006",
    "questionEn": "Hand hygiene can reduce diarrheal diseases by approximately:",
    "questionHi": "तृतीयक रोकथाम (Tertiary Prevention) का उदाहरण क्या है?",
    "optionsEn": [
      "10%",
      "20%",
      "40%",
      "80%"
    ],
    "optionsHi": [
      "टीकाकरण",
      "स्क्रीनिंग",
      "विकलांगता का पुनर्वास",
      "स्वच्छता"
    ],
    "correctAnswer": 2,
    "explanationEn": "Proper handwashing can reduce diarrheal diseases by about 40%.",
    "explanationHi": "जटिलताएं और विकलांगता कम करना।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-007",
    "questionEn": "Minimum duration for effective handwashing is:",
    "questionHi": "स्वच्छता (Hygiene) का मुख्य उद्देश्य क्या है?",
    "optionsEn": [
      "5 seconds",
      "10 seconds",
      "20 seconds",
      "60 seconds"
    ],
    "optionsHi": [
      "सुंदरता",
      "रोग रोकथाम और स्वास्थ्य संवर्धन",
      "धन कमाना",
      "मनोरंजन"
    ],
    "correctAnswer": 2,
    "explanationEn": "Hands should be rubbed with soap for at least 20 seconds.",
    "explanationHi": "स्वच्छता संक्रमण रोकती है।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-008",
    "questionEn": "When should hands be washed?",
    "questionHi": "व्यक्तिगत स्वच्छता में क्या शामिल है?",
    "optionsEn": [
      "Only before eating",
      "Only after using toilet",
      "Only when visibly dirty",
      "All critical times including before eating and after toilet"
    ],
    "optionsHi": [
      "केवल नहाना",
      "शारीरिक स्वच्छता, हाथ धोना, मौखिक स्वच्छता",
      "केवल कपड़े धोना",
      "केवल बाल काटना"
    ],
    "correctAnswer": 3,
    "explanationEn": "Hands should be washed at all critical times, not just one occasion.",
    "explanationHi": "व्यापक अवधारणा।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-009",
    "questionEn": "The first step in handwashing is:",
    "questionHi": "हाथ धोना कब जरूरी है?",
    "optionsEn": [
      "Apply soap",
      "Wet hands with water",
      "Rub palms together",
      "Dry hands"
    ],
    "optionsHi": [
      "केवल खाने से पहले",
      "खाने से पहले, शौचालय के बाद, खांसने/छींकने के बाद",
      "केवल सोने से पहले",
      "कभी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Wetting hands with clean water is the first step before applying soap.",
    "explanationHi": "महत्वपूर्ण समय।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-010",
    "questionEn": "Alcohol-based hand rub is NOT effective against:",
    "questionHi": "साबुन से हाथ धोने में कितना समय लगना चाहिए?",
    "optionsEn": [
      "Most bacteria",
      "Most viruses",
      "Bacterial spores",
      "Fungi"
    ],
    "optionsHi": [
      "5 सेकंड",
      "कम से कम 20 सेकंड",
      "1 मिनट",
      "5 मिनट"
    ],
    "correctAnswer": 2,
    "explanationEn": "Alcohol-based hand rubs are not effective against bacterial spores.",
    "explanationHi": "प्रभावी सफाई के लिए।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-011",
    "questionEn": "Teeth should be brushed:",
    "questionHi": "हाथ धोने के 6 चरणों में क्या शामिल है?",
    "optionsEn": [
      "Once daily",
      "Twice daily",
      "Three times daily",
      "Only when dirty"
    ],
    "optionsHi": [
      "केवल हथेली",
      "हथेली, पीछे, उंगलियों के बीच, नाखून, अंगूठे, कलाई",
      "केवल उंगलियां",
      "केवल नाखून"
    ],
    "correctAnswer": 1,
    "explanationEn": "Brushing twice daily is recommended for good oral hygiene.",
    "explanationHi": "पूर्ण सफाई।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-012",
    "questionEn": "Toothbrush should be replaced every:",
    "questionHi": "दांतों को दिन में कितनी बार ब्रश करना चाहिए?",
    "optionsEn": [
      "1 month",
      "3-4 months",
      "6 months",
      "1 year"
    ],
    "optionsHi": [
      "1 बार",
      "कम से कम 2 बार",
      "5 बार",
      "हर घंटे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Toothbrush should be replaced every 3-4 months or when bristles fray.",
    "explanationHi": "सुबह और रात।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-013",
    "questionEn": "Head lice (Pediculosis) spreads through:",
    "questionHi": "टूथब्रश कितने महीने में बदलना चाहिए?",
    "optionsEn": [
      "Water",
      "Close contact and sharing items",
      "Air",
      "Food"
    ],
    "optionsHi": [
      "1 साल",
      "3-4 महीने",
      "कभी नहीं",
      "10 साल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Head lice spread by close contact and sharing combs, hats, etc.",
    "explanationHi": "या जब ब्रिसल्स खराब हों।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-014",
    "questionEn": "Menstrual hygiene includes all EXCEPT:",
    "questionHi": "फ्लोराइड टूथपेस्ट का लाभ क्या है?",
    "optionsEn": [
      "Using clean absorbent material",
      "Changing pads every 4-6 hours",
      "Restricting normal activities",
      "Washing genital area with water"
    ],
    "optionsHi": [
      "सफेद दांत",
      "कैविटी रोकथाम",
      "मसूड़ों की सूजन",
      "कोई लाभ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Menstruation is natural; no restriction on normal activities is needed.",
    "explanationHi": "इनेमल मजबूत करता है।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-015",
    "questionEn": "Sanitary pads should be changed every:",
    "questionHi": "नहाना कितनी बार जरूरी है?",
    "optionsEn": [
      "1-2 hours",
      "4-6 hours",
      "12 hours",
      "24 hours"
    ],
    "optionsHi": [
      "सप्ताह में एक बार",
      "रोजाना (विशेषकर गर्म जलवायु में)",
      "महीने में एक बार",
      "कभी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sanitary pads should be changed every 4-6 hours to prevent infection.",
    "explanationHi": "स्वच्छता और ताजगी।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-016",
    "questionEn": "Wearing footwear prevents:",
    "questionHi": "बालों को कितनी बार धोना चाहिए?",
    "optionsEn": [
      "Malaria",
      "Hookworm infection",
      "Dengue",
      "Typhoid"
    ],
    "optionsHi": [
      "रोजाना जरूरी",
      "सप्ताह में 2-3 बार (बालों के प्रकार अनुसार)",
      "महीने में एक बार",
      "साल में एक बार"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hookworm larvae in soil enter through bare feet, so footwear prevents infection.",
    "explanationHi": "व्यक्तिगत आवश्यकता।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-017",
    "questionEn": "Common foot problem from walking barefoot is:",
    "questionHi": "नाखून क्यों छोटे रखने चाहिए?",
    "optionsEn": [
      "Dental caries",
      "Hookworm entry",
      "Conjunctivitis",
      "Head lice"
    ],
    "optionsHi": [
      "सुंदरता के लिए",
      "गंदगी और जीवाणुओं के जमाव से बचने के लिए",
      "फैशन के लिए",
      "कोई कारण नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hookworm filariform larvae penetrate skin when walking barefoot.",
    "explanationHi": "संक्रमण रोकथाम।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-018",
    "questionEn": "Trachoma is a disease of:",
    "questionHi": "साफ कपड़े पहनने का महत्व क्या है?",
    "optionsEn": [
      "Skin",
      "Eyes",
      "Hair",
      "Nails"
    ],
    "optionsHi": [
      "फैशन",
      "त्वचा संक्रमण और बदबू से बचाव",
      "दिखावा",
      "कोई महत्व नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Trachoma is an eye infection caused by poor hygiene.",
    "explanationHi": "स्वच्छता और स्वास्थ्य।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-019",
    "questionEn": "Minimum water requirement per person per day is:",
    "questionHi": "अंडरवियर कितनी बार बदलना चाहिए?",
    "optionsEn": [
      "10 liters",
      "20 liters",
      "50 liters",
      "100 liters"
    ],
    "optionsHi": [
      "हफ्ते में एक बार",
      "रोजाना",
      "महीने में एक बार",
      "कभी नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Minimum 50 liters per person per day is recommended for all needs.",
    "explanationHi": "स्वच्छता और संक्रमण रोकथाम।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-020",
    "questionEn": "Percentage of diseases in developing countries related to water:",
    "questionHi": "मासिक धर्म स्वच्छता में क्या शामिल है?",
    "optionsEn": [
      "20%",
      "40%",
      "60%",
      "80%"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "सैनिटरी पैड/कपड़ा बदलना, जननांग क्षेत्र साफ रखना",
      "केवल आराम",
      "केवल दवाई"
    ],
    "correctAnswer": 3,
    "explanationEn": "About 80% of diseases in developing countries are water-related.",
    "explanationHi": "संक्रमण रोकथाम।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-021",
    "questionEn": "Groundwater sources include all EXCEPT:",
    "questionHi": "सैनिटरी पैड कितने घंटे में बदलना चाहिए?",
    "optionsEn": [
      "Wells",
      "Rivers",
      "Tube wells",
      "Springs"
    ],
    "optionsHi": [
      "24 घंटे",
      "4-6 घंटे",
      "1 सप्ताह",
      "कभी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rivers are surface water sources, not groundwater.",
    "explanationHi": "संक्रमण से बचाव।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-022",
    "questionEn": "pH range for safe drinking water is:",
    "questionHi": "इस्तेमाल किए सैनिटरी पैड का निपटान कैसे करें?",
    "optionsEn": [
      "4.0-5.0",
      "6.5-8.5",
      "9.0-10.0",
      "10.0-12.0"
    ],
    "optionsHi": [
      "कहीं भी फेंकें",
      "कागज में लपेटकर कूड़ेदान में",
      "शौचालय में फ्लश करें",
      "जला दें खुले में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Safe drinking water pH should be between 6.5 and 8.5.",
    "explanationHi": "उचित निपटान।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-023",
    "questionEn": "Fluoride in drinking water should not exceed:",
    "questionHi": "खांसी/छींक का शिष्टाचार क्या है?",
    "optionsEn": [
      "0.5 mg/L",
      "1.5 mg/L",
      "3.0 mg/L",
      "5.0 mg/L"
    ],
    "optionsHi": [
      "खुले में खांसें",
      "टिशू/कोहनी में खांसें/छींकें",
      "दूसरों की ओर खांसें",
      "कुछ न करें"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fluoride should be 0.6-1.2 mg/L; excess causes fluorosis.",
    "explanationHi": "संक्रमण फैलाव रोकना।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-024",
    "questionEn": "Most effective household water purification method is:",
    "questionHi": "थूकना क्यों गलत है?",
    "optionsEn": [
      "Filtration",
      "Boiling",
      "Sedimentation",
      "Aeration"
    ],
    "optionsHi": [
      "सुंदरता के लिए",
      "TB जैसे रोग फैलते हैं, प्रदूषण होता है",
      "कोई कारण नहीं",
      "अच्छा होता है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Boiling kills all pathogens and is most effective for household use.",
    "explanationHi": "सार्वजनिक स्वास्थ्य।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-025",
    "questionEn": "Water should be boiled for how long for purification?",
    "questionHi": "पैरों की स्वच्छता क्यों जरूरी है?",
    "optionsEn": [
      "30 seconds",
      "1-3 minutes rolling boil",
      "10 minutes",
      "30 minutes"
    ],
    "optionsHi": [
      "सुंदरता",
      "फंगल संक्रमण और बदबू से बचाव",
      "फैशन",
      "कोई कारण नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "A rolling boil for 1-3 minutes is sufficient to kill pathogens.",
    "explanationHi": "एथलीट फुट रोकना।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-026",
    "questionEn": "Residual chlorine in treated water should be:",
    "questionHi": "जूते/चप्पल पहनने का महत्व क्या है?",
    "optionsEn": [
      "0",
      "0.2-0.5 mg/L",
      "2-3 mg/L",
      "5 mg/L"
    ],
    "optionsHi": [
      "फैशन",
      "हुकवर्म और अन्य संक्रमण से बचाव, चोट से बचाव",
      "कोई महत्व नहीं",
      "केवल सुंदरता"
    ],
    "correctAnswer": 1,
    "explanationEn": "Residual chlorine of 0.2-0.5 mg/L provides continued protection.",
    "explanationHi": "मिट्टी से संपर्क रोकना।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-027",
    "questionEn": "SODIS (Solar Disinfection) requires exposure to sunlight for:",
    "questionHi": "आंखों की स्वच्छता में क्या शामिल है?",
    "optionsEn": [
      "1-2 hours",
      "6+ hours",
      "24 hours",
      "48 hours"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "साफ पानी से धोना, गंदे हाथों से न छूना",
      "केवल काजल लगाना",
      "कुछ भी डालना"
    ],
    "correctAnswer": 1,
    "explanationEn": "SODIS requires 6 or more hours of direct sunlight.",
    "explanationHi": "आंख संक्रमण रोकना।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-028",
    "questionEn": "Safe water storage requires:",
    "questionHi": "कान की स्वच्छता कैसे करें?",
    "optionsEn": [
      "Open containers",
      "Narrow-mouthed covered containers",
      "Hands dipping in water",
      "Ground storage"
    ],
    "optionsHi": [
      "तेज वस्तुओं से",
      "बाहरी भाग को साफ करें, गहराई में न जाएं",
      "कुछ भी डालें",
      "कभी साफ न करें"
    ],
    "correctAnswer": 1,
    "explanationEn": "Covered containers with narrow opening prevent contamination.",
    "explanationHi": "कान की चोट से बचाव।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-029",
    "questionEn": "Cholera is caused by:",
    "questionHi": "व्यक्तिगत स्वच्छता से कौन से रोग रुक सकते हैं?",
    "optionsEn": [
      "Salmonella typhi",
      "Vibrio cholerae",
      "E. coli",
      "Shigella"
    ],
    "optionsHi": [
      "हृदय रोग",
      "दस्त, त्वचा संक्रमण, कृमि, ट्रेकोमा",
      "कैंसर",
      "मधुमेह"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vibrio cholerae causes cholera transmitted through contaminated water.",
    "explanationHi": "संक्रामक रोग।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-030",
    "questionEn": "Hepatitis A is transmitted through:",
    "questionHi": "स्वच्छता शिक्षा किसे देनी चाहिए?",
    "optionsEn": [
      "Blood",
      "Air",
      "Fecal-oral route",
      "Insects"
    ],
    "optionsHi": [
      "केवल बच्चों को",
      "सभी को - बच्चे, वयस्क, समुदाय",
      "केवल महिलाओं को",
      "किसी को नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Hepatitis A spreads through fecal-oral route via contaminated water.",
    "explanationHi": "सार्वभौमिक जागरूकता।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-031",
    "questionEn": "Excess fluoride in water causes:",
    "questionHi": "सुरक्षित पेयजल की परिभाषा क्या है?",
    "optionsEn": [
      "Cholera",
      "Fluorosis",
      "Typhoid",
      "Dysentery"
    ],
    "optionsHi": [
      "साफ दिखने वाला",
      "रोगजनकों और हानिकारक रसायनों से मुक्त",
      "रंगीन",
      "गंधयुक्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "Excess fluoride causes dental and skeletal fluorosis.",
    "explanationHi": "WHO मानक।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-032",
    "questionEn": "Blue baby syndrome is caused by excess:",
    "questionHi": "प्रति व्यक्ति प्रतिदिन कितना पानी आवश्यक है (पीने और स्वच्छता के लिए)?",
    "optionsEn": [
      "Fluoride",
      "Arsenic",
      "Nitrates",
      "Iron"
    ],
    "optionsHi": [
      "5 लीटर",
      "50-100 लीटर",
      "500 लीटर",
      "1 लीटर"
    ],
    "correctAnswer": 2,
    "explanationEn": "High nitrates cause methemoglobinemia (blue baby syndrome).",
    "explanationHi": "बुनियादी जरूरत।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-033",
    "questionEn": "H2S strip test is used for:",
    "questionHi": "केवल पीने के लिए कितना पानी चाहिए?",
    "optionsEn": [
      "pH testing",
      "Bacterial contamination testing",
      "Fluoride testing",
      "Hardness testing"
    ],
    "optionsHi": [
      "100 लीटर",
      "2-3 लीटर प्रतिदिन",
      "20 लीटर",
      "0.5 लीटर"
    ],
    "correctAnswer": 1,
    "explanationEn": "H2S strip test is a field method for detecting bacterial contamination.",
    "explanationHi": "पीने की आवश्यकता।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-034",
    "questionEn": "Open defecation causes all diseases EXCEPT:",
    "questionHi": "जल के स्रोत कौन से हैं?",
    "optionsEn": [
      "Diarrhea",
      "Hookworm",
      "Measles",
      "Typhoid"
    ],
    "optionsHi": [
      "केवल नदी",
      "भूजल (कुआं, बोरवेल), सतही जल (नदी, झील), वर्षा जल",
      "केवल समुद्र",
      "केवल बोतलबंद"
    ],
    "correctAnswer": 2,
    "explanationEn": "Measles is airborne; others are related to fecal-oral/soil transmission.",
    "explanationHi": "विभिन्न स्रोत।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-035",
    "questionEn": "F-diagram shows transmission through:",
    "questionHi": "जल प्रदूषण के कारण क्या हैं?",
    "optionsEn": [
      "Air",
      "Feces to mouth pathways",
      "Blood",
      "Direct contact"
    ],
    "optionsHi": [
      "केवल कारखाने",
      "सीवेज, औद्योगिक अपशिष्ट, कृषि रसायन, खुले में शौच",
      "कुछ नहीं",
      "केवल वर्षा"
    ],
    "correctAnswer": 1,
    "explanationEn": "F-diagram shows fecal-oral transmission routes (Fingers, Flies, Fluids, etc.).",
    "explanationHi": "विभिन्न स्रोत।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-036",
    "questionEn": "A sanitary latrine must have:",
    "questionHi": "जल-जनित रोगों के उदाहरण क्या हैं?",
    "optionsEn": [
      "Flies access",
      "Water seal",
      "Open pit",
      "No superstructure"
    ],
    "optionsHi": [
      "मलेरिया",
      "हैजा, टाइफाइड, हेपेटाइटिस A/E, दस्त",
      "डेंगू",
      "TB"
    ],
    "correctAnswer": 1,
    "explanationEn": "Water seal prevents flies and odor, essential for sanitary latrine.",
    "explanationHi": "दूषित पानी से।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-037",
    "questionEn": "Minimum water seal depth in pour-flush latrine is:",
    "questionHi": "पानी में E. coli की उपस्थिति क्या दर्शाती है?",
    "optionsEn": [
      "5 mm",
      "10 mm",
      "20 mm",
      "50 mm"
    ],
    "optionsHi": [
      "शुद्ध पानी",
      "मल संदूषण",
      "खनिज पानी",
      "स्वादिष्ट पानी"
    ],
    "correctAnswer": 2,
    "explanationEn": "Minimum 20 mm water seal prevents passage of gases and flies.",
    "explanationHi": "इंडिकेटर ऑर्गेनिज्म।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-038",
    "questionEn": "VIP latrine stands for:",
    "questionHi": "घरेलू जल शुद्धिकरण के तरीके क्या हैं?",
    "optionsEn": [
      "Very Important Pit",
      "Ventilated Improved Pit",
      "Verified Indoor Pit",
      "Village Indoor Pit"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "उबालना, क्लोरीनेशन, फिल्ट्रेशन, SODIS",
      "केवल छानना",
      "केवल रखना"
    ],
    "correctAnswer": 1,
    "explanationEn": "VIP is Ventilated Improved Pit latrine with vent pipe and fly screen.",
    "explanationHi": "विभिन्न विधियां।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-039",
    "questionEn": "Twin-pit pour-flush latrine advantages include:",
    "questionHi": "पानी उबालकर शुद्ध करने के लिए कितना उबालना चाहिए?",
    "optionsEn": [
      "One pit only needed",
      "Alternating use allows safe pit emptying",
      "No water needed",
      "Higher cost"
    ],
    "optionsHi": [
      "गर्म करना",
      "उबाल आने के बाद 1-3 मिनट",
      "10 सेकंड",
      "1 घंटा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Twin pits allow one to be used while other decomposes safely.",
    "explanationHi": "रोगजनक मारने के लिए।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-040",
    "questionEn": "Latrine should be located at least how far from water source?",
    "questionHi": "क्लोरीनेशन क्या है?",
    "optionsEn": [
      "5 meters",
      "10 meters",
      "15 meters",
      "30 meters"
    ],
    "optionsHi": [
      "रंग मिलाना",
      "क्लोरीन/ब्लीच से पानी कीटाणुरहित करना",
      "नमक मिलाना",
      "चीनी मिलाना"
    ],
    "correctAnswer": 2,
    "explanationEn": "Minimum 15 meters distance prevents groundwater contamination.",
    "explanationHi": "जल शुद्धिकरण।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-041",
    "questionEn": "ODF stands for:",
    "questionHi": "SODIS (Solar Disinfection) क्या है?",
    "optionsEn": [
      "Only Domestic Facilities",
      "Open Defecation Free",
      "Official District Forum",
      "Outdoor Facility Design"
    ],
    "optionsHi": [
      "सोलर पैनल",
      "प्लास्टिक बोतल में पानी को धूप में रखकर शुद्ध करना",
      "बिजली से",
      "गर्म करना"
    ],
    "correctAnswer": 1,
    "explanationEn": "ODF means Open Defecation Free - no visible feces in environment.",
    "explanationHi": "UV कीटाणुनाशन।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-042",
    "questionEn": "Swachh Bharat Mission was launched in:",
    "questionHi": "SODIS के लिए पानी कितने घंटे धूप में रखें?",
    "optionsEn": [
      "2010",
      "2012",
      "2014",
      "2016"
    ],
    "optionsHi": [
      "1 घंटा",
      "6 घंटे (तेज धूप में)",
      "1 मिनट",
      "1 सप्ताह"
    ],
    "correctAnswer": 2,
    "explanationEn": "Swachh Bharat Mission was launched on October 2, 2014.",
    "explanationHi": "प्रभावी शुद्धिकरण।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-043",
    "questionEn": "Septic tank requires:",
    "questionHi": "पानी के भंडारण का सही तरीका क्या है?",
    "optionsEn": [
      "Weekly emptying",
      "Periodic desludging",
      "Daily cleaning",
      "No maintenance"
    ],
    "optionsHi": [
      "खुले बर्तन में",
      "ढके हुए साफ बर्तन में, हाथ न डालें",
      "गंदे बर्तन में",
      "कहीं भी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Septic tanks need periodic desludging every 2-3 years.",
    "explanationHi": "पुनः संदूषण रोकना।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-044",
    "questionEn": "Biodegradable waste should be put in:",
    "questionHi": "पानी निकालने का सही तरीका क्या है?",
    "optionsEn": [
      "Blue bin",
      "Green bin",
      "Black bin",
      "Red bin"
    ],
    "optionsHi": [
      "हाथ डालकर",
      "लंबे हैंडल वाले बर्तन से या नल से",
      "मुंह से",
      "कपड़े से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Green bin is for biodegradable/wet waste like food scraps.",
    "explanationHi": "संदूषण से बचाव।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-045",
    "questionEn": "Dry recyclable waste goes in:",
    "questionHi": "RO (Reverse Osmosis) का उपयोग क्या है?",
    "optionsEn": [
      "Green bin",
      "Blue bin",
      "Yellow bin",
      "Black bin"
    ],
    "optionsHi": [
      "पानी गर्म करना",
      "TDS और अशुद्धियां हटाना",
      "पानी ठंडा करना",
      "रंग बदलना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Blue bin is for dry recyclable waste like plastic, paper, metal.",
    "explanationHi": "शुद्धिकरण।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-046",
    "questionEn": "Composting converts organic waste to:",
    "questionHi": "फ्लोरोसिस किस कारण होता है?",
    "optionsEn": [
      "Plastic",
      "Manure",
      "Gas only",
      "Water"
    ],
    "optionsHi": [
      "कम फ्लोराइड",
      "पानी में अधिक फ्लोराइड",
      "कम आयोडीन",
      "अधिक आयरन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Composting produces nutrient-rich manure from organic waste.",
    "explanationHi": ">1.5 mg/L।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-047",
    "questionEn": "Time required for composting is:",
    "questionHi": "फ्लोरोसिस के लक्षण क्या हैं?",
    "optionsEn": [
      "1 week",
      "2-3 months",
      "1 year",
      "2 years"
    ],
    "optionsHi": [
      "बुखार",
      "दांतों पर धब्बे, हड्डी विकृति",
      "खांसी",
      "दस्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "Composting takes about 2-3 months to produce usable compost.",
    "explanationHi": "डेंटल और स्केलेटल।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-048",
    "questionEn": "Vermicomposting uses:",
    "questionHi": "आर्सेनिकोसिस किस कारण होता है?",
    "optionsEn": [
      "Bacteria",
      "Earthworms",
      "Chemicals",
      "Heat"
    ],
    "optionsHi": [
      "कम आर्सेनिक",
      "पानी में अधिक आर्सेनिक",
      "कम आयोडीन",
      "अधिक कैल्शियम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vermicomposting uses earthworms to convert organic waste to compost.",
    "explanationHi": ">10 μg/L।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-049",
    "questionEn": "Yellow bag in biomedical waste is for:",
    "questionHi": "आर्सेनिकोसिस के लक्षण क्या हैं?",
    "optionsEn": [
      "Sharps",
      "Infectious and pathological waste",
      "Glass",
      "Recyclables"
    ],
    "optionsHi": [
      "बुखार",
      "त्वचा घाव, हाथ-पैर का काला पड़ना, कैंसर जोखिम",
      "खांसी",
      "दस्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "Yellow bags collect infectious, anatomical waste for incineration.",
    "explanationHi": "गंभीर स्वास्थ्य प्रभाव।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-050",
    "questionEn": "Sharps in healthcare should be disposed in:",
    "questionHi": "जल जीवन मिशन का उद्देश्य क्या है?",
    "optionsEn": [
      "Yellow bag",
      "White puncture-resistant container",
      "Blue bag",
      "Regular trash"
    ],
    "optionsHi": [
      "बिजली देना",
      "हर घर नल का जल (Har Ghar Jal)",
      "सड़क बनाना",
      "स्कूल खोलना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sharps go in white puncture-resistant containers.",
    "explanationHi": "2024 तक लक्ष्य।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-051",
    "questionEn": "3Rs of waste management stands for:",
    "questionHi": "स्वच्छता (Sanitation) का मुख्य उद्देश्य क्या है?",
    "optionsEn": [
      "Reduce, Reuse, Recycle",
      "Remove, Return, Reduce",
      "Reuse, Return, Recycle",
      "Reduce, Remove, Return"
    ],
    "optionsHi": [
      "सुंदरता",
      "मल और अपशिष्ट का सुरक्षित निपटान",
      "धन कमाना",
      "मनोरंजन"
    ],
    "correctAnswer": 0,
    "explanationEn": "3Rs: Reduce waste generation, Reuse items, Recycle materials.",
    "explanationHi": "रोग रोकथाम।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-052",
    "questionEn": "Sharps containers should be filled only up to:",
    "questionHi": "खुले में शौच (OD) के खतरे क्या हैं?",
    "optionsEn": [
      "Full",
      "3/4 full",
      "Half full",
      "1/4 full"
    ],
    "optionsHi": [
      "कोई खतरा नहीं",
      "रोग फैलाव, जल प्रदूषण, महिलाओं की सुरक्षा",
      "स्वास्थ्य लाभ",
      "पर्यावरण लाभ"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sharps containers should not be filled beyond 3/4 to prevent injuries.",
    "explanationHi": "गंभीर समस्या।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-053",
    "questionEn": "Sanitary landfill has:",
    "questionHi": "F-diagram क्या दर्शाता है?",
    "optionsEn": [
      "No liner",
      "Bottom liner and leachate collection",
      "Open dumping",
      "No cover"
    ],
    "optionsHi": [
      "खाना पकाना",
      "फीकल-ओरल ट्रांसमिशन के मार्ग",
      "फ्लोराइड",
      "फाइबर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sanitary landfills have engineered liner, leachate collection, daily cover.",
    "explanationHi": "Fingers, Flies, Fields, Fluids, Food।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-054",
    "questionEn": "WHO's five keys to safer food includes all EXCEPT:",
    "questionHi": "शौचालय के प्रकार क्या हैं?",
    "optionsEn": [
      "Keep clean",
      "Separate raw and cooked",
      "Add preservatives",
      "Cook thoroughly"
    ],
    "optionsHi": [
      "केवल फ्लश",
      "पिट लैट्रीन, पोर फ्लश, सेप्टिक टैंक, सीवर कनेक्टेड",
      "केवल खुला",
      "कोई प्रकार नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Five keys: Clean, Separate, Cook thoroughly, Safe temperatures, Safe water.",
    "explanationHi": "विभिन्न प्रकार।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-055",
    "questionEn": "Food danger zone temperature is:",
    "questionHi": "सेप्टिक टैंक का कार्य क्या है?",
    "optionsEn": [
      "0-5°C",
      "5-60°C",
      "60-80°C",
      "Above 100°C"
    ],
    "optionsHi": [
      "पानी गर्म करना",
      "मल का एनारोबिक पाचन",
      "खाना बनाना",
      "कपड़े धोना"
    ],
    "correctAnswer": 1,
    "explanationEn": "5-60°C is danger zone where bacteria multiply rapidly.",
    "explanationHi": "ऑन-साइट सैनिटेशन।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-056",
    "questionEn": "Food should be cooked to internal temperature of:",
    "questionHi": "सेप्टिक टैंक कब खाली करवाना चाहिए?",
    "optionsEn": [
      "40°C",
      "50°C",
      "70°C",
      "100°C"
    ],
    "optionsHi": [
      "कभी नहीं",
      "3-5 साल में एक बार (उपयोग अनुसार)",
      "हर दिन",
      "हर घंटे"
    ],
    "correctAnswer": 2,
    "explanationEn": "Internal temperature of 70°C kills most foodborne pathogens.",
    "explanationHi": "नियमित रखरखाव।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-057",
    "questionEn": "Cooked food should not be left at room temperature for more than:",
    "questionHi": "सोक पिट का उपयोग क्या है?",
    "optionsEn": [
      "30 minutes",
      "1 hour",
      "2 hours",
      "6 hours"
    ],
    "optionsHi": [
      "पीने का पानी",
      "सेप्टिक टैंक के तरल का जमीन में अवशोषण",
      "खाना बनाना",
      "नहाना"
    ],
    "correctAnswer": 2,
    "explanationEn": "Cooked food at room temperature beyond 2 hours enters danger zone.",
    "explanationHi": "अपशिष्ट जल निपटान।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-058",
    "questionEn": "Cross-contamination occurs when:",
    "questionHi": "शौचालय को जल स्रोत से कितनी दूरी पर बनाना चाहिए?",
    "optionsEn": [
      "Food is cooked",
      "Pathogens transfer from raw to cooked food",
      "Food is refrigerated",
      "Food is washed"
    ],
    "optionsHi": [
      "1 मीटर",
      "कम से कम 15-30 मीटर",
      "0 मीटर",
      "1 किमी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cross-contamination is transfer of pathogens between foods.",
    "explanationHi": "जल प्रदूषण रोकना।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-059",
    "questionEn": "Salmonellosis is commonly transmitted through:",
    "questionHi": "स्वच्छ भारत मिशन कब शुरू हुआ?",
    "optionsEn": [
      "Air",
      "Water only",
      "Eggs and poultry",
      "Skin contact"
    ],
    "optionsHi": [
      "2010",
      "2014 (2 अक्टूबर)",
      "2020",
      "2000"
    ],
    "correctAnswer": 2,
    "explanationEn": "Salmonella commonly spreads through contaminated eggs and poultry.",
    "explanationHi": "गांधी जयंती।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-060",
    "questionEn": "Staphylococcal food poisoning is caused by:",
    "questionHi": "ODF (Open Defecation Free) का क्या मतलब है?",
    "optionsEn": [
      "Contaminated water",
      "Food handled by infected person",
      "Soil",
      "Insects"
    ],
    "optionsHi": [
      "खुले में शौच जारी",
      "कोई भी खुले में शौच नहीं करता",
      "केवल शहरों में",
      "केवल गांवों में"
    ],
    "correctAnswer": 1,
    "explanationEn": "S. aureus from infected food handlers contaminates food.",
    "explanationHi": "स्वच्छता लक्ष्य।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-061",
    "questionEn": "Botulism is associated with:",
    "questionHi": "स्वच्छ भारत मिशन (ग्रामीण) का फोकस क्या है?",
    "optionsEn": [
      "Fresh vegetables",
      "Improperly canned foods",
      "Fresh fruits",
      "Well-cooked meat"
    ],
    "optionsHi": [
      "सड़क",
      "शौचालय निर्माण, ODF, ठोस और तरल अपशिष्ट प्रबंधन",
      "बिजली",
      "स्कूल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Botulism toxin forms in anaerobic conditions like improper canning.",
    "explanationHi": "ग्रामीण स्वच्छता।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-062",
    "questionEn": "FIFO in food storage stands for:",
    "questionHi": "ट्विन पिट लैट्रीन का लाभ क्या है?",
    "optionsEn": [
      "Fast In Fast Out",
      "First In First Out",
      "Food In Food Out",
      "Fresh Is For Outdoors"
    ],
    "optionsHi": [
      "एक बार उपयोग",
      "एक पिट भरने पर दूसरे का उपयोग, खाद बनना",
      "महंगा",
      "कठिन रखरखाव"
    ],
    "correctAnswer": 1,
    "explanationEn": "FIFO: First In First Out - use older stock first.",
    "explanationHi": "स्थायी समाधान।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-063",
    "questionEn": "FSSAI is responsible for:",
    "questionHi": "मैला ढोने की प्रथा (Manual Scavenging) पर क्या है?",
    "optionsEn": [
      "Water supply",
      "Food safety and standards",
      "Housing",
      "Waste management"
    ],
    "optionsHi": [
      "अनुमति है",
      "कानूनन प्रतिबंधित (2013 अधिनियम)",
      "प्रोत्साहन है",
      "कोई कानून नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "FSSAI regulates food safety and standards in India.",
    "explanationHi": "मानवाधिकार।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-064",
    "questionEn": "Food handlers should report to work only if they:",
    "questionHi": "ग्रे वाटर क्या है?",
    "optionsEn": [
      "Have cold",
      "Have diarrhea",
      "Are healthy without active infection",
      "Have fever"
    ],
    "optionsHi": [
      "मल युक्त पानी",
      "नहाने, धोने का अपशिष्ट जल (मल रहित)",
      "वर्षा जल",
      "पीने का पानी"
    ],
    "correctAnswer": 2,
    "explanationEn": "Food handlers should not work when ill to prevent contamination.",
    "explanationHi": "पुनः उपयोग संभव।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-065",
    "questionEn": "Minimum floor area per person in healthy housing is:",
    "questionHi": "ब्लैक वाटर क्या है?",
    "optionsEn": [
      "5 sq.m",
      "9-10 sq.m",
      "20 sq.m",
      "50 sq.m"
    ],
    "optionsHi": [
      "साफ पानी",
      "शौचालय से मल युक्त अपशिष्ट जल",
      "वर्षा जल",
      "नहाने का पानी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Minimum 9-10 sq.m per person is recommended standard.",
    "explanationHi": "उपचार जरूरी।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-066",
    "questionEn": "Window area should be what percentage of floor area?",
    "questionHi": "खाद्य स्वच्छता क्यों जरूरी है?",
    "optionsEn": [
      "5%",
      "10-20%",
      "30-40%",
      "50%"
    ],
    "optionsHi": [
      "स्वाद के लिए",
      "खाद्य-जनित रोगों से बचाव",
      "रंग के लिए",
      "कोई कारण नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Window area should be 10-20% of floor area for adequate lighting.",
    "explanationHi": "Food Safety।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-067",
    "questionEn": "Cross-ventilation is achieved by:",
    "questionHi": "WHO के अनुसार खाद्य सुरक्षा की 5 कुंजी (5 Keys) क्या हैं?",
    "optionsEn": [
      "Windows on same wall",
      "Openings on opposite walls",
      "Ceiling fans only",
      "Air conditioning"
    ],
    "optionsHi": [
      "केवल पकाना",
      "साफ रखें, कच्चा-पका अलग, अच्छी तरह पकाएं, सुरक्षित तापमान, सुरक्षित पानी/कच्चा माल",
      "केवल धोना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cross-ventilation requires openings on opposite walls.",
    "explanationHi": "WHO गाइडलाइन।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-068",
    "questionEn": "Air changes per hour for living spaces should be:",
    "questionHi": "खाद्य विषाक्तता (Food Poisoning) के आम कारण क्या हैं?",
    "optionsEn": [
      "1-2",
      "3-6",
      "10-15",
      "20-25"
    ],
    "optionsHi": [
      "स्वच्छ खाना",
      "बैक्टीरिया (Salmonella, S. aureus), वायरस, परजीवी",
      "साफ पानी",
      "ताजा फल"
    ],
    "correctAnswer": 1,
    "explanationEn": "3-6 air changes per hour recommended for living spaces.",
    "explanationHi": "दूषित भोजन से।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-069",
    "questionEn": "Overcrowding increases transmission of:",
    "questionHi": "खाद्य विषाक्तता के लक्षण क्या हैं?",
    "optionsEn": [
      "Malaria",
      "Dengue",
      "Respiratory infections and TB",
      "Typhoid"
    ],
    "optionsHi": [
      "खांसी",
      "उल्टी, दस्त, पेट दर्द, बुखार",
      "सिरदर्द केवल",
      "त्वचा रैश"
    ],
    "correctAnswer": 2,
    "explanationEn": "Overcrowding facilitates spread of airborne respiratory infections.",
    "explanationHi": "आम लक्षण।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-070",
    "questionEn": "Indoor air pollution is mainly caused by:",
    "questionHi": "खतरे का क्षेत्र (Danger Zone) क्या है?",
    "optionsEn": [
      "Outdoor pollution",
      "Biomass fuel combustion",
      "Paint",
      "Furniture"
    ],
    "optionsHi": [
      "0°C से नीचे",
      "5-60°C (जहां बैक्टीरिया तेजी से बढ़ते हैं)",
      "100°C से ऊपर",
      "कोई क्षेत्र नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Burning wood, dung, coal for cooking causes major indoor pollution.",
    "explanationHi": "तापमान नियंत्रण।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-071",
    "questionEn": "Who is most affected by indoor air pollution?",
    "questionHi": "पका हुआ खाना कितने समय में खा लेना चाहिए?",
    "optionsEn": [
      "Adult men",
      "Women and children",
      "Teenagers",
      "Office workers"
    ],
    "optionsHi": [
      "24 घंटे",
      "2 घंटे के भीतर (यदि कमरे के तापमान पर)",
      "1 सप्ताह",
      "1 महीना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Women (cooking) and young children are most exposed.",
    "explanationHi": "Danger Zone से बचाव।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-072",
    "questionEn": "Indoor air pollution can cause all EXCEPT:",
    "questionHi": "खाना गर्म रखने का तापमान क्या होना चाहिए?",
    "optionsEn": [
      "Respiratory infections",
      "COPD",
      "Cataracts",
      "Malaria"
    ],
    "optionsHi": [
      "30°C",
      "60°C से ऊपर",
      "10°C",
      "0°C"
    ],
    "correctAnswer": 3,
    "explanationEn": "Malaria is mosquito-borne, not related to indoor air pollution.",
    "explanationHi": "बैक्टीरिया वृद्धि रोकना।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-073",
    "questionEn": "Ujjwala Yojana provides:",
    "questionHi": "खाना ठंडा रखने का तापमान क्या होना चाहिए?",
    "optionsEn": [
      "Toilets",
      "LPG connections to BPL households",
      "Water supply",
      "Housing"
    ],
    "optionsHi": [
      "30°C",
      "5°C से नीचे (रेफ्रिजरेटर)",
      "60°C",
      "100°C"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pradhan Mantri Ujjwala Yojana provides free LPG connections.",
    "explanationHi": "बैक्टीरिया वृद्धि धीमी।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-074",
    "questionEn": "Improved cookstoves help by:",
    "questionHi": "कच्चा और पका भोजन क्यों अलग रखना चाहिए?",
    "optionsEn": [
      "Increasing smoke",
      "Reducing smoke through better combustion and chimney",
      "Using more fuel",
      "Cooking faster only"
    ],
    "optionsHi": [
      "स्वाद के लिए",
      "क्रॉस-कंटैमिनेशन रोकने के लिए",
      "रंग के लिए",
      "कोई कारण नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Improved stoves burn efficiently and vent smoke outside.",
    "explanationHi": "सुरक्षा।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-075",
    "questionEn": "Vectors are organisms that:",
    "questionHi": "मांस को कितने तापमान पर पकाना चाहिए?",
    "optionsEn": [
      "Cause diseases directly",
      "Transmit pathogens between hosts",
      "Treat diseases",
      "Prevent diseases"
    ],
    "optionsHi": [
      "50°C",
      "आंतरिक तापमान 70°C या उससे अधिक",
      "30°C",
      "10°C"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vectors transmit infectious agents between humans or from animals.",
    "explanationHi": "पूर्ण पकाना।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-076",
    "questionEn": "Malaria is transmitted by:",
    "questionHi": "फल और सब्जियां खाने से पहले क्या करें?",
    "optionsEn": [
      "Aedes mosquito",
      "Anopheles mosquito",
      "Culex mosquito",
      "All mosquitoes"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "साफ पानी से अच्छी तरह धोएं",
      "मिट्टी लगी रहने दें",
      "केवल पोंछें"
    ],
    "correctAnswer": 1,
    "explanationEn": "Only female Anopheles mosquitoes transmit malaria.",
    "explanationHi": "कीटाणु और कीटनाशक हटाना।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-077",
    "questionEn": "Dengue is transmitted by:",
    "questionHi": "डिब्बाबंद खाने में क्या जांचें?",
    "optionsEn": [
      "Anopheles",
      "Aedes mosquito",
      "Culex",
      "Sandfly"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "एक्सपायरी डेट, फूला हुआ/क्षतिग्रस्त डिब्बा न लें",
      "केवल रंग",
      "केवल आकार"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aedes aegypti transmits dengue, chikungunya, Zika.",
    "explanationHi": "सुरक्षा जांच।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-078",
    "questionEn": "Aedes mosquito breeds in:",
    "questionHi": "FSSAI का पूर्ण रूप क्या है?",
    "optionsEn": [
      "Dirty water",
      "Clean stagnant water in containers",
      "Flowing water",
      "Underground water"
    ],
    "optionsHi": [
      "Food Safety and Security Authority",
      "Food Safety and Standards Authority of India",
      "Food and Safety Association",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aedes breeds in clean stagnant water in artificial containers.",
    "explanationHi": "भारत का खाद्य नियामक।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-079",
    "questionEn": "Aedes mosquito bites during:",
    "questionHi": "खाद्य मिलावट क्या है?",
    "optionsEn": [
      "Night only",
      "Day time (early morning and late afternoon)",
      "Midnight",
      "Any time"
    ],
    "optionsHi": [
      "खाना बनाना",
      "खाद्य पदार्थों में घटिया/हानिकारक पदार्थ मिलाना",
      "खाना खाना",
      "खाना बेचना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aedes bites during day, especially early morning and late afternoon.",
    "explanationHi": "अपराध।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-080",
    "questionEn": "Culex mosquito transmits:",
    "questionHi": "दूध में आम मिलावट क्या है?",
    "optionsEn": [
      "Malaria",
      "Dengue",
      "Filariasis and Japanese Encephalitis",
      "Chikungunya"
    ],
    "optionsHi": [
      "चीनी",
      "पानी, यूरिया, डिटर्जेंट, स्टार्च",
      "नमक",
      "मसाले"
    ],
    "correctAnswer": 2,
    "explanationEn": "Culex transmits lymphatic filariasis and Japanese encephalitis.",
    "explanationHi": "आम मिलावट।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-081",
    "questionEn": "Culex breeds in:",
    "questionHi": "स्वस्थ आवास की मुख्य विशेषता क्या है?",
    "optionsEn": [
      "Clean water",
      "Polluted water like drains",
      "Running water",
      "Sea water"
    ],
    "optionsHi": [
      "महंगा होना",
      "पर्याप्त रोशनी, हवा, जगह, पानी, स्वच्छता",
      "केवल बड़ा",
      "केवल सुंदर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Culex breeds in polluted water including blocked drains.",
    "explanationHi": "स्वास्थ्यकर वातावरण।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-082",
    "questionEn": "Kala-azar (Leishmaniasis) is transmitted by:",
    "questionHi": "प्रति व्यक्ति कितनी फर्श जगह (Floor Space) होनी चाहिए?",
    "optionsEn": [
      "Mosquito",
      "Fly",
      "Sandfly",
      "Tick"
    ],
    "optionsHi": [
      "1 sq ft",
      "कम से कम 50-100 sq ft",
      "500 sq ft",
      "1 sq meter केवल"
    ],
    "correctAnswer": 2,
    "explanationEn": "Sandflies transmit Leishmania parasite causing kala-azar.",
    "explanationHi": "मानक।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-083",
    "questionEn": "House flies transmit diseases through:",
    "questionHi": "भीड़भाड़ (Overcrowding) से क्या समस्याएं होती हैं?",
    "optionsEn": [
      "Biting",
      "Mechanical carriage on body and regurgitation",
      "Blood sucking",
      "Laying eggs in food"
    ],
    "optionsHi": [
      "कोई समस्या नहीं",
      "संक्रामक रोग फैलाव, मानसिक तनाव, हवा प्रदूषण",
      "स्वास्थ्य लाभ",
      "खुशी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Flies carry pathogens on body parts and regurgitate on food.",
    "explanationHi": "TB, श्वसन संक्रमण।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-084",
    "questionEn": "Plague is transmitted by:",
    "questionHi": "घर में वेंटिलेशन क्यों जरूरी है?",
    "optionsEn": [
      "Mosquitoes",
      "Rat fleas",
      "Flies",
      "Lice"
    ],
    "optionsHi": [
      "ठंडक के लिए",
      "ताजी हवा, इनडोर प्रदूषकों को बाहर निकालना",
      "अंधेरे के लिए",
      "शोर के लिए"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rat fleas transmit Yersinia pestis causing plague.",
    "explanationHi": "श्वसन स्वास्थ्य।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-085",
    "questionEn": "IVM stands for:",
    "questionHi": "इनडोर वायु प्रदूषण के स्रोत क्या हैं?",
    "optionsEn": [
      "Indian Vector Management",
      "Integrated Vector Management",
      "Internal Vector Monitoring",
      "International Vector Method"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "चूल्हे का धुआं, तंबाकू, मच्छर कॉइल, रंग",
      "केवल बाहरी प्रदूषण",
      "केवल धूल"
    ],
    "correctAnswer": 1,
    "explanationEn": "IVM is Integrated Vector Management using multiple approaches.",
    "explanationHi": "घर के अंदर।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-086",
    "questionEn": "Source reduction in vector control means:",
    "questionHi": "बायोमास ईंधन (लकड़ी, गोबर) से खाना पकाने का क्या नुकसान है?",
    "optionsEn": [
      "Using more insecticides",
      "Eliminating breeding sites",
      "Personal protection only",
      "Biological control only"
    ],
    "optionsHi": [
      "कोई नुकसान नहीं",
      "धुएं से श्वसन रोग, महिलाओं और बच्चों को अधिक जोखिम",
      "स्वास्थ्य लाभ",
      "सस्ता"
    ],
    "correctAnswer": 1,
    "explanationEn": "Source reduction eliminates places where vectors breed.",
    "explanationHi": "COPD, निमोनिया।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-087",
    "questionEn": "Larvivorous fish used for mosquito control is:",
    "questionHi": "उज्ज्वला योजना क्या है?",
    "optionsEn": [
      "Rohu",
      "Gambusia (Guppy)",
      "Catfish",
      "Carp"
    ],
    "optionsHi": [
      "बिजली योजना",
      "गरीब परिवारों को LPG कनेक्शन",
      "पानी योजना",
      "सड़क योजना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Gambusia and Guppy eat mosquito larvae as biological control.",
    "explanationHi": "स्वच्छ ईंधन।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-088",
    "questionEn": "LLIN stands for:",
    "questionHi": "शोर प्रदूषण का स्वास्थ्य पर क्या प्रभाव है?",
    "optionsEn": [
      "Low Light Indoor Net",
      "Long Lasting Insecticidal Net",
      "Large Local Indoor Net",
      "Limited Life Indoor Net"
    ],
    "optionsHi": [
      "कोई प्रभाव नहीं",
      "सुनने की हानि, तनाव, नींद में गड़बड़ी, हृदय प्रभाव",
      "बेहतर सुनाई",
      "आराम"
    ],
    "correctAnswer": 1,
    "explanationEn": "LLIN is Long Lasting Insecticidal Net that retains insecticide.",
    "explanationHi": "ध्वनि प्रदूषण।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-089",
    "questionEn": "Indoor Residual Spraying (IRS) involves:",
    "questionHi": "आवासीय क्षेत्र में शोर सीमा क्या है (दिन)?",
    "optionsEn": [
      "Spraying walls inside houses",
      "Spraying outdoors",
      "Spraying on water",
      "Spraying on people"
    ],
    "optionsHi": [
      "100 dB",
      "55 dB",
      "10 dB",
      "150 dB"
    ],
    "correctAnswer": 0,
    "explanationEn": "IRS involves spraying insecticide on indoor walls where mosquitoes rest.",
    "explanationHi": "CPCB मानक।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-090",
    "questionEn": "Dry day for dengue prevention means:",
    "questionHi": "ठोस अपशिष्ट (Solid Waste) के प्रकार क्या हैं?",
    "optionsEn": [
      "Day without rain",
      "Weekly emptying water containers",
      "Not bathing",
      "Closing windows"
    ],
    "optionsHi": [
      "केवल एक",
      "गीला (Biodegradable), सूखा (Non-biodegradable), खतरनाक",
      "केवल सूखा",
      "कोई प्रकार नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Weekly dry day involves emptying all water containers to prevent Aedes breeding.",
    "explanationHi": "पृथक्करण।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-091",
    "questionEn": "School toilet ratio for students should be:",
    "questionHi": "कचरा पृथक्करण (Waste Segregation) क्यों जरूरी है?",
    "optionsEn": [
      "1:20",
      "1:40",
      "1:80",
      "1:100"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "रीसाइक्लिंग, खाद बनाना, उचित निपटान",
      "केवल दिखावा",
      "कोई लाभ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Recommended ratio is 1 toilet per 40 students.",
    "explanationHi": "अपशिष्ट प्रबंधन।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-092",
    "questionEn": "Girls' toilets in schools must have:",
    "questionHi": "गीले कचरे का क्या किया जा सकता है?",
    "optionsEn": [
      "Same as boys",
      "Menstrual hygiene facilities and disposal",
      "Outdoor location",
      "No water"
    ],
    "optionsHi": [
      "जला दें",
      "खाद (Composting) बनाना",
      "नदी में फेंकें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Girls' toilets need MHM facilities, water, disposal mechanism.",
    "explanationHi": "जैविक अपशिष्ट।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-093",
    "questionEn": "Mid-day meal kitchen should be:",
    "questionHi": "प्लास्टिक अपशिष्ट की समस्या क्या है?",
    "optionsEn": [
      "Near toilets",
      "Clean, well-ventilated, separate from toilets",
      "Outdoors only",
      "Without water"
    ],
    "optionsHi": [
      "कोई समस्या नहीं",
      "विघटित नहीं होता, पर्यावरण प्रदूषण, जानवरों को हानि",
      "लाभदायक",
      "जल्दी सड़ता है"
    ],
    "correctAnswer": 1,
    "explanationEn": "MDM kitchen must be clean, ventilated, away from toilets.",
    "explanationHi": "गंभीर समस्या।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-094",
    "questionEn": "Food handlers in schools should:",
    "questionHi": "सिंगल यूज प्लास्टिक पर क्या है?",
    "optionsEn": [
      "Cook when ill",
      "Have regular health check-ups",
      "Avoid handwashing",
      "Reuse leftover food"
    ],
    "optionsHi": [
      "प्रोत्साहन",
      "कई वस्तुओं पर प्रतिबंध (भारत)",
      "कोई नियम नहीं",
      "मुफ्त वितरण"
    ],
    "correctAnswer": 1,
    "explanationEn": "Food handlers need health check-ups and should not work when ill.",
    "explanationHi": "2022 से।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-095",
    "questionEn": "Common nutritional problem in school children is:",
    "questionHi": "3R सिद्धांत क्या है?",
    "optionsEn": [
      "Obesity only",
      "Anemia",
      "None",
      "Diabetes"
    ],
    "optionsHi": [
      "Run, Rest, Repeat",
      "Reduce, Reuse, Recycle",
      "Read, Write, React",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Iron deficiency anemia is very common among school children in India.",
    "explanationHi": "अपशिष्ट प्रबंधन।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-096",
    "questionEn": "RBSK stands for:",
    "questionHi": "E-waste क्या है?",
    "optionsEn": [
      "Regional Basic School Kit",
      "Rashtriya Bal Swasthya Karyakram",
      "Rural Basic Support Kit",
      "Rapid Basic Screening Kit"
    ],
    "optionsHi": [
      "खाद्य अपशिष्ट",
      "इलेक्ट्रॉनिक उपकरणों का कचरा",
      "जैविक कचरा",
      "कागज"
    ],
    "correctAnswer": 1,
    "explanationEn": "RBSK is national child health screening program.",
    "explanationHi": "खतरनाक तत्व।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-097",
    "questionEn": "WIFS program provides:",
    "questionHi": "E-waste का सही निपटान क्यों जरूरी है?",
    "optionsEn": [
      "Vaccines",
      "Weekly Iron and Folic Acid",
      "Water filters",
      "Waste bins"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "विषाक्त पदार्थ (सीसा, पारा) पर्यावरण और स्वास्थ्य को हानि",
      "कोई हानि नहीं",
      "खाद बनता है"
    ],
    "correctAnswer": 1,
    "explanationEn": "WIFS provides weekly IFA tablets to adolescents.",
    "explanationHi": "खतरनाक अपशिष्ट।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-098",
    "questionEn": "Deworming in schools is done:",
    "questionHi": "लैंडफिल क्या है?",
    "optionsEn": [
      "Monthly",
      "Biannually (twice a year)",
      "Yearly",
      "Weekly"
    ],
    "optionsHi": [
      "खेती की जमीन",
      "कचरा दफनाने का स्थान",
      "पार्क",
      "झील"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mass deworming is done twice a year in schools.",
    "explanationHi": "अंतिम निपटान।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-099",
    "questionEn": "Health Promoting Schools include:",
    "questionHi": "खुले में कचरा जलाने से क्या होता है?",
    "optionsEn": [
      "Health education only",
      "Comprehensive approach with education, services, environment",
      "Vaccination only",
      "Treatment only"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "वायु प्रदूषण, विषाक्त धुआं, स्वास्थ्य हानि",
      "स्वच्छता",
      "पर्यावरण लाभ"
    ],
    "correctAnswer": 1,
    "explanationEn": "Health Promoting Schools address education, services, and environment.",
    "explanationHi": "प्रतिबंधित।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-100",
    "questionEn": "Behavior change communication addresses:",
    "questionHi": "MPHW की स्वच्छता में क्या भूमिका है?",
    "optionsEn": [
      "Knowledge only",
      "Knowledge, attitudes, and skills",
      "Attitude only",
      "Skills only"
    ],
    "optionsHi": [
      "कोई भूमिका नहीं",
      "स्वास्थ्य शिक्षा, निरीक्षण, रोग निगरानी",
      "केवल दवाई देना",
      "केवल अस्पताल काम"
    ],
    "correctAnswer": 1,
    "explanationEn": "BCC addresses knowledge, attitudes, skills, and enabling environment.",
    "explanationHi": "समुदाय स्वास्थ्य।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-101",
    "questionEn": "CLTS stands for:",
    "questionHi": "मच्छर किन रोगों को फैलाते हैं?",
    "optionsEn": [
      "Central Learning Training System",
      "Community-Led Total Sanitation",
      "Clean Latrine Training Scheme",
      "Common Latrine Technical Standard"
    ],
    "optionsHi": [
      "टाइफाइड",
      "मलेरिया, डेंगू, चिकनगुनिया, फाइलेरिया",
      "हैजा",
      "TB"
    ],
    "correctAnswer": 1,
    "explanationEn": "CLTS is Community-Led Total Sanitation approach.",
    "explanationHi": "वेक्टर-जनित रोग।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-102",
    "questionEn": "CLTS approach focuses on:",
    "questionHi": "एनोफिलीज मच्छर कौन सा रोग फैलाता है?",
    "optionsEn": [
      "Subsidy for toilets",
      "Triggering behavior change against open defecation",
      "Providing toilets free",
      "Government construction"
    ],
    "optionsHi": [
      "डेंगू",
      "मलेरिया",
      "चिकनगुनिया",
      "जीका"
    ],
    "correctAnswer": 1,
    "explanationEn": "CLTS triggers community disgust about OD to drive change.",
    "explanationHi": "मादा एनोफिलीज।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-103",
    "questionEn": "Global Handwashing Day is observed on:",
    "questionHi": "एडीज मच्छर कौन से रोग फैलाता है?",
    "optionsEn": [
      "October 2",
      "October 15",
      "November 19",
      "March 22"
    ],
    "optionsHi": [
      "मलेरिया",
      "डेंगू, चिकनगुनिया, जीका",
      "फाइलेरिया",
      "JE"
    ],
    "correctAnswer": 1,
    "explanationEn": "Global Handwashing Day is October 15.",
    "explanationHi": "एडीज इजिप्टी।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-104",
    "questionEn": "World Toilet Day is observed on:",
    "questionHi": "क्यूलेक्स मच्छर कौन से रोग फैलाता है?",
    "optionsEn": [
      "October 15",
      "November 19",
      "March 22",
      "June 5"
    ],
    "optionsHi": [
      "डेंगू",
      "फाइलेरिया, जापानी इंसेफलाइटिस",
      "मलेरिया",
      "चिकनगुनिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "World Toilet Day is November 19.",
    "explanationHi": "रात में काटता है।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-105",
    "questionEn": "World Water Day is observed on:",
    "questionHi": "मच्छर कहां प्रजनन करते हैं?",
    "optionsEn": [
      "October 15",
      "November 19",
      "March 22",
      "June 5"
    ],
    "optionsHi": [
      "सूखी जमीन",
      "रुके हुए/जमा पानी में",
      "बहते पानी में",
      "हवा में"
    ],
    "correctAnswer": 2,
    "explanationEn": "World Water Day is March 22.",
    "explanationHi": "स्थिर जल।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-106",
    "questionEn": "IEC stands for:",
    "questionHi": "मच्छर प्रजनन स्थल के उदाहरण क्या हैं?",
    "optionsEn": [
      "Information Education Communication",
      "Indian Environmental Council",
      "Internal Education Committee",
      "International Educational Course"
    ],
    "optionsHi": [
      "नदी",
      "टायर, गमले, कूलर, टंकी, नारियल खोल",
      "समुद्र",
      "कुआं"
    ],
    "correctAnswer": 0,
    "explanationEn": "IEC is Information, Education, and Communication.",
    "explanationHi": "कृत्रिम संग्रह।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-107",
    "questionEn": "Stages of behavior change include all EXCEPT:",
    "questionHi": "मच्छर नियंत्रण का स्रोत कम करना (Source Reduction) क्या है?",
    "optionsEn": [
      "Pre-contemplation",
      "Action",
      "Maintenance",
      "Infection"
    ],
    "optionsHi": [
      "दवाई देना",
      "जमा पानी हटाना, कंटेनर खाली करना",
      "मच्छरदानी",
      "स्प्रे"
    ],
    "correctAnswer": 3,
    "explanationEn": "Infection is not a stage of behavior change.",
    "explanationHi": "प्रजनन स्थल नष्ट।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-108",
    "questionEn": "AIDA model in BCC stands for:",
    "questionHi": "लार्विसाइड क्या है?",
    "optionsEn": [
      "Action Interest Desire Attention",
      "Attention Interest Desire Action",
      "Always Improve Daily Actions",
      "All Information Data Analysis"
    ],
    "optionsHi": [
      "वयस्क मच्छर मारने वाला",
      "मच्छर के लार्वा मारने वाला रसायन",
      "मक्खी मारने वाला",
      "चूहा मारने वाला"
    ],
    "correctAnswer": 1,
    "explanationEn": "AIDA: Attention, Interest, Desire, Action sequence.",
    "explanationHi": "टेमीफॉस, BTI।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-109",
    "questionEn": "Process indicators in hygiene programs measure:",
    "questionHi": "एडल्टीसाइड क्या है?",
    "optionsEn": [
      "Disease reduction",
      "Activities conducted",
      "Death rates",
      "Cost savings"
    ],
    "optionsHi": [
      "लार्वा मारने वाला",
      "वयस्क मच्छर मारने वाला कीटनाशक",
      "कवकनाशक",
      "खरपतवारनाशक"
    ],
    "correctAnswer": 1,
    "explanationEn": "Process indicators track program activities implemented.",
    "explanationHi": "फॉगिंग, स्प्रे।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-110",
    "questionEn": "Outcome indicators measure:",
    "questionHi": "IRS (Indoor Residual Spraying) क्या है?",
    "optionsEn": [
      "Sessions conducted",
      "Changes in behavior or health status",
      "Materials distributed",
      "Visits made"
    ],
    "optionsHi": [
      "बाहर स्प्रे",
      "घर की दीवारों पर कीटनाशक छिड़काव",
      "मच्छरदानी",
      "लार्विसाइड"
    ],
    "correctAnswer": 1,
    "explanationEn": "Outcome indicators measure actual changes achieved.",
    "explanationHi": "मच्छर मारने के लिए।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-111",
    "questionEn": "Group education methods include:",
    "questionHi": "LLIN क्या है?",
    "optionsEn": [
      "Home visits",
      "One-to-one counseling",
      "Demonstrations and group discussions",
      "Pamphlets only"
    ],
    "optionsHi": [
      "दवाई",
      "Long-Lasting Insecticidal Net (कीटनाशक युक्त मच्छरदानी)",
      "स्प्रे",
      "क्रीम"
    ],
    "correctAnswer": 2,
    "explanationEn": "Group methods include demonstrations, discussions, role plays.",
    "explanationHi": "3-5 साल प्रभावी।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-112",
    "questionEn": "Nukkad Natak is a:",
    "questionHi": "मच्छर से बचाव के व्यक्तिगत उपाय क्या हैं?",
    "optionsEn": [
      "Poster",
      "Street play",
      "Radio program",
      "Film"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "मच्छरदानी, रिपेलेंट, पूरी आस्तीन के कपड़े",
      "खुले में सोना",
      "खिड़की खुली रखना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Nukkad Natak is street play/theatre for community awareness.",
    "explanationHi": "व्यक्तिगत सुरक्षा।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-113",
    "questionEn": "IEC materials should be:",
    "questionHi": "मच्छर रिपेलेंट में कौन सा रसायन होता है?",
    "optionsEn": [
      "Complex and detailed",
      "Simple, culturally appropriate, pre-tested",
      "In English only",
      "Without visuals"
    ],
    "optionsHi": [
      "नमक",
      "DEET, Picaridin",
      "चीनी",
      "तेल"
    ],
    "correctAnswer": 1,
    "explanationEn": "IEC materials should be simple, appropriate, and pre-tested.",
    "explanationHi": "प्रभावी रिपेलेंट।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-114",
    "questionEn": "VHSNC stands for:",
    "questionHi": "गप्पी मछली का मच्छर नियंत्रण में क्या उपयोग है?",
    "optionsEn": [
      "Village Health and Sanitation Nutrition Committee",
      "Very High Standard Nursing Course",
      "Vital Health Services Network Center",
      "Village Hospital Service Network"
    ],
    "optionsHi": [
      "खाने के लिए",
      "मच्छर के लार्वा खाती है (जैविक नियंत्रण)",
      "सजावट",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "VHSNC is Village Health Sanitation and Nutrition Committee.",
    "explanationHi": "Biological control।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-115",
    "questionEn": "Gram Sabha is:",
    "questionHi": "IVM (Integrated Vector Management) क्या है?",
    "optionsEn": [
      "Government office",
      "General assembly of village",
      "Hospital",
      "School"
    ],
    "optionsHi": [
      "केवल स्प्रे",
      "विभिन्न विधियों का संयुक्त उपयोग",
      "केवल मच्छरदानी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Gram Sabha is general body of all adult village residents.",
    "explanationHi": "समग्र दृष्टिकोण।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-116",
    "questionEn": "Participatory approach in hygiene promotion includes:",
    "questionHi": "मक्खियां कौन से रोग फैलाती हैं?",
    "optionsEn": [
      "Top-down instruction",
      "Community mapping and action planning",
      "Government orders only",
      "Individual advice only"
    ],
    "optionsHi": [
      "मलेरिया",
      "दस्त, टाइफाइड, हैजा, आंख का संक्रमण",
      "डेंगू",
      "TB"
    ],
    "correctAnswer": 1,
    "explanationEn": "Participatory approaches engage community in planning.",
    "explanationHi": "मल से भोजन तक।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-117",
    "questionEn": "Scabies is caused by:",
    "questionHi": "मक्खी नियंत्रण के उपाय क्या हैं?",
    "optionsEn": [
      "Bacteria",
      "Virus",
      "Mite",
      "Fungus"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "भोजन ढकना, कचरा प्रबंधन, शौचालय उपयोग, जाल",
      "खुला रखना",
      "गंदगी फैलाना"
    ],
    "correctAnswer": 2,
    "explanationEn": "Scabies is caused by Sarcoptes scabiei mite.",
    "explanationHi": "रोकथाम।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-118",
    "questionEn": "Scabies spreads through:",
    "questionHi": "सैंडफ्लाई कौन सा रोग फैलाती है?",
    "optionsEn": [
      "Air",
      "Close personal contact",
      "Water",
      "Food"
    ],
    "optionsHi": [
      "मलेरिया",
      "काला-अजार (Leishmaniasis)",
      "डेंगू",
      "फाइलेरिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "Scabies mite spreads through close skin-to-skin contact.",
    "explanationHi": "फ्लेबोटोमस।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-119",
    "questionEn": "Ringworm is caused by:",
    "questionHi": "जूं (Lice) क्या समस्या करती है?",
    "optionsEn": [
      "Bacteria",
      "Worm",
      "Fungus",
      "Virus"
    ],
    "optionsHi": [
      "मलेरिया",
      "खुजली, त्वचा संक्रमण, टाइफस फैला सकती है",
      "दस्त",
      "TB"
    ],
    "correctAnswer": 2,
    "explanationEn": "Ringworm is a fungal infection despite the name.",
    "explanationHi": "एक्टोपैरासाइट।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-120",
    "questionEn": "Typhoid fever is caused by:",
    "questionHi": "जूं से बचाव कैसे करें?",
    "optionsEn": [
      "Vibrio cholerae",
      "Salmonella typhi",
      "E. coli",
      "Shigella"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "व्यक्तिगत स्वच्छता, कंघी साझा न करना, नियमित बाल धोना",
      "गंदे रहना",
      "साझा करना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Typhoid is caused by Salmonella typhi bacteria.",
    "explanationHi": "रोकथाम।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-121",
    "questionEn": "Polio spreads through:",
    "questionHi": "स्केबीज (Scabies) क्या है?",
    "optionsEn": [
      "Air",
      "Fecal-oral route",
      "Blood",
      "Insects"
    ],
    "optionsHi": [
      "वायरस",
      "माइट (खुजली का कीड़ा) से होने वाला त्वचा संक्रमण",
      "बैक्टीरिया",
      "कवक"
    ],
    "correctAnswer": 1,
    "explanationEn": "Polio virus spreads through fecal-oral transmission.",
    "explanationHi": "Sarcoptes scabiei।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-122",
    "questionEn": "Arsenic poisoning from water causes:",
    "questionHi": "स्केबीज के लक्षण क्या हैं?",
    "optionsEn": [
      "Dental problems",
      "Skin lesions and cancer",
      "Bone problems",
      "Diarrhea"
    ],
    "optionsHi": [
      "बुखार",
      "तीव्र खुजली (रात में अधिक), उंगलियों के बीच दाने",
      "खांसी",
      "दस्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chronic arsenic exposure causes skin lesions and cancer.",
    "explanationHi": "विशिष्ट लक्षण।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-123",
    "questionEn": "Alum is used in water treatment for:",
    "questionHi": "स्केबीज का इलाज क्या है?",
    "optionsEn": [
      "Disinfection",
      "Coagulation and flocculation",
      "Fluoridation",
      "Softening"
    ],
    "optionsHi": [
      "एंटीबायोटिक",
      "पर्मेथ्रिन क्रीम, आइवरमेक्टिन",
      "पैरासिटामॉल",
      "ORS"
    ],
    "correctAnswer": 1,
    "explanationEn": "Alum causes particles to clump together for easy removal.",
    "explanationHi": "परिवार का इलाज।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-124",
    "questionEn": "Water treatment process sequence is:",
    "questionHi": "पिस्सू (Flea) कौन सा रोग फैला सकता है?",
    "optionsEn": [
      "Disinfection-filtration-sedimentation",
      "Screening-sedimentation-filtration-disinfection",
      "Filtration-screening-disinfection",
      "Disinfection-screening-filtration"
    ],
    "optionsHi": [
      "मलेरिया",
      "प्लेग",
      "डेंगू",
      "TB"
    ],
    "correctAnswer": 1,
    "explanationEn": "Correct sequence: screening, sedimentation, filtration, disinfection.",
    "explanationHi": "Yersinia pestis।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-125",
    "questionEn": "E. coli in water indicates:",
    "questionHi": "चूहे कौन से रोग फैला सकते हैं?",
    "optionsEn": [
      "Chemical contamination",
      "Fecal contamination",
      "Industrial waste",
      "Mineral content"
    ],
    "optionsHi": [
      "केवल मलेरिया",
      "प्लेग, लेप्टोस्पायरोसिस, रैट बाइट फीवर",
      "केवल डेंगू",
      "कोई रोग नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "E. coli is indicator of fecal contamination.",
    "explanationHi": "कृंतक जनित।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-126",
    "questionEn": "Protected well should have:",
    "questionHi": "चूहा नियंत्रण के उपाय क्या हैं?",
    "optionsEn": [
      "No cover",
      "Concrete platform and parapet wall",
      "Open access",
      "No drainage"
    ],
    "optionsHi": [
      "खाना खुला रखना",
      "भोजन ढकना, छेद बंद करना, जाल, रोडेंटिसाइड",
      "गंदगी फैलाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Protected well has platform, parapet, cover, and drainage.",
    "explanationHi": "रोकथाम और नियंत्रण।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-127",
    "questionEn": "Rainwater harvesting helps:",
    "questionHi": "कॉकरोच क्या समस्या करते हैं?",
    "optionsEn": [
      "Waste disposal",
      "Water conservation and recharge",
      "Air purification",
      "Soil testing"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "भोजन दूषित करना, एलर्जी, अस्थमा बढ़ाना",
      "स्वच्छता",
      "लाभदायक"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rainwater harvesting conserves water and recharges groundwater.",
    "explanationHi": "कीट समस्या।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-128",
    "questionEn": "Service latrine (bucket type) is:",
    "questionHi": "खटमल (Bed Bug) क्या करते हैं?",
    "optionsEn": [
      "Sanitary",
      "Unsanitary and not acceptable",
      "Recommended",
      "Modern design"
    ],
    "optionsHi": [
      "रोग फैलाते हैं",
      "खून चूसते हैं, खुजली, नींद में गड़बड़ी (रोग फैलाव सिद्ध नहीं)",
      "कुछ नहीं",
      "लाभदायक"
    ],
    "correctAnswer": 1,
    "explanationEn": "Service latrines are unsanitary and not recommended.",
    "explanationHi": "परेशानी।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-129",
    "questionEn": "Pit latrine is suitable for:",
    "questionHi": "टिक (Tick) कौन से रोग फैला सकता है?",
    "optionsEn": [
      "Urban areas",
      "High water table areas",
      "Rural areas with adequate land",
      "Flood-prone areas"
    ],
    "optionsHi": [
      "मलेरिया",
      "लाइम रोग, KFD, Crimean-Congo HF",
      "डेंगू",
      "हैजा"
    ],
    "correctAnswer": 2,
    "explanationEn": "Pit latrines work best in rural areas with adequate space.",
    "explanationHi": "टिक-बोर्न।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-130",
    "questionEn": "Pour-flush latrine requires water of:",
    "questionHi": "स्वच्छ वातावरण से वेक्टर नियंत्रण कैसे होता है?",
    "optionsEn": [
      "10-15 liters",
      "1-2 liters per flush",
      "20-30 liters",
      "50 liters"
    ],
    "optionsHi": [
      "कोई संबंध नहीं",
      "प्रजनन स्थल कम, भोजन स्रोत कम, आश्रय कम",
      "वेक्टर बढ़ते हैं",
      "कोई प्रभाव नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pour-flush uses only 1-2 liters of water per flush.",
    "explanationHi": "पर्यावरण प्रबंधन।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-131",
    "questionEn": "Septic tank effluent goes to:",
    "questionHi": "स्कूल स्वास्थ्य कार्यक्रम का उद्देश्य क्या है?",
    "optionsEn": [
      "Open drain",
      "Soak pit or drain field",
      "River directly",
      "Street"
    ],
    "optionsHi": [
      "केवल पढ़ाई",
      "बच्चों का स्वास्थ्य संवर्धन और रोग रोकथाम",
      "केवल खेल",
      "केवल भोजन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Septic tank effluent should go to soak pit for soil absorption.",
    "explanationHi": "School Health Programme।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-132",
    "questionEn": "Biogas toilet produces:",
    "questionHi": "स्कूल स्वास्थ्य सेवाओं में क्या शामिल है?",
    "optionsEn": [
      "Electricity",
      "Methane gas for cooking",
      "Oxygen",
      "Chlorine"
    ],
    "optionsHi": [
      "केवल पढ़ाई",
      "स्वास्थ्य जांच, टीकाकरण, स्वास्थ्य शिक्षा, मिड-डे मील",
      "केवल खेल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Biogas toilets produce methane (cooking gas) from waste.",
    "explanationHi": "व्यापक सेवाएं।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-133",
    "questionEn": "Child feces should be:",
    "questionHi": "स्कूल में स्वास्थ्य जांच में क्या देखते हैं?",
    "optionsEn": [
      "Left in yard",
      "Disposed safely in toilet",
      "Thrown in garbage",
      "Left where passed"
    ],
    "optionsHi": [
      "केवल वजन",
      "आंख, कान, दांत, त्वचा, कुपोषण, एनीमिया",
      "केवल लंबाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Child feces are as infectious as adult feces, need safe disposal.",
    "explanationHi": "व्यापक जांच।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-134",
    "questionEn": "Sewage treatment primary stage involves:",
    "questionHi": "स्कूल में हाथ धोने की सुविधा क्यों जरूरी है?",
    "optionsEn": [
      "Biological treatment",
      "Screening and sedimentation",
      "Chemical treatment",
      "UV treatment"
    ],
    "optionsHi": [
      "सजावट",
      "दस्त और श्वसन संक्रमण रोकने के लिए",
      "खर्च बढ़ाने के लिए",
      "कोई कारण नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Primary treatment is physical: screening and sedimentation.",
    "explanationHi": "संक्रमण रोकथाम।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-135",
    "questionEn": "Secondary sewage treatment involves:",
    "questionHi": "स्कूल में शौचालय अनुपात क्या होना चाहिए (लड़कियों के लिए)?",
    "optionsEn": [
      "Physical processes only",
      "Biological treatment",
      "UV disinfection",
      "Chemical precipitation only"
    ],
    "optionsHi": [
      "1:100",
      "1:40 (RTE Act)",
      "1:200",
      "कोई नियम नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Secondary treatment uses biological processes to degrade organics.",
    "explanationHi": "पर्याप्त शौचालय।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-136",
    "questionEn": "Activated sludge process is:",
    "questionHi": "स्कूल में पीने के पानी की व्यवस्था क्यों जरूरी है?",
    "optionsEn": [
      "Physical treatment",
      "Biological secondary treatment",
      "Primary treatment",
      "Disinfection"
    ],
    "optionsHi": [
      "सजावट",
      "निर्जलीकरण रोकना, सीखने में मदद",
      "खर्च बढ़ाने के लिए",
      "कोई कारण नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Activated sludge is biological method for secondary treatment.",
    "explanationHi": "बुनियादी जरूरत।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-137",
    "questionEn": "E-waste includes:",
    "questionHi": "मिड-डे मील योजना का उद्देश्य क्या है?",
    "optionsEn": [
      "Food waste",
      "Old computers and mobile phones",
      "Paper waste",
      "Garden waste"
    ],
    "optionsHi": [
      "केवल भोजन",
      "पोषण सुधार, स्कूल उपस्थिति बढ़ाना",
      "केवल खर्च",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "E-waste includes discarded electronic and electrical equipment.",
    "explanationHi": "PM POSHAN।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-138",
    "questionEn": "Construction and demolition waste includes:",
    "questionHi": "स्कूल में डीवर्मिंग कब दी जाती है?",
    "optionsEn": [
      "Food items",
      "Concrete, bricks, debris",
      "Plastics only",
      "Organic matter"
    ],
    "optionsHi": [
      "रोजाना",
      "साल में दो बार (राष्ट्रीय डीवर्मिंग दिवस)",
      "महीने में एक बार",
      "कभी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "C&D waste is building materials from construction or demolition.",
    "explanationHi": "फरवरी और अगस्त।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-139",
    "questionEn": "Wet waste collection should be:",
    "questionHi": "स्कूल में IFA (Iron Folic Acid) क्यों दी जाती है?",
    "optionsEn": [
      "Weekly",
      "Daily",
      "Monthly",
      "Yearly"
    ],
    "optionsHi": [
      "दर्द के लिए",
      "एनीमिया रोकथाम",
      "बुखार के लिए",
      "खांसी के लिए"
    ],
    "correctAnswer": 1,
    "explanationEn": "Wet waste needs daily collection as it decomposes quickly.",
    "explanationHi": "Weekly IFA।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-140",
    "questionEn": "Sanitary napkins should be disposed in:",
    "questionHi": "स्कूल स्वास्थ्य शिक्षा में क्या विषय शामिल हैं?",
    "optionsEn": [
      "Green bin",
      "Blue bin",
      "Black/red bin",
      "Anywhere"
    ],
    "optionsHi": [
      "केवल गणित",
      "व्यक्तिगत स्वच्छता, पोषण, मानसिक स्वास्थ्य, किशोर स्वास्थ्य",
      "केवल विज्ञान",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Sanitary waste goes in black/red bin for reject/sanitary waste.",
    "explanationHi": "व्यापक शिक्षा।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-141",
    "questionEn": "Red bag in biomedical waste is for:",
    "questionHi": "आयुष्मान भारत स्कूल स्वास्थ्य कार्यक्रम (ABSHP) क्या है?",
    "optionsEn": [
      "Sharps",
      "Contaminated recyclable waste",
      "General waste",
      "Food waste"
    ],
    "optionsHi": [
      "केवल दवाई",
      "स्कूल में व्यापक स्वास्थ्य जांच और रेफरल",
      "केवल खेल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Red bags are for contaminated recyclable items after treatment.",
    "explanationHi": "HWC स्टाफ द्वारा।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-142",
    "questionEn": "Blue bag in biomedical waste is for:",
    "questionHi": "RBSK (Rashtriya Bal Swasthya Karyakram) क्या है?",
    "optionsEn": [
      "Sharps",
      "Infectious waste",
      "Glassware",
      "Food"
    ],
    "optionsHi": [
      "वयस्कों के लिए",
      "बच्चों में 4Ds की जांच (Defects, Diseases, Deficiencies, Delays)",
      "बुजुर्गों के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Blue bags are for broken glassware in healthcare.",
    "explanationHi": "Child Health Screening।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-143",
    "questionEn": "Needles should never be:",
    "questionHi": "व्यावसायिक स्वास्थ्य (Occupational Health) क्या है?",
    "optionsEn": [
      "Put in sharps container",
      "Disposed properly",
      "Recapped using two hands",
      "Handled carefully"
    ],
    "optionsHi": [
      "घर पर स्वास्थ्य",
      "कार्यस्थल पर श्रमिकों का स्वास्थ्य और सुरक्षा",
      "केवल खेल",
      "कोई नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Two-hand recapping is dangerous and increases needlestick injury risk.",
    "explanationHi": "Workplace health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-144",
    "questionEn": "Deep burial for biomedical waste is suitable in:",
    "questionHi": "व्यावसायिक खतरों (Occupational Hazards) के प्रकार क्या हैं?",
    "optionsEn": [
      "Urban areas",
      "Rural healthcare facilities",
      "Large hospitals",
      "Cities"
    ],
    "optionsHi": [
      "केवल एक",
      "भौतिक, रासायनिक, जैविक, यांत्रिक, मनोवैज्ञानिक",
      "कोई नहीं",
      "केवल भौतिक"
    ],
    "correctAnswer": 1,
    "explanationEn": "Deep burial permitted for small rural facilities without other options.",
    "explanationHi": "विभिन्न प्रकार।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-145",
    "questionEn": "Rag pickers face health risks from:",
    "questionHi": "भौतिक खतरों के उदाहरण क्या हैं?",
    "optionsEn": [
      "Clean air",
      "Sharp objects, pathogens, chemicals",
      "Clean water",
      "Normal work"
    ],
    "optionsHi": [
      "रसायन",
      "शोर, गर्मी, विकिरण, कंपन",
      "जीवाणु",
      "तनाव"
    ],
    "correctAnswer": 1,
    "explanationEn": "Waste handlers face injuries, infections, chemical exposure.",
    "explanationHi": "Physical hazards।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-146",
    "questionEn": "Food irradiation is used for:",
    "questionHi": "रासायनिक खतरों के उदाहरण क्या हैं?",
    "optionsEn": [
      "Heating food",
      "Preservation using gamma rays",
      "Freezing",
      "Drying"
    ],
    "optionsHi": [
      "शोर",
      "धूल, धुआं, गैस, विलायक, कीटनाशक",
      "वायरस",
      "तनाव"
    ],
    "correctAnswer": 1,
    "explanationEn": "Irradiation uses gamma rays to kill pathogens and preserve food.",
    "explanationHi": "Chemical hazards।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-147",
    "questionEn": "Pasteurization is used for:",
    "questionHi": "जैविक खतरों के उदाहरण क्या हैं?",
    "optionsEn": [
      "Solid foods",
      "Milk and juices (heat treatment)",
      "Freezing",
      "Drying"
    ],
    "optionsHi": [
      "शोर",
      "बैक्टीरिया, वायरस, कवक, परजीवी",
      "रसायन",
      "कंपन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pasteurization heats liquids to kill pathogens.",
    "explanationHi": "Biological hazards।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-148",
    "questionEn": "Food should be stored with raw below cooked because:",
    "questionHi": "सिलिकोसिस किस व्यवसाय में होता है?",
    "optionsEn": [
      "Easier access",
      "Prevents raw juices dripping on cooked food",
      "Looks better",
      "No reason"
    ],
    "optionsHi": [
      "कार्यालय",
      "खनन, पत्थर तोड़ना, सैंडब्लास्टिंग",
      "शिक्षण",
      "खेती"
    ],
    "correctAnswer": 1,
    "explanationEn": "Raw food below prevents contamination of cooked food by drips.",
    "explanationHi": "सिलिका धूल।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-149",
    "questionEn": "Refrigerator temperature should be:",
    "questionHi": "एस्बेस्टोसिस किससे होता है?",
    "optionsEn": [
      "Below 5°C",
      "10-15°C",
      "Room temperature",
      "Above 20°C"
    ],
    "optionsHi": [
      "शोर",
      "एस्बेस्टस धूल",
      "गर्मी",
      "रसायन"
    ],
    "correctAnswer": 0,
    "explanationEn": "Refrigerator should be below 5°C to slow bacterial growth.",
    "explanationHi": "फेफड़ों का रोग।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-150",
    "questionEn": "Freezer temperature should be:",
    "questionHi": "बाइसिनोसिस किस उद्योग में होता है?",
    "optionsEn": [
      "0°C",
      "-5°C",
      "Below -18°C",
      "5°C"
    ],
    "optionsHi": [
      "खनन",
      "कपास उद्योग (Monday fever)",
      "IT",
      "शिक्षण"
    ],
    "correctAnswer": 2,
    "explanationEn": "Freezer should be -18°C or below to stop bacterial growth.",
    "explanationHi": "कपास धूल।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-151",
    "questionEn": "Hot holding temperature for food should be:",
    "questionHi": "शोर से होने वाली श्रवण हानि (NIHL) किन व्यवसायों में आम है?",
    "optionsEn": [
      "Above 60°C",
      "40-50°C",
      "30-40°C",
      "Room temperature"
    ],
    "optionsHi": [
      "कार्यालय",
      "कारखाने, निर्माण, खनन",
      "शिक्षण",
      "IT"
    ],
    "correctAnswer": 0,
    "explanationEn": "Hot food should be held above 60°C to prevent bacterial growth.",
    "explanationHi": "उच्च शोर।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-152",
    "questionEn": "Trichinosis is caused by eating:",
    "questionHi": "PPE (Personal Protective Equipment) का उपयोग क्यों जरूरी है?",
    "optionsEn": [
      "Raw vegetables",
      "Undercooked pork with Trichinella larvae",
      "Boiled food",
      "Pasteurized milk"
    ],
    "optionsHi": [
      "सजावट",
      "व्यावसायिक खतरों से सुरक्षा",
      "फैशन",
      "कोई कारण नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Trichinella parasites in undercooked pork cause trichinosis.",
    "explanationHi": "अंतिम बचाव।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-153",
    "questionEn": "Aflatoxins are produced by:",
    "questionHi": "PPE के उदाहरण क्या हैं?",
    "optionsEn": [
      "Bacteria",
      "Molds on grains and nuts",
      "Viruses",
      "Parasites"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "हेलमेट, दस्ताने, मास्क, गॉगल्स, सेफ्टी शूज",
      "केवल टोपी",
      "केवल कपड़े"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aflatoxins are toxic compounds produced by Aspergillus molds.",
    "explanationHi": "विभिन्न प्रकार।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-154",
    "questionEn": "Street food vendor should have:",
    "questionHi": "कार्यस्थल पर एर्गोनॉमिक्स क्या है?",
    "optionsEn": [
      "Open food display",
      "Clean water supply and covered food",
      "Bare hands only",
      "No waste bin"
    ],
    "optionsHi": [
      "मशीनों की मरम्मत",
      "कार्यस्थल को शरीर के अनुकूल बनाना",
      "केवल सजावट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vendors need clean water, covered food, proper hygiene.",
    "explanationHi": "मस्कुलोस्केलेटल समस्याएं रोकना।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-155",
    "questionEn": "Customers should choose street food that is:",
    "questionHi": "कंप्यूटर पर काम करते समय किन समस्याओं का जोखिम है?",
    "optionsEn": [
      "Left in open for long",
      "Hot and freshly cooked",
      "Cut fruits left uncovered",
      "Cold stored without refrigeration"
    ],
    "optionsHi": [
      "मलेरिया",
      "आंखों पर तनाव, पीठ/गर्दन दर्द, RSI",
      "दस्त",
      "TB"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hot freshly cooked food is safer at street vendors.",
    "explanationHi": "Computer Vision Syndrome।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-156",
    "questionEn": "Minimum ceiling height for healthy housing is:",
    "questionHi": "20-20-20 नियम क्या है?",
    "optionsEn": [
      "2 meters",
      "2.5 meters",
      "3 meters",
      "4 meters"
    ],
    "optionsHi": [
      "व्यायाम",
      "हर 20 मिनट में 20 सेकंड के लिए 20 फीट दूर देखना (आंखों के लिए)",
      "नींद का नियम",
      "खाने का नियम"
    ],
    "correctAnswer": 2,
    "explanationEn": "Ceiling height should be minimum 3 meters for good ventilation.",
    "explanationHi": "Eye strain रोकना।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-157",
    "questionEn": "North-facing windows provide:",
    "questionHi": "कृषि कार्यकर्ताओं में आम व्यावसायिक खतरे क्या हैं?",
    "optionsEn": [
      "Direct sunlight",
      "Consistent indirect light",
      "No light",
      "Heat gain only"
    ],
    "optionsHi": [
      "शोर केवल",
      "कीटनाशक विषाक्तता, सांप काटना, गर्मी, मस्कुलोस्केलेटल",
      "कार्यालय तनाव",
      "कंप्यूटर"
    ],
    "correctAnswer": 1,
    "explanationEn": "In Northern Hemisphere (India), north windows give consistent light.",
    "explanationHi": "कृषि खतरे।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-158",
    "questionEn": "Daylight factor should be at least:",
    "questionHi": "स्वास्थ्य कार्यकर्ताओं में आम व्यावसायिक खतरे क्या हैं?",
    "optionsEn": [
      "0.5%",
      "1-2%",
      "5%",
      "10%"
    ],
    "optionsHi": [
      "केवल थकान",
      "नीडलस्टिक इंजरी, संक्रमण, विकिरण, तनाव",
      "केवल शोर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Daylight factor of 1-2% minimum needed for adequate natural light.",
    "explanationHi": "Healthcare hazards।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-159",
    "questionEn": "Signs of poor ventilation include:",
    "questionHi": "निर्माण कार्यकर्ताओं में आम खतरे क्या हैं?",
    "optionsEn": [
      "Fresh air smell",
      "Condensation and musty odor",
      "Dry walls",
      "Good visibility"
    ],
    "optionsHi": [
      "कार्यालय तनाव",
      "गिरना, गिरती वस्तुएं, धूल, शोर",
      "कंप्यूटर",
      "बैठकर काम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Poor ventilation causes condensation, stuffiness, mold growth.",
    "explanationHi": "Construction hazards।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-160",
    "questionEn": "Standard for overcrowding is maximum persons per room:",
    "questionHi": "व्यावसायिक स्वास्थ्य सेवाओं में क्या शामिल है?",
    "optionsEn": [
      "1",
      "2",
      "4",
      "6"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "प्री-एम्प्लॉयमेंट जांच, नियमित जांच, कार्यस्थल निगरानी",
      "केवल दवाई",
      "केवल छुट्टी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Maximum 2 persons per habitable room is the standard.",
    "explanationHi": "व्यापक सेवाएं।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-161",
    "questionEn": "Kitchen ventilation needs:",
    "questionHi": "WASH का पूर्ण रूप क्या है?",
    "optionsEn": [
      "Less than living room",
      "More ventilation with exhaust",
      "No special ventilation",
      "Closed space"
    ],
    "optionsHi": [
      "Washing All Surfaces Hygienically",
      "Water, Sanitation and Hygiene",
      "Water And Soap for Hands",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Kitchen needs more ventilation due to cooking fumes.",
    "explanationHi": "जल, स्वच्छता और स्वच्छता।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-162",
    "questionEn": "Smoke from biomass fuels contains:",
    "questionHi": "WASH से कौन से रोग रुक सकते हैं?",
    "optionsEn": [
      "Only oxygen",
      "Particulate matter and carbon monoxide",
      "Pure air",
      "Nothing harmful"
    ],
    "optionsHi": [
      "हृदय रोग",
      "दस्त, टाइफाइड, हैजा, कृमि, ट्रेकोमा",
      "कैंसर",
      "मधुमेह"
    ],
    "correctAnswer": 1,
    "explanationEn": "Biomass smoke contains PM, CO, and other harmful pollutants.",
    "explanationHi": "WASH संबंधित रोग।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-163",
    "questionEn": "COPD from indoor air pollution stands for:",
    "questionHi": "SDG 6 क्या है?",
    "optionsEn": [
      "Common Outdoor Pollution Disease",
      "Chronic Obstructive Pulmonary Disease",
      "Central Oxygen Processing Deficit",
      "Continuous Open Pollution Damage"
    ],
    "optionsHi": [
      "गरीबी",
      "सभी के लिए स्वच्छ जल और स्वच्छता",
      "शिक्षा",
      "स्वास्थ्य"
    ],
    "correctAnswer": 1,
    "explanationEn": "COPD is Chronic Obstructive Pulmonary Disease from smoke exposure.",
    "explanationHi": "Sustainable Development Goal 6।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-164",
    "questionEn": "Solar cookers reduce:",
    "questionHi": "स्वच्छ भारत मिशन 2.0 का फोकस क्या है?",
    "optionsEn": [
      "Cooking efficiency",
      "Indoor air pollution by using sunlight",
      "Food taste",
      "Cooking time"
    ],
    "optionsHi": [
      "केवल शौचालय",
      "ODF Plus - ठोस और तरल अपशिष्ट प्रबंधन",
      "केवल पानी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Solar cookers use sunlight, eliminating indoor air pollution.",
    "explanationHi": "ODF से आगे।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-165",
    "questionEn": "Slum housing problems include:",
    "questionHi": "ODF+ और ODF++ में क्या अंतर है?",
    "optionsEn": [
      "Low density",
      "Overcrowding and lack of basic services",
      "Good sanitation",
      "Adequate ventilation"
    ],
    "optionsHi": [
      "कोई अंतर नहीं",
      "ODF+ = ठोस/तरल अपशिष्ट प्रबंधन, ODF++ = फीकल स्लज भी",
      "एक ही हैं",
      "विपरीत"
    ],
    "correctAnswer": 1,
    "explanationEn": "Slums face overcrowding, poor sanitation, lack of services.",
    "explanationHi": "उन्नत स्तर।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-166",
    "questionEn": "Anopheles mosquito bites during:",
    "questionHi": "FSSM (Faecal Sludge and Septage Management) क्या है?",
    "optionsEn": [
      "Day time",
      "Dusk to dawn (night)",
      "Early morning only",
      "Afternoon"
    ],
    "optionsHi": [
      "पानी प्रबंधन",
      "सेप्टिक टैंक और गड्ढों से मल का सुरक्षित निपटान",
      "कचरा प्रबंधन",
      "हवा प्रबंधन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anopheles (malaria vector) bites from dusk to dawn.",
    "explanationHi": "गैर-सीवर क्षेत्रों में।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-167",
    "questionEn": "Anopheles mosquito breeds in:",
    "questionHi": "Community-Led Total Sanitation (CLTS) क्या है?",
    "optionsEn": [
      "Dirty water",
      "Clean unpolluted water",
      "Containers",
      "Drains"
    ],
    "optionsHi": [
      "शौचालय बांटना",
      "समुदाय को खुद OD की समस्या पहचानने और हल करने में मदद",
      "केवल शिक्षा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anopheles prefers clean, unpolluted water for breeding.",
    "explanationHi": "व्यवहार परिवर्तन।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-168",
    "questionEn": "Aedes breeding sites include all EXCEPT:",
    "questionHi": "ट्रिगरिंग (CLTS में) क्या है?",
    "optionsEn": [
      "Water storage tanks",
      "Flower pots",
      "Discarded tires",
      "Flowing rivers"
    ],
    "optionsHi": [
      "डराना",
      "समुदाय में OD के प्रति घृणा और शर्म जगाना",
      "पैसे देना",
      "सजा देना"
    ],
    "correctAnswer": 3,
    "explanationEn": "Aedes breeds in stagnant container water, not flowing rivers.",
    "explanationHi": "सामुदायिक जागरूकता।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-169",
    "questionEn": "Japanese Encephalitis is transmitted by:",
    "questionHi": "विश्व शौचालय दिवस कब मनाया जाता है?",
    "optionsEn": [
      "Anopheles",
      "Aedes",
      "Culex mosquitoes",
      "Flies"
    ],
    "optionsHi": [
      "26 जनवरी",
      "19 नवंबर",
      "15 अगस्त",
      "2 अक्टूबर"
    ],
    "correctAnswer": 2,
    "explanationEn": "Culex mosquitoes transmit JE virus.",
    "explanationHi": "UN World Toilet Day।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-170",
    "questionEn": "Fly breeding can be prevented by:",
    "questionHi": "वैश्विक हाथ धुलाई दिवस कब है?",
    "optionsEn": [
      "Open garbage",
      "Proper waste disposal and covered bins",
      "Leaving food open",
      "Animal dung in open"
    ],
    "optionsHi": [
      "15 अगस्त",
      "15 अक्टूबर",
      "26 जनवरी",
      "1 जनवरी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Proper waste management prevents fly breeding.",
    "explanationHi": "Global Handwashing Day।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-171",
    "questionEn": "Leptospirosis is transmitted by:",
    "questionHi": "विश्व जल दिवस कब है?",
    "optionsEn": [
      "Mosquitoes",
      "Rat urine contaminating water",
      "Flies",
      "Sandflies"
    ],
    "optionsHi": [
      "22 मार्च",
      "22 अप्रैल",
      "22 जनवरी",
      "22 जून"
    ],
    "correctAnswer": 1,
    "explanationEn": "Leptospira bacteria in rat urine contaminate water.",
    "explanationHi": "World Water Day।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-172",
    "questionEn": "Rat-proofing buildings prevents:",
    "questionHi": "स्वच्छता और MPHW की भूमिका क्या है?",
    "optionsEn": [
      "Mosquito entry",
      "Rat entry and diseases they carry",
      "Bird entry",
      "Air pollution"
    ],
    "optionsHi": [
      "कोई भूमिका नहीं",
      "स्वास्थ्य शिक्षा, निरीक्षण, रोग निगरानी, व्यवहार परिवर्तन",
      "केवल दवाई देना",
      "केवल अस्पताल काम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rat-proofing prevents rats from entering and spreading diseases.",
    "explanationHi": "महत्वपूर्ण भूमिका।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-173",
    "questionEn": "Biological control of mosquitoes includes:",
    "questionHi": "घर-घर जाकर (HH Visit) स्वच्छता संदेश देना क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Insecticide spraying",
      "Use of larvivorous fish",
      "Fogging",
      "Space spraying"
    ],
    "optionsHi": [
      "समय बर्बाद",
      "व्यक्तिगत परामर्श, परिवार की स्थिति देखना, विश्वास बनाना",
      "कोई महत्व नहीं",
      "केवल औपचारिकता"
    ],
    "correctAnswer": 1,
    "explanationEn": "Biological control uses natural predators like Gambusia fish.",
    "explanationHi": "IPC (Interpersonal Communication)।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-174",
    "questionEn": "Bti (Bacillus thuringiensis israelensis) is:",
    "questionHi": "IEC (Information, Education, Communication) के साधन क्या हैं?",
    "optionsEn": [
      "Chemical insecticide",
      "Biological larvicide",
      "Rodenticide",
      "Repellent"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "पोस्टर, पैम्फलेट, वीडियो, रेडियो, नुक्कड़ नाटक",
      "केवल टीवी",
      "केवल अखबार"
    ],
    "correctAnswer": 1,
    "explanationEn": "Bti is biological larvicide that kills mosquito larvae.",
    "explanationHi": "विभिन्न माध्यम।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-175",
    "questionEn": "Temephos (Abate) is used as:",
    "questionHi": "BCC (Behavior Change Communication) का उद्देश्य क्या है?",
    "optionsEn": [
      "Adulticide",
      "Larvicide for water bodies",
      "Repellent",
      "Rodenticide"
    ],
    "optionsHi": [
      "जानकारी देना",
      "व्यवहार में स्थायी परिवर्तन लाना",
      "केवल पढ़ाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Temephos is chemical larvicide added to water.",
    "explanationHi": "ज्ञान से आगे।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-176",
    "questionEn": "Personal protection against mosquitoes includes all EXCEPT:",
    "questionHi": "स्वास्थ्य शिक्षा देते समय किन बातों का ध्यान रखें?",
    "optionsEn": [
      "Bed nets",
      "Repellents",
      "Window screens",
      "Open doors and windows at night"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "स्थानीय भाषा, सरल शब्द, उदाहरण, भागीदारी",
      "जटिल शब्द",
      "केवल अंग्रेजी"
    ],
    "correctAnswer": 3,
    "explanationEn": "Opening windows at night allows mosquito entry.",
    "explanationHi": "प्रभावी संचार।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-177",
    "questionEn": "Thermal fogging is used for:",
    "questionHi": "समूह चर्चा (Group Discussion) का स्वास्थ्य शिक्षा में क्या लाभ है?",
    "optionsEn": [
      "Killing larvae",
      "Killing adult mosquitoes",
      "Water treatment",
      "Rat control"
    ],
    "optionsHi": [
      "कोई लाभ नहीं",
      "आपसी सीखना, संदेहों का समाधान, सामूहिक प्रेरणा",
      "समय बर्बाद",
      "केवल बहस"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fogging creates insecticide mist to kill adult mosquitoes.",
    "explanationHi": "प्रभावी विधि।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-178",
    "questionEn": "NVBDCP stands for:",
    "questionHi": "प्रदर्शन (Demonstration) विधि का उपयोग कब करें?",
    "optionsEn": [
      "National Vaccine Board",
      "National Vector Borne Disease Control Programme",
      "National Village Building",
      "North Vector Based Disease"
    ],
    "optionsHi": [
      "कभी नहीं",
      "कौशल सिखाते समय (जैसे हाथ धोना, ORS बनाना)",
      "केवल पढ़ाते समय",
      "कभी-कभी"
    ],
    "correctAnswer": 1,
    "explanationEn": "NVBDCP is National Vector Borne Disease Control Programme.",
    "explanationHi": "करके सीखना।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-179",
    "questionEn": "Swachh Vidyalaya includes:",
    "questionHi": "स्वच्छता चैंपियन (Swachhata Champions) कौन हो सकते हैं?",
    "optionsEn": [
      "Only classrooms",
      "Clean drinking water and separate toilets",
      "Only teachers",
      "Only playground"
    ],
    "optionsHi": [
      "केवल अधिकारी",
      "AWW, ASHA, स्कूल बच्चे, ग्राम प्रधान, कोई भी जागरूक नागरिक",
      "केवल डॉक्टर",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Swachh Vidyalaya includes water, toilets, handwashing facilities.",
    "explanationHi": "समुदाय नेतृत्व।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-180",
    "questionEn": "RBSK screening includes:",
    "questionHi": "ग्राम स्वास्थ्य, स्वच्छता और पोषण समिति (VHSNC) क्या है?",
    "optionsEn": [
      "Adults only",
      "4Ds - Defects, Deficiencies, Diseases, Developmental delays",
      "Only vaccination",
      "Only deworming"
    ],
    "optionsHi": [
      "सरकारी विभाग",
      "ग्राम स्तर पर स्वास्थ्य और स्वच्छता की निगरानी करने वाली समिति",
      "अस्पताल समिति",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "RBSK screens for 4Ds in children 0-18 years.",
    "explanationHi": "Community monitoring।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-181",
    "questionEn": "Iron deficiency anemia in children is identified by:",
    "questionHi": "जलवायु परिवर्तन का स्वास्थ्य पर क्या प्रभाव है?",
    "optionsEn": [
      "Weight only",
      "Low hemoglobin levels",
      "Height only",
      "Temperature"
    ],
    "optionsHi": [
      "कोई प्रभाव नहीं",
      "गर्मी से मृत्यु, वेक्टर-जनित रोग बढ़ना, जल-जनित रोग",
      "बेहतर स्वास्थ्य",
      "ठंडक"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hemoglobin testing identifies anemia.",
    "explanationHi": "Climate and health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-182",
    "questionEn": "Refractive errors in school children need:",
    "questionHi": "हीट वेव (Heat Wave) में क्या सावधानी रखें?",
    "optionsEn": [
      "Surgery always",
      "Spectacles/glasses",
      "Medicine",
      "No treatment"
    ],
    "optionsHi": [
      "धूप में काम करें",
      "पानी पिएं, छाया में रहें, हल्के कपड़े पहनें",
      "गर्म कपड़े पहनें",
      "व्यायाम करें"
    ],
    "correctAnswer": 1,
    "explanationEn": "Most refractive errors corrected with appropriate glasses.",
    "explanationHi": "Heat stroke रोकना।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-183",
    "questionEn": "First aid kit in school should contain:",
    "questionHi": "हीट स्ट्रोक के लक्षण क्या हैं?",
    "optionsEn": [
      "Only bandages",
      "Bandages, antiseptic, scissors, cotton",
      "Only medicines",
      "Nothing"
    ],
    "optionsHi": [
      "ठंड लगना",
      "तेज बुखार (>104°F), पसीना न आना, भ्रम, बेहोशी",
      "खांसी",
      "दस्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "First aid kit needs basic supplies for minor injuries.",
    "explanationHi": "आपातकाल।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-184",
    "questionEn": "Health education in schools should be:",
    "questionHi": "बाढ़ के बाद कौन सी स्वास्थ्य समस्याएं बढ़ती हैं?",
    "optionsEn": [
      "Only for sick children",
      "For all children, age-appropriate",
      "Only for girls",
      "Only for boys"
    ],
    "optionsHi": [
      "कोई नहीं",
      "दस्त, टाइफाइड, लेप्टोस्पायरोसिस, त्वचा संक्रमण",
      "हृदय रोग",
      "कैंसर"
    ],
    "correctAnswer": 1,
    "explanationEn": "All children benefit from age-appropriate health education.",
    "explanationHi": "जल प्रदूषण।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-185",
    "questionEn": "School health club activities include:",
    "questionHi": "बाढ़ के बाद पानी कैसे पिएं?",
    "optionsEn": [
      "Only sports",
      "Health education, cleanliness drives, peer education",
      "Only examinations",
      "Only competitions"
    ],
    "optionsHi": [
      "सीधे",
      "उबालकर या क्लोरीनेट करके",
      "नदी का",
      "कुएं का"
    ],
    "correctAnswer": 1,
    "explanationEn": "Health clubs involve various health promotion activities.",
    "explanationHi": "सुरक्षित पानी।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-186",
    "questionEn": "Mobile health teams under RBSK visit schools:",
    "questionHi": "वायु प्रदूषण से कौन से रोग बढ़ते हैं?",
    "optionsEn": [
      "Daily",
      "Periodically for screening",
      "Only when called",
      "Never"
    ],
    "optionsHi": [
      "केवल दस्त",
      "अस्थमा, COPD, फेफड़ों का कैंसर, हृदय रोग",
      "केवल त्वचा रोग",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "RBSK teams conduct periodic school health screenings.",
    "explanationHi": "वायु प्रदूषण प्रभाव।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-187",
    "questionEn": "Referred children under RBSK get:",
    "questionHi": "AQI (Air Quality Index) क्या दर्शाता है?",
    "optionsEn": [
      "No treatment",
      "Free treatment at designated facilities",
      "Treatment at private expense",
      "Only advice"
    ],
    "optionsHi": [
      "पानी की गुणवत्ता",
      "हवा की गुणवत्ता",
      "भोजन की गुणवत्ता",
      "मिट्टी की गुणवत्ता"
    ],
    "correctAnswer": 1,
    "explanationEn": "RBSK provides free treatment for identified conditions.",
    "explanationHi": "0-500 स्केल।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-188",
    "questionEn": "Hand hygiene demonstration should show:",
    "questionHi": "AQI 200+ होने पर क्या करें?",
    "optionsEn": [
      "Quick rinse",
      "All steps of proper handwashing technique",
      "Soap use only",
      "Water use only"
    ],
    "optionsHi": [
      "बाहर व्यायाम करें",
      "बाहर जाना कम करें, मास्क पहनें, बच्चों/बुजुर्गों का ध्यान",
      "कुछ नहीं",
      "खिड़की खोलें"
    ],
    "correctAnswer": 1,
    "explanationEn": "Demonstrations should show complete WHO handwashing steps.",
    "explanationHi": "सुरक्षा उपाय।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-189",
    "questionEn": "Community participation ensures:",
    "questionHi": "PM2.5 क्या है?",
    "optionsEn": [
      "More government work",
      "Sustainability of programs",
      "Higher costs",
      "Less involvement"
    ],
    "optionsHi": [
      "बड़े कण",
      "2.5 माइक्रोमीटर या छोटे कण (फेफड़ों में गहरे जाते हैं)",
      "गैस",
      "पानी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Community ownership leads to sustainable health improvements.",
    "explanationHi": "Fine particles।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-190",
    "questionEn": "Focus group discussions are useful for:",
    "questionHi": "वायु प्रदूषण कम करने के उपाय क्या हैं?",
    "optionsEn": [
      "Large surveys",
      "Understanding community perceptions",
      "Census",
      "Treatment"
    ],
    "optionsHi": [
      "अधिक वाहन",
      "सार्वजनिक परिवहन, CNG/EV, पराली न जलाना",
      "कचरा जलाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "FGDs help understand attitudes, beliefs, and perceptions.",
    "explanationHi": "प्रदूषण नियंत्रण।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-191",
    "questionEn": "Triggering in CLTS aims to create:",
    "questionHi": "ध्वनि प्रदूषण के स्रोत क्या हैं?",
    "optionsEn": [
      "Subsidy demand",
      "Collective disgust about open defecation",
      "Individual toilets",
      "Government action only"
    ],
    "optionsHi": [
      "पेड़",
      "वाहन, कारखाने, निर्माण, लाउडस्पीकर",
      "फूल",
      "पानी"
    ],
    "correctAnswer": 1,
    "explanationEn": "CLTS triggering creates community disgust and shame about OD.",
    "explanationHi": "शोर स्रोत।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-192",
    "questionEn": "ODF sustainability requires:",
    "questionHi": "मृदा प्रदूषण के कारण क्या हैं?",
    "optionsEn": [
      "One-time construction",
      "Continued use and maintenance of toilets",
      "Government monitoring only",
      "No follow-up"
    ],
    "optionsHi": [
      "वर्षा",
      "कीटनाशक, औद्योगिक अपशिष्ट, प्लास्टिक, सीवेज",
      "धूप",
      "हवा"
    ],
    "correctAnswer": 1,
    "explanationEn": "ODF needs ongoing use, maintenance, and behavior sustenance.",
    "explanationHi": "मिट्टी प्रदूषण।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-193",
    "questionEn": "Spot check is used to:",
    "questionHi": "जैविक खेती (Organic Farming) का लाभ क्या है?",
    "optionsEn": [
      "Plan programs",
      "Verify actual practices on unannounced visits",
      "Conduct surveys",
      "Provide treatment"
    ],
    "optionsHi": [
      "अधिक कीटनाशक",
      "कम रासायनिक प्रदूषण, स्वस्थ भोजन",
      "अधिक प्रदूषण",
      "कोई लाभ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Spot checks verify practices through unannounced observation.",
    "explanationHi": "पर्यावरण अनुकूल।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-194",
    "questionEn": "Pre-testing of IEC materials is done to:",
    "questionHi": "हरियाली (Green Cover) का स्वास्थ्य पर क्या प्रभाव है?",
    "optionsEn": [
      "Increase cost",
      "Check if message is understood by target audience",
      "Delay production",
      "Copy other materials"
    ],
    "optionsHi": [
      "नकारात्मक",
      "स्वच्छ हवा, तापमान नियंत्रण, मानसिक स्वास्थ्य",
      "कोई प्रभाव नहीं",
      "बीमारी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pre-testing ensures materials are appropriate and understood.",
    "explanationHi": "पर्यावरण लाभ।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-195",
    "questionEn": "MPHW coordinates hygiene activities with:",
    "questionHi": "विश्व पर्यावरण दिवस कब है?",
    "optionsEn": [
      "Only government",
      "ASHA, ANM, Gram Panchayat",
      "Nobody",
      "Only doctors"
    ],
    "optionsHi": [
      "5 जून",
      "5 जुलाई",
      "5 अगस्त",
      "5 सितंबर"
    ],
    "correctAnswer": 1,
    "explanationEn": "MPHW coordinates with ASHA, ANM, and local government.",
    "explanationHi": "World Environment Day।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-196",
    "questionEn": "Hygiene promotion is most effective when:",
    "questionHi": "स्वस्थ जीवनशैली में क्या शामिल है?",
    "optionsEn": [
      "Top-down only",
      "Combines education with infrastructure improvement",
      "Infrastructure only",
      "Education only"
    ],
    "optionsHi": [
      "केवल व्यायाम",
      "संतुलित आहार, व्यायाम, पर्याप्त नींद, तनाव प्रबंधन, नशे से दूरी",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Behavior change needs both education and enabling infrastructure.",
    "explanationHi": "समग्र स्वास्थ्य।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-197",
    "questionEn": "Key message for handwashing focuses on:",
    "questionHi": "वयस्क को प्रतिदिन कितनी शारीरिक गतिविधि चाहिए?",
    "optionsEn": [
      "Duration only",
      "Critical times: before eating, after toilet",
      "Soap brand",
      "Water temperature"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "कम से कम 30 मिनट मध्यम तीव्रता",
      "5 मिनट",
      "5 घंटे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Critical times are the key behavioral targets for handwashing.",
    "explanationHi": "WHO सिफारिश।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-198",
    "questionEn": "Role play in health education helps:",
    "questionHi": "पर्याप्त नींद वयस्कों के लिए कितनी है?",
    "optionsEn": [
      "Increase costs",
      "Practice skills and build confidence",
      "Reduce participation",
      "Replace demonstration"
    ],
    "optionsHi": [
      "3-4 घंटे",
      "7-9 घंटे",
      "12-14 घंटे",
      "1-2 घंटे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Role plays allow practice and skill development.",
    "explanationHi": "स्वस्थ नींद।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-199",
    "questionEn": "Monitoring reports should be:",
    "questionHi": "तंबाकू सेवन से कौन से रोग होते हैं?",
    "optionsEn": [
      "Kept confidential",
      "Used for program improvement",
      "Ignored",
      "Filed without review"
    ],
    "optionsHi": [
      "कोई नहीं",
      "कैंसर, हृदय रोग, COPD, स्ट्रोक",
      "बेहतर स्वास्थ्य",
      "वजन कम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Monitoring data should inform program adjustments.",
    "explanationHi": "तंबाकू हानि।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-200",
    "questionEn": "WHO defines hygiene as:",
    "questionHi": "MPHW की स्वास्थ्य संवर्धन में भूमिका क्या है?",
    "optionsEn": [
      "Only handwashing",
      "Practices to maintain health and prevent disease",
      "Only sanitation",
      "Only food safety"
    ],
    "optionsHi": [
      "कोई नहीं",
      "स्वास्थ्य शिक्षा, व्यवहार परिवर्तन, रोग रोकथाम, रेफरल",
      "केवल दवाई",
      "केवल अस्पताल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hygiene includes all practices that maintain health.",
    "explanationHi": "प्राथमिक स्वास्थ्य।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-201",
    "questionEn": "Personal hygiene is the foundation of:",
    "questionHi": "शराब सेवन से कौन सी समस्याएं होती हैं?",
    "optionsEn": [
      "Environmental pollution",
      "Individual and community health",
      "Hospital care",
      "Surgery"
    ],
    "optionsHi": [
      "कोई नहीं",
      "यकृत रोग, दुर्घटनाएं, मानसिक समस्याएं, पारिवारिक हिंसा",
      "बेहतर स्वास्थ्य",
      "ताकत"
    ],
    "correctAnswer": 1,
    "explanationEn": "Personal hygiene practices form the basis of preventing disease spread.",
    "explanationHi": "शराब हानि।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-202",
    "questionEn": "Social well-being in WHO health definition includes:",
    "questionHi": "COTPA (2003) क्या है?",
    "optionsEn": [
      "Physical fitness",
      "Ability to maintain relationships and social roles",
      "Mental alertness",
      "Disease absence"
    ],
    "optionsHi": [
      "खाद्य कानून",
      "सिगरेट और अन्य तंबाकू उत्पाद अधिनियम",
      "जल कानून",
      "शिक्षा कानून"
    ],
    "correctAnswer": 1,
    "explanationEn": "Social well-being includes healthy relationships and social functioning.",
    "explanationHi": "तंबाकू नियंत्रण।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-203",
    "questionEn": "Susceptible host in chain of infection refers to:",
    "questionHi": "COTPA के तहत तंबाकू बिक्री किस आयु के नीचे प्रतिबंधित है?",
    "optionsEn": [
      "Infected person",
      "Person who can acquire infection",
      "Carrier",
      "Vector"
    ],
    "optionsHi": [
      "14 वर्ष",
      "18 वर्ष",
      "21 वर्ष",
      "25 वर्ष"
    ],
    "correctAnswer": 1,
    "explanationEn": "Susceptible host is a person vulnerable to acquiring infection.",
    "explanationHi": "नाबालिगों की सुरक्षा।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-204",
    "questionEn": "Portal of entry in chain of infection includes:",
    "questionHi": "सार्वजनिक स्थानों पर धूम्रपान पर क्या है?",
    "optionsEn": [
      "Skin only",
      "Respiratory tract, GI tract, broken skin",
      "Blood only",
      "None"
    ],
    "optionsHi": [
      "अनुमति",
      "प्रतिबंध (COTPA)",
      "प्रोत्साहन",
      "कोई नियम नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pathogens can enter through multiple routes including respiratory, GI, and skin.",
    "explanationHi": "Smoke-free।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-205",
    "questionEn": "Breaking chain of infection at reservoir means:",
    "questionHi": "पैसिव स्मोकिंग (Secondhand Smoke) क्या है?",
    "optionsEn": [
      "Treating susceptible",
      "Identifying and treating infected persons/sources",
      "Using masks",
      "Vaccination only"
    ],
    "optionsHi": [
      "खुद धूम्रपान",
      "दूसरों के धुएं से प्रभावित होना",
      "धूम्रपान छोड़ना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Breaking at reservoir involves treating infection sources.",
    "explanationHi": "Non-smokers को भी हानि।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-206",
    "questionEn": "Direct transmission of infection occurs through:",
    "questionHi": "तंबाकू छोड़ने में क्या मदद कर सकता है?",
    "optionsEn": [
      "Contaminated water",
      "Physical contact between infected and susceptible",
      "Vectors",
      "Fomites"
    ],
    "optionsHi": [
      "अधिक तंबाकू",
      "काउंसलिंग, NRT (Nicotine Replacement), Quitline",
      "कुछ नहीं",
      "केवल इच्छाशक्ति"
    ],
    "correctAnswer": 1,
    "explanationEn": "Direct transmission is person-to-person physical contact.",
    "explanationHi": "Cessation support।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-207",
    "questionEn": "Indirect transmission involves:",
    "questionHi": "राष्ट्रीय तंबाकू नियंत्रण हेल्पलाइन नंबर क्या है?",
    "optionsEn": [
      "Touch only",
      "Vehicles like water, food, or vectors",
      "Airborne only",
      "Blood transfusion only"
    ],
    "optionsHi": [
      "108",
      "1800-11-2356",
      "100",
      "112"
    ],
    "correctAnswer": 1,
    "explanationEn": "Indirect transmission uses intermediate vehicles or vectors.",
    "explanationHi": "Quitline।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-208",
    "questionEn": "Fomites are:",
    "questionHi": "विश्व तंबाकू निषेध दिवस कब है?",
    "optionsEn": [
      "Living vectors",
      "Contaminated inanimate objects",
      "Water sources",
      "Food items"
    ],
    "optionsHi": [
      "31 मार्च",
      "31 मई",
      "31 जुलाई",
      "31 अगस्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fomites are contaminated objects that can transmit pathogens.",
    "explanationHi": "World No Tobacco Day।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-209",
    "questionEn": "Which is NOT a critical time for handwashing?",
    "questionHi": "मोटापे का BMI मानदंड क्या है (एशियाई)?",
    "optionsEn": [
      "Before eating",
      "After toilet use",
      "After touching hair",
      "Before preparing food"
    ],
    "optionsHi": [
      "<18.5",
      "≥25 kg/m²",
      "<25",
      "18.5-22.9"
    ],
    "correctAnswer": 2,
    "explanationEn": "Critical times are before eating, after toilet, before food preparation, after handling contamination.",
    "explanationHi": "Asian criteria।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-210",
    "questionEn": "Handwashing step 'back of fingers to opposing palms' cleans:",
    "questionHi": "मोटापे से कौन से रोग बढ़ते हैं?",
    "optionsEn": [
      "Palm surfaces",
      "Knuckles and finger backs",
      "Thumbs",
      "Wrists"
    ],
    "optionsHi": [
      "कोई नहीं",
      "मधुमेह, हृदय रोग, उच्च रक्तचाप, कुछ कैंसर",
      "बेहतर स्वास्थ्य",
      "ताकत"
    ],
    "correctAnswer": 1,
    "explanationEn": "This step cleans back of bent fingers by rubbing on opposite palm.",
    "explanationHi": "NCDs।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-211",
    "questionEn": "Hand sanitizer concentration of alcohol should be:",
    "questionHi": "केंद्रीय मोटापे का माप क्या है?",
    "optionsEn": [
      "20-30%",
      "40-50%",
      "60-80%",
      "90-100%"
    ],
    "optionsHi": [
      "BMI",
      "कमर की परिधि (Waist Circumference)",
      "वजन केवल",
      "लंबाई"
    ],
    "correctAnswer": 2,
    "explanationEn": "Effective alcohol-based sanitizers contain 60-80% alcohol.",
    "explanationHi": "पुरुष >90cm, महिला >80cm।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-212",
    "questionEn": "Dental plaque is:",
    "questionHi": "NPCDCS क्या है?",
    "optionsEn": [
      "Tooth enamel",
      "Bacterial biofilm on teeth",
      "Gum tissue",
      "Tooth root"
    ],
    "optionsHi": [
      "संक्रामक रोग कार्यक्रम",
      "गैर-संचारी रोग नियंत्रण कार्यक्रम",
      "जल कार्यक्रम",
      "शिक्षा कार्यक्रम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Plaque is sticky bacterial film forming on teeth causing decay.",
    "explanationHi": "NCD Programme।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-213",
    "questionEn": "Gingivitis is:",
    "questionHi": "NCD स्क्रीनिंग किस आयु से शुरू होती है?",
    "optionsEn": [
      "Tooth decay",
      "Gum inflammation",
      "Tooth loss",
      "Jaw infection"
    ],
    "optionsHi": [
      "18 वर्ष",
      "30 वर्ष",
      "50 वर्ष",
      "60 वर्ष"
    ],
    "correctAnswer": 1,
    "explanationEn": "Gingivitis is inflammation of gums, early gum disease.",
    "explanationHi": "Population-based screening।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-214",
    "questionEn": "Periodontitis affects:",
    "questionHi": "5 प्रमुख NCD जोखिम कारक क्या हैं?",
    "optionsEn": [
      "Only teeth",
      "Supporting structures of teeth including bone",
      "Only gums",
      "Tongue"
    ],
    "optionsHi": [
      "केवल धूम्रपान",
      "तंबाकू, शराब, अस्वस्थ आहार, शारीरिक निष्क्रियता, मोटापा",
      "केवल मोटापा",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Periodontitis is advanced gum disease affecting tooth support structures.",
    "explanationHi": "परिवर्तनीय जोखिम।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-215",
    "questionEn": "Hair should be washed:",
    "questionHi": "NCD में 4 बाय 4 (4x4) फ्रेमवर्क क्या है?",
    "optionsEn": [
      "Daily with strong soap",
      "2-3 times weekly with mild shampoo",
      "Monthly",
      "Never"
    ],
    "optionsHi": [
      "खेल",
      "4 रोग (हृदय, कैंसर, मधुमेह, COPD) + 4 जोखिम कारक",
      "गणित",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Regular washing 2-3 times weekly keeps hair clean without over-drying.",
    "explanationHi": "WHO framework।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-216",
    "questionEn": "Nit is:",
    "questionHi": "संतुलित आहार क्या है?",
    "optionsEn": [
      "Adult louse",
      "Louse egg attached to hair",
      "Baby louse",
      "Empty shell"
    ],
    "optionsHi": [
      "केवल चावल",
      "सभी पोषक तत्वों का उचित मात्रा में सेवन",
      "केवल मांस",
      "केवल फल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Nits are louse eggs cemented to hair shafts.",
    "explanationHi": "Balanced diet।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-217",
    "questionEn": "Treatment for head lice includes:",
    "questionHi": "प्रतिदिन कितने फल और सब्जियां खाने चाहिए?",
    "optionsEn": [
      "Normal shampoo only",
      "Permethrin or malathion lotion",
      "Cutting hair only",
      "No treatment needed"
    ],
    "optionsHi": [
      "1 सर्विंग",
      "कम से कम 5 सर्विंग (400g)",
      "केवल सप्ताह में",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pediculicides like permethrin kill lice; nit combing also needed.",
    "explanationHi": "WHO सिफारिश।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-218",
    "questionEn": "Athlete's foot is:",
    "questionHi": "नमक का दैनिक सेवन कितना होना चाहिए?",
    "optionsEn": [
      "Bacterial infection",
      "Fungal infection between toes",
      "Viral infection",
      "Parasitic infection"
    ],
    "optionsHi": [
      "10g",
      "<5g (एक चम्मच से कम)",
      "20g",
      "कोई सीमा नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Athlete's foot is fungal infection thriving in moist areas between toes.",
    "explanationHi": "उच्च रक्तचाप रोकथाम।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-219",
    "questionEn": "Menstrual hygiene day is observed on:",
    "questionHi": "चीनी का दैनिक सेवन कितना होना चाहिए?",
    "optionsEn": [
      "May 28",
      "October 15",
      "March 8",
      "June 5"
    ],
    "optionsHi": [
      "50g",
      "<25g (कुल कैलोरी का <10%)",
      "100g",
      "कोई सीमा नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Menstrual Hygiene Day is May 28 globally.",
    "explanationHi": "WHO सिफारिश।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-220",
    "questionEn": "Cloth used for menstruation should be:",
    "questionHi": "ट्रांस फैट से क्या समस्या होती है?",
    "optionsEn": [
      "Reused without washing",
      "Sun-dried after proper washing",
      "Shared among family",
      "Never washed"
    ],
    "optionsHi": [
      "कोई नहीं",
      "हृदय रोग का जोखिम बढ़ता है",
      "स्वास्थ्य लाभ",
      "वजन कम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cloth pads must be washed properly and sun-dried for hygiene.",
    "explanationHi": "Avoid trans fat।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-221",
    "questionEn": "Surface water sources include:",
    "questionHi": "FSSAI ने ट्रांस फैट की सीमा क्या रखी है?",
    "optionsEn": [
      "Tube wells",
      "Rivers, lakes, ponds",
      "Bore wells",
      "Springs"
    ],
    "optionsHi": [
      "10%",
      "2% (तेल और वसा में)",
      "20%",
      "कोई सीमा नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rivers, lakes, ponds are surface water sources.",
    "explanationHi": "Trans fat limit।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-222",
    "questionEn": "Turbidity in water indicates:",
    "questionHi": "फास्ट फूड/जंक फूड की समस्या क्या है?",
    "optionsEn": [
      "Safe water",
      "Presence of suspended particles",
      "High minerals",
      "Chlorine content"
    ],
    "optionsHi": [
      "स्वस्थ है",
      "अधिक कैलोरी, नमक, चीनी, वसा; कम पोषण",
      "पौष्टिक है",
      "कोई समस्या नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Turbidity measures cloudiness from suspended particles.",
    "explanationHi": "अस्वस्थ भोजन।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-223",
    "questionEn": "TDS in drinking water should not exceed:",
    "questionHi": "Eat Right India अभियान किसका है?",
    "optionsEn": [
      "100 mg/L",
      "300 mg/L",
      "500 mg/L",
      "1000 mg/L"
    ],
    "optionsHi": [
      "WHO",
      "FSSAI",
      "ICMR",
      "MoHFW"
    ],
    "correctAnswer": 2,
    "explanationEn": "Total Dissolved Solids acceptable limit is 500 mg/L (desirable 300).",
    "explanationHi": "स्वस्थ खाना अभियान।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-224",
    "questionEn": "Chlorine acts as disinfectant by:",
    "questionHi": "फोर्टिफाइड खाद्य पदार्थ क्या हैं?",
    "optionsEn": [
      "Filtering",
      "Oxidizing cell components of pathogens",
      "Settling",
      "Absorbing"
    ],
    "optionsHi": [
      "रंगीन खाद्य",
      "जिनमें पोषक तत्व (विटामिन, खनिज) मिलाए गए हों",
      "मसालेदार खाद्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chlorine oxidizes and destroys pathogen cell structures.",
    "explanationHi": "Iron, Vitamin A, Iodine।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-225",
    "questionEn": "Breakpoint chlorination ensures:",
    "questionHi": "+F लोगो क्या दर्शाता है?",
    "optionsEn": [
      "Minimum chlorine",
      "Adequate residual chlorine after demand",
      "Zero chlorine",
      "High turbidity"
    ],
    "optionsHi": [
      "फास्ट फूड",
      "फोर्टिफाइड खाद्य",
      "फ्रीज़ किया हुआ",
      "फ्रेश"
    ],
    "correctAnswer": 1,
    "explanationEn": "Breakpoint ensures free residual chlorine after oxidizing all organics.",
    "explanationHi": "FSSAI logo।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-226",
    "questionEn": "Contact time for chlorine disinfection should be:",
    "questionHi": "आयोडीन युक्त नमक क्यों जरूरी है?",
    "optionsEn": [
      "5 minutes",
      "30 minutes minimum",
      "5 hours",
      "24 hours"
    ],
    "optionsHi": [
      "स्वाद के लिए",
      "आयोडीन की कमी से गॉइटर, क्रेटिनिज्म रोकने के लिए",
      "रंग के लिए",
      "कोई कारण नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Minimum 30 minutes contact time needed for effective disinfection.",
    "explanationHi": "IDD prevention।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-227",
    "questionEn": "Ceramic filters remove pathogens by:",
    "questionHi": "भारत में नमक में कितना आयोडीन होना चाहिए?",
    "optionsEn": [
      "Chemical action",
      "Physical barrier with small pores",
      "Chlorination",
      "Boiling"
    ],
    "optionsHi": [
      "1 ppm",
      "कम से कम 15 ppm (उत्पादन स्तर पर 30 ppm)",
      "100 ppm",
      "कोई मानक नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ceramic filters physically trap pathogens in tiny pores.",
    "explanationHi": "FSSAI मानक।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-228",
    "questionEn": "UV purification works by:",
    "questionHi": "तनाव (Stress) का स्वास्थ्य पर क्या प्रभाव है?",
    "optionsEn": [
      "Heating water",
      "Damaging pathogen DNA",
      "Adding chemicals",
      "Filtering"
    ],
    "optionsHi": [
      "कोई नहीं",
      "उच्च रक्तचाप, हृदय रोग, मानसिक समस्याएं, प्रतिरक्षा कमजोर",
      "बेहतर स्वास्थ्य",
      "ताकत"
    ],
    "correctAnswer": 1,
    "explanationEn": "UV light damages DNA/RNA of microorganisms preventing reproduction.",
    "explanationHi": "Stress effects।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-229",
    "questionEn": "Reverse osmosis removes:",
    "questionHi": "तनाव प्रबंधन के तरीके क्या हैं?",
    "optionsEn": [
      "Only bacteria",
      "Dissolved solids, bacteria, and chemicals",
      "Only viruses",
      "Nothing"
    ],
    "optionsHi": [
      "शराब",
      "व्यायाम, ध्यान, योग, पर्याप्त नींद, सामाजिक सहयोग",
      "तंबाकू",
      "अलगाव"
    ],
    "correctAnswer": 1,
    "explanationEn": "RO removes wide range of contaminants through semi-permeable membrane.",
    "explanationHi": "Stress management।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-230",
    "questionEn": "Dysentery is characterized by:",
    "questionHi": "विश्व मानसिक स्वास्थ्य दिवस कब है?",
    "optionsEn": [
      "Constipation",
      "Bloody diarrhea with mucus",
      "Normal stool",
      "Only vomiting"
    ],
    "optionsHi": [
      "10 सितंबर",
      "10 अक्टूबर",
      "10 नवंबर",
      "10 दिसंबर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dysentery presents with bloody mucoid diarrhea and cramps.",
    "explanationHi": "World Mental Health Day।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-231",
    "questionEn": "Giardiasis is caused by:",
    "questionHi": "नियमित स्वास्थ्य जांच क्यों जरूरी है?",
    "optionsEn": [
      "Bacteria",
      "Virus",
      "Protozoa",
      "Worm"
    ],
    "optionsHi": [
      "पैसे खर्च करने के लिए",
      "रोगों का शीघ्र पता लगाना, रोकथाम",
      "समय बर्बाद",
      "कोई कारण नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Giardia lamblia is a protozoan causing giardiasis.",
    "explanationHi": "Preventive care।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-232",
    "questionEn": "Dracunculiasis (Guinea worm) enters through:",
    "questionHi": "30 वर्ष के बाद किन जांचों की सिफारिश है?",
    "optionsEn": [
      "Skin",
      "Drinking water with infected copepods",
      "Food",
      "Air"
    ],
    "optionsHi": [
      "कोई नहीं",
      "BP, शुगर, कोलेस्ट्रॉल, BMI",
      "केवल वजन",
      "केवल लंबाई"
    ],
    "correctAnswer": 1,
    "explanationEn": "Guinea worm larvae in water fleas enter when drinking contaminated water.",
    "explanationHi": "NCD screening।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-233",
    "questionEn": "Hard water contains excess:",
    "questionHi": "महिलाओं में सर्वाइकल कैंसर स्क्रीनिंग कब शुरू करें?",
    "optionsEn": [
      "Chlorine",
      "Calcium and magnesium",
      "Iron",
      "Arsenic"
    ],
    "optionsHi": [
      "10 वर्ष",
      "30 वर्ष (या यौन सक्रिय होने के 3 साल बाद)",
      "50 वर्ष",
      "कभी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hard water has high calcium and magnesium salts.",
    "explanationHi": "Pap smear/VIA।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-234",
    "questionEn": "Water softening is done by:",
    "questionHi": "स्तन कैंसर की स्व-जांच कितनी बार करें?",
    "optionsEn": [
      "Boiling",
      "Ion exchange or lime-soda process",
      "Filtration",
      "Chlorination"
    ],
    "optionsHi": [
      "साल में एक बार",
      "हर महीने (मासिक धर्म के बाद)",
      "कभी नहीं",
      "10 साल में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ion exchange replaces calcium/magnesium with sodium for softening.",
    "explanationHi": "BSE।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-235",
    "questionEn": "Open defecation contributes to:",
    "questionHi": "मुंह के कैंसर का मुख्य कारण क्या है?",
    "optionsEn": [
      "Better health",
      "Stunting in children",
      "Clean environment",
      "None"
    ],
    "optionsHi": [
      "पानी",
      "तंबाकू (चबाना, गुटखा, पान मसाला)",
      "फल",
      "सब्जियां"
    ],
    "correctAnswer": 1,
    "explanationEn": "Open defecation leads to chronic fecal exposure causing child stunting.",
    "explanationHi": "Oral cancer।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-236",
    "questionEn": "The F-diagram pathways include:",
    "questionHi": "मुंह में सफेद/लाल धब्बे (Leukoplakia/Erythroplakia) क्या दर्शाते हैं?",
    "optionsEn": [
      "Fingers, Flies, Fields, Fluids, Food",
      "Only water",
      "Only food",
      "Only hands"
    ],
    "optionsHi": [
      "सामान्य",
      "कैंसर पूर्व घाव (Pre-cancerous)",
      "स्वस्थ",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "F-diagram shows 5F transmission routes for fecal pathogens.",
    "explanationHi": "जांच जरूरी।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-237",
    "questionEn": "Pit latrine depth should be minimum:",
    "questionHi": "दुर्घटना रोकथाम के उपाय क्या हैं?",
    "optionsEn": [
      "0.5 meters",
      "1.5 meters",
      "3 meters",
      "5 meters"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "हेलमेट, सीटबेल्ट, नशे में न चलाना, ट्रैफिक नियम",
      "तेज चलाना",
      "नियम तोड़ना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pit should be at least 1.5 meters deep for adequate capacity.",
    "explanationHi": "Road safety।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-238",
    "questionEn": "Bottom of latrine pit should be above water table by:",
    "questionHi": "सड़क दुर्घटना में मृत्यु का प्रमुख कारण क्या है?",
    "optionsEn": [
      "0.5 meter",
      "2 meters",
      "5 meters",
      "No requirement"
    ],
    "optionsHi": [
      "धीमी गति",
      "तेज गति, नशे में ड्राइविंग, हेलमेट/सीटबेल्ट न पहनना",
      "ट्रैफिक नियम पालन",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Minimum 2 meters above water table prevents groundwater contamination.",
    "explanationHi": "RTA causes।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-239",
    "questionEn": "Eco-san toilet produces:",
    "questionHi": "बच्चों में दुर्घटना रोकथाम के उपाय क्या हैं?",
    "optionsEn": [
      "Biogas only",
      "Composted manure from dried feces",
      "Nothing useful",
      "Chemicals"
    ],
    "optionsHi": [
      "अकेला छोड़ना",
      "निगरानी, खतरनाक वस्तुएं दूर, सुरक्षित खिलौने",
      "खतरनाक वस्तुएं पास",
      "कोई निगरानी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ecological sanitation toilets convert waste to safe compost.",
    "explanationHi": "Child safety।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-240",
    "questionEn": "Twin-pit latrine switching is done when one pit:",
    "questionHi": "डूबने (Drowning) से बचाव कैसे करें?",
    "optionsEn": [
      "Is half full",
      "Is full",
      "Has odor",
      "Weekly"
    ],
    "optionsHi": [
      "अकेले तैरना",
      "बच्चों की निगरानी, तैराकी सीखना, जल स्रोतों को सुरक्षित करना",
      "गहरे पानी में",
      "कोई निगरानी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Switch to second pit when first is full; allows decomposition.",
    "explanationHi": "Drowning prevention।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-241",
    "questionEn": "Decomposition time in sealed latrine pit is:",
    "questionHi": "जलने (Burns) से बचाव कैसे करें?",
    "optionsEn": [
      "1 month",
      "6 months",
      "1-2 years",
      "5 years"
    ],
    "optionsHi": [
      "बच्चों को चूल्हे के पास",
      "बच्चों को आग से दूर, गर्म पानी की जांच, सुरक्षित चूल्हा",
      "खुली आग पास",
      "कोई सावधानी नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "1-2 years needed for safe pathogen die-off in sealed pit.",
    "explanationHi": "Burn prevention।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-242",
    "questionEn": "Community sanitary complex should have:",
    "questionHi": "विषाक्तता (Poisoning) रोकथाम के उपाय क्या हैं?",
    "optionsEn": [
      "Only male toilets",
      "Separate facilities for men and women",
      "Mixed toilets",
      "No water"
    ],
    "optionsHi": [
      "रसायन खुले रखना",
      "दवाइयां और रसायन बच्चों की पहुंच से दूर, लेबल पढ़ना",
      "कुछ भी मिलाना",
      "कोई सावधानी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Community toilets must have separate facilities for privacy and safety.",
    "explanationHi": "Poisoning prevention।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-243",
    "questionEn": "Fecal sludge management includes:",
    "questionHi": "घर में गिरने (Falls) से बचाव कैसे करें?",
    "optionsEn": [
      "Open dumping",
      "Collection, transport, treatment, disposal of septage",
      "Ignoring",
      "Ocean dumping"
    ],
    "optionsHi": [
      "गीला फर्श",
      "सूखा फर्श, पर्याप्त रोशनी, रेलिंग, बुजुर्गों का ध्यान",
      "अंधेरा रखना",
      "बिखरा सामान"
    ],
    "correctAnswer": 1,
    "explanationEn": "FSM is complete chain of safe septage/sludge management.",
    "explanationHi": "Fall prevention।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-244",
    "questionEn": "Manual scavenging is:",
    "questionHi": "बिजली के झटके (Electric Shock) से बचाव कैसे करें?",
    "optionsEn": [
      "Acceptable",
      "Banned by law in India",
      "Encouraged",
      "Modern method"
    ],
    "optionsHi": [
      "खुले तार",
      "उचित वायरिंग, MCB, गीले हाथों से न छूना",
      "पानी में उपकरण",
      "कोई सावधानी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Manual scavenging is prohibited; mechanical methods required.",
    "explanationHi": "Electrical safety।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-245",
    "questionEn": "Household hazardous waste includes:",
    "questionHi": "कुत्ते के काटने पर तुरंत क्या करें?",
    "optionsEn": [
      "Vegetable peels",
      "Batteries, paints, pesticides",
      "Paper",
      "Cloth"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "साबुन और पानी से 15 मिनट धोना",
      "मिट्टी लगाना",
      "तेल लगाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hazardous waste includes toxic chemicals, batteries, electronics.",
    "explanationHi": "रेबीज रोकथाम।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-246",
    "questionEn": "Waste segregation should happen at:",
    "questionHi": "सांप काटने पर क्या न करें?",
    "optionsEn": [
      "Landfill",
      "Source/household level",
      "Collection vehicle",
      "Treatment plant"
    ],
    "optionsHi": [
      "अस्पताल जाना",
      "चीरा लगाना, मुंह से विष चूसना, टूर्निकेट कसना",
      "शांत रखना",
      "इमोबिलाइज़ करना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Source segregation at household is most effective.",
    "explanationHi": "गलत प्राथमिक उपचार।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-247",
    "questionEn": "Plastic waste is:",
    "questionHi": "सांप काटने पर सही प्राथमिक उपचार क्या है?",
    "optionsEn": [
      "Biodegradable",
      "Non-biodegradable",
      "Quickly decomposing",
      "Organic"
    ],
    "optionsHi": [
      "विष चूसना",
      "शांत रखना, अंग इमोबिलाइज़ करना, जल्दी अस्पताल ले जाना",
      "दौड़ाना",
      "टूर्निकेट"
    ],
    "correctAnswer": 1,
    "explanationEn": "Plastics don't decompose naturally; persist in environment.",
    "explanationHi": "Snake bite first aid।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-248",
    "questionEn": "Single-use plastics banned in India include:",
    "questionHi": "किशोर स्वास्थ्य (Adolescent Health) में क्या शामिल है?",
    "optionsEn": [
      "Water bottles",
      "Carry bags below 75 microns, straws, cutlery",
      "All plastics",
      "None"
    ],
    "optionsHi": [
      "केवल शारीरिक",
      "शारीरिक, मानसिक, यौन और प्रजनन स्वास्थ्य",
      "केवल मानसिक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SUP ban covers thin bags, straws, plates, cups, stirrers etc.",
    "explanationHi": "समग्र दृष्टिकोण।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-249",
    "questionEn": "Extended Producer Responsibility makes:",
    "questionHi": "RKSK (Rashtriya Kishor Swasthya Karyakram) क्या है?",
    "optionsEn": [
      "Consumer responsible",
      "Producer responsible for post-consumer waste",
      "Government responsible",
      "No one responsible"
    ],
    "optionsHi": [
      "वृद्ध कार्यक्रम",
      "किशोर स्वास्थ्य कार्यक्रम",
      "शिशु कार्यक्रम",
      "महिला कार्यक्रम"
    ],
    "correctAnswer": 1,
    "explanationEn": "EPR holds producers accountable for product end-of-life management.",
    "explanationHi": "10-19 वर्ष।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-250",
    "questionEn": "Biomedical waste generated at home includes:",
    "questionHi": "AFHC (Adolescent Friendly Health Clinic) क्या है?",
    "optionsEn": [
      "Kitchen waste",
      "Syringes, soiled dressings from home care",
      "Paper",
      "Plastic"
    ],
    "optionsHi": [
      "वृद्धों के लिए",
      "किशोरों के लिए विशेष स्वास्थ्य सेवा",
      "शिशुओं के लिए",
      "सभी के लिए"
    ],
    "correctAnswer": 1,
    "explanationEn": "Home healthcare generates sharps, soiled materials needing special disposal.",
    "explanationHi": "Adolescent clinic।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-251",
    "questionEn": "Color coding for non-chlorinated plastic waste is:",
    "questionHi": "किशोरों में आम स्वास्थ्य समस्याएं क्या हैं?",
    "optionsEn": [
      "Yellow",
      "Red",
      "White",
      "Blue"
    ],
    "optionsHi": [
      "केवल बुखार",
      "पोषण संबंधी, मानसिक स्वास्थ्य, मादक द्रव्य, यौन स्वास्थ्य",
      "कोई नहीं",
      "केवल दस्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "Red bags for recyclable contaminated waste including non-chlorinated plastics.",
    "explanationHi": "Adolescent issues।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-252",
    "questionEn": "Incineration of biomedical waste destroys pathogens by:",
    "questionHi": "किशोरियों में एनीमिया क्यों आम है?",
    "optionsEn": [
      "Chemicals",
      "High temperature combustion",
      "Burial",
      "Washing"
    ],
    "optionsHi": [
      "कोई कारण नहीं",
      "मासिक धर्म, खराब आहार, तेज वृद्धि",
      "अधिक खाना",
      "अधिक नींद"
    ],
    "correctAnswer": 1,
    "explanationEn": "Incineration uses high temperatures to destroy pathogens completely.",
    "explanationHi": "Iron loss।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-253",
    "questionEn": "Autoclaving uses:",
    "questionHi": "किशोर लड़कियों को साप्ताहिक IFA क्यों दी जाती है?",
    "optionsEn": [
      "Chemicals",
      "Steam under pressure for sterilization",
      "Dry heat",
      "UV light"
    ],
    "optionsHi": [
      "स्वाद के लिए",
      "एनीमिया रोकथाम",
      "वजन बढ़ाने के लिए",
      "कोई कारण नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Autoclave uses steam under pressure to sterilize waste.",
    "explanationHi": "WIFS।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-254",
    "questionEn": "Leachate from landfills is:",
    "questionHi": "यौन शिक्षा (Sex Education) क्यों जरूरी है?",
    "optionsEn": [
      "Clean water",
      "Contaminated liquid from waste decomposition",
      "Safe for drinking",
      "Air"
    ],
    "optionsHi": [
      "गलत है",
      "सही जानकारी, STI/गर्भावस्था रोकथाम, शोषण से बचाव",
      "कोई जरूरत नहीं",
      "हानिकारक है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Leachate is toxic liquid produced from waste decomposition.",
    "explanationHi": "सशक्तिकरण।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-255",
    "questionEn": "Food adulteration means:",
    "questionHi": "POCSO Act क्या है?",
    "optionsEn": [
      "Adding nutrients",
      "Adding inferior or harmful substances",
      "Fortification",
      "Preservation"
    ],
    "optionsHi": [
      "शिक्षा कानून",
      "बच्चों को यौन अपराधों से सुरक्षा कानून",
      "खाद्य कानून",
      "जल कानून"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adulteration adds cheap, inferior or harmful substances to food.",
    "explanationHi": "2012।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-256",
    "questionEn": "Metanil yellow is adulterant in:",
    "questionHi": "Good Touch और Bad Touch शिक्षा क्या है?",
    "optionsEn": [
      "Milk",
      "Turmeric and pulses",
      "Oil",
      "Sugar"
    ],
    "optionsHi": [
      "खेल",
      "बच्चों को अनुचित स्पर्श पहचानना सिखाना",
      "संगीत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Metanil yellow, a carcinogenic dye, adulterates turmeric and dal.",
    "explanationHi": "Child protection।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-257",
    "questionEn": "Argemone oil adulterates:",
    "questionHi": "Childline का नंबर क्या है?",
    "optionsEn": [
      "Ghee",
      "Mustard oil causing epidemic dropsy",
      "Milk",
      "Sugar"
    ],
    "optionsHi": [
      "100",
      "1098",
      "108",
      "112"
    ],
    "correctAnswer": 1,
    "explanationEn": "Argemone seeds in mustard oil cause epidemic dropsy.",
    "explanationHi": "बच्चों की मदद।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-258",
    "questionEn": "Detection of starch in milk is done by:",
    "questionHi": "वृद्ध स्वास्थ्य (Geriatric Health) में क्या शामिल है?",
    "optionsEn": [
      "Litmus test",
      "Iodine test giving blue color",
      "Heating",
      "Smelling"
    ],
    "optionsHi": [
      "केवल दवाई",
      "शारीरिक, मानसिक स्वास्थ्य, गिरने से बचाव, पोषण",
      "कुछ नहीं",
      "केवल अस्पताल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Iodine test gives blue-black color if starch is present.",
    "explanationHi": "समग्र देखभाल।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-259",
    "questionEn": "AGMARK is certification for:",
    "questionHi": "बुजुर्गों में आम स्वास्थ्य समस्याएं क्या हैं?",
    "optionsEn": [
      "Industrial products",
      "Agricultural produce quality",
      "Medicines",
      "Electronics"
    ],
    "optionsHi": [
      "कोई नहीं",
      "उच्च रक्तचाप, मधुमेह, गठिया, दृष्टि/श्रवण हानि, डिमेंशिया",
      "केवल बुखार",
      "केवल सर्दी"
    ],
    "correctAnswer": 1,
    "explanationEn": "AGMARK certifies quality of agricultural commodities.",
    "explanationHi": "Geriatric issues।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-260",
    "questionEn": "ISI mark indicates:",
    "questionHi": "बुजुर्गों में गिरने से बचाव कैसे करें?",
    "optionsEn": [
      "Food quality",
      "Product meets BIS standards",
      "Agricultural quality",
      "Medical product"
    ],
    "optionsHi": [
      "अकेला छोड़ना",
      "पर्याप्त रोशनी, रेलिंग, गैर-फिसलन फर्श, चश्मा",
      "अंधेरा रखना",
      "फिसलन फर्श"
    ],
    "correctAnswer": 1,
    "explanationEn": "ISI mark shows product meets Bureau of Indian Standards.",
    "explanationHi": "Fall prevention।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-261",
    "questionEn": "Clostridium botulinum grows in:",
    "questionHi": "NPHCE (National Programme for Health Care of the Elderly) क्या है?",
    "optionsEn": [
      "Acidic food",
      "Oxygen-rich environment",
      "Low oxygen (anaerobic) conditions",
      "Fresh vegetables"
    ],
    "optionsHi": [
      "बच्चों के लिए",
      "वृद्धों के स्वास्थ्य के लिए राष्ट्रीय कार्यक्रम",
      "किशोरों के लिए",
      "महिलाओं के लिए"
    ],
    "correctAnswer": 2,
    "explanationEn": "C. botulinum grows in anaerobic conditions like improper canning.",
    "explanationHi": "60+ वर्ष।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-262",
    "questionEn": "Ergotism is caused by:",
    "questionHi": "Polypharmacy क्या है?",
    "optionsEn": [
      "Bacteria",
      "Fungus contaminating cereals",
      "Virus",
      "Chemical"
    ],
    "optionsHi": [
      "एक दवाई",
      "कई दवाइयों का एक साथ सेवन (बुजुर्गों में आम)",
      "कोई दवाई नहीं",
      "टीकाकरण"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ergot fungus (Claviceps) on grains causes ergotism.",
    "explanationHi": "Drug interactions जोखिम।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-263",
    "questionEn": "Lathyrism is caused by:",
    "questionHi": "डिमेंशिया क्या है?",
    "optionsEn": [
      "Milk",
      "Excessive Khesari dal consumption",
      "Meat",
      "Water"
    ],
    "optionsHi": [
      "सामान्य भूलना",
      "याददाश्त और संज्ञानात्मक क्षमता में गंभीर गिरावट",
      "बुखार",
      "दस्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "ODAP toxin in Lathyrus sativus (khesari) causes paralysis.",
    "explanationHi": "Alzheimer's आदि।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-264",
    "questionEn": "Cold chain in food safety refers to:",
    "questionHi": "बुजुर्गों में अकेलापन और अवसाद क्यों बढ़ता है?",
    "optionsEn": [
      "Hot food storage",
      "Maintaining low temperature from production to consumption",
      "Freezing only",
      "Room temperature storage"
    ],
    "optionsHi": [
      "कोई कारण नहीं",
      "सामाजिक अलगाव, स्वास्थ्य समस्याएं, परिवार से दूरी",
      "खुशी बढ़ती है",
      "स्वस्थ होते हैं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cold chain maintains continuous low temperature throughout supply.",
    "explanationHi": "Psychosocial issues।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-265",
    "questionEn": "Thawing frozen food should be done:",
    "questionHi": "वृद्धाश्रम (Old Age Home) की जरूरत कब होती है?",
    "optionsEn": [
      "At room temperature",
      "In refrigerator or under running water",
      "In sun",
      "By keeping out overnight"
    ],
    "optionsHi": [
      "सभी के लिए",
      "जब परिवार देखभाल में असमर्थ हो",
      "कभी नहीं",
      "सभी बुजुर्गों को"
    ],
    "correctAnswer": 1,
    "explanationEn": "Safe thawing in refrigerator or running cold water prevents bacterial growth.",
    "explanationHi": "सामाजिक सहारा।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-266",
    "questionEn": "Reheated food should reach internal temperature of:",
    "questionHi": "वरिष्ठ नागरिक हेल्पलाइन नंबर क्या है?",
    "optionsEn": [
      "40°C",
      "60°C",
      "74°C or above",
      "Room temperature"
    ],
    "optionsHi": [
      "100",
      "14567 (Elder Line)",
      "108",
      "112"
    ],
    "correctAnswer": 2,
    "explanationEn": "Reheated food must reach 74°C to kill any bacteria that grew.",
    "explanationHi": "बुजुर्गों की मदद।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-267",
    "questionEn": "Natural lighting in buildings depends on:",
    "questionHi": "विकलांग व्यक्तियों के अधिकार क्या हैं?",
    "optionsEn": [
      "Wall color only",
      "Window size, orientation, and obstructions",
      "Floor material",
      "Ceiling color only"
    ],
    "optionsHi": [
      "कोई अधिकार नहीं",
      "समान अवसर, गरिमा, पहुंच, स्वास्थ्य सेवाएं",
      "केवल दया",
      "अलग रखना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Natural light depends on window design, direction, and external barriers.",
    "explanationHi": "RPWD Act 2016।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-268",
    "questionEn": "Recommended artificial lighting for reading is:",
    "questionHi": "बैरियर फ्री वातावरण क्या है?",
    "optionsEn": [
      "50 lux",
      "150-300 lux",
      "500 lux",
      "1000 lux"
    ],
    "optionsHi": [
      "बाधाएं बढ़ाना",
      "विकलांग व्यक्तियों के लिए सुलभ वातावरण (रैंप, लिफ्ट)",
      "अलग रखना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "150-300 lux recommended for comfortable reading.",
    "explanationHi": "Accessibility।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-269",
    "questionEn": "Stack effect ventilation works due to:",
    "questionHi": "CBR (Community Based Rehabilitation) क्या है?",
    "optionsEn": [
      "Fans",
      "Temperature difference causing air movement",
      "Air conditioning",
      "Wind only"
    ],
    "optionsHi": [
      "अस्पताल में",
      "समुदाय में विकलांग व्यक्तियों का पुनर्वास",
      "केवल शहरों में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Warm air rises, creating natural ventilation through temperature gradient.",
    "explanationHi": "सामुदायिक स्तर।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-270",
    "questionEn": "Dampness in houses can cause:",
    "questionHi": "ADIP योजना क्या है?",
    "optionsEn": [
      "Better health",
      "Mold growth and respiratory problems",
      "Cleaner air",
      "Nothing"
    ],
    "optionsHi": [
      "शिक्षा योजना",
      "विकलांगों को सहायक उपकरण वितरण योजना",
      "खाद्य योजना",
      "जल योजना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dampness promotes mold which triggers respiratory issues and allergies.",
    "explanationHi": "Assistive devices।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-271",
    "questionEn": "Damp-proof course (DPC) is provided:",
    "questionHi": "विश्व स्वास्थ्य दिवस कब है?",
    "optionsEn": [
      "At roof level",
      "At foundation/plinth level",
      "In ceiling",
      "In windows"
    ],
    "optionsHi": [
      "7 मार्च",
      "7 अप्रैल",
      "7 मई",
      "7 जून"
    ],
    "correctAnswer": 1,
    "explanationEn": "DPC at plinth prevents ground moisture rising into walls.",
    "explanationHi": "WHO स्थापना दिवस।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-272",
    "questionEn": "Carbon monoxide poisoning from indoor fuel causes:",
    "questionHi": "राष्ट्रीय स्वच्छता दिवस कब है?",
    "optionsEn": [
      "Blue skin",
      "Headache, dizziness, cherry-red skin in severe cases",
      "Yellow skin",
      "Green skin"
    ],
    "optionsHi": [
      "2 जनवरी",
      "19 नवंबर",
      "26 जनवरी",
      "15 अगस्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "CO binds hemoglobin causing hypoxia; cherry-red sign in poisoning.",
    "explanationHi": "World Toilet Day।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-273",
    "questionEn": "Acute lower respiratory infection in children is linked to:",
    "questionHi": "विश्व एड्स दिवस कब है?",
    "optionsEn": [
      "Clean fuel",
      "Indoor smoke exposure",
      "Outdoor play",
      "Breastfeeding"
    ],
    "optionsHi": [
      "1 नवंबर",
      "1 दिसंबर",
      "1 जनवरी",
      "1 फरवरी"
    ],
    "correctAnswer": 1,
    "explanationEn": "ALRI in children strongly associated with household air pollution.",
    "explanationHi": "World AIDS Day।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-274",
    "questionEn": "Chulha with chimney reduces indoor pollution by:",
    "questionHi": "विश्व मधुमेह दिवस कब है?",
    "optionsEn": [
      "10%",
      "30%",
      "Up to 80%",
      "0%"
    ],
    "optionsHi": [
      "14 अक्टूबर",
      "14 नवंबर",
      "14 दिसंबर",
      "14 जनवरी"
    ],
    "correctAnswer": 2,
    "explanationEn": "Improved stoves with chimney can reduce indoor smoke by 80%.",
    "explanationHi": "World Diabetes Day।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-275",
    "questionEn": "Housing and health relationship includes:",
    "questionHi": "विश्व हृदय दिवस कब है?",
    "optionsEn": [
      "No connection",
      "Overcrowding increases TB, poor sanitation causes diarrhea",
      "Only mental health",
      "Only physical health"
    ],
    "optionsHi": [
      "29 अगस्त",
      "29 सितंबर",
      "29 अक्टूबर",
      "29 नवंबर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Housing conditions directly affect physical, mental, and social health.",
    "explanationHi": "World Heart Day।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-276",
    "questionEn": "Notified slum is:",
    "questionHi": "विश्व कैंसर दिवस कब है?",
    "optionsEn": [
      "Unauthorized settlement",
      "Slum recognized by government for improvement",
      "Demolished area",
      "New colony"
    ],
    "optionsHi": [
      "4 जनवरी",
      "4 फरवरी",
      "4 मार्च",
      "4 अप्रैल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Notified slums are officially recognized for planned improvement.",
    "explanationHi": "World Cancer Day।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-277",
    "questionEn": "Filariasis is transmitted by which mosquito?",
    "questionHi": "विश्व क्षय रोग दिवस कब है?",
    "optionsEn": [
      "Anopheles only",
      "Aedes only",
      "Culex and Mansonia",
      "Sandfly"
    ],
    "optionsHi": [
      "24 फरवरी",
      "24 मार्च",
      "24 अप्रैल",
      "24 मई"
    ],
    "correctAnswer": 2,
    "explanationEn": "Culex (and Mansonia in some areas) transmit lymphatic filariasis.",
    "explanationHi": "World TB Day।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-278",
    "questionEn": "Chikungunya is transmitted by:",
    "questionHi": "विश्व मलेरिया दिवस कब है?",
    "optionsEn": [
      "Culex",
      "Aedes mosquito",
      "Anopheles",
      "Housefly"
    ],
    "optionsHi": [
      "25 मार्च",
      "25 अप्रैल",
      "25 मई",
      "25 जून"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aedes aegypti and Aedes albopictus transmit chikungunya.",
    "explanationHi": "World Malaria Day।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-279",
    "questionEn": "Zika virus is transmitted by:",
    "questionHi": "विश्व टीकाकरण सप्ताह कब है?",
    "optionsEn": [
      "Culex",
      "Aedes mosquito",
      "Anopheles",
      "Sandfly"
    ],
    "optionsHi": [
      "जनवरी का अंतिम सप्ताह",
      "अप्रैल का अंतिम सप्ताह",
      "जुलाई का अंतिम सप्ताह",
      "अक्टूबर का अंतिम सप्ताह"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aedes mosquitoes transmit Zika virus.",
    "explanationHi": "World Immunization Week।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-280",
    "questionEn": "Source reduction for Aedes includes:",
    "questionHi": "विश्व स्तनपान सप्ताह कब है?",
    "optionsEn": [
      "Spraying only",
      "Emptying containers holding water weekly",
      "Using bed nets only",
      "Fogging daily"
    ],
    "optionsHi": [
      "1-7 जनवरी",
      "1-7 अगस्त",
      "1-7 दिसंबर",
      "1-7 जून"
    ],
    "correctAnswer": 1,
    "explanationEn": "Weekly emptying of water containers eliminates Aedes breeding sites.",
    "explanationHi": "World Breastfeeding Week।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-281",
    "questionEn": "Anti-larval measures for Anopheles include:",
    "questionHi": "राष्ट्रीय पोषण सप्ताह कब है?",
    "optionsEn": [
      "Indoor spraying",
      "Filling breeding sites and larvicides",
      "Bed nets",
      "Repellents"
    ],
    "optionsHi": [
      "1-7 अगस्त",
      "1-7 सितंबर",
      "1-7 अक्टूबर",
      "1-7 नवंबर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Source management and larvicides target Anopheles larvae in water.",
    "explanationHi": "National Nutrition Week।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-282",
    "questionEn": "Pyrethroid is used in:",
    "questionHi": "पोषण माह कब है?",
    "optionsEn": [
      "Water treatment",
      "Insecticide treated nets",
      "Food preservation",
      "Medicine"
    ],
    "optionsHi": [
      "जनवरी",
      "सितंबर",
      "दिसंबर",
      "जून"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pyrethroids are insecticides used to treat mosquito nets.",
    "explanationHi": "Poshan Maah।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-283",
    "questionEn": "Scrub typhus is transmitted by:",
    "questionHi": "प्राथमिक स्वास्थ्य केंद्र (PHC) क्या सेवाएं देता है?",
    "optionsEn": [
      "Mosquito",
      "Trombiculid mite (chigger)",
      "Fly",
      "Tick"
    ],
    "optionsHi": [
      "केवल सर्जरी",
      "रोकथाम, उपचारात्मक, प्रजनन स्वास्थ्य, टीकाकरण",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Scrub typhus transmitted by larval trombiculid mites.",
    "explanationHi": "Primary care।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-284",
    "questionEn": "Tick-borne diseases include:",
    "questionHi": "एक PHC कितनी आबादी को कवर करता है?",
    "optionsEn": [
      "Malaria",
      "Kyasanur Forest Disease and Crimean-Congo fever",
      "Dengue",
      "Cholera"
    ],
    "optionsHi": [
      "1000",
      "30,000 (मैदानी), 20,000 (पहाड़ी)",
      "1 लाख",
      "10 लाख"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ticks transmit KFD, CCHF, Lyme disease among others.",
    "explanationHi": "Population norm।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-285",
    "questionEn": "Cockroach control includes:",
    "questionHi": "सब-सेंटर कितनी आबादी को कवर करता है?",
    "optionsEn": [
      "Leaving food open",
      "Good sanitation and sealing cracks",
      "Wet conditions",
      "Open garbage"
    ],
    "optionsHi": [
      "1000",
      "5,000 (मैदानी), 3,000 (पहाड़ी)",
      "50,000",
      "1 लाख"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sanitation and physical barriers prevent cockroach infestation.",
    "explanationHi": "Population norm।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-286",
    "questionEn": "Rodent burrows should be:",
    "questionHi": "HWC (Health and Wellness Centre) क्या है?",
    "optionsEn": [
      "Left alone",
      "Sealed after fumigation",
      "Watered",
      "Made larger"
    ],
    "optionsHi": [
      "अस्पताल",
      "उप-केंद्र/PHC का उन्नत रूप - CPHC",
      "क्लब",
      "स्कूल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Burrows should be treated and sealed to prevent reinfestation.",
    "explanationHi": "Ayushman Bharat।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-287",
    "questionEn": "Anticoagulant rodenticides work by:",
    "questionHi": "HWC में कितनी सेवाएं दी जाती हैं?",
    "optionsEn": [
      "Poisoning immediately",
      "Preventing blood clotting causing internal bleeding",
      "Suffocation",
      "Starvation"
    ],
    "optionsHi": [
      "5",
      "12 सेवाएं (CPHC)",
      "50",
      "100"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anticoagulants prevent vitamin K-dependent clotting factors.",
    "explanationHi": "Expanded services।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-288",
    "questionEn": "Window and door screens should have mesh size of:",
    "questionHi": "Community Health Officer (CHO) कौन है?",
    "optionsEn": [
      "1 inch",
      "16-18 mesh per inch",
      "2 inches",
      "No requirement"
    ],
    "optionsHi": [
      "डॉक्टर",
      "HWC में तैनात स्वास्थ्य अधिकारी (BSc/GNM)",
      "सफाईकर्मी",
      "प्रशासक"
    ],
    "correctAnswer": 1,
    "explanationEn": "16-18 mesh per inch prevents mosquito entry.",
    "explanationHi": "Mid-level provider।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-289",
    "questionEn": "WIFS provides IFA tablets to adolescent girls:",
    "questionHi": "MPHW-M (Male) की मुख्य जिम्मेदारियां क्या हैं?",
    "optionsEn": [
      "Daily",
      "Weekly on fixed day",
      "Monthly",
      "Yearly"
    ],
    "optionsHi": [
      "केवल दवाई",
      "स्वच्छता, वेक्टर नियंत्रण, स्वास्थ्य शिक्षा, रोग निगरानी, NCD स्क्रीनिंग",
      "केवल सर्जरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Weekly Iron Folic Acid Supplementation given on designated day.",
    "explanationHi": "Field work।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-290",
    "questionEn": "Deworming tablet commonly used is:",
    "questionHi": "MPHW-F (ANM) की मुख्य जिम्मेदारियां क्या हैं?",
    "optionsEn": [
      "Paracetamol",
      "Albendazole",
      "Vitamin A",
      "ORS"
    ],
    "optionsHi": [
      "केवल टीकाकरण",
      "MCH, परिवार नियोजन, टीकाकरण, ANC/PNC",
      "केवल सर्जरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Albendazole 400mg used for mass deworming programs.",
    "explanationHi": "Field work।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-291",
    "questionEn": "Vision screening in schools identifies:",
    "questionHi": "ASHA कार्यकर्ता कौन है?",
    "optionsEn": [
      "Hearing problems",
      "Refractive errors and squint",
      "Skin diseases",
      "Heart problems"
    ],
    "optionsHi": [
      "डॉक्टर",
      "प्रशिक्षित महिला सामुदायिक स्वास्थ्य कार्यकर्ता",
      "नर्स",
      "सफाईकर्मी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vision screening detects myopia, hyperopia, astigmatism, squint.",
    "explanationHi": "Community link।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-292",
    "questionEn": "Dental screening looks for:",
    "questionHi": "AWW (Anganwadi Worker) का स्वास्थ्य में क्या योगदान है?",
    "optionsEn": [
      "Heart disease",
      "Caries, gingivitis, malocclusion",
      "Skin problems",
      "Hearing loss"
    ],
    "optionsHi": [
      "कोई नहीं",
      "पोषण, टीकाकरण, स्वास्थ्य शिक्षा, 0-6 वर्ष बच्चों की देखभाल",
      "केवल खाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dental check identifies cavities, gum disease, alignment issues.",
    "explanationHi": "ICDS।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-293",
    "questionEn": "Height and weight monitoring detects:",
    "questionHi": "VHND (Village Health and Nutrition Day) क्या है?",
    "optionsEn": [
      "Vision problems",
      "Growth problems and malnutrition",
      "Hearing issues",
      "Dental caries"
    ],
    "optionsHi": [
      "त्योहार",
      "गांव में मासिक स्वास्थ्य और पोषण दिवस",
      "मेला",
      "खेल दिवस"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anthropometry identifies undernutrition, stunting, wasting, obesity.",
    "explanationHi": "Outreach session।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-294",
    "questionEn": "Congenital heart disease screening in RBSK is done by:",
    "questionHi": "VHND में क्या सेवाएं दी जाती हैं?",
    "optionsEn": [
      "Blood test only",
      "Clinical examination and pulse oximetry",
      "X-ray only",
      "MRI"
    ],
    "optionsHi": [
      "केवल खेल",
      "टीकाकरण, ANC, पोषण परामर्श, स्वास्थ्य शिक्षा",
      "केवल भोजन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clinical signs and pulse oximetry screen for CHD.",
    "explanationHi": "Multiple services।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-295",
    "questionEn": "Learning disability screening looks for:",
    "questionHi": "VHSNC का पूर्ण रूप क्या है?",
    "optionsEn": [
      "Physical illness",
      "Problems in reading, writing, calculations",
      "Hearing loss",
      "Vision problems"
    ],
    "optionsHi": [
      "Village Health Society",
      "Village Health Sanitation and Nutrition Committee",
      "Village Hospital",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Learning disabilities affect academic skills like dyslexia, dyscalculia.",
    "explanationHi": "ग्राम समिति।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-296",
    "questionEn": "School sanitation inspection should check:",
    "questionHi": "VHSNC को कितना अनटाइड फंड मिलता है?",
    "optionsEn": [
      "Only classrooms",
      "Toilets, drinking water, waste management, kitchen",
      "Only playground",
      "Only library"
    ],
    "optionsHi": [
      "₹1000",
      "₹10,000 प्रति वर्ष",
      "₹1 लाख",
      "कोई फंड नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Complete inspection covers all hygiene and sanitation facilities.",
    "explanationHi": "Flexible fund।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-297",
    "questionEn": "Handwashing stations in schools should have:",
    "questionHi": "अनटाइड फंड का उपयोग किसमें हो सकता है?",
    "optionsEn": [
      "Only water",
      "Soap and running water",
      "Only soap",
      "Nothing special"
    ],
    "optionsHi": [
      "व्यक्तिगत खर्च",
      "स्वास्थ्य और स्वच्छता संबंधी गतिविधियां, आपातकालीन परिवहन",
      "केवल भोजन",
      "कुछ भी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Effective handwashing needs both soap and clean running water.",
    "explanationHi": "Community needs।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-298",
    "questionEn": "Peer education in schools means:",
    "questionHi": "MPHW को स्वच्छता निरीक्षण में क्या देखना चाहिए?",
    "optionsEn": [
      "Teacher teaching",
      "Students educating fellow students",
      "Parent teaching",
      "Doctor teaching"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "जल स्रोत, शौचालय, कचरा निपटान, मच्छर प्रजनन स्थल",
      "केवल सड़क",
      "केवल बिजली"
    ],
    "correctAnswer": 1,
    "explanationEn": "Peer education uses students to share health messages with classmates.",
    "explanationHi": "Sanitary inspection।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-299",
    "questionEn": "Capacity building in hygiene promotion means:",
    "questionHi": "MPHW को स्वास्थ्य शिक्षा में किन विषयों पर फोकस करना चाहिए?",
    "optionsEn": [
      "Building infrastructure",
      "Training workers in skills and knowledge",
      "Buying equipment",
      "Writing reports"
    ],
    "optionsHi": [
      "राजनीति",
      "स्वच्छता, पोषण, टीकाकरण, परिवार नियोजन, रोग रोकथाम",
      "केवल फिल्म",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Capacity building develops skills of health workers and community.",
    "explanationHi": "Health topics।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-300",
    "questionEn": "ODF verification is done by:",
    "questionHi": "स्वास्थ्य एवं स्वच्छता का MPHW के कार्य में क्या महत्व है?",
    "optionsEn": [
      "Self-declaration",
      "Third party independent assessment",
      "No verification needed",
      "Single visit"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "रोग रोकथाम, स्वास्थ्य संवर्धन, सामुदायिक स्वास्थ्य सुधार",
      "केवल वेतन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ODF status verified by independent third party teams.",
    "explanationHi": "Core responsibility।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-301",
    "questionEn": "ODF Plus includes:",
    "questionHi": "स्वस्थ समुदाय की विशेषताएं क्या हैं?",
    "optionsEn": [
      "Only toilet construction",
      "ODF sustainability plus solid and liquid waste management",
      "Only ODF",
      "Nothing extra"
    ],
    "optionsHi": [
      "केवल अमीर",
      "स्वच्छ वातावरण, सुरक्षित पानी, शौचालय, स्वास्थ्य सेवाएं, शिक्षा",
      "केवल शहरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ODF Plus adds SLWM components to sustained ODF status.",
    "explanationHi": "समग्र विकास।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-302",
    "questionEn": "Swachh Survekshan is:",
    "questionHi": "स्वास्थ्य में सामाजिक निर्धारकों (Social Determinants) का क्या महत्व है?",
    "optionsEn": [
      "Health survey",
      "Urban cleanliness ranking survey",
      "Census",
      "Water quality survey"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "आय, शिक्षा, रोजगार, आवास स्वास्थ्य को प्रभावित करते हैं",
      "केवल दवाई",
      "केवल अस्पताल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Swachh Survekshan annually ranks cities on cleanliness parameters.",
    "explanationHi": "SDH।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-303",
    "questionEn": "Social and Behavior Change Communication focuses on:",
    "questionHi": "स्वास्थ्य असमानता (Health Inequity) क्या है?",
    "optionsEn": [
      "Infrastructure only",
      "Changing behaviors through communication strategies",
      "Treatment only",
      "Diagnosis only"
    ],
    "optionsHi": [
      "सभी समान",
      "अनुचित और रोकी जा सकने वाली स्वास्थ्य असमानताएं",
      "सामान्य स्थिति",
      "कोई असमानता नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SBCC uses communication to influence health behaviors.",
    "explanationHi": "Health equity।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-304",
    "questionEn": "Interpersonal communication for behavior change is:",
    "questionHi": "PHC (Primary Health Care) के सिद्धांत क्या हैं?",
    "optionsEn": [
      "Mass media",
      "One-on-one or small group dialogue",
      "Poster only",
      "Radio only"
    ],
    "optionsHi": [
      "केवल उपचार",
      "समानता, सामुदायिक भागीदारी, उचित तकनीक, अंतर-क्षेत्रीय समन्वय",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "IPC involves direct face-to-face communication and counseling.",
    "explanationHi": "Alma Ata 1978।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-305",
    "questionEn": "Formative research in IEC helps to:",
    "questionHi": "Health for All का नारा कब दिया गया?",
    "optionsEn": [
      "Evaluate impact",
      "Understand target audience before designing messages",
      "Count beneficiaries",
      "Build toilets"
    ],
    "optionsHi": [
      "1948",
      "1978 (Alma Ata)",
      "2000",
      "2015"
    ],
    "correctAnswer": 1,
    "explanationEn": "Formative research identifies audience knowledge, attitudes, barriers.",
    "explanationHi": "Primary Health Care।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-306",
    "questionEn": "Channel mix in health communication means:",
    "questionHi": "UHC (Universal Health Coverage) क्या है?",
    "optionsEn": [
      "Using one channel",
      "Using multiple channels for message delivery",
      "Avoiding channels",
      "Only print media"
    ],
    "optionsHi": [
      "केवल अमीरों के लिए",
      "सभी को वित्तीय कठिनाई के बिना स्वास्थ्य सेवाएं",
      "केवल शहरों में",
      "कोई सेवा नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Channel mix combines various media for maximum reach and impact.",
    "explanationHi": "SDG 3.8।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-307",
    "questionEn": "Reinforcement in behavior change involves:",
    "questionHi": "आयुष्मान भारत (PM-JAY) क्या है?",
    "optionsEn": [
      "Initial awareness",
      "Sustaining behavior through continued support",
      "Ignoring",
      "Punishment only"
    ],
    "optionsHi": [
      "शिक्षा योजना",
      "गरीब परिवारों के लिए ₹5 लाख तक स्वास्थ्य बीमा",
      "खाद्य योजना",
      "आवास योजना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Reinforcement provides ongoing support to maintain new behaviors.",
    "explanationHi": "Health insurance।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-308",
    "questionEn": "Self-efficacy in health behavior means:",
    "questionHi": "NHM (National Health Mission) के घटक क्या हैं?",
    "optionsEn": [
      "Self-diagnosis",
      "Belief in ability to perform behavior",
      "Self-treatment",
      "Self-awareness only"
    ],
    "optionsHi": [
      "केवल एक",
      "NRHM (ग्रामीण) और NUHM (शहरी)",
      "केवल शहरी",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Self-efficacy is confidence in one's ability to successfully perform behavior.",
    "explanationHi": "राष्ट्रीय स्वास्थ्य मिशन।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-309",
    "questionEn": "Barrier analysis identifies:",
    "questionHi": "JSY (Janani Suraksha Yojana) क्या है?",
    "optionsEn": [
      "Physical barriers only",
      "Reasons why people don't practice healthy behaviors",
      "Only benefits",
      "Cost only"
    ],
    "optionsHi": [
      "शिक्षा योजना",
      "संस्थागत प्रसव को प्रोत्साहित करने के लिए नकद सहायता",
      "खाद्य योजना",
      "आवास योजना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Barrier analysis finds determinants preventing behavior adoption.",
    "explanationHi": "Safe delivery।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-310",
    "questionEn": "Sanitation marketing promotes:",
    "questionHi": "JSSK (Janani Shishu Suraksha Karyakram) में क्या मुफ्त है?",
    "optionsEn": [
      "Free toilets only",
      "Toilets as desirable products people want to buy",
      "Government toilets only",
      "Imported toilets"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "प्रसव, दवाइयां, जांच, भोजन, परिवहन",
      "केवल दवाई",
      "केवल भोजन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sanitation marketing creates demand and supply for toilet products.",
    "explanationHi": "Zero expense delivery।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-311",
    "questionEn": "Normal body temperature is approximately:",
    "questionHi": "108 आपातकालीन सेवा क्या है?",
    "optionsEn": [
      "35°C",
      "37°C",
      "39°C",
      "40°C"
    ],
    "optionsHi": [
      "पुलिस",
      "एम्बुलेंस सेवा",
      "फायर",
      "रेलवे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Normal body temperature is around 37°C (98.6°F).",
    "explanationHi": "Emergency।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-312",
    "questionEn": "Incubation period is:",
    "questionHi": "102 सेवा क्या है?",
    "optionsEn": [
      "Time from infection to symptoms",
      "Time of treatment",
      "Recovery period",
      "Immunization period"
    ],
    "optionsHi": [
      "पुलिस",
      "गर्भवती महिलाओं के लिए मुफ्त परिवहन",
      "फायर",
      "रेलवे"
    ],
    "correctAnswer": 0,
    "explanationEn": "Incubation period is time between infection and symptom appearance.",
    "explanationHi": "Maternal transport।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-313",
    "questionEn": "Communicable period is when:",
    "questionHi": "National Health Policy 2017 का मुख्य लक्ष्य क्या है?",
    "optionsEn": [
      "Person is cured",
      "Infection can be transmitted to others",
      "Person is immune",
      "Incubation occurs"
    ],
    "optionsHi": [
      "केवल अस्पताल",
      "सभी के लिए उच्चतम संभव स्वास्थ्य स्तर",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Communicable period is when infected person can spread infection.",
    "explanationHi": "स्वास्थ्य नीति।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-314",
    "questionEn": "Carrier is a person who:",
    "questionHi": "GDP का कितना प्रतिशत स्वास्थ्य पर खर्च करने का लक्ष्य है (NHP 2017)?",
    "optionsEn": [
      "Has symptoms",
      "Harbors pathogen without symptoms but can transmit",
      "Is immune",
      "Is vaccinated"
    ],
    "optionsHi": [
      "1%",
      "2.5%",
      "5%",
      "10%"
    ],
    "correctAnswer": 1,
    "explanationEn": "Carriers are asymptomatic but can spread infection.",
    "explanationHi": "Health expenditure।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-315",
    "questionEn": "Herd immunity protects:",
    "questionHi": "OOP (Out of Pocket Expenditure) क्या है?",
    "optionsEn": [
      "Only vaccinated",
      "Unvaccinated through high community immunity",
      "No one",
      "Only children"
    ],
    "optionsHi": [
      "सरकारी खर्च",
      "परिवार द्वारा स्वास्थ्य पर सीधा खर्च",
      "बीमा खर्च",
      "कोई खर्च नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "High vaccination coverage protects unvaccinated vulnerable individuals.",
    "explanationHi": "आर्थिक बोझ।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-316",
    "questionEn": "Endemic disease is:",
    "questionHi": "भारत में OOP स्वास्थ्य खर्च का कितना प्रतिशत है?",
    "optionsEn": [
      "Constantly present in an area",
      "Sudden outbreak",
      "Global spread",
      "Eliminated"
    ],
    "optionsHi": [
      "10%",
      "लगभग 55-60%",
      "5%",
      "1%"
    ],
    "correctAnswer": 0,
    "explanationEn": "Endemic means disease constantly present at baseline level in area.",
    "explanationHi": "High OOP।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-317",
    "questionEn": "Epidemic is:",
    "questionHi": "स्वास्थ्य बीमा का महत्व क्या है?",
    "optionsEn": [
      "Normal occurrence",
      "Sudden increase above expected levels",
      "Global spread",
      "Constant presence"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "वित्तीय सुरक्षा, OOP कम करना",
      "केवल फैशन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Epidemic is unusual increase in cases above expected baseline.",
    "explanationHi": "Financial protection।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-318",
    "questionEn": "Pandemic is:",
    "questionHi": "CGHS क्या है?",
    "optionsEn": [
      "Local outbreak",
      "Global spread across countries/continents",
      "Single village",
      "Hospital outbreak"
    ],
    "optionsHi": [
      "राज्य योजना",
      "Central Government Health Scheme",
      "निजी बीमा",
      "कोई योजना नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pandemic is epidemic spread across multiple countries or continents.",
    "explanationHi": "केंद्रीय कर्मचारियों के लिए।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-319",
    "questionEn": "Fingernails should be kept:",
    "questionHi": "ESIS क्या है?",
    "optionsEn": [
      "Long and painted",
      "Short and clean",
      "Very long",
      "Never cut"
    ],
    "optionsHi": [
      "शिक्षा योजना",
      "Employees' State Insurance Scheme",
      "खाद्य योजना",
      "आवास योजना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Short, clean nails prevent dirt and pathogen accumulation.",
    "explanationHi": "श्रमिकों के लिए।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-320",
    "questionEn": "Interlocking fingers during handwashing cleans:",
    "questionHi": "स्वास्थ्य में PPP (Public Private Partnership) क्या है?",
    "optionsEn": [
      "Palm only",
      "Between fingers",
      "Wrist",
      "Back of hand only"
    ],
    "optionsHi": [
      "सरकारी ही",
      "सरकार और निजी क्षेत्र का सहयोग",
      "केवल निजी",
      "कोई सहयोग नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Interlocking fingers cleans web spaces between fingers.",
    "explanationHi": "Partnership।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-321",
    "questionEn": "Rotational rubbing of clasped fingers cleans:",
    "questionHi": "टेलीमेडिसिन क्या है?",
    "optionsEn": [
      "Palms",
      "Fingertips",
      "Thumbs",
      "Wrists"
    ],
    "optionsHi": [
      "टीवी देखना",
      "दूरस्थ स्वास्थ्य परामर्श (फोन/वीडियो)",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rotational rubbing cleans fingertip area and under nails.",
    "explanationHi": "Digital health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-322",
    "questionEn": "Drying hands after washing should use:",
    "questionHi": "eSanjeevani क्या है?",
    "optionsEn": [
      "Shared towel",
      "Clean towel or air dry",
      "Wiping on clothes",
      "Not drying"
    ],
    "optionsHi": [
      "खेल",
      "सरकारी टेलीमेडिसिन प्लेटफॉर्म",
      "सोशल मीडिया",
      "बैंकिंग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clean single-use towel or air drying prevents recontamination.",
    "explanationHi": "Teleconsultation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-323",
    "questionEn": "Fluoride prevents:",
    "questionHi": "ABHA (Ayushman Bharat Health Account) क्या है?",
    "optionsEn": [
      "Gum disease",
      "Dental caries",
      "Bad breath",
      "Tongue problems"
    ],
    "optionsHi": [
      "बैंक खाता",
      "14 अंकों का स्वास्थ्य ID",
      "आधार",
      "पैन कार्ड"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fluoride strengthens enamel and prevents tooth decay.",
    "explanationHi": "Digital health ID।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-324",
    "questionEn": "Dental floss removes plaque from:",
    "questionHi": "ABDM (Ayushman Bharat Digital Mission) का उद्देश्य क्या है?",
    "optionsEn": [
      "Tongue",
      "Between teeth",
      "Lips",
      "Gums only"
    ],
    "optionsHi": [
      "केवल ID",
      "डिजिटल स्वास्थ्य इकोसिस्टम बनाना",
      "केवल बीमा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Flossing removes plaque and food from interdental spaces.",
    "explanationHi": "Digital health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-325",
    "questionEn": "Tongue cleaning is important for:",
    "questionHi": "मोबाइल हेल्थ (mHealth) का उपयोग क्या है?",
    "optionsEn": [
      "Tooth strength",
      "Reducing bacteria and bad breath",
      "Gum health",
      "Enamel protection"
    ],
    "optionsHi": [
      "गेम खेलना",
      "स्वास्थ्य जानकारी, अपॉइंटमेंट, रिमाइंडर, टेलीमेडिसिन",
      "केवल कॉल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tongue harbors bacteria causing halitosis; cleaning helps.",
    "explanationHi": "Mobile health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-326",
    "questionEn": "Bathing helps by:",
    "questionHi": "CoWIN क्या था?",
    "optionsEn": [
      "Only cooling",
      "Removing dirt, sweat, bacteria from skin",
      "Only relaxation",
      "Nothing"
    ],
    "optionsHi": [
      "खेल",
      "COVID-19 टीकाकरण पंजीकरण प्लेटफॉर्म",
      "बैंकिंग",
      "शिक्षा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Bathing removes accumulated dirt, dead cells, microorganisms.",
    "explanationHi": "Vaccination portal।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-327",
    "questionEn": "Eye hygiene includes:",
    "questionHi": "स्वास्थ्य साक्षरता (Health Literacy) क्या है?",
    "optionsEn": [
      "Rubbing eyes frequently",
      "Not touching eyes with dirty hands",
      "Using shared eye makeup",
      "Ignoring discharge"
    ],
    "optionsHi": [
      "पढ़ना-लिखना",
      "स्वास्थ्य जानकारी समझने और उपयोग करने की क्षमता",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clean hands prevent transferring pathogens to eyes.",
    "explanationHi": "Understanding health info।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-328",
    "questionEn": "Conjunctivitis (pink eye) spreads through:",
    "questionHi": "स्वास्थ्य साक्षरता क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Air only",
      "Contact with secretions and contaminated objects",
      "Food",
      "Water only"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "बेहतर स्वास्थ्य निर्णय, रोग रोकथाम, सेवाओं का उपयोग",
      "केवल पढ़ने के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Conjunctivitis spreads through direct contact and fomites.",
    "explanationHi": "Empowerment।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-329",
    "questionEn": "Chloramine is:",
    "questionHi": "स्वास्थ्य गलत जानकारी (Misinformation) से कैसे बचें?",
    "optionsEn": [
      "Pure chlorine",
      "Chlorine combined with ammonia",
      "Chlorine dioxide",
      "Sodium hypochlorite"
    ],
    "optionsHi": [
      "सब मान लें",
      "विश्वसनीय स्रोत जांचें, स्वास्थ्य कर्मी से पूछें",
      "WhatsApp पर विश्वास",
      "कुछ भी मान लें"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chloramines are chlorine-ammonia compounds for water disinfection.",
    "explanationHi": "Critical thinking।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-330",
    "questionEn": "Ozonation disinfects water by:",
    "questionHi": "MPHW को गलत स्वास्थ्य धारणाओं से कैसे निपटना चाहिए?",
    "optionsEn": [
      "Filtration",
      "Strong oxidation killing pathogens",
      "Sedimentation",
      "Softening"
    ],
    "optionsHi": [
      "बहस करना",
      "धैर्य से सही जानकारी देना, उदाहरण देना, सम्मान से",
      "अनदेखा करना",
      "डांटना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ozone is powerful oxidizer destroying microorganisms.",
    "explanationHi": "Effective communication।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-331",
    "questionEn": "Amoebic dysentery is caused by:",
    "questionHi": "स्वास्थ्य शिक्षा में बाधाएं क्या हैं?",
    "optionsEn": [
      "Bacteria",
      "Entamoeba histolytica",
      "Virus",
      "Worm"
    ],
    "optionsHi": [
      "कोई बाधा नहीं",
      "अशिक्षा, सांस्कृतिक मान्यताएं, गरीबी, पहुंच की कमी",
      "सब आसान है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Entamoeba histolytica protozoan causes amoebic dysentery.",
    "explanationHi": "Barriers।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-332",
    "questionEn": "Rotavirus causes:",
    "questionHi": "सांस्कृतिक रूप से संवेदनशील स्वास्थ्य शिक्षा क्या है?",
    "optionsEn": [
      "Dysentery",
      "Severe diarrhea in children",
      "Typhoid",
      "Cholera"
    ],
    "optionsHi": [
      "संस्कृति अनदेखा",
      "स्थानीय परंपराओं और मान्यताओं का सम्मान करते हुए शिक्षा",
      "केवल शहरी तरीके",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rotavirus is major cause of severe diarrhea in young children.",
    "explanationHi": "Cultural sensitivity।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-333",
    "questionEn": "ORS composition includes:",
    "questionHi": "लिंग संवेदनशीलता (Gender Sensitivity) स्वास्थ्य में क्यों जरूरी है?",
    "optionsEn": [
      "Only sugar",
      "Glucose, sodium, potassium, citrate",
      "Only salt",
      "Only water"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "महिलाओं की विशेष स्वास्थ्य जरूरतें, समान पहुंच",
      "केवल पुरुषों के लिए",
      "कोई फर्क नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ORS contains balanced electrolytes and glucose for rehydration.",
    "explanationHi": "Gender and health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-334",
    "questionEn": "Zinc supplementation in diarrhea helps by:",
    "questionHi": "महिलाओं के स्वास्थ्य की विशेष चुनौतियां क्या हैं?",
    "optionsEn": [
      "Stopping diarrhea immediately",
      "Reducing duration and preventing recurrence",
      "Killing bacteria",
      "Rehydration"
    ],
    "optionsHi": [
      "कोई नहीं",
      "एनीमिया, कुपोषण, प्रजनन स्वास्थ्य, हिंसा, पहुंच की कमी",
      "सब समान है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Zinc reduces diarrhea duration and episodes in following months.",
    "explanationHi": "Women's health।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-335",
    "questionEn": "Safe disposal of water treatment sludge prevents:",
    "questionHi": "जनजातीय क्षेत्रों में स्वास्थ्य चुनौतियां क्या हैं?",
    "optionsEn": [
      "Nothing",
      "Environmental contamination",
      "Improved water quality",
      "Better taste"
    ],
    "optionsHi": [
      "कोई नहीं",
      "दूरी, परिवहन, भाषा, सांस्कृतिक बाधाएं",
      "सब आसान है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sludge contains concentrated contaminants needing proper disposal.",
    "explanationHi": "Tribal health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-336",
    "questionEn": "Sanitary survey of water source assesses:",
    "questionHi": "शहरी गरीबों (Urban Poor) की स्वास्थ्य चुनौतियां क्या हैं?",
    "optionsEn": [
      "Only water quality",
      "Contamination risks from surroundings",
      "Only taste",
      "Only color"
    ],
    "optionsHi": [
      "कोई नहीं",
      "झुग्गी में रहना, स्वच्छता की कमी, प्रदूषण, पहुंच की कमी",
      "सब अच्छा है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sanitary survey evaluates physical risks of contamination.",
    "explanationHi": "Urban health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-337",
    "questionEn": "Slow sand filter removes pathogens by:",
    "questionHi": "प्रवासी श्रमिकों (Migrant Workers) की स्वास्थ्य चुनौतियां क्या हैं?",
    "optionsEn": [
      "Chemical action",
      "Biological layer (schmutzdecke)",
      "Heat",
      "Chlorine"
    ],
    "optionsHi": [
      "कोई नहीं",
      "अस्थायी रहना, सेवाओं की पहुंच कठिन, भाषा बाधा",
      "सब अच्छा है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Slow sand filter's biological layer removes pathogens naturally.",
    "explanationHi": "Migrant health।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-338",
    "questionEn": "Rapid sand filter needs:",
    "questionHi": "आपदा में स्वास्थ्य चुनौतियां क्या हैं?",
    "optionsEn": [
      "No maintenance",
      "Regular backwashing",
      "Replacement daily",
      "No water"
    ],
    "optionsHi": [
      "कोई नहीं",
      "चोटें, संक्रमण प्रकोप, मानसिक तनाव, सेवा व्यवधान",
      "सब सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rapid filters need backwashing to remove trapped particles.",
    "explanationHi": "Disaster health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-339",
    "questionEn": "VIP latrine vent pipe should be painted:",
    "questionHi": "आपदा के बाद WASH क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "White",
      "Black for heat absorption",
      "Green",
      "Any color"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "दस्त, हैजा, टाइफाइड जैसे प्रकोप रोकने के लिए",
      "केवल सफाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Black absorbs heat, creating updraft to vent odors.",
    "explanationHi": "Outbreak prevention।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-340",
    "questionEn": "VIP latrine fly screen is placed:",
    "questionHi": "MPHW की आपदा में भूमिका क्या है?",
    "optionsEn": [
      "On door",
      "On top of vent pipe",
      "Inside pit",
      "On floor"
    ],
    "optionsHi": [
      "कोई भूमिका नहीं",
      "स्वास्थ्य शिक्षा, जल शोधन, निगरानी, प्राथमिक उपचार",
      "केवल बैठना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mesh screen on vent pipe traps flies attracted to light.",
    "explanationHi": "Disaster response।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-341",
    "questionEn": "Pour-flush pan is made of:",
    "questionHi": "NDMA क्या है?",
    "optionsEn": [
      "Wood",
      "Ceramic or fiberglass with water seal",
      "Mud",
      "Leaves"
    ],
    "optionsHi": [
      "स्वास्थ्य विभाग",
      "National Disaster Management Authority",
      "शिक्षा विभाग",
      "कृषि विभाग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Smooth ceramic/fiberglass pan with integral water seal.",
    "explanationHi": "आपदा प्रबंधन।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-342",
    "questionEn": "Junction chamber in twin-pit connects:",
    "questionHi": "SDMA क्या है?",
    "optionsEn": [
      "Two rooms",
      "Pan to two pits with diversion",
      "House to road",
      "Nothing"
    ],
    "optionsHi": [
      "केंद्रीय संस्था",
      "State Disaster Management Authority",
      "जिला संस्था",
      "ग्राम संस्था"
    ],
    "correctAnswer": 1,
    "explanationEn": "Junction chamber allows diverting flow between two pits.",
    "explanationHi": "राज्य स्तर।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-343",
    "questionEn": "Composting toilet requires:",
    "questionHi": "आपदा तैयारी (Disaster Preparedness) में क्या शामिल है?",
    "optionsEn": [
      "Water",
      "Addition of dry material like ash",
      "Flushing",
      "Chemicals"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "आपातकालीन किट, योजना, प्रशिक्षण, अभ्यास",
      "केवल इंतजार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dry material maintains carbon ratio and absorbs moisture.",
    "explanationHi": "Preparedness।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-344",
    "questionEn": "Septic tank has:",
    "questionHi": "COVID-19 ने स्वच्छता के महत्व को कैसे उजागर किया?",
    "optionsEn": [
      "One chamber",
      "Two or three chambers for settling",
      "No chambers",
      "Four chambers"
    ],
    "optionsHi": [
      "कोई संबंध नहीं",
      "हाथ धोना, मास्क, सामाजिक दूरी का महत्व बढ़ा",
      "स्वच्छता घटी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple chambers allow settling and anaerobic digestion.",
    "explanationHi": "Hygiene importance।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-345",
    "questionEn": "Sludge accumulation in septic tank is measured by:",
    "questionHi": "हाथ सैनिटाइज़र में कितना अल्कोहल होना चाहिए?",
    "optionsEn": [
      "Visual inspection",
      "Dipping stick with cloth",
      "Weight",
      "Temperature"
    ],
    "optionsHi": [
      "10%",
      "कम से कम 60%",
      "100%",
      "कोई मानक नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cloth-wrapped stick shows sludge depth when withdrawn.",
    "explanationHi": "CDC recommendation।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-346",
    "questionEn": "Soak pit (leach pit) for septic effluent should be:",
    "questionHi": "N95 मास्क कब उपयोग करें?",
    "optionsEn": [
      "Shallow",
      "Filled with gravel/broken bricks",
      "Cemented",
      "Empty"
    ],
    "optionsHi": [
      "सामान्य स्थिति में",
      "उच्च जोखिम वाली स्थिति, स्वास्थ्य कर्मी, संक्रामक रोगी देखभाल",
      "कभी नहीं",
      "घर पर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Porous fill allows effluent absorption into soil.",
    "explanationHi": "High filtration।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-347",
    "questionEn": "Public toilet maintenance requires:",
    "questionHi": "सोशल डिस्टेंसिंग क्या है?",
    "optionsEn": [
      "No cleaning",
      "Regular cleaning, water supply, attendant",
      "Weekly cleaning",
      "Monthly inspection"
    ],
    "optionsHi": [
      "बातचीत बंद",
      "दूसरों से कम से कम 6 फीट (2 मीटर) दूरी",
      "केवल घर में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Regular maintenance essential for public toilet functionality.",
    "explanationHi": "Physical distancing।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-348",
    "questionEn": "Accessible toilet for disabled includes:",
    "questionHi": "श्वसन शिष्टाचार (Respiratory Etiquette) क्या है?",
    "optionsEn": [
      "Steps",
      "Ramp, handrails, adequate space",
      "Narrow door",
      "High seat"
    ],
    "optionsHi": [
      "खुले में छींकना",
      "खांसते/छींकते समय मुंह ढकना, टिशू का उपयोग, हाथ धोना",
      "कुछ नहीं करना",
      "दूसरों की ओर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Accessible toilets have ramps, grab bars, turning space.",
    "explanationHi": "Cough etiquette।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-349",
    "questionEn": "Kitchen waste can be composted in:",
    "questionHi": "क्वारंटाइन और आइसोलेशन में क्या अंतर है?",
    "optionsEn": [
      "Open area",
      "Compost pit or bin",
      "Living room",
      "On road"
    ],
    "optionsHi": [
      "एक ही है",
      "क्वारंटाइन = संपर्क में आए, आइसोलेशन = संक्रमित",
      "विपरीत",
      "कोई अंतर नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Controlled composting in designated pit or bin.",
    "explanationHi": "Different purposes।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-350",
    "questionEn": "C:N ratio for composting should be:",
    "questionHi": "कॉन्टैक्ट ट्रेसिंग क्या है?",
    "optionsEn": [
      "1:1",
      "20:1 to 30:1",
      "100:1",
      "1:100"
    ],
    "optionsHi": [
      "फोन ट्रेसिंग",
      "संक्रमित व्यक्ति के संपर्क में आए लोगों को खोजना",
      "GPS ट्रैकिंग",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Optimal carbon to nitrogen ratio 25:1 to 30:1 for composting.",
    "explanationHi": "Disease control।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-351",
    "questionEn": "Turning compost pile helps by:",
    "questionHi": "महामारी (Epidemic) और विश्वमारी (Pandemic) में क्या अंतर है?",
    "optionsEn": [
      "Reducing volume",
      "Providing oxygen for decomposition",
      "Reducing smell",
      "Adding water"
    ],
    "optionsHi": [
      "एक ही है",
      "महामारी = एक क्षेत्र में, विश्वमारी = वैश्विक",
      "विपरीत",
      "कोई अंतर नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Turning aerates pile supporting aerobic decomposition.",
    "explanationHi": "Geographic spread।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-352",
    "questionEn": "Mature compost is:",
    "questionHi": "One Health दृष्टिकोण क्या है?",
    "optionsEn": [
      "Hot",
      "Dark, crumbly, earthy smelling",
      "Wet",
      "Smelly"
    ],
    "optionsHi": [
      "केवल मनुष्य",
      "मानव, पशु और पर्यावरण स्वास्थ्य का एकीकृत दृष्टिकोण",
      "केवल पशु",
      "केवल पर्यावरण"
    ],
    "correctAnswer": 1,
    "explanationEn": "Finished compost is dark, friable with earthy odor.",
    "explanationHi": "Interconnected health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-353",
    "questionEn": "Eisenia fetida is:",
    "questionHi": "ज़ूनोटिक रोग क्या हैं?",
    "optionsEn": [
      "Bacteria",
      "Composting earthworm species",
      "Fungus",
      "Insect"
    ],
    "optionsHi": [
      "केवल मनुष्यों में",
      "जानवरों से मनुष्यों में फैलने वाले रोग",
      "केवल पौधों में",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Eisenia fetida (red wiggler) is used in vermicomposting.",
    "explanationHi": "रेबीज, बर्ड फ्लू आदि।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-354",
    "questionEn": "Vermiwash is:",
    "questionHi": "AMR (Antimicrobial Resistance) क्या है?",
    "optionsEn": [
      "Water for worms",
      "Liquid fertilizer from vermicomposting",
      "Worm food",
      "Cleaning solution"
    ],
    "optionsHi": [
      "दवाई मजबूत होना",
      "जीवाणुओं का एंटीबायोटिक प्रतिरोधी होना",
      "दवाई सस्ती होना",
      "कोई समस्या नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vermiwash is nutrient-rich liquid extract from worm beds.",
    "explanationHi": "Superbugs।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-355",
    "questionEn": "Refuse derived fuel is made from:",
    "questionHi": "AMR रोकने के उपाय क्या हैं?",
    "optionsEn": [
      "Wood only",
      "Processed municipal solid waste",
      "Coal",
      "Natural gas"
    ],
    "optionsHi": [
      "अधिक एंटीबायोटिक",
      "केवल जरूरत पर एंटीबायोटिक, पूर्ण कोर्स, स्वच्छता",
      "कोई उपाय नहीं",
      "कुछ भी लेना"
    ],
    "correctAnswer": 1,
    "explanationEn": "RDF is fuel produced from combustible waste components.",
    "explanationHi": "Rational use।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-356",
    "questionEn": "Material recovery facility sorts waste for:",
    "questionHi": "स्वास्थ्य सेवा की गुणवत्ता (Quality) के आयाम क्या हैं?",
    "optionsEn": [
      "Disposal",
      "Recycling and resource recovery",
      "Burning",
      "Burial"
    ],
    "optionsHi": [
      "केवल एक",
      "सुरक्षा, प्रभावशीलता, समयबद्धता, समानता, रोगी-केंद्रित",
      "कोई आयाम नहीं",
      "केवल कीमत"
    ],
    "correctAnswer": 1,
    "explanationEn": "MRF separates recyclables from waste stream.",
    "explanationHi": "Quality dimensions।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-357",
    "questionEn": "Needle stick injury prevention includes:",
    "questionHi": "रोगी सुरक्षा (Patient Safety) क्या है?",
    "optionsEn": [
      "Recapping needles",
      "Using safety devices and no recapping",
      "Bending needles",
      "Breaking needles"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "स्वास्थ्य सेवा के दौरान रोगी को हानि से बचाना",
      "केवल सुरक्षा गार्ड",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Safety devices and no-recap policy prevent needle injuries.",
    "explanationHi": "No harm।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-358",
    "questionEn": "Post-exposure prophylaxis after needle stick includes:",
    "questionHi": "विश्व रोगी सुरक्षा दिवस कब है?",
    "optionsEn": [
      "Nothing",
      "Wound care, testing, antiretrovirals if indicated",
      "Only bandage",
      "Only reporting"
    ],
    "optionsHi": [
      "17 अगस्त",
      "17 सितंबर",
      "17 अक्टूबर",
      "17 नवंबर"
    ],
    "correctAnswer": 1,
    "explanationEn": "PEP protocol includes wound care, risk assessment, medication.",
    "explanationHi": "World Patient Safety Day।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-359",
    "questionEn": "Hepatitis B can survive outside body for:",
    "questionHi": "स्वास्थ्य सूचना प्रणाली (HMIS) क्या है?",
    "optionsEn": [
      "Few minutes",
      "Up to 7 days",
      "1 hour",
      "Cannot survive"
    ],
    "optionsHi": [
      "अस्पताल",
      "स्वास्थ्य डेटा संग्रह और विश्लेषण प्रणाली",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HBV remains infectious on surfaces for 7 days.",
    "explanationHi": "Data management।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-360",
    "questionEn": "Norovirus causes:",
    "questionHi": "MPHW को HMIS में क्या रिपोर्ट करना होता है?",
    "optionsEn": [
      "Chronic illness",
      "Acute gastroenteritis with vomiting",
      "Respiratory illness",
      "Skin disease"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "जन्म, मृत्यु, रोग, टीकाकरण, सेवाएं",
      "केवल वेतन",
      "कुछ भी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Norovirus causes sudden onset vomiting and diarrhea.",
    "explanationHi": "Field reporting।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-361",
    "questionEn": "Campylobacter food poisoning is associated with:",
    "questionHi": "स्वास्थ्य संकेतक (Health Indicators) क्या हैं?",
    "optionsEn": [
      "Vegetables",
      "Undercooked poultry",
      "Fruits",
      "Bread"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "स्वास्थ्य स्थिति मापने के उपकरण (IMR, MMR, TFR)",
      "केवल तापमान",
      "केवल वजन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Campylobacter commonly from undercooked chicken.",
    "explanationHi": "Measurement।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-362",
    "questionEn": "E. coli O157:H7 causes:",
    "questionHi": "IMR क्या है?",
    "optionsEn": [
      "Mild diarrhea",
      "Severe bloody diarrhea, HUS",
      "No symptoms",
      "Constipation"
    ],
    "optionsHi": [
      "जन्म दर",
      "Infant Mortality Rate (शिशु मृत्यु दर)",
      "मातृ मृत्यु दर",
      "प्रजनन दर"
    ],
    "correctAnswer": 1,
    "explanationEn": "E. coli O157:H7 causes hemorrhagic colitis and hemolytic uremic syndrome.",
    "explanationHi": "<1 वर्ष मृत्यु।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-363",
    "questionEn": "Listeriosis is dangerous especially for:",
    "questionHi": "MMR क्या है?",
    "optionsEn": [
      "Adults",
      "Pregnant women, elderly, immunocompromised",
      "Children only",
      "Athletes"
    ],
    "optionsHi": [
      "शिशु मृत्यु दर",
      "Maternal Mortality Ratio (मातृ मृत्यु अनुपात)",
      "जन्म दर",
      "प्रजनन दर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Listeria poses high risk to vulnerable groups including pregnancy.",
    "explanationHi": "गर्भावस्था संबंधी मृत्यु।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-364",
    "questionEn": "Taeniasis is caused by eating:",
    "questionHi": "TFR क्या है?",
    "optionsEn": [
      "Vegetables",
      "Undercooked beef or pork with cysticerci",
      "Fruits",
      "Dairy"
    ],
    "optionsHi": [
      "मृत्यु दर",
      "Total Fertility Rate (कुल प्रजनन दर)",
      "जीवन प्रत्याशा",
      "साक्षरता"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tapeworm larvae in undercooked meat cause taeniasis.",
    "explanationHi": "प्रति महिला बच्चे।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-365",
    "questionEn": "Food allergy differs from food poisoning because:",
    "questionHi": "जीवन प्रत्याशा (Life Expectancy) क्या है?",
    "optionsEn": [
      "Both are same",
      "Allergy is immune response, not infection",
      "Poisoning is immune response",
      "No difference"
    ],
    "optionsHi": [
      "मृत्यु दर",
      "जन्म पर औसत जीवन वर्ष",
      "जन्म दर",
      "प्रजनन दर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Food allergy is immune-mediated, not caused by pathogens.",
    "explanationHi": "Life expectancy at birth।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-366",
    "questionEn": "HACCP stands for:",
    "questionHi": "SRS क्या है?",
    "optionsEn": [
      "Health Analysis Critical Control Points",
      "Hazard Analysis Critical Control Points",
      "Hygiene And Cleanliness Control Protocol",
      "Health And Care Control Program"
    ],
    "optionsHi": [
      "सर्वे",
      "Sample Registration System (जन्म-मृत्यु पंजीकरण प्रणाली)",
      "अस्पताल",
      "स्कूल"
    ],
    "correctAnswer": 1,
    "explanationEn": "HACCP is systematic preventive approach to food safety.",
    "explanationHi": "Vital statistics।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-367",
    "questionEn": "Critical control point in HACCP is:",
    "questionHi": "NFHS क्या है?",
    "optionsEn": [
      "Any step",
      "Step where control prevents or eliminates hazard",
      "Final product",
      "Storage only"
    ],
    "optionsHi": [
      "खाद्य सर्वे",
      "National Family Health Survey",
      "शिक्षा सर्वे",
      "आवास सर्वे"
    ],
    "correctAnswer": 1,
    "explanationEn": "CCP is point where control is essential to prevent/reduce hazard.",
    "explanationHi": "स्वास्थ्य डेटा।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-368",
    "questionEn": "Food safety audit includes:",
    "questionHi": "जन्म पंजीकरण क्यों जरूरी है?",
    "optionsEn": [
      "Tasting only",
      "Inspection of processes, records, hygiene",
      "Counting products",
      "Marketing review"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "कानूनी पहचान, अधिकार, योजनाओं का लाभ",
      "केवल औपचारिकता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Food safety audit evaluates compliance with standards.",
    "explanationHi": "Legal identity।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-369",
    "questionEn": "Building orientation for optimal light in India should be:",
    "questionHi": "मृत्यु पंजीकरण क्यों जरूरी है?",
    "optionsEn": [
      "North-South axis",
      "East-West long axis",
      "Any direction",
      "Diagonal"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "कानूनी दस्तावेज, संपत्ति, बीमा, स्वास्थ्य डेटा",
      "केवल औपचारिकता",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "North-South long axis minimizes heat gain while allowing light.",
    "explanationHi": "Legal and planning।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-370",
    "questionEn": "Clerestory windows provide:",
    "questionHi": "मृत्यु का कारण (Cause of Death) रिपोर्ट करना क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Ground level ventilation",
      "High level ventilation and light",
      "No function",
      "Privacy only"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "मृत्यु पैटर्न समझना, स्वास्थ्य नीति बनाना",
      "केवल औपचारिकता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clerestory windows at ceiling level provide ventilation and light.",
    "explanationHi": "Public health planning।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-371",
    "questionEn": "Exhaust fan should be placed:",
    "questionHi": "MCCD क्या है?",
    "optionsEn": [
      "Low on wall",
      "High on wall opposite inlet",
      "On floor",
      "On ceiling only"
    ],
    "optionsHi": [
      "जन्म प्रमाणपत्र",
      "Medical Certification of Cause of Death",
      "टीकाकरण प्रमाणपत्र",
      "शिक्षा प्रमाणपत्र"
    ],
    "correctAnswer": 1,
    "explanationEn": "Exhaust high on wall opposite inlet creates effective airflow.",
    "explanationHi": "मृत्यु कारण प्रमाणन।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-372",
    "questionEn": "Minimum height of room from floor to ceiling should be:",
    "questionHi": "IDSP क्या है?",
    "optionsEn": [
      "2 meters",
      "2.75 to 3 meters",
      "4 meters",
      "1.5 meters"
    ],
    "optionsHi": [
      "शिक्षा कार्यक्रम",
      "Integrated Disease Surveillance Programme",
      "खाद्य कार्यक्रम",
      "आवास कार्यक्रम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adequate ceiling height ensures proper air circulation.",
    "explanationHi": "रोग निगरानी।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-373",
    "questionEn": "Radon in houses is:",
    "questionHi": "IDSP में S, P, L फॉर्म क्या हैं?",
    "optionsEn": [
      "Harmless",
      "Radioactive gas increasing lung cancer risk",
      "Good for health",
      "Visible"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "S=सिंड्रोमिक (SC), P=संभावित (PHC), L=प्रयोगशाला (Lab)",
      "केवल एक फॉर्म",
      "कोई फॉर्म नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Radon is radioactive gas from soil, major lung cancer cause.",
    "explanationHi": "Reporting forms।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-374",
    "questionEn": "Formaldehyde in building materials causes:",
    "questionHi": "MPHW को संदिग्ध प्रकोप की रिपोर्ट कब करनी चाहिए?",
    "optionsEn": [
      "Nothing",
      "Eye and respiratory irritation",
      "Improved air",
      "Better smell"
    ],
    "optionsHi": [
      "महीने बाद",
      "तुरंत (24 घंटे के भीतर)",
      "साल बाद",
      "कभी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Formaldehyde from pressed wood products causes irritation.",
    "explanationHi": "Early reporting।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-375",
    "questionEn": "Asbestos exposure causes:",
    "questionHi": "प्रकोप जांच के चरण क्या हैं?",
    "optionsEn": [
      "Cold",
      "Mesothelioma and lung disease",
      "Skin rash",
      "Diarrhea"
    ],
    "optionsHi": [
      "एक ही",
      "पुष्टि, केस परिभाषा, डेटा संग्रह, विश्लेषण, नियंत्रण",
      "कोई चरण नहीं",
      "केवल इलाज"
    ],
    "correctAnswer": 1,
    "explanationEn": "Asbestos fibers cause mesothelioma and asbestosis.",
    "explanationHi": "Outbreak investigation।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-376",
    "questionEn": "Lead paint is dangerous because:",
    "questionHi": "एपिडेमियोलॉजिकल ट्रायड क्या है?",
    "optionsEn": [
      "Bad color",
      "Lead poisoning especially in children",
      "Peels easily",
      "Expensive"
    ],
    "optionsHi": [
      "तीन दवाइयां",
      "एजेंट, होस्ट, पर्यावरण",
      "तीन अस्पताल",
      "तीन डॉक्टर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lead paint chips and dust cause lead poisoning.",
    "explanationHi": "Disease causation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-377",
    "questionEn": "WHO air quality guideline for PM2.5 annual mean is:",
    "questionHi": "रोग की श्रृंखला (Chain of Infection) में क्या शामिल है?",
    "optionsEn": [
      "25 µg/m³",
      "10 µg/m³",
      "5 µg/m³",
      "50 µg/m³"
    ],
    "optionsHi": [
      "एक कड़ी",
      "एजेंट, रिज़र्वायर, निकास द्वार, ट्रांसमिशन, प्रवेश द्वार, होस्ट",
      "कोई कड़ी नहीं",
      "दो कड़ी"
    ],
    "correctAnswer": 2,
    "explanationEn": "WHO 2021 guideline is 5 µg/m³ annual mean for PM2.5.",
    "explanationHi": "Six links।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-378",
    "questionEn": "Kitchen should be located:",
    "questionHi": "रोग की श्रृंखला तोड़ने से क्या होता है?",
    "optionsEn": [
      "In bedroom",
      "Separate from living areas, well ventilated",
      "Without ventilation",
      "Underground"
    ],
    "optionsHi": [
      "रोग बढ़ता है",
      "रोग का प्रसार रुकता है",
      "कोई प्रभाव नहीं",
      "रोग तेज होता है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Kitchen needs separation and ventilation for fume removal.",
    "explanationHi": "Break the chain।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-379",
    "questionEn": "Phlebotomine sandflies transmit:",
    "questionHi": "स्वच्छता रोग की श्रृंखला कैसे तोड़ती है?",
    "optionsEn": [
      "Malaria",
      "Kala-azar (Leishmaniasis)",
      "Dengue",
      "Filariasis"
    ],
    "optionsHi": [
      "नहीं तोड़ती",
      "ट्रांसमिशन रोककर, रिज़र्वायर कम करके",
      "श्रृंखला बढ़ाती है",
      "कोई प्रभाव नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sandflies transmit Leishmania parasites causing kala-azar.",
    "explanationHi": "Prevention।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-380",
    "questionEn": "Sandfly prevention includes:",
    "questionHi": "प्राथमिक रोकथाम (Primary Prevention) क्या है?",
    "optionsEn": [
      "Bed nets don't work",
      "Fine mesh nets and indoor spraying",
      "Only repellents",
      "Nothing effective"
    ],
    "optionsHi": [
      "इलाज",
      "रोग होने से पहले रोकना (टीकाकरण, स्वच्छता)",
      "पुनर्वास",
      "जांच"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fine mesh (needed for small sandflies) and IRS prevent bites.",
    "explanationHi": "Before disease।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-381",
    "questionEn": "Mite-borne disease in India includes:",
    "questionHi": "द्वितीयक रोकथाम (Secondary Prevention) क्या है?",
    "optionsEn": [
      "Malaria",
      "Scrub typhus",
      "Dengue",
      "Cholera"
    ],
    "optionsHi": [
      "टीकाकरण",
      "शीघ्र पहचान और उपचार (स्क्रीनिंग)",
      "पुनर्वास",
      "स्वच्छता"
    ],
    "correctAnswer": 1,
    "explanationEn": "Trombiculid mites transmit scrub typhus in India.",
    "explanationHi": "Early detection।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-382",
    "questionEn": "Prevention of scrub typhus includes:",
    "questionHi": "तृतीयक रोकथाम (Tertiary Prevention) क्या है?",
    "optionsEn": [
      "Mosquito nets",
      "Protective clothing in endemic areas, repellents",
      "Water purification",
      "Vaccination"
    ],
    "optionsHi": [
      "टीकाकरण",
      "विकलांगता कम करना, पुनर्वास",
      "स्क्रीनिंग",
      "स्वच्छता"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clothing and repellents prevent chigger bites in scrub areas.",
    "explanationHi": "Rehabilitation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-383",
    "questionEn": "House fly completes lifecycle in:",
    "questionHi": "स्वास्थ्य संवर्धन (Health Promotion) क्या है?",
    "optionsEn": [
      "1 day",
      "7-10 days",
      "30 days",
      "3 months"
    ],
    "optionsHi": [
      "केवल इलाज",
      "लोगों को अपने स्वास्थ्य पर नियंत्रण और सुधार करने में सक्षम बनाना",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fly lifecycle from egg to adult takes about 7-10 days.",
    "explanationHi": "Ottawa Charter।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-384",
    "questionEn": "Fly breeding is prevented by:",
    "questionHi": "स्वास्थ्य संवर्धन के 5 क्षेत्र क्या हैं (Ottawa Charter)?",
    "optionsEn": [
      "Open garbage",
      "Covered waste bins and proper disposal",
      "Wet garbage",
      "Food waste in open"
    ],
    "optionsHi": [
      "केवल एक",
      "नीति, वातावरण, सामुदायिक कार्रवाई, व्यक्तिगत कौशल, सेवा पुनर्गठन",
      "कोई क्षेत्र नहीं",
      "दो क्षेत्र"
    ],
    "correctAnswer": 1,
    "explanationEn": "Covered waste and proper disposal eliminate fly breeding.",
    "explanationHi": "5 action areas।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-385",
    "questionEn": "Fly density is measured by:",
    "questionHi": "MPHW का स्वास्थ्य संवर्धन में क्या योगदान है?",
    "optionsEn": [
      "Counting",
      "Scudder grill or fly count",
      "Weight",
      "Volume"
    ],
    "optionsHi": [
      "कोई योगदान नहीं",
      "स्वास्थ्य शिक्षा, व्यवहार परिवर्तन, सामुदायिक जागरूकता",
      "केवल दवाई देना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Scudder grill standardizes fly count per area.",
    "explanationHi": "Field work।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-386",
    "questionEn": "Rat runs along:",
    "questionHi": "सामुदायिक भागीदारी (Community Participation) का स्वास्थ्य में क्या महत्व है?",
    "optionsEn": [
      "Open areas",
      "Walls and regular paths",
      "Random routes",
      "Only ceilings"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "स्थानीय जरूरतों की समझ, स्वामित्व, स्थिरता",
      "समय बर्बाद",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rats follow regular paths along walls leaving rub marks.",
    "explanationHi": "Ownership।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-387",
    "questionEn": "Signs of rat infestation include:",
    "questionHi": "सामुदायिक भागीदारी के स्तर क्या हैं?",
    "optionsEn": [
      "Clean areas",
      "Droppings, gnaw marks, tracks, rub marks",
      "Fresh paint",
      "No signs"
    ],
    "optionsHi": [
      "एक ही",
      "सूचना, परामर्श, साझेदारी, सशक्तिकरण",
      "कोई स्तर नहीं",
      "दो स्तर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple signs indicate rat presence and activity.",
    "explanationHi": "Levels of participation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-388",
    "questionEn": "Rat flap on drain prevents:",
    "questionHi": "PRA (Participatory Rural Appraisal) क्या है?",
    "optionsEn": [
      "Water flow",
      "Rat entry through drains",
      "Air entry",
      "Nothing"
    ],
    "optionsHi": [
      "सरकारी सर्वे",
      "समुदाय के साथ मिलकर स्थानीय समस्याओं और समाधान खोजना",
      "केवल डॉक्टर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "One-way rat flaps prevent rats entering through sewers.",
    "explanationHi": "Community involvement।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-389",
    "questionEn": "Hearing screening in children identifies:",
    "questionHi": "स्वास्थ्य में अंतर-क्षेत्रीय समन्वय क्यों जरूरी है?",
    "optionsEn": [
      "Vision problems",
      "Hearing impairment",
      "Growth issues",
      "Dental problems"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "स्वास्थ्य पर कई क्षेत्रों का प्रभाव (जल, शिक्षा, कृषि)",
      "केवल स्वास्थ्य विभाग",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hearing screening detects hearing loss for early intervention.",
    "explanationHi": "Intersectoral।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-390",
    "questionEn": "Scoliosis screening checks for:",
    "questionHi": "MPHW को किन विभागों के साथ समन्वय करना होता है?",
    "optionsEn": [
      "Height",
      "Spinal curvature",
      "Weight",
      "Vision"
    ],
    "optionsHi": [
      "कोई नहीं",
      "पंचायत, शिक्षा, ICDS, जल-स्वच्छता, पशुपालन",
      "केवल स्वास्थ्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Scoliosis screening identifies abnormal spinal curves.",
    "explanationHi": "Multiple departments।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-391",
    "questionEn": "Congenital hypothyroidism if untreated causes:",
    "questionHi": "SDG 3 क्या है?",
    "optionsEn": [
      "Nothing",
      "Mental retardation and growth failure",
      "Obesity only",
      "Skin problems"
    ],
    "optionsHi": [
      "शिक्षा",
      "Good Health and Well-being (अच्छा स्वास्थ्य और कल्याण)",
      "गरीबी",
      "भुखमरी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Untreated hypothyroidism causes cretinism with mental and growth issues.",
    "explanationHi": "Health SDG।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-392",
    "questionEn": "Cleft lip/palate identified in RBSK is:",
    "questionHi": "SDG 6 स्वास्थ्य से कैसे संबंधित है?",
    "optionsEn": [
      "Ignored",
      "Referred for corrective surgery",
      "Untreatable",
      "Minor issue"
    ],
    "optionsHi": [
      "संबंधित नहीं",
      "स्वच्छ जल और स्वच्छता = बेहतर स्वास्थ्य",
      "केवल शिक्षा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "RBSK refers cleft lip/palate for surgical correction.",
    "explanationHi": "WASH and health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-393",
    "questionEn": "Talipes (clubfoot) detected in newborn is:",
    "questionHi": "WHO का मुख्यालय कहां है?",
    "optionsEn": [
      "Permanent",
      "Correctable with early treatment",
      "Untreatable",
      "Not important"
    ],
    "optionsHi": [
      "न्यूयॉर्क",
      "जिनेवा (स्विट्जरलैंड)",
      "पेरिस",
      "लंदन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Early treatment with casting/surgery corrects clubfoot.",
    "explanationHi": "World Health Organization।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-394",
    "questionEn": "ADHD is:",
    "questionHi": "UNICEF का स्वास्थ्य में क्या योगदान है?",
    "optionsEn": [
      "Physical illness",
      "Attention Deficit Hyperactivity Disorder",
      "Skin condition",
      "Infection"
    ],
    "optionsHi": [
      "कोई योगदान नहीं",
      "बाल स्वास्थ्य, टीकाकरण, पोषण, WASH",
      "केवल शिक्षा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ADHD is neurodevelopmental disorder affecting attention and behavior.",
    "explanationHi": "Child health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-395",
    "questionEn": "Autism spectrum disorder affects:",
    "questionHi": "SEARO क्या है?",
    "optionsEn": [
      "Only speech",
      "Social communication and behavior",
      "Only movement",
      "Vision"
    ],
    "optionsHi": [
      "अफ्रीकी क्षेत्र",
      "WHO South-East Asia Regional Office",
      "यूरोपीय क्षेत्र",
      "अमेरिकी क्षेत्र"
    ],
    "correctAnswer": 1,
    "explanationEn": "ASD affects social interaction, communication, and behavior.",
    "explanationHi": "Regional office।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-396",
    "questionEn": "School health records should include:",
    "questionHi": "भारत में WHO का प्रतिनिधि कार्यालय कहां है?",
    "optionsEn": [
      "Only name",
      "Immunization, growth, screening results",
      "Only attendance",
      "Only grades"
    ],
    "optionsHi": [
      "मुंबई",
      "नई दिल्ली",
      "चेन्नई",
      "कोलकाता"
    ],
    "correctAnswer": 1,
    "explanationEn": "Comprehensive records track health status and interventions.",
    "explanationHi": "WHO India।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-397",
    "questionEn": "Life skills education includes:",
    "questionHi": "IHR (International Health Regulations) क्या है?",
    "optionsEn": [
      "Only academics",
      "Decision making, problem solving, communication",
      "Only sports",
      "Only health"
    ],
    "optionsHi": [
      "राष्ट्रीय नियम",
      "अंतर्राष्ट्रीय स्वास्थ्य नियम - महामारी नियंत्रण के लिए",
      "स्थानीय नियम",
      "कोई नियम नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Life skills develop psychosocial competencies.",
    "explanationHi": "Global health security।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-398",
    "questionEn": "Adolescent friendly health services are:",
    "questionHi": "PHEIC क्या है?",
    "optionsEn": [
      "Same as adult services",
      "Confidential, non-judgmental, accessible",
      "Only for girls",
      "Hospital-based only"
    ],
    "optionsHi": [
      "राष्ट्रीय आपातकाल",
      "Public Health Emergency of International Concern",
      "स्थानीय आपातकाल",
      "कोई आपातकाल नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "AFHS are tailored to adolescent needs and concerns.",
    "explanationHi": "WHO declaration।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-399",
    "questionEn": "Jal Jeevan Mission aims for:",
    "questionHi": "COVID-19 को PHEIC कब घोषित किया गया?",
    "optionsEn": [
      "Toilet construction",
      "Tap water to every rural household",
      "Road construction",
      "Electricity"
    ],
    "optionsHi": [
      "मार्च 2020",
      "जनवरी 2020",
      "दिसंबर 2019",
      "जून 2020"
    ],
    "correctAnswer": 1,
    "explanationEn": "JJM provides piped water supply to rural households.",
    "explanationHi": "30 January 2020।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-400",
    "questionEn": "Swachh Bharat Mission Grameen focuses on:",
    "questionHi": "स्वास्थ्य एवं स्वच्छता में MPHW का सबसे महत्वपूर्ण कार्य क्या है?",
    "optionsEn": [
      "Urban areas",
      "Rural sanitation and ODF",
      "Industries",
      "Hospitals"
    ],
    "optionsHi": [
      "केवल दवाई देना",
      "सामुदायिक स्वास्थ्य शिक्षा, रोग रोकथाम, स्वच्छता निरीक्षण",
      "केवल अस्पताल काम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SBM-G targets rural sanitation coverage and ODF status.",
    "explanationHi": "Primary health care।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-401",
    "questionEn": "ASHA worker role in sanitation includes:",
    "questionHi": "जल जनित रोगों के उदाहरण क्या हैं?",
    "optionsEn": [
      "Building toilets",
      "Motivating households for toilet use and hygiene",
      "Only immunization",
      "Only delivery care"
    ],
    "optionsHi": [
      "मलेरिया",
      "हैजा, टाइफाइड, हेपेटाइटिस A, पोलियो",
      "डेंगू",
      "TB"
    ],
    "correctAnswer": 1,
    "explanationEn": "ASHA promotes sanitation behavior change at household level.",
    "explanationHi": "दूषित पानी।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-402",
    "questionEn": "Gram Panchayat role in sanitation includes:",
    "questionHi": "भोजन जनित रोगों के उदाहरण क्या हैं?",
    "optionsEn": [
      "Nothing",
      "Planning, implementing, monitoring sanitation programs",
      "Only taxation",
      "Only elections"
    ],
    "optionsHi": [
      "मलेरिया",
      "फूड पॉइज़निंग, टाइफाइड, हैजा, हेपेटाइटिस A",
      "डेंगू",
      "TB"
    ],
    "correctAnswer": 1,
    "explanationEn": "GP responsible for local sanitation planning and implementation.",
    "explanationHi": "दूषित भोजन।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-403",
    "questionEn": "Nigrani Samiti is:",
    "questionHi": "वायु जनित रोगों के उदाहरण क्या हैं?",
    "optionsEn": [
      "Hospital committee",
      "Community monitoring committee for sanitation",
      "School committee",
      "Market committee"
    ],
    "optionsHi": [
      "हैजा",
      "TB, इन्फ्लुएंजा, COVID-19, खसरा",
      "टाइफाइड",
      "मलेरिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "Nigrani Samiti monitors sanitation status and programs.",
    "explanationHi": "श्वसन मार्ग।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-404",
    "questionEn": "Transect walk in PRA involves:",
    "questionHi": "संपर्क जनित रोगों के उदाहरण क्या हैं?",
    "optionsEn": [
      "Running race",
      "Systematic walk through area noting observations",
      "Indoor meeting",
      "Writing reports"
    ],
    "optionsHi": [
      "हैजा",
      "स्केबीज, ट्रेकोमा, कुष्ठ रोग",
      "टाइफाइड",
      "मलेरिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "Transect walk involves walking through community observing conditions.",
    "explanationHi": "प्रत्यक्ष संपर्क।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-405",
    "questionEn": "Social mapping shows:",
    "questionHi": "मल-मौखिक मार्ग (Fecal-Oral Route) से फैलने वाले रोग कौन से हैं?",
    "optionsEn": [
      "Only roads",
      "Location of households and community resources",
      "Only water",
      "Only toilets"
    ],
    "optionsHi": [
      "TB",
      "दस्त, टाइफाइड, हैजा, हेपेटाइटिस A, पोलियो",
      "मलेरिया",
      "डेंगू"
    ],
    "correctAnswer": 1,
    "explanationEn": "Social maps display community layout and resource distribution.",
    "explanationHi": "Fecal-oral transmission।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-406",
    "questionEn": "Seasonal calendar helps identify:",
    "questionHi": "F-Diagram क्या दर्शाता है?",
    "optionsEn": [
      "Only festivals",
      "Disease patterns and health risks by season",
      "Only farming",
      "Only rainfall"
    ],
    "optionsHi": [
      "खाद्य पदार्थ",
      "मल से मुंह तक रोग फैलाव के मार्ग (Fluids, Fields, Flies, Fingers, Food)",
      "फल",
      "फूल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Seasonal calendar links health issues to seasonal patterns.",
    "explanationHi": "Transmission routes।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-407",
    "questionEn": "KAP survey assesses:",
    "questionHi": "F-Diagram में बाधाएं (Barriers) क्या हैं?",
    "optionsEn": [
      "Infrastructure only",
      "Knowledge, Attitudes, and Practices",
      "Only knowledge",
      "Only demographics"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "शौचालय, हाथ धोना, सुरक्षित पानी, भोजन ढकना",
      "सभी को खुला रखना",
      "गंदगी फैलाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "KAP survey evaluates community knowledge, attitudes, practices.",
    "explanationHi": "Break transmission।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-408",
    "questionEn": "Baseline survey is conducted:",
    "questionHi": "दस्त (Diarrhea) का मुख्य कारण क्या है?",
    "optionsEn": [
      "At end of program",
      "Before program implementation",
      "Only once a year",
      "Never"
    ],
    "optionsHi": [
      "ठंडा पानी",
      "दूषित पानी और भोजन, खराब स्वच्छता",
      "गर्म मौसम",
      "व्यायाम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Baseline establishes pre-intervention status for comparison.",
    "explanationHi": "Fecal contamination।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-409",
    "questionEn": "Endline survey is done:",
    "questionHi": "दस्त में सबसे खतरनाक जटिलता क्या है?",
    "optionsEn": [
      "Before program",
      "After program completion",
      "During program only",
      "Never"
    ],
    "optionsHi": [
      "बुखार",
      "निर्जलीकरण (Dehydration)",
      "सिरदर्द",
      "खांसी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Endline assesses changes after program implementation.",
    "explanationHi": "जल और इलेक्ट्रोलाइट हानि।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-410",
    "questionEn": "Impact evaluation measures:",
    "questionHi": "निर्जलीकरण के संकेत क्या हैं?",
    "optionsEn": [
      "Inputs only",
      "Long-term changes attributable to program",
      "Only activities",
      "Budget spent"
    ],
    "optionsHi": [
      "अधिक पेशाब",
      "प्यास, सूखा मुंह, कम पेशाब, धंसी आंखें, त्वचा की चुटकी",
      "मोटापा",
      "अधिक भूख"
    ],
    "correctAnswer": 1,
    "explanationEn": "Impact evaluation assesses lasting outcomes and attribution.",
    "explanationHi": "Dehydration signs।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-411",
    "questionEn": "Primary prevention of disease aims at:",
    "questionHi": "दस्त में ORS क्यों दें?",
    "optionsEn": [
      "Treatment",
      "Preventing occurrence before it happens",
      "Cure",
      "Rehabilitation"
    ],
    "optionsHi": [
      "दस्त रोकने के लिए",
      "खोए हुए जल और लवण की भरपाई के लिए",
      "भूख बढ़ाने के लिए",
      "नींद के लिए"
    ],
    "correctAnswer": 1,
    "explanationEn": "Primary prevention stops disease before it occurs.",
    "explanationHi": "Rehydration।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-412",
    "questionEn": "Secondary prevention involves:",
    "questionHi": "ORS बनाने की विधि क्या है?",
    "optionsEn": [
      "Health promotion",
      "Early detection and treatment",
      "Preventing exposure",
      "Rehabilitation"
    ],
    "optionsHi": [
      "गर्म पानी में",
      "1 लीटर साफ पानी में 1 पैकेट ORS घोलें",
      "दूध में",
      "चाय में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Secondary prevention catches disease early for prompt treatment.",
    "explanationHi": "Correct preparation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-413",
    "questionEn": "Tertiary prevention focuses on:",
    "questionHi": "घर पर ORS उपलब्ध न हो तो क्या दें?",
    "optionsEn": [
      "Preventing infection",
      "Reducing complications and rehabilitation",
      "Vaccination",
      "Health education only"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "नमक-चीनी का घोल, चावल का पानी, नारियल पानी, दाल का पानी",
      "केवल सादा पानी",
      "चाय-कॉफी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tertiary prevention minimizes disability and rehabilitates.",
    "explanationHi": "Home-based fluids।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-414",
    "questionEn": "Health promotion activities include:",
    "questionHi": "दस्त में जिंक (Zinc) क्यों दिया जाता है?",
    "optionsEn": [
      "Surgery",
      "Healthy lifestyle education and environment modification",
      "Only treatment",
      "Only diagnosis"
    ],
    "optionsHi": [
      "दस्त रोकने के लिए",
      "दस्त की अवधि और गंभीरता कम करने के लिए, प्रतिरक्षा बढ़ाने के लिए",
      "भूख के लिए",
      "नींद के लिए"
    ],
    "correctAnswer": 1,
    "explanationEn": "Health promotion enhances well-being through education and environment.",
    "explanationHi": "Zinc therapy।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-415",
    "questionEn": "Specific protection measures include:",
    "questionHi": "दस्त में जिंक कितने दिन देना है?",
    "optionsEn": [
      "General cleanliness",
      "Vaccination and prophylaxis",
      "Only nutrition",
      "Only exercise"
    ],
    "optionsHi": [
      "1 दिन",
      "14 दिन",
      "7 दिन",
      "1 महीना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Specific protection targets particular diseases through vaccines etc.",
    "explanationHi": "Complete course।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-416",
    "questionEn": "Zoonotic diseases are transmitted from:",
    "questionHi": "दस्त में स्तनपान जारी रखना चाहिए या नहीं?",
    "optionsEn": [
      "Human to human",
      "Animals to humans",
      "Plants to humans",
      "Soil to humans"
    ],
    "optionsHi": [
      "बंद करना चाहिए",
      "जारी रखना चाहिए (बढ़ाकर)",
      "कम करना चाहिए",
      "पानी देना चाहिए"
    ],
    "correctAnswer": 1,
    "explanationEn": "Zoonoses are diseases transmitted from animals to humans.",
    "explanationHi": "Continue breastfeeding।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-417",
    "questionEn": "Nosocomial infection is acquired in:",
    "questionHi": "दस्त में कब अस्पताल ले जाएं?",
    "optionsEn": [
      "Home",
      "Healthcare settings",
      "School",
      "Workplace"
    ],
    "optionsHi": [
      "कभी नहीं",
      "गंभीर निर्जलीकरण, खून आना, बुखार, उल्टी, पिलाना मुश्किल",
      "हल्के दस्त में",
      "सभी मामलों में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Nosocomial infections are hospital/healthcare acquired.",
    "explanationHi": "Danger signs।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-418",
    "questionEn": "Standard precautions apply to:",
    "questionHi": "हैजा (Cholera) का कारण क्या है?",
    "optionsEn": [
      "Only known infections",
      "All patients regardless of diagnosis",
      "Only HIV patients",
      "Only TB patients"
    ],
    "optionsHi": [
      "वायरस",
      "Vibrio cholerae बैक्टीरिया",
      "कवक",
      "परजीवी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Standard precautions apply universally to all patient care.",
    "explanationHi": "Bacterial infection।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-419",
    "questionEn": "WHO 5 Moments of hand hygiene include before touching patient and:",
    "questionHi": "हैजा के लक्षण क्या हैं?",
    "optionsEn": [
      "After touching patient only",
      "Before aseptic task, after body fluid exposure, after touching patient surroundings",
      "Only after surgery",
      "Only before eating"
    ],
    "optionsHi": [
      "कब्ज",
      "चावल के पानी जैसे दस्त, गंभीर निर्जलीकरण, उल्टी",
      "बुखार",
      "खांसी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Five moments guide hand hygiene timing in healthcare.",
    "explanationHi": "Rice water stool।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-420",
    "questionEn": "Surgical hand scrub differs from routine handwashing by:",
    "questionHi": "हैजा से बचाव कैसे करें?",
    "optionsEn": [
      "Using plain soap",
      "Longer duration and including forearms",
      "No difference",
      "Less time"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "सुरक्षित पानी, स्वच्छता, हाथ धोना, भोजन सुरक्षा",
      "खुले में शौच",
      "गंदा पानी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Surgical scrub is longer, more thorough, includes forearms.",
    "explanationHi": "WASH।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-421",
    "questionEn": "Waterless hand rub volume should be:",
    "questionHi": "टाइफाइड का कारण क्या है?",
    "optionsEn": [
      "Few drops",
      "Enough to cover all hand surfaces (3-5ml)",
      "Large amount",
      "Does not matter"
    ],
    "optionsHi": [
      "वायरस",
      "Salmonella typhi बैक्टीरिया",
      "कवक",
      "परजीवी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adequate volume needed to cover all hand surfaces properly.",
    "explanationHi": "Enteric fever।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-422",
    "questionEn": "Tinea corporis (body ringworm) appears as:",
    "questionHi": "टाइफाइड के लक्षण क्या हैं?",
    "optionsEn": [
      "Blisters",
      "Ring-shaped red scaly patch",
      "Pus",
      "Ulcer"
    ],
    "optionsHi": [
      "दस्त तुरंत",
      "धीरे-धीरे बढ़ता बुखार, सिरदर्द, पेट दर्द, कब्ज/दस्त",
      "खांसी",
      "त्वचा रोग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ringworm forms characteristic ring-shaped lesions on body.",
    "explanationHi": "Step-ladder fever।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-423",
    "questionEn": "Impetigo is caused by:",
    "questionHi": "टाइफाइड की जांच क्या है?",
    "optionsEn": [
      "Virus",
      "Bacteria (Staphylococcus/Streptococcus)",
      "Fungus",
      "Parasite"
    ],
    "optionsHi": [
      "मलेरिया टेस्ट",
      "Widal test, Blood culture",
      "CBC",
      "X-ray"
    ],
    "correctAnswer": 1,
    "explanationEn": "Impetigo is bacterial skin infection with honey-crusted lesions.",
    "explanationHi": "Diagnosis।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-424",
    "questionEn": "Permethrin cream is used for treating:",
    "questionHi": "टाइफाइड का टीका कब लगाया जाता है?",
    "optionsEn": [
      "Ringworm",
      "Scabies",
      "Impetigo",
      "Eczema"
    ],
    "optionsHi": [
      "जन्म पर",
      "2 वर्ष की आयु में (TCV)",
      "5 वर्ष में",
      "10 वर्ष में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Permethrin 5% cream is treatment of choice for scabies.",
    "explanationHi": "Typhoid Conjugate Vaccine।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-425",
    "questionEn": "Pubic lice (crabs) are transmitted through:",
    "questionHi": "हेपेटाइटिस A कैसे फैलता है?",
    "optionsEn": [
      "Air",
      "Sexual contact or infested bedding",
      "Water",
      "Food"
    ],
    "optionsHi": [
      "रक्त से",
      "दूषित पानी और भोजन से (मल-मौखिक)",
      "हवा से",
      "मच्छर से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pubic lice spread through intimate contact or shared items.",
    "explanationHi": "Fecal-oral।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-426",
    "questionEn": "Onychomycosis is fungal infection of:",
    "questionHi": "हेपेटाइटिस A के लक्षण क्या हैं?",
    "optionsEn": [
      "Skin",
      "Nails",
      "Hair",
      "Eye"
    ],
    "optionsHi": [
      "खांसी",
      "पीलिया, बुखार, थकान, भूख न लगना, पेट दर्द",
      "दस्त केवल",
      "त्वचा रोग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Onychomycosis is fungal nail infection.",
    "explanationHi": "Liver infection।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-427",
    "questionEn": "Preventing tinea pedis (athlete's foot) includes:",
    "questionHi": "हेपेटाइटिस A से बचाव कैसे करें?",
    "optionsEn": [
      "Keeping feet wet",
      "Keeping feet dry, changing socks, using antifungal powder",
      "Sharing footwear",
      "Tight shoes"
    ],
    "optionsHi": [
      "रक्त जांच",
      "सुरक्षित पानी, स्वच्छता, हाथ धोना, टीकाकरण",
      "मच्छरदानी",
      "मास्क"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dry feet and antifungal measures prevent fungal growth.",
    "explanationHi": "Prevention।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-428",
    "questionEn": "Menstrual cups are:",
    "questionHi": "पोलियो कैसे फैलता है?",
    "optionsEn": [
      "Disposable",
      "Reusable silicone devices inserted in vagina",
      "External pads",
      "Tampons"
    ],
    "optionsHi": [
      "हवा से",
      "मुख्यतः मल-मौखिक मार्ग से",
      "मच्छर से",
      "जानवरों से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Menstrual cups are reusable internal collection devices.",
    "explanationHi": "Poliovirus।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-429",
    "questionEn": "Groundwater contamination is indicated by:",
    "questionHi": "पोलियो से बचाव का सबसे प्रभावी तरीका क्या है?",
    "optionsEn": [
      "Clear water",
      "High bacterial count, nitrates, or chemicals",
      "Good taste",
      "No smell"
    ],
    "optionsHi": [
      "दवाई",
      "टीकाकरण (OPV, IPV)",
      "स्वच्छता केवल",
      "मास्क"
    ],
    "correctAnswer": 1,
    "explanationEn": "Contamination shown by microbes, chemicals above safe limits.",
    "explanationHi": "Vaccination।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-430",
    "questionEn": "Aquifer is:",
    "questionHi": "भारत कब पोलियो मुक्त घोषित हुआ?",
    "optionsEn": [
      "Water plant",
      "Underground water-bearing rock/sediment",
      "Water tank",
      "Treatment plant"
    ],
    "optionsHi": [
      "2010",
      "2014",
      "2020",
      "2000"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aquifer is geological formation storing and transmitting groundwater.",
    "explanationHi": "Polio-free India।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-431",
    "questionEn": "Water table is:",
    "questionHi": "कृमि संक्रमण (Worm Infestation) कैसे होता है?",
    "optionsEn": [
      "Furniture",
      "Upper surface of groundwater",
      "Treatment process",
      "Pipe system"
    ],
    "optionsHi": [
      "हवा से",
      "दूषित मिट्टी/पानी/भोजन, नंगे पैर चलना",
      "मच्छर से",
      "जानवरों से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Water table is top of saturated zone in aquifer.",
    "explanationHi": "STH।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-432",
    "questionEn": "Watershed management helps:",
    "questionHi": "कृमि संक्रमण के लक्षण क्या हैं?",
    "optionsEn": [
      "Increase pollution",
      "Conserve water and prevent erosion",
      "Waste water",
      "Increase flooding"
    ],
    "optionsHi": [
      "कोई नहीं",
      "पेट दर्द, एनीमिया, कुपोषण, थकान, गुदा में खुजली",
      "खांसी",
      "बुखार"
    ],
    "correctAnswer": 1,
    "explanationEn": "Watershed management conserves water resources and soil.",
    "explanationHi": "Intestinal worms।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-433",
    "questionEn": "Coliform bacteria in water testing serves as:",
    "questionHi": "डीवर्मिंग में कौन सी दवाई दी जाती है?",
    "optionsEn": [
      "Disease agent",
      "Indicator of fecal contamination",
      "Treatment",
      "Nutrient"
    ],
    "optionsHi": [
      "पैरासिटामॉल",
      "Albendazole 400mg",
      "ORS",
      "Zinc"
    ],
    "correctAnswer": 1,
    "explanationEn": "Coliforms indicate potential fecal contamination and pathogen presence.",
    "explanationHi": "Single dose।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-434",
    "questionEn": "Most Probable Number (MPN) test estimates:",
    "questionHi": "राष्ट्रीय डीवर्मिंग दिवस कब मनाया जाता है?",
    "optionsEn": [
      "Chemical content",
      "Coliform bacteria concentration",
      "Turbidity",
      "pH"
    ],
    "optionsHi": [
      "जनवरी, जुलाई",
      "फरवरी 10, अगस्त 10",
      "मार्च, सितंबर",
      "अप्रैल, अक्टूबर"
    ],
    "correctAnswer": 1,
    "explanationEn": "MPN statistically estimates coliform density in water.",
    "explanationHi": "Biannual।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-435",
    "questionEn": "Membrane filter test for water gives results in:",
    "questionHi": "कृमि संक्रमण से बचाव कैसे करें?",
    "optionsEn": [
      "1 hour",
      "18-24 hours",
      "1 week",
      "1 month"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "शौचालय उपयोग, हाथ धोना, चप्पल पहनना, स्वच्छ भोजन-पानी",
      "नंगे पैर चलना",
      "खुले में शौच"
    ],
    "correctAnswer": 1,
    "explanationEn": "Membrane filtration gives coliform results in about 24 hours.",
    "explanationHi": "Prevention।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-436",
    "questionEn": "Iron in drinking water causes:",
    "questionHi": "ट्रेकोमा क्या है?",
    "optionsEn": [
      "Blue color",
      "Reddish-brown staining and metallic taste",
      "No effect",
      "Green color"
    ],
    "optionsHi": [
      "त्वचा रोग",
      "आंखों का बैक्टीरियल संक्रमण (अंधापन का कारण)",
      "पेट रोग",
      "फेफड़ों का रोग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Iron causes rust-colored stains and unpleasant taste.",
    "explanationHi": "Chlamydia trachomatis।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-437",
    "questionEn": "Defluoridation removes excess fluoride using:",
    "questionHi": "ट्रेकोमा से बचाव कैसे करें?",
    "optionsEn": [
      "Chlorine",
      "Activated alumina or bone char",
      "Boiling",
      "UV light"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "चेहरा धोना, स्वच्छता, मक्खी नियंत्रण (SAFE strategy)",
      "गंदे रहना",
      "मक्खियां बढ़ाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Activated alumina adsorbs fluoride for removal.",
    "explanationHi": "Face washing।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-438",
    "questionEn": "Arsenic removal from water uses:",
    "questionHi": "SAFE strategy क्या है?",
    "optionsEn": [
      "Chlorination",
      "Oxidation and adsorption/filtration",
      "Boiling only",
      "UV only"
    ],
    "optionsHi": [
      "दवाई",
      "Surgery, Antibiotics, Face washing, Environmental improvement",
      "केवल सर्जरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Arsenic removal combines oxidation with adsorption/filtration.",
    "explanationHi": "Trachoma elimination।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-439",
    "questionEn": "Waterborne outbreak investigation includes:",
    "questionHi": "मलेरिया कैसे फैलता है?",
    "optionsEn": [
      "Ignoring",
      "Case definition, epidemiological curve, laboratory testing",
      "Only treatment",
      "Only reporting"
    ],
    "optionsHi": [
      "पानी से",
      "मादा एनोफिलीज मच्छर के काटने से",
      "हवा से",
      "संपर्क से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Outbreak investigation systematically identifies source and extent.",
    "explanationHi": "Vector-borne।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-440",
    "questionEn": "Pit latrine superstructure provides:",
    "questionHi": "मलेरिया के लक्षण क्या हैं?",
    "optionsEn": [
      "Nothing",
      "Privacy and weather protection",
      "Water supply",
      "Electricity"
    ],
    "optionsHi": [
      "दस्त",
      "बुखार (ठंड लगकर), सिरदर्द, मांसपेशी दर्द, पसीना",
      "खांसी",
      "पीलिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "Superstructure ensures privacy and protects from weather.",
    "explanationHi": "Cyclic fever।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-441",
    "questionEn": "Latrine pit lining is needed in:",
    "questionHi": "मलेरिया की जांच क्या है?",
    "optionsEn": [
      "All soil types",
      "Loose soil or high water table areas",
      "Never",
      "Rocky areas only"
    ],
    "optionsHi": [
      "Widal test",
      "Blood smear, RDT (Rapid Diagnostic Test)",
      "X-ray",
      "CT scan"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lining prevents collapse in loose soil and contamination in high water table.",
    "explanationHi": "Diagnosis।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-442",
    "questionEn": "Honeycomb pit lining allows:",
    "questionHi": "मलेरिया से बचाव कैसे करें?",
    "optionsEn": [
      "No infiltration",
      "Liquid infiltration while retaining solids",
      "Complete sealing",
      "Air entry only"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "मच्छरदानी (LLIN), रिपेलेंट, IRS, जमा पानी हटाना",
      "जमा पानी रखना",
      "खुले में सोना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Honeycomb pattern allows liquid to drain while containing solids.",
    "explanationHi": "Vector control।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-443",
    "questionEn": "Pit emptying should be done:",
    "questionHi": "डेंगू कैसे फैलता है?",
    "optionsEn": [
      "Monthly",
      "When pit is nearly full after decomposition",
      "Never",
      "Daily"
    ],
    "optionsHi": [
      "पानी से",
      "एडीज मच्छर के काटने से",
      "हवा से",
      "संपर्क से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Empty when pit approaches capacity; allow time for pathogen die-off.",
    "explanationHi": "Aedes aegypti।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-444",
    "questionEn": "Vacuum tanker for desludging:",
    "questionHi": "डेंगू के लक्षण क्या हैं?",
    "optionsEn": [
      "Mixes with water supply",
      "Safely removes and transports fecal sludge",
      "Spreads on roads",
      "Burns sludge"
    ],
    "optionsHi": [
      "दस्त",
      "तेज बुखार, हड्डी तोड़ दर्द, रैश, सिरदर्द, आंखों के पीछे दर्द",
      "खांसी",
      "पीलिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vacuum tankers safely collect and transport septage to treatment.",
    "explanationHi": "Break-bone fever।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-445",
    "questionEn": "Fecal sludge treatment plant processes include:",
    "questionHi": "डेंगू में खतरे के संकेत क्या हैं?",
    "optionsEn": [
      "Only storage",
      "Settling, drying, composting or further treatment",
      "Direct disposal",
      "No processing"
    ],
    "optionsHi": [
      "हल्का बुखार",
      "पेट दर्द, लगातार उल्टी, रक्तस्राव, बेचैनी, प्लेटलेट गिरना",
      "सामान्य",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "FSTP uses multiple processes to safely treat fecal sludge.",
    "explanationHi": "Warning signs।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-446",
    "questionEn": "Biogas from toilet waste contains mainly:",
    "questionHi": "डेंगू में क्या दवाई न दें?",
    "optionsEn": [
      "Oxygen",
      "Methane and carbon dioxide",
      "Nitrogen only",
      "Hydrogen only"
    ],
    "optionsHi": [
      "पैरासिटामॉल",
      "Aspirin, Ibuprofen (NSAIDs)",
      "ORS",
      "Zinc"
    ],
    "correctAnswer": 1,
    "explanationEn": "Biogas is primarily methane (60%) and CO2 (40%).",
    "explanationHi": "Bleeding risk।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-447",
    "questionEn": "Urinal in public toilet should have:",
    "questionHi": "एडीज मच्छर कब काटता है?",
    "optionsEn": [
      "No water",
      "Water supply for flushing",
      "Open drain",
      "No partition"
    ],
    "optionsHi": [
      "रात में",
      "दिन में (सुबह और शाम)",
      "आधी रात",
      "केवल बारिश में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Water flushing keeps urinals clean and odor-free.",
    "explanationHi": "Day biter।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-448",
    "questionEn": "Child-friendly toilet features include:",
    "questionHi": "एडीज मच्छर कहां पनपता है?",
    "optionsEn": [
      "Adult size only",
      "Lower seat, smaller openings, safety features",
      "No difference",
      "Only outdoor"
    ],
    "optionsHi": [
      "गंदे नाले में",
      "साफ जमा पानी में (कूलर, गमले, टायर)",
      "बहते पानी में",
      "समुद्र में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Child-friendly design ensures safety and comfort for children.",
    "explanationHi": "Container breeding।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-449",
    "questionEn": "WASH stands for:",
    "questionHi": "चिकनगुनिया के लक्षण क्या हैं?",
    "optionsEn": [
      "Washing Always Saves Health",
      "Water, Sanitation, and Hygiene",
      "Water And Sanitation Help",
      "Wash All Surfaces Hygienically"
    ],
    "optionsHi": [
      "दस्त",
      "बुखार, गंभीर जोड़ों का दर्द, रैश",
      "खांसी",
      "पीलिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "WASH encompasses water, sanitation, and hygiene interventions.",
    "explanationHi": "Joint pain prominent।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-450",
    "questionEn": "Aerobic composting requires:",
    "questionHi": "जापानी इंसेफलाइटिस (JE) कैसे फैलता है?",
    "optionsEn": [
      "No air",
      "Oxygen for decomposition",
      "Only water",
      "Sealed container"
    ],
    "optionsHi": [
      "पानी से",
      "क्यूलेक्स मच्छर के काटने से",
      "हवा से",
      "संपर्क से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aerobic composting needs oxygen for microbial decomposition.",
    "explanationHi": "Vector-borne।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-451",
    "questionEn": "Anaerobic digestion produces:",
    "questionHi": "JE के लक्षण क्या हैं?",
    "optionsEn": [
      "Only compost",
      "Biogas and digestate",
      "Only water",
      "Nothing useful"
    ],
    "optionsHi": [
      "दस्त",
      "बुखार, सिरदर्द, उल्टी, दौरे, बेहोशी",
      "खांसी",
      "पीलिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anaerobic digestion produces biogas and nutrient-rich digestate.",
    "explanationHi": "Brain infection।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-452",
    "questionEn": "Waste-to-energy technologies include:",
    "questionHi": "JE का टीका कब लगाया जाता है?",
    "optionsEn": [
      "Only landfill",
      "Incineration, gasification, pyrolysis",
      "Only composting",
      "Only recycling"
    ],
    "optionsHi": [
      "जन्म पर",
      "9-12 महीने (endemic areas)",
      "5 वर्ष",
      "10 वर्ष"
    ],
    "correctAnswer": 1,
    "explanationEn": "Various thermal technologies convert waste to energy.",
    "explanationHi": "JE vaccine।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-453",
    "questionEn": "Plastic recycling code 1 (PET) is commonly used for:",
    "questionHi": "फाइलेरिया कैसे फैलता है?",
    "optionsEn": [
      "Pipes",
      "Water and soft drink bottles",
      "Furniture",
      "Toys only"
    ],
    "optionsHi": [
      "पानी से",
      "क्यूलेक्स/एनोफिलीज मच्छर के काटने से",
      "हवा से",
      "संपर्क से"
    ],
    "correctAnswer": 1,
    "explanationEn": "PET (code 1) used for beverage bottles, commonly recycled.",
    "explanationHi": "Lymphatic filariasis।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-454",
    "questionEn": "Plastic code 2 (HDPE) is used for:",
    "questionHi": "फाइलेरिया के लक्षण क्या हैं?",
    "optionsEn": [
      "Food wrap",
      "Milk jugs, detergent bottles",
      "Styrofoam",
      "Film"
    ],
    "optionsHi": [
      "दस्त",
      "हाथ-पैर/अंडकोष में सूजन (Elephantiasis)",
      "खांसी",
      "पीलिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "HDPE used for sturdy containers like milk and detergent bottles.",
    "explanationHi": "Lymphedema।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-455",
    "questionEn": "Microplastics are particles smaller than:",
    "questionHi": "MDA (Mass Drug Administration) फाइलेरिया में क्या है?",
    "optionsEn": [
      "1 cm",
      "5 mm",
      "1 m",
      "10 cm"
    ],
    "optionsHi": [
      "मच्छर मारना",
      "पूरी आबादी को साल में एक बार दवाई देना (DEC+Albendazole)",
      "टीकाकरण",
      "स्प्रे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Microplastics are plastic particles less than 5mm.",
    "explanationHi": "Elimination strategy।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-456",
    "questionEn": "E-waste contains hazardous materials like:",
    "questionHi": "काला-अजार (Kala-azar) कैसे फैलता है?",
    "optionsEn": [
      "Only plastic",
      "Lead, mercury, cadmium",
      "Only glass",
      "Only copper"
    ],
    "optionsHi": [
      "मच्छर से",
      "सैंडफ्लाई (Phlebotomus) के काटने से",
      "पानी से",
      "हवा से"
    ],
    "correctAnswer": 1,
    "explanationEn": "E-waste contains toxic heavy metals requiring special handling.",
    "explanationHi": "Leishmaniasis।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-457",
    "questionEn": "E-waste should be:",
    "questionHi": "काला-अजार के लक्षण क्या हैं?",
    "optionsEn": [
      "Mixed with regular waste",
      "Given to authorized recyclers",
      "Burned at home",
      "Buried in garden"
    ],
    "optionsHi": [
      "दस्त",
      "लंबा बुखार, वजन घटना, तिल्ली-यकृत बढ़ना, एनीमिया",
      "खांसी",
      "रैश"
    ],
    "correctAnswer": 1,
    "explanationEn": "E-waste must go to authorized dismantlers/recyclers.",
    "explanationHi": "Visceral leishmaniasis।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-458",
    "questionEn": "Healthcare waste categories include:",
    "questionHi": "काला-अजार से बचाव कैसे करें?",
    "optionsEn": [
      "Only sharps",
      "Infectious, pathological, sharps, pharmaceutical, chemical",
      "Only bandages",
      "Only syringes"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "IRS, मच्छरदानी, घर में दरारें भरना, शीघ्र उपचार",
      "जमा पानी",
      "खुले में सोना"
    ],
    "correctAnswer": 1,
    "explanationEn": "BMW includes multiple hazardous and non-hazardous categories.",
    "explanationHi": "Vector control।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-459",
    "questionEn": "Mercury-containing waste (thermometers) should be:",
    "questionHi": "रेबीज कैसे फैलता है?",
    "optionsEn": [
      "Broken and thrown",
      "Collected separately for special disposal",
      "Mixed with regular waste",
      "Burned"
    ],
    "optionsHi": [
      "हवा से",
      "संक्रमित जानवर (कुत्ता, बिल्ली, बंदर) के काटने से",
      "पानी से",
      "मच्छर से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mercury waste requires special handling due to toxicity.",
    "explanationHi": "Animal bite।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-460",
    "questionEn": "Scombroid fish poisoning is caused by:",
    "questionHi": "कुत्ते के काटने पर घाव कैसे धोएं?",
    "optionsEn": [
      "Virus",
      "Histamine in spoiled fish",
      "Bacteria only",
      "Parasite"
    ],
    "optionsHi": [
      "सादा पानी",
      "साबुन और बहते पानी से 15 मिनट तक",
      "कुछ नहीं करना",
      "मिट्टी लगाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Histamine from bacterial decomposition of fish causes scombroid.",
    "explanationHi": "Wound washing।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-461",
    "questionEn": "Ciguatera poisoning is from:",
    "questionHi": "PEP (Post-Exposure Prophylaxis) रेबीज में क्या है?",
    "optionsEn": [
      "Freshwater fish",
      "Reef fish that accumulate toxin",
      "Canned fish",
      "Cooked fish"
    ],
    "optionsHi": [
      "दवाई",
      "काटने के बाद रेबीज टीके की खुराकें",
      "मच्छरदानी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ciguatoxin accumulates in reef fish through food chain.",
    "explanationHi": "Anti-rabies vaccine।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-462",
    "questionEn": "Paralytic shellfish poisoning is caused by:",
    "questionHi": "रेबीज टीके की कितनी खुराकें दी जाती हैं?",
    "optionsEn": [
      "Bacteria",
      "Dinoflagellate toxins in shellfish",
      "Virus",
      "Parasites"
    ],
    "optionsHi": [
      "1",
      "4-5 (IM route) या 4 (ID route)",
      "10",
      "20"
    ],
    "correctAnswer": 1,
    "explanationEn": "Shellfish accumulate toxins from harmful algal blooms.",
    "explanationHi": "PEP schedule।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-463",
    "questionEn": "Food handler medical fitness certificate should be renewed:",
    "questionHi": "RIG (Rabies Immunoglobulin) कब दिया जाता है?",
    "optionsEn": [
      "Never",
      "Annually or as per regulations",
      "Monthly",
      "Daily"
    ],
    "optionsHi": [
      "सभी को",
      "Category III (गहरा घाव, चेहरे पर) काटने में",
      "कभी नहीं",
      "केवल बच्चों को"
    ],
    "correctAnswer": 1,
    "explanationEn": "Regular health certification ensures food handler fitness.",
    "explanationHi": "Passive immunity।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-464",
    "questionEn": "Hair restraint (cap/net) for food handlers prevents:",
    "questionHi": "TB (क्षय रोग) कैसे फैलता है?",
    "optionsEn": [
      "Heat",
      "Hair falling into food",
      "Sunburn",
      "Hearing damage"
    ],
    "optionsHi": [
      "पानी से",
      "हवा में (खांसने/छींकने से) बूंदकों से",
      "संपर्क से",
      "मच्छर से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hair covers prevent physical contamination of food.",
    "explanationHi": "Airborne।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-465",
    "questionEn": "Cutting boards should be:",
    "questionHi": "TB के लक्षण क्या हैं?",
    "optionsEn": [
      "Same for all foods",
      "Separate for raw meat and ready-to-eat foods",
      "Wooden only",
      "Never cleaned"
    ],
    "optionsHi": [
      "दस्त",
      "2 सप्ताह से अधिक खांसी, बुखार, रात को पसीना, वजन घटना",
      "पीलिया",
      "रैश"
    ],
    "correctAnswer": 1,
    "explanationEn": "Separate boards prevent cross-contamination.",
    "explanationHi": "Pulmonary TB।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-466",
    "questionEn": "Food temperature log is maintained to:",
    "questionHi": "TB की जांच क्या है?",
    "optionsEn": [
      "Waste paper",
      "Document temperature monitoring and compliance",
      "Only for inspection",
      "Never"
    ],
    "optionsHi": [
      "रक्त जांच केवल",
      "बलगम जांच (CBNAAT/Microscopy), X-ray",
      "पेशाब जांच",
      "मल जांच"
    ],
    "correctAnswer": 1,
    "explanationEn": "Temperature logs demonstrate food safety compliance.",
    "explanationHi": "Diagnosis।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-467",
    "questionEn": "Pest control in food premises should be:",
    "questionHi": "NTEP क्या है?",
    "optionsEn": [
      "Only when pests seen",
      "Regular and documented",
      "Never",
      "Only yearly"
    ],
    "optionsHi": [
      "पोषण कार्यक्रम",
      "National TB Elimination Programme",
      "टीकाकरण कार्यक्रम",
      "जल कार्यक्रम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Regular pest management prevents infestation and contamination.",
    "explanationHi": "TB programme।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-468",
    "questionEn": "Food recall is initiated when:",
    "questionHi": "TB का इलाज कितने समय का है?",
    "optionsEn": [
      "Sales are low",
      "Product poses health risk",
      "Packaging changes",
      "Price increases"
    ],
    "optionsHi": [
      "1 सप्ताह",
      "6 महीने (नए मरीज)",
      "1 दिन",
      "1 वर्ष"
    ],
    "correctAnswer": 1,
    "explanationEn": "Recalls remove unsafe food products from market.",
    "explanationHi": "DOTS।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-469",
    "questionEn": "Traceability in food safety means:",
    "questionHi": "BCG टीका किस रोग के लिए है?",
    "optionsEn": [
      "Tracking sales",
      "Ability to trace food through production/distribution",
      "Finding lost food",
      "Counting inventory"
    ],
    "optionsHi": [
      "पोलियो",
      "TB (क्षय रोग)",
      "हेपेटाइटिस",
      "मलेरिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "Traceability tracks food origin and distribution chain.",
    "explanationHi": "Birth vaccine।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-470",
    "questionEn": "Eave space in rural houses should be:",
    "questionHi": "कुष्ठ रोग (Leprosy) कैसे फैलता है?",
    "optionsEn": [
      "Open for ventilation",
      "Closed to prevent entry of mosquitoes/bats",
      "Very large",
      "Not important"
    ],
    "optionsHi": [
      "छूने से तुरंत",
      "लंबे समय तक निकट संपर्क से (श्वसन बूंदकें)",
      "पानी से",
      "मच्छर से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Closed eaves prevent vector and animal entry.",
    "explanationHi": "Prolonged contact।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-471",
    "questionEn": "Floor should be:",
    "questionHi": "कुष्ठ रोग के लक्षण क्या हैं?",
    "optionsEn": [
      "Mud only",
      "Smooth, impervious, easy to clean",
      "Rough",
      "Carpeted everywhere"
    ],
    "optionsHi": [
      "बुखार",
      "त्वचा पर धब्बे जिनमें सुन्नता हो, तंत्रिका मोटी होना",
      "दस्त",
      "खांसी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Smooth impervious floors allow easy cleaning and hygiene.",
    "explanationHi": "Skin + nerve।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-472",
    "questionEn": "Plinth height above ground should be minimum:",
    "questionHi": "कुष्ठ रोग का इलाज क्या है?",
    "optionsEn": [
      "No plinth needed",
      "15-45 cm to prevent water entry",
      "1 meter",
      "2 meters"
    ],
    "optionsHi": [
      "कोई इलाज नहीं",
      "MDT (Multi-Drug Therapy)",
      "सर्जरी केवल",
      "आयुर्वेद"
    ],
    "correctAnswer": 1,
    "explanationEn": "Raised plinth prevents water entry and dampness.",
    "explanationHi": "Curable।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-473",
    "questionEn": "Veranda provides:",
    "questionHi": "NLEP क्या है?",
    "optionsEn": [
      "Nothing",
      "Shade and transition space",
      "Only storage",
      "Only cooking"
    ],
    "optionsHi": [
      "TB कार्यक्रम",
      "National Leprosy Eradication Programme",
      "मलेरिया कार्यक्रम",
      "AIDS कार्यक्रम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Veranda provides shade, reduces direct heat, transition zone.",
    "explanationHi": "Leprosy programme।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-474",
    "questionEn": "Whitewash on walls helps by:",
    "questionHi": "HIV कैसे फैलता है?",
    "optionsEn": [
      "Only decoration",
      "Reflecting light and being antimicrobial",
      "Reducing light",
      "Absorbing heat"
    ],
    "optionsHi": [
      "छूने से",
      "असुरक्षित यौन संबंध, संक्रमित रक्त, मां से बच्चे को",
      "हवा से",
      "पानी से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lime whitewash reflects light and has antimicrobial properties.",
    "explanationHi": "Transmission routes।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-475",
    "questionEn": "Separate kitchen reduces:",
    "questionHi": "HIV नहीं फैलता किससे?",
    "optionsEn": [
      "Cooking",
      "Fire hazard and smoke exposure in living areas",
      "Food preparation",
      "Nothing"
    ],
    "optionsHi": [
      "रक्त से",
      "हाथ मिलाने, गले लगने, साथ खाने, मच्छर से",
      "सुई से",
      "यौन संबंध से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Separate kitchen isolates fire risk and cooking fumes.",
    "explanationHi": "No casual contact।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-476",
    "questionEn": "Bathroom drainage should:",
    "questionHi": "HIV से बचाव कैसे करें?",
    "optionsEn": [
      "Pool water",
      "Drain away from house foundation",
      "Enter house",
      "Be absent"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "ABC (Abstinence, Be faithful, Condom), सुरक्षित रक्त, स्वच्छ सुई",
      "असुरक्षित संबंध",
      "साझा सुई"
    ],
    "correctAnswer": 1,
    "explanationEn": "Proper drainage prevents foundation damage and mosquito breeding.",
    "explanationHi": "Prevention।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-477",
    "questionEn": "Brick jali (perforated wall) provides:",
    "questionHi": "NACP क्या है?",
    "optionsEn": [
      "Complete privacy",
      "Ventilation with partial privacy",
      "No ventilation",
      "Only decoration"
    ],
    "optionsHi": [
      "TB कार्यक्रम",
      "National AIDS Control Programme",
      "मलेरिया कार्यक्रम",
      "पोषण कार्यक्रम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Jali allows airflow while maintaining some privacy.",
    "explanationHi": "AIDS programme।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-478",
    "questionEn": "Cool roof techniques include:",
    "questionHi": "ICTC क्या है?",
    "optionsEn": [
      "Black paint",
      "Reflective coating, green roof, proper insulation",
      "Metal sheet only",
      "No roof"
    ],
    "optionsHi": [
      "टीकाकरण केंद्र",
      "Integrated Counselling and Testing Centre (HIV)",
      "TB केंद्र",
      "मलेरिया केंद्र"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cool roofs reduce heat gain through reflection and insulation.",
    "explanationHi": "HIV testing।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-479",
    "questionEn": "Housing and tuberculosis transmission is related through:",
    "questionHi": "ART क्या है?",
    "optionsEn": [
      "Water supply",
      "Overcrowding and poor ventilation",
      "Electricity",
      "Road access"
    ],
    "optionsHi": [
      "कला",
      "Anti-Retroviral Therapy (HIV इलाज)",
      "एंटीबायोटिक",
      "विटामिन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Overcrowding and poor ventilation increase TB transmission.",
    "explanationHi": "HIV treatment।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-480",
    "questionEn": "Gambusia affinis is:",
    "questionHi": "PPTCT क्या है?",
    "optionsEn": [
      "Disease",
      "Larvivorous mosquitofish",
      "Bacteria",
      "Insecticide"
    ],
    "optionsHi": [
      "TB कार्यक्रम",
      "Prevention of Parent to Child Transmission (HIV)",
      "पोषण कार्यक्रम",
      "टीकाकरण"
    ],
    "correctAnswer": 1,
    "explanationEn": "Gambusia (mosquitofish) eats mosquito larvae for biological control.",
    "explanationHi": "Vertical transmission।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-481",
    "questionEn": "Poecilia reticulata (Guppy) is used for:",
    "questionHi": "STI (Sexually Transmitted Infections) के उदाहरण क्या हैं?",
    "optionsEn": [
      "Decoration only",
      "Eating mosquito larvae",
      "Food",
      "Pet only"
    ],
    "optionsHi": [
      "मलेरिया",
      "सिफलिस, गोनोरिया, HIV, हेपेटाइटिस B",
      "TB",
      "टाइफाइड"
    ],
    "correctAnswer": 1,
    "explanationEn": "Guppies are larvivorous fish for mosquito control.",
    "explanationHi": "Sexual transmission।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-482",
    "questionEn": "Environmental management for malaria includes:",
    "questionHi": "STI से बचाव कैसे करें?",
    "optionsEn": [
      "Indoor spraying only",
      "Filling/draining breeding sites",
      "Bed nets only",
      "Medication only"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "कंडोम उपयोग, एक साथी, शीघ्र उपचार",
      "असुरक्षित संबंध",
      "कोई सावधानी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Environmental management eliminates Anopheles breeding habitats.",
    "explanationHi": "Prevention।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-483",
    "questionEn": "Larvivorous fish work best in:",
    "questionHi": "COVID-19 कैसे फैलता है?",
    "optionsEn": [
      "Flowing rivers",
      "Permanent water bodies like tanks and ponds",
      "Temporary puddles",
      "Polluted drains"
    ],
    "optionsHi": [
      "पानी से",
      "श्वसन बूंदकों और एरोसोल से",
      "मच्छर से",
      "जानवरों से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fish survive in permanent clean water bodies for ongoing control.",
    "explanationHi": "Respiratory transmission।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-484",
    "questionEn": "Pyrethroid resistance in mosquitoes is addressed by:",
    "questionHi": "COVID-19 से बचाव के उपाय क्या हैं?",
    "optionsEn": [
      "Using more pyrethroid",
      "Rotation with different insecticide classes",
      "Stopping control",
      "Ignoring"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "मास्क, हाथ धोना, दूरी, टीकाकरण, वेंटिलेशन",
      "भीड़ में जाना",
      "मास्क न पहनना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Insecticide rotation manages resistance development.",
    "explanationHi": "Prevention।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-485",
    "questionEn": "Wolbachia is being studied for:",
    "questionHi": "COVID-19 के लक्षण क्या हैं?",
    "optionsEn": [
      "Water treatment",
      "Reducing mosquito disease transmission",
      "Rat control",
      "Food safety"
    ],
    "optionsHi": [
      "दस्त केवल",
      "बुखार, खांसी, थकान, स्वाद/गंध न आना, सांस की तकलीफ",
      "पीलिया",
      "रैश"
    ],
    "correctAnswer": 1,
    "explanationEn": "Wolbachia bacteria can reduce mosquito ability to transmit viruses.",
    "explanationHi": "COVID symptoms।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-486",
    "questionEn": "Sterile insect technique involves:",
    "questionHi": "COVID Appropriate Behavior (CAB) क्या है?",
    "optionsEn": [
      "Killing all insects",
      "Releasing sterile males to reduce population",
      "Spraying",
      "Trapping only"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "मास्क पहनना, हाथ धोना, दूरी बनाना",
      "भीड़ में जाना",
      "मास्क न पहनना"
    ],
    "correctAnswer": 1,
    "explanationEn": "SIT releases sterile males that mate but produce no offspring.",
    "explanationHi": "COVID protocols।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-487",
    "questionEn": "Personal protection against mosquitoes at night includes:",
    "questionHi": "इन्फ्लुएंजा कैसे फैलता है?",
    "optionsEn": [
      "Wearing shorts",
      "Using bed nets and wearing long clothes",
      "Opening windows",
      "No protection needed"
    ],
    "optionsHi": [
      "पानी से",
      "श्वसन बूंदकों से (खांसने, छींकने)",
      "मच्छर से",
      "संपर्क से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Bed nets and protective clothing prevent night-biting mosquitoes.",
    "explanationHi": "Respiratory।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-488",
    "questionEn": "DEET in mosquito repellent stands for:",
    "questionHi": "इन्फ्लुएंजा से बचाव कैसे करें?",
    "optionsEn": [
      "Deadly Enemy Exterminator Treatment",
      "N,N-Diethyl-meta-toluamide",
      "Dengue Emergency Elimination Treatment",
      "Disease Eradication Emergency Tool"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "हाथ धोना, खांसते समय मुंह ढकना, टीकाकरण",
      "भीड़ में जाना",
      "कुछ नहीं करना"
    ],
    "correctAnswer": 1,
    "explanationEn": "DEET is chemical name of common mosquito repellent.",
    "explanationHi": "Prevention।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-489",
    "questionEn": "Mosquito coils work by:",
    "questionHi": "खसरा (Measles) कैसे फैलता है?",
    "optionsEn": [
      "Attracting mosquitoes",
      "Releasing insecticide smoke",
      "Trapping mosquitoes",
      "Making noise"
    ],
    "optionsHi": [
      "पानी से",
      "हवा और श्वसन बूंदकों से (अत्यधिक संक्रामक)",
      "मच्छर से",
      "संपर्क से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Burning coils release pyrethroid smoke repelling/killing mosquitoes.",
    "explanationHi": "Highly contagious।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-490",
    "questionEn": "BMI is calculated as:",
    "questionHi": "खसरे के लक्षण क्या हैं?",
    "optionsEn": [
      "Height/Weight",
      "Weight(kg)/Height(m)²",
      "Weight×Height",
      "Height×Age"
    ],
    "optionsHi": [
      "दस्त",
      "बुखार, खांसी, नाक बहना, आंखें लाल, रैश (चेहरे से शुरू)",
      "पीलिया",
      "पेट दर्द"
    ],
    "correctAnswer": 1,
    "explanationEn": "BMI = weight in kg divided by height in meters squared.",
    "explanationHi": "3Cs + rash।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-491",
    "questionEn": "Underweight BMI in adults is below:",
    "questionHi": "खसरे का टीका कब लगाया जाता है?",
    "optionsEn": [
      "25",
      "18.5",
      "30",
      "23"
    ],
    "optionsHi": [
      "जन्म पर",
      "9 महीने (MR1) और 16-24 महीने (MR2)",
      "5 वर्ष",
      "10 वर्ष"
    ],
    "correctAnswer": 1,
    "explanationEn": "BMI below 18.5 indicates underweight in adults.",
    "explanationHi": "MR vaccine।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-492",
    "questionEn": "Growth monitoring uses:",
    "questionHi": "रूबेला (German Measles) गर्भावस्था में क्यों खतरनाक है?",
    "optionsEn": [
      "Only weight",
      "Height, weight plotted on growth charts",
      "Only height",
      "Blood tests only"
    ],
    "optionsHi": [
      "मां को नुकसान",
      "जन्मजात विकृतियां (CRS) - बहरापन, अंधापन, हृदय दोष",
      "कोई नुकसान नहीं",
      "केवल बुखार"
    ],
    "correctAnswer": 1,
    "explanationEn": "Growth monitoring plots measurements against reference charts.",
    "explanationHi": "Congenital Rubella Syndrome।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-493",
    "questionEn": "Z-score in growth assessment indicates:",
    "questionHi": "चिकनपॉक्स (Chickenpox) कैसे फैलता है?",
    "optionsEn": [
      "Age",
      "Standard deviations from median",
      "Exact weight",
      "Height only"
    ],
    "optionsHi": [
      "पानी से",
      "हवा और संपर्क से (छालों का तरल)",
      "मच्छर से",
      "भोजन से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Z-score shows how far measurement is from reference median.",
    "explanationHi": "Varicella।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-494",
    "questionEn": "Severe acute malnutrition is indicated by:",
    "questionHi": "चिकनपॉक्स के लक्षण क्या हैं?",
    "optionsEn": [
      "Normal weight",
      "Weight-for-height below -3 SD or MUAC <115mm",
      "Overweight",
      "Mild wasting"
    ],
    "optionsHi": [
      "दस्त",
      "बुखार, खुजली वाले छाले (विभिन्न चरणों में)",
      "खांसी केवल",
      "पीलिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "SAM defined by severe wasting, low MUAC, or bilateral edema.",
    "explanationHi": "Vesicular rash।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-495",
    "questionEn": "MUAC stands for:",
    "questionHi": "मम्प्स (Mumps) के लक्षण क्या हैं?",
    "optionsEn": [
      "Medical Unit for Acute Care",
      "Mid-Upper Arm Circumference",
      "Minimum Universal Assessment Criteria",
      "Multiple Unified Assessment Code"
    ],
    "optionsHi": [
      "दस्त",
      "बुखार, गाल में सूजन (पैरोटिड ग्रंथि)",
      "खांसी",
      "रैश"
    ],
    "correctAnswer": 1,
    "explanationEn": "MUAC measures arm circumference to assess nutritional status.",
    "explanationHi": "Parotitis।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-496",
    "questionEn": "Color-coded MUAC tape: red indicates:",
    "questionHi": "डिप्थीरिया के लक्षण क्या हैं?",
    "optionsEn": [
      "Normal",
      "Severe acute malnutrition",
      "Moderate malnutrition",
      "Overweight"
    ],
    "optionsHi": [
      "दस्त",
      "गले में दर्द, गर्दन में सूजन (बुल नेक), गले में सफेद झिल्ली",
      "पीलिया",
      "रैश"
    ],
    "correctAnswer": 1,
    "explanationEn": "Red zone on MUAC tape indicates severe malnutrition.",
    "explanationHi": "Pseudomembrane।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-497",
    "questionEn": "School handwashing demonstration should use:",
    "questionHi": "काली खांसी (Pertussis) के लक्षण क्या हैं?",
    "optionsEn": [
      "Verbal instructions only",
      "Actual soap and water with step-by-step practice",
      "Posters only",
      "No demonstration"
    ],
    "optionsHi": [
      "दस्त",
      "लंबी खांसी के दौरे, 'हूप' आवाज़, उल्टी",
      "पीलिया",
      "रैश"
    ],
    "correctAnswer": 1,
    "explanationEn": "Practical demonstration with actual handwashing is most effective.",
    "explanationHi": "Whooping cough।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-498",
    "questionEn": "Safe drinking water in schools should be:",
    "questionHi": "टिटनस कैसे होता है?",
    "optionsEn": [
      "From any source",
      "From protected source, regularly tested",
      "Untested",
      "Stored openly"
    ],
    "optionsHi": [
      "हवा से",
      "गंदे घाव से Clostridium tetani बैक्टीरिया का प्रवेश",
      "पानी से",
      "मच्छर से"
    ],
    "correctAnswer": 1,
    "explanationEn": "School water must be from safe source with regular quality monitoring.",
    "explanationHi": "Wound infection।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-499",
    "questionEn": "Waste segregation training in schools teaches:",
    "questionHi": "टिटनस के लक्षण क्या हैं?",
    "optionsEn": [
      "Mixing all waste",
      "Separating waste into correct bins",
      "Only disposal",
      "Nothing about waste"
    ],
    "optionsHi": [
      "दस्त",
      "जबड़े में अकड़न (Lockjaw), मांसपेशियों में ऐंठन",
      "खांसी",
      "पीलिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "Teaching correct waste segregation develops lifelong habits.",
    "explanationHi": "Muscle spasms।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-500",
    "questionEn": "National Health Mission includes:",
    "questionHi": "संक्रामक रोगों से बचाव का सबसे प्रभावी तरीका क्या है?",
    "optionsEn": [
      "Only urban health",
      "NHM with rural and urban sub-missions",
      "Only hospitals",
      "Only doctors"
    ],
    "optionsHi": [
      "केवल दवाई",
      "स्वच्छता, टीकाकरण, और स्वस्थ व्यवहार",
      "कुछ नहीं करना",
      "केवल अस्पताल जाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "NHM encompasses rural and urban health programs.",
    "explanationHi": "Prevention is key।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-501",
    "questionEn": "NRHM was launched in:",
    "questionHi": "हेपेटाइटिस B कैसे फैलता है?",
    "optionsEn": [
      "2000",
      "2005",
      "2010",
      "2015"
    ],
    "optionsHi": [
      "पानी से",
      "संक्रमित रक्त, यौन संपर्क, मां से बच्चे को",
      "हवा से",
      "मच्छर से"
    ],
    "correctAnswer": 1,
    "explanationEn": "National Rural Health Mission launched in 2005.",
    "explanationHi": "Blood-borne।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-502",
    "questionEn": "Sub-Centre is the most peripheral health facility for:",
    "questionHi": "हेपेटाइटिस B का टीका कब लगाया जाता है?",
    "optionsEn": [
      "Tertiary care",
      "Primary healthcare in rural areas",
      "Super specialty",
      "Urban areas only"
    ],
    "optionsHi": [
      "1 वर्ष",
      "जन्म के 24 घंटे के भीतर (Birth dose)",
      "5 वर्ष",
      "10 वर्ष"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sub-Centre is first contact point for rural primary healthcare.",
    "explanationHi": "Birth dose।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-503",
    "questionEn": "PHC (Primary Health Centre) covers population of:",
    "questionHi": "हेपेटाइटिस C कैसे फैलता है?",
    "optionsEn": [
      "5,000",
      "20,000-30,000",
      "100,000",
      "500,000"
    ],
    "optionsHi": [
      "पानी से",
      "मुख्यतः संक्रमित रक्त से (सुई, रक्त आधान)",
      "हवा से",
      "भोजन से"
    ],
    "correctAnswer": 1,
    "explanationEn": "PHC covers 20,000-30,000 population in plains areas.",
    "explanationHi": "Blood-borne।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-504",
    "questionEn": "CHC (Community Health Centre) has how many beds?",
    "questionHi": "हेपेटाइटिस E कैसे फैलता है?",
    "optionsEn": [
      "10",
      "30",
      "100",
      "500"
    ],
    "optionsHi": [
      "रक्त से",
      "दूषित पानी से (मल-मौखिक)",
      "हवा से",
      "मच्छर से"
    ],
    "correctAnswer": 1,
    "explanationEn": "CHC is 30-bed hospital serving 80,000-120,000 population.",
    "explanationHi": "Waterborne।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-505",
    "questionEn": "MPHW Male worker's duties include:",
    "questionHi": "हेपेटाइटिस E गर्भवती में क्यों खतरनाक है?",
    "optionsEn": [
      "Only immunization",
      "Health education, surveillance, sanitation promotion",
      "Only treatment",
      "Surgery"
    ],
    "optionsHi": [
      "कोई खतरा नहीं",
      "उच्च मृत्यु दर (20-25%)",
      "हल्का बुखार",
      "केवल पीलिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "MPHW(M) performs multiple preventive and promotive health activities.",
    "explanationHi": "Fulminant hepatitis।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-506",
    "questionEn": "ASHA covers population of:",
    "questionHi": "पीलिया (Jaundice) का कारण क्या है?",
    "optionsEn": [
      "100",
      "1000",
      "5000",
      "10000"
    ],
    "optionsHi": [
      "केवल मलेरिया",
      "यकृत रोग, हेपेटाइटिस, पित्त नली बाधा, रक्त विकार",
      "केवल TB",
      "केवल डेंगू"
    ],
    "correctAnswer": 1,
    "explanationEn": "One ASHA covers approximately 1000 population (smaller in tribal areas).",
    "explanationHi": "Multiple causes।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-507",
    "questionEn": "Village Health and Nutrition Day is held:",
    "questionHi": "पीलिया के लक्षण क्या हैं?",
    "optionsEn": [
      "Daily",
      "Monthly",
      "Yearly",
      "Weekly"
    ],
    "optionsHi": [
      "खांसी",
      "आंखें और त्वचा पीली, गहरा पेशाब, हल्का मल",
      "दस्त",
      "बुखार केवल"
    ],
    "correctAnswer": 1,
    "explanationEn": "VHND held monthly at Anganwadi for health services.",
    "explanationHi": "Bilirubin।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-508",
    "questionEn": "Gram Kalyan Samiti manages:",
    "questionHi": "लेप्टोस्पायरोसिस कैसे फैलता है?",
    "optionsEn": [
      "State hospital",
      "Village health resources and Sub-Centre",
      "Medical college",
      "District hospital"
    ],
    "optionsHi": [
      "हवा से",
      "संक्रमित जानवरों के मूत्र से दूषित पानी/मिट्टी से",
      "मच्छर से",
      "भोजन से"
    ],
    "correctAnswer": 1,
    "explanationEn": "GKS manages untied funds and village health activities.",
    "explanationHi": "Zoonotic।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-509",
    "questionEn": "Untied fund at Sub-Centre is used for:",
    "questionHi": "लेप्टोस्पायरोसिस कब आम है?",
    "optionsEn": [
      "Salaries",
      "Local health needs as decided by community",
      "Building construction",
      "Vehicle purchase"
    ],
    "optionsHi": [
      "गर्मी में",
      "बाढ़ के बाद, बारिश के मौसम में",
      "सर्दी में",
      "वसंत में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Untied funds address local priorities decided by community.",
    "explanationHi": "Flooding।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-510",
    "questionEn": "Health Management Information System (HMIS) records:",
    "questionHi": "स्क्रब टाइफस कैसे फैलता है?",
    "optionsEn": [
      "Only finances",
      "Service delivery data from health facilities",
      "Only staff details",
      "Only deaths"
    ],
    "optionsHi": [
      "मच्छर से",
      "माइट (चिगर) के काटने से",
      "पानी से",
      "हवा से"
    ],
    "correctAnswer": 1,
    "explanationEn": "HMIS captures health service data for monitoring and planning.",
    "explanationHi": "Mite-borne।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-511",
    "questionEn": "Epidemic preparedness requires:",
    "questionHi": "स्क्रब टाइफस के लक्षण क्या हैं?",
    "optionsEn": [
      "No planning",
      "Surveillance, response teams, supplies, communication",
      "Only treatment",
      "Only isolation"
    ],
    "optionsHi": [
      "दस्त",
      "बुखार, सिरदर्द, एस्कार (काला घाव), रैश",
      "खांसी",
      "पीलिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "Preparedness includes multiple components for rapid response.",
    "explanationHi": "Eschar।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-512",
    "questionEn": "Quarantine applies to:",
    "questionHi": "AES (Acute Encephalitis Syndrome) क्या है?",
    "optionsEn": [
      "Sick persons",
      "Healthy contacts of infectious cases",
      "All people",
      "No one"
    ],
    "optionsHi": [
      "पेट रोग",
      "मस्तिष्क की तीव्र सूजन (विभिन्न कारणों से)",
      "त्वचा रोग",
      "फेफड़ों का रोग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Quarantine restricts movement of exposed healthy individuals.",
    "explanationHi": "Brain inflammation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-513",
    "questionEn": "Isolation is for:",
    "questionHi": "AES के कारण क्या हो सकते हैं?",
    "optionsEn": [
      "Healthy contacts",
      "Persons with confirmed infection",
      "Everyone",
      "Only healthcare workers"
    ],
    "optionsHi": [
      "केवल एक",
      "JE, अन्य वायरस, बैक्टीरिया, हाइपोग्लाइसीमिया",
      "कोई कारण नहीं",
      "केवल मलेरिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "Isolation separates infected persons to prevent transmission.",
    "explanationHi": "Multiple etiology।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-514",
    "questionEn": "Contact tracing helps:",
    "questionHi": "मेनिंजाइटिस क्या है?",
    "optionsEn": [
      "Nothing",
      "Identify and monitor exposed individuals",
      "Only counting",
      "Only reporting"
    ],
    "optionsHi": [
      "फेफड़ों की सूजन",
      "मस्तिष्क की झिल्लियों (मेनिंजेस) की सूजन",
      "त्वचा की सूजन",
      "पेट की सूजन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Contact tracing identifies exposed persons for monitoring and intervention.",
    "explanationHi": "Brain membrane।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-515",
    "questionEn": "Active surveillance involves:",
    "questionHi": "मेनिंजाइटिस के लक्षण क्या हैं?",
    "optionsEn": [
      "Waiting for reports",
      "Actively searching for cases in community",
      "Only laboratory testing",
      "Only hospitals"
    ],
    "optionsHi": [
      "दस्त",
      "बुखार, तीव्र सिरदर्द, गर्दन अकड़न, उल्टी, रोशनी से परेशानी",
      "खांसी",
      "पीलिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "Active surveillance proactively seeks cases rather than waiting.",
    "explanationHi": "Neck stiffness।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-516",
    "questionEn": "Passive surveillance relies on:",
    "questionHi": "H1N1 (Swine Flu) कैसे फैलता है?",
    "optionsEn": [
      "Active search",
      "Routine reporting from health facilities",
      "No data",
      "Only research"
    ],
    "optionsHi": [
      "पानी से",
      "श्वसन बूंदकों से",
      "मच्छर से",
      "संपर्क से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Passive surveillance depends on routine reports from facilities.",
    "explanationHi": "Influenza A।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-517",
    "questionEn": "Sentinel surveillance monitors:",
    "questionHi": "एवियन इन्फ्लुएंजा (Bird Flu) कैसे फैलता है?",
    "optionsEn": [
      "All facilities",
      "Selected representative sites",
      "No facilities",
      "Only private hospitals"
    ],
    "optionsHi": [
      "मच्छर से",
      "संक्रमित पक्षियों के संपर्क से",
      "पानी से",
      "हवा से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sentinel sites provide representative data for trends.",
    "explanationHi": "Avian influenza।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-518",
    "questionEn": "Syndromic surveillance monitors:",
    "questionHi": "निपाह वायरस कैसे फैलता है?",
    "optionsEn": [
      "Confirmed diagnoses only",
      "Symptom patterns before laboratory confirmation",
      "Only deaths",
      "Only hospital admissions"
    ],
    "optionsHi": [
      "मच्छर से",
      "चमगादड़/सूअर से, दूषित फल, व्यक्ति से व्यक्ति",
      "पानी से",
      "मिट्टी से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Syndromic surveillance tracks symptom clusters for early warning.",
    "explanationHi": "Zoonotic।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-519",
    "questionEn": "Hand hygiene compliance monitoring uses:",
    "questionHi": "मंकीपॉक्स कैसे फैलता है?",
    "optionsEn": [
      "Self-reporting only",
      "Direct observation and validation",
      "No monitoring",
      "Annual survey only"
    ],
    "optionsHi": [
      "हवा से",
      "निकट संपर्क, घाव का तरल, श्वसन बूंदकें",
      "पानी से",
      "मच्छर से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Direct observation validates actual hand hygiene practices.",
    "explanationHi": "Close contact।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-520",
    "questionEn": "Glowing indicator for hand hygiene training shows:",
    "questionHi": "इबोला कैसे फैलता है?",
    "optionsEn": [
      "Clean hands",
      "Areas missed during washing",
      "Proper technique",
      "No information"
    ],
    "optionsHi": [
      "हवा से",
      "संक्रमित व्यक्ति के शारीरिक तरल पदार्थों से",
      "पानी से",
      "मच्छर से"
    ],
    "correctAnswer": 1,
    "explanationEn": "UV-fluorescent lotion reveals missed areas under UV light.",
    "explanationHi": "Body fluids।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-521",
    "questionEn": "Nail hygiene is important because nails:",
    "questionHi": "टीकाकरण (Immunization) क्या है?",
    "optionsEn": [
      "Have no bacteria",
      "Harbor bacteria and are hard to clean",
      "Are self-cleaning",
      "Don't need attention"
    ],
    "optionsHi": [
      "दवाई देना",
      "टीके द्वारा रोग प्रतिरोधक क्षमता बढ़ाना",
      "सर्जरी",
      "जांच"
    ],
    "correctAnswer": 1,
    "explanationEn": "Subungual space harbors bacteria requiring attention during washing.",
    "explanationHi": "Vaccine।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-522",
    "questionEn": "Contact lens hygiene requires:",
    "questionHi": "UIP (Universal Immunization Programme) में कितने रोगों के टीके दिए जाते हैं?",
    "optionsEn": [
      "No special care",
      "Clean hands, proper solution, regular replacement",
      "Water storage",
      "Sharing lenses"
    ],
    "optionsHi": [
      "5",
      "12 (TB, Diptheria, Pertussis, Tetanus, Polio, Hepatitis B, Hib, Measles, Rubella, JE, Rotavirus, PCV)",
      "3",
      "20"
    ],
    "correctAnswer": 1,
    "explanationEn": "Contact lenses need strict hygiene to prevent eye infections.",
    "explanationHi": "UIP vaccines।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-523",
    "questionEn": "Ear hygiene includes:",
    "questionHi": "जन्म पर कौन से टीके लगाए जाते हैं?",
    "optionsEn": [
      "Deep cleaning with cotton buds",
      "Gentle cleaning of outer ear only",
      "Using sharp objects",
      "No cleaning needed"
    ],
    "optionsHi": [
      "केवल BCG",
      "BCG, OPV-0, Hepatitis B Birth Dose",
      "कोई नहीं",
      "केवल Hepatitis B"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clean only outer ear; avoid inserting objects into ear canal.",
    "explanationHi": "Birth vaccines।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-524",
    "questionEn": "Body odor is caused by:",
    "questionHi": "6 सप्ताह पर कौन से टीके लगाए जाते हैं?",
    "optionsEn": [
      "Sweat alone",
      "Bacteria acting on sweat",
      "Only genetics",
      "Food only"
    ],
    "optionsHi": [
      "BCG",
      "Pentavalent-1, OPV-1, IPV-1, Rotavirus-1, PCV-1",
      "MR",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Bacterial breakdown of sweat produces body odor.",
    "explanationHi": "6 weeks vaccines।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-525",
    "questionEn": "Deodorant works by:",
    "questionHi": "Pentavalent टीके में कौन से रोग शामिल हैं?",
    "optionsEn": [
      "Stopping sweat",
      "Masking odor or killing bacteria",
      "Increasing sweat",
      "Nothing"
    ],
    "optionsHi": [
      "3 रोग",
      "5 रोग (Diptheria, Pertussis, Tetanus, Hepatitis B, Hib)",
      "1 रोग",
      "10 रोग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Deodorants mask odor and may have antimicrobial action.",
    "explanationHi": "5-in-1 vaccine।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-526",
    "questionEn": "Antiperspirant works by:",
    "questionHi": "MR टीका किन रोगों के लिए है?",
    "optionsEn": [
      "Masking odor",
      "Reducing sweat production",
      "Increasing bacteria",
      "Nothing"
    ],
    "optionsHi": [
      "मलेरिया",
      "Measles और Rubella",
      "मम्प्स",
      "मेनिंजाइटिस"
    ],
    "correctAnswer": 1,
    "explanationEn": "Antiperspirants block sweat glands to reduce perspiration.",
    "explanationHi": "MR vaccine।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-527",
    "questionEn": "Sleep hygiene includes:",
    "questionHi": "Rotavirus टीका किस रोग के लिए है?",
    "optionsEn": [
      "Irregular sleep times",
      "Regular schedule, proper sleep environment",
      "Screen time before bed",
      "Heavy meals at night"
    ],
    "optionsHi": [
      "खांसी",
      "Rotavirus दस्त",
      "मलेरिया",
      "TB"
    ],
    "correctAnswer": 1,
    "explanationEn": "Good sleep hygiene promotes quality sleep through healthy practices.",
    "explanationHi": "Diarrhea prevention।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-528",
    "questionEn": "Respiratory hygiene includes:",
    "questionHi": "PCV (Pneumococcal Conjugate Vaccine) किस रोग के लिए है?",
    "optionsEn": [
      "Sneezing openly",
      "Covering cough/sneeze, hand hygiene",
      "Sharing handkerchief",
      "No special measures"
    ],
    "optionsHi": [
      "मलेरिया",
      "निमोनिया और मेनिंजाइटिस (न्यूमोकोकस)",
      "डेंगू",
      "टाइफाइड"
    ],
    "correctAnswer": 1,
    "explanationEn": "Covering coughs and hand hygiene prevent respiratory disease spread.",
    "explanationHi": "Pneumococcal disease।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-529",
    "questionEn": "Piped water supply advantages include:",
    "questionHi": "IPV क्या है?",
    "optionsEn": [
      "More contamination risk",
      "Consistent quality and convenience",
      "Higher cost always",
      "Less reliability"
    ],
    "optionsHi": [
      "मलेरिया टीका",
      "Injectable Polio Vaccine",
      "इन्फ्लुएंजा टीका",
      "हेपेटाइटिस टीका"
    ],
    "correctAnswer": 1,
    "explanationEn": "Piped systems provide treated water directly to households.",
    "explanationHi": "Inactivated polio।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-530",
    "questionEn": "Handpump water may be contaminated by:",
    "questionHi": "OPV और IPV में क्या अंतर है?",
    "optionsEn": [
      "Pipe network",
      "Surface runoff and poor platform drainage",
      "Air pollution",
      "Sunlight"
    ],
    "optionsHi": [
      "एक ही हैं",
      "OPV = मुंह से (जीवित), IPV = इंजेक्शन (निष्क्रिय)",
      "विपरीत",
      "कोई अंतर नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Handpumps can be contaminated through platform cracks and drainage.",
    "explanationHi": "Different routes।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-531",
    "questionEn": "Spring protection involves:",
    "questionHi": "DPT बूस्टर कब दिया जाता है?",
    "optionsEn": [
      "Leaving open",
      "Building collection chamber and preventing contamination",
      "Removing cover",
      "Adding chemicals"
    ],
    "optionsHi": [
      "जन्म पर",
      "16-24 महीने (DPT Booster-1), 5-6 वर्ष (DPT Booster-2)",
      "10 वर्ष",
      "केवल एक बार"
    ],
    "correctAnswer": 1,
    "explanationEn": "Spring boxes protect source from surface contamination.",
    "explanationHi": "Booster doses।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-532",
    "questionEn": "Water quality testing should be done:",
    "questionHi": "TT (Tetanus Toxoid) गर्भवती को कब दिया जाता है?",
    "optionsEn": [
      "Never",
      "Regularly and after repairs or complaints",
      "Once only",
      "Only when cloudy"
    ],
    "optionsHi": [
      "प्रसव के बाद",
      "गर्भावस्था में (TT-1 और TT-2)",
      "कभी नहीं",
      "केवल पहली गर्भावस्था"
    ],
    "correctAnswer": 1,
    "explanationEn": "Regular testing ensures continued water safety.",
    "explanationHi": "Maternal immunization।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-533",
    "questionEn": "Jar test determines:",
    "questionHi": "Td टीका क्या है?",
    "optionsEn": [
      "Taste",
      "Optimum coagulant dose",
      "Temperature",
      "pH only"
    ],
    "optionsHi": [
      "TB टीका",
      "Tetanus-diphtheria (वयस्क/किशोर के लिए)",
      "टाइफाइड टीका",
      "डेंगू टीका"
    ],
    "correctAnswer": 1,
    "explanationEn": "Jar test finds optimal chemical dose for coagulation.",
    "explanationHi": "Adult booster।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-534",
    "questionEn": "Flocculation basin allows:",
    "questionHi": "कोल्ड चेन क्या है?",
    "optionsEn": [
      "Fast mixing",
      "Gentle mixing for floc growth",
      "Sedimentation",
      "Disinfection"
    ],
    "optionsHi": [
      "ठंडी जंजीर",
      "टीकों को उचित तापमान पर रखने की प्रणाली",
      "बर्फ बनाना",
      "फ्रीज़र"
    ],
    "correctAnswer": 1,
    "explanationEn": "Gentle mixing promotes floc formation without breaking.",
    "explanationHi": "Vaccine storage।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-535",
    "questionEn": "Sedimentation tank removes:",
    "questionHi": "अधिकांश टीकों का भंडारण तापमान क्या है?",
    "optionsEn": [
      "Dissolved solids",
      "Suspended particles by gravity settling",
      "Bacteria",
      "Chemicals"
    ],
    "optionsHi": [
      "0°C",
      "+2°C से +8°C",
      "-20°C",
      "कमरे का तापमान"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sedimentation allows particles to settle by gravity.",
    "explanationHi": "Cold chain।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-536",
    "questionEn": "Clear water reservoir stores:",
    "questionHi": "VVM (Vaccine Vial Monitor) क्या दर्शाता है?",
    "optionsEn": [
      "Raw water",
      "Treated water before distribution",
      "Waste water",
      "Chemicals"
    ],
    "optionsHi": [
      "टीके का नाम",
      "टीके का तापमान एक्सपोज़र (गर्मी से नुकसान)",
      "टीके की मात्रा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clear well stores treated water for distribution.",
    "explanationHi": "Heat indicator।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-537",
    "questionEn": "Distribution system leaks can cause:",
    "questionHi": "VVM में अंदर का वर्ग बाहर से गहरा होने पर क्या करें?",
    "optionsEn": [
      "Better water quality",
      "Contamination during low pressure",
      "Nothing",
      "Improved taste"
    ],
    "optionsHi": [
      "उपयोग करें",
      "टीका न दें (खराब हो गया)",
      "फ्रीज़ करें",
      "हिलाएं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Leaks allow contamination entry during pressure drops.",
    "explanationHi": "Discard।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-538",
    "questionEn": "Cross-connection in plumbing is:",
    "questionHi": "Open Vial Policy क्या है?",
    "optionsEn": [
      "Normal practice",
      "Link between potable and non-potable systems",
      "Required",
      "Recommended"
    ],
    "optionsHi": [
      "हमेशा फेंकना",
      "कुछ टीकों की खुली शीशी 28 दिन तक उपयोग करना",
      "कभी न खोलना",
      "तुरंत फेंकना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cross-connections can allow backflow contamination.",
    "explanationHi": "Multi-dose vials।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-539",
    "questionEn": "Backflow prevention devices protect against:",
    "questionHi": "AEFI (Adverse Event Following Immunization) क्या है?",
    "optionsEn": [
      "High pressure",
      "Contamination from reverse flow",
      "Low flow",
      "Temperature change"
    ],
    "optionsHi": [
      "टीका लाभ",
      "टीकाकरण के बाद होने वाली प्रतिकूल घटना",
      "टीका नाम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Backflow preventers stop contaminated water entering supply.",
    "explanationHi": "Side effects।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-540",
    "questionEn": "Simple pit latrine is suitable for:",
    "questionHi": "AEFI की रिपोर्ट कब करें?",
    "optionsEn": [
      "High water table",
      "Areas with low water table and adequate space",
      "Urban areas",
      "Rocky soil"
    ],
    "optionsHi": [
      "कभी नहीं",
      "सभी गंभीर AEFI तुरंत रिपोर्ट करें",
      "केवल मृत्यु पर",
      "1 महीने बाद"
    ],
    "correctAnswer": 1,
    "explanationEn": "Simple pits work in suitable soil with low water table.",
    "explanationHi": "Immediate reporting।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-541",
    "questionEn": "Lined pit is required when:",
    "questionHi": "टीकाकरण के बाद सामान्य प्रतिक्रियाएं क्या हैं?",
    "optionsEn": [
      "Always",
      "Soil is loose or collapsing",
      "Never",
      "In rocky areas only"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "इंजेक्शन स्थान पर दर्द/सूजन, हल्का बुखार",
      "गंभीर दौरे",
      "बेहोशी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lining prevents pit collapse in unstable soil.",
    "explanationHi": "Minor reactions।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-542",
    "questionEn": "Offset pit design has pit:",
    "questionHi": "MII (Mission Indradhanush Intensified) क्या है?",
    "optionsEn": [
      "Under superstructure",
      "Away from squat plate connected by pipe",
      "On roof",
      "No pit"
    ],
    "optionsHi": [
      "जल कार्यक्रम",
      "पूर्ण टीकाकरण बढ़ाने का अभियान",
      "शिक्षा कार्यक्रम",
      "पोषण कार्यक्रम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Offset design places pit away from toilet for easier emptying.",
    "explanationHi": "Immunization drive।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-543",
    "questionEn": "Anal cleansing water in toilet goes to:",
    "questionHi": "पूर्ण टीकाकरण (Full Immunization) का मतलब क्या है?",
    "optionsEn": [
      "Separate drain",
      "Same pit/tank as feces",
      "Garden",
      "Road"
    ],
    "optionsHi": [
      "1 टीका",
      "1 वर्ष तक के सभी निर्धारित टीके लगवाना",
      "कोई टीका नहीं",
      "केवल BCG"
    ],
    "correctAnswer": 1,
    "explanationEn": "Wash water typically goes to same containment as excreta.",
    "explanationHi": "Complete schedule।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-544",
    "questionEn": "Urine diversion toilet separates:",
    "questionHi": "टीकाकरण में ड्रॉपआउट क्यों होता है?",
    "optionsEn": [
      "Nothing",
      "Urine from feces for different treatment",
      "Water only",
      "Paper only"
    ],
    "optionsHi": [
      "कोई कारण नहीं",
      "जागरूकता की कमी, दूरी, AEFI का डर, माता-पिता का व्यस्त होना",
      "सब टीके लगे",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Urine diversion allows separate treatment and nutrient recovery.",
    "explanationHi": "Dropout reasons।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-545",
    "questionEn": "Greywater is:",
    "questionHi": "MPHW का टीकाकरण में क्या योगदान है?",
    "optionsEn": [
      "Toilet waste",
      "Wastewater from washing without fecal matter",
      "Rainwater",
      "Drinking water"
    ],
    "optionsHi": [
      "कोई योगदान नहीं",
      "सूची बनाना, जागरूकता, सत्र में सहायता, ड्रॉपआउट ट्रैकिंग",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Greywater is from bathing, laundry, kitchen without toilet waste.",
    "explanationHi": "Field support।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-546",
    "questionEn": "Greywater treatment can include:",
    "questionHi": "पोषण (Nutrition) क्या है?",
    "optionsEn": [
      "No treatment needed",
      "Settling, filtration, planted beds",
      "Direct disposal",
      "Burning"
    ],
    "optionsHi": [
      "केवल खाना",
      "शरीर को आवश्यक पोषक तत्व प्रदान करना",
      "केवल पानी",
      "केवल विटामिन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Greywater can be treated through natural filtration systems.",
    "explanationHi": "Food and nutrients।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-547",
    "questionEn": "Treated greywater can be used for:",
    "questionHi": "पोषक तत्वों के मुख्य प्रकार क्या हैं?",
    "optionsEn": [
      "Drinking",
      "Gardening and toilet flushing",
      "Cooking",
      "Bathing"
    ],
    "optionsHi": [
      "एक प्रकार",
      "मैक्रोन्यूट्रिएंट्स (कार्ब, प्रोटीन, वसा) और माइक्रोन्यूट्रिएंट्स (विटामिन, खनिज)",
      "केवल विटामिन",
      "केवल कार्ब"
    ],
    "correctAnswer": 1,
    "explanationEn": "Treated greywater suitable for non-potable uses.",
    "explanationHi": "Nutrient types।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-548",
    "questionEn": "DEWATS stands for:",
    "questionHi": "कार्बोहाइड्रेट का मुख्य कार्य क्या है?",
    "optionsEn": [
      "Direct Effluent Water Treatment",
      "Decentralized Wastewater Treatment Systems",
      "Domestic Effluent Washing Treatment",
      "District Effluent Water Treatment"
    ],
    "optionsHi": [
      "हड्डी बनाना",
      "ऊर्जा प्रदान करना",
      "प्रतिरक्षा",
      "आंखों की रोशनी"
    ],
    "correctAnswer": 1,
    "explanationEn": "DEWATS are decentralized systems for community wastewater treatment.",
    "explanationHi": "Energy source।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-549",
    "questionEn": "Constructed wetland treats wastewater using:",
    "questionHi": "प्रोटीन का मुख्य कार्य क्या है?",
    "optionsEn": [
      "Chemicals only",
      "Plants and natural processes",
      "High energy",
      "No treatment"
    ],
    "optionsHi": [
      "ऊर्जा केवल",
      "शरीर निर्माण और मरम्मत",
      "केवल स्वाद",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Constructed wetlands use plants and microbes for treatment.",
    "explanationHi": "Body building।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-550",
    "questionEn": "Organic waste at home can be processed in:",
    "questionHi": "प्रोटीन के अच्छे स्रोत क्या हैं?",
    "optionsEn": [
      "Regular dustbin only",
      "Home composter or biogas plant",
      "Toilet",
      "Burning"
    ],
    "optionsHi": [
      "केवल चावल",
      "दालें, अंडा, दूध, मांस, मछली, सोयाबीन",
      "केवल फल",
      "केवल सब्जियां"
    ],
    "correctAnswer": 1,
    "explanationEn": "Home composting or biogas converts organic waste to useful products.",
    "explanationHi": "Protein sources।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-551",
    "questionEn": "Bokashi composting uses:",
    "questionHi": "वसा का मुख्य कार्य क्या है?",
    "optionsEn": [
      "Worms",
      "Effective microorganisms for fermentation",
      "Open air",
      "Burning"
    ],
    "optionsHi": [
      "केवल नुकसान",
      "ऊर्जा भंडारण, विटामिन अवशोषण, अंगों की सुरक्षा",
      "कोई कार्य नहीं",
      "केवल स्वाद"
    ],
    "correctAnswer": 1,
    "explanationEn": "Bokashi uses anaerobic fermentation with inoculated bran.",
    "explanationHi": "Fat functions।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-552",
    "questionEn": "NADEP composting is:",
    "questionHi": "विटामिन A की कमी से क्या होता है?",
    "optionsEn": [
      "Imported method",
      "Indian aerobic composting technique",
      "Chemical process",
      "Burning"
    ],
    "optionsHi": [
      "एनीमिया",
      "रतौंधी (Night Blindness), सूखी आंख, अंधापन",
      "रिकेट्स",
      "स्कर्वी"
    ],
    "correctAnswer": 1,
    "explanationEn": "NADEP is aerobic composting method developed in India.",
    "explanationHi": "VAD।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-553",
    "questionEn": "Windrow composting involves:",
    "questionHi": "विटामिन A के स्रोत क्या हैं?",
    "optionsEn": [
      "Indoor composting",
      "Long piles turned for aeration",
      "Sealed containers",
      "No turning"
    ],
    "optionsHi": [
      "केवल चावल",
      "गाजर, पपीता, दूध, अंडा, हरी पत्तेदार सब्जियां",
      "केवल नमक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Windrows are long piles turned periodically for oxygen.",
    "explanationHi": "Vitamin A sources।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-554",
    "questionEn": "In-vessel composting provides:",
    "questionHi": "विटामिन A खुराक कब दी जाती है?",
    "optionsEn": [
      "No control",
      "Controlled environment for faster composting",
      "Slower process",
      "Open exposure"
    ],
    "optionsHi": [
      "जन्म पर",
      "9 महीने से 5 वर्ष तक हर 6 महीने में",
      "केवल 1 बार",
      "10 वर्ष में"
    ],
    "correctAnswer": 1,
    "explanationEn": "In-vessel systems control temperature, moisture, aeration.",
    "explanationHi": "VAS programme।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-555",
    "questionEn": "Biogas plant temperature for optimal digestion:",
    "questionHi": "विटामिन D की कमी से क्या होता है?",
    "optionsEn": [
      "0-10°C",
      "35-40°C",
      "60-70°C",
      "100°C"
    ],
    "optionsHi": [
      "स्कर्वी",
      "रिकेट्स (बच्चों में), ऑस्टियोमलेशिया (वयस्कों में)",
      "रतौंधी",
      "बेरीबेरी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mesophilic digestion optimal around 35-40°C.",
    "explanationHi": "Bone weakness।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-556",
    "questionEn": "Biogas slurry is used as:",
    "questionHi": "विटामिन D का सबसे अच्छा स्रोत क्या है?",
    "optionsEn": [
      "Fuel",
      "Fertilizer for crops",
      "Drinking water",
      "Medicine"
    ],
    "optionsHi": [
      "फल",
      "सूर्य की रोशनी",
      "सब्जियां",
      "चावल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Digester slurry is nutrient-rich organic fertilizer.",
    "explanationHi": "Sunshine vitamin।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-557",
    "questionEn": "Waste picker safety includes:",
    "questionHi": "विटामिन C की कमी से क्या होता है?",
    "optionsEn": [
      "No protection needed",
      "Gloves, boots, masks, vaccinations",
      "Only gloves",
      "Only boots"
    ],
    "optionsHi": [
      "रिकेट्स",
      "स्कर्वी (मसूड़ों से खून, घाव न भरना)",
      "रतौंधी",
      "बेरीबेरी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Comprehensive protection needed for waste handling workers.",
    "explanationHi": "Vitamin C deficiency।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-558",
    "questionEn": "Swachh Bharat Mission provides funds for:",
    "questionHi": "विटामिन C के स्रोत क्या हैं?",
    "optionsEn": [
      "Only toilets",
      "Toilets and solid/liquid waste management",
      "Only roads",
      "Only buildings"
    ],
    "optionsHi": [
      "चावल",
      "खट्टे फल (संतरा, नींबू), आंवला, अमरूद, टमाटर",
      "दाल",
      "दूध"
    ],
    "correctAnswer": 1,
    "explanationEn": "SBM supports comprehensive sanitation including SLWM.",
    "explanationHi": "Citrus fruits।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-559",
    "questionEn": "Material Recovery Facilities (MRF) help:",
    "questionHi": "विटामिन B1 (Thiamine) की कमी से क्या होता है?",
    "optionsEn": [
      "Burn waste",
      "Sort and process recyclables",
      "Bury waste",
      "Create pollution"
    ],
    "optionsHi": [
      "स्कर्वी",
      "बेरीबेरी",
      "रिकेट्स",
      "रतौंधी"
    ],
    "correctAnswer": 1,
    "explanationEn": "MRFs sort waste for recycling and resource recovery.",
    "explanationHi": "Thiamine deficiency।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-560",
    "questionEn": "Shelf life of food depends on:",
    "questionHi": "विटामिन B12 की कमी से क्या होता है?",
    "optionsEn": [
      "Color only",
      "Storage conditions, packaging, preservatives",
      "Shape only",
      "Brand only"
    ],
    "optionsHi": [
      "रिकेट्स",
      "एनीमिया, तंत्रिका समस्याएं",
      "स्कर्वी",
      "रतौंधी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple factors affect how long food remains safe.",
    "explanationHi": "Megaloblastic anemia।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-561",
    "questionEn": "Best before date indicates:",
    "questionHi": "फोलिक एसिड की कमी से क्या होता है?",
    "optionsEn": [
      "Safety limit",
      "Quality peak, may be safe after",
      "Manufacture date",
      "Packing date"
    ],
    "optionsHi": [
      "रिकेट्स",
      "एनीमिया, गर्भावस्था में जन्म दोष (Neural Tube Defects)",
      "स्कर्वी",
      "रतौंधी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Best before relates to quality; food may be safe after.",
    "explanationHi": "Folate deficiency।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-562",
    "questionEn": "Use by date indicates:",
    "questionHi": "आयरन की कमी से क्या होता है?",
    "optionsEn": [
      "Quality date",
      "Safety limit, don't consume after",
      "Manufacture date",
      "Shipping date"
    ],
    "optionsHi": [
      "रिकेट्स",
      "एनीमिया (Iron Deficiency Anemia)",
      "स्कर्वी",
      "गॉइटर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Use by is safety-related; food shouldn't be eaten after.",
    "explanationHi": "IDA।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-563",
    "questionEn": "Modified atmosphere packaging:",
    "questionHi": "आयरन के अच्छे स्रोत क्या हैं?",
    "optionsEn": [
      "Is normal air",
      "Changes gas composition to extend shelf life",
      "Removes all gas",
      "Adds water"
    ],
    "optionsHi": [
      "दूध",
      "हरी पत्तेदार सब्जियां, मांस, अंडा, गुड़, किशमिश",
      "फल केवल",
      "चावल"
    ],
    "correctAnswer": 1,
    "explanationEn": "MAP uses gas mixtures (N2, CO2) to slow spoilage.",
    "explanationHi": "Iron sources।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-564",
    "questionEn": "Vacuum packaging removes:",
    "questionHi": "एनीमिया के लक्षण क्या हैं?",
    "optionsEn": [
      "Food",
      "Air to prevent oxidation",
      "Moisture",
      "Flavor"
    ],
    "optionsHi": [
      "मोटापा",
      "थकान, कमजोरी, पीली त्वचा, सांस फूलना, चक्कर",
      "बुखार",
      "खांसी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Removing air slows aerobic bacterial growth and oxidation.",
    "explanationHi": "Anemia symptoms।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-565",
    "questionEn": "Blanching before freezing:",
    "questionHi": "IFA (Iron Folic Acid) टैबलेट गर्भवती को कितने दिन देनी है?",
    "optionsEn": [
      "Defrosts food",
      "Inactivates enzymes preserving quality",
      "Cooks completely",
      "Adds color"
    ],
    "optionsHi": [
      "30 दिन",
      "180 दिन (गर्भावस्था में 180 + स्तनपान में 180)",
      "7 दिन",
      "1 दिन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Blanching stops enzyme activity that affects frozen food quality.",
    "explanationHi": "IFA supplementation।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-566",
    "questionEn": "Canning preserves food by:",
    "questionHi": "आयोडीन की कमी से क्या होता है?",
    "optionsEn": [
      "Freezing",
      "Heat treatment in sealed container",
      "Drying",
      "Adding salt only"
    ],
    "optionsHi": [
      "एनीमिया",
      "गॉइटर, क्रेटिनिज्म, मानसिक मंदता",
      "स्कर्वी",
      "रिकेट्स"
    ],
    "correctAnswer": 1,
    "explanationEn": "Canning uses heat sterilization in hermetically sealed containers.",
    "explanationHi": "IDD।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-567",
    "questionEn": "Fermentation preserves food by:",
    "questionHi": "आयोडीन का मुख्य स्रोत क्या है?",
    "optionsEn": [
      "Heating",
      "Producing acid/alcohol inhibiting pathogens",
      "Freezing",
      "Drying"
    ],
    "optionsHi": [
      "फल",
      "आयोडीन युक्त नमक, समुद्री भोजन",
      "चावल",
      "दूध"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fermentation products (acid, alcohol) inhibit harmful microbes.",
    "explanationHi": "Iodized salt।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-568",
    "questionEn": "Smoking fish preserves by:",
    "questionHi": "कैल्शियम का मुख्य कार्य क्या है?",
    "optionsEn": [
      "Heating only",
      "Antimicrobial smoke compounds and drying",
      "Freezing",
      "Nothing"
    ],
    "optionsHi": [
      "ऊर्जा",
      "हड्डियों और दांतों का निर्माण",
      "प्रतिरक्षा",
      "पाचन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Smoke contains antimicrobials and reduces moisture.",
    "explanationHi": "Bone health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-569",
    "questionEn": "Sun drying preserves food by:",
    "questionHi": "कैल्शियम के स्रोत क्या हैं?",
    "optionsEn": [
      "Adding water",
      "Reducing moisture inhibiting microbial growth",
      "Freezing",
      "Fermenting"
    ],
    "optionsHi": [
      "मांस",
      "दूध, दही, पनीर, रागी, तिल",
      "चावल",
      "फल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Low moisture prevents bacterial and fungal growth.",
    "explanationHi": "Calcium sources।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-570",
    "questionEn": "Thermal mass in buildings:",
    "questionHi": "जिंक की कमी से क्या होता है?",
    "optionsEn": [
      "Increases temperature swings",
      "Stabilizes indoor temperature",
      "Reduces insulation",
      "Creates heat"
    ],
    "optionsHi": [
      "एनीमिया",
      "विकास में रुकावट, प्रतिरक्षा कमजोर, घाव देरी से भरना",
      "गॉइटर",
      "रिकेट्स"
    ],
    "correctAnswer": 1,
    "explanationEn": "Thermal mass materials absorb and release heat slowly.",
    "explanationHi": "Zinc deficiency।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-571",
    "questionEn": "Insulation reduces:",
    "questionHi": "कुपोषण (Malnutrition) के प्रकार क्या हैं?",
    "optionsEn": [
      "Structural strength",
      "Heat transfer through building envelope",
      "Ventilation",
      "Light"
    ],
    "optionsHi": [
      "एक प्रकार",
      "अल्पपोषण (Undernutrition), अधिकपोषण (Overnutrition), सूक्ष्म पोषक तत्व की कमी",
      "कोई प्रकार नहीं",
      "केवल मोटापा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Insulation slows heat flow keeping interiors comfortable.",
    "explanationHi": "Forms of malnutrition।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-572",
    "questionEn": "Shading devices on windows:",
    "questionHi": "अल्पपोषण के प्रकार क्या हैं?",
    "optionsEn": [
      "Increase heat",
      "Reduce solar heat gain",
      "Block ventilation",
      "Nothing"
    ],
    "optionsHi": [
      "मोटापा",
      "कम वजन (Underweight), बौनापन (Stunting), दुबलापन (Wasting)",
      "केवल एक",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Shading prevents direct sun from heating interior.",
    "explanationHi": "Undernutrition types।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-573",
    "questionEn": "Evaporative cooling works best in:",
    "questionHi": "Stunting क्या दर्शाता है?",
    "optionsEn": [
      "Humid climate",
      "Hot dry climate",
      "Cold climate",
      "Any climate"
    ],
    "optionsHi": [
      "तीव्र कुपोषण",
      "दीर्घकालिक/पुराना कुपोषण (आयु के अनुसार कम लंबाई)",
      "मोटापा",
      "सामान्य"
    ],
    "correctAnswer": 1,
    "explanationEn": "Evaporative cooling effective when humidity is low.",
    "explanationHi": "Chronic malnutrition।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-574",
    "questionEn": "Earth air tunnel provides:",
    "questionHi": "Wasting क्या दर्शाता है?",
    "optionsEn": [
      "Lighting",
      "Pre-cooled/heated air from underground",
      "Ventilation only",
      "Water"
    ],
    "optionsHi": [
      "पुराना कुपोषण",
      "तीव्र/हाल का कुपोषण (लंबाई के अनुसार कम वजन)",
      "मोटापा",
      "सामान्य"
    ],
    "correctAnswer": 1,
    "explanationEn": "Underground pipes moderate air temperature using earth's constant temperature.",
    "explanationHi": "Acute malnutrition।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-575",
    "questionEn": "Green building design considers:",
    "questionHi": "SAM (Severe Acute Malnutrition) क्या है?",
    "optionsEn": [
      "Only aesthetics",
      "Energy efficiency, water conservation, healthy materials",
      "Only cost",
      "Only speed"
    ],
    "optionsHi": [
      "हल्का कुपोषण",
      "गंभीर तीव्र कुपोषण (MUAC <11.5cm या एडिमा)",
      "मोटापा",
      "सामान्य"
    ],
    "correctAnswer": 1,
    "explanationEn": "Green buildings minimize environmental impact holistically.",
    "explanationHi": "Severe malnutrition।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-576",
    "questionEn": "GRIHA is:",
    "questionHi": "MAM (Moderate Acute Malnutrition) क्या है?",
    "optionsEn": [
      "Building material",
      "Indian green building rating system",
      "Construction company",
      "Insulation type"
    ],
    "optionsHi": [
      "गंभीर कुपोषण",
      "मध्यम तीव्र कुपोषण (MUAC 11.5-12.5cm)",
      "मोटापा",
      "सामान्य"
    ],
    "correctAnswer": 1,
    "explanationEn": "GRIHA rates buildings on environmental performance.",
    "explanationHi": "Moderate malnutrition।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-577",
    "questionEn": "Sick building syndrome causes:",
    "questionHi": "MUAC क्या है?",
    "optionsEn": [
      "Nothing",
      "Health complaints linked to time in building",
      "Building collapse",
      "Only headache"
    ],
    "optionsHi": [
      "वजन",
      "Mid-Upper Arm Circumference (बांह की परिधि)",
      "लंबाई",
      "सिर परिधि"
    ],
    "correctAnswer": 1,
    "explanationEn": "SBS includes symptoms that improve when leaving building.",
    "explanationHi": "Nutrition screening।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-578",
    "questionEn": "Building related illness differs from SBS by:",
    "questionHi": "मारास्मस क्या है?",
    "optionsEn": [
      "No difference",
      "Having identifiable cause and clinical signs",
      "Being less severe",
      "Only affecting children"
    ],
    "optionsHi": [
      "एडिमा वाला",
      "गंभीर ऊर्जा और प्रोटीन की कमी (सूखा, बूढ़े जैसा चेहरा)",
      "मोटापा",
      "सामान्य"
    ],
    "correctAnswer": 1,
    "explanationEn": "BRI has specific diagnosable cause unlike general SBS.",
    "explanationHi": "PEM।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-579",
    "questionEn": "Volatile organic compounds (VOCs) in buildings come from:",
    "questionHi": "क्वाशियोरकोर क्या है?",
    "optionsEn": [
      "Outside only",
      "Paints, adhesives, cleaning products",
      "Water supply",
      "Food"
    ],
    "optionsHi": [
      "सूखापन",
      "गंभीर प्रोटीन की कमी (एडिमा, बालों में बदलाव, त्वचा घाव)",
      "मोटापा",
      "सामान्य"
    ],
    "correctAnswer": 1,
    "explanationEn": "Many building materials and products emit VOCs.",
    "explanationHi": "Protein deficiency।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-580",
    "questionEn": "Adult mosquito survey methods include:",
    "questionHi": "NRC (Nutritional Rehabilitation Centre) क्या है?",
    "optionsEn": [
      "Only larval surveys",
      "Landing catches, pyrethrum spray collections",
      "Water testing",
      "Soil sampling"
    ],
    "optionsHi": [
      "स्कूल",
      "SAM बच्चों के इलाज का केंद्र",
      "अस्पताल OPD",
      "आंगनवाड़ी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Various methods sample adult mosquito populations.",
    "explanationHi": "Facility-based care।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-581",
    "questionEn": "Breteau Index measures:",
    "questionHi": "CMAM क्या है?",
    "optionsEn": [
      "Adult mosquitoes",
      "Positive containers per 100 houses",
      "Water quality",
      "Air quality"
    ],
    "optionsHi": [
      "अस्पताल में इलाज",
      "Community-based Management of Acute Malnutrition",
      "केवल दवाई",
      "सर्जरी"
    ],
    "correctAnswer": 1,
    "explanationEn": "BI = Number of positive containers per 100 houses inspected.",
    "explanationHi": "Community care।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-582",
    "questionEn": "House Index measures:",
    "questionHi": "RUTF (Ready-to-Use Therapeutic Food) क्या है?",
    "optionsEn": [
      "Container positivity",
      "Percentage of houses positive for larvae",
      "Adult density",
      "Breeding sites"
    ],
    "optionsHi": [
      "सामान्य खाना",
      "SAM इलाज के लिए तैयार चिकित्सीय भोजन",
      "दवाई",
      "पानी"
    ],
    "correctAnswer": 1,
    "explanationEn": "HI = Percentage of houses with larvae-positive containers.",
    "explanationHi": "Therapeutic food।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-583",
    "questionEn": "Container Index measures:",
    "questionHi": "स्तनपान का महत्व क्या है?",
    "optionsEn": [
      "House positivity",
      "Percentage of containers positive for larvae",
      "Adult mosquitoes",
      "Pupal density"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "शिशु के लिए सर्वोत्तम पोषण, प्रतिरक्षा, बंधन",
      "केवल मां के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CI = Percentage of water-holding containers with larvae.",
    "explanationHi": "Breast is best।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-584",
    "questionEn": "Pupal survey is done because pupae:",
    "questionHi": "कोलोस्ट्रम (Colostrum) क्या है?",
    "optionsEn": [
      "Don't become adults",
      "Best predict adult emergence",
      "Are easy to count",
      "Die before adult stage"
    ],
    "optionsHi": [
      "बाद का दूध",
      "जन्म के बाद पहले कुछ दिनों का गाढ़ा पीला दूध",
      "पानी",
      "फॉर्मूला"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pupal counts better predict adult population emergence.",
    "explanationHi": "First milk।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-585",
    "questionEn": "Ovitrap is used for:",
    "questionHi": "कोलोस्ट्रम क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Killing mosquitoes",
      "Detecting Aedes egg-laying activity",
      "Water storage",
      "Adult trapping"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "एंटीबॉडीज, प्रतिरक्षा, पोषण से भरपूर",
      "पानी जैसा",
      "फेंकना चाहिए"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ovitraps attract egg-laying females to monitor presence.",
    "explanationHi": "First vaccine।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-586",
    "questionEn": "BG Sentinel trap is used for:",
    "questionHi": "जन्म के कितने समय में स्तनपान शुरू करना चाहिए?",
    "optionsEn": [
      "Rodents",
      "Adult Aedes mosquitoes",
      "Larvae",
      "Flies"
    ],
    "optionsHi": [
      "24 घंटे बाद",
      "जन्म के 1 घंटे के भीतर",
      "3 दिन बाद",
      "1 सप्ताह बाद"
    ],
    "correctAnswer": 1,
    "explanationEn": "BG traps capture adult Aedes using visual and olfactory lures.",
    "explanationHi": "Early initiation।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-587",
    "questionEn": "CDC light trap captures:",
    "questionHi": "केवल स्तनपान (Exclusive Breastfeeding) कितने महीने तक करना चाहिए?",
    "optionsEn": [
      "Larvae",
      "Adult mosquitoes attracted to light",
      "Eggs",
      "Pupae"
    ],
    "optionsHi": [
      "3 महीने",
      "6 महीने",
      "1 महीना",
      "12 महीने"
    ],
    "correctAnswer": 1,
    "explanationEn": "Light traps sample night-flying adult mosquitoes.",
    "explanationHi": "EBF।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-588",
    "questionEn": "Insecticide susceptibility testing determines:",
    "questionHi": "केवल स्तनपान का मतलब क्या है?",
    "optionsEn": [
      "Species identification",
      "Whether mosquitoes are resistant",
      "Breeding sites",
      "Disease presence"
    ],
    "optionsHi": [
      "फॉर्मूला भी",
      "केवल माँ का दूध, पानी भी नहीं (दवाई के अलावा)",
      "पानी भी",
      "जूस भी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Susceptibility tests identify insecticide resistance.",
    "explanationHi": "Only breast milk।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-589",
    "questionEn": "WHO tube test uses:",
    "questionHi": "पूरक आहार (Complementary Feeding) कब शुरू करना चाहिए?",
    "optionsEn": [
      "Water",
      "Insecticide-impregnated papers",
      "Fire",
      "Chemicals"
    ],
    "optionsHi": [
      "3 महीने",
      "6 महीने पूरे होने पर",
      "1 महीने",
      "12 महीने"
    ],
    "correctAnswer": 1,
    "explanationEn": "WHO test exposes mosquitoes to standard insecticide papers.",
    "explanationHi": "Weaning।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-590",
    "questionEn": "Developmental delay screening identifies:",
    "questionHi": "पूरक आहार में क्या शामिल करें?",
    "optionsEn": [
      "Only physical problems",
      "Children not meeting milestones",
      "Only vision problems",
      "Only hearing"
    ],
    "optionsHi": [
      "केवल दूध",
      "अनाज, दाल, सब्जी, फल, अंडा, मांस (परिवार का भोजन मैश करके)",
      "केवल बिस्किट",
      "केवल जूस"
    ],
    "correctAnswer": 1,
    "explanationEn": "Screening identifies developmental concerns for early intervention.",
    "explanationHi": "Variety।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-591",
    "questionEn": "Milestones assessed include:",
    "questionHi": "6-8 महीने के बच्चे को दिन में कितनी बार पूरक आहार देना चाहिए?",
    "optionsEn": [
      "Only walking",
      "Gross motor, fine motor, language, social",
      "Only talking",
      "Only eating"
    ],
    "optionsHi": [
      "1 बार",
      "2-3 बार (स्तनपान जारी)",
      "6 बार",
      "केवल स्तनपान"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple developmental domains are assessed in screening.",
    "explanationHi": "Meal frequency।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-592",
    "questionEn": "Early intervention for developmental delays:",
    "questionHi": "स्तनपान कितने वर्ष तक जारी रखना चाहिए?",
    "optionsEn": [
      "Is useless",
      "Improves outcomes through timely therapy",
      "Should wait until school",
      "Only needed for severe cases"
    ],
    "optionsHi": [
      "6 महीने",
      "2 वर्ष या उससे अधिक",
      "1 वर्ष",
      "3 महीने"
    ],
    "correctAnswer": 1,
    "explanationEn": "Early intervention capitalizes on brain plasticity for better outcomes.",
    "explanationHi": "Continued breastfeeding।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-593",
    "questionEn": "Vitamin A supplementation prevents:",
    "questionHi": "ICDS (Integrated Child Development Services) क्या है?",
    "optionsEn": [
      "Anemia",
      "Night blindness and xerophthalmia",
      "Scurvy",
      "Rickets"
    ],
    "optionsHi": [
      "शिक्षा कार्यक्रम",
      "बच्चों और महिलाओं के लिए पोषण और विकास कार्यक्रम",
      "जल कार्यक्रम",
      "स्वच्छता कार्यक्रम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vitamin A prevents eye problems and reduces child mortality.",
    "explanationHi": "Child development।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-594",
    "questionEn": "IFA tablet contains:",
    "questionHi": "ICDS की सेवाएं कौन सी हैं?",
    "optionsEn": [
      "Only iron",
      "Iron and folic acid",
      "Only folic acid",
      "Calcium"
    ],
    "optionsHi": [
      "केवल भोजन",
      "पूरक पोषण, टीकाकरण, स्वास्थ्य जांच, रेफरल, पूर्व-स्कूल शिक्षा, पोषण शिक्षा",
      "केवल शिक्षा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "IFA provides both iron and folic acid for anemia prevention.",
    "explanationHi": "6 services।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-595",
    "questionEn": "Adolescent anemia cut-off hemoglobin is:",
    "questionHi": "पोषण अभियान (POSHAN Abhiyaan) क्या है?",
    "optionsEn": [
      "14 g/dL",
      "12 g/dL for girls, 13 g/dL for boys",
      "10 g/dL",
      "8 g/dL"
    ],
    "optionsHi": [
      "शिक्षा अभियान",
      "कुपोषण मुक्त भारत के लिए राष्ट्रीय पोषण मिशन",
      "जल अभियान",
      "स्वच्छता अभियान"
    ],
    "correctAnswer": 1,
    "explanationEn": "Different thresholds for adolescent girls and boys define anemia.",
    "explanationHi": "National Nutrition Mission।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-596",
    "questionEn": "Obesity in children is defined as BMI:",
    "questionHi": "पोषण अभियान के लक्ष्य क्या हैं?",
    "optionsEn": [
      "Above 85th percentile",
      "Above 95th percentile",
      "Above 50th percentile",
      "Below 5th percentile"
    ],
    "optionsHi": [
      "कोई लक्ष्य नहीं",
      "Stunting, Undernutrition, Anemia, LBW कम करना",
      "केवल मोटापा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "BMI above 95th percentile indicates obesity in children.",
    "explanationHi": "POSHAN targets।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-597",
    "questionEn": "Oral health screening in schools checks for:",
    "questionHi": "पोषण माह (POSHAN Maah) कब मनाया जाता है?",
    "optionsEn": [
      "Only cavities",
      "Caries, gum disease, malocclusion",
      "Only color",
      "Only breath"
    ],
    "optionsHi": [
      "जनवरी",
      "सितंबर",
      "मार्च",
      "जून"
    ],
    "correctAnswer": 1,
    "explanationEn": "Comprehensive oral screening covers multiple conditions.",
    "explanationHi": "Nutrition Month।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-598",
    "questionEn": "School dropout due to illness can be prevented by:",
    "questionHi": "पहले 1000 दिन क्यों महत्वपूर्ण हैं?",
    "optionsEn": [
      "Ignoring illness",
      "School health services and addressing health barriers",
      "Only punishment",
      "Only counseling"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "गर्भधारण से 2 वर्ष तक - मस्तिष्क विकास, आजीवन स्वास्थ्य की नींव",
      "केवल जन्म का दिन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Health services help children stay in school.",
    "explanationHi": "Window of opportunity।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-599",
    "questionEn": "Teacher training in health includes:",
    "questionHi": "गर्भवती महिला को विशेष पोषण क्यों चाहिए?",
    "optionsEn": [
      "Only subject teaching",
      "First aid, health education methods, referral",
      "Only administration",
      "Only discipline"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "शिशु के विकास, एनीमिया रोकथाम, प्रसव की तैयारी",
      "केवल स्वाद",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Teachers need health knowledge for supportive school environment.",
    "explanationHi": "Maternal nutrition।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-600",
    "questionEn": "Theory of Planned Behavior includes:",
    "questionHi": "MPHW का पोषण में क्या योगदान है?",
    "optionsEn": [
      "Only intention",
      "Attitude, subjective norms, perceived behavioral control",
      "Only knowledge",
      "Only skills"
    ],
    "optionsHi": [
      "कोई योगदान नहीं",
      "पोषण शिक्षा, निगरानी, रेफरल, ICDS के साथ समन्वय",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "TPB considers multiple factors influencing behavioral intention.",
    "explanationHi": "Nutrition support।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-601",
    "questionEn": "Health Belief Model components include:",
    "questionHi": "गर्भावस्था में वजन कितना बढ़ना चाहिए?",
    "optionsEn": [
      "Only susceptibility",
      "Perceived susceptibility, severity, benefits, barriers",
      "Only benefits",
      "Only barriers"
    ],
    "optionsHi": [
      "2-3 kg",
      "10-12 kg (सामान्य BMI में)",
      "20-25 kg",
      "कोई वृद्धि नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HBM considers multiple perceptions influencing health behavior.",
    "explanationHi": "Healthy weight gain।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-602",
    "questionEn": "Social Cognitive Theory emphasizes:",
    "questionHi": "गर्भवती को प्रतिदिन कितनी अतिरिक्त कैलोरी चाहिए?",
    "optionsEn": [
      "Only knowledge",
      "Observational learning and self-efficacy",
      "Only punishment",
      "Only reward"
    ],
    "optionsHi": [
      "कोई अतिरिक्त नहीं",
      "300-350 kcal अतिरिक्त (दूसरी और तीसरी तिमाही में)",
      "1000 kcal",
      "50 kcal"
    ],
    "correctAnswer": 1,
    "explanationEn": "SCT highlights learning from observation and confidence in ability.",
    "explanationHi": "Extra energy।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-603",
    "questionEn": "Transtheoretical Model stages include:",
    "questionHi": "स्तनपान कराने वाली मां को कितनी अतिरिक्त कैलोरी चाहिए?",
    "optionsEn": [
      "Only action",
      "Precontemplation, contemplation, preparation, action, maintenance",
      "Only maintenance",
      "Only awareness"
    ],
    "optionsHi": [
      "कोई अतिरिक्त नहीं",
      "500-600 kcal अतिरिक्त",
      "100 kcal",
      "1500 kcal"
    ],
    "correctAnswer": 1,
    "explanationEn": "TTM describes stages of behavior change readiness.",
    "explanationHi": "Lactation needs।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-604",
    "questionEn": "Social mobilization involves:",
    "questionHi": "LBW (Low Birth Weight) क्या है?",
    "optionsEn": [
      "Only government action",
      "Engaging community members in health action",
      "Only healthcare workers",
      "Only NGOs"
    ],
    "optionsHi": [
      "4 kg से अधिक",
      "2.5 kg से कम जन्म वजन",
      "3 kg",
      "5 kg"
    ],
    "correctAnswer": 1,
    "explanationEn": "Social mobilization engages community in planning and action.",
    "explanationHi": "Low birth weight।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-605",
    "questionEn": "Advocacy in health programs aims to:",
    "questionHi": "LBW के कारण क्या हैं?",
    "optionsEn": [
      "Treat illness",
      "Influence policy and resource allocation",
      "Only educate",
      "Only research"
    ],
    "optionsHi": [
      "अच्छा पोषण",
      "मातृ कुपोषण, एनीमिया, संक्रमण, किशोर गर्भावस्था, धूम्रपान",
      "स्वस्थ मां",
      "कोई कारण नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Advocacy seeks policy change and resource commitment.",
    "explanationHi": "LBW causes।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-606",
    "questionEn": "Mass media for health communication includes:",
    "questionHi": "KMC (Kangaroo Mother Care) क्या है?",
    "optionsEn": [
      "Only interpersonal",
      "Radio, TV, newspapers, social media",
      "Only print",
      "Only digital"
    ],
    "optionsHi": [
      "इनक्यूबेटर",
      "LBW/प्रीटर्म बच्चे को मां की छाती पर त्वचा से त्वचा संपर्क",
      "सामान्य देखभाल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mass media reaches large audiences through various channels.",
    "explanationHi": "Skin-to-skin।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-607",
    "questionEn": "Social media for health reaches:",
    "questionHi": "KMC के लाभ क्या हैं?",
    "optionsEn": [
      "Only elderly",
      "Wide audience especially youth",
      "No one effectively",
      "Only rural areas"
    ],
    "optionsHi": [
      "कोई लाभ नहीं",
      "गर्माहट, स्तनपान प्रोत्साहन, संक्रमण कम, बंधन",
      "केवल गर्माहट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Social media effectively engages younger populations.",
    "explanationHi": "KMC benefits।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-608",
    "questionEn": "Mid-media includes:",
    "questionHi": "विकास निगरानी (Growth Monitoring) क्यों जरूरी है?",
    "optionsEn": [
      "TV only",
      "Folk media, street plays, exhibitions",
      "Radio only",
      "Newspapers only"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "कुपोषण का शीघ्र पता लगाना, विकास ट्रैक करना",
      "केवल औपचारिकता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mid-media bridges mass and interpersonal communication.",
    "explanationHi": "Early detection।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-609",
    "questionEn": "Flipchart is useful for:",
    "questionHi": "विकास चार्ट (Growth Chart) में क्या देखते हैं?",
    "optionsEn": [
      "Mass communication",
      "Small group education with visuals",
      "Radio broadcast",
      "TV program"
    ],
    "optionsHi": [
      "केवल उम्र",
      "वजन, लंबाई, सिर परिधि और उनकी वृद्धि प्रवृत्ति",
      "केवल रंग",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Flipcharts support visual learning in small groups.",
    "explanationHi": "Growth parameters।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-610",
    "questionEn": "Health talk effectiveness depends on:",
    "questionHi": "MCP Card क्या है?",
    "optionsEn": [
      "Only speaker knowledge",
      "Content, delivery, audience engagement",
      "Only length",
      "Only visuals"
    ],
    "optionsHi": [
      "बैंक कार्ड",
      "Mother and Child Protection Card (मां-बच्चे का स्वास्थ्य रिकॉर्ड)",
      "पहचान पत्र",
      "राशन कार्ड"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple factors determine health talk effectiveness.",
    "explanationHi": "MCH record।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-611",
    "questionEn": "Primary prevention of waterborne diseases includes:",
    "questionHi": "ANC (Antenatal Care) क्या है?",
    "optionsEn": [
      "Treating illness",
      "Safe water supply and sanitation",
      "Only medication",
      "Only hospitalization"
    ],
    "optionsHi": [
      "प्रसव के बाद",
      "गर्भावस्था के दौरान देखभाल",
      "बच्चे की देखभाल",
      "बुजुर्गों की देखभाल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Preventing contamination prevents waterborne disease occurrence.",
    "explanationHi": "Pregnancy care।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-612",
    "questionEn": "Secondary prevention of TB includes:",
    "questionHi": "ANC में कम से कम कितने चेकअप होने चाहिए?",
    "optionsEn": [
      "BCG vaccination",
      "Early case detection and treatment",
      "Contact prevention",
      "Rehabilitation"
    ],
    "optionsHi": [
      "1",
      "कम से कम 4 (WHO सिफारिश 8)",
      "10",
      "0"
    ],
    "correctAnswer": 1,
    "explanationEn": "Finding and treating TB cases early is secondary prevention.",
    "explanationHi": "ANC visits।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-613",
    "questionEn": "Tertiary prevention of diabetes includes:",
    "questionHi": "ANC में कौन सी जांचें होती हैं?",
    "optionsEn": [
      "Screening",
      "Preventing complications through management",
      "Primary prevention",
      "Vaccination"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "वजन, BP, Hb, पेशाब, पेट जांच, शिशु हृदय गति",
      "केवल वजन",
      "केवल BP"
    ],
    "correctAnswer": 1,
    "explanationEn": "Managing diabetes to prevent complications is tertiary prevention.",
    "explanationHi": "ANC checkups।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-614",
    "questionEn": "Notifiable disease must be reported to:",
    "questionHi": "गर्भावस्था में खतरे के संकेत क्या हैं?",
    "optionsEn": [
      "Nobody",
      "Health authorities",
      "Only hospitals",
      "Only police"
    ],
    "optionsHi": [
      "कोई नहीं",
      "रक्तस्राव, तीव्र सिरदर्द, धुंधला दिखना, सूजन, बुखार, शिशु हिलना कम",
      "हल्का दर्द",
      "सामान्य थकान"
    ],
    "correctAnswer": 1,
    "explanationEn": "Notifiable diseases require mandatory reporting to health authorities.",
    "explanationHi": "Danger signs।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-615",
    "questionEn": "Integrated Disease Surveillance Programme monitors:",
    "questionHi": "प्री-एक्लेम्पसिया क्या है?",
    "optionsEn": [
      "Only one disease",
      "Multiple diseases through unified system",
      "Only TB",
      "Only malaria"
    ],
    "optionsHi": [
      "सामान्य स्थिति",
      "गर्भावस्था में उच्च रक्तचाप + प्रोटीनमेह (गंभीर जटिलता)",
      "डायबिटीज",
      "एनीमिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "IDSP integrates surveillance for multiple priority diseases.",
    "explanationHi": "Hypertensive disorder।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-616",
    "questionEn": "Disease outbreak report should include:",
    "questionHi": "एक्लेम्पसिया क्या है?",
    "optionsEn": [
      "Only case count",
      "Cases, timeline, location, response, outcomes",
      "Only treatment given",
      "Only deaths"
    ],
    "optionsHi": [
      "हल्का BP",
      "प्री-एक्लेम्पसिया + दौरे (जीवन के लिए खतरा)",
      "सामान्य",
      "एनीमिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "Complete outbreak reporting includes multiple data elements.",
    "explanationHi": "Seizures।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-617",
    "questionEn": "Attack rate in outbreak is:",
    "questionHi": "GDM (Gestational Diabetes) क्या है?",
    "optionsEn": [
      "Death rate",
      "Number of cases per population at risk",
      "Only hospitalization",
      "Recovery rate"
    ],
    "optionsHi": [
      "पहले से डायबिटीज",
      "गर्भावस्था में पहली बार पाई गई डायबिटीज",
      "प्रसव के बाद",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Attack rate = Cases / Population at risk x 100.",
    "explanationHi": "Pregnancy diabetes।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-618",
    "questionEn": "Case fatality rate measures:",
    "questionHi": "सुरक्षित प्रसव के लिए क्या जरूरी है?",
    "optionsEn": [
      "New cases",
      "Deaths among those with disease",
      "All deaths",
      "Recovery"
    ],
    "optionsHi": [
      "घर पर अकेले",
      "प्रशिक्षित व्यक्ति, स्वच्छ वातावरण, आपातकालीन तैयारी",
      "कोई तैयारी नहीं",
      "कुछ भी"
    ],
    "correctAnswer": 1,
    "explanationEn": "CFR = Deaths from disease / Cases x 100.",
    "explanationHi": "Safe delivery।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-619",
    "questionEn": "Surgical site antisepsis uses:",
    "questionHi": "संस्थागत प्रसव (Institutional Delivery) क्यों बेहतर है?",
    "optionsEn": [
      "Plain water",
      "Chlorhexidine or povidone-iodine",
      "Soap only",
      "Nothing"
    ],
    "optionsHi": [
      "कोई फायदा नहीं",
      "प्रशिक्षित स्टाफ, जटिलताओं का तुरंत प्रबंधन, स्वच्छता",
      "केवल खर्च",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Antiseptic solutions reduce skin microorganisms before surgery.",
    "explanationHi": "Facility delivery।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-620",
    "questionEn": "Povidone-iodine concentration for skin antisepsis is:",
    "questionHi": "जन्म के तुरंत बाद नवजात की आवश्यक देखभाल क्या है?",
    "optionsEn": [
      "1%",
      "5-10%",
      "50%",
      "0.1%"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "सुखाना, गर्म रखना, त्वचा से त्वचा संपर्क, स्तनपान, नाभि देखभाल",
      "केवल नहलाना",
      "अलग रखना"
    ],
    "correctAnswer": 1,
    "explanationEn": "5-10% povidone-iodine used for skin antisepsis.",
    "explanationHi": "Essential newborn care।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-621",
    "questionEn": "Chlorhexidine for hand antisepsis is typically:",
    "questionHi": "नवजात शिशु में खतरे के संकेत क्या हैं?",
    "optionsEn": [
      "0.5%",
      "2-4%",
      "20%",
      "50%"
    ],
    "optionsHi": [
      "सामान्य रोना",
      "स्तनपान न करना, बुखार/ठंडा, सुस्ती, तेज सांस, पीलिया",
      "अच्छी नींद",
      "सामान्य मल"
    ],
    "correctAnswer": 1,
    "explanationEn": "2-4% chlorhexidine gluconate used for surgical hand preparation.",
    "explanationHi": "Newborn danger signs।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-622",
    "questionEn": "Hand hygiene audit tool checks:",
    "questionHi": "नवजात पीलिया (Neonatal Jaundice) क्या है?",
    "optionsEn": [
      "Only soap availability",
      "Compliance with hand hygiene moments and technique",
      "Only training",
      "Only knowledge"
    ],
    "optionsHi": [
      "त्वचा रोग",
      "नवजात में बिलीरुबिन बढ़ने से त्वचा/आंखें पीली",
      "सामान्य",
      "दस्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "Audit tools assess actual hand hygiene practices comprehensively.",
    "explanationHi": "Hyperbilirubinemia।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-623",
    "questionEn": "Feedback on hand hygiene compliance helps:",
    "questionHi": "नवजात पीलिया में फोटोथेरेपी कब जरूरी है?",
    "optionsEn": [
      "Nothing",
      "Improve practices through awareness of performance",
      "Reduce practice",
      "Only documentation"
    ],
    "optionsHi": [
      "सभी को",
      "बिलीरुबिन स्तर उच्च होने पर (गंभीर पीलिया)",
      "कभी नहीं",
      "हल्के पीलिया में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Feedback motivates improvement in hand hygiene.",
    "explanationHi": "Phototherapy indication।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-624",
    "questionEn": "Dermatitis from frequent handwashing can be prevented by:",
    "questionHi": "PNC (Postnatal Care) क्या है?",
    "optionsEn": [
      "Stopping washing",
      "Using moisturizers and appropriate products",
      "Wearing gloves always",
      "Washing more"
    ],
    "optionsHi": [
      "गर्भावस्था में",
      "प्रसव के बाद मां और बच्चे की देखभाल",
      "बुजुर्गों की देखभाल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Skin care products protect hands from irritant dermatitis.",
    "explanationHi": "Postpartum care।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-625",
    "questionEn": "Latex allergy in healthcare workers requires:",
    "questionHi": "प्रसव के बाद HBNC (Home Based Newborn Care) में कितने विज़िट होते हैं?",
    "optionsEn": [
      "More latex use",
      "Use of non-latex gloves",
      "No gloves",
      "Ignoring symptoms"
    ],
    "optionsHi": [
      "1",
      "7 विज़िट (दिन 1, 3, 7, 14, 21, 28, 42)",
      "10",
      "0"
    ],
    "correctAnswer": 1,
    "explanationEn": "Non-latex alternatives (nitrile, vinyl) for latex allergic staff.",
    "explanationHi": "HBNC visits।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-626",
    "questionEn": "Foot hygiene is important for diabetics because:",
    "questionHi": "PPH (Postpartum Hemorrhage) क्या है?",
    "optionsEn": [
      "Cosmetic reasons",
      "Reduced sensation increases infection risk",
      "Only comfort",
      "No special reason"
    ],
    "optionsHi": [
      "गर्भावस्था में रक्तस्राव",
      "प्रसव के बाद अत्यधिक रक्तस्राव (500ml से अधिक)",
      "सामान्य रक्तस्राव",
      "मासिक धर्म"
    ],
    "correctAnswer": 1,
    "explanationEn": "Diabetic neuropathy and poor circulation increase foot infection risk.",
    "explanationHi": "Postpartum bleeding।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-627",
    "questionEn": "Proper footwear protects against:",
    "questionHi": "मातृ मृत्यु के प्रमुख कारण क्या हैं?",
    "optionsEn": [
      "Nothing",
      "Injuries, hookworm, fungal infections",
      "Only cold",
      "Only heat"
    ],
    "optionsHi": [
      "दुर्घटना",
      "रक्तस्राव, संक्रमण, उच्च रक्तचाप, असुरक्षित गर्भपात, प्रसव बाधा",
      "कैंसर",
      "हृदय रोग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Footwear prevents various foot health problems.",
    "explanationHi": "Causes of maternal death।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-628",
    "questionEn": "Clean undergarments should be worn:",
    "questionHi": "3 विलंब (Three Delays) मातृ मृत्यु में क्या हैं?",
    "optionsEn": [
      "Weekly",
      "Daily",
      "Monthly",
      "Never changed"
    ],
    "optionsHi": [
      "कोई विलंब नहीं",
      "मदद लेने का निर्णय, सुविधा तक पहुंचना, सुविधा में उपचार पाना",
      "एक विलंब",
      "दो विलंब"
    ],
    "correctAnswer": 1,
    "explanationEn": "Daily changing of undergarments maintains hygiene.",
    "explanationHi": "Three delays model।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-629",
    "questionEn": "Water sample collection for testing requires:",
    "questionHi": "परिवार नियोजन (Family Planning) क्या है?",
    "optionsEn": [
      "Any container",
      "Sterile container with proper technique",
      "Dirty bottle",
      "No special method"
    ],
    "optionsHi": [
      "बच्चे पैदा करना",
      "बच्चों की संख्या और अंतर तय करने की स्वतंत्रता",
      "जबरदस्ती",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Proper collection prevents contamination affecting results.",
    "explanationHi": "Reproductive choice।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-630",
    "questionEn": "Ortho-tolidine test detects:",
    "questionHi": "परिवार नियोजन के लाभ क्या हैं?",
    "optionsEn": [
      "Bacteria",
      "Residual chlorine in water",
      "Turbidity",
      "pH"
    ],
    "optionsHi": [
      "कोई लाभ नहीं",
      "मातृ-शिशु स्वास्थ्य, जनसंख्या नियंत्रण, आर्थिक सुधार",
      "केवल जनसंख्या",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "OT test gives yellow color indicating residual chlorine.",
    "explanationHi": "FP benefits।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-631",
    "questionEn": "DPD method for chlorine testing gives:",
    "questionHi": "दो बच्चों के बीच कितना अंतर होना चाहिए?",
    "optionsEn": [
      "Blue color",
      "Pink/red color with chlorine",
      "No color",
      "Yellow color"
    ],
    "optionsHi": [
      "1 वर्ष",
      "कम से कम 3 वर्ष",
      "6 महीने",
      "कोई अंतर नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "DPD reagent produces pink-red with free chlorine.",
    "explanationHi": "Birth spacing।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-632",
    "questionEn": "Combined chlorine is:",
    "questionHi": "गर्भनिरोधक विधियों के प्रकार क्या हैं?",
    "optionsEn": [
      "Free chlorine",
      "Chlorine combined with nitrogen compounds",
      "Total chlorine",
      "Residual chlorine"
    ],
    "optionsHi": [
      "एक प्रकार",
      "अस्थायी (कंडोम, OCP, IUCD, इंजेक्शन) और स्थायी (नसबंदी)",
      "कोई नहीं",
      "केवल स्थायी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Combined chlorine = chloramines formed with ammonia/organics.",
    "explanationHi": "FP methods।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-633",
    "questionEn": "Free chlorine is more effective than combined because:",
    "questionHi": "कंडोम का दोहरा लाभ क्या है?",
    "optionsEn": [
      "It's cheaper",
      "It's a stronger disinfectant",
      "It tastes better",
      "It's safer"
    ],
    "optionsHi": [
      "केवल गर्भनिरोध",
      "गर्भनिरोध + STI/HIV रोकथाम",
      "केवल STI रोकथाम",
      "कोई लाभ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Free chlorine has greater disinfecting power than chloramines.",
    "explanationHi": "Dual protection।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-634",
    "questionEn": "Super chlorination involves:",
    "questionHi": "OCP (Oral Contraceptive Pill) कैसे काम करती है?",
    "optionsEn": [
      "Normal dosing",
      "High chlorine dose for contaminated water",
      "No chlorine",
      "Dechlorination only"
    ],
    "optionsHi": [
      "शुक्राणु मारती है",
      "ओव्यूलेशन रोकती है",
      "गर्भाशय निकालती है",
      "कुछ नहीं करती"
    ],
    "correctAnswer": 1,
    "explanationEn": "Super chlorination uses high doses for heavily contaminated water.",
    "explanationHi": "Prevents ovulation।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-635",
    "questionEn": "Dechlorination removes excess chlorine using:",
    "questionHi": "IUCD क्या है?",
    "optionsEn": [
      "More chlorine",
      "Sodium thiosulfate or activated carbon",
      "Heat",
      "Sunlight only"
    ],
    "optionsHi": [
      "गोली",
      "Intrauterine Contraceptive Device (गर्भाशय में डिवाइस)",
      "इंजेक्शन",
      "कंडोम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Thiosulfate or carbon removes excess chlorine after treatment.",
    "explanationHi": "Copper-T।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-636",
    "questionEn": "Water storage tank should be cleaned every:",
    "questionHi": "Cu-IUCD कितने वर्षों के लिए प्रभावी है?",
    "optionsEn": [
      "Never",
      "6 months to 1 year",
      "Daily",
      "Every 5 years"
    ],
    "optionsHi": [
      "1 वर्ष",
      "Cu-T 380A = 10 वर्ष",
      "1 महीना",
      "1 सप्ताह"
    ],
    "correctAnswer": 1,
    "explanationEn": "Regular tank cleaning prevents sediment and biofilm buildup.",
    "explanationHi": "Long-acting।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-637",
    "questionEn": "Water testing frequency depends on:",
    "questionHi": "PPIUCD क्या है?",
    "optionsEn": [
      "Nothing",
      "Source type, population served, previous results",
      "Only cost",
      "Only season"
    ],
    "optionsHi": [
      "गर्भावस्था में",
      "प्रसव के बाद 48 घंटे के भीतर IUCD डालना",
      "गर्भपात के बाद",
      "कभी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Testing frequency based on risk and requirements.",
    "explanationHi": "Postpartum IUCD।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-638",
    "questionEn": "Sanitary well cover prevents:",
    "questionHi": "इंजेक्टेबल गर्भनिरोधक (DMPA/Antara) कितने समय के लिए प्रभावी है?",
    "optionsEn": [
      "Nothing",
      "Surface contamination and animal access",
      "Ground water entry",
      "Pumping"
    ],
    "optionsHi": [
      "1 सप्ताह",
      "3 महीने",
      "1 वर्ष",
      "10 वर्ष"
    ],
    "correctAnswer": 1,
    "explanationEn": "Covered wells protected from surface contamination.",
    "explanationHi": "DMPA duration।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-639",
    "questionEn": "Latrine pit cover should be:",
    "questionHi": "महिला नसबंदी (Tubectomy) क्या है?",
    "optionsEn": [
      "Open always",
      "Closed to prevent fly access",
      "Partial",
      "Removed"
    ],
    "optionsHi": [
      "अस्थायी विधि",
      "फैलोपियन ट्यूब को बांधना/काटना (स्थायी)",
      "IUCD",
      "गोली"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pit cover prevents fly breeding and odor.",
    "explanationHi": "Female sterilization।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-640",
    "questionEn": "Toilet ventilation pipe diameter should be:",
    "questionHi": "पुरुष नसबंदी (Vasectomy) क्या है?",
    "optionsEn": [
      "Very small",
      "At least 100mm (4 inches)",
      "Same as water pipe",
      "No standard"
    ],
    "optionsHi": [
      "अस्थायी विधि",
      "वास डेफरेंस को काटना/बांधना (स्थायी)",
      "कंडोम",
      "गोली"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adequate diameter ensures effective odor ventilation.",
    "explanationHi": "Male sterilization।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-641",
    "questionEn": "Toilet construction materials should be:",
    "questionHi": "NSV (No-Scalpel Vasectomy) क्या है?",
    "optionsEn": [
      "Only expensive",
      "Durable, cleanable, locally available",
      "Only imported",
      "Only concrete"
    ],
    "optionsHi": [
      "महिला नसबंदी",
      "बिना चीरे की पुरुष नसबंदी (कम जटिलताएं)",
      "IUCD",
      "OCP"
    ],
    "correctAnswer": 1,
    "explanationEn": "Materials should be practical, durable, and appropriate for context.",
    "explanationHi": "Minimally invasive।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-642",
    "questionEn": "Handwashing station near toilet should have:",
    "questionHi": "आपातकालीन गर्भनिरोधक (ECP) कब उपयोग करें?",
    "optionsEn": [
      "Only bucket",
      "Water, soap, drainage",
      "Nothing special",
      "Only sign"
    ],
    "optionsHi": [
      "नियमित रूप से",
      "असुरक्षित संबंध के 72 घंटे के भीतर",
      "गर्भावस्था में",
      "प्रसव के बाद"
    ],
    "correctAnswer": 1,
    "explanationEn": "Complete handwashing facility enables hygiene after toilet use.",
    "explanationHi": "Emergency contraception।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-643",
    "questionEn": "Gender-sensitive toilet design includes:",
    "questionHi": "LAM (Lactational Amenorrhea Method) क्या है?",
    "optionsEn": [
      "Same for all",
      "Privacy, safety, menstrual hygiene facilities",
      "Male only features",
      "No difference needed"
    ],
    "optionsHi": [
      "गोली",
      "केवल स्तनपान से गर्भनिरोध (6 महीने तक, शर्तों के साथ)",
      "IUCD",
      "कंडोम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Women's toilets need additional features for safety and MHM.",
    "explanationHi": "Breastfeeding method।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-644",
    "questionEn": "School toilet door should:",
    "questionHi": "MTP Act क्या है?",
    "optionsEn": [
      "Have no lock",
      "Lock from inside for privacy",
      "Be transparent",
      "Be removed"
    ],
    "optionsHi": [
      "परिवार नियोजन कानून",
      "Medical Termination of Pregnancy Act (कानूनी गर्भपात)",
      "टीकाकरण कानून",
      "स्वच्छता कानून"
    ],
    "correctAnswer": 1,
    "explanationEn": "Inside locking provides necessary privacy for users.",
    "explanationHi": "Abortion law।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-645",
    "questionEn": "Toilet cleaning frequency should be:",
    "questionHi": "MTP कितने सप्ताह तक कानूनी है (सामान्य परिस्थितियों में)?",
    "optionsEn": [
      "Monthly",
      "Daily or more in high-use facilities",
      "Yearly",
      "Never"
    ],
    "optionsHi": [
      "4 सप्ताह",
      "20 सप्ताह (विशेष मामलों में 24 सप्ताह)",
      "40 सप्ताह",
      "कभी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Regular cleaning maintains hygiene especially in public toilets.",
    "explanationHi": "MTP limit।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-646",
    "questionEn": "Disinfectant for toilet cleaning includes:",
    "questionHi": "असुरक्षित गर्भपात के खतरे क्या हैं?",
    "optionsEn": [
      "Plain water only",
      "Bleach solution or commercial disinfectants",
      "Only soap",
      "Only detergent"
    ],
    "optionsHi": [
      "कोई खतरा नहीं",
      "संक्रमण, रक्तस्राव, बांझपन, मृत्यु",
      "बेहतर स्वास्थ्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Disinfectants kill pathogens on toilet surfaces.",
    "explanationHi": "Unsafe abortion risks।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-647",
    "questionEn": "Toilet cleaning staff need:",
    "questionHi": "PCPNDT Act क्या है?",
    "optionsEn": [
      "No protection",
      "Gloves, boots, and training",
      "Only gloves",
      "Only mask"
    ],
    "optionsHi": [
      "गर्भनिरोध कानून",
      "लिंग चयन और भ्रूण हत्या रोकथाम कानून",
      "टीकाकरण कानून",
      "स्वच्छता कानून"
    ],
    "correctAnswer": 1,
    "explanationEn": "PPE and training protect sanitation workers.",
    "explanationHi": "Sex selection ban।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-648",
    "questionEn": "Sanitary napkin disposal in toilets should use:",
    "questionHi": "बांझपन (Infertility) क्या है?",
    "optionsEn": [
      "Flushing",
      "Dedicated bin with lid or incinerator",
      "Regular bin",
      "Open disposal"
    ],
    "optionsHi": [
      "तुरंत गर्भधारण",
      "1 वर्ष असुरक्षित संबंध के बाद भी गर्भधारण न होना",
      "गर्भनिरोध",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Proper disposal prevents blockage and maintains hygiene.",
    "explanationHi": "Infertility definition।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-649",
    "questionEn": "Waste audit determines:",
    "questionHi": "बांझपन के कारण किसमें हो सकते हैं?",
    "optionsEn": [
      "Weight only",
      "Types, quantities, and composition of waste",
      "Color only",
      "Smell only"
    ],
    "optionsHi": [
      "केवल महिला",
      "महिला, पुरुष, या दोनों में",
      "केवल पुरुष",
      "कोई कारण नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Waste audit provides data for management planning.",
    "explanationHi": "Both partners।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-650",
    "questionEn": "Per capita waste generation in India is approximately:",
    "questionHi": "RTI/STI क्या हैं?",
    "optionsEn": [
      "100 grams/day",
      "300-500 grams/day",
      "2 kg/day",
      "5 kg/day"
    ],
    "optionsHi": [
      "श्वसन संक्रमण",
      "Reproductive Tract/Sexually Transmitted Infections",
      "त्वचा संक्रमण",
      "आंख संक्रमण"
    ],
    "correctAnswer": 1,
    "explanationEn": "Average Indian generates about 300-500g waste daily.",
    "explanationHi": "Genital infections।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-651",
    "questionEn": "Organic fraction of municipal solid waste is typically:",
    "questionHi": "RTI के लक्षण क्या हैं?",
    "optionsEn": [
      "10%",
      "40-60%",
      "90%",
      "5%"
    ],
    "optionsHi": [
      "खांसी",
      "असामान्य स्राव, खुजली, दर्द, घाव",
      "बुखार केवल",
      "दस्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "40-60% of MSW in India is organic/biodegradable.",
    "explanationHi": "RTI symptoms।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-652",
    "questionEn": "Recyclables in MSW include:",
    "questionHi": "RTI से बचाव कैसे करें?",
    "optionsEn": [
      "Food only",
      "Paper, plastic, metal, glass",
      "Organic only",
      "Nothing"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "व्यक्तिगत स्वच्छता, कंडोम, एक साथी, शीघ्र उपचार",
      "असुरक्षित संबंध",
      "कोई सावधानी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple materials can be recycled from waste stream.",
    "explanationHi": "RTI prevention।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-653",
    "questionEn": "Inerts in MSW include:",
    "questionHi": "मासिक धर्म स्वच्छता (Menstrual Hygiene) क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Food waste",
      "Construction debris, dust, stones",
      "Paper",
      "Plastic"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "संक्रमण रोकथाम, स्वास्थ्य, गरिमा",
      "केवल सामाजिक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Inerts are non-biodegradable, non-recyclable materials.",
    "explanationHi": "MHM importance।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-654",
    "questionEn": "Door-to-door collection advantages include:",
    "questionHi": "MHM Day कब है?",
    "optionsEn": [
      "No benefits",
      "Better segregation, cleaner streets",
      "More cost",
      "Less participation"
    ],
    "optionsHi": [
      "28 मई",
      "28 जून",
      "28 जुलाई",
      "28 अगस्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "Doorstep collection improves compliance and source segregation.",
    "explanationHi": "Menstrual Hygiene Day।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-655",
    "questionEn": "Community bin collection problems include:",
    "questionHi": "सैनिटरी पैड/कपड़ा बदलने की सिफारिश कितने घंटे में है?",
    "optionsEn": [
      "Too clean",
      "Overflow, scattering, poor segregation",
      "Too efficient",
      "No problems"
    ],
    "optionsHi": [
      "24 घंटे",
      "4-6 घंटे में बदलें",
      "1 सप्ताह",
      "कभी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Community bins often have overflow and mixing of waste.",
    "explanationHi": "Regular change।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-656",
    "questionEn": "Transfer station purpose is:",
    "questionHi": "सैनिटरी अपशिष्ट का निपटान कैसे करें?",
    "optionsEn": [
      "Final disposal",
      "Consolidating waste for transport to disposal site",
      "Treatment",
      "Recycling only"
    ],
    "optionsHi": [
      "खुले में फेंकना",
      "कागज में लपेटकर कूड़ेदान में, इंसिनरेटर",
      "शौचालय में",
      "नाली में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Transfer stations enable efficient transport to distant disposal.",
    "explanationHi": "Safe disposal।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-657",
    "questionEn": "Sanitary landfill differs from dump by:",
    "questionHi": "स्कूल में लड़कियों के लिए सैनिटरी पैड वितरण किस योजना में है?",
    "optionsEn": [
      "No difference",
      "Engineered design with liner, cover, leachate management",
      "Only location",
      "Only size"
    ],
    "optionsHi": [
      "मिड-डे मील",
      "Udaan/SABLA, राज्य योजनाएं",
      "स्कॉलरशिप",
      "कोई योजना नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sanitary landfills have environmental protection features.",
    "explanationHi": "MHM programmes।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-658",
    "questionEn": "Landfill gas contains mainly:",
    "questionHi": "MPHW का MCH (Maternal and Child Health) में क्या योगदान है?",
    "optionsEn": [
      "Oxygen",
      "Methane and carbon dioxide",
      "Nitrogen only",
      "Hydrogen only"
    ],
    "optionsHi": [
      "कोई योगदान नहीं",
      "ANC/PNC सहायता, स्तनपान प्रोत्साहन, रेफरल, रजिस्ट्रेशन",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Decomposition produces methane (energy source) and CO2.",
    "explanationHi": "MCH support।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-659",
    "questionEn": "Food poisoning incubation period is usually:",
    "questionHi": "JSSK (Janani Shishu Suraksha Karyakram) में क्या मुफ्त है?",
    "optionsEn": [
      "Weeks",
      "Hours to days",
      "Months",
      "Years"
    ],
    "optionsHi": [
      "केवल दवाई",
      "प्रसव, दवाई, जांच, भोजन, परिवहन, रक्त",
      "कुछ नहीं",
      "केवल भोजन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Most food poisoning symptoms appear within hours to days.",
    "explanationHi": "Free entitlements।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-660",
    "questionEn": "Staphylococcal food poisoning incubation is:",
    "questionHi": "PMSMA (Pradhan Mantri Surakshit Matritva Abhiyan) क्या है?",
    "optionsEn": [
      "Days",
      "1-6 hours (short)",
      "Weeks",
      "Months"
    ],
    "optionsHi": [
      "टीकाकरण",
      "हर महीने 9 तारीख को मुफ्त ANC जांच",
      "पोषण कार्यक्रम",
      "परिवार नियोजन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Staph toxin causes rapid onset within 1-6 hours.",
    "explanationHi": "9th of every month।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-661",
    "questionEn": "Salmonella incubation period is:",
    "questionHi": "PMMVY (Pradhan Mantri Matru Vandana Yojana) क्या है?",
    "optionsEn": [
      "Minutes",
      "12-72 hours",
      "1 week",
      "1 month"
    ],
    "optionsHi": [
      "टीकाकरण",
      "गर्भवती/स्तनपान कराने वाली महिलाओं को नकद सहायता",
      "शिक्षा",
      "आवास"
    ],
    "correctAnswer": 1,
    "explanationEn": "Salmonella symptoms typically appear in 12-72 hours.",
    "explanationHi": "Maternity benefit।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-662",
    "questionEn": "Hepatitis A from food has incubation of:",
    "questionHi": "PMMVY में कितनी राशि मिलती है?",
    "optionsEn": [
      "Hours",
      "2-6 weeks",
      "1 day",
      "Months"
    ],
    "optionsHi": [
      "₹1000",
      "₹5000 (3 किस्तों में)",
      "₹10000",
      "₹500"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hepatitis A has longer incubation of 2-6 weeks.",
    "explanationHi": "Cash benefit।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-663",
    "questionEn": "Food samples for investigation should be:",
    "questionHi": "MAA (Mothers' Absolute Affection) कार्यक्रम क्या है?",
    "optionsEn": [
      "Discarded",
      "Collected and tested in laboratory",
      "Eaten",
      "Ignored"
    ],
    "optionsHi": [
      "परिवार नियोजन",
      "स्तनपान प्रोत्साहन कार्यक्रम",
      "टीकाकरण",
      "पोषण"
    ],
    "correctAnswer": 1,
    "explanationEn": "Suspected food samples tested to identify causative agent.",
    "explanationHi": "Breastfeeding promotion।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-664",
    "questionEn": "Food history in outbreak investigation covers:",
    "questionHi": "RBSK में 4Ds क्या हैं?",
    "optionsEn": [
      "Last hour only",
      "Foods consumed in incubation period",
      "Only main meals",
      "Nothing"
    ],
    "optionsHi": [
      "4 दवाइयां",
      "Defects, Diseases, Deficiencies, Development Delays",
      "4 विभाग",
      "4 डॉक्टर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Food history spans appropriate incubation period for suspect foods.",
    "explanationHi": "Child health screening।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-665",
    "questionEn": "Case-control study in outbreak compares:",
    "questionHi": "SNCU (Sick Newborn Care Unit) क्या है?",
    "optionsEn": [
      "Only cases",
      "Exposures between cases and non-cases",
      "Only controls",
      "No comparison"
    ],
    "optionsHi": [
      "वयस्क ICU",
      "बीमार नवजात शिशुओं की विशेष देखभाल इकाई",
      "OPD",
      "प्रसव कक्ष"
    ],
    "correctAnswer": 1,
    "explanationEn": "Comparing exposures identifies likely source.",
    "explanationHi": "Newborn ICU।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-666",
    "questionEn": "Cohort study in outbreak follows:",
    "questionHi": "NBS (Newborn Screening) क्या है?",
    "optionsEn": [
      "Only sick people",
      "Exposed group for disease development",
      "Only healthy people",
      "No one"
    ],
    "optionsHi": [
      "वजन मापना",
      "जन्मजात रोगों की जांच (हाइपोथायरॉयडिज्म आदि)",
      "टीकाकरण",
      "स्तनपान"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cohort approach follows exposed group to measure attack rates.",
    "explanationHi": "Metabolic screening।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-667",
    "questionEn": "Relative risk greater than 1 indicates:",
    "questionHi": "UHND (Urban Health and Nutrition Day) क्या है?",
    "optionsEn": [
      "No association",
      "Increased risk with exposure",
      "Decreased risk",
      "Protective effect"
    ],
    "optionsHi": [
      "ग्रामीण कार्यक्रम",
      "शहरी क्षेत्रों में मासिक स्वास्थ्य और पोषण दिवस",
      "त्योहार",
      "छुट्टी"
    ],
    "correctAnswer": 1,
    "explanationEn": "RR>1 shows exposure increases disease risk.",
    "explanationHi": "Urban outreach।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-668",
    "questionEn": "Odds ratio in case-control approximates:",
    "questionHi": "प्राथमिक चिकित्सा (First Aid) क्या है?",
    "optionsEn": [
      "Absolute risk",
      "Relative risk when disease is rare",
      "Incidence rate",
      "Prevalence"
    ],
    "optionsHi": [
      "अस्पताल में इलाज",
      "आपातकाल में तत्काल प्रारंभिक सहायता",
      "सर्जरी",
      "दवाई देना"
    ],
    "correctAnswer": 1,
    "explanationEn": "OR approximates RR in rare disease situations.",
    "explanationHi": "Immediate care।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-669",
    "questionEn": "Natural ventilation advantages include:",
    "questionHi": "प्राथमिक चिकित्सा के उद्देश्य क्या हैं?",
    "optionsEn": [
      "No benefits",
      "Low cost, sustainable, no energy needed",
      "High cost",
      "Requires electricity"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "जीवन बचाना, स्थिति बिगड़ने से रोकना, रिकवरी में मदद",
      "केवल दर्द कम करना",
      "कुछ भी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Natural ventilation is sustainable and costs nothing to operate.",
    "explanationHi": "First aid aims।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-670",
    "questionEn": "Mechanical ventilation is needed when:",
    "questionHi": "DRABC क्या है?",
    "optionsEn": [
      "Always",
      "Natural ventilation insufficient or climate extreme",
      "Never",
      "Only in rural areas"
    ],
    "optionsHi": [
      "दवाई",
      "Danger, Response, Airway, Breathing, Circulation (प्राथमिक जांच)",
      "बीमारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mechanical systems supplement when natural insufficient.",
    "explanationHi": "Primary survey।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-671",
    "questionEn": "HVAC system provides:",
    "questionHi": "CPR क्या है?",
    "optionsEn": [
      "Only heating",
      "Heating, ventilation, and air conditioning",
      "Only cooling",
      "Only ventilation"
    ],
    "optionsHi": [
      "दवाई",
      "Cardio-Pulmonary Resuscitation (हृदय-फुफ्फुसीय पुनर्जीवन)",
      "टीकाकरण",
      "सर्जरी"
    ],
    "correctAnswer": 1,
    "explanationEn": "HVAC integrates temperature and air quality control.",
    "explanationHi": "Life-saving।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-672",
    "questionEn": "Air filter in HVAC removes:",
    "questionHi": "CPR में छाती दबाने की दर क्या है?",
    "optionsEn": [
      "Heat",
      "Dust and particulates from circulated air",
      "Moisture only",
      "Odor only"
    ],
    "optionsHi": [
      "50 प्रति मिनट",
      "100-120 प्रति मिनट",
      "200 प्रति मिनट",
      "10 प्रति मिनट"
    ],
    "correctAnswer": 1,
    "explanationEn": "Filters capture particles improving indoor air quality.",
    "explanationHi": "Compression rate।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-673",
    "questionEn": "HEPA filter efficiency is:",
    "questionHi": "CPR में छाती दबाने और सांस का अनुपात क्या है (वयस्क)?",
    "optionsEn": [
      "50%",
      "99.97% for 0.3 micron particles",
      "80%",
      "30%"
    ],
    "optionsHi": [
      "15:2",
      "30:2",
      "5:1",
      "10:1"
    ],
    "correctAnswer": 1,
    "explanationEn": "HEPA captures 99.97% of particles 0.3 microns and larger.",
    "explanationHi": "Compression:breath।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-674",
    "questionEn": "Carbon filter in air purifier removes:",
    "questionHi": "रक्तस्राव (Bleeding) रोकने का पहला कदम क्या है?",
    "optionsEn": [
      "Particles",
      "Gases and odors through adsorption",
      "Bacteria only",
      "Nothing"
    ],
    "optionsHi": [
      "पानी डालना",
      "सीधा दबाव (Direct Pressure) लगाना",
      "टूर्निकेट",
      "कुछ नहीं करना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Activated carbon adsorbs volatile compounds and odors.",
    "explanationHi": "Direct pressure।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-675",
    "questionEn": "Relative humidity for comfort is:",
    "questionHi": "गंभीर रक्तस्राव में अंग को कैसे रखें?",
    "optionsEn": [
      "10-20%",
      "40-60%",
      "80-90%",
      "100%"
    ],
    "optionsHi": [
      "नीचे",
      "ऊंचा उठाकर (Elevation)",
      "समतल",
      "कोई फर्क नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "40-60% relative humidity is comfortable for most people.",
    "explanationHi": "Reduce bleeding।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-676",
    "questionEn": "Too low humidity causes:",
    "questionHi": "फ्रैक्चर (Fracture) के संकेत क्या हैं?",
    "optionsEn": [
      "Mold growth",
      "Dry skin, respiratory irritation",
      "Dampness",
      "Condensation"
    ],
    "optionsHi": [
      "बुखार",
      "दर्द, सूजन, विकृति, हिलाने में असमर्थता, क्रेपिटस",
      "खांसी",
      "दस्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "Low humidity dries mucous membranes and skin.",
    "explanationHi": "Fracture signs।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-677",
    "questionEn": "Too high humidity promotes:",
    "questionHi": "फ्रैक्चर में प्राथमिक उपचार क्या है?",
    "optionsEn": [
      "Dry conditions",
      "Mold and dust mite growth",
      "Fresh air",
      "Better health"
    ],
    "optionsHi": [
      "हिलाना",
      "इमोबिलाइज़ करना (Splint), बर्फ, ऊंचा रखना",
      "दबाना",
      "खींचना"
    ],
    "correctAnswer": 1,
    "explanationEn": "High humidity supports mold and allergen growth.",
    "explanationHi": "Immobilize।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-678",
    "questionEn": "Dehumidifier helps in:",
    "questionHi": "मोच (Sprain) में RICE क्या है?",
    "optionsEn": [
      "Dry climate",
      "Humid conditions to prevent mold",
      "Cold only",
      "Hot only"
    ],
    "optionsHi": [
      "चावल",
      "Rest, Ice, Compression, Elevation",
      "दवाई",
      "व्यायाम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dehumidifiers reduce excess moisture preventing mold.",
    "explanationHi": "Sprain treatment।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-679",
    "questionEn": "Vector control requires:",
    "questionHi": "जलने (Burns) की गंभीरता कैसे आंकते हैं?",
    "optionsEn": [
      "Only chemicals",
      "Integrated approach with multiple methods",
      "Only biological control",
      "Only source reduction"
    ],
    "optionsHi": [
      "केवल दर्द",
      "गहराई (Degree) और क्षेत्रफल (BSA)",
      "केवल रंग",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "IVM combines multiple strategies for sustainable control.",
    "explanationHi": "Burn assessment।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-680",
    "questionEn": "Chemical control in IVM should be:",
    "questionHi": "हल्के जलने (Minor Burns) में तुरंत क्या करें?",
    "optionsEn": [
      "First choice always",
      "Used judiciously as part of integrated strategy",
      "Never used",
      "Only method"
    ],
    "optionsHi": [
      "बर्फ लगाना",
      "बहते ठंडे पानी में 10-20 मिनट रखना",
      "तेल लगाना",
      "टूथपेस्ट"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chemicals are one component used when other methods insufficient.",
    "explanationHi": "Cool water।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-681",
    "questionEn": "Community participation in vector control includes:",
    "questionHi": "जलने पर क्या न लगाएं?",
    "optionsEn": [
      "Nothing",
      "Source reduction, reporting, personal protection",
      "Only spraying",
      "Only reporting"
    ],
    "optionsHi": [
      "ठंडा पानी",
      "तेल, मक्खन, टूथपेस्ट, बर्फ सीधे",
      "साफ कपड़ा",
      "बर्न क्रीम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Community action essential for sustained vector control.",
    "explanationHi": "Don't apply।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-682",
    "questionEn": "Intersectoral coordination for vector control involves:",
    "questionHi": "बिजली के झटके में पहले क्या करें?",
    "optionsEn": [
      "Only health department",
      "Health, urban development, water supply, education",
      "Only municipal",
      "Only private sector"
    ],
    "optionsHi": [
      "छूना",
      "पहले बिजली बंद करना/स्रोत से अलग करना (सुरक्षित तरीके से)",
      "पानी डालना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple sectors must coordinate for effective control.",
    "explanationHi": "Turn off power।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-683",
    "questionEn": "Climate change affects vector-borne diseases by:",
    "questionHi": "गला अवरुद्ध (Choking) होने पर क्या करें?",
    "optionsEn": [
      "No effect",
      "Changing vector distribution and transmission season",
      "Reducing diseases",
      "Only temperature effect"
    ],
    "optionsHi": [
      "पानी पिलाना",
      "पीठ पर थपकी (Back Blows), एब्डोमिनल थ्रस्ट (Heimlich)",
      "कुछ नहीं",
      "लेटाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Climate changes vector range, breeding, and disease patterns.",
    "explanationHi": "Choking relief।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-684",
    "questionEn": "Urban breeding sites for Aedes include:",
    "questionHi": "Heimlich Maneuver क्या है?",
    "optionsEn": [
      "Only rivers",
      "Tires, containers, construction sites",
      "Only forests",
      "Only rural ponds"
    ],
    "optionsHi": [
      "CPR",
      "पेट पर ऊपर की ओर दबाव (गला अवरुद्ध होने पर)",
      "बैक ब्लो",
      "मुंह से सांस"
    ],
    "correctAnswer": 1,
    "explanationEn": "Urban environments have many Aedes breeding containers.",
    "explanationHi": "Abdominal thrusts।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-685",
    "questionEn": "Desert cooler can breed Aedes if:",
    "questionHi": "दौरे (Seizure/Fits) में क्या करें?",
    "optionsEn": [
      "Water is changed daily",
      "Water allowed to stagnate",
      "Used properly",
      "Not used"
    ],
    "optionsHi": [
      "मुंह में कुछ डालना",
      "व्यक्ति को सुरक्षित करना, करवट पर लेटाना, मुंह में कुछ न डालना",
      "दबाना",
      "पानी डालना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Stagnant water in coolers provides Aedes breeding site.",
    "explanationHi": "Seizure first aid।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-686",
    "questionEn": "Flower pot trays should:",
    "questionHi": "Recovery Position (रिकवरी पोजीशन) क्या है?",
    "optionsEn": [
      "Have standing water",
      "Be emptied or have dry sand",
      "Collect rainwater",
      "Be large"
    ],
    "optionsHi": [
      "पीठ के बल",
      "बेहोश व्यक्ति को करवट पर लेटाना (वायुमार्ग खुला रखने के लिए)",
      "खड़ा करना",
      "बैठाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dry trays or sand prevents Aedes breeding.",
    "explanationHi": "Safe position।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-687",
    "questionEn": "Weekly dry day involves:",
    "questionHi": "हीट स्ट्रोक में प्राथमिक उपचार क्या है?",
    "optionsEn": [
      "No water use",
      "Emptying all water containers once a week",
      "Fasting",
      "Staying indoors"
    ],
    "optionsHi": [
      "गर्म रखना",
      "छाया में ले जाना, ठंडा करना, पानी पिलाना (होश में हो तो)",
      "व्यायाम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Weekly emptying breaks Aedes breeding cycle.",
    "explanationHi": "Cool down।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-688",
    "questionEn": "Reporting fever cases helps:",
    "questionHi": "डूबने (Drowning) से बचाए व्यक्ति में पहले क्या जांचें?",
    "optionsEn": [
      "Nothing",
      "Early detection of outbreaks",
      "Only statistics",
      "Only doctors"
    ],
    "optionsHi": [
      "वजन",
      "सांस ले रहा है या नहीं, CPR की जरूरत",
      "बुखार",
      "दस्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fever surveillance enables early outbreak response.",
    "explanationHi": "Check breathing।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-689",
    "questionEn": "Anganwadi worker role in child health includes:",
    "questionHi": "विषाक्तता (Poisoning) में तुरंत क्या करें?",
    "optionsEn": [
      "Only food distribution",
      "Growth monitoring, supplementary nutrition, health education",
      "Only education",
      "Only immunization"
    ],
    "optionsHi": [
      "उल्टी कराना",
      "जहर पहचानना, पॉइज़न कंट्रोल/अस्पताल संपर्क करना",
      "पानी पिलाना हमेशा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "AWW provides multiple child health and nutrition services.",
    "explanationHi": "Identify poison।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-690",
    "questionEn": "ICDS provides services for children aged:",
    "questionHi": "विषाक्तता में उल्टी कब न कराएं?",
    "optionsEn": [
      "Only infants",
      "0-6 years and pregnant/lactating women",
      "Only 5-10 years",
      "Only adolescents"
    ],
    "optionsHi": [
      "हमेशा कराएं",
      "जहरीले रसायन, पेट्रोलियम उत्पाद, बेहोश व्यक्ति में",
      "कभी नहीं",
      "सब में कराएं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ICDS targets young children and mothers.",
    "explanationHi": "Don't induce vomiting।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-691",
    "questionEn": "Supplementary nutrition program provides:",
    "questionHi": "आंख में कुछ गिरने पर क्या करें?",
    "optionsEn": [
      "Only education",
      "Additional food to address malnutrition",
      "Medicine",
      "Only vitamins"
    ],
    "optionsHi": [
      "रगड़ना",
      "साफ पानी से धोना, रगड़ना नहीं",
      "तेल डालना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SNP provides food supplements to undernourished children.",
    "explanationHi": "Wash eye।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-692",
    "questionEn": "Pre-school education in ICDS prepares children for:",
    "questionHi": "नाक से खून (Epistaxis) में क्या करें?",
    "optionsEn": [
      "Nothing",
      "School readiness through early learning",
      "Only play",
      "Only discipline"
    ],
    "optionsHi": [
      "सिर पीछे",
      "सीधे बैठाना, आगे झुकाना, नाक दबाना",
      "लेटाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "PSE develops school readiness through age-appropriate activities.",
    "explanationHi": "Lean forward।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-693",
    "questionEn": "Immunization schedule for children includes vaccines at:",
    "questionHi": "शॉक (Shock) के संकेत क्या हैं?",
    "optionsEn": [
      "Only birth",
      "Birth, 6 weeks, 10 weeks, 14 weeks, 9 months, etc.",
      "Only yearly",
      "Only once"
    ],
    "optionsHi": [
      "बुखार",
      "पीली/ठंडी त्वचा, तेज नाड़ी, कमजोर नाड़ी, भ्रम, प्यास",
      "खांसी",
      "दस्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple vaccines given at scheduled intervals.",
    "explanationHi": "Shock signs।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-694",
    "questionEn": "Growth faltering in child indicates:",
    "questionHi": "शॉक में प्राथमिक उपचार क्या है?",
    "optionsEn": [
      "Normal growth",
      "Deviation from expected growth pattern",
      "Overweight",
      "Nothing"
    ],
    "optionsHi": [
      "खड़ा करना",
      "लेटाना, पैर ऊंचे करना, गर्म रखना, तरल (होश में हो तो)",
      "दौड़ाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Growth faltering signals nutritional or health problems.",
    "explanationHi": "Shock position।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-695",
    "questionEn": "Child-to-child health approach involves:",
    "questionHi": "स्ट्रोक (Brain Attack) के संकेत क्या हैं?",
    "optionsEn": [
      "Only adults teaching",
      "Children educating peers on health",
      "No children involved",
      "Only doctors"
    ],
    "optionsHi": [
      "दस्त",
      "चेहरे का टेढ़ापन, बांह की कमजोरी, बोलने में कठिनाई (FAST)",
      "बुखार",
      "खांसी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Peer education among children promotes health behaviors.",
    "explanationHi": "Stroke signs।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-696",
    "questionEn": "Safe play area for children should be:",
    "questionHi": "FAST स्ट्रोक में क्या है?",
    "optionsEn": [
      "Near traffic",
      "Clean, supervised, age-appropriate equipment",
      "Dirty",
      "Unsupervised"
    ],
    "optionsHi": [
      "उपवास",
      "Face drooping, Arm weakness, Speech difficulty, Time to call emergency",
      "तेज चलना",
      "खाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Safe play areas promote physical activity without hazards.",
    "explanationHi": "Stroke recognition।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-697",
    "questionEn": "Handwashing habit formation in children is best through:",
    "questionHi": "हार्ट अटैक के संकेत क्या हैं?",
    "optionsEn": [
      "Punishment",
      "Practice, positive reinforcement, role modeling",
      "Only lectures",
      "Only posters"
    ],
    "optionsHi": [
      "दस्त",
      "छाती में दर्द/दबाव, बांह/जबड़े में दर्द, सांस फूलना, पसीना",
      "बुखार",
      "खांसी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Habit formation needs practice with positive reinforcement.",
    "explanationHi": "Heart attack signs।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-698",
    "questionEn": "Child-friendly toilet features include:",
    "questionHi": "हार्ट अटैक में तुरंत क्या करें?",
    "optionsEn": [
      "Adult height only",
      "Lower height, safe, attractive design",
      "Dark interior",
      "No door"
    ],
    "optionsHi": [
      "दौड़ाना",
      "आराम से बैठाना, 108 कॉल करना, Aspirin (अगर एलर्जी नहीं)",
      "व्यायाम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Child-friendly design encourages use and ensures safety.",
    "explanationHi": "Call emergency।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-699",
    "questionEn": "Documentation of health activities helps:",
    "questionHi": "प्राथमिक चिकित्सा किट में क्या होना चाहिए?",
    "optionsEn": [
      "Nothing",
      "Monitoring progress and planning",
      "Only bureaucracy",
      "Only inspectors"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "बैंडेज, गॉज, एंटीसेप्टिक, कैंची, दस्ताने, थर्मामीटर",
      "केवल दवाई",
      "केवल कैंची"
    ],
    "correctAnswer": 1,
    "explanationEn": "Records enable monitoring, evaluation, and planning.",
    "explanationHi": "First aid kit।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-700",
    "questionEn": "Monthly progress report includes:",
    "questionHi": "MPHW का प्राथमिक चिकित्सा में क्या योगदान है?",
    "optionsEn": [
      "Only attendance",
      "Activities conducted, outputs, challenges",
      "Only budget",
      "Only photographs"
    ],
    "optionsHi": [
      "कोई योगदान नहीं",
      "प्रशिक्षण, समुदाय को सिखाना, आपातकाल में सहायता, रेफरल",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Comprehensive reports capture program implementation status.",
    "explanationHi": "First aid role।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-701",
    "questionEn": "HMIS reports are submitted:",
    "questionHi": "मानसिक स्वास्थ्य (Mental Health) क्या है?",
    "optionsEn": [
      "Yearly only",
      "Monthly from facilities",
      "Never",
      "Daily"
    ],
    "optionsHi": [
      "केवल बीमारी न होना",
      "भावनात्मक, मनोवैज्ञानिक और सामाजिक कल्याण की स्थिति",
      "केवल शारीरिक स्वास्थ्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Monthly reporting from health facilities feeds HMIS.",
    "explanationHi": "Mental well-being।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-702",
    "questionEn": "Data quality check includes:",
    "questionHi": "आम मानसिक विकार (CMD) कौन से हैं?",
    "optionsEn": [
      "Only quantity",
      "Completeness, consistency, accuracy",
      "Only speed",
      "Only format"
    ],
    "optionsHi": [
      "केवल पागलपन",
      "अवसाद (Depression), चिंता (Anxiety)",
      "केवल सिज़ोफ्रेनिया",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Data quality involves multiple verification aspects.",
    "explanationHi": "Common mental disorders।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-703",
    "questionEn": "Indicators help measure:",
    "questionHi": "अवसाद (Depression) के लक्षण क्या हैं?",
    "optionsEn": [
      "Nothing specific",
      "Progress toward objectives",
      "Only inputs",
      "Only failures"
    ],
    "optionsHi": [
      "खुशी",
      "उदासी, रुचि कम होना, थकान, नींद/भूख में बदलाव, आत्महत्या विचार",
      "अधिक ऊर्जा",
      "कोई लक्षण नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Indicators quantify achievement and guide decisions.",
    "explanationHi": "Depression symptoms।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-704",
    "questionEn": "Input indicators measure:",
    "questionHi": "चिंता विकार (Anxiety Disorder) के लक्षण क्या हैं?",
    "optionsEn": [
      "Outcomes",
      "Resources provided (staff, supplies, funds)",
      "Impact",
      "Coverage"
    ],
    "optionsHi": [
      "शांति",
      "अत्यधिक चिंता, बेचैनी, धड़कन तेज, पसीना, नींद की समस्या",
      "आराम",
      "कोई लक्षण नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Inputs are resources invested in program.",
    "explanationHi": "Anxiety symptoms।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-705",
    "questionEn": "Output indicators measure:",
    "questionHi": "गंभीर मानसिक विकार (SMD) के उदाहरण क्या हैं?",
    "optionsEn": [
      "Resources",
      "Products of program activities",
      "Long-term impact",
      "Baseline"
    ],
    "optionsHi": [
      "हल्की चिंता",
      "सिज़ोफ्रेनिया, बाइपोलर डिसऑर्डर",
      "सामान्य तनाव",
      "थकान"
    ],
    "correctAnswer": 1,
    "explanationEn": "Outputs are direct products of activities conducted.",
    "explanationHi": "Severe mental illness।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-706",
    "questionEn": "Coverage indicator shows:",
    "questionHi": "सिज़ोफ्रेनिया के लक्षण क्या हैं?",
    "optionsEn": [
      "Staff numbers",
      "Proportion of target population reached",
      "Budget spent",
      "Buildings built"
    ],
    "optionsHi": [
      "सामान्य",
      "मतिभ्रम (Hallucinations), भ्रम (Delusions), असंगठित व्यवहार",
      "केवल उदासी",
      "कोई लक्षण नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Coverage indicates what proportion received intervention.",
    "explanationHi": "Psychosis।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-707",
    "questionEn": "Program planning cycle includes:",
    "questionHi": "मानसिक स्वास्थ्य के लिए कलंक (Stigma) क्या समस्या है?",
    "optionsEn": [
      "Only implementation",
      "Assessment, planning, implementation, evaluation",
      "Only evaluation",
      "Only reporting"
    ],
    "optionsHi": [
      "कोई समस्या नहीं",
      "मदद लेने में देरी, भेदभाव, अलगाव",
      "बेहतर इलाज",
      "जल्दी रिकवरी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Planning cycle involves all phases for effective programs.",
    "explanationHi": "Stigma barrier।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-708",
    "questionEn": "Situation analysis in planning examines:",
    "questionHi": "मानसिक स्वास्थ्य प्रथमोपचार (MHFA) क्या है?",
    "optionsEn": [
      "Only problems",
      "Current status, resources, constraints, opportunities",
      "Only resources",
      "Only budget"
    ],
    "optionsHi": [
      "दवाई देना",
      "मानसिक संकट में व्यक्ति को प्रारंभिक सहायता देना",
      "सर्जरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Situation analysis comprehensively assesses context.",
    "explanationHi": "Psychological first aid।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-709",
    "questionEn": "SMART objectives are:",
    "questionHi": "आत्महत्या के खतरे के संकेत क्या हैं?",
    "optionsEn": [
      "Only specific",
      "Specific, Measurable, Achievable, Relevant, Time-bound",
      "Only measurable",
      "Only realistic"
    ],
    "optionsHi": [
      "खुशी",
      "मरने की बात करना, निराशा, अलगाव, सामान बांटना, व्यवहार में बदलाव",
      "सामान्य व्यवहार",
      "कोई संकेत नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SMART criteria ensure clear, actionable objectives.",
    "explanationHi": "Suicide warning signs।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-710",
    "questionEn": "Work plan includes:",
    "questionHi": "आत्महत्या के विचार वाले व्यक्ति से कैसे बात करें?",
    "optionsEn": [
      "Only budget",
      "Activities, timeline, responsibilities, resources",
      "Only timeline",
      "Only staff names"
    ],
    "optionsHi": [
      "अनदेखा करें",
      "सुनें, सहानुभूति दिखाएं, पेशेवर मदद के लिए प्रेरित करें, अकेला न छोड़ें",
      "डांटें",
      "मज़ाक करें"
    ],
    "correctAnswer": 1,
    "explanationEn": "Work plan details implementation strategy comprehensively.",
    "explanationHi": "Suicide prevention।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-711",
    "questionEn": "Infection control in community includes:",
    "questionHi": "iCall/Vandrevala Foundation जैसी हेल्पलाइन किसके लिए हैं?",
    "optionsEn": [
      "Only hospital measures",
      "Hand hygiene, safe water, sanitation, immunization",
      "Only isolation",
      "Only medication"
    ],
    "optionsHi": [
      "शिक्षा",
      "मानसिक स्वास्थ्य परामर्श",
      "खाद्य सुरक्षा",
      "जल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Community infection control involves multiple strategies.",
    "explanationHi": "Mental health helplines।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-712",
    "questionEn": "Respiratory etiquette includes:",
    "questionHi": "NMHP (National Mental Health Programme) क्या है?",
    "optionsEn": [
      "Open sneezing",
      "Covering coughs, disposing tissues, hand hygiene",
      "Spitting openly",
      "Nothing special"
    ],
    "optionsHi": [
      "पोषण कार्यक्रम",
      "राष्ट्रीय मानसिक स्वास्थ्य कार्यक्रम",
      "टीकाकरण कार्यक्रम",
      "जल कार्यक्रम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Respiratory etiquette prevents airborne disease spread.",
    "explanationHi": "Mental health programme।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-713",
    "questionEn": "Social distancing helps prevent:",
    "questionHi": "DMHP (District Mental Health Programme) क्या है?",
    "optionsEn": [
      "Only TB",
      "Spread of respiratory infections",
      "Only COVID",
      "No diseases"
    ],
    "optionsHi": [
      "राज्य स्तर",
      "जिला स्तर पर मानसिक स्वास्थ्य सेवाएं",
      "केंद्रीय",
      "अंतर्राष्ट्रीय"
    ],
    "correctAnswer": 1,
    "explanationEn": "Distancing reduces transmission of respiratory pathogens.",
    "explanationHi": "District level।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-714",
    "questionEn": "Face mask in community protects:",
    "questionHi": "मानसिक स्वास्थ्य अधिनियम 2017 की मुख्य विशेषता क्या है?",
    "optionsEn": [
      "Only wearer",
      "Both wearer and others",
      "No one",
      "Only sick people"
    ],
    "optionsHi": [
      "कोई अधिकार नहीं",
      "मानसिक स्वास्थ्य देखभाल का अधिकार, आत्महत्या प्रयास का अपराध न होना",
      "केवल सजा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Masks reduce both inhalation and emission of droplets.",
    "explanationHi": "Mental Healthcare Act।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-715",
    "questionEn": "Cloth mask should be:",
    "questionHi": "मादक द्रव्य सेवन (Substance Abuse) क्या है?",
    "optionsEn": [
      "Single layer",
      "Multiple layers of tightly woven fabric",
      "Loosely woven",
      "Any material"
    ],
    "optionsHi": [
      "दवाई लेना",
      "नशीले पदार्थों का हानिकारक उपयोग",
      "पानी पीना",
      "भोजन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple tight-weave layers improve filtration.",
    "explanationHi": "Drug abuse।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-716",
    "questionEn": "Proper mask wearing covers:",
    "questionHi": "आम मादक द्रव्यों के उदाहरण क्या हैं?",
    "optionsEn": [
      "Only mouth",
      "Nose and mouth with good fit",
      "Only nose",
      "Nothing"
    ],
    "optionsHi": [
      "दूध",
      "शराब, तंबाकू, भांग, अफीम, हेरोइन, गांजा",
      "पानी",
      "जूस"
    ],
    "correctAnswer": 1,
    "explanationEn": "Complete coverage of nose and mouth with snug fit needed.",
    "explanationHi": "Common substances।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-717",
    "questionEn": "Removing mask should avoid:",
    "questionHi": "नशे की लत (Addiction) क्या है?",
    "optionsEn": [
      "Touching straps",
      "Touching front of mask",
      "Hand hygiene after",
      "Careful removal"
    ],
    "optionsHi": [
      "इच्छा से सेवन",
      "नशे पर नियंत्रण खोना, हानि के बावजूद सेवन जारी",
      "सामान्य आदत",
      "कोई समस्या नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Front of mask may be contaminated; touch only straps.",
    "explanationHi": "Addiction।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-718",
    "questionEn": "Surface disinfection helps because:",
    "questionHi": "नशा मुक्ति केंद्र (De-addiction Centre) क्या है?",
    "optionsEn": [
      "Surfaces don't harbor pathogens",
      "Some pathogens survive on surfaces",
      "Only for appearance",
      "Not needed"
    ],
    "optionsHi": [
      "शराब की दुकान",
      "नशे की लत से मुक्त करने का उपचार केंद्र",
      "जिम",
      "स्कूल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fomite transmission occurs through contaminated surfaces.",
    "explanationHi": "Rehabilitation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-719",
    "questionEn": "High-touch surfaces need:",
    "questionHi": "NDPS Act क्या है?",
    "optionsEn": [
      "No cleaning",
      "Frequent disinfection",
      "Weekly cleaning",
      "Monthly cleaning"
    ],
    "optionsHi": [
      "शिक्षा कानून",
      "Narcotic Drugs and Psychotropic Substances Act (नशा विरोधी कानून)",
      "खाद्य कानून",
      "जल कानून"
    ],
    "correctAnswer": 1,
    "explanationEn": "Frequently touched surfaces need regular disinfection.",
    "explanationHi": "Drug law।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-720",
    "questionEn": "Bleach solution for surface disinfection is typically:",
    "questionHi": "अंतर्राष्ट्रीय नशा निरोध दिवस कब है?",
    "optionsEn": [
      "1:100",
      "1:10 or as per manufacturer",
      "Undiluted",
      "1:1000"
    ],
    "optionsHi": [
      "26 मई",
      "26 जून",
      "26 जुलाई",
      "26 अगस्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "Correct dilution ensures effectiveness and safety.",
    "explanationHi": "International Day Against Drug Abuse।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-721",
    "questionEn": "Hand hygiene after touching surfaces is important because:",
    "questionHi": "MPHW का मानसिक स्वास्थ्य में क्या योगदान है?",
    "optionsEn": [
      "Only for cleanliness",
      "Surfaces may harbor pathogens",
      "Not important",
      "Only before eating"
    ],
    "optionsHi": [
      "कोई योगदान नहीं",
      "जागरूकता, पहचान, प्रथमोपचार, रेफरल, फॉलो-अप",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hand hygiene after surface contact prevents transmission.",
    "explanationHi": "Community mental health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-722",
    "questionEn": "Shared items should be:",
    "questionHi": "संचार (Communication) स्वास्थ्य में क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Used freely",
      "Avoided or disinfected between users",
      "Only for family",
      "Never cleaned"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "जानकारी देना, व्यवहार परिवर्तन, विश्वास बनाना",
      "केवल बातचीत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Shared items can transmit infections between users.",
    "explanationHi": "Health communication।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-723",
    "questionEn": "Personal items like towels should be:",
    "questionHi": "प्रभावी संचार के तत्व क्या हैं?",
    "optionsEn": [
      "Shared freely",
      "Individual for each person",
      "Washed monthly",
      "Never washed"
    ],
    "optionsHi": [
      "एक ही",
      "स्पष्टता, सरलता, सुनना, प्रतिक्रिया, सम्मान",
      "जटिलता",
      "एकतरफा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Personal items shouldn't be shared to prevent transmission.",
    "explanationHi": "Effective communication।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-724",
    "questionEn": "Wound care hygiene prevents:",
    "questionHi": "सक्रिय सुनना (Active Listening) क्या है?",
    "optionsEn": [
      "Nothing",
      "Infection of wounds",
      "Only bleeding",
      "Scars only"
    ],
    "optionsHi": [
      "सुनना नहीं",
      "ध्यान से सुनना, समझना, प्रतिक्रिया देना",
      "बोलते रहना",
      "अनदेखा करना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clean wound care prevents bacterial infection.",
    "explanationHi": "Active listening।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-725",
    "questionEn": "Minor cuts should be:",
    "questionHi": "गैर-मौखिक संचार (Non-verbal Communication) के उदाहरण क्या हैं?",
    "optionsEn": [
      "Left open",
      "Washed, disinfected, and covered",
      "Ignored",
      "Rubbed with soil"
    ],
    "optionsHi": [
      "बोलना",
      "आंखों का संपर्क, हावभाव, शारीरिक भाषा, चेहरे के भाव",
      "लिखना",
      "पढ़ना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Proper wound care prevents infection.",
    "explanationHi": "Body language।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-726",
    "questionEn": "Tetanus-prone wounds include:",
    "questionHi": "IPC (Interpersonal Communication) स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Clean cuts",
      "Deep, dirty, puncture wounds",
      "Paper cuts",
      "Clean abrasions"
    ],
    "optionsHi": [
      "कंप्यूटर",
      "व्यक्ति से व्यक्ति संचार (परामर्श, घर भेंट)",
      "टीवी",
      "रेडियो"
    ],
    "correctAnswer": 1,
    "explanationEn": "Deep contaminated wounds are high risk for tetanus.",
    "explanationHi": "Face-to-face।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-727",
    "questionEn": "Puncture wounds from rusty nails need:",
    "questionHi": "स्वास्थ्य परामर्श (Counselling) में क्या शामिल है?",
    "optionsEn": [
      "No special care",
      "Tetanus prophylaxis assessment",
      "Only bandage",
      "Only washing"
    ],
    "optionsHi": [
      "सलाह देना केवल",
      "सुनना, समझना, जानकारी देना, निर्णय लेने में मदद",
      "डांटना",
      "अनदेखा करना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Deep puncture wounds require tetanus evaluation.",
    "explanationHi": "Counselling skills।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-728",
    "questionEn": "Signs of wound infection include:",
    "questionHi": "GATHER मॉडल परामर्श में क्या है?",
    "optionsEn": [
      "Normal healing",
      "Redness, swelling, pus, increased pain",
      "Clean wound",
      "Less pain"
    ],
    "optionsHi": [
      "इकट्ठा करना",
      "Greet, Ask, Tell, Help, Explain, Return (परामर्श चरण)",
      "खाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Infection signs indicate need for medical attention.",
    "explanationHi": "Counselling framework।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-729",
    "questionEn": "Water safety plan approach involves:",
    "questionHi": "समूह चर्चा के लाभ क्या हैं?",
    "optionsEn": [
      "Only treatment",
      "Risk assessment from source to consumer",
      "Only testing",
      "Only distribution"
    ],
    "optionsHi": [
      "कोई लाभ नहीं",
      "आपसी सीखना, प्रश्नों का उत्तर, सामूहिक प्रेरणा",
      "समय बर्बाद",
      "बहस"
    ],
    "correctAnswer": 1,
    "explanationEn": "WSP comprehensively manages risks throughout water system.",
    "explanationHi": "Group discussion।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-730",
    "questionEn": "Catchment protection in water safety includes:",
    "questionHi": "प्रदर्शन (Demonstration) विधि कब उपयोगी है?",
    "optionsEn": [
      "Only treatment",
      "Protecting water source from contamination",
      "Only distribution",
      "Only storage"
    ],
    "optionsHi": [
      "कभी नहीं",
      "कौशल सिखाते समय (हाथ धोना, ORS बनाना)",
      "पढ़ते समय",
      "लिखते समय"
    ],
    "correctAnswer": 1,
    "explanationEn": "Source protection is first barrier in multi-barrier approach.",
    "explanationHi": "Skill teaching।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-731",
    "questionEn": "Multi-barrier approach to water safety means:",
    "questionHi": "रोल प्ले का स्वास्थ्य शिक्षा में क्या उपयोग है?",
    "optionsEn": [
      "Single treatment",
      "Multiple treatment steps and protection measures",
      "Only chlorination",
      "Only filtration"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "व्यवहार अभ्यास, संवेदनशील विषयों पर चर्चा",
      "केवल मनोरंजन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple barriers provide redundant protection.",
    "explanationHi": "Role play।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-732",
    "questionEn": "Household water treatment and safe storage (HWTS) includes:",
    "questionHi": "फ्लिप चार्ट का उपयोग कैसे करें?",
    "optionsEn": [
      "Only storage",
      "Treatment at point-of-use plus safe storage",
      "Only boiling",
      "Only chlorination"
    ],
    "optionsHi": [
      "छुपाकर",
      "दर्शकों की ओर मुंह करके, चित्र दिखाते हुए समझाना",
      "पीठ करके",
      "पढ़ते हुए"
    ],
    "correctAnswer": 1,
    "explanationEn": "HWTS ensures water safety at household level.",
    "explanationHi": "Visual aid।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-733",
    "questionEn": "Point-of-use water treatment is especially important:",
    "questionHi": "पोस्टर में क्या होना चाहिए?",
    "optionsEn": [
      "With piped supply",
      "When water source is unsafe",
      "In cities only",
      "Never"
    ],
    "optionsHi": [
      "बहुत शब्द",
      "कम शब्द, बड़े चित्र, स्पष्ट संदेश",
      "कोई चित्र नहीं",
      "जटिल भाषा"
    ],
    "correctAnswer": 1,
    "explanationEn": "POU treatment needed when source water is unsafe.",
    "explanationHi": "Poster design।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-734",
    "questionEn": "Water storage container should be:",
    "questionHi": "मास मीडिया (Mass Media) के उदाहरण क्या हैं?",
    "optionsEn": [
      "Wide-mouthed",
      "Narrow-mouthed with cover and tap/spigot",
      "Open",
      "Shared with animals"
    ],
    "optionsHi": [
      "घर भेंट",
      "टीवी, रेडियो, अखबार, इंटरनेट",
      "व्यक्तिगत परामर्श",
      "समूह चर्चा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Design prevents contamination during storage and dispensing.",
    "explanationHi": "Mass media।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-735",
    "questionEn": "Dispensing water by dipping cup increases:",
    "questionHi": "सोशल मीडिया का स्वास्थ्य संचार में क्या उपयोग है?",
    "optionsEn": [
      "Safety",
      "Contamination risk from hands",
      "Purity",
      "Nothing"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "जागरूकता फैलाना, अफवाहों का खंडन, जुड़ाव",
      "केवल मनोरंजन",
      "गलत जानकारी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dipping introduces hand contamination into stored water.",
    "explanationHi": "Social media health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-736",
    "questionEn": "Safe water chain maintains safety from:",
    "questionHi": "Infodemic क्या है?",
    "optionsEn": [
      "Only source",
      "Source through treatment, transport, storage, use",
      "Only treatment",
      "Only storage"
    ],
    "optionsHi": [
      "बीमारी",
      "महामारी के दौरान अत्यधिक जानकारी (सही और गलत)",
      "दवाई",
      "टीका"
    ],
    "correctAnswer": 1,
    "explanationEn": "Safety maintained throughout entire water chain.",
    "explanationHi": "Information epidemic।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-737",
    "questionEn": "Recontamination of treated water occurs through:",
    "questionHi": "अफवाहों और गलत जानकारी से कैसे निपटें?",
    "optionsEn": [
      "Proper storage",
      "Dirty containers, hands, dipping",
      "Chlorination",
      "Boiling"
    ],
    "optionsHi": [
      "फैलाएं",
      "सही जानकारी दें, विश्वसनीय स्रोत बताएं, धैर्य रखें",
      "अनदेखा करें",
      "बहस करें"
    ],
    "correctAnswer": 1,
    "explanationEn": "Poor handling recontaminates previously safe water.",
    "explanationHi": "Counter misinformation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-738",
    "questionEn": "Water quality testing kits for field use include:",
    "questionHi": "रिकॉर्ड और रजिस्टर क्यों महत्वपूर्ण हैं?",
    "optionsEn": [
      "Only laboratory equipment",
      "Simple tests for residual chlorine, pH, bacteria",
      "Only turbidity tubes",
      "Only taste testing"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "सेवाओं का दस्तावेज़ीकरण, योजना, निगरानी, मूल्यांकन",
      "केवल कागज़ी काम",
      "समय बर्बाद"
    ],
    "correctAnswer": 1,
    "explanationEn": "Field kits enable basic testing in communities.",
    "explanationHi": "Documentation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-739",
    "questionEn": "Community involvement in sanitation includes:",
    "questionHi": "MPHW को कौन से रजिस्टर भरने होते हैं?",
    "optionsEn": [
      "Nothing",
      "Planning, construction, maintenance, monitoring",
      "Only payment",
      "Only complaints"
    ],
    "optionsHi": [
      "कोई नहीं",
      "जन्म-मृत्यु, टीकाकरण, ANC, संचारी रोग, NCD, दैनिक डायरी",
      "केवल एक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Community ownership throughout ensures sustainability.",
    "explanationHi": "Registers।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-740",
    "questionEn": "Mason training for toilet construction teaches:",
    "questionHi": "सही रिपोर्टिंग के सिद्धांत क्या हैं?",
    "optionsEn": [
      "Only digging",
      "Technical skills for quality latrine construction",
      "Only supervision",
      "Nothing technical"
    ],
    "optionsHi": [
      "गलत आंकड़े",
      "समयबद्ध, सटीक, पूर्ण, नियमित",
      "देर से",
      "अपूर्ण"
    ],
    "correctAnswer": 1,
    "explanationEn": "Trained masons build quality, durable toilets.",
    "explanationHi": "Reporting principles।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-741",
    "questionEn": "Quality construction of toilet ensures:",
    "questionHi": "मासिक रिपोर्ट में क्या शामिल होता है?",
    "optionsEn": [
      "Only appearance",
      "Durability and proper functioning",
      "Only cost savings",
      "Only speed"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "सेवाओं का सारांश (टीकाकरण, ANC, रोग केस आदि)",
      "व्यक्तिगत जानकारी",
      "केवल शिकायतें"
    ],
    "correctAnswer": 1,
    "explanationEn": "Quality construction essential for long-term use.",
    "explanationHi": "Monthly summary।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-742",
    "questionEn": "Sanitation financing options include:",
    "questionHi": "HMIS पोर्टल पर डेटा कैसे भरें?",
    "optionsEn": [
      "Only government",
      "Subsidies, loans, household contributions",
      "Only NGOs",
      "Only private"
    ],
    "optionsHi": [
      "कभी भी",
      "समय पर, सटीक आंकड़े, ऑनलाइन/ऑफलाइन फॉर्म",
      "गलत आंकड़े",
      "कभी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple financing mechanisms support sanitation access.",
    "explanationHi": "HMIS data entry।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-743",
    "questionEn": "Sanitary mart supplies:",
    "questionHi": "डेटा गुणवत्ता क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Food only",
      "Toilet construction materials and pans",
      "Only cement",
      "Only pipes"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "सही निर्णय, योजना, संसाधन आवंटन के लिए",
      "केवल औपचारिकता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sanitary marts make materials accessible locally.",
    "explanationHi": "Data quality।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-744",
    "questionEn": "Toilet usage monitoring checks:",
    "questionHi": "लाइन लिस्ट क्या है?",
    "optionsEn": [
      "Only construction",
      "Whether toilets are actually being used",
      "Only quality",
      "Only payments"
    ],
    "optionsHi": [
      "खरीदारी सूची",
      "रोगियों/लाभार्थियों की व्यक्तिगत विवरण सूची",
      "खाद्य सूची",
      "दवाई सूची"
    ],
    "correctAnswer": 1,
    "explanationEn": "Monitoring verifies behavior change not just construction.",
    "explanationHi": "Case listing।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-745",
    "questionEn": "Slippage from ODF means:",
    "questionHi": "सर्वे और सर्वेक्षण में क्या अंतर है?",
    "optionsEn": [
      "Progress",
      "Return to open defecation after achieving ODF",
      "More toilets",
      "Better hygiene"
    ],
    "optionsHi": [
      "एक ही हैं",
      "सर्वे = पूरी आबादी, सर्वेक्षण = नमूना आबादी",
      "विपरीत",
      "कोई अंतर नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Slippage is reverting to open defecation.",
    "explanationHi": "Survey vs census।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-746",
    "questionEn": "ODF sustainability strategies include:",
    "questionHi": "माइक्रो-प्लान क्या है?",
    "optionsEn": [
      "Only verification",
      "Follow-up, maintenance support, behavior reinforcement",
      "Only punishment",
      "Ignoring"
    ],
    "optionsHi": [
      "बड़ी योजना",
      "स्थानीय स्तर पर सेवा वितरण की विस्तृत योजना",
      "राष्ट्रीय योजना",
      "कोई योजना नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple strategies needed to sustain ODF status.",
    "explanationHi": "Local planning।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-747",
    "questionEn": "Community-led approaches work by:",
    "questionHi": "हेडकाउंट सर्वे क्या है?",
    "optionsEn": [
      "Government building all toilets",
      "Triggering community action and ownership",
      "Only subsidies",
      "Only punishment"
    ],
    "optionsHi": [
      "वजन मापना",
      "लक्षित आबादी (जैसे बच्चों, गर्भवती) की गणना",
      "लंबाई मापना",
      "रक्त जांच"
    ],
    "correctAnswer": 1,
    "explanationEn": "Community ownership drives sustainable change.",
    "explanationHi": "Beneficiary count।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-748",
    "questionEn": "Behavior change for sanitation requires:",
    "questionHi": "MPHW के कार्य क्षेत्र (Service Area) में क्या आता है?",
    "optionsEn": [
      "Only infrastructure",
      "Both infrastructure and behavior change interventions",
      "Only education",
      "Only punishment"
    ],
    "optionsHi": [
      "पूरा जिला",
      "निर्धारित गांव/वार्ड की आबादी",
      "पूरा राज्य",
      "पूरा देश"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hardware and software together create lasting change.",
    "explanationHi": "Defined area।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-749",
    "questionEn": "Solid waste management hierarchy prioritizes:",
    "questionHi": "परिवार फोल्डर क्या है?",
    "optionsEn": [
      "Disposal first",
      "Prevention, reuse, recycling, treatment, disposal",
      "Burning first",
      "Landfilling first"
    ],
    "optionsHi": [
      "फाइल कैबिनेट",
      "प्रत्येक परिवार का स्वास्थ्य रिकॉर्ड (सब-सेंटर पर)",
      "खाद्य फोल्डर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hierarchy prioritizes prevention and minimization.",
    "explanationHi": "Family record।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-750",
    "questionEn": "Waste prevention means:",
    "questionHi": "इलिजिबल कपल रजिस्टर क्या है?",
    "optionsEn": [
      "More waste",
      "Reducing waste generation at source",
      "Better disposal",
      "More recycling"
    ],
    "optionsHi": [
      "शादी रजिस्टर",
      "परिवार नियोजन के लिए पात्र दंपत्तियों का रिकॉर्ड",
      "जन्म रजिस्टर",
      "मृत्यु रजिस्टर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Prevention is most effective waste management.",
    "explanationHi": "Eligible couple।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-751",
    "questionEn": "Repair and reuse of items helps:",
    "questionHi": "संक्रामक रोग रजिस्टर में क्या दर्ज करें?",
    "optionsEn": [
      "Increase waste",
      "Reduce waste by extending product life",
      "Only cost savings",
      "Nothing"
    ],
    "optionsHi": [
      "केवल नाम",
      "केस विवरण, तारीख, इलाज, आउटकम, कॉन्टैक्ट्स",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Reuse keeps items out of waste stream.",
    "explanationHi": "Communicable disease।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-752",
    "questionEn": "Recycling conserves:",
    "questionHi": "NCD रजिस्टर में क्या दर्ज करें?",
    "optionsEn": [
      "Nothing",
      "Raw materials and energy",
      "Only space",
      "Only labor"
    ],
    "optionsHi": [
      "केवल नाम",
      "स्क्रीनिंग, निदान, फॉलो-अप, उपचार विवरण",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Recycling reduces need for virgin materials and energy.",
    "explanationHi": "NCD record।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-753",
    "questionEn": "Downcycling converts waste into:",
    "questionHi": "MPHW की दैनिक डायरी में क्या लिखें?",
    "optionsEn": [
      "Same quality product",
      "Lower value products",
      "Higher value products",
      "Nothing useful"
    ],
    "optionsHi": [
      "व्यक्तिगत बातें",
      "दिन भर के कार्य, विज़िट, सेवाएं, विशेष घटनाएं",
      "केवल खाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Downcycling produces lower quality materials.",
    "explanationHi": "Daily diary।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-754",
    "questionEn": "Upcycling creates:",
    "questionHi": "निगरानी (Monitoring) और मूल्यांकन (Evaluation) में क्या अंतर है?",
    "optionsEn": [
      "Lower value items",
      "Higher value products from waste",
      "Same product",
      "Nothing"
    ],
    "optionsHi": [
      "एक ही हैं",
      "निगरानी = नियमित ट्रैकिंग, मूल्यांकन = समय-समय पर गहन आकलन",
      "विपरीत",
      "कोई अंतर नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Upcycling adds value to waste materials.",
    "explanationHi": "M&E difference।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-755",
    "questionEn": "Circular economy aims for:",
    "questionHi": "संकेतक (Indicator) क्या है?",
    "optionsEn": [
      "Linear waste flow",
      "Keeping materials in use as long as possible",
      "Maximum waste",
      "Disposal only"
    ],
    "optionsHi": [
      "दवाई",
      "प्रगति या स्थिति मापने का मानक (जैसे टीकाकरण कवरेज)",
      "बीमारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Circular economy minimizes waste through continuous use.",
    "explanationHi": "Indicator।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-756",
    "questionEn": "Producer responsibility for packaging means:",
    "questionHi": "इनपुट, प्रोसेस, आउटपुट, आउटकम में क्या अंतर है?",
    "optionsEn": [
      "Consumer pays",
      "Producers responsible for post-consumer packaging",
      "No responsibility",
      "Government pays"
    ],
    "optionsHi": [
      "एक ही हैं",
      "इनपुट = संसाधन, प्रोसेस = गतिविधियां, आउटपुट = सेवाएं, आउटकम = परिणाम",
      "कोई अंतर नहीं",
      "विपरीत"
    ],
    "correctAnswer": 1,
    "explanationEn": "EPR makes producers accountable for packaging waste.",
    "explanationHi": "Monitoring framework।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-757",
    "questionEn": "Waste segregation awareness programs use:",
    "questionHi": "सुपरविज़न का उद्देश्य क्या है?",
    "optionsEn": [
      "Only posters",
      "Multiple methods: demonstrations, house visits, campaigns",
      "Only fines",
      "No communication"
    ],
    "optionsHi": [
      "दंडित करना",
      "सहायता, मार्गदर्शन, गुणवत्ता सुधार, समस्या समाधान",
      "केवल जांच",
      "केवल शिकायत"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple channels ensure message reaches all.",
    "explanationHi": "Supportive supervision।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-758",
    "questionEn": "Citizen responsibility in waste management includes:",
    "questionHi": "सहायक पर्यवेक्षण (Supportive Supervision) क्या है?",
    "optionsEn": [
      "Only paying taxes",
      "Segregation, proper disposal, reducing waste",
      "Only complaining",
      "Nothing"
    ],
    "optionsHi": [
      "दंडात्मक",
      "सकारात्मक, समस्या-समाधान, क्षमता-निर्माण दृष्टिकोण",
      "केवल गलतियां ढूंढना",
      "अनदेखा करना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Citizens have active role in waste management.",
    "explanationHi": "Supportive approach।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-759",
    "questionEn": "Food fortification adds:",
    "questionHi": "MPHW के पर्यवेक्षक कौन हैं?",
    "optionsEn": [
      "Calories only",
      "Micronutrients to commonly consumed foods",
      "Only taste",
      "Only color"
    ],
    "optionsHi": [
      "कोई नहीं",
      "Health Supervisor, MO, Block/District officials",
      "केवल सरपंच",
      "केवल ASHA"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fortification adds essential nutrients to staple foods.",
    "explanationHi": "Supervisory chain।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-760",
    "questionEn": "Salt iodization prevents:",
    "questionHi": "बैठकों (Meetings) का स्वास्थ्य कार्यक्रम में क्या महत्व है?",
    "optionsEn": [
      "Anemia",
      "Iodine deficiency disorders",
      "Malaria",
      "Diabetes"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "समन्वय, समीक्षा, समस्या समाधान, योजना",
      "समय बर्बाद",
      "केवल औपचारिकता"
    ],
    "correctAnswer": 1,
    "explanationEn": "Iodized salt prevents goiter and IDD.",
    "explanationHi": "Meetings importance।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-761",
    "questionEn": "Iron fortification of foods helps prevent:",
    "questionHi": "सेक्टर मीटिंग क्या है?",
    "optionsEn": [
      "Goiter",
      "Anemia",
      "Malnutrition only",
      "Obesity"
    ],
    "optionsHi": [
      "राष्ट्रीय बैठक",
      "PHC स्तर पर ANM/MPHW की मासिक बैठक",
      "जिला बैठक",
      "ग्राम बैठक"
    ],
    "correctAnswer": 1,
    "explanationEn": "Iron-fortified foods reduce iron deficiency anemia.",
    "explanationHi": "Sector meeting।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-762",
    "questionEn": "Vitamin A fortification of oil helps prevent:",
    "questionHi": "Block Task Force Meeting क्या है?",
    "optionsEn": [
      "Anemia",
      "Night blindness and vitamin A deficiency",
      "Goiter",
      "Rickets"
    ],
    "optionsHi": [
      "ग्राम बैठक",
      "ब्लॉक स्तर पर स्वास्थ्य कार्यक्रम समीक्षा बैठक",
      "राज्य बैठक",
      "केंद्रीय बैठक"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vitamin A in oil prevents deficiency-related eye problems.",
    "explanationHi": "Block level review।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-763",
    "questionEn": "Double-fortified salt contains:",
    "questionHi": "दवाई प्रबंधन (Drug Management) में MPHW की क्या भूमिका है?",
    "optionsEn": [
      "Only iodine",
      "Iodine and iron",
      "Only iron",
      "Vitamins only"
    ],
    "optionsHi": [
      "कोई भूमिका नहीं",
      "स्टॉक रखना, वितरण, एक्सपायरी जांच, इंडेंट भेजना",
      "केवल लेना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "DFS provides both iodine and iron.",
    "explanationHi": "Drug logistics।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-764",
    "questionEn": "Dietary guidelines recommend:",
    "questionHi": "FEFO (First Expiry First Out) क्या है?",
    "optionsEn": [
      "Same diet for all",
      "Balanced diet with variety",
      "Only protein",
      "Only carbohydrates"
    ],
    "optionsHi": [
      "नई दवाई पहले",
      "जो पहले एक्सपायर होगी उसे पहले उपयोग करना",
      "पुरानी दवाई अंत में",
      "कोई नियम नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Balanced variety ensures all nutrient needs met.",
    "explanationHi": "Inventory management।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-765",
    "questionEn": "Food groups include:",
    "questionHi": "स्टॉक रजिस्टर में क्या दर्ज करें?",
    "optionsEn": [
      "Only one type",
      "Cereals, pulses, vegetables, fruits, animal foods, fats",
      "Only grains",
      "Only meat"
    ],
    "optionsHi": [
      "केवल नाम",
      "दवाई प्राप्ति, वितरण, बैलेंस, एक्सपायरी डेट",
      "केवल तारीख",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple food groups provide balanced nutrition.",
    "explanationHi": "Stock register।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-766",
    "questionEn": "Minimum dietary diversity for children is:",
    "questionHi": "इंडेंट क्या है?",
    "optionsEn": [
      "2 food groups",
      "5+ food groups in 24 hours",
      "1 food group",
      "No standard"
    ],
    "optionsHi": [
      "दवाई",
      "दवाई/सामग्री की मांग पत्र",
      "रिपोर्ट",
      "शिकायत"
    ],
    "correctAnswer": 1,
    "explanationEn": "MDD indicator requires 5+ of 8 food groups.",
    "explanationHi": "Requisition।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-767",
    "questionEn": "Exclusive breastfeeding is recommended for:",
    "questionHi": "एक्सपायर्ड दवाइयों का क्या करें?",
    "optionsEn": [
      "1 month",
      "6 months",
      "1 year",
      "2 years"
    ],
    "optionsHi": [
      "उपयोग करें",
      "अलग रखें, उचित निपटान, रिकॉर्ड करें",
      "फेंक दें कहीं भी",
      "बेच दें"
    ],
    "correctAnswer": 1,
    "explanationEn": "Only breast milk for first 6 months is recommended.",
    "explanationHi": "Expired drug disposal।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-768",
    "questionEn": "Complementary feeding starts at:",
    "questionHi": "दवाइयों का भंडारण कैसे करें?",
    "optionsEn": [
      "Birth",
      "6 months alongside continued breastfeeding",
      "1 year",
      "2 years"
    ],
    "optionsHi": [
      "कहीं भी",
      "सूखी जगह, धूप से दूर, उचित तापमान, व्यवस्थित",
      "गीली जगह",
      "धूप में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Complementary foods introduced at 6 months.",
    "explanationHi": "Drug storage।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-769",
    "questionEn": "Building setback from road prevents:",
    "questionHi": "आवश्यक दवाइयों की सूची (EDL) क्या है?",
    "optionsEn": [
      "Nothing",
      "Noise, dust, and traffic hazards",
      "Only aesthetics",
      "Only water damage"
    ],
    "optionsHi": [
      "सभी दवाइयां",
      "प्राथमिकता वाली दवाइयों की राष्ट्रीय/राज्य सूची",
      "केवल महंगी",
      "कोई सूची नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Setback provides buffer from traffic nuisances.",
    "explanationHi": "Essential Drugs List।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-770",
    "questionEn": "Site drainage prevents:",
    "questionHi": "रेशनल ड्रग यूज (Rational Drug Use) क्या है?",
    "optionsEn": [
      "Nothing",
      "Water logging and foundation damage",
      "Only aesthetics",
      "Only dust"
    ],
    "optionsHi": [
      "अधिक दवाई",
      "सही दवाई, सही खुराक, सही समय, सही रोगी को",
      "कम दवाई",
      "कोई दवाई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Good drainage protects building and prevents vector breeding.",
    "explanationHi": "Rational use।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-771",
    "questionEn": "Septic tank should be located:",
    "questionHi": "जेनेरिक दवाई क्या है?",
    "optionsEn": [
      "Near well",
      "Away from water source with required distance",
      "In kitchen",
      "No requirement"
    ],
    "optionsHi": [
      "ब्रांडेड",
      "बिना ब्रांड नाम, रासायनिक नाम से (सस्ती)",
      "महंगी",
      "अलग दवाई"
    ],
    "correctAnswer": 1,
    "explanationEn": "Safe distance prevents groundwater contamination.",
    "explanationHi": "Generic medicine।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-772",
    "questionEn": "Building permits ensure:",
    "questionHi": "Jan Aushadhi केंद्र क्या है?",
    "optionsEn": [
      "Nothing",
      "Construction meets safety and planning standards",
      "Only revenue",
      "Only appearance"
    ],
    "optionsHi": [
      "निजी दुकान",
      "सस्ती जेनेरिक दवाइयों की सरकारी दुकान",
      "महंगी दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Permits ensure compliance with building codes.",
    "explanationHi": "Affordable medicines।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-773",
    "questionEn": "Fire safety in buildings includes:",
    "questionHi": "BMW (Biomedical Waste) क्या है?",
    "optionsEn": [
      "Only extinguishers",
      "Exits, detection, suppression, fire-resistant materials",
      "Only exits",
      "Only alarms"
    ],
    "optionsHi": [
      "सामान्य कचरा",
      "स्वास्थ्य सेवाओं से उत्पन्न संभावित संक्रामक/खतरनाक कचरा",
      "खाद्य कचरा",
      "प्लास्टिक"
    ],
    "correctAnswer": 1,
    "explanationEn": "Comprehensive fire safety has multiple components.",
    "explanationHi": "Medical waste।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-774",
    "questionEn": "Emergency exit doors should:",
    "questionHi": "BMW के प्रकार क्या हैं?",
    "optionsEn": [
      "Lock from outside",
      "Open outward and be unobstructed",
      "Be locked always",
      "Open inward"
    ],
    "optionsHi": [
      "एक प्रकार",
      "संक्रामक, तीक्ष्ण (Sharps), रासायनिक, फार्मास्यूटिकल, रेडियोएक्टिव",
      "कोई प्रकार नहीं",
      "केवल प्लास्टिक"
    ],
    "correctAnswer": 1,
    "explanationEn": "Outward opening prevents crushing in emergency evacuation.",
    "explanationHi": "BMW categories।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-775",
    "questionEn": "Smoke detectors provide:",
    "questionHi": "BMW के रंग कोडित बैग/कंटेनर क्या हैं?",
    "optionsEn": [
      "Nothing",
      "Early warning of fire",
      "Fire suppression",
      "Only decoration"
    ],
    "optionsHi": [
      "एक ही रंग",
      "पीला, लाल, सफेद (पंक्चर-प्रूफ), नीला/काला",
      "कोई रंग नहीं",
      "केवल काला"
    ],
    "correctAnswer": 1,
    "explanationEn": "Detectors alert occupants for early evacuation.",
    "explanationHi": "Color coding।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-776",
    "questionEn": "Electrical safety includes:",
    "questionHi": "पीले बैग में क्या डालें?",
    "optionsEn": [
      "Overloading circuits",
      "Proper wiring, earthing, circuit protection",
      "No earthing",
      "Exposed wires"
    ],
    "optionsHi": [
      "प्लास्टिक",
      "संक्रामक कचरा (ड्रेसिंग, कॉटन, ऊतक) - इंसिनरेशन के लिए",
      "शार्प्स",
      "सामान्य कचरा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Proper electrical installations prevent fires and shocks.",
    "explanationHi": "Yellow bag।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-777",
    "questionEn": "LPG cylinder should be kept:",
    "questionHi": "लाल बैग में क्या डालें?",
    "optionsEn": [
      "Near stove flame",
      "In ventilated area away from ignition",
      "In closed room",
      "Near heat source"
    ],
    "optionsHi": [
      "शार्प्स",
      "संक्रमित प्लास्टिक (सिरिंज बॉडी, कैथेटर, ग्लव्स)",
      "कागज",
      "सामान्य कचरा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ventilation and distance from ignition prevent gas hazards.",
    "explanationHi": "Red bag।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-778",
    "questionEn": "Gas leak is detected by:",
    "questionHi": "सफेद पंक्चर-प्रूफ कंटेनर में क्या डालें?",
    "optionsEn": [
      "Color",
      "Smell of added odorant",
      "Sound",
      "Nothing"
    ],
    "optionsHi": [
      "कपड़ा",
      "Sharps (सुई, ब्लेड, कांच)",
      "कागज",
      "प्लास्टिक"
    ],
    "correctAnswer": 1,
    "explanationEn": "Odorant added to gas enables leak detection by smell.",
    "explanationHi": "Sharps container।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-779",
    "questionEn": "Vector surveillance data helps:",
    "questionHi": "Hub Cutter क्या है?",
    "optionsEn": [
      "Nothing",
      "Guide control operations and predict outbreaks",
      "Only research",
      "Only reporting"
    ],
    "optionsHi": [
      "कैंची",
      "सुई का हब काटने का उपकरण (सुई को निष्क्रिय करना)",
      "ब्लेड",
      "चाकू"
    ],
    "correctAnswer": 1,
    "explanationEn": "Surveillance data informs targeted interventions.",
    "explanationHi": "Needle destroyer।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-780",
    "questionEn": "Seasonal variation in vector density affects:",
    "questionHi": "सुई लगाने के बाद Recapping क्यों न करें?",
    "optionsEn": [
      "Nothing",
      "Disease transmission patterns",
      "Only research",
      "Only surveys"
    ],
    "optionsHi": [
      "समय बचाने के लिए करें",
      "नीडलस्टिक इंजरी का जोखिम कम करने के लिए",
      "आसान होता है",
      "कोई कारण नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vector seasons correlate with disease patterns.",
    "explanationHi": "No recapping।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-781",
    "questionEn": "Pre-monsoon anti-larval measures reduce:",
    "questionHi": "नीडलस्टिक इंजरी होने पर तुरंत क्या करें?",
    "optionsEn": [
      "Nothing",
      "Vector population before transmission season",
      "Only costs",
      "Only complaints"
    ],
    "optionsHi": [
      "अनदेखा करें",
      "साबुन-पानी से धोना, रिपोर्ट करना, PEP लेना (यदि जरूरी)",
      "कुछ नहीं",
      "छुपाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pre-monsoon control reduces vectors before breeding surge.",
    "explanationHi": "NSI management।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-782",
    "questionEn": "Post-monsoon surveillance monitors:",
    "questionHi": "BMW Management Rules 2016 का पालन क्यों जरूरी है?",
    "optionsEn": [
      "Nothing",
      "Vector density and disease cases",
      "Only rainfall",
      "Only temperature"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "कानूनी आवश्यकता, संक्रमण रोकथाम, पर्यावरण सुरक्षा",
      "केवल औपचारिकता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Monitoring after rains tracks population and disease trends.",
    "explanationHi": "Legal compliance।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-783",
    "questionEn": "Mapping of breeding sites helps:",
    "questionHi": "सब-सेंटर पर BMW का निपटान कैसे करें?",
    "optionsEn": [
      "Nothing",
      "Target control operations efficiently",
      "Only decoration",
      "Only research"
    ],
    "optionsHi": [
      "खुले में फेंकना",
      "सेग्रीगेशन, अधिकृत संग्रह/निपटान एजेंसी को देना",
      "जलाना खुले में",
      "नदी में फेंकना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Maps guide systematic breeding site elimination.",
    "explanationHi": "Proper disposal।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-784",
    "questionEn": "Key containers for Aedes breeding are:",
    "questionHi": "स्वास्थ्य कार्यकर्ता की सुरक्षा क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Only natural sites",
      "Tires, drums, tanks, coolers, containers",
      "Only ground pools",
      "Only rivers"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "संक्रमण से बचाव, स्वस्थ कार्यबल, बेहतर सेवा",
      "केवल वेतन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Artificial containers are primary Aedes breeding sites.",
    "explanationHi": "Worker safety।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-785",
    "questionEn": "House-to-house source reduction involves:",
    "questionHi": "Standard Precautions क्या हैं?",
    "optionsEn": [
      "Only spraying",
      "Visiting homes to eliminate/treat breeding sites",
      "Only surveys",
      "Only education"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "सभी रोगियों के लिए संक्रमण रोकथाम उपाय (हाथ स्वच्छता, PPE)",
      "केवल HIV रोगियों के लिए",
      "कोई उपाय नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Systematic visits ensure breeding site elimination.",
    "explanationHi": "Universal precautions।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-786",
    "questionEn": "Focal spray targets:",
    "questionHi": "हाथ स्वच्छता के 5 क्षण क्या हैं?",
    "optionsEn": [
      "Whole area",
      "Specific locations with high vector activity",
      "Only forests",
      "Only fields"
    ],
    "optionsHi": [
      "एक क्षण",
      "रोगी को छूने से पहले/बाद, स्वच्छ प्रक्रिया से पहले, शरीर द्रव संपर्क के बाद, परिवेश छूने के बाद",
      "कोई क्षण नहीं",
      "दो क्षण"
    ],
    "correctAnswer": 1,
    "explanationEn": "Focal application concentrates on problem areas.",
    "explanationHi": "5 moments।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-787",
    "questionEn": "Space spray effectiveness depends on:",
    "questionHi": "स्वास्थ्य कर्मी के लिए हेपेटाइटिस B टीकाकरण क्यों जरूरी है?",
    "optionsEn": [
      "Nothing",
      "Timing, weather, droplet size, coverage",
      "Only chemical used",
      "Only equipment"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "व्यावसायिक जोखिम, रक्त से संक्रमण रोकथाम",
      "केवल बच्चों के लिए",
      "कोई कारण नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple factors affect space spray performance.",
    "explanationHi": "Occupational vaccination।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-788",
    "questionEn": "Community dengue prevention includes:",
    "questionHi": "PPE (Personal Protective Equipment) में क्या शामिल है?",
    "optionsEn": [
      "Only government action",
      "Source reduction, personal protection, awareness",
      "Only hospitals",
      "Only medication"
    ],
    "optionsHi": [
      "केवल मास्क",
      "दस्ताने, मास्क, गाउन, गॉगल्स, फेस शील्ड",
      "कुछ नहीं",
      "केवल दस्ताने"
    ],
    "correctAnswer": 1,
    "explanationEn": "Community action essential for Aedes control.",
    "explanationHi": "PPE components।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-789",
    "questionEn": "Kishori Swasthya Program targets:",
    "questionHi": "दस्ताने कब पहनें?",
    "optionsEn": [
      "Children only",
      "Adolescent girls' health and nutrition",
      "Adults only",
      "Elderly only"
    ],
    "optionsHi": [
      "कभी नहीं",
      "रक्त/शरीर द्रव, म्यूकस मेम्ब्रेन, टूटी त्वचा को छूते समय",
      "हमेशा",
      "कभी-कभी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Program focuses on adolescent girl health issues.",
    "explanationHi": "Glove use।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-790",
    "questionEn": "Adolescent anemia program provides:",
    "questionHi": "Donning और Doffing PPE में क्या है?",
    "optionsEn": [
      "Only food",
      "IFA supplementation and deworming",
      "Only medicine",
      "Only education"
    ],
    "optionsHi": [
      "खाना",
      "Donning = PPE पहनना, Doffing = PPE उतारना (सही क्रम में)",
      "सोना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Program addresses anemia through supplements and deworming.",
    "explanationHi": "PPE sequence।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-791",
    "questionEn": "Menstrual hygiene education in schools should cover:",
    "questionHi": "स्पिल मैनेजमेंट (Spill Management) क्या है?",
    "optionsEn": [
      "Only biology",
      "Biology, hygiene practices, myth-busting",
      "Only myths",
      "Only products"
    ],
    "optionsHi": [
      "अनदेखा करना",
      "रक्त/शरीर द्रव गिरने पर सुरक्षित सफाई",
      "कुछ नहीं करना",
      "पानी डालना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Comprehensive education addresses multiple aspects.",
    "explanationHi": "Safe cleanup।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-792",
    "questionEn": "Sanitary napkin distribution programs provide:",
    "questionHi": "छोटे स्पिल (<10ml) को कैसे साफ करें?",
    "optionsEn": [
      "Only education",
      "Affordable/free sanitary products to girls",
      "Only disposal bins",
      "Only incinerators"
    ],
    "optionsHi": [
      "अनदेखा करें",
      "दस्ताने पहनकर, एब्जॉर्बेंट से पोंछें, डिसइंफेक्ट करें",
      "पैर से रगड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Access to products enables menstrual hygiene management.",
    "explanationHi": "Small spill।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-793",
    "questionEn": "Napkin incinerator in schools safely disposes:",
    "questionHi": "बड़े स्पिल को साफ करने में क्या अतिरिक्त करें?",
    "optionsEn": [
      "Food waste",
      "Used sanitary napkins",
      "Paper waste",
      "Plastic waste"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "0.5% सोडियम हाइपोक्लोराइट डालें, 10-20 मिनट छोड़ें",
      "केवल पानी",
      "केवल पोंछें"
    ],
    "correctAnswer": 1,
    "explanationEn": "Incinerators safely destroy menstrual waste.",
    "explanationHi": "Large spill।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-794",
    "questionEn": "Physical education benefits include:",
    "questionHi": "क्लोरीन घोल बनाने की विधि क्या है?",
    "optionsEn": [
      "Only sports skills",
      "Physical fitness, coordination, social skills",
      "Only competition",
      "Only discipline"
    ],
    "optionsHi": [
      "कोई विधि नहीं",
      "ब्लीचिंग पाउडर को पानी में घोलना (जरूरत के अनुसार सांद्रता)",
      "सीधे उपयोग",
      "कुछ भी मिलाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "PE provides multiple developmental benefits.",
    "explanationHi": "Chlorine solution।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-795",
    "questionEn": "Mental health awareness in schools addresses:",
    "questionHi": "कीटाणुशोधन (Disinfection) और रोगाणुशोधन (Sterilization) में क्या अंतर है?",
    "optionsEn": [
      "Only academic stress",
      "Stress, bullying, mental wellness, seeking help",
      "Only behavior",
      "Only grades"
    ],
    "optionsHi": [
      "एक ही हैं",
      "डिसइंफेक्शन = अधिकांश जीवाणु नष्ट, स्टेरिलाइज़ेशन = सभी जीवाणु/स्पोर नष्ट",
      "विपरीत",
      "कोई अंतर नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Comprehensive mental health promotion in schools.",
    "explanationHi": "Disinfection vs sterilization।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-796",
    "questionEn": "Bullying prevention requires:",
    "questionHi": "ऑटोक्लेव क्या करता है?",
    "optionsEn": [
      "Ignoring",
      "Policy, awareness, support systems",
      "Only punishment",
      "Only counseling"
    ],
    "optionsHi": [
      "ठंडा करता है",
      "भाप और दबाव से स्टेरिलाइज़ करता है",
      "गर्म करता है केवल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple strategies needed for bullying prevention.",
    "explanationHi": "Steam sterilization।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-797",
    "questionEn": "School counselor helps with:",
    "questionHi": "ऑटोक्लेव में कितना तापमान और समय चाहिए?",
    "optionsEn": [
      "Only academics",
      "Emotional, social, and behavioral issues",
      "Only discipline",
      "Only attendance"
    ],
    "optionsHi": [
      "50°C, 5 मिनट",
      "121°C, 15-20 मिनट (15 psi)",
      "200°C, 1 घंटा",
      "कमरे का तापमान"
    ],
    "correctAnswer": 1,
    "explanationEn": "Counselors support student well-being comprehensively.",
    "explanationHi": "Autoclave parameters।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-798",
    "questionEn": "Inclusive education ensures:",
    "questionHi": "बॉयलिंग (उबालना) से क्या होता है?",
    "optionsEn": [
      "Separation",
      "All children including disabled learn together",
      "Only special schools",
      "Only normal children"
    ],
    "optionsHi": [
      "स्टेरिलाइज़ेशन",
      "High-Level Disinfection (HLD)",
      "कुछ नहीं",
      "ठंडा होना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Inclusive education integrates all children.",
    "explanationHi": "Boiling disinfects।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-799",
    "questionEn": "Logical framework for program planning includes:",
    "questionHi": "उपकरणों को उबालकर HLD के लिए कितना समय चाहिए?",
    "optionsEn": [
      "Only objectives",
      "Goal, objectives, outputs, activities, indicators",
      "Only activities",
      "Only budget"
    ],
    "optionsHi": [
      "5 मिनट",
      "20 मिनट (ढक्कन बंद करके)",
      "1 घंटा",
      "1 मिनट"
    ],
    "correctAnswer": 1,
    "explanationEn": "LogFrame links all planning elements systematically.",
    "explanationHi": "Boiling time।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-800",
    "questionEn": "Gantt chart shows:",
    "questionHi": "स्वास्थ्य एवं स्वच्छता में MPHW की सबसे महत्वपूर्ण भूमिका क्या है?",
    "optionsEn": [
      "Only budget",
      "Activities against timeline",
      "Only staff",
      "Only objectives"
    ],
    "optionsHi": [
      "केवल दवाई देना",
      "सामुदायिक स्वास्थ्य शिक्षा, रोग रोकथाम, और प्राथमिक देखभाल",
      "केवल अस्पताल में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Gantt charts visualize activity scheduling.",
    "explanationHi": "Community health worker।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-801",
    "questionEn": "Budget planning for health programs considers:",
    "questionHi": "HWC में कौन सी 12 सेवाएं दी जाती हैं?",
    "optionsEn": [
      "Only salaries",
      "Personnel, supplies, travel, equipment, overheads",
      "Only equipment",
      "Only travel"
    ],
    "optionsHi": [
      "केवल 3",
      "मातृ-शिशु स्वास्थ्य, परिवार नियोजन, संक्रामक/गैर-संक्रामक रोग, आंख/कान/दंत/मानसिक स्वास्थ्य, बुजुर्ग देखभाल, आपातकालीन सेवाएं",
      "केवल टीकाकरण",
      "कोई सेवा नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Comprehensive budgeting covers all cost categories.",
    "explanationHi": "CPHC services।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-802",
    "questionEn": "Cost-effectiveness analysis compares:",
    "questionHi": "Yoga का स्वास्थ्य पर क्या प्रभाव है?",
    "optionsEn": [
      "Only costs",
      "Cost per unit of health outcome achieved",
      "Only outcomes",
      "Only inputs"
    ],
    "optionsHi": [
      "कोई प्रभाव नहीं",
      "तनाव कम, लचीलापन बढ़ना, मानसिक शांति, NCD नियंत्रण में मदद",
      "नुकसान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CEA relates costs to outcomes for efficiency comparison.",
    "explanationHi": "Yoga benefits।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-803",
    "questionEn": "Supervision in health programs ensures:",
    "questionHi": "अंतर्राष्ट्रीय योग दिवस कब है?",
    "optionsEn": [
      "Only compliance",
      "Quality, support, problem-solving",
      "Only punishment",
      "Only reporting"
    ],
    "optionsHi": [
      "21 मई",
      "21 जून",
      "21 जुलाई",
      "21 अगस्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "Supportive supervision improves performance.",
    "explanationHi": "International Yoga Day।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-804",
    "questionEn": "Supportive supervision focuses on:",
    "questionHi": "AYUSH का पूर्ण रूप क्या है?",
    "optionsEn": [
      "Finding faults",
      "Identifying needs and providing support",
      "Only inspection",
      "Only documentation"
    ],
    "optionsHi": [
      "केवल आयुर्वेद",
      "Ayurveda, Yoga, Unani, Siddha, Homeopathy",
      "केवल योग",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Supportive approach builds capacity rather than criticizing.",
    "explanationHi": "Traditional medicine।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-805",
    "questionEn": "Checklist for supervision helps:",
    "questionHi": "HWC में Wellness Activities में क्या शामिल है?",
    "optionsEn": [
      "Nothing",
      "Systematic assessment of key areas",
      "Only paperwork",
      "Only time-wasting"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "योग, ध्यान, स्वास्थ्य परामर्श, स्क्रीनिंग",
      "केवल दवाई",
      "केवल सर्जरी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Checklists ensure consistent comprehensive supervision.",
    "explanationHi": "Wellness promotion।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-806",
    "questionEn": "Feedback after supervision should be:",
    "questionHi": "Population-Based Screening क्या है?",
    "optionsEn": [
      "Only negative",
      "Constructive with action points",
      "Only positive",
      "None given"
    ],
    "optionsHi": [
      "केवल बीमारों की",
      "निर्धारित आयु वर्ग की पूरी आबादी की जांच (जैसे 30+ में NCD)",
      "कोई जांच नहीं",
      "केवल अस्पताल में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Balanced constructive feedback guides improvement.",
    "explanationHi": "Mass screening।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-807",
    "questionEn": "Follow-up on supervision findings ensures:",
    "questionHi": "CBAC (Community Based Assessment Checklist) क्या है?",
    "optionsEn": [
      "Nothing",
      "Issues are addressed and improvements made",
      "Only documentation",
      "Only compliance"
    ],
    "optionsHi": [
      "खाद्य सूची",
      "NCD जोखिम आकलन का उपकरण",
      "दवाई सूची",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Follow-up ensures supervision leads to action.",
    "explanationHi": "Risk assessment।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-808",
    "questionEn": "Capacity building includes:",
    "questionHi": "CBAC फॉर्म में कौन से जोखिम कारक पूछे जाते हैं?",
    "optionsEn": [
      "Only training",
      "Training, mentoring, systems strengthening",
      "Only equipment",
      "Only buildings"
    ],
    "optionsHi": [
      "केवल उम्र",
      "उम्र, तंबाकू, शराब, कमर परिधि, शारीरिक गतिविधि, पारिवारिक इतिहास",
      "कुछ नहीं",
      "केवल वजन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Capacity building has multiple dimensions.",
    "explanationHi": "CBAC questions।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-809",
    "questionEn": "Training needs assessment identifies:",
    "questionHi": "Teleconsultation का लाभ क्या है?",
    "optionsEn": [
      "Only funding",
      "Gaps between current and required competencies",
      "Only equipment",
      "Only staff numbers"
    ],
    "optionsHi": [
      "कोई लाभ नहीं",
      "दूरस्थ क्षेत्रों में विशेषज्ञ सलाह, समय/पैसा बचत",
      "नुकसान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "TNA identifies what training is needed.",
    "explanationHi": "Telemedicine benefit।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-810",
    "questionEn": "On-the-job training provides:",
    "questionHi": "eSanjeevani AB-HWC क्या है?",
    "optionsEn": [
      "Only theory",
      "Practical learning in work setting",
      "Only certificates",
      "Only lectures"
    ],
    "optionsHi": [
      "खेल",
      "HWC से विशेषज्ञों से टेलीकंसल्टेशन",
      "बैंकिंग",
      "शिक्षा"
    ],
    "correctAnswer": 1,
    "explanationEn": "OJT combines learning with actual work.",
    "explanationHi": "HWC teleconsultation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-811",
    "questionEn": "Infection prevention in community settings includes:",
    "questionHi": "eSanjeevani OPD क्या है?",
    "optionsEn": [
      "Only hospitals measures",
      "Hand hygiene, respiratory etiquette, environmental cleaning",
      "Only isolation",
      "Only medication"
    ],
    "optionsHi": [
      "केवल अस्पताल",
      "घर से सीधे डॉक्टर से ऑनलाइन परामर्श",
      "केवल इमरजेंसी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Basic IPC applies to community settings too.",
    "explanationHi": "Patient-to-doctor।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-812",
    "questionEn": "Disease notification timeline varies by:",
    "questionHi": "DigiLocker में कौन से स्वास्थ्य दस्तावेज़ रख सकते हैं?",
    "optionsEn": [
      "Nothing",
      "Disease severity and outbreak potential",
      "Only convenience",
      "Only weekdays"
    ],
    "optionsHi": [
      "कोई नहीं",
      "टीकाकरण प्रमाणपत्र, ABHA ID, स्वास्थ्य रिकॉर्ड",
      "केवल आधार",
      "केवल पैन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Urgent diseases require immediate notification.",
    "explanationHi": "Digital health documents।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-813",
    "questionEn": "Immediate notification diseases include:",
    "questionHi": "PHR (Personal Health Record) क्या है?",
    "optionsEn": [
      "Common cold",
      "Cholera, plague, suspected outbreak",
      "Minor illness",
      "Chronic diseases"
    ],
    "optionsHi": [
      "अस्पताल रिकॉर्ड",
      "व्यक्ति का अपना डिजिटल स्वास्थ्य रिकॉर्ड",
      "सरकारी रिकॉर्ड",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Epidemic-prone diseases need immediate reporting.",
    "explanationHi": "Personal health record।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-814",
    "questionEn": "Weekly reporting diseases include:",
    "questionHi": "NIKSHAY क्या है?",
    "optionsEn": [
      "Only cholera",
      "Malaria, dengue, typhoid, others",
      "Only TB",
      "No diseases"
    ],
    "optionsHi": [
      "पोषण पोर्टल",
      "TB रोगियों का ट्रैकिंग पोर्टल",
      "मलेरिया पोर्टल",
      "HIV पोर्टल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Many diseases reported through weekly system.",
    "explanationHi": "TB surveillance।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-815",
    "questionEn": "Zero reporting means:",
    "questionHi": "NIKSHAY Poshan Yojana क्या है?",
    "optionsEn": [
      "No report needed",
      "Reporting even when no cases (confirms surveillance working)",
      "Only zeros",
      "Stopping surveillance"
    ],
    "optionsHi": [
      "टीकाकरण",
      "TB रोगियों को ₹500/माह पोषण सहायता",
      "शिक्षा",
      "आवास"
    ],
    "correctAnswer": 1,
    "explanationEn": "Zero reports confirm active surveillance with no cases.",
    "explanationHi": "TB nutrition support।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-816",
    "questionEn": "Rapid response team responds to:",
    "questionHi": "RCH (Reproductive and Child Health) पोर्टल क्या है?",
    "optionsEn": [
      "Normal situations",
      "Disease outbreaks and health emergencies",
      "Only administrative issues",
      "Only routine work"
    ],
    "optionsHi": [
      "खेल",
      "मातृ-शिशु स्वास्थ्य सेवाओं का ट्रैकिंग पोर्टल",
      "बैंकिंग",
      "शिक्षा"
    ],
    "correctAnswer": 1,
    "explanationEn": "RRT deploys rapidly to investigate and respond to outbreaks.",
    "explanationHi": "MCH tracking।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-817",
    "questionEn": "Outbreak investigation steps include:",
    "questionHi": "U-WIN क्या है?",
    "optionsEn": [
      "Only treatment",
      "Confirmation, case finding, analysis, control, report",
      "Only reporting",
      "Only laboratory"
    ],
    "optionsHi": [
      "खेल",
      "Universal Immunization Programme डिजिटल प्लेटफॉर्म",
      "बैंकिंग",
      "शिक्षा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Systematic investigation follows standard steps.",
    "explanationHi": "Immunization platform।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-818",
    "questionEn": "Epidemic curve helps:",
    "questionHi": "IHIP (Integrated Health Information Platform) क्या है?",
    "optionsEn": [
      "Nothing",
      "Understand outbreak timing and source",
      "Only decoration",
      "Only publication"
    ],
    "optionsHi": [
      "खेल",
      "रोग निगरानी का डिजिटल प्लेटफॉर्म (IDSP को बदलने वाला)",
      "बैंकिंग",
      "शिक्षा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Epicurve shows outbreak pattern and suggests source type.",
    "explanationHi": "Disease surveillance।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-819",
    "questionEn": "Point source outbreak curve is:",
    "questionHi": "NCD App क्या है?",
    "optionsEn": [
      "Prolonged",
      "Sharp peak then decline",
      "Continuous",
      "Flat"
    ],
    "optionsHi": [
      "गेम",
      "NCD स्क्रीनिंग और फॉलो-अप का मोबाइल ऐप",
      "सोशल मीडिया",
      "बैंकिंग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Point source shows single peak from common exposure.",
    "explanationHi": "NCD mobile app।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-820",
    "questionEn": "Propagated outbreak curve shows:",
    "questionHi": "ANM Online App क्या है?",
    "optionsEn": [
      "Single peak",
      "Multiple peaks from person-to-person spread",
      "No pattern",
      "Declining only"
    ],
    "optionsHi": [
      "गेम",
      "ANM के लिए RCH सेवाओं का मोबाइल ऐप",
      "सोशल मीडिया",
      "बैंकिंग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Propagated spread creates successive generation peaks.",
    "explanationHi": "ANM app।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-821",
    "questionEn": "Hand hygiene audit frequency should be:",
    "questionHi": "104 Health Helpline क्या है?",
    "optionsEn": [
      "Never",
      "Regular to monitor compliance trends",
      "Only once",
      "Only during outbreaks"
    ],
    "optionsHi": [
      "पुलिस",
      "स्वास्थ्य सलाह और जानकारी हेल्पलाइन",
      "फायर",
      "रेलवे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Regular audits track compliance and guide improvement.",
    "explanationHi": "Health helpline।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-822",
    "questionEn": "Hand hygiene promotion strategies include:",
    "questionHi": "Aarogya Setu App क्या था?",
    "optionsEn": [
      "Only posters",
      "Training, reminders, feedback, infrastructure",
      "Only punishment",
      "Only guidelines"
    ],
    "optionsHi": [
      "गेम",
      "COVID-19 कॉन्टैक्ट ट्रेसिंग और जानकारी ऐप",
      "बैंकिंग",
      "शिक्षा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multimodal strategies most effective for improvement.",
    "explanationHi": "COVID app।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-823",
    "questionEn": "Accessibility of hand hygiene supplies means:",
    "questionHi": "mSeva/Kilkari क्या है?",
    "optionsEn": [
      "Only storage",
      "Soap and water/sanitizer available at point of use",
      "Only purchasing",
      "Only training"
    ],
    "optionsHi": [
      "गेम",
      "गर्भवती/नई माताओं को स्वास्थ्य संदेश भेजने की सेवा",
      "बैंकिंग",
      "शिक्षा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Supplies must be accessible where needed.",
    "explanationHi": "Mobile health messages।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-824",
    "questionEn": "Hand hygiene facilities in public places include:",
    "questionHi": "POSHAN Tracker क्या है?",
    "optionsEn": [
      "Nothing needed",
      "Wash basins with soap at toilets, food areas",
      "Only at home",
      "Only in hospitals"
    ],
    "optionsHi": [
      "खेल",
      "ICDS लाभार्थियों की निगरानी का ऐप",
      "बैंकिंग",
      "शिक्षा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Public handwashing facilities enable hygiene practice.",
    "explanationHi": "Nutrition tracking।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-825",
    "questionEn": "Automated dispensers for sanitizer help by:",
    "questionHi": "GIS (Geographic Information System) का स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "Nothing",
      "Reducing touch and ensuring correct dose",
      "Only appearance",
      "Only cost"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "रोग मैपिंग, संसाधन योजना, हॉटस्पॉट पहचान",
      "केवल मनोरंजन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Touchless dispensers reduce contamination risk.",
    "explanationHi": "Health mapping।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-826",
    "questionEn": "Skin-friendly hand hygiene products reduce:",
    "questionHi": "सामुदायिक भागीदारी में ASHA की भूमिका क्या है?",
    "optionsEn": [
      "Effectiveness",
      "Skin damage and encourage compliance",
      "Cost",
      "Quality"
    ],
    "optionsHi": [
      "कोई भूमिका नहीं",
      "स्वास्थ्य सेवाओं और समुदाय के बीच कड़ी",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Products that don't damage skin encourage regular use.",
    "explanationHi": "Community link।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-827",
    "questionEn": "Emollient in hand hygiene products:",
    "questionHi": "ASHA के मुख्य कार्य क्या हैं?",
    "optionsEn": [
      "Reduces effectiveness",
      "Moisturizes skin preventing dryness",
      "Only adds cost",
      "Nothing useful"
    ],
    "optionsHi": [
      "केवल दवाई",
      "स्वास्थ्य शिक्षा, रेफरल, टीकाकरण सहायता, ANC/PNC फॉलो-अप, ORS/OCP वितरण",
      "केवल सर्जरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Emollients protect skin during frequent washing.",
    "explanationHi": "ASHA roles।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-828",
    "questionEn": "Cultural considerations in hygiene promotion include:",
    "questionHi": "ASHA किट में क्या होता है?",
    "optionsEn": [
      "Ignoring culture",
      "Respecting local practices while promoting health",
      "Only Western methods",
      "Only traditional methods"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "ORS, IFA, कंडोम, OCP, थर्मामीटर, बेसिक दवाइयां",
      "केवल कागज",
      "केवल पैसे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Culturally sensitive approaches increase acceptance.",
    "explanationHi": "ASHA kit।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-829",
    "questionEn": "Left hand use for certain activities in some cultures requires:",
    "questionHi": "MPHW और ASHA के बीच समन्वय क्यों जरूरी है?",
    "optionsEn": [
      "Ignoring",
      "Understanding and appropriate messaging",
      "Changing culture",
      "Only criticism"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "बेहतर सेवा वितरण, फॉलो-अप, जानकारी साझा करना",
      "प्रतिस्पर्धा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cultural practices inform hygiene messaging approach.",
    "explanationHi": "Team work।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-830",
    "questionEn": "Ash use for handwashing is:",
    "questionHi": "AWW (Anganwadi Worker) और MPHW के बीच समन्वय किन क्षेत्रों में है?",
    "optionsEn": [
      "Useless",
      "Better than water alone, soap preferred",
      "Best method",
      "Harmful"
    ],
    "optionsHi": [
      "कोई समन्वय नहीं",
      "पोषण, टीकाकरण, स्वास्थ्य शिक्षा, रेफरल",
      "केवल खाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ash can be alternative where soap unavailable.",
    "explanationHi": "ICDS coordination।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-831",
    "questionEn": "Water source mapping identifies:",
    "questionHi": "स्वास्थ्य टीम में शामिल कौन हैं (Sub-Centre/HWC स्तर)?",
    "optionsEn": [
      "Only one source",
      "All water sources and their status in area",
      "Only piped water",
      "Only wells"
    ],
    "optionsHi": [
      "केवल डॉक्टर",
      "ANM/MPHW-F, MPHW-M, CHO, ASHA",
      "कोई नहीं",
      "केवल नर्स"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mapping shows water source distribution and condition.",
    "explanationHi": "Primary health team।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-832",
    "questionEn": "Water source protection zone restricts:",
    "questionHi": "PHC टीम में कौन शामिल हैं?",
    "optionsEn": [
      "Nothing",
      "Activities that could contaminate source",
      "Only buildings",
      "Only farming"
    ],
    "optionsHi": [
      "केवल MO",
      "MO, Staff Nurse, Pharmacist, Lab Tech, MPHW-M/F, Health Assistant",
      "कोई नहीं",
      "केवल ANM"
    ],
    "correctAnswer": 1,
    "explanationEn": "Protection zones prevent contamination activities near source.",
    "explanationHi": "PHC team।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-833",
    "questionEn": "Sanitary inspection of water source checks:",
    "questionHi": "PRI (Panchayati Raj Institutions) का स्वास्थ्य में क्या योगदान है?",
    "optionsEn": [
      "Only flow",
      "Contamination risks from surroundings",
      "Only taste",
      "Only color"
    ],
    "optionsHi": [
      "कोई योगदान नहीं",
      "स्थानीय निगरानी, समन्वय, संसाधन, जागरूकता",
      "केवल राजनीति",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Inspection identifies potential contamination pathways.",
    "explanationHi": "Local governance।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-834",
    "questionEn": "Risk-based water quality monitoring prioritizes:",
    "questionHi": "ग्राम प्रधान/सरपंच का स्वास्थ्य में क्या योगदान हो सकता है?",
    "optionsEn": [
      "Random testing",
      "Higher risk sources and critical parameters",
      "Only convenient sources",
      "Only urban areas"
    ],
    "optionsHi": [
      "कोई योगदान नहीं",
      "VHSNC नेतृत्व, जागरूकता, संसाधन जुटाना, समन्वय",
      "केवल राजनीति",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Risk-based approach focuses resources on greatest needs.",
    "explanationHi": "Village leadership।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-835",
    "questionEn": "Corrective action for contaminated water includes:",
    "questionHi": "SHG (Self Help Groups) का स्वास्थ्य में क्या योगदान है?",
    "optionsEn": [
      "Ignoring",
      "Treatment, source protection, alternative supply",
      "Only reporting",
      "Only documentation"
    ],
    "optionsHi": [
      "कोई योगदान नहीं",
      "स्वास्थ्य जागरूकता, आपसी सहयोग, स्वास्थ्य बचत",
      "केवल बचत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Immediate action needed when contamination detected.",
    "explanationHi": "Women's groups।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-836",
    "questionEn": "Water quality improvement plan addresses:",
    "questionHi": "NGO का स्वास्थ्य में क्या योगदान हो सकता है?",
    "optionsEn": [
      "Only treatment",
      "Source, treatment, storage, distribution issues",
      "Only distribution",
      "Only storage"
    ],
    "optionsHi": [
      "कोई योगदान नहीं",
      "सेवा वितरण, जागरूकता, वंचित समूहों तक पहुंच",
      "केवल पैसा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Improvement plan covers entire water system.",
    "explanationHi": "NGO role।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-837",
    "questionEn": "Community water committee manages:",
    "questionHi": "CSR (Corporate Social Responsibility) का स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "Nothing",
      "Local water supply operation and maintenance",
      "Only complaints",
      "Only money"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "स्वास्थ्य अवसंरचना, उपकरण, कार्यक्रम सहायता",
      "केवल मुनाफा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Water committees ensure sustainable local management.",
    "explanationHi": "Corporate support।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-838",
    "questionEn": "User fees for water help:",
    "questionHi": "स्कूल शिक्षकों का स्वास्थ्य में क्या योगदान है?",
    "optionsEn": [
      "Nothing",
      "Sustain operation and maintenance costs",
      "Only profit",
      "Only government"
    ],
    "optionsHi": [
      "कोई योगदान नहीं",
      "स्वास्थ्य शिक्षा, स्वच्छता आदतें, प्राथमिक चिकित्सा, रेफरल",
      "केवल पढ़ाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cost recovery enables sustainable water supply.",
    "explanationHi": "Teacher's role।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-839",
    "questionEn": "Water supply equity means:",
    "questionHi": "धार्मिक/सामुदायिक नेताओं का स्वास्थ्य में क्या योगदान हो सकता है?",
    "optionsEn": [
      "Only paying customers",
      "Access for all including poor and marginalized",
      "Only urban areas",
      "Only wealthy"
    ],
    "optionsHi": [
      "कोई योगदान नहीं",
      "संदेश फैलाना, सांस्कृतिक बाधाएं दूर करना, प्रेरणा",
      "केवल धर्म",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Equitable access ensures all populations served.",
    "explanationHi": "Community leaders।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-840",
    "questionEn": "Water scarcity management includes:",
    "questionHi": "युवा स्वयंसेवकों का स्वास्थ्य में क्या योगदान है?",
    "optionsEn": [
      "Only more sources",
      "Conservation, efficiency, alternative sources",
      "Only rationing",
      "Only complaints"
    ],
    "optionsHi": [
      "कोई योगदान नहीं",
      "जागरूकता अभियान, सर्वे, स्वच्छता अभियान सहायता",
      "केवल खेल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple strategies address water scarcity.",
    "explanationHi": "Youth volunteers।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-841",
    "questionEn": "Sanitation coverage monitoring tracks:",
    "questionHi": "एथिक्स (Ethics) स्वास्थ्य सेवा में क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Only numbers",
      "Access, use, quality of facilities",
      "Only construction",
      "Only spending"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "रोगी का सम्मान, विश्वास, गुणवत्ता सेवा",
      "केवल औपचारिकता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Monitoring covers multiple sanitation dimensions.",
    "explanationHi": "Medical ethics।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-842",
    "questionEn": "JMP ladder for sanitation includes levels:",
    "questionHi": "रोगी की गोपनीयता (Confidentiality) क्या है?",
    "optionsEn": [
      "Only two",
      "Open defecation, unimproved, limited, basic, safely managed",
      "Only one",
      "Only three"
    ],
    "optionsHi": [
      "सबको बताना",
      "रोगी की स्वास्थ्य जानकारी गुप्त रखना",
      "सार्वजनिक करना",
      "अनदेखा करना"
    ],
    "correctAnswer": 1,
    "explanationEn": "JMP service ladder has five levels.",
    "explanationHi": "Patient privacy।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-843",
    "questionEn": "Safely managed sanitation requires:",
    "questionHi": "सूचित सहमति (Informed Consent) क्या है?",
    "optionsEn": [
      "Only toilet",
      "Toilet plus safe containment, treatment, disposal",
      "Only pit",
      "Only flush"
    ],
    "optionsHi": [
      "जबरदस्ती",
      "प्रक्रिया की जानकारी देकर रोगी की सहमति लेना",
      "बिना बताए",
      "अनदेखा करना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Safely managed includes entire sanitation chain.",
    "explanationHi": "Informed consent।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-844",
    "questionEn": "Basic sanitation service means:",
    "questionHi": "रोगी के अधिकार क्या हैं?",
    "optionsEn": [
      "Open defecation",
      "Improved facility not shared with other households",
      "Shared toilet",
      "Any toilet"
    ],
    "optionsHi": [
      "कोई अधिकार नहीं",
      "जानकारी, गोपनीयता, गरिमा, सहमति, दूसरी राय",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Basic is improved facility used by single household.",
    "explanationHi": "Patient rights।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-845",
    "questionEn": "Limited sanitation service is:",
    "questionHi": "सभी रोगियों के साथ समान व्यवहार क्यों जरूरी है?",
    "optionsEn": [
      "Open defecation",
      "Improved facility shared between households",
      "No facility",
      "Safely managed"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "भेदभाव रहित सेवा, मानवाधिकार, पेशेवर दायित्व",
      "जाति से फर्क",
      "धर्म से फर्क"
    ],
    "correctAnswer": 1,
    "explanationEn": "Limited is improved but shared facility.",
    "explanationHi": "Non-discrimination।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-846",
    "questionEn": "Unimproved sanitation includes:",
    "questionHi": "स्वास्थ्य कर्मी का पेशेवर व्यवहार कैसा होना चाहिए?",
    "optionsEn": [
      "Flush toilet",
      "Pit without slab, hanging toilet, bucket",
      "Pour flush",
      "Septic system"
    ],
    "optionsHi": [
      "अशिष्ट",
      "सम्मानजनक, धैर्यवान, ईमानदार, समय पर, जिम्मेदार",
      "उदासीन",
      "लापरवाह"
    ],
    "correctAnswer": 1,
    "explanationEn": "Unimproved facilities don't hygienically separate excreta.",
    "explanationHi": "Professional conduct।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-847",
    "questionEn": "Sanitation in emergencies requires:",
    "questionHi": "स्वास्थ्य सेवा में भ्रष्टाचार के उदाहरण क्या हैं?",
    "optionsEn": [
      "Normal approach",
      "Rapid deployment of temporary facilities",
      "No urgency",
      "Only permanent solutions"
    ],
    "optionsHi": [
      "कोई नहीं",
      "रिश्वत, मुफ्त दवाई बेचना, अनुपस्थिति, झूठी रिपोर्ट",
      "ईमानदारी",
      "सेवा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Emergency sanitation needs quick appropriate response.",
    "explanationHi": "Corruption।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-848",
    "questionEn": "Emergency latrine options include:",
    "questionHi": "जन शिकायत निवारण (Grievance Redressal) क्या है?",
    "optionsEn": [
      "Only flush toilets",
      "Trench latrines, chemical toilets, raised latrines",
      "Only septic tanks",
      "Only sewerage"
    ],
    "optionsHi": [
      "शिकायत अनदेखी",
      "रोगियों की शिकायतों का समाधान",
      "शिकायत दबाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Various options suit different emergency contexts.",
    "explanationHi": "Complaint handling।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-849",
    "questionEn": "Sphere standards for emergency sanitation specify:",
    "questionHi": "RTI (Right to Information) का स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "No standards",
      "Toilet ratios, distance, accessibility",
      "Only quality",
      "Only cost"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "स्वास्थ्य सेवाओं की जानकारी प्राप्त करना, पारदर्शिता",
      "केवल राजनीति",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sphere provides humanitarian sanitation standards.",
    "explanationHi": "Information access।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-850",
    "questionEn": "Menstrual hygiene in emergencies requires:",
    "questionHi": "जन स्वास्थ्य कानूनों के उदाहरण क्या हैं?",
    "optionsEn": [
      "Ignoring",
      "Provision of supplies and private facilities",
      "Only later attention",
      "Only for adults"
    ],
    "optionsHi": [
      "कोई कानून नहीं",
      "Epidemic Diseases Act, PCPNDT Act, COTPA, MTP Act, Food Safety Act",
      "केवल एक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MHM needs addressed in emergency response.",
    "explanationHi": "Public health laws।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-851",
    "questionEn": "Waste characterization study determines:",
    "questionHi": "Epidemic Diseases Act 1897 का उपयोग कब होता है?",
    "optionsEn": [
      "Only weight",
      "Composition, quantity, sources of waste",
      "Only color",
      "Only smell"
    ],
    "optionsHi": [
      "सामान्य समय में",
      "महामारी नियंत्रण के लिए विशेष शक्तियां",
      "कभी नहीं",
      "केवल चुनाव में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Characterization informs waste management planning.",
    "explanationHi": "Epidemic powers।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-852",
    "questionEn": "Waste generation rate is affected by:",
    "questionHi": "Clinical Establishments Act क्या है?",
    "optionsEn": [
      "Nothing",
      "Income, lifestyle, season, urbanization",
      "Only policy",
      "Only weather"
    ],
    "optionsHi": [
      "शिक्षा कानून",
      "स्वास्थ्य संस्थानों के पंजीकरण और मानक का कानून",
      "खाद्य कानून",
      "जल कानून"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple factors influence waste generation.",
    "explanationHi": "Healthcare regulation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-853",
    "questionEn": "Seasonal variation in waste includes:",
    "questionHi": "Indian Medical Council/NMC का क्या कार्य है?",
    "optionsEn": [
      "No variation",
      "More organic waste during harvest, festival waste peaks",
      "Only constant",
      "Only decreasing"
    ],
    "optionsHi": [
      "सड़क बनाना",
      "चिकित्सा शिक्षा और पेशे का नियमन",
      "खाद्य निरीक्षण",
      "जल आपूर्ति"
    ],
    "correctAnswer": 1,
    "explanationEn": "Waste quantity and composition varies seasonally.",
    "explanationHi": "Medical regulation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-854",
    "questionEn": "Commercial waste differs from household by:",
    "questionHi": "Indian Nursing Council/State Nursing Council का क्या कार्य है?",
    "optionsEn": [
      "No difference",
      "Higher volumes, different composition",
      "Only location",
      "Only time"
    ],
    "optionsHi": [
      "डॉक्टरों का नियमन",
      "नर्सिंग शिक्षा और पेशे का नियमन, पंजीकरण",
      "खाद्य निरीक्षण",
      "जल आपूर्ति"
    ],
    "correctAnswer": 1,
    "explanationEn": "Commercial waste has distinct characteristics.",
    "explanationHi": "Nursing regulation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-855",
    "questionEn": "Market waste is typically:",
    "questionHi": "स्वास्थ्य कर्मी के लिए Continuing Education क्यों जरूरी है?",
    "optionsEn": [
      "Low organic",
      "High in organic/vegetable waste",
      "Only plastic",
      "Only paper"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "नई जानकारी, कौशल अपडेट, बेहतर सेवा",
      "समय बर्बाद",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Markets generate high organic waste from produce.",
    "explanationHi": "Lifelong learning।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-856",
    "questionEn": "Institutional waste management requires:",
    "questionHi": "CME (Continuing Medical Education) क्या है?",
    "optionsEn": [
      "No special approach",
      "Specific plan for schools, offices, hospitals",
      "Only household methods",
      "Only burning"
    ],
    "optionsHi": [
      "प्रारंभिक शिक्षा",
      "चिकित्सा पेशेवरों की निरंतर शिक्षा",
      "स्कूल शिक्षा",
      "कॉलेज शिक्षा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Institutions need tailored waste management.",
    "explanationHi": "Professional development।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-857",
    "questionEn": "Construction waste management includes:",
    "questionHi": "MPHW के लिए In-Service Training क्यों जरूरी है?",
    "optionsEn": [
      "Only dumping",
      "Segregation, reuse, recycling of debris",
      "Only burning",
      "Only burying"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "नए कार्यक्रम, कौशल, प्रोटोकॉल सीखना",
      "समय बर्बाद",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "C&D waste has recycling and reuse potential.",
    "explanationHi": "On-job training।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-858",
    "questionEn": "Garden waste can be:",
    "questionHi": "iGOT (Integrated Government Online Training) क्या है?",
    "optionsEn": [
      "Only burned",
      "Composted or mulched",
      "Only dumped",
      "Only buried"
    ],
    "optionsHi": [
      "खेल",
      "सरकारी कर्मचारियों के लिए ऑनलाइन प्रशिक्षण प्लेटफॉर्म",
      "बैंकिंग",
      "शिक्षा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Garden waste is good composting feedstock.",
    "explanationHi": "Online training।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-859",
    "questionEn": "Textile waste recycling includes:",
    "questionHi": "स्वास्थ्य कर्मी का तनाव प्रबंधन क्यों जरूरी है?",
    "optionsEn": [
      "Only burning",
      "Reuse, rag making, fiber recovery",
      "Only dumping",
      "Only export"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "बर्नआउट रोकना, बेहतर सेवा, व्यक्तिगत स्वास्थ्य",
      "तनाव अच्छा है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Textiles have multiple recovery pathways.",
    "explanationHi": "Self-care।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-860",
    "questionEn": "Waste bank concept involves:",
    "questionHi": "बर्नआउट (Burnout) क्या है?",
    "optionsEn": [
      "Burying waste",
      "Community members deposit recyclables for value",
      "Only loans",
      "Only burning"
    ],
    "optionsHi": [
      "ऊर्जा बढ़ना",
      "लंबे तनाव से थकान, निराशा, कम प्रभावशीलता",
      "खुशी",
      "सफलता"
    ],
    "correctAnswer": 1,
    "explanationEn": "Waste banks incentivize recycling through value exchange.",
    "explanationHi": "Job burnout।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "5",
    "tags": [
      "5"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-861",
    "questionEn": "Food service establishment inspection checks:",
    "questionHi": "स्वास्थ्य कार्यक्रमों में साक्ष्य-आधारित (Evidence-Based) दृष्टिकोण क्या है?",
    "optionsEn": [
      "Only license",
      "Hygiene, storage, handling, pest control, waste",
      "Only taste",
      "Only appearance"
    ],
    "optionsHi": [
      "अंधविश्वास",
      "वैज्ञानिक शोध और डेटा पर आधारित निर्णय",
      "अनुमान",
      "परंपरा केवल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Comprehensive inspection covers all food safety aspects.",
    "explanationHi": "Evidence-based।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-862",
    "questionEn": "Food premises license requires:",
    "questionHi": "स्वास्थ्य शोध (Health Research) का क्या महत्व है?",
    "optionsEn": [
      "No requirements",
      "Meeting hygiene and safety standards",
      "Only payment",
      "Only application"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "नई जानकारी, बेहतर हस्तक्षेप, नीति निर्माण",
      "समय बर्बाद",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Licensing ensures compliance with food safety requirements.",
    "explanationHi": "Research importance।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-863",
    "questionEn": "FSSAI registration is needed for:",
    "questionHi": "ICMR क्या है?",
    "optionsEn": [
      "Only large businesses",
      "All food businesses above threshold",
      "Only restaurants",
      "Only manufacturers"
    ],
    "optionsHi": [
      "कृषि संस्थान",
      "Indian Council of Medical Research (चिकित्सा अनुसंधान परिषद)",
      "शिक्षा संस्थान",
      "उद्योग संस्थान"
    ],
    "correctAnswer": 1,
    "explanationEn": "FSSAI registration/license required based on scale.",
    "explanationHi": "Medical research।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-864",
    "questionEn": "Food safety audit scores help:",
    "questionHi": "AIIMS क्या है?",
    "optionsEn": [
      "Nothing",
      "Identify gaps and track improvement",
      "Only punishment",
      "Only closure"
    ],
    "optionsHi": [
      "कृषि संस्थान",
      "All India Institute of Medical Sciences",
      "शिक्षा संस्थान",
      "उद्योग संस्थान"
    ],
    "correctAnswer": 1,
    "explanationEn": "Scoring systems guide improvement priorities.",
    "explanationHi": "Medical institute।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-865",
    "questionEn": "Food safety training for handlers covers:",
    "questionHi": "NIHFW क्या है?",
    "optionsEn": [
      "Only cooking",
      "Personal hygiene, safe handling, temperature control",
      "Only serving",
      "Only cleaning"
    ],
    "optionsHi": [
      "कृषि संस्थान",
      "National Institute of Health and Family Welfare",
      "शिक्षा संस्थान",
      "उद्योग संस्थान"
    ],
    "correctAnswer": 1,
    "explanationEn": "Training covers all aspects of safe food handling.",
    "explanationHi": "Training institute।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-866",
    "questionEn": "Food safety certification for handlers:",
    "questionHi": "NCDC क्या है?",
    "optionsEn": [
      "Not needed",
      "Demonstrates competency in safe practices",
      "Only for chefs",
      "Only for managers"
    ],
    "optionsHi": [
      "कृषि संस्थान",
      "National Centre for Disease Control",
      "शिक्षा संस्थान",
      "उद्योग संस्थान"
    ],
    "correctAnswer": 1,
    "explanationEn": "Certification validates food safety knowledge.",
    "explanationHi": "Disease control।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-867",
    "questionEn": "Eat Right India movement promotes:",
    "questionHi": "स्वास्थ्य में नवाचार (Innovation) का क्या महत्व है?",
    "optionsEn": [
      "Only eating more",
      "Safe, healthy, sustainable food practices",
      "Only fasting",
      "Only organic food"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "बेहतर समाधान, दक्षता, पहुंच बढ़ाना",
      "पुराने तरीके ही अच्छे",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Eat Right covers multiple dimensions of food and nutrition.",
    "explanationHi": "Health innovation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-868",
    "questionEn": "Clean Street Food Hub certification ensures:",
    "questionHi": "Point of Care Testing (POCT) क्या है?",
    "optionsEn": [
      "Only location",
      "Hygiene and safety standards at street food clusters",
      "Only taste",
      "Only price"
    ],
    "optionsHi": [
      "केवल लैब में",
      "रोगी के पास ही जांच (जैसे glucometer, RDT)",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Certification promotes safe street food practices.",
    "explanationHi": "Near-patient testing।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-869",
    "questionEn": "Food testing laboratory checks:",
    "questionHi": "Low-Cost Medical Devices का क्या महत्व है?",
    "optionsEn": [
      "Only taste",
      "Microbiological, chemical, physical parameters",
      "Only color",
      "Only weight"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "सस्ती और सुलभ स्वास्थ्य सेवाएं",
      "महंगे ही अच्छे",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Labs test multiple food safety parameters.",
    "explanationHi": "Affordable technology।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-870",
    "questionEn": "Food sampling for testing should be:",
    "questionHi": "AI (Artificial Intelligence) का स्वास्थ्य में क्या उपयोग हो सकता है?",
    "optionsEn": [
      "Random only",
      "Representative and properly collected",
      "Only from complaints",
      "Only branded products"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "निदान सहायता, जोखिम भविष्यवाणी, ड्रग डिस्कवरी",
      "केवल गेम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Proper sampling ensures meaningful test results.",
    "explanationHi": "AI in health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-871",
    "questionEn": "Healthy home environment requires:",
    "questionHi": "जलवायु परिवर्तन और स्वास्थ्य में क्या संबंध है?",
    "optionsEn": [
      "Only space",
      "Clean water, sanitation, ventilation, safe materials",
      "Only decoration",
      "Only furniture"
    ],
    "optionsHi": [
      "कोई संबंध नहीं",
      "वेक्टर रोग बढ़ना, गर्मी से मृत्यु, जल संकट, खाद्य असुरक्षा",
      "बेहतर स्वास्थ्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple factors contribute to healthy housing.",
    "explanationHi": "Climate and health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-872",
    "questionEn": "Home injury prevention includes:",
    "questionHi": "Climate Resilient Health System क्या है?",
    "optionsEn": [
      "Only first aid",
      "Safe storage, child-proofing, fall prevention",
      "Only treatment",
      "Only insurance"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "जलवायु परिवर्तन के प्रभावों को सहने और अनुकूलन करने में सक्षम स्वास्थ्य प्रणाली",
      "केवल AC",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Prevention addresses multiple injury hazards.",
    "explanationHi": "Climate adaptation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-873",
    "questionEn": "Child-proofing home involves:",
    "questionHi": "Green Hospital क्या है?",
    "optionsEn": [
      "Nothing special",
      "Securing cabinets, covering outlets, removing hazards",
      "Only locks",
      "Only fencing"
    ],
    "optionsHi": [
      "हरे रंग का",
      "पर्यावरण अनुकूल स्वास्थ्य सुविधा (ऊर्जा, पानी, कचरा प्रबंधन)",
      "केवल पेड़",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Child-proofing addresses various injury risks.",
    "explanationHi": "Sustainable healthcare।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-874",
    "questionEn": "Fall prevention for elderly includes:",
    "questionHi": "Planetary Health क्या है?",
    "optionsEn": [
      "Only bed rest",
      "Good lighting, handrails, non-slip surfaces",
      "Only medicine",
      "Only supervision"
    ],
    "optionsHi": [
      "केवल अंतरिक्ष",
      "मानव स्वास्थ्य और पृथ्वी की प्राकृतिक प्रणालियों का आपसी संबंध",
      "केवल ग्रह",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Environmental modifications reduce fall risk.",
    "explanationHi": "Human-environment health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-875",
    "questionEn": "Safe storage of medicines means:",
    "questionHi": "स्वस्थ शहर (Healthy City) की अवधारणा क्या है?",
    "optionsEn": [
      "Open shelf",
      "Locked cabinet away from children",
      "Kitchen counter",
      "Bedroom table"
    ],
    "optionsHi": [
      "केवल अस्पताल",
      "शहरी वातावरण जो स्वास्थ्य को बढ़ावा दे (स्वच्छ हवा, पानी, हरियाली, सुरक्षा)",
      "केवल बड़े शहर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Medicines secured to prevent accidental ingestion.",
    "explanationHi": "Urban health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-876",
    "questionEn": "Poison prevention includes:",
    "questionHi": "स्वस्थ गांव की विशेषताएं क्या हैं?",
    "optionsEn": [
      "No labels needed",
      "Proper labeling and safe storage of chemicals",
      "Open storage",
      "Mixing containers"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "स्वच्छ पानी, शौचालय, स्वास्थ्य सेवाएं, पोषण, स्वच्छ वातावरण",
      "केवल शहर में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Labeling and storage prevent accidental poisoning.",
    "explanationHi": "Village health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-877",
    "questionEn": "Kitchen safety includes:",
    "questionHi": "Health in All Policies क्या है?",
    "optionsEn": [
      "Open flames anywhere",
      "Proper ventilation, fire safety, safe storage",
      "Only cooking skills",
      "Only recipes"
    ],
    "optionsHi": [
      "केवल स्वास्थ्य विभाग",
      "सभी सरकारी नीतियों में स्वास्थ्य प्रभाव का विचार",
      "कोई नीति नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Kitchen safety covers multiple hazards.",
    "explanationHi": "Intersectoral policy।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-878",
    "questionEn": "Bathroom safety features include:",
    "questionHi": "स्वास्थ्य प्रौद्योगिकी मूल्यांकन (HTA) क्या है?",
    "optionsEn": [
      "Only decoration",
      "Non-slip surfaces, grab bars, ventilation",
      "Only mirrors",
      "Only tiles"
    ],
    "optionsHi": [
      "टीवी खरीदना",
      "स्वास्थ्य हस्तक्षेपों की प्रभावशीलता और लागत का व्यवस्थित मूल्यांकन",
      "केवल खर्च",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Bathroom modifications prevent slips and falls.",
    "explanationHi": "Health technology assessment।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-879",
    "questionEn": "Safe water storage at home prevents:",
    "questionHi": "स्वास्थ्य बजट में वृद्धि क्यों जरूरी है?",
    "optionsEn": [
      "Nothing",
      "Contamination and vector breeding",
      "Only evaporation",
      "Only spillage"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "बेहतर सेवाएं, अवसंरचना, मानव संसाधन, UHC प्राप्त करने के लिए",
      "कम बजट अच्छा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Safe storage maintains water quality and prevents mosquitoes.",
    "explanationHi": "Health financing।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-880",
    "questionEn": "Home garden hygiene includes:",
    "questionHi": "स्वास्थ्य में मानव संसाधन (HRH) की कमी क्या समस्या है?",
    "optionsEn": [
      "Nothing special",
      "Safe composting, avoiding stagnant water, waste disposal",
      "Only watering",
      "Only harvesting"
    ],
    "optionsHi": [
      "कोई समस्या नहीं",
      "सेवाओं की गुणवत्ता और पहुंच प्रभावित",
      "अच्छा है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Garden hygiene prevents health hazards.",
    "explanationHi": "Health workforce।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-881",
    "questionEn": "Dengue prevention at household level includes:",
    "questionHi": "Task Shifting/Sharing क्या है?",
    "optionsEn": [
      "Only fogging",
      "Eliminating water containers, using nets and repellents",
      "Only hospital visit",
      "Only medicine"
    ],
    "optionsHi": [
      "काम न करना",
      "कुछ कार्यों को कम प्रशिक्षित कार्यकर्ताओं को स्थानांतरित करना (HRH कमी में)",
      "अधिक काम डॉक्टर को",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Household actions key to Aedes control.",
    "explanationHi": "Task shifting।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-882",
    "questionEn": "Malaria prevention at household includes:",
    "questionHi": "स्वास्थ्य में असमानताएं दूर करने के उपाय क्या हैं?",
    "optionsEn": [
      "Only treatment",
      "Bed nets, screening, avoiding outdoor exposure at night",
      "Only spraying",
      "Only medicine"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "वंचित क्षेत्रों पर फोकस, मुफ्त सेवाएं, जागरूकता, पहुंच बढ़ाना",
      "असमानता अच्छी है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Personal and household measures prevent malaria.",
    "explanationHi": "Health equity।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-883",
    "questionEn": "Checking stored water weekly prevents:",
    "questionHi": "लेफ्ट आउट (Left Out) आबादी कौन हैं?",
    "optionsEn": [
      "Nothing",
      "Mosquito breeding in containers",
      "Only overflow",
      "Only evaporation"
    ],
    "optionsHi": [
      "सभी",
      "वंचित, दूरस्थ, प्रवासी, अनुसूचित जाति/जनजाति, विकलांग, LGBTQ+",
      "कोई नहीं",
      "केवल अमीर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Weekly checking disrupts mosquito lifecycle.",
    "explanationHi": "Marginalized groups।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-884",
    "questionEn": "Covering water tanks prevents:",
    "questionHi": "MPHW को वंचित आबादी तक कैसे पहुंचना चाहिए?",
    "optionsEn": [
      "Evaporation only",
      "Mosquito entry and breeding",
      "Nothing",
      "Contamination only"
    ],
    "optionsHi": [
      "अनदेखा करना",
      "विशेष प्रयास, घर भेंट, आउटरीच, संवेदनशील व्यवहार",
      "केवल क्लिनिक में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Covers prevent both contamination and breeding.",
    "explanationHi": "Outreach।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-885",
    "questionEn": "Guppy fish in tanks eat:",
    "questionHi": "ट्रांसजेंडर व्यक्तियों के स्वास्थ्य की विशेष जरूरतें क्या हैं?",
    "optionsEn": [
      "Nothing useful",
      "Mosquito larvae",
      "Only algae",
      "Only plants"
    ],
    "optionsHi": [
      "कोई नहीं",
      "सम्मानजनक व्यवहार, विशिष्ट स्वास्थ्य सेवाएं, मानसिक स्वास्थ्य सहायता",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Guppies are biological control for mosquito larvae.",
    "explanationHi": "Transgender health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-886",
    "questionEn": "Window and door screening prevents entry of:",
    "questionHi": "Transgender Persons (Protection of Rights) Act 2019 में स्वास्थ्य प्रावधान क्या है?",
    "optionsEn": [
      "Only dust",
      "Mosquitoes and other insects",
      "Only birds",
      "Only animals"
    ],
    "optionsHi": [
      "कोई प्रावधान नहीं",
      "स्वास्थ्य सेवाओं में भेदभाव रहित पहुंच का अधिकार",
      "केवल शिक्षा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Screens provide physical barrier to vectors.",
    "explanationHi": "Trans rights।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-887",
    "questionEn": "Repellent application should be:",
    "questionHi": "MPHW के कार्य का मूल्यांकन कैसे होता है?",
    "optionsEn": [
      "Once daily",
      "As directed, reapplying as needed",
      "Only at night",
      "Never on skin"
    ],
    "optionsHi": [
      "कोई मूल्यांकन नहीं",
      "रिपोर्ट समीक्षा, फील्ड विज़िट, संकेतक, समुदाय प्रतिक्रिया",
      "केवल उपस्थिति",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Following directions ensures effective protection.",
    "explanationHi": "Performance evaluation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-888",
    "questionEn": "Safe repellent use includes:",
    "questionHi": "अच्छे MPHW की विशेषताएं क्या हैं?",
    "optionsEn": [
      "Applying to wounds",
      "Avoiding eyes, mouth, and broken skin",
      "Inhaling spray",
      "Using near food"
    ],
    "optionsHi": [
      "लापरवाह",
      "ज्ञान, कौशल, प्रतिबद्धता, संवेदनशीलता, ईमानदारी, समय पाबंदी",
      "केवल उपस्थित होना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Safe application prevents adverse effects.",
    "explanationHi": "Good qualities।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-889",
    "questionEn": "Rodent signs to look for include:",
    "questionHi": "MPHW की चुनौतियां क्या हैं?",
    "optionsEn": [
      "Nothing visible",
      "Droppings, gnaw marks, tracks, sounds",
      "Only dead rats",
      "Only live rats"
    ],
    "optionsHi": [
      "कोई चुनौती नहीं",
      "कार्यभार, दूरी, संसाधन कमी, सामुदायिक बाधाएं",
      "आसान काम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple signs indicate rodent presence.",
    "explanationHi": "Work challenges।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-890",
    "questionEn": "Rodent prevention includes:",
    "questionHi": "MPHW की प्रेरणा (Motivation) कैसे बढ़ाएं?",
    "optionsEn": [
      "Leaving food open",
      "Sealing entry points, proper food storage",
      "Attracting rats",
      "Ignoring signs"
    ],
    "optionsHi": [
      "अनदेखा करें",
      "पहचान, प्रशिक्षण, सहायक पर्यवेक्षण, कैरियर विकास",
      "डांटना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Exclusion and sanitation prevent rodent infestation.",
    "explanationHi": "Motivation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "8",
    "tags": [
      "8"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-891",
    "questionEn": "Newborn care includes:",
    "questionHi": "Time Management का MPHW कार्य में क्या महत्व है?",
    "optionsEn": [
      "Only feeding",
      "Warmth, breastfeeding, hygiene, cord care",
      "Only bathing",
      "Only clothing"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "अधिक कार्य पूर्ण करना, तनाव कम, बेहतर सेवा",
      "समय बर्बाद",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Essential newborn care covers multiple aspects.",
    "explanationHi": "Time management।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-892",
    "questionEn": "Cord care for newborn includes:",
    "questionHi": "MPHW की दैनिक योजना में क्या शामिल होना चाहिए?",
    "optionsEn": [
      "Applying anything",
      "Keeping clean and dry, not applying substances",
      "Covering always",
      "Cutting repeatedly"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "विज़िट, सत्र, रिपोर्टिंग, आपातकाल के लिए समय",
      "केवल बैठना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clean dry cord care prevents infection.",
    "explanationHi": "Daily planning।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-893",
    "questionEn": "Kangaroo mother care provides:",
    "questionHi": "Tour Plan/Tour Programme क्या है?",
    "optionsEn": [
      "Only warmth",
      "Warmth, bonding, breastfeeding support",
      "Only feeding",
      "Only sleep"
    ],
    "optionsHi": [
      "छुट्टी योजना",
      "फील्ड विज़िट की साप्ताहिक/मासिक योजना",
      "खरीदारी योजना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "KMC has multiple benefits for newborn and mother.",
    "explanationHi": "Field planning।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-894",
    "questionEn": "Danger signs in newborn include:",
    "questionHi": "Leave Management में MPHW को क्या ध्यान रखना चाहिए?",
    "optionsEn": [
      "Normal crying",
      "Not feeding, fever, lethargy, fast breathing",
      "Only sleeping",
      "Only hiccups"
    ],
    "optionsHi": [
      "कभी भी छुट्टी",
      "पहले से आवेदन, जरूरी सेवाओं की व्यवस्था, प्रतिस्थापन",
      "बिना बताए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Recognizing danger signs enables timely care-seeking.",
    "explanationHi": "Leave planning।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-895",
    "questionEn": "Hand hygiene before handling newborn prevents:",
    "questionHi": "MPHW के कार्य में ICT का क्या उपयोग है?",
    "optionsEn": [
      "Nothing",
      "Transmission of infections to baby",
      "Only dirt transfer",
      "Only skin irritation"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "डेटा एंट्री, संचार, ऑनलाइन प्रशिक्षण, जानकारी प्राप्त करना",
      "केवल मनोरंजन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hand hygiene protects vulnerable newborns.",
    "explanationHi": "Technology use।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-896",
    "questionEn": "Infant bathing should use:",
    "questionHi": "WhatsApp/SMS का स्वास्थ्य संचार में क्या उपयोग है?",
    "optionsEn": [
      "Cold water",
      "Lukewarm water in warm room",
      "Hot water",
      "Any temperature"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "रिमाइंडर, जानकारी साझा करना, समन्वय, आपातकालीन संदेश",
      "केवल व्यक्तिगत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Proper temperature prevents hypothermia during bathing.",
    "explanationHi": "Mobile messaging।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-897",
    "questionEn": "Diaper area hygiene prevents:",
    "questionHi": "स्वास्थ्य कर्मी की डेटा गोपनीयता जिम्मेदारी क्या है?",
    "optionsEn": [
      "Nothing",
      "Diaper rash and infection",
      "Only odor",
      "Only discomfort"
    ],
    "optionsHi": [
      "सबको बताना",
      "रोगी डेटा सुरक्षित रखना, अनधिकृत साझा न करना",
      "सोशल मीडिया पर डालना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clean dry diaper area prevents skin problems.",
    "explanationHi": "Data privacy।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-898",
    "questionEn": "Safe sleeping for infant means:",
    "questionHi": "Digital India का स्वास्थ्य में क्या प्रभाव है?",
    "optionsEn": [
      "Prone position",
      "Supine on firm surface, no loose bedding",
      "Soft mattress",
      "With pillows"
    ],
    "optionsHi": [
      "कोई प्रभाव नहीं",
      "ई-स्वास्थ्य सेवाएं, पारदर्शिता, पहुंच बढ़ाना",
      "नकारात्मक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Safe sleep practices reduce SIDS risk.",
    "explanationHi": "Digital health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-899",
    "questionEn": "Toy hygiene includes:",
    "questionHi": "भविष्य की स्वास्थ्य चुनौतियां क्या हैं?",
    "optionsEn": [
      "No cleaning needed",
      "Regular cleaning, age-appropriate toys",
      "Sharing with sick children",
      "Only new toys"
    ],
    "optionsHi": [
      "कोई चुनौती नहीं",
      "NCD बढ़ना, वृद्ध आबादी, AMR, जलवायु परिवर्तन, नई महामारियां",
      "सब ठीक है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clean appropriate toys prevent infection transmission.",
    "explanationHi": "Future challenges।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-900",
    "questionEn": "Sick child at home needs:",
    "questionHi": "MPHW का समुदाय के स्वास्थ्य में सबसे बड़ा योगदान क्या है?",
    "optionsEn": [
      "Normal routine",
      "Rest, fluids, monitoring, appropriate care",
      "Only medicine",
      "Only food"
    ],
    "optionsHi": [
      "केवल दवाई",
      "प्राथमिक स्वास्थ्य सेवाएं घर-घर तक पहुंचाना, जागरूकता, रोग रोकथाम",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Home care for sick child includes multiple elements.",
    "explanationHi": "Community health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-901",
    "questionEn": "Partnership in health programs involves:",
    "questionHi": "स्वच्छता और स्वास्थ्य में क्या संबंध है?",
    "optionsEn": [
      "Only government",
      "Government, NGOs, private sector, community",
      "Only NGOs",
      "Only private sector"
    ],
    "optionsHi": [
      "कोई संबंध नहीं",
      "स्वच्छता से रोग रोकथाम, बेहतर स्वास्थ्य, जीवन गुणवत्ता",
      "विपरीत संबंध",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multi-stakeholder partnerships strengthen programs.",
    "explanationHi": "Hygiene-health link।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-902",
    "questionEn": "Convergence of services means:",
    "questionHi": "स्वास्थ्य शिक्षा का अंतिम लक्ष्य क्या है?",
    "optionsEn": [
      "Only one service",
      "Multiple departments coordinating for common goals",
      "Only competition",
      "Only separation"
    ],
    "optionsHi": [
      "जानकारी देना केवल",
      "व्यवहार परिवर्तन और बेहतर स्वास्थ्य",
      "केवल पढ़ाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Convergence integrates services for better outcomes.",
    "explanationHi": "Behavior change।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-903",
    "questionEn": "WASH in healthcare facilities ensures:",
    "questionHi": "व्यवहार परिवर्तन के चरण क्या हैं?",
    "optionsEn": [
      "Only decoration",
      "Safe water, sanitation, hygiene for patients and staff",
      "Only patients",
      "Only staff"
    ],
    "optionsHi": [
      "एक चरण",
      "जागरूकता → रुचि → इच्छा → क्रिया → रखरखाव",
      "कोई चरण नहीं",
      "दो चरण"
    ],
    "correctAnswer": 1,
    "explanationEn": "WASH in HCF prevents healthcare-associated infections.",
    "explanationHi": "Stages of change।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-904",
    "questionEn": "WASH FIT tool assesses:",
    "questionHi": "स्वास्थ्य व्यवहार को प्रभावित करने वाले कारक क्या हैं?",
    "optionsEn": [
      "Only water",
      "Water, sanitation, hygiene, waste in health facilities",
      "Only sanitation",
      "Only waste"
    ],
    "optionsHi": [
      "केवल ज्ञान",
      "ज्ञान, मान्यताएं, सामाजिक-आर्थिक स्थिति, पहुंच, संस्कृति",
      "कोई कारक नहीं",
      "केवल पैसा"
    ],
    "correctAnswer": 1,
    "explanationEn": "WASH FIT comprehensively assesses facility WASH status.",
    "explanationHi": "Behavior determinants।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-905",
    "questionEn": "Climate-resilient WASH considers:",
    "questionHi": "सकारात्मक विचलन (Positive Deviance) दृष्टिकोण क्या है?",
    "optionsEn": [
      "Only current conditions",
      "Climate change impacts on water and sanitation",
      "Only weather",
      "Only temperature"
    ],
    "optionsHi": [
      "नकारात्मक",
      "समान परिस्थितियों में बेहतर प्रदर्शन करने वालों से सीखना",
      "औसत व्यवहार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Climate resilience addresses future climate impacts.",
    "explanationHi": "Positive deviance।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-906",
    "questionEn": "WASH and nutrition linkage includes:",
    "questionHi": "Nudge Theory स्वास्थ्य में क्या है?",
    "optionsEn": [
      "No connection",
      "Clean water and sanitation prevent infections affecting nutrition",
      "Only food",
      "Only supplements"
    ],
    "optionsHi": [
      "जबरदस्ती",
      "छोटे बदलावों से स्वस्थ व्यवहार को प्रोत्साहित करना",
      "सजा देना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WASH prevents infections that impair nutrition absorption.",
    "explanationHi": "Behavioral nudges।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-907",
    "questionEn": "Environmental enteropathy from poor WASH causes:",
    "questionHi": "Social Norms का स्वास्थ्य व्यवहार पर क्या प्रभाव है?",
    "optionsEn": [
      "Nothing",
      "Gut damage reducing nutrient absorption",
      "Only diarrhea",
      "Only vomiting"
    ],
    "optionsHi": [
      "कोई प्रभाव नहीं",
      "समूह व्यवहार व्यक्तिगत व्यवहार को प्रभावित करता है",
      "विपरीत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chronic fecal exposure damages gut and impairs growth.",
    "explanationHi": "Social influence।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-908",
    "questionEn": "WASH and maternal health linkage includes:",
    "questionHi": "पीयर एजुकेशन (Peer Education) क्या है?",
    "optionsEn": [
      "No connection",
      "Clean delivery, hand hygiene, safe water for mothers",
      "Only delivery",
      "Only after delivery"
    ],
    "optionsHi": [
      "शिक्षक शिक्षा",
      "समान आयु/समूह के लोगों द्वारा शिक्षा",
      "डॉक्टर शिक्षा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WASH supports safe delivery and postpartum care.",
    "explanationHi": "Peer-to-peer।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-909",
    "questionEn": "Menstrual health is part of:",
    "questionHi": "सामाजिक विपणन (Social Marketing) स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Only reproductive health",
      "WASH, health, education, gender equality",
      "Only hygiene",
      "Only women's issues"
    ],
    "optionsHi": [
      "उत्पाद बेचना",
      "स्वास्थ्य व्यवहार को बढ़ावा देने के लिए विपणन तकनीक का उपयोग",
      "केवल विज्ञापन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MHM connects multiple sectors and rights.",
    "explanationHi": "Social marketing।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-910",
    "questionEn": "Disability-inclusive WASH ensures:",
    "questionHi": "Health Belief Model क्या है?",
    "optionsEn": [
      "Only for able-bodied",
      "Accessible facilities for persons with disabilities",
      "Only special facilities",
      "Only institutions"
    ],
    "optionsHi": [
      "धार्मिक मॉडल",
      "स्वास्थ्य व्यवहार को समझने का सिद्धांत (कथित जोखिम, लाभ, बाधाएं)",
      "गणितीय मॉडल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Inclusive WASH serves all people including PWD.",
    "explanationHi": "Health behavior theory।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-911",
    "questionEn": "Gender-responsive WASH addresses:",
    "questionHi": "Self-Efficacy स्वास्थ्य व्यवहार में क्या है?",
    "optionsEn": [
      "Only men's needs",
      "Different needs of women, men, girls, boys",
      "Only women's needs",
      "No difference"
    ],
    "optionsHi": [
      "आत्मविश्वास नहीं",
      "व्यवहार बदलने की अपनी क्षमता में विश्वास",
      "दूसरों पर निर्भरता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Gender analysis informs appropriate WASH design.",
    "explanationHi": "Self-confidence।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-912",
    "questionEn": "WASH in schools improves:",
    "questionHi": "SMART लक्ष्य क्या हैं?",
    "optionsEn": [
      "Only infrastructure",
      "Health, attendance, learning especially for girls",
      "Only health",
      "Only attendance"
    ],
    "optionsHi": [
      "बुद्धिमान",
      "Specific, Measurable, Achievable, Relevant, Time-bound",
      "केवल बड़े लक्ष्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "School WASH has multiple educational and health benefits.",
    "explanationHi": "Goal setting।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-913",
    "questionEn": "WASH sustainability requires:",
    "questionHi": "स्वास्थ्य कार्यक्रम की सफलता के लिए क्या जरूरी है?",
    "optionsEn": [
      "Only initial funding",
      "Ongoing financing, management, behavior support",
      "Only construction",
      "Only training"
    ],
    "optionsHi": [
      "केवल पैसा",
      "योजना, कार्यान्वयन, निगरानी, सामुदायिक भागीदारी, संसाधन",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sustainability needs continued support beyond construction.",
    "explanationHi": "Programme success।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-914",
    "questionEn": "Operation and maintenance of WASH systems needs:",
    "questionHi": "Log Frame क्या है?",
    "optionsEn": [
      "No ongoing work",
      "Regular attention, spare parts, trained operators",
      "Only initial setup",
      "Only external support"
    ],
    "optionsHi": [
      "लकड़ी का फ्रेम",
      "कार्यक्रम योजना और निगरानी का उपकरण (लक्ष्य, संकेतक, गतिविधियां)",
      "फोटो फ्रेम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "O&M essential for continued WASH functionality.",
    "explanationHi": "Logical framework।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-915",
    "questionEn": "WASH technology choice should consider:",
    "questionHi": "PDCA Cycle क्या है?",
    "optionsEn": [
      "Only cost",
      "Local context, capacity, preferences, sustainability",
      "Only modern options",
      "Only traditional"
    ],
    "optionsHi": [
      "दवाई",
      "Plan-Do-Check-Act (निरंतर सुधार चक्र)",
      "बीमारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Appropriate technology fits local conditions.",
    "explanationHi": "Quality improvement।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-916",
    "questionEn": "SDG 6 aims for:",
    "questionHi": "Root Cause Analysis क्या है?",
    "optionsEn": [
      "Only urban water",
      "Clean water and sanitation for all by 2030",
      "Only rural sanitation",
      "Only developed countries"
    ],
    "optionsHi": [
      "पेड़ की जड़",
      "समस्या के मूल कारण खोजने की विधि",
      "फल का विश्लेषण",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SDG 6 is universal clean water and sanitation goal.",
    "explanationHi": "Problem solving।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-917",
    "questionEn": "SDG 6.1 target is:",
    "questionHi": "5 Whys तकनीक क्या है?",
    "optionsEn": [
      "Only treatment",
      "Universal safe drinking water access",
      "Only storage",
      "Only testing"
    ],
    "optionsHi": [
      "5 सवाल",
      "बार-बार 'क्यों' पूछकर मूल कारण खोजना",
      "5 जवाब",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SDG 6.1 targets universal safe water access.",
    "explanationHi": "Root cause finding।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-918",
    "questionEn": "SDG 6.2 target is:",
    "questionHi": "Fishbone Diagram का उपयोग क्या है?",
    "optionsEn": [
      "Only toilets",
      "Universal sanitation and hygiene, ending open defecation",
      "Only handwashing",
      "Only sewerage"
    ],
    "optionsHi": [
      "मछली पकड़ना",
      "समस्या के कारणों को व्यवस्थित रूप से पहचानना",
      "खाना बनाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SDG 6.2 covers sanitation and hygiene universally.",
    "explanationHi": "Cause-effect diagram।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-919",
    "questionEn": "Human right to water and sanitation was recognized by UN in:",
    "questionHi": "SWOT Analysis क्या है?",
    "optionsEn": [
      "1990",
      "2010",
      "2020",
      "1980"
    ],
    "optionsHi": [
      "खेल",
      "Strengths, Weaknesses, Opportunities, Threats का विश्लेषण",
      "बीमारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "UN General Assembly recognized HRWS in 2010.",
    "explanationHi": "Situation analysis।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-920",
    "questionEn": "Rights-based approach to WASH emphasizes:",
    "questionHi": "Stakeholder Analysis क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Only service delivery",
      "Accessibility, affordability, quality, accountability",
      "Only infrastructure",
      "Only government role"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "प्रभावित पक्षों की पहचान, उनकी रुचि और प्रभाव समझना",
      "केवल औपचारिकता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rights approach ensures WASH as entitlement not charity.",
    "explanationHi": "Stakeholder mapping।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-921",
    "questionEn": "WASH sector coordination ensures:",
    "questionHi": "Gantt Chart क्या है?",
    "optionsEn": [
      "Duplication",
      "Efficient resource use and coverage",
      "Only meetings",
      "Only reports"
    ],
    "optionsHi": [
      "ग्राफ नहीं",
      "गतिविधियों और समयसीमा का दृश्य प्रदर्शन",
      "बार चार्ट नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Coordination prevents gaps and overlaps.",
    "explanationHi": "Project timeline।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-922",
    "questionEn": "WASH sector review assesses:",
    "questionHi": "Dashboard स्वास्थ्य प्रबंधन में क्या है?",
    "optionsEn": [
      "Only one program",
      "Overall sector progress and challenges",
      "Only government",
      "Only NGOs"
    ],
    "optionsHi": [
      "कार का",
      "मुख्य संकेतकों का एक नज़र में दृश्य प्रदर्शन",
      "केवल सजावट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sector reviews evaluate comprehensive progress.",
    "explanationHi": "Performance display।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-923",
    "questionEn": "Evidence-based WASH programming uses:",
    "questionHi": "Traffic Light System मॉनिटरिंग में क्या है?",
    "optionsEn": [
      "Only opinions",
      "Research and data to guide decisions",
      "Only tradition",
      "Only intuition"
    ],
    "optionsHi": [
      "सड़क पर",
      "प्रदर्शन को लाल/पीला/हरा रंग से दर्शाना (खराब/मध्यम/अच्छा)",
      "केवल वाहन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Evidence guides effective WASH interventions.",
    "explanationHi": "Color coding।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-924",
    "questionEn": "WASH research priorities include:",
    "questionHi": "Feedback का स्वास्थ्य सेवाओं में क्या महत्व है?",
    "optionsEn": [
      "Only technology",
      "Behavior change, sustainability, equity, effectiveness",
      "Only cost",
      "Only coverage"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "सुधार, जवाबदेही, रोगी संतुष्टि",
      "केवल शिकायत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Research addresses multiple WASH knowledge gaps.",
    "explanationHi": "Feedback importance।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-925",
    "questionEn": "Innovation in WASH includes:",
    "questionHi": "Exit Interview क्या है?",
    "optionsEn": [
      "Only hardware",
      "Technology, financing, behavior change approaches",
      "Only traditional methods",
      "Only imported solutions"
    ],
    "optionsHi": [
      "नौकरी छोड़ने पर",
      "सेवा के बाद रोगी से प्रतिक्रिया लेना",
      "प्रवेश पर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Innovation spans technology and approaches.",
    "explanationHi": "Patient feedback।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-926",
    "questionEn": "Scaling up successful WASH interventions requires:",
    "questionHi": "Suggestion Box का क्या उपयोग है?",
    "optionsEn": [
      "Only replication",
      "Adaptation to local context while maintaining core elements",
      "Only funding",
      "Only government mandate"
    ],
    "optionsHi": [
      "पैसे रखने का",
      "रोगियों/समुदाय से गुमनाम प्रतिक्रिया लेना",
      "केवल सजावट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Scaling needs both fidelity and adaptation.",
    "explanationHi": "Anonymous feedback।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-927",
    "questionEn": "WASH professional development includes:",
    "questionHi": "Community Score Card क्या है?",
    "optionsEn": [
      "Only initial training",
      "Continuous learning and skill building",
      "Only degrees",
      "Only experience"
    ],
    "optionsHi": [
      "खेल का स्कोर",
      "समुदाय द्वारा सेवाओं का मूल्यांकन उपकरण",
      "परीक्षा का अंक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ongoing capacity building improves WASH workforce.",
    "explanationHi": "Community monitoring।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-928",
    "questionEn": "WASH career opportunities exist in:",
    "questionHi": "Social Audit स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Only government",
      "Government, NGOs, private sector, research",
      "Only NGOs",
      "Only consulting"
    ],
    "optionsHi": [
      "वित्तीय ऑडिट",
      "सामुदायिक भागीदारी से कार्यक्रम का मूल्यांकन",
      "कंपनी ऑडिट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WASH professionals work across sectors.",
    "explanationHi": "Accountability।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-929",
    "questionEn": "MPHW contribution to WASH includes:",
    "questionHi": "Jan Sunwai/Public Hearing क्या है?",
    "optionsEn": [
      "Only reporting",
      "Promotion, surveillance, coordination at community level",
      "Only treatment",
      "Only construction"
    ],
    "optionsHi": [
      "अदालत",
      "जनता के सामने शिकायतें और समस्याएं सुनने का मंच",
      "केवल सरकारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MPHW plays key role in community WASH.",
    "explanationHi": "Public grievance।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-930",
    "questionEn": "Community health worker WASH activities include:",
    "questionHi": "Best Practice क्या है?",
    "optionsEn": [
      "Only vaccination",
      "Home visits, education, monitoring, referral",
      "Only treatment",
      "Only reporting"
    ],
    "optionsHi": [
      "कोई भी तरीका",
      "किसी क्षेत्र में सबसे प्रभावी और सिद्ध तरीका",
      "सबसे आसान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CHWs implement multiple WASH activities.",
    "explanationHi": "Best practice।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-931",
    "questionEn": "Handwashing with soap reduces diarrhea by approximately:",
    "questionHi": "Best Practices का प्रसार क्यों जरूरी है?",
    "optionsEn": [
      "10%",
      "23-40%",
      "5%",
      "80%"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "अन्य क्षेत्रों में लागू करना, सीखना, सुधार",
      "छुपाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HWWS can reduce diarrhea by 23-40% or more.",
    "explanationHi": "Knowledge sharing।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-932",
    "questionEn": "Handwashing with soap reduces respiratory infections by approximately:",
    "questionHi": "Scaling Up क्या है?",
    "optionsEn": [
      "5%",
      "16-23%",
      "50%",
      "80%"
    ],
    "optionsHi": [
      "कम करना",
      "सफल कार्यक्रम को बड़े पैमाने पर लागू करना",
      "छोटा करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HWWS reduces respiratory infections by 16-23%.",
    "explanationHi": "Expansion।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-933",
    "questionEn": "Critical times for handwashing behavior change are:",
    "questionHi": "Pilot Project क्या है?",
    "optionsEn": [
      "Any time",
      "After defecation, before eating, before food preparation",
      "Only morning",
      "Only evening"
    ],
    "optionsHi": [
      "विमान परियोजना",
      "बड़े पैमाने से पहले छोटे पैमाने पर परीक्षण",
      "केवल बड़ी परियोजना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Critical times are focus of behavior change efforts.",
    "explanationHi": "Testing phase।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-934",
    "questionEn": "Handwashing habit formation in children takes:",
    "questionHi": "Action Research क्या है?",
    "optionsEn": [
      "One day",
      "Repeated practice over time",
      "One week",
      "One month exactly"
    ],
    "optionsHi": [
      "केवल शोध",
      "समस्या समाधान और शोध साथ-साथ",
      "केवल कार्रवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Habits form through consistent repeated practice.",
    "explanationHi": "Participatory research।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-935",
    "questionEn": "Tippy tap is:",
    "questionHi": "Operations Research स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Water treatment",
      "Simple handwashing device operated by foot",
      "Toilet",
      "Water storage"
    ],
    "optionsHi": [
      "सर्जरी",
      "सेवा वितरण में सुधार के लिए व्यवस्थित अध्ययन",
      "केवल गणित",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tippy tap enables handwashing without touching tap.",
    "explanationHi": "Service improvement research।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-936",
    "questionEn": "Soapy water bottle is:",
    "questionHi": "Documentation का स्वास्थ्य कार्यक्रम में क्या महत्व है?",
    "optionsEn": [
      "Drinking water",
      "Low-cost handwashing solution with diluted detergent",
      "Cleaning solution",
      "Water treatment"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "सीखना, साझा करना, जवाबदेही, संस्थागत स्मृति",
      "केवल कागज़ी काम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Soapy water is affordable handwashing alternative.",
    "explanationHi": "Documentation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-937",
    "questionEn": "Handwashing station design should ensure:",
    "questionHi": "Case Study का क्या उपयोग है?",
    "optionsEn": [
      "Only appearance",
      "Accessibility, drainage, soap availability",
      "Only cost",
      "Only durability"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "गहन विश्लेषण, सीखना, प्रशिक्षण, प्रेरणा",
      "केवल परीक्षा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Good design enables consistent handwashing practice.",
    "explanationHi": "Case study।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-938",
    "questionEn": "Piped water on premises is classified as:",
    "questionHi": "Success Story का प्रसार क्यों जरूरी है?",
    "optionsEn": [
      "Unimproved",
      "Improved water source",
      "Limited",
      "Basic"
    ],
    "optionsHi": [
      "आत्मप्रशंसा",
      "प्रेरणा, सीखना, समर्थन जुटाना, कार्यक्रम प्रचार",
      "केवल दिखावा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Piped water in dwelling is improved source.",
    "explanationHi": "Success stories।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-939",
    "questionEn": "Protected spring is classified as:",
    "questionHi": "Lessons Learned क्या हैं?",
    "optionsEn": [
      "Unimproved",
      "Improved water source",
      "Surface water",
      "Unsafe"
    ],
    "optionsHi": [
      "स्कूल का पाठ",
      "अनुभव से प्राप्त सीख (सफलता और असफलता दोनों से)",
      "केवल सफलता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Protected spring is improved source.",
    "explanationHi": "Learning from experience।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-940",
    "questionEn": "Unprotected well is classified as:",
    "questionHi": "Knowledge Management स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Improved",
      "Unimproved water source",
      "Basic",
      "Safe"
    ],
    "optionsHi": [
      "केवल पुस्तकें",
      "ज्ञान का संग्रह, संगठन, साझा करना, उपयोग करना",
      "केवल परीक्षा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Unprotected well is unimproved due to contamination risk.",
    "explanationHi": "KM।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-941",
    "questionEn": "Surface water (river, pond) is:",
    "questionHi": "स्वच्छ भारत का स्वास्थ्य पर क्या प्रभाव है?",
    "optionsEn": [
      "Improved",
      "Unimproved and highest risk",
      "Safe if clear",
      "Basic service"
    ],
    "optionsHi": [
      "कोई प्रभाव नहीं",
      "दस्त कम, बच्चों का स्वास्थ्य बेहतर, महिला सुरक्षा, गरिमा",
      "नकारात्मक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Surface water is highest risk unimproved source.",
    "explanationHi": "SBM impact।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-942",
    "questionEn": "Water collection time of over 30 minutes indicates:",
    "questionHi": "ODF (Open Defecation Free) घोषणा के बाद क्या जरूरी है?",
    "optionsEn": [
      "Basic service",
      "Limited service level",
      "Safely managed",
      "No service"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "ODF Sustainability - शौचालय उपयोग जारी रखना, रखरखाव",
      "केवल घोषणा",
      "भूल जाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Over 30 minutes round trip is limited service.",
    "explanationHi": "Sustainability।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-943",
    "questionEn": "Flush toilet connected to sewer is:",
    "questionHi": "Swachh Survekshan क्या है?",
    "optionsEn": [
      "Unimproved",
      "Improved sanitation facility",
      "Limited",
      "Open defecation"
    ],
    "optionsHi": [
      "स्वच्छता जांच",
      "शहरों की स्वच्छता रैंकिंग सर्वे",
      "स्वास्थ्य जांच",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Flush to sewer is improved sanitation.",
    "explanationHi": "Cleanliness survey।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-944",
    "questionEn": "Flush toilet connected to septic tank is:",
    "questionHi": "Jal Jeevan Mission का लक्ष्य क्या है?",
    "optionsEn": [
      "Unimproved",
      "Improved sanitation facility",
      "Limited",
      "Open defecation"
    ],
    "optionsHi": [
      "बिजली",
      "2024 तक हर ग्रामीण घर में नल का पानी (Har Ghar Jal)",
      "सड़क",
      "शिक्षा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Flush to septic is improved facility.",
    "explanationHi": "Tap water।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-945",
    "questionEn": "Pit latrine with slab is:",
    "questionHi": "FHTC (Functional Household Tap Connection) क्या है?",
    "optionsEn": [
      "Unimproved",
      "Improved sanitation facility",
      "Limited",
      "Open defecation"
    ],
    "optionsHi": [
      "बिजली कनेक्शन",
      "घर में काम करने वाला नल का पानी कनेक्शन",
      "फोन कनेक्शन",
      "गैस कनेक्शन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pit latrine with slab is improved.",
    "explanationHi": "Piped water।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-946",
    "questionEn": "Pit latrine without slab is:",
    "questionHi": "Kayakalp Award क्या है?",
    "optionsEn": [
      "Improved",
      "Unimproved sanitation facility",
      "Basic",
      "Safely managed"
    ],
    "optionsHi": [
      "खेल पुरस्कार",
      "स्वच्छता और स्वच्छता मानकों के लिए स्वास्थ्य सुविधाओं को पुरस्कार",
      "फिल्म पुरस्कार",
      "शिक्षा पुरस्कार"
    ],
    "correctAnswer": 1,
    "explanationEn": "No slab means unimproved due to fly access and safety.",
    "explanationHi": "Health facility award।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-947",
    "questionEn": "Hanging toilet over water is:",
    "questionHi": "LaQshya क्या है?",
    "optionsEn": [
      "Improved",
      "Unimproved and polluting",
      "Basic",
      "Limited"
    ],
    "optionsHi": [
      "खेल",
      "Labour Room Quality Improvement Initiative (प्रसव कक्ष गुणवत्ता)",
      "बैंकिंग",
      "शिक्षा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hanging toilets are unimproved and contaminate water.",
    "explanationHi": "Labour room quality।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-948",
    "questionEn": "Bucket toilet is:",
    "questionHi": "Muskan का स्वास्थ्य में क्या अर्थ है?",
    "optionsEn": [
      "Improved",
      "Unimproved requiring manual handling",
      "Basic",
      "Safely managed"
    ],
    "optionsHi": [
      "केवल मुस्कान",
      "Mothers and Children Tracking System (MCTS/RCH Portal)",
      "खुशी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Bucket toilets are unimproved and unsanitary.",
    "explanationHi": "MCH tracking।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-949",
    "questionEn": "Composting toilet properly managed is:",
    "questionHi": "Surakshit Matritva Aashwasan (SUMAN) क्या है?",
    "optionsEn": [
      "Unimproved",
      "Improved sanitation facility",
      "Limited",
      "Unsafe"
    ],
    "optionsHi": [
      "बीमा",
      "गर्भवती महिलाओं और नवजात शिशुओं के लिए मुफ्त और गुणवत्ता सेवाएं",
      "शिक्षा",
      "आवास"
    ],
    "correctAnswer": 1,
    "explanationEn": "Well-managed composting toilets are improved.",
    "explanationHi": "Safe motherhood।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-950",
    "questionEn": "Shared improved facility is classified as:",
    "questionHi": "India Hypertension Control Initiative (IHCI) क्या है?",
    "optionsEn": [
      "Safely managed",
      "Limited service level",
      "Basic",
      "Unimproved"
    ],
    "optionsHi": [
      "डायबिटीज",
      "उच्च रक्तचाप नियंत्रण के लिए पहल",
      "TB",
      "HIV"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sharing improved facility is limited service.",
    "explanationHi": "Hypertension control।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-951",
    "questionEn": "Food borne illness global burden is approximately:",
    "questionHi": "India Diabetes Prevention Programme क्या है?",
    "optionsEn": [
      "100,000 cases/year",
      "600 million cases/year",
      "1 million cases/year",
      "10 million cases/year"
    ],
    "optionsHi": [
      "उच्च रक्तचाप",
      "मधुमेह रोकथाम के लिए पहल",
      "TB",
      "HIV"
    ],
    "correctAnswer": 1,
    "explanationEn": "WHO estimates 600 million foodborne illness cases annually.",
    "explanationHi": "Diabetes prevention।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-952",
    "questionEn": "Children under 5 bear what proportion of foodborne disease burden:",
    "questionHi": "TB Mukt Bharat का लक्ष्य क्या है?",
    "optionsEn": [
      "10%",
      "40%",
      "5%",
      "80%"
    ],
    "optionsHi": [
      "2050",
      "2025 तक भारत को TB मुक्त बनाना",
      "2030",
      "कोई लक्ष्य नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Young children disproportionately affected by foodborne illness.",
    "explanationHi": "TB elimination।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-953",
    "questionEn": "Diarrheal diseases cause approximately how many child deaths annually:",
    "questionHi": "Malaria Mukt Bharat का लक्ष्य क्या है?",
    "optionsEn": [
      "50,000",
      "500,000",
      "5 million",
      "50 million"
    ],
    "optionsHi": [
      "2020",
      "2027 तक मलेरिया उन्मूलन",
      "2040",
      "कोई लक्ष्य नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Diarrhea causes about 500,000 child deaths per year.",
    "explanationHi": "Malaria elimination।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "6",
    "tags": [
      "6"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-954",
    "questionEn": "Unsafe water causes what percentage of diarrheal deaths:",
    "questionHi": "Filaria Mukt Bharat का लक्ष्य क्या है?",
    "optionsEn": [
      "10%",
      "Over 80%",
      "50%",
      "5%"
    ],
    "optionsHi": [
      "2020",
      "2027 तक फाइलेरिया उन्मूलन",
      "2040",
      "कोई लक्ष्य नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Most diarrheal deaths linked to unsafe water and sanitation.",
    "explanationHi": "Filaria elimination।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-955",
    "questionEn": "Indoor air pollution causes approximately how many deaths globally:",
    "questionHi": "Kala-Azar Elimination का लक्ष्य क्या है?",
    "optionsEn": [
      "100,000",
      "4 million",
      "100 million",
      "10,000"
    ],
    "optionsHi": [
      "2030",
      "2023-24 तक उन्मूलन (लगभग प्राप्त)",
      "2040",
      "कोई लक्ष्य नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HAP causes about 4 million premature deaths annually.",
    "explanationHi": "KA elimination।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "7",
    "tags": [
      "7"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-956",
    "questionEn": "Percentage of global population using safely managed drinking water:",
    "questionHi": "National Strategic Plan (NSP) for HIV/AIDS का लक्ष्य क्या है?",
    "optionsEn": [
      "50%",
      "74%",
      "90%",
      "100%"
    ],
    "optionsHi": [
      "केवल इलाज",
      "90-90-90 टारगेट → 95-95-95 (पहचान-उपचार-नियंत्रण)",
      "कोई लक्ष्य नहीं",
      "केवल रोकथाम"
    ],
    "correctAnswer": 1,
    "explanationEn": "About 74% have safely managed drinking water (2020).",
    "explanationHi": "HIV targets।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "3",
    "tags": [
      "3"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-957",
    "questionEn": "Percentage of global population using safely managed sanitation:",
    "questionHi": "Anaemia Mukt Bharat का लक्ष्य क्या है?",
    "optionsEn": [
      "20%",
      "54%",
      "80%",
      "95%"
    ],
    "optionsHi": [
      "एनीमिया बढ़ाना",
      "प्रति वर्ष एनीमिया में 3% कमी",
      "कोई लक्ष्य नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "About 54% have safely managed sanitation (2020).",
    "explanationHi": "Anemia reduction।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-958",
    "questionEn": "Open defecation is practiced by approximately:",
    "questionHi": "POSHAN 2.0 क्या है?",
    "optionsEn": [
      "50 million",
      "494 million people globally",
      "1 billion",
      "2 billion"
    ],
    "optionsHi": [
      "खेल",
      "Mission POSHAN का उन्नत संस्करण - ICDS + पोषण अभियान का एकीकरण",
      "बैंकिंग",
      "शिक्षा"
    ],
    "correctAnswer": 1,
    "explanationEn": "About 494 million still practice open defecation (2020).",
    "explanationHi": "Nutrition integration।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "4",
    "tags": [
      "4"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-959",
    "questionEn": "Handwashing with soap at critical times is practiced by approximately:",
    "questionHi": "Eat Right India Movement में क्या शामिल है?",
    "optionsEn": [
      "90%",
      "Less than 50% globally",
      "80%",
      "70%"
    ],
    "optionsHi": [
      "कम खाना",
      "सुरक्षित भोजन, स्वस्थ आहार, कम नमक/चीनी/वसा",
      "अधिक खाना",
      "कुछ भी खाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Less than half practice HWWS at critical times.",
    "explanationHi": "Healthy eating।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-960",
    "questionEn": "Basic hygiene service (soap and water at home) is lacking for:",
    "questionHi": "Fit India Movement क्या है?",
    "optionsEn": [
      "100 million",
      "2.3 billion people",
      "500 million",
      "50 million"
    ],
    "optionsHi": [
      "केवल खेल",
      "शारीरिक गतिविधि और स्वस्थ जीवनशैली को बढ़ावा देने का अभियान",
      "केवल आहार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "2.3 billion lack basic hygiene facilities (2020).",
    "explanationHi": "Physical fitness।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "2",
    "tags": [
      "2"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-961",
    "questionEn": "Economic return on WASH investment is approximately:",
    "questionHi": "Tobacco-Free Youth Campaign (COTPA-2003) का लक्ष्य क्या है?",
    "optionsEn": [
      "$1 return per $1 invested",
      "$4-12 return per $1 invested",
      "$1 loss per $1 invested",
      "No return"
    ],
    "optionsHi": [
      "तंबाकू बढ़ाना",
      "युवाओं को तंबाकू से दूर रखना",
      "तंबाकू प्रोत्साहन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WASH investments yield significant economic returns.",
    "explanationHi": "Youth protection।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-962",
    "questionEn": "Time saved from improved water access benefits:",
    "questionHi": "Mental Health पर National Tele Mental Health Programme (Tele-MANAS) क्या है?",
    "optionsEn": [
      "Only convenience",
      "Productivity, education, especially for women/girls",
      "Only health",
      "Only economy"
    ],
    "optionsHi": [
      "TV शो",
      "मानसिक स्वास्थ्य के लिए टेलीफोन/वीडियो परामर्श सेवा",
      "रेडियो",
      "अखबार"
    ],
    "correctAnswer": 1,
    "explanationEn": "Reduced water collection time has multiple benefits.",
    "explanationHi": "Tele mental health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-963",
    "questionEn": "School attendance improves with WASH because:",
    "questionHi": "PM Vishwakarma जैसी स्कीम में स्वास्थ्य घटक क्या है?",
    "optionsEn": [
      "Only comfort",
      "Reduced illness and menstrual barriers",
      "Only appearance",
      "Only teachers"
    ],
    "optionsHi": [
      "कोई नहीं",
      "कारीगरों के लिए स्वास्थ्य बीमा (PM-JAY लाभ)",
      "केवल कौशल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WASH reduces health and social barriers to attendance.",
    "explanationHi": "Health coverage।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-964",
    "questionEn": "Healthcare costs reduced by WASH are due to:",
    "questionHi": "Aspirational Districts Programme में स्वास्थ्य फोकस क्या है?",
    "optionsEn": [
      "Only treatment",
      "Prevented illness requiring medical care",
      "Only medicine",
      "Only hospital"
    ],
    "optionsHi": [
      "कोई फोकस नहीं",
      "पिछड़े जिलों में स्वास्थ्य संकेतक सुधारना",
      "केवल शिक्षा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Prevention reduces healthcare expenditure.",
    "explanationHi": "District improvement।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-965",
    "questionEn": "Productivity gains from WASH come from:",
    "questionHi": "Jan Andolan क्या है?",
    "optionsEn": [
      "Only working more",
      "Less illness, less time collecting water",
      "Only motivation",
      "Only training"
    ],
    "optionsHi": [
      "विरोध प्रदर्शन",
      "जन आंदोलन - समुदाय की व्यापक भागीदारी से कार्यक्रम",
      "केवल सरकारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Health and time savings increase productivity.",
    "explanationHi": "People's movement।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-966",
    "questionEn": "WASH and dignity connection includes:",
    "questionHi": "COVID-19 Vaccination अभियान से क्या सीखा?",
    "optionsEn": [
      "Only physical health",
      "Privacy, safety, menstrual management",
      "Only sanitation",
      "Only water"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "बड़े पैमाने पर टीकाकरण, डिजिटल ट्रैकिंग, सामुदायिक जुड़ाव संभव",
      "असंभव है",
      "केवल समस्याएं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WASH enables dignified daily life practices.",
    "explanationHi": "Vaccination lessons।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-967",
    "questionEn": "WASH and gender equality linkage includes:",
    "questionHi": "One Nation One Health Approach क्या है?",
    "optionsEn": [
      "No connection",
      "Reduced burden on women and girls",
      "Only for men",
      "Only infrastructure"
    ],
    "optionsHi": [
      "केवल एक अस्पताल",
      "पूरे देश में समान स्वास्थ्य मानक और पहुंच",
      "अलग-अलग नीतियां",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WASH reduces disproportionate burden on females.",
    "explanationHi": "Unified health।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-968",
    "questionEn": "WASH in emergencies principles include:",
    "questionHi": "Public Health Cadre की मांग क्यों है?",
    "optionsEn": [
      "Only long-term solutions",
      "Rapid response, minimum standards, do no harm",
      "Only permanent infrastructure",
      "Only treatment"
    ],
    "optionsHi": [
      "कोई जरूरत नहीं",
      "समर्पित जन स्वास्थ्य पेशेवरों की जरूरत, विशेष कौशल",
      "पर्याप्त हैं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Emergency WASH follows humanitarian principles.",
    "explanationHi": "Public health workforce।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-969",
    "questionEn": "WASH cluster in emergencies is led by:",
    "questionHi": "Primary Healthcare का भविष्य क्या है?",
    "optionsEn": [
      "Any organization",
      "UNICEF for natural disasters",
      "Only government",
      "Only military"
    ],
    "optionsHi": [
      "कम महत्व",
      "HWC के माध्यम से CPHC, डिजिटल स्वास्थ्य, एकीकृत सेवाएं",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "UNICEF leads WASH cluster in humanitarian response.",
    "explanationHi": "PHC future।",
    "difficulty": "medium",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-970",
    "questionEn": "Linking relief to development in WASH means:",
    "questionHi": "सार्वभौमिक स्वास्थ्य कवरेज (UHC) प्राप्त करने के लिए क्या जरूरी है?",
    "optionsEn": [
      "Only emergency response",
      "Transitioning from temporary to sustainable solutions",
      "Only development",
      "Separate approaches"
    ],
    "optionsHi": [
      "केवल बीमा",
      "मजबूत प्राथमिक स्वास्थ्य, वित्तीय सुरक्षा, मानव संसाधन, गुणवत्ता",
      "केवल अस्पताल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "LRRD connects emergency and development approaches.",
    "explanationHi": "UHC requirements।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-971",
    "questionEn": "WASH and COVID-19 response highlighted:",
    "questionHi": "स्वास्थ्य में समानता (Health Equity) क्या है?",
    "optionsEn": [
      "WASH not important",
      "Critical role of hand hygiene and water access",
      "Only vaccines matter",
      "Only treatment matters"
    ],
    "optionsHi": [
      "सभी को समान दवाई",
      "सभी को समान रूप से स्वस्थ होने का अवसर",
      "असमानता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pandemic demonstrated WASH importance for health security.",
    "explanationHi": "Health equity।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-972",
    "questionEn": "Antimicrobial resistance and WASH are linked because:",
    "questionHi": "Leave No One Behind क्या है?",
    "optionsEn": [
      "No connection",
      "Poor sanitation spreads resistant organisms",
      "Only hospitals matter",
      "Only antibiotics matter"
    ],
    "optionsHi": [
      "किसी को छोड़ देना",
      "विकास में सभी को शामिल करना, वंचितों पर विशेष ध्यान",
      "केवल अमीरों के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WASH prevents spread of resistant pathogens.",
    "explanationHi": "Inclusive development।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-973",
    "questionEn": "One Health approach connects:",
    "questionHi": "स्वास्थ्य में जवाबदेही (Accountability) क्यों जरूरी है?",
    "optionsEn": [
      "Only human health",
      "Human, animal, and environmental health",
      "Only animal health",
      "Only environment"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "बेहतर सेवाएं, पारदर्शिता, जनता का विश्वास",
      "केवल सजा के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "One Health recognizes interconnected health domains.",
    "explanationHi": "Accountability।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-974",
    "questionEn": "WASH and zoonotic disease prevention includes:",
    "questionHi": "स्वास्थ्य में नागरिक चार्टर (Citizen Charter) क्या है?",
    "optionsEn": [
      "Only treatment",
      "Safe disposal of animal waste, hygiene around animals",
      "Only vaccination",
      "Only culling"
    ],
    "optionsHi": [
      "कानून",
      "सेवाओं और मानकों की सार्वजनिक प्रतिबद्धता",
      "केवल कागज",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WASH measures reduce zoonotic disease transmission.",
    "explanationHi": "Service commitment।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "1",
    "tags": [
      "1"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-975",
    "questionEn": "Urban WASH challenges include:",
    "questionHi": "स्वास्थ्य सेवाओं में गुणवत्ता आश्वासन (Quality Assurance) क्या है?",
    "optionsEn": [
      "Only rural issues",
      "Informal settlements, aging infrastructure, rapid growth",
      "No challenges",
      "Only funding"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "सेवाओं का निर्धारित मानकों के अनुसार होना सुनिश्चित करना",
      "केवल जांच",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Urban areas face distinct WASH challenges.",
    "explanationHi": "Quality assurance।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-976",
    "questionEn": "Rural WASH challenges include:",
    "questionHi": "NABH (National Accreditation Board for Hospitals) क्या है?",
    "optionsEn": [
      "Only urban issues",
      "Dispersed population, sustainability, capacity",
      "No challenges",
      "Only technology"
    ],
    "optionsHi": [
      "खेल बोर्ड",
      "अस्पतालों की गुणवत्ता मान्यता देने वाली संस्था",
      "शिक्षा बोर्ड",
      "कृषि बोर्ड"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rural areas have specific WASH challenges.",
    "explanationHi": "Hospital accreditation।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-977",
    "questionEn": "WASH in healthcare facilities is essential for:",
    "questionHi": "NQAS (National Quality Assurance Standards) क्या हैं?",
    "optionsEn": [
      "Only patient comfort",
      "Infection prevention and quality care",
      "Only staff convenience",
      "Only appearance"
    ],
    "optionsHi": [
      "खेल मानक",
      "सरकारी स्वास्थ्य सुविधाओं के गुणवत्ता मानक",
      "खाद्य मानक",
      "शिक्षा मानक"
    ],
    "correctAnswer": 1,
    "explanationEn": "HCF WASH critical for safe healthcare delivery.",
    "explanationHi": "Quality standards।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-978",
    "questionEn": "WASH in schools is essential for:",
    "questionHi": "Quality Circle क्या है?",
    "optionsEn": [
      "Only appearance",
      "Health, dignity, and education outcomes",
      "Only convenience",
      "Only administration"
    ],
    "optionsHi": [
      "गोल आकार",
      "कर्मचारियों का समूह जो गुणवत्ता सुधार के लिए मिलते हैं",
      "केवल प्रबंधन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "School WASH supports multiple outcomes.",
    "explanationHi": "Staff engagement।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "9",
    "tags": [
      "9"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-979",
    "questionEn": "WASH at workplaces ensures:",
    "questionHi": "Kaizen का स्वास्थ्य सेवाओं में क्या उपयोग है?",
    "optionsEn": [
      "Only compliance",
      "Worker health and productivity",
      "Only appearance",
      "Only inspection"
    ],
    "optionsHi": [
      "जापानी खाना",
      "निरंतर छोटे-छोटे सुधार",
      "बड़ा बदलाव केवल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Workplace WASH protects workers and productivity.",
    "explanationHi": "Continuous improvement।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-980",
    "questionEn": "WASH in public spaces includes:",
    "questionHi": "5S (Sort, Set, Shine, Standardize, Sustain) का उपयोग क्या है?",
    "optionsEn": [
      "Only toilets",
      "Toilets, handwashing, drinking water facilities",
      "Only water",
      "Only hygiene"
    ],
    "optionsHi": [
      "केवल सफाई",
      "कार्यस्थल संगठन और दक्षता",
      "केवल जापान में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Public WASH covers multiple facility types.",
    "explanationHi": "Workplace organization।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-981",
    "questionEn": "Leave no one behind in WASH means:",
    "questionHi": "Lean Management का स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "Only focus on easy areas",
      "Reaching marginalized and vulnerable populations",
      "Only urban areas",
      "Only wealthy"
    ],
    "optionsHi": [
      "वजन कम करना",
      "अपव्यय कम करके दक्षता बढ़ाना",
      "केवल उद्योग में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Equity focus ensures all populations reached.",
    "explanationHi": "Efficiency improvement।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-982",
    "questionEn": "WASH for displaced populations requires:",
    "questionHi": "Change Management स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Same as residents",
      "Specific attention to camp and settlement needs",
      "No special measures",
      "Only temporary solutions"
    ],
    "optionsHi": [
      "पैसे बदलना",
      "नए कार्यक्रम/प्रक्रिया को सफलतापूर्वक लागू करना",
      "कुछ नहीं बदलना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Displaced populations have specific WASH needs.",
    "explanationHi": "Managing change।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-983",
    "questionEn": "WASH for indigenous populations should:",
    "questionHi": "Resistance to Change को कैसे संभालें?",
    "optionsEn": [
      "Ignore traditional practices",
      "Respect cultural practices while ensuring safety",
      "Only modern methods",
      "Only traditional methods"
    ],
    "optionsHi": [
      "अनदेखा करें",
      "संवाद, भागीदारी, प्रशिक्षण, धीरे-धीरे परिवर्तन",
      "जबरदस्ती",
      "छोड़ देना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Culturally appropriate approaches increase acceptance.",
    "explanationHi": "Overcoming resistance।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-984",
    "questionEn": "WASH affordability means:",
    "questionHi": "Leadership स्वास्थ्य कार्यक्रम में क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Free for all",
      "Cost should not prevent access for poor",
      "Only market pricing",
      "Only subsidies"
    ],
    "optionsHi": [
      "महत्वपूर्ण नहीं",
      "दिशा, प्रेरणा, समन्वय, समस्या समाधान",
      "केवल आदेश देना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Affordability ensures access regardless of income.",
    "explanationHi": "Leadership role।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-985",
    "questionEn": "WASH tariff design should consider:",
    "questionHi": "Team Building का स्वास्थ्य सेवाओं में क्या महत्व है?",
    "optionsEn": [
      "Only revenue",
      "Affordability, cost recovery, equity",
      "Only simplicity",
      "Only profit"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "बेहतर सहयोग, कार्य संतुष्टि, गुणवत्ता सेवा",
      "प्रतिस्पर्धा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tariff design balances multiple objectives.",
    "explanationHi": "Team work।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-986",
    "questionEn": "WASH financing sources include:",
    "questionHi": "Conflict Resolution का स्वास्थ्य टीम में क्या महत्व है?",
    "optionsEn": [
      "Only government",
      "Government, households, donors, private sector",
      "Only donors",
      "Only household"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "काम का माहौल बेहतर, सेवा गुणवत्ता, टीम सद्भाव",
      "झगड़ा बढ़ाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple sources finance WASH sector.",
    "explanationHi": "Conflict management।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-987",
    "questionEn": "Microfinance for WASH enables:",
    "questionHi": "Problem Solving का व्यवस्थित तरीका क्या है?",
    "optionsEn": [
      "Only large investments",
      "Household investment in toilets and connections",
      "Only government projects",
      "Only NGO work"
    ],
    "optionsHi": [
      "अनुमान",
      "समस्या पहचान → कारण विश्लेषण → समाधान → कार्यान्वयन → मूल्यांकन",
      "केवल शिकायत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Microfinance supports household WASH improvements.",
    "explanationHi": "Systematic approach।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-988",
    "questionEn": "Results-based financing in WASH pays for:",
    "questionHi": "Decision Making में क्या विचार करें?",
    "optionsEn": [
      "Only inputs",
      "Verified outcomes like ODF status",
      "Only activities",
      "Only reports"
    ],
    "optionsHi": [
      "केवल सुविधा",
      "साक्ष्य, संसाधन, प्रभाव, नैतिकता, व्यावहारिकता",
      "केवल अनुमान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "RBF links payment to achieved results.",
    "explanationHi": "Decision making।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-989",
    "questionEn": "WASH sector governance includes:",
    "questionHi": "Priority Setting का स्वास्थ्य में क्या उपयोग है?",
    "optionsEn": [
      "Only implementation",
      "Policy, regulation, coordination, accountability",
      "Only funding",
      "Only construction"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "सीमित संसाधनों का सर्वोत्तम उपयोग",
      "सब कुछ समान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Governance encompasses multiple functions.",
    "explanationHi": "Prioritization।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-990",
    "questionEn": "WASH regulation ensures:",
    "questionHi": "Urgent vs Important में क्या अंतर है?",
    "optionsEn": [
      "Only bureaucracy",
      "Quality standards and consumer protection",
      "Only paperwork",
      "Only delays"
    ],
    "optionsHi": [
      "एक ही हैं",
      "Urgent = तत्काल, Important = महत्वपूर्ण (दोनों अलग हो सकते हैं)",
      "विपरीत",
      "कोई अंतर नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Regulation protects public through standards.",
    "explanationHi": "Priority matrix।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-991",
    "questionEn": "WASH accountability mechanisms include:",
    "questionHi": "Resource Mobilization का स्वास्थ्य में क्या अर्थ है?",
    "optionsEn": [
      "Only punishment",
      "Reporting, citizen feedback, independent monitoring",
      "Only audits",
      "Only inspections"
    ],
    "optionsHi": [
      "केवल पैसा",
      "संसाधन (वित्त, मानव, सामग्री) जुटाना और उपयोग करना",
      "कुछ नहीं करना",
      "केवल मांगना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple mechanisms ensure accountability.",
    "explanationHi": "Resource management।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-992",
    "questionEn": "Community feedback on WASH services helps:",
    "questionHi": "Advocacy स्वास्थ्य में क्या है?",
    "optionsEn": [
      "Only complaints",
      "Improve services and ensure responsiveness",
      "Only bureaucracy",
      "Only documentation"
    ],
    "optionsHi": [
      "वकालत केवल",
      "स्वास्थ्य मुद्दों के लिए समर्थन जुटाना, नीति प्रभावित करना",
      "केवल विरोध",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Feedback drives service improvement.",
    "explanationHi": "Health advocacy।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-993",
    "questionEn": "WASH data systems support:",
    "questionHi": "Networking का स्वास्थ्य कार्यक्रम में क्या लाभ है?",
    "optionsEn": [
      "Only reporting",
      "Planning, monitoring, and decision-making",
      "Only compliance",
      "Only donors"
    ],
    "optionsHi": [
      "कोई लाभ नहीं",
      "सहयोग, जानकारी साझा करना, संसाधन जुटाना",
      "समय बर्बाद",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Data systems inform sector management.",
    "explanationHi": "Professional networking।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-994",
    "questionEn": "Real-time monitoring in WASH enables:",
    "questionHi": "Partnership का स्वास्थ्य सेवाओं में क्या महत्व है?",
    "optionsEn": [
      "Only confusion",
      "Rapid response to problems",
      "Only delays",
      "Only cost increase"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "विभिन्न संगठनों का सहयोग, व्यापक पहुंच, संसाधन साझा",
      "अकेले काम करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Real-time data enables quick corrective action.",
    "explanationHi": "Collaboration।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-995",
    "questionEn": "Geographic Information Systems in WASH help:",
    "questionHi": "MPHW के पेशेवर विकास के तरीके क्या हैं?",
    "optionsEn": [
      "Only mapping",
      "Spatial planning and coverage analysis",
      "Only decoration",
      "Only presentations"
    ],
    "optionsHi": [
      "कोई तरीका नहीं",
      "प्रशिक्षण, स्व-अध्ययन, अनुभव से सीखना, मेंटरशिप",
      "केवल डिग्री",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "GIS supports spatial analysis and planning.",
    "explanationHi": "Professional growth।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-996",
    "questionEn": "Mobile technology in WASH monitoring enables:",
    "questionHi": "Career Advancement के लिए MPHW क्या कर सकता है?",
    "optionsEn": [
      "Only calls",
      "Data collection and reporting from field",
      "Only texting",
      "Only internet"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "उच्च शिक्षा, प्रशिक्षण, अच्छा प्रदर्शन, विभागीय परीक्षा",
      "केवल इंतजार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mobile tools improve monitoring efficiency.",
    "explanationHi": "Career development।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-997",
    "questionEn": "WASH knowledge management involves:",
    "questionHi": "MPHW का सामुदायिक विश्वास कैसे बढ़ता है?",
    "optionsEn": [
      "Only storage",
      "Capturing, sharing, and using lessons learned",
      "Only reports",
      "Only libraries"
    ],
    "optionsHi": [
      "झूठ बोलना",
      "ईमानदारी, नियमितता, सम्मानजनक व्यवहार, अच्छी सेवा",
      "अनदेखा करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "KM improves practice through learning.",
    "explanationHi": "Trust building।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-998",
    "questionEn": "WASH learning networks enable:",
    "questionHi": "स्वास्थ्य कर्मी का सबसे बड़ा पुरस्कार क्या है?",
    "optionsEn": [
      "Only meetings",
      "Peer exchange and shared problem-solving",
      "Only conferences",
      "Only travel"
    ],
    "optionsHi": [
      "केवल वेतन",
      "समुदाय का स्वास्थ्य सुधार और संतुष्टि",
      "केवल पदोन्नति",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Networks facilitate professional learning.",
    "explanationHi": "Job satisfaction।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-999",
    "questionEn": "Future WASH challenges include:",
    "questionHi": "स्वास्थ्य एवं स्वच्छता का संयुक्त प्रभाव क्या है?",
    "optionsEn": [
      "None",
      "Climate change, urbanization, population growth",
      "Only funding",
      "Only technology"
    ],
    "optionsHi": [
      "कोई प्रभाव नहीं",
      "रोग में कमी, जीवन गुणवत्ता बेहतर, आर्थिक विकास",
      "नकारात्मक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple trends will shape future WASH needs.",
    "explanationHi": "Combined impact।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  },
  {
    "id": "HEALTH-HYGIENE-1000",
    "questionEn": "Achieving universal WASH requires:",
    "questionHi": "MPHW का स्वास्थ्य एवं स्वच्छता में अंतिम लक्ष्य क्या है?",
    "optionsEn": [
      "Only money",
      "Political will, financing, innovation, partnerships",
      "Only technology",
      "Only time"
    ],
    "optionsHi": [
      "केवल नौकरी",
      "स्वस्थ समुदाय, रोग मुक्त गांव/क्षेत्र, बेहतर जीवन",
      "केवल वेतन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple factors needed to achieve universal WASH.",
    "explanationHi": "Ultimate goal - Healthy community।",
    "difficulty": "easy",
    "topic": "health-hygiene",
    "subtopic": "10",
    "tags": [
      "10"
    ]
  }
];

export const healthHygieneQuestionBank: QuestionBank = {
  topicId: 'health-hygiene',
  topicNameEn: 'Health & Hygiene',
  topicNameHi: 'स्वास्थ्य एवं स्वच्छता',
  totalQuestions: healthHygieneQuestions.length,
  questions: healthHygieneQuestions
};
