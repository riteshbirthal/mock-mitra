import { Question, QuestionBank } from './types';

// @ts-ignore - Large question bank
export const anatomyQuestions: Question[] = [
  {
    "id": "ANATOMY-001",
    "questionEn": "What is the study of body structures and their relationships called?",
    "questionHi": "शरीर की संरचनाओं और उनके संबंधों के अध्ययन को क्या कहते हैं?",
    "optionsEn": [
      "Physiology",
      "Anatomy",
      "Pathology",
      "Histology"
    ],
    "optionsHi": [
      "क्रिया विज्ञान (Physiology)",
      "शरीर रचना विज्ञान (Anatomy)",
      "विकृति विज्ञान (Pathology)",
      "ऊतक विज्ञान (Histology)"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anatomy is the scientific study of body structures. Physiology studies functions, pathology studies diseases, and histology studies tissues microscopically.",
    "explanationHi": "शरीर रचना विज्ञान (Anatomy) शरीर की संरचनाओं का वैज्ञानिक अध्ययन है। क्रिया विज्ञान कार्यों का, विकृति विज्ञान रोगों का, और ऊतक विज्ञान सूक्ष्मदर्शी से ऊतकों का अध्ययन करता है।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-002",
    "questionEn": "In the standard anatomical position, the palms are facing:",
    "questionHi": "मानक शारीरिक स्थिति में, हथेलियां किस ओर होती हैं?",
    "optionsEn": [
      "Backward",
      "Forward",
      "Downward",
      "Inward"
    ],
    "optionsHi": [
      "पीछे की ओर",
      "आगे की ओर",
      "नीचे की ओर",
      "अंदर की ओर"
    ],
    "correctAnswer": 1,
    "explanationEn": "In anatomical position, the person stands upright with palms facing forward (anteriorly), which is the reference for all anatomical descriptions.",
    "explanationHi": "शारीरिक स्थिति में, व्यक्ति सीधा खड़ा होता है जिसमें हथेलियां आगे (अग्र) की ओर होती हैं, जो सभी शारीरिक विवरणों का संदर्भ है।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-003",
    "questionEn": "The term 'superior' means:",
    "questionHi": "'Superior' (ऊर्ध्व) शब्द का अर्थ है:",
    "optionsEn": [
      "Toward the front",
      "Toward the back",
      "Toward the head",
      "Toward the feet"
    ],
    "optionsHi": [
      "आगे की ओर",
      "पीछे की ओर",
      "सिर की ओर",
      "पैरों की ओर"
    ],
    "correctAnswer": 2,
    "explanationEn": "Superior means above or toward the head. The heart is superior to the stomach.",
    "explanationHi": "Superior का अर्थ है ऊपर या सिर की ओर। हृदय आमाशय से Superior (ऊपर) है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-004",
    "questionEn": "Which term means 'away from the midline of the body'?",
    "questionHi": "कौन सा शब्द 'शरीर की मध्य रेखा से दूर' का अर्थ रखता है?",
    "optionsEn": [
      "Medial",
      "Lateral",
      "Proximal",
      "Distal"
    ],
    "optionsHi": [
      "Medial (मध्यवर्ती)",
      "Lateral (पार्श्व)",
      "Proximal (समीपस्थ)",
      "Distal (दूरस्थ)"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lateral means away from the midline. The ears are lateral to the nose.",
    "explanationHi": "Lateral का अर्थ है मध्य रेखा से दूर। कान नाक से Lateral (पार्श्व) हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-005",
    "questionEn": "The plane that divides the body into anterior and posterior portions is the:",
    "questionHi": "वह तल जो शरीर को अग्र और पश्च भागों में विभाजित करता है:",
    "optionsEn": [
      "Sagittal plane",
      "Transverse plane",
      "Frontal (coronal) plane",
      "Midsagittal plane"
    ],
    "optionsHi": [
      "धनु तल (Sagittal plane)",
      "अनुप्रस्थ तल (Transverse plane)",
      "ललाट तल (Frontal/Coronal plane)",
      "मध्य धनु तल"
    ],
    "correctAnswer": 2,
    "explanationEn": "The frontal or coronal plane divides the body into front (anterior) and back (posterior) portions.",
    "explanationHi": "ललाट या राज्याभिषेक तल शरीर को आगे (अग्र) और पीछे (पश्च) भागों में विभाजित करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-006",
    "questionEn": "The basic structural and functional unit of life is the:",
    "questionHi": "जीवन की मूल संरचनात्मक और कार्यात्मक इकाई क्या है?",
    "optionsEn": [
      "Organ",
      "Tissue",
      "Cell",
      "System"
    ],
    "optionsHi": [
      "अंग (Organ)",
      "ऊतक (Tissue)",
      "कोशिका (Cell)",
      "तंत्र (System)"
    ],
    "correctAnswer": 2,
    "explanationEn": "Cells are the basic units of life. Tissues are groups of similar cells, organs are made of tissues, and systems are groups of organs.",
    "explanationHi": "कोशिकाएं जीवन की मूल इकाई हैं। ऊतक समान कोशिकाओं के समूह हैं, अंग ऊतकों से बने हैं, और तंत्र अंगों के समूह हैं।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-007",
    "questionEn": "Which cavity contains the brain?",
    "questionHi": "कौन सी गुहा मस्तिष्क को रखती है?",
    "optionsEn": [
      "Thoracic cavity",
      "Cranial cavity",
      "Abdominal cavity",
      "Pelvic cavity"
    ],
    "optionsHi": [
      "वक्ष गुहा (Thoracic cavity)",
      "कपाल गुहा (Cranial cavity)",
      "उदर गुहा (Abdominal cavity)",
      "श्रोणि गुहा (Pelvic cavity)"
    ],
    "correctAnswer": 1,
    "explanationEn": "The cranial cavity is part of the dorsal cavity and houses the brain, protected by the skull bones.",
    "explanationHi": "कपाल गुहा पृष्ठीय गुहा का भाग है और मस्तिष्क को रखती है, जो खोपड़ी की हड्डियों द्वारा संरक्षित है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-008",
    "questionEn": "The diaphragm separates which two cavities?",
    "questionHi": "मध्यपट (Diaphragm) किन दो गुहाओं को अलग करता है?",
    "optionsEn": [
      "Cranial and vertebral",
      "Thoracic and abdominal",
      "Abdominal and pelvic",
      "Dorsal and ventral"
    ],
    "optionsHi": [
      "कपाल और कशेरुक",
      "वक्ष और उदर",
      "उदर और श्रोणि",
      "पृष्ठीय और अग्र"
    ],
    "correctAnswer": 1,
    "explanationEn": "The diaphragm is a dome-shaped muscle that separates the thoracic cavity (containing heart and lungs) from the abdominal cavity.",
    "explanationHi": "मध्यपट एक गुंबद के आकार की पेशी है जो वक्ष गुहा (हृदय और फेफड़े वाली) को उदर गुहा से अलग करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-009",
    "questionEn": "A patient has pain in the right upper quadrant (RUQ). Which organ is most likely involved?",
    "questionHi": "एक रोगी को दाएं ऊपरी चतुर्थांश (RUQ) में दर्द है। कौन सा अंग सबसे संभावित रूप से प्रभावित है?",
    "optionsEn": [
      "Spleen",
      "Appendix",
      "Liver",
      "Sigmoid colon"
    ],
    "optionsHi": [
      "प्लीहा (Spleen)",
      "आंत्रपुच्छ (Appendix)",
      "यकृत (Liver)",
      "अवग्रह बृहदान्त्र (Sigmoid colon)"
    ],
    "correctAnswer": 2,
    "explanationEn": "The liver and gallbladder are located in the RUQ. The spleen is in LUQ, appendix in RLQ, and sigmoid colon in LLQ.",
    "explanationHi": "यकृत और पित्ताशय RUQ में स्थित हैं। प्लीहा LUQ में, आंत्रपुच्छ RLQ में, और अवग्रह बृहदान्त्र LLQ में है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-010",
    "questionEn": "How many organ systems are there in the human body?",
    "questionHi": "मानव शरीर में कितने अंग तंत्र होते हैं?",
    "optionsEn": [
      "9",
      "10",
      "11",
      "12"
    ],
    "optionsHi": [
      "9",
      "10",
      "11",
      "12"
    ],
    "correctAnswer": 2,
    "explanationEn": "There are 11 organ systems: integumentary, skeletal, muscular, nervous, endocrine, cardiovascular, lymphatic, respiratory, digestive, urinary, and reproductive.",
    "explanationHi": "11 अंग तंत्र हैं: त्वचा, कंकाल, पेशी, तंत्रिका, अंतःस्रावी, हृदय-वाहिका, लसीका, श्वसन, पाचन, मूत्र, और प्रजनन।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-011",
    "questionEn": "The term 'proximal' means:",
    "questionHi": "'Proximal' (समीपस्थ) शब्द का अर्थ है:",
    "optionsEn": [
      "Farther from the trunk",
      "Closer to the trunk",
      "Toward the surface",
      "Away from the surface"
    ],
    "optionsHi": [
      "धड़ से दूर",
      "धड़ के निकट",
      "सतह की ओर",
      "सतह से दूर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Proximal means closer to the point of attachment or trunk. The elbow is proximal to the wrist.",
    "explanationHi": "Proximal का अर्थ है जोड़ के बिंदु या धड़ के निकट। कोहनी कलाई से Proximal (समीपस्थ) है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-012",
    "questionEn": "Which tissue type covers body surfaces and lines body cavities?",
    "questionHi": "कौन सा ऊतक प्रकार शरीर की सतहों को ढकता है और शारीरिक गुहाओं को अस्तर देता है?",
    "optionsEn": [
      "Connective tissue",
      "Muscle tissue",
      "Epithelial tissue",
      "Nervous tissue"
    ],
    "optionsHi": [
      "संयोजी ऊतक (Connective tissue)",
      "पेशी ऊतक (Muscle tissue)",
      "उपकला ऊतक (Epithelial tissue)",
      "तंत्रिका ऊतक (Nervous tissue)"
    ],
    "correctAnswer": 2,
    "explanationEn": "Epithelial tissue covers external surfaces (skin) and lines internal cavities (digestive tract, blood vessels).",
    "explanationHi": "उपकला ऊतक बाहरी सतहों (त्वचा) को ढकता है और आंतरिक गुहाओं (पाचन पथ, रक्त वाहिकाओं) को अस्तर देता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-013",
    "questionEn": "How many bones are in the adult human skeleton?",
    "questionHi": "वयस्क मानव कंकाल में कितनी हड्डियां होती हैं?",
    "optionsEn": [
      "106",
      "156",
      "206",
      "256"
    ],
    "optionsHi": [
      "106",
      "156",
      "206",
      "256"
    ],
    "correctAnswer": 2,
    "explanationEn": "The adult human skeleton has 206 bones. Infants have more (about 270) which fuse as they grow.",
    "explanationHi": "वयस्क मानव कंकाल में 206 हड्डियां होती हैं। शिशुओं में अधिक (लगभग 270) होती हैं जो बढ़ने पर जुड़ जाती हैं।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-014",
    "questionEn": "Which of the following is a function of the skeletal system?",
    "questionHi": "निम्नलिखित में से कंकाल तंत्र का कार्य कौन सा है?",
    "optionsEn": [
      "Gas exchange",
      "Blood cell production",
      "Hormone secretion",
      "Digestion"
    ],
    "optionsHi": [
      "गैस विनिमय",
      "रक्त कोशिका उत्पादन",
      "हार्मोन स्राव",
      "पाचन"
    ],
    "correctAnswer": 1,
    "explanationEn": "The skeletal system produces blood cells in the red bone marrow (hematopoiesis). It also provides support, protection, and mineral storage.",
    "explanationHi": "कंकाल तंत्र लाल अस्थि मज्जा में रक्त कोशिकाओं का उत्पादन करता है (हेमटोपोइसिस)। यह सहारा, सुरक्षा और खनिज भंडारण भी प्रदान करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-015",
    "questionEn": "The axial skeleton includes all of the following EXCEPT:",
    "questionHi": "हंसली (Clavicle) को सामान्य भाषा में क्या कहते हैं?",
    "optionsEn": [
      "Skull",
      "Vertebral column",
      "Ribs",
      "Pelvic girdle"
    ],
    "optionsHi": [
      "कंधे की हड्डी",
      "कॉलर बोन",
      "प्रकोष्ठ की हड्डी",
      "कूल्हे की हड्डी"
    ],
    "correctAnswer": 3,
    "explanationEn": "The axial skeleton includes skull, vertebral column, and thoracic cage (ribs and sternum). The pelvic girdle is part of the appendicular skeleton.",
    "explanationHi": "हंसली (Clavicle) को कॉलर बोन कहते हैं। यह कंधे और वक्ष को जोड़ती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-016",
    "questionEn": "Long bones like the femur have a shaft called the:",
    "questionHi": "ऊपरी अंग (Upper Limb) की सबसे बड़ी हड्डी कौन सी है?",
    "optionsEn": [
      "Epiphysis",
      "Diaphysis",
      "Metaphysis",
      "Periosteum"
    ],
    "optionsHi": [
      "त्रिज्या (Radius)",
      "उल्ना (Ulna)",
      "प्रगंडिका (Humerus)",
      "हंसली (Clavicle)"
    ],
    "correctAnswer": 1,
    "explanationEn": "The diaphysis is the shaft of a long bone. Epiphyses are the ends, metaphysis is between shaft and ends, and periosteum is the outer membrane.",
    "explanationHi": "प्रगंडिका (Humerus) बाहु की हड्डी है और ऊपरी अंग की सबसे बड़ी हड्डी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-017",
    "questionEn": "Which vertebrae are found in the neck region?",
    "questionHi": "निचले अंग (Lower Limb) की सबसे बड़ी और मजबूत हड्डी कौन सी है?",
    "optionsEn": [
      "Thoracic",
      "Lumbar",
      "Cervical",
      "Sacral"
    ],
    "optionsHi": [
      "अंतर्जंघिका (Tibia)",
      "बहिर्जंघिका (Fibula)",
      "ऊर्विका (Femur)",
      "फलक (Patella)"
    ],
    "correctAnswer": 2,
    "explanationEn": "There are 7 cervical vertebrae in the neck (C1-C7), 12 thoracic in the chest, 5 lumbar in the lower back, and 5 fused sacral vertebrae.",
    "explanationHi": "ऊर्विका (Femur) या जांघ की हड्डी शरीर की सबसे लंबी और मजबूत हड्डी है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-018",
    "questionEn": "The patella is commonly known as the:",
    "questionHi": "खोपड़ी की हड्डियों के बीच के जोड़ों को क्या कहते हैं?",
    "optionsEn": [
      "Elbow bone",
      "Kneecap",
      "Ankle bone",
      "Shoulder blade"
    ],
    "optionsHi": [
      "संधि (Joint)",
      "सीवन (Suture)",
      "उपास्थि (Cartilage)",
      "स्नायु (Ligament)"
    ],
    "correctAnswer": 1,
    "explanationEn": "The patella is the kneecap, a sesamoid bone embedded in the quadriceps tendon.",
    "explanationHi": "खोपड़ी की हड्डियों के बीच के अचल जोड़ों को सीवन (Sutures) कहते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-019",
    "questionEn": "The deltoid muscle injection site is located on which bone?",
    "questionHi": "कशेरुक स्तंभ (Vertebral Column) में कितनी कशेरुकाएं होती हैं?",
    "optionsEn": [
      "Scapula",
      "Humerus",
      "Radius",
      "Clavicle"
    ],
    "optionsHi": [
      "26",
      "33",
      "40",
      "24"
    ],
    "correctAnswer": 1,
    "explanationEn": "The deltoid muscle overlies the upper lateral aspect of the humerus (upper arm bone). This is a common IM injection site.",
    "explanationHi": "कशेरुक स्तंभ में 33 कशेरुकाएं होती हैं: 7 ग्रीवा (Cervical), 12 वक्ष (Thoracic), 5 कटि (Lumbar), 5 त्रिक (Sacral - जुड़ी हुई), और 4 अनुत्रिक (Coccygeal - जुड़ी हुई)।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-020",
    "questionEn": "How many pairs of ribs are there?",
    "questionHi": "पसलियों की कुल संख्या कितनी होती है?",
    "optionsEn": [
      "10",
      "11",
      "12",
      "14"
    ],
    "optionsHi": [
      "10 जोड़े",
      "12 जोड़े",
      "14 जोड़े",
      "8 जोड़े"
    ],
    "correctAnswer": 2,
    "explanationEn": "There are 12 pairs of ribs. The first 7 pairs are true ribs (attach directly to sternum), 8-10 are false ribs, and 11-12 are floating ribs.",
    "explanationHi": "मनुष्य में 12 जोड़े (24) पसलियां होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-021",
    "questionEn": "Which type of muscle is under voluntary control?",
    "questionHi": "कलाई की हड्डियों को क्या कहते हैं?",
    "optionsEn": [
      "Smooth muscle",
      "Cardiac muscle",
      "Skeletal muscle",
      "All of the above"
    ],
    "optionsHi": [
      "मेटाकार्पल (Metacarpals)",
      "कार्पल (Carpals)",
      "टार्सल (Tarsals)",
      "फैलेंज (Phalanges)"
    ],
    "correctAnswer": 2,
    "explanationEn": "Skeletal muscle is voluntary (consciously controlled). Smooth and cardiac muscles are involuntary.",
    "explanationHi": "कलाई में 8 कार्पल (Carpal) हड्डियां होती हैं।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-022",
    "questionEn": "The gluteus maximus muscle is commonly used for:",
    "questionHi": "टखने की हड्डियों को क्या कहते हैं?",
    "optionsEn": [
      "Subcutaneous injection",
      "Intramuscular injection",
      "Intravenous injection",
      "Intradermal injection"
    ],
    "optionsHi": [
      "कार्पल (Carpals)",
      "मेटाटार्सल (Metatarsals)",
      "टार्सल (Tarsals)",
      "फैलेंज (Phalanges)"
    ],
    "correctAnswer": 1,
    "explanationEn": "The gluteus maximus (buttock) is a large muscle used for deep intramuscular injections, especially for larger volumes.",
    "explanationHi": "टखने में 7 टार्सल (Tarsal) हड्डियां होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-023",
    "questionEn": "Which muscle type is found in the walls of blood vessels?",
    "questionHi": "अक्षीय कंकाल (Axial Skeleton) में क्या शामिल है?",
    "optionsEn": [
      "Skeletal muscle",
      "Smooth muscle",
      "Cardiac muscle",
      "Striated muscle"
    ],
    "optionsHi": [
      "केवल हाथ और पैर",
      "खोपड़ी, कशेरुक स्तंभ और वक्षपिंजर",
      "केवल कंधे और कूल्हे",
      "केवल अंग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Smooth muscle is found in blood vessel walls, digestive tract, and other internal organs. It is involuntary and non-striated.",
    "explanationHi": "अक्षीय कंकाल में खोपड़ी (Skull), कशेरुक स्तंभ (Vertebral Column) और वक्षपिंजर (Thoracic Cage - पसलियां और उरोस्थि) शामिल हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-024",
    "questionEn": "The vastus lateralis muscle is located on the:",
    "questionHi": "उपांगीय कंकाल (Appendicular Skeleton) में क्या शामिल है?",
    "optionsEn": [
      "Upper arm",
      "Forearm",
      "Outer thigh",
      "Calf"
    ],
    "optionsHi": [
      "खोपड़ी और रीढ़",
      "अंग और मेखला (Girdles)",
      "केवल वक्षपिंजर",
      "केवल कशेरुक स्तंभ"
    ],
    "correctAnswer": 2,
    "explanationEn": "The vastus lateralis is on the outer thigh and is the preferred IM injection site for infants and young children.",
    "explanationHi": "उपांगीय कंकाल में ऊपरी और निचले अंग तथा कंधे की मेखला (Pectoral Girdle) और श्रोणि मेखला (Pelvic Girdle) शामिल हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-025",
    "questionEn": "The heart has how many chambers?",
    "questionHi": "घुटने की टोपी (Kneecap) को वैज्ञानिक रूप से क्या कहते हैं?",
    "optionsEn": [
      "2",
      "3",
      "4",
      "5"
    ],
    "optionsHi": [
      "ऊर्विका (Femur)",
      "अंतर्जंघिका (Tibia)",
      "फलक (Patella)",
      "बहिर्जंघिका (Fibula)"
    ],
    "correctAnswer": 2,
    "explanationEn": "The heart has 4 chambers: 2 atria (upper chambers) and 2 ventricles (lower chambers).",
    "explanationHi": "फलक (Patella) या घुटने की टोपी एक सीसमॉयड (Sesamoid) हड्डी है जो घुटने के जोड़ की रक्षा करती है।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-026",
    "questionEn": "Which blood vessel carries oxygenated blood from the lungs to the heart?",
    "questionHi": "मानव शरीर में कितने प्रकार की पेशियां होती हैं?",
    "optionsEn": [
      "Pulmonary artery",
      "Pulmonary vein",
      "Aorta",
      "Vena cava"
    ],
    "optionsHi": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pulmonary veins carry oxygenated blood from lungs to the left atrium. This is the only vein that carries oxygenated blood.",
    "explanationHi": "तीन प्रकार की पेशियां हैं: कंकाल पेशी (Skeletal), चिकनी पेशी (Smooth), और हृदय पेशी (Cardiac)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-027",
    "questionEn": "The radial pulse is felt at the:",
    "questionHi": "कौन सी पेशी ऐच्छिक (Voluntary) होती है?",
    "optionsEn": [
      "Neck",
      "Wrist (thumb side)",
      "Groin",
      "Ankle"
    ],
    "optionsHi": [
      "हृदय पेशी",
      "चिकनी पेशी",
      "कंकाल पेशी",
      "आंत्र पेशी"
    ],
    "correctAnswer": 1,
    "explanationEn": "The radial artery pulse is palpated at the wrist on the thumb side (lateral aspect). It is the most commonly used pulse point.",
    "explanationHi": "कंकाल पेशी ऐच्छिक होती है जिसे हम अपनी इच्छा से नियंत्रित कर सकते हैं। हृदय और चिकनी पेशियां अनैच्छिक होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-028",
    "questionEn": "The largest artery in the body is the:",
    "questionHi": "इंट्रामस्कुलर (IM) इंजेक्शन के लिए कौन सी पेशी सबसे उपयुक्त है?",
    "optionsEn": [
      "Pulmonary artery",
      "Carotid artery",
      "Aorta",
      "Femoral artery"
    ],
    "optionsHi": [
      "बाइसेप्स (Biceps)",
      "डेल्टॉयड (Deltoid)",
      "ट्राइसेप्स (Triceps)",
      "पेक्टोरलिस (Pectoralis)"
    ],
    "correctAnswer": 2,
    "explanationEn": "The aorta is the largest artery, arising from the left ventricle and distributing blood to the entire body.",
    "explanationHi": "डेल्टॉयड (कंधे की पेशी) वयस्कों में IM इंजेक्शन के लिए सामान्य स्थल है। अन्य स्थल वास्टस लेटरालिस (जांघ) और ग्लूटियस (नितंब) हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-029",
    "questionEn": "The wall of the heart is mainly composed of:",
    "questionHi": "हृदय की दीवार में कौन सी पेशी पाई जाती है?",
    "optionsEn": [
      "Skeletal muscle",
      "Smooth muscle",
      "Cardiac muscle",
      "Connective tissue"
    ],
    "optionsHi": [
      "कंकाल पेशी",
      "चिकनी पेशी",
      "हृदय पेशी (Cardiac muscle)",
      "मिश्रित पेशी"
    ],
    "correctAnswer": 2,
    "explanationEn": "The myocardium (heart wall) is made of cardiac muscle, which is involuntary, striated, and found only in the heart.",
    "explanationHi": "हृदय पेशी केवल हृदय में पाई जाती है। यह अनैच्छिक और धारीदार होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-030",
    "questionEn": "Which pulse point is used to assess circulation in the lower limb?",
    "questionHi": "चिकनी पेशी (Smooth muscle) कहां पाई जाती है?",
    "optionsEn": [
      "Radial pulse",
      "Brachial pulse",
      "Dorsalis pedis pulse",
      "Carotid pulse"
    ],
    "optionsHi": [
      "केवल हृदय में",
      "आंतों, रक्त वाहिकाओं, मूत्राशय में",
      "केवल हड्डियों से जुड़ी",
      "केवल त्वचा में"
    ],
    "correctAnswer": 2,
    "explanationEn": "The dorsalis pedis pulse is felt on the top of the foot and assesses circulation to the lower limb.",
    "explanationHi": "चिकनी पेशी आंतरिक अंगों की दीवारों में पाई जाती है जैसे आहार नाल, रक्त वाहिकाएं, मूत्राशय आदि।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-031",
    "questionEn": "The primary organs of respiration are the:",
    "questionHi": "हृदय में कितने कक्ष (Chambers) होते हैं?",
    "optionsEn": [
      "Bronchi",
      "Trachea",
      "Lungs",
      "Nasal cavity"
    ],
    "optionsHi": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "explanationEn": "The lungs are the primary organs where gas exchange occurs. Other structures are part of the conducting pathway.",
    "explanationHi": "हृदय में 4 कक्ष होते हैं: 2 आलिंद (Atria) - दायां और बायां, और 2 निलय (Ventricles) - दायां और बायां।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-032",
    "questionEn": "Gas exchange occurs in the:",
    "questionHi": "महाधमनी (Aorta) शरीर की सबसे बड़ी:",
    "optionsEn": [
      "Bronchi",
      "Bronchioles",
      "Alveoli",
      "Trachea"
    ],
    "optionsHi": [
      "शिरा है",
      "धमनी है",
      "केशिका है",
      "लसीका वाहिका है"
    ],
    "correctAnswer": 2,
    "explanationEn": "Alveoli are tiny air sacs where oxygen and carbon dioxide exchange between air and blood through thin walls.",
    "explanationHi": "महाधमनी (Aorta) शरीर की सबसे बड़ी धमनी है जो बाएं निलय से ऑक्सीजनयुक्त रक्त को पूरे शरीर में ले जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-033",
    "questionEn": "The voice box is also known as the:",
    "questionHi": "फुफ्फुसीय धमनी (Pulmonary artery) कौन सा रक्त ले जाती है?",
    "optionsEn": [
      "Pharynx",
      "Larynx",
      "Trachea",
      "Bronchus"
    ],
    "optionsHi": [
      "ऑक्सीजनयुक्त रक्त",
      "ऑक्सीजनरहित रक्त",
      "मिश्रित रक्त",
      "प्लाज्मा"
    ],
    "correctAnswer": 1,
    "explanationEn": "The larynx (voice box) contains the vocal cords and is located between the pharynx and trachea.",
    "explanationHi": "फुफ्फुसीय धमनी अपवाद है - यह धमनी होते हुए भी ऑक्सीजनरहित (अशुद्ध) रक्त को हृदय से फेफड़ों तक ले जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-034",
    "questionEn": "Which muscle is the primary muscle of inspiration?",
    "questionHi": "रक्तचाप मापने के लिए कौन सी धमनी उपयोग की जाती है?",
    "optionsEn": [
      "Intercostal muscles",
      "Diaphragm",
      "Abdominal muscles",
      "Sternocleidomastoid"
    ],
    "optionsHi": [
      "कैरोटिड (Carotid)",
      "ब्रेकियल (Brachial)",
      "रेडियल (Radial)",
      "फीमोरल (Femoral)"
    ],
    "correctAnswer": 1,
    "explanationEn": "The diaphragm contracts and moves downward during inspiration, increasing thoracic volume and causing air to enter the lungs.",
    "explanationHi": "ब्रेकियल धमनी (बाहु धमनी) का उपयोग स्फिग्मोमैनोमीटर से रक्तचाप मापने के लिए किया जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-035",
    "questionEn": "How many lobes does the right lung have?",
    "questionHi": "नाड़ी (Pulse) आमतौर पर किस स्थान पर जांची जाती है?",
    "optionsEn": [
      "1",
      "2",
      "3",
      "4"
    ],
    "optionsHi": [
      "कोहनी पर",
      "कलाई पर (रेडियल धमनी)",
      "घुटने पर",
      "कंधे पर"
    ],
    "correctAnswer": 2,
    "explanationEn": "The right lung has 3 lobes (upper, middle, lower). The left lung has 2 lobes to accommodate the heart.",
    "explanationHi": "रेडियल धमनी (कलाई पर अंगूठे की ओर) नाड़ी जांचने का सबसे सामान्य स्थल है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-036",
    "questionEn": "The alimentary canal begins at the:",
    "questionHi": "हृदय को ढकने वाली दोहरी झिल्ली को क्या कहते हैं?",
    "optionsEn": [
      "Stomach",
      "Esophagus",
      "Mouth",
      "Pharynx"
    ],
    "optionsHi": [
      "फुस्फुस (Pleura)",
      "हृदयावरण (Pericardium)",
      "पेरिटोनियम (Peritoneum)",
      "मेनिंजेस (Meninges)"
    ],
    "correctAnswer": 2,
    "explanationEn": "The alimentary canal (digestive tract) begins at the mouth and ends at the anus.",
    "explanationHi": "हृदयावरण (Pericardium) हृदय को घेरने वाली दोहरी झिल्ली की थैली है जो हृदय की रक्षा करती है।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-037",
    "questionEn": "The largest internal organ in the body is the:",
    "questionHi": "श्वसन तंत्र का मुख्य कार्य क्या है?",
    "optionsEn": [
      "Heart",
      "Brain",
      "Liver",
      "Lungs"
    ],
    "optionsHi": [
      "भोजन पाचन",
      "गैस विनिमय (O2 और CO2)",
      "रक्त परिवहन",
      "हार्मोन उत्पादन"
    ],
    "correctAnswer": 2,
    "explanationEn": "The liver is the largest internal organ (skin is larger but external), weighing about 1.5 kg in adults.",
    "explanationHi": "श्वसन तंत्र का मुख्य कार्य ऑक्सीजन (O2) को शरीर में लाना और कार्बन डाइऑक्साइड (CO2) को बाहर निकालना है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-038",
    "questionEn": "The appendix is attached to the:",
    "questionHi": "श्वासनली (Trachea) कहां विभाजित होती है?",
    "optionsEn": [
      "Ileum",
      "Cecum",
      "Sigmoid colon",
      "Ascending colon"
    ],
    "optionsHi": [
      "स्वरयंत्र में",
      "दो मुख्य श्वसनियों (Bronchi) में",
      "नासिका में",
      "ग्रसनी में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The appendix is a small, finger-like projection attached to the cecum (beginning of the large intestine).",
    "explanationHi": "श्वासनली (Trachea) दो मुख्य श्वसनियों (Primary Bronchi) में विभाजित होती है - एक दाएं फेफड़े के लिए और एक बाएं फेफड़े के लिए।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-039",
    "questionEn": "Which organ produces bile?",
    "questionHi": "फेफड़ों में गैस विनिमय कहां होता है?",
    "optionsEn": [
      "Gallbladder",
      "Pancreas",
      "Liver",
      "Stomach"
    ],
    "optionsHi": [
      "श्वसनियों में",
      "श्वासनली में",
      "वायुकोषों (Alveoli) में",
      "ग्रसनी में"
    ],
    "correctAnswer": 2,
    "explanationEn": "The liver produces bile, which is then stored and concentrated in the gallbladder.",
    "explanationHi": "वायुकोष (Alveoli) छोटी थैलियां हैं जहां ऑक्सीजन और कार्बन डाइऑक्साइड का आदान-प्रदान होता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-040",
    "questionEn": "Most nutrient absorption occurs in the:",
    "questionHi": "दाएं फेफड़े में कितने पालि (Lobes) होते हैं?",
    "optionsEn": [
      "Stomach",
      "Small intestine",
      "Large intestine",
      "Esophagus"
    ],
    "optionsHi": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "explanationEn": "The small intestine (especially jejunum and ileum) is the primary site for nutrient absorption due to its villi and microvilli.",
    "explanationHi": "दाएं फेफड़े में 3 पालि (ऊपरी, मध्य, निचला) होते हैं जबकि बाएं फेफड़े में केवल 2 पालि (ऊपरी, निचला) होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-041",
    "questionEn": "The central nervous system consists of:",
    "questionHi": "फेफड़ों को ढकने वाली झिल्ली को क्या कहते हैं?",
    "optionsEn": [
      "Brain only",
      "Spinal cord only",
      "Brain and spinal cord",
      "All nerves"
    ],
    "optionsHi": [
      "पेरिकार्डियम",
      "फुस्फुस (Pleura)",
      "पेरिटोनियम",
      "मेनिंजेस"
    ],
    "correctAnswer": 2,
    "explanationEn": "The CNS includes the brain and spinal cord. The PNS includes all other nerves.",
    "explanationHi": "फुस्फुस (Pleura) फेफड़ों को ढकने वाली दोहरी झिल्ली है।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-042",
    "questionEn": "The functional unit of the nervous system is the:",
    "questionHi": "स्वरयंत्र (Larynx) में क्या होता है?",
    "optionsEn": [
      "Brain",
      "Nerve",
      "Neuron",
      "Synapse"
    ],
    "optionsHi": [
      "गैस विनिमय",
      "आवाज उत्पादन",
      "पाचन",
      "रक्त शुद्धिकरण"
    ],
    "correctAnswer": 2,
    "explanationEn": "Neurons (nerve cells) are the basic functional units that transmit electrical impulses.",
    "explanationHi": "स्वरयंत्र (Larynx) में स्वर रज्जु (Vocal cords) होते हैं जो आवाज उत्पन्न करते हैं। इसे 'वॉयस बॉक्स' भी कहते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-043",
    "questionEn": "Which part of the brain controls balance and coordination?",
    "questionHi": "पाचन तंत्र की शुरुआत कहां से होती है?",
    "optionsEn": [
      "Cerebrum",
      "Cerebellum",
      "Brainstem",
      "Hypothalamus"
    ],
    "optionsHi": [
      "आमाशय से",
      "मुख (Mouth) से",
      "ग्रसनी से",
      "आंतों से"
    ],
    "correctAnswer": 1,
    "explanationEn": "The cerebellum (little brain) is located at the back of the head and controls balance, posture, and coordination.",
    "explanationHi": "पाचन तंत्र मुख से शुरू होता है जहां भोजन को चबाया जाता है और लार द्वारा पाचन शुरू होता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-044",
    "questionEn": "How many pairs of spinal nerves are there?",
    "questionHi": "यकृत (Liver) शरीर के किस भाग में स्थित है?",
    "optionsEn": [
      "12",
      "24",
      "31",
      "42"
    ],
    "optionsHi": [
      "बाएं ऊपरी चतुर्थांश",
      "दाएं ऊपरी चतुर्थांश",
      "दाएं निचले चतुर्थांश",
      "बाएं निचले चतुर्थांश"
    ],
    "correctAnswer": 2,
    "explanationEn": "There are 31 pairs of spinal nerves: 8 cervical, 12 thoracic, 5 lumbar, 5 sacral, and 1 coccygeal.",
    "explanationHi": "यकृत (Liver) मुख्य रूप से दाएं ऊपरी चतुर्थांश (RUQ) में स्थित है, जो शरीर की सबसे बड़ी ग्रंथि है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-045",
    "questionEn": "The protective membranes covering the brain and spinal cord are called:",
    "questionHi": "छोटी आंत के तीन भाग कौन से हैं?",
    "optionsEn": [
      "Periosteum",
      "Meninges",
      "Dura mater only",
      "Myelin sheath"
    ],
    "optionsHi": [
      "अंधनाल, बृहदान्त्र, मलाशय",
      "ग्रहणी, मध्यांत्र, शेषांत्र",
      "जठर, ग्रहणी, अंधनाल",
      "आमाशय, अग्न्याशय, यकृत"
    ],
    "correctAnswer": 1,
    "explanationEn": "The meninges are three protective membranes: dura mater (outer), arachnoid mater (middle), and pia mater (inner).",
    "explanationHi": "छोटी आंत के तीन भाग हैं: ग्रहणी (Duodenum), मध्यांत्र (Jejunum), और शेषांत्र (Ileum)।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-046",
    "questionEn": "The kidneys are located in which body region?",
    "questionHi": "आंत्रपुच्छ (Appendix) कहां स्थित है?",
    "optionsEn": [
      "Thoracic",
      "Abdominal (retroperitoneal)",
      "Pelvic",
      "Cranial"
    ],
    "optionsHi": [
      "LUQ में",
      "RUQ में",
      "RLQ में",
      "LLQ में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The kidneys are located in the posterior abdominal wall, behind the peritoneum (retroperitoneal position).",
    "explanationHi": "आंत्रपुच्छ (Appendix) दाएं निचले चतुर्थांश (RLQ) में अंधनाल (Cecum) से जुड़ा होता है।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-047",
    "questionEn": "The functional unit of the kidney is the:",
    "questionHi": "पित्त (Bile) कहां बनता है?",
    "optionsEn": [
      "Glomerulus",
      "Nephron",
      "Renal pelvis",
      "Ureter"
    ],
    "optionsHi": [
      "पित्ताशय में",
      "यकृत में",
      "अग्न्याशय में",
      "आमाशय में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Each kidney contains about 1 million nephrons, which are the basic units that filter blood and produce urine.",
    "explanationHi": "पित्त (Bile) यकृत में बनता है और पित्ताशय (Gallbladder) में संग्रहित होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-048",
    "questionEn": "Urine is stored in the:",
    "questionHi": "अग्न्याशय (Pancreas) का क्या कार्य है?",
    "optionsEn": [
      "Kidney",
      "Ureter",
      "Urinary bladder",
      "Urethra"
    ],
    "optionsHi": [
      "केवल इंसुलिन उत्पादन",
      "केवल पाचक एंजाइम उत्पादन",
      "इंसुलिन और पाचक एंजाइम दोनों",
      "पित्त उत्पादन"
    ],
    "correctAnswer": 2,
    "explanationEn": "The urinary bladder is a muscular sac that stores urine until it is eliminated.",
    "explanationHi": "अग्न्याशय एक मिश्रित ग्रंथि है जो इंसुलिन (अंतःस्रावी) और पाचक एंजाइम (बहिःस्रावी) दोनों बनाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-049",
    "questionEn": "The urethra in males is longer because it also passes through the:",
    "questionHi": "केंद्रीय तंत्रिका तंत्र (CNS) में क्या शामिल है?",
    "optionsEn": [
      "Bladder",
      "Kidney",
      "Prostate and penis",
      "Ureter"
    ],
    "optionsHi": [
      "केवल मस्तिष्क",
      "केवल मेरुरज्जु",
      "मस्तिष्क और मेरुरज्जु",
      "सभी तंत्रिकाएं"
    ],
    "correctAnswer": 2,
    "explanationEn": "The male urethra (~20 cm) passes through the prostate gland and penis, while the female urethra is only ~4 cm.",
    "explanationHi": "केंद्रीय तंत्रिका तंत्र (CNS) में मस्तिष्क (Brain) और मेरुरज्जु (Spinal Cord) शामिल हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-050",
    "questionEn": "The female gonads are called:",
    "questionHi": "मस्तिष्क का सबसे बड़ा भाग कौन सा है?",
    "optionsEn": [
      "Testes",
      "Ovaries",
      "Fallopian tubes",
      "Uterus"
    ],
    "optionsHi": [
      "अनुमस्तिष्क (Cerebellum)",
      "प्रमस्तिष्क (Cerebrum)",
      "मस्तिष्क स्तंभ (Brain Stem)",
      "थैलेमस"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ovaries are the female gonads that produce eggs (ova) and female hormones. Testes are male gonads.",
    "explanationHi": "प्रमस्तिष्क (Cerebrum) मस्तिष्क का सबसे बड़ा भाग है जो सोच, स्मृति, भाषा और ऐच्छिक गतिविधियों को नियंत्रित करता है।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-051",
    "questionEn": "The uterus is also called the:",
    "questionHi": "संतुलन और समन्वय किस भाग द्वारा नियंत्रित होता है?",
    "optionsEn": [
      "Cervix",
      "Womb",
      "Vagina",
      "Ovary"
    ],
    "optionsHi": [
      "प्रमस्तिष्क",
      "अनुमस्तिष्क (Cerebellum)",
      "मेडुला",
      "थैलेमस"
    ],
    "correctAnswer": 1,
    "explanationEn": "The uterus (womb) is where the fertilized egg implants and the fetus develops during pregnancy.",
    "explanationHi": "अनुमस्तिष्क (Cerebellum) शरीर के संतुलन, समन्वय और पेशी टोन को नियंत्रित करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-052",
    "questionEn": "Fertilization typically occurs in the:",
    "questionHi": "मेरुरज्जु (Spinal Cord) कितनी कशेरुकाओं तक फैली होती है?",
    "optionsEn": [
      "Uterus",
      "Vagina",
      "Fallopian tube",
      "Ovary"
    ],
    "optionsHi": [
      "C1 से L1-L2 तक",
      "C1 से S5 तक",
      "C1 से T12 तक",
      "C1 से L5 तक"
    ],
    "correctAnswer": 2,
    "explanationEn": "Fertilization usually occurs in the fallopian tube (oviduct), and the fertilized egg then travels to the uterus for implantation.",
    "explanationHi": "मेरुरज्जु ग्रीवा की पहली कशेरुका (C1) से कटि की पहली या दूसरी कशेरुका (L1-L2) तक फैली होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-053",
    "questionEn": "Sperm cells are produced in the:",
    "questionHi": "तंत्रिका कोशिका (Neuron) का मुख्य भाग क्या कहलाता है?",
    "optionsEn": [
      "Prostate gland",
      "Seminal vesicles",
      "Testes",
      "Epididymis"
    ],
    "optionsHi": [
      "अक्षतंतु (Axon)",
      "डेंड्राइट",
      "कोशिका काय (Cell Body)",
      "सिनैप्स"
    ],
    "correctAnswer": 2,
    "explanationEn": "Testes produce sperm cells (spermatogenesis) and male hormones. The epididymis stores and matures sperm.",
    "explanationHi": "कोशिका काय (Soma/Cell Body) में नाभिक होता है और यह न्यूरॉन का मुख्य भाग है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-054",
    "questionEn": "The outermost layer of the skin is the:",
    "questionHi": "मूत्र का निर्माण कहां होता है?",
    "optionsEn": [
      "Dermis",
      "Epidermis",
      "Hypodermis",
      "Subcutaneous"
    ],
    "optionsHi": [
      "मूत्राशय में",
      "मूत्रवाहिनी में",
      "वृक्क (Kidney) में",
      "मूत्रमार्ग में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The epidermis is the outer protective layer. The dermis is below it, and hypodermis (subcutaneous) is the deepest layer.",
    "explanationHi": "मूत्र का निर्माण वृक्क (Kidney) में होता है जहां रक्त को छानकर अपशिष्ट पदार्थों को अलग किया जाता है।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-055",
    "questionEn": "Which layer of skin contains blood vessels and nerve endings?",
    "questionHi": "वृक्क की कार्यात्मक इकाई क्या है?",
    "optionsEn": [
      "Epidermis",
      "Dermis",
      "Stratum corneum",
      "Stratum basale"
    ],
    "optionsHi": [
      "ग्लोमेरुलस",
      "नेफ्रॉन (Nephron)",
      "मूत्रवाहिनी",
      "मूत्राशय"
    ],
    "correctAnswer": 1,
    "explanationEn": "The dermis contains blood vessels, nerves, hair follicles, and sweat glands. The epidermis has no blood vessels.",
    "explanationHi": "नेफ्रॉन वृक्क की कार्यात्मक इकाई है। प्रत्येक वृक्क में लगभग 10 लाख नेफ्रॉन होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-056",
    "questionEn": "The term 'anterior' means:",
    "questionHi": "मूत्रवाहिनी (Ureter) कहां से कहां तक जाती है?",
    "optionsEn": [
      "Back side",
      "Front side",
      "Upper side",
      "Lower side"
    ],
    "optionsHi": [
      "वृक्क से मूत्राशय तक",
      "मूत्राशय से बाहर तक",
      "वृक्क से बाहर तक",
      "मूत्राशय से वृक्क तक"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anterior (ventral in humans) refers to the front of the body.",
    "explanationHi": "मूत्रवाहिनी (Ureter) वृक्क से मूत्र को मूत्राशय तक ले जाती है।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-057",
    "questionEn": "The appendix is located in which abdominal quadrant?",
    "questionHi": "पुरुष मूत्रमार्ग महिला की तुलना में:",
    "optionsEn": [
      "Right upper quadrant",
      "Left upper quadrant",
      "Right lower quadrant",
      "Left lower quadrant"
    ],
    "optionsHi": [
      "छोटा होता है",
      "लंबा होता है",
      "समान होता है",
      "अनुपस्थित होता है"
    ],
    "correctAnswer": 2,
    "explanationEn": "The appendix is located in the RLQ, which is why appendicitis typically presents with right lower abdominal pain.",
    "explanationHi": "पुरुष मूत्रमार्ग (लगभग 20 cm) महिला मूत्रमार्ग (लगभग 4 cm) से लंबा होता है क्योंकि यह लिंग से होकर गुजरता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-058",
    "questionEn": "The transverse plane divides the body into:",
    "questionHi": "शुक्राणु (Sperm) कहां बनते हैं?",
    "optionsEn": [
      "Left and right",
      "Front and back",
      "Upper and lower",
      "Medial and lateral"
    ],
    "optionsHi": [
      "प्रोस्टेट ग्रंथि में",
      "वृषण (Testes) में",
      "अधिवृषण में",
      "शुक्रवाहिका में"
    ],
    "correctAnswer": 2,
    "explanationEn": "The transverse (horizontal) plane divides the body into superior (upper) and inferior (lower) portions.",
    "explanationHi": "शुक्राणु वृषण (Testes) में बनते हैं। वृषण अंडकोष (Scrotum) में स्थित होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-059",
    "questionEn": "The sternum is also known as the:",
    "questionHi": "अंडाणु (Ovum) कहां बनता है?",
    "optionsEn": [
      "Collar bone",
      "Breast bone",
      "Shoulder blade",
      "Hip bone"
    ],
    "optionsHi": [
      "गर्भाशय में",
      "डिंबवाहिनी में",
      "अंडाशय (Ovary) में",
      "योनि में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The sternum (breast bone) is located in the center of the chest. The clavicle is the collar bone, scapula is shoulder blade.",
    "explanationHi": "अंडाणु (Ovum) अंडाशय (Ovary) में बनता है और डिंबवाहिनी (Fallopian tube) के माध्यम से गर्भाशय तक पहुंचता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-060",
    "questionEn": "The first cervical vertebra is called the:",
    "questionHi": "भ्रूण का विकास कहां होता है?",
    "optionsEn": [
      "Atlas",
      "Axis",
      "Sacrum",
      "Coccyx"
    ],
    "optionsHi": [
      "अंडाशय में",
      "डिंबवाहिनी में",
      "गर्भाशय (Uterus) में",
      "योनि में"
    ],
    "correctAnswer": 0,
    "explanationEn": "C1 is called the atlas (holds up the head like Atlas holding the world). C2 is the axis.",
    "explanationHi": "निषेचित अंडाणु गर्भाशय में प्रत्यारोपित होता है और भ्रूण का विकास गर्भाशय में होता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-061",
    "questionEn": "The carotid pulse is palpated in the:",
    "questionHi": "शरीर का सबसे बड़ा अंग कौन सा है?",
    "optionsEn": [
      "Wrist",
      "Neck",
      "Groin",
      "Behind the knee"
    ],
    "optionsHi": [
      "यकृत",
      "त्वचा (Skin)",
      "फेफड़े",
      "आंतें"
    ],
    "correctAnswer": 1,
    "explanationEn": "The carotid pulse is felt in the neck, on either side of the trachea. It is used in emergency situations.",
    "explanationHi": "त्वचा शरीर का सबसे बड़ा अंग है जो लगभग 1.5-2 वर्ग मीटर क्षेत्र को ढकती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-062",
    "questionEn": "Deoxygenated blood from the body enters which chamber of the heart first?",
    "questionHi": "त्वचा की बाहरी परत को क्या कहते हैं?",
    "optionsEn": [
      "Right atrium",
      "Right ventricle",
      "Left atrium",
      "Left ventricle"
    ],
    "optionsHi": [
      "डर्मिस (Dermis)",
      "एपिडर्मिस (Epidermis)",
      "हाइपोडर्मिस",
      "सबक्यूटेनियस"
    ],
    "correctAnswer": 0,
    "explanationEn": "Deoxygenated blood returns via vena cava → right atrium → right ventricle → lungs for oxygenation.",
    "explanationHi": "एपिडर्मिस (बाह्यत्वचा) त्वचा की सबसे बाहरी परत है। इसके नीचे डर्मिस (चर्म) होती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-063",
    "questionEn": "The trachea divides into two:",
    "questionHi": "त्वचा का रंग किस पर निर्भर करता है?",
    "optionsEn": [
      "Bronchioles",
      "Alveoli",
      "Primary bronchi",
      "Pharynx"
    ],
    "optionsHi": [
      "केराटिन पर",
      "मेलेनिन (Melanin) पर",
      "कोलेजन पर",
      "इलास्टिन पर"
    ],
    "correctAnswer": 2,
    "explanationEn": "The trachea divides at the carina into right and left primary (main) bronchi, one entering each lung.",
    "explanationHi": "त्वचा का रंग मुख्य रूप से मेलेनिन वर्णक (Pigment) की मात्रा पर निर्भर करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-064",
    "questionEn": "The epiglottis prevents food from entering the:",
    "questionHi": "आंख में प्रकाश संवेदी परत को क्या कहते हैं?",
    "optionsEn": [
      "Esophagus",
      "Larynx",
      "Pharynx",
      "Stomach"
    ],
    "optionsHi": [
      "कॉर्निया",
      "आइरिस",
      "रेटिना (Retina)",
      "लेंस"
    ],
    "correctAnswer": 1,
    "explanationEn": "The epiglottis is a flap that covers the larynx during swallowing to prevent food from entering the airway.",
    "explanationHi": "रेटिना (दृष्टिपटल) आंख की अंतरतम परत है जिसमें प्रकाश संवेदी कोशिकाएं (शंकु और छड़) होती हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-065",
    "questionEn": "The order of small intestine segments is:",
    "questionHi": "कान का कौन सा भाग संतुलन के लिए जिम्मेदार है?",
    "optionsEn": [
      "Jejunum, duodenum, ileum",
      "Duodenum, ileum, jejunum",
      "Duodenum, jejunum, ileum",
      "Ileum, jejunum, duodenum"
    ],
    "optionsHi": [
      "बाहरी कान",
      "मध्य कान",
      "अर्धवृत्ताकार नलिकाएं (Semicircular canals)",
      "कर्णपटह"
    ],
    "correctAnswer": 2,
    "explanationEn": "The small intestine has three parts: duodenum (first, C-shaped), jejunum (middle), and ileum (last, connects to large intestine).",
    "explanationHi": "आंतरिक कान में अर्धवृत्ताकार नलिकाएं शरीर के संतुलन को बनाए रखने में मदद करती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-066",
    "questionEn": "The pancreas produces enzymes that aid in:",
    "questionHi": "'Inferior' (अधो) शब्द का अर्थ है:",
    "optionsEn": [
      "Respiration",
      "Digestion",
      "Excretion",
      "Circulation"
    ],
    "optionsHi": [
      "ऊपर की ओर",
      "नीचे/पैरों की ओर",
      "आगे की ओर",
      "पीछे की ओर"
    ],
    "correctAnswer": 1,
    "explanationEn": "The pancreas produces digestive enzymes (amylase, lipase, proteases) and also secretes insulin and glucagon.",
    "explanationHi": "Inferior का अर्थ है नीचे या पैरों की ओर। आमाशय हृदय से Inferior है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-067",
    "questionEn": "The largest part of the brain is the:",
    "questionHi": "धनु तल (Sagittal Plane) शरीर को किन भागों में विभाजित करता है?",
    "optionsEn": [
      "Cerebellum",
      "Brainstem",
      "Cerebrum",
      "Hypothalamus"
    ],
    "optionsHi": [
      "ऊपर और नीचे",
      "आगे और पीछे",
      "बाएं और दाएं",
      "तिरछे"
    ],
    "correctAnswer": 2,
    "explanationEn": "The cerebrum is the largest part (~85% of brain weight) and controls higher functions like thinking, memory, and voluntary movement.",
    "explanationHi": "धनु तल शरीर को बाएं और दाएं भागों में विभाजित करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-068",
    "questionEn": "The autonomic nervous system controls:",
    "questionHi": "'Distal' (दूरस्थ) का विपरीत शब्द क्या है?",
    "optionsEn": [
      "Voluntary movements",
      "Involuntary functions",
      "Skeletal muscles only",
      "Sensory perception"
    ],
    "optionsHi": [
      "Lateral",
      "Medial",
      "Proximal",
      "Superior"
    ],
    "correctAnswer": 1,
    "explanationEn": "The ANS controls involuntary functions like heart rate, digestion, and breathing. It has sympathetic and parasympathetic divisions.",
    "explanationHi": "Proximal (समीपस्थ) Distal (दूरस्थ) का विपरीत है। Proximal धड़ के निकट और Distal धड़ से दूर होता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-069",
    "questionEn": "The tube that carries urine from kidney to bladder is the:",
    "questionHi": "संयोजी ऊतक (Connective Tissue) का उदाहरण है:",
    "optionsEn": [
      "Urethra",
      "Ureter",
      "Nephron",
      "Renal pelvis"
    ],
    "optionsHi": [
      "त्वचा",
      "हड्डी",
      "तंत्रिका",
      "पेशी"
    ],
    "correctAnswer": 1,
    "explanationEn": "The ureters are tubes that transport urine from each kidney to the urinary bladder.",
    "explanationHi": "हड्डी, उपास्थि, रक्त, वसा ऊतक सभी संयोजी ऊतक के उदाहरण हैं जो शरीर को सहारा और जोड़ते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-070",
    "questionEn": "The lower narrow portion of the uterus is called the:",
    "questionHi": "ग्रीवा कशेरुकाओं (Cervical Vertebrae) की संख्या कितनी है?",
    "optionsEn": [
      "Fundus",
      "Body",
      "Cervix",
      "Endometrium"
    ],
    "optionsHi": [
      "5",
      "7",
      "12",
      "4"
    ],
    "correctAnswer": 2,
    "explanationEn": "The cervix is the lower narrow portion of the uterus that opens into the vagina. The fundus is the upper dome-shaped part.",
    "explanationHi": "ग्रीवा (गर्दन) में 7 कशेरुकाएं होती हैं (C1-C7)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-071",
    "questionEn": "Connective tissue includes:",
    "questionHi": "वक्ष कशेरुकाओं (Thoracic Vertebrae) की संख्या कितनी है?",
    "optionsEn": [
      "Skin only",
      "Muscle only",
      "Bone and blood",
      "Nerves only"
    ],
    "optionsHi": [
      "7",
      "12",
      "5",
      "4"
    ],
    "correctAnswer": 2,
    "explanationEn": "Connective tissue includes bone, cartilage, blood, adipose tissue, and tendons. It connects, supports, and protects.",
    "explanationHi": "वक्ष (छाती) में 12 कशेरुकाएं होती हैं (T1-T12), प्रत्येक पसली से जुड़ी होती है।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-072",
    "questionEn": "The clavicle is commonly known as the:",
    "questionHi": "कटि कशेरुकाओं (Lumbar Vertebrae) की संख्या कितनी है?",
    "optionsEn": [
      "Breast bone",
      "Collar bone",
      "Shin bone",
      "Thigh bone"
    ],
    "optionsHi": [
      "7",
      "12",
      "5",
      "4"
    ],
    "correctAnswer": 1,
    "explanationEn": "The clavicle (collar bone) connects the shoulder to the sternum and is commonly fractured in falls.",
    "explanationHi": "कटि (पीठ के निचले भाग) में 5 कशेरुकाएं होती हैं (L1-L5), जो सबसे बड़ी और मजबूत होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-073",
    "questionEn": "The femur is the:",
    "questionHi": "स्कैपुला (Scapula) क्या है?",
    "optionsEn": [
      "Arm bone",
      "Thigh bone",
      "Shin bone",
      "Forearm bone"
    ],
    "optionsHi": [
      "कॉलर बोन",
      "कंधे की हड्डी (Shoulder blade)",
      "बाहु की हड्डी",
      "कूल्हे की हड्डी"
    ],
    "correctAnswer": 1,
    "explanationEn": "The femur is the thigh bone, the longest and strongest bone in the body.",
    "explanationHi": "स्कैपुला (अंसफलक) को कंधे की हड्डी या शोल्डर ब्लेड कहते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-074",
    "questionEn": "Cardiac muscle is found only in the:",
    "questionHi": "रेडियस और उल्ना कहां स्थित हैं?",
    "optionsEn": [
      "Blood vessels",
      "Heart",
      "Stomach",
      "Skeletal system"
    ],
    "optionsHi": [
      "जांघ में",
      "पिंडली में",
      "प्रकोष्ठ (Forearm) में",
      "बाहु में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cardiac muscle is unique to the heart. It is striated like skeletal muscle but involuntary like smooth muscle.",
    "explanationHi": "रेडियस (त्रिज्या) और उल्ना (अंतःप्रकोष्ठिका) प्रकोष्ठ की दो हड्डियां हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-075",
    "questionEn": "The biceps brachii muscle is located in the:",
    "questionHi": "टिबिया और फिबुला कहां स्थित हैं?",
    "optionsEn": [
      "Thigh",
      "Upper arm (anterior)",
      "Lower leg",
      "Forearm"
    ],
    "optionsHi": [
      "जांघ में",
      "पिंडली (Leg) में",
      "प्रकोष्ठ में",
      "पैर में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The biceps brachii is located on the anterior (front) of the upper arm and flexes the elbow.",
    "explanationHi": "टिबिया (अंतर्जंघिका) और फिबुला (बहिर्जंघिका) पिंडली की दो हड्डियां हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-076",
    "questionEn": "The brachial artery is located in the:",
    "questionHi": "उरोस्थि (Sternum) कहां स्थित है?",
    "optionsEn": [
      "Neck",
      "Upper arm",
      "Thigh",
      "Wrist"
    ],
    "optionsHi": [
      "पीठ में",
      "छाती के बीच में",
      "पेट में",
      "गर्दन में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The brachial artery runs along the inner upper arm. It is used for blood pressure measurement.",
    "explanationHi": "उरोस्थि (Sternum) या ब्रेस्टबोन छाती के बीच में स्थित चपटी हड्डी है जिससे पसलियां जुड़ती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-077",
    "questionEn": "Blood pressure is typically measured using which artery?",
    "questionHi": "श्रोणि (Pelvis) किन हड्डियों से बनी है?",
    "optionsEn": [
      "Radial artery",
      "Brachial artery",
      "Femoral artery",
      "Carotid artery"
    ],
    "optionsHi": [
      "केवल त्रिकास्थि",
      "इलियम, इस्कियम, प्यूबिस",
      "ऊर्विका और टिबिया",
      "कशेरुकाएं"
    ],
    "correctAnswer": 1,
    "explanationEn": "BP is measured using a cuff on the upper arm over the brachial artery, with auscultation at the cubital fossa.",
    "explanationHi": "श्रोणि (Pelvis) तीन हड्डियों - इलियम (श्रोणिफलक), इस्कियम (आसनास्थि), और प्यूबिस (जघनास्थि) से मिलकर बनी है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-078",
    "questionEn": "The windpipe is also known as the:",
    "questionHi": "शिशुओं में IM इंजेक्शन के लिए कौन सी पेशी उपयुक्त है?",
    "optionsEn": [
      "Larynx",
      "Pharynx",
      "Trachea",
      "Bronchus"
    ],
    "optionsHi": [
      "डेल्टॉयड",
      "ग्लूटियस",
      "वास्टस लेटरालिस",
      "बाइसेप्स"
    ],
    "correctAnswer": 2,
    "explanationEn": "The trachea (windpipe) is the tube that carries air from the larynx to the bronchi.",
    "explanationHi": "शिशुओं में वास्टस लेटरालिस (जांघ का बाहरी भाग) IM इंजेक्शन के लिए पसंदीदा स्थल है क्योंकि यह अच्छी तरह विकसित होती है।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-079",
    "questionEn": "The stomach is located primarily in which abdominal region?",
    "questionHi": "बाइसेप्स (Biceps) पेशी कहां स्थित है?",
    "optionsEn": [
      "Right upper quadrant",
      "Left upper quadrant",
      "Umbilical region",
      "Hypogastric region"
    ],
    "optionsHi": [
      "जांघ के सामने",
      "बाहु के सामने",
      "पीठ में",
      "पेट में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The stomach is located mainly in the LUQ and epigastric region.",
    "explanationHi": "बाइसेप्स बाहु के सामने (अग्र भाग) में स्थित है और कोहनी को मोड़ने में मदद करती है।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-080",
    "questionEn": "The spinal cord extends from the brainstem to approximately which vertebral level?",
    "questionHi": "ट्राइसेप्स (Triceps) पेशी कहां स्थित है?",
    "optionsEn": [
      "T12",
      "L1-L2",
      "L5",
      "S1"
    ],
    "optionsHi": [
      "बाहु के पीछे",
      "जांघ के पीछे",
      "पेट में",
      "गर्दन में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The spinal cord ends at approximately L1-L2 level (conus medullaris). Below this are nerve roots (cauda equina).",
    "explanationHi": "ट्राइसेप्स बाहु के पीछे (पश्च भाग) में स्थित है और कोहनी को सीधा करने में मदद करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-081",
    "questionEn": "Define the anatomical position and explain why it is important in medical communication.",
    "questionHi": "हृदय शरीर के किस ओर स्थित है?",
    "optionsEn": [],
    "optionsHi": [
      "दाईं ओर",
      "बाईं ओर (थोड़ा)",
      "बिल्कुल बीच में",
      "दाईं ओर (थोड़ा)"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "हृदय वक्ष गुहा के मध्य में स्थित है लेकिन थोड़ा बाईं ओर झुका हुआ है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-082",
    "questionEn": "List four functions of the skeletal system.",
    "questionHi": "धमनियां (Arteries) क्या ले जाती हैं?",
    "optionsEn": [],
    "optionsHi": [
      "हमेशा शुद्ध रक्त",
      "हृदय से दूर रक्त",
      "हृदय की ओर रक्त",
      "केवल अशुद्ध रक्त"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "धमनियां हृदय से दूर रक्त ले जाती हैं (चाहे शुद्ध हो या अशुद्ध)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-083",
    "questionEn": "Trace the path of blood through the heart, starting from the vena cava.",
    "questionHi": "शिराएं (Veins) क्या ले जाती हैं?",
    "optionsEn": [],
    "optionsHi": [
      "हमेशा अशुद्ध रक्त",
      "हृदय की ओर रक्त",
      "हृदय से दूर रक्त",
      "केवल शुद्ध रक्त"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "शिराएं हृदय की ओर रक्त ले जाती हैं (चाहे शुद्ध हो या अशुद्ध)।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-084",
    "questionEn": "Explain the difference between the right and left lungs.",
    "questionHi": "कैरोटिड धमनी (Carotid Artery) कहां नाड़ी जांची जाती है?",
    "optionsEn": [],
    "optionsHi": [
      "कलाई पर",
      "गर्दन पर",
      "कोहनी पर",
      "जांघ पर"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "कैरोटिड धमनी की नाड़ी गर्दन पर श्वासनली के दोनों ओर जांची जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-085",
    "questionEn": "Name the three accessory organs of the digestive system and their main digestive functions.",
    "questionHi": "फीमोरल धमनी (Femoral Artery) कहां स्थित है?",
    "optionsEn": [],
    "optionsHi": [
      "बाहु में",
      "जांघ में",
      "गर्दन में",
      "पैर में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "फीमोरल धमनी जांघ की प्रमुख धमनी है जो जांघ के ऊपरी भाग (इनगुइनल क्षेत्र) में महसूस की जा सकती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-086",
    "questionEn": "Differentiate between the central nervous system and peripheral nervous system.",
    "questionHi": "नासिका (Nose) का क्या कार्य है?",
    "optionsEn": [],
    "optionsHi": [
      "केवल सूंघना",
      "हवा को गर्म, नम और साफ करना",
      "केवल साफ करना",
      "केवल गर्म करना"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "नासिका हवा को गर्म करती है, नम करती है और धूल कणों को छानकर साफ करती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-087",
    "questionEn": "Describe the location of the kidneys and explain why they are called retroperitoneal organs.",
    "questionHi": "ग्रसनी (Pharynx) का क्या कार्य है?",
    "optionsEn": [],
    "optionsHi": [
      "केवल श्वसन",
      "श्वसन और पाचन दोनों मार्गों का साझा भाग",
      "केवल पाचन",
      "आवाज उत्पादन"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "ग्रसनी (गला) श्वसन और पाचन दोनों पथों का साझा मार्ग है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-088",
    "questionEn": "List the parts of the female reproductive tract in order from ovary to external opening.",
    "questionHi": "एपिग्लॉटिस (Epiglottis) का क्या कार्य है?",
    "optionsEn": [],
    "optionsHi": [
      "आवाज उत्पादन",
      "भोजन को श्वासनली में जाने से रोकना",
      "गैस विनिमय",
      "हवा को गर्म करना"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "एपिग्लॉटिस एक ढक्कन जैसी संरचना है जो निगलते समय श्वासनली को ढक देती है ताकि भोजन उसमें न जाए।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-089",
    "questionEn": "Name three common intramuscular injection sites and identify the muscle used at each site.",
    "questionHi": "वयस्क मनुष्य में कितने स्थायी दांत होते हैं?",
    "optionsEn": [],
    "optionsHi": [
      "20",
      "28",
      "32",
      "24"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "वयस्क में 32 स्थायी दांत होते हैं: 8 कृंतक, 4 रदनक, 8 प्रीमोलर, और 12 मोलर।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-090",
    "questionEn": "Name the three main layers of the skin from superficial to deep.",
    "questionHi": "ग्रसिका (Esophagus) का क्या कार्य है?",
    "optionsEn": [],
    "optionsHi": [
      "पाचन",
      "भोजन को मुख से आमाशय तक ले जाना",
      "अवशोषण",
      "संग्रहण"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "ग्रसिका (Food pipe) एक पेशीय नली है जो भोजन को ग्रसनी से आमाशय तक पहुंचाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-091",
    "questionEn": "What are the four abdominal quadrants and name one organ found in each?",
    "questionHi": "छोटी आंत में मुख्य रूप से क्या होता है?",
    "optionsEn": [],
    "optionsHi": [
      "केवल पाचन",
      "पाचन और अवशोषण",
      "केवल अवशोषण",
      "मल निर्माण"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "छोटी आंत में अधिकांश पाचन और पोषक तत्वों का अवशोषण होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-092",
    "questionEn": "What is the difference between the axial and appendicular skeleton? Give two examples of bones in each.",
    "questionHi": "बड़ी आंत (Large Intestine) का मुख्य कार्य क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "पाचन",
      "जल अवशोषण और मल निर्माण",
      "प्रोटीन पाचन",
      "वसा पाचन"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "बड़ी आंत मुख्य रूप से जल और कुछ इलेक्ट्रोलाइट्स का अवशोषण करती है और मल बनाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-093",
    "questionEn": "Name five pulse points used in clinical assessment and their locations.",
    "questionHi": "मस्तिष्क और मेरुरज्जु को ढकने वाली झिल्लियों को क्या कहते हैं?",
    "optionsEn": [],
    "optionsHi": [
      "फुस्फुस",
      "हृदयावरण",
      "मस्तिष्कावरण (Meninges)",
      "पेरिटोनियम"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "मस्तिष्कावरण (Meninges) तीन झिल्लियां हैं: ड्यूरा मेटर, अरैक्नॉयड, और पिया मेटर जो मस्तिष्क और मेरुरज्जु की रक्षा करती हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-094",
    "questionEn": "List the structures of the upper respiratory tract in order from nose to trachea.",
    "questionHi": "कपाल तंत्रिकाओं (Cranial Nerves) की संख्या कितनी है?",
    "optionsEn": [],
    "optionsHi": [
      "10 जोड़े",
      "12 जोड़े",
      "31 जोड़े",
      "8 जोड़े"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "मस्तिष्क से 12 जोड़े कपाल तंत्रिकाएं निकलती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-095",
    "questionEn": "What are the three parts of a neuron and their functions?",
    "questionHi": "मेरुरज्जु तंत्रिकाओं (Spinal Nerves) की संख्या कितनी है?",
    "optionsEn": [],
    "optionsHi": [
      "12 जोड़े",
      "31 जोड़े",
      "24 जोड़े",
      "10 जोड़े"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "मेरुरज्जु से 31 जोड़े मेरुरज्जु तंत्रिकाएं निकलती हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-096",
    "questionEn": "A patient needs blood pressure measurement. Describe the anatomical landmarks you would use and explain why proper positioning matters.",
    "questionHi": "वृक्क (Kidney) शरीर में कहां स्थित हैं?",
    "optionsEn": [],
    "optionsHi": [
      "उदर गुहा के सामने",
      "पीठ में, कशेरुक स्तंभ के दोनों ओर",
      "श्रोणि में",
      "वक्ष में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "वृक्क पीठ में कशेरुक स्तंभ के दोनों ओर, पेरिटोनियम के पीछे (रेट्रोपेरिटोनियल) स्थित हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-097",
    "questionEn": "You need to administer an intramuscular injection to an infant. Which site would you choose and describe the anatomical landmarks.",
    "questionHi": "मूत्राशय (Urinary Bladder) का क्या कार्य है?",
    "optionsEn": [],
    "optionsHi": [
      "मूत्र निर्माण",
      "मूत्र का अस्थायी संग्रहण",
      "रक्त छानना",
      "हार्मोन उत्पादन"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "मूत्राशय मूत्र का अस्थायी संग्रहण करता है जब तक इसे शरीर से बाहर नहीं निकाला जाता।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-098",
    "questionEn": "A patient presents with abdominal pain. How would you use anatomical knowledge of abdominal quadrants to assess which organ might be involved?",
    "questionHi": "प्रोस्टेट ग्रंथि (Prostate Gland) कहां स्थित है?",
    "optionsEn": [],
    "optionsHi": [
      "अंडकोष में",
      "मूत्राशय के नीचे, मूत्रमार्ग के चारों ओर",
      "वृक्क के पास",
      "लिंग में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "प्रोस्टेट ग्रंथि मूत्राशय के ठीक नीचे स्थित है और पुरुष मूत्रमार्ग को घेरे रहती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-099",
    "questionEn": "You are assisting with urinary catheterization. Describe the anatomical differences between male and female urethra that affect this procedure.",
    "questionHi": "डिंबवाहिनी (Fallopian Tube) का क्या कार्य है?",
    "optionsEn": [],
    "optionsHi": [
      "अंडाणु निर्माण",
      "अंडाणु को अंडाशय से गर्भाशय तक ले जाना",
      "शुक्राणु निर्माण",
      "हार्मोन उत्पादन"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "डिंबवाहिनी अंडाणु को अंडाशय से गर्भाशय तक ले जाती है। निषेचन आमतौर पर यहीं होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-100",
    "questionEn": "You need to perform chest auscultation. Describe the anatomical landmarks for listening to lung sounds.",
    "questionHi": "डर्मिस (Dermis) में क्या पाया जाता है?",
    "optionsEn": [],
    "optionsHi": [
      "केवल मेलेनिन",
      "रक्त वाहिकाएं, तंत्रिकाएं, बाल कूप, ग्रंथियां",
      "केवल केराटिन",
      "केवल वसा"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "डर्मिस (चर्म) में रक्त वाहिकाएं, तंत्रिकाएं, बाल कूप, स्वेद ग्रंथियां और तैल ग्रंथियां होती हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-101",
    "questionEn": "The scapula is also known as the:",
    "questionHi": "अस्थि मज्जा (Bone Marrow) का क्या कार्य है?",
    "optionsEn": [
      "Collar bone",
      "Shoulder blade",
      "Breast bone",
      "Hip bone"
    ],
    "optionsHi": [
      "पाचन",
      "रक्त कोशिकाओं का निर्माण",
      "हार्मोन उत्पादन",
      "मूत्र निर्माण"
    ],
    "correctAnswer": 1,
    "explanationEn": "The scapula (shoulder blade) is a flat triangular bone on the posterior aspect of the thorax.",
    "explanationHi": "लाल अस्थि मज्जा में रक्त कोशिकाओं (RBC, WBC, प्लेटलेट्स) का निर्माण होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-102",
    "questionEn": "How many cervical vertebrae are present in the human spine?",
    "questionHi": "हड्डियों को आपस में जोड़ने वाले ऊतक को क्या कहते हैं?",
    "optionsEn": [
      "5",
      "7",
      "12",
      "14"
    ],
    "optionsHi": [
      "कंडरा (Tendon)",
      "स्नायु (Ligament)",
      "उपास्थि (Cartilage)",
      "पेशी (Muscle)"
    ],
    "correctAnswer": 1,
    "explanationEn": "There are 7 cervical vertebrae (C1-C7) in the neck region of the spine.",
    "explanationHi": "स्नायु (Ligament) हड्डी को हड्डी से जोड़ते हैं। कंडरा (Tendon) पेशी को हड्डी से जोड़ते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-103",
    "questionEn": "Which bone protects the brain?",
    "questionHi": "पेशी को हड्डी से जोड़ने वाले ऊतक को क्या कहते हैं?",
    "optionsEn": [
      "Vertebrae",
      "Sternum",
      "Cranium",
      "Scapula"
    ],
    "optionsHi": [
      "स्नायु (Ligament)",
      "कंडरा (Tendon)",
      "उपास्थि",
      "फेशिया"
    ],
    "correctAnswer": 2,
    "explanationEn": "The cranium (skull bones) forms a protective case around the brain.",
    "explanationHi": "कंडरा (Tendon) पेशी को हड्डी से जोड़ता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-104",
    "questionEn": "The tibia is located in the:",
    "questionHi": "उपास्थि (Cartilage) कहां पाई जाती है?",
    "optionsEn": [
      "Upper arm",
      "Forearm",
      "Thigh",
      "Lower leg"
    ],
    "optionsHi": [
      "केवल नाक में",
      "जोड़ों की सतह पर, नाक, कान में",
      "केवल हृदय में",
      "केवल फेफड़ों में"
    ],
    "correctAnswer": 3,
    "explanationEn": "The tibia (shin bone) is the larger bone of the lower leg, located medially.",
    "explanationHi": "उपास्थि जोड़ों की सतह, नाक, कान, श्वासनली के छल्लों आदि में पाई जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-105",
    "questionEn": "Which type of joint allows the greatest range of movement?",
    "questionHi": "सिनोवियल जोड़ (Synovial Joint) की विशेषता क्या है?",
    "optionsEn": [
      "Hinge joint",
      "Pivot joint",
      "Ball and socket joint",
      "Gliding joint"
    ],
    "optionsHi": [
      "अचल होते हैं",
      "स्वतंत्र रूप से गतिशील होते हैं",
      "केवल खोपड़ी में",
      "हड्डियां जुड़ी होती हैं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Ball and socket joints (hip, shoulder) allow movement in all planes - flexion, extension, abduction, adduction, rotation.",
    "explanationHi": "सिनोवियल जोड़ स्वतंत्र रूप से गतिशील होते हैं जैसे घुटना, कोहनी, कंधा।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-106",
    "questionEn": "The elbow is an example of a:",
    "questionHi": "घुटने का जोड़ किस प्रकार का है?",
    "optionsEn": [
      "Ball and socket joint",
      "Hinge joint",
      "Pivot joint",
      "Saddle joint"
    ],
    "optionsHi": [
      "बॉल और सॉकेट",
      "हिंज (Hinge)",
      "पिवट",
      "ग्लाइडिंग"
    ],
    "correctAnswer": 1,
    "explanationEn": "The elbow is a hinge joint allowing flexion and extension movements only.",
    "explanationHi": "घुटने का जोड़ हिंज प्रकार का है जो एक दिशा में मुड़ता है, जैसे दरवाजे का कब्जा।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-107",
    "questionEn": "The carpals are bones of the:",
    "questionHi": "कंधे का जोड़ किस प्रकार का है?",
    "optionsEn": [
      "Ankle",
      "Wrist",
      "Fingers",
      "Toes"
    ],
    "optionsHi": [
      "हिंज",
      "बॉल और सॉकेट (Ball & Socket)",
      "पिवट",
      "सैडल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Carpals are the 8 small bones forming the wrist. Tarsals are ankle bones.",
    "explanationHi": "कंधे का जोड़ बॉल और सॉकेट प्रकार का है जो सभी दिशाओं में गति करता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-108",
    "questionEn": "Red bone marrow is responsible for:",
    "questionHi": "कूल्हे का जोड़ किस प्रकार का है?",
    "optionsEn": [
      "Storing fat",
      "Producing blood cells",
      "Producing hormones",
      "Storing calcium"
    ],
    "optionsHi": [
      "हिंज",
      "बॉल और सॉकेट",
      "पिवट",
      "ग्लाइडिंग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Red bone marrow produces red blood cells, white blood cells, and platelets (hematopoiesis).",
    "explanationHi": "कूल्हे का जोड़ भी बॉल और सॉकेट प्रकार का है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-109",
    "questionEn": "The intervertebral discs are made of:",
    "questionHi": "एटलस और एक्सिस कशेरुकाओं के बीच कौन सा जोड़ है?",
    "optionsEn": [
      "Bone",
      "Cartilage",
      "Muscle",
      "Ligament"
    ],
    "optionsHi": [
      "हिंज",
      "बॉल और सॉकेट",
      "पिवट (Pivot)",
      "सैडल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Intervertebral discs are made of fibrocartilage and act as shock absorbers between vertebrae.",
    "explanationHi": "सिर को दाएं-बाएं घुमाने में पिवट जोड़ मदद करता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-110",
    "questionEn": "The mandible is the:",
    "questionHi": "लंबी हड्डी के मध्य भाग को क्या कहते हैं?",
    "optionsEn": [
      "Upper jaw",
      "Lower jaw",
      "Cheek bone",
      "Nose bone"
    ],
    "optionsHi": [
      "एपिफाइसिस",
      "डायफाइसिस (Diaphysis)",
      "मेटाफाइसिस",
      "पेरिओस्टियम"
    ],
    "correctAnswer": 1,
    "explanationEn": "The mandible is the lower jaw bone, the only movable bone of the skull.",
    "explanationHi": "लंबी हड्डी का मध्य भाग (शाफ्ट) डायफाइसिस कहलाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-111",
    "questionEn": "How many types of muscle tissue are there in the human body?",
    "questionHi": "लंबी हड्डी के सिरों को क्या कहते हैं?",
    "optionsEn": [
      "2",
      "3",
      "4",
      "5"
    ],
    "optionsHi": [
      "डायफाइसिस",
      "एपिफाइसिस (Epiphysis)",
      "मेटाफाइसिस",
      "पेरिओस्टियम"
    ],
    "correctAnswer": 1,
    "explanationEn": "There are 3 types: skeletal (voluntary), smooth (involuntary), and cardiac (heart muscle).",
    "explanationHi": "लंबी हड्डी के दोनों सिरे एपिफाइसिस कहलाते हैं।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-112",
    "questionEn": "Which muscle type shows striations under microscope?",
    "questionHi": "हड्डी को ढकने वाली झिल्ली को क्या कहते हैं?",
    "optionsEn": [
      "Smooth muscle only",
      "Cardiac muscle only",
      "Skeletal and cardiac muscle",
      "All muscle types"
    ],
    "optionsHi": [
      "पेरिकार्डियम",
      "पेरिओस्टियम (Periosteum)",
      "पेरिटोनियम",
      "प्लूरा"
    ],
    "correctAnswer": 2,
    "explanationEn": "Both skeletal and cardiac muscles are striated (show bands). Smooth muscle is non-striated.",
    "explanationHi": "पेरिओस्टियम हड्डी की बाहरी सतह को ढकने वाली संयोजी ऊतक झिल्ली है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-113",
    "questionEn": "The diaphragm is a:",
    "questionHi": "चपटी हड्डी (Flat Bone) का उदाहरण है:",
    "optionsEn": [
      "Smooth muscle",
      "Skeletal muscle",
      "Cardiac muscle",
      "Mixed muscle"
    ],
    "optionsHi": [
      "ऊर्विका",
      "खोपड़ी की हड्डियां",
      "कलाई की हड्डियां",
      "कशेरुका"
    ],
    "correctAnswer": 1,
    "explanationEn": "The diaphragm is a skeletal muscle, though its contraction for breathing is largely automatic.",
    "explanationHi": "खोपड़ी की हड्डियां, स्कैपुला, उरोस्थि चपटी हड्डियों के उदाहरण हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-114",
    "questionEn": "The quadriceps muscle group is located on the:",
    "questionHi": "छोटी हड्डी (Short Bone) का उदाहरण है:",
    "optionsEn": [
      "Back of thigh",
      "Front of thigh",
      "Lower leg",
      "Upper arm"
    ],
    "optionsHi": [
      "ऊर्विका",
      "प्रगंडिका",
      "कार्पल (कलाई की हड्डियां)",
      "टिबिया"
    ],
    "correctAnswer": 1,
    "explanationEn": "Quadriceps (4 muscles) are on the anterior thigh and extend the knee.",
    "explanationHi": "कार्पल और टार्सल हड्डियां छोटी हड्डियों के उदाहरण हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-115",
    "questionEn": "The hamstring muscles are located on the:",
    "questionHi": "अनियमित हड्डी (Irregular Bone) का उदाहरण है:",
    "optionsEn": [
      "Front of thigh",
      "Back of thigh",
      "Front of leg",
      "Back of leg"
    ],
    "optionsHi": [
      "ऊर्विका",
      "कशेरुका (Vertebra)",
      "पैटेला",
      "स्कैपुला"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hamstrings (3 muscles) are on the posterior thigh and flex the knee.",
    "explanationHi": "कशेरुकाएं और कुछ खोपड़ी की हड्डियां अनियमित हड्डियों के उदाहरण हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-116",
    "questionEn": "The gastrocnemius muscle is found in the:",
    "questionHi": "तैरती पसलियां (Floating Ribs) कौन सी हैं?",
    "optionsEn": [
      "Arm",
      "Thigh",
      "Calf",
      "Abdomen"
    ],
    "optionsHi": [
      "पहली और दूसरी",
      "आठवीं से दसवीं",
      "ग्यारहवीं और बारहवीं",
      "सातवीं और आठवीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "The gastrocnemius is the main calf muscle, responsible for plantar flexion of the foot.",
    "explanationHi": "11वीं और 12वीं पसलियां आगे से किसी से नहीं जुड़तीं इसलिए इन्हें तैरती पसलियां कहते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-117",
    "questionEn": "Which muscle is NOT an injection site?",
    "questionHi": "सच्ची पसलियां (True Ribs) कौन सी हैं?",
    "optionsEn": [
      "Deltoid",
      "Vastus lateralis",
      "Biceps brachii",
      "Gluteus medius"
    ],
    "optionsHi": [
      "1-7",
      "8-10",
      "11-12",
      "1-5"
    ],
    "correctAnswer": 2,
    "explanationEn": "Biceps brachii is not used for IM injections due to its smaller size and proximity to major nerves and vessels.",
    "explanationHi": "पहली से सातवीं पसलियां सीधे उरोस्थि से जुड़ती हैं इसलिए इन्हें सच्ची पसलियां कहते हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-118",
    "questionEn": "Smooth muscle is found in the walls of:",
    "questionHi": "झूठी पसलियां (False Ribs) कौन सी हैं?",
    "optionsEn": [
      "Skeleton",
      "Heart only",
      "Blood vessels and digestive tract",
      "Brain"
    ],
    "optionsHi": [
      "1-7",
      "8-12",
      "11-12",
      "8-10"
    ],
    "correctAnswer": 2,
    "explanationEn": "Smooth muscle is in the walls of hollow organs - blood vessels, GI tract, bladder, uterus, airways.",
    "explanationHi": "8वीं से 10वीं पसलियां अप्रत्यक्ष रूप से (उपास्थि द्वारा) उरोस्थि से जुड़ती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-119",
    "questionEn": "The rectus abdominis muscle is commonly called:",
    "questionHi": "मैंडिबल (Mandible) क्या है?",
    "optionsEn": [
      "Back muscles",
      "Six-pack abs",
      "Chest muscles",
      "Hip flexors"
    ],
    "optionsHi": [
      "ऊपरी जबड़ा",
      "निचला जबड़ा",
      "गाल की हड्डी",
      "नाक की हड्डी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rectus abdominis is the 'six-pack' muscle running vertically on the front of the abdomen.",
    "explanationHi": "मैंडिबल निचला जबड़ा है और खोपड़ी की एकमात्र गतिशील हड्डी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-120",
    "questionEn": "The trapezius muscle is located on the:",
    "questionHi": "मैक्सिला (Maxilla) क्या है?",
    "optionsEn": [
      "Chest",
      "Upper back and neck",
      "Lower back",
      "Abdomen"
    ],
    "optionsHi": [
      "निचला जबड़ा",
      "ऊपरी जबड़ा",
      "गाल की हड्डी",
      "कपाल की हड्डी"
    ],
    "correctAnswer": 1,
    "explanationEn": "The trapezius is a large triangular muscle of the upper back and neck, moving the shoulder blade.",
    "explanationHi": "मैक्सिला ऊपरी जबड़ा है जिसमें ऊपरी दांत लगे होते हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-121",
    "questionEn": "The left ventricle pumps blood to:",
    "questionHi": "ह्यॉयड हड्डी (Hyoid Bone) की विशेषता क्या है?",
    "optionsEn": [
      "Lungs only",
      "Right atrium",
      "Entire body",
      "Brain only"
    ],
    "optionsHi": [
      "सबसे बड़ी हड्डी",
      "किसी अन्य हड्डी से नहीं जुड़ती",
      "सबसे छोटी हड्डी",
      "सबसे मजबूत हड्डी"
    ],
    "correctAnswer": 2,
    "explanationEn": "The left ventricle pumps oxygenated blood through the aorta to the entire body (systemic circulation).",
    "explanationHi": "ह्यॉयड हड्डी गले में होती है और यह एकमात्र हड्डी है जो किसी अन्य हड्डी से नहीं जुड़ती।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-122",
    "questionEn": "The right ventricle pumps blood to the:",
    "questionHi": "ऑर्बिट (Orbit) क्या है?",
    "optionsEn": [
      "Brain",
      "Lungs",
      "Liver",
      "Kidneys"
    ],
    "optionsHi": [
      "नाक की गुहा",
      "आंख की गुहा (Eye Socket)",
      "कान की गुहा",
      "मुंह की गुहा"
    ],
    "correctAnswer": 1,
    "explanationEn": "The right ventricle pumps deoxygenated blood to the lungs via the pulmonary artery.",
    "explanationHi": "ऑर्बिट खोपड़ी में आंखों के लिए गुहाएं हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-123",
    "questionEn": "The bicuspid valve is also called:",
    "questionHi": "फोरामेन मैग्नम (Foramen Magnum) क्या है?",
    "optionsEn": [
      "Tricuspid valve",
      "Mitral valve",
      "Aortic valve",
      "Pulmonary valve"
    ],
    "optionsHi": [
      "आंख का छिद्र",
      "खोपड़ी के आधार में बड़ा छिद्र",
      "कान का छिद्र",
      "नाक का छिद्र"
    ],
    "correctAnswer": 1,
    "explanationEn": "The bicuspid (mitral) valve is between the left atrium and left ventricle. It has 2 cusps.",
    "explanationHi": "फोरामेन मैग्नम खोपड़ी के आधार में बड़ा छिद्र है जिससे मेरुरज्जु गुजरती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-124",
    "questionEn": "Which blood vessel carries blood away from the heart?",
    "questionHi": "ओलेक्रेनन (Olecranon) क्या है?",
    "optionsEn": [
      "Vein",
      "Artery",
      "Capillary",
      "Venule"
    ],
    "optionsHi": [
      "कोहनी का उभार",
      "घुटने की टोपी",
      "टखने का उभार",
      "कंधे का उभार"
    ],
    "correctAnswer": 1,
    "explanationEn": "Arteries carry blood away from the heart. Veins carry blood toward the heart.",
    "explanationHi": "ओलेक्रेनन उल्ना का वह भाग है जो कोहनी का उभार बनाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-125",
    "questionEn": "The pacemaker of the heart is the:",
    "questionHi": "मेटाकार्पल (Metacarpals) कहां होती हैं?",
    "optionsEn": [
      "AV node",
      "SA node",
      "Bundle of His",
      "Purkinje fibers"
    ],
    "optionsHi": [
      "कलाई में",
      "हथेली में",
      "उंगलियों में",
      "पैर में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The sinoatrial (SA) node in the right atrium initiates the heartbeat and sets the heart rate.",
    "explanationHi": "मेटाकार्पल हथेली की 5 हड्डियां हैं जो कार्पल और फैलेंज के बीच होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-126",
    "questionEn": "The coronary arteries supply blood to the:",
    "questionHi": "फैलेंज (Phalanges) कहां होती हैं?",
    "optionsEn": [
      "Brain",
      "Lungs",
      "Heart muscle",
      "Kidneys"
    ],
    "optionsHi": [
      "कलाई में",
      "हथेली में",
      "उंगलियों और पैर की अंगुलियों में",
      "टखने में"
    ],
    "correctAnswer": 2,
    "explanationEn": "Coronary arteries branch from the aorta and supply oxygenated blood to the heart muscle itself.",
    "explanationHi": "फैलेंज उंगलियों और पैर की अंगुलियों की हड्डियां हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-127",
    "questionEn": "The femoral artery is located in the:",
    "questionHi": "प्रत्येक उंगली में कितनी फैलेंज होती हैं (अंगूठे को छोड़कर)?",
    "optionsEn": [
      "Arm",
      "Neck",
      "Thigh/Groin",
      "Foot"
    ],
    "optionsHi": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "explanationEn": "The femoral artery runs through the groin and thigh, supplying blood to the lower limb.",
    "explanationHi": "प्रत्येक उंगली में 3 फैलेंज होती हैं (प्रॉक्सिमल, मिडिल, डिस्टल)। अंगूठे में केवल 2 होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-128",
    "questionEn": "The innermost layer of an artery is called:",
    "questionHi": "कैल्केनियस (Calcaneus) क्या है?",
    "optionsEn": [
      "Tunica adventitia",
      "Tunica media",
      "Tunica intima",
      "Endocardium"
    ],
    "optionsHi": [
      "घुटने की हड्डी",
      "एड़ी की हड्डी",
      "टखने की हड्डी",
      "पैर की उंगली की हड्डी"
    ],
    "correctAnswer": 2,
    "explanationEn": "Arteries have 3 layers: tunica intima (inner), tunica media (middle), tunica adventitia (outer).",
    "explanationHi": "कैल्केनियस एड़ी की हड्डी है जो टार्सल हड्डियों में सबसे बड़ी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-129",
    "questionEn": "Gas exchange between blood and tissues occurs in:",
    "questionHi": "टैलस (Talus) क्या है?",
    "optionsEn": [
      "Arteries",
      "Veins",
      "Capillaries",
      "Arterioles"
    ],
    "optionsHi": [
      "एड़ी की हड्डी",
      "टखने की हड्डी जो टिबिया से जुड़ती है",
      "पैर की उंगली",
      "घुटने की हड्डी"
    ],
    "correctAnswer": 2,
    "explanationEn": "Capillaries have thin walls (one cell thick) allowing exchange of gases, nutrients, and waste.",
    "explanationHi": "टैलस टखने की हड्डी है जो टिबिया और फिबुला के साथ टखने का जोड़ बनाती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-130",
    "questionEn": "The superior vena cava carries blood from:",
    "questionHi": "इस्कियम (Ischium) कहां स्थित है?",
    "optionsEn": [
      "Lower body",
      "Upper body",
      "Lungs",
      "Heart"
    ],
    "optionsHi": [
      "खोपड़ी में",
      "श्रोणि में (बैठने की हड्डी)",
      "वक्ष में",
      "कंधे में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Superior vena cava returns deoxygenated blood from head, neck, arms to the right atrium.",
    "explanationHi": "इस्कियम श्रोणि का निचला-पिछला भाग है जिस पर हम बैठते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-131",
    "questionEn": "The nasal cavity warms, moistens, and:",
    "questionHi": "पेक्टोरलिस मेजर (Pectoralis Major) पेशी कहां है?",
    "optionsEn": [
      "Cools air",
      "Filters air",
      "Absorbs oxygen",
      "Produces mucus only"
    ],
    "optionsHi": [
      "पीठ में",
      "छाती में",
      "पेट में",
      "जांघ में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The nasal cavity filters air (removing particles), warms it, and adds moisture before it reaches the lungs.",
    "explanationHi": "पेक्टोरलिस मेजर छाती की बड़ी पेशी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-132",
    "questionEn": "The pharynx is divided into how many regions?",
    "questionHi": "लैटिसिमस डोर्साई (Latissimus Dorsi) पेशी कहां है?",
    "optionsEn": [
      "2",
      "3",
      "4",
      "5"
    ],
    "optionsHi": [
      "छाती में",
      "पीठ में",
      "गर्दन में",
      "पेट में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The pharynx has 3 regions: nasopharynx (behind nose), oropharynx (behind mouth), laryngopharynx (above larynx).",
    "explanationHi": "लैटिसिमस डोर्साई पीठ की सबसे चौड़ी पेशी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-133",
    "questionEn": "The carina is the point where:",
    "questionHi": "ट्रेपेजियस (Trapezius) पेशी कहां है?",
    "optionsEn": [
      "Pharynx meets larynx",
      "Trachea divides into bronchi",
      "Bronchi divide into bronchioles",
      "Alveoli begin"
    ],
    "optionsHi": [
      "पेट में",
      "ऊपरी पीठ और गर्दन में",
      "जांघ में",
      "बाहु में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The carina is the ridge at the bifurcation of trachea into right and left main bronchi.",
    "explanationHi": "ट्रेपेजियस ऊपरी पीठ और गर्दन की पेशी है जो कंधों को हिलाने में मदद करती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-134",
    "questionEn": "Which lung is larger?",
    "questionHi": "क्वाड्रिसेप्स (Quadriceps) पेशी समूह कहां है?",
    "optionsEn": [
      "Right lung",
      "Left lung",
      "Both are equal",
      "Varies by person"
    ],
    "optionsHi": [
      "बाहु के सामने",
      "जांघ के सामने",
      "पिंडली में",
      "पीठ में"
    ],
    "correctAnswer": 0,
    "explanationEn": "The right lung (3 lobes) is larger than the left (2 lobes) because the heart occupies space on the left.",
    "explanationHi": "क्वाड्रिसेप्स जांघ के सामने की 4 पेशियों का समूह है जो घुटने को सीधा करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-135",
    "questionEn": "The pleura is a membrane that covers the:",
    "questionHi": "हैमस्ट्रिंग (Hamstring) पेशी समूह कहां है?",
    "optionsEn": [
      "Heart",
      "Lungs",
      "Stomach",
      "Brain"
    ],
    "optionsHi": [
      "जांघ के सामने",
      "जांघ के पीछे",
      "पिंडली के सामने",
      "पेट में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The pleura is a double-layered membrane surrounding each lung, with pleural fluid between layers.",
    "explanationHi": "हैमस्ट्रिंग जांघ के पीछे की पेशियां हैं जो घुटने को मोड़ती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-136",
    "questionEn": "The surfactant in alveoli helps to:",
    "questionHi": "गैस्ट्रोक्नीमियस (Gastrocnemius) पेशी कहां है?",
    "optionsEn": [
      "Fight infection",
      "Reduce surface tension",
      "Transport oxygen",
      "Filter air"
    ],
    "optionsHi": [
      "जांघ में",
      "पिंडली के पीछे (काफ)",
      "पैर में",
      "बाहु में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Surfactant reduces surface tension in alveoli, preventing them from collapsing during expiration.",
    "explanationHi": "गैस्ट्रोक्नीमियस पिंडली की पिछली पेशी है जो पैर को नीचे मोड़ने में मदद करती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-137",
    "questionEn": "During inspiration, the diaphragm:",
    "questionHi": "रेक्टस एब्डोमिनिस (Rectus Abdominis) पेशी कहां है?",
    "optionsEn": [
      "Relaxes and moves up",
      "Contracts and moves down",
      "Stays still",
      "Contracts and moves up"
    ],
    "optionsHi": [
      "पीठ में",
      "पेट के सामने (सिक्स-पैक)",
      "छाती में",
      "गर्दन में"
    ],
    "correctAnswer": 1,
    "explanationEn": "During inspiration, the diaphragm contracts, flattens, and moves downward, increasing thoracic volume.",
    "explanationHi": "रेक्टस एब्डोमिनिस पेट की सामने की पेशी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-138",
    "questionEn": "The trachea is kept open by:",
    "questionHi": "डायफ्राम (Diaphragm) किस प्रकार की पेशी है?",
    "optionsEn": [
      "Muscle",
      "C-shaped cartilage rings",
      "Bone",
      "Ligaments"
    ],
    "optionsHi": [
      "हृदय पेशी",
      "कंकाल पेशी",
      "चिकनी पेशी",
      "मिश्रित पेशी"
    ],
    "correctAnswer": 1,
    "explanationEn": "C-shaped cartilage rings keep the trachea open. The open part faces posteriorly toward the esophagus.",
    "explanationHi": "डायफ्राम एक कंकाल पेशी है लेकिन यह ऐच्छिक और अनैच्छिक दोनों तरह से काम कर सकती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-139",
    "questionEn": "The right main bronchus is:",
    "questionHi": "इंटरकोस्टल पेशियां (Intercostal Muscles) कहां हैं?",
    "optionsEn": [
      "Longer and more horizontal",
      "Shorter and more vertical",
      "Same as left",
      "Absent"
    ],
    "optionsHi": [
      "पेट में",
      "पसलियों के बीच",
      "गर्दन में",
      "कंधे में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The right main bronchus is shorter, wider, and more vertical, which is why aspirated objects often enter the right lung.",
    "explanationHi": "इंटरकोस्टल पेशियां पसलियों के बीच होती हैं और श्वास में मदद करती हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-140",
    "questionEn": "The intercostal muscles are located between the:",
    "questionHi": "ग्लूटियस मैक्सिमस (Gluteus Maximus) पेशी कहां है?",
    "optionsEn": [
      "Vertebrae",
      "Ribs",
      "Lungs",
      "Diaphragm layers"
    ],
    "optionsHi": [
      "जांघ में",
      "नितंब में",
      "पीठ में",
      "पेट में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Intercostal muscles (external and internal) are between the ribs and assist in breathing.",
    "explanationHi": "ग्लूटियस मैक्सिमस नितंब की सबसे बड़ी पेशी है और शरीर की सबसे बड़ी पेशियों में से एक है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-141",
    "questionEn": "Digestion begins in the:",
    "questionHi": "हृदय की दीवार की मध्य परत को क्या कहते हैं?",
    "optionsEn": [
      "Stomach",
      "Small intestine",
      "Mouth",
      "Esophagus"
    ],
    "optionsHi": [
      "एंडोकार्डियम",
      "मायोकार्डियम (Myocardium)",
      "एपिकार्डियम",
      "पेरिकार्डियम"
    ],
    "correctAnswer": 2,
    "explanationEn": "Digestion begins in the mouth with mechanical breakdown (chewing) and chemical digestion (salivary amylase).",
    "explanationHi": "मायोकार्डियम हृदय की दीवार की मध्य पेशीय परत है।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-142",
    "questionEn": "The esophagus connects the:",
    "questionHi": "हृदय की आंतरिक परत को क्या कहते हैं?",
    "optionsEn": [
      "Mouth to stomach",
      "Pharynx to stomach",
      "Stomach to intestine",
      "Larynx to stomach"
    ],
    "optionsHi": [
      "मायोकार्डियम",
      "एंडोकार्डियम (Endocardium)",
      "एपिकार्डियम",
      "पेरिकार्डियम"
    ],
    "correctAnswer": 1,
    "explanationEn": "The esophagus is a muscular tube connecting the pharynx (throat) to the stomach.",
    "explanationHi": "एंडोकार्डियम हृदय की आंतरिक परत है जो हृदय कक्षों को अस्तर देती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-143",
    "questionEn": "The pyloric sphincter controls passage of food from:",
    "questionHi": "SA नोड (Sinoatrial Node) कहां स्थित है?",
    "optionsEn": [
      "Esophagus to stomach",
      "Stomach to duodenum",
      "Small to large intestine",
      "Rectum to anus"
    ],
    "optionsHi": [
      "बाएं आलिंद में",
      "दाएं आलिंद में",
      "बाएं निलय में",
      "दाएं निलय में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The pyloric sphincter regulates the release of chyme from the stomach into the duodenum.",
    "explanationHi": "SA नोड दाएं आलिंद की दीवार में स्थित है और हृदय का प्राकृतिक पेसमेकर है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-144",
    "questionEn": "The longest part of the small intestine is the:",
    "questionHi": "ट्राइकसपिड वाल्व (Tricuspid Valve) कहां स्थित है?",
    "optionsEn": [
      "Duodenum",
      "Jejunum",
      "Ileum",
      "Cecum"
    ],
    "optionsHi": [
      "बाएं आलिंद और निलय के बीच",
      "दाएं आलिंद और निलय के बीच",
      "महाधमनी में",
      "फुफ्फुसीय धमनी में"
    ],
    "correctAnswer": 2,
    "explanationEn": "The ileum is the longest part (~3.5m), followed by jejunum (~2.5m), then duodenum (~25cm).",
    "explanationHi": "ट्राइकसपिड वाल्व दाएं आलिंद और दाएं निलय के बीच होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-145",
    "questionEn": "The ileocecal valve is located between:",
    "questionHi": "माइट्रल वाल्व (Mitral Valve) कहां स्थित है?",
    "optionsEn": [
      "Stomach and duodenum",
      "Jejunum and ileum",
      "Ileum and cecum",
      "Colon and rectum"
    ],
    "optionsHi": [
      "दाएं आलिंद और निलय के बीच",
      "बाएं आलिंद और निलय के बीच",
      "महाधमनी में",
      "फुफ्फुसीय धमनी में"
    ],
    "correctAnswer": 2,
    "explanationEn": "The ileocecal valve prevents backflow from the large intestine (cecum) into the small intestine (ileum).",
    "explanationHi": "माइट्रल (बाइकसपिड) वाल्व बाएं आलिंद और बाएं निलय के बीच होता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-146",
    "questionEn": "The large intestine is also called the:",
    "questionHi": "कोरोनरी धमनियां क्या करती हैं?",
    "optionsEn": [
      "Bowel",
      "Colon",
      "Gut",
      "All of the above"
    ],
    "optionsHi": [
      "मस्तिष्क को रक्त देती हैं",
      "हृदय को रक्त देती हैं",
      "फेफड़ों को रक्त देती हैं",
      "वृक्क को रक्त देती हैं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Large intestine, colon, bowel, and gut are all terms used to describe this organ.",
    "explanationHi": "कोरोनरी धमनियां हृदय की पेशी को ऑक्सीजनयुक्त रक्त प्रदान करती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-147",
    "questionEn": "The main function of the large intestine is to:",
    "questionHi": "सुपीरियर वेना कावा (Superior Vena Cava) क्या लाती है?",
    "optionsEn": [
      "Digest proteins",
      "Absorb nutrients",
      "Absorb water and form feces",
      "Produce enzymes"
    ],
    "optionsHi": [
      "निचले शरीर से रक्त",
      "ऊपरी शरीर से अशुद्ध रक्त",
      "फेफड़ों से शुद्ध रक्त",
      "हृदय से रक्त"
    ],
    "correctAnswer": 2,
    "explanationEn": "The large intestine absorbs water and electrolytes, and compacts waste into feces.",
    "explanationHi": "सुपीरियर वेना कावा सिर, गर्दन और बाहों से अशुद्ध रक्त दाएं आलिंद में लाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-148",
    "questionEn": "The gallbladder stores:",
    "questionHi": "इंफीरियर वेना कावा (Inferior Vena Cava) क्या लाती है?",
    "optionsEn": [
      "Insulin",
      "Bile",
      "Digestive enzymes",
      "Gastric juice"
    ],
    "optionsHi": [
      "ऊपरी शरीर से रक्त",
      "निचले शरीर से अशुद्ध रक्त",
      "फेफड़ों से शुद्ध रक्त",
      "मस्तिष्क से रक्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "The gallbladder stores and concentrates bile produced by the liver until needed for fat digestion.",
    "explanationHi": "इंफीरियर वेना कावा पेट, श्रोणि और पैरों से अशुद्ध रक्त दाएं आलिंद में लाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-149",
    "questionEn": "The sphincter of Oddi controls the release of:",
    "questionHi": "फुफ्फुसीय शिराएं (Pulmonary Veins) क्या लाती हैं?",
    "optionsEn": [
      "Saliva",
      "Gastric juice",
      "Bile and pancreatic juice",
      "Intestinal juice"
    ],
    "optionsHi": [
      "अशुद्ध रक्त",
      "फेफड़ों से शुद्ध रक्त बाएं आलिंद में",
      "हृदय से रक्त",
      "यकृत से रक्त"
    ],
    "correctAnswer": 2,
    "explanationEn": "The sphincter of Oddi controls the flow of bile and pancreatic secretions into the duodenum.",
    "explanationHi": "फुफ्फुसीय शिराएं अपवाद हैं - ये शिराएं होकर भी शुद्ध (ऑक्सीजनयुक्त) रक्त लाती हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-150",
    "questionEn": "The vermiform appendix is attached to the:",
    "questionHi": "जुगुलर शिरा (Jugular Vein) कहां स्थित है?",
    "optionsEn": [
      "Ascending colon",
      "Cecum",
      "Sigmoid colon",
      "Rectum"
    ],
    "optionsHi": [
      "बाहु में",
      "गर्दन में",
      "जांघ में",
      "पेट में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The appendix is a small finger-like projection attached to the cecum in the right lower quadrant.",
    "explanationHi": "जुगुलर शिराएं गर्दन में होती हैं जो सिर से रक्त वापस लाती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-151",
    "questionEn": "The brain and spinal cord are protected by:",
    "questionHi": "नासिका पट (Nasal Septum) क्या करता है?",
    "optionsEn": [
      "Skin only",
      "Bone and meninges",
      "Muscle",
      "Fat"
    ],
    "optionsHi": [
      "नाक को गर्म करता है",
      "नाक की गुहा को दो भागों में बांटता है",
      "सूंघने में मदद करता है",
      "हवा को साफ करता है"
    ],
    "correctAnswer": 1,
    "explanationEn": "The CNS is protected by bone (skull, vertebrae) and three membrane layers called meninges.",
    "explanationHi": "नासिका पट नाक की गुहा को दाएं और बाएं दो भागों में विभाजित करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-152",
    "questionEn": "Cerebrospinal fluid (CSF) is found:",
    "questionHi": "पैरानासल साइनस (Paranasal Sinuses) क्या हैं?",
    "optionsEn": [
      "In blood vessels",
      "Around brain and spinal cord",
      "In muscles",
      "In joints"
    ],
    "optionsHi": [
      "फेफड़ों में गुहाएं",
      "नाक के आसपास हड्डियों में हवा से भरी गुहाएं",
      "हृदय में गुहाएं",
      "मस्तिष्क में गुहाएं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CSF circulates in the ventricles of the brain and around the brain and spinal cord, providing cushioning.",
    "explanationHi": "पैरानासल साइनस खोपड़ी की हड्डियों में हवा से भरी गुहाएं हैं जो नाक की गुहा से जुड़ी हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-153",
    "questionEn": "The frontal lobe of the brain controls:",
    "questionHi": "कैरिना (Carina) क्या है?",
    "optionsEn": [
      "Vision",
      "Hearing",
      "Motor function and reasoning",
      "Balance"
    ],
    "optionsHi": [
      "स्वरयंत्र का भाग",
      "श्वासनली का विभाजन बिंदु",
      "फेफड़े का भाग",
      "नाक का भाग"
    ],
    "correctAnswer": 2,
    "explanationEn": "The frontal lobe controls voluntary movement, planning, reasoning, judgment, and personality.",
    "explanationHi": "कैरिना वह बिंदु है जहां श्वासनली दाईं और बाईं मुख्य श्वसनियों में विभाजित होती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-154",
    "questionEn": "The occipital lobe is primarily responsible for:",
    "questionHi": "हाइलम (Hilum) फेफड़े का कौन सा भाग है?",
    "optionsEn": [
      "Hearing",
      "Vision",
      "Smell",
      "Taste"
    ],
    "optionsHi": [
      "शीर्ष",
      "आधार",
      "वह स्थान जहां श्वसनी और वाहिकाएं प्रवेश करती हैं",
      "बाहरी सतह"
    ],
    "correctAnswer": 1,
    "explanationEn": "The occipital lobe at the back of the brain processes visual information.",
    "explanationHi": "हाइलम फेफड़े की मध्यवर्ती सतह पर वह क्षेत्र है जहां श्वसनी, रक्त वाहिकाएं और तंत्रिकाएं प्रवेश/निकास करती हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-155",
    "questionEn": "How many pairs of cranial nerves are there?",
    "questionHi": "सर्फैक्टेंट (Surfactant) क्या करता है?",
    "optionsEn": [
      "10",
      "12",
      "24",
      "31"
    ],
    "optionsHi": [
      "गैस विनिमय",
      "वायुकोषों को खुला रखता है",
      "बलगम बनाता है",
      "रक्त ले जाता है"
    ],
    "correctAnswer": 1,
    "explanationEn": "There are 12 pairs of cranial nerves that arise directly from the brain.",
    "explanationHi": "सर्फैक्टेंट वायुकोषों में एक पदार्थ है जो सतह तनाव कम करके उन्हें ढहने से बचाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-156",
    "questionEn": "The vagus nerve (cranial nerve X) controls:",
    "questionHi": "बायां फेफड़ा दाएं से छोटा क्यों है?",
    "optionsEn": [
      "Eye movement",
      "Facial expression",
      "Heart rate and digestion",
      "Hearing"
    ],
    "optionsHi": [
      "कोई कारण नहीं",
      "हृदय के लिए जगह बनाने के लिए",
      "यकृत के कारण",
      "आमाशय के कारण"
    ],
    "correctAnswer": 2,
    "explanationEn": "The vagus nerve is the main parasympathetic nerve, controlling heart rate, digestion, and other visceral functions.",
    "explanationHi": "बायां फेफड़ा छोटा है क्योंकि हृदय बाईं ओर थोड़ा झुका होता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-157",
    "questionEn": "The sympathetic nervous system is responsible for:",
    "questionHi": "ब्रोंकाइओल्स (Bronchioles) क्या हैं?",
    "optionsEn": [
      "Rest and digest",
      "Fight or flight",
      "Sleep",
      "Digestion only"
    ],
    "optionsHi": [
      "बड़ी श्वसनियां",
      "छोटी श्वसनियां जिनमें उपास्थि नहीं होती",
      "वायुकोष",
      "श्वासनली"
    ],
    "correctAnswer": 1,
    "explanationEn": "The sympathetic system prepares the body for stress - increases heart rate, dilates pupils, diverts blood to muscles.",
    "explanationHi": "ब्रोंकाइओल्स छोटी श्वसनियां हैं जिनकी दीवारों में उपास्थि नहीं होती।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-158",
    "questionEn": "The myelin sheath:",
    "questionHi": "लार ग्रंथियों (Salivary Glands) की संख्या कितनी है?",
    "optionsEn": [
      "Slows nerve impulses",
      "Speeds up nerve impulses",
      "Produces hormones",
      "Connects neurons"
    ],
    "optionsHi": [
      "2 जोड़े",
      "3 जोड़े",
      "4 जोड़े",
      "5 जोड़े"
    ],
    "correctAnswer": 1,
    "explanationEn": "Myelin is an insulating layer around axons that speeds up nerve impulse conduction.",
    "explanationHi": "3 जोड़े प्रमुख लार ग्रंथियां हैं: पैरोटिड, सबमैंडिबुलर, और सबलिंगुअल।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-159",
    "questionEn": "The hypothalamus regulates:",
    "questionHi": "पैरोटिड ग्रंथि (Parotid Gland) कहां है?",
    "optionsEn": [
      "Vision",
      "Body temperature and hunger",
      "Hearing",
      "Balance"
    ],
    "optionsHi": [
      "जीभ के नीचे",
      "कान के सामने",
      "जबड़े के नीचे",
      "गले में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The hypothalamus controls homeostasis - temperature, hunger, thirst, sleep, and hormone release.",
    "explanationHi": "पैरोटिड ग्रंथि कान के सामने और नीचे स्थित सबसे बड़ी लार ग्रंथि है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-160",
    "questionEn": "A reflex arc involves:",
    "questionHi": "आमाशय के कितने भाग हैं?",
    "optionsEn": [
      "Brain only",
      "Spinal cord only",
      "Sensory neuron, interneuron, motor neuron",
      "Muscles only"
    ],
    "optionsHi": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "explanationEn": "A reflex arc: stimulus → sensory neuron → interneuron (in spinal cord) → motor neuron → response.",
    "explanationHi": "आमाशय के 4 भाग हैं: कार्डिया, फंडस, बॉडी, और पाइलोरस।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-161",
    "questionEn": "The kidneys are located at the level of:",
    "questionHi": "पाइलोरिक स्फिंक्टर (Pyloric Sphincter) कहां है?",
    "optionsEn": [
      "T8-T10",
      "T12-L3",
      "L4-L5",
      "S1-S2"
    ],
    "optionsHi": [
      "ग्रसिका और आमाशय के बीच",
      "आमाशय और ग्रहणी के बीच",
      "छोटी और बड़ी आंत के बीच",
      "मलाशय में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The kidneys lie between T12 and L3 vertebrae, with the right kidney slightly lower due to the liver.",
    "explanationHi": "पाइलोरिक स्फिंक्टर आमाशय के अंत में होता है जो आमाशय से ग्रहणी में भोजन के प्रवाह को नियंत्रित करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-162",
    "questionEn": "The outer region of the kidney is called:",
    "questionHi": "विली (Villi) कहां पाए जाते हैं?",
    "optionsEn": [
      "Medulla",
      "Cortex",
      "Pelvis",
      "Calyx"
    ],
    "optionsHi": [
      "आमाशय में",
      "छोटी आंत में",
      "बड़ी आंत में",
      "ग्रसिका में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The kidney has an outer cortex and inner medulla. The renal pelvis collects urine.",
    "explanationHi": "विली छोटी आंत की दीवार पर उंगली जैसे उभार हैं जो अवशोषण क्षेत्र बढ़ाते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-163",
    "questionEn": "Filtration of blood occurs in the:",
    "questionHi": "इलियोसीकल वाल्व (Ileocecal Valve) कहां है?",
    "optionsEn": [
      "Loop of Henle",
      "Collecting duct",
      "Glomerulus",
      "Ureter"
    ],
    "optionsHi": [
      "आमाशय में",
      "शेषांत्र और अंधनाल के बीच",
      "मलाशय में",
      "ग्रहणी में"
    ],
    "correctAnswer": 2,
    "explanationEn": "The glomerulus is a capillary tuft where blood is filtered. Filtrate then passes through the tubules.",
    "explanationHi": "इलियोसीकल वाल्व छोटी आंत (शेषांत्र) और बड़ी आंत (अंधनाल) के बीच होता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-164",
    "questionEn": "The ureters transport urine by:",
    "questionHi": "बड़ी आंत के भाग क्या हैं?",
    "optionsEn": [
      "Gravity only",
      "Peristalsis",
      "Suction",
      "Osmosis"
    ],
    "optionsHi": [
      "ग्रहणी, मध्यांत्र, शेषांत्र",
      "अंधनाल, बृहदान्त्र, मलाशय",
      "कार्डिया, फंडस, बॉडी",
      "यकृत, अग्न्याशय, पित्ताशय"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ureters have smooth muscle that contracts in waves (peristalsis) to move urine to the bladder.",
    "explanationHi": "बड़ी आंत में अंधनाल (Cecum), बृहदान्त्र (Colon), मलाशय (Rectum), और गुदा नाल (Anal Canal) शामिल हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-165",
    "questionEn": "The urinary bladder can hold approximately:",
    "questionHi": "यकृत की कितनी पालियां (Lobes) हैं?",
    "optionsEn": [
      "100 mL",
      "300-500 mL",
      "1000 mL",
      "2000 mL"
    ],
    "optionsHi": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "explanationEn": "The bladder typically holds 300-500 mL comfortably, though it can stretch to hold more.",
    "explanationHi": "यकृत की 4 पालियां हैं: दायां, बायां, क्वाड्रेट, और कॉडेट।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-166",
    "questionEn": "The internal urethral sphincter is made of:",
    "questionHi": "पित्ताशय (Gallbladder) का क्या कार्य है?",
    "optionsEn": [
      "Skeletal muscle",
      "Smooth muscle",
      "Cardiac muscle",
      "Cartilage"
    ],
    "optionsHi": [
      "पित्त बनाना",
      "पित्त का संग्रहण",
      "इंसुलिन बनाना",
      "मूत्र संग्रहण"
    ],
    "correctAnswer": 1,
    "explanationEn": "The internal sphincter is involuntary smooth muscle. The external sphincter is voluntary skeletal muscle.",
    "explanationHi": "पित्ताशय यकृत द्वारा बनाए गए पित्त को संग्रहित और सांद्र करता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-167",
    "questionEn": "The trigone is a triangular area in the:",
    "questionHi": "अग्न्याशय (Pancreas) कहां स्थित है?",
    "optionsEn": [
      "Kidney",
      "Ureter",
      "Bladder",
      "Urethra"
    ],
    "optionsHi": [
      "RUQ में",
      "आमाशय के पीछे",
      "श्रोणि में",
      "वक्ष में"
    ],
    "correctAnswer": 2,
    "explanationEn": "The trigone is a smooth triangular area on the bladder floor, bounded by two ureteral openings and the urethral opening.",
    "explanationHi": "अग्न्याशय आमाशय के पीछे, ग्रहणी के वक्र में स्थित है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-168",
    "questionEn": "The testes produce:",
    "questionHi": "प्लीहा (Spleen) कहां स्थित है?",
    "optionsEn": [
      "Eggs",
      "Sperm and testosterone",
      "Estrogen",
      "Progesterone"
    ],
    "optionsHi": [
      "RUQ में",
      "LUQ में",
      "RLQ में",
      "LLQ में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Testes produce sperm (in seminiferous tubules) and testosterone (in Leydig cells).",
    "explanationHi": "प्लीहा बाएं ऊपरी चतुर्थांश में आमाशय के पीछे स्थित है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-169",
    "questionEn": "Sperm mature and are stored in the:",
    "questionHi": "मस्तिष्क का कौन सा भाग श्वसन को नियंत्रित करता है?",
    "optionsEn": [
      "Testes",
      "Epididymis",
      "Vas deferens",
      "Seminal vesicle"
    ],
    "optionsHi": [
      "प्रमस्तिष्क",
      "अनुमस्तिष्क",
      "मेडुला ऑब्लोंगाटा",
      "थैलेमस"
    ],
    "correctAnswer": 1,
    "explanationEn": "The epididymis is a coiled tube on the back of each testis where sperm mature and are stored.",
    "explanationHi": "मेडुला ऑब्लोंगाटा (मस्तिष्क स्तंभ का भाग) श्वसन, हृदय गति जैसे महत्वपूर्ण कार्यों को नियंत्रित करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-170",
    "questionEn": "The prostate gland:",
    "questionHi": "थैलेमस (Thalamus) का क्या कार्य है?",
    "optionsEn": [
      "Produces sperm",
      "Adds fluid to semen",
      "Stores urine",
      "Produces testosterone"
    ],
    "optionsHi": [
      "संतुलन",
      "संवेदी सूचना का रिले केंद्र",
      "श्वसन नियंत्रण",
      "पाचन"
    ],
    "correctAnswer": 1,
    "explanationEn": "The prostate produces alkaline fluid that makes up about 30% of semen volume.",
    "explanationHi": "थैलेमस संवेदी सूचनाओं को प्रमस्तिष्क तक पहुंचाने का रिले केंद्र है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-171",
    "questionEn": "The uterus is normally positioned:",
    "questionHi": "हाइपोथैलेमस (Hypothalamus) क्या नियंत्रित करता है?",
    "optionsEn": [
      "Straight up",
      "Tilted forward (anteverted)",
      "Tilted backward",
      "Horizontal"
    ],
    "optionsHi": [
      "केवल नींद",
      "शरीर का तापमान, भूख, प्यास, हार्मोन",
      "केवल गति",
      "केवल दृष्टि"
    ],
    "correctAnswer": 1,
    "explanationEn": "The uterus is normally anteverted (tilted forward) and anteflexed (bent forward).",
    "explanationHi": "हाइपोथैलेमस शरीर के तापमान, भूख, प्यास, नींद और पिट्यूटरी ग्रंथि को नियंत्रित करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-172",
    "questionEn": "The innermost layer of the uterus that sheds during menstruation is the:",
    "questionHi": "कॉर्पस कैलोसम (Corpus Callosum) क्या है?",
    "optionsEn": [
      "Perimetrium",
      "Myometrium",
      "Endometrium",
      "Cervix"
    ],
    "optionsHi": [
      "मस्तिष्क का भाग",
      "दोनों प्रमस्तिष्क गोलार्धों को जोड़ने वाला तंत्रिका तंतु पुल",
      "मेरुरज्जु का भाग",
      "तंत्रिका"
    ],
    "correctAnswer": 2,
    "explanationEn": "The endometrium is the inner lining that thickens each cycle and sheds if pregnancy doesn't occur.",
    "explanationHi": "कॉर्पस कैलोसम दाएं और बाएं प्रमस्तिष्क गोलार्धों को जोड़ने वाला श्वेत पदार्थ का बड़ा बंडल है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-173",
    "questionEn": "The fimbriae are found at the end of the:",
    "questionHi": "CSF (मस्तिष्कमेरु द्रव) कहां बनता है?",
    "optionsEn": [
      "Uterus",
      "Vagina",
      "Fallopian tube",
      "Ovary"
    ],
    "optionsHi": [
      "मेरुरज्जु में",
      "मस्तिष्क के निलयों में कोरॉयड प्लेक्सस द्वारा",
      "रक्त में",
      "वृक्क में"
    ],
    "correctAnswer": 2,
    "explanationEn": "Fimbriae are finger-like projections at the end of fallopian tubes that help sweep the egg into the tube.",
    "explanationHi": "CSF मस्तिष्क के निलयों में कोरॉयड प्लेक्सस द्वारा बनता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-174",
    "questionEn": "Ovulation releases an egg from the:",
    "questionHi": "मस्तिष्क में कितने निलय (Ventricles) हैं?",
    "optionsEn": [
      "Uterus",
      "Ovary",
      "Fallopian tube",
      "Vagina"
    ],
    "optionsHi": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ovulation is the release of a mature egg from the ovary, usually around day 14 of the menstrual cycle.",
    "explanationHi": "मस्तिष्क में 4 निलय हैं: 2 पार्श्व निलय, तीसरा निलय, और चौथा निलय।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-175",
    "questionEn": "The vagina serves as the:",
    "questionHi": "ऑप्टिक तंत्रिका (Optic Nerve) कौन सी कपाल तंत्रिका है?",
    "optionsEn": [
      "Birth canal only",
      "Menstrual flow passage only",
      "Birth canal and menstrual passage",
      "Urine passage"
    ],
    "optionsHi": [
      "पहली",
      "दूसरी",
      "तीसरी",
      "सातवीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "The vagina serves as the birth canal, passage for menstrual flow, and receives the penis during intercourse.",
    "explanationHi": "ऑप्टिक तंत्रिका (CN II) दृष्टि के लिए जिम्मेदार दूसरी कपाल तंत्रिका है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-176",
    "questionEn": "The skin is the body's:",
    "questionHi": "फेशियल तंत्रिका (Facial Nerve) कौन सी कपाल तंत्रिका है?",
    "optionsEn": [
      "Smallest organ",
      "Largest organ",
      "Most complex organ",
      "Heaviest organ"
    ],
    "optionsHi": [
      "पांचवीं",
      "छठी",
      "सातवीं",
      "आठवीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Skin is the largest organ, covering about 2 square meters and weighing about 4-5 kg in adults.",
    "explanationHi": "फेशियल तंत्रिका (CN VII) चेहरे की अभिव्यक्ति की पेशियों को नियंत्रित करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-177",
    "questionEn": "Melanin is produced by cells called:",
    "questionHi": "वेगस तंत्रिका (Vagus Nerve) कौन सी कपाल तंत्रिका है?",
    "optionsEn": [
      "Keratinocytes",
      "Melanocytes",
      "Fibroblasts",
      "Adipocytes"
    ],
    "optionsHi": [
      "आठवीं",
      "नौवीं",
      "दसवीं",
      "ग्यारहवीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Melanocytes in the epidermis produce melanin, which gives skin its color and protects against UV radiation.",
    "explanationHi": "वेगस तंत्रिका (CN X) सबसे लंबी कपाल तंत्रिका है जो कई आंतरिक अंगों को नियंत्रित करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-178",
    "questionEn": "Sweat glands help regulate:",
    "questionHi": "सहानुभूति तंत्रिका तंत्र (Sympathetic Nervous System) क्या करता है?",
    "optionsEn": [
      "Blood pressure",
      "Body temperature",
      "Blood sugar",
      "Heart rate"
    ],
    "optionsHi": [
      "आराम और पाचन",
      "लड़ो या भागो प्रतिक्रिया",
      "केवल नींद",
      "केवल पाचन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sweat glands (eccrine) secrete sweat, which evaporates and cools the body.",
    "explanationHi": "सहानुभूति तंत्रिका तंत्र 'fight or flight' प्रतिक्रिया के लिए जिम्मेदार है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-179",
    "questionEn": "Sebaceous glands produce:",
    "questionHi": "परानुकंपी तंत्रिका तंत्र (Parasympathetic Nervous System) क्या करता है?",
    "optionsEn": [
      "Sweat",
      "Sebum (oil)",
      "Melanin",
      "Keratin"
    ],
    "optionsHi": [
      "लड़ो या भागो",
      "आराम और पाचन",
      "केवल व्यायाम",
      "केवल दौड़ना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sebaceous glands secrete sebum, an oily substance that lubricates skin and hair.",
    "explanationHi": "परानुकंपी तंत्रिका तंत्र 'rest and digest' अवस्था के लिए जिम्मेदार है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-180",
    "questionEn": "Hair grows from structures called:",
    "questionHi": "वृक्क का आकार किस जैसा होता है?",
    "optionsEn": [
      "Hair shaft",
      "Hair follicle",
      "Hair root",
      "Hair bulb"
    ],
    "optionsHi": [
      "गोल",
      "सेम (राजमा) जैसा",
      "त्रिकोणीय",
      "चौकोर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hair follicles are tube-like structures in the dermis from which hair grows.",
    "explanationHi": "वृक्क का आकार सेम (राजमा) जैसा होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-181",
    "questionEn": "The cornea of the eye is:",
    "questionHi": "वृक्क का बाहरी भाग क्या कहलाता है?",
    "optionsEn": [
      "The colored part",
      "The transparent front part",
      "The white part",
      "The back part"
    ],
    "optionsHi": [
      "मेडुला",
      "कॉर्टेक्स (Cortex)",
      "पेल्विस",
      "कैलिक्स"
    ],
    "correctAnswer": 1,
    "explanationEn": "The cornea is the clear, dome-shaped front surface of the eye that helps focus light.",
    "explanationHi": "वृक्क का बाहरी भाग कॉर्टेक्स और अंदरूनी भाग मेडुला कहलाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-182",
    "questionEn": "The iris controls the:",
    "questionHi": "रीनल पेल्विस (Renal Pelvis) क्या है?",
    "optionsEn": [
      "Color of the eye",
      "Size of the pupil",
      "Focus of the lens",
      "Movement of the eye"
    ],
    "optionsHi": [
      "वृक्क की बाहरी परत",
      "वृक्क का मूत्र एकत्रण क्षेत्र",
      "वृक्क की रक्त वाहिका",
      "नेफ्रॉन का भाग"
    ],
    "correctAnswer": 1,
    "explanationEn": "The iris (colored part) contains muscles that adjust pupil size to control light entry.",
    "explanationHi": "रीनल पेल्विस वृक्क का वह भाग है जहां मूत्र एकत्र होता है और फिर मूत्रवाहिनी में जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-183",
    "questionEn": "The retina contains cells that detect light called:",
    "questionHi": "ग्लोमेरुलस (Glomerulus) क्या है?",
    "optionsEn": [
      "Cones and rods",
      "Iris and pupil",
      "Cornea and lens",
      "Sclera and choroid"
    ],
    "optionsHi": [
      "मूत्राशय का भाग",
      "नेफ्रॉन में केशिकाओं का गुच्छा",
      "मूत्रवाहिनी का भाग",
      "मूत्रमार्ग का भाग"
    ],
    "correctAnswer": 0,
    "explanationEn": "Rods detect dim light and peripheral vision; cones detect color and sharp central vision.",
    "explanationHi": "ग्लोमेरुलस नेफ्रॉन में केशिकाओं का गुच्छा है जहां रक्त का निस्पंदन होता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-184",
    "questionEn": "The tympanic membrane is also called the:",
    "questionHi": "बोमन कैप्सूल (Bowman's Capsule) क्या है?",
    "optionsEn": [
      "Anvil",
      "Hammer",
      "Eardrum",
      "Stirrup"
    ],
    "optionsHi": [
      "मूत्राशय का भाग",
      "ग्लोमेरुलस को घेरने वाली संरचना",
      "वृक्क की बाहरी परत",
      "मूत्रवाहिनी"
    ],
    "correctAnswer": 2,
    "explanationEn": "The tympanic membrane (eardrum) vibrates when sound waves hit it, transmitting sound to middle ear bones.",
    "explanationHi": "बोमन कैप्सूल ग्लोमेरुलस को घेरने वाली कप जैसी संरचना है जो निस्पंदित द्रव एकत्र करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-185",
    "questionEn": "The cochlea is responsible for:",
    "questionHi": "महिला मूत्रमार्ग की लंबाई लगभग कितनी होती है?",
    "optionsEn": [
      "Balance",
      "Hearing",
      "Vision",
      "Smell"
    ],
    "optionsHi": [
      "2 cm",
      "4 cm",
      "10 cm",
      "20 cm"
    ],
    "correctAnswer": 1,
    "explanationEn": "The cochlea is a spiral structure in the inner ear that converts sound vibrations to nerve impulses.",
    "explanationHi": "महिला मूत्रमार्ग लगभग 4 cm लंबा होता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-186",
    "questionEn": "Name the five regions of the vertebral column and the number of vertebrae in each.",
    "questionHi": "पुरुष मूत्रमार्ग की लंबाई लगभग कितनी होती है?",
    "optionsEn": [],
    "optionsHi": [
      "4 cm",
      "10 cm",
      "15-20 cm",
      "25 cm"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "पुरुष मूत्रमार्ग लगभग 15-20 cm लंबा होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-187",
    "questionEn": "Explain the difference between systemic and pulmonary circulation.",
    "questionHi": "अधिवृषण (Epididymis) का क्या कार्य है?",
    "optionsEn": [],
    "optionsHi": [
      "शुक्राणु निर्माण",
      "शुक्राणुओं का संग्रहण और परिपक्वन",
      "हार्मोन उत्पादन",
      "मूत्र निर्माण"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "अधिवृषण वृषण के पीछे कुंडलित नलिका है जहां शुक्राणु संग्रहित और परिपक्व होते हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-188",
    "questionEn": "Describe the process of gas exchange in the alveoli.",
    "questionHi": "शुक्रवाहिका (Vas Deferens) क्या करती है?",
    "optionsEn": [],
    "optionsHi": [
      "शुक्राणु बनाती है",
      "शुक्राणुओं को अधिवृषण से मूत्रमार्ग तक ले जाती है",
      "मूत्र ले जाती है",
      "हार्मोन बनाती है"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "शुक्रवाहिका शुक्राणुओं को अधिवृषण से स्खलन नलिका तक ले जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-189",
    "questionEn": "List the parts of the large intestine in order from cecum to anus.",
    "questionHi": "सेमिनल वेसिकल (Seminal Vesicle) क्या करता है?",
    "optionsEn": [],
    "optionsHi": [
      "शुक्राणु बनाता है",
      "वीर्य के तरल भाग का उत्पादन",
      "मूत्र संग्रहण",
      "हार्मोन उत्पादन"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "सेमिनल वेसिकल वीर्य के लगभग 70% तरल भाग का उत्पादन करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-190",
    "questionEn": "Name the three meninges from outermost to innermost and describe their characteristics.",
    "questionHi": "गर्भाशय ग्रीवा (Cervix) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "गर्भाशय का ऊपरी भाग",
      "गर्भाशय का निचला संकरा भाग",
      "अंडाशय",
      "डिंबवाहिनी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "गर्भाशय ग्रीवा गर्भाशय का निचला संकरा भाग है जो योनि में खुलता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-191",
    "questionEn": "Describe the parts of a nephron and their functions.",
    "questionHi": "एंडोमेट्रियम (Endometrium) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "गर्भाशय की बाहरी परत",
      "गर्भाशय की आंतरिक परत (अस्तर)",
      "अंडाशय की परत",
      "योनि की परत"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "एंडोमेट्रियम गर्भाशय की आंतरिक परत है जो मासिक धर्म के दौरान झड़ती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-192",
    "questionEn": "Describe the three layers of the uterine wall.",
    "questionHi": "मायोमेट्रियम (Myometrium) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "गर्भाशय की पेशीय परत",
      "गर्भाशय की आंतरिक परत",
      "अंडाशय",
      "डिंबवाहिनी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "मायोमेट्रियम गर्भाशय की मध्य पेशीय परत है जो प्रसव के दौरान संकुचन करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-193",
    "questionEn": "List five functions of the skin.",
    "questionHi": "निषेचन (Fertilization) सामान्यतः कहां होता है?",
    "optionsEn": [],
    "optionsHi": [
      "गर्भाशय में",
      "अंडाशय में",
      "डिंबवाहिनी में",
      "योनि में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "निषेचन आमतौर पर डिंबवाहिनी के एम्पुला भाग में होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-194",
    "questionEn": "Compare and contrast the three types of muscle tissue.",
    "questionHi": "स्तन में दूध बनाने वाली ग्रंथियों को क्या कहते हैं?",
    "optionsEn": [],
    "optionsHi": [
      "स्वेद ग्रंथियां",
      "दुग्ध ग्रंथियां (Mammary Glands)",
      "तैल ग्रंथियां",
      "लार ग्रंथियां"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "दुग्ध ग्रंथियां स्तन में दूध का उत्पादन करती हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-195",
    "questionEn": "Name the four heart valves and their locations.",
    "questionHi": "त्वचा में मेलेनिन किन कोशिकाओं द्वारा बनता है?",
    "optionsEn": [],
    "optionsHi": [
      "केराटिनोसाइट्स",
      "मेलेनोसाइट्स (Melanocytes)",
      "फाइब्रोब्लास्ट्स",
      "मैक्रोफेज"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "मेलेनोसाइट्स एपिडर्मिस में मेलेनिन वर्णक बनाने वाली कोशिकाएं हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-196",
    "questionEn": "A 45-year-old man presents with pain in the right upper quadrant of his abdomen after eating fatty food. Based on your anatomical knowledge, which organs are located in this region, and which is most likely affected?",
    "questionHi": "स्वेद ग्रंथियां (Sweat Glands) क्या करती हैं?",
    "optionsEn": [],
    "optionsHi": [
      "तेल बनाती हैं",
      "पसीना बनाती हैं",
      "बाल बनाती हैं",
      "नाखून बनाती हैं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "स्वेद ग्रंथियां पसीना बनाती हैं जो शरीर का तापमान नियंत्रित करने में मदद करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-197",
    "questionEn": "An unconscious patient needs emergency airway management. Why is the head tilt-chin lift maneuver used, and what anatomical structures does it affect?",
    "questionHi": "सीबेशियस ग्रंथियां (Sebaceous Glands) क्या बनाती हैं?",
    "optionsEn": [],
    "optionsHi": [
      "पसीना",
      "सीबम (तेल)",
      "दूध",
      "लार"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "सीबेशियस (तैल) ग्रंथियां सीबम बनाती हैं जो त्वचा और बालों को चिकना रखता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-198",
    "questionEn": "A patient has weak peripheral pulses in the lower limbs but normal pulses in the upper limbs. Using your anatomical knowledge, explain where an arterial blockage might be located.",
    "questionHi": "कॉर्निया (Cornea) आंख का कौन सा भाग है?",
    "optionsEn": [],
    "optionsHi": [
      "रंगीन भाग",
      "पारदर्शी सामने का भाग",
      "पीछे का भाग",
      "तंत्रिका"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "कॉर्निया आंख का पारदर्शी सामने का भाग है जो प्रकाश को अंदर आने देता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-199",
    "questionEn": "A patient has right-sided weakness and difficulty speaking after a stroke. Which side of the brain is likely affected, and what anatomical principle explains this?",
    "questionHi": "आइरिस (Iris) आंख का कौन सा भाग है?",
    "optionsEn": [],
    "optionsHi": [
      "पारदर्शी भाग",
      "रंगीन भाग जो पुतली के आकार को नियंत्रित करता है",
      "प्रकाश संवेदी परत",
      "लेंस"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "आइरिस आंख का रंगीन भाग है जो पुतली के आकार को नियंत्रित करके प्रकाश की मात्रा नियंत्रित करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-200",
    "questionEn": "A patient needs a lumbar puncture (spinal tap). Why is this procedure performed at L3-L4 or L4-L5 level, and what anatomical structures does the needle pass through?",
    "questionHi": "कोक्लिया (Cochlea) कान का कौन सा भाग है?",
    "optionsEn": [],
    "optionsHi": [
      "बाहरी कान",
      "मध्य कान",
      "आंतरिक कान में श्रवण का अंग",
      "कान का परदा"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "कोक्लिया आंतरिक कान में घोंघे के आकार की संरचना है जो ध्वनि को तंत्रिका संकेतों में बदलती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-201",
    "questionEn": "Approximately what percentage of body weight is made up of skeletal muscle?",
    "questionHi": "ऑस्टियोसाइट्स (Osteocytes) क्या हैं?",
    "optionsEn": [
      "20%",
      "30%",
      "40%",
      "50%"
    ],
    "optionsHi": [
      "रक्त कोशिकाएं",
      "परिपक्व हड्डी कोशिकाएं",
      "पेशी कोशिकाएं",
      "तंत्रिका कोशिकाएं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Skeletal muscle makes up approximately 40% of total body weight in adults.",
    "explanationHi": "ऑस्टियोसाइट्स परिपक्व हड्डी कोशिकाएं हैं जो हड्डी के मैट्रिक्स में रहती हैं।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-202",
    "questionEn": "Which injection site is preferred for infants?",
    "questionHi": "ऑस्टियोब्लास्ट्स (Osteoblasts) क्या करते हैं?",
    "optionsEn": [
      "Deltoid",
      "Vastus lateralis",
      "Dorsogluteal",
      "Ventrogluteal"
    ],
    "optionsHi": [
      "हड्डी तोड़ते हैं",
      "नई हड्डी बनाते हैं",
      "रक्त बनाते हैं",
      "उपास्थि बनाते हैं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vastus lateralis (outer thigh) is preferred for infants because it is well-developed even in young children and has no major nerves or blood vessels.",
    "explanationHi": "ऑस्टियोब्लास्ट्स नई हड्डी बनाने वाली कोशिकाएं हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-203",
    "questionEn": "The maximum volume for a deltoid intramuscular injection is:",
    "questionHi": "ऑस्टियोक्लास्ट्स (Osteoclasts) क्या करते हैं?",
    "optionsEn": [
      "0.5 mL",
      "1-2 mL",
      "5 mL",
      "10 mL"
    ],
    "optionsHi": [
      "हड्डी बनाते हैं",
      "हड्डी को तोड़ते/अवशोषित करते हैं",
      "रक्त बनाते हैं",
      "उपास्थि बनाते हैं"
    ],
    "correctAnswer": 1,
    "explanationEn": "The deltoid can accommodate 1-2 mL maximum (1 mL preferred). Larger volumes require larger muscle sites.",
    "explanationHi": "ऑस्टियोक्लास्ट्स हड्डी का पुनर्अवशोषण करने वाली बड़ी कोशिकाएं हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-204",
    "questionEn": "The ventrogluteal injection site involves which muscles?",
    "questionHi": "हैवर्सियन कैनाल (Haversian Canal) क्या है?",
    "optionsEn": [
      "Gluteus maximus only",
      "Gluteus medius and minimus",
      "Quadriceps",
      "Hamstrings"
    ],
    "optionsHi": [
      "रक्त वाहिका",
      "हड्डी में केंद्रीय नलिका जिसमें रक्त वाहिकाएं होती हैं",
      "तंत्रिका",
      "पेशी तंतु"
    ],
    "correctAnswer": 1,
    "explanationEn": "The ventrogluteal site involves the gluteus medius and minimus muscles, located lateral to the gluteus maximus.",
    "explanationHi": "हैवर्सियन कैनाल संघनन अस्थि में केंद्रीय नलिका है जिसमें रक्त वाहिकाएं और तंत्रिकाएं होती हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-205",
    "questionEn": "Which nerve is at risk if dorsogluteal injection is administered incorrectly?",
    "questionHi": "एंडोस्टियम (Endosteum) क्या है?",
    "optionsEn": [
      "Radial nerve",
      "Femoral nerve",
      "Sciatic nerve",
      "Ulnar nerve"
    ],
    "optionsHi": [
      "हड्डी की बाहरी परत",
      "हड्डी की आंतरिक सतह को ढकने वाली झिल्ली",
      "जोड़ की झिल्ली",
      "पेशी की झिल्ली"
    ],
    "correctAnswer": 2,
    "explanationEn": "The sciatic nerve runs through the buttock. Incorrect dorsogluteal injection can damage it, causing leg weakness or paralysis.",
    "explanationHi": "एंडोस्टियम हड्डी की मज्जा गुहा की आंतरिक सतह को ढकने वाली पतली झिल्ली है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-206",
    "questionEn": "The hamstring muscles are located on the:",
    "questionHi": "ग्रोथ प्लेट (Growth Plate) या एपिफाइसियल प्लेट कहां होती है?",
    "optionsEn": [
      "Front of thigh",
      "Back of thigh",
      "Inner thigh",
      "Outer thigh"
    ],
    "optionsHi": [
      "हड्डी के बीच में",
      "हड्डी के सिरे और शाफ्ट के बीच",
      "जोड़ में",
      "पेशी में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hamstrings (biceps femoris, semimembranosus, semitendinosus) are on the posterior thigh and flex the knee.",
    "explanationHi": "एपिफाइसियल प्लेट लंबी हड्डी के एपिफाइसिस और डायफाइसिस के बीच उपास्थि की परत है जहां हड्डी की लंबाई बढ़ती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-207",
    "questionEn": "The gastrocnemius muscle is responsible for:",
    "questionHi": "सिनोवियल द्रव (Synovial Fluid) क्या करता है?",
    "optionsEn": [
      "Flexing the knee",
      "Extending the knee",
      "Plantar flexion of foot",
      "Dorsiflexion of foot"
    ],
    "optionsHi": [
      "हड्डी बनाता है",
      "जोड़ों को चिकना करता है",
      "रक्त बनाता है",
      "पाचन करता है"
    ],
    "correctAnswer": 2,
    "explanationEn": "The gastrocnemius (calf muscle) performs plantar flexion - pointing the foot downward like standing on tiptoes.",
    "explanationHi": "सिनोवियल द्रव जोड़ों में घर्षण कम करता है और उपास्थि को पोषण देता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-208",
    "questionEn": "Which muscle is known as the 'six-pack' muscle?",
    "questionHi": "आर्टिकुलर कार्टिलेज (Articular Cartilage) कहां होती है?",
    "optionsEn": [
      "External oblique",
      "Internal oblique",
      "Rectus abdominis",
      "Transversus abdominis"
    ],
    "optionsHi": [
      "हड्डी के बीच में",
      "जोड़ों में हड्डियों के सिरों पर",
      "कान में",
      "नाक में"
    ],
    "correctAnswer": 2,
    "explanationEn": "Rectus abdominis is the 'six-pack' muscle running vertically on the front of the abdomen.",
    "explanationHi": "आर्टिकुलर कार्टिलेज जोड़ों में हड्डियों के सिरों को ढकती है और घर्षण कम करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-209",
    "questionEn": "SITS refers to which group of muscles?",
    "questionHi": "मेनिस्कस (Meniscus) कहां पाया जाता है?",
    "optionsEn": [
      "Hamstrings",
      "Quadriceps",
      "Rotator cuff",
      "Hip flexors"
    ],
    "optionsHi": [
      "कंधे में",
      "घुटने में",
      "कोहनी में",
      "कलाई में"
    ],
    "correctAnswer": 2,
    "explanationEn": "SITS = Supraspinatus, Infraspinatus, Teres minor, Subscapularis - the four rotator cuff muscles of the shoulder.",
    "explanationHi": "मेनिस्कस घुटने में अर्धचंद्राकार उपास्थि है जो शॉक अवशोषक का काम करती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-210",
    "questionEn": "The sternocleidomastoid muscle is located in the:",
    "questionHi": "रोटेटर कफ (Rotator Cuff) कहां है?",
    "optionsEn": [
      "Chest",
      "Abdomen",
      "Neck",
      "Back"
    ],
    "optionsHi": [
      "घुटने में",
      "कंधे में",
      "कूल्हे में",
      "कोहनी में"
    ],
    "correctAnswer": 2,
    "explanationEn": "The sternocleidomastoid runs from sternum and clavicle to mastoid process, turning the head and flexing the neck.",
    "explanationHi": "रोटेटर कफ कंधे की 4 पेशियों का समूह है जो कंधे के जोड़ को स्थिर करती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-211",
    "questionEn": "Which muscle closes the jaw during chewing?",
    "questionHi": "ACL (Anterior Cruciate Ligament) कहां है?",
    "optionsEn": [
      "Temporalis",
      "Frontalis",
      "Orbicularis oris",
      "Platysma"
    ],
    "optionsHi": [
      "कंधे में",
      "घुटने में",
      "टखने में",
      "कोहनी में"
    ],
    "correctAnswer": 0,
    "explanationEn": "The temporalis and masseter muscles close the jaw for chewing. The temporalis is on the side of the head.",
    "explanationHi": "ACL घुटने का महत्वपूर्ण स्नायु है जो टिबिया को आगे खिसकने से रोकता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-212",
    "questionEn": "Intercalated discs are found in:",
    "questionHi": "अकिलीज टेंडन (Achilles Tendon) कहां है?",
    "optionsEn": [
      "Skeletal muscle",
      "Smooth muscle",
      "Cardiac muscle",
      "All muscle types"
    ],
    "optionsHi": [
      "कोहनी में",
      "कलाई में",
      "एड़ी के पीछे",
      "घुटने में"
    ],
    "correctAnswer": 2,
    "explanationEn": "Intercalated discs are specialized junctions between cardiac muscle cells that allow synchronized contraction.",
    "explanationHi": "अकिलीज टेंडन शरीर का सबसे मजबूत कंडरा है जो पिंडली की पेशियों को एड़ी की हड्डी से जोड़ता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-213",
    "questionEn": "A tendon connects:",
    "questionHi": "पेशी तंतु (Muscle Fiber) क्या है?",
    "optionsEn": [
      "Bone to bone",
      "Muscle to bone",
      "Muscle to muscle",
      "Nerve to muscle"
    ],
    "optionsHi": [
      "एक तंत्रिका",
      "एक पेशी कोशिका",
      "एक रक्त वाहिका",
      "एक हड्डी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tendons connect muscle to bone. Ligaments connect bone to bone.",
    "explanationHi": "पेशी तंतु कंकाल पेशी की एक कोशिका है जो लंबी और बहुनाभिकीय होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-214",
    "questionEn": "Which type of muscle fiber is more resistant to fatigue?",
    "questionHi": "सारकोमियर (Sarcomere) क्या है?",
    "optionsEn": [
      "Type II (fast-twitch)",
      "Type I (slow-twitch)",
      "Both equal",
      "Neither"
    ],
    "optionsHi": [
      "पेशी की बाहरी परत",
      "पेशी संकुचन की मूल इकाई",
      "पेशी की झिल्ली",
      "पेशी का कंडरा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Type I (slow-twitch/red) fibers use aerobic metabolism and are fatigue-resistant, suited for endurance.",
    "explanationHi": "सारकोमियर कंकाल पेशी में संकुचन की सबसे छोटी कार्यात्मक इकाई है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-215",
    "questionEn": "The latissimus dorsi is located on the:",
    "questionHi": "एक्टिन और मायोसिन क्या हैं?",
    "optionsEn": [
      "Chest",
      "Upper back",
      "Lower back",
      "Abdomen"
    ],
    "optionsHi": [
      "हड्डी के प्रोटीन",
      "पेशी के संकुचनशील प्रोटीन",
      "रक्त के प्रोटीन",
      "तंत्रिका के प्रोटीन"
    ],
    "correctAnswer": 2,
    "explanationEn": "Latissimus dorsi is a broad muscle of the lower back that adducts, extends, and internally rotates the arm.",
    "explanationHi": "एक्टिन और मायोसिन पेशी तंतुओं में संकुचनशील प्रोटीन हैं जो पेशी संकुचन में मदद करते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-216",
    "questionEn": "The biceps brachii has how many heads?",
    "questionHi": "न्यूरोमस्कुलर जंक्शन (Neuromuscular Junction) क्या है?",
    "optionsEn": [
      "1",
      "2",
      "3",
      "4"
    ],
    "optionsHi": [
      "दो तंत्रिकाओं का जोड़",
      "तंत्रिका और पेशी का जोड़",
      "दो पेशियों का जोड़",
      "तंत्रिका और हड्डी का जोड़"
    ],
    "correctAnswer": 1,
    "explanationEn": "Biceps means 'two heads' - the long head and short head. Triceps has 3 heads, quadriceps has 4.",
    "explanationHi": "न्यूरोमस्कुलर जंक्शन वह स्थान है जहां मोटर न्यूरॉन पेशी तंतु से मिलता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-217",
    "questionEn": "The neuromuscular junction is where:",
    "questionHi": "टोनस (Tone) पेशी में क्या है?",
    "optionsEn": [
      "Two muscles meet",
      "Muscle meets bone",
      "Nerve meets muscle",
      "Blood vessel meets muscle"
    ],
    "optionsHi": [
      "पूर्ण शिथिलता",
      "आराम की स्थिति में भी हल्का संकुचन",
      "पूर्ण संकुचन",
      "पेशी का दर्द"
    ],
    "correctAnswer": 2,
    "explanationEn": "The neuromuscular junction (motor end plate) is where a motor neuron connects with a skeletal muscle fiber.",
    "explanationHi": "पेशी टोनस आराम की स्थिति में भी पेशी का हल्का संकुचन है जो मुद्रा बनाए रखता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-218",
    "questionEn": "The pectoralis major muscle is located on the:",
    "questionHi": "स्फिंक्टर (Sphincter) किस प्रकार की पेशी है?",
    "optionsEn": [
      "Back",
      "Chest",
      "Abdomen",
      "Shoulder"
    ],
    "optionsHi": [
      "लंबी पेशी",
      "वृत्ताकार पेशी जो छिद्र को नियंत्रित करती है",
      "चपटी पेशी",
      "त्रिकोणीय पेशी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pectoralis major is the large chest muscle that adducts, flexes, and internally rotates the arm.",
    "explanationHi": "स्फिंक्टर वृत्ताकार पेशी है जो शारीरिक छिद्रों को खोलने/बंद करने को नियंत्रित करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-219",
    "questionEn": "An isometric contraction is when:",
    "questionHi": "पेरिस्टालसिस (Peristalsis) क्या है?",
    "optionsEn": [
      "Muscle shortens",
      "Muscle lengthens",
      "Muscle length stays same",
      "Muscle relaxes"
    ],
    "optionsHi": [
      "हृदय का धड़कना",
      "आहार नाल में लहरदार संकुचन",
      "श्वास लेना",
      "रक्त प्रवाह"
    ],
    "correctAnswer": 2,
    "explanationEn": "Isometric = same length. The muscle generates force but doesn't change length (e.g., pushing against a wall).",
    "explanationHi": "पेरिस्टालसिस आहार नाल की दीवार में लहरदार पेशी संकुचन है जो भोजन को आगे बढ़ाता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-220",
    "questionEn": "Which of these is NOT a function of the muscular system?",
    "questionHi": "हृदय चक्र (Cardiac Cycle) में सिस्टोल क्या है?",
    "optionsEn": [
      "Movement",
      "Heat production",
      "Blood cell production",
      "Posture maintenance"
    ],
    "optionsHi": [
      "हृदय का शिथिलन",
      "हृदय का संकुचन",
      "हृदय का आराम",
      "हृदय का रुकना"
    ],
    "correctAnswer": 2,
    "explanationEn": "Blood cell production is a function of the skeletal system (red bone marrow), not the muscular system.",
    "explanationHi": "सिस्टोल हृदय का संकुचन चरण है जब रक्त बाहर पंप होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-221",
    "questionEn": "The septum divides the heart into:",
    "questionHi": "हृदय चक्र में डायस्टोल क्या है?",
    "optionsEn": [
      "Upper and lower",
      "Right and left",
      "Front and back",
      "Inner and outer"
    ],
    "optionsHi": [
      "हृदय का संकुचन",
      "हृदय का शिथिलन/भरना",
      "हृदय का रुकना",
      "वाल्व का बंद होना"
    ],
    "correctAnswer": 1,
    "explanationEn": "The interventricular and interatrial septa divide the heart into right and left sides, preventing blood mixing.",
    "explanationHi": "डायस्टोल हृदय का शिथिलन चरण है जब हृदय रक्त से भरता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-222",
    "questionEn": "The tricuspid valve has how many cusps?",
    "questionHi": "पहली हृदय ध्वनि (S1) कब होती है?",
    "optionsEn": [
      "2",
      "3",
      "4",
      "5"
    ],
    "optionsHi": [
      "सेमीलूनर वाल्व बंद होने पर",
      "AV वाल्व बंद होने पर",
      "हृदय के आराम पर",
      "श्वास लेने पर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tricuspid = three cusps. It is located between the right atrium and right ventricle.",
    "explanationHi": "S1 (लब) ध्वनि माइट्रल और ट्राइकसपिड वाल्व के बंद होने से होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-223",
    "questionEn": "The cardiac conduction system sequence is:",
    "questionHi": "दूसरी हृदय ध्वनि (S2) कब होती है?",
    "optionsEn": [
      "AV node → SA node → Bundle of His → Purkinje fibers",
      "SA node → AV node → Bundle of His → Purkinje fibers",
      "Purkinje fibers → SA node → AV node → Bundle of His",
      "Bundle of His → SA node → Purkinje fibers → AV node"
    ],
    "optionsHi": [
      "AV वाल्व बंद होने पर",
      "सेमीलूनर वाल्व बंद होने पर",
      "हृदय भरने पर",
      "संकुचन शुरू होने पर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Electrical impulse: SA node (pacemaker) → AV node → Bundle of His → Bundle branches → Purkinje fibers.",
    "explanationHi": "S2 (डब) ध्वनि महाधमनी और फुफ्फुसीय वाल्व के बंद होने से होती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-224",
    "questionEn": "Which chamber of the heart has the thickest wall?",
    "questionHi": "AV नोड (Atrioventricular Node) कहां है?",
    "optionsEn": [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Left ventricle"
    ],
    "optionsHi": [
      "दाएं आलिंद में SA नोड के पास",
      "आलिंद और निलय के बीच सेप्टम में",
      "बाएं निलय में",
      "महाधमनी में"
    ],
    "correctAnswer": 3,
    "explanationEn": "The left ventricle has the thickest wall because it pumps blood to the entire body against higher resistance.",
    "explanationHi": "AV नोड अंतरआलिंद सेप्टम के निचले भाग में स्थित है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-225",
    "questionEn": "The pericardium is:",
    "questionHi": "बंडल ऑफ हिस (Bundle of His) क्या है?",
    "optionsEn": [
      "Inner lining of heart",
      "Muscle layer of heart",
      "Sac surrounding heart",
      "Valve of heart"
    ],
    "optionsHi": [
      "रक्त वाहिका",
      "हृदय की चालन प्रणाली का भाग",
      "हृदय वाल्व",
      "हृदय की पेशी"
    ],
    "correctAnswer": 2,
    "explanationEn": "The pericardium is a double-walled sac containing the heart and roots of great vessels.",
    "explanationHi": "बंडल ऑफ हिस AV नोड से निलयों तक विद्युत संकेत ले जाने वाले तंतुओं का बंडल है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-226",
    "questionEn": "The endocardium is the:",
    "questionHi": "पर्किंजे तंतु (Purkinje Fibers) क्या करते हैं?",
    "optionsEn": [
      "Outer layer of heart",
      "Middle layer of heart",
      "Inner lining of heart",
      "Membrane around heart"
    ],
    "optionsHi": [
      "रक्त ले जाते हैं",
      "निलयों में विद्युत संकेत फैलाते हैं",
      "वाल्व खोलते हैं",
      "हृदय को पोषण देते हैं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Heart wall layers from inside out: endocardium (inner), myocardium (muscle), epicardium (outer).",
    "explanationHi": "पर्किंजे तंतु निलयों की दीवारों में विद्युत संकेतों को तेजी से फैलाते हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-227",
    "questionEn": "The inferior vena cava returns blood from:",
    "questionHi": "केशिकाएं (Capillaries) क्या करती हैं?",
    "optionsEn": [
      "Head and arms",
      "Lungs",
      "Lower body",
      "Heart muscle"
    ],
    "optionsHi": [
      "रक्त को तेजी से ले जाती हैं",
      "ऊतकों और रक्त के बीच पदार्थों का आदान-प्रदान",
      "रक्त संग्रहित करती हैं",
      "रक्त बनाती हैं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Inferior vena cava returns deoxygenated blood from below the diaphragm (abdomen, pelvis, legs).",
    "explanationHi": "केशिकाएं सबसे छोटी रक्त वाहिकाएं हैं जहां गैस और पोषक तत्वों का आदान-प्रदान होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-228",
    "questionEn": "Valves prevent blood from:",
    "questionHi": "धमनिकाएं (Arterioles) क्या हैं?",
    "optionsEn": [
      "Flowing forward",
      "Flowing backward",
      "Clotting",
      "Mixing with other fluids"
    ],
    "optionsHi": [
      "बड़ी धमनियां",
      "छोटी धमनियां जो रक्तचाप नियंत्रित करती हैं",
      "बड़ी शिराएं",
      "केशिकाएं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Heart valves ensure one-way blood flow by preventing backflow (regurgitation).",
    "explanationHi": "धमनिकाएं छोटी धमनियां हैं जो संकुचन/विस्तार से रक्त प्रवाह और दबाव नियंत्रित करती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-229",
    "questionEn": "The popliteal pulse is located:",
    "questionHi": "शिरिकाएं (Venules) क्या हैं?",
    "optionsEn": [
      "In the groin",
      "Behind the knee",
      "At the ankle",
      "In the wrist"
    ],
    "optionsHi": [
      "बड़ी शिराएं",
      "छोटी शिराएं जो केशिकाओं से रक्त एकत्र करती हैं",
      "धमनियां",
      "केशिकाएं"
    ],
    "correctAnswer": 1,
    "explanationEn": "The popliteal artery runs behind the knee, and its pulse can be palpated in the popliteal fossa.",
    "explanationHi": "शिरिकाएं छोटी शिराएं हैं जो केशिकाओं से रक्त एकत्र करके बड़ी शिराओं में ले जाती हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-230",
    "questionEn": "Arterioles are:",
    "questionHi": "शिराओं में वाल्व क्यों होते हैं?",
    "optionsEn": [
      "Large arteries",
      "Small arteries",
      "Large veins",
      "Small veins"
    ],
    "optionsHi": [
      "रक्त को तेज करने के लिए",
      "रक्त को पीछे जाने से रोकने के लिए",
      "रक्त बनाने के लिए",
      "रक्त को साफ करने के लिए"
    ],
    "correctAnswer": 1,
    "explanationEn": "Arterioles are small arteries that regulate blood flow to capillaries through vasoconstriction/dilation.",
    "explanationHi": "शिराओं में वाल्व रक्त को गुरुत्वाकर्षण के विरुद्ध हृदय की ओर जाने में मदद करते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-231",
    "questionEn": "Veins have valves to:",
    "questionHi": "फुफ्फुसीय परिसंचरण (Pulmonary Circulation) क्या है?",
    "optionsEn": [
      "Speed up blood flow",
      "Prevent backflow",
      "Filter blood",
      "Oxygenate blood"
    ],
    "optionsHi": [
      "पूरे शरीर में रक्त प्रवाह",
      "हृदय और फेफड़ों के बीच रक्त प्रवाह",
      "केवल मस्तिष्क में रक्त प्रवाह",
      "केवल पैरों में रक्त प्रवाह"
    ],
    "correctAnswer": 1,
    "explanationEn": "Venous valves prevent backflow, helping blood return to heart against gravity, especially in legs.",
    "explanationHi": "फुफ्फुसीय परिसंचरण दाएं हृदय से फेफड़ों तक और वापस बाएं हृदय तक रक्त का प्रवाह है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-232",
    "questionEn": "The posterior tibial pulse is felt:",
    "questionHi": "प्रणालीगत परिसंचरण (Systemic Circulation) क्या है?",
    "optionsEn": [
      "In front of ankle",
      "Behind medial malleolus",
      "On top of foot",
      "Behind knee"
    ],
    "optionsHi": [
      "केवल फेफड़ों में रक्त प्रवाह",
      "बाएं हृदय से पूरे शरीर में और वापस दाएं हृदय तक",
      "केवल मस्तिष्क में",
      "केवल यकृत में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The posterior tibial pulse is palpated behind the medial malleolus (inner ankle bone).",
    "explanationHi": "प्रणालीगत परिसंचरण बाएं निलय से महाधमनी के माध्यम से पूरे शरीर में और वापस दाएं आलिंद तक है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-233",
    "questionEn": "The circle of Willis is located in the:",
    "questionHi": "पोर्टल परिसंचरण (Portal Circulation) क्या है?",
    "optionsEn": [
      "Heart",
      "Liver",
      "Brain",
      "Kidney"
    ],
    "optionsHi": [
      "सामान्य रक्त प्रवाह",
      "दो केशिका बिस्तरों के बीच शिरा",
      "फेफड़ों में रक्त प्रवाह",
      "हृदय में रक्त प्रवाह"
    ],
    "correctAnswer": 2,
    "explanationEn": "The circle of Willis is an arterial circle at the base of the brain that provides collateral circulation.",
    "explanationHi": "पोर्टल परिसंचरण में शिरा दो केशिका बिस्तरों को जोड़ती है जैसे हेपेटिक पोर्टल शिरा।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-234",
    "questionEn": "The hepatic portal vein carries blood from:",
    "questionHi": "हेपेटिक पोर्टल शिरा (Hepatic Portal Vein) क्या करती है?",
    "optionsEn": [
      "Heart to liver",
      "GI tract to liver",
      "Liver to heart",
      "Kidneys to liver"
    ],
    "optionsHi": [
      "यकृत से रक्त ले जाती है",
      "आंतों से पोषक तत्वयुक्त रक्त यकृत तक ले जाती है",
      "हृदय को रक्त देती है",
      "फेफड़ों को रक्त देती है"
    ],
    "correctAnswer": 1,
    "explanationEn": "The hepatic portal vein carries nutrient-rich blood from the GI tract to the liver for processing.",
    "explanationHi": "हेपेटिक पोर्टल शिरा पाचन तंत्र से अवशोषित पोषक तत्वों वाला रक्त यकृत में ले जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-235",
    "questionEn": "Normal adult heart rate at rest is:",
    "questionHi": "साइनस (Sinuses) नाक में क्या कार्य करते हैं?",
    "optionsEn": [
      "40-60 bpm",
      "60-100 bpm",
      "100-120 bpm",
      "120-150 bpm"
    ],
    "optionsHi": [
      "केवल सजावट",
      "आवाज को गूंज देना, खोपड़ी को हल्का करना, बलगम उत्पादन",
      "पाचन",
      "श्वसन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Normal resting heart rate for adults is 60-100 beats per minute.",
    "explanationHi": "पैरानासल साइनस आवाज को गूंज देते हैं, खोपड़ी को हल्का करते हैं और बलगम बनाते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-236",
    "questionEn": "The hilum of the lung is where:",
    "questionHi": "टॉन्सिल (Tonsils) कहां होते हैं?",
    "optionsEn": [
      "Gas exchange occurs",
      "Bronchi and vessels enter",
      "Diaphragm attaches",
      "Pleura folds"
    ],
    "optionsHi": [
      "नाक में",
      "गले में",
      "आमाशय में",
      "फेफड़ों में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The hilum (root of lung) is where main bronchi, pulmonary vessels, nerves, and lymphatics enter the lung.",
    "explanationHi": "टॉन्सिल गले में लिम्फोइड ऊतक हैं जो संक्रमण से लड़ने में मदद करते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-237",
    "questionEn": "The bronchioles are characterized by:",
    "questionHi": "एडेनॉयड्स (Adenoids) कहां होते हैं?",
    "optionsEn": [
      "Cartilage rings",
      "No cartilage",
      "Bone support",
      "Thick walls"
    ],
    "optionsHi": [
      "गले में",
      "नासाग्रसनी (Nasopharynx) में",
      "आमाशय में",
      "फेफड़ों में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Bronchioles lack cartilage. They are held open by lung tissue elasticity and smooth muscle tone.",
    "explanationHi": "एडेनॉयड्स नासाग्रसनी में टॉन्सिल जैसे लिम्फोइड ऊतक हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-238",
    "questionEn": "Type II alveolar cells produce:",
    "questionHi": "क्रिकॉयड उपास्थि (Cricoid Cartilage) कहां है?",
    "optionsEn": [
      "Mucus",
      "Surfactant",
      "Oxygen",
      "Carbon dioxide"
    ],
    "optionsHi": [
      "नाक में",
      "स्वरयंत्र में (एकमात्र पूर्ण वलय)",
      "श्वासनली में",
      "कान में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Type II pneumocytes produce surfactant, which reduces surface tension and prevents alveolar collapse.",
    "explanationHi": "क्रिकॉयड स्वरयंत्र में एकमात्र पूर्ण उपास्थि वलय है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-239",
    "questionEn": "The apex of the lung is located:",
    "questionHi": "थायरॉयड उपास्थि (Thyroid Cartilage) क्या बनाती है?",
    "optionsEn": [
      "At the base near diaphragm",
      "At the top above clavicle",
      "At the hilum",
      "In the cardiac notch"
    ],
    "optionsHi": [
      "कान का आकार",
      "एडम्स एप्पल (Adam's Apple)",
      "नाक का आकार",
      "जीभ का आकार"
    ],
    "correctAnswer": 1,
    "explanationEn": "The lung apex extends above the clavicle into the root of the neck.",
    "explanationHi": "थायरॉयड उपास्थि स्वरयंत्र की सबसे बड़ी उपास्थि है जो एडम्स एप्पल बनाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-240",
    "questionEn": "The lingula is a tongue-shaped projection of the:",
    "questionHi": "श्वासनली (Trachea) में उपास्थि के छल्ले किस आकार के होते हैं?",
    "optionsEn": [
      "Right lung",
      "Left lung",
      "Trachea",
      "Bronchi"
    ],
    "optionsHi": [
      "पूर्ण वृत्ताकार",
      "C-आकार के",
      "त्रिकोणीय",
      "चौकोर"
    ],
    "correctAnswer": 1,
    "explanationEn": "The lingula is part of the left upper lobe, analogous to the middle lobe of the right lung.",
    "explanationHi": "श्वासनली में 16-20 C-आकार के उपास्थि छल्ले होते हैं जो इसे खुला रखते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-241",
    "questionEn": "The submandibular gland is located:",
    "questionHi": "दायां मुख्य श्वसनी (Right Main Bronchus) बाएं से कैसे अलग है?",
    "optionsEn": [
      "Under tongue",
      "Under jaw",
      "Near ear",
      "In palate"
    ],
    "optionsHi": [
      "अधिक लंबा और संकरा",
      "छोटा, चौड़ा और अधिक सीधा",
      "समान है",
      "अनुपस्थित है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Submandibular glands are under the mandible (jaw). Sublingual is under tongue, parotid is near ear.",
    "explanationHi": "दायां मुख्य श्वसनी छोटा, चौड़ा और अधिक सीधा होता है इसलिए विदेशी वस्तुएं अक्सर यहीं जाती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-242",
    "questionEn": "The cardiac sphincter is at the junction of:",
    "questionHi": "प्लूरल स्पेस (Pleural Space) क्या है?",
    "optionsEn": [
      "Stomach and duodenum",
      "Esophagus and stomach",
      "Small and large intestine",
      "Colon and rectum"
    ],
    "optionsHi": [
      "फेफड़े के अंदर",
      "पैरिएटल और विसेरल प्लूरा के बीच का स्थान",
      "हृदय के अंदर",
      "पेट में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The cardiac (lower esophageal) sphincter is at the gastroesophageal junction, preventing acid reflux.",
    "explanationHi": "प्लूरल स्पेस फेफड़े को ढकने वाली दो प्लूरल झिल्लियों के बीच का संभावित स्थान है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-243",
    "questionEn": "The fundus of the stomach is the:",
    "questionHi": "मीडियास्टिनम (Mediastinum) क्या है?",
    "optionsEn": [
      "Lower portion",
      "Middle portion",
      "Upper dome-shaped portion",
      "Opening to duodenum"
    ],
    "optionsHi": [
      "फेफड़े का भाग",
      "दोनों फेफड़ों के बीच का वक्षीय क्षेत्र",
      "हृदय का भाग",
      "उदर गुहा"
    ],
    "correctAnswer": 2,
    "explanationEn": "The fundus is the dome-shaped upper portion of the stomach above the cardiac opening.",
    "explanationHi": "मीडियास्टिनम दोनों फेफड़ों के बीच का क्षेत्र है जिसमें हृदय, महान वाहिकाएं, श्वासनली आदि होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-244",
    "questionEn": "Villi and microvilli are found mainly in the:",
    "questionHi": "जीभ पर स्वाद कलिकाएं (Taste Buds) कहां होती हैं?",
    "optionsEn": [
      "Stomach",
      "Small intestine",
      "Large intestine",
      "Esophagus"
    ],
    "optionsHi": [
      "जीभ की सतह पर सीधे",
      "पैपिला (Papillae) पर",
      "जीभ के नीचे",
      "दांतों पर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Villi and microvilli in the small intestine greatly increase surface area for nutrient absorption.",
    "explanationHi": "स्वाद कलिकाएं जीभ की सतह पर पैपिला नामक उभारों पर स्थित होती हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-245",
    "questionEn": "The common bile duct is formed by the union of:",
    "questionHi": "निचला ग्रसिका दबानी (Lower Esophageal Sphincter) क्या रोकता है?",
    "optionsEn": [
      "Hepatic and cystic ducts",
      "Pancreatic and hepatic ducts",
      "Two cystic ducts",
      "Splenic and hepatic ducts"
    ],
    "optionsHi": [
      "भोजन को नीचे जाने से",
      "आमाशय की सामग्री को ग्रसिका में वापस आने से",
      "पित्त को बहने से",
      "मूत्र को बहने से"
    ],
    "correctAnswer": 0,
    "explanationEn": "Common hepatic duct + cystic duct (from gallbladder) = common bile duct.",
    "explanationHi": "LES आमाशय के अम्ल और भोजन को ग्रसिका में वापस आने (रिफ्लक्स) से रोकता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-246",
    "questionEn": "The haustra are characteristic features of the:",
    "questionHi": "रुगे (Rugae) आमाशय में क्या हैं?",
    "optionsEn": [
      "Small intestine",
      "Large intestine",
      "Stomach",
      "Esophagus"
    ],
    "optionsHi": [
      "ग्रंथियां",
      "आंतरिक दीवार की सिलवटें",
      "मांसपेशियां",
      "रक्त वाहिकाएं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Haustra are pouches/sacculations of the colon formed by teniae coli (longitudinal muscle bands).",
    "explanationHi": "रुगे आमाशय की आंतरिक दीवार की सिलवटें हैं जो आमाशय को फैलने देती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-247",
    "questionEn": "The mesentery is:",
    "questionHi": "आमाशय में HCl (हाइड्रोक्लोरिक एसिड) कौन सी कोशिकाएं बनाती हैं?",
    "optionsEn": [
      "A digestive enzyme",
      "A fold of peritoneum",
      "Part of the stomach",
      "A type of muscle"
    ],
    "optionsHi": [
      "चीफ कोशिकाएं",
      "पैरिएटल कोशिकाएं",
      "गॉब्लेट कोशिकाएं",
      "एंटेरोसाइट्स"
    ],
    "correctAnswer": 1,
    "explanationEn": "The mesentery is a fold of peritoneum attaching intestines to posterior abdominal wall, carrying vessels and nerves.",
    "explanationHi": "पैरिएटल (ऑक्सिंटिक) कोशिकाएं आमाशय में HCl और इंट्रिंसिक फैक्टर बनाती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-248",
    "questionEn": "McBurney's point overlies the:",
    "questionHi": "आमाशय में पेप्सिनोजेन कौन सी कोशिकाएं बनाती हैं?",
    "optionsEn": [
      "Gallbladder",
      "Appendix",
      "Spleen",
      "Kidney"
    ],
    "optionsHi": [
      "पैरिएटल कोशिकाएं",
      "चीफ कोशिकाएं",
      "G कोशिकाएं",
      "म्यूकस कोशिकाएं"
    ],
    "correctAnswer": 1,
    "explanationEn": "McBurney's point (1/3 from ASIS to umbilicus) overlies the appendix base, tender in appendicitis.",
    "explanationHi": "चीफ (जाइमोजेनिक) कोशिकाएं पेप्सिनोजेन बनाती हैं जो पेप्सिन में बदलता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-249",
    "questionEn": "The rectum is approximately how long?",
    "questionHi": "ओडी का स्फिंक्टर (Sphincter of Oddi) कहां है?",
    "optionsEn": [
      "5 cm",
      "12 cm",
      "25 cm",
      "40 cm"
    ],
    "optionsHi": [
      "आमाशय में",
      "ग्रहणी में जहां पित्त और अग्न्याशय नलिका खुलती है",
      "मलाशय में",
      "ग्रसिका में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The rectum is about 12 cm (5 inches) long, connecting the sigmoid colon to the anal canal.",
    "explanationHi": "ओडी का स्फिंक्टर ग्रहणी में पित्त और अग्न्याशय नलिकाओं के खुलने को नियंत्रित करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-250",
    "questionEn": "The ampulla of Vater is where:",
    "questionHi": "माइक्रोविली (Microvilli) क्या हैं?",
    "optionsEn": [
      "Stomach meets duodenum",
      "Bile and pancreatic ducts enter duodenum",
      "Ileum meets cecum",
      "Colon meets rectum"
    ],
    "optionsHi": [
      "बड़े उभार",
      "विली पर सूक्ष्म उभार जो अवशोषण क्षेत्र बढ़ाते हैं",
      "आमाशय की सिलवटें",
      "बड़ी आंत की संरचना"
    ],
    "correctAnswer": 1,
    "explanationEn": "The ampulla of Vater (hepatopancreatic ampulla) is where common bile duct and pancreatic duct open into duodenum.",
    "explanationHi": "माइक्रोविली विली पर अत्यंत छोटे उभार हैं जो अवशोषण सतह को और बढ़ाते हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-251",
    "questionEn": "Grey matter in the brain consists mainly of:",
    "questionHi": "पायर्स पैच (Peyer's Patches) कहां होते हैं?",
    "optionsEn": [
      "Axons",
      "Cell bodies",
      "Myelin",
      "Synapses only"
    ],
    "optionsHi": [
      "आमाशय में",
      "शेषांत्र (Ileum) में",
      "बड़ी आंत में",
      "ग्रसिका में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Grey matter contains neuron cell bodies, dendrites, and unmyelinated axons. White matter has myelinated axons.",
    "explanationHi": "पायर्स पैच शेषांत्र में लिम्फोइड ऊतक के समूह हैं जो प्रतिरक्षा में भूमिका निभाते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-252",
    "questionEn": "The temporal lobe is primarily involved in:",
    "questionHi": "टीनिया कोलाई (Taenia Coli) क्या है?",
    "optionsEn": [
      "Vision",
      "Hearing",
      "Motor function",
      "Balance"
    ],
    "optionsHi": [
      "छोटी आंत का भाग",
      "बड़ी आंत में अनुदैर्ध्य पेशी की तीन पट्टियां",
      "आमाशय का भाग",
      "यकृत का भाग"
    ],
    "correctAnswer": 1,
    "explanationEn": "The temporal lobe processes auditory information and is involved in memory and speech comprehension.",
    "explanationHi": "टीनिया कोलाई बृहदान्त्र की बाहरी पेशी परत की तीन अनुदैर्ध्य पट्टियां हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-253",
    "questionEn": "The parietal lobe processes:",
    "questionHi": "हॉस्ट्रा (Haustra) क्या हैं?",
    "optionsEn": [
      "Vision",
      "Hearing",
      "Sensory information",
      "Smell"
    ],
    "optionsHi": [
      "छोटी आंत की सिलवटें",
      "बड़ी आंत की थैलीनुमा संरचनाएं",
      "आमाशय की ग्रंथियां",
      "यकृत की कोशिकाएं"
    ],
    "correctAnswer": 2,
    "explanationEn": "The parietal lobe processes sensory input including touch, temperature, pain, and spatial awareness.",
    "explanationHi": "हॉस्ट्रा बृहदान्त्र की दीवार में थैलीनुमा उभार हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-254",
    "questionEn": "The brainstem consists of:",
    "questionHi": "एपिप्लोइक एपेंडेज (Epiploic Appendages) क्या हैं?",
    "optionsEn": [
      "Cerebrum and cerebellum",
      "Midbrain, pons, and medulla",
      "Frontal and parietal lobes",
      "Thalamus and hypothalamus"
    ],
    "optionsHi": [
      "आंत्रपुच्छ",
      "बृहदान्त्र पर वसा की छोटी थैलियां",
      "लिम्फ नोड्स",
      "रक्त वाहिकाएं"
    ],
    "correctAnswer": 1,
    "explanationEn": "The brainstem = midbrain + pons + medulla oblongata. It controls vital functions like breathing and heart rate.",
    "explanationHi": "एपिप्लोइक एपेंडेज बृहदान्त्र की बाहरी सतह पर वसा से भरी छोटी थैलियां हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-255",
    "questionEn": "The blood-brain barrier is formed mainly by:",
    "questionHi": "मैकबर्नी का बिंदु (McBurney's Point) कहां है?",
    "optionsEn": [
      "Meninges",
      "Tight junctions in capillaries",
      "Cerebrospinal fluid",
      "Skull bones"
    ],
    "optionsHi": [
      "बाएं ऊपरी पेट में",
      "नाभि और दाएं ASIS के बीच",
      "छाती में",
      "पीठ में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The blood-brain barrier is formed by tight junctions between endothelial cells of brain capillaries.",
    "explanationHi": "मैकबर्नी का बिंदु आंत्रपुच्छ का सतही स्थान है, नाभि और दाएं ASIS के बीच 1/3 दूरी पर।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-256",
    "questionEn": "CSF is produced by the:",
    "questionHi": "यकृत में हेपेटोसाइट्स (Hepatocytes) क्या हैं?",
    "optionsEn": [
      "Meninges",
      "Choroid plexus",
      "Cerebral cortex",
      "Spinal cord"
    ],
    "optionsHi": [
      "रक्त कोशिकाएं",
      "यकृत की मुख्य कार्यात्मक कोशिकाएं",
      "पित्त नलिकाएं",
      "रक्त वाहिकाएं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cerebrospinal fluid is produced by the choroid plexus in the ventricles of the brain.",
    "explanationHi": "हेपेटोसाइट्स यकृत की मुख्य कोशिकाएं हैं जो अधिकांश यकृत कार्य करती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-257",
    "questionEn": "The sciatic nerve is the:",
    "questionHi": "कुफ्फर कोशिकाएं (Kupffer Cells) क्या करती हैं?",
    "optionsEn": [
      "Smallest nerve",
      "Largest nerve",
      "Shortest nerve",
      "Most superficial nerve"
    ],
    "optionsHi": [
      "पित्त बनाती हैं",
      "यकृत में मैक्रोफेज के रूप में काम करती हैं",
      "रक्त बनाती हैं",
      "इंसुलिन बनाती हैं"
    ],
    "correctAnswer": 1,
    "explanationEn": "The sciatic nerve is the largest nerve in the body, running from lower back through buttock and down the leg.",
    "explanationHi": "कुफ्फर कोशिकाएं यकृत में विशेष मैक्रोफेज हैं जो पुरानी RBCs और रोगाणुओं को नष्ट करती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-258",
    "questionEn": "The corpus callosum connects:",
    "questionHi": "सामान्य पित्त नलिका (Common Bile Duct) कहां खुलती है?",
    "optionsEn": [
      "Brain and spinal cord",
      "Left and right hemispheres",
      "Cerebrum and cerebellum",
      "Brainstem and thalamus"
    ],
    "optionsHi": [
      "आमाशय में",
      "ग्रहणी में",
      "शेषांत्र में",
      "बृहदान्त्र में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The corpus callosum is a thick band of nerve fibers connecting the two cerebral hemispheres.",
    "explanationHi": "सामान्य पित्त नलिका ग्रहणी में ड्यूओडेनल पैपिला पर खुलती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-259",
    "questionEn": "The olfactory nerve (CN I) is responsible for:",
    "questionHi": "अग्न्याशय के आइलेट्स ऑफ लैंगरहैंस (Islets of Langerhans) क्या हैं?",
    "optionsEn": [
      "Vision",
      "Hearing",
      "Smell",
      "Taste"
    ],
    "optionsHi": [
      "पाचक एंजाइम बनाने वाली कोशिकाएं",
      "हार्मोन (इंसुलिन, ग्लूकागन) बनाने वाली कोशिकाओं के समूह",
      "रक्त वाहिकाएं",
      "पित्त नलिकाएं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Cranial nerve I (olfactory) carries sensory information for smell from the nasal cavity to the brain.",
    "explanationHi": "आइलेट्स ऑफ लैंगरहैंस अग्न्याशय में अंतःस्रावी कोशिकाओं के समूह हैं जो इंसुलिन, ग्लूकागन आदि बनाते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-260",
    "questionEn": "The optic nerve (CN II) carries information for:",
    "questionHi": "प्लीहा (Spleen) का मुख्य कार्य क्या है?",
    "optionsEn": [
      "Smell",
      "Taste",
      "Vision",
      "Hearing"
    ],
    "optionsHi": [
      "पाचन",
      "पुरानी RBCs को नष्ट करना, रक्त छानना, प्रतिरक्षा",
      "मूत्र बनाना",
      "हार्मोन बनाना"
    ],
    "correctAnswer": 2,
    "explanationEn": "Cranial nerve II (optic) carries visual information from the retina to the brain.",
    "explanationHi": "प्लीहा पुरानी लाल रक्त कोशिकाओं को नष्ट करती है, रक्त को छानती है और प्रतिरक्षा में मदद करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-261",
    "questionEn": "The renal pyramids are located in the:",
    "questionHi": "प्रमस्तिष्क प्रांतस्था (Cerebral Cortex) क्या है?",
    "optionsEn": [
      "Cortex",
      "Medulla",
      "Pelvis",
      "Calyx"
    ],
    "optionsHi": [
      "मस्तिष्क का सफेद पदार्थ",
      "प्रमस्तिष्क की बाहरी धूसर परत",
      "अनुमस्तिष्क",
      "मेरुरज्जु"
    ],
    "correctAnswer": 1,
    "explanationEn": "Renal pyramids are cone-shaped structures in the medulla, their tips (papillae) project into minor calyces.",
    "explanationHi": "प्रमस्तिष्क प्रांतस्था बाहरी धूसर पदार्थ की परत है जहां उच्च मानसिक कार्य होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-262",
    "questionEn": "The juxtaglomerular apparatus is involved in:",
    "questionHi": "श्वेत पदार्थ (White Matter) में क्या होता है?",
    "optionsEn": [
      "Urine storage",
      "Blood pressure regulation",
      "Urine excretion",
      "Hormone breakdown"
    ],
    "optionsHi": [
      "तंत्रिका कोशिका काय",
      "माइलिनेटेड अक्षतंतु (Myelinated Axons)",
      "सिनैप्स",
      "रक्त वाहिकाएं"
    ],
    "correctAnswer": 1,
    "explanationEn": "The juxtaglomerular apparatus secretes renin, which activates the renin-angiotensin-aldosterone system for BP control.",
    "explanationHi": "श्वेत पदार्थ में माइलिन से ढके अक्षतंतु होते हैं जो सफेद दिखते हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-263",
    "questionEn": "The detrusor muscle is found in the:",
    "questionHi": "धूसर पदार्थ (Grey Matter) में क्या होता है?",
    "optionsEn": [
      "Kidney",
      "Ureter",
      "Bladder",
      "Urethra"
    ],
    "optionsHi": [
      "केवल अक्षतंतु",
      "तंत्रिका कोशिका काय, डेंड्राइट्स, सिनैप्स",
      "केवल माइलिन",
      "केवल रक्त वाहिकाएं"
    ],
    "correctAnswer": 2,
    "explanationEn": "The detrusor is the smooth muscle of the bladder wall that contracts during urination.",
    "explanationHi": "धूसर पदार्थ में तंत्रिका कोशिका काय, डेंड्राइट्स, सिनैप्स और अनमाइलिनेटेड अक्षतंतु होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-264",
    "questionEn": "The renal hilum is where:",
    "questionHi": "ब्रोका क्षेत्र (Broca's Area) क्या नियंत्रित करता है?",
    "optionsEn": [
      "Urine is formed",
      "Vessels and ureter enter/exit",
      "Filtration occurs",
      "Reabsorption occurs"
    ],
    "optionsHi": [
      "दृष्टि",
      "भाषण उत्पादन (Speech Production)",
      "श्रवण",
      "गंध"
    ],
    "correctAnswer": 1,
    "explanationEn": "The renal hilum is the indentation where renal artery, vein, nerves, lymphatics, and ureter connect to the kidney.",
    "explanationHi": "ब्रोका क्षेत्र बाएं ललाट पालि में है और भाषण उत्पादन को नियंत्रित करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-265",
    "questionEn": "The loop of Henle is primarily responsible for:",
    "questionHi": "वर्निक क्षेत्र (Wernicke's Area) क्या करता है?",
    "optionsEn": [
      "Filtration",
      "Concentrating urine",
      "Producing hormones",
      "Storing urine"
    ],
    "optionsHi": [
      "गति नियंत्रण",
      "भाषा को समझना",
      "दृष्टि",
      "श्रवण"
    ],
    "correctAnswer": 1,
    "explanationEn": "The loop of Henle creates a concentration gradient in the medulla, enabling urine concentration.",
    "explanationHi": "वर्निक क्षेत्र बाएं टेम्पोरल पालि में है और भाषा को समझने के लिए जिम्मेदार है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-266",
    "questionEn": "The normal daily urine output is approximately:",
    "questionHi": "ऑक्सिपिटल लोब (Occipital Lobe) क्या नियंत्रित करता है?",
    "optionsEn": [
      "0.5 L",
      "1-2 L",
      "3-4 L",
      "5 L"
    ],
    "optionsHi": [
      "गति",
      "दृष्टि",
      "श्रवण",
      "भाषण"
    ],
    "correctAnswer": 1,
    "explanationEn": "Normal urine output is about 1-2 liters per day, varying with fluid intake and other factors.",
    "explanationHi": "ऑक्सिपिटल लोब मस्तिष्क के पीछे है और दृश्य प्रसंस्करण के लिए जिम्मेदार है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-267",
    "questionEn": "The seminiferous tubules are located in the:",
    "questionHi": "टेम्पोरल लोब (Temporal Lobe) क्या नियंत्रित करता है?",
    "optionsEn": [
      "Prostate",
      "Testes",
      "Epididymis",
      "Vas deferens"
    ],
    "optionsHi": [
      "दृष्टि",
      "श्रवण और स्मृति",
      "गति",
      "संतुलन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Seminiferous tubules in the testes are where sperm cells are produced (spermatogenesis).",
    "explanationHi": "टेम्पोरल लोब श्रवण प्रसंस्करण और स्मृति निर्माण के लिए जिम्मेदार है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-268",
    "questionEn": "The vas deferens transports sperm from:",
    "questionHi": "पैरिएटल लोब (Parietal Lobe) क्या नियंत्रित करता है?",
    "optionsEn": [
      "Testes to epididymis",
      "Epididymis to ejaculatory duct",
      "Bladder to urethra",
      "Prostate to urethra"
    ],
    "optionsHi": [
      "दृष्टि",
      "संवेदी प्रसंस्करण, स्थानिक जागरूकता",
      "श्रवण",
      "गंध"
    ],
    "correctAnswer": 1,
    "explanationEn": "The vas deferens carries sperm from the epididymis to the ejaculatory duct during ejaculation.",
    "explanationHi": "पैरिएटल लोब स्पर्श, तापमान, दर्द जैसी संवेदनाओं और स्थानिक जागरूकता के लिए जिम्मेदार है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-269",
    "questionEn": "The seminal vesicles contribute approximately what percentage of semen volume?",
    "questionHi": "फ्रंटल लोब (Frontal Lobe) क्या नियंत्रित करता है?",
    "optionsEn": [
      "10%",
      "30%",
      "60%",
      "90%"
    ],
    "optionsHi": [
      "केवल दृष्टि",
      "ऐच्छिक गति, निर्णय, व्यक्तित्व",
      "केवल श्रवण",
      "केवल संतुलन"
    ],
    "correctAnswer": 2,
    "explanationEn": "Seminal vesicles produce about 60% of semen volume, containing fructose and prostaglandins.",
    "explanationHi": "फ्रंटल लोब ऐच्छिक गतियों, निर्णय लेने, योजना बनाने और व्यक्तित्व के लिए जिम्मेदार है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-270",
    "questionEn": "The corpus luteum is formed from:",
    "questionHi": "बेसल गैन्ग्लिया (Basal Ganglia) क्या करता है?",
    "optionsEn": [
      "Sperm",
      "Egg",
      "Ruptured follicle",
      "Endometrium"
    ],
    "optionsHi": [
      "श्वसन नियंत्रण",
      "गति के समन्वय और नियंत्रण में मदद",
      "दृष्टि",
      "श्रवण"
    ],
    "correctAnswer": 2,
    "explanationEn": "After ovulation, the ruptured follicle becomes the corpus luteum, which secretes progesterone.",
    "explanationHi": "बेसल गैन्ग्लिया गति की शुरुआत, समन्वय और नियंत्रण में महत्वपूर्ण भूमिका निभाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-271",
    "questionEn": "The myometrium is the:",
    "questionHi": "लिम्बिक सिस्टम (Limbic System) क्या करता है?",
    "optionsEn": [
      "Inner lining of uterus",
      "Muscle layer of uterus",
      "Outer covering of uterus",
      "Neck of uterus"
    ],
    "optionsHi": [
      "गति नियंत्रण",
      "भावनाओं और स्मृति का नियंत्रण",
      "श्वसन",
      "पाचन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Myometrium is the thick smooth muscle layer of the uterus that contracts during labor.",
    "explanationHi": "लिम्बिक सिस्टम भावनाओं, व्यवहार और दीर्घकालिक स्मृति में शामिल है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-272",
    "questionEn": "The Graafian follicle is:",
    "questionHi": "हिप्पोकैम्पस (Hippocampus) क्या करता है?",
    "optionsEn": [
      "An immature follicle",
      "A mature follicle ready to ovulate",
      "Part of the placenta",
      "A hormone"
    ],
    "optionsHi": [
      "गति",
      "स्मृति निर्माण (Memory Formation)",
      "दृष्टि",
      "श्रवण"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Graafian (mature) follicle contains a fully developed egg ready for ovulation.",
    "explanationHi": "हिप्पोकैम्पस नई यादों को बनाने और संग्रहित करने में महत्वपूर्ण है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-273",
    "questionEn": "Implantation normally occurs in the:",
    "questionHi": "एमिग्डाला (Amygdala) क्या करता है?",
    "optionsEn": [
      "Fallopian tube",
      "Uterine wall",
      "Ovary",
      "Cervix"
    ],
    "optionsHi": [
      "गति",
      "भय और भावनात्मक प्रतिक्रियाएं",
      "दृष्टि",
      "श्रवण"
    ],
    "correctAnswer": 1,
    "explanationEn": "The fertilized egg normally implants in the endometrium (uterine wall). Ectopic implantation elsewhere is dangerous.",
    "explanationHi": "एमिग्डाला भय, चिंता और भावनात्मक प्रतिक्रियाओं में महत्वपूर्ण भूमिका निभाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-274",
    "questionEn": "The labia majora are homologous to the male:",
    "questionHi": "पिट्यूटरी ग्रंथि (Pituitary Gland) कहां स्थित है?",
    "optionsEn": [
      "Penis",
      "Scrotum",
      "Prostate",
      "Testes"
    ],
    "optionsHi": [
      "गर्दन में",
      "सेला टर्सिका में खोपड़ी के आधार पर",
      "छाती में",
      "पेट में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Labia majora and scrotum develop from the same embryonic tissue (labioscrotal swellings).",
    "explanationHi": "पिट्यूटरी ग्रंथि खोपड़ी के आधार में सेला टर्सिका नामक गुहा में स्थित है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-275",
    "questionEn": "The Bartholin's glands are located:",
    "questionHi": "पीनियल ग्रंथि (Pineal Gland) क्या बनाती है?",
    "optionsEn": [
      "In the ovary",
      "Near vaginal opening",
      "In the cervix",
      "In the uterus"
    ],
    "optionsHi": [
      "इंसुलिन",
      "मेलाटोनिन",
      "थायरॉक्सिन",
      "कोर्टिसोल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Bartholin's glands are on either side of the vaginal opening, secreting mucus for lubrication.",
    "explanationHi": "पीनियल ग्रंथि मेलाटोनिन बनाती है जो नींद-जागने के चक्र को नियंत्रित करती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-276",
    "questionEn": "The stratum corneum is the:",
    "questionHi": "ड्यूरा मेटर (Dura Mater) क्या है?",
    "optionsEn": [
      "Deepest layer of epidermis",
      "Outermost layer of epidermis",
      "Only layer of dermis",
      "Subcutaneous layer"
    ],
    "optionsHi": [
      "मस्तिष्क की सबसे भीतरी झिल्ली",
      "मस्तिष्क की सबसे बाहरी और मजबूत झिल्ली",
      "मध्य झिल्ली",
      "रक्त वाहिका"
    ],
    "correctAnswer": 1,
    "explanationEn": "The stratum corneum is the outer layer of dead, keratinized cells that provides protection.",
    "explanationHi": "ड्यूरा मेटर मेनिन्जेस की सबसे बाहरी, मोटी और मजबूत परत है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-277",
    "questionEn": "Keratin provides the skin with:",
    "questionHi": "पिया मेटर (Pia Mater) क्या है?",
    "optionsEn": [
      "Color",
      "Waterproofing",
      "Sensation",
      "Blood supply"
    ],
    "optionsHi": [
      "सबसे बाहरी झिल्ली",
      "सबसे भीतरी झिल्ली जो मस्तिष्क से चिपकी होती है",
      "मध्य झिल्ली",
      "हड्डी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Keratin is a protein that makes skin waterproof and resistant to abrasion.",
    "explanationHi": "पिया मेटर सबसे भीतरी, पतली झिल्ली है जो मस्तिष्क और मेरुरज्जु की सतह से सीधे चिपकी होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-278",
    "questionEn": "Merkel cells in the epidermis are responsible for:",
    "questionHi": "सबअरैक्नॉयड स्पेस में क्या होता है?",
    "optionsEn": [
      "Pigment production",
      "Touch sensation",
      "Immune function",
      "Keratin production"
    ],
    "optionsHi": [
      "हवा",
      "CSF (मस्तिष्कमेरु द्रव)",
      "रक्त",
      "वसा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Merkel cells are mechanoreceptors in the epidermis that detect light touch and texture.",
    "explanationHi": "सबअरैक्नॉयड स्पेस अरैक्नॉयड और पिया मेटर के बीच है जहां CSF होता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-279",
    "questionEn": "Eccrine sweat glands are found:",
    "questionHi": "मेरुरज्जु कहां समाप्त होती है?",
    "optionsEn": [
      "Only in armpits",
      "All over the body",
      "Only on palms",
      "Only on face"
    ],
    "optionsHi": [
      "T12 पर",
      "L1-L2 पर (कोनस मेडुलारिस)",
      "S5 पर",
      "C7 पर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Eccrine glands are distributed throughout the body (most dense on palms, soles) and produce watery sweat for cooling.",
    "explanationHi": "मेरुरज्जु वयस्कों में L1-L2 स्तर पर कोनस मेडुलारिस के रूप में समाप्त होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-280",
    "questionEn": "Apocrine sweat glands are found mainly in:",
    "questionHi": "कॉडा इक्विना (Cauda Equina) क्या है?",
    "optionsEn": [
      "All over body",
      "Axilla and groin",
      "Only on face",
      "Only on hands"
    ],
    "optionsHi": [
      "मस्तिष्क का भाग",
      "L1-L2 के नीचे मेरुरज्जु तंत्रिकाओं का बंडल",
      "एक तंत्रिका",
      "एक पेशी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Apocrine glands are in axillae (armpits), groin, and areolae. They produce thicker secretions associated with body odor.",
    "explanationHi": "कॉडा इक्विना (घोड़े की पूंछ) मेरुरज्जु के अंत के नीचे लटकती मेरुरज्जु तंत्रिकाओं का बंडल है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-281",
    "questionEn": "The nail matrix is where:",
    "questionHi": "रिफ्लेक्स आर्क (Reflex Arc) में कितने न्यूरॉन होते हैं?",
    "optionsEn": [
      "Nails attach to skin",
      "Nail growth occurs",
      "Cuticle forms",
      "Nails get color"
    ],
    "optionsHi": [
      "केवल 1",
      "आमतौर पर 2-3",
      "10-20",
      "100 से अधिक"
    ],
    "correctAnswer": 1,
    "explanationEn": "The nail matrix (under proximal nail fold) contains dividing cells that produce the nail plate.",
    "explanationHi": "सरल रिफ्लेक्स आर्क में संवेदी न्यूरॉन, इंटरन्यूरॉन (वैकल्पिक) और मोटर न्यूरॉन होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-282",
    "questionEn": "The sclera is the:",
    "questionHi": "सायटिक तंत्रिका (Sciatic Nerve) शरीर की कौन सी तंत्रिका है?",
    "optionsEn": [
      "Clear front of eye",
      "Colored part of eye",
      "White of the eye",
      "Light-sensitive layer"
    ],
    "optionsHi": [
      "सबसे छोटी",
      "सबसे लंबी और मोटी",
      "केवल संवेदी",
      "केवल मोटर"
    ],
    "correctAnswer": 2,
    "explanationEn": "The sclera is the tough, white outer layer of the eyeball that protects and maintains eye shape.",
    "explanationHi": "सायटिक तंत्रिका शरीर की सबसे लंबी और मोटी तंत्रिका है जो पीठ से पैर तक जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-283",
    "questionEn": "The lens focuses light by:",
    "questionHi": "ब्रेकियल प्लेक्सस (Brachial Plexus) कहां से तंत्रिकाएं निकलती हैं?",
    "optionsEn": [
      "Changing shape",
      "Changing color",
      "Moving forward and back",
      "Dilating and constricting"
    ],
    "optionsHi": [
      "कटि क्षेत्र से",
      "ग्रीवा और ऊपरी वक्ष क्षेत्र (C5-T1) से",
      "त्रिक क्षेत्र से",
      "वक्ष क्षेत्र से"
    ],
    "correctAnswer": 0,
    "explanationEn": "The lens changes shape (accommodation) - becoming rounder for near vision, flatter for far vision.",
    "explanationHi": "ब्रेकियल प्लेक्सस C5-T1 मेरुरज्जु तंत्रिकाओं से बनता है और ऊपरी अंग को तंत्रिकाएं देता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-284",
    "questionEn": "The fovea is the area of:",
    "questionHi": "लम्बर प्लेक्सस (Lumbar Plexus) निचले अंग के किस भाग को तंत्रिकाएं देता है?",
    "optionsEn": [
      "Peripheral vision",
      "Sharpest vision",
      "Night vision",
      "Color blindness"
    ],
    "optionsHi": [
      "पैर",
      "जांघ का अग्र भाग",
      "पिंडली का पिछला भाग",
      "नितंब"
    ],
    "correctAnswer": 1,
    "explanationEn": "The fovea centralis in the macula has the highest concentration of cones for sharp central vision.",
    "explanationHi": "लम्बर प्लेक्सस (L1-L4) से निकलने वाली तंत्रिकाएं मुख्यतः जांघ के अग्र भाग को जाती हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-285",
    "questionEn": "The ossicles of the middle ear are:",
    "questionHi": "सैक्रल प्लेक्सस (Sacral Plexus) से कौन सी प्रमुख तंत्रिका निकलती है?",
    "optionsEn": [
      "Cochlea, vestibule, semicircular canals",
      "Malleus, incus, stapes",
      "Pinna, canal, drum",
      "Oval window, round window, eustachian tube"
    ],
    "optionsHi": [
      "फीमोरल तंत्रिका",
      "सायटिक तंत्रिका",
      "रेडियल तंत्रिका",
      "मीडियन तंत्रिका"
    ],
    "correctAnswer": 1,
    "explanationEn": "The three ossicles (malleus/hammer, incus/anvil, stapes/stirrup) transmit sound from eardrum to inner ear.",
    "explanationHi": "सैक्रल प्लेक्सस से सायटिक तंत्रिका निकलती है जो निचले अंग के पिछले भाग को जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-286",
    "questionEn": "Describe the structure of a synovial joint and name its components.",
    "questionHi": "रीनल कॉर्पसकल (Renal Corpuscle) में क्या होता है?",
    "optionsEn": [],
    "optionsHi": [
      "मूत्र संग्रहण",
      "ग्लोमेरुलस और बोमन कैप्सूल",
      "मूत्र उत्सर्जन",
      "हार्मोन उत्पादन"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "रीनल कॉर्पसकल नेफ्रॉन का भाग है जिसमें ग्लोमेरुलस और बोमन कैप्सूल होते हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-287",
    "questionEn": "Describe the proper landmarks for locating the ventrogluteal injection site.",
    "questionHi": "प्रॉक्सिमल कनवोल्यूटेड ट्यूब्यूल (PCT) का मुख्य कार्य क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "निस्पंदन",
      "पुनर्अवशोषण (Reabsorption)",
      "स्राव",
      "उत्सर्जन"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "PCT में अधिकांश पुनर्अवशोषण होता है - ग्लूकोज, अमीनो एसिड, सोडियम, पानी आदि।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-288",
    "questionEn": "List the differences between arteries and veins.",
    "questionHi": "हेनले का लूप (Loop of Henle) क्या करता है?",
    "optionsEn": [],
    "optionsHi": [
      "निस्पंदन",
      "मूत्र को सांद्र/तनु करने में मदद",
      "भंडारण",
      "उत्सर्जन"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "हेनले का लूप काउंटरकरेंट मेकैनिज्म द्वारा मूत्र की सांद्रता निर्धारित करने में मदद करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-289",
    "questionEn": "Explain why aspirated objects tend to enter the right lung more frequently.",
    "questionHi": "कलेक्टिंग डक्ट (Collecting Duct) में क्या होता है?",
    "optionsEn": [],
    "optionsHi": [
      "निस्पंदन",
      "ADH के नियंत्रण में जल पुनर्अवशोषण",
      "रक्त बनना",
      "हार्मोन उत्पादन"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "कलेक्टिंग डक्ट में ADH (एंटीडाइयूरेटिक हार्मोन) जल पुनर्अवशोषण को नियंत्रित करता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-290",
    "questionEn": "Name the four layers of the digestive tract wall from innermost to outermost.",
    "questionHi": "मूत्राशय की दीवार में कौन सी पेशी है?",
    "optionsEn": [],
    "optionsHi": [
      "कंकाल पेशी",
      "डिट्रूसर पेशी (चिकनी)",
      "हृदय पेशी",
      "कोई पेशी नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "मूत्राशय की दीवार में डिट्रूसर चिकनी पेशी है जो मूत्र त्याग के समय संकुचित होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-291",
    "questionEn": "List the 12 cranial nerves in order and their primary functions.",
    "questionHi": "इंटरनल यूरेथ्रल स्फिंक्टर किस प्रकार की पेशी है?",
    "optionsEn": [],
    "optionsHi": [
      "ऐच्छिक कंकाल",
      "अनैच्छिक चिकनी पेशी",
      "हृदय पेशी",
      "मिश्रित"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "इंटरनल यूरेथ्रल स्फिंक्टर चिकनी पेशी है जो अनैच्छिक नियंत्रण में है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-292",
    "questionEn": "Trace the path of urine from its formation to excretion.",
    "questionHi": "एक्सटरनल यूरेथ्रल स्फिंक्टर किस प्रकार की पेशी है?",
    "optionsEn": [],
    "optionsHi": [
      "चिकनी पेशी",
      "ऐच्छिक कंकाल पेशी",
      "हृदय पेशी",
      "अनैच्छिक"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "एक्सटरनल यूरेथ्रल स्फिंक्टर कंकाल पेशी है जो ऐच्छिक नियंत्रण में है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-293",
    "questionEn": "Describe the structure and function of the placenta.",
    "questionHi": "सेमिनिफेरस ट्यूब्यूल्स (Seminiferous Tubules) कहां हैं?",
    "optionsEn": [],
    "optionsHi": [
      "अधिवृषण में",
      "वृषण में",
      "प्रोस्टेट में",
      "मूत्राशय में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "सेमिनिफेरस ट्यूब्यूल्स वृषण में होती हैं जहां शुक्राणु बनते हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-294",
    "questionEn": "Describe the three stages of wound healing.",
    "questionHi": "सर्टोली कोशिकाएं (Sertoli Cells) क्या करती हैं?",
    "optionsEn": [],
    "optionsHi": [
      "शुक्राणु बनाती हैं",
      "शुक्राणु निर्माण में सहायता और पोषण",
      "टेस्टोस्टेरोन बनाती हैं",
      "मूत्र बनाती हैं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "सर्टोली कोशिकाएं विकासशील शुक्राणुओं को सहारा और पोषण देती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-295",
    "questionEn": "List the muscles that form the quadriceps and hamstring groups and their actions.",
    "questionHi": "लेडिग कोशिकाएं (Leydig Cells) क्या बनाती हैं?",
    "optionsEn": [],
    "optionsHi": [
      "शुक्राणु",
      "टेस्टोस्टेरोन",
      "एस्ट्रोजन",
      "प्रोजेस्टेरोन"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "लेडिग (इंटरस्टिशियल) कोशिकाएं वृषण में टेस्टोस्टेरोन हार्मोन बनाती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-296",
    "questionEn": "A patient with diabetes needs insulin injection education. Explain the anatomical considerations for subcutaneous injection sites and why rotation is important.",
    "questionHi": "ग्राफियन फॉलिकल (Graafian Follicle) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "शुक्राणु",
      "परिपक्व अंडाणु युक्त फॉलिकल",
      "गर्भाशय का भाग",
      "डिंबवाहिनी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "ग्राफियन फॉलिकल अंडाशय में परिपक्व फॉलिकल है जिसमें ओव्यूलेशन के लिए तैयार अंडाणु होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-297",
    "questionEn": "A patient cannot extend their wrist or fingers after an arm injury. Based on anatomical knowledge, which nerve is likely damaged and where might the injury be?",
    "questionHi": "कॉर्पस ल्यूटियम (Corpus Luteum) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "अंडाणु",
      "ओव्यूलेशन के बाद फॉलिकल से बनी संरचना",
      "शुक्राणु",
      "गर्भाशय"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "कॉर्पस ल्यूटियम ओव्यूलेशन के बाद फॉलिकल से बनता है और प्रोजेस्टेरोन बनाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-298",
    "questionEn": "An elderly patient has swollen ankles (edema). Using your knowledge of venous anatomy and physiology, explain possible causes and the anatomical basis.",
    "questionHi": "फिम्ब्रिए (Fimbriae) क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "गर्भाशय का भाग",
      "डिंबवाहिनी के सिरे पर उंगली जैसे प्रक्षेप",
      "अंडाशय",
      "योनि"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "फिम्ब्रिए डिंबवाहिनी के अंडाशय के पास वाले सिरे पर उंगली जैसे प्रक्षेप हैं जो अंडाणु को पकड़ते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-299",
    "questionEn": "A patient presents with sudden chest pain and difficulty breathing after a chest injury. Using your anatomical knowledge, explain what a pneumothorax is and which structures are affected.",
    "questionHi": "स्ट्रेटम बेसेल (Stratum Basale) त्वचा की कौन सी परत है?",
    "optionsEn": [],
    "optionsHi": [
      "सबसे बाहरी",
      "एपिडर्मिस की सबसे गहरी परत",
      "डर्मिस की परत",
      "हाइपोडर्मिस"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "स्ट्रेटम बेसेल एपिडर्मिस की सबसे गहरी परत है जहां नई त्वचा कोशिकाएं बनती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-300",
    "questionEn": "A patient has sudden severe pain radiating from right upper quadrant to right shoulder. Using anatomical knowledge, explain this referred pain pattern and likely diagnosis.",
    "questionHi": "केराटिन (Keratin) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "वर्णक",
      "त्वचा, बाल, नाखून में कठोर प्रोटीन",
      "हार्मोन",
      "एंजाइम"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "केराटिन एक कठोर प्रोटीन है जो त्वचा की बाहरी परत, बाल और नाखूनों में पाया जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-301",
    "questionEn": "The apex of the heart is located at which intercostal space?",
    "questionHi": "स्ट्रेटम कॉर्नियम (Stratum Corneum) क्या है?",
    "optionsEn": [
      "3rd intercostal space",
      "4th intercostal space",
      "5th intercostal space",
      "6th intercostal space"
    ],
    "optionsHi": [
      "एपिडर्मिस की सबसे गहरी परत",
      "एपिडर्मिस की सबसे बाहरी मृत कोशिकाओं की परत",
      "डर्मिस",
      "हाइपोडर्मिस"
    ],
    "correctAnswer": 2,
    "explanationEn": "The apex of the heart is located at the 5th intercostal space, mid-clavicular line on the left side.",
    "explanationHi": "स्ट्रेटम कॉर्नियम केराटिन युक्त मृत कोशिकाओं की सबसे बाहरी सुरक्षात्मक परत है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-302",
    "questionEn": "The chordae tendineae are attached to:",
    "questionHi": "हेयर फॉलिकल (Hair Follicle) कहां स्थित है?",
    "optionsEn": [
      "Semilunar valves",
      "AV valves",
      "Coronary arteries",
      "Pericardium"
    ],
    "optionsHi": [
      "एपिडर्मिस में",
      "डर्मिस में",
      "हाइपोडर्मिस में",
      "रक्त में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chordae tendineae connect the cusps of AV valves (tricuspid and mitral) to papillary muscles, preventing valve prolapse.",
    "explanationHi": "हेयर फॉलिकल डर्मिस में स्थित होता है और बाल का उत्पादन करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-303",
    "questionEn": "The LAD coronary artery supplies which area of the heart?",
    "questionHi": "अरेक्टर पिली (Arrector Pili) क्या है?",
    "optionsEn": [
      "Right ventricle",
      "Anterior left ventricle and septum",
      "Posterior heart",
      "Right atrium"
    ],
    "optionsHi": [
      "स्वेद ग्रंथि",
      "बाल कूप से जुड़ी छोटी पेशी",
      "तैल ग्रंथि",
      "तंत्रिका"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Left Anterior Descending (LAD) artery supplies the anterior left ventricle and interventricular septum.",
    "explanationHi": "अरेक्टर पिली छोटी चिकनी पेशी है जो ठंड या भय में बालों को खड़ा करती है (रोंगटे)।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-304",
    "questionEn": "Korotkoff sounds are heard during:",
    "questionHi": "एक्राइन स्वेद ग्रंथियां (Eccrine Sweat Glands) कहां पाई जाती हैं?",
    "optionsEn": [
      "Heart auscultation",
      "Blood pressure measurement",
      "Lung examination",
      "Abdominal examination"
    ],
    "optionsHi": [
      "केवल बगल में",
      "पूरे शरीर में, विशेषकर हथेली, तलवे, माथे पर",
      "केवल जननांगों में",
      "केवल खोपड़ी में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Korotkoff sounds are turbulent flow sounds heard over the brachial artery during BP measurement.",
    "explanationHi": "एक्राइन ग्रंथियां पूरे शरीर में होती हैं और मुख्यतः तापमान नियंत्रण के लिए पसीना बनाती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-305",
    "questionEn": "The great saphenous vein is found in the:",
    "questionHi": "एपोक्राइन स्वेद ग्रंथियां (Apocrine Sweat Glands) कहां पाई जाती हैं?",
    "optionsEn": [
      "Arm",
      "Neck",
      "Leg (medial)",
      "Abdomen"
    ],
    "optionsHi": [
      "पूरे शरीर में",
      "बगल, जननांग क्षेत्र में",
      "केवल हथेली में",
      "केवल माथे पर"
    ],
    "correctAnswer": 2,
    "explanationEn": "The great saphenous vein is the longest vein, running along the medial leg from ankle to groin.",
    "explanationHi": "एपोक्राइन ग्रंथियां बगल और जननांग क्षेत्र में होती हैं और यौवन के बाद सक्रिय होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-306",
    "questionEn": "The median cubital vein is commonly used for:",
    "questionHi": "नाखून किससे बने होते हैं?",
    "optionsEn": [
      "Blood pressure measurement",
      "Venipuncture",
      "Arterial blood gas",
      "Central line placement"
    ],
    "optionsHi": [
      "कैल्शियम",
      "केराटिन",
      "कोलेजन",
      "इलास्टिन"
    ],
    "correctAnswer": 1,
    "explanationEn": "The median cubital vein in the cubital fossa is the preferred site for blood drawing (venipuncture).",
    "explanationHi": "नाखून कठोर केराटिन प्रोटीन से बने होते हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-307",
    "questionEn": "The S1 heart sound is produced by:",
    "questionHi": "नाखून का लुनुला (Lunula) क्या है?",
    "optionsEn": [
      "Semilunar valves closing",
      "AV valves closing",
      "Blood hitting ventricular walls",
      "Atrial contraction"
    ],
    "optionsHi": [
      "नाखून का सिरा",
      "नाखून के आधार पर अर्धचंद्राकार सफेद भाग",
      "नाखून की जड़",
      "क्यूटिकल"
    ],
    "correctAnswer": 1,
    "explanationEn": "S1 ('lub') is produced by closure of the AV valves (tricuspid and mitral) at the start of ventricular systole.",
    "explanationHi": "लुनुला नाखून के आधार पर दिखने वाला अर्धचंद्राकार सफेद क्षेत्र है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-308",
    "questionEn": "Normal stroke volume is approximately:",
    "questionHi": "कंजंक्टिवा (Conjunctiva) क्या है?",
    "optionsEn": [
      "30 mL",
      "50 mL",
      "70 mL",
      "100 mL"
    ],
    "optionsHi": [
      "आंख का लेंस",
      "आंख के सफेद भाग और पलकों के अंदर को ढकने वाली पारदर्शी झिल्ली",
      "रेटिना",
      "कॉर्निया"
    ],
    "correctAnswer": 2,
    "explanationEn": "Normal stroke volume is about 70 mL per beat, giving cardiac output of ~5 L/min at 70 bpm.",
    "explanationHi": "कंजंक्टिवा स्क्लेरा और पलकों के अंदरूनी भाग को ढकने वाली पतली झिल्ली है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-309",
    "questionEn": "The bundle of His is located in the:",
    "questionHi": "स्क्लेरा (Sclera) क्या है?",
    "optionsEn": [
      "Right atrium",
      "Interventricular septum",
      "Left ventricle wall",
      "Pericardium"
    ],
    "optionsHi": [
      "आंख का रंगीन भाग",
      "आंख का सफेद बाहरी आवरण",
      "रेटिना",
      "लेंस"
    ],
    "correctAnswer": 1,
    "explanationEn": "The bundle of His runs through the interventricular septum, dividing into left and right bundle branches.",
    "explanationHi": "स्क्लेरा आंख का सफेद, कठोर बाहरी आवरण है जो आंख को आकार और सुरक्षा देता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-310",
    "questionEn": "The tunica media of an artery contains mainly:",
    "questionHi": "कोरॉयड (Choroid) आंख की कौन सी परत है?",
    "optionsEn": [
      "Endothelium",
      "Smooth muscle",
      "Connective tissue",
      "Valves"
    ],
    "optionsHi": [
      "बाहरी परत",
      "मध्य रक्त वाहिका युक्त परत",
      "आंतरिक परत",
      "कोई परत नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "The tunica media is the middle layer containing smooth muscle and elastic tissue for vasoconstriction/dilation.",
    "explanationHi": "कोरॉयड आंख की मध्य परत है जिसमें रक्त वाहिकाएं होती हैं जो रेटिना को पोषण देती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-311",
    "questionEn": "Capillaries have walls that are:",
    "questionHi": "पुपिल (Pupil) क्या है?",
    "optionsEn": [
      "Three layers thick",
      "Two layers thick",
      "One cell thick",
      "Made of muscle"
    ],
    "optionsHi": [
      "आंख का रंगीन भाग",
      "आइरिस के बीच का छिद्र",
      "लेंस",
      "रेटिना"
    ],
    "correctAnswer": 2,
    "explanationEn": "Capillary walls are one endothelial cell thick, allowing exchange of gases and nutrients by diffusion.",
    "explanationHi": "पुपिल (पुतली) आइरिस के केंद्र में छिद्र है जिससे प्रकाश आंख में प्रवेश करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-312",
    "questionEn": "The foramen ovale in fetal circulation connects:",
    "questionHi": "आंख का लेंस क्या करता है?",
    "optionsEn": [
      "Right and left ventricles",
      "Right and left atria",
      "Aorta and pulmonary artery",
      "Umbilical vein and IVC"
    ],
    "optionsHi": [
      "रंग देखता है",
      "प्रकाश को रेटिना पर केंद्रित करता है",
      "आंख को आकार देता है",
      "आंसू बनाता है"
    ],
    "correctAnswer": 1,
    "explanationEn": "The foramen ovale is an opening between the atria that shunts blood from right to left, bypassing the lungs.",
    "explanationHi": "लेंस प्रकाश किरणों को मोड़कर रेटिना पर स्पष्ट छवि बनाता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-313",
    "questionEn": "The internal jugular vein drains blood from the:",
    "questionHi": "सिलिअरी बॉडी (Ciliary Body) क्या करती है?",
    "optionsEn": [
      "Arms",
      "Legs",
      "Brain and head",
      "Abdomen"
    ],
    "optionsHi": [
      "आंसू बनाती है",
      "लेंस का आकार बदलती है और एक्वीअस ह्यूमर बनाती है",
      "रंग देखती है",
      "प्रकाश महसूस करती है"
    ],
    "correctAnswer": 2,
    "explanationEn": "Internal jugular veins drain blood from the brain and head, running in the neck alongside the carotid arteries.",
    "explanationHi": "सिलिअरी बॉडी लेंस से जुड़ी होती है और एक्वीअस ह्यूमर बनाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-314",
    "questionEn": "The celiac trunk supplies blood to:",
    "questionHi": "रॉड्स (Rods) और कोन्स (Cones) कहां होते हैं?",
    "optionsEn": [
      "Kidneys",
      "Stomach, liver, and spleen",
      "Small intestine",
      "Large intestine"
    ],
    "optionsHi": [
      "कॉर्निया में",
      "रेटिना में",
      "लेंस में",
      "आइरिस में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The celiac trunk branches from abdominal aorta and supplies stomach, liver, spleen, and part of duodenum.",
    "explanationHi": "रॉड्स और कोन्स रेटिना में प्रकाश संवेदी कोशिकाएं हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-315",
    "questionEn": "Cardiac tamponade is caused by:",
    "questionHi": "रॉड्स (Rods) किसके लिए जिम्मेदार हैं?",
    "optionsEn": [
      "Blocked coronary artery",
      "Excess fluid in pericardial sac",
      "Heart valve disease",
      "Arrhythmia"
    ],
    "optionsHi": [
      "रंग दृष्टि",
      "मंद प्रकाश में दृष्टि (रात्रि दृष्टि)",
      "तेज प्रकाश में दृष्टि",
      "विस्तृत दृष्टि"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cardiac tamponade occurs when fluid accumulates in the pericardial sac, compressing the heart and reducing output.",
    "explanationHi": "रॉड्स कम प्रकाश में देखने के लिए और परिधीय दृष्टि के लिए जिम्मेदार हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-316",
    "questionEn": "The respiratory system is divided into upper and lower tracts. The lower tract begins at the:",
    "questionHi": "कोन्स (Cones) किसके लिए जिम्मेदार हैं?",
    "optionsEn": [
      "Nose",
      "Pharynx",
      "Larynx",
      "Trachea"
    ],
    "optionsHi": [
      "रात्रि दृष्टि",
      "रंग दृष्टि और विस्तृत दृष्टि",
      "परिधीय दृष्टि",
      "गहराई की धारणा"
    ],
    "correctAnswer": 3,
    "explanationEn": "The lower respiratory tract includes trachea, bronchi, and lungs. Upper tract is nose, pharynx, and larynx.",
    "explanationHi": "कोन्स रंग देखने और तेज रोशनी में विस्तृत दृष्टि के लिए जिम्मेदार हैं।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-317",
    "questionEn": "The nasal septum is made of:",
    "questionHi": "फोविया (Fovea) क्या है?",
    "optionsEn": [
      "Bone only",
      "Cartilage only",
      "Bone and cartilage",
      "Muscle"
    ],
    "optionsHi": [
      "आंख का अंधा बिंदु",
      "रेटिना का केंद्र जहां सबसे तेज दृष्टि होती है",
      "लेंस का भाग",
      "कॉर्निया का भाग"
    ],
    "correctAnswer": 2,
    "explanationEn": "The nasal septum has a bony part (perpendicular plate of ethmoid, vomer) and cartilaginous part anteriorly.",
    "explanationHi": "फोविया रेटिना का केंद्रीय क्षेत्र है जहां कोन्स की सघनता अधिकतम होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-318",
    "questionEn": "The pharyngeal tonsil (adenoids) is located in the:",
    "questionHi": "ऑप्टिक डिस्क (Optic Disc) को अंधा बिंदु क्यों कहते हैं?",
    "optionsEn": [
      "Oropharynx",
      "Nasopharynx",
      "Laryngopharynx",
      "Larynx"
    ],
    "optionsHi": [
      "यहां रंग नहीं दिखता",
      "यहां रॉड्स या कोन्स नहीं होते",
      "यहां प्रकाश नहीं पहुंचता",
      "यहां लेंस होता है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adenoids are located in the nasopharynx on the posterior wall. Enlarged adenoids can obstruct breathing.",
    "explanationHi": "ऑप्टिक डिस्क पर प्रकाश संवेदी कोशिकाएं नहीं होतीं क्योंकि यहां ऑप्टिक तंत्रिका आंख छोड़ती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-319",
    "questionEn": "The Adam's apple is formed by the:",
    "questionHi": "विट्रीअस ह्यूमर (Vitreous Humor) क्या है?",
    "optionsEn": [
      "Cricoid cartilage",
      "Thyroid cartilage",
      "Epiglottis",
      "Arytenoid cartilage"
    ],
    "optionsHi": [
      "आंख के सामने का तरल",
      "लेंस के पीछे जेली जैसा पदार्थ",
      "आंसू",
      "रक्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "The thyroid cartilage is the largest laryngeal cartilage, its prominence forming the Adam's apple.",
    "explanationHi": "विट्रीअस ह्यूमर लेंस और रेटिना के बीच पारदर्शी जेली जैसा पदार्थ है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-320",
    "questionEn": "The cricothyroid membrane is located between:",
    "questionHi": "एक्वीअस ह्यूमर (Aqueous Humor) कहां होता है?",
    "optionsEn": [
      "Thyroid and cricoid cartilages",
      "Cricoid cartilage and trachea",
      "Epiglottis and thyroid cartilage",
      "Two arytenoid cartilages"
    ],
    "optionsHi": [
      "लेंस के पीछे",
      "कॉर्निया और लेंस के बीच",
      "रेटिना में",
      "ऑप्टिक तंत्रिका में"
    ],
    "correctAnswer": 0,
    "explanationEn": "The cricothyroid membrane between thyroid and cricoid cartilages is the site for emergency cricothyrotomy.",
    "explanationHi": "एक्वीअस ह्यूमर कॉर्निया और लेंस के बीच के कक्षों में पारदर्शी तरल है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-321",
    "questionEn": "The trachea bifurcates at the level of:",
    "questionHi": "लैक्रिमल ग्रंथि (Lacrimal Gland) क्या बनाती है?",
    "optionsEn": [
      "C7",
      "T2",
      "T4-T5",
      "T8"
    ],
    "optionsHi": [
      "बलगम",
      "आंसू",
      "पसीना",
      "तेल"
    ],
    "correctAnswer": 2,
    "explanationEn": "The trachea divides into right and left main bronchi at the carina, located at T4-T5 level.",
    "explanationHi": "लैक्रिमल ग्रंथि आंख के ऊपरी बाहरी कोने में स्थित है और आंसू बनाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-322",
    "questionEn": "The mucociliary escalator moves mucus:",
    "questionHi": "नासोलैक्रिमल डक्ट (Nasolacrimal Duct) क्या करती है?",
    "optionsEn": [
      "Downward to lungs",
      "Upward to pharynx",
      "Sideways to sinuses",
      "Into the bloodstream"
    ],
    "optionsHi": [
      "आंसू बनाती है",
      "आंसू को आंख से नाक में ले जाती है",
      "बलगम बनाती है",
      "प्रकाश केंद्रित करती है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cilia beat in coordinated waves to move mucus and trapped particles upward to the pharynx for swallowing or expulsion.",
    "explanationHi": "नासोलैक्रिमल डक्ट आंसू को आंख से नाक गुहा में निकालती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-323",
    "questionEn": "The horizontal fissure is found only in the:",
    "questionHi": "पिन्ना (Pinna) या ऑरिकल (Auricle) क्या है?",
    "optionsEn": [
      "Left lung",
      "Right lung",
      "Both lungs",
      "Neither lung"
    ],
    "optionsHi": [
      "मध्य कान",
      "बाहरी कान का दृश्य भाग",
      "आंतरिक कान",
      "कान का परदा"
    ],
    "correctAnswer": 1,
    "explanationEn": "The horizontal fissure separates the upper and middle lobes of the right lung. Left lung has only oblique fissure.",
    "explanationHi": "पिन्ना बाहरी कान का दृश्य उपास्थि युक्त भाग है जो ध्वनि एकत्र करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-324",
    "questionEn": "The total surface area of all alveoli is approximately:",
    "questionHi": "बाहरी श्रवण नाल (External Auditory Canal) क्या करती है?",
    "optionsEn": [
      "10 m²",
      "30 m²",
      "70-100 m²",
      "200 m²"
    ],
    "optionsHi": [
      "ध्वनि बनाती है",
      "ध्वनि तरंगों को कान के परदे तक ले जाती है",
      "संतुलन बनाती है",
      "आवाज बढ़ाती है"
    ],
    "correctAnswer": 2,
    "explanationEn": "The combined alveolar surface area is about 70-100 m² (size of a tennis court), optimized for gas exchange.",
    "explanationHi": "बाहरी श्रवण नाल पिन्ना से टिम्पेनिक मेम्ब्रेन तक ध्वनि को ले जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-325",
    "questionEn": "Surfactant deficiency causes:",
    "questionHi": "टिम्पेनिक मेम्ब्रेन (Tympanic Membrane) क्या है?",
    "optionsEn": [
      "Asthma",
      "Respiratory distress syndrome",
      "Pneumonia",
      "Bronchitis"
    ],
    "optionsHi": [
      "आंतरिक कान की झिल्ली",
      "कान का परदा (Eardrum)",
      "मध्य कान की हड्डी",
      "संतुलन अंग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Surfactant deficiency in premature infants causes RDS due to alveolar collapse from high surface tension.",
    "explanationHi": "टिम्पेनिक मेम्ब्रेन (कान का परदा) ध्वनि तरंगों से कंपित होकर मध्य कान को संकेत भेजती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-326",
    "questionEn": "During quiet inspiration, the diaphragm moves:",
    "questionHi": "मध्य कान की तीन छोटी हड्डियां कौन सी हैं?",
    "optionsEn": [
      "Upward",
      "Downward",
      "Laterally",
      "Does not move"
    ],
    "optionsHi": [
      "हैमर, एनविल, स्टिरप",
      "मैलियस, इंकस, स्टेपीस",
      "दोनों सही हैं",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "The diaphragm contracts and moves downward during inspiration, increasing thoracic volume.",
    "explanationHi": "मध्य कान में तीन अस्थिकाएं हैं: मैलियस (हैमर), इंकस (एनविल), स्टेपीस (स्टिरप)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-327",
    "questionEn": "Quiet expiration is normally:",
    "questionHi": "यूस्टेशियन ट्यूब (Eustachian Tube) क्या करती है?",
    "optionsEn": [
      "Active process",
      "Passive process",
      "Both active and passive",
      "Requires muscle contraction"
    ],
    "optionsHi": [
      "सुनने में मदद",
      "मध्य कान और ग्रसनी को जोड़कर दबाव संतुलित करती है",
      "संतुलन",
      "ध्वनि बढ़ाती है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Quiet expiration is passive, relying on elastic recoil of lungs. Forced expiration requires muscle contraction.",
    "explanationHi": "यूस्टेशियन ट्यूब मध्य कान और नासाग्रसनी को जोड़ती है और दबाव को संतुलित करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-328",
    "questionEn": "Intrapleural pressure is normally:",
    "questionHi": "ओवल विंडो (Oval Window) कहां है?",
    "optionsEn": [
      "Positive",
      "Negative",
      "Zero",
      "Equal to atmospheric"
    ],
    "optionsHi": [
      "बाहरी कान में",
      "मध्य और आंतरिक कान के बीच",
      "पिन्ना में",
      "कान के परदे में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Intrapleural pressure is negative (subatmospheric), which keeps the lungs expanded against the chest wall.",
    "explanationHi": "ओवल विंडो मध्य और आंतरिक कान के बीच झिल्ली से ढका छिद्र है जहां स्टेपीस जुड़ता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-329",
    "questionEn": "The primary chemical stimulus for breathing is:",
    "questionHi": "वेस्टिबुल (Vestibule) आंतरिक कान में क्या करता है?",
    "optionsEn": [
      "Oxygen level",
      "Carbon dioxide level",
      "pH only",
      "Nitrogen level"
    ],
    "optionsHi": [
      "सुनने में मदद",
      "रैखिक गति और गुरुत्वाकर्षण की जानकारी",
      "केवल घूर्णन",
      "ध्वनि बढ़ाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "CO2 (via H+ ions in CSF) is the primary stimulus. O2 becomes important only when severely low.",
    "explanationHi": "वेस्टिबुल में यूट्रिकल और सैक्यूल होते हैं जो रैखिक त्वरण और स्थिति की जानकारी देते हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-330",
    "questionEn": "Normal tidal volume is approximately:",
    "questionHi": "अर्धवृत्ताकार नलिकाएं (Semicircular Canals) किसका पता लगाती हैं?",
    "optionsEn": [
      "150 mL",
      "500 mL",
      "1000 mL",
      "2000 mL"
    ],
    "optionsHi": [
      "ध्वनि",
      "घूर्णन गति (Rotational Movement)",
      "रैखिक गति",
      "गुरुत्वाकर्षण"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tidal volume (normal breath at rest) is about 500 mL in adults.",
    "explanationHi": "तीन अर्धवृत्ताकार नलिकाएं तीन तलों में सिर की घूर्णन गति का पता लगाती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-331",
    "questionEn": "The phrenic nerve innervates the:",
    "questionHi": "वेस्टिबुलोकोक्लियर तंत्रिका (Vestibulocochlear Nerve) कौन सी कपाल तंत्रिका है?",
    "optionsEn": [
      "Intercostal muscles",
      "Diaphragm",
      "Larynx",
      "Pharynx"
    ],
    "optionsHi": [
      "VII",
      "VIII",
      "IX",
      "X"
    ],
    "correctAnswer": 1,
    "explanationEn": "The phrenic nerve (C3-C5) provides motor innervation to the diaphragm. 'C3, 4, 5 keeps the diaphragm alive.'",
    "explanationHi": "वेस्टिबुलोकोक्लियर तंत्रिका (CN VIII) श्रवण और संतुलन की जानकारी ले जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-332",
    "questionEn": "Peripheral chemoreceptors are located in the:",
    "questionHi": "ऑर्गन ऑफ कॉर्टी (Organ of Corti) कहां है?",
    "optionsEn": [
      "Medulla only",
      "Carotid and aortic bodies",
      "Lungs",
      "Trachea"
    ],
    "optionsHi": [
      "मध्य कान में",
      "कोक्लिया में",
      "वेस्टिबुल में",
      "बाहरी कान में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Peripheral chemoreceptors in carotid and aortic bodies detect low O2, high CO2, and low pH.",
    "explanationHi": "ऑर्गन ऑफ कॉर्टी कोक्लिया में श्रवण का वास्तविक संवेदी अंग है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-333",
    "questionEn": "Air contains approximately what percentage of oxygen?",
    "questionHi": "थायरॉयड ग्रंथि (Thyroid Gland) कहां स्थित है?",
    "optionsEn": [
      "10%",
      "21%",
      "50%",
      "78%"
    ],
    "optionsHi": [
      "छाती में",
      "गर्दन में श्वासनली के सामने",
      "पेट में",
      "सिर में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Atmospheric air is about 21% oxygen, 78% nitrogen, and 0.04% carbon dioxide.",
    "explanationHi": "थायरॉयड ग्रंथि गर्दन में श्वासनली के सामने तितली के आकार की ग्रंथि है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-334",
    "questionEn": "Most oxygen in blood is transported:",
    "questionHi": "पैराथायरॉयड ग्रंथियां (Parathyroid Glands) कहां हैं?",
    "optionsEn": [
      "Dissolved in plasma",
      "Bound to hemoglobin",
      "As bicarbonate",
      "In white blood cells"
    ],
    "optionsHi": [
      "छाती में",
      "थायरॉयड ग्रंथि के पीछे",
      "पेट में",
      "सिर में"
    ],
    "correctAnswer": 1,
    "explanationEn": "About 98.5% of oxygen is transported bound to hemoglobin as oxyhemoglobin.",
    "explanationHi": "चार छोटी पैराथायरॉयड ग्रंथियां थायरॉयड ग्रंथि के पीछे स्थित हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-335",
    "questionEn": "The residual volume is:",
    "questionHi": "एड्रेनल ग्रंथियां (Adrenal Glands) कहां स्थित हैं?",
    "optionsEn": [
      "Air remaining after normal expiration",
      "Air remaining after maximum expiration",
      "Maximum air that can be inspired",
      "Air in dead space"
    ],
    "optionsHi": [
      "गर्दन में",
      "वृक्क के ऊपर",
      "यकृत में",
      "मस्तिष्क में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Residual volume (~1200 mL) is air that remains in lungs after maximum forced expiration, keeping alveoli open.",
    "explanationHi": "एड्रेनल (सुप्रारीनल) ग्रंथियां प्रत्येक वृक्क के ऊपर स्थित हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-336",
    "questionEn": "The digestive tract is also called the:",
    "questionHi": "एड्रेनल कॉर्टेक्स (Adrenal Cortex) क्या बनाता है?",
    "optionsEn": [
      "Respiratory tract",
      "Alimentary canal",
      "Urinary tract",
      "Vascular system"
    ],
    "optionsHi": [
      "एड्रेनालिन",
      "कोर्टिसोल, एल्डोस्टेरोन, सेक्स हार्मोन",
      "इंसुलिन",
      "थायरॉक्सिन"
    ],
    "correctAnswer": 1,
    "explanationEn": "The alimentary canal (GI tract) is the continuous tube from mouth to anus.",
    "explanationHi": "एड्रेनल कॉर्टेक्स (बाहरी भाग) स्टेरॉयड हार्मोन बनाता है।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-337",
    "questionEn": "Salivary amylase begins digestion of:",
    "questionHi": "एड्रेनल मेडुला (Adrenal Medulla) क्या बनाता है?",
    "optionsEn": [
      "Proteins",
      "Fats",
      "Carbohydrates",
      "Vitamins"
    ],
    "optionsHi": [
      "कोर्टिसोल",
      "एड्रेनालिन (एपिनेफ्रिन) और नॉरएड्रेनालिन",
      "इंसुलिन",
      "थायरॉक्सिन"
    ],
    "correctAnswer": 2,
    "explanationEn": "Salivary amylase (ptyalin) begins starch digestion in the mouth.",
    "explanationHi": "एड्रेनल मेडुला (आंतरिक भाग) कैटेकोलामाइन (एड्रेनालिन, नॉरएड्रेनालिन) बनाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-338",
    "questionEn": "The parotid gland is located:",
    "questionHi": "थाइमस ग्रंथि (Thymus Gland) कहां स्थित है?",
    "optionsEn": [
      "Under the tongue",
      "Under the jaw",
      "Near the ear",
      "In the throat"
    ],
    "optionsHi": [
      "गर्दन में",
      "हृदय के सामने वक्ष में",
      "पेट में",
      "सिर में"
    ],
    "correctAnswer": 2,
    "explanationEn": "The parotid gland is the largest salivary gland, located anterior to the ear (parotid = 'near the ear').",
    "explanationHi": "थाइमस ग्रंथि ऊपरी वक्ष में उरोस्थि के पीछे स्थित है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-339",
    "questionEn": "The esophagus passes through the diaphragm at the:",
    "questionHi": "थाइमस ग्रंथि का क्या कार्य है?",
    "optionsEn": [
      "Caval opening",
      "Aortic hiatus",
      "Esophageal hiatus",
      "Foramen magnum"
    ],
    "optionsHi": [
      "इंसुलिन बनाना",
      "T-लिम्फोसाइट्स की परिपक्वता",
      "पाचन",
      "श्वसन"
    ],
    "correctAnswer": 2,
    "explanationEn": "The esophagus passes through the esophageal hiatus in the diaphragm at T10 level.",
    "explanationHi": "थाइमस T-लिम्फोसाइट्स (प्रतिरक्षा कोशिकाओं) की परिपक्वता में महत्वपूर्ण है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-340",
    "questionEn": "The rugae of the stomach:",
    "questionHi": "लिम्फ नोड्स (Lymph Nodes) का क्या कार्य है?",
    "optionsEn": [
      "Produce acid",
      "Allow expansion",
      "Absorb nutrients",
      "Produce mucus only"
    ],
    "optionsHi": [
      "रक्त बनाना",
      "लिम्फ को छानना और प्रतिरक्षा प्रतिक्रिया",
      "हार्मोन बनाना",
      "पाचन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rugae are folds in the stomach lining that flatten as the stomach expands with food.",
    "explanationHi": "लिम्फ नोड्स लिम्फ को छानते हैं और रोगाणुओं के विरुद्ध प्रतिरक्षा प्रतिक्रिया शुरू करते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-341",
    "questionEn": "Parietal cells in the stomach secrete:",
    "questionHi": "थोरैसिक डक्ट (Thoracic Duct) क्या है?",
    "optionsEn": [
      "Pepsinogen",
      "Hydrochloric acid",
      "Mucus",
      "Gastrin"
    ],
    "optionsHi": [
      "रक्त वाहिका",
      "शरीर की सबसे बड़ी लिम्फ वाहिका",
      "तंत्रिका",
      "पेशी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Parietal (oxyntic) cells secrete HCl and intrinsic factor. Chief cells secrete pepsinogen.",
    "explanationHi": "थोरैसिक डक्ट सबसे बड़ी लिम्फ वाहिका है जो लिम्फ को बाएं सबक्लेवियन शिरा में खाली करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-342",
    "questionEn": "The ligament of Treitz marks the junction between:",
    "questionHi": "फ्रेनिक तंत्रिका (Phrenic Nerve) क्या नियंत्रित करती है?",
    "optionsEn": [
      "Esophagus and stomach",
      "Stomach and duodenum",
      "Duodenum and jejunum",
      "Ileum and cecum"
    ],
    "optionsHi": [
      "हृदय",
      "डायफ्राम",
      "आमाशय",
      "आंतें"
    ],
    "correctAnswer": 2,
    "explanationEn": "The ligament of Treitz (suspensory muscle of duodenum) marks the duodenojejunal junction.",
    "explanationHi": "फ्रेनिक तंत्रिका (C3-C5 से) डायफ्राम को नियंत्रित करती है जो श्वास के लिए आवश्यक है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-343",
    "questionEn": "Peyer's patches are found in the:",
    "questionHi": "रेडियल तंत्रिका (Radial Nerve) ऊपरी अंग में क्या नियंत्रित करती है?",
    "optionsEn": [
      "Stomach",
      "Duodenum",
      "Ileum",
      "Colon"
    ],
    "optionsHi": [
      "हाथ मोड़ना",
      "कलाई और उंगलियां सीधी करना",
      "अंगूठे को अंदर मोड़ना",
      "हाथ को अंदर मोड़ना"
    ],
    "correctAnswer": 2,
    "explanationEn": "Peyer's patches are lymphoid tissue aggregates in the ileum, part of gut-associated lymphoid tissue (GALT).",
    "explanationHi": "रेडियल तंत्रिका बाहु के पीछे की पेशियों और कलाई/उंगली एक्सटेंसरों को नियंत्रित करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-344",
    "questionEn": "The taeniae coli are found in the:",
    "questionHi": "मीडियन तंत्रिका (Median Nerve) क्या नियंत्रित करती है?",
    "optionsEn": [
      "Small intestine",
      "Large intestine",
      "Stomach",
      "Esophagus"
    ],
    "optionsHi": [
      "कलाई सीधी करना",
      "प्रकोष्ठ के फ्लेक्सर्स और हाथ की थीनार पेशियां",
      "कोहनी सीधी करना",
      "कंधा घुमाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Taeniae coli are three bands of longitudinal muscle running along the colon, causing haustra formation.",
    "explanationHi": "मीडियन तंत्रिका प्रकोष्ठ के अधिकांश फ्लेक्सर्स और अंगूठे की पेशियों को नियंत्रित करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-345",
    "questionEn": "The hepatic flexure is at the junction of:",
    "questionHi": "अल्नार तंत्रिका (Ulnar Nerve) क्या नियंत्रित करती है?",
    "optionsEn": [
      "Ascending and transverse colon",
      "Transverse and descending colon",
      "Descending and sigmoid colon",
      "Sigmoid colon and rectum"
    ],
    "optionsHi": [
      "अंगूठा",
      "छोटी उंगली की पेशियां और हाथ की अंतःअस्थि पेशियां",
      "कोहनी सीधी करना",
      "कंधा"
    ],
    "correctAnswer": 0,
    "explanationEn": "The hepatic (right colic) flexure is where ascending colon turns to become transverse colon, near the liver.",
    "explanationHi": "अल्नार तंत्रिका छोटी उंगली, अनामिका के आधे और हाथ की कई छोटी पेशियों को नियंत्रित करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-346",
    "questionEn": "The porta hepatis is where:",
    "questionHi": "फीमोरल तंत्रिका (Femoral Nerve) क्या नियंत्रित करती है?",
    "optionsEn": [
      "Bile is produced",
      "Portal vein and hepatic artery enter liver",
      "Liver meets diaphragm",
      "Gallbladder attaches"
    ],
    "optionsHi": [
      "जांघ के पीछे की पेशियां",
      "जांघ के सामने की पेशियां (क्वाड्रिसेप्स)",
      "पिंडली की पेशियां",
      "नितंब"
    ],
    "correctAnswer": 1,
    "explanationEn": "The porta hepatis is the 'door of the liver' where portal vein, hepatic artery, and bile ducts enter/exit.",
    "explanationHi": "फीमोरल तंत्रिका जांघ के सामने की पेशियों को नियंत्रित करती है जो घुटना सीधा करती हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-347",
    "questionEn": "The head of the pancreas lies in the curve of the:",
    "questionHi": "कॉमन पेरोनियल तंत्रिका (Common Peroneal Nerve) की चोट से क्या होता है?",
    "optionsEn": [
      "Stomach",
      "Duodenum",
      "Jejunum",
      "Spleen"
    ],
    "optionsHi": [
      "घुटना मोड़ने में कमी",
      "फुट ड्रॉप (पैर नीचे लटकना)",
      "जांघ में कमजोरी",
      "कूल्हे में कमजोरी"
    ],
    "correctAnswer": 1,
    "explanationEn": "The head of pancreas fits into the C-shaped curve of the duodenum.",
    "explanationHi": "कॉमन पेरोनियल तंत्रिका की चोट से पैर ऊपर उठाने वाली पेशियां कमजोर हो जाती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-348",
    "questionEn": "The internal anal sphincter is made of:",
    "questionHi": "टिबियल तंत्रिका (Tibial Nerve) क्या नियंत्रित करती है?",
    "optionsEn": [
      "Skeletal muscle",
      "Smooth muscle",
      "Cardiac muscle",
      "Connective tissue"
    ],
    "optionsHi": [
      "पैर ऊपर उठाना",
      "पिंडली के पीछे की पेशियां (प्लांटर फ्लेक्शन)",
      "घुटना सीधा करना",
      "कूल्हा मोड़ना"
    ],
    "correctAnswer": 1,
    "explanationEn": "The internal anal sphincter is involuntary smooth muscle. External sphincter is voluntary skeletal muscle.",
    "explanationHi": "टिबियल तंत्रिका पिंडली के पीछे की पेशियों को नियंत्रित करती है जो पैर को नीचे की ओर मोड़ती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-349",
    "questionEn": "Murphy's sign is associated with:",
    "questionHi": "डर्माटोम (Dermatome) क्या है?",
    "optionsEn": [
      "Appendicitis",
      "Cholecystitis",
      "Pancreatitis",
      "Peptic ulcer"
    ],
    "optionsHi": [
      "त्वचा की परत",
      "एक मेरुरज्जु तंत्रिका द्वारा संवेदित त्वचा का क्षेत्र",
      "पेशी समूह",
      "हड्डी का भाग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Murphy's sign (inspiratory arrest during RUQ palpation) indicates gallbladder inflammation.",
    "explanationHi": "डर्माटोम त्वचा का वह क्षेत्र है जो एक विशिष्ट मेरुरज्जु तंत्रिका से संवेदना प्राप्त करता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-350",
    "questionEn": "The greater omentum hangs from the:",
    "questionHi": "मायोटोम (Myotome) क्या है?",
    "optionsEn": [
      "Liver",
      "Greater curvature of stomach",
      "Small intestine",
      "Diaphragm"
    ],
    "optionsHi": [
      "त्वचा का क्षेत्र",
      "एक मेरुरज्जु तंत्रिका द्वारा नियंत्रित पेशी समूह",
      "हड्डी",
      "जोड़"
    ],
    "correctAnswer": 1,
    "explanationEn": "The greater omentum is a fatty apron hanging from the greater curvature, covering intestines anteriorly.",
    "explanationHi": "मायोटोम पेशियों का वह समूह है जो एक विशिष्ट मेरुरज्जु तंत्रिका द्वारा नियंत्रित होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-351",
    "questionEn": "White matter in the CNS consists mainly of:",
    "questionHi": "C5-C6 डर्माटोम कहां होता है?",
    "optionsEn": [
      "Cell bodies",
      "Myelinated axons",
      "Dendrites",
      "Synapses"
    ],
    "optionsHi": [
      "पैर में",
      "अंगूठे और तर्जनी, बाहु के बाहरी भाग में",
      "पेट में",
      "पीठ में"
    ],
    "correctAnswer": 1,
    "explanationEn": "White matter contains myelinated axons (myelin is white). Grey matter contains cell bodies.",
    "explanationHi": "C5-C6 डर्माटोम बाहु के बाहरी भाग और अंगूठे-तर्जनी तक फैला होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-352",
    "questionEn": "The subarachnoid space contains:",
    "questionHi": "L4 डर्माटोम कहां होता है?",
    "optionsEn": [
      "Blood",
      "Cerebrospinal fluid",
      "Air",
      "Fat"
    ],
    "optionsHi": [
      "हाथ में",
      "जांघ के सामने और पिंडली के अंदरूनी भाग में",
      "पैर के बाहर",
      "पीठ में"
    ],
    "correctAnswer": 1,
    "explanationEn": "CSF circulates in the subarachnoid space between arachnoid and pia mater.",
    "explanationHi": "L4 डर्माटोम जांघ के सामने से पिंडली के अंदरूनी भाग और पैर के अंदरूनी किनारे तक फैला होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-353",
    "questionEn": "Broca's area is responsible for:",
    "questionHi": "S1 डर्माटोम कहां होता है?",
    "optionsEn": [
      "Speech comprehension",
      "Speech production",
      "Vision",
      "Hearing"
    ],
    "optionsHi": [
      "हाथ में",
      "पैर के बाहरी भाग और छोटी उंगली में",
      "जांघ के सामने",
      "पेट में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Broca's area (left frontal lobe) controls speech production. Damage causes expressive aphasia.",
    "explanationHi": "S1 डर्माटोम पैर के बाहरी किनारे और छोटी पैर की उंगली तक फैला होता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-354",
    "questionEn": "Wernicke's area is responsible for:",
    "questionHi": "एपेक्स बीट (Apex Beat) सामान्यतः कहां महसूस होती है?",
    "optionsEn": [
      "Speech production",
      "Speech comprehension",
      "Motor control",
      "Balance"
    ],
    "optionsHi": [
      "दाईं ओर",
      "5वीं इंटरकोस्टल स्पेस, मिडक्लेविकुलर लाइन पर बाईं ओर",
      "उदर में",
      "गर्दन में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Wernicke's area (left temporal lobe) processes language comprehension. Damage causes receptive aphasia.",
    "explanationHi": "एपेक्स बीट बाएं निलय की धड़कन है जो 5वीं इंटरकोस्टल स्पेस में महसूस होती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-355",
    "questionEn": "The thalamus functions as:",
    "questionHi": "महाधमनी वाल्व कहां सुनाई देता है?",
    "optionsEn": [
      "Motor control center",
      "Sensory relay station",
      "Respiratory center",
      "Memory center"
    ],
    "optionsHi": [
      "बाईं ओर नीचे",
      "दाईं ओर दूसरी इंटरकोस्टल स्पेस",
      "बाईं ओर दूसरी इंटरकोस्टल स्पेस",
      "एपेक्स पर"
    ],
    "correctAnswer": 1,
    "explanationEn": "The thalamus relays sensory information to appropriate cortical areas (except smell which bypasses it).",
    "explanationHi": "महाधमनी वाल्व की ध्वनि दाईं ओर दूसरी इंटरकोस्टल स्पेस (स्टर्नल बॉर्डर) पर सबसे अच्छी सुनाई देती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-356",
    "questionEn": "The medulla oblongata controls:",
    "questionHi": "फुफ्फुसीय वाल्व कहां सुनाई देता है?",
    "optionsEn": [
      "Voluntary movement",
      "Vital functions (heart rate, breathing)",
      "Memory",
      "Vision"
    ],
    "optionsHi": [
      "दाईं ओर नीचे",
      "बाईं ओर दूसरी इंटरकोस्टल स्पेस",
      "एपेक्स पर",
      "उदर में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The medulla contains vital centers for cardiovascular and respiratory control.",
    "explanationHi": "फुफ्फुसीय वाल्व की ध्वनि बाईं ओर दूसरी इंटरकोस्टल स्पेस (स्टर्नल बॉर्डर) पर सबसे अच्छी सुनाई देती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-357",
    "questionEn": "The facial nerve (CN VII) controls:",
    "questionHi": "माइट्रल वाल्व कहां सुनाई देता है?",
    "optionsEn": [
      "Eye movement",
      "Facial expression",
      "Hearing",
      "Smell"
    ],
    "optionsHi": [
      "दाईं ओर ऊपर",
      "एपेक्स पर (5वीं इंटरकोस्टल स्पेस)",
      "गर्दन में",
      "पेट में"
    ],
    "correctAnswer": 1,
    "explanationEn": "CN VII innervates muscles of facial expression and provides taste to anterior 2/3 of tongue.",
    "explanationHi": "माइट्रल वाल्व की ध्वनि एपेक्स पर सबसे अच्छी सुनाई देती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-358",
    "questionEn": "The brachial plexus is formed by nerve roots:",
    "questionHi": "ट्राइकसपिड वाल्व कहां सुनाई देता है?",
    "optionsEn": [
      "C1-C4",
      "C5-T1",
      "T1-T5",
      "L1-L5"
    ],
    "optionsHi": [
      "बाईं ओर ऊपर",
      "बाईं स्टर्नल बॉर्डर पर निचले भाग में",
      "एपेक्स पर",
      "गर्दन में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The brachial plexus (C5-T1) supplies the upper limb. Injuries cause arm weakness/numbness.",
    "explanationHi": "ट्राइकसपिड वाल्व की ध्वनि बाईं स्टर्नल बॉर्डर के निचले भाग पर सबसे अच्छी सुनाई देती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-359",
    "questionEn": "Parasympathetic effects include:",
    "questionHi": "फेफड़ों का शीर्ष (Apex) कहां तक फैला होता है?",
    "optionsEn": [
      "Increased heart rate",
      "Pupil dilation",
      "Decreased digestion",
      "Increased digestion"
    ],
    "optionsHi": [
      "पहली पसली के स्तर तक",
      "क्लेविकल से 2-3 cm ऊपर गर्दन में",
      "तीसरी पसली तक",
      "केवल वक्ष में"
    ],
    "correctAnswer": 3,
    "explanationEn": "Parasympathetic ('rest and digest') increases digestion, decreases heart rate, constricts pupils.",
    "explanationHi": "फेफड़ों का शीर्ष क्लेविकल से ऊपर गर्दन में फैला होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-360",
    "questionEn": "The lumbar plexus supplies the:",
    "questionHi": "फेफड़ों का आधार (Base) कहां होता है?",
    "optionsEn": [
      "Upper limb",
      "Thorax",
      "Anterior thigh",
      "Posterior thigh"
    ],
    "optionsHi": [
      "गर्दन में",
      "डायफ्राम पर",
      "पहली पसली पर",
      "कंधे पर"
    ],
    "correctAnswer": 2,
    "explanationEn": "The lumbar plexus (L1-L4) supplies anterior thigh (femoral nerve). Sacral plexus supplies posterior thigh/leg.",
    "explanationHi": "फेफड़ों का आधार डायफ्राम पर टिका होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-361",
    "questionEn": "The renal cortex contains mainly:",
    "questionHi": "स्टर्नल एंगल (Angle of Louis) किस स्तर पर होता है?",
    "optionsEn": [
      "Collecting ducts",
      "Loops of Henle",
      "Glomeruli",
      "Renal pyramids"
    ],
    "optionsHi": [
      "T2",
      "T4-T5 (दूसरी पसली)",
      "T10",
      "L1"
    ],
    "correctAnswer": 2,
    "explanationEn": "The cortex contains glomeruli, proximal and distal convoluted tubules. Medulla has loops and collecting ducts.",
    "explanationHi": "स्टर्नल एंगल मैन्यूब्रियम और स्टर्नम बॉडी के जोड़ पर होता है, T4-T5 स्तर पर।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-362",
    "questionEn": "The macula densa is part of the:",
    "questionHi": "स्टर्नल एंगल का क्या महत्व है?",
    "optionsEn": [
      "Glomerulus",
      "Juxtaglomerular apparatus",
      "Collecting duct",
      "Bladder"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "दूसरी पसली और कई संरचनाओं का लैंडमार्क",
      "केवल सजावटी",
      "दर्द का स्थान"
    ],
    "correctAnswer": 1,
    "explanationEn": "The macula densa is specialized cells in distal tubule that sense sodium, part of JGA for BP regulation.",
    "explanationHi": "स्टर्नल एंगल दूसरी पसली, कैरिना, महाधमनी चाप का स्तर निर्धारित करने का लैंडमार्क है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-363",
    "questionEn": "The ureters enter the bladder at the:",
    "questionHi": "जाइफॉयड प्रोसेस (Xiphoid Process) कहां है?",
    "optionsEn": [
      "Apex",
      "Fundus",
      "Trigone",
      "Neck"
    ],
    "optionsHi": [
      "गर्दन में",
      "उरोस्थि का निचला सिरा",
      "खोपड़ी में",
      "श्रोणि में"
    ],
    "correctAnswer": 2,
    "explanationEn": "Ureters enter at the upper corners of the trigone; the urethra exits at the lower corner.",
    "explanationHi": "जाइफॉयड प्रोसेस उरोस्थि का सबसे निचला और छोटा भाग है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-364",
    "questionEn": "The female urethra is approximately:",
    "questionHi": "कॉस्टल मार्जिन (Costal Margin) क्या बनाता है?",
    "optionsEn": [
      "2 cm",
      "4 cm",
      "10 cm",
      "20 cm"
    ],
    "optionsHi": [
      "पसलियों का ऊपरी किनारा",
      "7वीं से 10वीं पसलियों के उपास्थि",
      "केवल पहली पसली",
      "कशेरुक स्तंभ"
    ],
    "correctAnswer": 1,
    "explanationEn": "Female urethra is ~4 cm long (shorter than male ~20 cm), making women more prone to UTIs.",
    "explanationHi": "कॉस्टल मार्जिन निचली पसलियों (7-10) के कॉस्टल कार्टिलेज से बनता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-365",
    "questionEn": "Antidiuretic hormone (ADH) acts on the:",
    "questionHi": "यकृत का ऊपरी किनारा सामान्यतः किस स्तर पर होता है?",
    "optionsEn": [
      "Glomerulus",
      "Proximal tubule",
      "Collecting duct",
      "Ureter"
    ],
    "optionsHi": [
      "10वीं पसली",
      "5वीं पसली (दाईं ओर)",
      "2वीं पसली",
      "श्रोणि में"
    ],
    "correctAnswer": 2,
    "explanationEn": "ADH increases water permeability of collecting ducts, allowing water reabsorption and urine concentration.",
    "explanationHi": "यकृत का ऊपरी किनारा दाईं मिडक्लेविकुलर लाइन पर लगभग 5वीं पसली के स्तर पर होता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-366",
    "questionEn": "Spermatogenesis occurs in the:",
    "questionHi": "यकृत का निचला किनारा सामान्यतः कहां होता है?",
    "optionsEn": [
      "Epididymis",
      "Seminiferous tubules",
      "Prostate",
      "Vas deferens"
    ],
    "optionsHi": [
      "कॉस्टल मार्जिन के नीचे 2 cm",
      "कॉस्टल मार्जिन के स्तर पर या थोड़ा नीचे",
      "नाभि पर",
      "श्रोणि में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sperm are produced in seminiferous tubules of the testes and mature in the epididymis.",
    "explanationHi": "सामान्य यकृत का निचला किनारा कॉस्टल मार्जिन पर या उससे थोड़ा नीचे होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-367",
    "questionEn": "Testosterone is produced by:",
    "questionHi": "प्लीहा का ऊपरी सिरा किस स्तर पर होता है?",
    "optionsEn": [
      "Sertoli cells",
      "Leydig cells",
      "Prostate",
      "Seminal vesicles"
    ],
    "optionsHi": [
      "5वीं पसली",
      "9वीं से 11वीं पसली (बाईं ओर)",
      "2वीं पसली",
      "श्रोणि में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Leydig (interstitial) cells in the testes produce testosterone. Sertoli cells support sperm development.",
    "explanationHi": "प्लीहा बाईं ओर 9वीं से 11वीं पसलियों के पीछे स्थित होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-368",
    "questionEn": "The ejaculatory duct is formed by union of:",
    "questionHi": "वृक्क का स्तर क्या है?",
    "optionsEn": [
      "Vas deferens and urethra",
      "Vas deferens and seminal vesicle duct",
      "Epididymis and vas deferens",
      "Prostate ducts and urethra"
    ],
    "optionsHi": [
      "T1-T4",
      "T12-L3",
      "L5-S1",
      "C3-C5"
    ],
    "correctAnswer": 1,
    "explanationEn": "The ejaculatory duct forms from vas deferens + seminal vesicle duct, passing through prostate to urethra.",
    "explanationHi": "वृक्क T12 से L3 कशेरुकाओं के स्तर पर स्थित होते हैं, दायां थोड़ा नीचे।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-369",
    "questionEn": "The broad ligament supports the:",
    "questionHi": "दायां वृक्क बाएं से थोड़ा नीचे क्यों होता है?",
    "optionsEn": [
      "Bladder",
      "Uterus",
      "Rectum",
      "Kidney"
    ],
    "optionsHi": [
      "कोई कारण नहीं",
      "यकृत के कारण",
      "आमाशय के कारण",
      "हृदय के कारण"
    ],
    "correctAnswer": 1,
    "explanationEn": "The broad ligament is a fold of peritoneum supporting the uterus, fallopian tubes, and ovaries.",
    "explanationHi": "यकृत दाईं ओर स्थान घेरता है इसलिए दायां वृक्क थोड़ा नीचे होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-370",
    "questionEn": "The fornix of the vagina is:",
    "questionHi": "नाभि (Umbilicus) किस कशेरुक स्तर पर होती है?",
    "optionsEn": [
      "The opening",
      "The recess around cervix",
      "The muscular wall",
      "The external genitalia"
    ],
    "optionsHi": [
      "T10",
      "L3-L4",
      "L5",
      "S1"
    ],
    "correctAnswer": 1,
    "explanationEn": "The fornix is the recess around the cervix where it protrudes into the vagina (anterior, posterior, lateral).",
    "explanationHi": "नाभि लगभग L3-L4 कशेरुकाओं के स्तर पर होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-371",
    "questionEn": "The arrector pili muscle causes:",
    "questionHi": "इलियाक क्रेस्ट (Iliac Crest) किस कशेरुक स्तर पर होती है?",
    "optionsEn": [
      "Sweating",
      "Goosebumps",
      "Tanning",
      "Hair growth"
    ],
    "optionsHi": [
      "T12",
      "L4",
      "S1",
      "L2"
    ],
    "correctAnswer": 1,
    "explanationEn": "Arrector pili muscles contract in cold or fear, causing hair to stand up ('goosebumps').",
    "explanationHi": "इलियाक क्रेस्ट का उच्चतम बिंदु L4 कशेरुका के स्तर पर होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-372",
    "questionEn": "The stratum basale is the:",
    "questionHi": "ASIS (Anterior Superior Iliac Spine) क्या है?",
    "optionsEn": [
      "Outermost layer of epidermis",
      "Deepest layer of epidermis",
      "Layer of dermis",
      "Subcutaneous layer"
    ],
    "optionsHi": [
      "पीठ में हड्डी",
      "श्रोणि के सामने का उभार",
      "घुटने का भाग",
      "कंधे का भाग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Stratum basale (germinativum) is the deepest epidermal layer where cell division occurs.",
    "explanationHi": "ASIS इलियाक क्रेस्ट का सामने का उभरा हुआ बिंदु है जो आसानी से महसूस होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-373",
    "questionEn": "Langerhans cells in the skin are:",
    "questionHi": "PSIS (Posterior Superior Iliac Spine) कहां दिखता है?",
    "optionsEn": [
      "Pigment cells",
      "Immune cells",
      "Fat cells",
      "Nerve cells"
    ],
    "optionsHi": [
      "सामने",
      "पीठ के निचले भाग में गड्ढों (Venus dimples) के रूप में",
      "कंधे पर",
      "गर्दन में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Langerhans cells are dendritic immune cells in the epidermis that present antigens.",
    "explanationHi": "PSIS पीठ के निचले भाग में दोनों ओर गड्ढों के रूप में दिखाई देता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-374",
    "questionEn": "The aqueous humor is found in the:",
    "questionHi": "प्यूबिक सिम्फिसिस (Pubic Symphysis) क्या है?",
    "optionsEn": [
      "Anterior chamber of eye",
      "Posterior chamber of eye",
      "Vitreous chamber",
      "Both anterior and posterior chambers"
    ],
    "optionsHi": [
      "कूल्हे का जोड़",
      "दोनों प्यूबिक हड्डियों के बीच का जोड़",
      "घुटने का जोड़",
      "कंधे का जोड़"
    ],
    "correctAnswer": 3,
    "explanationEn": "Aqueous humor fills both anterior (in front of iris) and posterior (behind iris, in front of lens) chambers.",
    "explanationHi": "प्यूबिक सिम्फिसिस दोनों प्यूबिक हड्डियों को आगे से जोड़ने वाला उपास्थि जोड़ है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-375",
    "questionEn": "The semicircular canals detect:",
    "questionHi": "ग्रेटर ट्रोकेंटर (Greater Trochanter) कहां है?",
    "optionsEn": [
      "Sound",
      "Rotational movement",
      "Linear acceleration",
      "Light"
    ],
    "optionsHi": [
      "कोहनी पर",
      "कूल्हे के बाहर (ऊर्विका का उभार)",
      "घुटने पर",
      "कंधे पर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Semicircular canals detect rotational (angular) movement. Utricle and saccule detect linear acceleration.",
    "explanationHi": "ग्रेटर ट्रोकेंटर ऊर्विका का बाहरी उभार है जो कूल्हे के बाहर महसूस होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-376",
    "questionEn": "Explain the pathway of blood through the heart starting from the superior vena cava.",
    "questionHi": "मीडियल मैलियोलस (Medial Malleolus) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "बाहरी टखना",
      "टिबिया का निचला सिरा (अंदरूनी टखना)",
      "एड़ी की हड्डी",
      "घुटने की हड्डी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "मीडियल मैलियोलस टिबिया का निचला सिरा है जो अंदरूनी टखने का उभार बनाता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-377",
    "questionEn": "List and locate the major pulse points used in clinical assessment.",
    "questionHi": "लेटरल मैलियोलस (Lateral Malleolus) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "अंदरूनी टखना",
      "फिबुला का निचला सिरा (बाहरी टखना)",
      "एड़ी की हड्डी",
      "घुटने की हड्डी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "लेटरल मैलियोलस फिबुला का निचला सिरा है जो बाहरी टखने का उभार बनाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-378",
    "questionEn": "Describe the pathway of air from the nose to the alveoli.",
    "questionHi": "एक्रोमियन (Acromion) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "कोहनी का उभार",
      "स्कैपुला का बाहरी सिरा (कंधे का उभार)",
      "घुटने का उभार",
      "टखने का उभार"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "एक्रोमियन स्कैपुला का बाहरी उभरा हुआ भाग है जो कंधे का शीर्ष बनाता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-379",
    "questionEn": "Explain the mechanics of inspiration and expiration.",
    "questionHi": "स्टाइलॉयड प्रोसेस कहां-कहां होती है?",
    "optionsEn": [],
    "optionsHi": [
      "केवल खोपड़ी में",
      "रेडियस, उल्ना के निचले सिरों और खोपड़ी में",
      "केवल पैर में",
      "केवल कंधे में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "स्टाइलॉयड प्रोसेस रेडियस और उल्ना के कलाई वाले सिरों पर और टेम्पोरल बोन में होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-380",
    "questionEn": "Name the salivary glands and their locations.",
    "questionHi": "इस्कियल ट्यूबरोसिटी (Ischial Tuberosity) पर हम क्या करते हैं?",
    "optionsEn": [],
    "optionsHi": [
      "खड़े होते हैं",
      "बैठते हैं",
      "लेटते हैं",
      "चलते हैं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "इस्कियल ट्यूबरोसिटी वह हड्डी का उभार है जिस पर हम बैठते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-381",
    "questionEn": "Describe the anatomical location and function of the liver.",
    "questionHi": "कोरैकॉयड प्रोसेस (Coracoid Process) कहां है?",
    "optionsEn": [],
    "optionsHi": [
      "कूल्हे में",
      "स्कैपुला के सामने (कंधे के नीचे)",
      "घुटने में",
      "कोहनी में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "कोरैकॉयड प्रोसेस स्कैपुला का आगे निकला भाग है जहां कई पेशियां जुड़ती हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-382",
    "questionEn": "Describe the lobes of the cerebrum and their main functions.",
    "questionHi": "स्पाइन ऑफ स्कैपुला (Spine of Scapula) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "कशेरुक स्तंभ",
      "स्कैपुला के पीछे की उभरी हुई रेखा",
      "रीढ़ की हड्डी",
      "मेरुरज्जु"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "स्पाइन ऑफ स्कैपुला पीठ पर महसूस होने वाली स्कैपुला की पिछली उभरी हुई रेखा है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-383",
    "questionEn": "Compare the sympathetic and parasympathetic nervous systems.",
    "questionHi": "इंफीरियर एंगल ऑफ स्कैपुला (Inferior Angle of Scapula) किस स्तर पर होता है?",
    "optionsEn": [],
    "optionsHi": [
      "T3",
      "T7-T8",
      "L1",
      "C7"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "स्कैपुला का निचला कोना T7 या T8 कशेरुका के स्तर पर होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-384",
    "questionEn": "Describe the gross anatomy of the kidney.",
    "questionHi": "C7 कशेरुका (Vertebra Prominens) को आसानी से क्यों पहचाना जाता है?",
    "optionsEn": [],
    "optionsHi": [
      "सबसे छोटी है",
      "गर्दन झुकाने पर सबसे उभरी स्पाइनस प्रोसेस",
      "सबसे बड़ी है",
      "रंगीन है"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "C7 की स्पाइनस प्रोसेस सबसे उभरी होती है और गर्दन झुकाने पर आसानी से महसूस होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-385",
    "questionEn": "Describe the path of sperm from production to ejaculation.",
    "questionHi": "सुप्रास्टर्नल नॉच (Suprasternal Notch) कहां है?",
    "optionsEn": [],
    "optionsHi": [
      "उरोस्थि के नीचे",
      "उरोस्थि के ऊपर गर्दन के आधार पर",
      "पेट में",
      "पीठ में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "सुप्रास्टर्नल नॉच मैन्यूब्रियम के ऊपर गर्दन के आधार पर गड्ढा है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-386",
    "questionEn": "A patient has severe crushing chest pain radiating to the left arm and jaw. Using your anatomical knowledge, explain why the pain radiates to these areas and what condition this suggests.",
    "questionHi": "इंटरकोस्टल स्पेस (Intercostal Space) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "पसली के अंदर",
      "दो पसलियों के बीच का स्थान",
      "उरोस्थि का भाग",
      "कशेरुक का भाग"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "इंटरकोस्टल स्पेस दो आसन्न पसलियों के बीच का स्थान है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-387",
    "questionEn": "A patient with COPD is breathing with pursed lips and leaning forward with arms on knees. Explain the anatomical and physiological basis for these positions.",
    "questionHi": "इंटरकोस्टल न्यूरोवैस्कुलर बंडल पसली के किस किनारे पर होता है?",
    "optionsEn": [],
    "optionsHi": [
      "ऊपरी किनारे पर",
      "निचले किनारे पर",
      "बीच में",
      "सामने"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "न्यूरोवैस्कुलर बंडल (नस, धमनी, तंत्रिका) पसली के निचले किनारे पर होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-388",
    "questionEn": "A patient presents with vomiting blood (hematemesis). Using your anatomical knowledge, list possible sources of bleeding in the upper GI tract.",
    "questionHi": "छाती में सुई डालते समय पसली के किस किनारे के ऊपर डालनी चाहिए?",
    "optionsEn": [],
    "optionsHi": [
      "निचले किनारे के ठीक ऊपर",
      "ऊपरी किनारे के ठीक ऊपर (निचली पसली के)",
      "बीच में",
      "कहीं भी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "सुई निचली पसली के ऊपरी किनारे के ऊपर डालनी चाहिए ताकि न्यूरोवैस्कुलर बंडल से बचा जा सके।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-389",
    "questionEn": "A patient cannot feel sensation on the lateral aspect of their forearm and has weak wrist extension after a humerus fracture. Which nerve is likely injured and why?",
    "questionHi": "मिडक्लेविकुलर लाइन (Midclavicular Line) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "क्लेविकल के ऊपर की रेखा",
      "क्लेविकल के मध्य से नीचे की ऊर्ध्वाधर रेखा",
      "क्लेविकल के साथ की रेखा",
      "कोई रेखा नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "मिडक्लेविकुलर लाइन क्लेविकल के मध्य बिंदु से गुजरने वाली ऊर्ध्वाधर रेखा है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-390",
    "questionEn": "A patient with a kidney stone has severe flank pain radiating to the groin. Explain the anatomical path of the stone and why pain radiates this way.",
    "questionHi": "एंटीरियर एक्सिलरी लाइन (Anterior Axillary Line) कहां है?",
    "optionsEn": [],
    "optionsHi": [
      "बगल के पीछे",
      "बगल की सामने की सिलवट से नीचे",
      "छाती के बीच में",
      "पीठ पर"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "एंटीरियर एक्सिलरी लाइन बगल की सामने की सिलवट से नीचे जाने वाली ऊर्ध्वाधर रेखा है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-391",
    "questionEn": "The appendix is located at McBurney's point, which is:",
    "questionHi": "मिडएक्सिलरी लाइन (Midaxillary Line) कहां है?",
    "optionsEn": [
      "Midway between umbilicus and pubic symphysis",
      "1/3 from ASIS to umbilicus",
      "Right costal margin",
      "Left iliac fossa"
    ],
    "optionsHi": [
      "बगल के सामने",
      "बगल के बीच से नीचे",
      "पीठ पर",
      "छाती के बीच में"
    ],
    "correctAnswer": 1,
    "explanationEn": "McBurney's point is 1/3 of the distance from the right ASIS to the umbilicus, overlying the appendix base.",
    "explanationHi": "मिडएक्सिलरी लाइन बगल के मध्य से नीचे जाने वाली ऊर्ध्वाधर रेखा है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-392",
    "questionEn": "The spleen is located in which abdominal quadrant?",
    "questionHi": "स्कैपुलर लाइन (Scapular Line) कहां है?",
    "optionsEn": [
      "Right upper quadrant",
      "Left upper quadrant",
      "Right lower quadrant",
      "Left lower quadrant"
    ],
    "optionsHi": [
      "सामने",
      "स्कैपुला के निचले कोने से होकर पीठ पर",
      "बगल में",
      "गर्दन में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The spleen lies in the LUQ, protected by ribs 9-11 on the left side.",
    "explanationHi": "स्कैपुलर लाइन स्कैपुला के निचले कोने से गुजरने वाली ऊर्ध्वाधर रेखा है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-393",
    "questionEn": "The thoracic duct drains lymph into the:",
    "questionHi": "एनाटॉमिकल स्नफबॉक्स (Anatomical Snuffbox) कहां है?",
    "optionsEn": [
      "Right subclavian vein",
      "Left subclavian vein junction",
      "Superior vena cava",
      "Internal jugular vein only"
    ],
    "optionsHi": [
      "कोहनी पर",
      "कलाई के पीछे अंगूठे की ओर",
      "घुटने पर",
      "टखने पर"
    ],
    "correctAnswer": 1,
    "explanationEn": "The thoracic duct drains into the junction of left subclavian and internal jugular veins (left venous angle).",
    "explanationHi": "एनाटॉमिकल स्नफबॉक्स कलाई के पीछे अंगूठे की ओर त्रिकोणीय गड्ढा है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-394",
    "questionEn": "The thyroid gland is located:",
    "questionHi": "एनाटॉमिकल स्नफबॉक्स में कौन सी हड्डी महसूस होती है?",
    "optionsEn": [
      "In the brain",
      "In the neck anterior to trachea",
      "In the chest",
      "Behind the sternum"
    ],
    "optionsHi": [
      "रेडियस",
      "उल्ना",
      "स्कैफॉयड (Scaphoid)",
      "लुनेट"
    ],
    "correctAnswer": 1,
    "explanationEn": "The thyroid gland wraps around the anterior and lateral aspects of the trachea, below the larynx.",
    "explanationHi": "स्कैफॉयड हड्डी एनाटॉमिकल स्नफबॉक्स के तल में महसूस होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-395",
    "questionEn": "The adrenal glands are located:",
    "questionHi": "कार्पल टनल (Carpal Tunnel) में कौन सी तंत्रिका गुजरती है?",
    "optionsEn": [
      "In the pelvis",
      "Superior to each kidney",
      "In the neck",
      "Behind the stomach"
    ],
    "optionsHi": [
      "रेडियल तंत्रिका",
      "मीडियन तंत्रिका",
      "अल्नार तंत्रिका",
      "मस्कुलोक्यूटेनियस तंत्रिका"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adrenal (suprarenal) glands sit on top of each kidney, producing hormones like cortisol and adrenaline.",
    "explanationHi": "मीडियन तंत्रिका कार्पल टनल से गुजरती है और कार्पल टनल सिंड्रोम में प्रभावित होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-396",
    "questionEn": "The pancreas is located:",
    "questionHi": "क्यूबिटल फॉसा (Cubital Fossa) कहां है?",
    "optionsEn": [
      "In right upper quadrant only",
      "Retroperitoneal, behind stomach",
      "In the pelvis",
      "In the chest"
    ],
    "optionsHi": [
      "कलाई पर",
      "कोहनी के सामने",
      "घुटने के पीछे",
      "बगल में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The pancreas lies retroperitoneally across the posterior abdominal wall, behind the stomach.",
    "explanationHi": "क्यूबिटल फॉसा कोहनी के सामने का त्रिकोणीय गड्ढा है जहां शिराएं स्पष्ट दिखती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-397",
    "questionEn": "The cubital fossa is located:",
    "questionHi": "क्यूबिटल फॉसा में रक्त निकालने के लिए कौन सी शिरा उपयोग होती है?",
    "optionsEn": [
      "In the armpit",
      "At the front of elbow",
      "Behind the knee",
      "At the wrist"
    ],
    "optionsHi": [
      "जुगुलर",
      "मीडियन क्यूबिटल शिरा",
      "फीमोरल",
      "सेफेलिक"
    ],
    "correctAnswer": 1,
    "explanationEn": "The cubital fossa is the triangular depression at the anterior elbow, containing important vessels and nerves.",
    "explanationHi": "मीडियन क्यूबिटल शिरा क्यूबिटल फॉसा में वेनिपंक्चर के लिए सबसे अधिक उपयोग होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-398",
    "questionEn": "The popliteal fossa is located:",
    "questionHi": "पॉप्लिटियल फॉसा (Popliteal Fossa) कहां है?",
    "optionsEn": [
      "In front of knee",
      "Behind the knee",
      "At the ankle",
      "In the groin"
    ],
    "optionsHi": [
      "कोहनी के सामने",
      "घुटने के पीछे",
      "बगल में",
      "जांघ के सामने"
    ],
    "correctAnswer": 1,
    "explanationEn": "The popliteal fossa is the diamond-shaped area behind the knee containing popliteal vessels and tibial nerve.",
    "explanationHi": "पॉप्लिटियल फॉसा घुटने के पीछे का हीरे के आकार का गड्ढा है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-399",
    "questionEn": "The anatomical snuffbox is bounded by tendons of:",
    "questionHi": "फीमोरल त्रिकोण (Femoral Triangle) कहां है?",
    "optionsEn": [
      "Flexor muscles",
      "Extensor pollicis longus and brevis, abductor pollicis longus",
      "Thenar muscles",
      "Hypothenar muscles"
    ],
    "optionsHi": [
      "पीठ में",
      "जांघ के ऊपरी सामने के भाग में",
      "पिंडली में",
      "पेट में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The anatomical snuffbox is bordered by thumb extensor tendons; the radial artery and scaphoid bone lie in its floor.",
    "explanationHi": "फीमोरल त्रिकोण जांघ के ऊपरी सामने के भाग में त्रिकोणीय क्षेत्र है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-400",
    "questionEn": "The inguinal ligament connects:",
    "questionHi": "फीमोरल त्रिकोण में क्या होता है?",
    "optionsEn": [
      "Pubic symphysis to sacrum",
      "ASIS to pubic tubercle",
      "Iliac crest to greater trochanter",
      "Ribs to sternum"
    ],
    "optionsHi": [
      "केवल पेशियां",
      "फीमोरल धमनी, शिरा, तंत्रिका",
      "केवल हड्डियां",
      "केवल त्वचा"
    ],
    "correctAnswer": 1,
    "explanationEn": "The inguinal ligament runs from the anterior superior iliac spine (ASIS) to the pubic tubercle.",
    "explanationHi": "फीमोरल त्रिकोण में फीमोरल धमनी, शिरा और तंत्रिका होती हैं जो पल्स और कैथीटेराइजेशन के लिए महत्वपूर्ण हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-401",
    "questionEn": "The parotid gland duct opens opposite the:",
    "questionHi": "इंगुइनल कैनाल (Inguinal Canal) क्या है?",
    "optionsEn": [
      "Lower 1st molar",
      "Upper 2nd molar",
      "Lower 2nd molar",
      "Upper 1st molar"
    ],
    "optionsHi": [
      "पेट में नलिका",
      "जांघ और पेट के बीच का मार्ग",
      "मूत्र नलिका",
      "पित्त नलिका"
    ],
    "correctAnswer": 1,
    "explanationEn": "Stensen's duct (parotid duct) opens opposite the upper second molar tooth.",
    "explanationHi": "इंगुइनल कैनाल पेट की दीवार में तिरछा मार्ग है जिससे पुरुषों में शुक्र रज्जु गुजरती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-402",
    "questionEn": "The lower esophageal sphincter prevents:",
    "questionHi": "इंगुइनल हर्निया कहां होती है?",
    "optionsEn": [
      "Food entry into stomach",
      "Acid reflux into esophagus",
      "Air entry into stomach",
      "Bile reflux"
    ],
    "optionsHi": [
      "छाती में",
      "इंगुइनल कैनाल के क्षेत्र में",
      "गर्दन में",
      "सिर में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The LES prevents gastric acid from refluxing back into the esophagus. LES incompetence causes GERD.",
    "explanationHi": "इंगुइनल हर्निया में आंत इंगुइनल कैनाल से बाहर निकलती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-403",
    "questionEn": "The fundus of the stomach is:",
    "questionHi": "स्पर्मेटिक कॉर्ड (Spermatic Cord) में क्या होता है?",
    "optionsEn": [
      "The exit to duodenum",
      "The dome above cardiac opening",
      "The main body",
      "The antrum"
    ],
    "optionsHi": [
      "केवल रक्त वाहिकाएं",
      "वास डेफरेंस, धमनियां, शिराएं, तंत्रिकाएं",
      "केवल तंत्रिकाएं",
      "केवल पेशियां"
    ],
    "correctAnswer": 1,
    "explanationEn": "The fundus is the dome-shaped upper portion of the stomach, above the level of the cardiac orifice.",
    "explanationHi": "स्पर्मेटिक कॉर्ड में वास डेफरेंस, टेस्टिकुलर धमनी, पैम्पिनिफॉर्म प्लेक्सस आदि होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-404",
    "questionEn": "Chief cells in the stomach secrete:",
    "questionHi": "पेरिनियम (Perineum) कहां है?",
    "optionsEn": [
      "Hydrochloric acid",
      "Pepsinogen",
      "Intrinsic factor",
      "Gastrin"
    ],
    "optionsHi": [
      "पेट में",
      "जननांगों और गुदा के बीच का क्षेत्र",
      "छाती में",
      "सिर में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chief (peptic) cells secrete pepsinogen, which is converted to pepsin by HCl for protein digestion.",
    "explanationHi": "पेरिनियम श्रोणि के निचले भाग में जननांगों और गुदा के बीच का क्षेत्र है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-405",
    "questionEn": "The duodenum is approximately:",
    "questionHi": "एपिसीओटॉमी (Episiotomy) कहां की जाती है?",
    "optionsEn": [
      "10 cm",
      "25 cm",
      "50 cm",
      "100 cm"
    ],
    "optionsHi": [
      "पेट में",
      "पेरिनियम में (प्रसव के दौरान)",
      "छाती में",
      "गर्दन में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The duodenum is about 25 cm (10 inches) long, C-shaped, receiving bile and pancreatic secretions.",
    "explanationHi": "एपिसीओटॉमी प्रसव के दौरान पेरिनियम में चीरा है जो प्रसव को आसान बनाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-406",
    "questionEn": "Peyer's patches are found in the:",
    "questionHi": "प्रोस्टेट ग्रंथि (Prostate Gland) कहां स्थित है?",
    "optionsEn": [
      "Stomach",
      "Duodenum",
      "Ileum",
      "Colon"
    ],
    "optionsHi": [
      "पेट में",
      "मूत्राशय के ठीक नीचे",
      "वृषण में",
      "लिंग में"
    ],
    "correctAnswer": 2,
    "explanationEn": "Peyer's patches are aggregates of lymphoid tissue in the ileum, part of gut-associated lymphoid tissue (GALT).",
    "explanationHi": "प्रोस्टेट ग्रंथि मूत्राशय के ठीक नीचे मूत्रमार्ग के चारों ओर स्थित है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-407",
    "questionEn": "The ileocecal valve is between the:",
    "questionHi": "डिजिटल रेक्टल परीक्षा (DRE) में प्रोस्टेट कैसे महसूस होती है?",
    "optionsEn": [
      "Stomach and duodenum",
      "Jejunum and ileum",
      "Ileum and cecum",
      "Sigmoid and rectum"
    ],
    "optionsHi": [
      "पेट से",
      "मलाशय की अग्र दीवार से",
      "लिंग से",
      "वृषण से"
    ],
    "correctAnswer": 2,
    "explanationEn": "The ileocecal valve controls passage from small intestine (ileum) to large intestine (cecum).",
    "explanationHi": "प्रोस्टेट मलाशय की अग्र दीवार से महसूस की जा सकती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-408",
    "questionEn": "The splenic flexure is at the junction of:",
    "questionHi": "गर्भाशय (Uterus) की सामान्य स्थिति क्या है?",
    "optionsEn": [
      "Ascending and transverse colon",
      "Transverse and descending colon",
      "Descending and sigmoid colon",
      "Sigmoid and rectum"
    ],
    "optionsHi": [
      "पीछे झुका",
      "आगे झुका (Anteverted और Anteflexed)",
      "सीधा",
      "बगल में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The splenic (left colic) flexure is where transverse colon turns to become descending colon, near the spleen.",
    "explanationHi": "सामान्य गर्भाशय मूत्राशय के ऊपर आगे की ओर झुका होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-409",
    "questionEn": "The common bile duct and pancreatic duct join to form the:",
    "questionHi": "योनि का ऊपरी सिरा कहां जुड़ता है?",
    "optionsEn": [
      "Cystic duct",
      "Hepatic duct",
      "Hepatopancreatic ampulla",
      "Sphincter of Oddi"
    ],
    "optionsHi": [
      "मूत्राशय से",
      "गर्भाशय ग्रीवा (Cervix) से",
      "गर्भाशय के शरीर से",
      "डिंबवाहिनी से"
    ],
    "correctAnswer": 2,
    "explanationEn": "The hepatopancreatic ampulla (ampulla of Vater) is where common bile duct and main pancreatic duct unite.",
    "explanationHi": "योनि का ऊपरी सिरा गर्भाशय ग्रीवा के चारों ओर जुड़ता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-410",
    "questionEn": "The liver receives blood from:",
    "questionHi": "पोस्टीरियर फॉर्निक्स (Posterior Fornix) क्या है?",
    "optionsEn": [
      "Hepatic artery only",
      "Portal vein only",
      "Both hepatic artery and portal vein",
      "Hepatic vein"
    ],
    "optionsHi": [
      "गर्भाशय का भाग",
      "योनि का ग्रीवा के पीछे का गहरा भाग",
      "डिंबवाहिनी",
      "अंडाशय"
    ],
    "correctAnswer": 2,
    "explanationEn": "Liver has dual blood supply: hepatic artery (oxygenated, 25%) and portal vein (nutrient-rich from GI, 75%).",
    "explanationHi": "पोस्टीरियर फॉर्निक्स योनि का गर्भाशय ग्रीवा के पीछे का सबसे गहरा भाग है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-411",
    "questionEn": "The gallbladder functions to:",
    "questionHi": "रेक्टस एब्डोमिनिस (Rectus Abdominis) पेशी कहां है?",
    "optionsEn": [
      "Produce bile",
      "Store and concentrate bile",
      "Produce digestive enzymes",
      "Absorb nutrients"
    ],
    "optionsHi": [
      "पीठ में",
      "पेट के सामने मध्य रेखा के दोनों ओर",
      "जांघ में",
      "बाहु में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The gallbladder stores bile produced by the liver and concentrates it up to 10 times.",
    "explanationHi": "रेक्टस एब्डोमिनिस पेट की सामने की मध्य पेशी है जो 'सिक्स पैक' बनाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-412",
    "questionEn": "The pancreas is located:",
    "questionHi": "लिनिया अल्बा (Linea Alba) क्या है?",
    "optionsEn": [
      "In the pelvis",
      "Retroperitoneal behind stomach",
      "In the chest",
      "Anterior to stomach"
    ],
    "optionsHi": [
      "एक पेशी",
      "पेट के बीच में रेशेदार रेखा",
      "एक तंत्रिका",
      "एक धमनी"
    ],
    "correctAnswer": 1,
    "explanationEn": "The pancreas lies retroperitoneally across the posterior abdominal wall, behind the stomach.",
    "explanationHi": "लिनिया अल्बा पेट की मध्य रेखा में रेशेदार संयोजी ऊतक की सफेद रेखा है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-413",
    "questionEn": "Kupffer cells in the liver are:",
    "questionHi": "डायस्टेसिस रेक्टी (Diastasis Recti) क्या है?",
    "optionsEn": [
      "Hepatocytes",
      "Macrophages",
      "Endothelial cells",
      "Stellate cells"
    ],
    "optionsHi": [
      "पेशी फटना",
      "रेक्टस एब्डोमिनिस के बीच लिनिया अल्बा का चौड़ा होना",
      "हर्निया",
      "संक्रमण"
    ],
    "correctAnswer": 1,
    "explanationEn": "Kupffer cells are liver macrophages that remove bacteria, debris, and old RBCs from portal blood.",
    "explanationHi": "डायस्टेसिस रेक्टी में दोनों रेक्टस पेशियां अलग हो जाती हैं, गर्भावस्था में आम।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-414",
    "questionEn": "The greater omentum hangs from the:",
    "questionHi": "एक्सटरनल ऑब्लीक (External Oblique) पेशी के तंतु किस दिशा में होते हैं?",
    "optionsEn": [
      "Lesser curvature of stomach",
      "Greater curvature of stomach",
      "Liver",
      "Small intestine"
    ],
    "optionsHi": [
      "सीधे ऊपर-नीचे",
      "ऊपर से नीचे और बाहर से अंदर (जेब में हाथ डालने की दिशा)",
      "आड़े",
      "गोलाकार"
    ],
    "correctAnswer": 1,
    "explanationEn": "The greater omentum is a fatty apron attached to the greater curvature, covering intestines anteriorly.",
    "explanationHi": "एक्सटरनल ऑब्लीक के तंतु जेब में हाथ डालने की दिशा में होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-415",
    "questionEn": "Adults have how many permanent teeth?",
    "questionHi": "इंटरनल ऑब्लीक (Internal Oblique) पेशी के तंतु किस दिशा में होते हैं?",
    "optionsEn": [
      "20",
      "28",
      "32",
      "36"
    ],
    "optionsHi": [
      "एक्सटरनल ऑब्लीक के समान",
      "एक्सटरनल ऑब्लीक के विपरीत (नीचे से ऊपर और बाहर)",
      "सीधे",
      "गोलाकार"
    ],
    "correctAnswer": 2,
    "explanationEn": "Adults have 32 permanent teeth: 8 incisors, 4 canines, 8 premolars, 12 molars (including wisdom teeth).",
    "explanationHi": "इंटरनल ऑब्लीक के तंतु एक्सटरनल ऑब्लीक के लंबवत होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-416",
    "questionEn": "The functional unit of the nervous system is the:",
    "questionHi": "ट्रांसवर्सस एब्डोमिनिस (Transversus Abdominis) क्या करती है?",
    "optionsEn": [
      "Brain",
      "Nerve",
      "Neuron",
      "Ganglion"
    ],
    "optionsHi": [
      "रीढ़ मोड़ती है",
      "पेट को संकुचित करती है और कोर स्थिरता देती है",
      "कूल्हा मोड़ती है",
      "कंधा घुमाती है"
    ],
    "correctAnswer": 2,
    "explanationEn": "Neurons (nerve cells) are the functional units that generate and transmit electrical signals.",
    "explanationHi": "ट्रांसवर्सस एब्डोमिनिस सबसे गहरी पेट की पेशी है जो कोर स्थिरता में महत्वपूर्ण है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-417",
    "questionEn": "Dendrites function to:",
    "questionHi": "क्वाड्रेटस लंबोरम (Quadratus Lumborum) कहां है?",
    "optionsEn": [
      "Conduct impulses away from cell body",
      "Receive signals",
      "Release neurotransmitters",
      "Produce myelin"
    ],
    "optionsHi": [
      "पेट के सामने",
      "पीठ के निचले भाग में पसलियों और श्रोणि के बीच",
      "जांघ में",
      "बाहु में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dendrites are the receiving portion of neurons, bringing signals toward the cell body.",
    "explanationHi": "क्वाड्रेटस लंबोरम पीठ के निचले भाग में गहरी पेशी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-418",
    "questionEn": "Myelination in the CNS is performed by:",
    "questionHi": "इलियोपोसोस (Iliopsoas) पेशी क्या करती है?",
    "optionsEn": [
      "Schwann cells",
      "Oligodendrocytes",
      "Astrocytes",
      "Microglia"
    ],
    "optionsHi": [
      "कूल्हा सीधा करती है",
      "कूल्हा मोड़ती है (Hip Flexion)",
      "घुटना मोड़ती है",
      "टखना मोड़ती है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Oligodendrocytes myelinate CNS axons. Schwann cells myelinate PNS axons.",
    "explanationHi": "इलियोपोसोस मुख्य हिप फ्लेक्सर है जो जांघ को ऊपर उठाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-419",
    "questionEn": "The largest part of the brain is the:",
    "questionHi": "ग्लूटियस मैक्सिमस (Gluteus Maximus) क्या करती है?",
    "optionsEn": [
      "Cerebellum",
      "Brainstem",
      "Cerebrum",
      "Diencephalon"
    ],
    "optionsHi": [
      "कूल्हा मोड़ती है",
      "कूल्हा सीधा करती है (Hip Extension)",
      "घुटना मोड़ती है",
      "टखना मोड़ती है"
    ],
    "correctAnswer": 2,
    "explanationEn": "The cerebrum makes up about 83% of brain mass and is responsible for higher functions.",
    "explanationHi": "ग्लूटियस मैक्सिमस सबसे बड़ी नितंब पेशी है जो कूल्हा सीधा करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-420",
    "questionEn": "The two cerebral hemispheres are connected by the:",
    "questionHi": "ग्लूटियस मीडियस (Gluteus Medius) का मुख्य कार्य क्या है?",
    "optionsEn": [
      "Pons",
      "Corpus callosum",
      "Thalamus",
      "Brainstem"
    ],
    "optionsHi": [
      "कूल्हा सीधा करना",
      "कूल्हे का अपहरण (Abduction) और चलते समय श्रोणि स्थिर करना",
      "घुटना मोड़ना",
      "टखना मोड़ना"
    ],
    "correctAnswer": 1,
    "explanationEn": "The corpus callosum is a large bundle of white matter fibers connecting the two hemispheres.",
    "explanationHi": "ग्लूटियस मीडियस चलने के दौरान श्रोणि को स्थिर रखने में महत्वपूर्ण है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-421",
    "questionEn": "The primary motor cortex is located in the:",
    "questionHi": "ट्रेंडेलेनबर्ग साइन (Trendelenburg Sign) किस पेशी की कमजोरी दर्शाता है?",
    "optionsEn": [
      "Postcentral gyrus",
      "Precentral gyrus",
      "Occipital lobe",
      "Temporal lobe"
    ],
    "optionsHi": [
      "ग्लूटियस मैक्सिमस",
      "ग्लूटियस मीडियस",
      "क्वाड्रिसेप्स",
      "हैमस्ट्रिंग"
    ],
    "correctAnswer": 1,
    "explanationEn": "The precentral gyrus (frontal lobe, anterior to central sulcus) contains the primary motor cortex.",
    "explanationHi": "ग्लूटियस मीडियस की कमजोरी में एक पैर पर खड़े होने पर श्रोणि नीचे गिरती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-422",
    "questionEn": "Damage to Broca's area results in:",
    "questionHi": "क्वाड्रिसेप्स (Quadriceps) में कितनी पेशियां हैं?",
    "optionsEn": [
      "Inability to understand speech",
      "Inability to produce speech",
      "Blindness",
      "Deafness"
    ],
    "optionsHi": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "explanationEn": "Broca's area (left frontal lobe) controls speech production. Damage causes expressive (motor) aphasia.",
    "explanationHi": "क्वाड्रिसेप्स में 4 पेशियां हैं: रेक्टस फीमोरिस, वास्टस लेटरालिस, वास्टस मीडियालिस, वास्टस इंटरमीडियस।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-423",
    "questionEn": "The thalamus functions primarily as a:",
    "questionHi": "क्वाड्रिसेप्स किस जोड़ को सीधा करती है?",
    "optionsEn": [
      "Motor control center",
      "Sensory relay station",
      "Memory center",
      "Hormone regulator"
    ],
    "optionsHi": [
      "कूल्हा",
      "घुटना",
      "टखना",
      "कोहनी"
    ],
    "correctAnswer": 1,
    "explanationEn": "The thalamus relays sensory information (except smell) to the appropriate cortical areas.",
    "explanationHi": "क्वाड्रिसेप्स घुटने को सीधा करने वाली मुख्य पेशी समूह है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-424",
    "questionEn": "The hypothalamus controls all EXCEPT:",
    "questionHi": "हैमस्ट्रिंग (Hamstrings) में कौन सी पेशियां हैं?",
    "optionsEn": [
      "Body temperature",
      "Hunger",
      "Voluntary movement",
      "Sleep-wake cycle"
    ],
    "optionsHi": [
      "केवल बाइसेप्स फीमोरिस",
      "बाइसेप्स फीमोरिस, सेमीटेंडिनोसस, सेमीमेम्ब्रेनोसस",
      "केवल क्वाड्रिसेप्स",
      "ग्लूटियस"
    ],
    "correctAnswer": 2,
    "explanationEn": "Hypothalamus controls homeostatic functions. Voluntary movement is controlled by motor cortex.",
    "explanationHi": "हैमस्ट्रिंग जांघ के पीछे की तीन पेशियों का समूह है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-425",
    "questionEn": "The vital centers for heart rate and breathing are in the:",
    "questionHi": "हैमस्ट्रिंग क्या करती हैं?",
    "optionsEn": [
      "Cerebrum",
      "Cerebellum",
      "Medulla oblongata",
      "Thalamus"
    ],
    "optionsHi": [
      "घुटना सीधा करती हैं",
      "घुटना मोड़ती हैं और कूल्हा सीधा करती हैं",
      "कूल्हा मोड़ती हैं",
      "टखना मोड़ती हैं"
    ],
    "correctAnswer": 2,
    "explanationEn": "The medulla contains vital centers controlling heart rate, blood pressure, and respiratory rhythm.",
    "explanationHi": "हैमस्ट्रिंग घुटने को मोड़ती हैं और कूल्हे को सीधा करने में मदद करती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-426",
    "questionEn": "The cerebellum is responsible for:",
    "questionHi": "गैस्ट्रोकनीमियस (Gastrocnemius) पेशी कहां है?",
    "optionsEn": [
      "Vision",
      "Hearing",
      "Coordination and balance",
      "Speech"
    ],
    "optionsHi": [
      "जांघ में",
      "पिंडली के पीछे",
      "पैर में",
      "बाहु में"
    ],
    "correctAnswer": 2,
    "explanationEn": "The cerebellum coordinates voluntary movements, maintains balance and posture.",
    "explanationHi": "गैस्ट्रोकनीमियस पिंडली के पीछे की बड़ी पेशी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-427",
    "questionEn": "CSF is produced by the:",
    "questionHi": "गैस्ट्रोकनीमियस और सोलियस मिलकर क्या बनाते हैं?",
    "optionsEn": [
      "Meninges",
      "Choroid plexus",
      "Ependymal cells only",
      "Arachnoid villi"
    ],
    "optionsHi": [
      "क्वाड्रिसेप्स",
      "ट्राइसेप्स सुरे (Triceps Surae)",
      "हैमस्ट्रिंग",
      "इलियोपोसोस"
    ],
    "correctAnswer": 1,
    "explanationEn": "The choroid plexus in the ventricles produces CSF. Arachnoid villi absorb CSF back into blood.",
    "explanationHi": "गैस्ट्रोकनीमियस और सोलियस मिलकर अकिलीज टेंडन से जुड़ते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-428",
    "questionEn": "The spinal cord ends at approximately:",
    "questionHi": "टिबियालिस एंटीरियर (Tibialis Anterior) क्या करती है?",
    "optionsEn": [
      "T12",
      "L1-L2",
      "L5",
      "S1"
    ],
    "optionsHi": [
      "पैर को नीचे झुकाती है",
      "पैर को ऊपर उठाती है (Dorsiflexion)",
      "घुटना मोड़ती है",
      "कूल्हा मोड़ती है"
    ],
    "correctAnswer": 1,
    "explanationEn": "The spinal cord (conus medullaris) ends at L1-L2 level. Below this are nerve roots (cauda equina).",
    "explanationHi": "टिबियालिस एंटीरियर पैर को ऊपर उठाती है और चलने में मदद करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-429",
    "questionEn": "How many pairs of spinal nerves are there?",
    "questionHi": "पेरोनियस लॉन्गस (Peroneus Longus) क्या करती है?",
    "optionsEn": [
      "12",
      "24",
      "31",
      "42"
    ],
    "optionsHi": [
      "पैर को ऊपर उठाती है",
      "पैर को बाहर की ओर मोड़ती है (Eversion)",
      "घुटना मोड़ती है",
      "कूल्हा मोड़ती है"
    ],
    "correctAnswer": 2,
    "explanationEn": "There are 31 pairs: 8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal.",
    "explanationHi": "पेरोनियस लॉन्गस पैर के तलवे को बाहर की ओर मोड़ती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-430",
    "questionEn": "The dorsal root of a spinal nerve contains:",
    "questionHi": "बाइसेप्स ब्रेकाई (Biceps Brachii) कहां है?",
    "optionsEn": [
      "Motor fibers only",
      "Sensory fibers only",
      "Both motor and sensory",
      "Autonomic fibers only"
    ],
    "optionsHi": [
      "जांघ में",
      "बाहु के सामने",
      "पीठ में",
      "छाती में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dorsal roots carry sensory (afferent) fibers into the spinal cord. Ventral roots carry motor (efferent) fibers.",
    "explanationHi": "बाइसेप्स ब्रेकाई बाहु के सामने की पेशी है जो कोहनी मोड़ती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-431",
    "questionEn": "The sciatic nerve arises from the:",
    "questionHi": "ट्राइसेप्स ब्रेकाई (Triceps Brachii) क्या करती है?",
    "optionsEn": [
      "Cervical plexus",
      "Brachial plexus",
      "Lumbar plexus",
      "Sacral plexus"
    ],
    "optionsHi": [
      "कोहनी मोड़ती है",
      "कोहनी सीधी करती है",
      "कंधा मोड़ती है",
      "कलाई मोड़ती है"
    ],
    "correctAnswer": 3,
    "explanationEn": "The sciatic nerve (largest nerve in body) arises from the sacral plexus (L4-S3).",
    "explanationHi": "ट्राइसेप्स बाहु के पीछे की पेशी है जो कोहनी को सीधा करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-432",
    "questionEn": "The phrenic nerve supplies the:",
    "questionHi": "डेल्टॉयड (Deltoid) पेशी क्या करती है?",
    "optionsEn": [
      "Heart",
      "Diaphragm",
      "Lungs",
      "Stomach"
    ],
    "optionsHi": [
      "कोहनी मोड़ती है",
      "कंधे का अपहरण (Abduction)",
      "घुटना मोड़ती है",
      "कलाई मोड़ती है"
    ],
    "correctAnswer": 1,
    "explanationEn": "The phrenic nerve (C3-C5) provides motor innervation to the diaphragm. 'C3, 4, 5 keeps the diaphragm alive.'",
    "explanationHi": "डेल्टॉयड कंधे की पेशी है जो बाहु को बाहर की ओर उठाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-433",
    "questionEn": "The vagus nerve is cranial nerve number:",
    "questionHi": "सुप्रास्पिनेटस (Supraspinatus) क्या करती है?",
    "optionsEn": [
      "VII",
      "IX",
      "X",
      "XII"
    ],
    "optionsHi": [
      "कोहनी मोड़ती है",
      "बाहु का प्रारंभिक अपहरण (0-15°)",
      "घुटना मोड़ती है",
      "कलाई मोड़ती है"
    ],
    "correctAnswer": 2,
    "explanationEn": "The vagus nerve (CN X) is the main parasympathetic nerve, controlling heart, lungs, and GI tract.",
    "explanationHi": "सुप्रास्पिनेटस बाहु को उठाने की शुरुआत करती है और रोटेटर कफ का हिस्सा है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-434",
    "questionEn": "Sympathetic stimulation causes the pupils to:",
    "questionHi": "इन्फ्रास्पिनेटस (Infraspinatus) क्या करती है?",
    "optionsEn": [
      "Constrict",
      "Dilate",
      "Stay the same",
      "Close"
    ],
    "optionsHi": [
      "आंतरिक घुमाव",
      "बाहरी घुमाव (External Rotation)",
      "कोहनी मोड़ना",
      "घुटना मोड़ना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sympathetic stimulation causes mydriasis (pupil dilation). Parasympathetic causes miosis (constriction).",
    "explanationHi": "इन्फ्रास्पिनेटस कंधे का बाहरी घुमाव करती है और रोटेटर कफ का हिस्सा है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-435",
    "questionEn": "The patellar reflex tests spinal levels:",
    "questionHi": "सबस्कैपुलारिस (Subscapularis) क्या करती है?",
    "optionsEn": [
      "C5-C6",
      "T1-T2",
      "L2-L4",
      "S1-S2"
    ],
    "optionsHi": [
      "बाहरी घुमाव",
      "आंतरिक घुमाव (Internal Rotation)",
      "कोहनी मोड़ना",
      "घुटना मोड़ना"
    ],
    "correctAnswer": 2,
    "explanationEn": "The patellar (knee-jerk) reflex tests the L2-L4 spinal segments via the femoral nerve.",
    "explanationHi": "सबस्कैपुलारिस कंधे का आंतरिक घुमाव करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-436",
    "questionEn": "The maximum Glasgow Coma Scale score is:",
    "questionHi": "पेक्टोरालिस मेजर (Pectoralis Major) कहां है?",
    "optionsEn": [
      "10",
      "12",
      "15",
      "20"
    ],
    "optionsHi": [
      "पीठ में",
      "छाती के सामने",
      "पेट में",
      "जांघ में"
    ],
    "correctAnswer": 2,
    "explanationEn": "GCS: Eye opening (4) + Verbal (5) + Motor (6) = 15 maximum. Minimum is 3.",
    "explanationHi": "पेक्टोरालिस मेजर छाती की बड़ी पेशी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-437",
    "questionEn": "A GCS score of 7 indicates:",
    "questionHi": "लैटिसिमस डॉर्सी (Latissimus Dorsi) क्या करती है?",
    "optionsEn": [
      "Normal consciousness",
      "Mild impairment",
      "Severe brain injury",
      "Death"
    ],
    "optionsHi": [
      "बाहु उठाती है",
      "बाहु को नीचे और पीछे खींचती है (Adduction, Extension)",
      "कोहनी मोड़ती है",
      "घुटना मोड़ती है"
    ],
    "correctAnswer": 2,
    "explanationEn": "GCS ≤8 indicates severe brain injury (coma). 9-12 is moderate, 13-15 is mild.",
    "explanationHi": "लैटिसिमस डॉर्सी पीठ की बड़ी पेशी है जो पुल-अप में मदद करती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-438",
    "questionEn": "FAST is used to assess for:",
    "questionHi": "ट्रेपेजियस (Trapezius) कहां है?",
    "optionsEn": [
      "Heart attack",
      "Stroke",
      "Seizure",
      "Diabetes"
    ],
    "optionsHi": [
      "छाती में",
      "पीठ के ऊपरी भाग और गर्दन में",
      "पेट में",
      "जांघ में"
    ],
    "correctAnswer": 1,
    "explanationEn": "FAST: Face drooping, Arm weakness, Speech difficulty, Time to call emergency - stroke assessment.",
    "explanationHi": "ट्रेपेजियस गर्दन से मध्य पीठ तक फैली बड़ी पेशी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-439",
    "questionEn": "Each kidney contains approximately how many nephrons?",
    "questionHi": "रॉम्बॉयड्स (Rhomboids) क्या करती हैं?",
    "optionsEn": [
      "100,000",
      "500,000",
      "1 million",
      "5 million"
    ],
    "optionsHi": [
      "स्कैपुला को आगे करती हैं",
      "स्कैपुला को पीछे खींचती हैं (Retraction)",
      "बाहु उठाती हैं",
      "गर्दन मोड़ती हैं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Each kidney contains about 1 million nephrons, the functional units of the kidney.",
    "explanationHi": "रॉम्बॉयड्स स्कैपुला को रीढ़ की ओर खींचती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-440",
    "questionEn": "The right kidney is slightly lower than the left because of the:",
    "questionHi": "सेराटस एंटीरियर (Serratus Anterior) क्या करती है?",
    "optionsEn": [
      "Heart",
      "Liver",
      "Spleen",
      "Stomach"
    ],
    "optionsHi": [
      "स्कैपुला पीछे करती है",
      "स्कैपुला को आगे और बाहर करती है (Protraction)",
      "बाहु उठाती है",
      "गर्दन मोड़ती है"
    ],
    "correctAnswer": 1,
    "explanationEn": "The large right lobe of the liver pushes the right kidney slightly lower than the left.",
    "explanationHi": "सेराटस एंटीरियर स्कैपुला को छाती की दीवार पर स्थिर रखती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-441",
    "questionEn": "The renal cortex is the:",
    "questionHi": "विंग्ड स्कैपुला (Winged Scapula) किस पेशी की कमजोरी से होता है?",
    "optionsEn": [
      "Inner region",
      "Outer region",
      "Central pelvis",
      "Collecting system"
    ],
    "optionsHi": [
      "ट्रेपेजियस",
      "सेराटस एंटीरियर",
      "रॉम्बॉयड्स",
      "लैटिसिमस"
    ],
    "correctAnswer": 1,
    "explanationEn": "The cortex is the outer region containing glomeruli. The medulla is the inner region with pyramids.",
    "explanationHi": "सेराटस एंटीरियर की कमजोरी से स्कैपुला का किनारा उभर आता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-442",
    "questionEn": "The afferent arteriole brings blood to the:",
    "questionHi": "स्टर्नोक्लाइडोमास्टॉयड (Sternocleidomastoid) क्या करती है?",
    "optionsEn": [
      "Renal pelvis",
      "Glomerulus",
      "Loop of Henle",
      "Collecting duct"
    ],
    "optionsHi": [
      "कंधा उठाती है",
      "गर्दन को विपरीत दिशा में घुमाती है और आगे झुकाती है",
      "बाहु उठाती है",
      "पीठ सीधी करती है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Afferent arteriole brings blood TO the glomerulus; efferent arteriole takes blood AWAY.",
    "explanationHi": "दोनों SCM मिलकर गर्दन आगे झुकाती हैं; एक पक्ष गर्दन को विपरीत ओर घुमाता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-443",
    "questionEn": "Bowman's capsule surrounds the:",
    "questionHi": "इरेक्टर स्पाइने (Erector Spinae) का कार्य क्या है?",
    "optionsEn": [
      "Loop of Henle",
      "Glomerulus",
      "Collecting duct",
      "Renal pelvis"
    ],
    "optionsHi": [
      "रीढ़ मोड़ना",
      "रीढ़ सीधी करना और सीधी मुद्रा बनाए रखना",
      "कूल्हा मोड़ना",
      "घुटना मोड़ना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Bowman's capsule is a cup-shaped structure that surrounds the glomerulus, collecting filtrate.",
    "explanationHi": "इरेक्टर स्पाइने रीढ़ के साथ चलने वाली पेशियों का समूह है जो रीढ़ सीधी करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-444",
    "questionEn": "Most glucose reabsorption occurs in the:",
    "questionHi": "मल्टीफिडस (Multifidus) पेशी क्या करती है?",
    "optionsEn": [
      "Glomerulus",
      "Proximal convoluted tubule",
      "Loop of Henle",
      "Collecting duct"
    ],
    "optionsHi": [
      "रीढ़ मोड़ती है",
      "कशेरुकाओं के बीच स्थिरता प्रदान करती है",
      "कूल्हा मोड़ती है",
      "घुटना मोड़ती है"
    ],
    "correctAnswer": 1,
    "explanationEn": "The PCT reabsorbs most filtered substances including glucose, amino acids, sodium, and water.",
    "explanationHi": "मल्टीफिडस रीढ़ की गहरी पेशी है जो खंडीय स्थिरता देती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-445",
    "questionEn": "The loop of Henle is primarily responsible for:",
    "questionHi": "डायफ्राम (Diaphragm) का मुख्य कार्य क्या है?",
    "optionsEn": [
      "Filtration",
      "Creating concentration gradient",
      "Acid-base balance",
      "Hormone production"
    ],
    "optionsHi": [
      "पाचन",
      "श्वास का मुख्य स्रोत (साँस लेना)",
      "रक्त संचार",
      "मूत्र निर्माण"
    ],
    "correctAnswer": 1,
    "explanationEn": "The loop of Henle creates a concentration gradient in the medulla, enabling urine concentration.",
    "explanationHi": "डायफ्राम श्वास की मुख्य पेशी है जो साँस लेने पर नीचे जाती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-446",
    "questionEn": "Urine from the collecting ducts drains into the:",
    "questionHi": "इंटरकोस्टल पेशियां (Intercostal Muscles) क्या करती हैं?",
    "optionsEn": [
      "Glomerulus",
      "Minor calyx",
      "Ureter directly",
      "Bladder"
    ],
    "optionsHi": [
      "पाचन",
      "श्वास में पसलियों को उठाने और नीचे करने में मदद",
      "रक्त संचार",
      "मूत्र निर्माण"
    ],
    "correctAnswer": 1,
    "explanationEn": "Collecting ducts → Renal papilla → Minor calyx → Major calyx → Renal pelvis → Ureter.",
    "explanationHi": "इंटरकोस्टल पेशियां पसलियों के बीच होती हैं और श्वास में सहायक हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-447",
    "questionEn": "The ureter is approximately:",
    "questionHi": "मास्सेटर (Masseter) पेशी क्या करती है?",
    "optionsEn": [
      "10 cm",
      "25-30 cm",
      "50 cm",
      "75 cm"
    ],
    "optionsHi": [
      "जीभ हिलाती है",
      "जबड़ा बंद करती है (चबाना)",
      "होंठ हिलाती है",
      "आंख बंद करती है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Each ureter is about 25-30 cm long, transporting urine from kidney to bladder by peristalsis.",
    "explanationHi": "मास्सेटर चबाने की मुख्य पेशी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-448",
    "questionEn": "The three narrow points of the ureter where stones commonly lodge are all EXCEPT:",
    "questionHi": "टेम्पोरालिस (Temporalis) पेशी कहां है?",
    "optionsEn": [
      "Ureteropelvic junction",
      "Crossing iliac vessels",
      "Mid-ureter",
      "Ureterovesical junction"
    ],
    "optionsHi": [
      "गाल पर",
      "कनपटी पर (Temporal Region)",
      "माथे पर",
      "ठोड़ी पर"
    ],
    "correctAnswer": 2,
    "explanationEn": "Stones lodge at: 1) UPJ, 2) crossing iliac vessels, 3) ureterovesical junction (entering bladder).",
    "explanationHi": "टेम्पोरालिस कनपटी पर चबाने वाली पेशी है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-449",
    "questionEn": "The trigone of the bladder is bounded by:",
    "questionHi": "ऑर्बिक्युलारिस ऑक्युली (Orbicularis Oculi) क्या करती है?",
    "optionsEn": [
      "Three muscles",
      "Two ureteral openings and urethral opening",
      "Detrusor layers",
      "Mucosa folds"
    ],
    "optionsHi": [
      "मुंह बंद करती है",
      "आंख बंद करती है",
      "नाक फुलाती है",
      "कान हिलाती है"
    ],
    "correctAnswer": 1,
    "explanationEn": "The trigone is a smooth triangular area with two ureteral openings (upper corners) and urethral opening (lower).",
    "explanationHi": "ऑर्बिक्युलारिस ऑक्युली आंख के चारों ओर की वृत्ताकार पेशी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-450",
    "questionEn": "The male urethra passes through the:",
    "questionHi": "ऑर्बिक्युलारिस ओरिस (Orbicularis Oris) क्या करती है?",
    "optionsEn": [
      "Bladder only",
      "Prostate and penis",
      "Kidney",
      "Ureter"
    ],
    "optionsHi": [
      "आंख बंद करती है",
      "होंठ बंद करती है",
      "नाक फुलाती है",
      "कान हिलाती है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Male urethra (~20 cm) passes through prostate, urogenital diaphragm, and penis.",
    "explanationHi": "ऑर्बिक्युलारिस ओरिस मुंह के चारों ओर की वृत्ताकार पेशी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-451",
    "questionEn": "The testes are located in the:",
    "questionHi": "फेशियल नर्व (Facial Nerve - CN VII) किन पेशियों को नियंत्रित करती है?",
    "optionsEn": [
      "Abdomen",
      "Pelvis",
      "Scrotum",
      "Perineum"
    ],
    "optionsHi": [
      "चबाने वाली",
      "चेहरे के भाव वाली पेशियां",
      "जीभ की पेशियां",
      "आंख की पेशियां"
    ],
    "correctAnswer": 2,
    "explanationEn": "The testes are in the scrotum outside the body to maintain optimal temperature for sperm production.",
    "explanationHi": "फेशियल नर्व चेहरे के सभी भाव प्रदर्शित करने वाली पेशियों को नियंत्रित करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-452",
    "questionEn": "Sertoli cells in the testes:",
    "questionHi": "बेल्स पाल्सी (Bell's Palsy) में कौन सी तंत्रिका प्रभावित होती है?",
    "optionsEn": [
      "Produce testosterone",
      "Support sperm development",
      "Produce FSH",
      "Contract the scrotum"
    ],
    "optionsHi": [
      "ट्राइजेमिनल",
      "फेशियल (CN VII)",
      "वेगस",
      "ऑक्युलोमोटर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sertoli (nurse) cells support, nourish, and protect developing sperm cells in seminiferous tubules.",
    "explanationHi": "बेल्स पाल्सी में फेशियल नर्व प्रभावित होती है जिससे एक तरफ का चेहरा लकवाग्रस्त हो जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-453",
    "questionEn": "The epididymis is the site of:",
    "questionHi": "ट्राइजेमिनल नर्व (Trigeminal Nerve - CN V) क्या करती है?",
    "optionsEn": [
      "Sperm production",
      "Sperm maturation and storage",
      "Testosterone production",
      "Semen production"
    ],
    "optionsHi": [
      "चेहरे के भाव",
      "चेहरे की संवेदना और चबाना",
      "सुनना",
      "देखना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sperm mature and are stored in the epididymis before being transported via the vas deferens.",
    "explanationHi": "ट्राइजेमिनल नर्व चेहरे की संवेदना और चबाने वाली पेशियों को नियंत्रित करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-454",
    "questionEn": "A vasectomy involves cutting the:",
    "questionHi": "वेगस नर्व (Vagus Nerve - CN X) क्या करती है?",
    "optionsEn": [
      "Epididymis",
      "Vas deferens",
      "Urethra",
      "Seminal vesicle"
    ],
    "optionsHi": [
      "केवल हृदय",
      "हृदय, फेफड़े, पाचन तंत्र का पैरासिम्पेथेटिक नियंत्रण",
      "केवल पाचन",
      "केवल श्वास"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vasectomy involves cutting and sealing the vas deferens to prevent sperm from reaching semen.",
    "explanationHi": "वेगस नर्व सबसे लंबी कपाल तंत्रिका है और अधिकांश वक्ष व उदर अंगों को नियंत्रित करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-455",
    "questionEn": "The prostate gland surrounds the:",
    "questionHi": "ऑल्फैक्टरी नर्व (Olfactory Nerve - CN I) क्या करती है?",
    "optionsEn": [
      "Bladder",
      "Prostatic urethra",
      "Vas deferens",
      "Penis"
    ],
    "optionsHi": [
      "देखना",
      "सूंघना (Smell)",
      "सुनना",
      "स्वाद"
    ],
    "correctAnswer": 1,
    "explanationEn": "The prostate surrounds the prostatic urethra just below the bladder.",
    "explanationHi": "ऑल्फैक्टरी नर्व गंध की संवेदना ले जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-456",
    "questionEn": "The seminal vesicles contribute approximately what percentage of semen?",
    "questionHi": "ऑप्टिक नर्व (Optic Nerve - CN II) क्या करती है?",
    "optionsEn": [
      "10%",
      "30%",
      "60%",
      "90%"
    ],
    "optionsHi": [
      "सूंघना",
      "देखना (Vision)",
      "सुनना",
      "स्वाद"
    ],
    "correctAnswer": 2,
    "explanationEn": "Seminal vesicles produce about 60% of semen volume (fructose-rich fluid).",
    "explanationHi": "ऑप्टिक नर्व रेटिना से मस्तिष्क तक दृश्य संकेत ले जाती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-457",
    "questionEn": "The ovaries are located:",
    "questionHi": "ऑक्युलोमोटर नर्व (Oculomotor Nerve - CN III) क्या करती है?",
    "optionsEn": [
      "In the abdomen",
      "In the pelvis, lateral to uterus",
      "Outside the body",
      "In the vagina"
    ],
    "optionsHi": [
      "देखना",
      "अधिकांश आंख की पेशियां, पुतली संकुचन, पलक उठाना",
      "सुनना",
      "सूंघना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ovaries are in the pelvis on either side of the uterus, attached by ligaments.",
    "explanationHi": "ऑक्युलोमोटर नर्व आंख की अधिकांश बाहरी पेशियों और पुतली को नियंत्रित करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-458",
    "questionEn": "The fallopian tubes are also called:",
    "questionHi": "एब्ड्यूसेंस नर्व (Abducens Nerve - CN VI) क्या करती है?",
    "optionsEn": [
      "Ovarian ducts",
      "Uterine tubes",
      "Birth canals",
      "Cervical canals"
    ],
    "optionsHi": [
      "आंख को अंदर घुमाती है",
      "आंख को बाहर घुमाती है (Lateral Rectus)",
      "पलक उठाती है",
      "पुतली संकुचित करती है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fallopian tubes (oviducts/uterine tubes) transport eggs from ovary to uterus.",
    "explanationHi": "एब्ड्यूसेंस नर्व लेटरल रेक्टस पेशी को नियंत्रित करती है जो आंख को बाहर घुमाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-459",
    "questionEn": "Fertilization normally occurs in the:",
    "questionHi": "हाइपोग्लॉसल नर्व (Hypoglossal Nerve - CN XII) क्या करती है?",
    "optionsEn": [
      "Ovary",
      "Ampulla of fallopian tube",
      "Uterus",
      "Cervix"
    ],
    "optionsHi": [
      "गंध",
      "जीभ की पेशियां (Tongue Movement)",
      "स्वाद",
      "चेहरे के भाव"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fertilization typically occurs in the ampulla (widest part) of the fallopian tube.",
    "explanationHi": "हाइपोग्लॉसल नर्व जीभ की पेशियों को नियंत्रित करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-460",
    "questionEn": "The innermost layer of the uterus is the:",
    "questionHi": "एक्सेसरी नर्व (Accessory Nerve - CN XI) क्या करती है?",
    "optionsEn": [
      "Perimetrium",
      "Myometrium",
      "Endometrium",
      "Parametrium"
    ],
    "optionsHi": [
      "चेहरे के भाव",
      "ट्रेपेजियस और स्टर्नोक्लाइडोमास्टॉयड पेशियां",
      "जीभ",
      "आंख"
    ],
    "correctAnswer": 2,
    "explanationEn": "The endometrium is the inner mucosal layer that thickens monthly and sheds during menstruation.",
    "explanationHi": "एक्सेसरी नर्व कंधा उठाने और गर्दन घुमाने वाली पेशियों को नियंत्रित करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-461",
    "questionEn": "The cervix is the:",
    "questionHi": "ग्लॉसोफैरिंजियल नर्व (Glossopharyngeal - CN IX) क्या करती है?",
    "optionsEn": [
      "Upper part of uterus",
      "Lower narrow part of uterus",
      "Vaginal opening",
      "Fallopian tube opening"
    ],
    "optionsHi": [
      "जीभ हिलाना",
      "पीछे की जीभ से स्वाद, निगलना, गैग रिफ्लेक्स",
      "चेहरे के भाव",
      "देखना"
    ],
    "correctAnswer": 1,
    "explanationEn": "The cervix is the lower, narrow portion of the uterus that opens into the vagina.",
    "explanationHi": "ग्लॉसोफैरिंजियल नर्व जीभ के पिछले 1/3 से स्वाद और ग्रसनी की संवेदना ले जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-462",
    "questionEn": "The vagina functions as all EXCEPT:",
    "questionHi": "सर्वाइकल प्लेक्सस (Cervical Plexus) किन मेरुरज्जु तंत्रिकाओं से बनता है?",
    "optionsEn": [
      "Birth canal",
      "Menstrual flow passage",
      "Organ of copulation",
      "Site of fertilization"
    ],
    "optionsHi": [
      "C1-C4",
      "C5-T1",
      "L1-L4",
      "S1-S4"
    ],
    "correctAnswer": 3,
    "explanationEn": "Fertilization occurs in the fallopian tube, not the vagina. Vagina is birth canal and menstrual passage.",
    "explanationHi": "सर्वाइकल प्लेक्सस C1-C4 मेरुरज्जु तंत्रिकाओं से बनता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-463",
    "questionEn": "The epidermis is derived from:",
    "questionHi": "ब्रेकियल प्लेक्सस (Brachial Plexus) किन मेरुरज्जु तंत्रिकाओं से बनता है?",
    "optionsEn": [
      "Mesoderm",
      "Ectoderm",
      "Endoderm",
      "Mesenchyme"
    ],
    "optionsHi": [
      "C1-C4",
      "C5-T1",
      "L1-L4",
      "S1-S4"
    ],
    "correctAnswer": 1,
    "explanationEn": "The epidermis develops from ectoderm; dermis develops from mesoderm.",
    "explanationHi": "ब्रेकियल प्लेक्सस C5-T1 से बनता है और ऊपरी अंग को तंत्रिकाएं देता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-464",
    "questionEn": "Keratinocytes produce:",
    "questionHi": "एर्ब्स पाल्सी (Erb's Palsy) में कौन सी जड़ें प्रभावित होती हैं?",
    "optionsEn": [
      "Melanin",
      "Keratin",
      "Sebum",
      "Sweat"
    ],
    "optionsHi": [
      "C8-T1",
      "C5-C6",
      "L4-L5",
      "S1-S2"
    ],
    "correctAnswer": 1,
    "explanationEn": "Keratinocytes produce keratin, a tough protein that waterproofs and protects the skin.",
    "explanationHi": "एर्ब्स पाल्सी में C5-C6 जड़ें प्रभावित होती हैं जिससे 'वेटर्स टिप' स्थिति होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-465",
    "questionEn": "The dermis contains all EXCEPT:",
    "questionHi": "क्लम्पकेस पाल्सी (Klumpke's Palsy) में कौन सी जड़ें प्रभावित होती हैं?",
    "optionsEn": [
      "Blood vessels",
      "Hair follicles",
      "Keratinocytes",
      "Nerve endings"
    ],
    "optionsHi": [
      "C5-C6",
      "C8-T1",
      "L4-L5",
      "S1-S2"
    ],
    "correctAnswer": 2,
    "explanationEn": "Keratinocytes are in the epidermis. Dermis contains vessels, nerves, follicles, and glands.",
    "explanationHi": "क्लम्पकेस पाल्सी में C8-T1 जड़ें प्रभावित होती हैं जिससे हाथ की छोटी पेशियों में कमजोरी होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-466",
    "questionEn": "The papillary layer of dermis creates:",
    "questionHi": "लंबर प्लेक्सस (Lumbar Plexus) किन मेरुरज्जु तंत्रिकाओं से बनता है?",
    "optionsEn": [
      "Hair",
      "Fingerprints",
      "Nails",
      "Sweat"
    ],
    "optionsHi": [
      "C1-C4",
      "C5-T1",
      "L1-L4",
      "S1-S4"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dermal papillae create ridges that form fingerprints (friction ridges) in overlying epidermis.",
    "explanationHi": "लंबर प्लेक्सस L1-L4 से बनता है और जांघ के सामने को तंत्रिकाएं देता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-467",
    "questionEn": "Subcutaneous tissue is also called:",
    "questionHi": "सैक्रल प्लेक्सस (Sacral Plexus) किन मेरुरज्जु तंत्रिकाओं से बनता है?",
    "optionsEn": [
      "Epidermis",
      "Dermis",
      "Hypodermis",
      "Fascia"
    ],
    "optionsHi": [
      "C1-C4",
      "C5-T1",
      "L4-S3",
      "T1-T12"
    ],
    "correctAnswer": 2,
    "explanationEn": "The hypodermis (subcutaneous layer) lies below the dermis, containing fat for insulation and cushioning.",
    "explanationHi": "सैक्रल प्लेक्सस L4-S3 से बनता है और निचले अंग के पिछले भाग को तंत्रिकाएं देता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-468",
    "questionEn": "The vitreous humor is found in the:",
    "questionHi": "मस्कुलोक्यूटेनियस नर्व (Musculocutaneous Nerve) क्या करती है?",
    "optionsEn": [
      "Anterior chamber of eye",
      "Posterior chamber of eye",
      "Vitreous chamber",
      "Lens"
    ],
    "optionsHi": [
      "कोहनी सीधी करती है",
      "कोहनी मोड़ती है (बाइसेप्स)",
      "कंधा घुमाती है",
      "कलाई मोड़ती है"
    ],
    "correctAnswer": 2,
    "explanationEn": "Vitreous humor is gel-like fluid filling the large vitreous chamber behind the lens.",
    "explanationHi": "मस्कुलोक्यूटेनियस नर्व बाहु के सामने की पेशियों को नियंत्रित करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-469",
    "questionEn": "The ciliary body controls:",
    "questionHi": "कार्पल टनल सिंड्रोम में क्या होता है?",
    "optionsEn": [
      "Pupil size",
      "Lens shape",
      "Eye color",
      "Tear production"
    ],
    "optionsHi": [
      "अल्नार तंत्रिका दबती है",
      "मीडियन तंत्रिका कलाई पर दबती है",
      "रेडियल तंत्रिका दबती है",
      "सायटिक तंत्रिका दबती है"
    ],
    "correctAnswer": 1,
    "explanationEn": "The ciliary body contains muscles that change lens shape for focusing (accommodation).",
    "explanationHi": "कार्पल टनल सिंड्रोम में मीडियन तंत्रिका कलाई पर दबती है जिससे हाथ में सुन्नता होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-470",
    "questionEn": "The optic disc is also called the:",
    "questionHi": "रिस्ट ड्रॉप (Wrist Drop) किस तंत्रिका की चोट से होता है?",
    "optionsEn": [
      "Macula",
      "Fovea",
      "Blind spot",
      "Pupil"
    ],
    "optionsHi": [
      "मीडियन",
      "अल्नार",
      "रेडियल",
      "मस्कुलोक्यूटेनियस"
    ],
    "correctAnswer": 2,
    "explanationEn": "The optic disc (where optic nerve exits) has no photoreceptors, creating a blind spot.",
    "explanationHi": "रेडियल तंत्रिका की चोट से कलाई और उंगलियां सीधी नहीं हो पातीं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-471",
    "questionEn": "The eustachian tube connects the:",
    "questionHi": "क्लॉ हैंड (Claw Hand) किस तंत्रिका की चोट से होता है?",
    "optionsEn": [
      "Inner ear to brain",
      "Middle ear to nasopharynx",
      "Outer ear to middle ear",
      "Cochlea to vestibule"
    ],
    "optionsHi": [
      "रेडियल",
      "अल्नार",
      "मीडियन",
      "मस्कुलोक्यूटेनियस"
    ],
    "correctAnswer": 1,
    "explanationEn": "The eustachian (auditory) tube equalizes pressure between middle ear and atmosphere.",
    "explanationHi": "अल्नार तंत्रिका की चोट से हाथ की छोटी पेशियां कमजोर होती हैं जिससे क्लॉ हैंड होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-472",
    "questionEn": "Sound vibrations are converted to nerve impulses in the:",
    "questionHi": "हैंड ऑफ बेनेडिक्शन (Hand of Benediction) किस तंत्रिका की चोट से होता है?",
    "optionsEn": [
      "Tympanic membrane",
      "Ossicles",
      "Cochlea",
      "Semicircular canals"
    ],
    "optionsHi": [
      "रेडियल",
      "अल्नार",
      "मीडियन",
      "मस्कुलोक्यूटेनियस"
    ],
    "correctAnswer": 2,
    "explanationEn": "The cochlea contains hair cells that convert sound vibrations to electrical signals.",
    "explanationHi": "मीडियन तंत्रिका की उच्च चोट से मुट्ठी बंद करने पर तर्जनी और मध्यमा सीधी रहती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-473",
    "questionEn": "The diaphragm separates the:",
    "questionHi": "ओबट्यूरेटर नर्व (Obturator Nerve) क्या करती है?",
    "optionsEn": [
      "Head from neck",
      "Thorax from abdomen",
      "Abdomen from pelvis",
      "Neck from thorax"
    ],
    "optionsHi": [
      "जांघ का अपहरण",
      "जांघ का अभिवर्तन (Adduction)",
      "घुटना सीधा करना",
      "कूल्हा मोड़ना"
    ],
    "correctAnswer": 1,
    "explanationEn": "The diaphragm is a dome-shaped muscle separating thoracic and abdominal cavities.",
    "explanationHi": "ओबट्यूरेटर नर्व जांघ के अंदर की पेशियों (अडक्टर्स) को नियंत्रित करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-474",
    "questionEn": "The mediastinum contains all EXCEPT:",
    "questionHi": "फीमोरल नर्व (Femoral Nerve) की चोट से क्या होता है?",
    "optionsEn": [
      "Heart",
      "Lungs",
      "Trachea",
      "Esophagus"
    ],
    "optionsHi": [
      "पैर नहीं उठता",
      "घुटना सीधा नहीं होता",
      "कूल्हा सीधा नहीं होता",
      "टखना नहीं मुड़ता"
    ],
    "correctAnswer": 1,
    "explanationEn": "The mediastinum is the central thoracic compartment containing heart, great vessels, trachea, esophagus. Lungs are lateral.",
    "explanationHi": "फीमोरल नर्व की चोट से क्वाड्रिसेप्स कमजोर होती है और घुटना सीधा नहीं होता।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-475",
    "questionEn": "The perineum is located:",
    "questionHi": "सायटिक नर्व (Sciatic Nerve) की चोट से क्या होता है?",
    "optionsEn": [
      "In the abdomen",
      "Between thighs",
      "In the thorax",
      "In the cranium"
    ],
    "optionsHi": [
      "केवल जांघ प्रभावित",
      "घुटने के नीचे और कूल्हे के पीछे की पेशियां प्रभावित",
      "केवल कूल्हा प्रभावित",
      "केवल पैर प्रभावित"
    ],
    "correctAnswer": 1,
    "explanationEn": "The perineum is the diamond-shaped area between the thighs, containing external genitalia and anus.",
    "explanationHi": "सायटिक नर्व हैमस्ट्रिंग और घुटने के नीचे की सभी पेशियों को नियंत्रित करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-476",
    "questionEn": "List the parts of the stomach and describe its blood supply.",
    "questionHi": "टिबियल नर्व (Tibial Nerve) की चोट से क्या होता है?",
    "optionsEn": [],
    "optionsHi": [
      "पैर ऊपर नहीं उठता",
      "पैर नीचे नहीं झुकता (प्लांटर फ्लेक्शन कमजोर)",
      "घुटना नहीं मुड़ता",
      "कूल्हा नहीं मुड़ता"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "टिबियल नर्व की चोट से पंजों के बल खड़े होना कठिन हो जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-477",
    "questionEn": "Describe the biliary system from bile production to entry into the duodenum.",
    "questionHi": "सिम्पैथेटिक नर्वस सिस्टम (Sympathetic) का मुख्य कार्य क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "आराम और पाचन",
      "लड़ाई या भागो (Fight or Flight) प्रतिक्रिया",
      "नींद",
      "पाचन"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "सिम्पैथेटिक सिस्टम तनाव के समय शरीर को सक्रिय करता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-478",
    "questionEn": "List the 12 cranial nerves and their primary functions.",
    "questionHi": "पैरासिम्पैथेटिक नर्वस सिस्टम (Parasympathetic) का मुख्य कार्य क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "लड़ाई या भागो",
      "आराम और पाचन (Rest and Digest)",
      "तनाव प्रतिक्रिया",
      "व्यायाम"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "पैरासिम्पैथेटिक सिस्टम आराम के समय पाचन और ऊर्जा संरक्षण को बढ़ावा देता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-479",
    "questionEn": "Describe the components of a reflex arc and give an example.",
    "questionHi": "सिम्पैथेटिक सक्रियता से पुतली पर क्या प्रभाव होता है?",
    "optionsEn": [],
    "optionsHi": [
      "सिकुड़ती है",
      "फैलती है (Dilates)",
      "कोई प्रभाव नहीं",
      "बंद हो जाती है"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "सिम्पैथेटिक सक्रियता से पुतली फैलती है (माइड्रायसिस)।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-480",
    "questionEn": "Describe the parts of a nephron and their functions.",
    "questionHi": "पैरासिम्पैथेटिक सक्रियता से पुतली पर क्या प्रभाव होता है?",
    "optionsEn": [],
    "optionsHi": [
      "फैलती है",
      "सिकुड़ती है (Constricts)",
      "कोई प्रभाव नहीं",
      "बंद हो जाती है"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "पैरासिम्पैथेटिक सक्रियता से पुतली सिकुड़ती है (मायोसिस)।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-481",
    "questionEn": "Describe the path of sperm from production to ejaculation.",
    "questionHi": "सिम्पैथेटिक चेन गैंग्लिया (Sympathetic Chain) कहां होती है?",
    "optionsEn": [],
    "optionsHi": [
      "मस्तिष्क में",
      "रीढ़ की हड्डी के दोनों ओर",
      "पेट में",
      "छाती में केवल"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "सिम्पैथेटिक चेन गैंग्लिया रीढ़ की हड्डी के दोनों ओर लंबवत श्रृंखला बनाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-482",
    "questionEn": "List the structures of the female reproductive tract in order from ovary to external opening.",
    "questionHi": "सीलिएक गैंग्लियन (Celiac Ganglion) क्या नियंत्रित करता है?",
    "optionsEn": [],
    "optionsHi": [
      "हृदय",
      "ऊपरी उदर अंग (आमाशय, यकृत, प्लीहा)",
      "फेफड़े",
      "मूत्राशय"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "सीलिएक गैंग्लियन सीलिएक धमनी क्षेत्र के अंगों को सिम्पैथेटिक तंत्रिकाएं देता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-483",
    "questionEn": "List the layers of the epidermis from deepest to most superficial.",
    "questionHi": "वेगस नर्व (Vagus) किस सिस्टम का भाग है?",
    "optionsEn": [],
    "optionsHi": [
      "सिम्पैथेटिक",
      "पैरासिम्पैथेटिक",
      "सोमैटिक",
      "सेंसरी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "वेगस नर्व पैरासिम्पैथेटिक सिस्टम की मुख्य तंत्रिका है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-484",
    "questionEn": "Describe the anatomy of the eye, listing the tunics (layers) and their components.",
    "questionHi": "हॉर्नर्स सिंड्रोम (Horner's Syndrome) में क्या होता है?",
    "optionsEn": [],
    "optionsHi": [
      "पुतली फैलती है",
      "एक तरफ पुतली सिकुड़ना, पलक झुकना, पसीना न आना",
      "दोनों पुतली फैलती हैं",
      "अंधापन"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "हॉर्नर्स सिंड्रोम सिम्पैथेटिक पथ की क्षति से होता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-485",
    "questionEn": "List the body cavities and their major contents.",
    "questionHi": "रेफर्ड पेन (Referred Pain) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "वास्तविक दर्द",
      "एक अंग का दर्द दूसरी जगह महसूस होना",
      "काल्पनिक दर्द",
      "तीव्र दर्द"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "रेफर्ड पेन में आंतरिक अंग का दर्द त्वचा के किसी अन्य क्षेत्र में महसूस होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-486",
    "questionEn": "A patient has pain in the epigastric region that radiates to the back. Using anatomical knowledge, explain which organs could be involved and why pain might radiate to the back.",
    "questionHi": "हृदय का दर्द कहां महसूस हो सकता है (रेफर्ड पेन)?",
    "optionsEn": [],
    "optionsHi": [
      "केवल छाती में",
      "बाएं कंधे और बाहु में",
      "केवल पेट में",
      "केवल पीठ में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "हृदय का रेफर्ड पेन बाएं कंधे, बाहु, जबड़े तक जा सकता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-487",
    "questionEn": "A patient presents with unequal pupils (anisocoria) after head trauma. The right pupil is dilated and non-reactive. Using your anatomical knowledge, explain what structure might be damaged.",
    "questionHi": "एपेंडिसाइटिस का दर्द पहले कहां महसूस होता है (रेफर्ड)?",
    "optionsEn": [],
    "optionsHi": [
      "दाएं निचले पेट में सीधे",
      "नाभि के आसपास",
      "बाएं पेट में",
      "छाती में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "एपेंडिसाइटिस का दर्द पहले नाभि के आसपास (रेफर्ड) होता है, फिर दाएं निचले पेट में जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-488",
    "questionEn": "A patient needs urinary catheterization. Describe the anatomical differences between male and female urethra that affect catheter insertion.",
    "questionHi": "पित्ताशय का दर्द कहां रेफर हो सकता है?",
    "optionsEn": [],
    "optionsHi": [
      "बाएं कंधे में",
      "दाएं कंधे और स्कैपुला में",
      "दोनों पैरों में",
      "सिर में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "पित्ताशय का रेफर्ड पेन दाएं कंधे और स्कैपुला के नीचे महसूस हो सकता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-489",
    "questionEn": "A pregnant woman at 36 weeks has the fetal head engaged in the pelvis. Using anatomical knowledge, describe the structures the fetal head passes through during vaginal delivery.",
    "questionHi": "वृक्क का दर्द कहां रेफर हो सकता है?",
    "optionsEn": [],
    "optionsHi": [
      "छाती में",
      "कमर से जांघ के अंदरूनी भाग तक",
      "कंधे में",
      "सिर में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "वृक्क का दर्द कमर से नीचे जाकर जांघ के अंदरूनी भाग और जननांगों तक जा सकता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-490",
    "questionEn": "A patient has difficulty swallowing (dysphagia). Using anatomical knowledge, describe the structures involved in swallowing and what might cause dysphagia.",
    "questionHi": "कैरोटिड पल्स (Carotid Pulse) कहां महसूस होती है?",
    "optionsEn": [],
    "optionsHi": [
      "कलाई पर",
      "गर्दन में श्वासनली के बगल में",
      "कोहनी पर",
      "टखने पर"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "कैरोटिड पल्स गर्दन में SCM पेशी के सामने महसूस होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-491",
    "questionEn": "The transverse colon is supplied by branches of:",
    "questionHi": "रेडियल पल्स (Radial Pulse) कहां महसूस होती है?",
    "optionsEn": [
      "Celiac trunk only",
      "Superior mesenteric artery only",
      "Both SMA and IMA",
      "Inferior mesenteric artery only"
    ],
    "optionsHi": [
      "गर्दन में",
      "कलाई के अंगूठे की तरफ",
      "कोहनी पर",
      "टखने पर"
    ],
    "correctAnswer": 2,
    "explanationEn": "Transverse colon is supplied by middle colic (SMA) and has anastomosis with left colic (IMA) at splenic flexure.",
    "explanationHi": "रेडियल पल्स कलाई पर अंगूठे की तरफ सबसे आम नाड़ी जांच स्थल है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-492",
    "questionEn": "The blood-brain barrier is formed primarily by:",
    "questionHi": "ब्रेकियल पल्स (Brachial Pulse) कहां महसूस होती है?",
    "optionsEn": [
      "Astrocytes alone",
      "Tight junctions between endothelial cells",
      "Meninges",
      "CSF"
    ],
    "optionsHi": [
      "कलाई पर",
      "कोहनी के अंदरूनी भाग में",
      "गर्दन में",
      "टखने पर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tight junctions between brain capillary endothelial cells form the blood-brain barrier. Astrocytes support it.",
    "explanationHi": "ब्रेकियल पल्स कोहनी के अंदर (एंटीक्यूबिटल फॉसा के मीडियल) में महसूस होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-493",
    "questionEn": "Renin is secreted by:",
    "questionHi": "फीमोरल पल्स (Femoral Pulse) कहां महसूस होती है?",
    "optionsEn": [
      "Podocytes",
      "Juxtaglomerular cells",
      "Macula densa",
      "Principal cells"
    ],
    "optionsHi": [
      "घुटने पर",
      "इंगुइनल लिगामेंट के नीचे",
      "टखने पर",
      "पैर पर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Juxtaglomerular (granular) cells in afferent arteriole secrete renin in response to low BP or low Na+.",
    "explanationHi": "फीमोरल पल्स इंगुइनल लिगामेंट के ठीक नीचे जांघ के ऊपरी भाग में महसूस होती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-494",
    "questionEn": "The round ligament of the uterus attaches to the:",
    "questionHi": "पॉप्लिटियल पल्स (Popliteal Pulse) कहां महसूस होती है?",
    "optionsEn": [
      "Sacrum",
      "Labia majora",
      "Cervix",
      "Ovary"
    ],
    "optionsHi": [
      "कलाई पर",
      "घुटने के पीछे (पॉप्लिटियल फॉसा में)",
      "टखने पर",
      "पैर पर"
    ],
    "correctAnswer": 1,
    "explanationEn": "The round ligament runs from uterus through inguinal canal to labia majora, helping maintain anteversion.",
    "explanationHi": "पॉप्लिटियल पल्स घुटने के पीछे गहराई में महसूस होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-495",
    "questionEn": "The limbic system is primarily involved in:",
    "questionHi": "डॉर्सालिस पेडिस पल्स (Dorsalis Pedis Pulse) कहां है?",
    "optionsEn": [
      "Motor control",
      "Vision",
      "Emotion and memory",
      "Hearing"
    ],
    "optionsHi": [
      "टखने के पीछे",
      "पैर के ऊपर (Dorsum of Foot)",
      "एड़ी पर",
      "पंजे पर"
    ],
    "correctAnswer": 2,
    "explanationEn": "The limbic system (hippocampus, amygdala, etc.) processes emotion, memory, and behavior.",
    "explanationHi": "डॉर्सालिस पेडिस पल्स पैर के ऊपर पहली और दूसरी मेटाटार्सल हड्डियों के बीच महसूस होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-496",
    "questionEn": "The thoracic duct begins at the:",
    "questionHi": "पोस्टीरियर टिबियल पल्स (Posterior Tibial Pulse) कहां है?",
    "optionsEn": [
      "Left subclavian vein",
      "Cisterna chyli",
      "Right lymphatic duct",
      "Spleen"
    ],
    "optionsHi": [
      "घुटने के पीछे",
      "मीडियल मैलियोलस के पीछे",
      "पैर के ऊपर",
      "जांघ में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The thoracic duct begins at the cisterna chyli in the abdomen and ascends to drain into left venous angle.",
    "explanationHi": "पोस्टीरियर टिबियल पल्स अंदरूनी टखने के पीछे महसूस होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-497",
    "questionEn": "Intrinsic factor is necessary for absorption of:",
    "questionHi": "टेम्पोरल पल्स (Temporal Pulse) कहां है?",
    "optionsEn": [
      "Iron",
      "Vitamin B12",
      "Calcium",
      "Folic acid"
    ],
    "optionsHi": [
      "गर्दन में",
      "कनपटी पर",
      "कलाई पर",
      "पैर पर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Intrinsic factor (from parietal cells) binds B12 for absorption in terminal ileum. Deficiency causes pernicious anemia.",
    "explanationHi": "टेम्पोरल पल्स कान के सामने कनपटी पर महसूस होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-498",
    "questionEn": "The lateral ventricles communicate with the third ventricle via the:",
    "questionHi": "सुपरफिशियल पामर आर्च (Superficial Palmar Arch) किससे बनता है?",
    "optionsEn": [
      "Cerebral aqueduct",
      "Interventricular foramen",
      "Central canal",
      "Fourth ventricle"
    ],
    "optionsHi": [
      "केवल रेडियल धमनी",
      "मुख्यतः अल्नार धमनी",
      "केवल ब्रेकियल",
      "केवल एक्सिलरी"
    ],
    "correctAnswer": 1,
    "explanationEn": "The interventricular foramen (of Monro) connects each lateral ventricle to the third ventricle.",
    "explanationHi": "सुपरफिशियल पामर आर्च मुख्यतः अल्नार धमनी से बनता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-499",
    "questionEn": "The sensation of bladder fullness is carried by:",
    "questionHi": "एलन टेस्ट (Allen's Test) क्या जांचता है?",
    "optionsEn": [
      "Somatic nerves",
      "Parasympathetic nerves",
      "Sympathetic nerves",
      "Motor nerves"
    ],
    "optionsHi": [
      "रक्तचाप",
      "हाथ में रेडियल और अल्नार धमनी की पर्याप्तता",
      "हृदय की धड़कन",
      "नाड़ी की गति"
    ],
    "correctAnswer": 1,
    "explanationEn": "Stretch receptors in bladder wall send signals via pelvic splanchnic nerves (parasympathetic, S2-S4).",
    "explanationHi": "एलन टेस्ट रेडियल धमनी कैन्युलेशन से पहले अल्नार धमनी की पर्याप्तता जांचने के लिए किया जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-500",
    "questionEn": "The brachial plexus is formed by nerve roots:",
    "questionHi": "सर्कल ऑफ विलिस (Circle of Willis) कहां है?",
    "optionsEn": [
      "C1-C4",
      "C5-T1",
      "T1-T5",
      "L1-L5"
    ],
    "optionsHi": [
      "हृदय में",
      "मस्तिष्क के आधार पर",
      "गर्दन में",
      "पैर में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The brachial plexus (C5-T1) supplies motor and sensory innervation to the upper limb.",
    "explanationHi": "सर्कल ऑफ विलिस मस्तिष्क के आधार पर धमनियों का वृत्त है जो रक्त आपूर्ति सुनिश्चित करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-501",
    "questionEn": "The kidneys are located at which vertebral levels?",
    "questionHi": "महाधमनी (Aorta) कहां से शुरू होती है?",
    "optionsEn": [
      "C5-C7",
      "T8-T10",
      "T12-L3",
      "L4-S1"
    ],
    "optionsHi": [
      "दायां निलय",
      "बायां निलय",
      "दायां आलिंद",
      "बायां आलिंद"
    ],
    "correctAnswer": 2,
    "explanationEn": "Kidneys lie at T12-L3 level retroperitoneally, with the right kidney slightly lower due to the liver.",
    "explanationHi": "महाधमनी बाएं निलय से शुरू होती है और शरीर को ऑक्सीजनयुक्त रक्त पहुंचाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-502",
    "questionEn": "The functional unit of the kidney is the:",
    "questionHi": "महाधमनी चाप (Aortic Arch) से कौन सी शाखाएं निकलती हैं?",
    "optionsEn": [
      "Glomerulus",
      "Nephron",
      "Calyx",
      "Pyramid"
    ],
    "optionsHi": [
      "केवल एक",
      "ब्रेकियोसेफैलिक, बाईं कॉमन कैरोटिड, बाईं सबक्लेवियन",
      "केवल दो",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "The nephron is the functional unit, consisting of renal corpuscle and tubular system.",
    "explanationHi": "महाधमनी चाप से तीन प्रमुख शाखाएं निकलती हैं जो सिर, गर्दन और ऊपरी अंगों को रक्त देती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-503",
    "questionEn": "Glomerular filtration occurs in the:",
    "questionHi": "ब्रेकियोसेफैलिक ट्रंक (Brachiocephalic Trunk) किन धमनियों में विभाजित होता है?",
    "optionsEn": [
      "Loop of Henle",
      "Collecting duct",
      "Renal corpuscle",
      "Distal tubule"
    ],
    "optionsHi": [
      "बाईं कैरोटिड और बाईं सबक्लेवियन",
      "दाईं कॉमन कैरोटिड और दाईं सबक्लेवियन",
      "दोनों वर्टेब्रल",
      "दोनों बाहरी कैरोटिड"
    ],
    "correctAnswer": 2,
    "explanationEn": "Filtration occurs in the renal corpuscle (glomerulus + Bowman's capsule).",
    "explanationHi": "ब्रेकियोसेफैलिक ट्रंक दाईं ओर की कॉमन कैरोटिड और सबक्लेवियन धमनियों में बंटता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-504",
    "questionEn": "The descending limb of the loop of Henle is permeable to:",
    "questionHi": "इंटरनल कैरोटिड धमनी (Internal Carotid Artery) कहां रक्त पहुंचाती है?",
    "optionsEn": [
      "Sodium only",
      "Water only",
      "Both sodium and water",
      "Neither"
    ],
    "optionsHi": [
      "चेहरे को",
      "मस्तिष्क और आंख को",
      "गर्दन की पेशियों को",
      "थायरॉयड को"
    ],
    "correctAnswer": 1,
    "explanationEn": "Descending limb is permeable to water but not solutes. Ascending limb is impermeable to water.",
    "explanationHi": "इंटरनल कैरोटिड धमनी मस्तिष्क के अग्र भाग और आंख को रक्त पहुंचाती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-505",
    "questionEn": "ADH acts primarily on the:",
    "questionHi": "एक्सटरनल कैरोटिड धमनी (External Carotid Artery) कहां रक्त पहुंचाती है?",
    "optionsEn": [
      "Glomerulus",
      "Proximal tubule",
      "Loop of Henle",
      "Collecting duct"
    ],
    "optionsHi": [
      "मस्तिष्क को",
      "चेहरे, खोपड़ी, गर्दन को",
      "रीढ़ की हड्डी को",
      "आंख को"
    ],
    "correctAnswer": 3,
    "explanationEn": "ADH increases water permeability of collecting ducts, allowing water reabsorption.",
    "explanationHi": "एक्सटरनल कैरोटिड धमनी चेहरे, खोपड़ी और गर्दन की संरचनाओं को रक्त देती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-506",
    "questionEn": "Normal GFR is approximately:",
    "questionHi": "वर्टेब्रल धमनियां (Vertebral Arteries) किससे निकलती हैं?",
    "optionsEn": [
      "50 mL/min",
      "125 mL/min",
      "250 mL/min",
      "500 mL/min"
    ],
    "optionsHi": [
      "कैरोटिड से",
      "सबक्लेवियन धमनियों से",
      "महाधमनी से सीधे",
      "ब्रेकियोसेफैलिक से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Normal GFR is about 125 mL/min, producing ~180 L of filtrate daily.",
    "explanationHi": "वर्टेब्रल धमनियां सबक्लेवियन धमनियों से निकलती हैं और मस्तिष्क के पिछले भाग को रक्त देती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-507",
    "questionEn": "The smooth triangular area on the bladder floor is the:",
    "questionHi": "बेसिलर धमनी (Basilar Artery) कैसे बनती है?",
    "optionsEn": [
      "Fundus",
      "Apex",
      "Trigone",
      "Neck"
    ],
    "optionsHi": [
      "कैरोटिड से",
      "दोनों वर्टेब्रल धमनियों के मिलने से",
      "महाधमनी से",
      "पोस्टीरियर कम्युनिकेटिंग से"
    ],
    "correctAnswer": 2,
    "explanationEn": "The trigone is bounded by two ureteral openings and the internal urethral orifice.",
    "explanationHi": "बेसिलर धमनी दोनों वर्टेब्रल धमनियों के मिलने से बनती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-508",
    "questionEn": "The detrusor muscle is found in the:",
    "questionHi": "सबक्लेवियन धमनी (Subclavian Artery) ऊपरी अंग में क्या बनती है?",
    "optionsEn": [
      "Kidney",
      "Ureter",
      "Bladder",
      "Urethra"
    ],
    "optionsHi": [
      "ब्रेकियल",
      "एक्सिलरी धमनी (बगल में)",
      "रेडियल",
      "अल्नार"
    ],
    "correctAnswer": 2,
    "explanationEn": "The detrusor is the smooth muscle of the bladder wall that contracts during urination.",
    "explanationHi": "सबक्लेवियन धमनी पहली पसली पार करने पर एक्सिलरी धमनी बनती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-509",
    "questionEn": "The external urethral sphincter is made of:",
    "questionHi": "एक्सिलरी धमनी (Axillary Artery) आगे क्या बनती है?",
    "optionsEn": [
      "Smooth muscle",
      "Skeletal muscle",
      "Cardiac muscle",
      "Elastic tissue"
    ],
    "optionsHi": [
      "सबक्लेवियन",
      "ब्रेकियल धमनी",
      "रेडियल",
      "अल्नार"
    ],
    "correctAnswer": 1,
    "explanationEn": "The external sphincter is voluntary skeletal muscle. Internal sphincter is involuntary smooth muscle.",
    "explanationHi": "एक्सिलरी धमनी टेरेस मेजर के निचले किनारे पर ब्रेकियल धमनी बनती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-510",
    "questionEn": "Renin is released by:",
    "questionHi": "ब्रेकियल धमनी (Brachial Artery) कोहनी पर किन धमनियों में बंटती है?",
    "optionsEn": [
      "Macula densa",
      "Juxtaglomerular cells",
      "Podocytes",
      "Principal cells"
    ],
    "optionsHi": [
      "एक्सिलरी और सबक्लेवियन",
      "रेडियल और अल्नार धमनियां",
      "फीमोरल और पॉप्लिटियल",
      "टिबियल और पेरोनियल"
    ],
    "correctAnswer": 1,
    "explanationEn": "JG cells in the afferent arteriole release renin in response to low BP or low sodium.",
    "explanationHi": "ब्रेकियल धमनी क्यूबिटल फॉसा में रेडियल और अल्नार धमनियों में बंटती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-511",
    "questionEn": "The male urethra is divided into how many parts?",
    "questionHi": "वक्षीय महाधमनी (Thoracic Aorta) किसे रक्त देती है?",
    "optionsEn": [
      "2",
      "3",
      "4",
      "5"
    ],
    "optionsHi": [
      "केवल हृदय",
      "वक्ष की दीवार, ग्रसिका, फेफड़े",
      "केवल पेट",
      "केवल पैर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Male urethra has 3 parts: prostatic, membranous, and spongy (penile).",
    "explanationHi": "वक्षीय महाधमनी वक्ष की संरचनाओं को शाखाएं देती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-512",
    "questionEn": "The ureter enters the bladder at the:",
    "questionHi": "उदर महाधमनी (Abdominal Aorta) कहां समाप्त होती है?",
    "optionsEn": [
      "Apex",
      "Fundus",
      "Trigone",
      "Neck"
    ],
    "optionsHi": [
      "T10 पर",
      "L4 पर दाईं और बाईं कॉमन इलियाक धमनियों में",
      "S1 पर",
      "L1 पर"
    ],
    "correctAnswer": 2,
    "explanationEn": "Ureters enter at the upper corners of the trigone, passing obliquely through bladder wall.",
    "explanationHi": "उदर महाधमनी L4 स्तर पर दोनों कॉमन इलियाक धमनियों में विभाजित होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-513",
    "questionEn": "Spermatogenesis occurs in the:",
    "questionHi": "सीलिएक ट्रंक (Celiac Trunk) किन अंगों को रक्त देता है?",
    "optionsEn": [
      "Epididymis",
      "Seminiferous tubules",
      "Vas deferens",
      "Prostate"
    ],
    "optionsHi": [
      "आंतें",
      "आमाशय, यकृत, प्लीहा",
      "वृक्क",
      "अधिवृक्क"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sperm are produced in seminiferous tubules and mature in the epididymis.",
    "explanationHi": "सीलिएक ट्रंक ऊपरी उदर के अंगों (आमाशय, यकृत, प्लीहा) को रक्त देता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-514",
    "questionEn": "Testosterone is produced by:",
    "questionHi": "सुपीरियर मेसेंटेरिक धमनी (SMA) किसे रक्त देती है?",
    "optionsEn": [
      "Sertoli cells",
      "Leydig cells",
      "Spermatogonia",
      "Epididymal cells"
    ],
    "optionsHi": [
      "आमाशय",
      "छोटी आंत और बड़ी आंत का प्रारंभिक भाग",
      "मलाशय",
      "वृक्क"
    ],
    "correctAnswer": 1,
    "explanationEn": "Leydig (interstitial) cells between seminiferous tubules produce testosterone.",
    "explanationHi": "SMA छोटी आंत और बड़ी आंत के दाएं भाग (सीकम से स्प्लेनिक फ्लेक्सर तक) को रक्त देती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-515",
    "questionEn": "The seminal vesicles contribute what percentage of semen volume?",
    "questionHi": "इंफीरियर मेसेंटेरिक धमनी (IMA) किसे रक्त देती है?",
    "optionsEn": [
      "10%",
      "30%",
      "60%",
      "90%"
    ],
    "optionsHi": [
      "छोटी आंत",
      "बड़ी आंत का बायां भाग और मलाशय",
      "आमाशय",
      "यकृत"
    ],
    "correctAnswer": 2,
    "explanationEn": "Seminal vesicles produce about 60% of semen, containing fructose for sperm energy.",
    "explanationHi": "IMA बड़ी आंत के बाएं भाग (स्प्लेनिक फ्लेक्सर से मलाशय तक) को रक्त देती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-516",
    "questionEn": "The prostate gland surrounds the:",
    "questionHi": "रीनल धमनियां (Renal Arteries) कहां से निकलती हैं?",
    "optionsEn": [
      "Bladder neck",
      "Prostatic urethra",
      "Membranous urethra",
      "Penile urethra"
    ],
    "optionsHi": [
      "सीलिएक ट्रंक",
      "उदर महाधमनी से L1-L2 स्तर पर",
      "इलियाक धमनी",
      "SMA"
    ],
    "correctAnswer": 1,
    "explanationEn": "The prostate surrounds the prostatic urethra just below the bladder.",
    "explanationHi": "रीनल धमनियां उदर महाधमनी से L1-L2 स्तर पर निकलकर वृक्कों को रक्त देती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-517",
    "questionEn": "Sperm mature and are stored in the:",
    "questionHi": "कॉमन इलियाक धमनी (Common Iliac Artery) किन धमनियों में बंटती है?",
    "optionsEn": [
      "Testes",
      "Epididymis",
      "Vas deferens",
      "Seminal vesicles"
    ],
    "optionsHi": [
      "रीनल और गोनाडल",
      "इंटरनल और एक्सटरनल इलियाक",
      "SMA और IMA",
      "सीलिएक और मेसेंटेरिक"
    ],
    "correctAnswer": 1,
    "explanationEn": "The epididymis is where sperm gain motility and are stored before ejaculation.",
    "explanationHi": "कॉमन इलियाक धमनी इंटरनल (श्रोणि अंगों के लिए) और एक्सटरनल (पैर के लिए) इलियाक में बंटती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-518",
    "questionEn": "The corpus cavernosum is found in the:",
    "questionHi": "एक्सटरनल इलियाक धमनी (External Iliac Artery) आगे क्या बनती है?",
    "optionsEn": [
      "Testes",
      "Penis",
      "Ovary",
      "Uterus"
    ],
    "optionsHi": [
      "इंटरनल इलियाक",
      "फीमोरल धमनी",
      "पॉप्लिटियल",
      "टिबियल"
    ],
    "correctAnswer": 1,
    "explanationEn": "The two corpora cavernosa are erectile tissue in the penis responsible for erection.",
    "explanationHi": "एक्सटरनल इलियाक धमनी इंगुइनल लिगामेंट पार करने पर फीमोरल धमनी बनती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-519",
    "questionEn": "Ovulation is triggered by a surge of:",
    "questionHi": "फीमोरल धमनी (Femoral Artery) आगे क्या बनती है?",
    "optionsEn": [
      "FSH",
      "LH",
      "Estrogen",
      "Progesterone"
    ],
    "optionsHi": [
      "इलियाक",
      "पॉप्लिटियल धमनी (घुटने के पीछे)",
      "टिबियल",
      "पेरोनियल"
    ],
    "correctAnswer": 1,
    "explanationEn": "The LH surge around day 14 triggers ovulation (release of egg from follicle).",
    "explanationHi": "फीमोरल धमनी एडक्टर हायटस से गुजरकर पॉप्लिटियल धमनी बनती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-520",
    "questionEn": "Fertilization normally occurs in the:",
    "questionHi": "पॉप्लिटियल धमनी (Popliteal Artery) किन धमनियों में बंटती है?",
    "optionsEn": [
      "Ovary",
      "Uterus",
      "Ampulla of fallopian tube",
      "Cervix"
    ],
    "optionsHi": [
      "फीमोरल और इलियाक",
      "एंटीरियर टिबियल और टिबियोपेरोनियल ट्रंक",
      "रेडियल और अल्नार",
      "ब्रेकियल और एक्सिलरी"
    ],
    "correctAnswer": 2,
    "explanationEn": "Fertilization typically occurs in the ampulla, the widest part of the fallopian tube.",
    "explanationHi": "पॉप्लिटियल धमनी एंटीरियर टिबियल और टिबियोपेरोनियल ट्रंक में बंटती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-521",
    "questionEn": "The corpus luteum produces:",
    "questionHi": "एंटीरियर टिबियल धमनी (Anterior Tibial Artery) पैर में क्या बनती है?",
    "optionsEn": [
      "Estrogen only",
      "Progesterone mainly",
      "FSH",
      "LH"
    ],
    "optionsHi": [
      "पोस्टीरियर टिबियल",
      "डॉर्सालिस पेडिस धमनी",
      "पेरोनियल",
      "प्लांटर"
    ],
    "correctAnswer": 1,
    "explanationEn": "The corpus luteum (from ruptured follicle) produces progesterone to maintain the endometrium.",
    "explanationHi": "एंटीरियर टिबियल धमनी टखने पर डॉर्सालिस पेडिस बनती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-522",
    "questionEn": "The functional layer of the endometrium:",
    "questionHi": "पोस्टीरियर टिबियल धमनी (Posterior Tibial Artery) पैर में क्या बनती है?",
    "optionsEn": [
      "Is permanent",
      "Sheds during menstruation",
      "Produces hormones",
      "Contains follicles"
    ],
    "optionsHi": [
      "डॉर्सालिस पेडिस",
      "मीडियल और लेटरल प्लांटर धमनियां",
      "पेरोनियल",
      "एंटीरियर टिबियल"
    ],
    "correctAnswer": 1,
    "explanationEn": "The functional layer thickens each cycle and sheds during menstruation if no pregnancy occurs.",
    "explanationHi": "पोस्टीरियर टिबियल धमनी पैर के तलवे में प्लांटर धमनियां बनाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-523",
    "questionEn": "The muscular layer of the uterus is the:",
    "questionHi": "सुपीरियर वेना कावा (SVC) कैसे बनती है?",
    "optionsEn": [
      "Endometrium",
      "Myometrium",
      "Perimetrium",
      "Parametrium"
    ],
    "optionsHi": [
      "इलियाक शिराओं से",
      "दोनों ब्रेकियोसेफैलिक शिराओं के मिलने से",
      "हेपेटिक शिराओं से",
      "रीनल शिराओं से"
    ],
    "correctAnswer": 1,
    "explanationEn": "The myometrium is the thick smooth muscle layer that contracts during labor.",
    "explanationHi": "SVC दोनों ब्रेकियोसेफैलिक शिराओं के मिलने से बनती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-524",
    "questionEn": "The finger-like projections that sweep the egg into the fallopian tube are:",
    "questionHi": "इंफीरियर वेना कावा (IVC) कैसे बनती है?",
    "optionsEn": [
      "Villi",
      "Fimbriae",
      "Cilia",
      "Papillae"
    ],
    "optionsHi": [
      "ब्रेकियोसेफैलिक से",
      "दोनों कॉमन इलियाक शिराओं के मिलने से",
      "पोर्टल शिरा से",
      "हेपेटिक से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fimbriae are finger-like projections at the end of the fallopian tube near the ovary.",
    "explanationHi": "IVC दोनों कॉमन इलियाक शिराओं के L5 स्तर पर मिलने से बनती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-525",
    "questionEn": "An ectopic pregnancy most commonly occurs in the:",
    "questionHi": "इंटरनल जुगुलर शिरा (Internal Jugular Vein) कहां से रक्त लाती है?",
    "optionsEn": [
      "Ovary",
      "Fallopian tube",
      "Cervix",
      "Abdominal cavity"
    ],
    "optionsHi": [
      "चेहरे से",
      "मस्तिष्क और गर्दन के गहरे भागों से",
      "खोपड़ी से",
      "आंख से"
    ],
    "correctAnswer": 1,
    "explanationEn": "~95% of ectopic pregnancies occur in the fallopian tube (tubal pregnancy).",
    "explanationHi": "इंटरनल जुगुलर शिरा मस्तिष्क और गर्दन के गहरे भागों से शिरापरक रक्त लाती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-526",
    "questionEn": "The outermost layer of the epidermis is the:",
    "questionHi": "एक्सटरनल जुगुलर शिरा (External Jugular Vein) कहां दिखती है?",
    "optionsEn": [
      "Stratum basale",
      "Stratum spinosum",
      "Stratum granulosum",
      "Stratum corneum"
    ],
    "optionsHi": [
      "गर्दन में गहराई में",
      "गर्दन में सतही रूप से SCM पर",
      "छाती में",
      "पेट में"
    ],
    "correctAnswer": 3,
    "explanationEn": "The stratum corneum is the outermost layer of dead, keratinized cells.",
    "explanationHi": "एक्सटरनल जुगुलर शिरा गर्दन में सतही रूप से दिखाई देती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-527",
    "questionEn": "Melanocytes are found in the:",
    "questionHi": "सेफेलिक शिरा (Cephalic Vein) कहां खाली होती है?",
    "optionsEn": [
      "Stratum corneum",
      "Stratum basale",
      "Dermis",
      "Hypodermis"
    ],
    "optionsHi": [
      "इंटरनल जुगुलर में",
      "एक्सिलरी शिरा में",
      "बेसिलिक में",
      "ब्रेकियल में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Melanocytes in the stratum basale produce melanin pigment for UV protection.",
    "explanationHi": "सेफेलिक शिरा बाहु के बाहरी भाग में चलकर एक्सिलरी शिरा में खाली होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-528",
    "questionEn": "Keratinocytes produce:",
    "questionHi": "बेसिलिक शिरा (Basilic Vein) कहां खाली होती है?",
    "optionsEn": [
      "Melanin",
      "Keratin",
      "Sebum",
      "Sweat"
    ],
    "optionsHi": [
      "सबक्लेवियन में",
      "ब्रेकियल शिरा में",
      "एक्सिलरी में",
      "जुगुलर में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Keratinocytes produce keratin, a tough protein that waterproofs and protects the skin.",
    "explanationHi": "बेसिलिक शिरा बाहु के अंदरूनी भाग में चलकर ब्रेकियल शिरा में खाली होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-529",
    "questionEn": "The dermis is composed mainly of:",
    "questionHi": "ग्रेट सफेनस शिरा (Great Saphenous Vein) कहां से शुरू होती है?",
    "optionsEn": [
      "Epithelial tissue",
      "Connective tissue",
      "Muscle tissue",
      "Nervous tissue"
    ],
    "optionsHi": [
      "घुटने से",
      "पैर के अंदरूनी भाग से (मीडियल मैलियोलस के सामने)",
      "जांघ से",
      "कूल्हे से"
    ],
    "correctAnswer": 1,
    "explanationEn": "The dermis is connective tissue containing collagen, elastic fibers, vessels, and glands.",
    "explanationHi": "ग्रेट सफेनस शिरा पैर से शुरू होकर जांघ के अंदरूनी भाग से ऊपर जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-530",
    "questionEn": "Fingerprints are formed by:",
    "questionHi": "ग्रेट सफेनस शिरा (Great Saphenous Vein) कहां खाली होती है?",
    "optionsEn": [
      "Stratum corneum",
      "Dermal papillae",
      "Hypodermis",
      "Hair follicles"
    ],
    "optionsHi": [
      "पॉप्लिटियल शिरा में",
      "फीमोरल शिरा में (सफेनो-फीमोरल जंक्शन)",
      "इलियाक में",
      "IVC में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dermal papillae create ridges in the overlying epidermis, forming fingerprints.",
    "explanationHi": "ग्रेट सफेनस शिरा इंगुइनल क्षेत्र में फीमोरल शिरा में खाली होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-531",
    "questionEn": "Sebaceous glands secrete:",
    "questionHi": "स्मॉल सफेनस शिरा (Small Saphenous Vein) कहां खाली होती है?",
    "optionsEn": [
      "Sweat",
      "Sebum",
      "Cerumen",
      "Mucus"
    ],
    "optionsHi": [
      "फीमोरल में",
      "पॉप्लिटियल शिरा में",
      "इलियाक में",
      "IVC में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sebaceous glands produce sebum, an oily substance that lubricates skin and hair.",
    "explanationHi": "स्मॉल सफेनस शिरा पिंडली के पीछे से घुटने के पीछे पॉप्लिटियल शिरा में खाली होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-532",
    "questionEn": "Eccrine sweat glands are involved in:",
    "questionHi": "हेपेटिक पोर्टल शिरा (Hepatic Portal Vein) किन शिराओं से बनती है?",
    "optionsEn": [
      "Scent production",
      "Temperature regulation",
      "Sebum production",
      "Hair growth"
    ],
    "optionsHi": [
      "रीनल और गोनाडल",
      "सुपीरियर मेसेंटेरिक और स्प्लेनिक शिराओं से",
      "हेपेटिक शिराओं से",
      "इलियाक शिराओं से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Eccrine glands produce watery sweat for evaporative cooling (thermoregulation).",
    "explanationHi": "हेपेटिक पोर्टल शिरा SMV और स्प्लेनिक शिरा के मिलने से बनती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-533",
    "questionEn": "The arrector pili muscle causes:",
    "questionHi": "हेपेटिक शिराएं (Hepatic Veins) कहां खाली होती हैं?",
    "optionsEn": [
      "Sweating",
      "Goosebumps",
      "Hair growth",
      "Skin color change"
    ],
    "optionsHi": [
      "पोर्टल शिरा में",
      "इंफीरियर वेना कावा में",
      "SVC में",
      "महाधमनी में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Arrector pili contraction makes hair stand up, creating goosebumps (piloerection).",
    "explanationHi": "हेपेटिक शिराएं यकृत से रक्त लेकर IVC में खाली होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-534",
    "questionEn": "Nail growth occurs at the:",
    "questionHi": "बाईं गोनाडल शिरा (Left Gonadal Vein) कहां खाली होती है?",
    "optionsEn": [
      "Free edge",
      "Nail bed",
      "Nail matrix",
      "Lunula"
    ],
    "optionsHi": [
      "IVC में",
      "बाईं रीनल शिरा में",
      "पोर्टल शिरा में",
      "इलियाक में"
    ],
    "correctAnswer": 2,
    "explanationEn": "The nail matrix contains dividing cells that produce the nail plate.",
    "explanationHi": "बाईं गोनाडल शिरा बाईं रीनल शिरा में खाली होती है (दाईं सीधे IVC में जाती है)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-535",
    "questionEn": "The hypodermis contains mainly:",
    "questionHi": "लसीका (Lymph) अंततः कहां शिरापरक तंत्र में मिलती है?",
    "optionsEn": [
      "Keratinocytes",
      "Adipose tissue",
      "Hair follicles",
      "Sweat glands"
    ],
    "optionsHi": [
      "IVC में",
      "बाएं और दाएं शिरापरक कोणों (Venous Angles) पर",
      "पोर्टल शिरा में",
      "हृदय में सीधे"
    ],
    "correctAnswer": 1,
    "explanationEn": "The hypodermis (subcutaneous layer) contains fat for insulation and cushioning.",
    "explanationHi": "लसीका थोरैसिक और राइट लिम्फैटिक डक्ट्स के माध्यम से शिरापरक तंत्र में मिलती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-536",
    "questionEn": "The three phases of wound healing in order are:",
    "questionHi": "थोरैसिक डक्ट (Thoracic Duct) शरीर के कितने भाग से लसीका एकत्र करती है?",
    "optionsEn": [
      "Proliferative, inflammatory, remodeling",
      "Inflammatory, remodeling, proliferative",
      "Inflammatory, proliferative, remodeling",
      "Remodeling, proliferative, inflammatory"
    ],
    "optionsHi": [
      "केवल दाएं ऊपरी भाग",
      "शरीर का 3/4 भाग (बाएं और नीचे)",
      "केवल सिर",
      "केवल पैर"
    ],
    "correctAnswer": 2,
    "explanationEn": "Wound healing: Inflammatory (0-3 days) → Proliferative (3-21 days) → Remodeling (21 days-2 years).",
    "explanationHi": "थोरैसिक डक्ट शरीर के 3/4 भाग (नीचे और बाईं ओर से ऊपर) से लसीका एकत्र करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-537",
    "questionEn": "Langerhans cells in the epidermis function as:",
    "questionHi": "राइट लिम्फैटिक डक्ट (Right Lymphatic Duct) कहां से लसीका एकत्र करती है?",
    "optionsEn": [
      "Pigment cells",
      "Sensory receptors",
      "Immune cells",
      "Stem cells"
    ],
    "optionsHi": [
      "पूरे शरीर से",
      "दाएं ऊपरी शरीर (दायां सिर, गर्दन, वक्ष, बाहु)",
      "केवल पैरों से",
      "केवल पेट से"
    ],
    "correctAnswer": 2,
    "explanationEn": "Langerhans cells are dendritic cells that present antigens to T cells (immune function).",
    "explanationHi": "राइट लिम्फैटिक डक्ट दाएं ऊपरी भाग से लसीका एकत्र करती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-538",
    "questionEn": "The sclera is the:",
    "questionHi": "सिस्टर्ना काइली (Cisterna Chyli) क्या है?",
    "optionsEn": [
      "Clear front of the eye",
      "Colored part of the eye",
      "White of the eye",
      "Light-sensitive layer"
    ],
    "optionsHi": [
      "एक शिरा",
      "थोरैसिक डक्ट का उदर में फैला हुआ भाग",
      "एक धमनी",
      "एक तंत्रिका"
    ],
    "correctAnswer": 2,
    "explanationEn": "The sclera is the tough white outer layer of the eyeball.",
    "explanationHi": "सिस्टर्ना काइली L1-L2 स्तर पर थोरैसिक डक्ट की शुरुआत में एक थैलीनुमा संरचना है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-539",
    "questionEn": "The cornea functions to:",
    "questionHi": "सर्वाइकल लिम्फ नोड्स (Cervical Lymph Nodes) कहां होते हैं?",
    "optionsEn": [
      "Control pupil size",
      "Refract light",
      "Detect color",
      "Produce aqueous humor"
    ],
    "optionsHi": [
      "बगल में",
      "गर्दन में",
      "जांघ में",
      "पेट में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The cornea is the transparent front of the eye that refracts (bends) light rays.",
    "explanationHi": "सर्वाइकल लिम्फ नोड्स गर्दन में होते हैं और सिर-गर्दन से लसीका छानते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-540",
    "questionEn": "The iris controls:",
    "questionHi": "एक्सिलरी लिम्फ नोड्स (Axillary Lymph Nodes) कहां होते हैं?",
    "optionsEn": [
      "Lens shape",
      "Pupil size",
      "Eye movement",
      "Tear production"
    ],
    "optionsHi": [
      "गर्दन में",
      "बगल में",
      "जांघ में",
      "पेट में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The iris contains muscles that adjust pupil size to control light entry.",
    "explanationHi": "एक्सिलरी लिम्फ नोड्स बगल में होते हैं और ऊपरी अंग, छाती, स्तन से लसीका छानते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-541",
    "questionEn": "Rods in the retina are responsible for:",
    "questionHi": "इंगुइनल लिम्फ नोड्स (Inguinal Lymph Nodes) कहां होते हैं?",
    "optionsEn": [
      "Color vision",
      "Dim light/peripheral vision",
      "Sharp central vision",
      "Depth perception"
    ],
    "optionsHi": [
      "गर्दन में",
      "बगल में",
      "जांघ के ऊपरी भाग में",
      "पेट में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rods detect dim light and peripheral vision. Cones detect color and provide sharp central vision.",
    "explanationHi": "इंगुइनल लिम्फ नोड्स जांघ के ऊपरी भाग में होते हैं और निचले अंग, पेरिनियम से लसीका छानते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-542",
    "questionEn": "The fovea is the area of:",
    "questionHi": "मेसेंटेरिक लिम्फ नोड्स (Mesenteric Lymph Nodes) कहां होते हैं?",
    "optionsEn": [
      "Blind spot",
      "Sharpest vision",
      "Peripheral vision",
      "Night vision"
    ],
    "optionsHi": [
      "गर्दन में",
      "आंतों की मेसेंटरी में",
      "बगल में",
      "जांघ में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The fovea (in the macula) has the highest cone density for sharpest central vision.",
    "explanationHi": "मेसेंटेरिक लिम्फ नोड्स आंतों से लसीका छानते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-543",
    "questionEn": "The lens changes shape for focusing through:",
    "questionHi": "स्तन का लसीका मुख्यतः कहां जाता है?",
    "optionsEn": [
      "Pupil dilation",
      "Accommodation",
      "Refraction",
      "Adaptation"
    ],
    "optionsHi": [
      "इंगुइनल नोड्स",
      "एक्सिलरी लिम्फ नोड्स",
      "सर्वाइकल नोड्स",
      "मेसेंटेरिक नोड्स"
    ],
    "correctAnswer": 1,
    "explanationEn": "Accommodation is the process of lens shape change controlled by ciliary muscles.",
    "explanationHi": "स्तन का 75% लसीका एक्सिलरी लिम्फ नोड्स में जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-544",
    "questionEn": "The three ossicles of the middle ear are:",
    "questionHi": "वर्चो नोड (Virchow's Node) क्या है?",
    "optionsEn": [
      "Cochlea, vestibule, canals",
      "Malleus, incus, stapes",
      "Pinna, canal, drum",
      "Utricle, saccule, ampulla"
    ],
    "optionsHi": [
      "बगल का नोड",
      "बाएं सुप्राक्लेविकुलर लिम्फ नोड",
      "इंगुइनल नोड",
      "मेसेंटेरिक नोड"
    ],
    "correctAnswer": 1,
    "explanationEn": "The ossicles (malleus, incus, stapes) amplify sound from eardrum to inner ear.",
    "explanationHi": "वर्चो नोड बाएं सुप्राक्लेविकुलर नोड है जो पेट के कैंसर में बढ़ सकता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-545",
    "questionEn": "The cochlea is responsible for:",
    "questionHi": "वाल्डेयर्स रिंग (Waldeyer's Ring) क्या है?",
    "optionsEn": [
      "Balance",
      "Hearing",
      "Pressure equalization",
      "Sound amplification"
    ],
    "optionsHi": [
      "हृदय का वाल्व",
      "ग्रसनी में लिम्फोइड ऊतक का वलय",
      "आंत का भाग",
      "वृक्क का भाग"
    ],
    "correctAnswer": 1,
    "explanationEn": "The cochlea converts sound vibrations to nerve impulses for hearing.",
    "explanationHi": "वाल्डेयर्स रिंग में टॉन्सिल, एडेनॉयड और अन्य लिम्फोइड ऊतक शामिल हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-546",
    "questionEn": "The semicircular canals detect:",
    "questionHi": "MALT (Mucosa-Associated Lymphoid Tissue) कहां पाया जाता है?",
    "optionsEn": [
      "Sound",
      "Light",
      "Rotational movement",
      "Linear acceleration"
    ],
    "optionsHi": [
      "केवल रक्त में",
      "श्लेष्मा झिल्ली में (आंत, श्वसन तंत्र)",
      "केवल हड्डी में",
      "केवल त्वचा में"
    ],
    "correctAnswer": 2,
    "explanationEn": "The three semicircular canals detect rotational (angular) movement of the head.",
    "explanationHi": "MALT श्लेष्मा झिल्ली में लिम्फोइड ऊतक है जो स्थानीय प्रतिरक्षा प्रदान करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-547",
    "questionEn": "The eustachian tube connects the middle ear to the:",
    "questionHi": "क्रिब्रिफॉर्म प्लेट (Cribriform Plate) कहां है?",
    "optionsEn": [
      "Inner ear",
      "Outer ear",
      "Nasopharynx",
      "Oropharynx"
    ],
    "optionsHi": [
      "टेम्पोरल बोन में",
      "एथमॉयड बोन में (नाक और मस्तिष्क के बीच)",
      "फ्रंटल बोन में",
      "ऑक्सिपिटल में"
    ],
    "correctAnswer": 2,
    "explanationEn": "The eustachian (auditory) tube equalizes pressure between middle ear and atmosphere.",
    "explanationHi": "क्रिब्रिफॉर्म प्लेट एथमॉयड बोन का छिद्रित भाग है जिससे ऑल्फैक्टरी नर्व गुजरती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-548",
    "questionEn": "The optic disc is also known as the:",
    "questionHi": "फोरामेन मैग्नम (Foramen Magnum) कहां है?",
    "optionsEn": [
      "Macula",
      "Fovea",
      "Blind spot",
      "Pupil"
    ],
    "optionsHi": [
      "फ्रंटल बोन में",
      "ऑक्सिपिटल बोन में",
      "टेम्पोरल में",
      "पैरिएटल में"
    ],
    "correctAnswer": 2,
    "explanationEn": "The optic disc has no photoreceptors (where optic nerve exits), creating a blind spot.",
    "explanationHi": "फोरामेन मैग्नम खोपड़ी के आधार में बड़ा छिद्र है जिससे मेरुरज्जु गुजरती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-549",
    "questionEn": "Aqueous humor is found in the:",
    "questionHi": "फोरामेन ओवेल (Foramen Ovale) से कौन सी तंत्रिका गुजरती है?",
    "optionsEn": [
      "Vitreous chamber",
      "Anterior and posterior chambers",
      "Lens",
      "Retina"
    ],
    "optionsHi": [
      "ऑप्टिक",
      "ट्राइजेमिनल की मैंडिबुलर शाखा (V3)",
      "फेशियल",
      "वेगस"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aqueous humor fills the anterior and posterior chambers in front of the lens.",
    "explanationHi": "फोरामेन ओवेल से ट्राइजेमिनल नर्व की V3 शाखा गुजरती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-550",
    "questionEn": "Which structure is NOT retroperitoneal?",
    "questionHi": "इंटरनल एकॉस्टिक मीएटस (Internal Acoustic Meatus) से कौन सी तंत्रिकाएं गुजरती हैं?",
    "optionsEn": [
      "Kidneys",
      "Pancreas",
      "Stomach",
      "Ascending colon"
    ],
    "optionsHi": [
      "ट्राइजेमिनल",
      "फेशियल (VII) और वेस्टिबुलोकोक्लियर (VIII)",
      "वेगस",
      "हाइपोग्लॉसल"
    ],
    "correctAnswer": 2,
    "explanationEn": "The stomach is intraperitoneal. Kidneys, pancreas, and parts of colon are retroperitoneal.",
    "explanationHi": "इंटरनल एकॉस्टिक मीएटस से CN VII और CN VIII गुजरती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-551",
    "questionEn": "The average menstrual cycle is:",
    "questionHi": "जुगुलर फोरामेन (Jugular Foramen) से कौन सी तंत्रिकाएं गुजरती हैं?",
    "optionsEn": [
      "14 days",
      "21 days",
      "28 days",
      "35 days"
    ],
    "optionsHi": [
      "I, II, III",
      "IX, X, XI",
      "V, VI, VII",
      "XII"
    ],
    "correctAnswer": 2,
    "explanationEn": "The average menstrual cycle is 28 days, though normal range is 21-35 days.",
    "explanationHi": "जुगुलर फोरामेन से ग्लॉसोफैरिंजियल (IX), वेगस (X), एक्सेसरी (XI) गुजरती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-552",
    "questionEn": "The placenta develops from:",
    "questionHi": "हाइपोग्लॉसल कैनाल (Hypoglossal Canal) से कौन सी तंत्रिका गुजरती है?",
    "optionsEn": [
      "Endometrium only",
      "Embryonic tissues only",
      "Both maternal and embryonic tissues",
      "Myometrium"
    ],
    "optionsHi": [
      "फेशियल",
      "वेगस",
      "हाइपोग्लॉसल (CN XII)",
      "ट्राइजेमिनल"
    ],
    "correctAnswer": 2,
    "explanationEn": "The placenta develops from embryonic (chorion) and maternal (decidua) tissues.",
    "explanationHi": "हाइपोग्लॉसल कैनाल से हाइपोग्लॉसल नर्व गुजरती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-553",
    "questionEn": "Skin turgor is used to assess:",
    "questionHi": "ऑप्टिक कैनाल (Optic Canal) से क्या गुजरता है?",
    "optionsEn": [
      "Temperature",
      "Hydration status",
      "Blood pressure",
      "Oxygen levels"
    ],
    "optionsHi": [
      "फेशियल नर्व",
      "ऑप्टिक नर्व (II) और ऑप्थैल्मिक आर्टरी",
      "वेगस नर्व",
      "ट्राइजेमिनल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Skin turgor (elasticity) is reduced in dehydration; skin tents when pinched.",
    "explanationHi": "ऑप्टिक कैनाल से ऑप्टिक नर्व और ऑप्थैल्मिक आर्टरी गुजरती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-554",
    "questionEn": "The umbilical cord contains:",
    "questionHi": "सुपीरियर ऑर्बिटल फिशर (Superior Orbital Fissure) से कौन सी तंत्रिकाएं गुजरती हैं?",
    "optionsEn": [
      "One artery, one vein",
      "Two arteries, one vein",
      "One artery, two veins",
      "Two arteries, two veins"
    ],
    "optionsHi": [
      "I, II",
      "III, IV, V1, VI (आंख की गति से संबंधित)",
      "VII, VIII",
      "IX, X, XI"
    ],
    "correctAnswer": 1,
    "explanationEn": "Umbilical cord has 2 arteries (deoxygenated to placenta) and 1 vein (oxygenated to fetus).",
    "explanationHi": "सुपीरियर ऑर्बिटल फिशर से ऑक्युलोमोटर, ट्रोक्लियर, ऑप्थैल्मिक (V1), एब्ड्यूसेंस गुजरती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-555",
    "questionEn": "Meissner's corpuscles detect:",
    "questionHi": "फोरामेन रोटंडम (Foramen Rotundum) से कौन सी तंत्रिका गुजरती है?",
    "optionsEn": [
      "Deep pressure",
      "Light touch",
      "Temperature",
      "Pain"
    ],
    "optionsHi": [
      "V1",
      "V2 (मैक्सिलरी)",
      "V3",
      "VI"
    ],
    "correctAnswer": 1,
    "explanationEn": "Meissner's corpuscles in dermal papillae detect light touch, especially in fingertips and lips.",
    "explanationHi": "फोरामेन रोटंडम से ट्राइजेमिनल की मैक्सिलरी शाखा (V2) गुजरती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-556",
    "questionEn": "The renal cortex contains mainly:",
    "questionHi": "स्टाइलोमास्टॉयड फोरामेन (Stylomastoid Foramen) से कौन सी तंत्रिका निकलती है?",
    "optionsEn": [
      "Collecting ducts",
      "Loops of Henle",
      "Glomeruli and convoluted tubules",
      "Renal pyramids"
    ],
    "optionsHi": [
      "ट्राइजेमिनल",
      "फेशियल (CN VII)",
      "वेगस",
      "हाइपोग्लॉसल"
    ],
    "correctAnswer": 2,
    "explanationEn": "The cortex contains glomeruli, PCT, and DCT. Medulla has loops and collecting ducts.",
    "explanationHi": "फेशियल नर्व स्टाइलोमास्टॉयड फोरामेन से खोपड़ी से बाहर निकलती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-557",
    "questionEn": "Aldosterone acts on the:",
    "questionHi": "कैवर्नस साइनस (Cavernous Sinus) में कौन सी संरचनाएं होती हैं?",
    "optionsEn": [
      "Glomerulus",
      "PCT",
      "DCT and collecting duct",
      "Loop of Henle"
    ],
    "optionsHi": [
      "केवल रक्त",
      "इंटरनल कैरोटिड, CN III, IV, V1, V2, VI",
      "केवल तंत्रिकाएं",
      "केवल धमनियां"
    ],
    "correctAnswer": 2,
    "explanationEn": "Aldosterone increases Na+ reabsorption (and K+ secretion) in DCT and collecting duct.",
    "explanationHi": "कैवर्नस साइनस में इंटरनल कैरोटिड धमनी और कई कपाल तंत्रिकाएं होती हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-558",
    "questionEn": "The normal position of the uterus is:",
    "questionHi": "पटेरियन (Pterion) क्या है?",
    "optionsEn": [
      "Retroverted and retroflexed",
      "Anteverted and anteflexed",
      "Vertical",
      "Horizontal"
    ],
    "optionsHi": [
      "एक हड्डी",
      "खोपड़ी में चार हड्डियों का मिलन बिंदु",
      "एक छिद्र",
      "एक तंत्रिका"
    ],
    "correctAnswer": 1,
    "explanationEn": "The normal uterus is tilted forward (anteverted) and bent forward on itself (anteflexed).",
    "explanationHi": "पटेरियन फ्रंटल, पैरिएटल, टेम्पोरल और स्फीनॉयड हड्डियों का मिलन बिंदु है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-559",
    "questionEn": "Implantation normally occurs in the:",
    "questionHi": "पटेरियन का नैदानिक महत्व क्या है?",
    "optionsEn": [
      "Fallopian tube",
      "Cervix",
      "Uterine wall (endometrium)",
      "Ovary"
    ],
    "optionsHi": [
      "सबसे मजबूत",
      "सबसे कमजोर; मध्य मेनिंजियल धमनी यहां होती है",
      "कोई महत्व नहीं",
      "सुरक्षित क्षेत्र"
    ],
    "correctAnswer": 2,
    "explanationEn": "Normal implantation occurs in the endometrium of the uterine body around days 6-10.",
    "explanationHi": "पटेरियन खोपड़ी का कमजोर बिंदु है; आघात से एपिड्यूरल हेमेटोमा हो सकता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-560",
    "questionEn": "The stratum lucidum is found only in:",
    "questionHi": "TMJ (Temporomandibular Joint) कहां है?",
    "optionsEn": [
      "All skin",
      "Thick skin (palms, soles)",
      "Thin skin",
      "Scalp"
    ],
    "optionsHi": [
      "कंधे में",
      "जबड़े और खोपड़ी के बीच",
      "घुटने में",
      "कोहनी में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The stratum lucidum is a clear layer present only in thick skin of palms and soles.",
    "explanationHi": "TMJ मैंडिबल और टेम्पोरल बोन के बीच का जोड़ है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-561",
    "questionEn": "Describe the three processes involved in urine formation.",
    "questionHi": "मास्टॉयड प्रोसेस (Mastoid Process) का महत्व क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "सुनने में",
      "SCM पेशी का जुड़ाव स्थल; मध्य कान के पास",
      "देखने में",
      "सूंघने में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "मास्टॉयड प्रोसेस में वायु कोशिकाएं होती हैं और मध्य कान संक्रमण फैल सकता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-562",
    "questionEn": "List the structures through which urine passes from formation to excretion.",
    "questionHi": "पैरोटिड ग्रंथि (Parotid Gland) कहां है?",
    "optionsEn": [],
    "optionsHi": [
      "गर्दन में",
      "कान के सामने और नीचे",
      "जीभ के नीचे",
      "जबड़े के नीचे"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "पैरोटिड ग्रंथि कान के सामने और नीचे सबसे बड़ी लार ग्रंथि है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-563",
    "questionEn": "Describe the hormonal changes during the menstrual cycle.",
    "questionHi": "पैरोटिड डक्ट (Stensen's Duct) कहां खुलती है?",
    "optionsEn": [],
    "optionsHi": [
      "जीभ के नीचे",
      "ऊपरी दूसरे दाढ़ के पास गाल में",
      "होंठ पर",
      "नाक में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "पैरोटिड डक्ट ऊपरी दूसरे दाढ़ के सामने गाल में खुलती है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-564",
    "questionEn": "List the male accessory reproductive glands and their contributions to semen.",
    "questionHi": "सबमैंडिबुलर ग्रंथि (Submandibular Gland) की डक्ट कहां खुलती है?",
    "optionsEn": [],
    "optionsHi": [
      "गाल में",
      "जीभ के नीचे सबलिंगुअल कारंकल पर",
      "होंठ पर",
      "नाक में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "वार्टन की डक्ट (सबमैंडिबुलर) जीभ के नीचे खुलती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-565",
    "questionEn": "List the five layers of the epidermis from deep to superficial and their characteristics.",
    "questionHi": "फ्रेनुलम (Frenulum) जीभ का क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "जीभ की पेशी",
      "जीभ के नीचे मुंह के तल से जोड़ने वाली झिल्ली",
      "जीभ की धमनी",
      "जीभ की तंत्रिका"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "लिंगुअल फ्रेनुलम जीभ के नीचे की झिल्ली है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-566",
    "questionEn": "Describe the three tunics (layers) of the eye.",
    "questionHi": "एनकायलोग्लॉसिया (Ankyloglossia) या टंग-टाई क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "लंबी जीभ",
      "छोटा फ्रेनुलम जिससे जीभ की गति सीमित",
      "मोटी जीभ",
      "पतली जीभ"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "टंग-टाई में फ्रेनुलम छोटा होता है जिससे जीभ की गति सीमित होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-567",
    "questionEn": "Describe the pathway of sound from the external ear to the brain.",
    "questionHi": "हार्ड पैलेट (Hard Palate) किससे बना है?",
    "optionsEn": [],
    "optionsHi": [
      "केवल पेशी",
      "मैक्सिला और पैलेटाइन हड्डियों से",
      "केवल उपास्थि",
      "केवल झिल्ली"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "हार्ड पैलेट मैक्सिला के पैलेटाइन प्रोसेस और पैलेटाइन हड्डियों से बना है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-568",
    "questionEn": "Explain the renin-angiotensin-aldosterone system (RAAS).",
    "questionHi": "सॉफ्ट पैलेट (Soft Palate) किससे बना है?",
    "optionsEn": [],
    "optionsHi": [
      "हड्डी से",
      "पेशियों और श्लेष्मा झिल्ली से",
      "उपास्थि से",
      "हड्डी और उपास्थि"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "सॉफ्ट पैलेट पेशी और श्लेष्मा झिल्ली से बना है और निगलने में मदद करता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-569",
    "questionEn": "Describe the structure and function of the mammary glands.",
    "questionHi": "यूवुला (Uvula) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "जीभ का भाग",
      "सॉफ्ट पैलेट के पीछे लटकता हुआ भाग",
      "टॉन्सिल",
      "एडेनॉयड"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "यूवुला सॉफ्ट पैलेट के पीछे का मांसल भाग है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-570",
    "questionEn": "Describe the three phases of wound healing.",
    "questionHi": "एपिग्लॉटिस (Epiglottis) का कार्य क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "बोलना",
      "निगलते समय श्वासनली को ढकना",
      "सांस लेना",
      "पाचन"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "एपिग्लॉटिस निगलते समय स्वरयंत्र को ढकती है ताकि भोजन श्वासनली में न जाए।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-571",
    "questionEn": "A patient presents with colicky flank pain radiating to the groin. Based on anatomical knowledge, explain the likely cause and path of a kidney stone.",
    "questionHi": "वोकल कॉर्ड्स (Vocal Cords) कहां होते हैं?",
    "optionsEn": [],
    "optionsHi": [
      "ग्रसनी में",
      "स्वरयंत्र (Larynx) में",
      "श्वासनली में",
      "फेफड़ों में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "वोकल कॉर्ड्स स्वरयंत्र में होते हैं और आवाज उत्पन्न करते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-572",
    "questionEn": "A woman has missed her period and has right lower quadrant pain with vaginal bleeding. Using anatomical knowledge, explain why ectopic pregnancy must be considered.",
    "questionHi": "रिकरेंट लैरिंजियल नर्व (Recurrent Laryngeal Nerve) क्या नियंत्रित करती है?",
    "optionsEn": [],
    "optionsHi": [
      "निगलना",
      "अधिकांश स्वरयंत्र पेशियां (आवाज)",
      "जीभ",
      "चबाना"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "रिकरेंट लैरिंजियल नर्व (वेगस की शाखा) स्वरयंत्र की पेशियों को नियंत्रित करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-573",
    "questionEn": "A patient has a second-degree burn on the forearm. Explain the anatomical structures affected and the healing process.",
    "questionHi": "रिकरेंट लैरिंजियल नर्व की चोट से क्या होता है?",
    "optionsEn": [],
    "optionsHi": [
      "बहरापन",
      "स्वर बैठना या आवाज का खोना",
      "अंधापन",
      "सुन्नता"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "इस तंत्रिका की चोट से वोकल कॉर्ड लकवाग्रस्त होता है जिससे आवाज प्रभावित होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-574",
    "questionEn": "An elderly patient has reduced visual acuity and sees halos around lights. Using anatomical knowledge, explain possible causes.",
    "questionHi": "बाईं रिकरेंट लैरिंजियल नर्व किसके चारों ओर घूमती है?",
    "optionsEn": [],
    "optionsHi": [
      "दाईं सबक्लेवियन",
      "महाधमनी चाप (Aortic Arch)",
      "पल्मोनरी ट्रंक",
      "ब्रेकियोसेफैलिक"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "बाईं रिकरेंट लैरिंजियल नर्व महाधमनी चाप के चारों ओर घूमकर ऊपर जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-575",
    "questionEn": "A male patient has difficulty initiating urination and a weak stream. Using anatomical knowledge, explain the likely cause and affected structures.",
    "questionHi": "क्रिकोथायरॉयडोटॉमी (Cricothyroidotomy) कहां की जाती है?",
    "optionsEn": [],
    "optionsHi": [
      "श्वासनली में",
      "क्रिकोथायरॉयड मेम्ब्रेन पर (थायरॉयड और क्रिकॉयड के बीच)",
      "स्वरयंत्र में",
      "ग्रसनी में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "क्रिकोथायरॉयडोटॉमी आपातकालीन वायुमार्ग के लिए क्रिकोथायरॉयड मेम्ब्रेन पर की जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-576",
    "questionEn": "The afferent arteriole brings blood TO the:",
    "questionHi": "ट्रेकियोस्टॉमी (Tracheostomy) कहां की जाती है?",
    "optionsEn": [
      "Kidney",
      "Glomerulus",
      "Loop of Henle",
      "Bladder"
    ],
    "optionsHi": [
      "स्वरयंत्र में",
      "श्वासनली में (आमतौर पर 2-3 ट्रेकियल रिंग)",
      "ग्रसनी में",
      "फेफड़ों में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Afferent = toward. The afferent arteriole brings blood to the glomerulus for filtration.",
    "explanationHi": "ट्रेकियोस्टॉमी श्वासनली में की जाती है, आमतौर पर दूसरे-तीसरे रिंग के बीच।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-577",
    "questionEn": "Sertoli cells provide support for:",
    "questionHi": "कैरिना (Carina) क्या है?",
    "optionsEn": [
      "Egg development",
      "Sperm development",
      "Hormone production",
      "Fertilization"
    ],
    "optionsHi": [
      "फेफड़े का भाग",
      "श्वासनली का विभाजन बिंदु (दो मुख्य श्वसनी में)",
      "हृदय का भाग",
      "पेट का भाग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sertoli (nurse) cells in seminiferous tubules support and nourish developing sperm.",
    "explanationHi": "कैरिना श्वासनली का वह बिंदु है जहां यह दाएं और बाएं मुख्य श्वसनी में बंटती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-578",
    "questionEn": "The ciliary body produces:",
    "questionHi": "कैरिना किस स्तर पर है?",
    "optionsEn": [
      "Tears",
      "Aqueous humor",
      "Vitreous humor",
      "Melanin"
    ],
    "optionsHi": [
      "T2",
      "T4-T5 (स्टर्नल एंगल स्तर)",
      "T10",
      "L1"
    ],
    "correctAnswer": 1,
    "explanationEn": "The ciliary body produces aqueous humor and controls lens shape through ciliary muscles.",
    "explanationHi": "कैरिना T4-T5 स्तर पर स्टर्नल एंगल के स्तर पर है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-579",
    "questionEn": "Pacinian corpuscles detect:",
    "questionHi": "फेफड़े की हिलम (Hilum) में क्या होता है?",
    "optionsEn": [
      "Light touch",
      "Deep pressure and vibration",
      "Temperature",
      "Pain"
    ],
    "optionsHi": [
      "केवल वायु",
      "ब्रोंकस, पल्मोनरी वाहिकाएं, लिम्फ नोड्स, तंत्रिकाएं",
      "केवल रक्त",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pacinian corpuscles in deep dermis and hypodermis detect deep pressure and vibration.",
    "explanationHi": "हिलम फेफड़े का मध्य भाग है जहां से सभी संरचनाएं प्रवेश और निकलती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-580",
    "questionEn": "PERRLA stands for:",
    "questionHi": "दाएं फेफड़े में कितने लोब हैं?",
    "optionsEn": [
      "Pupils Equal Round Reactive to Light Accommodation",
      "Peripheral Eye Reflex Response Left Arm",
      "Pupillary Examination Requires Right Light Application",
      "Primary Eye Response Reflexive Light Adaptation"
    ],
    "optionsHi": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 0,
    "explanationEn": "PERRLA is a standard documentation of normal pupil assessment findings.",
    "explanationHi": "दाएं फेफड़े में 3 लोब हैं: ऊपरी, मध्य, निचला।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-581",
    "questionEn": "The vestibule and semicircular canals are responsible for:",
    "questionHi": "बाएं फेफड़े में कितने लोब हैं?",
    "optionsEn": [
      "Hearing",
      "Balance",
      "Vision",
      "Taste"
    ],
    "optionsHi": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "explanationEn": "The vestibular apparatus (vestibule and semicircular canals) detects head position and movement for balance.",
    "explanationHi": "बाएं फेफड़े में 2 लोब हैं: ऊपरी और निचला (हृदय के लिए जगह के कारण)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-582",
    "questionEn": "The PCT reabsorbs approximately what percentage of filtrate?",
    "questionHi": "लिंगुला (Lingula) क्या है?",
    "optionsEn": [
      "25%",
      "45%",
      "65%",
      "85%"
    ],
    "optionsHi": [
      "दाएं फेफड़े का भाग",
      "बाएं फेफड़े के ऊपरी लोब का भाग (मध्य लोब के समान)",
      "जीभ",
      "श्वासनली"
    ],
    "correctAnswer": 2,
    "explanationEn": "The proximal convoluted tubule reabsorbs ~65% of filtered water, sodium, and most nutrients.",
    "explanationHi": "लिंगुला बाएं फेफड़े के ऊपरी लोब का भाग है जो दाएं मध्य लोब के समान है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-583",
    "questionEn": "The cremaster muscle functions to:",
    "questionHi": "कार्डियक नॉच (Cardiac Notch) कहां है?",
    "optionsEn": [
      "Produce sperm",
      "Elevate testes",
      "Produce testosterone",
      "Transport sperm"
    ],
    "optionsHi": [
      "दाएं फेफड़े में",
      "बाएं फेफड़े में (हृदय के लिए जगह)",
      "हृदय में",
      "यकृत में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The cremaster muscle elevates testes toward body in cold to maintain optimal temperature for sperm production.",
    "explanationHi": "कार्डियक नॉच बाएं फेफड़े में गड्ढा है जो हृदय के लिए जगह बनाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-584",
    "questionEn": "Cerumen is produced by:",
    "questionHi": "ब्रोंकोपल्मोनरी सेगमेंट (Bronchopulmonary Segment) क्या है?",
    "optionsEn": [
      "Sebaceous glands",
      "Eccrine glands",
      "Ceruminous glands",
      "Apocrine glands"
    ],
    "optionsHi": [
      "पूरा फेफड़ा",
      "फेफड़े का एक स्वतंत्र कार्यात्मक इकाई",
      "एल्वियोलस",
      "ब्रोंकस"
    ],
    "correctAnswer": 2,
    "explanationEn": "Ceruminous glands (modified apocrine glands) in the ear canal produce cerumen (earwax).",
    "explanationHi": "ब्रोंकोपल्मोनरी सेगमेंट फेफड़े का एक भाग है जिसकी अपनी ब्रोंकस और धमनी होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-585",
    "questionEn": "The organ of Corti is located in the:",
    "questionHi": "एल्वियोली (Alveoli) में गैस विनिमय कौन सी कोशिकाओं के माध्यम से होता है?",
    "optionsEn": [
      "Vestibule",
      "Cochlea",
      "Semicircular canals",
      "Middle ear"
    ],
    "optionsHi": [
      "टाइप II",
      "टाइप I न्यूमोसाइट्स",
      "मैक्रोफेज",
      "गॉब्लेट"
    ],
    "correctAnswer": 1,
    "explanationEn": "The organ of Corti in the cochlea contains hair cells that convert sound vibrations to nerve impulses.",
    "explanationHi": "टाइप I न्यूमोसाइट्स पतली कोशिकाएं हैं जिनके माध्यम से गैस विनिमय होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-586",
    "questionEn": "The choroid layer of the eye:",
    "questionHi": "सर्फैक्टेंट (Surfactant) कौन सी कोशिकाएं बनाती हैं?",
    "optionsEn": [
      "Refracts light",
      "Detects light",
      "Provides blood supply",
      "Controls pupil size"
    ],
    "optionsHi": [
      "टाइप I",
      "टाइप II न्यूमोसाइट्स",
      "मैक्रोफेज",
      "फाइब्रोब्लास्ट"
    ],
    "correctAnswer": 2,
    "explanationEn": "The choroid is a vascular layer that provides blood supply to the retina and absorbs stray light.",
    "explanationHi": "टाइप II न्यूमोसाइट्स सर्फैक्टेंट बनाती हैं जो एल्वियोली को खुला रखता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-587",
    "questionEn": "Apocrine sweat glands are found mainly in the:",
    "questionHi": "अल्वेओलर मैक्रोफेज (Alveolar Macrophages) क्या करते हैं?",
    "optionsEn": [
      "Palms and soles",
      "All over body",
      "Axillae and groin",
      "Face only"
    ],
    "optionsHi": [
      "गैस विनिमय",
      "फेफड़ों में रोगाणुओं और कणों को नष्ट करना",
      "सर्फैक्टेंट बनाना",
      "बलगम बनाना"
    ],
    "correctAnswer": 2,
    "explanationEn": "Apocrine glands are in axillae, groin, and areolae; become active at puberty; associated with body odor.",
    "explanationHi": "अल्वेओलर मैक्रोफेज (डस्ट सेल्स) फेफड़ों में रोगाणुओं और धूल को नष्ट करते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-588",
    "questionEn": "The average bladder capacity is:",
    "questionHi": "प्लूरल इफ्यूजन (Pleural Effusion) क्या है?",
    "optionsEn": [
      "100-200 mL",
      "300-500 mL",
      "700-900 mL",
      "1000-1200 mL"
    ],
    "optionsHi": [
      "फेफड़े में हवा",
      "प्लूरल स्पेस में तरल का जमा होना",
      "फेफड़े का संकुचन",
      "ब्रोंकाइटिस"
    ],
    "correctAnswer": 1,
    "explanationEn": "Normal bladder holds 300-500 mL comfortably; urge to void begins around 200-300 mL.",
    "explanationHi": "प्लूरल इफ्यूजन में प्लूरल स्पेस में असामान्य मात्रा में तरल जमा हो जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-589",
    "questionEn": "FSH in females stimulates:",
    "questionHi": "न्यूमोथोरैक्स (Pneumothorax) क्या है?",
    "optionsEn": [
      "Ovulation",
      "Follicle development",
      "Corpus luteum formation",
      "Menstruation"
    ],
    "optionsHi": [
      "तरल जमाव",
      "प्लूरल स्पेस में हवा जिससे फेफड़ा सिकुड़ जाता है",
      "फेफड़े का संक्रमण",
      "ब्रोंकाइटिस"
    ],
    "correctAnswer": 1,
    "explanationEn": "FSH (Follicle Stimulating Hormone) stimulates follicle development in the ovary.",
    "explanationHi": "न्यूमोथोरैक्स में प्लूरल स्पेस में हवा आ जाती है जिससे फेफड़ा सिकुड़ जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-590",
    "questionEn": "Prolactin primarily stimulates:",
    "questionHi": "थोरैसेंटेसिस (Thoracentesis) कहां की जाती है?",
    "optionsEn": [
      "Ovulation",
      "Milk production",
      "Uterine contractions",
      "Follicle development"
    ],
    "optionsHi": [
      "सामने से",
      "पीछे से मिडस्कैपुलर लाइन में पसली के ऊपरी किनारे पर",
      "बगल से",
      "ऊपर से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Prolactin from the anterior pituitary stimulates milk production in the mammary glands.",
    "explanationHi": "थोरैसेंटेसिस पीछे से 7-9 इंटरकोस्टल स्पेस में पसली के ऊपरी किनारे पर की जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-591",
    "questionEn": "The detrusor muscle is controlled by:",
    "questionHi": "पेरीकार्डियम (Pericardium) क्या है?",
    "optionsEn": [
      "Somatic nerves",
      "Parasympathetic nerves",
      "Sympathetic nerves only",
      "No nerve control"
    ],
    "optionsHi": [
      "हृदय की पेशी",
      "हृदय को ढकने वाली दोहरी झिल्ली",
      "हृदय का वाल्व",
      "हृदय की धमनी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Parasympathetic nerves (S2-S4) stimulate detrusor contraction for urination.",
    "explanationHi": "पेरीकार्डियम हृदय को ढकने वाली सुरक्षात्मक दोहरी झिल्ली है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-592",
    "questionEn": "The reticular dermis contains mainly:",
    "questionHi": "पेरीकार्डियल इफ्यूजन (Pericardial Effusion) क्या है?",
    "optionsEn": [
      "Loose connective tissue",
      "Dense irregular connective tissue",
      "Adipose tissue",
      "Epithelial tissue"
    ],
    "optionsHi": [
      "हृदय में छेद",
      "पेरीकार्डियल स्पेस में तरल का जमा होना",
      "वाल्व खराबी",
      "धमनी ब्लॉक"
    ],
    "correctAnswer": 1,
    "explanationEn": "The reticular (lower) dermis is dense irregular connective tissue with collagen and elastic fibers.",
    "explanationHi": "पेरीकार्डियल इफ्यूजन में हृदय के चारों ओर असामान्य तरल जमा हो जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-593",
    "questionEn": "Erythropoietin is produced by the:",
    "questionHi": "कार्डियक टैम्पोनेड (Cardiac Tamponade) क्या है?",
    "optionsEn": [
      "Liver",
      "Kidneys",
      "Spleen",
      "Bone marrow"
    ],
    "optionsHi": [
      "हृदय का रुकना",
      "पेरीकार्डियल तरल से हृदय पर दबाव जिससे भरना प्रभावित",
      "वाल्व खराबी",
      "धमनी ब्लॉक"
    ],
    "correctAnswer": 1,
    "explanationEn": "The kidneys produce erythropoietin (EPO) in response to hypoxia, stimulating RBC production.",
    "explanationHi": "टैम्पोनेड में पेरीकार्डियल तरल इतना बढ़ जाता है कि हृदय का भरना प्रभावित होता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-594",
    "questionEn": "The broad ligament supports the:",
    "questionHi": "कोरोनरी साइनस (Coronary Sinus) क्या करता है?",
    "optionsEn": [
      "Bladder",
      "Kidneys",
      "Uterus and tubes",
      "Rectum"
    ],
    "optionsHi": [
      "हृदय को रक्त देता है",
      "हृदय का शिरापरक रक्त दाएं आलिंद में खाली करता है",
      "धमनी रक्त लाता है",
      "वाल्व का काम करता है"
    ],
    "correctAnswer": 2,
    "explanationEn": "The broad ligament is a peritoneal fold supporting the uterus, fallopian tubes, and ovaries.",
    "explanationHi": "कोरोनरी साइनस हृदय की शिराओं से रक्त एकत्र करके दाएं आलिंद में खाली करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-595",
    "questionEn": "The lunula of the nail is:",
    "questionHi": "LAD (Left Anterior Descending) धमनी कहां रक्त पहुंचाती है?",
    "optionsEn": [
      "The free edge",
      "The white crescent at base",
      "The nail bed",
      "The cuticle"
    ],
    "optionsHi": [
      "दायां निलय",
      "बाएं निलय का अग्र भाग और सेप्टम",
      "आलिंद",
      "पूरे हृदय को समान रूप से"
    ],
    "correctAnswer": 1,
    "explanationEn": "The lunula is the visible white crescent at the base of the nail, representing the nail matrix.",
    "explanationHi": "LAD बाएं निलय के अग्र भाग और इंटरवेंट्रिकुलर सेप्टम को रक्त देती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-596",
    "questionEn": "Oxytocin causes:",
    "questionHi": "LAD को 'विधवा बनाने वाली' (Widow Maker) क्यों कहते हैं?",
    "optionsEn": [
      "Milk production",
      "Milk ejection (let-down)",
      "Follicle development",
      "Sperm production"
    ],
    "optionsHi": [
      "कोई कारण नहीं",
      "इसकी रुकावट से बड़ा हार्ट अटैक और मृत्यु हो सकती है",
      "यह सबसे छोटी है",
      "यह सबसे पतली है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Oxytocin causes contraction of myoepithelial cells around alveoli, ejecting milk (let-down reflex).",
    "explanationHi": "LAD की रुकावट से हृदय का बड़ा भाग प्रभावित होता है जो जानलेवा हो सकता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-597",
    "questionEn": "The tympanic membrane is also called the:",
    "questionHi": "RCA (Right Coronary Artery) कहां रक्त पहुंचाती है?",
    "optionsEn": [
      "Oval window",
      "Eardrum",
      "Cochlea",
      "Pinna"
    ],
    "optionsHi": [
      "केवल बायां निलय",
      "दायां निलय, SA नोड, AV नोड (अधिकांश में)",
      "केवल आलिंद",
      "केवल सेप्टम"
    ],
    "correctAnswer": 1,
    "explanationEn": "The tympanic membrane (eardrum) separates outer and middle ear, vibrating with sound waves.",
    "explanationHi": "RCA दाएं हृदय और चालन प्रणाली के महत्वपूर्ण भागों को रक्त देती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-598",
    "questionEn": "The average female urethra length is:",
    "questionHi": "सर्कमफ्लेक्स धमनी (Circumflex Artery) कहां रक्त पहुंचाती है?",
    "optionsEn": [
      "2 cm",
      "4 cm",
      "10 cm",
      "20 cm"
    ],
    "optionsHi": [
      "दायां निलय",
      "बाएं निलय का पार्श्व और पिछला भाग",
      "दायां आलिंद",
      "सेप्टम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Female urethra is ~4 cm; male is ~20 cm. Short female urethra increases UTI susceptibility.",
    "explanationHi": "सर्कमफ्लेक्स बाएं निलय के पार्श्व और पिछले भाग को रक्त देती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-599",
    "questionEn": "The fornix of the vagina is:",
    "questionHi": "डोमिनेंट कोरोनरी धमनी (Dominant) किसे कहते हैं?",
    "optionsEn": [
      "The external opening",
      "The recess around cervix",
      "The muscular wall",
      "The hymen"
    ],
    "optionsHi": [
      "सबसे बड़ी",
      "जो PDA (Posterior Descending Artery) देती है",
      "सबसे लंबी",
      "सबसे मोटी"
    ],
    "correctAnswer": 1,
    "explanationEn": "The fornix is the recess (anterior, posterior, lateral) around the cervix in the upper vagina.",
    "explanationHi": "डोमिनेंट धमनी वह है जो पोस्टीरियर डिसेंडिंग आर्टरी देती है (70% में RCA)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-600",
    "questionEn": "The GFR decreases with age primarily due to:",
    "questionHi": "ट्रैबेकुले कार्निए (Trabeculae Carneae) कहां होती हैं?",
    "optionsEn": [
      "Increased blood pressure",
      "Loss of nephrons",
      "Increased filtration",
      "Hormonal changes"
    ],
    "optionsHi": [
      "आलिंदों में",
      "निलयों की आंतरिक दीवार पर",
      "वाल्वों पर",
      "बाहरी सतह पर"
    ],
    "correctAnswer": 1,
    "explanationEn": "GFR declines ~1 mL/min/year after age 40 due to progressive loss of functioning nephrons.",
    "explanationHi": "ट्रैबेकुले कार्निए निलयों की आंतरिक दीवार पर मांसपेशी के उभार हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-601",
    "questionEn": "The study of body structures is called:",
    "questionHi": "पैपिलरी मसल्स (Papillary Muscles) का कार्य क्या है?",
    "optionsEn": [
      "Physiology",
      "Anatomy",
      "Pathology",
      "Biochemistry"
    ],
    "optionsHi": [
      "रक्त पंप करना",
      "कॉर्डे टेंडिनी के माध्यम से वाल्व को पलटने से रोकना",
      "वाल्व खोलना",
      "हृदय को पोषण देना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anatomy studies body structures; physiology studies functions.",
    "explanationHi": "पैपिलरी मसल्स कॉर्डे टेंडिनी से जुड़कर AV वाल्वों को पलटने से रोकती हैं।",
    "difficulty": "easy",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-602",
    "questionEn": "The sagittal plane divides the body into:",
    "questionHi": "कॉर्डे टेंडिनी (Chordae Tendineae) क्या हैं?",
    "optionsEn": [
      "Front and back",
      "Left and right",
      "Top and bottom",
      "Inner and outer"
    ],
    "optionsHi": [
      "धमनियां",
      "पैपिलरी मसल्स को वाल्व से जोड़ने वाले तंतु",
      "शिराएं",
      "तंत्रिकाएं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sagittal plane divides into left and right; frontal into anterior/posterior; transverse into superior/inferior.",
    "explanationHi": "कॉर्डे टेंडिनी रेशेदार तंतु हैं जो पैपिलरी मसल्स को AV वाल्व के पत्तों से जोड़ते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-603",
    "questionEn": "The spleen is located in which quadrant?",
    "questionHi": "मॉडरेटर बैंड (Moderator Band) कहां होता है?",
    "optionsEn": [
      "RUQ",
      "LUQ",
      "RLQ",
      "LLQ"
    ],
    "optionsHi": [
      "बाएं निलय में",
      "दाएं निलय में",
      "दाएं आलिंद में",
      "बाएं आलिंद में"
    ],
    "correctAnswer": 1,
    "explanationEn": "The spleen is in the left upper quadrant, protected by ribs 9-11.",
    "explanationHi": "मॉडरेटर बैंड दाएं निलय में मांसपेशी का पुल है जो चालन तंतु ले जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-604",
    "questionEn": "The vertebral column protects the:",
    "questionHi": "फॉसा ओवेलिस (Fossa Ovalis) क्या है?",
    "optionsEn": [
      "Brain",
      "Heart",
      "Spinal cord",
      "Lungs"
    ],
    "optionsHi": [
      "वाल्व",
      "अंतरआलिंद सेप्टम पर गड्ढा (भ्रूण के फोरामेन ओवेल का अवशेष)",
      "धमनी",
      "शिरा"
    ],
    "correctAnswer": 2,
    "explanationEn": "The vertebral column surrounds and protects the spinal cord.",
    "explanationHi": "फॉसा ओवेलिस भ्रूण के फोरामेन ओवेल का बंद हुआ स्थान है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-605",
    "questionEn": "The radius is located on which side of the forearm?",
    "questionHi": "लिगामेंटम आर्टेरियोसम (Ligamentum Arteriosum) क्या है?",
    "optionsEn": [
      "Medial (pinky side)",
      "Lateral (thumb side)",
      "Posterior",
      "Anterior"
    ],
    "optionsHi": [
      "एक धमनी",
      "भ्रूण के डक्टस आर्टेरियोसस का अवशेष",
      "एक शिरा",
      "एक तंत्रिका"
    ],
    "correctAnswer": 1,
    "explanationEn": "Radius is lateral (thumb side); ulna is medial (pinky side).",
    "explanationHi": "लिगामेंटम आर्टेरियोसम भ्रूण के डक्टस आर्टेरियोसस का बंद हुआ रेशेदार अवशेष है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-606",
    "questionEn": "A pivot joint allows:",
    "questionHi": "डक्टस आर्टेरियोसस (Ductus Arteriosus) भ्रूण में क्या जोड़ता था?",
    "optionsEn": [
      "Flexion only",
      "Rotation",
      "Gliding",
      "All movements"
    ],
    "optionsHi": [
      "दोनों आलिंद",
      "पल्मोनरी आर्टरी और महाधमनी",
      "IVC और SVC",
      "दोनों निलय"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pivot joints allow rotation (e.g., atlas-axis for head rotation).",
    "explanationHi": "भ्रूण में डक्टस आर्टेरियोसस पल्मोनरी आर्टरी से महाधमनी में रक्त भेजता था।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-607",
    "questionEn": "The acetabulum is part of the:",
    "questionHi": "ASD (Atrial Septal Defect) क्या है?",
    "optionsEn": [
      "Shoulder",
      "Hip",
      "Knee",
      "Ankle"
    ],
    "optionsHi": [
      "वाल्व खराबी",
      "अंतरआलिंद सेप्टम में छेद",
      "निलय में छेद",
      "महाधमनी संकुचन"
    ],
    "correctAnswer": 1,
    "explanationEn": "The acetabulum is the hip socket where the femoral head articulates.",
    "explanationHi": "ASD दोनों आलिंदों के बीच की दीवार में जन्मजात छेद है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-608",
    "questionEn": "How many thoracic vertebrae are there?",
    "questionHi": "VSD (Ventricular Septal Defect) क्या है?",
    "optionsEn": [
      "7",
      "12",
      "5",
      "4"
    ],
    "optionsHi": [
      "आलिंद में छेद",
      "अंतरनिलय सेप्टम में छेद",
      "वाल्व खराबी",
      "महाधमनी संकुचन"
    ],
    "correctAnswer": 1,
    "explanationEn": "There are 12 thoracic vertebrae (T1-T12), each articulating with a pair of ribs.",
    "explanationHi": "VSD दोनों निलयों के बीच की दीवार में जन्मजात छेद है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-609",
    "questionEn": "The deltoid muscle is used for injection because it:",
    "questionHi": "PDA (Patent Ductus Arteriosus) क्या है?",
    "optionsEn": [
      "Is the largest muscle",
      "Has few nerves and vessels",
      "Is easily accessible",
      "All of the above"
    ],
    "optionsHi": [
      "बंद डक्टस",
      "जन्म के बाद भी खुला डक्टस आर्टेरियोसस",
      "ASD",
      "VSD"
    ],
    "correctAnswer": 2,
    "explanationEn": "Deltoid is easily accessible and has defined landmarks, but only for small volumes.",
    "explanationHi": "PDA में डक्टस आर्टेरियोसस जन्म के बाद भी बंद नहीं होता।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-610",
    "questionEn": "The triceps brachii extends the:",
    "questionHi": "कोआर्क्टेशन ऑफ एओर्टा (Coarctation of Aorta) क्या है?",
    "optionsEn": [
      "Shoulder",
      "Elbow",
      "Wrist",
      "Hip"
    ],
    "optionsHi": [
      "महाधमनी का फैलाव",
      "महाधमनी का संकुचन",
      "वाल्व खराबी",
      "सेप्टम में छेद"
    ],
    "correctAnswer": 1,
    "explanationEn": "Triceps extends the elbow; biceps flexes it.",
    "explanationHi": "कोआर्क्टेशन में महाधमनी का एक भाग संकुचित होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-611",
    "questionEn": "Peristalsis is performed by:",
    "questionHi": "टेट्रालॉजी ऑफ फैलोट (Tetralogy of Fallot) में कितने दोष होते हैं?",
    "optionsEn": [
      "Skeletal muscle",
      "Smooth muscle",
      "Cardiac muscle",
      "All muscles"
    ],
    "optionsHi": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "explanationEn": "Smooth muscle in GI tract walls performs peristalsis (wave-like contractions).",
    "explanationHi": "TOF में 4 दोष हैं: VSD, पल्मोनरी स्टेनोसिस, ओवरराइडिंग एओर्टा, RV हाइपरट्रॉफी।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-612",
    "questionEn": "The preferred IM injection site for adults is:",
    "questionHi": "ग्रसिका (Esophagus) की लंबाई लगभग कितनी होती है?",
    "optionsEn": [
      "Deltoid",
      "Dorsogluteal",
      "Ventrogluteal",
      "Rectus femoris"
    ],
    "optionsHi": [
      "10 cm",
      "25 cm",
      "40 cm",
      "50 cm"
    ],
    "correctAnswer": 2,
    "explanationEn": "Ventrogluteal is preferred for adults - well-defined landmarks, no major nerves/vessels.",
    "explanationHi": "ग्रसिका लगभग 25 cm लंबी मांसपेशी नलिका है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-613",
    "questionEn": "The lub-dub sounds are caused by:",
    "questionHi": "ग्रसिका में कितने शारीरिक संकुचन होते हैं?",
    "optionsEn": [
      "Blood flow",
      "Valve closure",
      "Heart contraction",
      "Artery pulsation"
    ],
    "optionsHi": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 1,
    "explanationEn": "S1 (lub) = AV valves closing; S2 (dub) = semilunar valves closing.",
    "explanationHi": "ग्रसिका में 3 संकुचन हैं: क्रिकोफैरिंजियल, महाधमनी/ब्रोंकस, और डायफ्राम स्तर पर।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-614",
    "questionEn": "Systole refers to:",
    "questionHi": "ग्रसिका का ऊपरी 1/3 किस प्रकार की पेशी से बना है?",
    "optionsEn": [
      "Heart relaxation",
      "Heart contraction",
      "Valve opening",
      "Blood filling"
    ],
    "optionsHi": [
      "केवल चिकनी",
      "कंकाल पेशी (ऐच्छिक)",
      "हृदय पेशी",
      "मिश्रित"
    ],
    "correctAnswer": 1,
    "explanationEn": "Systole is ventricular contraction; diastole is relaxation.",
    "explanationHi": "ग्रसिका का ऊपरी 1/3 कंकाल पेशी से बना है जो निगलने की शुरुआत में मदद करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-615",
    "questionEn": "The coronary sinus drains into the:",
    "questionHi": "ग्रसिका का निचला 1/3 किस प्रकार की पेशी से बना है?",
    "optionsEn": [
      "Left atrium",
      "Right atrium",
      "Left ventricle",
      "Aorta"
    ],
    "optionsHi": [
      "कंकाल पेशी",
      "चिकनी पेशी",
      "हृदय पेशी",
      "उपास्थि"
    ],
    "correctAnswer": 1,
    "explanationEn": "Coronary sinus collects venous blood from heart muscle and drains into right atrium.",
    "explanationHi": "ग्रसिका का निचला 1/3 चिकनी पेशी से बना है जो अनैच्छिक है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-616",
    "questionEn": "Blood pressure is highest in the:",
    "questionHi": "बैरेट्स एसोफेगस (Barrett's Esophagus) क्या है?",
    "optionsEn": [
      "Veins",
      "Capillaries",
      "Arteries",
      "Venules"
    ],
    "optionsHi": [
      "ग्रसिका का कैंसर",
      "ग्रसिका की परत का आंत जैसी परत में बदलना (GERD से)",
      "ग्रसिका का संकुचन",
      "ग्रसिका का फैलाव"
    ],
    "correctAnswer": 2,
    "explanationEn": "Arterial pressure is highest; pressure drops progressively through capillaries to veins.",
    "explanationHi": "बैरेट्स में क्रोनिक एसिड रिफ्लक्स से ग्रसिका की परत बदल जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-617",
    "questionEn": "The temporal pulse is located at the:",
    "questionHi": "आमाशय का कार्डिया (Cardia) कहां है?",
    "optionsEn": [
      "Wrist",
      "Temple",
      "Neck",
      "Groin"
    ],
    "optionsHi": [
      "नीचे",
      "ग्रसिका से जुड़ने वाला ऊपरी भाग",
      "बीच में",
      "दाईं ओर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Temporal artery pulse is felt at the temple, often used in infants.",
    "explanationHi": "कार्डिया आमाशय का वह भाग है जहां ग्रसिका आमाशय में खुलती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-618",
    "questionEn": "The vocal cords are located in the:",
    "questionHi": "आमाशय का फंडस (Fundus) कहां है?",
    "optionsEn": [
      "Pharynx",
      "Larynx",
      "Trachea",
      "Bronchi"
    ],
    "optionsHi": [
      "नीचे",
      "कार्डिया के ऊपर गुंबददार भाग",
      "बीच में",
      "दाईं ओर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vocal cords (folds) are in the larynx; vibration produces sound.",
    "explanationHi": "फंडस कार्डिया के ऊपर गुंबददार भाग है जहां गैस जमा होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-619",
    "questionEn": "The carina is located at vertebral level:",
    "questionHi": "आमाशय का एंट्रम (Antrum) कहां है?",
    "optionsEn": [
      "C7",
      "T2",
      "T4-T5",
      "T10"
    ],
    "optionsHi": [
      "ऊपर",
      "पायलोरस के पास निचला भाग",
      "बाईं ओर",
      "ऊपरी दाएं"
    ],
    "correctAnswer": 2,
    "explanationEn": "The carina (tracheal bifurcation) is at T4-T5 level.",
    "explanationHi": "एंट्रम आमाशय का निचला भाग है जो पायलोरस में खुलता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-620",
    "questionEn": "Type I alveolar cells are specialized for:",
    "questionHi": "पायलोरस (Pylorus) क्या है?",
    "optionsEn": [
      "Surfactant production",
      "Gas exchange",
      "Immune defense",
      "Mucus production"
    ],
    "optionsHi": [
      "आमाशय का ऊपरी भाग",
      "आमाशय और ग्रहणी के बीच का स्फिंक्टर",
      "छोटी आंत का भाग",
      "बड़ी आंत का भाग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Type I cells (95% of surface) are thin for gas exchange; Type II produce surfactant.",
    "explanationHi": "पायलोरस आमाशय का निचला छोर है जो ग्रहणी में खुलता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-621",
    "questionEn": "External intercostal muscles help with:",
    "questionHi": "ग्रहणी (Duodenum) की लंबाई लगभग कितनी होती है?",
    "optionsEn": [
      "Expiration",
      "Inspiration",
      "Coughing",
      "Sneezing"
    ],
    "optionsHi": [
      "10 cm",
      "25 cm (12 अंगुल)",
      "50 cm",
      "100 cm"
    ],
    "correctAnswer": 1,
    "explanationEn": "External intercostals elevate ribs during inspiration; internal intercostals aid forced expiration.",
    "explanationHi": "ग्रहणी लगभग 25 cm लंबी है, इसका नाम 12 अंगुल से आता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-622",
    "questionEn": "The cardiac notch is found on the:",
    "questionHi": "ग्रहणी का कौन सा भाग रेट्रोपेरिटोनियल है?",
    "optionsEn": [
      "Right lung",
      "Left lung",
      "Heart",
      "Diaphragm"
    ],
    "optionsHi": [
      "पहला भाग",
      "दूसरा, तीसरा और चौथा भाग",
      "कोई नहीं",
      "सभी"
    ],
    "correctAnswer": 1,
    "explanationEn": "The cardiac notch is an indentation on the left lung where the heart sits.",
    "explanationHi": "ग्रहणी का पहला भाग इंट्रापेरिटोनियल है, बाकी रेट्रोपेरिटोनियल।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-623",
    "questionEn": "Salivary amylase digests:",
    "questionHi": "एम्पुला ऑफ वेटर (Ampulla of Vater) कहां है?",
    "optionsEn": [
      "Proteins",
      "Fats",
      "Starch",
      "Vitamins"
    ],
    "optionsHi": [
      "आमाशय में",
      "ग्रहणी के दूसरे भाग में",
      "शेषांत्र में",
      "बृहदान्त्र में"
    ],
    "correctAnswer": 2,
    "explanationEn": "Salivary amylase begins carbohydrate (starch) digestion in the mouth.",
    "explanationHi": "एम्पुला ऑफ वेटर ग्रहणी में वह स्थान है जहां सामान्य पित्त नलिका और अग्न्याशय नलिका खुलती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-624",
    "questionEn": "The stomach churns food into:",
    "questionHi": "जेजुनम (Jejunum) छोटी आंत का कितना भाग है?",
    "optionsEn": [
      "Bolus",
      "Chyme",
      "Feces",
      "Chyle"
    ],
    "optionsHi": [
      "1/5",
      "लगभग 2/5",
      "3/5",
      "4/5"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chyme is the semi-liquid mixture of food and gastric juices leaving the stomach.",
    "explanationHi": "जेजुनम छोटी आंत का लगभग 2/5 भाग है, शेषांत्र 3/5।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-625",
    "questionEn": "The jejunum is the middle part of the:",
    "questionHi": "जेजुनम और शेषांत्र (Ileum) में क्या अंतर है?",
    "optionsEn": [
      "Stomach",
      "Small intestine",
      "Large intestine",
      "Esophagus"
    ],
    "optionsHi": [
      "कोई अंतर नहीं",
      "जेजुनम में अधिक सिलवटें और रक्त आपूर्ति, शेषांत्र में पायर्स पैच",
      "शेषांत्र छोटा है",
      "जेजुनम गहरा है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Small intestine: duodenum (first), jejunum (middle), ileum (last).",
    "explanationHi": "जेजुनम में अधिक प्लाइके सर्कुलेरिस और विली हैं, शेषांत्र में पायर्स पैच हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-626",
    "questionEn": "The liver is located primarily in the:",
    "questionHi": "इलियोसीकल वाल्व (Ileocecal Valve) क्या करता है?",
    "optionsEn": [
      "LUQ",
      "RUQ",
      "Pelvis",
      "Epigastric only"
    ],
    "optionsHi": [
      "पित्त प्रवाह नियंत्रण",
      "शेषांत्र से सीकम में एकदिशीय प्रवाह",
      "आमाशय खाली करना",
      "मूत्र प्रवाह"
    ],
    "correctAnswer": 1,
    "explanationEn": "The liver occupies most of the RUQ and extends into the epigastric region.",
    "explanationHi": "इलियोसीकल वाल्व छोटी आंत से बड़ी आंत में एकदिशीय प्रवाह सुनिश्चित करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-627",
    "questionEn": "Bile is stored in the:",
    "questionHi": "सीकम (Cecum) कहां है?",
    "optionsEn": [
      "Liver",
      "Gallbladder",
      "Pancreas",
      "Duodenum"
    ],
    "optionsHi": [
      "बाएं निचले पेट में",
      "दाएं निचले पेट में",
      "ऊपरी पेट में",
      "बाईं ओर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Bile is produced by liver, stored and concentrated in gallbladder.",
    "explanationHi": "सीकम बड़ी आंत का पहला भाग है जो दाएं इलियाक फोसा में है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-628",
    "questionEn": "The sigmoid colon is located in the:",
    "questionHi": "आंत्रपुच्छ (Appendix) कहां जुड़ा है?",
    "optionsEn": [
      "RUQ",
      "LUQ",
      "RLQ",
      "LLQ"
    ],
    "optionsHi": [
      "शेषांत्र से",
      "सीकम से",
      "आरोही बृहदान्त्र से",
      "मलाशय से"
    ],
    "correctAnswer": 3,
    "explanationEn": "The S-shaped sigmoid colon is in the left lower quadrant before the rectum.",
    "explanationHi": "आंत्रपुच्छ सीकम से जुड़ा एक छोटा अंधनाल है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-629",
    "questionEn": "Sensory neurons are also called:",
    "questionHi": "आरोही बृहदान्त्र (Ascending Colon) कहां है?",
    "optionsEn": [
      "Efferent",
      "Afferent",
      "Interneurons",
      "Motor neurons"
    ],
    "optionsHi": [
      "बाईं ओर",
      "दाईं ओर (सीकम से हेपेटिक फ्लेक्सर तक)",
      "बीच में",
      "नीचे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Afferent (sensory) neurons carry signals TO CNS; efferent (motor) carry signals FROM CNS.",
    "explanationHi": "आरोही बृहदान्त्र दाईं ओर ऊपर जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-630",
    "questionEn": "The primary motor cortex is in the:",
    "questionHi": "हेपेटिक फ्लेक्सर (Hepatic Flexure) कहां है?",
    "optionsEn": [
      "Parietal lobe",
      "Frontal lobe",
      "Temporal lobe",
      "Occipital lobe"
    ],
    "optionsHi": [
      "बाईं ओर",
      "यकृत के नीचे दाईं ओर",
      "बीच में",
      "नीचे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Primary motor cortex is in precentral gyrus of frontal lobe.",
    "explanationHi": "हेपेटिक फ्लेक्सर आरोही और अनुप्रस्थ बृहदान्त्र के बीच का मोड़ है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-631",
    "questionEn": "CSF volume in adults is approximately:",
    "questionHi": "अनुप्रस्थ बृहदान्त्र (Transverse Colon) कहां जाता है?",
    "optionsEn": [
      "50 mL",
      "150 mL",
      "500 mL",
      "1000 mL"
    ],
    "optionsHi": [
      "नीचे की ओर",
      "दाएं से बाएं (हेपेटिक से स्प्लेनिक फ्लेक्सर)",
      "ऊपर की ओर",
      "पीछे की ओर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Total CSF volume is about 150 mL, renewed 3-4 times daily.",
    "explanationHi": "अनुप्रस्थ बृहदान्त्र पेट के ऊपरी भाग में दाएं से बाएं जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-632",
    "questionEn": "The cauda equina is located below:",
    "questionHi": "स्प्लेनिक फ्लेक्सर (Splenic Flexure) कहां है?",
    "optionsEn": [
      "C7",
      "T12",
      "L1-L2",
      "S1"
    ],
    "optionsHi": [
      "दाईं ओर",
      "प्लीहा के पास बाईं ओर",
      "बीच में",
      "नीचे"
    ],
    "correctAnswer": 2,
    "explanationEn": "Spinal cord ends at L1-L2; cauda equina (nerve roots) continues below.",
    "explanationHi": "स्प्लेनिक फ्लेक्सर अनुप्रस्थ और अवरोही बृहदान्त्र के बीच का मोड़ है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-633",
    "questionEn": "The trigeminal nerve (CN V) controls:",
    "questionHi": "अवरोही बृहदान्त्र (Descending Colon) कहां है?",
    "optionsEn": [
      "Vision",
      "Hearing",
      "Facial sensation",
      "Smell"
    ],
    "optionsHi": [
      "दाईं ओर",
      "बाईं ओर (स्प्लेनिक फ्लेक्सर से सिग्मॉयड तक)",
      "बीच में",
      "ऊपर"
    ],
    "correctAnswer": 2,
    "explanationEn": "CN V provides facial sensation and controls muscles of mastication.",
    "explanationHi": "अवरोही बृहदान्त्र बाईं ओर नीचे जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-634",
    "questionEn": "The parasympathetic system uses which neurotransmitter?",
    "questionHi": "सिग्मॉयड बृहदान्त्र (Sigmoid Colon) का आकार कैसा है?",
    "optionsEn": [
      "Norepinephrine",
      "Acetylcholine",
      "Dopamine",
      "Serotonin"
    ],
    "optionsHi": [
      "सीधा",
      "S-आकार का",
      "गोलाकार",
      "त्रिकोणीय"
    ],
    "correctAnswer": 1,
    "explanationEn": "Parasympathetic uses acetylcholine; sympathetic uses norepinephrine at effectors.",
    "explanationHi": "सिग्मॉयड बृहदान्त्र S-आकार का है और मलाशय में जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-635",
    "questionEn": "The afferent arteriole carries blood:",
    "questionHi": "मलाशय (Rectum) कितना लंबा है?",
    "optionsEn": [
      "Away from glomerulus",
      "To glomerulus",
      "To bladder",
      "From kidney"
    ],
    "optionsHi": [
      "5 cm",
      "12-15 cm",
      "25 cm",
      "40 cm"
    ],
    "correctAnswer": 1,
    "explanationEn": "Afferent = toward. Blood flows TO glomerulus via afferent arteriole.",
    "explanationHi": "मलाशय लगभग 12-15 cm लंबा है और मल को जमा करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-636",
    "questionEn": "Glucose is normally reabsorbed in the:",
    "questionHi": "गुदा नाल (Anal Canal) कितनी लंबी है?",
    "optionsEn": [
      "Glomerulus",
      "PCT",
      "Loop of Henle",
      "Collecting duct"
    ],
    "optionsHi": [
      "1-2 cm",
      "3-4 cm",
      "8-10 cm",
      "15 cm"
    ],
    "correctAnswer": 1,
    "explanationEn": "PCT reabsorbs virtually all filtered glucose (normally none in urine).",
    "explanationHi": "गुदा नाल लगभग 3-4 cm लंबी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-637",
    "questionEn": "The transitional epithelium allows the bladder to:",
    "questionHi": "डेंटेट लाइन (Dentate Line) का महत्व क्या है?",
    "optionsEn": [
      "Filter urine",
      "Produce urine",
      "Stretch",
      "Absorb water"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "इसके ऊपर और नीचे रक्त आपूर्ति, तंत्रिका और लसीका भिन्न",
      "केवल सजावटी",
      "कैंसर का स्थान"
    ],
    "correctAnswer": 2,
    "explanationEn": "Transitional epithelium stretches as bladder fills.",
    "explanationHi": "डेंटेट लाइन के ऊपर और नीचे भ्रूणीय उत्पत्ति अलग है इसलिए संरचनाएं भिन्न हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-638",
    "questionEn": "Micturition is controlled by nerves from:",
    "questionHi": "इंटरनल एनल स्फिंक्टर (Internal Anal Sphincter) किस प्रकार की पेशी है?",
    "optionsEn": [
      "C3-C5",
      "T10-T12",
      "S2-S4",
      "L1-L3"
    ],
    "optionsHi": [
      "कंकाल",
      "चिकनी (अनैच्छिक)",
      "हृदय",
      "मिश्रित"
    ],
    "correctAnswer": 2,
    "explanationEn": "Micturition reflex involves parasympathetic nerves from S2-S4.",
    "explanationHi": "इंटरनल एनल स्फिंक्टर चिकनी पेशी है जो अनैच्छिक नियंत्रण में है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-639",
    "questionEn": "The acrosome of a sperm contains:",
    "questionHi": "एक्सटरनल एनल स्फिंक्टर (External Anal Sphincter) किस प्रकार की पेशी है?",
    "optionsEn": [
      "DNA",
      "Enzymes",
      "Mitochondria",
      "Flagellum"
    ],
    "optionsHi": [
      "चिकनी",
      "कंकाल (ऐच्छिक)",
      "हृदय",
      "मिश्रित"
    ],
    "correctAnswer": 1,
    "explanationEn": "Acrosome (in head) contains enzymes to penetrate the egg.",
    "explanationHi": "एक्सटरनल एनल स्फिंक्टर कंकाल पेशी है जो ऐच्छिक नियंत्रण में है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-640",
    "questionEn": "The bulbourethral glands produce:",
    "questionHi": "हेमोराइड्स (Hemorrhoids) क्या हैं?",
    "optionsEn": [
      "Sperm",
      "Testosterone",
      "Pre-ejaculate",
      "Fructose"
    ],
    "optionsHi": [
      "ट्यूमर",
      "गुदा नाल में फूली हुई रक्त वाहिकाएं",
      "संक्रमण",
      "अल्सर"
    ],
    "correctAnswer": 2,
    "explanationEn": "Bulbourethral (Cowper's) glands produce pre-ejaculate for lubrication.",
    "explanationHi": "हेमोराइड्स गुदा नाल में शिरापरक जाल की सूजन है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-641",
    "questionEn": "The graafian follicle is:",
    "questionHi": "यकृत (Liver) किस उदर चतुर्थांश में है?",
    "optionsEn": [
      "An immature follicle",
      "A mature follicle",
      "The corpus luteum",
      "A hormone"
    ],
    "optionsHi": [
      "बाएं ऊपरी",
      "दाएं ऊपरी (अधिकांश)",
      "दाएं निचले",
      "बाएं निचले"
    ],
    "correctAnswer": 1,
    "explanationEn": "Graafian follicle is mature and ready to ovulate.",
    "explanationHi": "यकृत मुख्यतः दाएं हाइपोकॉन्ड्रियम में है लेकिन बाईं ओर भी फैला है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-642",
    "questionEn": "Estrogen is produced mainly by:",
    "questionHi": "यकृत के कितने शारीरिक लोब हैं?",
    "optionsEn": [
      "Corpus luteum",
      "Developing follicle",
      "Pituitary",
      "Hypothalamus"
    ],
    "optionsHi": [
      "2",
      "4",
      "6",
      "8"
    ],
    "correctAnswer": 1,
    "explanationEn": "Developing follicle produces estrogen; corpus luteum produces mainly progesterone.",
    "explanationHi": "शारीरिक रूप से यकृत के 4 लोब हैं: दायां, बायां, कॉडेट, क्वाड्रेट।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-643",
    "questionEn": "The fundus of the uterus is the:",
    "questionHi": "यकृत के कितने कार्यात्मक खंड (सेगमेंट) हैं?",
    "optionsEn": [
      "Lower narrow part",
      "Upper dome-shaped part",
      "Middle section",
      "Opening to vagina"
    ],
    "optionsHi": [
      "4",
      "6",
      "8",
      "10"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fundus is the dome-shaped top; cervix is the lower narrow part.",
    "explanationHi": "कार्यात्मक रूप से यकृत के 8 सेगमेंट हैं (Couinaud वर्गीकरण)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-644",
    "questionEn": "New skin cells are produced in the:",
    "questionHi": "पोर्टा हेपेटिस (Porta Hepatis) क्या है?",
    "optionsEn": [
      "Stratum corneum",
      "Stratum basale",
      "Dermis",
      "Hypodermis"
    ],
    "optionsHi": [
      "यकृत का लोब",
      "यकृत का हिलम जहां संरचनाएं प्रवेश/निकलती हैं",
      "पित्ताशय",
      "पित्त नलिका"
    ],
    "correctAnswer": 1,
    "explanationEn": "Stratum basale contains stem cells that divide to produce new keratinocytes.",
    "explanationHi": "पोर्टा हेपेटिस यकृत का हिलम है जहां पोर्टल शिरा, हेपेटिक धमनी और पित्त नलिका होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-645",
    "questionEn": "The papillary dermis contains:",
    "questionHi": "यकृत को दोहरी रक्त आपूर्ति कहां से मिलती है?",
    "optionsEn": [
      "Fat cells",
      "Dermal papillae",
      "Hair follicles",
      "Sweat glands"
    ],
    "optionsHi": [
      "दो हेपेटिक धमनियों से",
      "हेपेटिक धमनी (25%) और पोर्टल शिरा (75%)",
      "दो पोर्टल शिराओं से",
      "महाधमनी और IVC से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Papillary dermis (upper) has dermal papillae; reticular dermis (lower) has hair follicles and glands.",
    "explanationHi": "यकृत को हेपेटिक धमनी से ऑक्सीजनयुक्त और पोर्टल शिरा से पोषक तत्वयुक्त रक्त मिलता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-646",
    "questionEn": "Subcutaneous injections are given into the:",
    "questionHi": "हेपेटिक साइनसॉयड्स (Hepatic Sinusoids) क्या हैं?",
    "optionsEn": [
      "Epidermis",
      "Dermis",
      "Hypodermis",
      "Muscle"
    ],
    "optionsHi": [
      "धमनियां",
      "यकृत में विशेष केशिकाएं",
      "शिराएं",
      "पित्त नलिकाएं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Subcutaneous (SC) injections go into the hypodermis (fat layer).",
    "explanationHi": "हेपेटिक साइनसॉयड्स यकृत में विशेष छिद्रित केशिकाएं हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-647",
    "questionEn": "The pupil is an opening in the:",
    "questionHi": "पित्ताशय (Gallbladder) कहां है?",
    "optionsEn": [
      "Cornea",
      "Lens",
      "Iris",
      "Retina"
    ],
    "optionsHi": [
      "बाईं ओर",
      "यकृत की निचली सतह पर दाईं ओर",
      "पेट के बीच में",
      "श्रोणि में"
    ],
    "correctAnswer": 2,
    "explanationEn": "The pupil is the central opening in the iris that allows light entry.",
    "explanationHi": "पित्ताशय यकृत के दाएं लोब की निचली सतह पर नाशपाती के आकार की थैली है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-648",
    "questionEn": "The stapes transmits vibrations to the:",
    "questionHi": "पित्ताशय की क्षमता कितनी है?",
    "optionsEn": [
      "Tympanic membrane",
      "Oval window",
      "Round window",
      "Cochlea directly"
    ],
    "optionsHi": [
      "10 ml",
      "30-50 ml",
      "100 ml",
      "200 ml"
    ],
    "correctAnswer": 1,
    "explanationEn": "Stapes footplate pushes on oval window, transmitting sound to inner ear.",
    "explanationHi": "पित्ताशय 30-50 ml पित्त संग्रहित और सांद्र कर सकता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-649",
    "questionEn": "The peritoneum lines the:",
    "questionHi": "सिस्टिक डक्ट (Cystic Duct) क्या जोड़ती है?",
    "optionsEn": [
      "Thoracic cavity",
      "Abdominal cavity",
      "Pelvic cavity only",
      "Cranial cavity"
    ],
    "optionsHi": [
      "यकृत और आमाशय",
      "पित्ताशय और सामान्य हेपेटिक डक्ट",
      "अग्न्याशय और ग्रहणी",
      "आमाशय और ग्रहणी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Peritoneum is the serous membrane lining the abdominopelvic cavity.",
    "explanationHi": "सिस्टिक डक्ट पित्ताशय को सामान्य हेपेटिक डक्ट से जोड़कर सामान्य पित्त नलिका बनाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-650",
    "questionEn": "Homeostasis is primarily controlled by the:",
    "questionHi": "कोलीसिस्टाइटिस (Cholecystitis) क्या है?",
    "optionsEn": [
      "Cerebrum",
      "Cerebellum",
      "Hypothalamus",
      "Medulla"
    ],
    "optionsHi": [
      "पित्त पथरी",
      "पित्ताशय की सूजन",
      "पित्त नलिका का कैंसर",
      "यकृत की सूजन"
    ],
    "correctAnswer": 2,
    "explanationEn": "Hypothalamus is the main control center for homeostasis.",
    "explanationHi": "कोलीसिस्टाइटिस पित्ताशय की सूजन है, अक्सर पथरी के कारण।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-651",
    "questionEn": "The olecranon is part of the:",
    "questionHi": "कैलोट का त्रिकोण (Calot's Triangle) में क्या होता है?",
    "optionsEn": [
      "Radius",
      "Ulna",
      "Humerus",
      "Scapula"
    ],
    "optionsHi": [
      "पित्ताशय",
      "सिस्टिक धमनी (कोलीसिस्टेक्टॉमी में महत्वपूर्ण)",
      "पोर्टल शिरा",
      "हेपेटिक धमनी"
    ],
    "correctAnswer": 1,
    "explanationEn": "The olecranon is the bony point of the elbow, part of the ulna.",
    "explanationHi": "कैलोट का त्रिकोण (हेपेटोसिस्टिक त्रिकोण) में सिस्टिक धमनी होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-652",
    "questionEn": "The sacrum consists of how many fused vertebrae?",
    "questionHi": "अग्न्याशय (Pancreas) कहां है?",
    "optionsEn": [
      "3",
      "4",
      "5",
      "6"
    ],
    "optionsHi": [
      "वक्ष में",
      "रेट्रोपेरिटोनियल, आमाशय के पीछे",
      "श्रोणि में",
      "गर्दन में"
    ],
    "correctAnswer": 2,
    "explanationEn": "The sacrum is formed by 5 fused sacral vertebrae.",
    "explanationHi": "अग्न्याशय रेट्रोपेरिटोनियल अंग है जो आमाशय के पीछे C-आकार में ग्रहणी से घिरा है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-653",
    "questionEn": "The insertion of a muscle is the:",
    "questionHi": "अग्न्याशय के भाग कौन से हैं?",
    "optionsEn": [
      "Fixed attachment",
      "Movable attachment",
      "Middle portion",
      "Origin point"
    ],
    "optionsHi": [
      "केवल शरीर",
      "शीर्ष, गर्दन, शरीर, पूंछ",
      "केवल शीर्ष और पूंछ",
      "ऊपर और नीचे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Origin is fixed; insertion is movable and moves toward origin during contraction.",
    "explanationHi": "अग्न्याशय के 4 भाग हैं: शीर्ष (ग्रहणी में), गर्दन, शरीर, पूंछ (प्लीहा की ओर)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-654",
    "questionEn": "Arterioles regulate:",
    "questionHi": "मुख्य अग्न्याशय नलिका (Main Pancreatic Duct/Wirsung's Duct) कहां खुलती है?",
    "optionsEn": [
      "Heart rate",
      "Blood distribution",
      "Blood cell production",
      "Clotting"
    ],
    "optionsHi": [
      "आमाशय में",
      "ग्रहणी में एम्पुला ऑफ वेटर पर",
      "शेषांत्र में",
      "बृहदान्त्र में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Arterioles control blood flow to capillary beds through vasoconstriction/dilation.",
    "explanationHi": "मुख्य अग्न्याशय नलिका सामान्य पित्त नलिका के साथ ग्रहणी में खुलती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-655",
    "questionEn": "The AV node is located in the:",
    "questionHi": "अग्न्याशय का अंतःस्रावी भाग क्या बनाता है?",
    "optionsEn": [
      "Right atrium",
      "Interatrial septum",
      "Left ventricle",
      "Aorta"
    ],
    "optionsHi": [
      "पाचक एंजाइम",
      "इंसुलिन, ग्लूकागन",
      "पित्त",
      "HCl"
    ],
    "correctAnswer": 1,
    "explanationEn": "AV node is in the interatrial septum, near the tricuspid valve.",
    "explanationHi": "आइलेट्स ऑफ लैंगरहैंस इंसुलिन (बीटा कोशिकाएं) और ग्लूकागन (अल्फा कोशिकाएं) बनाते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-656",
    "questionEn": "Bronchioles differ from bronchi in that they:",
    "questionHi": "अग्न्याशय का बहिःस्रावी भाग क्या बनाता है?",
    "optionsEn": [
      "Are larger",
      "Have cartilage",
      "Lack cartilage",
      "Are in the trachea"
    ],
    "optionsHi": [
      "हार्मोन",
      "पाचक एंजाइम",
      "पित्त",
      "HCl"
    ],
    "correctAnswer": 2,
    "explanationEn": "Bronchioles have no cartilage; they're held open by surrounding lung tissue.",
    "explanationHi": "बहिःस्रावी भाग पाचक एंजाइम (एमाइलेज, लाइपेज, प्रोटीएज) बनाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-657",
    "questionEn": "The main pancreatic duct is also called:",
    "questionHi": "प्लीहा (Spleen) का आकार कैसा है?",
    "optionsEn": [
      "Duct of Santorini",
      "Duct of Wirsung",
      "Cystic duct",
      "Hepatic duct"
    ],
    "optionsHi": [
      "गोलाकार",
      "मुट्ठी के आकार का, बाएं हाइपोकॉन्ड्रियम में",
      "चपटा",
      "लंबा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Main pancreatic duct (Wirsung) joins common bile duct; accessory is Santorini.",
    "explanationHi": "प्लीहा मुट्ठी के आकार का अंग है जो 9-11 पसलियों के पीछे बाईं ओर है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-658",
    "questionEn": "The Babinski reflex is normal in:",
    "questionHi": "प्लीहा को कौन सी धमनी रक्त देती है?",
    "optionsEn": [
      "Adults",
      "Infants",
      "Elderly",
      "No one"
    ],
    "optionsHi": [
      "हेपेटिक",
      "स्प्लेनिक धमनी (सीलिएक ट्रंक से)",
      "SMA",
      "रीनल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Babinski (toe fanning) is normal in infants; in adults it indicates upper motor neuron lesion.",
    "explanationHi": "स्प्लेनिक धमनी सीलिएक ट्रंक की सबसे बड़ी शाखा है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-659",
    "questionEn": "The vasa recta are associated with:",
    "questionHi": "प्लीहा फटने का सबसे आम कारण क्या है?",
    "optionsEn": [
      "Glomerulus",
      "Loop of Henle",
      "Bladder",
      "Ureter"
    ],
    "optionsHi": [
      "संक्रमण",
      "पेट का आघात (Blunt Abdominal Trauma)",
      "कैंसर",
      "जन्मजात"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vasa recta are capillaries running parallel to loops of Henle in juxtamedullary nephrons.",
    "explanationHi": "प्लीहा नाजुक अंग है और पेट के आघात में फट सकती है जिससे रक्तस्राव होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-660",
    "questionEn": "The isthmus of the fallopian tube is the:",
    "questionHi": "ओमेंटम (Omentum) क्या है?",
    "optionsEn": [
      "Widest part",
      "Narrowest part near uterus",
      "Part with fimbriae",
      "Opening to ovary"
    ],
    "optionsHi": [
      "आंत का भाग",
      "पेरिटोनियम की तह जो अंगों को ढकती/जोड़ती है",
      "यकृत का भाग",
      "अग्न्याशय का भाग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Isthmus is narrow near uterus; ampulla is widest; infundibulum has fimbriae.",
    "explanationHi": "ओमेंटम पेरिटोनियम की दोहरी परत है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-661",
    "questionEn": "Carotene contributes to skin:",
    "questionHi": "ग्रेटर ओमेंटम (Greater Omentum) कहां लटकता है?",
    "optionsEn": [
      "Protection",
      "Yellow color",
      "Elasticity",
      "Sensation"
    ],
    "optionsHi": [
      "यकृत से",
      "आमाशय से नीचे एप्रन की तरह",
      "प्लीहा से",
      "वृक्क से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Carotene in stratum corneum and hypodermis gives yellowish tint to skin.",
    "explanationHi": "ग्रेटर ओमेंटम आमाशय से लटककर आंतों को ढकता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-662",
    "questionEn": "The xiphoid process is part of the:",
    "questionHi": "लेसर ओमेंटम (Lesser Omentum) क्या जोड़ता है?",
    "optionsEn": [
      "Scapula",
      "Sternum",
      "Vertebra",
      "Clavicle"
    ],
    "optionsHi": [
      "आमाशय और आंत",
      "यकृत और आमाशय/ग्रहणी",
      "प्लीहा और वृक्क",
      "अग्न्याशय और यकृत"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sternum has 3 parts: manubrium (top), body (middle), xiphoid process (bottom).",
    "explanationHi": "लेसर ओमेंटम यकृत को आमाशय और ग्रहणी से जोड़ता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-663",
    "questionEn": "The masseter muscle is used for:",
    "questionHi": "मेसेंटरी (Mesentery) क्या है?",
    "optionsEn": [
      "Swallowing",
      "Chewing",
      "Speaking",
      "Breathing"
    ],
    "optionsHi": [
      "आंत का भाग",
      "आंतों को पेट की पिछली दीवार से जोड़ने वाली पेरिटोनियम की तह",
      "यकृत का भाग",
      "अग्न्याशय का भाग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Masseter and temporalis are powerful jaw-closing muscles for mastication.",
    "explanationHi": "मेसेंटरी आंतों को रक्त वाहिकाएं और तंत्रिकाएं ले जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-664",
    "questionEn": "Purkinje fibers are found in the:",
    "questionHi": "रेट्रोपेरिटोनियल अंग कौन से हैं?",
    "optionsEn": [
      "Atria",
      "Ventricles",
      "AV node",
      "SA node"
    ],
    "optionsHi": [
      "आमाशय, यकृत",
      "वृक्क, अधिवृक्क, अग्न्याशय, ग्रहणी का भाग, बृहदान्त्र का भाग",
      "केवल आंतें",
      "केवल प्लीहा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Purkinje fibers distribute electrical impulses throughout ventricular walls.",
    "explanationHi": "SAD PUCKER: Suprarenal, Aorta/IVC, Duodenum (2,3,4), Pancreas, Ureters, Colon (Asc/Desc), Kidneys, Esophagus, Rectum",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-665",
    "questionEn": "Dead space volume is approximately:",
    "questionHi": "वृक्क (Kidney) किस स्तर पर है?",
    "optionsEn": [
      "50 mL",
      "150 mL",
      "500 mL",
      "1000 mL"
    ],
    "optionsHi": [
      "T8-T10",
      "T12-L3",
      "L4-L5",
      "S1-S3"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anatomical dead space (~150 mL) is air in conducting airways that doesn't participate in gas exchange.",
    "explanationHi": "वृक्क T12-L3 स्तर पर हैं, दायां यकृत के कारण थोड़ा नीचे।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-666",
    "questionEn": "The crypts of Lieberkuhn are found in the:",
    "questionHi": "वृक्क का हिलम (Hilum) कहां है?",
    "optionsEn": [
      "Stomach",
      "Intestines",
      "Liver",
      "Pancreas"
    ],
    "optionsHi": [
      "ऊपर",
      "मध्य में अंदर की ओर",
      "नीचे",
      "बाहर की ओर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Intestinal crypts (of Lieberkuhn) are glands at the base of villi producing secretions.",
    "explanationHi": "वृक्क का हिलम मध्य में अंदर की ओर है जहां से धमनी, शिरा और मूत्रवाहिनी जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-667",
    "questionEn": "The pineal gland produces:",
    "questionHi": "वृक्क के भागों में क्या शामिल है?",
    "optionsEn": [
      "Growth hormone",
      "Melatonin",
      "Cortisol",
      "Insulin"
    ],
    "optionsHi": [
      "केवल कॉर्टेक्स",
      "कॉर्टेक्स, मेडुला (पिरामिड), पेल्विस",
      "केवल मेडुला",
      "केवल पेल्विस"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pineal gland (in epithalamus) produces melatonin for sleep-wake cycle.",
    "explanationHi": "वृक्क में बाहरी कॉर्टेक्स, मेडुलरी पिरामिड और केंद्रीय पेल्विस होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-668",
    "questionEn": "The countercurrent mechanism occurs in the:",
    "questionHi": "रीनल पिरामिड (Renal Pyramids) कहां हैं?",
    "optionsEn": [
      "Glomerulus",
      "PCT",
      "Loop of Henle",
      "Bladder"
    ],
    "optionsHi": [
      "कॉर्टेक्स में",
      "मेडुला में",
      "पेल्विस में",
      "हिलम में"
    ],
    "correctAnswer": 2,
    "explanationEn": "Countercurrent multiplication in loop of Henle creates medullary concentration gradient.",
    "explanationHi": "रीनल पिरामिड मेडुला में त्रिकोणीय संरचनाएं हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-669",
    "questionEn": "Inhibin is produced by:",
    "questionHi": "नेफ्रॉन (Nephron) क्या है?",
    "optionsEn": [
      "Hypothalamus",
      "Pituitary",
      "Gonads",
      "Adrenal glands"
    ],
    "optionsHi": [
      "वृक्क का लोब",
      "वृक्क की कार्यात्मक इकाई",
      "मूत्रवाहिनी का भाग",
      "मूत्राशय का भाग"
    ],
    "correctAnswer": 2,
    "explanationEn": "Inhibin from gonads provides negative feedback to inhibit FSH release.",
    "explanationHi": "नेफ्रॉन वृक्क की सूक्ष्म कार्यात्मक इकाई है जो मूत्र बनाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-670",
    "questionEn": "The conjunctiva covers the:",
    "questionHi": "प्रत्येक वृक्क में लगभग कितने नेफ्रॉन होते हैं?",
    "optionsEn": [
      "Lens",
      "Retina",
      "Front of eye and inner eyelids",
      "Back of eye"
    ],
    "optionsHi": [
      "10,000",
      "100,000",
      "1 मिलियन",
      "10 मिलियन"
    ],
    "correctAnswer": 2,
    "explanationEn": "Conjunctiva is mucous membrane covering sclera and lining eyelids.",
    "explanationHi": "प्रत्येक वृक्क में लगभग 1 मिलियन (10 लाख) नेफ्रॉन होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-671",
    "questionEn": "The thoracic cavity contains the:",
    "questionHi": "ग्लोमेरुलस (Glomerulus) क्या है?",
    "optionsEn": [
      "Stomach",
      "Kidneys",
      "Heart and lungs",
      "Liver"
    ],
    "optionsHi": [
      "नलिका",
      "केशिकाओं का गुच्छा जहां निस्पंदन होता है",
      "मूत्रवाहिनी",
      "मूत्राशय"
    ],
    "correctAnswer": 2,
    "explanationEn": "Thoracic cavity contains heart (in pericardium) and lungs (in pleural cavities).",
    "explanationHi": "ग्लोमेरुलस बोमन कैप्सूल में केशिकाओं का गुच्छा है जहां रक्त छनता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-672",
    "questionEn": "The calcaneus is the:",
    "questionHi": "जक्सटाग्लोमेरुलर एपरेटस (JGA) क्या करता है?",
    "optionsEn": [
      "Kneecap",
      "Heel bone",
      "Ankle bone",
      "Toe bone"
    ],
    "optionsHi": [
      "मूत्र बनाता है",
      "रेनिन स्रावित करके रक्तचाप नियंत्रित करता है",
      "ग्लूकोज अवशोषित करता है",
      "पोटेशियम स्रावित करता है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Calcaneus is the largest tarsal bone, forming the heel.",
    "explanationHi": "JGA रेनिन स्रावित करता है जो RAAS प्रणाली का भाग है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-673",
    "questionEn": "Antagonistic muscles:",
    "questionHi": "मूत्रवाहिनी (Ureter) कितनी लंबी है?",
    "optionsEn": [
      "Work together",
      "Oppose each other",
      "Are identical",
      "Don't exist"
    ],
    "optionsHi": [
      "10 cm",
      "25-30 cm",
      "50 cm",
      "75 cm"
    ],
    "correctAnswer": 1,
    "explanationEn": "Antagonists produce opposite movements (e.g., biceps flexes, triceps extends elbow).",
    "explanationHi": "मूत्रवाहिनी लगभग 25-30 cm लंबी मांसपेशी नलिका है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-674",
    "questionEn": "Venules collect blood from:",
    "questionHi": "मूत्रवाहिनी में पथरी कहां फंसने की संभावना अधिक है?",
    "optionsEn": [
      "Arteries",
      "Arterioles",
      "Capillaries",
      "Veins"
    ],
    "optionsHi": [
      "कहीं भी समान",
      "तीन संकुचन स्थलों पर (UPJ, पेल्विक ब्रिम, UVJ)",
      "केवल मध्य में",
      "केवल ऊपर"
    ],
    "correctAnswer": 2,
    "explanationEn": "Blood flows: arteries → arterioles → capillaries → venules → veins.",
    "explanationHi": "मूत्रवाहिनी में तीन शारीरिक संकुचन हैं जहां पथरी फंस सकती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-675",
    "questionEn": "The phrenic nerve originates from:",
    "questionHi": "मूत्राशय (Urinary Bladder) की क्षमता कितनी है?",
    "optionsEn": [
      "C1-C2",
      "C3-C5",
      "T1-T3",
      "L1-L3"
    ],
    "optionsHi": [
      "100 ml",
      "300-500 ml",
      "1 लीटर",
      "2 लीटर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Phrenic nerve (C3-C5) innervates diaphragm. 'C3, 4, 5 keeps the diaphragm alive.'",
    "explanationHi": "मूत्राशय की सामान्य क्षमता 300-500 ml है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-676",
    "questionEn": "Chief cells secrete:",
    "questionHi": "ट्राइगोन (Trigone) मूत्राशय में क्या है?",
    "optionsEn": [
      "HCl",
      "Pepsinogen",
      "Gastrin",
      "Mucus"
    ],
    "optionsHi": [
      "मांसपेशी",
      "मूत्राशय के पीछे का त्रिकोणीय क्षेत्र",
      "वाल्व",
      "नलिका"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chief cells secrete pepsinogen; parietal cells secrete HCl and intrinsic factor.",
    "explanationHi": "ट्राइगोन दोनों मूत्रवाहिनी छिद्रों और मूत्रमार्ग छिद्र के बीच का त्रिकोणीय क्षेत्र है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-677",
    "questionEn": "The dura mater is the:",
    "questionHi": "पुरुष मूत्रमार्ग (Male Urethra) कितना लंबा है?",
    "optionsEn": [
      "Innermost meninx",
      "Middle meninx",
      "Outermost meninx",
      "Part of brain"
    ],
    "optionsHi": [
      "4 cm",
      "8 cm",
      "18-20 cm",
      "30 cm"
    ],
    "correctAnswer": 2,
    "explanationEn": "Meninges from outside in: dura mater, arachnoid mater, pia mater.",
    "explanationHi": "पुरुष मूत्रमार्ग 18-20 cm लंबा है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-678",
    "questionEn": "ANP causes:",
    "questionHi": "महिला मूत्रमार्ग (Female Urethra) कितना लंबा है?",
    "optionsEn": [
      "Sodium retention",
      "Sodium excretion",
      "Water retention",
      "Vasoconstriction"
    ],
    "optionsHi": [
      "3-4 cm",
      "10 cm",
      "18 cm",
      "25 cm"
    ],
    "correctAnswer": 1,
    "explanationEn": "ANP (atrial natriuretic peptide) promotes Na+ and water excretion, opposing RAAS.",
    "explanationHi": "महिला मूत्रमार्ग 3-4 cm लंबा है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-679",
    "questionEn": "The zona pellucida surrounds the:",
    "questionHi": "महिलाओं में UTI अधिक क्यों होता है?",
    "optionsEn": [
      "Sperm",
      "Oocyte",
      "Blastocyst",
      "Embryo"
    ],
    "optionsHi": [
      "कमजोर प्रतिरक्षा",
      "छोटा मूत्रमार्ग और गुदा के पास",
      "अधिक पानी पीना",
      "कम पानी पीना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Zona pellucida is a glycoprotein layer surrounding the oocyte.",
    "explanationHi": "महिलाओं में छोटा मूत्रमार्ग और गुदा से निकटता के कारण बैक्टीरिया आसानी से मूत्राशय पहुंच सकते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-680",
    "questionEn": "The utricle and saccule detect:",
    "questionHi": "पुरुष मूत्रमार्ग के भाग कौन से हैं?",
    "optionsEn": [
      "Sound",
      "Rotation",
      "Linear acceleration and head position",
      "Light"
    ],
    "optionsHi": [
      "केवल एक",
      "प्रोस्टेटिक, मेम्ब्रेनस, स्पॉन्जी (पेनाइल)",
      "दो भाग",
      "चार भाग"
    ],
    "correctAnswer": 2,
    "explanationEn": "Utricle and saccule (in vestibule) detect linear movement and static head position.",
    "explanationHi": "पुरुष मूत्रमार्ग के 3 भाग हैं: प्रोस्टेटिक, मेम्ब्रेनस और स्पॉन्जी।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-681",
    "questionEn": "The mesentery attaches the:",
    "questionHi": "वृषण (Testes) कहां स्थित हैं?",
    "optionsEn": [
      "Liver to diaphragm",
      "Small intestine to posterior wall",
      "Stomach to liver",
      "Colon to bladder"
    ],
    "optionsHi": [
      "पेट में",
      "अंडकोश (Scrotum) में",
      "श्रोणि में",
      "जांघ में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mesentery is a fold of peritoneum attaching small intestine to posterior abdominal wall.",
    "explanationHi": "वृषण अंडकोश में शरीर के बाहर होते हैं जहां तापमान कम होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-682",
    "questionEn": "Synovial fluid is found in:",
    "questionHi": "वृषण शरीर के बाहर क्यों होते हैं?",
    "optionsEn": [
      "All joints",
      "Freely movable joints",
      "Skull sutures",
      "Vertebral discs"
    ],
    "optionsHi": [
      "सुरक्षा के लिए",
      "शुक्राणु निर्माण के लिए कम तापमान आवश्यक",
      "हार्मोन के लिए",
      "कोई कारण नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Synovial fluid lubricates synovial (diarthrotic/freely movable) joints.",
    "explanationHi": "शुक्राणु निर्माण के लिए शरीर के तापमान से 2-3°C कम तापमान आवश्यक है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-683",
    "questionEn": "ATP is required for muscle:",
    "questionHi": "अधिवृषण (Epididymis) का कार्य क्या है?",
    "optionsEn": [
      "Contraction only",
      "Relaxation only",
      "Both contraction and relaxation",
      "Neither"
    ],
    "optionsHi": [
      "शुक्राणु बनाना",
      "शुक्राणुओं का भंडारण और परिपक्वन",
      "टेस्टोस्टेरोन बनाना",
      "मूत्र संग्रहण"
    ],
    "correctAnswer": 2,
    "explanationEn": "ATP powers both cross-bridge cycling (contraction) and detachment (relaxation).",
    "explanationHi": "अधिवृषण में शुक्राणु परिपक्व होते हैं और संग्रहित रहते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-684",
    "questionEn": "The renal arteries branch from the:",
    "questionHi": "वास डेफरेंस (Vas Deferens) क्या करती है?",
    "optionsEn": [
      "Thoracic aorta",
      "Abdominal aorta",
      "Iliac arteries",
      "Celiac trunk"
    ],
    "optionsHi": [
      "शुक्राणु बनाती है",
      "शुक्राणुओं को अधिवृषण से मूत्रमार्ग तक ले जाती है",
      "टेस्टोस्टेरोन बनाती है",
      "मूत्र ले जाती है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Renal arteries branch from abdominal aorta at L1-L2 level.",
    "explanationHi": "वास डेफरेंस लगभग 45 cm लंबी नलिका है जो शुक्राणुओं को ले जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-685",
    "questionEn": "Vital capacity equals:",
    "questionHi": "वैसेक्टॉमी (Vasectomy) में क्या काटा जाता है?",
    "optionsEn": [
      "TV + IRV",
      "TV + ERV",
      "TV + IRV + ERV",
      "TLC - RV"
    ],
    "optionsHi": [
      "अधिवृषण",
      "वास डेफरेंस",
      "वृषण",
      "प्रोस्टेट"
    ],
    "correctAnswer": 2,
    "explanationEn": "VC = TV + IRV + ERV (maximum air that can be exhaled after maximum inhalation).",
    "explanationHi": "वैसेक्टॉमी में वास डेफरेंस को काटकर पुरुष नसबंदी की जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-686",
    "questionEn": "The epiploic appendages are found on the:",
    "questionHi": "सेमिनल वेसिकल्स (Seminal Vesicles) क्या बनाते हैं?",
    "optionsEn": [
      "Small intestine",
      "Large intestine",
      "Stomach",
      "Liver"
    ],
    "optionsHi": [
      "शुक्राणु",
      "वीर्य का 60-70% तरल (फ्रुक्टोज युक्त)",
      "टेस्टोस्टेरोन",
      "मूत्र"
    ],
    "correctAnswer": 1,
    "explanationEn": "Epiploic appendages are fat-filled pouches on the colon surface.",
    "explanationHi": "सेमिनल वेसिकल्स फ्रुक्टोज युक्त तरल बनाते हैं जो शुक्राणुओं को ऊर्जा देता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-687",
    "questionEn": "The motor speech area (Broca's) is usually in the:",
    "questionHi": "प्रोस्टेट ग्रंथि (Prostate Gland) क्या बनाती है?",
    "optionsEn": [
      "Right hemisphere",
      "Left hemisphere",
      "Both equally",
      "Cerebellum"
    ],
    "optionsHi": [
      "शुक्राणु",
      "वीर्य का 20-30% तरल (PSA, एंजाइम)",
      "टेस्टोस्टेरोन",
      "मूत्र"
    ],
    "correctAnswer": 1,
    "explanationEn": "Broca's area is in left frontal lobe in ~95% of right-handed people.",
    "explanationHi": "प्रोस्टेट वीर्य में तरल जोड़ती है जिसमें PSA और अन्य एंजाइम होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-688",
    "questionEn": "The renal papilla projects into the:",
    "questionHi": "BPH (Benign Prostatic Hyperplasia) क्या है?",
    "optionsEn": [
      "Cortex",
      "Minor calyx",
      "Ureter",
      "Bladder"
    ],
    "optionsHi": [
      "प्रोस्टेट कैंसर",
      "प्रोस्टेट का सौम्य बढ़ना",
      "प्रोस्टेट संक्रमण",
      "प्रोस्टेट का सिकुड़ना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Renal papilla (tip of pyramid) projects into minor calyx, which collects urine.",
    "explanationHi": "BPH वृद्ध पुरुषों में प्रोस्टेट का गैर-कैंसरयुक्त बढ़ना है जो मूत्र प्रवाह प्रभावित कर सकता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-689",
    "questionEn": "hCG is produced by the:",
    "questionHi": "बल्बोयूरेथ्रल ग्रंथियां (Bulbourethral Glands/Cowper's Glands) क्या करती हैं?",
    "optionsEn": [
      "Ovary",
      "Pituitary",
      "Placenta",
      "Uterus"
    ],
    "optionsHi": [
      "शुक्राणु बनाती हैं",
      "स्खलन से पहले चिकना तरल स्रावित करती हैं",
      "टेस्टोस्टेरोन बनाती हैं",
      "मूत्र बनाती हैं"
    ],
    "correctAnswer": 2,
    "explanationEn": "hCG (human chorionic gonadotropin) is produced by placental tissue; detected in pregnancy tests.",
    "explanationHi": "कॉपर्स ग्रंथियां प्री-इजाकुलेट तरल बनाती हैं जो मूत्रमार्ग को चिकना करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-690",
    "questionEn": "The macula lutea is in the:",
    "questionHi": "लिंग (Penis) का इरेक्टाइल टिशू कौन सा है?",
    "optionsEn": [
      "Ear",
      "Eye",
      "Skin",
      "Tongue"
    ],
    "optionsHi": [
      "केवल एक",
      "दो कॉर्पोरा कैवर्नोसा और एक कॉर्पस स्पॉन्जियोसम",
      "केवल दो",
      "तीन समान"
    ],
    "correctAnswer": 1,
    "explanationEn": "Macula lutea ('yellow spot') is the central retina with highest visual acuity.",
    "explanationHi": "लिंग में दो कॉर्पोरा कैवर्नोसा (ऊपर) और एक कॉर्पस स्पॉन्जियोसम (नीचे, मूत्रमार्ग युक्त) हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-691",
    "questionEn": "Describe the anatomical basis for referred pain from the heart to the left arm.",
    "questionHi": "ग्लान्स पेनिस (Glans Penis) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "लिंग का आधार",
      "लिंग का सिरा",
      "लिंग का मध्य भाग",
      "वृषण"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "ग्लान्स पेनिस लिंग का शंकुआकार सिरा है जो कॉर्पस स्पॉन्जियोसम का विस्तार है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-692",
    "questionEn": "List the four abdominal quadrants and two organs found in each.",
    "questionHi": "फोरस्किन (Foreskin/Prepuce) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "लिंग की पेशी",
      "ग्लान्स को ढकने वाली त्वचा की तह",
      "वृषण का आवरण",
      "अधिवृषण"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "प्रीप्यूस (फोरस्किन) ग्लान्स को ढकने वाली त्वचा की तह है जो खतने में हटाई जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-693",
    "questionEn": "Describe the differences between arteries and veins.",
    "questionHi": "अंडाशय (Ovary) कहां है?",
    "optionsEn": [],
    "optionsHi": [
      "पेट में ऊपर",
      "श्रोणि में गर्भाशय के दोनों ओर",
      "जांघ में",
      "छाती में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "अंडाशय श्रोणि में गर्भाशय के दोनों ओर बादाम के आकार की ग्रंथियां हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-694",
    "questionEn": "Explain why the right lung is more commonly affected by aspiration.",
    "questionHi": "अंडाशय के कार्य क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "केवल अंडाणु",
      "अंडाणु उत्पादन और हार्मोन (एस्ट्रोजन, प्रोजेस्टेरोन) स्राव",
      "केवल हार्मोन",
      "कोई कार्य नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "अंडाशय ओवा (अंडाणु) बनाते हैं और महिला हार्मोन स्रावित करते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-695",
    "questionEn": "Explain the anatomical basis for a lumbar puncture being performed at L3-L4 or L4-L5.",
    "questionHi": "फैलोपियन ट्यूब (Fallopian Tube) कितनी लंबी है?",
    "optionsEn": [],
    "optionsHi": [
      "2-3 cm",
      "10-12 cm",
      "25 cm",
      "40 cm"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "फैलोपियन ट्यूब लगभग 10-12 cm लंबी है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-696",
    "questionEn": "Trace the path of bile from production to the duodenum.",
    "questionHi": "निषेचन (Fertilization) सामान्यतः कहां होता है?",
    "optionsEn": [],
    "optionsHi": [
      "गर्भाशय में",
      "फैलोपियन ट्यूब के एम्पुला में",
      "अंडाशय में",
      "योनि में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "निषेचन फैलोपियन ट्यूब के एम्पुला (सबसे चौड़े भाग) में होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-697",
    "questionEn": "Explain the function of each segment of the nephron.",
    "questionHi": "एक्टोपिक प्रेगनेंसी (Ectopic Pregnancy) सबसे अधिक कहां होती है?",
    "optionsEn": [],
    "optionsHi": [
      "अंडाशय में",
      "फैलोपियन ट्यूब में",
      "पेट में",
      "गर्भाशय ग्रीवा में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "अधिकांश एक्टोपिक प्रेगनेंसी (95%) फैलोपियन ट्यूब में होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-698",
    "questionEn": "A patient has right-sided facial droop, inability to close right eye, and loss of taste on anterior 2/3 of right tongue. Which nerve is affected and at what level?",
    "questionHi": "गर्भाशय (Uterus) का आकार गैर-गर्भवती में कैसा है?",
    "optionsEn": [],
    "optionsHi": [
      "गोलाकार",
      "उल्टी नाशपाती के आकार का",
      "चपटा",
      "लंबा"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "गैर-गर्भवती गर्भाशय उल्टी नाशपाती के आकार का है, लगभग 7.5 cm लंबा।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-699",
    "questionEn": "A patient has proteinuria (protein in urine). Using anatomical knowledge, explain what structure is likely damaged and why protein is normally not filtered.",
    "questionHi": "गर्भाशय के भाग कौन से हैं?",
    "optionsEn": [],
    "optionsHi": [
      "केवल शरीर",
      "फंडस, शरीर, इस्थमस, सर्विक्स",
      "केवल सर्विक्स",
      "दो भाग"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "गर्भाशय के भाग: फंडस (ऊपर), शरीर (मध्य), इस्थमस (संकरा भाग), सर्विक्स (नीचे)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-700",
    "questionEn": "A newborn has cyanosis that worsens when crying but improves with bottle feeding. Using anatomical knowledge, suggest a likely cardiac defect.",
    "questionHi": "एंडोमेट्रियम (Endometrium) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "गर्भाशय की पेशी परत",
      "गर्भाशय की आंतरिक परत जो माहवारी में झड़ती है",
      "गर्भाशय की बाहरी परत",
      "अंडाशय की परत"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "एंडोमेट्रियम गर्भाशय की आंतरिक परत है जो प्रत्येक माहवारी चक्र में बनती और झड़ती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-701",
    "questionEn": "Medial means:",
    "questionHi": "मायोमेट्रियम (Myometrium) क्या है?",
    "optionsEn": [
      "Toward the side",
      "Toward the midline",
      "Toward the head",
      "Toward the feet"
    ],
    "optionsHi": [
      "गर्भाशय की आंतरिक परत",
      "गर्भाशय की पेशी परत",
      "गर्भाशय की बाहरी परत",
      "अंडाशय की परत"
    ],
    "correctAnswer": 1,
    "explanationEn": "Medial = toward midline; lateral = toward side.",
    "explanationHi": "मायोमेट्रियम गर्भाशय की मोटी पेशी परत है जो प्रसव के दौरान संकुचित होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-702",
    "questionEn": "The umbilical region is located:",
    "questionHi": "पेरिमेट्रियम (Perimetrium) क्या है?",
    "optionsEn": [
      "Above the stomach",
      "Around the navel",
      "In the pelvis",
      "At the sides"
    ],
    "optionsHi": [
      "गर्भाशय की आंतरिक परत",
      "गर्भाशय की पेशी परत",
      "गर्भाशय की बाहरी सीरस परत",
      "एंडोमेट्रियम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Umbilical region is the central region around the umbilicus (navel).",
    "explanationHi": "पेरिमेट्रियम गर्भाशय की बाहरी परत है जो पेरिटोनियम का भाग है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-703",
    "questionEn": "A cross-section is also called:",
    "questionHi": "सर्विक्स (Cervix) क्या है?",
    "optionsEn": [
      "Sagittal",
      "Frontal",
      "Transverse",
      "Midsagittal"
    ],
    "optionsHi": [
      "गर्भाशय का ऊपरी भाग",
      "गर्भाशय की गर्दन जो योनि में खुलती है",
      "अंडाशय",
      "फैलोपियन ट्यूब"
    ],
    "correctAnswer": 2,
    "explanationEn": "Transverse (horizontal/cross-section) divides body into superior and inferior parts.",
    "explanationHi": "सर्विक्स गर्भाशय का निचला संकरा भाग है जो योनि में उभरता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-704",
    "questionEn": "The clavicle articulates with the:",
    "questionHi": "सर्वाइकल ओएस (Cervical Os) क्या है?",
    "optionsEn": [
      "Scapula only",
      "Sternum only",
      "Both scapula and sternum",
      "Humerus"
    ],
    "optionsHi": [
      "सर्विक्स की पेशी",
      "सर्विक्स का छिद्र",
      "सर्विक्स की परत",
      "सर्विक्स का कैंसर"
    ],
    "correctAnswer": 2,
    "explanationEn": "Clavicle articulates with sternum medially and acromion of scapula laterally.",
    "explanationHi": "सर्वाइकल ओएस सर्विक्स का छिद्र है - इंटरनल ओएस (ऊपर) और एक्सटरनल ओएस (योनि में)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-705",
    "questionEn": "The patella is a type of:",
    "questionHi": "योनि (Vagina) कितनी लंबी है?",
    "optionsEn": [
      "Long bone",
      "Short bone",
      "Flat bone",
      "Sesamoid bone"
    ],
    "optionsHi": [
      "3-4 cm",
      "7-10 cm",
      "15-20 cm",
      "25 cm"
    ],
    "correctAnswer": 3,
    "explanationEn": "Patella is a sesamoid bone formed within the quadriceps tendon.",
    "explanationHi": "योनि लगभग 7-10 cm लंबी पेशी नलिका है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-706",
    "questionEn": "Articular cartilage is:",
    "questionHi": "योनि का pH कैसा है?",
    "optionsEn": [
      "Elastic",
      "Hyaline",
      "Fibrocartilage",
      "Calcified"
    ],
    "optionsHi": [
      "क्षारीय (8-9)",
      "अम्लीय (3.8-4.5)",
      "उदासीन (7)",
      "बहुत क्षारीय (10)"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hyaline cartilage covers articular surfaces; smooth and low friction.",
    "explanationHi": "योनि का अम्लीय pH (लैक्टोबैसिलस द्वारा) संक्रमण से बचाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-707",
    "questionEn": "The intervertebral discs are made of:",
    "questionHi": "हाइमन (Hymen) क्या है?",
    "optionsEn": [
      "Hyaline cartilage",
      "Fibrocartilage",
      "Elastic cartilage",
      "Bone"
    ],
    "optionsHi": [
      "योनि की पेशी",
      "योनि के छिद्र पर पतली झिल्ली",
      "गर्भाशय का भाग",
      "अंडाशय का भाग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Intervertebral discs have fibrocartilage annulus fibrosus and gelatinous nucleus pulposus.",
    "explanationHi": "हाइमन योनि के बाहरी छिद्र पर पतली श्लेष्मा झिल्ली है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-708",
    "questionEn": "The mastoid process is part of the:",
    "questionHi": "वल्वा (Vulva) में क्या शामिल है?",
    "optionsEn": [
      "Frontal bone",
      "Parietal bone",
      "Temporal bone",
      "Occipital bone"
    ],
    "optionsHi": [
      "केवल योनि",
      "बाहरी जननांग (लेबिया, क्लिटोरिस, वेस्टिब्यूल)",
      "केवल गर्भाशय",
      "केवल अंडाशय"
    ],
    "correctAnswer": 2,
    "explanationEn": "Mastoid process is a bony projection of temporal bone behind the ear.",
    "explanationHi": "वल्वा महिला के बाहरी जननांगों का सामूहिक नाम है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-709",
    "questionEn": "The sartorius muscle is the:",
    "questionHi": "लेबिया मेजोरा (Labia Majora) क्या है?",
    "optionsEn": [
      "Strongest muscle",
      "Longest muscle",
      "Smallest muscle",
      "Widest muscle"
    ],
    "optionsHi": [
      "छोटी आंतरिक त्वचा की तह",
      "बड़ी बाहरी त्वचा की तह",
      "क्लिटोरिस",
      "मूत्रमार्ग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sartorius is the longest muscle, crossing hip and knee (tailor's muscle).",
    "explanationHi": "लेबिया मेजोरा वल्वा की बड़ी बाहरी त्वचा की तहें हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-710",
    "questionEn": "The gluteus maximus is used primarily for:",
    "questionHi": "लेबिया माइनोरा (Labia Minora) क्या है?",
    "optionsEn": [
      "Hip flexion",
      "Hip extension",
      "Hip adduction",
      "Hip rotation"
    ],
    "optionsHi": [
      "बड़ी बाहरी तह",
      "छोटी आंतरिक त्वचा की तह",
      "क्लिटोरिस",
      "मूत्रमार्ग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Gluteus maximus is the powerful hip extensor (climbing stairs, rising from sitting).",
    "explanationHi": "लेबिया माइनोरा वल्वा की छोटी आंतरिक त्वचा की तहें हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-711",
    "questionEn": "Muscle fibers are also called:",
    "questionHi": "क्लिटोरिस (Clitoris) क्या है?",
    "optionsEn": [
      "Myocytes",
      "Sarcomeres",
      "Myofibrils",
      "Fascicles"
    ],
    "optionsHi": [
      "मूत्रमार्ग",
      "महिला में इरेक्टाइल संवेदी अंग",
      "योनि का भाग",
      "गर्भाशय का भाग"
    ],
    "correctAnswer": 0,
    "explanationEn": "Muscle cells/fibers are called myocytes; myofibrils are contractile units within.",
    "explanationHi": "क्लिटोरिस लेबिया माइनोरा के आगे छोटा इरेक्टाइल अंग है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-712",
    "questionEn": "The neuromuscular junction uses which transmitter?",
    "questionHi": "बार्थोलिन ग्रंथियां (Bartholin's Glands) क्या करती हैं?",
    "optionsEn": [
      "Norepinephrine",
      "Dopamine",
      "Acetylcholine",
      "Serotonin"
    ],
    "optionsHi": [
      "मूत्र बनाती हैं",
      "योनि के छिद्र के पास चिकना तरल स्रावित करती हैं",
      "अंडाणु बनाती हैं",
      "हार्मोन बनाती हैं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Motor neurons release acetylcholine at neuromuscular junctions.",
    "explanationHi": "बार्थोलिन ग्रंथियां योनि के छिद्र के दोनों ओर चिकनाई प्रदान करती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-713",
    "questionEn": "The inferior vena cava returns blood from:",
    "questionHi": "स्तन (Breast) में कितने लोब होते हैं?",
    "optionsEn": [
      "Head and arms",
      "Lower body",
      "Lungs",
      "Heart muscle"
    ],
    "optionsHi": [
      "5-8",
      "15-20",
      "30-40",
      "50-60"
    ],
    "correctAnswer": 1,
    "explanationEn": "IVC drains lower body; SVC drains head, neck, and upper limbs.",
    "explanationHi": "प्रत्येक स्तन में 15-20 लोब होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-714",
    "questionEn": "The fossa ovalis is a remnant of the:",
    "questionHi": "निप्पल (Nipple) में क्या खुलती हैं?",
    "optionsEn": [
      "Ductus arteriosus",
      "Foramen ovale",
      "Umbilical vein",
      "Ductus venosus"
    ],
    "optionsHi": [
      "रक्त वाहिकाएं",
      "लैक्टिफेरस डक्ट्स (दूध नलिकाएं)",
      "लिम्फ वाहिकाएं",
      "तंत्रिकाएं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fossa ovalis is the depression in interatrial septum where foramen ovale existed in fetal heart.",
    "explanationHi": "निप्पल में 15-20 लैक्टिफेरस डक्ट्स खुलती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-715",
    "questionEn": "The dorsalis pedis pulse is found on the:",
    "questionHi": "एरियोला (Areola) क्या है?",
    "optionsEn": [
      "Wrist",
      "Ankle (medial)",
      "Top of foot",
      "Behind knee"
    ],
    "optionsHi": [
      "निप्पल",
      "निप्पल के चारों ओर का गहरे रंग का क्षेत्र",
      "स्तन का लोब",
      "दूध नलिका"
    ],
    "correctAnswer": 2,
    "explanationEn": "Dorsalis pedis pulse is on dorsum of foot, lateral to extensor hallucis longus tendon.",
    "explanationHi": "एरियोला निप्पल के चारों ओर का वर्णक युक्त क्षेत्र है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-716",
    "questionEn": "Erythrocytes are produced in:",
    "questionHi": "स्तन का अधिकांश लसीका कहां जाता है?",
    "optionsEn": [
      "Liver",
      "Spleen",
      "Red bone marrow",
      "Lymph nodes"
    ],
    "optionsHi": [
      "इंगुइनल नोड्स",
      "एक्सिलरी लिम्फ नोड्स",
      "सर्वाइकल नोड्स",
      "मेसेंटेरिक नोड्स"
    ],
    "correctAnswer": 2,
    "explanationEn": "In adults, RBCs are produced in red bone marrow (hematopoiesis).",
    "explanationHi": "स्तन का 75% लसीका एक्सिलरी लिम्फ नोड्स में जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-717",
    "questionEn": "The portal vein carries blood to the:",
    "questionHi": "कपाल (Skull) में कितनी हड्डियां होती हैं?",
    "optionsEn": [
      "Kidneys",
      "Liver",
      "Spleen",
      "Heart"
    ],
    "optionsHi": [
      "14",
      "22",
      "28",
      "32"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hepatic portal vein carries nutrient-rich blood from GI tract to liver for processing.",
    "explanationHi": "कपाल में 22 हड्डियां होती हैं: 8 क्रेनियल और 14 फेशियल।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-718",
    "questionEn": "The epiglottis prevents:",
    "questionHi": "क्रेनियल हड्डियां कौन सी हैं?",
    "optionsEn": [
      "Air entry",
      "Food aspiration",
      "Infection",
      "Mucus production"
    ],
    "optionsHi": [
      "केवल 4",
      "फ्रंटल, पैरिएटल (2), टेम्पोरल (2), ऑक्सिपिटल, स्फीनॉयड, एथमॉयड",
      "केवल 6",
      "10 हड्डियां"
    ],
    "correctAnswer": 1,
    "explanationEn": "Epiglottis covers laryngeal opening during swallowing to prevent aspiration.",
    "explanationHi": "8 क्रेनियल हड्डियां मस्तिष्क को घेरती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-719",
    "questionEn": "Surfactant prevents:",
    "questionHi": "फॉन्टानेल (Fontanelle) क्या है?",
    "optionsEn": [
      "Infection",
      "Alveolar collapse",
      "Gas exchange",
      "Mucus buildup"
    ],
    "optionsHi": [
      "हड्डी",
      "शिशु की खोपड़ी में हड्डियों के बीच का नरम स्थान",
      "सूत्र",
      "छिद्र"
    ],
    "correctAnswer": 1,
    "explanationEn": "Surfactant reduces surface tension, preventing alveolar collapse (atelectasis).",
    "explanationHi": "फॉन्टानेल शिशु की खोपड़ी में झिल्लीदार स्थान हैं जो बाद में हड्डी बन जाते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-720",
    "questionEn": "The apex of the lung extends to:",
    "questionHi": "एंटीरियर फॉन्टानेल (Anterior Fontanelle) कब बंद होता है?",
    "optionsEn": [
      "Below the clavicle",
      "Above the clavicle",
      "The diaphragm",
      "The sternum"
    ],
    "optionsHi": [
      "जन्म पर",
      "18-24 महीने",
      "5 साल",
      "10 साल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lung apex extends 2-3 cm above clavicle into the root of the neck.",
    "explanationHi": "एंटीरियर (सामने का) फॉन्टानेल 18-24 महीने की उम्र में बंद होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-721",
    "questionEn": "Tidal volume is approximately:",
    "questionHi": "पोस्टीरियर फॉन्टानेल (Posterior Fontanelle) कब बंद होता है?",
    "optionsEn": [
      "150 mL",
      "500 mL",
      "1000 mL",
      "3000 mL"
    ],
    "optionsHi": [
      "जन्म पर",
      "2-3 महीने",
      "18 महीने",
      "5 साल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tidal volume is about 500 mL - normal breath at rest.",
    "explanationHi": "पोस्टीरियर (पीछे का) फॉन्टानेल 2-3 महीने की उम्र में बंद होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-722",
    "questionEn": "The mediastinum contains:",
    "questionHi": "सैजिटल सूत्र (Sagittal Suture) किन हड्डियों के बीच है?",
    "optionsEn": [
      "Lungs",
      "Heart and great vessels",
      "Liver",
      "Diaphragm"
    ],
    "optionsHi": [
      "फ्रंटल और पैरिएटल",
      "दोनों पैरिएटल हड्डियों के बीच",
      "पैरिएटल और ऑक्सिपिटल",
      "टेम्पोरल और पैरिएटल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mediastinum is the central thoracic compartment containing heart, great vessels, trachea, esophagus.",
    "explanationHi": "सैजिटल सूत्र दोनों पैरिएटल हड्डियों के बीच मध्य रेखा में है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-723",
    "questionEn": "The ileocecal valve separates:",
    "questionHi": "कोरोनल सूत्र (Coronal Suture) किन हड्डियों के बीच है?",
    "optionsEn": [
      "Stomach and duodenum",
      "Ileum and cecum",
      "Jejunum and ileum",
      "Colon and rectum"
    ],
    "optionsHi": [
      "दोनों पैरिएटल",
      "फ्रंटल और पैरिएटल हड्डियों के बीच",
      "पैरिएटल और ऑक्सिपिटल",
      "टेम्पोरल और पैरिएटल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ileocecal valve prevents backflow from large intestine to small intestine.",
    "explanationHi": "कोरोनल सूत्र फ्रंटल हड्डी को दोनों पैरिएटल हड्डियों से अलग करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-724",
    "questionEn": "Parietal cells secrete:",
    "questionHi": "लैम्बडॉयड सूत्र (Lambdoid Suture) किन हड्डियों के बीच है?",
    "optionsEn": [
      "Pepsin",
      "HCl and intrinsic factor",
      "Gastrin",
      "Mucus"
    ],
    "optionsHi": [
      "फ्रंटल और पैरिएटल",
      "दोनों पैरिएटल",
      "पैरिएटल और ऑक्सिपिटल हड्डियों के बीच",
      "टेम्पोरल और पैरिएटल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Parietal cells produce HCl (for digestion) and intrinsic factor (for B12 absorption).",
    "explanationHi": "लैम्बडॉयड सूत्र ऑक्सिपिटल हड्डी को दोनों पैरिएटल हड्डियों से अलग करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-725",
    "questionEn": "The vermiform appendix is attached to the:",
    "questionHi": "रीढ़ की हड्डी (Vertebral Column) में कितनी कशेरुकाएं होती हैं?",
    "optionsEn": [
      "Ileum",
      "Cecum",
      "Ascending colon",
      "Rectum"
    ],
    "optionsHi": [
      "26",
      "33 (7 सर्वाइकल, 12 थोरैसिक, 5 लंबर, 5 सैक्रल, 4 कोक्सीजियल)",
      "40",
      "45"
    ],
    "correctAnswer": 1,
    "explanationEn": "The appendix is attached to the posteromedial wall of the cecum.",
    "explanationHi": "33 कशेरुकाएं हैं, लेकिन सैक्रम (5 जुड़ी) और कोक्सीक्स (4 जुड़ी) वयस्क में एकल हड्डियां हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-726",
    "questionEn": "The common bile duct is formed by:",
    "questionHi": "एटलस (Atlas) कौन सी कशेरुका है?",
    "optionsEn": [
      "Right and left hepatic ducts",
      "Cystic and common hepatic ducts",
      "Pancreatic and hepatic ducts",
      "Two cystic ducts"
    ],
    "optionsHi": [
      "C2",
      "C1 (पहली ग्रीवा)",
      "C7",
      "T1"
    ],
    "correctAnswer": 1,
    "explanationEn": "Common bile duct = cystic duct (from gallbladder) + common hepatic duct.",
    "explanationHi": "एटलस पहली ग्रीवा कशेरुका है जो खोपड़ी को सहारा देती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-727",
    "questionEn": "Brunner's glands are found in the:",
    "questionHi": "एक्सिस (Axis) कौन सी कशेरुका है?",
    "optionsEn": [
      "Stomach",
      "Duodenum",
      "Jejunum",
      "Ileum"
    ],
    "optionsHi": [
      "C1",
      "C2 (दूसरी ग्रीवा)",
      "C7",
      "T1"
    ],
    "correctAnswer": 1,
    "explanationEn": "Brunner's glands in duodenal submucosa secrete alkaline mucus to neutralize acid.",
    "explanationHi": "एक्सिस दूसरी ग्रीवा कशेरुका है जिसमें डेंस (ओडोंटॉयड प्रोसेस) होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-728",
    "questionEn": "The haustra are found in the:",
    "questionHi": "डेंस (Dens/Odontoid Process) किस कशेरुका पर है?",
    "optionsEn": [
      "Small intestine",
      "Large intestine",
      "Stomach",
      "Esophagus"
    ],
    "optionsHi": [
      "C1",
      "C2",
      "C7",
      "T1"
    ],
    "correctAnswer": 1,
    "explanationEn": "Haustra are the sacculations/pouches of the colon created by taeniae coli.",
    "explanationHi": "डेंस C2 (एक्सिस) पर ऊपर की ओर उभार है जिसके चारों ओर C1 घूमता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-729",
    "questionEn": "The blood-brain barrier is formed mainly by:",
    "questionHi": "सर्वाइकल कशेरुकाओं की विशेषता क्या है?",
    "optionsEn": [
      "Neurons",
      "Astrocytes",
      "Microglia",
      "Oligodendrocytes"
    ],
    "optionsHi": [
      "बड़े शरीर",
      "ट्रांसवर्स फोरामेन (वर्टेब्रल धमनी के लिए)",
      "कोई विशेषता नहीं",
      "पसली जुड़ाव"
    ],
    "correctAnswer": 1,
    "explanationEn": "Astrocyte end-feet wrap around capillaries forming the blood-brain barrier.",
    "explanationHi": "सभी सर्वाइकल कशेरुकाओं में ट्रांसवर्स फोरामेन होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-730",
    "questionEn": "The substantia nigra is involved in:",
    "questionHi": "थोरैसिक कशेरुकाओं की विशेषता क्या है?",
    "optionsEn": [
      "Vision",
      "Movement control",
      "Hearing",
      "Memory"
    ],
    "optionsHi": [
      "ट्रांसवर्स फोरामेन",
      "पसलियों के लिए फेसेट्स",
      "सबसे बड़े शरीर",
      "कोई विशेषता नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Substantia nigra produces dopamine for movement; degeneration causes Parkinson's.",
    "explanationHi": "थोरैसिक कशेरुकाओं पर पसलियों के जुड़ने के लिए फेसेट्स होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-731",
    "questionEn": "The vagus nerve (CN X) is:",
    "questionHi": "लंबर कशेरुकाओं की विशेषता क्या है?",
    "optionsEn": [
      "Sensory only",
      "Motor only",
      "Mixed",
      "Parasympathetic only"
    ],
    "optionsHi": [
      "सबसे छोटे शरीर",
      "सबसे बड़े शरीर",
      "ट्रांसवर्स फोरामेन",
      "पसली फेसेट्स"
    ],
    "correctAnswer": 2,
    "explanationEn": "Vagus is mixed - sensory, motor, and parasympathetic to thoracic/abdominal organs.",
    "explanationHi": "लंबर कशेरुकाओं के शरीर सबसे बड़े होते हैं क्योंकि ये अधिकतम भार सहन करती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-732",
    "questionEn": "The occipital lobe processes:",
    "questionHi": "इंटरवर्टेब्रल डिस्क (Intervertebral Disc) के भाग क्या हैं?",
    "optionsEn": [
      "Movement",
      "Hearing",
      "Vision",
      "Smell"
    ],
    "optionsHi": [
      "केवल एक",
      "न्यूक्लियस पल्पोसस (केंद्र) और एनुलस फाइब्रोसस (बाहरी)",
      "दो अलग डिस्क",
      "तीन भाग"
    ],
    "correctAnswer": 2,
    "explanationEn": "Occipital lobe contains primary visual cortex and visual association areas.",
    "explanationHi": "डिस्क में जेली जैसा केंद्रीय न्यूक्लियस पल्पोसस और रेशेदार बाहरी एनुलस फाइब्रोसस होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-733",
    "questionEn": "Wernicke's area is responsible for:",
    "questionHi": "हर्नियेटेड डिस्क (Herniated Disc) में क्या होता है?",
    "optionsEn": [
      "Motor speech",
      "Language comprehension",
      "Vision",
      "Memory"
    ],
    "optionsHi": [
      "हड्डी टूटना",
      "न्यूक्लियस पल्पोसस का एनुलस फाइब्रोसस से बाहर निकलना",
      "पेशी टूटना",
      "स्नायु टूटना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Wernicke's area (temporal-parietal) processes language comprehension; Broca's handles production.",
    "explanationHi": "डिस्क हर्निएशन में आंतरिक सामग्री बाहरी रेशेदार परत से बाहर निकलती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-734",
    "questionEn": "The sympathetic chain ganglia are located:",
    "questionHi": "सबसे आम डिस्क हर्निएशन कहां होता है?",
    "optionsEn": [
      "In the brain",
      "Along the spinal cord",
      "In target organs",
      "In spinal nerves"
    ],
    "optionsHi": [
      "सर्वाइकल",
      "L4-L5 और L5-S1",
      "थोरैसिक",
      "सैक्रल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sympathetic chain (paravertebral) ganglia run along both sides of vertebral column.",
    "explanationHi": "अधिकांश डिस्क हर्निएशन L4-L5 और L5-S1 स्तर पर होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-735",
    "questionEn": "The kidneys are located:",
    "questionHi": "सायटिका (Sciatica) का सबसे आम कारण क्या है?",
    "optionsEn": [
      "Intraperitoneally",
      "Retroperitoneally",
      "In the pelvis",
      "In the thorax"
    ],
    "optionsHi": [
      "पेशी खिंचाव",
      "लंबर डिस्क हर्निएशन से सायटिक तंत्रिका दबना",
      "हड्डी टूटना",
      "संक्रमण"
    ],
    "correctAnswer": 1,
    "explanationEn": "Kidneys are retroperitoneal (behind peritoneum) at T12-L3 level.",
    "explanationHi": "सायटिका अक्सर L4-L5 या L5-S1 डिस्क हर्निएशन से तंत्रिका जड़ दबने से होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-736",
    "questionEn": "The juxtaglomerular apparatus secretes:",
    "questionHi": "स्कोलियोसिस (Scoliosis) क्या है?",
    "optionsEn": [
      "ADH",
      "Aldosterone",
      "Renin",
      "ANP"
    ],
    "optionsHi": [
      "आगे झुकाव",
      "रीढ़ का बगल में टेढ़ापन",
      "पीछे झुकाव",
      "रीढ़ का सीधापन"
    ],
    "correctAnswer": 2,
    "explanationEn": "JG cells of JGA secrete renin, initiating the renin-angiotensin-aldosterone system.",
    "explanationHi": "स्कोलियोसिस रीढ़ की हड्डी का असामान्य बगल में मोड़ है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-737",
    "questionEn": "The ureter enters the bladder:",
    "questionHi": "काइफोसिस (Kyphosis) क्या है?",
    "optionsEn": [
      "At the apex",
      "At the trigone",
      "Through the urethra",
      "At the fundus"
    ],
    "optionsHi": [
      "आगे झुकाव",
      "पीठ का अत्यधिक पिछला गोलाई (Hunchback)",
      "बगल में टेढ़ापन",
      "रीढ़ का सीधापन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ureters enter posterolaterally at the trigone; urethra exits inferiorly.",
    "explanationHi": "काइफोसिस थोरैसिक रीढ़ की अत्यधिक पिछली गोलाई है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-738",
    "questionEn": "The male urethra passes through:",
    "questionHi": "लॉर्डोसिस (Lordosis) क्या है?",
    "optionsEn": [
      "Prostate only",
      "Penis only",
      "Both prostate and penis",
      "Neither"
    ],
    "optionsHi": [
      "पिछली गोलाई",
      "कमर की अत्यधिक आगे की गोलाई (Swayback)",
      "बगल में टेढ़ापन",
      "रीढ़ का सीधापन"
    ],
    "correctAnswer": 2,
    "explanationEn": "Male urethra: prostatic (through prostate) → membranous → spongy (through penis).",
    "explanationHi": "लॉर्डोसिस लंबर या सर्वाइकल रीढ़ की अत्यधिक आगे की गोलाई है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-739",
    "questionEn": "Podocytes are found in:",
    "questionHi": "पसलियां (Ribs) कितनी होती हैं?",
    "optionsEn": [
      "Proximal tubule",
      "Bowman's capsule",
      "Loop of Henle",
      "Collecting duct"
    ],
    "optionsHi": [
      "10 जोड़े",
      "12 जोड़े (24 पसलियां)",
      "14 जोड़े",
      "15 जोड़े"
    ],
    "correctAnswer": 1,
    "explanationEn": "Podocytes form the visceral layer of Bowman's capsule, wrapping around glomerular capillaries.",
    "explanationHi": "मनुष्य में 12 जोड़े पसलियां होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-740",
    "questionEn": "The epididymis is the site of:",
    "questionHi": "ट्रू रिब्स (True Ribs) कौन सी हैं?",
    "optionsEn": [
      "Sperm production",
      "Sperm maturation",
      "Hormone production",
      "Urine storage"
    ],
    "optionsHi": [
      "सभी 12",
      "पहली 7 जोड़े",
      "8-10",
      "11-12"
    ],
    "correctAnswer": 1,
    "explanationEn": "Epididymis stores and matures sperm (2-3 weeks); testis produces sperm.",
    "explanationHi": "ट्रू रिब्स (1-7) सीधे उरोस्थि से अपने कॉस्टल कार्टिलेज द्वारा जुड़ी होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-741",
    "questionEn": "The seminal vesicles contribute approximately:",
    "questionHi": "फॉल्स रिब्स (False Ribs) कौन सी हैं?",
    "optionsEn": [
      "10% of semen",
      "30% of semen",
      "60% of semen",
      "5% of semen"
    ],
    "optionsHi": [
      "1-7",
      "8-10 (परोक्ष रूप से उरोस्थि से जुड़ी)",
      "11-12",
      "सभी"
    ],
    "correctAnswer": 2,
    "explanationEn": "Seminal vesicles produce ~60% of semen volume (fructose-rich, alkaline fluid).",
    "explanationHi": "फॉल्स रिब्स (8-10) ऊपरी पसली के कार्टिलेज से जुड़ती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-742",
    "questionEn": "Leydig cells produce:",
    "questionHi": "फ्लोटिंग रिब्स (Floating Ribs) कौन सी हैं?",
    "optionsEn": [
      "Sperm",
      "Testosterone",
      "FSH",
      "LH"
    ],
    "optionsHi": [
      "1-7",
      "8-10",
      "11-12 (उरोस्थि से नहीं जुड़ी)",
      "सभी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Leydig (interstitial) cells in testes produce testosterone; Sertoli cells support spermatogenesis.",
    "explanationHi": "फ्लोटिंग रिब्स (11-12) उरोस्थि से बिल्कुल नहीं जुड़ी होतीं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-743",
    "questionEn": "The cervical os is:",
    "questionHi": "उरोस्थि (Sternum) के भाग कौन से हैं?",
    "optionsEn": [
      "The uterine body",
      "The opening of cervix",
      "The fallopian tube opening",
      "The vaginal wall"
    ],
    "optionsHi": [
      "केवल एक",
      "मैन्यूब्रियम, बॉडी, जाइफॉयड प्रोसेस",
      "दो भाग",
      "चार भाग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Internal os opens to uterus; external os opens to vagina.",
    "explanationHi": "उरोस्थि के 3 भाग हैं: मैन्यूब्रियम (ऊपर), बॉडी (मध्य), जाइफॉयड (नीचे)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-744",
    "questionEn": "The placenta produces:",
    "questionHi": "क्लेविकल (Clavicle) शरीर की किस प्रकार की हड्डी है?",
    "optionsEn": [
      "hCG only",
      "Estrogen only",
      "Progesterone only",
      "All of these"
    ],
    "optionsHi": [
      "सबसे छोटी",
      "सबसे अधिक टूटने वाली लंबी हड्डियों में से एक",
      "सबसे मजबूत",
      "सबसे बड़ी"
    ],
    "correctAnswer": 3,
    "explanationEn": "Placenta produces hCG, estrogen, progesterone, and human placental lactogen.",
    "explanationHi": "क्लेविकल सबसे अधिक टूटने वाली हड्डियों में से एक है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-745",
    "questionEn": "Keratin is produced by:",
    "questionHi": "स्कैपुला (Scapula) किस प्रकार की हड्डी है?",
    "optionsEn": [
      "Melanocytes",
      "Keratinocytes",
      "Fibroblasts",
      "Adipocytes"
    ],
    "optionsHi": [
      "लंबी",
      "चपटी त्रिकोणीय",
      "छोटी",
      "अनियमित"
    ],
    "correctAnswer": 1,
    "explanationEn": "Keratinocytes produce keratin protein that makes skin waterproof and protective.",
    "explanationHi": "स्कैपुला पीठ पर त्रिकोणीय चपटी हड्डी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-746",
    "questionEn": "Meissner's corpuscles detect:",
    "questionHi": "ग्लेनॉयड कैविटी (Glenoid Cavity) कहां है?",
    "optionsEn": [
      "Deep pressure",
      "Light touch",
      "Temperature",
      "Pain"
    ],
    "optionsHi": [
      "कूल्हे में",
      "स्कैपुला पर (कंधे के जोड़ के लिए)",
      "घुटने में",
      "कोहनी में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Meissner's corpuscles (in dermal papillae) detect light touch; Pacinian detect deep pressure.",
    "explanationHi": "ग्लेनॉयड कैविटी स्कैपुला पर उथला गड्ढा है जहां ह्यूमरस का सिर बैठता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-747",
    "questionEn": "Sebaceous glands produce:",
    "questionHi": "ह्यूमरस (Humerus) बाहु की कौन सी हड्डी है?",
    "optionsEn": [
      "Sweat",
      "Cerumen",
      "Sebum",
      "Milk"
    ],
    "optionsHi": [
      "प्रकोष्ठ की",
      "ऊपरी बाहु की एकमात्र हड्डी",
      "हाथ की",
      "कंधे की"
    ],
    "correctAnswer": 2,
    "explanationEn": "Sebaceous glands produce oily sebum that lubricates skin and hair.",
    "explanationHi": "ह्यूमरस ऊपरी बाहु (Upper Arm) की एकमात्र लंबी हड्डी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-748",
    "questionEn": "The ciliary body controls:",
    "questionHi": "रेडियस (Radius) प्रकोष्ठ के किस तरफ है?",
    "optionsEn": [
      "Pupil size",
      "Lens shape",
      "Tear production",
      "Eye movement"
    ],
    "optionsHi": [
      "छोटी उंगली की तरफ",
      "अंगूठे की तरफ (लेटरल)",
      "बीच में",
      "पीछे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ciliary muscle in ciliary body changes lens shape for focusing (accommodation).",
    "explanationHi": "रेडियस प्रकोष्ठ की अंगूठे की तरफ (लेटरल) की हड्डी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-749",
    "questionEn": "The organ of Corti is in the:",
    "questionHi": "उल्ना (Ulna) प्रकोष्ठ के किस तरफ है?",
    "optionsEn": [
      "Outer ear",
      "Middle ear",
      "Cochlea",
      "Vestibule"
    ],
    "optionsHi": [
      "अंगूठे की तरफ",
      "छोटी उंगली की तरफ (मीडियल)",
      "बीच में",
      "पीछे"
    ],
    "correctAnswer": 2,
    "explanationEn": "Organ of Corti in cochlea contains hair cells for hearing (mechanoreceptors).",
    "explanationHi": "उल्ना प्रकोष्ठ की छोटी उंगली की तरफ (मीडियल) की हड्डी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-750",
    "questionEn": "Rods are responsible for:",
    "questionHi": "ओलेक्रैनन (Olecranon) क्या है?",
    "optionsEn": [
      "Color vision",
      "Night vision",
      "Depth perception",
      "Central vision"
    ],
    "optionsHi": [
      "रेडियस का सिर",
      "उल्ना का ऊपरी उभार (कोहनी का पिछला भाग)",
      "ह्यूमरस का सिर",
      "कलाई की हड्डी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rods are sensitive to dim light (scotopic vision); cones detect color (photopic).",
    "explanationHi": "ओलेक्रैनन उल्ना का ऊपरी उभार है जो कोहनी का पिछला भाग बनाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-751",
    "questionEn": "The omentum is:",
    "questionHi": "कार्पल हड्डियां (Carpal Bones) कितनी होती हैं?",
    "optionsEn": [
      "Part of intestine",
      "A fold of peritoneum",
      "A ligament",
      "An organ"
    ],
    "optionsHi": [
      "5",
      "8",
      "10",
      "12"
    ],
    "correctAnswer": 1,
    "explanationEn": "Greater omentum is a fatty apron of peritoneum hanging from stomach.",
    "explanationHi": "कलाई में 8 कार्पल हड्डियां होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-752",
    "questionEn": "The foramen magnum is in the:",
    "questionHi": "मेटाकार्पल हड्डियां (Metacarpals) कितनी होती हैं?",
    "optionsEn": [
      "Frontal bone",
      "Parietal bone",
      "Temporal bone",
      "Occipital bone"
    ],
    "optionsHi": [
      "4",
      "5",
      "8",
      "10"
    ],
    "correctAnswer": 3,
    "explanationEn": "Foramen magnum in occipital bone allows spinal cord passage.",
    "explanationHi": "हथेली में 5 मेटाकार्पल हड्डियां होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-753",
    "questionEn": "The carpal bones are in the:",
    "questionHi": "फैलेंजेस (Phalanges) हाथ में कितनी होती हैं?",
    "optionsEn": [
      "Ankle",
      "Wrist",
      "Fingers",
      "Toes"
    ],
    "optionsHi": [
      "10",
      "14",
      "20",
      "28"
    ],
    "correctAnswer": 1,
    "explanationEn": "Carpals are wrist bones (8 total); tarsals are ankle bones (7 total).",
    "explanationHi": "प्रत्येक हाथ में 14 फैलेंजेस होती हैं (अंगूठे में 2, बाकी में 3-3)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-754",
    "questionEn": "The diaphragm is innervated by the:",
    "questionHi": "पेल्विक गर्डल (Pelvic Girdle) कितनी हड्डियों से बना है?",
    "optionsEn": [
      "Vagus nerve",
      "Phrenic nerve",
      "Intercostal nerves",
      "Accessory nerve"
    ],
    "optionsHi": [
      "1",
      "2 (दोनों हिप बोन्स)",
      "4",
      "6"
    ],
    "correctAnswer": 1,
    "explanationEn": "Phrenic nerve (C3-C5) provides motor innervation to diaphragm.",
    "explanationHi": "पेल्विक गर्डल दो हिप बोन्स (ऑस कॉक्सी) से बना है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-755",
    "questionEn": "The right coronary artery supplies the:",
    "questionHi": "प्रत्येक हिप बोन (Hip Bone) किन हड्डियों के जुड़ने से बनी है?",
    "optionsEn": [
      "Left ventricle",
      "Right heart and inferior wall",
      "Lungs",
      "Brain"
    ],
    "optionsHi": [
      "2",
      "इलियम, इस्कियम, प्यूबिस (3)",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "explanationEn": "RCA supplies right atrium, right ventricle, and inferior wall of left ventricle.",
    "explanationHi": "प्रत्येक हिप बोन तीन हड्डियों (इलियम, इस्कियम, प्यूबिस) के जुड़ने से बनी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-756",
    "questionEn": "Thrombocytes are also called:",
    "questionHi": "एसिटाबुलम (Acetabulum) क्या है?",
    "optionsEn": [
      "Red blood cells",
      "White blood cells",
      "Platelets",
      "Plasma cells"
    ],
    "optionsHi": [
      "कंधे का गड्ढा",
      "हिप बोन पर गड्ढा जहां फीमर का सिर बैठता है",
      "घुटने का गड्ढा",
      "कोहनी का गड्ढा"
    ],
    "correctAnswer": 2,
    "explanationEn": "Thrombocytes (platelets) are cell fragments essential for blood clotting.",
    "explanationHi": "एसिटाबुलम हिप बोन पर गहरा कप के आकार का गड्ढा है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-757",
    "questionEn": "The paranasal sinuses include:",
    "questionHi": "महिला और पुरुष पेल्विस में मुख्य अंतर क्या है?",
    "optionsEn": [
      "Sphenoid sinus",
      "All facial sinuses",
      "Maxillary only",
      "Frontal only"
    ],
    "optionsHi": [
      "कोई अंतर नहीं",
      "महिला पेल्विस चौड़ी और उथली, पुरुष संकरी और गहरी",
      "पुरुष पेल्विस चौड़ी",
      "महिला पेल्विस गहरी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Paranasal sinuses: frontal, maxillary, ethmoid, and sphenoid - all drain into nasal cavity.",
    "explanationHi": "महिला पेल्विस प्रसव के लिए चौड़ी और उथली होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-758",
    "questionEn": "The Z-line marks the:",
    "questionHi": "फीमर (Femur) शरीर की कौन सी हड्डी है?",
    "optionsEn": [
      "Pyloric sphincter",
      "Gastroesophageal junction",
      "Ileocecal valve",
      "Anal canal"
    ],
    "optionsHi": [
      "सबसे छोटी",
      "सबसे लंबी और मजबूत",
      "सबसे कमजोर",
      "सबसे पतली"
    ],
    "correctAnswer": 1,
    "explanationEn": "Z-line is the visible junction between esophageal and gastric mucosa.",
    "explanationHi": "फीमर (जांघ की हड्डी) शरीर की सबसे लंबी और मजबूत हड्डी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-759",
    "questionEn": "The corpus callosum connects:",
    "questionHi": "फीमर की गर्दन (Neck of Femur) क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Cerebrum and cerebellum",
      "Left and right hemispheres",
      "Brain and spinal cord",
      "Thalamus and hypothalamus"
    ],
    "optionsHi": [
      "सबसे मजबूत",
      "वृद्धों में फ्रैक्चर का आम स्थान",
      "सबसे बड़ी",
      "कोई महत्व नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Corpus callosum is white matter connecting left and right cerebral hemispheres.",
    "explanationHi": "फीमर की गर्दन वृद्धों में (विशेषकर ऑस्टियोपोरोसिस में) फ्रैक्चर का आम स्थान है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-760",
    "questionEn": "The detrusor muscle is in the:",
    "questionHi": "पटेला (Patella) किस प्रकार की हड्डी है?",
    "optionsEn": [
      "Kidney",
      "Ureter",
      "Bladder",
      "Urethra"
    ],
    "optionsHi": [
      "लंबी",
      "सीसमॉयड (कंडरा में)",
      "चपटी",
      "अनियमित"
    ],
    "correctAnswer": 2,
    "explanationEn": "Detrusor is the smooth muscle in bladder wall that contracts during urination.",
    "explanationHi": "पटेला (घुटने की टोपी) शरीर की सबसे बड़ी सीसमॉयड हड्डी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-761",
    "questionEn": "The broad ligament supports the:",
    "questionHi": "टिबिया (Tibia) पिंडली के किस तरफ है?",
    "optionsEn": [
      "Ovary only",
      "Uterus",
      "Bladder",
      "Rectum"
    ],
    "optionsHi": [
      "बाहर की तरफ",
      "अंदर की तरफ (मीडियल) - भार वहन करने वाली",
      "पीछे",
      "सामने"
    ],
    "correctAnswer": 1,
    "explanationEn": "Broad ligament is a fold of peritoneum supporting uterus, tubes, and ovaries.",
    "explanationHi": "टिबिया पिंडली की अंदर की बड़ी हड्डी है जो शरीर का भार वहन करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-762",
    "questionEn": "The aqueous humor is in the:",
    "questionHi": "फिबुला (Fibula) का मुख्य कार्य क्या है?",
    "optionsEn": [
      "Vitreous chamber",
      "Anterior chamber",
      "Lens",
      "Retina"
    ],
    "optionsHi": [
      "भार वहन",
      "पेशियों के जुड़ाव और टखने की स्थिरता",
      "खून बनाना",
      "कोई कार्य नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aqueous humor fills anterior and posterior chambers; vitreous humor fills vitreous chamber.",
    "explanationHi": "फिबुला भार वहन नहीं करती लेकिन पेशी जुड़ाव और टखने की स्थिरता में महत्वपूर्ण है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-763",
    "questionEn": "The manubrium articulates with:",
    "questionHi": "टार्सल हड्डियां (Tarsal Bones) कितनी होती हैं?",
    "optionsEn": [
      "Ribs 1-7",
      "Clavicles and rib 1",
      "All ribs",
      "Vertebrae"
    ],
    "optionsHi": [
      "5",
      "7",
      "8",
      "10"
    ],
    "correctAnswer": 1,
    "explanationEn": "Manubrium articulates with clavicles and first rib only.",
    "explanationHi": "पैर के पिछले भाग में 7 टार्सल हड्डियां होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-764",
    "questionEn": "Isometric contraction means:",
    "questionHi": "कैल्केनियस (Calcaneus) क्या है?",
    "optionsEn": [
      "Muscle shortens",
      "Muscle lengthens",
      "No length change",
      "No tension"
    ],
    "optionsHi": [
      "पैर की उंगली",
      "एड़ी की हड्डी",
      "टखने की हड्डी",
      "कलाई की हड्डी"
    ],
    "correctAnswer": 2,
    "explanationEn": "Isometric = same length (tension without movement); isotonic = same tension with movement.",
    "explanationHi": "कैल्केनियस एड़ी की हड्डी है जो सबसे बड़ी टार्सल हड्डी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-765",
    "questionEn": "Deoxygenated blood enters the right atrium via:",
    "questionHi": "टैलस (Talus) का क्या कार्य है?",
    "optionsEn": [
      "Pulmonary veins",
      "Vena cavae",
      "Coronary sinus",
      "Both B and C"
    ],
    "optionsHi": [
      "पैर की उंगली बनाना",
      "टिबिया से जुड़कर टखने का जोड़ बनाना",
      "एड़ी बनाना",
      "कोई कार्य नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Right atrium receives deoxygenated blood from SVC, IVC, and coronary sinus.",
    "explanationHi": "टैलस टिबिया और फिबुला से जुड़कर टखने का जोड़ बनाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-766",
    "questionEn": "The cricoid cartilage is:",
    "questionHi": "मेटाटार्सल हड्डियां (Metatarsals) कितनी होती हैं?",
    "optionsEn": [
      "A complete ring",
      "C-shaped",
      "Leaf-shaped",
      "Paired"
    ],
    "optionsHi": [
      "4",
      "5",
      "7",
      "10"
    ],
    "correctAnswer": 0,
    "explanationEn": "Cricoid is the only complete cartilage ring in the respiratory tract.",
    "explanationHi": "पैर के मध्य भाग में 5 मेटाटार्सल हड्डियां होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-767",
    "questionEn": "Intrinsic factor is needed to absorb:",
    "questionHi": "पैर की फैलेंजेस (Phalanges) कितनी होती हैं?",
    "optionsEn": [
      "Iron",
      "Calcium",
      "Vitamin B12",
      "Folate"
    ],
    "optionsHi": [
      "10",
      "14",
      "20",
      "28"
    ],
    "correctAnswer": 2,
    "explanationEn": "Intrinsic factor (from parietal cells) binds B12 for absorption in terminal ileum.",
    "explanationHi": "प्रत्येक पैर में 14 फैलेंजेस होती हैं (बड़ी उंगली में 2, बाकी में 3-3)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-768",
    "questionEn": "The hypothalamus regulates:",
    "questionHi": "पैर के आर्च (Arches of Foot) कितने होते हैं?",
    "optionsEn": [
      "Temperature",
      "Hunger",
      "Sleep",
      "All of these"
    ],
    "optionsHi": [
      "1",
      "2",
      "3 (मीडियल, लेटरल लॉन्जिट्यूडिनल और ट्रांसवर्स)",
      "4"
    ],
    "correctAnswer": 3,
    "explanationEn": "Hypothalamus controls temperature, hunger, thirst, sleep, and endocrine function.",
    "explanationHi": "पैर में 3 आर्च होते हैं जो शॉक अवशोषण और चलने में मदद करते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-769",
    "questionEn": "ADH increases water reabsorption in the:",
    "questionHi": "फ्लैट फुट (Flat Foot/Pes Planus) क्या है?",
    "optionsEn": [
      "PCT",
      "Loop of Henle",
      "DCT",
      "Collecting duct"
    ],
    "optionsHi": [
      "ऊंचा आर्च",
      "मीडियल लॉन्जिट्यूडिनल आर्च का चपटा होना",
      "अंगूठे की विकृति",
      "एड़ी का दर्द"
    ],
    "correctAnswer": 3,
    "explanationEn": "ADH increases water permeability of collecting duct (and late DCT).",
    "explanationHi": "फ्लैट फुट में पैर का अंदरूनी आर्च सपाट हो जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-770",
    "questionEn": "FSH in females stimulates:",
    "questionHi": "हैलक्स वैल्गस (Hallux Valgus/Bunion) क्या है?",
    "optionsEn": [
      "Ovulation",
      "Follicle development",
      "Corpus luteum",
      "Menstruation"
    ],
    "optionsHi": [
      "छोटी उंगली की विकृति",
      "बड़ी पैर की उंगली का बाहर की ओर मुड़ना",
      "एड़ी का दर्द",
      "आर्च गिरना"
    ],
    "correctAnswer": 1,
    "explanationEn": "FSH stimulates follicular development; LH triggers ovulation.",
    "explanationHi": "बनियन में बड़ी पैर की उंगली बाहर की ओर मुड़ जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-771",
    "questionEn": "The fovea centralis contains:",
    "questionHi": "साइनोवियल जोड़ (Synovial Joint) की विशेषता क्या है?",
    "optionsEn": [
      "Only rods",
      "Only cones",
      "Both equally",
      "No photoreceptors"
    ],
    "optionsHi": [
      "कोई गति नहीं",
      "जोड़ गुहा, साइनोवियल द्रव, आर्टिकुलर कार्टिलेज",
      "हड्डी से हड्डी जुड़ी",
      "केवल एक हड्डी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fovea has highest cone density for sharpest, color vision (no rods).",
    "explanationHi": "साइनोवियल जोड़ में जोड़ गुहा होती है जिसमें साइनोवियल द्रव भरा होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-772",
    "questionEn": "Fascia is a type of:",
    "questionHi": "बॉल और सॉकेट जोड़ (Ball and Socket Joint) का उदाहरण क्या है?",
    "optionsEn": [
      "Muscle",
      "Bone",
      "Connective tissue",
      "Nervous tissue"
    ],
    "optionsHi": [
      "घुटना",
      "कंधा और कूल्हा",
      "कोहनी",
      "टखना"
    ],
    "correctAnswer": 2,
    "explanationEn": "Fascia is connective tissue that wraps and separates muscles and organs.",
    "explanationHi": "कंधा और कूल्हा बॉल और सॉकेट जोड़ हैं जो सभी दिशाओं में गति देते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-773",
    "questionEn": "The glenoid fossa is part of the:",
    "questionHi": "हिंज जोड़ (Hinge Joint) का उदाहरण क्या है?",
    "optionsEn": [
      "Hip joint",
      "Shoulder joint",
      "Elbow joint",
      "Knee joint"
    ],
    "optionsHi": [
      "कंधा",
      "घुटना और कोहनी",
      "कूल्हा",
      "कंधा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Glenoid fossa of scapula articulates with humeral head at shoulder joint.",
    "explanationHi": "घुटना और कोहनी हिंज जोड़ हैं जो एक तल में गति देते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-774",
    "questionEn": "The rotator cuff includes how many muscles?",
    "questionHi": "पिवट जोड़ (Pivot Joint) का उदाहरण क्या है?",
    "optionsEn": [
      "2",
      "3",
      "4",
      "5"
    ],
    "optionsHi": [
      "घुटना",
      "एटलांटोएक्सियल जोड़ (सिर घुमाना)",
      "कूल्हा",
      "टखना"
    ],
    "correctAnswer": 2,
    "explanationEn": "Rotator cuff: Supraspinatus, Infraspinatus, Teres minor, Subscapularis (SITS).",
    "explanationHi": "C1-C2 के बीच पिवट जोड़ है जो सिर को 'नहीं' कहने जैसा घुमाने देता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-775",
    "questionEn": "The sinoatrial node is located in the:",
    "questionHi": "सैडल जोड़ (Saddle Joint) का उदाहरण क्या है?",
    "optionsEn": [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Interventricular septum"
    ],
    "optionsHi": [
      "घुटना",
      "अंगूठे का कार्पोमेटाकार्पल जोड़",
      "कोहनी",
      "टखना"
    ],
    "correctAnswer": 0,
    "explanationEn": "SA node is in posterior wall of right atrium near SVC opening.",
    "explanationHi": "अंगूठे का आधार का जोड़ सैडल जोड़ है जो अंगूठे को विरोध (Opposition) करने देता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-776",
    "questionEn": "Functional residual capacity equals:",
    "questionHi": "ग्लाइडिंग जोड़ (Gliding Joint) का उदाहरण क्या है?",
    "optionsEn": [
      "RV + ERV",
      "TV + IRV",
      "TV + ERV",
      "TLC - IC"
    ],
    "optionsHi": [
      "कंधा",
      "इंटरकार्पल और इंटरटार्सल जोड़",
      "घुटना",
      "कोहनी"
    ],
    "correctAnswer": 0,
    "explanationEn": "FRC = ERV + RV (air remaining after normal expiration).",
    "explanationHi": "कलाई और पैर की छोटी हड्डियों के बीच ग्लाइडिंग जोड़ होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-777",
    "questionEn": "The sphincter of Oddi controls flow into the:",
    "questionHi": "कंडाइलॉयड जोड़ (Condyloid/Ellipsoid Joint) का उदाहरण क्या है?",
    "optionsEn": [
      "Stomach",
      "Duodenum",
      "Jejunum",
      "Colon"
    ],
    "optionsHi": [
      "कूल्हा",
      "रेडियोकार्पल जोड़ (कलाई)",
      "घुटना",
      "टखना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sphincter of Oddi controls release of bile and pancreatic juice into duodenum.",
    "explanationHi": "कलाई का जोड़ कंडाइलॉयड जोड़ है जो दो तलों में गति देता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-778",
    "questionEn": "The thalamus acts as a:",
    "questionHi": "ACL (Anterior Cruciate Ligament) का कार्य क्या है?",
    "optionsEn": [
      "Motor center",
      "Sensory relay station",
      "Memory center",
      "Breathing center"
    ],
    "optionsHi": [
      "घुटना मोड़ना",
      "टिबिया को आगे खिसकने से रोकना",
      "घुटना सीधा करना",
      "पैर घुमाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Thalamus relays sensory information to appropriate cortical areas.",
    "explanationHi": "ACL घुटने में टिबिया को फीमर के सापेक्ष आगे खिसकने से रोकता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-779",
    "questionEn": "GFR stands for:",
    "questionHi": "PCL (Posterior Cruciate Ligament) का कार्य क्या है?",
    "optionsEn": [
      "General filtration rate",
      "Glomerular flow rate",
      "Glomerular filtration rate",
      "Glucose filtration rate"
    ],
    "optionsHi": [
      "घुटना मोड़ना",
      "टिबिया को पीछे खिसकने से रोकना",
      "घुटना सीधा करना",
      "पैर घुमाना"
    ],
    "correctAnswer": 2,
    "explanationEn": "GFR is the volume of filtrate formed per minute (~125 mL/min or 180 L/day).",
    "explanationHi": "PCL घुटने में टिबिया को फीमर के सापेक्ष पीछे खिसकने से रोकता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-780",
    "questionEn": "The hymen is located at the:",
    "questionHi": "MCL (Medial Collateral Ligament) क्या करता है?",
    "optionsEn": [
      "Cervix",
      "Vaginal opening",
      "Labia",
      "Urethra"
    ],
    "optionsHi": [
      "आगे की स्थिरता",
      "घुटने की अंदरूनी स्थिरता",
      "पीछे की स्थिरता",
      "घुमाव की स्थिरता"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hymen is a thin mucous membrane partially covering vaginal opening.",
    "explanationHi": "MCL घुटने के अंदरूनी भाग को स्थिर करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-781",
    "questionEn": "The eustachian tube connects:",
    "questionHi": "LCL (Lateral Collateral Ligament) क्या करता है?",
    "optionsEn": [
      "Outer and middle ear",
      "Middle ear and nasopharynx",
      "Inner ear and brain",
      "Both ears"
    ],
    "optionsHi": [
      "आगे की स्थिरता",
      "घुटने की बाहरी स्थिरता",
      "पीछे की स्थिरता",
      "घुमाव की स्थिरता"
    ],
    "correctAnswer": 1,
    "explanationEn": "Eustachian (pharyngotympanic) tube equalizes middle ear pressure.",
    "explanationHi": "LCL घुटने के बाहरी भाग को स्थिर करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-782",
    "questionEn": "The phrenic nerve originates from:",
    "questionHi": "एंटीरियर ड्रॉवर टेस्ट (Anterior Drawer Test) क्या जांचता है?",
    "optionsEn": [
      "C1-C2",
      "C3-C5",
      "T1-T4",
      "L1-L2"
    ],
    "optionsHi": [
      "PCL",
      "ACL की integrity",
      "MCL",
      "LCL"
    ],
    "correctAnswer": 1,
    "explanationEn": "'C3, 4, 5 keeps the diaphragm alive' - phrenic nerve origin.",
    "explanationHi": "एंटीरियर ड्रॉवर टेस्ट ACL की चोट का पता लगाने के लिए किया जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-783",
    "questionEn": "The atlas is:",
    "questionHi": "लैक्मन टेस्ट (Lachman Test) क्या जांचता है?",
    "optionsEn": [
      "C1 vertebra",
      "C2 vertebra",
      "C7 vertebra",
      "T1 vertebra"
    ],
    "optionsHi": [
      "PCL",
      "ACL (सबसे संवेदनशील परीक्षण)",
      "MCL",
      "LCL"
    ],
    "correctAnswer": 0,
    "explanationEn": "Atlas (C1) supports skull; axis (C2) allows rotation via odontoid process.",
    "explanationHi": "लैक्मन टेस्ट ACL चोट के लिए सबसे संवेदनशील क्लिनिकल परीक्षण है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-784",
    "questionEn": "The sternocleidomastoid muscle:",
    "questionHi": "मैकमरे टेस्ट (McMurray Test) क्या जांचता है?",
    "optionsEn": [
      "Extends the neck",
      "Flexes and rotates head",
      "Elevates scapula",
      "Opens jaw"
    ],
    "optionsHi": [
      "ACL",
      "मेनिस्कस चोट",
      "LCL",
      "MCL"
    ],
    "correctAnswer": 1,
    "explanationEn": "SCM flexes neck and rotates head to opposite side.",
    "explanationHi": "मैकमरे टेस्ट घुटने की मेनिस्कस चोट का पता लगाने के लिए किया जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-785",
    "questionEn": "Normal cardiac output is approximately:",
    "questionHi": "अनहैप्पी ट्रायड (Unhappy Triad) में कौन सी संरचनाएं चोटग्रस्त होती हैं?",
    "optionsEn": [
      "1 L/min",
      "3 L/min",
      "5 L/min",
      "10 L/min"
    ],
    "optionsHi": [
      "केवल ACL",
      "ACL, MCL, मीडियल मेनिस्कस",
      "केवल मेनिस्कस",
      "PCL, LCL"
    ],
    "correctAnswer": 2,
    "explanationEn": "CO = HR × SV ≈ 70 × 70 mL ≈ 5 L/min at rest.",
    "explanationHi": "अनहैप्पी ट्रायड में ACL, MCL और मीडियल मेनिस्कस एक साथ चोटग्रस्त होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-786",
    "questionEn": "The hilum of the lung contains:",
    "questionHi": "कंधे का डिसलोकेशन सबसे आम किस दिशा में होता है?",
    "optionsEn": [
      "Alveoli",
      "Bronchi and vessels",
      "Pleura",
      "Surfactant"
    ],
    "optionsHi": [
      "पीछे",
      "आगे-नीचे (एंटीरियर-इंफीरियर)",
      "ऊपर",
      "बगल में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hilum is where bronchi, pulmonary vessels, nerves, and lymphatics enter/exit lung.",
    "explanationHi": "कंधे का अधिकांश डिसलोकेशन एंटीरियर-इंफीरियर होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-787",
    "questionEn": "Peyer's patches are found in the:",
    "questionHi": "एपली ग्राइंड टेस्ट (Apley Grind Test) क्या जांचता है?",
    "optionsEn": [
      "Duodenum",
      "Jejunum",
      "Ileum",
      "Colon"
    ],
    "optionsHi": [
      "ACL",
      "मेनिस्कस चोट",
      "कंधे की चोट",
      "कूल्हे की चोट"
    ],
    "correctAnswer": 2,
    "explanationEn": "Peyer's patches are lymphoid tissue in ileum for immune surveillance.",
    "explanationHi": "एपली ग्राइंड टेस्ट मेनिस्कस और लिगामेंट चोटों में अंतर करने के लिए किया जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-788",
    "questionEn": "The limbic system is involved in:",
    "questionHi": "नीर टेस्ट (Neer Test) क्या जांचता है?",
    "optionsEn": [
      "Vision",
      "Emotion and memory",
      "Movement",
      "Hearing"
    ],
    "optionsHi": [
      "घुटने की चोट",
      "कंधे का इम्पिंजमेंट",
      "कूल्हे की चोट",
      "कोहनी की चोट"
    ],
    "correctAnswer": 1,
    "explanationEn": "Limbic system (hippocampus, amygdala, etc.) processes emotions and memory.",
    "explanationHi": "नीर टेस्ट कंधे में सुप्रास्पिनेटस इम्पिंजमेंट की जांच करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-789",
    "questionEn": "The macula densa senses:",
    "questionHi": "फालेन टेस्ट (Phalen's Test) क्या जांचता है?",
    "optionsEn": [
      "Blood pressure",
      "Blood glucose",
      "Tubular sodium",
      "Urine volume"
    ],
    "optionsHi": [
      "टेनिस एल्बो",
      "कार्पल टनल सिंड्रोम",
      "कंधे की चोट",
      "घुटने की चोट"
    ],
    "correctAnswer": 2,
    "explanationEn": "Macula densa cells in DCT sense Na+/Cl- concentration for tubuloglomerular feedback.",
    "explanationHi": "फालेन टेस्ट कलाई मोड़कर कार्पल टनल सिंड्रोम की जांच करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-790",
    "questionEn": "The cremaster muscle:",
    "questionHi": "टिनेल साइन (Tinel's Sign) क्या है?",
    "optionsEn": [
      "Produces sperm",
      "Elevates testes",
      "Secretes testosterone",
      "Stores sperm"
    ],
    "optionsHi": [
      "जोड़ का दर्द",
      "तंत्रिका पर थपथपाने से झुनझुनी",
      "पेशी कमजोरी",
      "सूजन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cremaster muscle elevates testes for temperature regulation.",
    "explanationHi": "टिनेल साइन तंत्रिका के ऊपर थपथपाने से तंत्रिका के क्षेत्र में झुनझुनी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-791",
    "questionEn": "Explain the anatomical basis for hepatomegaly (enlarged liver) being detectable by percussion.",
    "questionHi": "थॉमस टेस्ट (Thomas Test) क्या जांचता है?",
    "optionsEn": [],
    "optionsHi": [
      "घुटने की चोट",
      "हिप फ्लेक्सर (इलियोपोसोस) की टाइटनेस",
      "कंधे की चोट",
      "कोहनी की चोट"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "थॉमस टेस्ट कूल्हे के फ्लेक्सर कॉन्ट्रैक्चर की जांच करता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-792",
    "questionEn": "Describe the fetal circulation and name three structures that close after birth.",
    "questionHi": "ओबर टेस्ट (Ober Test) क्या जांचता है?",
    "optionsEn": [],
    "optionsHi": [
      "हैमस्ट्रिंग",
      "इलियोटिबियल बैंड (ITB) की टाइटनेस",
      "क्वाड्रिसेप्स",
      "कैफ"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "ओबर टेस्ट ITB की टाइटनेस की जांच करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-793",
    "questionEn": "List all 12 cranial nerves and their primary functions.",
    "questionHi": "स्ट्रेट लेग रेज टेस्ट (SLR Test) क्या जांचता है?",
    "optionsEn": [],
    "optionsHi": [
      "घुटने की चोट",
      "लंबर रेडिकुलोपैथी/सायटिका",
      "कंधे की चोट",
      "कोहनी की चोट"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "SLR टेस्ट में पैर सीधा उठाने पर पीठ/पैर में दर्द लंबर डिस्क समस्या सुझाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-794",
    "questionEn": "Explain the mechanics of normal inspiration and expiration.",
    "questionHi": "फिंकेलस्टीन टेस्ट (Finkelstein Test) क्या जांचता है?",
    "optionsEn": [],
    "optionsHi": [
      "कार्पल टनल",
      "डी क्वेर्वेन टेनोसाइनोवाइटिस",
      "टेनिस एल्बो",
      "गोल्फर एल्बो"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "फिंकेलस्टीन टेस्ट अंगूठे के टेंडन की सूजन (डी क्वेर्वेन) की जांच करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-795",
    "questionEn": "Describe the layers of the GI tract wall from inside out.",
    "questionHi": "टेनिस एल्बो (Lateral Epicondylitis) में कहां दर्द होता है?",
    "optionsEn": [],
    "optionsHi": [
      "कोहनी के अंदर",
      "कोहनी के बाहर (लेटरल एपिकॉन्डाइल)",
      "कलाई में",
      "कंधे में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "टेनिस एल्बो में कोहनी के बाहरी उभार पर दर्द होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-796",
    "questionEn": "Compare and contrast cortical and juxtamedullary nephrons.",
    "questionHi": "गोल्फर एल्बो (Medial Epicondylitis) में कहां दर्द होता है?",
    "optionsEn": [],
    "optionsHi": [
      "कोहनी के बाहर",
      "कोहनी के अंदर (मीडियल एपिकॉन्डाइल)",
      "कलाई में",
      "कंधे में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "गोल्फर एल्बो में कोहनी के अंदरूनी उभार पर दर्द होता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-797",
    "questionEn": "Describe the hormonal changes during the menstrual cycle and corresponding ovarian/uterine events.",
    "questionHi": "प्लांटर फैसाइटिस (Plantar Fasciitis) में कहां दर्द होता है?",
    "optionsEn": [],
    "optionsHi": [
      "टखने में",
      "एड़ी के नीचे (विशेषकर सुबह)",
      "पैर की उंगलियों में",
      "पिंडली में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "प्लांटर फैसाइटिस में एड़ी के नीचे दर्द होता है, सुबह उठने पर अधिक।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-798",
    "questionEn": "A patient has difficulty swallowing (dysphagia), hoarse voice, and deviation of uvula to the left. Which cranial nerve is likely affected?",
    "questionHi": "एकिलीज टेंडिनाइटिस में कहां दर्द होता है?",
    "optionsEn": [],
    "optionsHi": [
      "घुटने में",
      "एड़ी के पीछे (अकिलीज टेंडन)",
      "पैर की उंगलियों में",
      "कूल्हे में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "एकिलीज टेंडिनाइटिस में एड़ी के पीछे टेंडन में दर्द और सूजन होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-799",
    "questionEn": "A patient presents with sudden severe headache ('worst headache of my life'), neck stiffness, and photophobia. What anatomical structure is likely involved?",
    "questionHi": "रोटेटर कफ टियर (Rotator Cuff Tear) में कौन सी पेशी सबसे अधिक प्रभावित होती है?",
    "optionsEn": [],
    "optionsHi": [
      "इन्फ्रास्पिनेटस",
      "सुप्रास्पिनेटस",
      "सबस्कैपुलारिस",
      "टेरेस माइनर"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "सुप्रास्पिनेटस सबसे अधिक रोटेटर कफ टियर में प्रभावित होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-800",
    "questionEn": "A patient with diabetes has loss of pain sensation in a 'stocking-glove' distribution. Explain the anatomical pattern.",
    "questionHi": "फ्रोज़न शोल्डर (Adhesive Capsulitis) में क्या होता है?",
    "optionsEn": [],
    "optionsHi": [
      "हड्डी टूटना",
      "कंधे के कैप्सूल की सूजन और कठोरता",
      "पेशी टूटना",
      "तंत्रिका दबना"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "फ्रोज़न शोल्डर में कंधे का कैप्सूल सूज जाता है और कठोर हो जाता है जिससे गति सीमित होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-801",
    "questionEn": "Distal means:",
    "questionHi": "शरीर में कुल कितनी हड्डियां होती हैं?",
    "optionsEn": [
      "Near the trunk",
      "Far from the trunk/origin",
      "Toward midline",
      "Toward the surface"
    ],
    "optionsHi": [
      "106",
      "206",
      "306",
      "406"
    ],
    "correctAnswer": 1,
    "explanationEn": "Distal = farther from trunk or point of origin; proximal = nearer.",
    "explanationHi": "वयस्क मानव शरीर में 206 हड्डियां होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-802",
    "questionEn": "The dorsal surface of the hand is the:",
    "questionHi": "शरीर की सबसे छोटी हड्डी कौन सी है?",
    "optionsEn": [
      "Palm",
      "Back of hand",
      "Thumb side",
      "Little finger side"
    ],
    "optionsHi": [
      "मैलियस",
      "स्टेपीस",
      "इंकस",
      "पटेला"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dorsal = back (posterior) surface; palmar = front surface of hand.",
    "explanationHi": "स्टेपीस (रकाब) मध्य कान में सबसे छोटी हड्डी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-803",
    "questionEn": "The liver is located in which body cavity?",
    "questionHi": "रक्त का निर्माण कहां होता है?",
    "optionsEn": [
      "Thoracic",
      "Abdominal",
      "Pelvic",
      "Cranial"
    ],
    "optionsHi": [
      "यकृत में",
      "अस्थि मज्जा में",
      "प्लीहा में",
      "वृक्क में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Liver is in the abdominal cavity, primarily in the right upper quadrant.",
    "explanationHi": "वयस्कों में रक्त कोशिकाएं लाल अस्थि मज्जा में बनती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-804",
    "questionEn": "The tibia is located:",
    "questionHi": "हृदय में कितने कक्ष होते हैं?",
    "optionsEn": [
      "In the arm",
      "In the thigh",
      "In the lower leg (medial)",
      "In the foot"
    ],
    "optionsHi": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "explanationEn": "Tibia is the larger, medial bone of lower leg; fibula is lateral.",
    "explanationHi": "हृदय में 4 कक्ष होते हैं: 2 आलिंद और 2 निलय।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-805",
    "questionEn": "The condyle is:",
    "questionHi": "फेफड़ों का मुख्य कार्य क्या है?",
    "optionsEn": [
      "A hole in bone",
      "A rounded projection",
      "A sharp projection",
      "A depression"
    ],
    "optionsHi": [
      "रक्त पंप करना",
      "गैस विनिमय",
      "पाचन",
      "निस्पंदन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Condyle is a rounded articular projection (e.g., femoral condyles at knee).",
    "explanationHi": "फेफड़े ऑक्सीजन लेते हैं और कार्बन डाइऑक्साइड निकालते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-806",
    "questionEn": "The ischium is part of the:",
    "questionHi": "पाचन तंत्र कहां से शुरू होता है?",
    "optionsEn": [
      "Shoulder girdle",
      "Pelvic girdle",
      "Spine",
      "Skull"
    ],
    "optionsHi": [
      "आमाशय",
      "मुंह",
      "ग्रसिका",
      "छोटी आंत"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hip bone has three parts: ilium (superior), ischium (posterior-inferior), pubis (anterior-inferior).",
    "explanationHi": "पाचन तंत्र मुंह से शुरू होता है जहां यांत्रिक और रासायनिक पाचन शुरू होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-807",
    "questionEn": "A bursa is:",
    "questionHi": "यकृत शरीर का कौन सा अंग है?",
    "optionsEn": [
      "A type of joint",
      "A fluid-filled sac",
      "A ligament",
      "Part of bone"
    ],
    "optionsHi": [
      "सबसे छोटी ग्रंथि",
      "सबसे बड़ी ग्रंथि",
      "सबसे कठोर अंग",
      "सबसे नरम अंग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Bursae are synovial fluid-filled sacs reducing friction between tissues.",
    "explanationHi": "यकृत शरीर की सबसे बड़ी ग्रंथि है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-808",
    "questionEn": "The epiphyseal plate is responsible for:",
    "questionHi": "वृक्क का मुख्य कार्य क्या है?",
    "optionsEn": [
      "Blood production",
      "Bone length growth",
      "Joint lubrication",
      "Calcium storage"
    ],
    "optionsHi": [
      "पाचन",
      "रक्त छानना और मूत्र बनाना",
      "श्वसन",
      "रक्त पंप करना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Epiphyseal (growth) plate allows long bone growth in length; closes in adulthood.",
    "explanationHi": "वृक्क रक्त से अपशिष्ट छानकर मूत्र बनाते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-809",
    "questionEn": "The gastrocnemius is in the:",
    "questionHi": "मस्तिष्क किस गुहा में सुरक्षित है?",
    "optionsEn": [
      "Arm",
      "Thigh",
      "Calf",
      "Abdomen"
    ],
    "optionsHi": [
      "वक्षीय गुहा",
      "कपाल गुहा (Cranial Cavity)",
      "उदर गुहा",
      "श्रोणि गुहा"
    ],
    "correctAnswer": 2,
    "explanationEn": "Gastrocnemius is the main calf muscle; plantarflexes foot and flexes knee.",
    "explanationHi": "मस्तिष्क खोपड़ी के अंदर कपाल गुहा में सुरक्षित है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-810",
    "questionEn": "The quadriceps femoris has how many heads?",
    "questionHi": "त्वचा शरीर का कौन सा अंग है?",
    "optionsEn": [
      "2",
      "3",
      "4",
      "5"
    ],
    "optionsHi": [
      "सबसे छोटा",
      "सबसे बड़ा",
      "सबसे भारी",
      "सबसे कठोर"
    ],
    "correctAnswer": 2,
    "explanationEn": "Quadriceps: rectus femoris, vastus lateralis, vastus medialis, vastus intermedius.",
    "explanationHi": "त्वचा शरीर का सबसे बड़ा अंग है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-811",
    "questionEn": "Tendons connect:",
    "questionHi": "रक्त वाहिकाओं के तीन प्रकार कौन से हैं?",
    "optionsEn": [
      "Bone to bone",
      "Muscle to bone",
      "Muscle to muscle",
      "Nerve to muscle"
    ],
    "optionsHi": [
      "धमनी, नस, पेशी",
      "धमनी, शिरा, केशिका",
      "शिरा, पेशी, हड्डी",
      "धमनी, हड्डी, शिरा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tendons connect muscle to bone; ligaments connect bone to bone.",
    "explanationHi": "धमनियां हृदय से रक्त ले जाती हैं, शिराएं हृदय में लाती हैं, केशिकाएं विनिमय करती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-812",
    "questionEn": "The orbicularis oris is around the:",
    "questionHi": "धमनियां किस प्रकार का रक्त ले जाती हैं?",
    "optionsEn": [
      "Eye",
      "Mouth",
      "Nose",
      "Ear"
    ],
    "optionsHi": [
      "अशुद्ध रक्त",
      "शुद्ध (ऑक्सीजनयुक्त) रक्त (अधिकांश में)",
      "दोनों प्रकार का",
      "कोई रक्त नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Orbicularis oris encircles mouth (kissing muscle); orbicularis oculi around eye.",
    "explanationHi": "अधिकांश धमनियां ऑक्सीजनयुक्त रक्त ले जाती हैं (पल्मोनरी धमनी अपवाद)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-813",
    "questionEn": "Cardiac muscle has:",
    "questionHi": "शिराएं किस प्रकार का रक्त ले जाती हैं?",
    "optionsEn": [
      "No striations",
      "Intercalated discs",
      "Multiple nuclei",
      "Voluntary control"
    ],
    "optionsHi": [
      "शुद्ध रक्त",
      "अशुद्ध (विऑक्सीजनेटेड) रक्त (अधिकांश में)",
      "दोनों",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Intercalated discs connect cardiac myocytes; contain gap junctions for impulse spread.",
    "explanationHi": "अधिकांश शिराएं विऑक्सीजनेटेड रक्त ले जाती हैं (पल्मोनरी शिरा अपवाद)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-814",
    "questionEn": "The subclavian artery supplies:",
    "questionHi": "पल्मोनरी धमनी कौन सा रक्त ले जाती है?",
    "optionsEn": [
      "Brain",
      "Upper limb",
      "Heart",
      "Kidneys"
    ],
    "optionsHi": [
      "शुद्ध रक्त",
      "अशुद्ध रक्त (हृदय से फेफड़ों तक)",
      "दोनों",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Subclavian artery becomes axillary then brachial, supplying upper limb.",
    "explanationHi": "पल्मोनरी धमनी अपवाद है जो अशुद्ध रक्त दाएं हृदय से फेफड़ों में ले जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-815",
    "questionEn": "Starling's law states that:",
    "questionHi": "पल्मोनरी शिरा कौन सा रक्त ले जाती है?",
    "optionsEn": [
      "Heart rate increases with exercise",
      "Stroke volume increases with venous return",
      "Blood pressure rises with stress",
      "Cardiac output decreases at rest"
    ],
    "optionsHi": [
      "अशुद्ध रक्त",
      "शुद्ध रक्त (फेफड़ों से हृदय तक)",
      "दोनों",
      "कोई नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Frank-Starling: increased preload (stretch) leads to more forceful contraction.",
    "explanationHi": "पल्मोनरी शिरा अपवाद है जो शुद्ध रक्त फेफड़ों से बाएं हृदय में लाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-816",
    "questionEn": "The brachiocephalic trunk branches into:",
    "questionHi": "शरीर में कितनी पेशियां होती हैं?",
    "optionsEn": [
      "Coronary arteries",
      "Right common carotid and right subclavian",
      "Both carotids",
      "Pulmonary arteries"
    ],
    "optionsHi": [
      "206",
      "350",
      "600 से अधिक",
      "1000"
    ],
    "correctAnswer": 1,
    "explanationEn": "Brachiocephalic trunk is first branch of aortic arch; divides into right common carotid and right subclavian.",
    "explanationHi": "शरीर में 600 से अधिक कंकाल पेशियां होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-817",
    "questionEn": "The aortic arch is at the level of:",
    "questionHi": "पेशियों के कितने प्रकार होते हैं?",
    "optionsEn": [
      "T2",
      "T4",
      "T6",
      "T10"
    ],
    "optionsHi": [
      "1",
      "2",
      "3 (कंकाल, हृदय, चिकनी)",
      "4"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aortic arch is at T4 level (sternal angle); descending aorta continues from T4.",
    "explanationHi": "तीन प्रकार की पेशियां हैं: कंकाल (ऐच्छिक), हृदय और चिकनी (अनैच्छिक)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-818",
    "questionEn": "The conchae (turbinates) are in the:",
    "questionHi": "तंत्रिका तंत्र के मुख्य भाग कौन से हैं?",
    "optionsEn": [
      "Larynx",
      "Nasal cavity",
      "Pharynx",
      "Bronchi"
    ],
    "optionsHi": [
      "केवल मस्तिष्क",
      "केंद्रीय और परिधीय तंत्रिका तंत्र",
      "केवल मेरुरज्जु",
      "केवल तंत्रिकाएं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Nasal conchae (superior, middle, inferior) increase surface area for warming/filtering air.",
    "explanationHi": "तंत्रिका तंत्र में CNS (मस्तिष्क, मेरुरज्जु) और PNS (अन्य तंत्रिकाएं) हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-819",
    "questionEn": "The costophrenic angle is:",
    "questionHi": "कपाल तंत्रिकाएं (Cranial Nerves) कितनी होती हैं?",
    "optionsEn": [
      "Between ribs",
      "Between lung and diaphragm",
      "At the carina",
      "In the mediastinum"
    ],
    "optionsHi": [
      "10 जोड़े",
      "12 जोड़े",
      "31 जोड़े",
      "33 जोड़े"
    ],
    "correctAnswer": 1,
    "explanationEn": "Costophrenic angle is where diaphragm meets chest wall; blunted in pleural effusion.",
    "explanationHi": "12 जोड़े कपाल तंत्रिकाएं मस्तिष्क से निकलती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-820",
    "questionEn": "Total lung capacity (TLC) is approximately:",
    "questionHi": "मेरुरज्जु तंत्रिकाएं (Spinal Nerves) कितनी होती हैं?",
    "optionsEn": [
      "1500 mL",
      "3000 mL",
      "4500 mL",
      "6000 mL"
    ],
    "optionsHi": [
      "12 जोड़े",
      "31 जोड़े",
      "33 जोड़े",
      "50 जोड़े"
    ],
    "correctAnswer": 3,
    "explanationEn": "TLC ≈ 6000 mL (all volumes combined); varies with age, sex, height.",
    "explanationHi": "31 जोड़े मेरुरज्जु तंत्रिकाएं रीढ़ की हड्डी से निकलती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-821",
    "questionEn": "The respiratory membrane consists of:",
    "questionHi": "न्यूरॉन (Neuron) क्या है?",
    "optionsEn": [
      "Alveolar and capillary walls",
      "Bronchial walls",
      "Pleural membranes",
      "Cartilage rings"
    ],
    "optionsHi": [
      "रक्त कोशिका",
      "तंत्रिका कोशिका",
      "हड्डी कोशिका",
      "पेशी कोशिका"
    ],
    "correctAnswer": 0,
    "explanationEn": "Respiratory membrane: alveolar epithelium + fused basement membranes + capillary endothelium.",
    "explanationHi": "न्यूरॉन तंत्रिका तंत्र की मूल कार्यात्मक इकाई है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-822",
    "questionEn": "Residual volume is the:",
    "questionHi": "न्यूरॉन के मुख्य भाग कौन से हैं?",
    "optionsEn": [
      "Air after normal expiration",
      "Air that cannot be expelled",
      "Maximum air inhaled",
      "Dead space air"
    ],
    "optionsHi": [
      "केवल काय",
      "काय (Cell Body), डेंड्राइट्स, अक्षतंतु (Axon)",
      "केवल अक्षतंतु",
      "केवल डेंड्राइट्स"
    ],
    "correctAnswer": 1,
    "explanationEn": "Residual volume (~1200 mL) remains in lungs even after maximal expiration.",
    "explanationHi": "न्यूरॉन में काय, संकेत प्राप्त करने वाले डेंड्राइट्स और संकेत भेजने वाला अक्षतंतु होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-823",
    "questionEn": "The esophagus is approximately:",
    "questionHi": "सिनैप्स (Synapse) क्या है?",
    "optionsEn": [
      "10 cm long",
      "25 cm long",
      "40 cm long",
      "60 cm long"
    ],
    "optionsHi": [
      "न्यूरॉन का भाग",
      "दो न्यूरॉनों के बीच का जंक्शन",
      "रक्त वाहिका",
      "पेशी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Esophagus is ~25 cm (10 inches) from pharynx to stomach.",
    "explanationHi": "सिनैप्स वह स्थान है जहां एक न्यूरॉन दूसरे से संवाद करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-824",
    "questionEn": "The pyloric sphincter controls passage to the:",
    "questionHi": "अंतःस्रावी तंत्र (Endocrine System) क्या करता है?",
    "optionsEn": [
      "Esophagus",
      "Duodenum",
      "Jejunum",
      "Colon"
    ],
    "optionsHi": [
      "पाचन",
      "हार्मोन स्राव द्वारा शरीर का नियंत्रण",
      "श्वसन",
      "उत्सर्जन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pyloric sphincter regulates gastric emptying into duodenum.",
    "explanationHi": "अंतःस्रावी तंत्र हार्मोन बनाकर शरीर के कार्यों को नियंत्रित करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-825",
    "questionEn": "Villi are most numerous in the:",
    "questionHi": "पिट्यूटरी ग्रंथि को क्या कहते हैं?",
    "optionsEn": [
      "Stomach",
      "Duodenum",
      "Jejunum",
      "Ileum"
    ],
    "optionsHi": [
      "सबसे छोटी ग्रंथि",
      "मास्टर ग्रंथि (Master Gland)",
      "सबसे बड़ी ग्रंथि",
      "सहायक ग्रंथि"
    ],
    "correctAnswer": 2,
    "explanationEn": "Jejunum has most numerous and longest villi; ileum has fewer villi but has Peyer's patches.",
    "explanationHi": "पिट्यूटरी अन्य ग्रंथियों को नियंत्रित करती है इसलिए मास्टर ग्रंथि कहलाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-826",
    "questionEn": "The hepatic portal system carries blood from:",
    "questionHi": "थायरॉयड ग्रंथि कौन सा हार्मोन बनाती है?",
    "optionsEn": [
      "Heart to liver",
      "GI tract to liver",
      "Liver to heart",
      "Kidneys to liver"
    ],
    "optionsHi": [
      "इंसुलिन",
      "थायरॉक्सिन (T4)",
      "एड्रेनालिन",
      "टेस्टोस्टेरोन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hepatic portal vein carries nutrient-rich blood from GI tract to liver for processing.",
    "explanationHi": "थायरॉयड ग्रंथि T3, T4 और कैल्सीटोनिन बनाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-827",
    "questionEn": "The taeniae coli are found in the:",
    "questionHi": "इंसुलिन कौन सी ग्रंथि बनाती है?",
    "optionsEn": [
      "Small intestine",
      "Large intestine",
      "Stomach",
      "Esophagus"
    ],
    "optionsHi": [
      "थायरॉयड",
      "अग्न्याशय",
      "पिट्यूटरी",
      "अधिवृक्क"
    ],
    "correctAnswer": 1,
    "explanationEn": "Taeniae coli are three longitudinal muscle bands on colon creating haustra.",
    "explanationHi": "अग्न्याशय की बीटा कोशिकाएं इंसुलिन बनाती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-828",
    "questionEn": "Kupffer cells in the liver are:",
    "questionHi": "एड्रेनालिन (Adrenaline) कौन सी ग्रंथि बनाती है?",
    "optionsEn": [
      "Hepatocytes",
      "Macrophages",
      "Blood cells",
      "Bile cells"
    ],
    "optionsHi": [
      "थायरॉयड",
      "अधिवृक्क (Adrenal) ग्रंथि",
      "पिट्यूटरी",
      "अग्न्याशय"
    ],
    "correctAnswer": 1,
    "explanationEn": "Kupffer cells are hepatic macrophages lining sinusoids, filtering blood.",
    "explanationHi": "अधिवृक्क ग्रंथि का मेडुला एड्रेनालिन (एपिनेफ्रिन) बनाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-829",
    "questionEn": "The cerebellum controls:",
    "questionHi": "टेस्टोस्टेरोन कहां बनता है?",
    "optionsEn": [
      "Emotion",
      "Balance and coordination",
      "Speech",
      "Vision"
    ],
    "optionsHi": [
      "अंडाशय",
      "वृषण",
      "थायरॉयड",
      "पिट्यूटरी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cerebellum coordinates movement, balance, posture, and motor learning.",
    "explanationHi": "टेस्टोस्टेरोन वृषण की लेडिग कोशिकाओं में बनता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-830",
    "questionEn": "The optic chiasm is where:",
    "questionHi": "एस्ट्रोजन कहां बनता है?",
    "optionsEn": [
      "Optic nerves end",
      "Some optic nerve fibers cross",
      "Eyes focus",
      "Light is detected"
    ],
    "optionsHi": [
      "वृषण",
      "अंडाशय",
      "थायरॉयड",
      "पिट्यूटरी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Nasal retinal fibers cross at optic chiasm; temporal fibers remain ipsilateral.",
    "explanationHi": "एस्ट्रोजन मुख्यतः अंडाशय में बनता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-831",
    "questionEn": "The facial nerve is CN:",
    "questionHi": "लसीका तंत्र (Lymphatic System) का कार्य क्या है?",
    "optionsEn": [
      "V",
      "VI",
      "VII",
      "VIII"
    ],
    "optionsHi": [
      "पाचन",
      "प्रतिरक्षा और तरल वापसी",
      "श्वसन",
      "रक्त बनाना"
    ],
    "correctAnswer": 2,
    "explanationEn": "CN VII is facial nerve; controls facial expression, taste (anterior 2/3 tongue).",
    "explanationHi": "लसीका तंत्र प्रतिरक्षा प्रदान करता है और ऊतकों से तरल वापस रक्त में ले जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-832",
    "questionEn": "White matter consists mainly of:",
    "questionHi": "प्रतिरक्षा तंत्र के प्रमुख अंग कौन से हैं?",
    "optionsEn": [
      "Cell bodies",
      "Myelinated axons",
      "Dendrites",
      "Unmyelinated fibers"
    ],
    "optionsHi": [
      "केवल प्लीहा",
      "थाइमस, प्लीहा, लिम्फ नोड्स, अस्थि मज्जा",
      "केवल थाइमस",
      "केवल लिम्फ नोड्स"
    ],
    "correctAnswer": 1,
    "explanationEn": "White matter is myelinated axons; gray matter contains neuronal cell bodies.",
    "explanationHi": "प्रतिरक्षा तंत्र में कई अंग शामिल हैं जो रोगाणुओं से लड़ते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-833",
    "questionEn": "The spinal cord has how many segments?",
    "questionHi": "श्वसन तंत्र के मुख्य अंग कौन से हैं?",
    "optionsEn": [
      "26",
      "31",
      "33",
      "40"
    ],
    "optionsHi": [
      "केवल फेफड़े",
      "नाक, ग्रसनी, स्वरयंत्र, श्वासनली, फेफड़े",
      "केवल श्वासनली",
      "केवल नाक"
    ],
    "correctAnswer": 1,
    "explanationEn": "31 spinal cord segments: 8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal.",
    "explanationHi": "श्वसन तंत्र नाक से फेफड़ों तक की संरचनाओं का समूह है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-834",
    "questionEn": "Schwann cells produce myelin in the:",
    "questionHi": "ऊपरी श्वसन तंत्र में क्या शामिल है?",
    "optionsEn": [
      "CNS only",
      "PNS only",
      "Both CNS and PNS",
      "Neither"
    ],
    "optionsHi": [
      "फेफड़े",
      "नाक, ग्रसनी, स्वरयंत्र",
      "श्वासनली",
      "श्वसनी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Schwann cells myelinate PNS; oligodendrocytes myelinate CNS.",
    "explanationHi": "ऊपरी श्वसन तंत्र में नाक, ग्रसनी और स्वरयंत्र शामिल हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-835",
    "questionEn": "The renal cortex contains:",
    "questionHi": "निचले श्वसन तंत्र में क्या शामिल है?",
    "optionsEn": [
      "Pyramids",
      "Glomeruli",
      "Calyces",
      "Papillae"
    ],
    "optionsHi": [
      "नाक, ग्रसनी",
      "श्वासनली, श्वसनी, फेफड़े",
      "केवल फेफड़े",
      "केवल श्वासनली"
    ],
    "correctAnswer": 1,
    "explanationEn": "Glomeruli and convoluted tubules are in cortex; loops of Henle and collecting ducts in medulla.",
    "explanationHi": "निचले श्वसन तंत्र में श्वासनली, श्वसनी और फेफड़े शामिल हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-836",
    "questionEn": "Normal urine output is approximately:",
    "questionHi": "पाचन तंत्र के मुख्य अंग कौन से हैं?",
    "optionsEn": [
      "0.5-1 L/day",
      "1-2 L/day",
      "3-4 L/day",
      "5-6 L/day"
    ],
    "optionsHi": [
      "केवल आमाशय",
      "मुंह, ग्रसिका, आमाशय, आंतें",
      "केवल आंतें",
      "केवल यकृत"
    ],
    "correctAnswer": 1,
    "explanationEn": "Normal urine output: 1-2 L/day (about 1 mL/kg/hr); oliguria <400 mL/day.",
    "explanationHi": "पाचन तंत्र आहार नाल (मुंह से गुदा तक) और सहायक अंगों का समूह है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-837",
    "questionEn": "The external urethral sphincter is:",
    "questionHi": "पाचन तंत्र के सहायक अंग कौन से हैं?",
    "optionsEn": [
      "Smooth muscle",
      "Skeletal muscle",
      "Cardiac muscle",
      "Absent"
    ],
    "optionsHi": [
      "केवल यकृत",
      "लार ग्रंथियां, यकृत, पित्ताशय, अग्न्याशय",
      "केवल अग्न्याशय",
      "केवल पित्ताशय"
    ],
    "correctAnswer": 1,
    "explanationEn": "External sphincter is voluntary (skeletal); internal sphincter is involuntary (smooth).",
    "explanationHi": "ये अंग पाचक रस बनाते हैं लेकिन भोजन सीधे इनसे नहीं गुजरता।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-838",
    "questionEn": "The kidneys receive what percentage of cardiac output?",
    "questionHi": "मूत्र तंत्र के मुख्य अंग कौन से हैं?",
    "optionsEn": [
      "5%",
      "10%",
      "20-25%",
      "40%"
    ],
    "optionsHi": [
      "केवल वृक्क",
      "वृक्क, मूत्रवाहिनी, मूत्राशय, मूत्रमार्ग",
      "केवल मूत्राशय",
      "केवल मूत्रमार्ग"
    ],
    "correctAnswer": 2,
    "explanationEn": "Kidneys receive ~20-25% of cardiac output (~1200 mL/min) for filtration.",
    "explanationHi": "मूत्र तंत्र वृक्क से मूत्रमार्ग तक की संरचनाओं का समूह है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-839",
    "questionEn": "Aldosterone acts primarily on the:",
    "questionHi": "पुरुष प्रजनन तंत्र के मुख्य अंग कौन से हैं?",
    "optionsEn": [
      "PCT",
      "DCT and collecting duct",
      "Loop of Henle",
      "Glomerulus"
    ],
    "optionsHi": [
      "केवल वृषण",
      "वृषण, अधिवृषण, वास डेफरेंस, प्रोस्टेट, लिंग",
      "केवल लिंग",
      "केवल प्रोस्टेट"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aldosterone increases Na+ reabsorption and K+ secretion in DCT and collecting duct.",
    "explanationHi": "पुरुष प्रजनन तंत्र शुक्राणु बनाने और संचारित करने वाले अंगों का समूह है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-840",
    "questionEn": "The vas deferens connects:",
    "questionHi": "महिला प्रजनन तंत्र के मुख्य अंग कौन से हैं?",
    "optionsEn": [
      "Testis to epididymis",
      "Epididymis to urethra",
      "Bladder to urethra",
      "Prostate to seminal vesicle"
    ],
    "optionsHi": [
      "केवल अंडाशय",
      "अंडाशय, फैलोपियन ट्यूब, गर्भाशय, योनि",
      "केवल गर्भाशय",
      "केवल योनि"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vas (ductus) deferens carries sperm from epididymis to ejaculatory duct then urethra.",
    "explanationHi": "महिला प्रजनन तंत्र अंडाणु बनाने और गर्भधारण के लिए अंगों का समूह है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-841",
    "questionEn": "Spermatogenesis occurs in the:",
    "questionHi": "शरीर की सबसे बड़ी धमनी कौन सी है?",
    "optionsEn": [
      "Epididymis",
      "Seminiferous tubules",
      "Prostate",
      "Vas deferens"
    ],
    "optionsHi": [
      "फुफ्फुसीय धमनी",
      "महाधमनी (Aorta)",
      "कैरोटिड",
      "फीमोरल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Seminiferous tubules in testes produce sperm; epididymis stores and matures them.",
    "explanationHi": "महाधमनी शरीर की सबसे बड़ी धमनी है जो बाएं निलय से निकलती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-842",
    "questionEn": "The prostate gland contributes:",
    "questionHi": "शरीर की सबसे बड़ी शिरा कौन सी है?",
    "optionsEn": [
      "10% of semen",
      "30% of semen",
      "60% of semen",
      "90% of semen"
    ],
    "optionsHi": [
      "जुगुलर",
      "इंफीरियर वेना कावा (IVC)",
      "पोर्टल",
      "रीनल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Prostate contributes ~30%; seminal vesicles ~60%; bulbourethral glands ~5%.",
    "explanationHi": "IVC शरीर के निचले भाग से रक्त एकत्र करने वाली सबसे बड़ी शिरा है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-843",
    "questionEn": "The myometrium is the:",
    "questionHi": "शरीर की सबसे लंबी तंत्रिका कौन सी है?",
    "optionsEn": [
      "Uterine lining",
      "Uterine muscle",
      "Outer covering",
      "Cervix"
    ],
    "optionsHi": [
      "फीमोरल",
      "सायटिक",
      "वेगस",
      "फ्रेनिक"
    ],
    "correctAnswer": 1,
    "explanationEn": "Myometrium is thick smooth muscle; endometrium is lining; perimetrium is outer serosa.",
    "explanationHi": "सायटिक तंत्रिका शरीर की सबसे लंबी और मोटी तंत्रिका है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-844",
    "questionEn": "The corpus albicans is:",
    "questionHi": "शरीर की सबसे बड़ी पेशी कौन सी है?",
    "optionsEn": [
      "A developing follicle",
      "An ovulated follicle",
      "A degenerating corpus luteum",
      "A hormone"
    ],
    "optionsHi": [
      "बाइसेप्स",
      "ग्लूटियस मैक्सिमस",
      "क्वाड्रिसेप्स",
      "पेक्टोरालिस"
    ],
    "correctAnswer": 2,
    "explanationEn": "Corpus luteum degenerates to white corpus albicans if no pregnancy occurs.",
    "explanationHi": "ग्लूटियस मैक्सिमस (नितंब की पेशी) शरीर की सबसे बड़ी पेशी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-845",
    "questionEn": "The stratum corneum is the:",
    "questionHi": "शरीर की सबसे छोटी पेशी कौन सी है?",
    "optionsEn": [
      "Deepest layer",
      "Outermost layer",
      "Middle layer",
      "Living layer"
    ],
    "optionsHi": [
      "ग्लूटियस",
      "स्टेपीडियस",
      "बाइसेप्स",
      "डेल्टॉयड"
    ],
    "correctAnswer": 1,
    "explanationEn": "Stratum corneum is outermost layer of dead, keratinized cells; provides barrier.",
    "explanationHi": "स्टेपीडियस मध्य कान में सबसे छोटी पेशी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-846",
    "questionEn": "Langerhans cells are involved in:",
    "questionHi": "शरीर का सबसे कठोर पदार्थ कौन सा है?",
    "optionsEn": [
      "Pigmentation",
      "Immune response",
      "Touch sensation",
      "Hair growth"
    ],
    "optionsHi": [
      "हड्डी",
      "दांत का इनेमल",
      "नाखून",
      "उपास्थि"
    ],
    "correctAnswer": 1,
    "explanationEn": "Langerhans cells in epidermis are antigen-presenting cells for immune surveillance.",
    "explanationHi": "दांत का इनेमल शरीर का सबसे कठोर पदार्थ है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-847",
    "questionEn": "The arrector pili muscle causes:",
    "questionHi": "प्रौढ़ व्यक्ति के दांत कितने होते हैं?",
    "optionsEn": [
      "Sweating",
      "Goosebumps",
      "Hair growth",
      "Oil secretion"
    ],
    "optionsHi": [
      "20",
      "28",
      "32",
      "36"
    ],
    "correctAnswer": 1,
    "explanationEn": "Arrector pili contracts in cold/fear, causing hair to stand up (goosebumps).",
    "explanationHi": "प्रौढ़ व्यक्ति के 32 स्थायी दांत होते हैं (8 इंसाइजर, 4 कैनाइन, 8 प्रीमोलर, 12 मोलर)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-848",
    "questionEn": "The lens of the eye is:",
    "questionHi": "बच्चों के दूध के दांत कितने होते हैं?",
    "optionsEn": [
      "Vascular",
      "Avascular",
      "Muscular",
      "Nervous"
    ],
    "optionsHi": [
      "16",
      "20",
      "24",
      "28"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lens is avascular and transparent; receives nutrients from aqueous humor.",
    "explanationHi": "बच्चों में 20 दूध के दांत होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-849",
    "questionEn": "The malleus, incus, and stapes are in the:",
    "questionHi": "रक्त में कितने प्रकार की कोशिकाएं होती हैं?",
    "optionsEn": [
      "Outer ear",
      "Middle ear",
      "Inner ear",
      "Nasopharynx"
    ],
    "optionsHi": [
      "2",
      "3 (RBC, WBC, प्लेटलेट्स)",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "explanationEn": "These three ossicles in middle ear transmit vibrations from eardrum to oval window.",
    "explanationHi": "रक्त में लाल रक्त कोशिकाएं, श्वेत रक्त कोशिकाएं और प्लेटलेट्स होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-850",
    "questionEn": "The semicircular canals detect:",
    "questionHi": "RBC (लाल रक्त कोशिका) का मुख्य कार्य क्या है?",
    "optionsEn": [
      "Sound",
      "Linear movement",
      "Rotational movement",
      "Static position"
    ],
    "optionsHi": [
      "संक्रमण से लड़ना",
      "ऑक्सीजन ले जाना",
      "रक्त का थक्का बनाना",
      "हार्मोन ले जाना"
    ],
    "correctAnswer": 2,
    "explanationEn": "Semicircular canals detect angular/rotational acceleration; utricle and saccule detect linear.",
    "explanationHi": "RBC हीमोग्लोबिन द्वारा ऑक्सीजन ले जाती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-851",
    "questionEn": "The popliteal fossa is behind the:",
    "questionHi": "WBC (श्वेत रक्त कोशिका) का मुख्य कार्य क्या है?",
    "optionsEn": [
      "Elbow",
      "Knee",
      "Hip",
      "Ankle"
    ],
    "optionsHi": [
      "ऑक्सीजन ले जाना",
      "संक्रमण से लड़ना (प्रतिरक्षा)",
      "रक्त का थक्का बनाना",
      "हार्मोन ले जाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Popliteal fossa is the diamond-shaped space posterior to knee, containing popliteal artery/vein.",
    "explanationHi": "WBC शरीर की प्रतिरक्षा में मदद करती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-852",
    "questionEn": "The greater trochanter is part of the:",
    "questionHi": "प्लेटलेट्स का मुख्य कार्य क्या है?",
    "optionsEn": [
      "Humerus",
      "Tibia",
      "Femur",
      "Pelvis"
    ],
    "optionsHi": [
      "ऑक्सीजन ले जाना",
      "संक्रमण से लड़ना",
      "रक्त का थक्का बनाना",
      "हार्मोन ले जाना"
    ],
    "correctAnswer": 2,
    "explanationEn": "Greater trochanter is a lateral projection of proximal femur; site of muscle attachments.",
    "explanationHi": "प्लेटलेट्स रक्तस्राव रोकने के लिए थक्का बनाने में मदद करती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-853",
    "questionEn": "Compact bone is also called:",
    "questionHi": "शरीर में कितने प्रतिशत पानी होता है?",
    "optionsEn": [
      "Cancellous bone",
      "Cortical bone",
      "Trabecular bone",
      "Spongy bone"
    ],
    "optionsHi": [
      "40%",
      "50-60%",
      "60-70%",
      "80%"
    ],
    "correctAnswer": 1,
    "explanationEn": "Compact/cortical bone is dense outer layer; cancellous/spongy/trabecular is inner lattice.",
    "explanationHi": "वयस्क शरीर में लगभग 60-70% पानी होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-854",
    "questionEn": "The rectus abdominis muscle:",
    "questionHi": "शरीर के किस भाग में सबसे अधिक पानी होता है?",
    "optionsEn": [
      "Rotates trunk",
      "Flexes trunk",
      "Extends trunk",
      "Laterally flexes only"
    ],
    "optionsHi": [
      "हड्डी",
      "त्वचा",
      "मस्तिष्क और फेफड़े",
      "पेशी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rectus abdominis ('six-pack') flexes the vertebral column.",
    "explanationHi": "मस्तिष्क और फेफड़ों में लगभग 80% पानी होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-855",
    "questionEn": "The moderator band is found in the:",
    "questionHi": "शरीर में कुल कितना रक्त होता है?",
    "optionsEn": [
      "Right atrium",
      "Right ventricle",
      "Left atrium",
      "Left ventricle"
    ],
    "optionsHi": [
      "2-3 लीटर",
      "4-5 लीटर",
      "7-8 लीटर",
      "10 लीटर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Moderator band (septomarginal trabecula) carries conduction fibers to anterior papillary muscle.",
    "explanationHi": "वयस्क शरीर में लगभग 4-5 लीटर रक्त होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-856",
    "questionEn": "The pericardium has how many layers?",
    "questionHi": "हृदय प्रति मिनट कितनी बार धड़कता है?",
    "optionsEn": [
      "1",
      "2",
      "3",
      "4"
    ],
    "optionsHi": [
      "40-50",
      "60-100",
      "120-150",
      "150-200"
    ],
    "correctAnswer": 2,
    "explanationEn": "Pericardium: fibrous pericardium (outer), parietal serous, visceral serous (epicardium).",
    "explanationHi": "सामान्य वयस्क में हृदय गति 60-100 बीट/मिनट होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-857",
    "questionEn": "The thyroid cartilage is also called:",
    "questionHi": "सामान्य श्वास दर (वयस्क) प्रति मिनट कितनी होती है?",
    "optionsEn": [
      "Cricoid",
      "Epiglottis",
      "Adam's apple",
      "Arytenoid"
    ],
    "optionsHi": [
      "8-10",
      "12-20",
      "25-30",
      "35-40"
    ],
    "correctAnswer": 2,
    "explanationEn": "Thyroid cartilage forms the laryngeal prominence (Adam's apple), larger in males.",
    "explanationHi": "वयस्कों में सामान्य श्वास दर 12-20 बार/मिनट होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-858",
    "questionEn": "The rugae are folds in the:",
    "questionHi": "सामान्य रक्तचाप (BP) कितना होता है?",
    "optionsEn": [
      "Esophagus",
      "Stomach",
      "Small intestine",
      "Large intestine"
    ],
    "optionsHi": [
      "80/60 mmHg",
      "120/80 mmHg",
      "140/100 mmHg",
      "160/110 mmHg"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rugae are gastric folds that allow stomach expansion; flatten when stomach is full.",
    "explanationHi": "सामान्य रक्तचाप लगभग 120/80 mmHg होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-859",
    "questionEn": "The myelin sheath increases:",
    "questionHi": "सामान्य शरीर का तापमान कितना होता है?",
    "optionsEn": [
      "Impulse speed",
      "Impulse strength",
      "Cell body size",
      "Dendrite number"
    ],
    "optionsHi": [
      "35°C",
      "36.1-37.2°C (98.6°F)",
      "38°C",
      "39°C"
    ],
    "correctAnswer": 0,
    "explanationEn": "Myelin enables saltatory conduction, dramatically increasing nerve impulse speed.",
    "explanationHi": "सामान्य शरीर का तापमान लगभग 37°C (98.6°F) होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-860",
    "questionEn": "The renal pelvis connects to the:",
    "questionHi": "शरीर की प्रणालियां (Body Systems) कितनी हैं?",
    "optionsEn": [
      "Cortex",
      "Medulla",
      "Ureter",
      "Bladder"
    ],
    "optionsHi": [
      "6",
      "8",
      "11",
      "15"
    ],
    "correctAnswer": 2,
    "explanationEn": "Renal pelvis collects urine from calyces and narrows to become ureter.",
    "explanationHi": "शरीर में 11 प्रमुख प्रणालियां हैं जो मिलकर काम करती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-861",
    "questionEn": "The fimbriae are part of the:",
    "questionHi": "शारीरिक स्थिति (Anatomical Position) में शरीर कैसा होता है?",
    "optionsEn": [
      "Uterus",
      "Ovary",
      "Fallopian tube",
      "Vagina"
    ],
    "optionsHi": [
      "लेटा हुआ",
      "सीधा खड़ा, हथेलियां आगे, पैर एक साथ",
      "बैठा हुआ",
      "झुका हुआ"
    ],
    "correctAnswer": 2,
    "explanationEn": "Fimbriae are finger-like projections at the infundibulum that catch ovulated eggs.",
    "explanationHi": "शारीरिक स्थिति में शरीर सीधा, चेहरा सामने, हथेलियां आगे होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-862",
    "questionEn": "The lacrimal glands produce:",
    "questionHi": "मीडियल (Medial) का क्या अर्थ है?",
    "optionsEn": [
      "Cerumen",
      "Tears",
      "Sebum",
      "Mucus"
    ],
    "optionsHi": [
      "बाहर की ओर",
      "शरीर की मध्य रेखा की ओर",
      "ऊपर की ओर",
      "नीचे की ओर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lacrimal glands above lateral eye produce tears; drain via nasolacrimal duct.",
    "explanationHi": "मीडियल का अर्थ है शरीर की मध्य रेखा के करीब।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-863",
    "questionEn": "The antecubital fossa is in front of the:",
    "questionHi": "लेटरल (Lateral) का क्या अर्थ है?",
    "optionsEn": [
      "Knee",
      "Elbow",
      "Hip",
      "Shoulder"
    ],
    "optionsHi": [
      "मध्य रेखा की ओर",
      "मध्य रेखा से दूर (बाहर की ओर)",
      "ऊपर की ओर",
      "नीचे की ओर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Antecubital fossa (cubital fossa) is anterior to elbow; used for venipuncture.",
    "explanationHi": "लेटरल का अर्थ है शरीर की मध्य रेखा से दूर।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-864",
    "questionEn": "The talus articulates with the:",
    "questionHi": "प्रॉक्सिमल (Proximal) का क्या अर्थ है?",
    "optionsEn": [
      "Femur",
      "Tibia and fibula",
      "Calcaneus only",
      "Toes"
    ],
    "optionsHi": [
      "दूर",
      "शरीर के जुड़ाव या उत्पत्ति के करीब",
      "ऊपर",
      "नीचे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Talus articulates with tibia and fibula above (ankle joint) and calcaneus below.",
    "explanationHi": "प्रॉक्सिमल का अर्थ है अंग के जुड़ाव के करीब।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-865",
    "questionEn": "The latissimus dorsi is a:",
    "questionHi": "डिस्टल (Distal) का क्या अर्थ है?",
    "optionsEn": [
      "Back muscle",
      "Chest muscle",
      "Arm muscle",
      "Leg muscle"
    ],
    "optionsHi": [
      "करीब",
      "शरीर के जुड़ाव या उत्पत्ति से दूर",
      "ऊपर",
      "नीचे"
    ],
    "correctAnswer": 0,
    "explanationEn": "Latissimus dorsi is a broad back muscle that adducts and medially rotates arm.",
    "explanationHi": "डिस्टल का अर्थ है अंग के जुड़ाव से दूर।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-866",
    "questionEn": "Tunica media is the:",
    "questionHi": "सुपीरियर (Superior) का क्या अर्थ है?",
    "optionsEn": [
      "Inner vessel layer",
      "Middle vessel layer",
      "Outer vessel layer",
      "Valve layer"
    ],
    "optionsHi": [
      "नीचे",
      "ऊपर की ओर",
      "आगे",
      "पीछे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vessel layers: intima (inner), media (middle - smooth muscle), adventitia (outer).",
    "explanationHi": "सुपीरियर का अर्थ है सिर की ओर या ऊपर।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-867",
    "questionEn": "The pleural cavity normally contains:",
    "questionHi": "इंफीरियर (Inferior) का क्या अर्थ है?",
    "optionsEn": [
      "Air",
      "A small amount of fluid",
      "Blood",
      "Lymph"
    ],
    "optionsHi": [
      "ऊपर",
      "नीचे की ओर",
      "आगे",
      "पीछे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pleural cavity has ~10-20 mL of serous fluid for lubrication and surface tension.",
    "explanationHi": "इंफीरियर का अर्थ है पैरों की ओर या नीचे।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-868",
    "questionEn": "The rectum is approximately:",
    "questionHi": "एंटीरियर (Anterior/Ventral) का क्या अर्थ है?",
    "optionsEn": [
      "5 cm",
      "12 cm",
      "25 cm",
      "40 cm"
    ],
    "optionsHi": [
      "पीछे",
      "आगे की ओर",
      "ऊपर",
      "नीचे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rectum is ~12 cm long; connects sigmoid colon to anal canal.",
    "explanationHi": "एंटीरियर का अर्थ है शरीर के सामने की ओर।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-869",
    "questionEn": "The reticular formation is involved in:",
    "questionHi": "पोस्टीरियर (Posterior/Dorsal) का क्या अर्थ है?",
    "optionsEn": [
      "Vision",
      "Arousal and consciousness",
      "Memory storage",
      "Language"
    ],
    "optionsHi": [
      "आगे",
      "पीछे की ओर",
      "ऊपर",
      "नीचे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Reticular formation in brainstem regulates consciousness, arousal, and sleep-wake cycles.",
    "explanationHi": "पोस्टीरियर का अर्थ है शरीर के पीछे की ओर।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-870",
    "questionEn": "The renal columns are extensions of:",
    "questionHi": "सुपरफिशियल (Superficial) का क्या अर्थ है?",
    "optionsEn": [
      "Medulla",
      "Cortex",
      "Pelvis",
      "Calyces"
    ],
    "optionsHi": [
      "गहरा",
      "सतह के करीब",
      "दूर",
      "बीच में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Renal columns are cortical tissue extending between medullary pyramids.",
    "explanationHi": "सुपरफिशियल का अर्थ है त्वचा या सतह के करीब।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-871",
    "questionEn": "Oxytocin causes:",
    "questionHi": "डीप (Deep) का क्या अर्थ है?",
    "optionsEn": [
      "Milk production",
      "Uterine contractions",
      "Follicle development",
      "Testosterone release"
    ],
    "optionsHi": [
      "सतह पर",
      "सतह से दूर (गहरा)",
      "ऊपर",
      "नीचे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Oxytocin stimulates uterine contractions in labor and milk let-down reflex.",
    "explanationHi": "डीप का अर्थ है त्वचा या सतह से दूर, अंदर की ओर।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-872",
    "questionEn": "The sclera is the:",
    "questionHi": "सैजिटल प्लेन (Sagittal Plane) शरीर को कैसे विभाजित करता है?",
    "optionsEn": [
      "Colored part of eye",
      "White of the eye",
      "Light-sensitive layer",
      "Focusing structure"
    ],
    "optionsHi": [
      "ऊपर और नीचे",
      "दाएं और बाएं भागों में",
      "आगे और पीछे",
      "तिरछे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sclera is the white, fibrous outer coat of eyeball; continuous with cornea anteriorly.",
    "explanationHi": "सैजिटल प्लेन शरीर को लंबवत रूप से दाएं और बाएं में विभाजित करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-873",
    "questionEn": "The axilla contains the:",
    "questionHi": "कोरोनल/फ्रंटल प्लेन (Coronal/Frontal Plane) शरीर को कैसे विभाजित करता है?",
    "optionsEn": [
      "Femoral vessels",
      "Brachial plexus",
      "Lumbar plexus",
      "Sciatic nerve"
    ],
    "optionsHi": [
      "दाएं और बाएं",
      "आगे और पीछे भागों में",
      "ऊपर और नीचे",
      "तिरछे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Axilla (armpit) contains brachial plexus, axillary vessels, and lymph nodes.",
    "explanationHi": "कोरोनल प्लेन शरीर को आगे (एंटीरियर) और पीछे (पोस्टीरियर) में विभाजित करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-874",
    "questionEn": "The spinous process projects:",
    "questionHi": "ट्रांसवर्स/हॉरिजॉन्टल प्लेन (Transverse/Horizontal Plane) शरीर को कैसे विभाजित करता है?",
    "optionsEn": [
      "Anteriorly",
      "Posteriorly",
      "Laterally",
      "Superiorly"
    ],
    "optionsHi": [
      "दाएं और बाएं",
      "आगे और पीछे",
      "ऊपर और नीचे भागों में",
      "तिरछे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Spinous process projects posteriorly; transverse processes project laterally.",
    "explanationHi": "ट्रांसवर्स प्लेन शरीर को ऊपर और नीचे भागों में विभाजित करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-875",
    "questionEn": "The pectoralis major:",
    "questionHi": "शरीर के चार मुख्य क्वाड्रेंट (Quadrants) कौन से हैं?",
    "optionsEn": [
      "Extends the arm",
      "Adducts the arm",
      "Abducts the arm",
      "Rotates the trunk"
    ],
    "optionsHi": [
      "केवल दो",
      "RUQ, LUQ, RLQ, LLQ",
      "तीन",
      "पांच"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pectoralis major adducts, flexes, and medially rotates the arm.",
    "explanationHi": "पेट को 4 क्वाड्रेंट में विभाजित किया जाता है: दाएं ऊपरी, बाएं ऊपरी, दाएं निचला, बाएं निचला।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-876",
    "questionEn": "The celiac trunk supplies:",
    "questionHi": "यकृत किस क्वाड्रेंट में है?",
    "optionsEn": [
      "Kidneys",
      "Upper GI organs",
      "Pelvis",
      "Lower limbs"
    ],
    "optionsHi": [
      "LUQ",
      "RUQ (दाएं ऊपरी)",
      "RLQ",
      "LLQ"
    ],
    "correctAnswer": 1,
    "explanationEn": "Celiac trunk supplies liver, stomach, spleen, and duodenum (foregut derivatives).",
    "explanationHi": "यकृत मुख्यतः दाएं ऊपरी क्वाड्रेंट में है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-877",
    "questionEn": "The nasopharynx is posterior to the:",
    "questionHi": "प्लीहा किस क्वाड्रेंट में है?",
    "optionsEn": [
      "Mouth",
      "Nasal cavity",
      "Larynx",
      "Trachea"
    ],
    "optionsHi": [
      "RUQ",
      "LUQ (बाएं ऊपरी)",
      "RLQ",
      "LLQ"
    ],
    "correctAnswer": 1,
    "explanationEn": "Nasopharynx is behind nasal cavity; oropharynx behind mouth; laryngopharynx above larynx.",
    "explanationHi": "प्लीहा बाएं ऊपरी क्वाड्रेंट में है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-878",
    "questionEn": "The greater curvature of stomach is:",
    "questionHi": "आंत्रपुच्छ (Appendix) किस क्वाड्रेंट में है?",
    "optionsEn": [
      "On the right",
      "On the left (convex)",
      "Superior",
      "Inferior"
    ],
    "optionsHi": [
      "RUQ",
      "LUQ",
      "RLQ (दाएं निचले)",
      "LLQ"
    ],
    "correctAnswer": 1,
    "explanationEn": "Greater curvature is the long convex lateral border; lesser curvature is short medial border.",
    "explanationHi": "आंत्रपुच्छ दाएं निचले क्वाड्रेंट में है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-879",
    "questionEn": "The pons is located:",
    "questionHi": "सिग्मॉयड बृहदान्त्र किस क्वाड्रेंट में है?",
    "optionsEn": [
      "Above the medulla",
      "Below the medulla",
      "In the cerebrum",
      "In the spinal cord"
    ],
    "optionsHi": [
      "RUQ",
      "LUQ",
      "RLQ",
      "LLQ (बाएं निचले)"
    ],
    "correctAnswer": 0,
    "explanationEn": "Brainstem from superior to inferior: midbrain, pons, medulla oblongata.",
    "explanationHi": "सिग्मॉयड बृहदान्त्र बाएं निचले क्वाड्रेंट में है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-880",
    "questionEn": "Creatinine is used to measure:",
    "questionHi": "वक्षीय गुहा (Thoracic Cavity) में कौन से अंग हैं?",
    "optionsEn": [
      "Blood glucose",
      "GFR/kidney function",
      "Blood pressure",
      "Urine concentration"
    ],
    "optionsHi": [
      "यकृत, आमाशय",
      "हृदय, फेफड़े, ग्रसिका",
      "वृक्क, मूत्राशय",
      "गर्भाशय, अंडाशय"
    ],
    "correctAnswer": 1,
    "explanationEn": "Creatinine clearance estimates GFR; elevated serum creatinine indicates reduced kidney function.",
    "explanationHi": "वक्षीय गुहा में हृदय, फेफड़े और अन्य वक्षीय संरचनाएं हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-881",
    "questionEn": "The mons pubis is:",
    "questionHi": "उदर गुहा (Abdominal Cavity) में कौन से अंग हैं?",
    "optionsEn": [
      "Part of vagina",
      "Fat pad over pubic symphysis",
      "A gland",
      "Part of uterus"
    ],
    "optionsHi": [
      "हृदय, फेफड़े",
      "आमाशय, यकृत, आंतें, प्लीहा",
      "वृक्क, मूत्राशय",
      "केवल मस्तिष्क"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mons pubis is rounded fatty area over pubic symphysis, covered with hair after puberty.",
    "explanationHi": "उदर गुहा में पाचन तंत्र के अधिकांश अंग हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-882",
    "questionEn": "Meibomian glands produce:",
    "questionHi": "श्रोणि गुहा (Pelvic Cavity) में कौन से अंग हैं?",
    "optionsEn": [
      "Tears",
      "Oily secretion for eyelids",
      "Cerumen",
      "Sweat"
    ],
    "optionsHi": [
      "हृदय",
      "यकृत",
      "मूत्राशय, प्रजनन अंग, मलाशय",
      "फेफड़े"
    ],
    "correctAnswer": 1,
    "explanationEn": "Meibomian (tarsal) glands produce oily secretion preventing tear evaporation.",
    "explanationHi": "श्रोणि गुहा में मूत्राशय, प्रजनन अंग और मलाशय हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-883",
    "questionEn": "The inguinal canal transmits the:",
    "questionHi": "डायफ्राम (Diaphragm) क्या अलग करता है?",
    "optionsEn": [
      "Femoral vessels",
      "Spermatic cord/round ligament",
      "Sciatic nerve",
      "Ureters"
    ],
    "optionsHi": [
      "सिर और गर्दन",
      "वक्ष और उदर गुहाओं को",
      "हाथ और पैर",
      "दाएं और बाएं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Inguinal canal transmits spermatic cord in males, round ligament in females.",
    "explanationHi": "डायफ्राम वक्षीय और उदर गुहाओं के बीच की पेशी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-884",
    "questionEn": "The medial malleolus is part of:",
    "questionHi": "पेरिटोनियम (Peritoneum) क्या है?",
    "optionsEn": [
      "Tibia",
      "Fibula",
      "Femur",
      "Talus"
    ],
    "optionsHi": [
      "हृदय की झिल्ली",
      "उदर गुहा की सीरस झिल्ली",
      "फेफड़े की झिल्ली",
      "मस्तिष्क की झिल्ली"
    ],
    "correctAnswer": 0,
    "explanationEn": "Medial malleolus is the tibial projection; lateral malleolus is fibular.",
    "explanationHi": "पेरिटोनियम उदर गुहा और उसके अंगों को ढकने वाली झिल्ली है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-885",
    "questionEn": "A motor unit consists of:",
    "questionHi": "प्लूरा (Pleura) क्या है?",
    "optionsEn": [
      "A single muscle fiber",
      "One motor neuron and all its fibers",
      "All muscles in a region",
      "The nerve alone"
    ],
    "optionsHi": [
      "हृदय की झिल्ली",
      "उदर की झिल्ली",
      "फेफड़ों की सीरस झिल्ली",
      "मस्तिष्क की झिल्ली"
    ],
    "correctAnswer": 1,
    "explanationEn": "Motor unit = one motor neuron + all muscle fibers it innervates.",
    "explanationHi": "प्लूरा फेफड़ों को ढकने वाली दोहरी झिल्ली है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-886",
    "questionEn": "The saphenous vein is:",
    "questionHi": "पेरीकार्डियम (Pericardium) क्या है?",
    "optionsEn": [
      "Deep",
      "Superficial",
      "In the arm",
      "Arterial"
    ],
    "optionsHi": [
      "फेफड़े की झिल्ली",
      "हृदय की सीरस झिल्ली",
      "उदर की झिल्ली",
      "मस्तिष्क की झिल्ली"
    ],
    "correctAnswer": 1,
    "explanationEn": "Great saphenous vein is the longest superficial vein; runs medially up the leg.",
    "explanationHi": "पेरीकार्डियम हृदय को ढकने वाली दोहरी झिल्ली है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-887",
    "questionEn": "Pneumothorax is:",
    "questionHi": "मेनिन्जेस (Meninges) क्या हैं?",
    "optionsEn": [
      "Fluid in pleural space",
      "Air in pleural space",
      "Blood in pleural space",
      "Pus in pleural space"
    ],
    "optionsHi": [
      "हृदय की झिल्ली",
      "फेफड़े की झिल्ली",
      "मस्तिष्क और मेरुरज्जु की तीन झिल्लियां",
      "उदर की झिल्ली"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pneumothorax = air in pleural space; hemothorax = blood; empyema = pus.",
    "explanationHi": "मेनिन्जेस (ड्यूरा, अरैक्नॉयड, पिया) मस्तिष्क और मेरुरज्जु को ढकती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-888",
    "questionEn": "Mesentery provides:",
    "questionHi": "CSF (मस्तिष्कमेरु द्रव) कहां बनता है?",
    "optionsEn": [
      "Digestion",
      "Blood supply to intestines",
      "Absorption",
      "Storage"
    ],
    "optionsHi": [
      "मस्तिष्क के ऊपर",
      "मस्तिष्क के वेंट्रिकल्स में कोरॉयड प्लेक्सस द्वारा",
      "मेरुरज्जु में",
      "खोपड़ी में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mesentery carries blood vessels, lymphatics, and nerves to the intestines.",
    "explanationHi": "CSF कोरॉयड प्लेक्सस द्वारा मस्तिष्क के वेंट्रिकल्स में बनता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-889",
    "questionEn": "The hippocampus is essential for:",
    "questionHi": "CSF का कार्य क्या है?",
    "optionsEn": [
      "Vision",
      "Memory formation",
      "Movement",
      "Hearing"
    ],
    "optionsHi": [
      "पाचन",
      "मस्तिष्क और मेरुरज्जु की सुरक्षा और पोषण",
      "रक्त बनाना",
      "हार्मोन बनाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hippocampus is critical for converting short-term to long-term memory.",
    "explanationHi": "CSF मस्तिष्क को कुशन देता है, पोषक तत्व पहुंचाता है और अपशिष्ट हटाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-890",
    "questionEn": "The trigone is in the:",
    "questionHi": "लंबर पंक्चर (Lumbar Puncture) कहां किया जाता है?",
    "optionsEn": [
      "Kidney",
      "Ureter",
      "Bladder",
      "Urethra"
    ],
    "optionsHi": [
      "गर्दन में",
      "L3-L4 या L4-L5 इंटरस्पेस में",
      "वक्ष में",
      "सिर में"
    ],
    "correctAnswer": 2,
    "explanationEn": "Trigone is the triangular area in bladder floor; bounded by two ureteral and one urethral openings.",
    "explanationHi": "लंबर पंक्चर कमर में किया जाता है जहां मेरुरज्जु समाप्त हो चुकी है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-891",
    "questionEn": "Describe the anatomy of the blood-brain barrier and its clinical significance.",
    "questionHi": "IM इंजेक्शन के लिए सबसे आम स्थान कौन सा है?",
    "optionsEn": [],
    "optionsHi": [
      "बाहु का अगला भाग",
      "ग्लूटियल क्षेत्र (नितंब) या डेल्टॉयड",
      "जांघ का पिछला भाग",
      "पिंडली"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "IM इंजेक्शन आमतौर पर ग्लूटियल क्षेत्र या डेल्टॉयड पेशी में दिए जाते हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-892",
    "questionEn": "Describe the coronary circulation and identify the territories supplied by major coronary arteries.",
    "questionHi": "डॉर्सोग्लूटियल IM इंजेक्शन में कौन सी तंत्रिका से बचना चाहिए?",
    "optionsEn": [],
    "optionsHi": [
      "फीमोरल",
      "सायटिक तंत्रिका",
      "टिबियल",
      "रेडियल"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "डॉर्सोग्लूटियल इंजेक्शन में सायटिक तंत्रिका की चोट से बचना चाहिए।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-893",
    "questionEn": "Explain the anatomical differences between upper and lower respiratory tract infections.",
    "questionHi": "वेंट्रोग्लूटियल साइट क्यों पसंद की जाती है?",
    "optionsEn": [],
    "optionsHi": [
      "सुविधाजनक",
      "कम वसा, कोई बड़ी नस या तंत्रिका नहीं",
      "दर्दनाक",
      "असुविधाजनक"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "वेंट्रोग्लूटियल साइट सुरक्षित है क्योंकि यहां बड़ी संरचनाएं नहीं हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-894",
    "questionEn": "Describe the anatomy of the liver including its lobes, blood supply, and functional unit.",
    "questionHi": "वास्टस लेटरालिस साइट (जांघ का बाहरी भाग) किसके लिए पसंद की जाती है?",
    "optionsEn": [],
    "optionsHi": [
      "वृद्धों के लिए",
      "शिशुओं और छोटे बच्चों के लिए",
      "गर्भवती महिलाओं के लिए",
      "खिलाड़ियों के लिए"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "शिशुओं में अच्छी विकसित पेशी होने के कारण वास्टस लेटरालिस पसंद की जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-895",
    "questionEn": "Explain the dermatomal distribution and its clinical use in localizing spinal cord lesions.",
    "questionHi": "IV कैन्युलेशन के लिए कौन सी शिरा सबसे आम है?",
    "optionsEn": [],
    "optionsHi": [
      "जुगुलर",
      "हाथ या प्रकोष्ठ की सतही शिराएं",
      "फीमोरल",
      "कैरोटिड"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "हाथ और प्रकोष्ठ की सतही शिराएं IV एक्सेस के लिए सबसे आम हैं।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-896",
    "questionEn": "Describe the anatomical course of the ureters and identify three points where stones commonly lodge.",
    "questionHi": "सेंट्रल वीनस कैथेटर कहां डाले जाते हैं?",
    "optionsEn": [],
    "optionsHi": [
      "हाथ की शिरा में",
      "इंटरनल जुगुलर, सबक्लेवियन, या फीमोरल शिरा में",
      "केवल पैर में",
      "केवल सिर में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "सेंट्रल लाइन बड़ी शिराओं में डाली जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-897",
    "questionEn": "Describe the anatomy of the breast and its lymphatic drainage.",
    "questionHi": "फीमोरल पल्स किस संरचना के मध्य बिंदु पर मिलती है?",
    "optionsEn": [],
    "optionsHi": [
      "घुटने पर",
      "ASIS और प्यूबिक सिम्फिसिस के मध्य बिंदु पर",
      "टखने पर",
      "कमर में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "फीमोरल पल्स इंगुइनल लिगामेंट के मध्य बिंदु पर मिलती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-898",
    "questionEn": "A patient has absent knee jerk reflex and sensory loss over anterior thigh. Which nerve root is affected?",
    "questionHi": "एपिड्यूरल एनेस्थीसिया कहां दिया जाता है?",
    "optionsEn": [],
    "optionsHi": [
      "सबअरैक्नॉयड स्पेस में",
      "एपिड्यूरल स्पेस में (ड्यूरा के बाहर)",
      "पेशी में",
      "त्वचा के नीचे"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "एपिड्यूरल एनेस्थीसिया ड्यूरा मेटर के बाहर एपिड्यूरल स्पेस में दिया जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-899",
    "questionEn": "A newborn has bilious (green) vomiting on the first day of life. Based on anatomy, what is the likely location of obstruction?",
    "questionHi": "स्पाइनल एनेस्थीसिया कहां दिया जाता है?",
    "optionsEn": [],
    "optionsHi": [
      "एपिड्यूरल स्पेस में",
      "सबअरैक्नॉयड स्पेस में (CSF में)",
      "पेशी में",
      "त्वचा के नीचे"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "स्पाइनल एनेस्थीसिया सीधे CSF में दिया जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-900",
    "questionEn": "A patient has weakness of hand grip, numbness of medial 1.5 fingers, and claw hand deformity. Which nerve is injured?",
    "questionHi": "ट्रेकियोस्टॉमी कब की जाती है?",
    "optionsEn": [],
    "optionsHi": [
      "हृदय रोग में",
      "लंबे समय तक वायुमार्ग की आवश्यकता होने पर",
      "पैर में फ्रैक्चर में",
      "पेट दर्द में"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "ट्रेकियोस्टॉमी लंबे समय तक मैकेनिकल वेंटिलेशन या वायुमार्ग अवरोध में की जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-901",
    "questionEn": "Ipsilateral means:",
    "questionHi": "चेस्ट ट्यूब (Chest Tube) कहां डाली जाती है?",
    "optionsEn": [
      "Opposite side",
      "Same side",
      "Both sides",
      "No side"
    ],
    "optionsHi": [
      "पेट में",
      "प्लूरल स्पेस में (सेफ ट्रायंगल में)",
      "गर्दन में",
      "पीठ में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ipsilateral = same side; contralateral = opposite side; bilateral = both sides.",
    "explanationHi": "चेस्ट ट्यूब न्यूमोथोरैक्स या प्लूरल इफ्यूजन में प्लूरल स्पेस में डाली जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-902",
    "questionEn": "The epigastric region is:",
    "questionHi": "सेफ ट्रायंगल (Safe Triangle) चेस्ट ट्यूब के लिए कहां है?",
    "optionsEn": [
      "Below the umbilicus",
      "Above the umbilicus",
      "At the sides",
      "In the pelvis"
    ],
    "optionsHi": [
      "पीठ में",
      "5वीं इंटरकोस्टल स्पेस, मिडएक्सिलरी लाइन के आसपास",
      "सामने छाती में",
      "गर्दन में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Epigastric is upper central region; hypogastric is lower central region.",
    "explanationHi": "सेफ ट्रायंगल बगल में है जहां बड़ी संरचनाओं से बचा जा सकता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-903",
    "questionEn": "Visceral refers to:",
    "questionHi": "नासोगैस्ट्रिक (NG) ट्यूब कहां जाती है?",
    "optionsEn": [
      "Outer covering",
      "Inner organs",
      "Bones",
      "Muscles"
    ],
    "optionsHi": [
      "श्वासनली में",
      "नाक से आमाशय तक",
      "फेफड़ों में",
      "मूत्राशय में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Visceral relates to internal organs; parietal relates to body wall.",
    "explanationHi": "NG ट्यूब नाक से गुजरकर आमाशय में जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Introduction to Anatomy",
    "tags": [
      "introduction-to-anatomy"
    ]
  },
  {
    "id": "ANATOMY-904",
    "questionEn": "The vertebra prominens is:",
    "questionHi": "फोले कैथेटर (Foley Catheter) कहां जाती है?",
    "optionsEn": [
      "C1",
      "C7",
      "T1",
      "L5"
    ],
    "optionsHi": [
      "आमाशय में",
      "मूत्रमार्ग से मूत्राशय में",
      "फेफड़ों में",
      "हृदय में"
    ],
    "correctAnswer": 1,
    "explanationEn": "C7 has longest spinous process, easily palpable at base of neck (vertebra prominens).",
    "explanationHi": "फोले कैथेटर मूत्र निकालने के लिए मूत्राशय में डाली जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-905",
    "questionEn": "The sacroiliac joint is:",
    "questionHi": "CPR में छाती कहां दबाई जाती है?",
    "optionsEn": [
      "Freely movable",
      "Slightly movable",
      "Immovable",
      "A hinge joint"
    ],
    "optionsHi": [
      "उरोस्थि के ऊपर",
      "उरोस्थि के निचले आधे भाग पर",
      "पेट पर",
      "गर्दन पर"
    ],
    "correctAnswer": 1,
    "explanationEn": "SI joint is a synovial plane joint with limited movement (amphiarthrosis).",
    "explanationHi": "CPR में छाती उरोस्थि के निचले आधे भाग पर दबाई जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-906",
    "questionEn": "Yellow bone marrow contains:",
    "questionHi": "CPR में छाती कितनी गहराई तक दबानी चाहिए (वयस्क)?",
    "optionsEn": [
      "Red blood cells",
      "Fat",
      "Cartilage",
      "Calcium"
    ],
    "optionsHi": [
      "2-3 cm",
      "5-6 cm (2-2.4 इंच)",
      "8-10 cm",
      "1 cm"
    ],
    "correctAnswer": 1,
    "explanationEn": "Yellow marrow is fat storage; red marrow is hematopoietic (blood cell production).",
    "explanationHi": "वयस्कों में छाती 5-6 cm गहराई तक दबानी चाहिए।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-907",
    "questionEn": "The sutures of the skull are:",
    "questionHi": "AED (Automated External Defibrillator) के पैड कहां लगाए जाते हैं?",
    "optionsEn": [
      "Synovial joints",
      "Fibrous joints",
      "Cartilaginous joints",
      "Ball and socket"
    ],
    "optionsHi": [
      "पीठ पर",
      "दाएं ऊपरी छाती और बाएं निचले छाती/बगल पर",
      "दोनों हाथों पर",
      "पैरों पर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Skull sutures are fibrous joints (synarthroses) that become more rigid with age.",
    "explanationHi": "AED पैड हृदय के आर-पास लगाए जाते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-908",
    "questionEn": "The costal cartilages connect:",
    "questionHi": "हेमलिक मैन्यूवर (Heimlich Maneuver) में दबाव कहां लगाया जाता है?",
    "optionsEn": [
      "Vertebrae to ribs",
      "Ribs to sternum",
      "Ribs to each other",
      "Clavicle to sternum"
    ],
    "optionsHi": [
      "छाती पर",
      "नाभि और जाइफॉयड के बीच (ऊपरी पेट)",
      "गर्दन पर",
      "पीठ पर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Costal cartilages (hyaline) connect anterior ends of ribs 1-10 to sternum.",
    "explanationHi": "हेमलिक मैन्यूवर में ऊपरी पेट पर अंदर और ऊपर की ओर दबाव लगाया जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-909",
    "questionEn": "The hamstrings are located in the:",
    "questionHi": "टर्निकेट (Tourniquet) कहां लगाया जाता है?",
    "optionsEn": [
      "Anterior thigh",
      "Posterior thigh",
      "Anterior leg",
      "Posterior leg"
    ],
    "optionsHi": [
      "घाव पर",
      "घाव से 5-7 cm ऊपर (हृदय की ओर)",
      "घाव के नीचे",
      "पैर पर हमेशा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hamstrings (biceps femoris, semitendinosus, semimembranosus) flex knee, extend hip.",
    "explanationHi": "टर्निकेट घाव से ऊपर (प्रॉक्सिमल) लगाया जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-910",
    "questionEn": "The tibialis anterior:",
    "questionHi": "प्रेशर पॉइंट्स (Pressure Points) क्या हैं?",
    "optionsEn": [
      "Plantarflexes foot",
      "Dorsiflexes foot",
      "Everts foot",
      "Does not move foot"
    ],
    "optionsHi": [
      "हड्डियां",
      "वे स्थान जहां धमनी हड्डी के ऊपर दबाकर रक्तस्राव रोका जा सकता है",
      "शिराएं",
      "पेशियां"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tibialis anterior dorsiflexes and inverts foot; damage causes foot drop.",
    "explanationHi": "प्रेशर पॉइंट पर धमनी को दबाकर रक्तस्राव नियंत्रित किया जा सकता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-911",
    "questionEn": "Eccentric contraction means:",
    "questionHi": "ब्रेकियल प्रेशर पॉइंट कहां है?",
    "optionsEn": [
      "Muscle shortens",
      "Muscle lengthens while contracting",
      "No movement",
      "Muscle relaxes"
    ],
    "optionsHi": [
      "गर्दन में",
      "बाहु के अंदरूनी भाग में",
      "जांघ में",
      "पैर में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Eccentric = lengthening under tension (e.g., lowering a weight); concentric = shortening.",
    "explanationHi": "ब्रेकियल प्रेशर पॉइंट ऊपरी अंग के रक्तस्राव को नियंत्रित करने के लिए है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-912",
    "questionEn": "The serratus anterior:",
    "questionHi": "फीमोरल प्रेशर पॉइंट कहां है?",
    "optionsEn": [
      "Rotates scapula upward",
      "Extends elbow",
      "Flexes hip",
      "Extends neck"
    ],
    "optionsHi": [
      "गर्दन में",
      "बाहु में",
      "इंगुइनल लिगामेंट के नीचे जांघ में",
      "पैर में"
    ],
    "correctAnswer": 0,
    "explanationEn": "Serratus anterior protracts scapula and rotates it for overhead arm movement.",
    "explanationHi": "फीमोरल प्रेशर पॉइंट निचले अंग के रक्तस्राव को नियंत्रित करने के लिए है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-913",
    "questionEn": "The bundle branches are located in the:",
    "questionHi": "कैरोटिड प्रेशर पॉइंट का उपयोग कब सावधानी से करना चाहिए?",
    "optionsEn": [
      "Atrial walls",
      "Interventricular septum",
      "AV node",
      "SA node"
    ],
    "optionsHi": [
      "हमेशा उपयोग करें",
      "दोनों तरफ एक साथ कभी न दबाएं",
      "कभी उपयोग न करें",
      "केवल पैर में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Bundle branches (left and right) travel down the interventricular septum.",
    "explanationHi": "दोनों कैरोटिड धमनियों को एक साथ दबाने से मस्तिष्क में रक्त प्रवाह रुक सकता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-914",
    "questionEn": "Preload refers to:",
    "questionHi": "स्प्लिंटिंग (Splinting) में फ्रैक्चर के कितने जोड़ों को स्थिर करना चाहिए?",
    "optionsEn": [
      "Pressure during contraction",
      "End-diastolic volume",
      "Resistance to ejection",
      "Heart rate"
    ],
    "optionsHi": [
      "केवल एक",
      "फ्रैक्चर के ऊपर और नीचे के जोड़",
      "कोई नहीं",
      "सभी जोड़"
    ],
    "correctAnswer": 1,
    "explanationEn": "Preload = ventricular filling (EDV); afterload = resistance to ejection.",
    "explanationHi": "फ्रैक्चर को स्थिर करने के लिए उसके दोनों ओर के जोड़ों को स्थिर करना चाहिए।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-915",
    "questionEn": "The superior mesenteric artery supplies:",
    "questionHi": "फीमर फ्रैक्चर में कौन से जोड़ स्थिर करने चाहिए?",
    "optionsEn": [
      "Foregut",
      "Midgut",
      "Hindgut",
      "All of GI tract"
    ],
    "optionsHi": [
      "केवल घुटना",
      "कूल्हा और घुटना",
      "केवल कूल्हा",
      "टखना और घुटना"
    ],
    "correctAnswer": 1,
    "explanationEn": "SMA supplies midgut (distal duodenum to 2/3 of transverse colon).",
    "explanationHi": "फीमर फ्रैक्चर में कूल्हे और घुटने दोनों को स्थिर करना चाहिए।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-916",
    "questionEn": "Venous valves are most numerous in:",
    "questionHi": "टिबिया/फिबुला फ्रैक्चर में कौन से जोड़ स्थिर करने चाहिए?",
    "optionsEn": [
      "Arms",
      "Legs",
      "Head",
      "Trunk"
    ],
    "optionsHi": [
      "केवल घुटना",
      "घुटना और टखना",
      "केवल टखना",
      "कूल्हा और घुटना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Leg veins have most valves to counter gravity during venous return.",
    "explanationHi": "निचले पैर के फ्रैक्चर में घुटने और टखने को स्थिर करना चाहिए।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-917",
    "questionEn": "The thoracic duct drains lymph from:",
    "questionHi": "प्रकोष्ठ फ्रैक्चर में कौन से जोड़ स्थिर करने चाहिए?",
    "optionsEn": [
      "Right upper body",
      "Left side and below diaphragm",
      "All of body",
      "Head only"
    ],
    "optionsHi": [
      "केवल कोहनी",
      "कोहनी और कलाई",
      "केवल कलाई",
      "कंधा और कोहनी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Thoracic duct drains 3/4 of body; right lymphatic duct drains right upper quadrant.",
    "explanationHi": "प्रकोष्ठ फ्रैक्चर में कोहनी और कलाई को स्थिर करना चाहिए।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-918",
    "questionEn": "The bronchopulmonary segment is:",
    "questionHi": "सर्वाइकल स्पाइन इंजरी में सिर और गर्दन को कैसे रखना चाहिए?",
    "optionsEn": [
      "A lobe",
      "Functionally independent lung unit",
      "Part of trachea",
      "The hilum"
    ],
    "optionsHi": [
      "किसी भी स्थिति में",
      "न्यूट्रल पोजीशन में स्थिर",
      "झुकाकर",
      "घुमाकर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Each bronchopulmonary segment has its own bronchus, artery; can be surgically removed.",
    "explanationHi": "गर्दन की चोट में सिर को न्यूट्रल पोजीशन में स्थिर रखना चाहिए।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-919",
    "questionEn": "Pulmonary compliance refers to:",
    "questionHi": "सर्वाइकल कॉलर (C-Collar) क्या करता है?",
    "optionsEn": [
      "Airway resistance",
      "Lung stretchability",
      "Gas exchange rate",
      "Breathing rate"
    ],
    "optionsHi": [
      "सांस लेने में मदद",
      "गर्दन की गति को सीमित करता है",
      "रक्तस्राव रोकता है",
      "दर्द कम करता है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Compliance = volume change per pressure change; reduced in fibrosis, increased in emphysema.",
    "explanationHi": "C-कॉलर संभावित गर्दन की चोट में गर्दन को स्थिर करता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-920",
    "questionEn": "The right middle lobe is absent in the:",
    "questionHi": "लॉग रोल (Log Roll) तकनीक का उपयोग कब होता है?",
    "optionsEn": [
      "Right lung",
      "Left lung",
      "Both lungs",
      "Neither lung"
    ],
    "optionsHi": [
      "घुटने की चोट में",
      "संभावित स्पाइनल इंजरी में रोगी को घुमाने के लिए",
      "हाथ की चोट में",
      "सिर दर्द में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Left lung has 2 lobes (superior, inferior); right has 3 (superior, middle, inferior).",
    "explanationHi": "लॉग रोल में पूरी रीढ़ को एक साथ घुमाया जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-921",
    "questionEn": "Inspiratory reserve volume is:",
    "questionHi": "रिकवरी पोजीशन (Recovery Position) कब उपयोग की जाती है?",
    "optionsEn": [
      "Normal breath",
      "Extra air after normal inspiration",
      "Air remaining after expiration",
      "Air that can't be expelled"
    ],
    "optionsHi": [
      "होश में मरीज",
      "बेहोश लेकिन सांस लेते मरीज के लिए",
      "CPR के दौरान",
      "खड़े मरीज में"
    ],
    "correctAnswer": 1,
    "explanationEn": "IRV = additional air that can be inhaled after a normal tidal breath (~3000 mL).",
    "explanationHi": "रिकवरी पोजीशन बेहोश मरीज में वायुमार्ग खुला रखती है और उल्टी को बाहर निकालने देती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-922",
    "questionEn": "Clara cells are found in:",
    "questionHi": "हेड टिल्ट-चिन लिफ्ट (Head Tilt-Chin Lift) क्या करता है?",
    "optionsEn": [
      "Alveoli",
      "Bronchioles",
      "Bronchi",
      "Trachea"
    ],
    "optionsHi": [
      "रक्तस्राव रोकता है",
      "वायुमार्ग खोलता है",
      "हृदय को पुनः शुरू करता है",
      "फ्रैक्चर ठीक करता है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clara (club) cells in bronchioles secrete surfactant-like substance and detoxify.",
    "explanationHi": "हेड टिल्ट-चिन लिफ्ट जीभ को गले से हटाकर वायुमार्ग खोलता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-923",
    "questionEn": "The duodenum is:",
    "questionHi": "जॉ थ्रस्ट (Jaw Thrust) कब उपयोग की जाती है?",
    "optionsEn": [
      "Intraperitoneal",
      "Retroperitoneal",
      "In the pelvis",
      "In the thorax"
    ],
    "optionsHi": [
      "सामान्य मरीज में",
      "संभावित गर्दन की चोट में वायुमार्ग खोलने के लिए",
      "पैर की चोट में",
      "हाथ की चोट में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Most of duodenum (except first part) is retroperitoneal (secondarily).",
    "explanationHi": "जॉ थ्रस्ट में गर्दन को न हिलाते हुए जबड़े को आगे किया जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-924",
    "questionEn": "The ampulla of Vater is in the:",
    "questionHi": "ट्रेंडेलेनबर्ग पोजीशन क्या है?",
    "optionsEn": [
      "Stomach",
      "Duodenum",
      "Jejunum",
      "Gallbladder"
    ],
    "optionsHi": [
      "सिर ऊपर",
      "सिर नीचे, पैर ऊपर",
      "बैठी हुई",
      "लेटी हुई सीधी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hepatopancreatic ampulla (of Vater) opens into duodenum at major duodenal papilla.",
    "explanationHi": "ट्रेंडेलेनबर्ग पोजीशन में शरीर सिर नीचे की ओर झुका होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-925",
    "questionEn": "The dentate line is in the:",
    "questionHi": "फाउलर पोजीशन क्या है?",
    "optionsEn": [
      "Stomach",
      "Small intestine",
      "Anal canal",
      "Esophagus"
    ],
    "optionsHi": [
      "सिर नीचे",
      "अर्ध-बैठी हुई (30-90 डिग्री ऊंचा सिर)",
      "सीधी लेटी",
      "पेट के बल लेटी"
    ],
    "correctAnswer": 2,
    "explanationEn": "Dentate (pectinate) line divides anal canal into upper (columnar) and lower (squamous) parts.",
    "explanationHi": "फाउलर पोजीशन में सिर 30-90 डिग्री तक ऊंचा होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-926",
    "questionEn": "Bile emulsifies:",
    "questionHi": "सुपाइन पोजीशन क्या है?",
    "optionsEn": [
      "Proteins",
      "Carbohydrates",
      "Fats",
      "Vitamins"
    ],
    "optionsHi": [
      "पेट के बल",
      "पीठ के बल लेटी (चेहरा ऊपर)",
      "बाईं करवट",
      "दाईं करवट"
    ],
    "correctAnswer": 2,
    "explanationEn": "Bile salts emulsify fats into small droplets for lipase action.",
    "explanationHi": "सुपाइन पोजीशन में व्यक्ति पीठ के बल चेहरा ऊपर करके लेटता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-927",
    "questionEn": "The splenic flexure is:",
    "questionHi": "प्रोन पोजीशन क्या है?",
    "optionsEn": [
      "Right side",
      "Left side",
      "In the pelvis",
      "At the appendix"
    ],
    "optionsHi": [
      "पीठ के बल",
      "पेट के बल लेटी (चेहरा नीचे)",
      "बैठी हुई",
      "खड़ी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Splenic (left colic) flexure is where transverse colon turns to descending colon.",
    "explanationHi": "प्रोन पोजीशन में व्यक्ति पेट के बल चेहरा नीचे करके लेटता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-928",
    "questionEn": "G cells secrete:",
    "questionHi": "लेफ्ट लेटरल पोजीशन (Left Lateral Position) का उपयोग कब होता है?",
    "optionsEn": [
      "Pepsin",
      "HCl",
      "Gastrin",
      "Mucus"
    ],
    "optionsHi": [
      "हृदय रोग में",
      "गर्भवती महिला में और रिकवरी पोजीशन में",
      "सिर दर्द में",
      "पैर दर्द में"
    ],
    "correctAnswer": 2,
    "explanationEn": "G cells in antrum secrete gastrin, which stimulates HCl and pepsinogen secretion.",
    "explanationHi": "बाईं करवट IVC पर दबाव कम करती है और गर्भवती में रक्त प्रवाह सुधारती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-929",
    "questionEn": "The arachnoid granulations drain CSF into:",
    "questionHi": "लिथोटॉमी पोजीशन (Lithotomy Position) का उपयोग कब होता है?",
    "optionsEn": [
      "Spinal canal",
      "Ventricles",
      "Venous sinuses",
      "Subarachnoid space"
    ],
    "optionsHi": [
      "हृदय सर्जरी में",
      "पेल्विक परीक्षा और प्रसव में",
      "सिर की सर्जरी में",
      "घुटने की सर्जरी में"
    ],
    "correctAnswer": 2,
    "explanationEn": "Arachnoid granulations (villi) project into dural venous sinuses for CSF absorption.",
    "explanationHi": "लिथोटॉमी पोजीशन में पैर ऊपर और अलग होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-930",
    "questionEn": "The basal ganglia are involved in:",
    "questionHi": "सिम्स पोजीशन (Sims Position) का उपयोग कब होता है?",
    "optionsEn": [
      "Memory",
      "Movement initiation/control",
      "Vision",
      "Hearing"
    ],
    "optionsHi": [
      "हृदय परीक्षा में",
      "रेक्टल परीक्षा और एनीमा में",
      "आंख की जांच में",
      "कान की जांच में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Basal ganglia (caudate, putamen, globus pallidus) regulate voluntary movement.",
    "explanationHi": "सिम्स पोजीशन बाईं करवट में घुटने मोड़कर होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-931",
    "questionEn": "The glossopharyngeal nerve (CN IX) carries taste from:",
    "questionHi": "कोलेटरल सर्कुलेशन (Collateral Circulation) क्या है?",
    "optionsEn": [
      "Anterior 2/3 of tongue",
      "Posterior 1/3 of tongue",
      "Epiglottis",
      "Palate"
    ],
    "optionsHi": [
      "मुख्य रक्त प्रवाह",
      "वैकल्पिक रक्त मार्ग जो मुख्य वाहिका के अवरोध पर काम करते हैं",
      "शिरापरक प्रवाह",
      "लसीका प्रवाह"
    ],
    "correctAnswer": 1,
    "explanationEn": "CN IX: taste from posterior 1/3; CN VII: anterior 2/3; CN X: epiglottis.",
    "explanationHi": "कोलेटरल वाहिकाएं मुख्य धमनी के ब्लॉक होने पर रक्त आपूर्ति बनाए रखती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-932",
    "questionEn": "The trochlear nerve supplies the:",
    "questionHi": "वॉटरशेड एरिया (Watershed Area) क्या है?",
    "optionsEn": [
      "Lateral rectus",
      "Superior oblique",
      "Inferior oblique",
      "Medial rectus"
    ],
    "optionsHi": [
      "रक्त से भरपूर क्षेत्र",
      "दो धमनी क्षेत्रों के बीच का कम रक्त वाला क्षेत्र",
      "शिरापरक क्षेत्र",
      "लसीका क्षेत्र"
    ],
    "correctAnswer": 1,
    "explanationEn": "CN IV (trochlear) supplies superior oblique; SO4, LR6, rest by CN III.",
    "explanationHi": "वॉटरशेड एरिया दो धमनी आपूर्ति के बीच का क्षेत्र है जो इस्केमिया में पहले प्रभावित होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-933",
    "questionEn": "Dorsal root ganglia contain:",
    "questionHi": "एनास्टोमोसिस (Anastomosis) क्या है?",
    "optionsEn": [
      "Motor neurons",
      "Sensory neuron cell bodies",
      "Interneurons",
      "Sympathetic neurons"
    ],
    "optionsHi": [
      "रक्त वाहिका का अंत",
      "दो रक्त वाहिकाओं या संरचनाओं का जुड़ाव",
      "तंत्रिका का अंत",
      "पेशी का अंत"
    ],
    "correctAnswer": 1,
    "explanationEn": "DRG contain cell bodies of sensory (afferent) neurons.",
    "explanationHi": "एनास्टोमोसिस दो संरचनाओं (आमतौर पर वाहिकाओं) के बीच संपर्क है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-934",
    "questionEn": "The fornix connects the hippocampus to the:",
    "questionHi": "पोर्टोसिस्टेमिक एनास्टोमोसिस (Portosystemic Anastomosis) का नैदानिक महत्व क्या है?",
    "optionsEn": [
      "Thalamus",
      "Hypothalamus",
      "Amygdala",
      "Cerebellum"
    ],
    "optionsHi": [
      "कोई महत्व नहीं",
      "पोर्टल हाइपरटेंशन में वेरिसिज़ का स्थान",
      "केवल सजावटी",
      "श्वसन में मदद"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fornix is a C-shaped white matter tract from hippocampus to mammillary bodies of hypothalamus.",
    "explanationHi": "पोर्टल हाइपरटेंशन में ये एनास्टोमोसिस फैल जाते हैं (जैसे एसोफेजियल वेरिसिज़)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-935",
    "questionEn": "The filtration fraction is approximately:",
    "questionHi": "एसोफेजियल वेरिसिज़ (Esophageal Varices) कहां होते हैं?",
    "optionsEn": [
      "10%",
      "20%",
      "50%",
      "80%"
    ],
    "optionsHi": [
      "आमाशय में",
      "ग्रसिका के निचले भाग में",
      "छोटी आंत में",
      "बड़ी आंत में"
    ],
    "correctAnswer": 1,
    "explanationEn": "~20% of renal plasma flow is filtered at glomerulus (FF = GFR/RPF).",
    "explanationHi": "पोर्टल हाइपरटेंशन में ग्रसिका की शिराएं फैल जाती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-936",
    "questionEn": "Erythropoietin is produced by the:",
    "questionHi": "कैपट मेडूसी (Caput Medusae) क्या है?",
    "optionsEn": [
      "Liver only",
      "Kidneys",
      "Bone marrow",
      "Spleen"
    ],
    "optionsHi": [
      "सिर की बीमारी",
      "नाभि के आसपास फैली हुई शिराएं (पोर्टल हाइपरटेंशन में)",
      "पेट का ट्यूमर",
      "त्वचा रोग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Kidneys produce ~90% of erythropoietin (liver produces rest); stimulates RBC production.",
    "explanationHi": "कैपट मेडूसी नाभि के आसपास दिखने वाली फैली हुई शिराएं हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-937",
    "questionEn": "The thin segment of loop of Henle is:",
    "questionHi": "लिम्फेडेमा (Lymphedema) क्या है?",
    "optionsEn": [
      "Only ascending",
      "Only descending",
      "Both limbs",
      "Neither"
    ],
    "optionsHi": [
      "रक्त की कमी",
      "लसीका जल निकासी में रुकावट से सूजन",
      "हड्डी की बीमारी",
      "पेशी की बीमारी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Thin descending limb; thick ascending limb (with active transport mechanisms).",
    "explanationHi": "लिम्फेडेमा में लसीका प्रवाह रुकने से ऊतकों में तरल जमा हो जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-938",
    "questionEn": "The female urethra is approximately:",
    "questionHi": "सेंटिनल लिम्फ नोड (Sentinel Lymph Node) क्या है?",
    "optionsEn": [
      "4 cm",
      "8 cm",
      "15 cm",
      "20 cm"
    ],
    "optionsHi": [
      "सबसे बड़ा नोड",
      "ट्यूमर से लसीका प्राप्त करने वाला पहला नोड",
      "सबसे छोटा नोड",
      "अंतिम नोड"
    ],
    "correctAnswer": 0,
    "explanationEn": "Female urethra: ~4 cm; male urethra: ~20 cm (shorter female = more UTIs).",
    "explanationHi": "कैंसर में सेंटिनल नोड की बायोप्सी से फैलाव का पता चलता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-939",
    "questionEn": "Renin is released in response to:",
    "questionHi": "फैसिया (Fascia) क्या है?",
    "optionsEn": [
      "High blood pressure",
      "Low blood pressure",
      "High sodium",
      "High potassium"
    ],
    "optionsHi": [
      "हड्डी",
      "संयोजी ऊतक की परत जो पेशियों और अंगों को ढकती है",
      "तंत्रिका",
      "रक्त वाहिका"
    ],
    "correctAnswer": 1,
    "explanationEn": "Decreased BP/renal perfusion → renin release → angiotensin II → vasoconstriction + aldosterone.",
    "explanationHi": "फैसिया संयोजी ऊतक की परतें हैं जो संरचनाओं को अलग और समर्थन करती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-940",
    "questionEn": "The gubernaculum guides:",
    "questionHi": "सुपरफिशियल फैसिया (Superficial Fascia) में क्या होता है?",
    "optionsEn": [
      "Urine",
      "Sperm",
      "Testicular descent",
      "Ovarian release"
    ],
    "optionsHi": [
      "केवल पेशियां",
      "वसा, सतही शिराएं, त्वचीय तंत्रिकाएं",
      "केवल हड्डियां",
      "केवल धमनियां"
    ],
    "correctAnswer": 2,
    "explanationEn": "Gubernaculum guides testis from abdomen through inguinal canal to scrotum.",
    "explanationHi": "सुपरफिशियल फैसिया त्वचा के नीचे वसायुक्त परत है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-941",
    "questionEn": "The pampiniform plexus is:",
    "questionHi": "डीप फैसिया (Deep Fascia) क्या करती है?",
    "optionsEn": [
      "An artery",
      "A venous network",
      "A nerve plexus",
      "A lymphatic"
    ],
    "optionsHi": [
      "वसा संग्रहित करती है",
      "पेशियों को कम्पार्टमेंट में विभाजित करती है",
      "रक्त बनाती है",
      "हार्मोन बनाती है"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pampiniform plexus is venous network around testicular artery; cools arterial blood.",
    "explanationHi": "डीप फैसिया पेशियों के समूहों को अलग कम्पार्टमेंट में विभाजित करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-942",
    "questionEn": "Sertoli cells provide:",
    "questionHi": "कम्पार्टमेंट सिंड्रोम (Compartment Syndrome) क्या है?",
    "optionsEn": [
      "Testosterone",
      "Nutritional support for sperm",
      "FSH",
      "Inhibin only"
    ],
    "optionsHi": [
      "हड्डी टूटना",
      "फैसियल कम्पार्टमेंट में दबाव बढ़ने से रक्त प्रवाह रुकना",
      "पेशी खिंचाव",
      "तंत्रिका दबना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sertoli (nurse) cells support developing sperm, form blood-testis barrier, produce inhibin.",
    "explanationHi": "कम्पार्टमेंट सिंड्रोम में बढ़ा हुआ दबाव पेशियों और तंत्रिकाओं को नुकसान पहुंचाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-943",
    "questionEn": "The fornix of vagina is:",
    "questionHi": "कम्पार्टमेंट सिंड्रोम का इलाज क्या है?",
    "optionsEn": [
      "The opening",
      "The recess around cervix",
      "A gland",
      "A muscle"
    ],
    "optionsHi": [
      "दवाई",
      "फैसियोटॉमी (Fasciotomy)",
      "आराम",
      "बर्फ"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vaginal fornix is recess around cervix; posterior fornix is deepest, adjacent to pouch of Douglas.",
    "explanationHi": "फैसियोटॉमी में फैसिया काटकर दबाव कम किया जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-944",
    "questionEn": "Implantation normally occurs in the:",
    "questionHi": "पैरास्थेसिया (Paresthesia) क्या है?",
    "optionsEn": [
      "Fallopian tube",
      "Posterior uterine wall",
      "Cervix",
      "Ovary"
    ],
    "optionsHi": [
      "दर्द",
      "असामान्य संवेदना (झुनझुनी, सुन्नता)",
      "कमजोरी",
      "लकवा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Normal implantation in posterior uterine fundus/body; ectopic if elsewhere.",
    "explanationHi": "पैरास्थेसिया असामान्य त्वचा संवेदनाएं हैं जैसे झुनझुनी या जलन।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-945",
    "questionEn": "Merkel cells are:",
    "questionHi": "हाइपरस्थेसिया (Hyperesthesia) क्या है?",
    "optionsEn": [
      "Pigment cells",
      "Immune cells",
      "Touch receptors",
      "Stem cells"
    ],
    "optionsHi": [
      "कम संवेदना",
      "अधिक संवेदना/अतिसंवेदनशीलता",
      "कोई संवेदना नहीं",
      "सामान्य संवेदना"
    ],
    "correctAnswer": 2,
    "explanationEn": "Merkel cells in stratum basale are mechanoreceptors for light touch discrimination.",
    "explanationHi": "हाइपरस्थेसिया में सामान्य उत्तेजना से भी अधिक संवेदना होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-946",
    "questionEn": "Eccrine glands are:",
    "questionHi": "एनेस्थेसिया (Anesthesia) क्या है?",
    "optionsEn": [
      "In axilla only",
      "Throughout body",
      "On palms only",
      "On scalp only"
    ],
    "optionsHi": [
      "दर्द",
      "संवेदना का पूर्ण अभाव",
      "अधिक संवेदना",
      "झुनझुनी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Eccrine sweat glands are throughout body (especially palms, soles); produce watery sweat.",
    "explanationHi": "एनेस्थेसिया में संवेदना पूरी तरह खत्म हो जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-947",
    "questionEn": "The nail matrix is:",
    "questionHi": "पैरेसिस (Paresis) क्या है?",
    "optionsEn": [
      "The nail plate",
      "The growth zone",
      "The cuticle",
      "The nail bed"
    ],
    "optionsHi": [
      "पूर्ण लकवा",
      "आंशिक कमजोरी/अधूरा लकवा",
      "दर्द",
      "झुनझुनी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Nail matrix (under proximal nail fold) produces new nail cells; damage causes deformity.",
    "explanationHi": "पैरेसिस में पेशी में आंशिक कमजोरी होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-948",
    "questionEn": "The choroid provides:",
    "questionHi": "प्लेजिया/पैरालिसिस (Plegia/Paralysis) क्या है?",
    "optionsEn": [
      "Vision",
      "Blood supply to retina",
      "Aqueous humor",
      "Lens shape"
    ],
    "optionsHi": [
      "आंशिक कमजोरी",
      "पूर्ण लकवा/गति का पूर्ण अभाव",
      "दर्द",
      "झुनझुनी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Choroid is vascular layer supplying outer retina; also absorbs stray light.",
    "explanationHi": "प्लेजिया में पेशी की गति पूरी तरह खत्म हो जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-949",
    "questionEn": "The cochlea converts:",
    "questionHi": "हेमीप्लेजिया (Hemiplegia) क्या है?",
    "optionsEn": [
      "Light to signal",
      "Sound to nerve impulse",
      "Balance information",
      "Smell to signal"
    ],
    "optionsHi": [
      "दोनों पैरों का लकवा",
      "शरीर के एक तरफ का लकवा",
      "चारों अंगों का लकवा",
      "एक अंग का लकवा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cochlear hair cells convert mechanical vibrations to electrical signals.",
    "explanationHi": "हेमीप्लेजिया में शरीर का दायां या बायां आधा भाग लकवाग्रस्त होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-950",
    "questionEn": "Presbyopia is caused by:",
    "questionHi": "पैराप्लेजिया (Paraplegia) क्या है?",
    "optionsEn": [
      "Corneal damage",
      "Loss of lens elasticity",
      "Retinal degeneration",
      "Optic nerve damage"
    ],
    "optionsHi": [
      "एक तरफ का लकवा",
      "दोनों निचले अंगों का लकवा",
      "चारों अंगों का लकवा",
      "एक अंग का लकवा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Presbyopia is age-related loss of accommodation due to lens becoming less flexible.",
    "explanationHi": "पैराप्लेजिया में दोनों पैर लकवाग्रस्त होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-951",
    "questionEn": "The femoral triangle contains:",
    "questionHi": "क्वाड्रीप्लेजिया/टेट्राप्लेजिया (Quadriplegia/Tetraplegia) क्या है?",
    "optionsEn": [
      "Sciatic nerve",
      "Femoral nerve and vessels",
      "Obturator nerve",
      "Lumbar plexus"
    ],
    "optionsHi": [
      "एक अंग का लकवा",
      "चारों अंगों का लकवा",
      "एक तरफ का लकवा",
      "दोनों पैरों का लकवा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Femoral triangle: femoral nerve, artery, vein (lateral to medial: NAVY).",
    "explanationHi": "क्वाड्रीप्लेजिया में चारों अंग लकवाग्रस्त होते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-952",
    "questionEn": "The scaphoid is in the:",
    "questionHi": "मोनोप्लेजिया (Monoplegia) क्या है?",
    "optionsEn": [
      "Wrist",
      "Ankle",
      "Elbow",
      "Knee"
    ],
    "optionsHi": [
      "दोनों पैरों का लकवा",
      "एक अंग का लकवा",
      "एक तरफ का लकवा",
      "चारों अंगों का लकवा"
    ],
    "correctAnswer": 0,
    "explanationEn": "Scaphoid is a carpal bone; most commonly fractured wrist bone (fall on outstretched hand).",
    "explanationHi": "मोनोप्लेजिया में केवल एक अंग लकवाग्रस्त होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-953",
    "questionEn": "The pubic symphysis is a:",
    "questionHi": "स्पास्टिसिटी (Spasticity) क्या है?",
    "optionsEn": [
      "Synovial joint",
      "Cartilaginous joint",
      "Fibrous joint",
      "Ball and socket"
    ],
    "optionsHi": [
      "पेशी की शिथिलता",
      "पेशी की अकड़न और बढ़ा हुआ टोनस",
      "पेशी की कमजोरी",
      "पेशी का दर्द"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pubic symphysis is secondary cartilaginous (symphysis) joint with fibrocartilage disc.",
    "explanationHi": "स्पास्टिसिटी में पेशियां कड़ी और अकड़ी हुई होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-954",
    "questionEn": "The rhomboids:",
    "questionHi": "फ्लैसिडिटी (Flaccidity) क्या है?",
    "optionsEn": [
      "Protract scapula",
      "Retract scapula",
      "Elevate arm",
      "Flex elbow"
    ],
    "optionsHi": [
      "पेशी की अकड़न",
      "पेशी की शिथिलता और कम टोनस",
      "पेशी का दर्द",
      "पेशी की सूजन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rhomboid major and minor retract and rotate scapula; attach medial scapular border to spine.",
    "explanationHi": "फ्लैसिडिटी में पेशियां ढीली और शिथिल होती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-955",
    "questionEn": "The trabeculae carneae are in the:",
    "questionHi": "एट्रॉफी (Atrophy) क्या है?",
    "optionsEn": [
      "Atria",
      "Ventricles",
      "Great vessels",
      "Valves"
    ],
    "optionsHi": [
      "पेशी का बढ़ना",
      "पेशी का सिकुड़ना/क्षय",
      "पेशी में दर्द",
      "पेशी में सूजन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Trabeculae carneae are muscular ridges on inner ventricular walls.",
    "explanationHi": "एट्रॉफी में पेशी का आकार कम हो जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-956",
    "questionEn": "End-diastolic volume is approximately:",
    "questionHi": "हाइपरट्रॉफी (Hypertrophy) क्या है?",
    "optionsEn": [
      "50 mL",
      "70 mL",
      "120 mL",
      "200 mL"
    ],
    "optionsHi": [
      "पेशी का सिकुड़ना",
      "पेशी का बढ़ना",
      "पेशी का दर्द",
      "पेशी की कमजोरी"
    ],
    "correctAnswer": 2,
    "explanationEn": "EDV ≈ 120 mL; ESV ≈ 50 mL; SV ≈ 70 mL; ejection fraction ≈ 55-70%.",
    "explanationHi": "हाइपरट्रॉफी में पेशी या अंग का आकार बढ़ जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-957",
    "questionEn": "The cricothyroid membrane is used for:",
    "questionHi": "कॉन्ट्रैक्चर (Contracture) क्या है?",
    "optionsEn": [
      "Tracheostomy",
      "Emergency airway access",
      "Intubation",
      "Bronchoscopy"
    ],
    "optionsHi": [
      "पेशी का बढ़ना",
      "पेशी या जोड़ का स्थायी छोटा होना",
      "पेशी का दर्द",
      "पेशी की सूजन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cricothyrotomy through cricothyroid membrane provides emergency airway access.",
    "explanationHi": "कॉन्ट्रैक्चर में पेशी या जोड़ स्थायी रूप से सिकुड़ जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-958",
    "questionEn": "The falciform ligament contains:",
    "questionHi": "रेंज ऑफ मोशन (ROM) क्या है?",
    "optionsEn": [
      "Hepatic artery",
      "Portal vein",
      "Ligamentum teres",
      "Bile duct"
    ],
    "optionsHi": [
      "पेशी की ताकत",
      "जोड़ में गति की सीमा",
      "पेशी का आकार",
      "हड्डी की लंबाई"
    ],
    "correctAnswer": 2,
    "explanationEn": "Falciform ligament attaches liver to anterior body wall; contains ligamentum teres (obliterated umbilical vein).",
    "explanationHi": "ROM जोड़ में संभव गति की पूरी सीमा है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-959",
    "questionEn": "The internal capsule carries:",
    "questionHi": "फ्लेक्सन (Flexion) क्या है?",
    "optionsEn": [
      "Only motor fibers",
      "Only sensory fibers",
      "Both motor and sensory fibers",
      "CSF"
    ],
    "optionsHi": [
      "जोड़ को सीधा करना",
      "जोड़ को मोड़ना (कोण कम करना)",
      "घुमाना",
      "बाहर करना"
    ],
    "correctAnswer": 2,
    "explanationEn": "Internal capsule carries motor (corticospinal) and sensory (thalamocortical) fibers.",
    "explanationHi": "फ्लेक्सन में जोड़ का कोण कम होता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-960",
    "questionEn": "The renal fascia is also called:",
    "questionHi": "एक्सटेंशन (Extension) क्या है?",
    "optionsEn": [
      "Perinephric fat",
      "Gerota's fascia",
      "Renal capsule",
      "Paranephric fat"
    ],
    "optionsHi": [
      "जोड़ को मोड़ना",
      "जोड़ को सीधा करना (कोण बढ़ाना)",
      "घुमाना",
      "अंदर करना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Gerota's (renal) fascia surrounds kidney and perirenal fat; barrier to cancer spread.",
    "explanationHi": "एक्सटेंशन में जोड़ का कोण बढ़ता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-961",
    "questionEn": "The round ligament of the uterus attaches to the:",
    "questionHi": "एब्डक्शन (Abduction) क्या है?",
    "optionsEn": [
      "Cervix",
      "Labia majora",
      "Ovary",
      "Bladder"
    ],
    "optionsHi": [
      "मध्य रेखा की ओर",
      "मध्य रेखा से दूर (बाहर की ओर)",
      "घुमाना",
      "मोड़ना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Round ligament runs from uterus through inguinal canal to labia majora.",
    "explanationHi": "एब्डक्शन में अंग शरीर की मध्य रेखा से दूर जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-962",
    "questionEn": "The optic disc is:",
    "questionHi": "एडक्शन (Adduction) क्या है?",
    "optionsEn": [
      "Area of sharpest vision",
      "Blind spot",
      "Color vision center",
      "Peripheral vision area"
    ],
    "optionsHi": [
      "बाहर की ओर",
      "मध्य रेखा की ओर (अंदर की ओर)",
      "घुमाना",
      "सीधा करना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Optic disc (optic nerve head) has no photoreceptors - physiological blind spot.",
    "explanationHi": "एडक्शन में अंग शरीर की मध्य रेखा की ओर जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-963",
    "questionEn": "The carotid sheath contains:",
    "questionHi": "रोटेशन (Rotation) क्या है?",
    "optionsEn": [
      "Trachea",
      "Carotid artery, jugular vein, vagus nerve",
      "Thyroid",
      "Esophagus"
    ],
    "optionsHi": [
      "मोड़ना",
      "अक्ष के चारों ओर घूमना",
      "सीधा करना",
      "बाहर करना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Carotid sheath contains common/internal carotid artery, internal jugular vein, vagus nerve.",
    "explanationHi": "रोटेशन में अंग अपनी अनुदैर्ध्य अक्ष के चारों ओर घूमता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-964",
    "questionEn": "The phalanges are in the:",
    "questionHi": "सर्कमडक्शन (Circumduction) क्या है?",
    "optionsEn": [
      "Spine only",
      "Wrist only",
      "Fingers and toes",
      "Ankle only"
    ],
    "optionsHi": [
      "सीधी गति",
      "शंकु जैसी गोलाकार गति",
      "केवल मोड़ना",
      "केवल सीधा करना"
    ],
    "correctAnswer": 2,
    "explanationEn": "Phalanges are bones of digits; 14 in each hand/foot (2 in thumb/great toe, 3 in others).",
    "explanationHi": "सर्कमडक्शन में अंग शंकु के आकार में गोल घूमता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-965",
    "questionEn": "The iliopsoas muscle:",
    "questionHi": "प्रोनेशन (Pronation) क्या है?",
    "optionsEn": [
      "Extends hip",
      "Flexes hip",
      "Abducts hip",
      "Adducts hip"
    ],
    "optionsHi": [
      "हथेली ऊपर",
      "हथेली नीचे करना (या पैर अंदर)",
      "अंगूठा ऊपर",
      "अंगूठा नीचे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Iliopsoas (iliacus + psoas major) is the main hip flexor.",
    "explanationHi": "प्रोनेशन में प्रकोष्ठ घुमाकर हथेली नीचे की जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-966",
    "questionEn": "The ligamentum arteriosum is a remnant of:",
    "questionHi": "सुपिनेशन (Supination) क्या है?",
    "optionsEn": [
      "Foramen ovale",
      "Ductus arteriosus",
      "Umbilical vein",
      "Ductus venosus"
    ],
    "optionsHi": [
      "हथेली नीचे",
      "हथेली ऊपर करना (या पैर बाहर)",
      "अंगूठा नीचे",
      "कलाई मोड़ना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ductus arteriosus (PA to aorta bypass) becomes ligamentum arteriosum after birth.",
    "explanationHi": "सुपिनेशन में प्रकोष्ठ घुमाकर हथेली ऊपर की जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-967",
    "questionEn": "The horizontal fissure is in the:",
    "questionHi": "डॉर्सिफ्लेक्शन (Dorsiflexion) क्या है?",
    "optionsEn": [
      "Left lung",
      "Right lung",
      "Both lungs",
      "Neither lung"
    ],
    "optionsHi": [
      "पैर नीचे झुकाना",
      "पैर ऊपर उठाना (टखने पर)",
      "पैर घुमाना",
      "पैर बाहर करना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Right lung has horizontal (separates upper/middle lobes) and oblique fissures; left has only oblique.",
    "explanationHi": "डॉर्सिफ्लेक्शन में पंजे ऊपर की ओर उठाए जाते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-968",
    "questionEn": "The porta hepatis contains:",
    "questionHi": "प्लांटरफ्लेक्शन (Plantarflexion) क्या है?",
    "optionsEn": [
      "Hepatic veins",
      "Portal vein, hepatic artery, bile duct",
      "IVC",
      "Aorta"
    ],
    "optionsHi": [
      "पैर ऊपर उठाना",
      "पैर नीचे झुकाना (पंजों के बल)",
      "पैर घुमाना",
      "पैर अंदर करना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Porta hepatis is the hilum of liver; portal triad structures enter/exit here.",
    "explanationHi": "प्लांटरफ्लेक्शन में पंजे नीचे की ओर झुकाए जाते हैं (जैसे पंजों के बल खड़े होना)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-969",
    "questionEn": "The superior colliculi are involved in:",
    "questionHi": "इनवर्जन (Inversion) क्या है?",
    "optionsEn": [
      "Hearing",
      "Visual reflexes",
      "Balance",
      "Smell"
    ],
    "optionsHi": [
      "पैर बाहर",
      "पैर का तलवा अंदर की ओर",
      "पैर ऊपर",
      "पैर नीचे"
    ],
    "correctAnswer": 1,
    "explanationEn": "Superior colliculi in midbrain process visual reflexes; inferior colliculi process auditory.",
    "explanationHi": "इनवर्जन में पैर का तलवा अंदर (मध्य रेखा) की ओर मुड़ता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-970",
    "questionEn": "The prostate is inferior to the:",
    "questionHi": "इवर्जन (Eversion) क्या है?",
    "optionsEn": [
      "Bladder",
      "Rectum",
      "Penis",
      "Seminal vesicles"
    ],
    "optionsHi": [
      "पैर अंदर",
      "पैर का तलवा बाहर की ओर",
      "पैर ऊपर",
      "पैर नीचे"
    ],
    "correctAnswer": 0,
    "explanationEn": "Prostate is inferior to bladder, surrounding prostatic urethra.",
    "explanationHi": "इवर्जन में पैर का तलवा बाहर की ओर मुड़ता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-971",
    "questionEn": "The tunica albuginea surrounds the:",
    "questionHi": "प्रोट्रैक्शन (Protraction) क्या है?",
    "optionsEn": [
      "Ovary only",
      "Testis only",
      "Both ovary and testis",
      "Uterus"
    ],
    "optionsHi": [
      "पीछे करना",
      "आगे करना (जैसे जबड़ा या स्कैपुला)",
      "ऊपर करना",
      "नीचे करना"
    ],
    "correctAnswer": 2,
    "explanationEn": "Tunica albuginea is the fibrous capsule surrounding both testes and ovaries.",
    "explanationHi": "प्रोट्रैक्शन में संरचना आगे की ओर बढ़ती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-972",
    "questionEn": "The vitreous humor is:",
    "questionHi": "रिट्रैक्शन (Retraction) क्या है?",
    "optionsEn": [
      "Continuously produced",
      "Not replaced",
      "In front of lens",
      "Aqueous"
    ],
    "optionsHi": [
      "आगे करना",
      "पीछे करना (जैसे स्कैपुला को पीछे खींचना)",
      "ऊपर करना",
      "नीचे करना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vitreous humor is gelatinous, formed during fetal life, not replaced (aqueous is continuously produced).",
    "explanationHi": "रिट्रैक्शन में संरचना पीछे की ओर खींची जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-973",
    "questionEn": "The thoracic outlet is bounded by:",
    "questionHi": "एलीवेशन (Elevation) क्या है?",
    "optionsEn": [
      "Ribs, sternum, spine",
      "First rib, clavicle, scalene muscles",
      "Diaphragm",
      "Shoulder joint"
    ],
    "optionsHi": [
      "नीचे करना",
      "ऊपर उठाना (जैसे कंधे उचकाना)",
      "घुमाना",
      "मोड़ना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Thoracic outlet: structures pass between first rib, clavicle, and scalene muscles.",
    "explanationHi": "एलीवेशन में संरचना ऊपर की ओर उठाई जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-974",
    "questionEn": "The anatomical snuffbox contains:",
    "questionHi": "डिप्रेशन (Depression) क्या है?",
    "optionsEn": [
      "Ulnar artery",
      "Radial artery",
      "Median nerve",
      "Flexor tendons"
    ],
    "optionsHi": [
      "ऊपर उठाना",
      "नीचे करना (जैसे जबड़ा या कंधे गिराना)",
      "घुमाना",
      "मोड़ना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anatomical snuffbox (between thumb extensors) contains radial artery and scaphoid bone.",
    "explanationHi": "डिप्रेशन में संरचना नीचे की ओर गिराई जाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-975",
    "questionEn": "The external oblique muscle:",
    "questionHi": "ऑपोजिशन (Opposition) क्या है?",
    "optionsEn": [
      "Extends trunk",
      "Flexes and rotates trunk",
      "Only lateral flexion",
      "Extends hip"
    ],
    "optionsHi": [
      "अंगूठा बाहर",
      "अंगूठे को अन्य उंगलियों से मिलाना",
      "अंगूठा ऊपर",
      "अंगूठा नीचे"
    ],
    "correctAnswer": 1,
    "explanationEn": "External oblique flexes trunk, rotates to opposite side, compresses abdomen.",
    "explanationHi": "ऑपोजिशन अंगूठे की विशेष गति है जो इसे अन्य उंगलियों से मिलाती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-976",
    "questionEn": "The chordae tendineae attach to:",
    "questionHi": "इंजेक्शन के लिए ID (Intradermal) किस परत में दिया जाता है?",
    "optionsEn": [
      "Heart wall",
      "Papillary muscles",
      "Annulus fibrosus",
      "Great vessels"
    ],
    "optionsHi": [
      "पेशी में",
      "त्वचा की डर्मिस परत में",
      "चमड़ी के नीचे",
      "शिरा में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chordae tendineae connect valve leaflets to papillary muscles; prevent prolapse.",
    "explanationHi": "ID इंजेक्शन डर्मिस में दिए जाते हैं जैसे TB टेस्ट।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-977",
    "questionEn": "The pharyngeal tonsil is also called:",
    "questionHi": "SC (Subcutaneous) इंजेक्शन किस परत में दिया जाता है?",
    "optionsEn": [
      "Palatine tonsil",
      "Adenoid",
      "Lingual tonsil",
      "Tubal tonsil"
    ],
    "optionsHi": [
      "त्वचा में",
      "त्वचा के नीचे वसा परत में",
      "पेशी में",
      "शिरा में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pharyngeal tonsil (adenoid) is in nasopharynx; can obstruct breathing if enlarged.",
    "explanationHi": "SC इंजेक्शन चमड़ी के नीचे वसा परत में दिए जाते हैं जैसे इंसुलिन।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-978",
    "questionEn": "The McBurney's point is located:",
    "questionHi": "IM (Intramuscular) इंजेक्शन किस परत में दिया जाता है?",
    "optionsEn": [
      "RUQ",
      "LUQ",
      "RLQ",
      "LLQ"
    ],
    "optionsHi": [
      "त्वचा में",
      "वसा में",
      "पेशी में",
      "शिरा में"
    ],
    "correctAnswer": 2,
    "explanationEn": "McBurney's point (1/3 from ASIS to umbilicus) is over appendix in RLQ.",
    "explanationHi": "IM इंजेक्शन सीधे पेशी में दिए जाते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-979",
    "questionEn": "The lateral ventricles communicate with the third ventricle via:",
    "questionHi": "IV (Intravenous) इंजेक्शन कहां दिया जाता है?",
    "optionsEn": [
      "Cerebral aqueduct",
      "Foramen of Monro",
      "Foramen of Magendie",
      "Foramen of Luschka"
    ],
    "optionsHi": [
      "त्वचा में",
      "पेशी में",
      "शिरा में",
      "धमनी में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Interventricular foramen (of Monro) connects lateral to third ventricle.",
    "explanationHi": "IV इंजेक्शन सीधे शिरा (नस) में दिए जाते हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-980",
    "questionEn": "The internal urethral sphincter is:",
    "questionHi": "Z-ट्रैक तकनीक किस प्रकार के इंजेक्शन में उपयोग होती है?",
    "optionsEn": [
      "Voluntary",
      "Involuntary",
      "Absent",
      "Skeletal muscle"
    ],
    "optionsHi": [
      "ID",
      "SC",
      "IM (त्वचा को खींचकर)",
      "IV"
    ],
    "correctAnswer": 1,
    "explanationEn": "Internal sphincter is involuntary (smooth muscle); external is voluntary (skeletal).",
    "explanationHi": "Z-ट्रैक तकनीक IM इंजेक्शन में दवा के रिसाव को रोकने के लिए उपयोग होती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-981",
    "questionEn": "The endometrium has how many layers?",
    "questionHi": "डेल्टॉयड में IM इंजेक्शन की अधिकतम मात्रा कितनी है?",
    "optionsEn": [
      "1",
      "2",
      "3",
      "4"
    ],
    "optionsHi": [
      "0.5 ml",
      "1-2 ml",
      "5 ml",
      "10 ml"
    ],
    "correctAnswer": 1,
    "explanationEn": "Endometrium: functional layer (shed during menstruation) and basal layer (regenerates functional layer).",
    "explanationHi": "डेल्टॉयड छोटी पेशी है इसलिए 1-2 ml से अधिक नहीं देना चाहिए।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-982",
    "questionEn": "The suspensory ligament of the lens is also called:",
    "questionHi": "ग्लूटियल साइट में IM इंजेक्शन की अधिकतम मात्रा कितनी है?",
    "optionsEn": [
      "Ciliary body",
      "Zonules",
      "Iris",
      "Cornea"
    ],
    "optionsHi": [
      "1 ml",
      "2 ml",
      "5 ml तक",
      "10 ml"
    ],
    "correctAnswer": 1,
    "explanationEn": "Zonular fibers (zonules of Zinn) attach lens to ciliary body.",
    "explanationHi": "ग्लूटियल साइट बड़ी है और 5 ml तक दवा ले सकती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-983",
    "questionEn": "The saphenous opening is in the:",
    "questionHi": "ID इंजेक्शन के लिए सुई का कोण कितना होना चाहिए?",
    "optionsEn": [
      "Shoulder",
      "Thigh",
      "Arm",
      "Abdomen"
    ],
    "optionsHi": [
      "90 डिग्री",
      "45 डिग्री",
      "10-15 डिग्री",
      "0 डिग्री"
    ],
    "correctAnswer": 1,
    "explanationEn": "Saphenous opening (fossa ovalis) in fascia lata allows great saphenous vein to join femoral vein.",
    "explanationHi": "ID इंजेक्शन त्वचा के लगभग समानांतर, 10-15 डिग्री पर दिया जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-984",
    "questionEn": "The coracoid process is part of the:",
    "questionHi": "SC इंजेक्शन के लिए सुई का कोण कितना होना चाहिए?",
    "optionsEn": [
      "Humerus",
      "Scapula",
      "Clavicle",
      "Sternum"
    ],
    "optionsHi": [
      "90 डिग्री",
      "45 डिग्री",
      "15 डिग्री",
      "0 डिग्री"
    ],
    "correctAnswer": 1,
    "explanationEn": "Coracoid process is anterior scapular projection; attachment for biceps, pectoralis minor.",
    "explanationHi": "SC इंजेक्शन 45 डिग्री कोण पर दिया जाता है (या 90 डिग्री अगर त्वचा मोटी है)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Skeletal System",
    "tags": [
      "skeletal-system"
    ]
  },
  {
    "id": "ANATOMY-985",
    "questionEn": "The levator scapulae:",
    "questionHi": "IM इंजेक्शन के लिए सुई का कोण कितना होना चाहिए?",
    "optionsEn": [
      "Depresses scapula",
      "Elevates scapula",
      "Retracts scapula",
      "Protracts scapula"
    ],
    "optionsHi": [
      "15 डिग्री",
      "45 डिग्री",
      "90 डिग्री",
      "0 डिग्री"
    ],
    "correctAnswer": 1,
    "explanationEn": "Levator scapulae elevates scapula and rotates it; from transverse processes to scapula.",
    "explanationHi": "IM इंजेक्शन 90 डिग्री कोण पर सीधा दिया जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Muscular System",
    "tags": [
      "muscular-system"
    ]
  },
  {
    "id": "ANATOMY-986",
    "questionEn": "The posterior tibial pulse is palpated:",
    "questionHi": "मंटू टेस्ट (Mantoux Test) किस प्रकार का इंजेक्शन है?",
    "optionsEn": [
      "Top of foot",
      "Behind medial malleolus",
      "Behind knee",
      "At groin"
    ],
    "optionsHi": [
      "SC",
      "IM",
      "ID (Intradermal)",
      "IV"
    ],
    "correctAnswer": 1,
    "explanationEn": "Posterior tibial artery pulse is posterior and inferior to medial malleolus.",
    "explanationHi": "मंटू टेस्ट (TB परीक्षण) ID इंजेक्शन है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-987",
    "questionEn": "The apex of the lung is at which vertebral level?",
    "questionHi": "मंटू टेस्ट का पठन (Reading) कब किया जाता है?",
    "optionsEn": [
      "C5",
      "C7",
      "T1",
      "T3"
    ],
    "optionsHi": [
      "तुरंत",
      "24 घंटे बाद",
      "48-72 घंटे बाद",
      "1 सप्ताह बाद"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lung apex rises 2-3 cm above clavicle, to about C7/T1 level.",
    "explanationHi": "मंटू टेस्ट का परिणाम 48-72 घंटे बाद पढ़ा जाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Respiratory System",
    "tags": [
      "respiratory-system"
    ]
  },
  {
    "id": "ANATOMY-988",
    "questionEn": "The splanchnic nerves supply:",
    "questionHi": "वेनिपंक्चर (Venipuncture) के लिए सबसे आम स्थान कौन सा है?",
    "optionsEn": [
      "Skin",
      "Skeletal muscles",
      "Abdominal viscera",
      "Brain"
    ],
    "optionsHi": [
      "गर्दन",
      "एंटीक्यूबिटल फॉसा (कोहनी के सामने)",
      "पैर",
      "पेट"
    ],
    "correctAnswer": 2,
    "explanationEn": "Greater, lesser, and least splanchnic nerves carry sympathetic fibers to abdominal organs.",
    "explanationHi": "एंटीक्यूबिटल फॉसा में सतही शिराएं रक्त निकालने के लिए आदर्श हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-989",
    "questionEn": "The nucleus accumbens is part of:",
    "questionHi": "टूर्निकेट (Tourniquet) रक्त निकालने में क्यों लगाया जाता है?",
    "optionsEn": [
      "Motor system",
      "Reward pathway",
      "Visual system",
      "Respiratory center"
    ],
    "optionsHi": [
      "रक्तस्राव रोकने के लिए",
      "शिराओं को फुलाने (प्रोमिनेंट) करने के लिए",
      "दर्द कम करने के लिए",
      "संक्रमण रोकने के लिए"
    ],
    "correctAnswer": 1,
    "explanationEn": "Nucleus accumbens is part of mesolimbic dopamine pathway - involved in reward and addiction.",
    "explanationHi": "टूर्निकेट शिरापरक वापसी रोककर शिराओं को फुलाता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-990",
    "questionEn": "Henle's loop creates:",
    "questionHi": "टूर्निकेट कितनी देर तक लगाना चाहिए (वेनिपंक्चर)?",
    "optionsEn": [
      "GFR",
      "Medullary concentration gradient",
      "Urine color",
      "Acid-base balance"
    ],
    "optionsHi": [
      "10 मिनट",
      "1 मिनट से कम",
      "5 मिनट",
      "30 मिनट"
    ],
    "correctAnswer": 1,
    "explanationEn": "Loop of Henle's countercurrent mechanism creates medullary hyperosmolarity for urine concentration.",
    "explanationHi": "टूर्निकेट 1 मिनट से अधिक नहीं लगाना चाहिए।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Urinary System",
    "tags": [
      "urinary-system"
    ]
  },
  {
    "id": "ANATOMY-991",
    "questionEn": "Describe the anatomy of the brachial plexus and its clinical significance.",
    "questionHi": "रक्तदान (Blood Donation) में कितना रक्त लिया जाता है?",
    "optionsEn": [],
    "optionsHi": [
      "100 ml",
      "250 ml",
      "350-450 ml",
      "1 लीटर"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "एक यूनिट रक्तदान में लगभग 350-450 ml रक्त लिया जाता है।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-992",
    "questionEn": "Describe the anatomy of the knee joint including ligaments and menisci.",
    "questionHi": "रक्तदान के बाद शरीर कितने समय में रक्त की पूर्ति करता है?",
    "optionsEn": [],
    "optionsHi": [
      "24 घंटे",
      "1 सप्ताह",
      "4-6 सप्ताह",
      "6 महीने"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "प्लाज्मा 24-48 घंटे में, लेकिन RBC 4-6 सप्ताह में पूरी तरह बनती हैं।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-993",
    "questionEn": "Explain the anatomy of the cardiac conduction system and the basis for ECG waves.",
    "questionHi": "दो रक्तदान के बीच कितना अंतर होना चाहिए?",
    "optionsEn": [],
    "optionsHi": [
      "1 सप्ताह",
      "1 महीना",
      "3 महीने (56 दिन)",
      "1 साल"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "दो पूर्ण रक्तदान के बीच कम से कम 56 दिन (लगभग 3 महीने) का अंतर होना चाहिए।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Cardiovascular System",
    "tags": [
      "cardiovascular-system"
    ]
  },
  {
    "id": "ANATOMY-994",
    "questionEn": "Describe the anatomical basis for the different types of stroke based on vascular territory.",
    "questionHi": "रक्तदान के लिए न्यूनतम हीमोग्लोबिन कितना होना चाहिए?",
    "optionsEn": [],
    "optionsHi": [
      "8 g/dL",
      "10 g/dL",
      "12.5 g/dL",
      "15 g/dL"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "रक्तदान के लिए न्यूनतम Hb 12.5 g/dL होना चाहिए।",
    "difficulty": "hard",
    "topic": "anatomy",
    "subtopic": "Nervous System",
    "tags": [
      "nervous-system"
    ]
  },
  {
    "id": "ANATOMY-995",
    "questionEn": "Describe the anatomy of the pancreas including its parts, ducts, and blood supply.",
    "questionHi": "रक्तदान के लिए न्यूनतम उम्र कितनी होनी चाहिए?",
    "optionsEn": [],
    "optionsHi": [
      "14 वर्ष",
      "18 वर्ष",
      "25 वर्ष",
      "30 वर्ष"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "भारत में रक्तदान के लिए न्यूनतम उम्र 18 वर्ष है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Digestive System",
    "tags": [
      "digestive-system"
    ]
  },
  {
    "id": "ANATOMY-996",
    "questionEn": "Describe the anatomy of the female pelvic floor and its clinical relevance.",
    "questionHi": "रक्तदान के लिए न्यूनतम वजन कितना होना चाहिए?",
    "optionsEn": [],
    "optionsHi": [
      "35 kg",
      "45 kg",
      "55 kg",
      "65 kg"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "रक्तदान के लिए न्यूनतम वजन 45 kg होना चाहिए।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Reproductive System",
    "tags": [
      "reproductive-system"
    ]
  },
  {
    "id": "ANATOMY-997",
    "questionEn": "Describe the anatomy of the ear and the pathway of sound transmission.",
    "questionHi": "ग्लूकोज टेस्ट के लिए रक्त किस उंगली से लिया जाता है?",
    "optionsEn": [],
    "optionsHi": [
      "अंगूठा",
      "तर्जनी के किनारे से",
      "मध्यमा",
      "अनामिका के किनारे से (सामान्यतः)"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "अनामिका (Ring Finger) का किनारा कम दर्दनाक और सुरक्षित है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Integumentary System",
    "tags": [
      "integumentary-system"
    ]
  },
  {
    "id": "ANATOMY-998",
    "questionEn": "A patient cannot extend their wrist or fingers (wrist drop) after falling asleep with arm over chair back. Which nerve is affected and why?",
    "questionHi": "नवजात में हील प्रिक (Heel Prick) कहां किया जाता है?",
    "optionsEn": [],
    "optionsHi": [
      "एड़ी के बीच में",
      "एड़ी के बाहरी या अंदरूनी किनारे पर",
      "पंजे पर",
      "टखने पर"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "नवजात में हील प्रिक एड़ी के किनारों पर किया जाता है (बीच में नहीं)।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-999",
    "questionEn": "A patient has right ptosis, pupil dilation, and eye deviation down and out. What is the anatomical diagnosis?",
    "questionHi": "कैपिलरी ब्लड सैंपल (CBG) के लिए पहली बूंद क्यों पोंछी जाती है?",
    "optionsEn": [],
    "optionsHi": [
      "संक्रमण से बचाव",
      "ऊतक द्रव की मिलावट से बचने के लिए",
      "दर्द कम करने के लिए",
      "रक्त अधिक निकालने के लिए"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "पहली बूंद में ऊतक द्रव मिला हो सकता है जो परिणाम प्रभावित कर सकता है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  },
  {
    "id": "ANATOMY-1000",
    "questionEn": "A patient has difficulty breathing lying flat (orthopnea) and bilateral leg swelling. Using anatomical knowledge, explain the pathophysiology.",
    "questionHi": "शरीर रचना विज्ञान (Anatomy) के अध्ययन का मुख्य उद्देश्य क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "केवल परीक्षा पास करना",
      "शरीर की संरचना समझकर बेहतर स्वास्थ्य सेवा प्रदान करना",
      "केवल सर्जरी के लिए",
      "केवल दवाई देने के लिए"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "शरीर रचना की समझ स्वास्थ्य कर्मियों को सही निदान, उपचार और देखभाल प्रदान करने में मदद करती है।",
    "difficulty": "medium",
    "topic": "anatomy",
    "subtopic": "Multiple Systems",
    "tags": [
      "multiple-systems"
    ]
  }
];

export const anatomyQuestionBank: QuestionBank = {
  topicId: 'anatomy',
  topicNameEn: 'Anatomy',
  topicNameHi: 'शरीर रचना विज्ञान',
  totalQuestions: anatomyQuestions.length,
  questions: anatomyQuestions
};
