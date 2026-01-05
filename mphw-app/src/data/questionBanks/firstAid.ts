import { Question, QuestionBank } from './types';

// @ts-ignore - Large question bank
export const firstAidQuestions: Question[] = [
  {
    "id": "FIRST-AID-001",
    "questionEn": "What are the three aims of first aid?",
    "questionHi": "प्राथमिक उपचार (First Aid) की परिभाषा क्या है?",
    "optionsEn": [
      "Diagnose, Treat, Cure",
      "Preserve life, Prevent deterioration, Promote recovery",
      "Stop bleeding, Give medicine, Call doctor",
      "Clean wound, Apply bandage, Give injection"
    ],
    "optionsHi": [
      "अंतिम उपचार",
      "चिकित्सक के आने से पहले दी जाने वाली तत्काल सहायता",
      "केवल दवाई देना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "The three Ps of first aid: Preserve life (keep alive), Prevent deterioration (stop getting worse), Promote recovery (help healing).",
    "explanationHi": "First aid definition।",
    "difficulty": "easy",
    "topic": "first-aid",
    "subtopic": "Principles of First Aid",
    "tags": [
      "principles-of-first-aid"
    ]
  },
  {
    "id": "FIRST-AID-002",
    "questionEn": "What is the first thing to do at any emergency scene?",
    "questionHi": "प्राथमिक उपचार का मुख्य उद्देश्य क्या है?",
    "optionsEn": [
      "Start CPR",
      "Call ambulance",
      "Check for danger",
      "Apply bandage"
    ],
    "optionsHi": [
      "रोग ठीक करना",
      "जीवन बचाना, स्थिति बिगड़ने से रोकना, रिकवरी में मदद",
      "केवल पट्टी बांधना",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Always ensure scene safety first. An injured rescuer cannot help anyone and may become another victim.",
    "explanationHi": "3 aims of first aid।",
    "difficulty": "easy",
    "topic": "first-aid",
    "subtopic": "Principles of First Aid",
    "tags": [
      "principles-of-first-aid"
    ]
  },
  {
    "id": "FIRST-AID-003",
    "questionEn": "DRABC stands for:",
    "questionHi": "प्राथमिक उपचार के तीन P क्या हैं?",
    "optionsEn": [
      "Danger, Response, Airway, Breathing, Circulation",
      "Doctor, Respiration, Ambulance, Blood, Care",
      "Diagnose, Rescue, Aid, Bandage, Call",
      "Danger, Rescue, Alert, Blood, Compress"
    ],
    "optionsHi": [
      "Pain, Pressure, Pulse",
      "Preserve life, Prevent deterioration, Promote recovery",
      "Push, Pull, Press",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "DRABC is the primary survey sequence for assessing an emergency patient systematically.",
    "explanationHi": "3 Ps of first aid।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Principles of First Aid",
    "tags": [
      "principles-of-first-aid"
    ]
  },
  {
    "id": "FIRST-AID-004",
    "questionEn": "The technique to open airway in an unconscious person is:",
    "questionHi": "Golden Hour क्या है?",
    "optionsEn": [
      "Turn head to side",
      "Head tilt-chin lift",
      "Push on abdomen",
      "Slap the back"
    ],
    "optionsHi": [
      "सुबह का समय",
      "गंभीर चोट के बाद पहला 1 घंटा जब उपचार सबसे प्रभावी",
      "शाम का समय",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Head tilt-chin lift moves the tongue away from the back of the throat, opening the airway.",
    "explanationHi": "Golden hour concept।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Principles of First Aid",
    "tags": [
      "principles-of-first-aid"
    ]
  },
  {
    "id": "FIRST-AID-005",
    "questionEn": "To check if an unconscious person is breathing, you should:",
    "questionHi": "प्राथमिक उपचारकर्ता की पहली प्राथमिकता क्या होनी चाहिए?",
    "optionsEn": [
      "Feel the pulse only",
      "Look, Listen, and Feel for 10 seconds",
      "Shake them vigorously",
      "Put mirror near nose"
    ],
    "optionsHi": [
      "पीड़ित को उठाना",
      "अपनी सुरक्षा सुनिश्चित करना",
      "भीड़ हटाना",
      "एम्बुलेंस बुलाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Look at chest movement, listen for breath sounds, feel air on your cheek - for up to 10 seconds.",
    "explanationHi": "Safety first।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Principles of First Aid",
    "tags": [
      "principles-of-first-aid"
    ]
  },
  {
    "id": "FIRST-AID-006",
    "questionEn": "Which color in triage indicates 'immediate priority' (life-threatening but survivable)?",
    "questionHi": "आपातकालीन स्थिति में सबसे पहले क्या करना चाहिए?",
    "optionsEn": [
      "Green",
      "Yellow",
      "Red",
      "Black"
    ],
    "optionsHi": [
      "दौड़ना",
      "स्थिति का आकलन (Scene Assessment)",
      "चिल्लाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Red = Immediate (P1), Yellow = Delayed (P2), Green = Minor (P3), Black = Dead/Dying (P0).",
    "explanationHi": "Assess the scene first।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Principles of First Aid",
    "tags": [
      "principles-of-first-aid"
    ]
  },
  {
    "id": "FIRST-AID-007",
    "questionEn": "The emergency ambulance number in India is:",
    "questionHi": "भारत में आपातकालीन एम्बुलेंस नंबर क्या है?",
    "optionsEn": [
      "100",
      "108",
      "911",
      "112"
    ],
    "optionsHi": [
      "100",
      "108",
      "101",
      "112"
    ],
    "correctAnswer": 1,
    "explanationEn": "108 is the universal emergency ambulance number in India. 102 is also used for maternal emergencies.",
    "explanationHi": "Emergency ambulance number।",
    "difficulty": "easy",
    "topic": "first-aid",
    "subtopic": "Principles of First Aid",
    "tags": [
      "principles-of-first-aid"
    ]
  },
  {
    "id": "FIRST-AID-008",
    "questionEn": "The SAMPLE history acronym stands for:",
    "questionHi": "भारत में एकीकृत आपातकालीन नंबर क्या है?",
    "optionsEn": [
      "Signs, Allergies, Medications, Past history, Last meal, Events",
      "Symptoms, Age, Medicine, Problem, Level, Examination",
      "Shock, Airway, Monitor, Pulse, Lungs, Evaluate",
      "Safety, Assessment, Management, Priority, Location, Emergency"
    ],
    "optionsHi": [
      "108",
      "112",
      "100",
      "102"
    ],
    "correctAnswer": 0,
    "explanationEn": "SAMPLE helps gather patient history: Signs/Symptoms, Allergies, Medications, Past history, Last meal, Events leading to emergency.",
    "explanationHi": "Unified emergency number।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Principles of First Aid",
    "tags": [
      "principles-of-first-aid"
    ]
  },
  {
    "id": "FIRST-AID-009",
    "questionEn": "The compression to breath ratio for adult CPR is:",
    "questionHi": "Primary Survey में ABC का क्या अर्थ है?",
    "optionsEn": [
      "15:2",
      "30:2",
      "5:1",
      "10:1"
    ],
    "optionsHi": [
      "Always Be Careful",
      "Airway, Breathing, Circulation",
      "Act Before Calling",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adult CPR: 30 chest compressions followed by 2 rescue breaths. This ratio ensures adequate blood flow.",
    "explanationHi": "ABC of first aid।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-010",
    "questionEn": "The correct depth of chest compressions for adult CPR is:",
    "questionHi": "DRABC में D का क्या अर्थ है?",
    "optionsEn": [
      "1-2 cm",
      "2-3 cm",
      "5-6 cm (about 2 inches)",
      "10 cm"
    ],
    "optionsHi": [
      "Death",
      "Danger (खतरा)",
      "Doctor",
      "Drug"
    ],
    "correctAnswer": 2,
    "explanationEn": "Compress chest at least 5 cm (2 inches) but not more than 6 cm in adults for effective CPR.",
    "explanationHi": "D for Danger check।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-011",
    "questionEn": "The correct rate of chest compressions during CPR is:",
    "questionHi": "DRABC में R का क्या अर्थ है?",
    "optionsEn": [
      "60-80 per minute",
      "80-100 per minute",
      "100-120 per minute",
      "140-160 per minute"
    ],
    "optionsHi": [
      "Run",
      "Response (प्रतिक्रिया जांच)",
      "Rest",
      "Recover"
    ],
    "correctAnswer": 2,
    "explanationEn": "Push hard and fast at 100-120 compressions per minute for effective CPR.",
    "explanationHi": "R for Response check।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-012",
    "questionEn": "The correct hand position for adult CPR is:",
    "questionHi": "बेहोश व्यक्ति की प्रतिक्रिया कैसे जांचें?",
    "optionsEn": [
      "On the stomach",
      "Center of the chest between the nipples",
      "Left side of chest over heart",
      "Right side of chest"
    ],
    "optionsHi": [
      "पानी डालें",
      "कंधे पर थपथपाएं और जोर से पूछें 'क्या आप ठीक हैं?'",
      "लात मारें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Place heel of hand on center of chest (lower half of sternum), between the nipples.",
    "explanationHi": "Tap and shout।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-013",
    "questionEn": "For infant CPR, you should use:",
    "questionHi": "Airway खोलने की विधि क्या है?",
    "optionsEn": [
      "Two hands like adults",
      "One hand",
      "Two fingers",
      "Palm only"
    ],
    "optionsHi": [
      "सिर झुकाएं",
      "Head Tilt-Chin Lift (सिर पीछे, ठोड़ी ऊपर)",
      "गर्दन मोड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "For infants (<1 year), use two fingers placed on the breastbone just below the nipple line.",
    "explanationHi": "Head tilt chin lift।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-014",
    "questionEn": "The depth of compressions for infant CPR is:",
    "questionHi": "Jaw Thrust Maneuver कब उपयोग करते हैं?",
    "optionsEn": [
      "1 cm",
      "4 cm (1.5 inches)",
      "5 cm",
      "6 cm"
    ],
    "optionsHi": [
      "हमेशा",
      "जब गर्दन/रीढ़ की चोट का संदेह हो",
      "कभी नहीं",
      "केवल बच्चों में"
    ],
    "correctAnswer": 1,
    "explanationEn": "For infants, compress about 4 cm (1.5 inches) or 1/3 of chest depth.",
    "explanationHi": "For suspected spinal injury।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-015",
    "questionEn": "An unconscious person who IS breathing should be placed in:",
    "questionHi": "श्वास जांचने के लिए कितने सेकंड देखना चाहिए?",
    "optionsEn": [
      "Sitting position",
      "Flat on back",
      "Recovery position",
      "Prone position"
    ],
    "optionsHi": [
      "5 सेकंड",
      "10 सेकंड (देखो, सुनो, महसूस करो)",
      "30 सेकंड",
      "1 मिनट"
    ],
    "correctAnswer": 2,
    "explanationEn": "Recovery position (on side) keeps airway open and allows fluids to drain, preventing aspiration.",
    "explanationHi": "Look, listen, feel for 10 seconds।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-016",
    "questionEn": "If spinal injury is suspected, which technique should be used to open airway?",
    "questionHi": "सामान्य वयस्क की श्वास दर कितनी होती है?",
    "optionsEn": [
      "Head tilt-chin lift",
      "Jaw thrust",
      "Neck extension",
      "Head rotation"
    ],
    "optionsHi": [
      "8-10/मिनट",
      "12-20/मिनट",
      "25-30/मिनट",
      "40-50/मिनट"
    ],
    "correctAnswer": 1,
    "explanationEn": "Jaw thrust opens airway without moving the neck, protecting the potentially injured spine.",
    "explanationHi": "Normal adult respiratory rate।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-017",
    "questionEn": "A person who is choking and can cough forcefully should be:",
    "questionHi": "नाड़ी (Pulse) जांचने का सबसे आसान स्थान वयस्क में कौन सा है?",
    "optionsEn": [
      "Given back blows immediately",
      "Encouraged to keep coughing",
      "Given abdominal thrusts",
      "Made to drink water"
    ],
    "optionsHi": [
      "कलाई (Radial)",
      "गर्दन (Carotid)",
      "जांघ (Femoral)",
      "पैर"
    ],
    "correctAnswer": 1,
    "explanationEn": "If choking person can cough, speak, or breathe, it's mild obstruction. Encourage coughing to expel the object.",
    "explanationHi": "Carotid pulse for emergency।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-018",
    "questionEn": "The Heimlich maneuver (abdominal thrusts) is given:",
    "questionHi": "शिशु में नाड़ी कहां जांचनी चाहिए?",
    "optionsEn": [
      "Below the belly button",
      "Between navel and lower tip of sternum",
      "On the chest",
      "On the back"
    ],
    "optionsHi": [
      "Carotid",
      "Brachial (बांह के अंदर)",
      "Radial",
      "Femoral"
    ],
    "correctAnswer": 1,
    "explanationEn": "Abdominal thrusts are given in the upper abdomen, between the navel and the xiphoid process.",
    "explanationHi": "Brachial pulse in infants।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-019",
    "questionEn": "For a choking infant, you should give:",
    "questionHi": "सामान्य वयस्क की हृदय गति कितनी होती है?",
    "optionsEn": [
      "Abdominal thrusts only",
      "5 back blows then 5 chest thrusts",
      "Finger sweep",
      "Water to drink"
    ],
    "optionsHi": [
      "40-50/मिनट",
      "60-100/मिनट",
      "120-150/मिनट",
      "20-30/मिनट"
    ],
    "correctAnswer": 1,
    "explanationEn": "For infants: 5 back blows between shoulder blades, then 5 chest thrusts. No abdominal thrusts for infants.",
    "explanationHi": "Normal adult heart rate।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-020",
    "questionEn": "Signs of severe airway obstruction include all EXCEPT:",
    "questionHi": "Recovery Position (पुनर्प्राप्ति स्थिति) का उपयोग कब करते हैं?",
    "optionsEn": [
      "Unable to speak",
      "Unable to cough",
      "Able to cry and cough",
      "Blue color around lips"
    ],
    "optionsHi": [
      "होश में व्यक्ति",
      "बेहोश लेकिन सांस लेता व्यक्ति",
      "सांस न लेता व्यक्ति",
      "हड्डी टूटी हो"
    ],
    "correctAnswer": 2,
    "explanationEn": "Severe obstruction: cannot speak/cough/breathe, blue color. Being able to cry and cough indicates mild obstruction.",
    "explanationHi": "For unconscious breathing person।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-021",
    "questionEn": "Arterial bleeding is characterized by:",
    "questionHi": "Recovery Position में व्यक्ति को किस करवट लिटाते हैं?",
    "optionsEn": [
      "Dark red, steady flow",
      "Bright red, spurting with pulse",
      "Oozing from surface",
      "Minimal bleeding"
    ],
    "optionsHi": [
      "पीठ के बल",
      "पेट के बल",
      "एक करवट (Left Lateral)",
      "बैठाकर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Arterial blood is bright red (oxygenated) and spurts with each heartbeat. This is a medical emergency.",
    "explanationHi": "Lateral position।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-022",
    "questionEn": "The first method to control external bleeding is:",
    "questionHi": "Recovery Position का मुख्य लाभ क्या है?",
    "optionsEn": [
      "Tourniquet",
      "Elevation",
      "Direct pressure",
      "Pressure points"
    ],
    "optionsHi": [
      "आराम",
      "वायुमार्ग खुला रहे, उल्टी बाहर निकले",
      "सुंदर दिखे",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Direct pressure on the wound is the first and most effective method to control bleeding.",
    "explanationHi": "Maintains airway, prevents aspiration।",
    "difficulty": "easy",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-023",
    "questionEn": "A laceration is a wound that is:",
    "questionHi": "CPR का पूरा नाम क्या है?",
    "optionsEn": [
      "Clean and straight",
      "Torn and jagged",
      "Small and deep",
      "Scraped surface"
    ],
    "optionsHi": [
      "Chest Pain Relief",
      "Cardio-Pulmonary Resuscitation",
      "Central Pulse Rate",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Laceration = torn/jagged wound. Incision = clean/straight cut. Puncture = small/deep. Abrasion = scraped.",
    "explanationHi": "CPR full form।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-024",
    "questionEn": "An embedded object in a wound should be:",
    "questionHi": "CPR कब देना चाहिए?",
    "optionsEn": [
      "Removed immediately",
      "Left in place and stabilized",
      "Pushed deeper",
      "Cut short"
    ],
    "optionsHi": [
      "होश में हो",
      "जब व्यक्ति सांस न ले रहा हो और नाड़ी न हो",
      "जब बुखार हो",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Never remove embedded objects - they may be preventing bleeding. Stabilize with padding and bandage around it.",
    "explanationHi": "CPR indication।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-025",
    "questionEn": "A tourniquet should be applied:",
    "questionHi": "वयस्क में CPR में छाती दबाने की दर क्या होनी चाहिए?",
    "optionsEn": [
      "For all bleeding wounds",
      "Only as a last resort when other methods fail",
      "Over joints",
      "Loosely"
    ],
    "optionsHi": [
      "60/मिनट",
      "100-120/मिनट",
      "150/मिनट",
      "200/मिनट"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tourniquets are last resort for life-threatening limb bleeding when direct pressure fails.",
    "explanationHi": "CPR compression rate।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-026",
    "questionEn": "Signs of internal bleeding include all EXCEPT:",
    "questionHi": "वयस्क में CPR में छाती कितनी गहराई तक दबानी चाहिए?",
    "optionsEn": [
      "Rapid, weak pulse",
      "Pale, cold, clammy skin",
      "Bruising without external wound",
      "Bright red bleeding from wound"
    ],
    "optionsHi": [
      "1 इंच",
      "2-2.4 इंच (5-6 cm)",
      "4 इंच",
      "0.5 इंच"
    ],
    "correctAnswer": 3,
    "explanationEn": "Internal bleeding shows signs of shock without visible bleeding. External bright red blood is external bleeding.",
    "explanationHi": "CPR compression depth।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-027",
    "questionEn": "Shock is defined as:",
    "questionHi": "CPR में Compression:Ventilation अनुपात वयस्क में क्या है?",
    "optionsEn": [
      "Fear after an accident",
      "Inadequate tissue perfusion",
      "Electrical injury",
      "Heart attack"
    ],
    "optionsHi": [
      "15:2",
      "30:2",
      "15:1",
      "5:1"
    ],
    "correctAnswer": 1,
    "explanationEn": "Shock is inadequate blood flow/oxygen delivery to tissues, leading to organ failure if untreated.",
    "explanationHi": "30 compressions : 2 breaths।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-028",
    "questionEn": "Early signs of shock include:",
    "questionHi": "Hands-Only CPR में क्या करते हैं?",
    "optionsEn": [
      "Slow pulse, warm skin",
      "Rapid pulse, pale skin, anxiety",
      "High blood pressure",
      "Flushed red face"
    ],
    "optionsHi": [
      "केवल सांस देते हैं",
      "केवल छाती दबाते हैं (बिना मुंह से सांस)",
      "दोनों",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Early shock: rapid/weak pulse, pale/cool/clammy skin, anxiety, thirst. Body is compensating.",
    "explanationHi": "Compression-only CPR।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-029",
    "questionEn": "Hypovolemic shock is caused by:",
    "questionHi": "CPR में छाती कहां दबानी चाहिए?",
    "optionsEn": [
      "Heart failure",
      "Allergic reaction",
      "Loss of blood or fluids",
      "Infection"
    ],
    "optionsHi": [
      "पेट पर",
      "छाती के बीच में (Sternum के निचले आधे भाग)",
      "गर्दन पर",
      "कंधे पर"
    ],
    "correctAnswer": 2,
    "explanationEn": "Hypovolemic = low volume. Caused by bleeding, severe burns, dehydration, or diarrhea.",
    "explanationHi": "Center of chest।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-030",
    "questionEn": "Anaphylactic shock is caused by:",
    "questionHi": "CPR कब तक जारी रखना चाहिए?",
    "optionsEn": [
      "Blood loss",
      "Heart attack",
      "Severe allergic reaction",
      "Infection"
    ],
    "optionsHi": [
      "5 मिनट",
      "जब तक मदद न आए या व्यक्ति सामान्य न हो",
      "10 मिनट",
      "1 मिनट"
    ],
    "correctAnswer": 2,
    "explanationEn": "Anaphylaxis is severe allergic reaction causing airway swelling and circulatory collapse.",
    "explanationHi": "Continue until help arrives।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-031",
    "questionEn": "First aid position for a person in shock (without spinal injury) is:",
    "questionHi": "AED का पूरा नाम क्या है?",
    "optionsEn": [
      "Sitting up",
      "Flat on back with legs elevated",
      "Head elevated",
      "Standing"
    ],
    "optionsHi": [
      "Automatic Emergency Device",
      "Automated External Defibrillator",
      "Advanced Electric Device",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Elevating legs helps blood return to vital organs. Keep warm, monitor breathing.",
    "explanationHi": "AED full form।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-032",
    "questionEn": "Signs of a fracture include all EXCEPT:",
    "questionHi": "AED का उपयोग कब करते हैं?",
    "optionsEn": [
      "Pain at the site",
      "Swelling",
      "Deformity",
      "Increased movement"
    ],
    "optionsHi": [
      "बेहोशी में",
      "Cardiac Arrest में (हृदय की अनियमित धड़कन ठीक करने)",
      "फ्रैक्चर में",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Fractures cause pain, swelling, deformity, and loss of function (decreased movement).",
    "explanationHi": "AED for cardiac arrest।",
    "difficulty": "easy",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-033",
    "questionEn": "An open (compound) fracture is one where:",
    "questionHi": "Chain of Survival में कितनी कड़ियां हैं?",
    "optionsEn": [
      "The bone is completely broken",
      "The bone breaks the skin",
      "Two bones are broken",
      "The joint is dislocated"
    ],
    "optionsHi": [
      "3",
      "5",
      "7",
      "10"
    ],
    "correctAnswer": 1,
    "explanationEn": "Open fracture = bone pierces skin or wound exposes bone. Higher infection risk.",
    "explanationHi": "5 links in chain of survival।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-034",
    "questionEn": "The purpose of splinting a fracture is to:",
    "questionHi": "Chain of Survival की पहली कड़ी क्या है?",
    "optionsEn": [
      "Heal the bone",
      "Prevent movement and reduce pain",
      "Push bone back in place",
      "Increase blood flow"
    ],
    "optionsHi": [
      "CPR",
      "जल्दी पहचान और मदद बुलाना",
      "AED",
      "अस्पताल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Splinting immobilizes the fracture, preventing further injury and reducing pain.",
    "explanationHi": "Early recognition and call।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-035",
    "questionEn": "When splinting, you should immobilize:",
    "questionHi": "Choking (गला घुटना) क्या है?",
    "optionsEn": [
      "Only the fracture site",
      "Joint above and below fracture",
      "Entire limb",
      "Only the joint"
    ],
    "optionsHi": [
      "सांस की बीमारी",
      "वायुमार्ग में कोई वस्तु अटक जाना",
      "हृदय रोग",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Immobilize the joints above and below the fracture to prevent movement at fracture site.",
    "explanationHi": "Airway obstruction।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-036",
    "questionEn": "RICE stands for:",
    "questionHi": "Mild Choking (हल्का) के लक्षण क्या हैं?",
    "optionsEn": [
      "Rest, Ice, Compression, Elevation",
      "Run, Inject, Cut, Examine",
      "Remove, Inspect, Clean, Evacuate",
      "Rest, Inject, Compress, Exercise"
    ],
    "optionsHi": [
      "बोल नहीं सकता",
      "खांस सकता है, बोल सकता है, सांस ले सकता है",
      "नीला पड़ जाना",
      "बेहोश होना"
    ],
    "correctAnswer": 0,
    "explanationEn": "RICE is first aid for soft tissue injuries like sprains: Rest, Ice, Compression bandage, Elevation.",
    "explanationHi": "Partial obstruction।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-037",
    "questionEn": "A person with suspected spinal injury should:",
    "questionHi": "Severe Choking (गंभीर) के लक्षण क्या हैं?",
    "optionsEn": [
      "Be moved to a comfortable position",
      "Have their neck immobilized and NOT be moved",
      "Sit up immediately",
      "Walk to the ambulance"
    ],
    "optionsHi": [
      "जोर से खांसना",
      "खांस/बोल/सांस नहीं ले सकता, गला पकड़ना, नीला पड़ना",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Spinal injuries require immobilization. Moving can cause permanent paralysis or death.",
    "explanationHi": "Complete obstruction।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-038",
    "questionEn": "The immediate first aid for a thermal burn is:",
    "questionHi": "Mild Choking में क्या करना चाहिए?",
    "optionsEn": [
      "Apply butter or oil",
      "Cool with running water for 20 minutes",
      "Cover with cotton",
      "Apply ice directly"
    ],
    "optionsHi": [
      "Heimlich Maneuver",
      "खांसने के लिए प्रोत्साहित करना",
      "पीठ थपथपाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cool burn under cool running water for 20 minutes. NO butter, oil, toothpaste, or ice.",
    "explanationHi": "Encourage coughing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-039",
    "questionEn": "A burn with blisters is classified as:",
    "questionHi": "Severe Choking में वयस्क के लिए कौन सी विधि उपयोग करते हैं?",
    "optionsEn": [
      "Superficial (first degree)",
      "Partial thickness (second degree)",
      "Full thickness (third degree)",
      "Fourth degree"
    ],
    "optionsHi": [
      "केवल खांसना",
      "Back Blows और Abdominal Thrusts (Heimlich Maneuver)",
      "CPR",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Partial thickness burns damage epidermis and dermis, causing blisters. Very painful.",
    "explanationHi": "Back blows and Heimlich।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-040",
    "questionEn": "A full thickness (third degree) burn appears:",
    "questionHi": "Heimlich Maneuver में कहां दबाव देते हैं?",
    "optionsEn": [
      "Red with blisters",
      "White/waxy or charred, painless",
      "Pink and moist",
      "Same as normal skin"
    ],
    "optionsHi": [
      "छाती पर",
      "नाभि के ऊपर और पसलियों के नीचे (पेट पर)",
      "पीठ पर",
      "गर्दन पर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Full thickness burns destroy all skin layers including nerves, appearing white/charred and painless.",
    "explanationHi": "Upper abdomen।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-041",
    "questionEn": "The Rule of Nines for adults states that each leg represents what percentage of body surface?",
    "questionHi": "Back Blows कैसे देते हैं?",
    "optionsEn": [
      "9%",
      "18%",
      "27%",
      "36%"
    ],
    "optionsHi": [
      "धीरे से",
      "हथेली की एड़ी से कंधे के बीच में 5 बार जोर से",
      "मुट्ठी से",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rule of Nines: Each leg = 18% (front 9%, back 9%). Head = 9%, each arm = 9%, front torso = 18%, back = 18%.",
    "explanationHi": "5 back blows।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-042",
    "questionEn": "For chemical burns, the first aid is to:",
    "questionHi": "गर्भवती या मोटे व्यक्ति में Choking के लिए क्या करें?",
    "optionsEn": [
      "Apply neutralizing agent",
      "Flush with large amounts of water",
      "Cover immediately",
      "Apply ointment"
    ],
    "optionsHi": [
      "Abdominal Thrust",
      "Chest Thrusts (छाती पर दबाव)",
      "कुछ नहीं",
      "पानी पिलाएं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Remove contaminated clothing and flush with copious water for at least 20 minutes. Don't use neutralizers.",
    "explanationHi": "Chest thrusts for pregnant/obese।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-043",
    "questionEn": "First aid for snake bite includes:",
    "questionHi": "शिशु (<1 वर्ष) में Choking के लिए क्या करें?",
    "optionsEn": [
      "Cut and suck the venom out",
      "Apply tourniquet above bite",
      "Keep calm, immobilize limb, transport to hospital",
      "Apply ice"
    ],
    "optionsHi": [
      "Heimlich Maneuver",
      "5 Back Blows + 5 Chest Thrusts",
      "केवल CPR",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Immobilize to slow venom spread, keep calm, remove jewelry, and transport quickly. NO tourniquet, NO cutting.",
    "explanationHi": "Infant choking technique।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-044",
    "questionEn": "Which of the following should NOT be done for snake bite?",
    "questionHi": "शिशु में Back Blows देते समय सिर कैसे रखें?",
    "optionsEn": [
      "Remove rings and watches",
      "Keep the bitten limb still",
      "Apply tight tourniquet",
      "Transport to hospital"
    ],
    "optionsHi": [
      "ऊपर",
      "नीचे (शरीर से नीचा)",
      "सीधा",
      "एक तरफ"
    ],
    "correctAnswer": 2,
    "explanationEn": "Tourniquets can cause tissue death and don't prevent systemic envenomation effectively.",
    "explanationHi": "Head lower than body।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-045",
    "questionEn": "After a dog bite, rabies vaccination is:",
    "questionHi": "अगर Choking व्यक्ति बेहोश हो जाए तो क्या करें?",
    "optionsEn": [
      "Never needed",
      "Only if dog dies",
      "Always needed for all dog bites",
      "Based on assessment and dog's status"
    ],
    "optionsHi": [
      "छोड़ दें",
      "CPR शुरू करें",
      "केवल Back Blows",
      "पानी डालें"
    ],
    "correctAnswer": 3,
    "explanationEn": "PEP (post-exposure prophylaxis) decision depends on wound category, dog vaccination status, and dog observation.",
    "explanationHi": "Start CPR if unconscious।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-046",
    "questionEn": "First aid for bee sting includes:",
    "questionHi": "Shock (आघात) क्या है?",
    "optionsEn": [
      "Squeeze the stinger out",
      "Scrape the stinger out sideways",
      "Leave the stinger in",
      "Apply hot compress"
    ],
    "optionsHi": [
      "बिजली का झटका",
      "शरीर के ऊतकों को पर्याप्त रक्त/ऑक्सीजन न मिलना",
      "मानसिक आघात",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Scrape stinger out with card edge - squeezing injects more venom from the venom sac.",
    "explanationHi": "Circulatory shock।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-047",
    "questionEn": "Signs of anaphylaxis after a sting include all EXCEPT:",
    "questionHi": "Hypovolemic Shock किससे होता है?",
    "optionsEn": [
      "Difficulty breathing",
      "Swelling of face/throat",
      "Localized pain only",
      "Rapid weak pulse"
    ],
    "optionsHi": [
      "हृदय की समस्या",
      "रक्त/तरल पदार्थ की कमी (रक्तस्राव, निर्जलीकरण)",
      "एलर्जी",
      "संक्रमण"
    ],
    "correctAnswer": 2,
    "explanationEn": "Localized reaction is normal. Anaphylaxis involves systemic symptoms: airway swelling, breathing difficulty, shock.",
    "explanationHi": "Blood/fluid loss।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-048",
    "questionEn": "If a person has swallowed a corrosive substance (acid/alkali), you should:",
    "questionHi": "Anaphylactic Shock किससे होता है?",
    "optionsEn": [
      "Induce vomiting",
      "NOT induce vomiting",
      "Give milk to drink",
      "Give salt water"
    ],
    "optionsHi": [
      "रक्तस्राव",
      "गंभीर एलर्जिक प्रतिक्रिया",
      "हृदय रोग",
      "संक्रमण"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vomiting corrosives causes double damage (going down and coming up). Also never induce vomiting for petroleum products.",
    "explanationHi": "Severe allergic reaction।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-049",
    "questionEn": "Information to gather about a poisoning case includes all EXCEPT:",
    "questionHi": "Cardiogenic Shock किससे होता है?",
    "optionsEn": [
      "What substance was taken",
      "How much was taken",
      "Patient's blood group",
      "Time it was taken"
    ],
    "optionsHi": [
      "रक्तस्राव",
      "हृदय की पंपिंग क्षमता कम होना (Heart Attack)",
      "एलर्जी",
      "संक्रमण"
    ],
    "correctAnswer": 2,
    "explanationEn": "Important: What, how much, when, route of exposure. Bring container to hospital. Blood group is not immediately relevant.",
    "explanationHi": "Heart failure।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-050",
    "questionEn": "For inhalation poisoning (like carbon monoxide), first aid is:",
    "questionHi": "Septic Shock किससे होता है?",
    "optionsEn": [
      "Give water to drink",
      "Remove to fresh air",
      "Make them walk around",
      "Apply cold compress"
    ],
    "optionsHi": [
      "रक्तस्राव",
      "गंभीर संक्रमण",
      "एलर्जी",
      "हृदय रोग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Move victim to fresh air, check breathing, give oxygen if available, prepare for CPR if needed.",
    "explanationHi": "Severe infection।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-051",
    "questionEn": "The first priority in a drowning situation is:",
    "questionHi": "Shock के लक्षण क्या हैं?",
    "optionsEn": [
      "Jump in to rescue",
      "Ensure your own safety",
      "Call for help only",
      "Wait for lifeguard"
    ],
    "optionsHi": [
      "गर्म त्वचा",
      "पीली/ठंडी/चिपचिपी त्वचा, तेज नाड़ी, तेज सांस, चक्कर",
      "लाल चेहरा",
      "धीमी नाड़ी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Reach, Throw, Row, Don't Go. Don't become a victim yourself. Use reaching/throwing aids first.",
    "explanationHi": "Signs of shock।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-052",
    "questionEn": "After rescuing a drowning person who is not breathing:",
    "questionHi": "Shock में पैर कैसे रखने चाहिए?",
    "optionsEn": [
      "Try to drain water from lungs first",
      "Begin CPR immediately",
      "Wait 5 minutes",
      "Give mouth-to-mouth only"
    ],
    "optionsHi": [
      "नीचे",
      "ऊंचे (Shock Position)",
      "मुड़े हुए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Don't waste time trying to drain water. Start CPR immediately if not breathing.",
    "explanationHi": "Elevate legs।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-053",
    "questionEn": "During a seizure, you should:",
    "questionHi": "Shock में क्या नहीं करना चाहिए?",
    "optionsEn": [
      "Put something in their mouth",
      "Restrain them firmly",
      "Protect from injury, do not restrain",
      "Pour water on face"
    ],
    "optionsHi": [
      "गर्म रखना",
      "पानी या खाना देना",
      "पैर ऊंचे करना",
      "एम्बुलेंस बुलाना"
    ],
    "correctAnswer": 2,
    "explanationEn": "Clear area of hazards, protect head, don't restrain or put anything in mouth. Time the seizure.",
    "explanationHi": "Nothing by mouth।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-054",
    "questionEn": "FAST for stroke stands for:",
    "questionHi": "Fainting (मूर्च्छा) क्या है?",
    "optionsEn": [
      "Fever, Arm, Speech, Temperature",
      "Face, Arms, Speech, Time",
      "First, Aid, Support, Transport",
      "Find, Assess, Stabilize, Transfer"
    ],
    "optionsHi": [
      "स्थायी बेहोशी",
      "मस्तिष्क में अस्थायी रक्त कमी से अस्थायी बेहोशी",
      "मृत्यु",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "FAST: Face drooping, Arm weakness, Speech difficulty, Time to call emergency. Every minute matters in stroke.",
    "explanationHi": "Temporary loss of consciousness।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-055",
    "questionEn": "Symptoms of heart attack include all EXCEPT:",
    "questionHi": "Fainting के सामान्य कारण क्या हैं?",
    "optionsEn": [
      "Chest pain/pressure",
      "Pain radiating to left arm/jaw",
      "Sudden vision loss",
      "Sweating and nausea"
    ],
    "optionsHi": [
      "खाना खाना",
      "लंबे समय खड़े रहना, गर्मी, भूख, डर, दर्द",
      "व्यायाम",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Heart attack: chest pain/pressure, pain to arm/jaw/back, sweating, nausea, shortness of breath. Vision loss suggests stroke.",
    "explanationHi": "Common causes of fainting।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-056",
    "questionEn": "A diabetic patient who is confused, sweating, and trembling likely has:",
    "questionHi": "Fainting होने पर क्या करें?",
    "optionsEn": [
      "High blood sugar",
      "Low blood sugar (hypoglycemia)",
      "Heart attack",
      "Stroke"
    ],
    "optionsHi": [
      "बैठा दें",
      "लिटाकर पैर ऊंचे करें, ताजी हवा दें",
      "पानी डालें",
      "थप्पड़ मारें"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hypoglycemia causes confusion, sweating, trembling, hunger, weakness. Give sugar/glucose if conscious.",
    "explanationHi": "Lie down, elevate legs।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-057",
    "questionEn": "When should you move an injured person?",
    "questionHi": "Fainting से पहले के लक्षण (Pre-syncope) क्या हैं?",
    "optionsEn": [
      "Immediately in all cases",
      "Only if there is immediate danger",
      "After 30 minutes",
      "Never"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "चक्कर, आंखों के आगे अंधेरा, पसीना, मतली",
      "बुखार",
      "खांसी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Move only if scene is dangerous (fire, traffic, collapse). Otherwise, wait for ambulance to avoid worsening injuries.",
    "explanationHi": "Pre-syncope symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Emergency Transport",
    "tags": [
      "emergency-transport"
    ]
  },
  {
    "id": "FIRST-AID-058",
    "questionEn": "MIST handover format stands for:",
    "questionHi": "अगर किसी को Fainting होने वाली हो तो क्या करें?",
    "optionsEn": [
      "Medicine, Injury, Signs, Treatment",
      "Mechanism, Injuries, Signs/Symptoms, Treatment",
      "Move, Immobilize, Support, Transfer",
      "Monitor, Inspect, Stabilize, Transport"
    ],
    "optionsHi": [
      "खड़ा रहने दें",
      "बैठाकर सिर घुटनों के बीच झुकाएं या लिटा दें",
      "दौड़ाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MIST ensures complete handover: Mechanism of injury, Injuries found, Signs/Symptoms, Treatment given.",
    "explanationHi": "Sit or lie down।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Emergency Transport",
    "tags": [
      "emergency-transport"
    ]
  },
  {
    "id": "FIRST-AID-059",
    "questionEn": "CPR should be stopped when:",
    "questionHi": "Seizure/Convulsion (दौरा) क्या है?",
    "optionsEn": [
      "After 2 minutes",
      "Person shows signs of life or help arrives",
      "You feel tired",
      "After 30 compressions"
    ],
    "optionsHi": [
      "हृदय रोग",
      "मस्तिष्क की असामान्य विद्युत गतिविधि से अनियंत्रित हलचल",
      "फ्रैक्चर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Continue CPR until: person recovers, qualified help takes over, you're too exhausted, or scene becomes unsafe.",
    "explanationHi": "Abnormal brain activity।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-060",
    "questionEn": "Hands-only CPR means:",
    "questionHi": "Epilepsy (मिर्गी) क्या है?",
    "optionsEn": [
      "Using only one hand",
      "Compressions without rescue breaths",
      "Gentle compressions",
      "CPR for hands only"
    ],
    "optionsHi": [
      "एक बार दौरा",
      "बार-बार दौरे पड़ने की स्थिति",
      "बुखार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hands-only CPR (compressions only) is recommended if rescuer is untrained or unwilling to give breaths.",
    "explanationHi": "Recurrent seizures।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-061",
    "questionEn": "Capillary bleeding is characterized by:",
    "questionHi": "दौरे के दौरान क्या करना चाहिए?",
    "optionsEn": [
      "Spurting bright red blood",
      "Steady dark red flow",
      "Slow oozing",
      "No visible bleeding"
    ],
    "optionsHi": [
      "मुंह में कुछ डालना",
      "सुरक्षित स्थान पर लिटाना, खतरनाक वस्तुएं हटाना, समय नोट करना",
      "रोकने की कोशिश करना",
      "पानी डालना"
    ],
    "correctAnswer": 2,
    "explanationEn": "Capillary bleeding oozes slowly from scrapes/abrasions. Usually stops on its own.",
    "explanationHi": "Protect from injury।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-062",
    "questionEn": "A nosebleed should be managed by:",
    "questionHi": "दौरे के दौरान क्या नहीं करना चाहिए?",
    "optionsEn": [
      "Tilting head back",
      "Leaning forward and pinching soft part of nose",
      "Lying down",
      "Packing with cloth"
    ],
    "optionsHi": [
      "सुरक्षित रखना",
      "मुंह में कुछ डालना, रोकने की कोशिश करना",
      "समय नोट करना",
      "एम्बुलेंस बुलाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lean forward to prevent swallowing blood. Pinch soft part of nose for 10-15 minutes.",
    "explanationHi": "Don't restrain or put anything in mouth।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-063",
    "questionEn": "Which burn should ALWAYS be referred to hospital?",
    "questionHi": "दौरा कितने समय तक रहे तो एम्बुलेंस बुलाएं?",
    "optionsEn": [
      "Small superficial burn",
      "Burns to face, hands, feet, or genitals",
      "Minor sunburn",
      "Small first-degree burn"
    ],
    "optionsHi": [
      "1 मिनट",
      "5 मिनट से अधिक (Status Epilepticus)",
      "30 मिनट",
      "कभी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Burns to face (airway risk), hands/feet (function), genitals, or circumferential burns need hospital care.",
    "explanationHi": "Call if >5 minutes।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-064",
    "questionEn": "Burn blisters should be:",
    "questionHi": "दौरे के बाद (Post-ictal phase) में व्यक्ति कैसा महसूस करता है?",
    "optionsEn": [
      "Popped immediately",
      "Left intact",
      "Cut open",
      "Scraped off"
    ],
    "optionsHi": [
      "सामान्य",
      "भ्रमित, थका हुआ, नींद आना",
      "उत्साहित",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Blisters protect underlying tissue. Don't pop them as it increases infection risk.",
    "explanationHi": "Post-ictal confusion।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-065",
    "questionEn": "Wound washing after dog bite should be done with:",
    "questionHi": "दौरे के बाद क्या करें?",
    "optionsEn": [
      "Hot water only",
      "Soap and running water for 15 minutes",
      "Alcohol only",
      "No washing needed"
    ],
    "optionsHi": [
      "उठाकर चलाएं",
      "Recovery Position में लिटाएं, आराम दें, भरोसा दिलाएं",
      "पानी पिलाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Thorough washing with soap and water significantly reduces rabies risk. Wash for at least 15 minutes.",
    "explanationHi": "Recovery position after seizure।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-066",
    "questionEn": "Crepitus in a fracture is:",
    "questionHi": "Febrile Seizure (बुखार से दौरा) किस आयु में आम है?",
    "optionsEn": [
      "Swelling",
      "Bruising",
      "Grating sound/feeling of bone ends",
      "Loss of sensation"
    ],
    "optionsHi": [
      "वयस्कों में",
      "6 माह से 5 वर्ष के बच्चों में",
      "बुजुर्गों में",
      "किशोरों में"
    ],
    "correctAnswer": 2,
    "explanationEn": "Crepitus is the grating sound or sensation when broken bone ends rub together. Don't intentionally check for it.",
    "explanationHi": "Common in young children।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-067",
    "questionEn": "Status epilepticus is a seizure lasting more than:",
    "questionHi": "Heart Attack (दिल का दौरा) क्या है?",
    "optionsEn": [
      "1 minute",
      "5 minutes",
      "15 minutes",
      "30 minutes"
    ],
    "optionsHi": [
      "हृदय रुकना",
      "हृदय की मांसपेशियों को रक्त आपूर्ति बंद होना",
      "हृदय तेज धड़कना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Seizure >5 minutes or repeated seizures without recovery is status epilepticus - a medical emergency.",
    "explanationHi": "Blocked coronary artery।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-068",
    "questionEn": "In anaphylactic shock, adrenaline is given:",
    "questionHi": "Heart Attack के लक्षण क्या हैं?",
    "optionsEn": [
      "Intravenously",
      "Intramuscularly in outer thigh",
      "Orally",
      "Under the tongue"
    ],
    "optionsHi": [
      "पेट दर्द",
      "छाती में दबाव/दर्द (बाएं हाथ, जबड़े में फैलना), सांस फूलना, पसीना",
      "सिरदर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adrenaline (epinephrine) 0.5mg IM in anterolateral thigh is first-line treatment for anaphylaxis.",
    "explanationHi": "Heart attack symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-069",
    "questionEn": "Secondary drowning refers to:",
    "questionHi": "Heart Attack में क्या करें?",
    "optionsEn": [
      "Drowning in pool vs. ocean",
      "Delayed respiratory problems after near-drowning",
      "Drowning while unconscious",
      "Second rescue attempt"
    ],
    "optionsHi": [
      "चलने दें",
      "बैठाएं, 108 बुलाएं, Aspirin चबाकर दें (एलर्जी न हो)",
      "सुलाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Water in lungs can cause pulmonary edema hours later. Near-drowning victims need hospital observation.",
    "explanationHi": "Call emergency, give aspirin।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-070",
    "questionEn": "The 'Golden Hour' refers to:",
    "questionHi": "Heart Attack और Cardiac Arrest में क्या अंतर है?",
    "optionsEn": [
      "Time needed for CPR",
      "Critical first hour after trauma",
      "Time to reach hospital",
      "Duration of first aid training"
    ],
    "optionsHi": [
      "एक ही हैं",
      "Heart Attack में हृदय धड़कता है, Cardiac Arrest में रुक जाता है",
      "विपरीत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Golden Hour: The first 60 minutes after severe trauma when treatment most affects survival outcomes.",
    "explanationHi": "Heart attack vs cardiac arrest।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Principles of First Aid",
    "tags": [
      "principles-of-first-aid"
    ]
  },
  {
    "id": "FIRST-AID-071",
    "questionEn": "List the steps of the primary survey (DRABC) and what you check at each step.",
    "questionHi": "Stroke (स्ट्रोक/पक्षाघात) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "हृदय रोग",
      "मस्तिष्क में रक्त आपूर्ति बाधित होना",
      "फेफड़ों की समस्या",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Brain blood supply disruption।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Principles of First Aid",
    "tags": [
      "principles-of-first-aid"
    ]
  },
  {
    "id": "FIRST-AID-072",
    "questionEn": "Describe the steps of adult CPR from finding an unresponsive person.",
    "questionHi": "Stroke पहचानने के लिए FAST का क्या अर्थ है?",
    "optionsEn": [],
    "optionsHi": [
      "तेज़",
      "Face drooping, Arm weakness, Speech difficulty, Time to call",
      "खाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "FAST for stroke।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-073",
    "questionEn": "Explain the steps to control severe external bleeding.",
    "questionHi": "Stroke के लक्षण क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "पेट दर्द",
      "चेहरे का एक तरफ झुकना, एक हाथ कमजोर, बोलने में कठिनाई",
      "खांसी",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Stroke symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-074",
    "questionEn": "List five early signs of shock and explain why they occur.",
    "questionHi": "Stroke में क्या करें?",
    "optionsEn": [],
    "optionsHi": [
      "पानी पिलाएं",
      "तुरंत 108 बुलाएं, समय नोट करें, लक्षण बताएं",
      "मालिश करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Call emergency immediately।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-075",
    "questionEn": "Explain the Rule of Nines for estimating burn percentage in an adult.",
    "questionHi": "Stroke में 'Golden Hour' का क्या महत्व है?",
    "optionsEn": [],
    "optionsHi": [
      "कोई महत्व नहीं",
      "4.5 घंटे के भीतर उपचार से बेहतर परिणाम",
      "24 घंटे",
      "1 सप्ताह"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Time is brain।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-076",
    "questionEn": "What are the correct first aid steps for a snake bite? What should NOT be done?",
    "questionHi": "Diabetic Emergency के दो प्रकार क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "बुखार और सर्दी",
      "Hypoglycemia (कम शुगर) और Hyperglycemia (अधिक शुगर)",
      "उल्टी और दस्त",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Low and high blood sugar।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-077",
    "questionEn": "Describe how to splint a suspected forearm fracture using improvised materials.",
    "questionHi": "Hypoglycemia के लक्षण क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "प्यास",
      "कंपकंपी, पसीना, चक्कर, भ्रम, भूख, चिड़चिड़ापन",
      "बार-बार पेशाब",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Low sugar symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-078",
    "questionEn": "Describe the complete management of a conscious adult who is choking and cannot speak or cough.",
    "questionHi": "Hypoglycemia में क्या करें?",
    "optionsEn": [],
    "optionsHi": [
      "इंसुलिन दें",
      "मीठा पेय/खाना दें (Glucose, जूस, चीनी)",
      "कुछ न दें",
      "पानी दें"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Give sugar।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-079",
    "questionEn": "Explain how to recognize and manage a person having a seizure.",
    "questionHi": "Hyperglycemia के लक्षण क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "कंपकंपी",
      "अधिक प्यास, बार-बार पेशाब, थकान, धुंधली दृष्टि",
      "पसीना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "High sugar symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-080",
    "questionEn": "List the information you should gather about a poisoning case and why each is important.",
    "questionHi": "Diabetic Ketoacidosis (DKA) के लक्षण क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "सामान्य",
      "उल्टी, पेट दर्द, फल जैसी सांस की गंध, तेज सांस, बेहोशी",
      "कुछ नहीं",
      "कंपकंपी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "DKA symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-081",
    "questionEn": "You arrive at a road accident scene. A motorcyclist is lying on the road, helmet still on, not moving. A crowd has gathered. Describe your complete assessment and management.",
    "questionHi": "Asthma Attack (दमा का दौरा) के लक्षण क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "पेट दर्द",
      "सांस लेने में कठिनाई, घरघराहट, खांसी, सीने में जकड़न",
      "बुखार",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Asthma symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Multiple Topics",
    "tags": [
      "multiple-topics"
    ]
  },
  {
    "id": "FIRST-AID-082",
    "questionEn": "A farmer is brought to you with a snake bite on his right leg. The bite occurred 30 minutes ago. He is anxious, with swelling starting at the bite site. Describe your management.",
    "questionHi": "Asthma Attack में क्या करें?",
    "optionsEn": [],
    "optionsHi": [
      "लिटा दें",
      "बैठाएं, Inhaler (Reliever - Blue) दें, शांत रखें",
      "दौड़ाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Sit up, give inhaler।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Multiple Topics",
    "tags": [
      "multiple-topics"
    ]
  },
  {
    "id": "FIRST-AID-083",
    "questionEn": "At a wedding, a guest suddenly collapses while eating. She is clutching her throat, cannot speak, and is turning blue. What do you do?",
    "questionHi": "Asthma में Reliever Inhaler (Blue) का उपयोग कितनी बार करें?",
    "optionsEn": [],
    "optionsHi": [
      "1 बार",
      "हर 30-60 सेकंड में 1 puff, अधिकतम 10 puffs",
      "20 बार",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Inhaler usage।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Multiple Topics",
    "tags": [
      "multiple-topics"
    ]
  },
  {
    "id": "FIRST-AID-084",
    "questionEn": "A child has pulled a pot of boiling water onto himself. He has burns on his chest, abdomen, and both arms. He is crying. Describe your management.",
    "questionHi": "Severe Asthma Attack के संकेत क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "हल्की घरघराहट",
      "बोल नहीं पाना, नीले होंठ, Inhaler से राहत नहीं",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Severe asthma signs।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Multiple Topics",
    "tags": [
      "multiple-topics"
    ]
  },
  {
    "id": "FIRST-AID-085",
    "questionEn": "An elderly woman at the health center suddenly develops facial drooping on one side, slurred speech, and cannot lift her right arm. What condition do you suspect and what is your management?",
    "questionHi": "Allergic Reaction के सामान्य लक्षण क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "बुखार",
      "खुजली, चकत्ते, सूजन, छींक, आंखों में पानी",
      "खांसी",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Allergy symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Multiple Topics",
    "tags": [
      "multiple-topics"
    ]
  },
  {
    "id": "FIRST-AID-086",
    "questionEn": "What is the compression to breath ratio for adult CPR?",
    "questionHi": "Anaphylaxis के लक्षण क्या हैं?",
    "optionsEn": [
      "15:2",
      "30:2",
      "5:1",
      "30:1"
    ],
    "optionsHi": [
      "हल्की खुजली",
      "सांस लेने में कठिनाई, गले में सूजन, BP गिरना, चक्कर, बेहोशी",
      "केवल चकत्ते",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adult CPR ratio is 30 compressions to 2 breaths for single rescuer.",
    "explanationHi": "Severe allergic reaction।",
    "difficulty": "easy",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-087",
    "questionEn": "What is the correct compression rate for adult CPR?",
    "questionHi": "Anaphylaxis में क्या करें?",
    "optionsEn": [
      "60-80 per minute",
      "80-100 per minute",
      "100-120 per minute",
      "120-140 per minute"
    ],
    "optionsHi": [
      "Antihistamine दें",
      "तुरंत 108 बुलाएं, Epinephrine (Adrenaline) Auto-injector दें (उपलब्ध हो)",
      "इंतजार करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Compression rate should be 100-120 per minute for all ages.",
    "explanationHi": "Call emergency, give epinephrine।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-088",
    "questionEn": "How deep should adult chest compressions be?",
    "questionHi": "Epinephrine Auto-injector (EpiPen) कहां लगाते हैं?",
    "optionsEn": [
      "At least 3 cm",
      "At least 4 cm",
      "At least 5 cm",
      "At least 7 cm"
    ],
    "optionsHi": [
      "बांह में",
      "जांघ के बाहरी हिस्से में",
      "पेट में",
      "गर्दन में"
    ],
    "correctAnswer": 2,
    "explanationEn": "Adult compressions should be at least 5 cm (2 inches) but not more than 6 cm.",
    "explanationHi": "Outer thigh।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-089",
    "questionEn": "What should you check in a 10-second assessment for cardiac arrest?",
    "questionHi": "Anaphylaxis के सामान्य कारण क्या हैं?",
    "optionsEn": [
      "Pulse and pupil response",
      "Responsiveness and normal breathing",
      "Blood pressure and pulse",
      "Temperature and breathing"
    ],
    "optionsHi": [
      "पानी",
      "मूंगफली, दूध, अंडे, मधुमक्खी का डंक, दवाइयां",
      "सब्जियां",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Check responsiveness (tap and shout) and breathing (look, listen, feel) within 10 seconds.",
    "explanationHi": "Common allergens।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-090",
    "questionEn": "Agonal breathing during cardiac arrest is:",
    "questionHi": "Poisoning (विषाक्तता) के संदेह में पहला कदम क्या है?",
    "optionsEn": [
      "Normal breathing",
      "A sign of recovery",
      "Abnormal gasping - start CPR",
      "A sign to stop CPR"
    ],
    "optionsHi": [
      "उल्टी कराएं",
      "विष और पीड़ित को अलग करें, 108/Poison Control बुलाएं",
      "पानी पिलाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Agonal (gasping) breathing is NOT normal breathing. It indicates cardiac arrest - start CPR.",
    "explanationHi": "Remove from poison, call help।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-091",
    "questionEn": "What is the correct hand placement for adult chest compressions?",
    "questionHi": "Poisoning में उल्टी कब नहीं करानी चाहिए?",
    "optionsEn": [
      "Upper sternum",
      "Lower half of sternum",
      "Left side of chest",
      "Over the xiphoid process"
    ],
    "optionsHi": [
      "हमेशा कराएं",
      "Corrosive (अम्ल/क्षार), पेट्रोलियम उत्पाद, बेहोश व्यक्ति में",
      "कभी नहीं कराएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hands should be on the lower half of sternum (center of chest between nipples).",
    "explanationHi": "Contraindications for vomiting।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-092",
    "questionEn": "For infant CPR, the compression technique is:",
    "questionHi": "अगर आंखों में रसायन गिर जाए तो क्या करें?",
    "optionsEn": [
      "Two hands on sternum",
      "One hand on sternum",
      "Two fingers below nipple line",
      "Palm strike on back"
    ],
    "optionsHi": [
      "रगड़ें",
      "साफ पानी से 15-20 मिनट धोएं, अस्पताल जाएं",
      "कुछ न करें",
      "तेल लगाएं"
    ],
    "correctAnswer": 2,
    "explanationEn": "For single rescuer infant CPR, use 2 fingers placed just below the nipple line on sternum.",
    "explanationHi": "Flush with water।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-093",
    "questionEn": "What is the correct head position for opening an infant's airway?",
    "questionHi": "त्वचा पर रसायन गिरने पर क्या करें?",
    "optionsEn": [
      "Maximum extension",
      "Neutral/sniffing position",
      "Flexed forward",
      "Turned to side"
    ],
    "optionsHi": [
      "रगड़ें",
      "दूषित कपड़े हटाएं, पानी से धोएं",
      "तेल लगाएं",
      "कुछ न करें"
    ],
    "correctAnswer": 1,
    "explanationEn": "Infant airway should be in neutral (sniffing) position. Over-extension can kink the airway.",
    "explanationHi": "Remove clothes, wash।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-094",
    "questionEn": "When alone with a child in cardiac arrest, you should:",
    "questionHi": "Carbon Monoxide Poisoning के लक्षण क्या हैं?",
    "optionsEn": [
      "Call for help first, then start CPR",
      "Give 2 minutes of CPR first, then call",
      "Only do chest compressions",
      "Wait for someone else"
    ],
    "optionsHi": [
      "पीली त्वचा",
      "सिरदर्द, चक्कर, मतली, भ्रम, चेरी-लाल त्वचा (देर से)",
      "बुखार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "For children/infants, give 2 minutes of CPR first because their arrest is usually respiratory in origin.",
    "explanationHi": "CO poisoning symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-095",
    "questionEn": "The recovery position is used when the patient is:",
    "questionHi": "Carbon Monoxide Poisoning में क्या करें?",
    "optionsEn": [
      "In cardiac arrest",
      "Unconscious but breathing normally",
      "Choking",
      "Having a heart attack"
    ],
    "optionsHi": [
      "अंदर रहें",
      "ताजी हवा में ले जाएं, 108 बुलाएं, Oxygen दें",
      "सोने दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Recovery position is for unconscious patients who ARE breathing normally, to maintain airway.",
    "explanationHi": "Fresh air, call emergency।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-096",
    "questionEn": "Which is NOT a reason to stop CPR?",
    "questionHi": "Food Poisoning के लक्षण क्या हैं?",
    "optionsEn": [
      "Patient recovers",
      "You are exhausted",
      "Advanced help takes over",
      "CPR has been going for 10 minutes"
    ],
    "optionsHi": [
      "सिरदर्द",
      "उल्टी, दस्त, पेट में ऐंठन, बुखार",
      "खांसी",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Duration alone is not a reason to stop. Continue until recovery, help arrives, or you cannot continue.",
    "explanationHi": "Food poisoning symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-097",
    "questionEn": "During CPR, why is it important to allow full chest recoil?",
    "questionHi": "Food Poisoning में सबसे महत्वपूर्ण उपचार क्या है?",
    "optionsEn": [
      "To rest the rescuer",
      "To allow heart to refill with blood",
      "To check for pulse",
      "To give rescue breaths"
    ],
    "optionsHi": [
      "एंटीबायोटिक",
      "ORS/तरल पदार्थ से निर्जलीकरण रोकना",
      "उपवास",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Full recoil allows heart to refill with blood between compressions, maintaining cardiac output.",
    "explanationHi": "Prevent dehydration।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-098",
    "questionEn": "Rescue breaths should be given over how long?",
    "questionHi": "Drug Overdose के सामान्य लक्षण क्या हैं?",
    "optionsEn": [
      "3 seconds each",
      "2 seconds each",
      "1 second each",
      "As fast as possible"
    ],
    "optionsHi": [
      "सामान्य",
      "बेहोशी, धीमी/तेज सांस, छोटी/बड़ी पुतली, उल्टी",
      "बुखार",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Each rescue breath should be given over 1 second, watching for chest rise.",
    "explanationHi": "Overdose symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-099",
    "questionEn": "If you are unable to give rescue breaths during CPR, you should:",
    "questionHi": "Opioid Overdose में Naloxone का क्या उपयोग है?",
    "optionsEn": [
      "Stop CPR entirely",
      "Continue with compression-only CPR",
      "Only give breaths",
      "Wait for equipment"
    ],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "Opioid के प्रभाव को उलटना (Reversal Agent)",
      "दर्द निवारक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Compression-only CPR is better than no CPR. Continue compressions at 100-120/min.",
    "explanationHi": "Opioid reversal।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-100",
    "questionEn": "The head tilt-chin lift maneuver opens the airway by:",
    "questionHi": "MPHW के लिए प्राथमिक उपचार का ज्ञान क्यों आवश्यक है?",
    "optionsEn": [
      "Clearing food from throat",
      "Moving the tongue forward",
      "Stimulating breathing",
      "Increasing blood flow"
    ],
    "optionsHi": [
      "आवश्यक नहीं",
      "समुदाय में आपातकालीन स्थिति में जीवन बचाने के लिए",
      "केवल अस्पताल में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Head tilt-chin lift moves the tongue forward and away from the posterior pharynx.",
    "explanationHi": "Life-saving in community।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-101",
    "questionEn": "Jaw thrust is used instead of head tilt-chin lift when:",
    "questionHi": "Wound (घाव) क्या है?",
    "optionsEn": [
      "Patient is not breathing",
      "Spinal injury is suspected",
      "Patient is conscious",
      "Airway is blocked by food"
    ],
    "optionsHi": [
      "हड्डी टूटना",
      "त्वचा या ऊतक की निरंतरता का टूटना",
      "जलना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Jaw thrust minimizes neck movement and is used when cervical spine injury is suspected.",
    "explanationHi": "Break in skin continuity।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-102",
    "questionEn": "A patient who is choking but can cough forcefully has:",
    "questionHi": "Incised Wound क्या है?",
    "optionsEn": [
      "Complete airway obstruction",
      "Partial (mild) airway obstruction",
      "Cardiac arrest",
      "Anaphylaxis"
    ],
    "optionsHi": [
      "फटा हुआ",
      "तेज धार वाली वस्तु से साफ कटा घाव",
      "छेद",
      "खरोंच"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ability to cough, speak, or breathe indicates partial obstruction. Encourage continued coughing.",
    "explanationHi": "Clean cut by sharp object।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-103",
    "questionEn": "The universal sign of choking is:",
    "questionHi": "Lacerated Wound क्या है?",
    "optionsEn": [
      "Waving arms",
      "Hands clutching the throat",
      "Pointing to chest",
      "Shaking head"
    ],
    "optionsHi": [
      "साफ कटा",
      "फटा हुआ, अनियमित किनारों वाला घाव",
      "छेद",
      "खरोंच"
    ],
    "correctAnswer": 1,
    "explanationEn": "The universal choking sign is hands grasping the throat, indicating inability to breathe.",
    "explanationHi": "Torn, irregular edges।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-104",
    "questionEn": "For a choking adult with severe obstruction, give:",
    "questionHi": "Puncture Wound क्या है?",
    "optionsEn": [
      "5 back blows, then 5 abdominal thrusts",
      "10 back blows only",
      "CPR immediately",
      "Water to drink"
    ],
    "optionsHi": [
      "कटा",
      "नुकीली वस्तु से छोटा गहरा छेद (जैसे कील)",
      "फटा",
      "खरोंच"
    ],
    "correctAnswer": 0,
    "explanationEn": "For severe choking: 5 back blows, check. If not cleared, 5 abdominal thrusts. Repeat.",
    "explanationHi": "Small deep hole।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-105",
    "questionEn": "Abdominal thrusts for choking should NOT be used on:",
    "questionHi": "Abrasion क्या है?",
    "optionsEn": [
      "Adults",
      "Children over 1 year",
      "Pregnant women",
      "Tall people"
    ],
    "optionsHi": [
      "गहरा घाव",
      "सतही खरोंच (Graze)",
      "छेद",
      "कटा"
    ],
    "correctAnswer": 2,
    "explanationEn": "Use chest thrusts instead of abdominal thrusts for pregnant women and obese patients.",
    "explanationHi": "Superficial scrape।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-106",
    "questionEn": "For a choking infant, you should use:",
    "questionHi": "Contusion क्या है?",
    "optionsEn": [
      "Abdominal thrusts",
      "Back blows and chest thrusts",
      "Finger sweep",
      "Heimlich maneuver"
    ],
    "optionsHi": [
      "खुला घाव",
      "त्वचा के नीचे चोट/नील (Bruise)",
      "कटा घाव",
      "जला हुआ"
    ],
    "correctAnswer": 1,
    "explanationEn": "For infants: 5 back blows alternating with 5 chest thrusts. NO abdominal thrusts.",
    "explanationHi": "Bruise under skin।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-107",
    "questionEn": "Where should back blows be delivered for a choking victim?",
    "questionHi": "Avulsion क्या है?",
    "optionsEn": [
      "Lower back",
      "Between shoulder blades",
      "Side of chest",
      "Back of head"
    ],
    "optionsHi": [
      "खरोंच",
      "त्वचा या ऊतक का उखड़ना",
      "नील",
      "छेद"
    ],
    "correctAnswer": 1,
    "explanationEn": "Back blows are delivered between the shoulder blades using the heel of the hand.",
    "explanationHi": "Tearing away of tissue।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-108",
    "questionEn": "If a choking victim becomes unconscious, you should:",
    "questionHi": "घाव से रक्तस्राव रोकने का पहला कदम क्या है?",
    "optionsEn": [
      "Continue abdominal thrusts",
      "Give water",
      "Begin CPR",
      "Wait for help"
    ],
    "optionsHi": [
      "पानी से धोना",
      "सीधा दबाव (Direct Pressure)",
      "टूर्निकेट",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "If choking victim becomes unconscious, lower them down, call for help, and begin CPR.",
    "explanationHi": "Direct pressure first।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-109",
    "questionEn": "For infant back blows, the infant should be positioned:",
    "questionHi": "Direct Pressure कितने समय तक देना चाहिए?",
    "optionsEn": [
      "Face up on your lap",
      "Face down with head lower than body",
      "Sitting up",
      "Standing"
    ],
    "optionsHi": [
      "1 मिनट",
      "10-15 मिनट तक बिना हटाए",
      "30 सेकंड",
      "1 घंटा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Position infant face down on your forearm, head lower than body, supporting the head.",
    "explanationHi": "Continuous pressure।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-110",
    "questionEn": "Blind finger sweeps of the mouth are:",
    "questionHi": "रक्तस्राव में घाव को हृदय से कैसे रखना चाहिए?",
    "optionsEn": [
      "Always recommended",
      "Only for adults",
      "Not recommended",
      "Done before back blows"
    ],
    "optionsHi": [
      "नीचे",
      "ऊंचा (Elevation)",
      "समान",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Blind finger sweeps may push object deeper. Only remove visible objects.",
    "explanationHi": "Elevate above heart।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-111",
    "questionEn": "The first step in controlling external bleeding is:",
    "questionHi": "Pressure Points कहां होते हैं?",
    "optionsEn": [
      "Tourniquet",
      "Elevation",
      "Direct pressure",
      "Pressure points"
    ],
    "optionsHi": [
      "कहीं भी",
      "जहां धमनी हड्डी के पास से गुजरती है",
      "केवल गर्दन",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Direct pressure is always the first step for controlling external bleeding.",
    "explanationHi": "Artery over bone।",
    "difficulty": "easy",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-112",
    "questionEn": "Arterial bleeding is characterized by:",
    "questionHi": "बांह में गंभीर रक्तस्राव के लिए कौन सा Pressure Point उपयोग करें?",
    "optionsEn": [
      "Dark red, steady flow",
      "Bright red, spurting with pulse",
      "Slow oozing",
      "Clear fluid"
    ],
    "optionsHi": [
      "Femoral",
      "Brachial (बांह के अंदर)",
      "Carotid",
      "Radial"
    ],
    "correctAnswer": 1,
    "explanationEn": "Arterial blood is bright red (oxygenated) and spurts in rhythm with the heartbeat.",
    "explanationHi": "Brachial artery।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-113",
    "questionEn": "When blood soaks through a dressing, you should:",
    "questionHi": "पैर में गंभीर रक्तस्राव के लिए कौन सा Pressure Point उपयोग करें?",
    "optionsEn": [
      "Remove the dressing and replace",
      "Add more dressings on top",
      "Apply a tourniquet",
      "Release pressure"
    ],
    "optionsHi": [
      "Brachial",
      "Femoral (जांघ के अंदर)",
      "Carotid",
      "Radial"
    ],
    "correctAnswer": 1,
    "explanationEn": "Do not remove original dressing - add more on top and continue pressure.",
    "explanationHi": "Femoral artery।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-114",
    "questionEn": "A tourniquet should be applied:",
    "questionHi": "Tourniquet का उपयोग कब करें?",
    "optionsEn": [
      "Over the wound",
      "5-7 cm above the wound",
      "At the joint",
      "At the wrist or ankle"
    ],
    "optionsHi": [
      "हर रक्तस्राव में",
      "जब Direct Pressure से न रुके, जीवन खतरे में हो (अंग कटना)",
      "कभी नहीं",
      "हल्के रक्तस्राव में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tourniquet should be 5-7 cm (2-3 inches) above the wound, not over a joint.",
    "explanationHi": "Last resort for severe bleeding।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-115",
    "questionEn": "Tourniquets should be used:",
    "questionHi": "Tourniquet कहां लगाना चाहिए?",
    "optionsEn": [
      "For all bleeding",
      "As a last resort for life-threatening limb bleeding",
      "Before direct pressure",
      "For internal bleeding"
    ],
    "optionsHi": [
      "घाव पर",
      "घाव से 2-3 इंच ऊपर (हृदय की ओर)",
      "घाव के नीचे",
      "जोड़ पर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tourniquets are last resort for life-threatening limb bleeding when direct pressure fails.",
    "explanationHi": "Above wound, towards heart।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-116",
    "questionEn": "An embedded object in a wound should be:",
    "questionHi": "Arterial Bleeding की पहचान क्या है?",
    "optionsEn": [
      "Removed immediately",
      "Left in place and stabilized",
      "Pushed deeper",
      "Cut off at skin level"
    ],
    "optionsHi": [
      "धीमा बहना",
      "चमकीला लाल, धड़कन के साथ तेजी से बहना",
      "गहरा लाल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Never remove embedded objects - they may be controlling bleeding. Pad around and stabilize.",
    "explanationHi": "Bright red, spurting।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-117",
    "questionEn": "A wound with jagged, torn edges is called:",
    "questionHi": "Venous Bleeding की पहचान क्या है?",
    "optionsEn": [
      "Incised",
      "Lacerated",
      "Puncture",
      "Abrasion"
    ],
    "optionsHi": [
      "तेज बहना",
      "गहरा लाल, धीमी गति से निरंतर बहना",
      "चमकीला लाल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lacerated wounds have rough, torn edges (from machinery, bites). Incised wounds are clean cuts.",
    "explanationHi": "Dark red, steady flow।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-118",
    "questionEn": "For a sucking chest wound, apply:",
    "questionHi": "Capillary Bleeding की पहचान क्या है?",
    "optionsEn": [
      "Regular bandage",
      "Occlusive dressing taped on 3 sides",
      "Tourniquet",
      "Direct pressure only"
    ],
    "optionsHi": [
      "तेज बहना",
      "धीमा रिसना (Oozing)",
      "धड़कन के साथ",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Three-sided occlusive dressing creates flutter valve - air out, not in.",
    "explanationHi": "Slow oozing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-119",
    "questionEn": "The brachial artery pressure point is located:",
    "questionHi": "Internal Bleeding के लक्षण क्या हैं?",
    "optionsEn": [
      "In the groin",
      "Inside upper arm",
      "At the wrist",
      "Behind the knee"
    ],
    "optionsHi": [
      "बाहरी घाव",
      "पीली त्वचा, तेज नाड़ी, पेट में दर्द/सूजन, चक्कर",
      "केवल नील",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Brachial artery is compressed on inside of upper arm, against the humerus.",
    "explanationHi": "Signs of internal bleeding।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-120",
    "questionEn": "Signs of internal bleeding include:",
    "questionHi": "Internal Bleeding में क्या करें?",
    "optionsEn": [
      "Bright red blood from wound",
      "Rapid pulse and pale skin",
      "High blood pressure",
      "Warm, dry skin"
    ],
    "optionsHi": [
      "घरेलू उपचार",
      "तुरंत 108 बुलाएं, Shock Position में रखें",
      "दर्द निवारक दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Internal bleeding causes shock signs: rapid pulse, pale/cold skin, anxiety, low BP.",
    "explanationHi": "Emergency, shock position।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-121",
    "questionEn": "For abdominal evisceration (organs protruding), you should:",
    "questionHi": "Nosebleed (नकसीर) में क्या करें?",
    "optionsEn": [
      "Push organs back in",
      "Cover with moist dressing and plastic",
      "Apply direct pressure",
      "Give fluids by mouth"
    ],
    "optionsHi": [
      "सिर पीछे झुकाएं",
      "आगे झुकाकर नाक के मुलायम हिस्से को 10-15 मिनट दबाएं",
      "लेटा दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Never push organs back. Cover with moist sterile dressing, then plastic to prevent drying.",
    "explanationHi": "Lean forward, pinch nose।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-122",
    "questionEn": "Capillary bleeding is characterized by:",
    "questionHi": "Nosebleed में सिर पीछे क्यों नहीं झुकाना चाहिए?",
    "optionsEn": [
      "Spurting blood",
      "Steady dark flow",
      "Slow oozing",
      "No visible bleeding"
    ],
    "optionsHi": [
      "ठीक है",
      "खून गले में जा सकता है, उल्टी/घुटन हो सकती है",
      "कोई कारण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Capillary bleeding is slow oozing that usually stops on its own or with minor pressure.",
    "explanationHi": "Blood may go down throat।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-123",
    "questionEn": "An amputated body part should be:",
    "questionHi": "घाव साफ करने के लिए क्या उपयोग करें?",
    "optionsEn": [
      "Placed directly on ice",
      "Wrapped in moist gauze, bagged, and placed in ice water",
      "Left at scene",
      "Reattached immediately"
    ],
    "optionsHi": [
      "गंदा पानी",
      "साफ बहता पानी",
      "शराब",
      "मिट्टी का तेल"
    ],
    "correctAnswer": 1,
    "explanationEn": "Wrap in moist sterile gauze, place in plastic bag, then in ice water. Never directly on ice.",
    "explanationHi": "Clean running water।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-124",
    "questionEn": "How long should direct pressure be maintained before checking?",
    "questionHi": "घाव में गहरी वस्तु फंसी हो तो क्या करें?",
    "optionsEn": [
      "1-2 minutes",
      "5 minutes",
      "10-15 minutes",
      "30 minutes"
    ],
    "optionsHi": [
      "निकालें",
      "न निकालें, उसके चारों ओर पट्टी बांधें, अस्पताल जाएं",
      "दबाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Maintain direct pressure for at least 10-15 minutes without lifting to check.",
    "explanationHi": "Don't remove, stabilize।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-125",
    "questionEn": "Signs that a bandage is too tight include:",
    "questionHi": "Tetanus का खतरा किस प्रकार के घाव में अधिक होता है?",
    "optionsEn": [
      "Warmth and redness",
      "Numbness, coldness, blue color distally",
      "Itching",
      "Bleeding through"
    ],
    "optionsHi": [
      "साफ कटा",
      "गहरा, गंदा, Puncture घाव",
      "खरोंच",
      "नील"
    ],
    "correctAnswer": 1,
    "explanationEn": "Too-tight bandage causes poor circulation: cold, blue, numb, no pulse in fingers/toes.",
    "explanationHi": "Deep, dirty, puncture wounds।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-126",
    "questionEn": "Shock is defined as:",
    "questionHi": "घाव संक्रमण के लक्षण क्या हैं?",
    "optionsEn": [
      "Low blood pressure only",
      "Inadequate tissue perfusion",
      "Fainting",
      "Allergic reaction"
    ],
    "optionsHi": [
      "ठीक होना",
      "लालिमा, सूजन, गर्माहट, मवाद, बुखार",
      "सूखना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Shock is circulatory failure where organs don't receive adequate blood and oxygen.",
    "explanationHi": "Signs of infection।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-127",
    "questionEn": "Early signs of shock include:",
    "questionHi": "Dressing का उद्देश्य क्या है?",
    "optionsEn": [
      "Low blood pressure",
      "Rapid pulse and pale skin",
      "Unconsciousness",
      "No pulse"
    ],
    "optionsHi": [
      "सजावट",
      "घाव को ढकना, संक्रमण रोकना, रक्तस्राव रोकना",
      "दर्द देना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Early shock: rapid pulse, pale/cold skin, anxiety, rapid breathing. BP drops late.",
    "explanationHi": "Purpose of dressing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-128",
    "questionEn": "The shock position involves:",
    "questionHi": "Bandage का उद्देश्य क्या है?",
    "optionsEn": [
      "Sitting upright",
      "Lying flat with legs elevated",
      "Head elevated",
      "On stomach"
    ],
    "optionsHi": [
      "घाव ढकना",
      "Dressing को स्थान पर रखना, दबाव देना, सहारा देना",
      "सजावट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Shock position: lie flat, raise legs 20-30 cm to help blood return to vital organs.",
    "explanationHi": "Purpose of bandage।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-129",
    "questionEn": "In shock, patients should be given:",
    "questionHi": "Triangular Bandage का उपयोग किसके लिए होता है?",
    "optionsEn": [
      "Water to drink",
      "Food to eat",
      "Nothing by mouth",
      "Alcohol to warm up"
    ],
    "optionsHi": [
      "छोटे घाव",
      "Sling बनाने, बड़े घाव ढकने, पट्टी बांधने",
      "केवल सजावट",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Nothing by mouth - patient may need surgery; also risk of vomiting and aspiration.",
    "explanationHi": "Sling, large dressing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-130",
    "questionEn": "Hypovolemic shock is caused by:",
    "questionHi": "Roller Bandage कैसे बांधनी चाहिए?",
    "optionsEn": [
      "Heart failure",
      "Allergic reaction",
      "Loss of blood or fluid",
      "Spinal injury"
    ],
    "optionsHi": [
      "ढीली",
      "अंग के बाहर से अंदर की ओर, समान दबाव से",
      "बहुत कसी",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Hypovolemic shock is caused by loss of circulating volume (blood, plasma, fluids).",
    "explanationHi": "Distal to proximal, even pressure।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-131",
    "questionEn": "Anaphylactic shock is a type of:",
    "questionHi": "पट्टी बहुत कसी होने के संकेत क्या हैं?",
    "optionsEn": [
      "Hypovolemic shock",
      "Cardiogenic shock",
      "Distributive shock",
      "Obstructive shock"
    ],
    "optionsHi": [
      "आराम",
      "नीला/सफेद पड़ना, सुन्नपन, ठंडा, दर्द",
      "गर्मी",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Anaphylaxis causes widespread vasodilation (distributive) - blood pools in periphery.",
    "explanationHi": "Signs of tight bandage।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-132",
    "questionEn": "The first drug of choice for anaphylaxis is:",
    "questionHi": "Burn (जलना) क्या है?",
    "optionsEn": [
      "Antihistamine",
      "Adrenaline (epinephrine)",
      "Steroid",
      "Paracetamol"
    ],
    "optionsHi": [
      "कटना",
      "गर्मी, रसायन, बिजली, विकिरण से ऊतक क्षति",
      "फ्रैक्चर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adrenaline is the first-line treatment for anaphylaxis - give IM immediately.",
    "explanationHi": "Tissue damage from heat।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-133",
    "questionEn": "Adrenaline for anaphylaxis is given:",
    "questionHi": "First Degree Burn (Superficial) में क्या होता है?",
    "optionsEn": [
      "Intravenously only",
      "Intramuscularly in outer thigh",
      "Under the tongue",
      "By inhalation"
    ],
    "optionsHi": [
      "फफोले",
      "केवल बाहरी त्वचा लाल, दर्द, सूजन",
      "गहरा घाव",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adrenaline is given IM in outer mid-thigh. Can be given through clothing if needed.",
    "explanationHi": "Epidermis only, red।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-134",
    "questionEn": "Capillary refill time in shock is:",
    "questionHi": "Second Degree Burn (Partial Thickness) में क्या होता है?",
    "optionsEn": [
      "Less than 2 seconds",
      "Greater than 2 seconds",
      "Immediate",
      "Not affected"
    ],
    "optionsHi": [
      "केवल लालिमा",
      "फफोले (Blisters), गहरी लालिमा, तेज दर्द",
      "दर्द नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Delayed capillary refill (>2 seconds) indicates poor peripheral circulation - a sign of shock.",
    "explanationHi": "Blisters, painful।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-135",
    "questionEn": "In cardiogenic shock, the patient should be positioned:",
    "questionHi": "Third Degree Burn (Full Thickness) में क्या होता है?",
    "optionsEn": [
      "Flat with legs raised",
      "Sitting up if difficulty breathing",
      "On their side",
      "Head down"
    ],
    "optionsHi": [
      "फफोले",
      "सफेद/काली त्वचा, नर्व क्षति से दर्द कम, गहरा घाव",
      "केवल लालिमा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "In cardiogenic shock, raising legs increases cardiac workload. Sit up if breathing difficulty.",
    "explanationHi": "White/black, painless due to nerve damage।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-136",
    "questionEn": "Signs of anaphylaxis include:",
    "questionHi": "जलने पर पहला कदम क्या है?",
    "optionsEn": [
      "Fever only",
      "Hives, swelling, difficulty breathing",
      "Bleeding",
      "Confusion only"
    ],
    "optionsHi": [
      "बर्फ लगाना",
      "जलने का स्रोत हटाना, ठंडे पानी से 10-20 मिनट धोना",
      "मक्खन लगाना",
      "टूथपेस्ट लगाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anaphylaxis: hives, facial/throat swelling, breathing difficulty, rapid pulse, low BP.",
    "explanationHi": "Cool with water।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-137",
    "questionEn": "Common triggers of anaphylaxis include:",
    "questionHi": "जलने पर क्या नहीं लगाना चाहिए?",
    "optionsEn": [
      "Cold weather",
      "Exercise",
      "Foods, insect stings, medications",
      "Stress"
    ],
    "optionsHi": [
      "पानी",
      "मक्खन, टूथपेस्ट, बर्फ, तेल, क्रीम",
      "Dressing",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Common triggers: nuts, shellfish, bee/wasp stings, penicillin, and other drugs.",
    "explanationHi": "No butter, ice, toothpaste।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-138",
    "questionEn": "If adrenaline doesn't work for anaphylaxis, you may:",
    "questionHi": "जलने पर फफोले को क्या करना चाहिए?",
    "optionsEn": [
      "Give up",
      "Give a second dose after 5-15 minutes",
      "Wait for 1 hour",
      "Apply tourniquet"
    ],
    "optionsHi": [
      "फोड़ना",
      "न फोड़ें, ढककर रखें",
      "काटना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "A second dose of adrenaline can be given after 5-15 minutes if symptoms don't improve.",
    "explanationHi": "Don't burst blisters।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-139",
    "questionEn": "Late signs of shock include:",
    "questionHi": "जले हुए क्षेत्र की गणना के लिए कौन सा नियम उपयोग करते हैं?",
    "optionsEn": [
      "Anxiety",
      "Rapid breathing",
      "Confusion and unconsciousness",
      "Thirst"
    ],
    "optionsHi": [
      "Rule of 5",
      "Rule of 9 (वयस्क)",
      "Rule of 100",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Late/severe shock: confusion, unconsciousness, weak pulse, very low BP - critical state.",
    "explanationHi": "Rule of nines।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-140",
    "questionEn": "Keeping a shock patient warm is important because:",
    "questionHi": "Rule of 9 में सिर का प्रतिशत क्या है (वयस्क)?",
    "optionsEn": [
      "Heat treats shock",
      "Heat loss worsens shock",
      "It wakes them up",
      "It speeds bleeding"
    ],
    "optionsHi": [
      "18%",
      "9%",
      "1%",
      "36%"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hypothermia worsens shock by increasing metabolic demands. Prevent heat loss with blankets.",
    "explanationHi": "Head = 9%।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-141",
    "questionEn": "For child CPR (1-8 years), compression depth should be:",
    "questionHi": "Rule of 9 में एक पूरे पैर का प्रतिशत क्या है (वयस्क)?",
    "optionsEn": [
      "2 cm",
      "About 1/3 of chest depth (5 cm)",
      "7 cm",
      "As deep as possible"
    ],
    "optionsHi": [
      "9%",
      "18%",
      "36%",
      "1%"
    ],
    "correctAnswer": 1,
    "explanationEn": "Child compressions: at least 1/3 of chest depth, approximately 5 cm.",
    "explanationHi": "Each leg = 18%।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-142",
    "questionEn": "When giving infant rescue breaths, you should cover:",
    "questionHi": "Rule of 9 में एक पूरी बांह का प्रतिशत क्या है (वयस्क)?",
    "optionsEn": [
      "Mouth only",
      "Nose only",
      "Mouth and nose together",
      "Neither"
    ],
    "optionsHi": [
      "18%",
      "9%",
      "1%",
      "36%"
    ],
    "correctAnswer": 2,
    "explanationEn": "For infants, your mouth covers both the infant's mouth and nose for rescue breaths.",
    "explanationHi": "Each arm = 9%।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-143",
    "questionEn": "The Heimlich maneuver is another name for:",
    "questionHi": "Palm Method क्या है?",
    "optionsEn": [
      "Back blows",
      "Abdominal thrusts",
      "Chest thrusts",
      "CPR"
    ],
    "optionsHi": [
      "Rule of 9",
      "पीड़ित की हथेली = 1% BSA",
      "Rule of 5",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Heimlich maneuver = abdominal thrusts for choking relief.",
    "explanationHi": "Palm = 1% body surface।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-144",
    "questionEn": "For self-treatment if choking alone, you can:",
    "questionHi": "Major Burns में कौन शामिल है?",
    "optionsEn": [
      "Do nothing",
      "Use abdominal thrusts against a chair",
      "Lie down",
      "Drink water"
    ],
    "optionsHi": [
      "छोटा जला",
      "10% से अधिक, चेहरा/हाथ/पैर/जननांग, श्वसन मार्ग, Electric/Chemical",
      "1% से कम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "If choking alone, press upper abdomen against back of chair and thrust.",
    "explanationHi": "Major burn criteria।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-145",
    "questionEn": "The femoral artery pressure point is located:",
    "questionHi": "Chemical Burn में क्या करें?",
    "optionsEn": [
      "In the neck",
      "In the groin",
      "Behind the knee",
      "At the ankle"
    ],
    "optionsHi": [
      "रगड़ें",
      "20 मिनट से अधिक पानी से धोएं, दूषित कपड़े हटाएं",
      "तेल लगाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Femoral artery can be compressed in the groin to control severe leg bleeding.",
    "explanationHi": "Flush with water for 20+ minutes।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-146",
    "questionEn": "Septic shock is caused by:",
    "questionHi": "Electrical Burn में पहला कदम क्या है?",
    "optionsEn": [
      "Blood loss",
      "Heart attack",
      "Severe infection",
      "Allergic reaction"
    ],
    "optionsHi": [
      "छूना",
      "बिजली का स्रोत बंद करना (सुरक्षित रूप से)",
      "पानी डालना",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Septic shock is distributive shock caused by overwhelming infection and inflammation.",
    "explanationHi": "Turn off power first।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-147",
    "questionEn": "The lub-dub of the heartbeat corresponds to:",
    "questionHi": "Electrical Burn में क्या विशेष खतरा होता है?",
    "optionsEn": [
      "Blood entering the heart",
      "Valve closure",
      "Lung expansion",
      "Breathing"
    ],
    "optionsHi": [
      "केवल त्वचा",
      "आंतरिक क्षति, हृदय की समस्या (Arrhythmia)",
      "कुछ नहीं",
      "केवल बाहरी"
    ],
    "correctAnswer": 1,
    "explanationEn": "S1 (lub) = AV valves closing; S2 (dub) = semilunar valves closing.",
    "explanationHi": "Internal damage, cardiac issues।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-148",
    "questionEn": "How should the rescuer's arms be positioned during chest compressions?",
    "questionHi": "Inhalation Injury के लक्षण क्या हैं?",
    "optionsEn": [
      "Bent at elbows",
      "Straight, shoulders over hands",
      "At 45-degree angle",
      "One arm only"
    ],
    "optionsHi": [
      "पैर में दर्द",
      "आवाज बैठना, खांसी, नाक/मुंह में काला कालिख, सांस में कठिनाई",
      "पेट दर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Arms straight, shoulders directly over hands for effective compressions.",
    "explanationHi": "Signs of smoke inhalation।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-149",
    "questionEn": "Brain damage begins how long after cardiac arrest?",
    "questionHi": "जलते व्यक्ति के कपड़ों में आग लगी हो तो क्या करें?",
    "optionsEn": [
      "1 minute",
      "4 minutes",
      "10 minutes",
      "20 minutes"
    ],
    "optionsHi": [
      "दौड़ाएं",
      "Stop, Drop, Roll (रुको, लेटो, लुढ़को)",
      "खड़े रहने दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Brain damage begins within 4 minutes without oxygen; death follows in 6-10 minutes.",
    "explanationHi": "Stop, drop, roll।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-150",
    "questionEn": "The recovery position keeps the airway open by:",
    "questionHi": "Scald (गर्म तरल से जलना) में क्या करें?",
    "optionsEn": [
      "Elevating the head",
      "Allowing fluid to drain and tongue to fall forward",
      "Compressing the chest",
      "Straightening the spine"
    ],
    "optionsHi": [
      "कपड़े रहने दें",
      "गीले कपड़े तुरंत हटाएं, ठंडे पानी से धोएं",
      "गर्म पानी डालें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Recovery position uses gravity to keep tongue forward and allow fluids to drain.",
    "explanationHi": "Remove wet clothes, cool with water।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-151",
    "questionEn": "If a conscious choking person can only make high-pitched sounds, this indicates:",
    "questionHi": "Fracture (अस्थि भंग) क्या है?",
    "optionsEn": [
      "Mild obstruction",
      "Severe obstruction",
      "No obstruction",
      "Laryngitis"
    ],
    "optionsHi": [
      "मोच",
      "हड्डी का टूटना या दरार",
      "जलना",
      "कटना"
    ],
    "correctAnswer": 1,
    "explanationEn": "High-pitched sounds (stridor) with inability to speak indicates severe obstruction.",
    "explanationHi": "Break or crack in bone।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-152",
    "questionEn": "A puncture wound is dangerous because:",
    "questionHi": "Closed (Simple) Fracture क्या है?",
    "optionsEn": [
      "It bleeds a lot",
      "It may be deep with internal damage",
      "It's very painful",
      "It heals slowly"
    ],
    "optionsHi": [
      "हड्डी बाहर निकली",
      "हड्डी टूटी लेकिन त्वचा साबुत",
      "जोड़ से निकली",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Puncture wounds may cause deep internal damage and introduce bacteria despite small entry.",
    "explanationHi": "Bone broken, skin intact।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-153",
    "questionEn": "Neurogenic shock is caused by:",
    "questionHi": "Open (Compound) Fracture क्या है?",
    "optionsEn": [
      "Blood loss",
      "Spinal cord injury",
      "Allergic reaction",
      "Heart attack"
    ],
    "optionsHi": [
      "त्वचा साबुत",
      "हड्डी त्वचा को तोड़कर बाहर निकली या घाव है",
      "केवल दरार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Neurogenic shock results from spinal cord injury disrupting autonomic nervous system.",
    "explanationHi": "Bone through skin।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-154",
    "questionEn": "CPR for drowning victims should:",
    "questionHi": "Greenstick Fracture क्या है?",
    "optionsEn": [
      "Not include rescue breaths",
      "Start with 5 rescue breaths if trained",
      "Focus only on compressions",
      "Wait until out of water"
    ],
    "optionsHi": [
      "पूरा टूटना",
      "अधूरा टूटना (बच्चों में, जैसे हरी लकड़ी मुड़ती है)",
      "जोड़ से निकलना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Drowning is hypoxic arrest - rescue breaths are critical. Start with 5 breaths if trained.",
    "explanationHi": "Incomplete fracture in children।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-155",
    "questionEn": "The AED (Automated External Defibrillator) is used for:",
    "questionHi": "Comminuted Fracture क्या है?",
    "optionsEn": [
      "All unconscious patients",
      "Cardiac arrest with shockable rhythm",
      "Choking",
      "Bleeding"
    ],
    "optionsHi": [
      "एक जगह टूटना",
      "हड्डी कई टुकड़ों में टूटना",
      "अधूरा टूटना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "AED analyzes heart rhythm and delivers shock only for ventricular fibrillation/tachycardia.",
    "explanationHi": "Bone broken into pieces।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-156",
    "questionEn": "For chest thrusts on a pregnant woman, hands should be placed:",
    "questionHi": "Fracture के लक्षण क्या हैं?",
    "optionsEn": [
      "On abdomen",
      "On middle of sternum",
      "On lower ribs",
      "On upper back"
    ],
    "optionsHi": [
      "बुखार",
      "दर्द, सूजन, विकृति, हलचल में असमर्थता, Crepitus",
      "खुजली",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "For pregnant/obese: chest thrusts with hands on middle of sternum, not abdomen.",
    "explanationHi": "Signs of fracture।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-157",
    "questionEn": "An avulsion is a wound where:",
    "questionHi": "Crepitus क्या है?",
    "optionsEn": [
      "Skin is scraped",
      "Skin is cleanly cut",
      "Tissue is torn away",
      "Skin is punctured"
    ],
    "optionsHi": [
      "आवाज",
      "टूटी हड्डी के टुकड़ों की आपस में रगड़ की आवाज/अनुभूति",
      "सूजन",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Avulsion is when tissue is torn away, partially or completely (e.g., degloved finger).",
    "explanationHi": "Grating sound/feeling।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-158",
    "questionEn": "Adult adrenaline dose for anaphylaxis is:",
    "questionHi": "Fracture में प्राथमिक उपचार का मुख्य सिद्धांत क्या है?",
    "optionsEn": [
      "0.1 mg",
      "0.3-0.5 mg",
      "1 mg",
      "5 mg"
    ],
    "optionsHi": [
      "हिलाना",
      "स्थिर करना (Immobilization)",
      "मालिश करना",
      "दौड़ाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adult anaphylaxis: 0.3-0.5 mg adrenaline (1:1000) IM.",
    "explanationHi": "Immobilize the fracture।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-159",
    "questionEn": "During CPR on a pregnant woman, try to:",
    "questionHi": "Splint (खपच्ची) का उद्देश्य क्या है?",
    "optionsEn": [
      "Keep her flat on back",
      "Tilt slightly to left side",
      "Have her sit up",
      "Perform standing"
    ],
    "optionsHi": [
      "सजावट",
      "टूटी हड्डी को स्थिर रखना, अधिक क्षति रोकना",
      "दर्द बढ़ाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Left lateral tilt or manual uterine displacement prevents compression of major vessels.",
    "explanationHi": "Immobilize, prevent further injury।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-160",
    "questionEn": "Elevation helps control bleeding by:",
    "questionHi": "Splint लगाते समय कौन से जोड़ शामिल करने चाहिए?",
    "optionsEn": [
      "Increasing blood pressure",
      "Reducing blood flow to elevated area",
      "Stopping the heart",
      "Clotting faster"
    ],
    "optionsHi": [
      "केवल एक",
      "फ्रैक्चर के ऊपर और नीचे वाले जोड़",
      "कोई नहीं",
      "सभी जोड़"
    ],
    "correctAnswer": 1,
    "explanationEn": "Elevation uses gravity to reduce blood flow to the injured area.",
    "explanationHi": "Joints above and below।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-161",
    "questionEn": "List the five links in the Chain of Survival and explain the MPHW's role.",
    "questionHi": "Open Fracture में क्या अतिरिक्त करें?",
    "optionsEn": [],
    "optionsHi": [
      "हड्डी अंदर धकेलें",
      "घाव को साफ Dressing से ढकें, रक्तस्राव रोकें",
      "कुछ न करें",
      "मालिश करें"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Cover wound, control bleeding।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-162",
    "questionEn": "Describe the correct technique for adult chest compressions.",
    "questionHi": "Dislocation क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "हड्डी टूटना",
      "हड्डी का जोड़ से अपनी जगह से हटना",
      "मोच",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Bone out of joint।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-163",
    "questionEn": "Compare the management of mild vs. severe choking in adults.",
    "questionHi": "Dislocation के लक्षण क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "जोड़ में विकृति, तेज दर्द, सूजन, हलचल में असमर्थता",
      "बुखार",
      "खांसी"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Signs of dislocation।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-164",
    "questionEn": "Describe the steps to control severe external bleeding.",
    "questionHi": "Dislocation में क्या नहीं करना चाहिए?",
    "optionsEn": [],
    "optionsHi": [
      "स्थिर करना",
      "जोड़ को वापस अपनी जगह लगाने की कोशिश करना",
      "बर्फ लगाना",
      "अस्पताल जाना"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Don't try to relocate।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-165",
    "questionEn": "List the types of shock and give one example cause of each.",
    "questionHi": "Sprain (मोच) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "हड्डी टूटना",
      "लिगामेंट (स्नायुबंधन) का खिंचना या फटना",
      "मांसपेशी खिंचना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Ligament injury।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-166",
    "questionEn": "Describe the first aid management of anaphylactic shock.",
    "questionHi": "Strain क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "लिगामेंट चोट",
      "मांसपेशी या टेंडन का खिंचना या फटना",
      "हड्डी टूटना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Muscle/tendon injury।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-167",
    "questionEn": "Explain why and when to use the recovery position.",
    "questionHi": "RICE का पूरा नाम क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "Run, Ice, Compress, Elevate",
      "Rest, Ice, Compression, Elevation",
      "Rest, Inject, Care, Elevate",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "RICE protocol।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-168",
    "questionEn": "Describe the management of choking in an infant under 1 year.",
    "questionHi": "RICE में Rest का क्या अर्थ है?",
    "optionsEn": [],
    "optionsHi": [
      "सोना",
      "प्रभावित अंग को आराम देना, उपयोग न करना",
      "दौड़ना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Rest the injured part।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-169",
    "questionEn": "How do you differentiate between arterial, venous, and capillary bleeding?",
    "questionHi": "RICE में Ice कैसे लगाना चाहिए?",
    "optionsEn": [],
    "optionsHi": [
      "सीधे त्वचा पर",
      "कपड़े में लपेटकर, 15-20 मिनट के लिए",
      "1 घंटा लगातार",
      "गर्म बर्फ"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Wrapped, 15-20 minutes।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-170",
    "questionEn": "Describe early vs. late signs of shock.",
    "questionHi": "RICE में Compression का उद्देश्य क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "दर्द बढ़ाना",
      "सूजन कम करना (Elastic Bandage से)",
      "रक्तस्राव बढ़ाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Reduce swelling।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-171",
    "questionEn": "A 55-year-old man collapses at a community gathering. He is unresponsive and not breathing normally - only occasional gasps. What are your actions?",
    "questionHi": "RICE में Elevation का उद्देश्य क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "दर्द बढ़ाना",
      "सूजन कम करना (हृदय से ऊंचा रखकर)",
      "रक्तस्राव बढ़ाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Reduce swelling by elevation।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-172",
    "questionEn": "A 3-year-old child is eating grapes and suddenly cannot cry, speak, or cough. She is clutching her throat and turning blue. What do you do?",
    "questionHi": "Head Injury (सिर की चोट) के खतरे के संकेत क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "सामान्य",
      "बेहोशी, उल्टी, असमान पुतली, नाक/कान से खून/तरल, भ्रम",
      "केवल दर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Danger signs of head injury।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-173",
    "questionEn": "A farmer has a deep cut on his forearm with bright red blood spurting out. Direct pressure with a cloth is not stopping the bleeding. What should you do?",
    "questionHi": "Concussion क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "खोपड़ी टूटना",
      "मस्तिष्क का हिलना (अस्थायी कार्यात्मक गड़बड़ी)",
      "खून बहना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Brain shaking, temporary dysfunction।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-174",
    "questionEn": "A 25-year-old woman was stung by a bee 10 minutes ago. She now has hives all over, swollen lips, and difficulty breathing. Her pulse is rapid and weak. What is happening and what should you do?",
    "questionHi": "सिर की चोट में क्या करें?",
    "optionsEn": [],
    "optionsHi": [
      "हिलाएं",
      "गर्दन स्थिर रखें, सांस जांचें, 108 बुलाएं, निगरानी रखें",
      "दौड़ाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Stabilize neck, call emergency।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-175",
    "questionEn": "A motorcyclist has been in an accident. He has no visible bleeding but is pale, cold, confused, and has a rapid weak pulse. What do you suspect and how should you manage him?",
    "questionHi": "Battle's Sign क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "सिर पर घाव",
      "कान के पीछे नीलापन (Skull Fracture का संकेत)",
      "आंख में खून",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Bruising behind ear।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-176",
    "questionEn": "What is the purpose of the 'push hard, push fast' advice in CPR?",
    "questionHi": "Raccoon Eyes क्या है?",
    "optionsEn": [
      "To tire the rescuer",
      "To generate adequate blood flow to brain and heart",
      "To wake up the patient",
      "To make noise"
    ],
    "optionsHi": [
      "सामान्य आंखें",
      "दोनों आंखों के चारों ओर नीलापन (Skull Fracture का संकेत)",
      "लाल आंखें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adequate compression depth and rate are needed to generate blood flow to vital organs.",
    "explanationHi": "Bruising around eyes।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-177",
    "questionEn": "If rescue breaths don't make the chest rise, you should:",
    "questionHi": "Spinal Injury (रीढ़ की चोट) का संदेह कब होता है?",
    "optionsEn": [
      "Blow harder",
      "Give up",
      "Reposition the head and try again",
      "Start abdominal thrusts"
    ],
    "optionsHi": [
      "हल्की चोट",
      "ऊंचाई से गिरना, वाहन दुर्घटना, डाइविंग, गर्दन/पीठ में दर्द/सुन्नपन",
      "खरोंच",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "If breaths don't go in, reposition head (re-tilt) and try again. Airway may not be open.",
    "explanationHi": "Mechanism of injury।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-178",
    "questionEn": "The most common cause of airway obstruction in an unconscious patient is:",
    "questionHi": "Spinal Injury में सबसे महत्वपूर्ण सिद्धांत क्या है?",
    "optionsEn": [
      "Foreign body",
      "The tongue",
      "Vomit",
      "Swelling"
    ],
    "optionsHi": [
      "जल्दी उठाना",
      "गर्दन और रीढ़ को हिलने न दें (Immobilization)",
      "मालिश करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "The tongue is the most common cause - it falls back and blocks airway in unconscious patients.",
    "explanationHi": "Don't move spine।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-179",
    "questionEn": "A contusion is:",
    "questionHi": "Manual In-Line Stabilization क्या है?",
    "optionsEn": [
      "A cut",
      "A bruise",
      "A burn",
      "A puncture"
    ],
    "optionsHi": [
      "हिलाना",
      "हाथों से सिर और गर्दन को सीधा और स्थिर रखना",
      "मोड़ना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Contusion is a bruise - bleeding under intact skin from blunt trauma.",
    "explanationHi": "Hold head and neck in line।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-180",
    "questionEn": "Which type of shock has warm, flushed skin initially?",
    "questionHi": "Log Roll क्या है?",
    "optionsEn": [
      "Hypovolemic",
      "Cardiogenic",
      "Distributive (septic/anaphylactic)",
      "Obstructive"
    ],
    "optionsHi": [
      "लुढ़कना",
      "रीढ़ की चोट में पीड़ित को एक इकाई के रूप में पलटने की तकनीक",
      "दौड़ना",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "In early distributive shock, vasodilation may cause warm, flushed skin initially.",
    "explanationHi": "Turn as one unit।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-181",
    "questionEn": "How often should rescuers switch during CPR if possible?",
    "questionHi": "Arm Sling का उपयोग किसके लिए होता है?",
    "optionsEn": [
      "Every 30 seconds",
      "Every 2 minutes",
      "Every 5 minutes",
      "Never"
    ],
    "optionsHi": [
      "पैर की चोट",
      "बांह, कंधे, या कॉलरबोन की चोट में सहारा देना",
      "सिर की चोट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Switch compressors every 2 minutes to prevent fatigue and maintain compression quality.",
    "explanationHi": "Support for arm injuries।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-182",
    "questionEn": "When should a tourniquet be recorded?",
    "questionHi": "Elevation Sling कब उपयोग करते हैं?",
    "optionsEn": [
      "Never",
      "Only in hospital",
      "Time of application written on patient/tourniquet",
      "After removal"
    ],
    "optionsHi": [
      "पैर में",
      "हाथ/कलाई की चोट में सूजन कम करने के लिए (हाथ ऊंचा)",
      "हर चोट में",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Always note time tourniquet applied - write 'TQ' and time on patient's forehead or tourniquet.",
    "explanationHi": "Hand elevated to reduce swelling।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Wounds & Bleeding",
    "tags": [
      "wounds-&-bleeding"
    ]
  },
  {
    "id": "FIRST-AID-183",
    "questionEn": "In children, which sign of shock appears LATE?",
    "questionHi": "Collar and Cuff Sling कब उपयोग करते हैं?",
    "optionsEn": [
      "Rapid heart rate",
      "Low blood pressure",
      "Pale skin",
      "Prolonged capillary refill"
    ],
    "optionsHi": [
      "कंधे में",
      "कॉलरबोन या कंधे के फ्रैक्चर में (हाथ नीचे लटका)",
      "पैर में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Children compensate well; BP drops late. Don't wait for low BP - act on other signs.",
    "explanationHi": "For clavicle/shoulder fractures।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-184",
    "questionEn": "What does 'DRABC' stand for in emergency assessment?",
    "questionHi": "Chest Injury के लक्षण क्या हैं?",
    "optionsEn": [
      "Danger, Response, Airway, Breathing, Circulation",
      "Direct, Rapid, Assessment, Before, CPR",
      "Diagnose, Resuscitate, Assess, Breathe, Compress",
      "None of the above"
    ],
    "optionsHi": [
      "पेट दर्द",
      "सीने में दर्द, सांस में कठिनाई, खून खांसना",
      "सिरदर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "DRABC: Danger check, Response check, Airway open, Breathing check, Circulation (CPR if needed).",
    "explanationHi": "Signs of chest injury।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Basic Life Support",
    "tags": [
      "basic-life-support"
    ]
  },
  {
    "id": "FIRST-AID-185",
    "questionEn": "For an obese choking patient unable to have abdominal thrusts:",
    "questionHi": "Sucking Chest Wound क्या है?",
    "optionsEn": [
      "Give up",
      "Use chest thrusts",
      "Use only back blows",
      "Wait for help"
    ],
    "optionsHi": [
      "साधारण घाव",
      "छाती में छेद जिससे सांस लेते समय हवा अंदर-बाहर जाती है",
      "पेट का घाव",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Like pregnant women, obese patients should receive chest thrusts instead of abdominal.",
    "explanationHi": "Open chest wound।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway Management",
    "tags": [
      "airway-management"
    ]
  },
  {
    "id": "FIRST-AID-186",
    "questionEn": "What is the most common type of shock encountered in trauma?",
    "questionHi": "Sucking Chest Wound में क्या करें?",
    "optionsEn": [
      "Cardiogenic shock",
      "Hypovolemic shock",
      "Septic shock",
      "Neurogenic shock"
    ],
    "optionsHi": [
      "खुला छोड़ दें",
      "तीन तरफ से टेप किया हुआ Occlusive Dressing लगाएं",
      "दबाव दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hypovolemic shock from blood loss is the most common type in trauma patients.",
    "explanationHi": "Three-sided occlusive dressing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-187",
    "questionEn": "The shock position involves:",
    "questionHi": "Flail Chest क्या है?",
    "optionsEn": [
      "Head elevated, legs down",
      "Legs elevated 20-30cm",
      "Sitting upright",
      "Prone position"
    ],
    "optionsHi": [
      "सामान्य छाती",
      "कई पसलियों का कई जगह टूटना, छाती का हिस्सा विपरीत दिशा में हिलना",
      "एक पसली टूटना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Elevating legs 20-30cm helps return blood to vital organs in shock.",
    "explanationHi": "Multiple rib fractures।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-188",
    "questionEn": "Which vital sign change is typically seen FIRST in compensated shock?",
    "questionHi": "Abdominal Injury के लक्षण क्या हैं?",
    "optionsEn": [
      "Decreased blood pressure",
      "Increased heart rate",
      "Decreased temperature",
      "Increased respiratory rate"
    ],
    "optionsHi": [
      "सिरदर्द",
      "पेट में दर्द, कठोरता, सूजन, मतली, उल्टी, Shock के लक्षण",
      "खांसी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tachycardia is often the earliest sign as the body compensates for decreased blood volume.",
    "explanationHi": "Signs of abdominal injury।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-189",
    "questionEn": "Cardiogenic shock differs from hypovolemic shock in that:",
    "questionHi": "पेट से अंग बाहर निकल आए (Evisceration) तो क्या करें?",
    "optionsEn": [
      "Blood pressure is always normal",
      "Legs should NOT be elevated in cardiogenic shock",
      "Heart rate is always slow",
      "Skin is warm and dry"
    ],
    "optionsHi": [
      "अंदर धकेलें",
      "गीले कपड़े से ढकें, अंदर न धकेलें, 108 बुलाएं",
      "सूखा रखें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "In cardiogenic shock, elevating legs increases preload, worsening heart failure.",
    "explanationHi": "Cover with moist dressing।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-190",
    "questionEn": "A patient in shock should be kept:",
    "questionHi": "Pelvic Fracture का संदेह कब होता है?",
    "optionsEn": [
      "Cool to reduce metabolic demand",
      "Warm to prevent hypothermia",
      "In a cold environment",
      "Alternating hot and cold"
    ],
    "optionsHi": [
      "हाथ की चोट",
      "वाहन दुर्घटना, ऊंचाई से गिरना, कूल्हे/जांघ में दर्द",
      "खरोंच",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hypothermia worsens shock. Keep patient warm with blankets over uninjured areas.",
    "explanationHi": "Mechanism and symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-191",
    "questionEn": "Signs of late/decompensated shock include:",
    "questionHi": "Pelvic Fracture में क्या खतरा होता है?",
    "optionsEn": [
      "Normal blood pressure",
      "Strong bounding pulse",
      "Confusion and decreased urine output",
      "Pink, warm skin"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "गंभीर आंतरिक रक्तस्राव",
      "खुजली",
      "बुखार"
    ],
    "correctAnswer": 2,
    "explanationEn": "Late shock shows organ failure signs: confusion (brain), decreased urine (kidneys).",
    "explanationHi": "Severe internal bleeding risk।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-192",
    "questionEn": "In anaphylactic shock, the primary treatment is:",
    "questionHi": "Eye Injury में क्या नहीं करना चाहिए?",
    "optionsEn": [
      "IV fluids",
      "Aspirin",
      "Adrenaline (epinephrine)",
      "Antibiotics"
    ],
    "optionsHi": [
      "ढकना",
      "आंख रगड़ना, दबाव देना, फंसी वस्तु निकालना",
      "अस्पताल जाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Adrenaline is the first-line life-saving treatment for anaphylaxis.",
    "explanationHi": "Don't rub, press, or remove object।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-193",
    "questionEn": "A patient with suspected internal bleeding and shock should:",
    "questionHi": "आंख में कुछ गिर जाए तो क्या करें?",
    "optionsEn": [
      "Be given fluids by mouth",
      "Have legs elevated and be transported urgently",
      "Wait for symptoms to worsen before transport",
      "Be kept in sitting position"
    ],
    "optionsHi": [
      "रगड़ें",
      "साफ पानी से धोएं, पलक उलटकर देखें, न निकले तो अस्पताल",
      "तेल डालें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Internal bleeding requires urgent surgical intervention. First aid is supportive.",
    "explanationHi": "Flush with water।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-194",
    "questionEn": "Capillary refill time in a healthy person should be:",
    "questionHi": "आंख में कुछ फंसा हो (Penetrating) तो क्या करें?",
    "optionsEn": [
      "Less than 2 seconds",
      "3-5 seconds",
      "5-7 seconds",
      "Over 10 seconds"
    ],
    "optionsHi": [
      "निकालें",
      "न निकालें, दोनों आंखें ढकें, 108 बुलाएं",
      "रगड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Normal capillary refill is <2 seconds. Prolonged refill suggests poor perfusion/shock.",
    "explanationHi": "Don't remove, cover both eyes।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-195",
    "questionEn": "Why should you NOT give food or water to a shock patient?",
    "questionHi": "दोनों आंखें क्यों ढकते हैं जब एक में चोट हो?",
    "optionsEn": [
      "It causes vomiting always",
      "They may need emergency surgery",
      "It increases blood pressure too fast",
      "Water worsens bleeding"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "दोनों आंखें साथ हिलती हैं, एक ढकने से दूसरी भी हिलती है",
      "सुंदर दिखे",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Shock patients may need surgery. Oral intake increases aspiration and surgery risks.",
    "explanationHi": "Both eyes move together।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-196",
    "questionEn": "A fracture where the bone pierces the skin is called:",
    "questionHi": "Ear Injury में कान से खून आए तो क्या करें?",
    "optionsEn": [
      "Simple fracture",
      "Closed fracture",
      "Open (compound) fracture",
      "Greenstick fracture"
    ],
    "optionsHi": [
      "रुई डालें",
      "खून बहने दें, न रोकें (Skull Fracture का संकेत हो सकता है)",
      "दबाव दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Open fractures have a wound connecting to the fracture site, high infection risk.",
    "explanationHi": "Let it drain, may indicate skull fracture।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-197",
    "questionEn": "The '6 Ps' of fracture assessment include all EXCEPT:",
    "questionHi": "कान में कीड़ा घुस जाए तो क्या करें?",
    "optionsEn": [
      "Pain",
      "Pallor",
      "Pressure",
      "Perspiration"
    ],
    "optionsHi": [
      "सींक डालें",
      "अंधेरे में टॉर्च से प्रकाश दें, तेल डालें, अस्पताल जाएं",
      "पानी डालें",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "The 6 Ps are: Pain, Pallor, Paralysis, Paresthesia, Pulselessness, Pressure (swelling).",
    "explanationHi": "Light or oil, then hospital।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-198",
    "questionEn": "When splinting a fracture, you should immobilize:",
    "questionHi": "Dental Injury में दांत टूट जाए तो क्या करें?",
    "optionsEn": [
      "Only the fracture site",
      "The joint above only",
      "The joint below only",
      "The joint above AND below"
    ],
    "optionsHi": [
      "फेंक दें",
      "दांत को दूध में रखें, 30 मिनट में दंत चिकित्सक के पास जाएं",
      "धोएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Immobilizing joints above and below prevents movement at the fracture site.",
    "explanationHi": "Keep in milk, see dentist quickly।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-199",
    "questionEn": "After applying a splint, you should always:",
    "questionHi": "टूटे दांत को कैसे पकड़ना चाहिए?",
    "optionsEn": [
      "Test for crepitus",
      "Check circulation distal to splint",
      "Apply heat",
      "Remove the splint after 10 minutes"
    ],
    "optionsHi": [
      "जड़ से",
      "Crown (ऊपरी भाग) से, जड़ को न छुएं",
      "कहीं से भी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Always check pulse, color, sensation in fingers/toes after splinting.",
    "explanationHi": "Hold by crown, not root।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-200",
    "questionEn": "For an open fracture, you should:",
    "questionHi": "MPHW के लिए घाव और फ्रैक्चर प्रबंधन का ज्ञान क्यों आवश्यक है?",
    "optionsEn": [
      "Push the bone back in",
      "Cover the wound and immobilize",
      "Apply pressure directly on the bone",
      "Ignore the wound, focus on splinting"
    ],
    "optionsHi": [
      "आवश्यक नहीं",
      "ग्रामीण क्षेत्रों में आपातकालीन स्थिति में प्राथमिक देखभाल के लिए",
      "केवल डॉक्टर के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Never push bone back. Cover wound, splint, and transport urgently.",
    "explanationHi": "Primary care in emergencies।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-201",
    "questionEn": "Greenstick fractures are most common in:",
    "questionHi": "Drowning (डूबना) क्या है?",
    "optionsEn": [
      "Elderly patients",
      "Children",
      "Athletes",
      "Post-menopausal women"
    ],
    "optionsHi": [
      "तैरना",
      "पानी में डूबने से श्वसन में बाधा",
      "नहाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Children's bones are more flexible, bending rather than breaking completely.",
    "explanationHi": "Respiratory impairment from submersion।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-202",
    "questionEn": "RICE treatment for sprains stands for:",
    "questionHi": "Drowning में पहला कदम क्या है?",
    "optionsEn": [
      "Rest, Ice, Compress, Exercise",
      "Rest, Ice, Compression, Elevation",
      "Restrict, Immobilize, Cold, Elevate",
      "Rest, Immobilize, Compress, Exercise"
    ],
    "optionsHi": [
      "पानी में कूदना",
      "अपनी सुरक्षा सुनिश्चित करना, Reach/Throw/Row/Go",
      "तैरना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "RICE: Rest, Ice, Compression, Elevation - standard soft tissue injury treatment.",
    "explanationHi": "Safety first।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-203",
    "questionEn": "Ice should be applied to a sprain for:",
    "questionHi": "Reach, Throw, Row, Go का क्या अर्थ है?",
    "optionsEn": [
      "2 minutes on, 2 off",
      "20 minutes on, 20 off",
      "1 hour continuously",
      "Only once"
    ],
    "optionsHi": [
      "तैरना",
      "पहुंचाना, फेंकना, नाव, तभी जाना (बचाव के क्रम)",
      "दौड़ना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Apply ice for 20 minutes, remove for 20 minutes. Continue for 48-72 hours.",
    "explanationHi": "Rescue sequence।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-204",
    "questionEn": "When applying ice, you should:",
    "questionHi": "डूबे व्यक्ति को बाहर निकालने के बाद क्या करें?",
    "optionsEn": [
      "Put ice directly on skin",
      "Wrap ice in cloth first",
      "Use boiling water first",
      "Never use ice packs"
    ],
    "optionsHi": [
      "पेट दबाएं",
      "ABC जांचें, CPR दें यदि जरूरी हो",
      "पानी निकालें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Direct ice contact causes frostbite. Always wrap in thin cloth.",
    "explanationHi": "Check ABC, give CPR if needed।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-205",
    "questionEn": "A dislocation differs from a fracture in that:",
    "questionHi": "Drowning में पेट से पानी निकालने की कोशिश क्यों नहीं करनी चाहिए?",
    "optionsEn": [
      "It's always less serious",
      "Bone is displaced from joint, not broken",
      "It never causes swelling",
      "Treatment is the same"
    ],
    "optionsHi": [
      "करनी चाहिए",
      "समय बर्बाद होता है, उल्टी और Aspiration का खतरा",
      "फायदेमंद है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dislocation is joint displacement; fracture is bone break. Both are serious.",
    "explanationHi": "Wastes time, risk of aspiration।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-206",
    "questionEn": "For a suspected dislocation, you should:",
    "questionHi": "Drowning में Spinal Injury का संदेह कब होता है?",
    "optionsEn": [
      "Try to relocate the joint",
      "Immobilize in position found",
      "Apply firm pressure to joint",
      "Massage the joint"
    ],
    "optionsHi": [
      "हमेशा",
      "डाइविंग, उथले पानी में कूदना, अज्ञात परिस्थिति",
      "कभी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Never try to relocate. Immobilize as found and refer to hospital.",
    "explanationHi": "Diving, shallow water।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-207",
    "questionEn": "Femur fractures are particularly dangerous because:",
    "questionHi": "Secondary Drowning क्या है?",
    "optionsEn": [
      "They always penetrate skin",
      "They can cause 1-2 liters of internal blood loss",
      "They are extremely rare",
      "They heal very slowly"
    ],
    "optionsHi": [
      "पहली बार डूबना",
      "बचाव के बाद भी फेफड़ों में पानी से समस्या (घंटों बाद)",
      "तैरना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Femur fractures can cause massive internal bleeding and shock.",
    "explanationHi": "Delayed complications।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-208",
    "questionEn": "An anatomical splint means:",
    "questionHi": "Heat Stroke (लू लगना) क्या है?",
    "optionsEn": [
      "Using medical equipment only",
      "Using the patient's body as support",
      "Using anatomy textbook",
      "A special surgical splint"
    ],
    "optionsHi": [
      "सामान्य गर्मी",
      "शरीर का तापमान नियंत्रण विफल, गंभीर स्थिति (40°C से अधिक)",
      "हल्की गर्मी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anatomical splinting uses body parts (e.g., injured leg tied to uninjured leg).",
    "explanationHi": "Body temp >40°C, emergency।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-209",
    "questionEn": "Signs of a splint that is too tight include:",
    "questionHi": "Heat Stroke के लक्षण क्या हैं?",
    "optionsEn": [
      "Increased pain only",
      "Numbness, coldness, and blueness distal to splint",
      "Immediate pain relief",
      "Swelling decreases"
    ],
    "optionsHi": [
      "ठंड लगना",
      "गर्म और सूखी त्वचा, भ्रम, बेहोशी, दौरे, तेज नाड़ी",
      "पसीना आना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "These signs indicate circulation is compromised. Loosen splint immediately.",
    "explanationHi": "Hot dry skin, confusion।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-210",
    "questionEn": "You should NOT test for crepitus (grating) in suspected fracture because:",
    "questionHi": "Heat Stroke में क्या करें?",
    "optionsEn": [
      "It's always absent in fractures",
      "It can cause further damage",
      "It helps with diagnosis",
      "It provides pain relief"
    ],
    "optionsHi": [
      "गर्म रखें",
      "छाया में ले जाएं, ठंडा करें (पानी, पंखा), 108 बुलाएं",
      "व्यायाम कराएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Testing for crepitus can cause additional injury and is unnecessary for first aid.",
    "explanationHi": "Cool rapidly, call emergency।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-211",
    "questionEn": "The immediate first aid for a thermal burn is:",
    "questionHi": "Heat Exhaustion क्या है?",
    "optionsEn": [
      "Apply butter",
      "Cool running water for 20 minutes",
      "Apply ice directly",
      "Cover immediately without cooling"
    ],
    "optionsHi": [
      "Heat Stroke",
      "गर्मी से थकान, निर्जलीकरण (Heat Stroke से पहले की स्थिति)",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cool running water for 20 minutes is the standard first aid for burns.",
    "explanationHi": "Stage before heat stroke।",
    "difficulty": "easy",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-212",
    "questionEn": "A partial thickness (second degree) burn is characterized by:",
    "questionHi": "Heat Exhaustion के लक्षण क्या हैं?",
    "optionsEn": [
      "Redness only, no blisters",
      "Blisters and moist appearance",
      "White, dry, painless skin",
      "Black, charred skin"
    ],
    "optionsHi": [
      "सूखी त्वचा",
      "भारी पसीना, कमजोरी, मतली, सिरदर्द, चक्कर",
      "बेहोशी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Partial thickness burns involve epidermis and dermis, causing blisters.",
    "explanationHi": "Heavy sweating, weakness।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-213",
    "questionEn": "Why might a full thickness burn be painless?",
    "questionHi": "Heat Exhaustion में क्या करें?",
    "optionsEn": [
      "Burns don't cause pain",
      "Pain receptors are damaged",
      "Patient is in shock",
      "Cooling has worked"
    ],
    "optionsHi": [
      "व्यायाम",
      "ठंडी जगह, ORS/पानी पिलाएं, आराम",
      "गर्म रखें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Full thickness burns destroy nerve endings, making them painless.",
    "explanationHi": "Cool place, rehydrate।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-214",
    "questionEn": "The Rule of Nines assigns what percentage to an adult's entire arm?",
    "questionHi": "Heat Cramps क्या हैं?",
    "optionsEn": [
      "4.5%",
      "9%",
      "18%",
      "1%"
    ],
    "optionsHi": [
      "बुखार",
      "गर्मी में अधिक पसीने से मांसपेशियों में ऐंठन",
      "फ्रैक्चर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Each arm = 9% TBSA in adults according to the Rule of Nines.",
    "explanationHi": "Muscle cramps from sweating।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-215",
    "questionEn": "Using the palmar method, the patient's palm represents:",
    "questionHi": "Heat Cramps में क्या करें?",
    "optionsEn": [
      "0.5% TBSA",
      "1% TBSA",
      "5% TBSA",
      "9% TBSA"
    ],
    "optionsHi": [
      "व्यायाम जारी",
      "आराम, ठंडी जगह, नमक-पानी/ORS, मालिश",
      "गर्म रखें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Patient's palm (including fingers) equals approximately 1% TBSA.",
    "explanationHi": "Rest, rehydrate, massage।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-216",
    "questionEn": "You should NOT apply to burns:",
    "questionHi": "Hypothermia क्या है?",
    "optionsEn": [
      "Cool water",
      "Clean dressing",
      "Butter, toothpaste, or egg",
      "Cling film"
    ],
    "optionsHi": [
      "शरीर गर्म",
      "शरीर का तापमान 35°C से कम होना",
      "बुखार",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "These trap heat, increase infection risk, and interfere with medical treatment.",
    "explanationHi": "Body temp <35°C।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-217",
    "questionEn": "Burn blisters should be:",
    "questionHi": "Hypothermia के लक्षण क्या हैं?",
    "optionsEn": [
      "Popped immediately",
      "Left intact if possible",
      "Cut open with scissors",
      "Drained with needle"
    ],
    "optionsHi": [
      "पसीना",
      "कंपकंपी, भ्रम, धीमी सांस/नाड़ी, नीले होंठ, सुस्ती",
      "गर्म त्वचा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Blisters provide a protective barrier. Leave intact to reduce infection risk.",
    "explanationHi": "Shivering, confusion, slow vitals।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-218",
    "questionEn": "For chemical burns, the most important first aid is:",
    "questionHi": "Hypothermia में क्या करें?",
    "optionsEn": [
      "Apply neutralizing agent",
      "Brush off and flush with water extensively",
      "Apply ice",
      "Cover immediately"
    ],
    "optionsHi": [
      "ठंडा करें",
      "गर्म जगह, गीले कपड़े हटाएं, कंबल से ढकें, गर्म पेय (होश में)",
      "बर्फ लगाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Remove dry chemicals first, then flush with large amounts of water for 20-60 min.",
    "explanationHi": "Warm gradually।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-219",
    "questionEn": "Electrical burns are dangerous because:",
    "questionHi": "Hypothermia में क्या नहीं करना चाहिए?",
    "optionsEn": [
      "They only cause surface damage",
      "Internal damage may be worse than visible injury",
      "They never cause cardiac problems",
      "They heal faster than thermal burns"
    ],
    "optionsHi": [
      "गर्म करना",
      "सीधी गर्मी देना (हीटर), शराब देना, रगड़ना",
      "कंबल देना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Electrical current travels through body; internal damage often exceeds visible injury.",
    "explanationHi": "No direct heat, alcohol, rubbing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-220",
    "questionEn": "Signs of inhalation burn injury include:",
    "questionHi": "Frostbite क्या है?",
    "optionsEn": [
      "Burns only on hands",
      "Singed nasal hair and soot in mouth",
      "Normal voice",
      "Burns on feet only"
    ],
    "optionsHi": [
      "जलना",
      "अत्यधिक ठंड से शरीर के अंगों का जमना",
      "गर्मी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Facial burns, singed hair, soot, and hoarse voice suggest inhalation injury.",
    "explanationHi": "Freezing of body parts।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-221",
    "questionEn": "Circumferential burns are dangerous because they can:",
    "questionHi": "Frostbite कहां अधिक होता है?",
    "optionsEn": [
      "Heal faster",
      "Restrict blood flow and breathing",
      "Never cause complications",
      "Reduce scarring"
    ],
    "optionsHi": [
      "पेट",
      "उंगलियां, पैर की उंगलियां, नाक, कान",
      "पीठ",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Burns encircling a limb or chest can restrict circulation or breathing.",
    "explanationHi": "Extremities - fingers, toes, nose, ears।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-222",
    "questionEn": "A child with >5% TBSA partial thickness burns should be:",
    "questionHi": "Frostbite में क्या करें?",
    "optionsEn": [
      "Treated at home",
      "Referred to hospital",
      "Only given oral fluids",
      "Observed for 24 hours"
    ],
    "optionsHi": [
      "रगड़ें",
      "गर्म पानी (37-39°C) में डुबोएं, रगड़ें नहीं, अस्पताल जाएं",
      "बर्फ से रगड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Children with >5% burns need hospital evaluation due to higher risk.",
    "explanationHi": "Warm water, don't rub।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-223",
    "questionEn": "When cooling a burn, the water should be:",
    "questionHi": "Electric Shock का खतरा किससे होता है?",
    "optionsEn": [
      "Ice cold",
      "Cool/tepid (not ice cold)",
      "Hot",
      "Room temperature only"
    ],
    "optionsHi": [
      "पानी",
      "बिजली के संपर्क से",
      "गर्मी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cool water is effective. Ice water can cause frostbite and worsen injury.",
    "explanationHi": "Contact with electricity।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-224",
    "questionEn": "Cling film (plastic wrap) is good for burn coverage because:",
    "questionHi": "Electric Shock में पहला कदम क्या है?",
    "optionsEn": [
      "It heats the wound",
      "It's sterile, doesn't stick, and allows assessment",
      "It provides pressure",
      "It contains medication"
    ],
    "optionsHi": [
      "छूना",
      "बिजली का स्रोत बंद करना/अलग करना (सुरक्षित रूप से)",
      "पानी डालना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cling film is clean, doesn't adhere to wound, and is transparent for monitoring.",
    "explanationHi": "Turn off power safely।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-225",
    "questionEn": "In a burn patient, hypothermia can occur because:",
    "questionHi": "बिजली का झटका लगे व्यक्ति को कैसे अलग करें?",
    "optionsEn": [
      "Burns generate heat",
      "Damaged skin cannot regulate temperature",
      "Cooling is contraindicated",
      "Burns only occur in cold weather"
    ],
    "optionsHi": [
      "हाथ से छूकर",
      "सूखी लकड़ी, प्लास्टिक, रबर से (Non-conductor)",
      "गीले कपड़े से",
      "धातु से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Burned skin loses thermoregulation. Cool the burn, warm the patient.",
    "explanationHi": "Use non-conductor।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-226",
    "questionEn": "The 'Big Four' venomous snakes in India include all EXCEPT:",
    "questionHi": "Electric Shock में क्या खतरे होते हैं?",
    "optionsEn": [
      "Indian Cobra",
      "Common Krait",
      "Russell's Viper",
      "Python"
    ],
    "optionsHi": [
      "केवल जलना",
      "जलना, Cardiac Arrest, फ्रैक्चर, आंतरिक क्षति",
      "कुछ नहीं",
      "केवल दर्द"
    ],
    "correctAnswer": 3,
    "explanationEn": "Big Four: Cobra, Krait, Russell's Viper, Saw-scaled Viper. Pythons are constrictors.",
    "explanationHi": "Burns, cardiac arrest, fractures।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-227",
    "questionEn": "Neurotoxic snake venom (Cobra, Krait) primarily affects:",
    "questionHi": "High Voltage Shock में क्या विशेष सावधानी रखें?",
    "optionsEn": [
      "Blood clotting",
      "Nervous system and breathing",
      "Liver function",
      "Kidney function"
    ],
    "optionsHi": [
      "नजदीक जाएं",
      "दूर रहें (8-10 मीटर), बिजली बंद होने तक न जाएं",
      "छूएं",
      "पानी डालें"
    ],
    "correctAnswer": 1,
    "explanationEn": "Neurotoxic venom causes paralysis, affecting breathing muscles.",
    "explanationHi": "Stay away from high voltage।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-228",
    "questionEn": "The earliest sign of neurotoxic envenomation is often:",
    "questionHi": "Lightning Strike (बिजली गिरना) में क्या करें?",
    "optionsEn": [
      "Severe local swelling",
      "Drooping eyelids (ptosis)",
      "Profuse bleeding",
      "High fever"
    ],
    "optionsHi": [
      "खुले में खड़े रहें",
      "अंदर जाएं, पेड़ के नीचे न खड़े हों, झुककर बैठें",
      "पेड़ के नीचे जाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ptosis (drooping eyelids) is often the first sign of neurotoxic envenomation.",
    "explanationHi": "Go inside, crouch if outside।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-229",
    "questionEn": "Russell's Viper venom is primarily:",
    "questionHi": "Lightning से प्रभावित व्यक्ति को छूना सुरक्षित है?",
    "optionsEn": [
      "Neurotoxic",
      "Hemotoxic (affects blood clotting)",
      "Cardiotoxic",
      "Nephrotoxic"
    ],
    "optionsHi": [
      "नहीं",
      "हां, बिजली शरीर में नहीं रहती",
      "कभी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Viper venoms are hemotoxic, causing bleeding and clotting abnormalities.",
    "explanationHi": "Safe to touch, no retained charge।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-230",
    "questionEn": "For snake bites, pressure immobilization bandage should be:",
    "questionHi": "Snake Bite (सांप काटना) में पहला कदम क्या है?",
    "optionsEn": [
      "Tight as a tourniquet",
      "Firm like for a sprain",
      "Very loose",
      "Not used at all"
    ],
    "optionsHi": [
      "मुंह से जहर चूसना",
      "शांत रखना, प्रभावित अंग को स्थिर और हृदय से नीचे रखना",
      "चीरा लगाना",
      "टूर्निकेट बांधना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Apply firm pressure (like sprain bandage), not tight tourniquet.",
    "explanationHi": "Keep calm, immobilize limb।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-231",
    "questionEn": "Which of these is HARMFUL for snake bite first aid?",
    "questionHi": "Snake Bite में क्या नहीं करना चाहिए?",
    "optionsEn": [
      "Immobilizing the limb",
      "Applying pressure bandage",
      "Cutting and sucking the wound",
      "Keeping the victim calm"
    ],
    "optionsHi": [
      "अस्पताल जाना",
      "चीरा लगाना, मुंह से चूसना, टूर्निकेट, बर्फ, शराब",
      "शांत रहना",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Cutting and sucking spreads venom and causes infection. Never do this.",
    "explanationHi": "Don't cut, suck, tourniquet, ice, alcohol।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-232",
    "questionEn": "The only effective treatment for venomous snake bite is:",
    "questionHi": "Pressure Immobilization Technique किसमें उपयोग होती है?",
    "optionsEn": [
      "Traditional remedies",
      "Snake stones",
      "Anti-snake venom (antivenom)",
      "Tight tourniquet"
    ],
    "optionsHi": [
      "कुत्ता काटने में",
      "न्यूरोटॉक्सिक सांप (Cobra, Krait) के काटने में",
      "मधुमक्खी के डंक में",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Antivenom is the only proven effective treatment for envenomation.",
    "explanationHi": "For neurotoxic snakes।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-233",
    "questionEn": "What percentage of snake bites are 'dry bites' with no venom injected?",
    "questionHi": "Polyvalent Anti-Snake Venom (ASV) क्या है?",
    "optionsEn": [
      "10%",
      "30%",
      "50-70%",
      "90%"
    ],
    "optionsHi": [
      "दर्द निवारक",
      "कई प्रकार के सांपों के जहर का विषनाशक",
      "एंटीबायोटिक",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Many snake bites don't inject significant venom, but all should be evaluated.",
    "explanationHi": "Antivenom for multiple snakes।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-234",
    "questionEn": "For dog bites, the most critical first aid measure is:",
    "questionHi": "भारत में Big 4 जहरीले सांप कौन से हैं?",
    "optionsEn": [
      "Apply turmeric paste",
      "Wash wound with soap and water for 15 minutes",
      "Apply tourniquet",
      "Stitch the wound closed"
    ],
    "optionsHi": [
      "Python",
      "Cobra, Krait, Russell's Viper, Saw-scaled Viper",
      "सभी सांप",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Thorough washing can reduce rabies risk by up to 90%.",
    "explanationHi": "Big 4 venomous snakes।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-235",
    "questionEn": "WHO Category III dog bite requires:",
    "questionHi": "सांप काटने के बाद कितने समय में अस्पताल पहुंचना चाहिए?",
    "optionsEn": [
      "No treatment",
      "Vaccine only",
      "Vaccine plus Rabies Immunoglobulin",
      "Antibiotics only"
    ],
    "optionsHi": [
      "24 घंटे",
      "जितना जल्दी हो (Golden Hour में)",
      "1 सप्ताह",
      "कोई जल्दी नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Category III (deep bites, scratches with bleeding) needs both vaccine and RIG.",
    "explanationHi": "As soon as possible।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-236",
    "questionEn": "The incubation period for rabies is typically:",
    "questionHi": "Dog Bite (कुत्ता काटना) में सबसे पहले क्या करें?",
    "optionsEn": [
      "Hours",
      "1-3 months",
      "1 year always",
      "Instant"
    ],
    "optionsHi": [
      "रोना",
      "घाव को साबुन और पानी से 10-15 मिनट धोना",
      "बांधना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rabies incubation is usually 1-3 months but can range from days to years.",
    "explanationHi": "Wash with soap and water।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-237",
    "questionEn": "A bee stinger should be removed by:",
    "questionHi": "कुत्ता काटने के बाद किस बीमारी का खतरा सबसे अधिक है?",
    "optionsEn": [
      "Squeezing with fingers",
      "Scraping sideways with a card",
      "Pulling with tweezers",
      "Leaving it in place"
    ],
    "optionsHi": [
      "मलेरिया",
      "Rabies (रेबीज)",
      "टाइफाइड",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Scraping prevents squeezing more venom from the attached sac.",
    "explanationHi": "Rabies risk।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-238",
    "questionEn": "Signs of anaphylaxis after a sting include:",
    "questionHi": "Rabies Vaccine कब देनी चाहिए?",
    "optionsEn": [
      "Only local swelling",
      "Widespread hives and breathing difficulty",
      "Mild itching only",
      "Improved symptoms over time"
    ],
    "optionsHi": [
      "लक्षण आने पर",
      "काटने के बाद जितनी जल्दी हो (0, 3, 7, 14, 28 दिन)",
      "1 महीने बाद",
      "कभी नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anaphylaxis causes systemic symptoms: hives, swelling, breathing trouble, shock.",
    "explanationHi": "As soon as possible after bite।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-239",
    "questionEn": "Multiple bee stings (>10-20) can cause:",
    "questionHi": "Rabies Immunoglobulin (RIG) कब दी जाती है?",
    "optionsEn": [
      "No problems if not allergic",
      "Toxic reaction from venom load",
      "Immunity to bee stings",
      "Only local reactions"
    ],
    "optionsHi": [
      "हर काटने में",
      "Category III Exposure (गहरा काटना, चाटना घाव पर)",
      "कभी नहीं",
      "केवल वैक्सीन"
    ],
    "correctAnswer": 1,
    "explanationEn": "Large venom doses cause toxic reactions even without allergy.",
    "explanationHi": "For severe bites।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-240",
    "questionEn": "For scorpion stings, which patients need urgent referral?",
    "questionHi": "Animal Bite में Category I क्या है?",
    "optionsEn": [
      "All adults",
      "Children and those with systemic symptoms",
      "Only if pain is severe",
      "No one needs referral"
    ],
    "optionsHi": [
      "गहरा काटना",
      "छूना, चाटना (साबुत त्वचा पर)",
      "खरोंच",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Children are at higher risk. Systemic symptoms indicate severe envenomation.",
    "explanationHi": "Touching, licking intact skin।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-241",
    "questionEn": "The most common route of poisoning is:",
    "questionHi": "Animal Bite में Category II क्या है?",
    "optionsEn": [
      "Inhalation",
      "Ingestion",
      "Injection",
      "Absorption"
    ],
    "optionsHi": [
      "साबुत त्वचा",
      "हल्की खरोंच, छोटा काटना (बिना खून)",
      "गहरा काटना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Swallowing is the most common route for poisoning exposure.",
    "explanationHi": "Minor scratches, nibbling।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-242",
    "questionEn": "SLUDGE syndrome indicates poisoning with:",
    "questionHi": "Animal Bite में Category III क्या है?",
    "optionsEn": [
      "Paracetamol",
      "Organophosphates",
      "Alcohol",
      "Carbon monoxide"
    ],
    "optionsHi": [
      "छूना",
      "गहरा काटना, कई घाव, म्यूकस मेम्ब्रेन पर लार",
      "खरोंच",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SLUDGE (Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis) = OP poisoning.",
    "explanationHi": "Severe bites, multiple wounds।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-243",
    "questionEn": "Pinpoint pupils are characteristic of:",
    "questionHi": "Bee/Wasp Sting (मधुमक्खी/ततैया का डंक) में क्या करें?",
    "optionsEn": [
      "Atropine poisoning",
      "Organophosphate poisoning",
      "Alcohol intoxication",
      "Carbon monoxide poisoning"
    ],
    "optionsHi": [
      "निचोड़ें",
      "डंक निकालें (किनारे से खुरचकर), बर्फ लगाएं",
      "दबाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Miosis (pinpoint pupils) is classic for cholinergic/OP poisoning.",
    "explanationHi": "Scrape off stinger, ice।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-244",
    "questionEn": "Inducing vomiting is CONTRAINDICATED in:",
    "questionHi": "Bee Sting में डंक कैसे निकालें?",
    "optionsEn": [
      "Aspirin overdose",
      "Food poisoning",
      "Corrosive (acid/alkali) ingestion",
      "Paracetamol overdose"
    ],
    "optionsHi": [
      "चिमटी से",
      "किनारे से खुरचकर (निचोड़ने से और जहर फैलता है)",
      "दबाकर",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Vomiting causes second burn to esophagus. Never induce vomiting for corrosives.",
    "explanationHi": "Scrape, don't squeeze।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-245",
    "questionEn": "For kerosene ingestion, vomiting should NOT be induced because:",
    "questionHi": "Bee Sting में Anaphylaxis के संकेत क्या हैं?",
    "optionsEn": [
      "It's not toxic",
      "High aspiration risk to lungs",
      "It neutralizes itself",
      "It's absorbed through skin only"
    ],
    "optionsHi": [
      "केवल खुजली",
      "सांस में कठिनाई, गले में सूजन, चक्कर, पूरे शरीर पर चकत्ते",
      "केवल सूजन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Petroleum products cause severe lung damage if aspirated during vomiting.",
    "explanationHi": "Signs of severe allergic reaction।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-246",
    "questionEn": "Carbon monoxide poisoning is suspected when:",
    "questionHi": "Scorpion Sting (बिच्छू का डंक) में क्या करें?",
    "optionsEn": [
      "Single person is affected",
      "Multiple people in same room are affected",
      "Patient has localized symptoms",
      "Symptoms worsen with fresh air"
    ],
    "optionsHi": [
      "चीरा लगाएं",
      "घाव धोएं, बर्फ लगाएं, दर्द निवारक, अस्पताल (गंभीर हो तो)",
      "मुंह से चूसें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CO is odorless. Multiple affected people in enclosed space = CO suspicion.",
    "explanationHi": "Wash, ice, pain relief।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-247",
    "questionEn": "The first step for inhalation poisoning is:",
    "questionHi": "Jellyfish Sting में क्या करें?",
    "optionsEn": [
      "Give water to drink",
      "Remove to fresh air safely",
      "Induce vomiting",
      "Apply heat"
    ],
    "optionsHi": [
      "ताजे पानी से धोएं",
      "सिरके (Vinegar) से धोएं, टेंटेकल्स हटाएं",
      "रगड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Priority is removing from toxic environment while protecting yourself.",
    "explanationHi": "Vinegar, remove tentacles।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-248",
    "questionEn": "For skin contamination with chemicals, flush with water for:",
    "questionHi": "Jellyfish Sting में ताजे पानी क्यों नहीं उपयोग करना चाहिए?",
    "optionsEn": [
      "1 minute",
      "5 minutes",
      "15-20 minutes",
      "1 hour"
    ],
    "optionsHi": [
      "ठीक है",
      "अधिक Nematocysts release होते हैं",
      "कोई कारण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Extensive water irrigation for 15-20 minutes removes most chemicals.",
    "explanationHi": "Fresh water triggers more stinging cells।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-249",
    "questionEn": "Aluminum phosphide (Celphos) poisoning:",
    "questionHi": "Tick Bite में Tick कैसे निकालें?",
    "optionsEn": [
      "Has a specific antidote",
      "Has no specific antidote and is very dangerous",
      "Is always survivable",
      "Only affects children"
    ],
    "optionsHi": [
      "खींचकर",
      "चिमटी से सिर के पास पकड़कर धीरे-धीरे सीधा खींचें",
      "मोड़कर",
      "जलाकर"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aluminum phosphide has no antidote and extremely high mortality.",
    "explanationHi": "Tweezers, pull straight।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-250",
    "questionEn": "The National Poison Information Centre number in India is:",
    "questionHi": "Tick Bite में क्या नहीं करना चाहिए?",
    "optionsEn": [
      "100",
      "108",
      "1800-116-117",
      "112"
    ],
    "optionsHi": [
      "चिमटी से निकालना",
      "मोड़ना, जलाना, पेट्रोलियम जेली लगाना",
      "धोना",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "NPIC at AIIMS: 1800-116-117 (toll-free, 24/7) for poison guidance.",
    "explanationHi": "Don't twist, burn, or use petroleum jelly।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-251",
    "questionEn": "For eye exposure to chemicals, irrigate for:",
    "questionHi": "Dehydration (निर्जलीकरण) के लक्षण क्या हैं?",
    "optionsEn": [
      "1-2 minutes",
      "5 minutes",
      "15-20 minutes",
      "Only until burning stops"
    ],
    "optionsHi": [
      "पसीना अधिक",
      "प्यास, सूखा मुंह, कम पेशाब, गहरा पेशाब, थकान, चक्कर",
      "भारी पेशाब",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Eye irrigation should continue for at least 15-20 minutes.",
    "explanationHi": "Signs of dehydration।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-252",
    "questionEn": "What should you do with the poison container?",
    "questionHi": "ORS का पूरा नाम क्या है?",
    "optionsEn": [
      "Dispose of immediately",
      "Take to hospital for identification",
      "Ignore it",
      "Wash and reuse"
    ],
    "optionsHi": [
      "Orange Rehydration Solution",
      "Oral Rehydration Solution/Salt",
      "Only Rest Solution",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Container, label, and any remaining poison help with treatment planning.",
    "explanationHi": "ORS full form।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-253",
    "questionEn": "Paracetamol overdose is dangerous because:",
    "questionHi": "घर पर ORS कैसे बनाएं?",
    "optionsEn": [
      "Immediate symptoms are severe",
      "Liver damage occurs later despite feeling fine initially",
      "It only affects children",
      "Symptoms appear within minutes"
    ],
    "optionsHi": [
      "केवल नमक",
      "1 लीटर पानी + 6 चम्मच चीनी + आधा चम्मच नमक",
      "केवल चीनी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Patients may feel fine initially while liver damage develops over 24-72 hours.",
    "explanationHi": "Homemade ORS recipe।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-254",
    "questionEn": "For dry chemical on skin, before water irrigation you should:",
    "questionHi": "Severe Dehydration के संकेत क्या हैं?",
    "optionsEn": [
      "Apply oil",
      "Brush off the dry chemical",
      "Apply neutralizer",
      "Apply heat"
    ],
    "optionsHi": [
      "हल्की प्यास",
      "धंसी आंखें, त्वचा का लचीलापन कम, बहुत कम पेशाब, बेहोशी",
      "सामान्य पेशाब",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Some chemicals react with water. Brush off dry powder first, then irrigate.",
    "explanationHi": "Severe dehydration signs।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-255",
    "questionEn": "An unconscious poisoning patient should be placed in:",
    "questionHi": "Skin Pinch Test क्या है?",
    "optionsEn": [
      "Supine position",
      "Sitting position",
      "Recovery position",
      "Prone position"
    ],
    "optionsHi": [
      "चुटकी",
      "निर्जलीकरण जांचने के लिए त्वचा का लचीलापन देखना",
      "दर्द जांचना",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Recovery position maintains airway and allows drainage of vomit.",
    "explanationHi": "Check skin turgor।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-256",
    "questionEn": "The rescue sequence for drowning is:",
    "questionHi": "Vomiting (उल्टी) में क्या करें?",
    "optionsEn": [
      "Go-Row-Throw-Reach",
      "Reach-Throw-Row-Go",
      "Go first always",
      "Throw only"
    ],
    "optionsHi": [
      "लिटाएं",
      "एक तरफ करवट में रखें, मुंह साफ करें, थोड़ा-थोड़ा पानी दें",
      "पीठ के बल लिटाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "TALK-REACH-THROW-ROW-GO. Enter water only as last resort.",
    "explanationHi": "Side position, clear mouth।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-257",
    "questionEn": "Why is 'Go' rescue (entering water) the last option?",
    "questionHi": "Projectile Vomiting क्या है?",
    "optionsEn": [
      "It's always effective",
      "Drowning victims can panic and drown the rescuer",
      "Water is always shallow",
      "Swimming is easy"
    ],
    "optionsHi": [
      "सामान्य उल्टी",
      "जोर से दूर तक फेंकने वाली उल्टी (गंभीर संकेत)",
      "हल्की मतली",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Panicking drowning victims can grab and drown would-be rescuers.",
    "explanationHi": "Forceful vomiting।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-258",
    "questionEn": "For drowning victims, CPR should start with:",
    "questionHi": "Coffee Ground Vomiting क्या दर्शाती है?",
    "optionsEn": [
      "30 compressions first",
      "5 initial rescue breaths",
      "Chest compressions only",
      "Abdominal thrusts"
    ],
    "optionsHi": [
      "सामान्य",
      "पेट में रक्तस्राव (पुराना खून)",
      "केवल कॉफी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Drowning causes hypoxia. Give 5 rescue breaths first to provide oxygen.",
    "explanationHi": "Sign of GI bleeding।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-259",
    "questionEn": "Compression-only CPR for drowning is:",
    "questionHi": "Diarrhea (दस्त) में सबसे महत्वपूर्ण उपचार क्या है?",
    "optionsEn": [
      "Preferred method",
      "Less effective than standard CPR",
      "The only option",
      "Never performed"
    ],
    "optionsHi": [
      "एंटीबायोटिक",
      "ORS/तरल पदार्थ से निर्जलीकरण रोकना",
      "दस्त रोकने की दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Drowning is hypoxic arrest. Rescue breaths are essential for best outcomes.",
    "explanationHi": "Prevent dehydration।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-260",
    "questionEn": "Vomiting during drowning resuscitation should be managed by:",
    "questionHi": "Bloody Diarrhea (Dysentery) में क्या करें?",
    "optionsEn": [
      "Stopping CPR completely",
      "Turning patient, clearing, and continuing CPR",
      "Ignoring it",
      "Performing abdominal thrusts"
    ],
    "optionsHi": [
      "घरेलू उपचार",
      "ORS दें, तुरंत डॉक्टर को दिखाएं",
      "इंतजार करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Turn to side, clear airway, then continue CPR. Don't delay unnecessarily.",
    "explanationHi": "ORS and see doctor।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-261",
    "questionEn": "Secondary drowning refers to:",
    "questionHi": "Fever (बुखार) में शरीर का तापमान कितना माना जाता है?",
    "optionsEn": [
      "Drowning again immediately",
      "Delayed respiratory problems hours after submersion",
      "Drowning in a pool vs. ocean",
      "Drowning at night"
    ],
    "optionsHi": [
      "36°C",
      "38°C (100.4°F) से अधिक",
      "35°C",
      "34°C"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aspirated water causes lung inflammation and fluid buildup hours later.",
    "explanationHi": "Fever definition।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-262",
    "questionEn": "After a near-drowning, the patient should:",
    "questionHi": "High Fever में क्या करें?",
    "optionsEn": [
      "Go home if feeling fine",
      "Be evaluated at hospital even if recovered",
      "Resume swimming immediately",
      "Only rest for 30 minutes"
    ],
    "optionsHi": [
      "गर्म कपड़े",
      "गुनगुने पानी से स्पंज करें, तरल पदार्थ दें, Paracetamol",
      "ठंडे पानी में डुबोएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "All drowning victims need hospital evaluation due to secondary drowning risk.",
    "explanationHi": "Tepid sponge, fluids, paracetamol।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-263",
    "questionEn": "When removing a drowning victim from water, keep them:",
    "questionHi": "बुखार में Aspirin बच्चों को क्यों नहीं देनी चाहिए?",
    "optionsEn": [
      "Upright",
      "Head down",
      "Horizontal",
      "Curled up"
    ],
    "optionsHi": [
      "दी जा सकती है",
      "Reye's Syndrome का खतरा",
      "कोई कारण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Horizontal position prevents sudden blood pressure drops.",
    "explanationHi": "Risk of Reye's syndrome।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-264",
    "questionEn": "Hypothermia in drowning occurs because water conducts heat:",
    "questionHi": "Paracetamol की वयस्क खुराक क्या है?",
    "optionsEn": [
      "Same as air",
      "10 times faster than air",
      "25 times faster than air",
      "Only in cold water"
    ],
    "optionsHi": [
      "100mg",
      "500-1000mg हर 4-6 घंटे (अधिकतम 4g/दिन)",
      "5000mg",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Water conducts heat 25 times faster than air, causing rapid heat loss.",
    "explanationHi": "Paracetamol dose।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-265",
    "questionEn": "In hypothermic cardiac arrest, you should:",
    "questionHi": "Headache (सिरदर्द) के सामान्य कारण क्या हैं?",
    "optionsEn": [
      "Stop CPR after 10 minutes",
      "Continue CPR for prolonged period",
      "Not attempt CPR",
      "Only warm the patient"
    ],
    "optionsHi": [
      "हड्डी टूटना",
      "तनाव, माइग्रेन, निर्जलीकरण, आंखों की समस्या, साइनस",
      "फ्रैक्चर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cold protects brain. Continue CPR. 'No one is dead until warm and dead.'",
    "explanationHi": "Common causes of headache।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-266",
    "questionEn": "During a generalized seizure, you should:",
    "questionHi": "सिरदर्द में खतरे के संकेत क्या हैं?",
    "optionsEn": [
      "Put something in the mouth",
      "Hold the person down firmly",
      "Protect from injury, don't restrain",
      "Give water immediately"
    ],
    "optionsHi": [
      "हल्का दर्द",
      "अचानक तेज दर्द, बुखार+गर्दन अकड़न, उल्टी, भ्रम, दृष्टि समस्या",
      "केवल दर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Clear area, cushion head, don't restrain. Nothing in mouth.",
    "explanationHi": "Warning signs in headache।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-267",
    "questionEn": "After a seizure stops, place the patient in:",
    "questionHi": "Chest Pain (सीने में दर्द) में क्या करें?",
    "optionsEn": [
      "Sitting position",
      "Recovery position",
      "Standing position",
      "Prone position with arms extended"
    ],
    "optionsHi": [
      "इंतजार करें",
      "बैठाएं, 108 बुलाएं (Heart Attack संदेह में)",
      "व्यायाम कराएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Recovery position keeps airway open and allows secretions to drain.",
    "explanationHi": "Sit, call emergency।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-268",
    "questionEn": "Call emergency services for a seizure if it lasts more than:",
    "questionHi": "Cardiac Chest Pain और Non-Cardiac Pain में अंतर क्या है?",
    "optionsEn": [
      "1 minute",
      "3 minutes",
      "5 minutes",
      "10 minutes"
    ],
    "optionsHi": [
      "एक ही",
      "Cardiac: दबाव, बाएं हाथ में फैलना; Non-Cardiac: तेज, स्थानीय",
      "कोई अंतर नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Seizures >5 minutes or repeated seizures = status epilepticus, an emergency.",
    "explanationHi": "Cardiac vs non-cardiac pain।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-269",
    "questionEn": "FAST assessment for stroke includes Face, Arms, Speech, and:",
    "questionHi": "Abdominal Pain (पेट दर्द) के खतरे के संकेत क्या हैं?",
    "optionsEn": [
      "Temperature",
      "Time",
      "Touch",
      "Test"
    ],
    "optionsHi": [
      "हल्का दर्द",
      "गंभीर दर्द, कठोर पेट, उल्टी में खून, काला मल, बुखार",
      "केवल गैस",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "FAST: Face drooping, Arm weakness, Speech slurred, Time to call emergency.",
    "explanationHi": "Warning signs in abdominal pain।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-270",
    "questionEn": "In stroke, 'Time is brain' means:",
    "questionHi": "Right Lower Quadrant Pain में किसका संदेह होता है?",
    "optionsEn": [
      "Strokes take a long time",
      "Quick treatment saves brain cells",
      "Time heals all strokes",
      "Wait and see approach is best"
    ],
    "optionsHi": [
      "पेट की गैस",
      "Appendicitis (आंत्रपुच्छ शोथ)",
      "सिरदर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "1.9 million brain cells die every minute during stroke. Rapid treatment essential.",
    "explanationHi": "Appendicitis suspicion।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-271",
    "questionEn": "For a stroke patient, you should NOT:",
    "questionHi": "Back Pain (पीठ दर्द) में प्राथमिक उपचार क्या है?",
    "optionsEn": [
      "Call emergency services",
      "Note the time symptoms started",
      "Give aspirin (may be bleeding stroke)",
      "Keep them comfortable"
    ],
    "optionsHi": [
      "व्यायाम",
      "आराम, बर्फ/गर्म सेक, दर्द निवारक",
      "भारी काम",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Aspirin could worsen hemorrhagic stroke. Hospital determines stroke type first.",
    "explanationHi": "Rest, ice/heat, pain relief।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-272",
    "questionEn": "A TIA (mini-stroke) should be treated as:",
    "questionHi": "पीठ दर्द में खतरे के संकेत क्या हैं?",
    "optionsEn": [
      "Minor issue, no urgency",
      "Emergency - warning of possible major stroke",
      "Something that always recurs",
      "Normal aging"
    ],
    "optionsHi": [
      "सामान्य दर्द",
      "पैर में कमजोरी/सुन्नपन, मूत्राशय/आंत्र नियंत्रण खोना, बुखार",
      "केवल दर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "TIA is a warning. 10-15% have full stroke within 3 months, many within 48 hours.",
    "explanationHi": "Red flags in back pain।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-273",
    "questionEn": "Classic heart attack symptoms include:",
    "questionHi": "Pregnancy में आपातकालीन संकेत क्या हैं?",
    "optionsEn": [
      "Sharp, stabbing chest pain",
      "Central chest pressure with arm/jaw pain",
      "Pain relieved by movement",
      "Fever and cough"
    ],
    "optionsHi": [
      "सामान्य",
      "योनि से रक्तस्राव, तेज सिरदर्द, दृष्टि समस्या, पेट में तेज दर्द",
      "हल्की मतली",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Heart attack typically causes pressure/squeezing in center of chest, radiating to arm/jaw.",
    "explanationHi": "Pregnancy danger signs।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-274",
    "questionEn": "Aspirin for suspected heart attack should be:",
    "questionHi": "Eclampsia क्या है?",
    "optionsEn": [
      "Swallowed whole with water",
      "Chewed for faster absorption",
      "Applied to chest",
      "Never given"
    ],
    "optionsHi": [
      "सामान्य गर्भावस्था",
      "गर्भावस्था में उच्च रक्तचाप के साथ दौरे",
      "केवल बुखार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chewing aspirin allows faster absorption to prevent clot growth.",
    "explanationHi": "Seizures in pregnancy with hypertension।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-275",
    "questionEn": "The 'W position' for heart attack patients means:",
    "questionHi": "Postpartum Hemorrhage (PPH) क्या है?",
    "optionsEn": [
      "Standing against wall",
      "Walking around",
      "Sitting with knees bent",
      "Lying flat"
    ],
    "optionsHi": [
      "कम रक्तस्राव",
      "प्रसव के बाद अत्यधिक रक्तस्राव (500ml से अधिक)",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Semi-reclined sitting with bent knees reduces strain on heart.",
    "explanationHi": "Excessive bleeding after delivery।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-276",
    "questionEn": "Hypoglycemia develops:",
    "questionHi": "PPH में क्या करें?",
    "optionsEn": [
      "Over days",
      "Over hours",
      "Rapidly (minutes)",
      "Only in diabetics"
    ],
    "optionsHi": [
      "इंतजार करें",
      "गर्भाशय की मालिश, 108 बुलाएं, IV fluids",
      "कुछ न करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Low blood sugar causes symptoms within minutes of onset.",
    "explanationHi": "Uterine massage, call emergency।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-277",
    "questionEn": "Signs of hypoglycemia include:",
    "questionHi": "Emergency Childbirth (आपातकालीन प्रसव) में क्या करें?",
    "optionsEn": [
      "Dry skin, fruity breath",
      "Sweating, shakiness, confusion",
      "Slow heart rate",
      "Excessive thirst"
    ],
    "optionsHi": [
      "रोकें",
      "शांत रहें, 108 बुलाएं, स्वच्छ वातावरण, प्रकृति पर छोड़ें",
      "खींचें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hypoglycemia causes cold sweats, trembling, hunger, and confusion.",
    "explanationHi": "Stay calm, call help, clean environment।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-278",
    "questionEn": "For conscious hypoglycemia, give:",
    "questionHi": "बच्चा जन्म के बाद नाभि रस्सी कब काटें?",
    "optionsEn": [
      "Diet soda",
      "Fast-acting sugar like juice or glucose tablets",
      "Protein only",
      "Nothing by mouth"
    ],
    "optionsHi": [
      "तुरंत",
      "धड़कना बंद होने के बाद (1-3 मिनट), साफ उपकरण से",
      "1 घंटे बाद",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Give 15-20g fast-acting sugar: juice, regular soda, glucose tablets, sugar.",
    "explanationHi": "After cord stops pulsating।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-279",
    "questionEn": "If uncertain whether diabetic emergency is hypo or hyperglycemia:",
    "questionHi": "नवजात शिशु के लिए पहला कदम क्या है?",
    "optionsEn": [
      "Give insulin",
      "Give nothing",
      "Give sugar - safer choice",
      "Wait for symptoms to clarify"
    ],
    "optionsHi": [
      "नहलाना",
      "सुखाना, गर्म रखना, सांस जांचना, स्तनपान शुरू करना",
      "ठंडा करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Sugar helps hypoglycemia dramatically; doesn't significantly worsen hyperglycemia.",
    "explanationHi": "Dry, warm, check breathing, breastfeed।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-280",
    "questionEn": "Severe asthma is indicated when patient:",
    "questionHi": "नवजात में सांस न हो तो क्या करें?",
    "optionsEn": [
      "Can speak full sentences easily",
      "Cannot speak full sentences due to breathlessness",
      "Has mild wheeze only",
      "Is sleeping comfortably"
    ],
    "optionsHi": [
      "इंतजार करें",
      "पीठ पर थपथपाएं, मुंह साफ करें, CPR (यदि जरूरी)",
      "रोएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Inability to complete sentences indicates severe asthma requiring urgent care.",
    "explanationHi": "Stimulate, clear airway, CPR if needed।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-281",
    "questionEn": "You should move a patient immediately if there is:",
    "questionHi": "Infant में CPR में Compression:Ventilation अनुपात क्या है?",
    "optionsEn": [
      "Suspected fracture",
      "Mild pain",
      "Fire or toxic fumes nearby",
      "Any injury"
    ],
    "optionsHi": [
      "30:2",
      "30:2 (एक बचावकर्ता) या 15:2 (दो बचावकर्ता)",
      "15:1",
      "5:1"
    ],
    "correctAnswer": 2,
    "explanationEn": "Immediate danger to life requires emergency moves despite injury risks.",
    "explanationHi": "30:2 for single rescuer।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-282",
    "questionEn": "For suspected spinal injury, the patient should:",
    "questionHi": "Infant में CPR में छाती कैसे दबाएं?",
    "optionsEn": [
      "Be moved immediately",
      "Not be moved unless absolutely necessary",
      "Be moved by one person",
      "Sit up immediately"
    ],
    "optionsHi": [
      "दोनों हाथों से",
      "दो उंगलियों से (Sternum के निचले आधे भाग)",
      "एक हाथ से",
      "पूरी हथेली से"
    ],
    "correctAnswer": 1,
    "explanationEn": "Spinal injuries require professional immobilization. Move only if danger present.",
    "explanationHi": "Two fingers on lower sternum।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-283",
    "questionEn": "When loading a patient into a vehicle, head should go:",
    "questionHi": "Infant में CPR में छाती कितनी गहराई तक दबाएं?",
    "optionsEn": [
      "Out of vehicle (feet first)",
      "Into vehicle first",
      "It doesn't matter",
      "Sideways"
    ],
    "optionsHi": [
      "2 इंच",
      "1.5 इंच (4 cm) या छाती की गहराई का 1/3",
      "3 इंच",
      "0.5 इंच"
    ],
    "correctAnswer": 1,
    "explanationEn": "Head first allows attendant to monitor face and airway during transport.",
    "explanationHi": "1.5 inches or 1/3 chest depth।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-284",
    "questionEn": "SBAR stands for:",
    "questionHi": "Child (1-8 वर्ष) में CPR में छाती कैसे दबाएं?",
    "optionsEn": [
      "Stop, Breathe, Act, Report",
      "Situation, Background, Assessment, Recommendation",
      "Safety, Breathing, Airway, Response",
      "Scene, Body, Arms, Recovery"
    ],
    "optionsHi": [
      "दो उंगलियों से",
      "एक हाथ की हथेली से (या दो हाथों से)",
      "पूरे शरीर से",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SBAR is a structured communication framework for patient handover.",
    "explanationHi": "One or two hands।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-285",
    "questionEn": "When carrying patient on stairs, head should be:",
    "questionHi": "Child में CPR में छाती कितनी गहराई तक दबाएं?",
    "optionsEn": [
      "Lower than feet always",
      "Higher than feet",
      "Level with feet",
      "Position doesn't matter"
    ],
    "optionsHi": [
      "1 इंच",
      "2 इंच (5 cm) या छाती की गहराई का 1/3",
      "3 इंच",
      "0.5 इंच"
    ],
    "correctAnswer": 1,
    "explanationEn": "Head higher than feet prevents blood rushing to head. Going up: head first. Going down: feet first.",
    "explanationHi": "2 inches or 1/3 chest depth।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-286",
    "questionEn": "List three early signs of shock.",
    "questionHi": "Psychological First Aid (मनोवैज्ञानिक प्राथमिक उपचार) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "दवाई देना",
      "आपातकालीन स्थिति में भावनात्मक सहायता",
      "केवल शारीरिक उपचार",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Emotional support in emergencies।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-287",
    "questionEn": "What does RICE stand for in soft tissue injury treatment?",
    "questionHi": "Psychological First Aid के सिद्धांत क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "जबरदस्ती बात करना",
      "सुरक्षा, शांति, आत्म-निर्भरता, सामाजिक संपर्क, आशा",
      "अकेला छोड़ना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Safety, calm, connectedness, hope।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-288",
    "questionEn": "Using Rule of Nines, what is the TBSA percentage of an adult's back?",
    "questionHi": "Panic Attack के लक्षण क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "आराम",
      "तेज धड़कन, सांस फूलना, कांपना, चक्कर, डर",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Symptoms of panic attack।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-289",
    "questionEn": "What is the minimum duration for washing a dog bite wound?",
    "questionHi": "Panic Attack में क्या करें?",
    "optionsEn": [],
    "optionsHi": [
      "चिल्लाएं",
      "शांत रखें, धीरे-धीरे सांस लेने में मदद करें, भरोसा दिलाएं",
      "अकेला छोड़ दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Stay calm, slow breathing, reassure।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-290",
    "questionEn": "Name two situations where vomiting should NOT be induced after poisoning.",
    "questionHi": "Hyperventilation क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "धीमी सांस",
      "बहुत तेज और गहरी सांस लेना (CO2 कम होना)",
      "सामान्य सांस",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Over-breathing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-291",
    "questionEn": "Why should rescue breaths be prioritized in drowning CPR?",
    "questionHi": "Hyperventilation में क्या करें?",
    "optionsEn": [],
    "optionsHi": [
      "और तेज सांस",
      "शांत करें, धीरे-धीरे सांस लेने में मदद करें, Paper Bag (सावधानी से)",
      "दौड़ाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Calm, slow breathing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-292",
    "questionEn": "What does FAST stand for in stroke assessment?",
    "questionHi": "Suicide Risk में क्या करें?",
    "optionsEn": [],
    "optionsHi": [
      "अकेला छोड़ें",
      "गंभीरता से लें, सुनें, पेशेवर मदद लें, अकेला न छोड़ें",
      "मजाक समझें",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Take seriously, listen, get help।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-293",
    "questionEn": "What is the first-line treatment for anaphylaxis?",
    "questionHi": "Alcohol Intoxication (नशा) में क्या करें?",
    "optionsEn": [],
    "optionsHi": [
      "और पिलाएं",
      "Recovery Position में रखें, सांस निगरानी, गर्म रखें, उल्टी पर ध्यान",
      "अकेला छोड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Recovery position, monitor breathing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-294",
    "questionEn": "What is the order of rescue options from safest to riskiest?",
    "questionHi": "Alcohol Poisoning के खतरे के संकेत क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "हल्का नशा",
      "बेहोशी जिससे जगाया न जा सके, धीमी/अनियमित सांस, उल्टी",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Signs of alcohol poisoning।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-295",
    "questionEn": "What is the National Poison Information Centre phone number in India?",
    "questionHi": "Mass Casualty Incident (सामूहिक दुर्घटना) में Triage क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "इलाज",
      "गंभीरता के आधार पर मरीजों को प्राथमिकता देना",
      "भागना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Prioritizing patients।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "General",
    "tags": [
      "general"
    ]
  },
  {
    "id": "FIRST-AID-296",
    "questionEn": "A 25-year-old woman spills hot oil on her forearm while cooking. The skin is red, blistered, and very painful. What is the burn depth and immediate first aid?",
    "questionHi": "Triage में लाल रंग किसके लिए है?",
    "optionsEn": [],
    "optionsHi": [
      "मृत",
      "तत्काल उपचार (सबसे गंभीर लेकिन बचाव संभव)",
      "हल्की चोट",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Immediate - most urgent।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-297",
    "questionEn": "A farmer is bitten by a snake in the field. He shows excessive salivation and drooping eyelids 1 hour later. Which type of snake is likely responsible and what is the priority?",
    "questionHi": "Triage में पीला रंग किसके लिए है?",
    "optionsEn": [],
    "optionsHi": [
      "मृत",
      "विलंबित उपचार (गंभीर लेकिन कुछ समय इंतजार कर सकते हैं)",
      "तत्काल",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Delayed - can wait।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-298",
    "questionEn": "A 60-year-old man suddenly develops weakness on the right side of his body and slurred speech. His face appears to droop on one side. What do you suspect and what is your immediate action?",
    "questionHi": "Triage में हरा रंग किसके लिए है?",
    "optionsEn": [],
    "optionsHi": [
      "मृत",
      "हल्की चोट (Walking Wounded)",
      "तत्काल",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Minor - walking wounded।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-299",
    "questionEn": "A child is found with an open bottle of toilet cleaner (acid). There are burns around his mouth. What is your first aid approach?",
    "questionHi": "Triage में काला रंग किसके लिए है?",
    "optionsEn": [],
    "optionsHi": [
      "तत्काल",
      "मृत या बचाव असंभव",
      "हल्की चोट",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Deceased or expectant।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-300",
    "questionEn": "You rescue a 10-year-old child from a pond. He is unconscious and not breathing. Describe your resuscitation approach.",
    "questionHi": "START Triage में पहला कदम क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "नाड़ी जांचना",
      "चल सकते हैं? (Walking) - हां तो हरा",
      "सांस देखना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Can they walk? Yes = Green।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-301",
    "questionEn": "The three aims of first aid are to preserve life, prevent deterioration, and:",
    "questionHi": "First Aid Kit (प्राथमिक उपचार किट) में क्या होना चाहिए?",
    "optionsEn": [
      "Perform surgery",
      "Promote recovery",
      "Prescribe medication",
      "Prevent infection only"
    ],
    "optionsHi": [
      "केवल दवाइयां",
      "Bandages, Dressings, Antiseptic, Gloves, Scissors, ORS, Thermometer",
      "केवल बैंडेज",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "The 3 Ps: Preserve life, Prevent worsening, Promote recovery.",
    "explanationHi": "Basic first aid kit contents।",
    "difficulty": "easy",
    "topic": "first-aid",
    "subtopic": "Principles",
    "tags": [
      "principles"
    ]
  },
  {
    "id": "FIRST-AID-302",
    "questionEn": "DRABC stands for:",
    "questionHi": "First Aid Kit में कौन सी Antiseptic होनी चाहिए?",
    "optionsEn": [
      "Danger, Response, Airway, Breathing, Circulation",
      "Doctor, Resuscitation, Ambulance, Bleeding, CPR",
      "Danger, Rescue, Assessment, Bandage, Care",
      "Drug, Response, Airway, Blood, Compression"
    ],
    "optionsHi": [
      "शराब",
      "Povidone-Iodine (Betadine), Hydrogen Peroxide, Savlon",
      "एसिड",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "DRABC is the primary survey sequence for emergency assessment.",
    "explanationHi": "Common antiseptics।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Principles",
    "tags": [
      "principles"
    ]
  },
  {
    "id": "FIRST-AID-303",
    "questionEn": "In triage, patients who can walk are usually classified as:",
    "questionHi": "First Aid Kit में कौन सी दर्द निवारक दवाई होनी चाहिए?",
    "optionsEn": [
      "Priority 1 (immediate)",
      "Priority 2 (delayed)",
      "Priority 3 (minor/walking wounded)",
      "Priority 4 (expectant)"
    ],
    "optionsHi": [
      "Morphine",
      "Paracetamol, Ibuprofen",
      "Antibiotics",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Walking wounded can wait for treatment; more critical patients prioritized.",
    "explanationHi": "Basic pain relievers।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Principles",
    "tags": [
      "principles"
    ]
  },
  {
    "id": "FIRST-AID-304",
    "questionEn": "The compression to ventilation ratio for two-rescuer adult CPR is:",
    "questionHi": "First Aid Kit कहां रखनी चाहिए?",
    "optionsEn": [
      "15:2",
      "30:2",
      "30:1",
      "5:1"
    ],
    "optionsHi": [
      "तालाबंद कमरे में",
      "आसानी से पहुंच योग्य, सूखी, ठंडी जगह",
      "छिपाकर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "30:2 ratio for all adult CPR, whether single or two rescuers.",
    "explanationHi": "Accessible, dry, cool place।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-305",
    "questionEn": "For infant CPR, use:",
    "questionHi": "First Aid Kit की जांच कितने समय में करनी चाहिए?",
    "optionsEn": [
      "Both hands on sternum",
      "Heel of one hand",
      "Two fingers on sternum",
      "Fist compressions"
    ],
    "optionsHi": [
      "साल में एक बार",
      "हर 3-6 महीने में (Expiry Date जांचें)",
      "कभी नहीं",
      "5 साल में"
    ],
    "correctAnswer": 2,
    "explanationEn": "For single rescuer infant CPR, use 2 fingers just below nipple line.",
    "explanationHi": "Check every 3-6 months।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-306",
    "questionEn": "Compression depth for children (1-puberty) should be:",
    "questionHi": "Sterile और Non-Sterile Dressing में क्या अंतर है?",
    "optionsEn": [
      "At least 5cm",
      "At least one-third of chest depth",
      "1-2 cm",
      "Same as adult always"
    ],
    "optionsHi": [
      "एक ही",
      "Sterile=जीवाणुरहित (घाव के लिए), Non-Sterile=सामान्य",
      "कोई अंतर नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Child compressions should be one-third chest depth (approximately 5cm).",
    "explanationHi": "Sterile for wounds।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-307",
    "questionEn": "The most important factor for CPR quality is:",
    "questionHi": "Crepe Bandage का उपयोग किसके लिए होता है?",
    "optionsEn": [
      "Speed of calling ambulance",
      "Rate and depth of compressions with minimal interruption",
      "Number of rescue breaths",
      "Using AED immediately"
    ],
    "optionsHi": [
      "घाव ढकना",
      "मोच, Strain, Compression देना",
      "सजावट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "High-quality compressions (100-120/min, adequate depth, full recoil, minimal pauses) save lives.",
    "explanationHi": "For sprains, compression।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-308",
    "questionEn": "The head tilt-chin lift should NOT be used when:",
    "questionHi": "Adhesive Tape का उपयोग किसके लिए होता है?",
    "optionsEn": [
      "Patient is unconscious",
      "Patient is not breathing",
      "Cervical spine injury is suspected",
      "Patient is choking"
    ],
    "optionsHi": [
      "खाने के लिए",
      "Dressing को त्वचा पर चिपकाना",
      "पीने के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Use jaw thrust instead to avoid neck movement in suspected spinal injury.",
    "explanationHi": "Securing dressings।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-309",
    "questionEn": "For a pregnant woman who is choking, use:",
    "questionHi": "Gauze Pad का उपयोग किसके लिए होता है?",
    "optionsEn": [
      "Abdominal thrusts",
      "Chest thrusts",
      "Back blows only",
      "No intervention needed"
    ],
    "optionsHi": [
      "सजावट",
      "घाव को ढकना, रक्तस्राव रोकना",
      "खाने के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chest thrusts used for pregnant and obese patients instead of abdominal thrusts.",
    "explanationHi": "Covering wounds।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-310",
    "questionEn": "If a choking victim becomes unconscious:",
    "questionHi": "Cotton Wool का उपयोग घाव पर सीधे क्यों नहीं करना चाहिए?",
    "optionsEn": [
      "Continue Heimlich maneuver",
      "Begin CPR, looking for object with each breath",
      "Perform only back blows",
      "Wait for ambulance"
    ],
    "optionsHi": [
      "करना चाहिए",
      "रेशे घाव में चिपक जाते हैं",
      "कोई कारण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Start CPR. Compressions may dislodge object. Check mouth before each breath.",
    "explanationHi": "Fibers stick to wound।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-311",
    "questionEn": "The femoral artery pressure point is located:",
    "questionHi": "Disposable Gloves का उपयोग क्यों जरूरी है?",
    "optionsEn": [
      "In the armpit",
      "In the groin",
      "Behind the knee",
      "At the wrist"
    ],
    "optionsHi": [
      "सजावट",
      "संक्रमण रोकथाम (रोगी और उपचारकर्ता दोनों के लिए)",
      "दिखावा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Femoral artery can be compressed in groin against pubic bone for leg bleeding.",
    "explanationHi": "Infection prevention।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-312",
    "questionEn": "Venous bleeding is characterized by:",
    "questionHi": "Safety Pin का First Aid में क्या उपयोग है?",
    "optionsEn": [
      "Bright red spurting blood",
      "Dark red steady flow",
      "Clear fluid",
      "No visible bleeding"
    ],
    "optionsHi": [
      "सजावट",
      "Triangular Bandage को बांधना, Sling बनाना",
      "खाने के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Venous blood is darker (deoxygenated) and flows steadily rather than spurting.",
    "explanationHi": "Securing bandages।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-313",
    "questionEn": "A puncture wound is dangerous because:",
    "questionHi": "Instant Cold Pack क्या है?",
    "optionsEn": [
      "It always bleeds heavily",
      "It may look minor but be deep with infection risk",
      "It heals too fast",
      "It only affects skin"
    ],
    "optionsHi": [
      "गर्म सेक",
      "रासायनिक ठंडक देने वाला पैक (मोच में उपयोग)",
      "बर्फ",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Puncture wounds can be deep, harbor bacteria, and tetanus is a concern.",
    "explanationHi": "Chemical cold pack।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-314",
    "questionEn": "For a nosebleed, the patient should:",
    "questionHi": "Emergency Blanket (Space Blanket) का क्या उपयोग है?",
    "optionsEn": [
      "Lie down with head back",
      "Sit forward and pinch soft part of nose",
      "Pack nose immediately",
      "Apply heat to nose"
    ],
    "optionsHi": [
      "सजावट",
      "शरीर की गर्मी बचाना (Shock, Hypothermia में)",
      "ठंडा करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lean forward (prevents swallowing blood), pinch soft nose for 10-15 minutes.",
    "explanationHi": "Retain body heat।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-315",
    "questionEn": "Hemostatic (blood-clotting) dressings are used when:",
    "questionHi": "Pocket Mask (CPR Mask) का क्या उपयोग है?",
    "optionsEn": [
      "Any minor cut occurs",
      "Direct pressure alone fails for severe bleeding",
      "Patient has low blood pressure",
      "Bleeding is venous only"
    ],
    "optionsHi": [
      "सजावट",
      "CPR में मुंह से मुंह सांस देते समय सुरक्षा",
      "खाने के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hemostatic agents used when standard pressure is inadequate for life-threatening bleeding.",
    "explanationHi": "Protection during rescue breathing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-316",
    "questionEn": "Septic shock is caused by:",
    "questionHi": "Universal Precautions क्या हैं?",
    "optionsEn": [
      "Blood loss",
      "Heart failure",
      "Severe infection",
      "Spinal cord injury"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "सभी रक्त और शारीरिक तरल पदार्थों को संक्रामक मानना",
      "केवल HIV में",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Septic shock results from overwhelming infection causing widespread vasodilation.",
    "explanationHi": "Treat all blood as infectious।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-317",
    "questionEn": "Neurogenic shock differs from other shock types because:",
    "questionHi": "First Aid में Hand Washing कब करना चाहिए?",
    "optionsEn": [
      "Patient has fast heart rate",
      "Patient may have slow heart rate and warm skin initially",
      "Blood pressure is always high",
      "It only occurs with bleeding"
    ],
    "optionsHi": [
      "कभी नहीं",
      "उपचार से पहले और बाद में",
      "केवल बाद में",
      "केवल पहले"
    ],
    "correctAnswer": 1,
    "explanationEn": "Spinal cord injury causes neurogenic shock with bradycardia and peripheral vasodilation.",
    "explanationHi": "Before and after treatment।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-318",
    "questionEn": "Anxiety and restlessness in a trauma patient may indicate:",
    "questionHi": "Blood-borne Pathogens से बचाव के लिए क्या करें?",
    "optionsEn": [
      "Normal response",
      "Early shock",
      "Full recovery",
      "Sleep deprivation"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Gloves पहनें, रक्त से सीधा संपर्क न करें, घाव हो तो ढकें",
      "रक्त छूएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mental status changes like anxiety/restlessness are early signs of inadequate brain perfusion.",
    "explanationHi": "PPE, avoid direct contact।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-319",
    "questionEn": "Compartment syndrome is an emergency because:",
    "questionHi": "First Aid देने के बाद रक्त से सने दस्ताने का निपटान कैसे करें?",
    "optionsEn": [
      "It's very common",
      "Increased pressure in muscle compartment can damage nerves and vessels",
      "It causes skin changes only",
      "It always indicates infection"
    ],
    "optionsHi": [
      "कहीं भी फेंकें",
      "सही तरीके से उतारें, Biohazard Bag में डालें",
      "धोकर रखें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Compartment syndrome cuts off blood supply. Signs: severe pain, pain with stretch, pallor.",
    "explanationHi": "Proper disposal।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-320",
    "questionEn": "A sling is used for:",
    "questionHi": "प्राथमिक उपचारकर्ता के लिए सबसे महत्वपूर्ण नियम क्या है?",
    "optionsEn": [
      "Leg injuries only",
      "Arm/shoulder injuries to support and immobilize",
      "Head injuries",
      "All fractures"
    ],
    "optionsHi": [
      "जल्दी करना",
      "पहले अपनी सुरक्षा, फिर दूसरों की",
      "बिना सोचे कूदना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Slings support arm, reduce movement, and relieve weight from shoulder/clavicle injuries.",
    "explanationHi": "Safety first।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-321",
    "questionEn": "Signs suggesting pelvic fracture include:",
    "questionHi": "Good Samaritan Law क्या है?",
    "optionsEn": [
      "Pain only in knee",
      "Severe pain in hip/groin, inability to stand, leg rotation",
      "Normal mobility",
      "No signs visible"
    ],
    "optionsHi": [
      "दंड देना",
      "आपातकालीन स्थिति में मदद करने वाले को कानूनी सुरक्षा",
      "कोई कानून नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pelvic fractures cause severe pain, inability to bear weight, possible shock from bleeding.",
    "explanationHi": "Legal protection for helpers।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-322",
    "questionEn": "Battle's sign (bruising behind ear) suggests:",
    "questionHi": "भारत में Good Samaritan कानून कब लागू हुआ?",
    "optionsEn": [
      "Arm fracture",
      "Skull base fracture",
      "Sprained ankle",
      "Normal aging"
    ],
    "optionsHi": [
      "2000",
      "2016 (Supreme Court के निर्देश से)",
      "1990",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Battle's sign (mastoid bruising) and raccoon eyes (periorbital bruising) suggest skull base fracture.",
    "explanationHi": "2016 SC guidelines।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-323",
    "questionEn": "Superficial (first degree) burns affect:",
    "questionHi": "Consent (सहमति) प्राथमिक उपचार में क्यों जरूरी है?",
    "optionsEn": [
      "Full skin thickness",
      "Epidermis only",
      "Muscle tissue",
      "Bone"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "रोगी के अधिकार की रक्षा, कानूनी सुरक्षा",
      "केवल कागज़ी काम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Superficial burns affect only epidermis - red, dry, painful, no blisters.",
    "explanationHi": "Patient rights and legal protection।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-324",
    "questionEn": "Rule of Nines assigns what percentage to the head and neck in adults?",
    "questionHi": "Implied Consent क्या है?",
    "optionsEn": [
      "4.5%",
      "9%",
      "18%",
      "1%"
    ],
    "optionsHi": [
      "लिखित सहमति",
      "बेहोश/असमर्थ व्यक्ति में मानी गई सहमति",
      "मना करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adult head and neck = 9% TBSA. Children have proportionally larger heads (18%).",
    "explanationHi": "Assumed consent in unconscious।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-325",
    "questionEn": "Burns to which area require hospital referral regardless of size?",
    "questionHi": "अगर कोई होश में व्यक्ति मदद से मना करे तो क्या करें?",
    "optionsEn": [
      "Back only",
      "Face, hands, feet, genitals, major joints",
      "Arm only",
      "Leg only"
    ],
    "optionsHi": [
      "जबरदस्ती",
      "मना न करें, लेकिन पास रहें और 108 बुलाएं",
      "छोड़ दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "These areas risk function loss, airway compromise, or infection; need specialist care.",
    "explanationHi": "Respect refusal, stay nearby।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-326",
    "questionEn": "For electrical burns, the main concern beyond visible injury is:",
    "questionHi": "बच्चों में प्राथमिक उपचार के लिए किसकी सहमति लें?",
    "optionsEn": [
      "Cosmetic damage",
      "Internal damage along current pathway and cardiac arrhythmias",
      "Skin color change",
      "Minor pain"
    ],
    "optionsHi": [
      "बच्चे की",
      "माता-पिता/अभिभावक की (जीवन खतरे में हो तो Implied)",
      "किसी की नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Electrical current damages tissues internally; all electrical burns need hospital ECG monitoring.",
    "explanationHi": "Parent/guardian consent।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-327",
    "questionEn": "Cooling should continue during transport if the burn occurred less than:",
    "questionHi": "DNR (Do Not Resuscitate) का क्या अर्थ है?",
    "optionsEn": [
      "15 minutes ago",
      "1 hour ago",
      "3 hours ago",
      "24 hours ago"
    ],
    "optionsHi": [
      "CPR देना",
      "रोगी की इच्छा से CPR न देना",
      "सब कुछ करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Cooling is beneficial if started within 3 hours of burn injury.",
    "explanationHi": "No CPR as per patient's wish।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-328",
    "questionEn": "Saw-scaled viper is identified by:",
    "questionHi": "First Aid Record क्यों रखना चाहिए?",
    "optionsEn": [
      "Hood display",
      "Blue-black with white bands",
      "Small size with saw-like scales and aggressive nature",
      "Very large body"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "कानूनी सुरक्षा, अस्पताल में जानकारी देना, सुधार के लिए",
      "केवल औपचारिकता",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Saw-scaled viper is small, aggressive, has serrated scales, and coils in figure-8.",
    "explanationHi": "Legal, medical, improvement।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-329",
    "questionEn": "Hemotoxic venom causes:",
    "questionHi": "First Aid Record में क्या लिखना चाहिए?",
    "optionsEn": [
      "Paralysis only",
      "Bleeding abnormalities and tissue damage",
      "Immediate death",
      "No symptoms"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "समय, घटना, चोट का प्रकार, दिया गया उपचार, रोगी की स्थिति",
      "केवल नाम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hemotoxic venom (vipers) causes clotting problems, bleeding, and local tissue destruction.",
    "explanationHi": "Time, incident, injury, treatment, condition।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-330",
    "questionEn": "After dog bite wound washing, apply:",
    "questionHi": "Road Traffic Accident (सड़क दुर्घटना) में पहला कदम क्या है?",
    "optionsEn": [
      "Turmeric paste",
      "Povidone-iodine or alcohol",
      "Oil",
      "Nothing"
    ],
    "optionsHi": [
      "गाड़ी से उतारना",
      "Scene Safety - खुद को और दूसरों को सुरक्षित करना",
      "भागना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "After thorough washing, apply antiseptic like povidone-iodine to kill remaining virus.",
    "explanationHi": "Scene safety first।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-331",
    "questionEn": "Rabies post-exposure prophylaxis should ideally begin:",
    "questionHi": "RTA में घायल को गाड़ी से कब निकालें?",
    "optionsEn": [
      "After 10 days observation",
      "Immediately on day 0",
      "Only if animal dies",
      "After symptoms appear"
    ],
    "optionsHi": [
      "तुरंत",
      "केवल जब जीवन को तत्काल खतरा हो (आग, डूबना)",
      "कभी नहीं",
      "हमेशा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Start PEP immediately. Waiting for observation doesn't delay starting vaccine.",
    "explanationHi": "Only if immediate life threat।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-332",
    "questionEn": "Position for anaphylaxis patient with breathing difficulty:",
    "questionHi": "RTA में Helmet कब निकालें?",
    "optionsEn": [
      "Lying flat",
      "Sitting upright",
      "Head down",
      "On stomach"
    ],
    "optionsHi": [
      "तुरंत",
      "केवल जब सांस में बाधा हो या CPR जरूरी हो",
      "कभी नहीं",
      "हमेशा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sitting helps breathing. Lying flat for those with low BP but no breathing trouble.",
    "explanationHi": "Only if airway blocked or CPR needed।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-333",
    "questionEn": "The 'Killer B's' in organophosphate poisoning are:",
    "questionHi": "RTA में 108 को क्या जानकारी दें?",
    "optionsEn": [
      "Burns, Blisters, Bruises",
      "Bradycardia, Bronchospasm, Bronchorrhea",
      "Bleeding, Bruising, Blood pressure",
      "Breathing, Bowels, Bladder"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "स्थान, घायलों की संख्या, चोट का प्रकार, सड़क की स्थिति",
      "केवल नाम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Killer B's are life-threatening features: slow heart, airway spasm, excess secretions.",
    "explanationHi": "Location, casualties, injuries।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-334",
    "questionEn": "The specific antidote for organophosphate poisoning is:",
    "questionHi": "RTA के बाद Traffic को कैसे संभालें?",
    "optionsEn": [
      "Naloxone",
      "Atropine",
      "N-acetylcysteine",
      "Vitamin K"
    ],
    "optionsHi": [
      "कुछ न करें",
      "Warning Triangle लगाएं, हाथ से संकेत दें, दूसरों की मदद लें",
      "भाग जाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Atropine blocks cholinergic effects. Pralidoxime (PAM) also used to reactivate enzymes.",
    "explanationHi": "Warning triangle, signals।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-335",
    "questionEn": "Fruity (acetone) breath odor suggests:",
    "questionHi": "Motorcycle Accident में आमतौर पर कौन सी चोटें होती हैं?",
    "optionsEn": [
      "Alcohol intoxication",
      "Diabetic ketoacidosis",
      "Aspirin overdose",
      "Normal finding"
    ],
    "optionsHi": [
      "केवल खरोंच",
      "सिर, रीढ़, अंगों की चोट, Road Rash",
      "कुछ नहीं",
      "केवल पेट"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fruity/acetone breath is characteristic of DKA (high blood sugar emergency).",
    "explanationHi": "Head, spine, limb injuries।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-336",
    "questionEn": "Common sources of carbon monoxide in Indian homes include:",
    "questionHi": "Fire (आग) में क्या करें?",
    "optionsEn": [
      "Microwave ovens",
      "Coal/charcoal burning in enclosed rooms, gas geysers",
      "Refrigerators",
      "Electric heaters"
    ],
    "optionsHi": [
      "छिपें",
      "RACE - Rescue, Alarm, Contain, Evacuate/Extinguish",
      "दौड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Coal angithis and poorly ventilated gas water heaters are common CO sources in India.",
    "explanationHi": "RACE protocol।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-337",
    "questionEn": "For eye chemical exposure, irrigate from:",
    "questionHi": "Fire Extinguisher का उपयोग कैसे करें?",
    "optionsEn": [
      "Inner to outer corner",
      "Outer to inner corner",
      "Top to bottom",
      "In circles"
    ],
    "optionsHi": [
      "कहीं भी",
      "PASS - Pull, Aim, Squeeze, Sweep",
      "फेंक दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Tilt head so water flows from inner corner outward, away from unaffected eye.",
    "explanationHi": "PASS technique।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-338",
    "questionEn": "Irreversible brain damage in drowning begins after:",
    "questionHi": "धुएं से भरे कमरे में कैसे बाहर निकलें?",
    "optionsEn": [
      "30 seconds",
      "2 minutes",
      "4-6 minutes",
      "20 minutes"
    ],
    "optionsHi": [
      "खड़े होकर",
      "झुककर या रेंगकर (धुआं ऊपर होता है)",
      "दौड़कर",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Without oxygen, brain cells begin to die within 4-6 minutes of submersion.",
    "explanationHi": "Crawl low, smoke rises।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-339",
    "questionEn": "A 'reach' rescue involves:",
    "questionHi": "आग में फंसे हों और दरवाजा गर्म हो तो क्या करें?",
    "optionsEn": [
      "Swimming to victim",
      "Throwing flotation device",
      "Extending pole/branch from shore",
      "Using a boat"
    ],
    "optionsHi": [
      "खोलें",
      "न खोलें, वैकल्पिक रास्ता खोजें, खिड़की से संकेत दें",
      "तोड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Reach rescue: extend something from shore while lying flat to avoid being pulled in.",
    "explanationHi": "Don't open hot door।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-340",
    "questionEn": "Warning signs of secondary drowning include:",
    "questionHi": "कपड़ों में आग लगे तो क्या करें?",
    "optionsEn": [
      "Immediate full recovery",
      "Coughing and breathing difficulty hours after incident",
      "No symptoms ever",
      "Improved swimming ability"
    ],
    "optionsHi": [
      "दौड़ें",
      "Stop, Drop, Roll (रुको, लेटो, लुढ़को)",
      "खड़े रहें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Secondary drowning: lung inflammation develops 1-24 hours after submersion.",
    "explanationHi": "Stop, drop, roll।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-341",
    "questionEn": "Hypothermia management includes all EXCEPT:",
    "questionHi": "Earthquake (भूकंप) में क्या करें?",
    "optionsEn": [
      "Removing wet clothes",
      "Wrapping in dry blankets",
      "Rubbing limbs vigorously",
      "Warming core areas"
    ],
    "optionsHi": [
      "बाहर दौड़ें",
      "Drop, Cover, Hold On (झुको, ढको, पकड़ो)",
      "खड़े रहें",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Don't rub limbs - can cause cold blood to rush to heart, triggering arrhythmia.",
    "explanationHi": "Drop, cover, hold on।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-342",
    "questionEn": "Putting something in a seizing person's mouth is dangerous because:",
    "questionHi": "भूकंप में कहां छिपें?",
    "optionsEn": [
      "It helps them breathe",
      "It can cause choking, tooth damage, or rescuer injury",
      "It stops the seizure",
      "It's always recommended"
    ],
    "optionsHi": [
      "दरवाजे में",
      "मजबूत मेज के नीचे, दीवार के किनारे",
      "खिड़की के पास",
      "लिफ्ट में"
    ],
    "correctAnswer": 1,
    "explanationEn": "Never put anything in mouth. Risk of aspiration, broken teeth, bitten fingers.",
    "explanationHi": "Under sturdy table, near wall।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-343",
    "questionEn": "Febrile seizures occur in:",
    "questionHi": "भूकंप के बाद क्या करें?",
    "optionsEn": [
      "Adults only",
      "Children with high fever",
      "Only elderly",
      "All ages equally"
    ],
    "optionsHi": [
      "अंदर रहें",
      "सावधानी से बाहर निकलें, Aftershocks से बचें, Gas Leak जांचें",
      "भागें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Febrile seizures are common in children 6 months to 5 years during high fever.",
    "explanationHi": "Exit carefully, check for hazards।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-344",
    "questionEn": "The time window for clot-busting drugs (thrombolytics) in stroke is:",
    "questionHi": "Flood (बाढ़) में क्या करें?",
    "optionsEn": [
      "30 minutes",
      "4.5 hours",
      "24 hours",
      "1 week"
    ],
    "optionsHi": [
      "पानी में चलें",
      "ऊंची जगह पर जाएं, बहते पानी में न जाएं",
      "तैरें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Thrombolytics most effective within 4.5 hours of symptom onset for ischemic stroke.",
    "explanationHi": "Go to higher ground।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-345",
    "questionEn": "Women having heart attacks may present with:",
    "questionHi": "बाढ़ के पानी में कितनी गहराई में गाड़ी बह सकती है?",
    "optionsEn": [
      "Always typical chest pain",
      "Atypical symptoms like fatigue, back pain, nausea",
      "No symptoms ever",
      "Only arm pain"
    ],
    "optionsHi": [
      "3 फीट",
      "6 इंच (15 cm) में भी",
      "10 फीट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Women, elderly, and diabetics more often have atypical presentations.",
    "explanationHi": "Even 6 inches can sweep vehicle।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-346",
    "questionEn": "After giving sugar to a hypoglycemic patient, wait:",
    "questionHi": "बाढ़ के पानी में क्या खतरे होते हैं?",
    "optionsEn": [
      "1 minute",
      "15 minutes",
      "1 hour",
      "24 hours"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "संक्रमण, बिजली का झटका, डूबना, जहरीले जीव",
      "केवल भीगना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Wait 15 minutes, recheck. If no improvement, give more sugar.",
    "explanationHi": "Infection, electrocution, drowning।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-347",
    "questionEn": "Deep, rapid breathing (Kussmaul breathing) is seen in:",
    "questionHi": "Chemical Spill में क्या करें?",
    "optionsEn": [
      "Hypoglycemia",
      "Diabetic ketoacidosis",
      "Normal sleep",
      "Heart attack"
    ],
    "optionsHi": [
      "छूएं",
      "दूर रहें, हवा की दिशा में जाएं, 108 बुलाएं",
      "सूंघें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Kussmaul breathing is body's attempt to blow off excess acid in DKA.",
    "explanationHi": "Stay away, upwind, call emergency।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-348",
    "questionEn": "A 'silent chest' in asthma is ominous because:",
    "questionHi": "Unknown Chemical Exposure में क्या करें?",
    "optionsEn": [
      "Patient is improving",
      "Air movement is so poor that wheezing can't be heard",
      "Asthma has resolved",
      "Medication is working"
    ],
    "optionsHi": [
      "अंदर जाएं",
      "प्रभावित क्षेत्र से बाहर निकलें, कपड़े हटाएं, धोएं",
      "छूएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Silent chest indicates severe obstruction with minimal air movement - life-threatening.",
    "explanationHi": "Remove from area, remove clothes, wash।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-349",
    "questionEn": "The blanket drag is used when:",
    "questionHi": "Gas Leak का संदेह हो तो क्या करें?",
    "optionsEn": [
      "Patient can walk",
      "Quick removal from danger on smooth surface needed",
      "Patient has no injuries",
      "Only for children"
    ],
    "optionsHi": [
      "Switch on करें",
      "खिड़कियां खोलें, बाहर निकलें, Gas बंद करें, No Sparks",
      "मोमबत्ती जलाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Blanket drag protects skin while quickly moving patient from danger.",
    "explanationHi": "Ventilate, evacuate, no sparks।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-350",
    "questionEn": "Firefighter's carry should NOT be used for:",
    "questionHi": "Gas Leak में क्या नहीं करना चाहिए?",
    "optionsEn": [
      "Unconscious patients",
      "Suspected spinal injuries",
      "Short distances",
      "Small patients"
    ],
    "optionsHi": [
      "बाहर जाना",
      "बिजली का Switch छूना, फोन करना (अंदर)",
      "खिड़की खोलना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Firefighter's carry moves spine; contraindicated in spinal injury.",
    "explanationHi": "No switches, no phone inside।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-351",
    "questionEn": "Four-person log roll is used for:",
    "questionHi": "Crowd Emergency में क्या करें?",
    "optionsEn": [
      "Any patient",
      "Suspected spinal injury patients",
      "Conscious patients only",
      "Children only"
    ],
    "optionsHi": [
      "बीच में जाएं",
      "किनारे से बाहर निकलने का प्रयास करें, गिरें नहीं",
      "धक्का दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Log roll keeps spine aligned as one unit while turning/moving patient.",
    "explanationHi": "Move to edge, don't fall।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-352",
    "questionEn": "An improvised stretcher can be made from:",
    "questionHi": "Stampede में गिर जाएं तो क्या करें?",
    "optionsEn": [
      "Paper only",
      "Blankets and poles/jackets and poles",
      "Just hands",
      "Nothing"
    ],
    "optionsHi": [
      "सीधे लेटें",
      "Fetal Position (घुटने छाती से, सिर ढकें)",
      "खड़े हों",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Blankets wrapped around poles or jackets with poles through sleeves make stretchers.",
    "explanationHi": "Fetal position to protect।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-353",
    "questionEn": "The Good Samaritan Law in India protects:",
    "questionHi": "Crush Injury क्या है?",
    "optionsEn": [
      "Only doctors",
      "Bystanders who provide reasonable first aid in good faith",
      "No one",
      "Only nurses"
    ],
    "optionsHi": [
      "कटना",
      "भारी वस्तु के नीचे दबने से चोट",
      "जलना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Good Samaritan Law protects those helping accident victims from legal liability.",
    "explanationHi": "Injury from being crushed।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Principles",
    "tags": [
      "principles"
    ]
  },
  {
    "id": "FIRST-AID-354",
    "questionEn": "Consent for first aid from an unconscious adult is:",
    "questionHi": "Crush Syndrome क्या है?",
    "optionsEn": [
      "Never assumed",
      "Implied consent (assumed)",
      "Always refused",
      "Obtained from neighbors"
    ],
    "optionsHi": [
      "सामान्य चोट",
      "लंबे समय तक दबने के बाद रिलीज से किडनी/हृदय समस्या",
      "फ्रैक्चर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Implied consent: unconscious patients are assumed to want life-saving treatment.",
    "explanationHi": "Systemic effects after release।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Principles",
    "tags": [
      "principles"
    ]
  },
  {
    "id": "FIRST-AID-355",
    "questionEn": "Signs of life include:",
    "questionHi": "Crush Injury में लंबे समय बाद वस्तु हटाने से पहले क्या जरूरी है?",
    "optionsEn": [
      "Cyanosis",
      "Movement, coughing, normal breathing",
      "Fixed pupils",
      "Cold skin"
    ],
    "optionsHi": [
      "तुरंत हटाएं",
      "IV Fluids शुरू करें, Medical Team बुलाएं",
      "कुछ न करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Signs of life: breathing normally, coughing, moving. Absence = start CPR.",
    "explanationHi": "IV fluids before removal।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-356",
    "questionEn": "Pushing hard and fast with full chest recoil describes:",
    "questionHi": "Terrorist Attack/Active Shooter में क्या करें?",
    "optionsEn": [
      "Rescue breathing",
      "High-quality chest compressions",
      "Recovery position",
      "Heimlich maneuver"
    ],
    "optionsHi": [
      "देखें",
      "Run, Hide, Fight (भागो, छिपो, लड़ो - अंतिम उपाय)",
      "खड़े रहें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Push hard (5cm+), push fast (100-120/min), allow full recoil, minimize interruptions.",
    "explanationHi": "Run, hide, fight।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-357",
    "questionEn": "Snoring breathing in an unconscious patient suggests:",
    "questionHi": "Blast Injury में कौन से प्रकार की चोटें होती हैं?",
    "optionsEn": [
      "Normal breathing",
      "Partial airway obstruction",
      "Cardiac arrest",
      "Pneumonia"
    ],
    "optionsHi": [
      "केवल कटना",
      "Primary (Pressure), Secondary (Fragments), Tertiary (Throw), Quaternary (Burns)",
      "कुछ नहीं",
      "केवल जलना"
    ],
    "correctAnswer": 1,
    "explanationEn": "Snoring indicates tongue or soft tissue partially blocking airway. Open airway needed.",
    "explanationHi": "4 types of blast injuries।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-358",
    "questionEn": "For infant airway opening, use:",
    "questionHi": "Blast Injury में कान और फेफड़ों पर विशेष ध्यान क्यों?",
    "optionsEn": [
      "Maximum head extension",
      "Neutral/sniffing position",
      "Chin on chest",
      "Head turned to side"
    ],
    "optionsHi": [
      "कोई कारण नहीं",
      "Pressure Wave से सबसे अधिक प्रभावित होते हैं",
      "दिखते हैं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Infant airway should be neutral. Over-extension can kink the pliable trachea.",
    "explanationHi": "Air-filled organs most affected।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-359",
    "questionEn": "Wound irrigation helps remove:",
    "questionHi": "Industrial Accident में पहला कदम क्या है?",
    "optionsEn": [
      "Blood from body",
      "Debris and bacteria",
      "Healthy tissue",
      "Clots only"
    ],
    "optionsHi": [
      "अंदर जाना",
      "Scene Safety, खतरों का आकलन, Hazmat Team बुलाना",
      "छूना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Irrigation with clean water removes debris and dilutes bacteria, reducing infection risk.",
    "explanationHi": "Scene safety, assess hazards।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-360",
    "questionEn": "Haemophilia patients may experience prolonged bleeding because:",
    "questionHi": "Hazmat (Hazardous Materials) से बचाव के लिए क्या करें?",
    "optionsEn": [
      "Blood vessels are larger",
      "Clotting factors are deficient",
      "They have too many platelets",
      "Blood is too thick"
    ],
    "optionsHi": [
      "नजदीक जाएं",
      "दूर रहें, Upwind/Uphill, PPE पहनें (प्रशिक्षित हों तो)",
      "छूएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Haemophilia is genetic disorder with deficient clotting factors, causing prolonged bleeding.",
    "explanationHi": "Stay away, upwind, uphill।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-361",
    "questionEn": "Psychogenic shock (fainting) is characterized by:",
    "questionHi": "Sports Injury में RICE के अलावा क्या करें?",
    "optionsEn": [
      "Permanent damage",
      "Temporary loss of consciousness, rapid recovery",
      "High blood pressure",
      "No cause identified"
    ],
    "optionsHi": [
      "खेलते रहें",
      "खेल रोकें, चोट का आकलन करें, जरूरी हो तो डॉक्टर",
      "और व्यायाम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vasovagal syncope: brief unconsciousness from temporary low BP, rapid recovery.",
    "explanationHi": "Stop activity, assess।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-362",
    "questionEn": "For a fainting patient, first:",
    "questionHi": "Head Injury in Sports में कब वापस नहीं खेलना चाहिए?",
    "optionsEn": [
      "Give water",
      "Lie them down and elevate legs",
      "Sit them up",
      "Slap their face"
    ],
    "optionsHi": [
      "तुरंत खेलें",
      "Concussion के लक्षण हों - उसी दिन नहीं खेलें",
      "हमेशा खेलें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lying down with legs elevated restores blood flow to brain.",
    "explanationHi": "No same-day return with concussion।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-363",
    "questionEn": "An avulsion is:",
    "questionHi": "ACL Injury किस खेल में आम है?",
    "optionsEn": [
      "A simple bruise",
      "Tissue torn away from body",
      "A closed fracture",
      "Muscle strain"
    ],
    "optionsHi": [
      "तैराकी",
      "फुटबॉल, बास्केटबॉल (घुटने की चोट)",
      "शतरंज",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Avulsion: tissue (skin, muscle, or body part) forcefully torn away.",
    "explanationHi": "Common in football, basketball।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-364",
    "questionEn": "For a collarbone (clavicle) fracture, use:",
    "questionHi": "Muscle Cramp में क्या करें?",
    "optionsEn": [
      "Leg splint",
      "Arm sling with swathe binding arm to body",
      "Back splint",
      "No support needed"
    ],
    "optionsHi": [
      "और व्यायाम",
      "धीरे से खींचें (Stretch), मालिश करें, पानी/ORS दें",
      "ठंडा करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sling supports arm weight; swathe immobilizes arm against body.",
    "explanationHi": "Stretch, massage, hydrate।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-365",
    "questionEn": "Escharotomy may be needed for:",
    "questionHi": "Nose Injury में नाक टूट जाए तो क्या करें?",
    "optionsEn": [
      "Minor burns",
      "Circumferential full-thickness burns restricting circulation",
      "Sunburn",
      "All partial thickness burns"
    ],
    "optionsHi": [
      "सीधा करें",
      "बर्फ लगाएं, सिर ऊंचा रखें, अस्पताल जाएं",
      "खींचें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Escharotomy surgically releases tight burn eschar that restricts blood flow or breathing.",
    "explanationHi": "Ice, head up, hospital।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-366",
    "questionEn": "In children, the Rule of Nines differs because:",
    "questionHi": "Workplace First Aid में क्या जरूरी है?",
    "optionsEn": [
      "Children don't get burns",
      "Children's heads are proportionally larger",
      "No difference exists",
      "Children heal faster"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "First Aid Kit, प्रशिक्षित कर्मचारी, Emergency Plan",
      "केवल दवाइयां",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Child head = 18% (vs 9% adult), legs = 14% each (vs 18% adult).",
    "explanationHi": "Kit, trained staff, plan।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-367",
    "questionEn": "The 10-day observation of a biting dog is useful because:",
    "questionHi": "Workplace में First Aiders की संख्या कितनी होनी चाहिए?",
    "optionsEn": [
      "Dog will definitely die",
      "If dog is healthy after 10 days, it wasn't rabid at bite time",
      "Dog needs rest",
      "To decide on antibiotics"
    ],
    "optionsHi": [
      "कोई नहीं",
      "कर्मचारियों की संख्या और जोखिम के अनुसार (कम से कम 1)",
      "केवल 1",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rabid animals die within 10 days. Healthy dog at day 10 = low rabies risk.",
    "explanationHi": "Based on staff and risk।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-368",
    "questionEn": "Wasps differ from bees in that:",
    "questionHi": "Occupational Health में First Aid Training कितने समय में Refresh करनी चाहिए?",
    "optionsEn": [
      "Wasps leave stinger behind",
      "Wasps can sting multiple times",
      "Wasps are not venomous",
      "Wasps are smaller"
    ],
    "optionsHi": [
      "कभी नहीं",
      "हर 2-3 साल में",
      "10 साल में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Wasp stinger is smooth, can sting repeatedly. Bee stinger is barbed, stays in skin.",
    "explanationHi": "Every 2-3 years।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-369",
    "questionEn": "Garlic/fish-like odor from patient suggests:",
    "questionHi": "School First Aid में क्या विशेष ध्यान रखें?",
    "optionsEn": [
      "Food poisoning",
      "Aluminum phosphide poisoning",
      "Alcohol",
      "Normal finding"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "बच्चों की आयु के अनुसार उपचार, माता-पिता को सूचना",
      "वयस्कों जैसा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Phosphine gas from aluminum phosphide has characteristic garlic/fish odor.",
    "explanationHi": "Age-appropriate, inform parents।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-370",
    "questionEn": "N-acetylcysteine is the antidote for:",
    "questionHi": "बच्चों में Medication देने से पहले क्या जरूरी है?",
    "optionsEn": [
      "Organophosphate poisoning",
      "Paracetamol overdose",
      "Carbon monoxide",
      "Snake venom"
    ],
    "optionsHi": [
      "तुरंत दें",
      "माता-पिता की लिखित अनुमति",
      "कुछ नहीं",
      "डॉक्टर से पूछना"
    ],
    "correctAnswer": 1,
    "explanationEn": "N-acetylcysteine prevents liver damage if given within 8-10 hours of paracetamol overdose.",
    "explanationHi": "Written parental consent।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-371",
    "questionEn": "Fresh water drowning vs. salt water drowning:",
    "questionHi": "Home First Aid में सबसे आम चोटें कौन सी हैं?",
    "optionsEn": [
      "Require different CPR",
      "Both managed the same way in first aid",
      "Only salt water is dangerous",
      "Fresh water doesn't cause drowning"
    ],
    "optionsHi": [
      "फ्रैक्चर",
      "कटना, जलना, गिरना, विषाक्तता",
      "गोली लगना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "First aid is identical. Hospital management may differ based on electrolyte effects.",
    "explanationHi": "Cuts, burns, falls, poisoning।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-372",
    "questionEn": "After removing from water, position the drowning victim:",
    "questionHi": "घर में बच्चों की सुरक्षा के लिए क्या करें?",
    "optionsEn": [
      "Standing",
      "Sitting",
      "Horizontal or recovery position",
      "Upside down"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "दवाइयां/रसायन ताले में, Socket Covers, Sharp Objects दूर",
      "सब खुला रखें",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Keep horizontal to prevent BP drop. Recovery position if breathing but unconscious.",
    "explanationHi": "Childproofing measures।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-373",
    "questionEn": "Post-ictal state refers to:",
    "questionHi": "बुजुर्गों में गिरने से बचाव के लिए क्या करें?",
    "optionsEn": [
      "Before a seizure",
      "The confusion period after seizure",
      "During the seizure",
      "Normal waking"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "अच्छी रोशनी, फिसलन रोकें, Grab Bars लगाएं, Walking Aid",
      "अंधेरे में रखें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Post-ictal: period of confusion, sleepiness, and disorientation following a seizure.",
    "explanationHi": "Fall prevention measures।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-374",
    "questionEn": "Ischemic stroke is caused by:",
    "questionHi": "Travel First Aid Kit में क्या अतिरिक्त रखें?",
    "optionsEn": [
      "Bleeding in brain",
      "Blood clot blocking brain artery",
      "Infection",
      "Tumor"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Motion Sickness दवाई, Antidiarrheal, Sunscreen, Insect Repellent",
      "केवल Bandage",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ischemic stroke (85%): clot blocks artery. Hemorrhagic stroke (15%): bleeding.",
    "explanationHi": "Travel-specific items।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-375",
    "questionEn": "Angina differs from heart attack because:",
    "questionHi": "Altitude Sickness के लक्षण क्या हैं?",
    "optionsEn": [
      "Pain is more severe in angina",
      "Angina is relieved by rest/GTN, heart attack is not",
      "Heart attack has no chest pain",
      "They are identical"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "सिरदर्द, मतली, थकान, सांस फूलना (ऊंचाई पर)",
      "बुखार",
      "दस्त"
    ],
    "correctAnswer": 1,
    "explanationEn": "Angina: temporary ischemia relieved by rest. Heart attack: permanent damage, not relieved.",
    "explanationHi": "Symptoms at high altitude।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-376",
    "questionEn": "Blue reliever inhaler (salbutamol) for asthma works by:",
    "questionHi": "Altitude Sickness में क्या करें?",
    "optionsEn": [
      "Reducing inflammation",
      "Relaxing airway muscles (bronchodilation)",
      "Fighting infection",
      "Thinning mucus"
    ],
    "optionsHi": [
      "और ऊपर जाएं",
      "नीचे उतरें, आराम करें, तरल पदार्थ लें",
      "व्यायाम करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Salbutamol is a bronchodilator - opens airways by relaxing smooth muscle.",
    "explanationHi": "Descend, rest, hydrate।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-377",
    "questionEn": "When using two-person fore-and-aft carry, communication is:",
    "questionHi": "Sunburn में क्या करें?",
    "optionsEn": [
      "Not needed",
      "Essential for coordination",
      "Only one person speaks",
      "Written only"
    ],
    "optionsHi": [
      "और धूप में जाएं",
      "ठंडा करें, Aloe Vera/Moisturizer, तरल पदार्थ, धूप से बचें",
      "गर्म करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clear commands ('lift on three') ensure coordinated movements.",
    "explanationHi": "Cool, moisturize, hydrate।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-378",
    "questionEn": "In SBAR, 'B' stands for:",
    "questionHi": "Motion Sickness में क्या करें?",
    "optionsEn": [
      "Blood pressure",
      "Background",
      "Breathing",
      "Bandage"
    ],
    "optionsHi": [
      "पढ़ें",
      "दूर देखें, ताजी हवा लें, आगे बैठें, दवाई लें",
      "नीचे देखें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SBAR: Situation, Background, Assessment, Recommendation.",
    "explanationHi": "Look far, fresh air, sit front।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-379",
    "questionEn": "Patient belongings and valuables during transport should be:",
    "questionHi": "Jet Lag में क्या करें?",
    "optionsEn": [
      "Left behind",
      "Documented and handed over with patient",
      "Discarded",
      "Given to bystanders"
    ],
    "optionsHi": [
      "जागते रहें",
      "नई Time Zone के अनुसार सोएं, Sunlight लें, Hydrate",
      "सोते रहें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Document valuables and hand over to hospital/family to prevent loss.",
    "explanationHi": "Adjust to new time zone।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-380",
    "questionEn": "In multiple casualty incident triage, black tag means:",
    "questionHi": "Wilderness First Aid में क्या विशेष चुनौती है?",
    "optionsEn": [
      "Minor injury",
      "Immediate treatment needed",
      "Delayed treatment",
      "Deceased or expectant (not survivable)"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "मदद दूर होना, संसाधन सीमित, Evacuation कठिन",
      "सब आसान",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Black: dead or injuries incompatible with survival given available resources.",
    "explanationHi": "Remote location challenges।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Principles",
    "tags": [
      "principles"
    ]
  },
  {
    "id": "FIRST-AID-381",
    "questionEn": "Hands-only CPR (compression-only) is acceptable for:",
    "questionHi": "Wilderness में Splint के लिए क्या उपयोग करें?",
    "optionsEn": [
      "Drowning",
      "Adults with witnessed sudden collapse",
      "Children",
      "All situations"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "लकड़ी, Trekking Poles, Rolled Newspaper, SAM Splint",
      "केवल अस्पताल में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Witnessed adult collapse is likely cardiac. Hands-only CPR is better than nothing.",
    "explanationHi": "Improvised splints।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-382",
    "questionEn": "Obstructive shock can be caused by:",
    "questionHi": "Wilderness में पानी को पीने योग्य कैसे बनाएं?",
    "optionsEn": [
      "Dehydration",
      "Tension pneumothorax or cardiac tamponade",
      "Vasodilation",
      "Blood loss"
    ],
    "optionsHi": [
      "सीधे पिएं",
      "उबालें (3-5 मिनट), Filter, Purification Tablets",
      "छानें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Obstructive shock: mechanical obstruction to blood flow (tamponade, tension pneumo, PE).",
    "explanationHi": "Boil, filter, purify।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-383",
    "questionEn": "The Parkland formula is used for:",
    "questionHi": "Marine First Aid में क्या विशेष चुनौती है?",
    "optionsEn": [
      "Wound cleaning",
      "Calculating fluid resuscitation in major burns",
      "Estimating burn area",
      "Deciding surgery"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "पानी में बचाव, Seasickness, Marine Animals",
      "सब आसान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Parkland formula calculates IV fluid needs for burns: 4mL x kg x %TBSA.",
    "explanationHi": "Water rescue, marine hazards।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-384",
    "questionEn": "Activated charcoal works by:",
    "questionHi": "Man Overboard में क्या करें?",
    "optionsEn": [
      "Neutralizing poison",
      "Binding (adsorbing) poison in gut to prevent absorption",
      "Inducing vomiting",
      "Diluting poison"
    ],
    "optionsHi": [
      "कूदें",
      "चिल्लाएं, Point करते रहें, Life Buoy फेंकें, नाव रोकें",
      "भूल जाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Charcoal has huge surface area that binds toxins, preventing GI absorption.",
    "explanationHi": "Shout, point, throw, stop।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-385",
    "questionEn": "In stroke, the 'penumbra' refers to:",
    "questionHi": "Fish Hook Injury में Hook कैसे निकालें?",
    "optionsEn": [
      "Dead tissue",
      "Brain tissue at risk that can be saved with rapid treatment",
      "Normal brain",
      "CSF"
    ],
    "optionsHi": [
      "खींचें",
      "Advance and Cut या String-Yank Method (प्रशिक्षित हों)",
      "दबाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Penumbra: ischemic but not dead tissue - target for reperfusion therapy.",
    "explanationHi": "Special removal techniques।",
    "difficulty": "hard",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-386",
    "questionEn": "A comminuted fracture means:",
    "questionHi": "First Aid Certification का क्या लाभ है?",
    "optionsEn": [
      "Bone bent but not broken",
      "Bone broken into multiple fragments",
      "Clean break across bone",
      "Spiral break pattern"
    ],
    "optionsHi": [
      "कोई लाभ नहीं",
      "जीवन बचाने की क्षमता, Workplace में जरूरी, आत्मविश्वास",
      "केवल कागज",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Comminuted: bone shattered into multiple pieces, often from high-energy trauma.",
    "explanationHi": "Life-saving skills, confidence।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-387",
    "questionEn": "A hematoma is:",
    "questionHi": "BLS (Basic Life Support) में क्या शामिल है?",
    "optionsEn": [
      "External bleeding",
      "Collection of blood under skin/in tissue",
      "Arterial bleeding",
      "Normal bruise"
    ],
    "optionsHi": [
      "केवल Bandage",
      "CPR, AED, Choking Management",
      "केवल दवाइयां",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hematoma: localized collection of blood outside vessels, forming a swelling.",
    "explanationHi": "CPR, AED, choking।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-388",
    "questionEn": "If rescue breaths don't make chest rise:",
    "questionHi": "ACLS (Advanced Cardiac Life Support) में क्या अतिरिक्त है?",
    "optionsEn": [
      "Continue without adjusting",
      "Reposition head and try again",
      "Stop all resuscitation",
      "Give more forceful breaths"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "IV Medications, Advanced Airway, ECG Interpretation",
      "केवल CPR",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "No chest rise = airway not open. Reposition head tilt-chin lift and retry.",
    "explanationHi": "Advanced interventions।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-389",
    "questionEn": "Flash burns from electricity often:",
    "questionHi": "PALS (Pediatric Advanced Life Support) किसके लिए है?",
    "optionsEn": [
      "Are always deep",
      "Are superficial from brief heat exposure",
      "Require amputation",
      "Don't occur with electricity"
    ],
    "optionsHi": [
      "वयस्क",
      "बच्चों की आपातकालीन देखभाल",
      "बुजुर्ग",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Flash burns from electrical arc may be superficial; however, all electrical injuries need evaluation.",
    "explanationHi": "Pediatric emergencies।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-390",
    "questionEn": "Clothes drag keeps the patient's body:",
    "questionHi": "First Aid Training कहां से लें?",
    "optionsEn": [
      "Flexed",
      "As aligned as possible",
      "Rotated",
      "In sitting position"
    ],
    "optionsHi": [
      "कहीं से भी",
      "Red Cross, St. John Ambulance, Certified Institutes",
      "YouTube केवल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clothes drag while lying supine keeps body relatively aligned during emergency move.",
    "explanationHi": "Certified organizations।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-391",
    "questionEn": "What are the three Ps (aims) of first aid?",
    "questionHi": "Indian Red Cross Society का क्या कार्य है?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "First Aid Training, Blood Donation, Disaster Response",
      "केवल रक्तदान",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Red Cross services।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "General",
    "tags": [
      "general"
    ]
  },
  {
    "id": "FIRST-AID-392",
    "questionEn": "What is the compression rate for adult CPR?",
    "questionHi": "St. John Ambulance India का क्या कार्य है?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "First Aid Training, Ambulance Service, Public Events Coverage",
      "केवल एम्बुलेंस",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "St. John services।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-393",
    "questionEn": "How long should you maintain direct pressure before checking a wound?",
    "questionHi": "First Aid Apps का क्या उपयोग है?",
    "optionsEn": [],
    "optionsHi": [
      "कोई उपयोग नहीं",
      "तत्काल जानकारी, Step-by-step Guide, Emergency Numbers",
      "केवल गेम",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Quick information access।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-394",
    "questionEn": "For how long should a thermal burn be cooled under running water?",
    "questionHi": "Telemedicine का First Aid में क्या उपयोग है?",
    "optionsEn": [],
    "optionsHi": [
      "कोई नहीं",
      "दूरस्थ क्षेत्रों में डॉक्टर से परामर्श, Video Guidance",
      "केवल शहरों में",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Remote consultation।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-395",
    "questionEn": "How many initial rescue breaths should be given to a drowning victim?",
    "questionHi": "Community First Aid Training का क्या लाभ है?",
    "optionsEn": [],
    "optionsHi": [
      "कोई लाभ नहीं",
      "Bystander Response बढ़ना, जीवन बचाना, सामुदायिक सुरक्षा",
      "केवल Certificate",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Community safety।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-396",
    "questionEn": "What dose of aspirin is given for suspected heart attack?",
    "questionHi": "First Responder कौन होता है?",
    "optionsEn": [],
    "optionsHi": [
      "केवल डॉक्टर",
      "घटनास्थल पर पहले पहुंचने वाला व्यक्ति (कोई भी)",
      "केवल पुलिस",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "First person at scene।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-397",
    "questionEn": "How long must a seizure last to be considered status epilepticus?",
    "questionHi": "Bystander Effect क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "मदद करना",
      "भीड़ में लोग मदद नहीं करते (सोचते हैं कोई और करेगा)",
      "सक्रिय होना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "People don't help in crowds।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Seizures",
    "tags": [
      "seizures"
    ]
  },
  {
    "id": "FIRST-AID-398",
    "questionEn": "A 30-year-old man is found after a motorcycle accident with a pale face, cold sweaty skin, rapid weak pulse, and confusion. What type of shock is this and what is your first aid?",
    "questionHi": "Bystander Effect से कैसे बचें?",
    "optionsEn": [],
    "optionsHi": [
      "चुप रहें",
      "किसी एक व्यक्ति को सीधे निर्देश दें ('आप 108 बुलाइए')",
      "सबसे कहें",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Direct instructions to one person।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-399",
    "questionEn": "An elderly woman fell and complains of severe hip pain. She cannot stand, and one leg appears shorter and rotated outward. What do you suspect and what is your management?",
    "questionHi": "First Aid का सबसे महत्वपूर्ण सिद्धांत क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "जल्दी करना",
      "Do No Harm (नुकसान न पहुंचाना)",
      "सब कुछ करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "First, do no harm।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-400",
    "questionEn": "A child has been having a seizure for 7 minutes. The mother says it started during a fever. What is this condition called and what should you do?",
    "questionHi": "MPHW के लिए First Aid Training क्यों अनिवार्य है?",
    "optionsEn": [],
    "optionsHi": [
      "अनिवार्य नहीं",
      "ग्रामीण क्षेत्रों में आपातकालीन सेवाएं दूर, पहली मदद MPHW ही दे सकते हैं",
      "केवल शहरों में",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Essential for rural emergencies।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Seizures",
    "tags": [
      "seizures"
    ]
  },
  {
    "id": "FIRST-AID-401",
    "questionEn": "If an AED is available during CPR, you should:",
    "questionHi": "CPR में Push Hard Push Fast का क्या अर्थ है?",
    "optionsEn": [
      "Ignore it and continue CPR",
      "Stop CPR and use AED as soon as possible",
      "Wait until ambulance arrives",
      "Use AED only for children"
    ],
    "optionsHi": [
      "धीरे दबाना",
      "कम से कम 2 इंच गहरा, 100-120/मिनट की दर से",
      "हल्का दबाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "AED use as soon as available improves survival. Follow AED prompts.",
    "explanationHi": "Hard and fast compressions।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-402",
    "questionEn": "During CPR, rescuer fatigue affects compression quality after:",
    "questionHi": "CPR में Full Chest Recoil क्यों जरूरी है?",
    "optionsEn": [
      "5 minutes",
      "1-2 minutes",
      "10 minutes",
      "30 minutes"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "छाती पूरी वापस आने से हृदय में रक्त भरता है",
      "दिखावा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Quality drops in 1-2 minutes. Switch compressors every 2 minutes if possible.",
    "explanationHi": "Heart refills during recoil।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-403",
    "questionEn": "The chain of survival includes early recognition, early CPR, early defibrillation, and:",
    "questionHi": "CPR में Minimise Interruptions क्यों जरूरी है?",
    "optionsEn": [
      "Early surgery",
      "Early post-resuscitation care",
      "Early antibiotics",
      "Early discharge"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "लगातार Compression से बेहतर रक्त प्रवाह",
      "आराम के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chain: Recognition, CPR, Defibrillation, Advanced care, Post-resuscitation care.",
    "explanationHi": "Continuous compressions improve blood flow।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-404",
    "questionEn": "Stridor is:",
    "questionHi": "High Quality CPR में CCF (Chest Compression Fraction) कितना होना चाहिए?",
    "optionsEn": [
      "Silent breathing",
      "High-pitched noise on inspiration indicating upper airway obstruction",
      "Normal breathing sound",
      "Sound of coughing"
    ],
    "optionsHi": [
      "30%",
      "60% से अधिक (आदर्श 80%+)",
      "10%",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Stridor indicates narrowing of upper airway - urgent sign.",
    "explanationHi": "More than 60% time in compressions।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-405",
    "questionEn": "For conscious choking with ineffective cough:",
    "questionHi": "CPR में थक जाएं तो क्या करें?",
    "optionsEn": [
      "Wait and observe",
      "Give 5 back blows, then 5 abdominal thrusts",
      "Only give water",
      "Have them lie down"
    ],
    "optionsHi": [
      "रोक दें",
      "दूसरे व्यक्ति से बदलें (हर 2 मिनट में)",
      "धीमे करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Severe obstruction (can't speak/cough): alternate back blows and abdominal thrusts.",
    "explanationHi": "Switch every 2 minutes।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-406",
    "questionEn": "When time of tourniquet application should be noted:",
    "questionHi": "Rescue Breathing में कितनी हवा देनी चाहिए?",
    "optionsEn": [
      "Never",
      "Always, mark it on the tourniquet",
      "Only at hospital",
      "Only for children"
    ],
    "optionsHi": [
      "पूरे जोर से",
      "छाती उठे इतनी (लगभग 500ml), 1 सेकंड में",
      "बहुत कम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Time helps hospital decide on ischemia duration and limb viability.",
    "explanationHi": "Until chest rises, 1 second।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-407",
    "questionEn": "Epistaxis (nosebleed) that doesn't stop with pressure may need:",
    "questionHi": "Over-ventilation के क्या नुकसान हैं?",
    "optionsEn": [
      "More ice only",
      "Nasal packing and hospital referral",
      "Head tilted back",
      "Nothing further"
    ],
    "optionsHi": [
      "कोई नहीं",
      "पेट में हवा, उल्टी, कम रक्त प्रवाह",
      "फायदा है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Persistent nosebleed may need anterior/posterior packing or cauterization.",
    "explanationHi": "Gastric inflation, reduced blood flow।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-408",
    "questionEn": "In distributive shock, the problem is:",
    "questionHi": "Mouth-to-Nose Breathing कब करें?",
    "optionsEn": [
      "Low blood volume",
      "Pump failure",
      "Widespread vasodilation",
      "Airway obstruction"
    ],
    "optionsHi": [
      "हमेशा",
      "जब मुंह से सांस देना संभव न हो (चोट, खुलता न हो)",
      "कभी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Distributive shock: blood vessels dilate inappropriately (septic, anaphylactic, neurogenic).",
    "explanationHi": "Alternative rescue breathing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-409",
    "questionEn": "Blood pressure may remain normal in early shock due to:",
    "questionHi": "Bag-Valve-Mask (BVM) क्या है?",
    "optionsEn": [
      "No bleeding",
      "Compensatory mechanisms",
      "Measurement error",
      "Young age"
    ],
    "optionsHi": [
      "मास्क",
      "हाथ से दबाकर सांस देने का उपकरण (Ambu Bag)",
      "ऑक्सीजन सिलेंडर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Body compensates (vasoconstriction, increased HR) to maintain BP initially.",
    "explanationHi": "Manual resuscitator।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-410",
    "questionEn": "Angulation of a limb suggests:",
    "questionHi": "AED Pads कहां लगाएं?",
    "optionsEn": [
      "Sprain only",
      "Possible fracture or dislocation",
      "Normal variant",
      "Muscle strain"
    ],
    "optionsHi": [
      "कहीं भी",
      "दाहिनी छाती के ऊपर और बाईं बगल में",
      "दोनों पैरों पर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Deformity/angulation strongly suggests bone or joint injury.",
    "explanationHi": "Right upper chest, left side।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-411",
    "questionEn": "Air splints should not be over-inflated because:",
    "questionHi": "AED में Shockable Rhythms कौन से हैं?",
    "optionsEn": [
      "They're expensive",
      "Can cut off circulation",
      "They look bad",
      "They're hard to remove"
    ],
    "optionsHi": [
      "Asystole",
      "Ventricular Fibrillation (VF), Pulseless VT",
      "Sinus Rhythm",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Over-inflation compresses vessels, causing ischemia.",
    "explanationHi": "VF and pulseless VT।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-412",
    "questionEn": "Traction splints are specifically used for:",
    "questionHi": "AED Shock देते समय क्या सावधानी रखें?",
    "optionsEn": [
      "Wrist fractures",
      "Mid-shaft femur fractures",
      "All fractures",
      "Spinal injuries"
    ],
    "optionsHi": [
      "छूते रहें",
      "Clear - कोई रोगी को न छू रहा हो",
      "पानी में दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Traction splints realign and stabilize femur fractures, reducing pain and bleeding.",
    "explanationHi": "Everyone clear before shock।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-413",
    "questionEn": "Tar burns should be:",
    "questionHi": "गीली छाती पर AED कैसे लगाएं?",
    "optionsEn": [
      "Removed immediately by peeling",
      "Cooled with water, tar left in place",
      "Treated with solvents",
      "Ignored"
    ],
    "optionsHi": [
      "ऐसे ही",
      "पहले सुखाएं फिर Pads लगाएं",
      "पानी में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cool the burn. Don't remove tar - it comes off during wound care at hospital.",
    "explanationHi": "Dry chest before pads।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-414",
    "questionEn": "Sunburn is typically which degree of burn?",
    "questionHi": "Pacemaker वाले व्यक्ति पर AED कैसे लगाएं?",
    "optionsEn": [
      "Partial thickness",
      "Full thickness",
      "Superficial (first degree)",
      "Fourth degree"
    ],
    "optionsHi": [
      "न लगाएं",
      "Pacemaker से 1 इंच दूर Pad लगाएं",
      "ऊपर लगाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Sunburn usually affects only epidermis - red, painful, no blisters.",
    "explanationHi": "Pad away from pacemaker।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-415",
    "questionEn": "The main risk with facial burns is:",
    "questionHi": "बच्चों में AED Pads कैसे लगाएं?",
    "optionsEn": [
      "Cosmetic only",
      "Airway compromise",
      "No risk",
      "Skin grafting"
    ],
    "optionsHi": [
      "वयस्क जैसे",
      "Pediatric Pads या छाती और पीठ पर (यदि छोटे हों)",
      "न लगाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Facial burns suggest possible inhalation injury and airway swelling.",
    "explanationHi": "Pediatric pads or front-back।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-416",
    "questionEn": "Spectacle marking on hood identifies:",
    "questionHi": "ROSC (Return of Spontaneous Circulation) के संकेत क्या हैं?",
    "optionsEn": [
      "Russell's Viper",
      "Indian Cobra",
      "Krait",
      "Python"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "सांस लेना, हिलना, नाड़ी आना, होश आना",
      "CPR जारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cobra displays hood with spectacle (eyeglass) marking when threatened.",
    "explanationHi": "Signs of revival।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-417",
    "questionEn": "Blue-black color with white bands identifies:",
    "questionHi": "ROSC के बाद क्या करें?",
    "optionsEn": [
      "Cobra",
      "Common Krait",
      "Russell's Viper",
      "Rat snake"
    ],
    "optionsHi": [
      "छोड़ दें",
      "Recovery Position, निगरानी जारी, अस्पताल ले जाएं",
      "CPR जारी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Krait is blue-black with distinctive white crossbands.",
    "explanationHi": "Recovery position, monitor।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-418",
    "questionEn": "Polyvalent anti-snake venom in India covers:",
    "questionHi": "Drowning में CPR कब तक जारी रखें?",
    "optionsEn": [
      "Only one species",
      "The Big Four venomous snakes",
      "All snakes",
      "Only cobras"
    ],
    "optionsHi": [
      "5 मिनट",
      "लंबे समय तक - ठंडे पानी में देर से Revival संभव",
      "1 मिनट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Indian polyvalent ASV covers Cobra, Krait, Russell's Viper, Saw-scaled Viper.",
    "explanationHi": "Continue longer in drowning।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-419",
    "questionEn": "Cat bites have higher infection risk than dog bites because:",
    "questionHi": "Hypothermic Cardiac Arrest में CPR कब तक जारी रखें?",
    "optionsEn": [
      "Cats are dirtier",
      "Cat teeth cause deep puncture wounds",
      "Cats carry more rabies",
      "Cat saliva is acidic"
    ],
    "optionsHi": [
      "5 मिनट",
      "गर्म होने तक - 'Not Dead Until Warm and Dead'",
      "1 मिनट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cat teeth create deep punctures that trap bacteria, making infection likely.",
    "explanationHi": "Continue until warmed।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-420",
    "questionEn": "Human bites are dangerous due to:",
    "questionHi": "CPR कब बंद करें?",
    "optionsEn": [
      "Venom",
      "High bacteria load in human mouth",
      "Always cause rabies",
      "Low risk actually"
    ],
    "optionsHi": [
      "थक जाएं तो",
      "ROSC हो, चिकित्सक आएं, या जारी रखना असंभव हो",
      "10 मिनट बाद",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Human mouth has many bacteria causing serious infections in bite wounds.",
    "explanationHi": "When to stop CPR।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-421",
    "questionEn": "The antidote for opioid (morphine/heroin) overdose is:",
    "questionHi": "Opioid Overdose में पुतलियां कैसी होती हैं?",
    "optionsEn": [
      "Atropine",
      "Naloxone",
      "Flumazenil",
      "Vitamin K"
    ],
    "optionsHi": [
      "बड़ी",
      "बहुत छोटी (Pinpoint)",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Naloxone reverses opioid effects, restoring breathing.",
    "explanationHi": "Pinpoint pupils।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-422",
    "questionEn": "Dilated pupils suggest poisoning with:",
    "questionHi": "Stimulant Overdose (Cocaine/Amphetamine) में पुतलियां कैसी होती हैं?",
    "optionsEn": [
      "Organophosphates",
      "Opioids",
      "Atropine/antihistamines",
      "Alcohol"
    ],
    "optionsHi": [
      "छोटी",
      "बड़ी (Dilated)",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Anticholinergic substances (atropine, antihistamines) cause mydriasis (dilated pupils).",
    "explanationHi": "Dilated pupils।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-423",
    "questionEn": "Food poisoning typically presents with:",
    "questionHi": "Organophosphate Poisoning में SLUDGE का क्या अर्थ है?",
    "optionsEn": [
      "Seizures first",
      "Nausea, vomiting, diarrhea, abdominal cramps",
      "Unconsciousness immediately",
      "No GI symptoms"
    ],
    "optionsHi": [
      "कीचड़",
      "Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis",
      "दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "GI symptoms predominate. Most cases are self-limiting.",
    "explanationHi": "Signs of OP poisoning।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-424",
    "questionEn": "Methanol (wood alcohol) poisoning affects:",
    "questionHi": "Organophosphate Poisoning में Antidote क्या है?",
    "optionsEn": [
      "Liver only",
      "Vision and can cause blindness",
      "Bones",
      "Skin only"
    ],
    "optionsHi": [
      "Naloxone",
      "Atropine और Pralidoxime",
      "Glucose",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Methanol metabolites damage optic nerve causing blindness. Medical emergency.",
    "explanationHi": "Atropine and 2-PAM।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-425",
    "questionEn": "Ipecac syrup for inducing vomiting is:",
    "questionHi": "Methanol Poisoning का Antidote क्या है?",
    "optionsEn": [
      "Highly recommended",
      "No longer recommended in first aid",
      "Only for children",
      "Used for all poisonings"
    ],
    "optionsHi": [
      "Naloxone",
      "Ethanol या Fomepizole",
      "Atropine",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ipecac is no longer recommended - delayed action, complications, better alternatives.",
    "explanationHi": "Ethanol or fomepizole।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-426",
    "questionEn": "Dry drowning refers to:",
    "questionHi": "Paracetamol Overdose का Antidote क्या है?",
    "optionsEn": [
      "Drowning in dry areas",
      "Drowning where water doesn't enter lungs (laryngospasm)",
      "Drowning in pools",
      "Not a real condition"
    ],
    "optionsHi": [
      "Naloxone",
      "N-Acetylcysteine (NAC)",
      "Atropine",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Some drowning deaths occur with little water aspiration due to laryngospasm.",
    "explanationHi": "NAC for paracetamol overdose।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-427",
    "questionEn": "When approaching a drowning victim who is still in water:",
    "questionHi": "Iron Poisoning का Antidote क्या है?",
    "optionsEn": [
      "Swim straight to them",
      "Approach from behind with flotation",
      "Shout only",
      "Wait on shore"
    ],
    "optionsHi": [
      "NAC",
      "Deferoxamine",
      "Atropine",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Approach from behind to avoid being grabbed. Use flotation device.",
    "explanationHi": "Deferoxamine for iron।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-428",
    "questionEn": "The most important factor in drowning survival is:",
    "questionHi": "Cyanide Poisoning के लक्षण क्या हैं?",
    "optionsEn": [
      "Water temperature",
      "Duration of submersion",
      "Swimming ability",
      "Age"
    ],
    "optionsHi": [
      "सामान्य",
      "Bitter Almond गंध, चेरी-लाल त्वचा, तेज सांस, बेहोशी",
      "कुछ नहीं",
      "खांसी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Time underwater determines hypoxic brain damage. Shorter = better outcomes.",
    "explanationHi": "Cyanide symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-429",
    "questionEn": "Cold water immersion can cause sudden death from:",
    "questionHi": "Activated Charcoal का Poisoning में क्या उपयोग है?",
    "optionsEn": [
      "Freezing",
      "Cold shock response triggering cardiac arrhythmias",
      "Exhaustion",
      "Infection"
    ],
    "optionsHi": [
      "कोई नहीं",
      "विष को सोखना (1 घंटे के भीतर, कुछ विषों में)",
      "खाने के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cold shock: sudden gasping, hyperventilation, cardiac arrhythmias in first minutes.",
    "explanationHi": "Absorbs poison।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-430",
    "questionEn": "Absence seizures are characterized by:",
    "questionHi": "Activated Charcoal कब नहीं देना चाहिए?",
    "optionsEn": [
      "Violent shaking",
      "Brief staring spells with no memory of event",
      "Always with falling",
      "Only in adults"
    ],
    "optionsHi": [
      "हमेशा दें",
      "बेहोश, Corrosive, Petroleum, Alcohols में",
      "कभी न दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Absence seizures: brief lapses in awareness, common in children.",
    "explanationHi": "Contraindications।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-431",
    "questionEn": "A focal seizure:",
    "questionHi": "Poison Control Centre का क्या कार्य है?",
    "optionsEn": [
      "Affects whole body",
      "Starts in one part of body/brain",
      "Never spreads",
      "Is always benign"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "विषाक्तता में विशेषज्ञ सलाह देना",
      "दवाई बेचना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Focal seizures begin in localized brain area, may spread to generalized.",
    "explanationHi": "Expert advice on poisoning।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-432",
    "questionEn": "The 'worst headache of my life' suggests:",
    "questionHi": "भारत में Poison Information Centre का नंबर क्या है?",
    "optionsEn": [
      "Tension headache",
      "Possible subarachnoid hemorrhage",
      "Migraine",
      "Normal headache"
    ],
    "optionsHi": [
      "100",
      "AIIMS Delhi: 011-26589391, अन्य राज्यों में भिन्न",
      "108",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Thunderclap headache is classic for ruptured brain aneurysm - emergency.",
    "explanationHi": "Poison helpline।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-433",
    "questionEn": "Nitroglycerin (GTN) is used for:",
    "questionHi": "Tourniquets के नए Guidelines के अनुसार कब उपयोग करें?",
    "optionsEn": [
      "Diabetes",
      "Angina and heart attack symptoms",
      "Asthma",
      "Stroke"
    ],
    "optionsHi": [
      "कभी नहीं",
      "जीवन-घातक अंग रक्तस्राव में Direct Pressure विफल होने पर",
      "हर रक्तस्राव में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "GTN dilates coronary arteries, improving heart blood flow.",
    "explanationHi": "Life-threatening limb bleeding।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-434",
    "questionEn": "The 15-15 rule for hypoglycemia means:",
    "questionHi": "Commercial Tourniquet (CAT, SWAT) का क्या फायदा है?",
    "optionsEn": [
      "15 compressions, 15 breaths",
      "15g sugar, recheck in 15 minutes",
      "Wait 15 hours",
      "15 minutes of rest"
    ],
    "optionsHi": [
      "कोई नहीं",
      "जल्दी और प्रभावी रूप से लगाना आसान",
      "महंगे हैं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Give 15g fast-acting sugar, wait 15 minutes, recheck. Repeat if needed.",
    "explanationHi": "Quick and effective।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-435",
    "questionEn": "An unconscious hypoglycemic patient should:",
    "questionHi": "Improvised Tourniquet कैसे बनाएं?",
    "optionsEn": [
      "Have sugar forced into mouth",
      "Receive nothing by mouth, position safely, call emergency",
      "Be given insulin",
      "Be left alone"
    ],
    "optionsHi": [
      "तार से",
      "चौड़ा कपड़ा + Windlass (छड़ी) से कसना",
      "पतली रस्सी से",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Unconscious = aspiration risk. Recovery position, call 108 for IV glucose/glucagon.",
    "explanationHi": "Wide cloth with windlass।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-436",
    "questionEn": "Spacer devices for inhalers:",
    "questionHi": "Tourniquet लगाने के बाद क्या लिखना जरूरी है?",
    "optionsEn": [
      "Are unnecessary",
      "Improve drug delivery to lungs",
      "Make inhalers less effective",
      "Are only for children"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "लगाने का समय (T + Time)",
      "केवल नाम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Spacers improve coordination and drug deposition in airways.",
    "explanationHi": "Time of application।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-437",
    "questionEn": "The human crutch carry is for:",
    "questionHi": "Hemostatic Dressings क्या हैं?",
    "optionsEn": [
      "Unconscious patients",
      "Patients who can partially walk with support",
      "Spinal injuries",
      "All casualties"
    ],
    "optionsHi": [
      "सामान्य Dressing",
      "रक्त जमाने वाले एजेंट युक्त Dressings (QuikClot, Celox)",
      "Bandage",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Human crutch supports patient who can bear some weight on one leg.",
    "explanationHi": "Clotting agent dressings।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-438",
    "questionEn": "When carrying an unconscious patient alone, the firefighter's carry:",
    "questionHi": "Wound Packing क्या है?",
    "optionsEn": [
      "Is never used",
      "Distributes weight over shoulders",
      "Is only for children",
      "Requires three people"
    ],
    "optionsHi": [
      "Dressing हटाना",
      "गहरे घाव में Gauze भरकर दबाव देना",
      "बाहर निकालना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Firefighter's carry: victim across shoulders, freeing rescuer's hands.",
    "explanationHi": "Packing deep wounds।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-439",
    "questionEn": "Chair carry is useful for:",
    "questionHi": "Junctional Bleeding क्या है?",
    "optionsEn": [
      "Wide open spaces",
      "Narrow staircases",
      "Spinal injuries",
      "Unconscious only"
    ],
    "optionsHi": [
      "साधारण",
      "जहां Tourniquet नहीं लगा सकते (गर्दन, बगल, जांघ का ऊपरी भाग)",
      "हल्का",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chair carry works well in narrow spaces like stairs and hallways.",
    "explanationHi": "Bleeding at junctions।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-440",
    "questionEn": "Rigid stretcher (spinal board) is essential for:",
    "questionHi": "Junctional Bleeding में क्या करें?",
    "optionsEn": [
      "Any injury",
      "Suspected spinal injuries",
      "Burns only",
      "Fractures only"
    ],
    "optionsHi": [
      "Tourniquet",
      "Direct Pressure, Wound Packing, Hemostatic Agents",
      "कुछ न करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Spinal injuries need rigid support to prevent movement and further damage.",
    "explanationHi": "Pressure, packing, hemostatics।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-441",
    "questionEn": "Scene safety assessment should be done:",
    "questionHi": "TCCC (Tactical Combat Casualty Care) क्या है?",
    "optionsEn": [
      "After helping patient",
      "Before approaching any patient",
      "Only if dangerous",
      "Never"
    ],
    "optionsHi": [
      "सामान्य First Aid",
      "युद्ध/सामरिक परिस्थितियों के लिए First Aid Guidelines",
      "केवल सैन्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Always assess scene safety first - an injured rescuer can't help anyone.",
    "explanationHi": "Tactical first aid।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Principles",
    "tags": [
      "principles"
    ]
  },
  {
    "id": "FIRST-AID-442",
    "questionEn": "Universal precautions include:",
    "questionHi": "TCCC में MARCH का क्या अर्थ है?",
    "optionsEn": [
      "Wearing gloves for body fluid contact",
      "No protection needed",
      "Only for healthcare workers",
      "Washing hands only"
    ],
    "optionsHi": [
      "चलना",
      "Massive bleeding, Airway, Respiration, Circulation, Hypothermia",
      "मार्च",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Assume all body fluids are potentially infectious. Use appropriate PPE.",
    "explanationHi": "MARCH algorithm।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Principles",
    "tags": [
      "principles"
    ]
  },
  {
    "id": "FIRST-AID-443",
    "questionEn": "In pediatric BLS, the compression to breath ratio for two-rescuer CPR is:",
    "questionHi": "Stop the Bleed Campaign का क्या उद्देश्य है?",
    "optionsEn": [
      "30:2",
      "15:2",
      "30:1",
      "5:1"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "आम लोगों को जीवन-घातक रक्तस्राव रोकना सिखाना",
      "केवल डॉक्टरों के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "For 2-rescuer pediatric CPR, use 15:2 ratio (vs 30:2 for single rescuer).",
    "explanationHi": "Public bleeding control training।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-444",
    "questionEn": "The recovery position is contraindicated in:",
    "questionHi": "Tension Pneumothorax क्या है?",
    "optionsEn": [
      "Unconscious breathing patients",
      "Suspected spinal injury",
      "Drowning victims",
      "Post-seizure patients"
    ],
    "optionsHi": [
      "सामान्य",
      "छाती में हवा जमा होकर फेफड़े और हृदय पर दबाव",
      "फ्रैक्चर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Recovery position involves turning, contraindicated in spinal injury.",
    "explanationHi": "Air pressure in chest।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-445",
    "questionEn": "Gurgling during breathing suggests:",
    "questionHi": "Tension Pneumothorax के लक्षण क्या हैं?",
    "optionsEn": [
      "Normal breathing",
      "Fluid/secretions in airway needing suction/positioning",
      "Heart attack",
      "Stroke"
    ],
    "optionsHi": [
      "सामान्य",
      "सांस में कठिनाई, गर्दन की नसें फूलना, Trachea एक तरफ",
      "खांसी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Gurgling = fluid in airway. Position to drain or suction if available.",
    "explanationHi": "Dyspnea, JVD, tracheal deviation।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-446",
    "questionEn": "For scalp wounds, bleeding is often profuse because:",
    "questionHi": "Needle Decompression किसमें करते हैं?",
    "optionsEn": [
      "Scalp has rich blood supply",
      "Hair causes more bleeding",
      "Skull is soft",
      "Brain bleeds through scalp"
    ],
    "optionsHi": [
      "पेट में",
      "Tension Pneumothorax में (प्रशिक्षित व्यक्ति)",
      "पैर में",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Scalp is highly vascular. Direct pressure controls most scalp bleeding.",
    "explanationHi": "For tension pneumothorax।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-447",
    "questionEn": "Urine output in shock:",
    "questionHi": "Chest Seal क्या है?",
    "optionsEn": [
      "Increases",
      "Decreases as kidneys receive less blood",
      "Stays the same",
      "Is not affected"
    ],
    "optionsHi": [
      "Bandage",
      "Sucking Chest Wound को बंद करने के लिए विशेष Dressing",
      "Tape",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Reduced kidney perfusion = oliguria. Sign of inadequate organ perfusion.",
    "explanationHi": "Occlusive dressing for chest wounds।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-448",
    "questionEn": "Stress fractures typically occur from:",
    "questionHi": "Vented Chest Seal का क्या फायदा है?",
    "optionsEn": [
      "Single trauma",
      "Repetitive overuse",
      "Infection",
      "Tumor"
    ],
    "optionsHi": [
      "कोई नहीं",
      "हवा बाहर निकल सके, अंदर न जाए (Tension रोकता है)",
      "सस्ता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Stress fractures: small cracks from repetitive stress, common in athletes.",
    "explanationHi": "One-way valve।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-449",
    "questionEn": "The Ottawa ankle rules help determine:",
    "questionHi": "Nasopharyngeal Airway (NPA) क्या है?",
    "optionsEn": [
      "Treatment for ankle pain",
      "Whether ankle X-ray is needed",
      "Prognosis",
      "Surgery need"
    ],
    "optionsHi": [
      "मुंह में",
      "नाक से डालकर वायुमार्ग खोलने का उपकरण",
      "गले में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ottawa rules: clinical criteria to rule out fracture without X-ray.",
    "explanationHi": "Nasal airway device।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-450",
    "questionEn": "Jackson's burn wound model describes zones of:",
    "questionHi": "NPA कब नहीं लगाना चाहिए?",
    "optionsEn": [
      "Pain levels",
      "Coagulation, stasis, and hyperemia",
      "Healing stages",
      "Infection"
    ],
    "optionsHi": [
      "हमेशा",
      "Skull Fracture/CSF Leak का संदेह हो",
      "कभी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Coagulation (dead), stasis (at risk), hyperemia (viable) - concentric zones.",
    "explanationHi": "Contraindicated in skull fracture।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-451",
    "questionEn": "Burn wound infections are commonly caused by:",
    "questionHi": "Oropharyngeal Airway (OPA) कब उपयोग करें?",
    "optionsEn": [
      "Viruses only",
      "Staphylococcus and Pseudomonas bacteria",
      "Fungi only",
      "No organisms"
    ],
    "optionsHi": [
      "होश में",
      "केवल बेहोश व्यक्ति में (जिसमें Gag Reflex न हो)",
      "हमेशा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Common burn wound pathogens: S. aureus and Pseudomonas aeruginosa.",
    "explanationHi": "Only in unconscious without gag reflex।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-452",
    "questionEn": "Intradermal rabies vaccine regime is preferred because:",
    "questionHi": "OPA का सही Size कैसे चुनें?",
    "optionsEn": [
      "More effective",
      "Uses less vaccine, equally effective, more affordable",
      "Faster immunity",
      "Single dose needed"
    ],
    "optionsHi": [
      "कोई भी",
      "कान के लोब से मुंह के कोने तक की दूरी",
      "अंदाजे से",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ID route uses 0.1mL per site vs 0.5-1mL IM, reducing cost while maintaining efficacy.",
    "explanationHi": "Ear lobe to corner of mouth।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-453",
    "questionEn": "Tick bites may transmit:",
    "questionHi": "Recovery Position में गर्भवती महिला को कैसे रखें?",
    "optionsEn": [
      "Rabies",
      "Lyme disease and other infections",
      "Tetanus only",
      "No diseases"
    ],
    "optionsHi": [
      "दाईं तरफ",
      "बाईं तरफ (Left Lateral)",
      "पीठ के बल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ticks transmit Lyme disease, tick fever, and other pathogens.",
    "explanationHi": "Left side for pregnant।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-454",
    "questionEn": "Removing a tick should be done by:",
    "questionHi": "गर्भवती में CPR में क्या विशेष करें?",
    "optionsEn": [
      "Burning with match",
      "Grasping close to skin with tweezers, pulling steadily",
      "Twisting quickly",
      "Applying petroleum jelly"
    ],
    "optionsHi": [
      "सामान्य CPR",
      "Left Lateral Tilt (गर्भाशय को बाईं ओर धकेलें)",
      "न करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Grasp close to skin, pull straight out. Burning/suffocating may increase disease transmission.",
    "explanationHi": "Tilt to left during CPR।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-455",
    "questionEn": "Flumazenil is the antidote for:",
    "questionHi": "Perimortem Cesarean Section कब करते हैं?",
    "optionsEn": [
      "Opioids",
      "Benzodiazepine overdose",
      "Paracetamol",
      "Organophosphates"
    ],
    "optionsHi": [
      "कभी नहीं",
      "गर्भवती में Cardiac Arrest में (4-5 मिनट के भीतर)",
      "हर बार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Flumazenil reverses sedative effects of benzodiazepines (diazepam, etc.).",
    "explanationHi": "Emergency C-section in arrest।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-456",
    "questionEn": "Vitamin K is used to treat poisoning with:",
    "questionHi": "Obese व्यक्ति में CPR में क्या कठिनाई होती है?",
    "optionsEn": [
      "Organophosphates",
      "Warfarin/rodenticide anticoagulants",
      "Paracetamol",
      "Alcohol"
    ],
    "optionsHi": [
      "कोई नहीं",
      "पर्याप्त गहराई तक दबाना कठिन",
      "आसान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vitamin K reverses anticoagulant effects of warfarin-type poisons.",
    "explanationHi": "Difficult to achieve depth।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-457",
    "questionEn": "Iron poisoning is particularly dangerous in:",
    "questionHi": "बुजुर्गों में CPR में क्या ध्यान रखें?",
    "optionsEn": [
      "Adults only",
      "Children due to attractive appearance of pills",
      "Elderly only",
      "Not dangerous"
    ],
    "optionsHi": [
      "सामान्य",
      "पसलियां टूट सकती हैं - लेकिन CPR जारी रखें",
      "न करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Iron tablets look like candy. Toxic in children causing GI damage and liver failure.",
    "explanationHi": "Ribs may fracture, continue CPR।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-458",
    "questionEn": "Mammalian diving reflex:",
    "questionHi": "Trauma में CPR कब शुरू करें?",
    "optionsEn": [
      "Increases oxygen consumption",
      "Slows heart rate and conserves oxygen in cold water",
      "Only in marine mammals",
      "Causes drowning"
    ],
    "optionsHi": [
      "तुरंत",
      "पहले रक्तस्राव रोकें, फिर CPR",
      "न करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Diving reflex: bradycardia, vasoconstriction in cold water may protect brain.",
    "explanationHi": "Control bleeding first।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-459",
    "questionEn": "Rip currents are dangerous because:",
    "questionHi": "Traumatic Cardiac Arrest में Survival Rate कैसी होती है?",
    "optionsEn": [
      "They are hot",
      "They pull swimmers away from shore",
      "They have sharks",
      "They are visible"
    ],
    "optionsHi": [
      "बहुत अच्छी",
      "बहुत कम (कारण पर निर्भर)",
      "100%",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rip currents are fast-moving water channels that exhaust swimmers.",
    "explanationHi": "Poor survival in trauma arrest।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-460",
    "questionEn": "To escape a rip current:",
    "questionHi": "Electrocution से Cardiac Arrest में CPR कब तक जारी रखें?",
    "optionsEn": [
      "Swim directly toward shore",
      "Swim parallel to shore, then in",
      "Stop swimming",
      "Dive deep"
    ],
    "optionsHi": [
      "5 मिनट",
      "लंबे समय तक - Young hearts, good prognosis",
      "1 मिनट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rips are narrow. Swim sideways out of current, then angle toward shore.",
    "explanationHi": "Continue longer in electrocution।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-461",
    "questionEn": "Epilepsy is:",
    "questionHi": "Asphyxia से Cardiac Arrest में पहले क्या दें?",
    "optionsEn": [
      "A single seizure",
      "A chronic condition with recurrent seizures",
      "Always caused by brain tumor",
      "Not treatable"
    ],
    "optionsHi": [
      "केवल Compression",
      "पहले Ventilation (5 Rescue Breaths) फिर CPR",
      "AED",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Epilepsy: tendency for recurrent unprovoked seizures.",
    "explanationHi": "Ventilation first in asphyxia।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-462",
    "questionEn": "After stroke symptoms onset, 'golden hour' refers to:",
    "questionHi": "Anaphylaxis में Cardiac Arrest हो तो क्या विशेष दें?",
    "optionsEn": [
      "Time to reach hospital for best treatment outcomes",
      "Time to sleep",
      "Recovery period",
      "Death within hour"
    ],
    "optionsHi": [
      "केवल CPR",
      "Epinephrine (Adrenaline) + CPR",
      "केवल AED",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Rapid treatment (especially within 4.5 hours) dramatically improves outcomes.",
    "explanationHi": "Epinephrine with CPR।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-463",
    "questionEn": "Silent MI (heart attack) is more common in:",
    "questionHi": "Post-Cardiac Arrest Care में क्या शामिल है?",
    "optionsEn": [
      "Young athletes",
      "Diabetics and elderly",
      "Children",
      "Pregnant women"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Targeted Temperature Management, Hemodynamic Support, Neuro Assessment",
      "केवल CPR",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Diabetic neuropathy and age may mask typical heart attack pain.",
    "explanationHi": "Post-arrest care components।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-464",
    "questionEn": "Hyperosmolar hyperglycemic state (HHS) differs from DKA in that:",
    "questionHi": "Targeted Temperature Management (TTM) क्या है?",
    "optionsEn": [
      "Blood sugar is lower",
      "No ketoacidosis but extreme dehydration",
      "Occurs only in Type 1",
      "Less serious"
    ],
    "optionsHi": [
      "गर्म करना",
      "Cardiac Arrest के बाद शरीर को ठंडा रखना (32-36°C)",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HHS: very high glucose, severe dehydration, little ketosis. Usually Type 2.",
    "explanationHi": "Cooling after arrest।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-465",
    "questionEn": "Peak flow meter measures:",
    "questionHi": "Dispatcher-Assisted CPR क्या है?",
    "optionsEn": [
      "Blood pressure",
      "How fast air can be blown out of lungs",
      "Heart rate",
      "Oxygen level"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "108/112 Operator द्वारा फोन पर CPR Guide करना",
      "केवल डॉक्टर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Peak flow measures maximum expiratory flow - useful in asthma monitoring.",
    "explanationHi": "Phone-guided CPR।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-466",
    "questionEn": "Scoop stretcher is useful because:",
    "questionHi": "CPR Quality Feedback Device क्या है?",
    "optionsEn": [
      "It's lightweight",
      "Can be placed under patient with minimal movement",
      "It's cheap",
      "It floats"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Compression गहराई और दर मापने वाला उपकरण",
      "AED",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Scoop separates to slide under patient, minimizing movement for spinal precautions.",
    "explanationHi": "Device to measure CPR quality।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-467",
    "questionEn": "When moving patient from floor to stretcher, use:",
    "questionHi": "Mechanical CPR Device क्या है?",
    "optionsEn": [
      "One person only",
      "Log roll or slide sheet with proper body mechanics",
      "Patient's own effort",
      "No specific technique"
    ],
    "optionsHi": [
      "हाथ से CPR",
      "मशीन से Chest Compressions देने वाला उपकरण (LUCAS)",
      "AED",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Proper technique protects both patient and rescuer from injury.",
    "explanationHi": "Automated CPR machine।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-468",
    "questionEn": "In hand-off communication, closed-loop communication means:",
    "questionHi": "ECMO क्या है?",
    "optionsEn": [
      "Whispering",
      "Receiver repeats back information to confirm understanding",
      "Written only",
      "No response needed"
    ],
    "optionsHi": [
      "दवाई",
      "Extracorporeal Membrane Oxygenation - मशीन से रक्त में Oxygen",
      "Bandage",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Closed-loop: sender states, receiver confirms, sender verifies - reduces errors.",
    "explanationHi": "External blood oxygenation।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-469",
    "questionEn": "A witnessed cardiac arrest has better outcomes because:",
    "questionHi": "ECPR (ECMO-CPR) कब उपयोग करते हैं?",
    "optionsEn": [
      "More dramatic",
      "CPR can begin immediately",
      "Always in hospital",
      "Victim is younger"
    ],
    "optionsHi": [
      "हर जगह",
      "Refractory Cardiac Arrest में (विशेष केंद्रों में)",
      "घर पर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Immediate CPR after witnessed collapse improves survival rates significantly.",
    "explanationHi": "For resistant arrest in special centers।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Principles",
    "tags": [
      "principles"
    ]
  },
  {
    "id": "FIRST-AID-470",
    "questionEn": "Checking pulse during CPR should take no more than:",
    "questionHi": "Prehospital Care क्या है?",
    "optionsEn": [
      "30 seconds",
      "10 seconds",
      "60 seconds",
      "5 minutes"
    ],
    "optionsHi": [
      "अस्पताल में",
      "अस्पताल पहुंचने से पहले की देखभाल (EMS, First Aid)",
      "ICU",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Minimize interruptions. Check pulse for maximum 10 seconds.",
    "explanationHi": "Care before hospital।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-471",
    "questionEn": "Oropharyngeal airway (OPA) is used for:",
    "questionHi": "EMS (Emergency Medical Services) क्या है?",
    "optionsEn": [
      "Conscious patients",
      "Unconscious patients with no gag reflex",
      "All patients",
      "Infants only"
    ],
    "optionsHi": [
      "अस्पताल",
      "आपातकालीन चिकित्सा सेवा प्रणाली (108, Ambulance)",
      "कुछ नहीं",
      "दवाखाना"
    ],
    "correctAnswer": 1,
    "explanationEn": "OPA maintains airway in unconscious. Contraindicated if gag reflex present.",
    "explanationHi": "Emergency medical system।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-472",
    "questionEn": "Clotting begins within:",
    "questionHi": "Paramedic और EMT में क्या अंतर है?",
    "optionsEn": [
      "1 second",
      "30 seconds to 2 minutes",
      "10 minutes",
      "1 hour"
    ],
    "optionsHi": [
      "एक ही",
      "Paramedic अधिक प्रशिक्षित (IV, Drugs, Intubation)",
      "कोई अंतर नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Primary hemostasis (platelet plug) begins quickly after injury.",
    "explanationHi": "Paramedic more trained।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-473",
    "questionEn": "Trendelenburg position (head down) for shock is:",
    "questionHi": "Golden Hour के बाद क्या होता है?",
    "optionsEn": [
      "Always recommended",
      "No longer routinely recommended",
      "Only for cardiogenic",
      "For head injuries"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "गंभीर Trauma में जीवित रहने की संभावना कम होती जाती है",
      "बढ़ती है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Evidence doesn't support Trendelenburg. Simple leg elevation preferred.",
    "explanationHi": "Survival decreases after golden hour।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-474",
    "questionEn": "Fat embolism syndrome can occur with:",
    "questionHi": "Platinum Ten Minutes क्या है?",
    "optionsEn": [
      "Skin wounds",
      "Long bone fractures",
      "Sprains",
      "Burns"
    ],
    "optionsHi": [
      "सोना",
      "Trauma में पहले 10 मिनट सबसे महत्वपूर्ण",
      "चांदी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fat from marrow enters bloodstream after long bone fractures, can affect lungs/brain.",
    "explanationHi": "First 10 minutes critical।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-475",
    "questionEn": "Lund and Browder chart is used for:",
    "questionHi": "Trauma Center क्या है?",
    "optionsEn": [
      "Wound classification",
      "More accurate burn area estimation accounting for age",
      "Infection tracking",
      "Treatment planning"
    ],
    "optionsHi": [
      "सामान्य अस्पताल",
      "गंभीर चोटों के इलाज के लिए विशेष सुसज्जित अस्पताल",
      "PHC",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lund-Browder chart adjusts percentages for patient age - more accurate than Rule of Nines.",
    "explanationHi": "Specialized trauma hospital।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-476",
    "questionEn": "Post-exposure prophylaxis schedule for rabies (Essen regimen) is:",
    "questionHi": "Level I Trauma Center में क्या सुविधाएं होती हैं?",
    "optionsEn": [
      "Single dose",
      "Days 0, 3, 7, 14, 28",
      "Daily for week",
      "Monthly"
    ],
    "optionsHi": [
      "कम",
      "24/7 सभी विशेषज्ञ, OR, ICU, Research, Training",
      "केवल OPD",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Standard Essen regimen: 5 doses of vaccine on days 0, 3, 7, 14, 28.",
    "explanationHi": "Highest level of care।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-477",
    "questionEn": "Toxidrome refers to:",
    "questionHi": "Scoop and Run vs Stay and Play क्या है?",
    "optionsEn": [
      "A type of poison",
      "Syndrome of signs suggesting specific poison class",
      "Antidote",
      "Poison test"
    ],
    "optionsHi": [
      "खेल",
      "Scoop=जल्दी अस्पताल, Stay=मौके पर Stabilize (Trauma प्रकार पर निर्भर)",
      "एक ही",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Toxidromes help identify poison type from clinical presentation.",
    "explanationHi": "Transport vs stabilize on scene।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-478",
    "questionEn": "ABCD of drowning prevention includes:",
    "questionHi": "Load and Go किसमें करें?",
    "optionsEn": [
      "Adult supervision, Barriers, CPR training, Danger awareness",
      "Antibiotics, Bandages, Compression, Drainage",
      "Always swim alone",
      "Avoid water"
    ],
    "optionsHi": [
      "हल्की चोट",
      "Penetrating Trauma, Internal Bleeding (जल्दी Surgery चाहिए)",
      "मोच",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Key prevention: supervision, pool fencing, learning CPR, water safety education.",
    "explanationHi": "Quick transport for surgical cases।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-479",
    "questionEn": "ABCDE of diabetes emergencies:",
    "questionHi": "Helicopter EMS (HEMS) कब उपयोग करें?",
    "optionsEn": [
      "Airway, Breathing, Circulation, Disability, Exposure",
      "Sugar assessment and treatment",
      "Both used",
      "Neither"
    ],
    "optionsHi": [
      "हमेशा",
      "लंबी दूरी, Traffic, दुर्गम क्षेत्र, गंभीर Trauma",
      "कभी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "ABCDE approach applies to all emergencies including diabetic crises.",
    "explanationHi": "Long distance, inaccessible areas।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-480",
    "questionEn": "C-spine collar should be applied:",
    "questionHi": "Telemedicine Emergency क्या है?",
    "optionsEn": [
      "After moving patient",
      "Before moving patient with suspected spinal injury",
      "Only in hospital",
      "Never"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "दूर से Video/Phone पर डॉक्टर का मार्गदर्शन",
      "व्यक्तिगत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Immobilize cervical spine before any movement if injury suspected.",
    "explanationHi": "Remote medical guidance।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-481",
    "questionEn": "Gastric insufflation during CPR can be minimized by:",
    "questionHi": "Community Paramedicine क्या है?",
    "optionsEn": [
      "Giving large breaths",
      "Giving breaths over 1 second, avoiding excessive ventilation",
      "Skipping breaths",
      "Compressing stomach"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Paramedics द्वारा समुदाय में Preventive/Primary Care",
      "केवल Emergency",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Slow, adequate breaths minimize air entering stomach.",
    "explanationHi": "Community-based paramedic care।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-482",
    "questionEn": "Epiglottitis is dangerous because:",
    "questionHi": "Mobile Integrated Healthcare क्या है?",
    "optionsEn": [
      "It's itchy",
      "Swelling can completely obstruct airway rapidly",
      "It's common",
      "It only affects adults"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "EMS और Primary Care का एकीकरण",
      "केवल Mobile",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Epiglottitis: severe throat infection causing airway obstruction - emergency.",
    "explanationHi": "Integrated EMS and primary care।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-483",
    "questionEn": "Packing a wound helps control bleeding by:",
    "questionHi": "Emergency Department Overcrowding का क्या प्रभाव है?",
    "optionsEn": [
      "Absorbing blood only",
      "Applying pressure from within the wound",
      "Cooling the wound",
      "Warming the wound"
    ],
    "optionsHi": [
      "कोई नहीं",
      "प्रतीक्षा समय बढ़ना, देखभाल गुणवत्ता कम",
      "अच्छा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Wound packing provides internal pressure to control deep bleeding.",
    "explanationHi": "Longer wait, poorer care।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-484",
    "questionEn": "MAP (Mean Arterial Pressure) below 65mmHg indicates:",
    "questionHi": "ED Triage में ESI (Emergency Severity Index) क्या है?",
    "optionsEn": [
      "Normal",
      "Inadequate organ perfusion",
      "High blood pressure",
      "Excellent health"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "5-Level Triage System (1=सबसे गंभीर, 5=सबसे कम)",
      "3-Level",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MAP <65 suggests inadequate pressure to perfuse vital organs.",
    "explanationHi": "5-level triage system।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-485",
    "questionEn": "Volkmann's contracture is a complication of:",
    "questionHi": "Red Flag Signs क्या हैं?",
    "optionsEn": [
      "Burns",
      "Untreated forearm compartment syndrome",
      "Head injury",
      "Drowning"
    ],
    "optionsHi": [
      "सामान्य",
      "गंभीर बीमारी के संकेत जिन पर तुरंत ध्यान जरूरी",
      "हल्के",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Volkmann's: permanent muscle contracture from ischemia in forearm compartment syndrome.",
    "explanationHi": "Warning signs of serious illness।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-486",
    "questionEn": "Curling's ulcer is associated with:",
    "questionHi": "Chest Pain में Red Flags क्या हैं?",
    "optionsEn": [
      "Fractures",
      "Severe burns (stress ulcer)",
      "Poisoning",
      "Drowning"
    ],
    "optionsHi": [
      "सामान्य दर्द",
      "Central crushing, Radiation, Sweating, Shortness of Breath",
      "केवल दर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Curling's ulcer: gastric stress ulcer occurring after major burns.",
    "explanationHi": "Cardiac chest pain red flags।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-487",
    "questionEn": "Local wound necrosis after snake bite suggests:",
    "questionHi": "Headache में Red Flags क्या हैं?",
    "optionsEn": [
      "Neurotoxic venom",
      "Cytotoxic/tissue-destroying venom",
      "Dry bite",
      "Recovery"
    ],
    "optionsHi": [
      "सामान्य",
      "Thunderclap, Fever+Neck Stiffness, Neurological Signs, Worst Ever",
      "केवल दर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Local tissue damage indicates cytotoxic venom effects (common with vipers).",
    "explanationHi": "Headache red flags।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-488",
    "questionEn": "Chelation therapy is used for:",
    "questionHi": "Fever में Red Flags क्या हैं?",
    "optionsEn": [
      "All poisoning",
      "Heavy metal poisoning (lead, iron)",
      "Food poisoning",
      "Alcohol"
    ],
    "optionsHi": [
      "सामान्य बुखार",
      "Non-blanching Rash, Neck Stiffness, Altered Consciousness, Seizures",
      "हल्का बुखार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chelating agents bind heavy metals, enhancing elimination.",
    "explanationHi": "Fever red flags।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-489",
    "questionEn": "Todd's paralysis after seizure is:",
    "questionHi": "बच्चों में Dehydration के Red Flags क्या हैं?",
    "optionsEn": [
      "Permanent",
      "Temporary weakness that resolves",
      "Always serious",
      "Brain damage"
    ],
    "optionsHi": [
      "सामान्य",
      "Sunken Eyes, No Tears, Dry Mouth, Lethargy, No Urine 6+ Hours",
      "केवल प्यास",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Todd's paralysis: temporary focal weakness after seizure, resolves within hours.",
    "explanationHi": "Child dehydration red flags।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-490",
    "questionEn": "When securing patient to stretcher:",
    "questionHi": "नवजात में खतरे के संकेत क्या हैं?",
    "optionsEn": [
      "No straps needed",
      "Straps should be tight but allow breathing",
      "Only for conscious patients",
      "Feet strapped only"
    ],
    "optionsHi": [
      "सामान्य",
      "Not Feeding, Convulsions, Fast/Difficult Breathing, Fever/Cold, Yellow Skin",
      "केवल रोना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Secure patient to prevent falls without restricting breathing.",
    "explanationHi": "Newborn danger signs।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-491",
    "questionEn": "First aid kits should be:",
    "questionHi": "Sepsis के लक्षण क्या हैं?",
    "optionsEn": [
      "Locked away",
      "Accessible, regularly checked, and restocked",
      "Only in hospitals",
      "Kept secret"
    ],
    "optionsHi": [
      "सामान्य बुखार",
      "Fever/Low Temp, Fast Heart Rate, Fast Breathing, Confusion, Low BP",
      "केवल बुखार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "First aid kits need easy access and regular inspection for expired/used items.",
    "explanationHi": "Sepsis symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "General",
    "tags": [
      "general"
    ]
  },
  {
    "id": "FIRST-AID-492",
    "questionEn": "Emergency number 108 in India is for:",
    "questionHi": "Sepsis में 'Time is Life' का क्या अर्थ है?",
    "optionsEn": [
      "Fire only",
      "Ambulance and medical emergencies",
      "Police only",
      "Weather updates"
    ],
    "optionsHi": [
      "कोई जल्दी नहीं",
      "जल्दी उपचार से जीवित रहने की संभावना बढ़ती है",
      "धीरे करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "108 is India's emergency ambulance service number.",
    "explanationHi": "Early treatment saves lives।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "General",
    "tags": [
      "general"
    ]
  },
  {
    "id": "FIRST-AID-493",
    "questionEn": "What is the correct compression depth for adult CPR?",
    "questionHi": "Meningitis के संकेत क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "सामान्य सर्दी",
      "Fever, Neck Stiffness, Headache, Photophobia, Non-blanching Rash",
      "खांसी",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Meningitis signs।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-494",
    "questionEn": "Name the three types of bleeding based on vessel type.",
    "questionHi": "Glass Test क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "आंख की जांच",
      "Rash पर Glass दबाकर Blanching जांचना (Meningitis)",
      "कांच की जांच",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Check if rash blanches।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-495",
    "questionEn": "List three types of shock based on cause.",
    "questionHi": "Non-blanching Rash क्या दर्शाता है?",
    "optionsEn": [],
    "optionsHi": [
      "सामान्य",
      "Meningococcal Septicemia (गंभीर)",
      "एलर्जी",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Serious infection sign।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-496",
    "questionEn": "What are the 'Big Four' venomous snakes in India?",
    "questionHi": "Kernig's Sign क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "सामान्य",
      "कूल्हा मोड़ने पर घुटना सीधा करने में दर्द (Meningitis)",
      "खांसी",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Sign of meningeal irritation।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-497",
    "questionEn": "What does SBAR stand for?",
    "questionHi": "Brudzinski's Sign क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "सामान्य",
      "गर्दन आगे झुकाने पर घुटने मुड़ना (Meningitis)",
      "खांसी",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Sign of meningeal irritation।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-498",
    "questionEn": "A patient develops sudden facial swelling, difficulty breathing, and hives after eating peanuts. What is happening and what is your immediate action?",
    "questionHi": "Agonal Breathing क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "सामान्य सांस",
      "Cardiac Arrest में अनियमित गैसपिंग (CPR जरूरी)",
      "गहरी सांस",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Abnormal breathing in arrest।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-499",
    "questionEn": "A factory worker has acid splashed on his arm and face. The skin is red and blistering. What are your priorities?",
    "questionHi": "Agonal Breathing में CPR करना चाहिए या नहीं?",
    "optionsEn": [],
    "optionsHi": [
      "नहीं",
      "हां - यह सामान्य सांस नहीं है, CPR जरूरी",
      "इंतजार करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Start CPR for agonal breathing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-500",
    "questionEn": "Family members are found unconscious in a room with a coal angithi (brazier) burning. What do you suspect and what is your approach?",
    "questionHi": "प्राथमिक उपचार का सबसे महत्वपूर्ण संदेश क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ न करें",
      "कुछ करना न करने से बेहतर है - जीवन बचाएं",
      "केवल देखें",
      "भाग जाएं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Something is better than nothing - save lives।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-501",
    "questionEn": "What is the emergency ambulance number in India?",
    "questionHi": "Eye Injury (आंख की चोट) में पहला कदम क्या है?",
    "optionsEn": [
      "100",
      "101",
      "108",
      "112"
    ],
    "optionsHi": [
      "रगड़ें",
      "आंख को न रगड़ें, पानी से धोएं (Chemical हो तो)",
      "दबाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "108 is India's emergency ambulance service number.",
    "explanationHi": "Don't rub, wash if chemical।",
    "difficulty": "easy",
    "topic": "first-aid",
    "subtopic": "Principles",
    "tags": [
      "principles"
    ]
  },
  {
    "id": "FIRST-AID-502",
    "questionEn": "The primary survey (DRABC) is used to:",
    "questionHi": "आंख में Chemical गिर जाए तो कितनी देर धोएं?",
    "optionsEn": [
      "Identify all injuries",
      "Identify and treat life-threatening conditions first",
      "Gather patient history",
      "Transport patient"
    ],
    "optionsHi": [
      "1 मिनट",
      "15-20 मिनट लगातार",
      "5 मिनट",
      "न धोएं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Primary survey identifies immediate threats to life: airway, breathing, circulation.",
    "explanationHi": "15-20 minutes continuous washing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Principles",
    "tags": [
      "principles"
    ]
  },
  {
    "id": "FIRST-AID-503",
    "questionEn": "After 2 minutes of CPR, you should:",
    "questionHi": "आंख में Foreign Body हो तो क्या करें?",
    "optionsEn": [
      "Stop permanently",
      "Switch compressors if available and check rhythm",
      "Continue without pause",
      "Take a 5-minute break"
    ],
    "optionsHi": [
      "रगड़ें",
      "ऊपर-नीचे देखें, पानी से धोएं, न निकले तो अस्पताल",
      "निकालें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Swap rescuers every 2 minutes to maintain quality. Brief pause to check rhythm.",
    "explanationHi": "Blink, wash, seek help।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-504",
    "questionEn": "Effective CPR delivers approximately what percentage of normal cardiac output?",
    "questionHi": "आंख में कील/तार चुभा हो तो क्या करें?",
    "optionsEn": [
      "10-15%",
      "25-30%",
      "50-60%",
      "90-100%"
    ],
    "optionsHi": [
      "निकालें",
      "न निकालें, Paper Cup से ढकें, तुरंत अस्पताल",
      "दबाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Quality CPR delivers about 25-30% of normal cardiac output - enough to sustain life.",
    "explanationHi": "Don't remove, cover, hospital।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-505",
    "questionEn": "Nasopharyngeal airway is preferred over oropharyngeal airway when:",
    "questionHi": "Penetrating Eye Injury में दोनों आंखें क्यों बंद करें?",
    "optionsEn": [
      "Patient is unconscious",
      "Patient has gag reflex",
      "Patient is choking",
      "Patient needs CPR"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "एक आंख हिलने से दूसरी भी हिलती है (Consensual Movement)",
      "देखने के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "NPA tolerated better with intact gag reflex; OPA causes gagging in semiconscious patients.",
    "explanationHi": "Prevent consensual movement।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-506",
    "questionEn": "In foreign body airway obstruction, coughing should be:",
    "questionHi": "Black Eye (आंख के आसपास नीलापन) में क्या करें?",
    "optionsEn": [
      "Suppressed",
      "Encouraged if effective",
      "Replaced with back blows",
      "Stopped immediately"
    ],
    "optionsHi": [
      "गर्म सेक",
      "ठंडा सेक (15-20 मिनट), Vision Check करें",
      "रगड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Effective coughing is the best way to clear obstruction. Don't interfere.",
    "explanationHi": "Cold compress, check vision।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-507",
    "questionEn": "Elevation helps control bleeding by:",
    "questionHi": "Hyphema (आंख में रक्त) में क्या करें?",
    "optionsEn": [
      "Increasing blood pressure",
      "Using gravity to reduce blood flow to wound",
      "Warming the area",
      "Stretching vessels"
    ],
    "optionsHi": [
      "सामान्य",
      "सिर ऊंचा रखें, आराम करें, तुरंत Eye Specialist",
      "व्यायाम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Raising injured part above heart reduces blood pressure at wound.",
    "explanationHi": "Head elevated, rest, specialist।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-508",
    "questionEn": "When applying bandage over wound, it should be:",
    "questionHi": "Ear Injury (कान की चोट) में क्या न करें?",
    "optionsEn": [
      "Very tight to stop all flow",
      "Firm but allowing circulation to continue distally",
      "Very loose",
      "Applied once then removed"
    ],
    "optionsHi": [
      "डॉक्टर जाएं",
      "कान में कुछ न डालें, रुई/तेल न डालें",
      "धोएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tight enough to control bleeding but not so tight as to cut off circulation.",
    "explanationHi": "Don't insert anything।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-509",
    "questionEn": "Oxygen demand in shock is:",
    "questionHi": "कान से खून/तरल बह रहा हो तो क्या करें?",
    "optionsEn": [
      "Decreased",
      "Increased due to cellular stress",
      "Unchanged",
      "Zero"
    ],
    "optionsHi": [
      "रोकें",
      "न रोकें, करवट लेटाएं, अस्पताल (Skull Fracture हो सकता है)",
      "रुई डालें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Shock increases metabolic demands while oxygen delivery is impaired.",
    "explanationHi": "Don't stop, may be skull fracture।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-510",
    "questionEn": "A narrow pulse pressure in shock suggests:",
    "questionHi": "कान में कीड़ा घुस जाए तो क्या करें?",
    "optionsEn": [
      "Normal finding",
      "Severe vasoconstriction",
      "Recovery",
      "Low heart rate"
    ],
    "optionsHi": [
      "छड़ी डालें",
      "अंधेरे में Torch से प्रकाश दें, Mineral Oil डालें, डॉक्टर जाएं",
      "खींचें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Narrow pulse pressure (systolic minus diastolic) indicates compensated shock.",
    "explanationHi": "Light or oil to remove insect।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-511",
    "questionEn": "Crepitus should not be deliberately elicited because:",
    "questionHi": "Ruptured Eardrum के लक्षण क्या हैं?",
    "optionsEn": [
      "It helps diagnosis",
      "It can cause additional damage and pain",
      "It's always absent",
      "It's required for splinting"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "दर्द, सुनाई कम देना, कान से स्राव, चक्कर",
      "केवल दर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Never test for crepitus - can worsen fracture, damage vessels/nerves.",
    "explanationHi": "Pain, hearing loss, discharge।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-512",
    "questionEn": "When splinting, padding is placed over:",
    "questionHi": "Cauliflower Ear क्या है?",
    "optionsEn": [
      "The wound only",
      "Bony prominences to prevent pressure sores",
      "Nowhere",
      "Just the splint"
    ],
    "optionsHi": [
      "सब्जी",
      "कान पर चोट से खून जमना और विकृति (Wrestlers में)",
      "सामान्य कान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Padding prevents pressure injury to bones and joints under splint.",
    "explanationHi": "Ear hematoma deformity।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-513",
    "questionEn": "Wrist fracture (Colles) typically occurs from:",
    "questionHi": "Nose Bleed (नकसीर) में क्या करें?",
    "optionsEn": [
      "Twisting injury",
      "Fall on outstretched hand",
      "Direct blow to back",
      "Running injury"
    ],
    "optionsHi": [
      "सिर पीछे",
      "आगे झुकें, नाक को 10-15 मिनट दबाएं",
      "लेटें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Colles fracture: distal radius fracture from falling onto extended wrist.",
    "explanationHi": "Lean forward, pinch nose।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-514",
    "questionEn": "'Stop, Drop, and Roll' is taught for:",
    "questionHi": "Nose Bleed में सिर पीछे क्यों नहीं करना चाहिए?",
    "optionsEn": [
      "Drowning",
      "Clothing on fire",
      "Choking",
      "Seizures"
    ],
    "optionsHi": [
      "करना चाहिए",
      "रक्त गले में जाकर उल्टी/दम घुट सकता है",
      "कोई कारण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Stop drop roll: method to extinguish flames on clothing/body.",
    "explanationHi": "Blood may go to throat।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-515",
    "questionEn": "Fluid resuscitation for major burns aims to:",
    "questionHi": "Nose Bleed रुक न रहा हो तो क्या करें?",
    "optionsEn": [
      "Cool the burn",
      "Replace fluid losses and maintain organ perfusion",
      "Fight infection",
      "Relieve pain"
    ],
    "optionsHi": [
      "छोड़ दें",
      "20 मिनट से अधिक हो, बार-बार हो, चोट के बाद हो - अस्पताल",
      "इंतजार करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Burns cause massive fluid shifts. IV fluids prevent shock and organ failure.",
    "explanationHi": "Prolonged bleeding needs hospital।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-516",
    "questionEn": "Non-accidental burns should be suspected if:",
    "questionHi": "नाक में Foreign Body हो तो क्या करें?",
    "optionsEn": [
      "Burns are accidental",
      "Pattern suggests intentional injury (cigarette, stocking-glove)",
      "Patient is adult",
      "Burns are minor"
    ],
    "optionsHi": [
      "फूंकें",
      "दूसरी नाक दबाकर धीरे फूंकें, न निकले तो डॉक्टर",
      "छड़ी डालें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Suspect abuse: circular burns, immersion pattern, inconsistent history.",
    "explanationHi": "Blow gently, see doctor।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-517",
    "questionEn": "Envenomation means:",
    "questionHi": "Dental Emergency में Knocked Out Tooth को कैसे संभालें?",
    "optionsEn": [
      "Any bite",
      "Injection of venom into body",
      "Non-venomous bite",
      "Recovery from bite"
    ],
    "optionsHi": [
      "धोएं",
      "Crown से पकड़ें, Root न छुएं, दूध में रखें",
      "फेंकें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Envenomation: actual injection of venom (not all bites from venomous creatures envenomate).",
    "explanationHi": "Hold crown, keep in milk।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-518",
    "questionEn": "The '20-minute whole blood clotting test' helps assess:",
    "questionHi": "Knocked Out Tooth को वापस लगाने का सबसे अच्छा समय क्या है?",
    "optionsEn": [
      "Neurotoxic envenomation",
      "Hemotoxic envenomation (coagulopathy)",
      "Infection",
      "Allergy"
    ],
    "optionsHi": [
      "24 घंटे",
      "30 मिनट के भीतर",
      "1 घंटा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WBCT20: simple bedside test for venom-induced coagulopathy.",
    "explanationHi": "Within 30 minutes best।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-519",
    "questionEn": "Marine jellyfish stings should be treated with:",
    "questionHi": "Tooth को Preserve करने के लिए किसमें रखें?",
    "optionsEn": [
      "Fresh water rinse",
      "Vinegar (for box jellyfish) and seawater rinse",
      "Ice directly",
      "Urine"
    ],
    "optionsHi": [
      "पानी में",
      "दूध, Saliva, या Saline में",
      "शराब में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vinegar inactivates nematocysts. Use seawater (not fresh water which triggers discharge).",
    "explanationHi": "Milk, saliva, or saline।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-520",
    "questionEn": "Centipede bites cause:",
    "questionHi": "Broken Tooth में क्या करें?",
    "optionsEn": [
      "No symptoms",
      "Local pain and swelling, rarely systemic",
      "Always fatal",
      "Only itching"
    ],
    "optionsHi": [
      "निकालें",
      "गर्म पानी से कुल्ला करें, ठंडा सेक, Dentist जाएं",
      "छोड़ दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Centipede bites: painful local reaction, clean and ice. Rarely serious.",
    "explanationHi": "Rinse, cold compress, dentist।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-521",
    "questionEn": "Gastric lavage (stomach washout) is indicated within:",
    "questionHi": "Toothache में First Aid क्या है?",
    "optionsEn": [
      "24 hours",
      "Usually within 1 hour of ingestion if life-threatening poison",
      "Anytime",
      "Never"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "गर्म पानी से कुल्ला, Clove Oil, Pain Killer, Dentist",
      "केवल दर्द सहें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lavage rarely used; if done, within 1 hour for potentially lethal ingestions.",
    "explanationHi": "Rinse, clove oil, pain relief।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-522",
    "questionEn": "Whole bowel irrigation is used for:",
    "questionHi": "Jaw Injury में क्या करें?",
    "optionsEn": [
      "All poisoning",
      "Sustained-release preparations, drug packets, iron",
      "Only paracetamol",
      "Never"
    ],
    "optionsHi": [
      "हिलाएं",
      "Bandage से Support करें, बर्फ लगाएं, अस्पताल",
      "खाना खाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "WBI flushes GI tract for substances not adsorbed by charcoal or sustained-release.",
    "explanationHi": "Support, ice, hospital।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-523",
    "questionEn": "Tricyclic antidepressant overdose is dangerous because:",
    "questionHi": "TMJ Dislocation क्या है?",
    "optionsEn": [
      "Only causes sedation",
      "Can cause seizures and fatal cardiac arrhythmias",
      "Is never serious",
      "Only affects children"
    ],
    "optionsHi": [
      "दांत टूटना",
      "जबड़ा उतर जाना (मुंह खुला रह जाना)",
      "नाक टूटना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "TCA overdose: seizures, arrhythmias, hypotension - potentially fatal.",
    "explanationHi": "Jaw dislocation।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-524",
    "questionEn": "Hemodialysis is effective for removing:",
    "questionHi": "Finger Injury में RICE के अलावा क्या करें?",
    "optionsEn": [
      "All poisons",
      "Small, water-soluble molecules (methanol, ethylene glycol, lithium)",
      "Large protein-bound drugs",
      "Pesticides only"
    ],
    "optionsHi": [
      "खींचें",
      "Buddy Taping (पास की उंगली से बांधना)",
      "मोड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dialysis removes small, water-soluble, non-protein-bound substances.",
    "explanationHi": "Buddy tape to adjacent finger।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-525",
    "questionEn": "Pulmonary edema after drowning results from:",
    "questionHi": "Mallet Finger क्या है?",
    "optionsEn": [
      "Infection",
      "Water damaging lung tissue and surfactant",
      "Heart failure",
      "Allergic reaction"
    ],
    "optionsHi": [
      "सामान्य",
      "उंगली का सिरा सीधा न हो पाना (Tendon Injury)",
      "टूटी उंगली",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aspirated water damages alveoli and surfactant, causing edema and poor gas exchange.",
    "explanationHi": "Drooping fingertip।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-526",
    "questionEn": "Children are at highest drowning risk at ages:",
    "questionHi": "Subungual Hematoma क्या है?",
    "optionsEn": [
      "15-20 years",
      "1-4 years",
      "Over 60",
      "10-14 years"
    ],
    "optionsHi": [
      "खून बहना",
      "नाखून के नीचे रक्त जमना (दर्द)",
      "नाखून टूटना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Toddlers: curious, mobile, but can't swim or recognize danger.",
    "explanationHi": "Blood under nail।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-527",
    "questionEn": "Abdominal thrusts are NOT routinely performed on drowning victims because:",
    "questionHi": "Ring से उंगली में रक्त संचार रुक रहा हो तो क्या करें?",
    "optionsEn": [
      "They help clear water",
      "Don't remove significant lung water, may cause vomiting",
      "They're always helpful",
      "Water drains naturally"
    ],
    "optionsHi": [
      "छोड़ दें",
      "साबुन/तेल से निकालें, न निकले तो Ring Cutter या ED जाएं",
      "काट दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Abdominal thrusts don't clear lungs and increase vomiting/aspiration risk.",
    "explanationHi": "Remove ring urgently।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-528",
    "questionEn": "Aura before seizure refers to:",
    "questionHi": "Amputated Finger को कैसे संभालें?",
    "optionsEn": [
      "Unconsciousness",
      "Warning sensation experienced before seizure",
      "Recovery phase",
      "Light exposure"
    ],
    "optionsHi": [
      "सीधे बर्फ में",
      "Saline में धोएं, गीली Gauze में लपेटें, Plastic Bag में बर्फ पर रखें",
      "पानी में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aura: sensory warning (smell, taste, feeling) preceding some seizures.",
    "explanationHi": "Wrap, bag, ice (not direct)।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-529",
    "questionEn": "Tonic phase of seizure involves:",
    "questionHi": "Amputated Part को सीधे बर्फ में क्यों नहीं रखना चाहिए?",
    "optionsEn": [
      "Jerking movements",
      "Body stiffening",
      "Complete relaxation",
      "Normal movement"
    ],
    "optionsHi": [
      "रखना चाहिए",
      "Frostbite से Tissue Damage हो सकता है",
      "कोई कारण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tonic phase: sustained muscle contraction causing rigidity.",
    "explanationHi": "Direct ice causes frostbite।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-530",
    "questionEn": "Clonic phase of seizure involves:",
    "questionHi": "Foot Injury में क्या करें?",
    "optionsEn": [
      "Body stiffening",
      "Rhythmic jerking movements",
      "Stillness",
      "Running"
    ],
    "optionsHi": [
      "चलते रहें",
      "RICE, Weight न डालें, Elevation",
      "दौड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clonic: alternating contraction/relaxation causing rhythmic jerking.",
    "explanationHi": "RICE, no weight bearing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-531",
    "questionEn": "Hemorrhagic stroke has sudden onset 'worst headache' because:",
    "questionHi": "Plantar Fasciitis में क्या करें?",
    "optionsEn": [
      "Blood irritates meninges",
      "Always mild",
      "No headache occurs",
      "Headache is delayed"
    ],
    "optionsHi": [
      "व्यायाम",
      "आराम, बर्फ, Stretching, Arch Support",
      "दौड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Blood in subarachnoid space causes severe meningeal irritation and headache.",
    "explanationHi": "Rest, ice, stretch, support।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-532",
    "questionEn": "Cardiac chest pain often radiates to:",
    "questionHi": "Blister (छाला) में क्या करें?",
    "optionsEn": [
      "Legs only",
      "Left arm, jaw, back",
      "Right leg",
      "Head"
    ],
    "optionsHi": [
      "फोड़ें",
      "न फोड़ें, साफ रखें, Padding दें",
      "काटें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cardiac pain commonly radiates to left arm, jaw, neck, or back.",
    "explanationHi": "Don't pop, keep clean。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-533",
    "questionEn": "Troponin blood test is used to diagnose:",
    "questionHi": "बड़े Blister को Drain करना हो तो कैसे करें?",
    "optionsEn": [
      "Diabetes",
      "Heart muscle damage (heart attack)",
      "Stroke",
      "Kidney disease"
    ],
    "optionsHi": [
      "कैंची से",
      "Sterile Needle से Edge पर छेद करें, Skin न हटाएं",
      "खींचें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Troponin: protein released when heart muscle is damaged.",
    "explanationHi": "Sterile needle at edge।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-534",
    "questionEn": "Glucagon is used for:",
    "questionHi": "Ingrown Toenail में First Aid क्या है?",
    "optionsEn": [
      "High blood sugar",
      "Severe hypoglycemia when patient can't take oral sugar",
      "Diabetes Type 2",
      "Weight loss"
    ],
    "optionsHi": [
      "काटें",
      "गर्म पानी में भिगोएं, Cotton डालें, न सुधरे तो डॉक्टर",
      "खींचें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Glucagon injection raises blood sugar when patient is unconscious/can't swallow.",
    "explanationHi": "Soak, cotton, see doctor।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-535",
    "questionEn": "Exercise-induced asthma is triggered by:",
    "questionHi": "Back Injury में क्या करें?",
    "optionsEn": [
      "Resting",
      "Physical activity, especially in cold dry air",
      "Sleeping",
      "Eating"
    ],
    "optionsHi": [
      "उठाएं",
      "न हिलाएं, Support दें, अस्पताल",
      "मालिश करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Exercise can trigger bronchospasm, especially in cold, dry conditions.",
    "explanationHi": "Don't move, support。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-536",
    "questionEn": "Emergency move (drag) is used when:",
    "questionHi": "Back Pain में Red Flags क्या हैं?",
    "optionsEn": [
      "Patient is stable",
      "Immediate danger exists and no time for proper technique",
      "Only for training",
      "Patient requests it"
    ],
    "optionsHi": [
      "सामान्य दर्द",
      "Bladder/Bowel Problems, Numbness, Weakness, Trauma, Fever",
      "केवल दर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Emergency moves used only when immediate danger outweighs injury risk.",
    "explanationHi": "Back pain red flags।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-537",
    "questionEn": "Kendrick Extrication Device (KED) is used for:",
    "questionHi": "Cauda Equina Syndrome क्या है?",
    "optionsEn": [
      "Water rescue",
      "Removing seated patient with possible spinal injury from vehicle",
      "CPR",
      "Fractures only"
    ],
    "optionsHi": [
      "सामान्य",
      "रीढ़ के नीचे की नसों पर दबाव (Emergency)",
      "दर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "KED immobilizes torso/spine for extrication from seated position.",
    "explanationHi": "Compression of lower spine nerves।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-538",
    "questionEn": "During handover, reading back critical information:",
    "questionHi": "Sciatica क्या है?",
    "optionsEn": [
      "Wastes time",
      "Confirms accurate transmission and understanding",
      "Is optional",
      "Should be avoided"
    ],
    "optionsHi": [
      "सिरदर्द",
      "पीठ से पैर तक जाने वाला दर्द (Sciatic Nerve)",
      "पेट दर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Read-back confirms accuracy of critical information during handover.",
    "explanationHi": "Pain radiating down leg।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-539",
    "questionEn": "BSI (Body Substance Isolation) precautions include:",
    "questionHi": "Neck Injury में क्या करें?",
    "optionsEn": [
      "Ignoring all fluids",
      "Treating all body fluids as potentially infectious",
      "Only blood contact",
      "No precautions"
    ],
    "optionsHi": [
      "हिलाएं",
      "सिर और गर्दन को स्थिर रखें, न हिलाएं",
      "घुमाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "BSI assumes all body fluids are infectious; use appropriate PPE.",
    "explanationHi": "Immobilize head and neck。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Principles",
    "tags": [
      "principles"
    ]
  },
  {
    "id": "FIRST-AID-540",
    "questionEn": "Mouth-to-nose ventilation is used when:",
    "questionHi": "Manual In-Line Stabilization क्या है?",
    "optionsEn": [
      "Patient has nose injury",
      "Mouth injuries, can't seal mouth, or resuscitating in water",
      "Always preferred",
      "Never used"
    ],
    "optionsHi": [
      "मालिश",
      "हाथों से सिर और गर्दन को सीधी रेखा में स्थिर रखना",
      "घुमाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mouth-to-nose: alternative when mouth ventilation not possible.",
    "explanationHi": "Manual head/neck stabilization।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-541",
    "questionEn": "Croup causes:",
    "questionHi": "Cervical Collar का उपयोग कब करें?",
    "optionsEn": [
      "Lower airway obstruction",
      "Upper airway obstruction with barking cough",
      "GI symptoms",
      "Only in adults"
    ],
    "optionsHi": [
      "कभी नहीं",
      "Neck Injury में (प्रशिक्षित होने पर)",
      "हमेशा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Croup: viral laryngitis causing stridor and characteristic barking cough.",
    "explanationHi": "For neck injury stabilization।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-542",
    "questionEn": "Anticoagulant medication increases bleeding risk because:",
    "questionHi": "Log Roll क्या है?",
    "optionsEn": [
      "It causes clots",
      "It interferes with blood clotting",
      "It causes bruising only",
      "No effect on bleeding"
    ],
    "optionsHi": [
      "लुढ़कना",
      "Spine Injury में व्यक्ति को एक साथ घुमाने की तकनीक",
      "खेल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anticoagulants (warfarin, heparin, DOACs) reduce clotting ability.",
    "explanationHi": "Technique to turn spine patient।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-543",
    "questionEn": "Lactate levels in shock indicate:",
    "questionHi": "Log Roll में कितने लोग चाहिए?",
    "optionsEn": [
      "Normal finding",
      "Degree of tissue hypoxia and anaerobic metabolism",
      "Recovery",
      "Hydration status only"
    ],
    "optionsHi": [
      "1",
      "कम से कम 3-4 (Head, Shoulders, Hips)",
      "2",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Elevated lactate indicates inadequate oxygen delivery to tissues.",
    "explanationHi": "At least 3-4 people।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-544",
    "questionEn": "March fracture is:",
    "questionHi": "Chest Injury में क्या देखें?",
    "optionsEn": [
      "Femur fracture",
      "Stress fracture of metatarsal from prolonged walking",
      "Skull fracture",
      "Spine fracture"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "सांस में कठिनाई, असमान छाती, Crepitus, Paradoxical Movement",
      "केवल दर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "March fracture: metatarsal stress fracture from repetitive marching/walking.",
    "explanationHi": "Signs of chest injury।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-545",
    "questionEn": "Silver sulfadiazine cream is used on burns for:",
    "questionHi": "Flail Chest क्या है?",
    "optionsEn": [
      "Pain relief only",
      "Antimicrobial protection",
      "Cooling",
      "Scar prevention"
    ],
    "optionsHi": [
      "सामान्य",
      "2+ पसलियां 2+ जगह टूटना (Paradoxical Movement)",
      "एक पसली टूटना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Silver sulfadiazine: topical antibiotic cream for burn wound care.",
    "explanationHi": "Multiple rib fractures।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-546",
    "questionEn": "Pre-hospital ASV (anti-snake venom) use is:",
    "questionHi": "Paradoxical Movement क्या है?",
    "optionsEn": [
      "Always done",
      "Generally not recommended due to anaphylaxis risk",
      "Mandatory",
      "Harmless"
    ],
    "optionsHi": [
      "सामान्य",
      "सांस लेने पर छाती अंदर जाना (Flail Chest में)",
      "बाहर आना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ASV given in hospital where anaphylaxis can be managed.",
    "explanationHi": "Inward movement on inspiration।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-547",
    "questionEn": "Ethanol is used as antidote for:",
    "questionHi": "Flail Chest में First Aid क्या है?",
    "optionsEn": [
      "Paracetamol",
      "Methanol and ethylene glycol poisoning",
      "Organophosphates",
      "Carbon monoxide"
    ],
    "optionsHi": [
      "बांधें",
      "चोट वाली तरफ लेटाएं, Support दें, O2, अस्पताल",
      "उठाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ethanol competes for alcohol dehydrogenase, preventing toxic metabolite formation.",
    "explanationHi": "Position on injured side।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-548",
    "questionEn": "Oxygen therapy for near-drowning aims to:",
    "questionHi": "Simple Rib Fracture में क्या करें?",
    "optionsEn": [
      "Dry the lungs",
      "Correct hypoxemia",
      "Prevent infection",
      "Warm patient"
    ],
    "optionsHi": [
      "बांधें",
      "Pain Control, Deep Breathing Exercises, अस्पताल (Pneumothorax Rule Out)",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Supplemental oxygen treats hypoxia from impaired gas exchange.",
    "explanationHi": "Pain control, breathing exercises।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-549",
    "questionEn": "Postictal confusion typically lasts:",
    "questionHi": "Rib Fracture में बांधना क्यों नहीं चाहिए?",
    "optionsEn": [
      "Seconds",
      "Minutes to hours",
      "Days",
      "Permanently"
    ],
    "optionsHi": [
      "बांधना चाहिए",
      "सांस में कठिनाई, Pneumonia का खतरा",
      "कोई कारण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Post-ictal state varies but usually resolves within minutes to hours.",
    "explanationHi": "Restricts breathing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-550",
    "questionEn": "BE-FAST extends stroke recognition to include:",
    "questionHi": "Abdominal Injury में क्या देखें?",
    "optionsEn": [
      "Blood pressure, Eyes",
      "Balance, Eyes (vision problems)",
      "Breathing, Eating",
      "Both arms"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "दर्द, कड़ापन, सूजन, Guarding, उल्टी में रक्त",
      "केवल दर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "BE-FAST: Balance, Eyes, Face, Arms, Speech, Time - expanded stroke recognition.",
    "explanationHi": "Signs of abdominal injury।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-551",
    "questionEn": "Using proper body mechanics during patient moving prevents:",
    "questionHi": "Blunt Abdominal Trauma में कौन से अंग सबसे अधिक प्रभावित होते हैं?",
    "optionsEn": [
      "Patient injury only",
      "Rescuer back injury",
      "Nothing",
      "Communication errors"
    ],
    "optionsHi": [
      "आंत",
      "Spleen और Liver",
      "गुर्दे",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Proper lifting (bend knees, straight back) prevents rescuer injury.",
    "explanationHi": "Spleen and liver most affected।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-552",
    "questionEn": "Sudden cardiac arrest in young athletes is often due to:",
    "questionHi": "Penetrating Abdominal Injury में वस्तु निकालनी चाहिए?",
    "optionsEn": [
      "Smoking",
      "Undiagnosed heart conditions (cardiomyopathy, channelopathies)",
      "Drug overdose always",
      "Dehydration"
    ],
    "optionsHi": [
      "हां",
      "नहीं - जहां है वहीं Stabilize करें",
      "कभी-कभी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Young athlete sudden death often from undetected cardiac conditions.",
    "explanationHi": "Don't remove, stabilize。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-553",
    "questionEn": "Tongue is the most common cause of airway obstruction in unconscious patients because:",
    "questionHi": "Evisceration (आंतें बाहर निकलना) में क्या करें?",
    "optionsEn": [
      "It swells",
      "It falls back blocking pharynx when muscles relax",
      "It's too large",
      "It's infected"
    ],
    "optionsHi": [
      "अंदर डालें",
      "गीली Sterile Dressing से ढकें, अंदर न डालें, अस्पताल",
      "सूखा रखें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Muscle relaxation allows tongue to fall posteriorly, blocking airway.",
    "explanationHi": "Cover moist, don't push back।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-554",
    "questionEn": "Hemophilia A is deficiency of:",
    "questionHi": "Abdominal Injury में पानी/खाना देना चाहिए?",
    "optionsEn": [
      "Factor VIII",
      "Factor IX",
      "Platelets",
      "Vitamin K"
    ],
    "optionsHi": [
      "हां",
      "नहीं - Surgery की जरूरत हो सकती है",
      "थोड़ा",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "Hemophilia A: Factor VIII deficiency; Hemophilia B: Factor IX deficiency.",
    "explanationHi": "NPO - nothing by mouth।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-555",
    "questionEn": "Class III hemorrhage (30-40% blood loss) presents with:",
    "questionHi": "Kehr's Sign क्या है?",
    "optionsEn": [
      "Normal vital signs",
      "Tachycardia, tachypnea, decreased BP, confusion",
      "Bradycardia",
      "No symptoms"
    ],
    "optionsHi": [
      "पेट दर्द",
      "बाएं कंधे में दर्द (Spleen Injury)",
      "पीठ दर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Class III: significant hemorrhage with obvious shock signs.",
    "explanationHi": "Left shoulder pain in spleen injury।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-556",
    "questionEn": "Pathological fracture occurs due to:",
    "questionHi": "Pelvic Injury में क्या संदेह करें?",
    "optionsEn": [
      "Trauma only",
      "Weakened bone from disease (osteoporosis, tumor, infection)",
      "Normal activity",
      "Exercise"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "गंभीर Internal Bleeding (Large Blood Vessels)",
      "हल्की चोट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pathological fractures occur with minimal trauma in diseased/weak bone.",
    "explanationHi": "Major bleeding possible।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-557",
    "questionEn": "TBSA of perineum/genitals in Rule of Nines is:",
    "questionHi": "Pelvic Fracture में क्या न करें?",
    "optionsEn": [
      "9%",
      "1%",
      "18%",
      "4.5%"
    ],
    "optionsHi": [
      "Support दें",
      "पैर हिलाएं, Pelvis दबाकर जांचें",
      "अस्पताल जाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Perineum = 1% TBSA in Rule of Nines.",
    "explanationHi": "Don't move or press pelvis।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-558",
    "questionEn": "Adrenaline auto-injector is used for:",
    "questionHi": "Pelvic Binder क्या है?",
    "optionsEn": [
      "All stings",
      "Anaphylaxis from stings/bites",
      "Pain relief",
      "Infection"
    ],
    "optionsHi": [
      "Bandage",
      "Pelvis को Stabilize करने के लिए बांधना (Sheet/Commercial)",
      "टूर्निकेट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Auto-injectors provide emergency adrenaline for severe allergic reactions.",
    "explanationHi": "Device to stabilize pelvis।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-559",
    "questionEn": "Supportive care in poisoning includes:",
    "questionHi": "Open Book Pelvic Fracture में Pelvic Binder कहां लगाएं?",
    "optionsEn": [
      "Only antidotes",
      "Airway management, IV fluids, monitoring, treating symptoms",
      "Waiting only",
      "Nothing"
    ],
    "optionsHi": [
      "कमर पर",
      "Greater Trochanter के Level पर",
      "घुटने पर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Most poisoning managed supportively; antidotes exist for few poisons.",
    "explanationHi": "At level of greater trochanter。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-560",
    "questionEn": "Laryngospasm in drowning:",
    "questionHi": "Genital Injury में क्या करें?",
    "optionsEn": [
      "Always occurs",
      "May initially prevent water aspiration",
      "Helps breathing",
      "Never occurs"
    ],
    "optionsHi": [
      "रगड़ें",
      "Direct Pressure, Ice, Privacy Maintain करें, अस्पताल",
      "छोड़ दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Protective laryngospasm may prevent initial water entry; eventually relaxes.",
    "explanationHi": "Pressure, ice, privacy।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-561",
    "questionEn": "Buccal midazolam is used for:",
    "questionHi": "Testicular Torsion क्या है?",
    "optionsEn": [
      "Heart attack",
      "Prolonged seizures (status epilepticus)",
      "Asthma",
      "Diabetes"
    ],
    "optionsHi": [
      "चोट",
      "अंडकोष का मुड़ना (Emergency - 6 घंटे में Surgery)",
      "सूजन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Buccal/intranasal midazolam used for seizure emergencies when IV not available.",
    "explanationHi": "Twisting of testicle।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-562",
    "questionEn": "Mechanical thrombectomy for stroke is:",
    "questionHi": "Testicular Torsion के लक्षण क्या हैं?",
    "optionsEn": [
      "Drug treatment",
      "Surgical removal of blood clot",
      "Physical therapy",
      "CT scan"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "अचानक तीव्र दर्द, सूजन, उल्टी, अंडकोष ऊंचा",
      "हल्का दर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Thrombectomy: catheter-based procedure to remove clot in large vessel strokes.",
    "explanationHi": "Sudden severe pain, swelling।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-563",
    "questionEn": "Padding between legs when splinting leg-to-leg:",
    "questionHi": "Paraphimosis क्या है?",
    "optionsEn": [
      "Is unnecessary",
      "Prevents pressure sores and improves comfort",
      "Worsens injury",
      "Only for children"
    ],
    "optionsHi": [
      "सामान्य",
      "Foreskin पीछे फंस जाना (Emergency)",
      "चोट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Padding bony prominences prevents pressure injury during anatomical splinting.",
    "explanationHi": "Retracted foreskin trapped।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-564",
    "questionEn": "Secondary survey is performed:",
    "questionHi": "Zipper Injury में क्या करें?",
    "optionsEn": [
      "Before primary survey",
      "After life threats addressed, to find all injuries",
      "Never",
      "Only in hospital"
    ],
    "optionsHi": [
      "खींचें",
      "Mineral Oil लगाएं, धीरे निकालें, न निकले तो ED",
      "काटें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Secondary survey: head-to-toe examination after stabilizing life threats.",
    "explanationHi": "Oil, gentle removal।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Principles",
    "tags": [
      "principles"
    ]
  },
  {
    "id": "FIRST-AID-565",
    "questionEn": "Hands-only CPR is NOT recommended for:",
    "questionHi": "Pregnancy में Trauma हो तो क्या विशेष ध्यान रखें?",
    "optionsEn": [
      "Adult witnessed collapse",
      "Children and drowning victims",
      "All arrests",
      "Anyone"
    ],
    "optionsHi": [
      "सामान्य",
      "दो रोगी (मां और बच्चा), Left Lateral Position",
      "एक रोगी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Children/drowning: usually hypoxic arrests needing ventilation. Full CPR preferred.",
    "explanationHi": "Two patients, left lateral。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-566",
    "questionEn": "Tripod position (leaning forward on hands) indicates:",
    "questionHi": "Pregnant Patient में Left Lateral Position क्यों?",
    "optionsEn": [
      "Relaxation",
      "Respiratory distress - patient optimizing breathing",
      "Sleep",
      "Heart attack"
    ],
    "optionsHi": [
      "आराम के लिए",
      "IVC Compression रोकने के लिए (बेहतर Blood Flow)",
      "कोई कारण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tripod: instinctive position using accessory muscles for breathing.",
    "explanationHi": "Prevents IVC compression。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-567",
    "questionEn": "Retroperitoneal bleeding is dangerous because:",
    "questionHi": "Pregnancy में Trauma के बाद किन लक्षणों पर ध्यान दें?",
    "optionsEn": [
      "Easily visible",
      "Can lose massive blood without external signs",
      "Always minor",
      "Never occurs"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Vaginal Bleeding, Contractions, Decreased Fetal Movement",
      "केवल दर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Retroperitoneal space can hold liters of blood without obvious swelling.",
    "explanationHi": "Watch for obstetric complications。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-568",
    "questionEn": "End-organ damage in shock includes:",
    "questionHi": "Placental Abruption क्या है?",
    "optionsEn": [
      "Skin changes only",
      "Kidney failure, liver damage, brain injury",
      "No damage",
      "Only heart"
    ],
    "optionsHi": [
      "सामान्य",
      "Placenta का गर्भाशय से अलग होना (Emergency)",
      "जन्म",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Prolonged shock damages organs from inadequate perfusion.",
    "explanationHi": "Placenta separating from uterus。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-569",
    "questionEn": "Nursemaid's elbow is:",
    "questionHi": "Cord Prolapse में क्या करें?",
    "optionsEn": [
      "Elbow fracture",
      "Radial head subluxation from pulling child's arm",
      "Adult injury",
      "Infection"
    ],
    "optionsHi": [
      "खींचें",
      "Cord को गीला रखें, Knee-Chest Position, Emergency C-Section",
      "दबाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Nursemaid's elbow: partial dislocation from pulling/swinging child by arms.",
    "explanationHi": "Keep moist, positioning。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-570",
    "questionEn": "Contact burns from hot metal are typically:",
    "questionHi": "Emergency Delivery (बच्चे का जन्म) में पहला कदम क्या है?",
    "optionsEn": [
      "Superficial",
      "Deep due to prolonged contact",
      "Minor",
      "Always partial thickness"
    ],
    "optionsHi": [
      "खींचें",
      "सहायता बुलाएं, साफ जगह, Gloves पहनें",
      "धकेलें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Contact burns: often deep because hot object stays on skin longer.",
    "explanationHi": "Call help, clean area, gloves。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-571",
    "questionEn": "Serum sickness from anti-snake venom occurs:",
    "questionHi": "Normal Delivery में बच्चे का सिर निकलने के बाद क्या करें?",
    "optionsEn": [
      "Immediately",
      "5-14 days after ASV administration",
      "Never",
      "Before ASV"
    ],
    "optionsHi": [
      "खींचें",
      "धीरे Support करें, Cord Check करें (गले में हो तो ढीला करें)",
      "दबाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Serum sickness: delayed reaction to animal-derived ASV proteins.",
    "explanationHi": "Support head, check cord。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-572",
    "questionEn": "Charcoal is NOT effective for:",
    "questionHi": "Nuchal Cord क्या है?",
    "optionsEn": [
      "Aspirin",
      "Iron, lithium, alcohols, hydrocarbons",
      "Most drugs",
      "Paracetamol"
    ],
    "optionsHi": [
      "सामान्य",
      "गर्दन के चारों ओर लिपटी Umbilical Cord",
      "नाभि",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Charcoal doesn't bind metals, alcohols, or hydrocarbons effectively.",
    "explanationHi": "Cord around neck。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-573",
    "questionEn": "Swimming pool safety barriers should:",
    "questionHi": "बच्चे के जन्म के बाद पहला कदम क्या है?",
    "optionsEn": [
      "Be decorative only",
      "Completely surround pool with self-closing gate",
      "Be low",
      "Have large gaps"
    ],
    "optionsHi": [
      "नहलाएं",
      "गर्म रखें, Dry करें, Suction (जरूरी हो तो), Stimulate",
      "खिलाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Four-sided isolation fencing with self-latching gate prevents child access.",
    "explanationHi": "Warm, dry, suction, stimulate。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-574",
    "questionEn": "Photosensitive epilepsy is triggered by:",
    "questionHi": "Umbilical Cord कब काटें?",
    "optionsEn": [
      "Darkness",
      "Flashing lights",
      "Loud sounds",
      "Sleep"
    ],
    "optionsHi": [
      "तुरंत",
      "Delayed Cord Clamping (1-3 मिनट बाद) या Pulsation रुकने पर",
      "10 मिनट बाद",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Some epilepsy triggered by flickering/flashing lights at certain frequencies.",
    "explanationHi": "Delayed clamping।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-575",
    "questionEn": "Vacuum splints work by:",
    "questionHi": "Umbilical Cord कैसे काटें?",
    "optionsEn": [
      "Heat application",
      "Removing air to create rigid mold around limb",
      "Inflation",
      "Chemical reaction"
    ],
    "optionsHi": [
      "कहीं भी",
      "2 Clamps लगाएं (Baby से 2 इंच, 4 इंच), बीच में काटें",
      "एक Clamp",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vacuum splints: air removal makes beads rigid, conforming to limb shape.",
    "explanationHi": "Two clamps, cut between。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-576",
    "questionEn": "Precordial thump is:",
    "questionHi": "Postpartum Hemorrhage (PPH) क्या है?",
    "optionsEn": [
      "Standard CPR technique",
      "No longer routinely recommended, rarely used for witnessed VF",
      "Required in all arrests",
      "Harmful always"
    ],
    "optionsHi": [
      "सामान्य",
      "Delivery के बाद अत्यधिक रक्तस्राव (>500ml)",
      "कम रक्तस्राव",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Precordial thump: rarely effective, not routine; immediate CPR more important.",
    "explanationHi": "Excessive bleeding after delivery。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-577",
    "questionEn": "Suction should be applied for:",
    "questionHi": "PPH में First Aid क्या है?",
    "optionsEn": [
      "30 seconds continuously",
      "10-15 seconds at a time to avoid hypoxia",
      "1 minute",
      "5 minutes"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Fundal Massage, Breastfeeding, Legs Elevate, Emergency Help",
      "इंतजार करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Brief suction prevents hypoxia from removed oxygen during suctioning.",
    "explanationHi": "Massage, feed, elevate, help。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-578",
    "questionEn": "Wound dehiscence means:",
    "questionHi": "Fundal Massage कैसे करें?",
    "optionsEn": [
      "Wound infection",
      "Wound edges separating after closure",
      "Normal healing",
      "Wound drainage"
    ],
    "optionsHi": [
      "हल्का दबाएं",
      "नाभि के नीचे गर्भाशय को जोर से मालिश करें",
      "न करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dehiscence: reopening of wound, often from infection or tension.",
    "explanationHi": "Firm massage of uterus。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-579",
    "questionEn": "MAST/PASG (pneumatic anti-shock garment) is:",
    "questionHi": "APGAR Score क्या है?",
    "optionsEn": [
      "First-line treatment",
      "No longer routinely used; limited indications",
      "Required equipment",
      "Harmful always"
    ],
    "optionsHi": [
      "Weight",
      "नवजात की स्थिति का आकलन (1 और 5 मिनट पर)",
      "Height",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MAST/PASG: historical; now rarely used, limited evidence of benefit.",
    "explanationHi": "Newborn assessment at 1 and 5 min。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-580",
    "questionEn": "Monteggia fracture involves:",
    "questionHi": "APGAR में कौन से 5 Parameters देखते हैं?",
    "optionsEn": [
      "Wrist only",
      "Proximal ulna fracture with radial head dislocation",
      "Femur",
      "Ankle"
    ],
    "optionsHi": [
      "Weight, Height",
      "Appearance, Pulse, Grimace, Activity, Respiration",
      "केवल रंग",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Monteggia: ulna fracture + radial head dislocation. Galeazzi: radius fracture + distal ulna dislocation.",
    "explanationHi": "5 APGAR parameters。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-581",
    "questionEn": "Radiation burns from nuclear incident require:",
    "questionHi": "APGAR Score 7-10 का क्या अर्थ है?",
    "optionsEn": [
      "No decontamination",
      "Decontamination and specialized medical care",
      "Only cooling",
      "Antibiotics"
    ],
    "optionsHi": [
      "खराब",
      "अच्छा (Normal)",
      "गंभीर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Radiation burns need decontamination and specialized care for internal/external exposure.",
    "explanationHi": "Good score。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-582",
    "questionEn": "Pasteurella multocida is commonly associated with:",
    "questionHi": "नवजात में CPR कब शुरू करें?",
    "optionsEn": [
      "Snake bites",
      "Cat and dog bite infections",
      "Bee stings",
      "Spider bites"
    ],
    "optionsHi": [
      "हमेशा",
      "Heart Rate <60/min (Stimulation और O2 के बावजूद)",
      "100/min से कम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pasteurella: common pathogen in cat/dog bites causing cellulitis.",
    "explanationHi": "HR <60 despite initial steps。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-583",
    "questionEn": "Decontamination of skin should proceed from:",
    "questionHi": "नवजात में CPR का Compression:Ventilation Ratio क्या है?",
    "optionsEn": [
      "Center outward",
      "Top to bottom, away from face and orifices",
      "Random direction",
      "Only affected area"
    ],
    "optionsHi": [
      "30:2",
      "3:1",
      "15:2",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Wash away from face/openings to prevent spread of contamination.",
    "explanationHi": "3:1 for neonates。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-584",
    "questionEn": "Hypoglycemia unawareness means:",
    "questionHi": "नवजात में Chest Compression कैसे देते हैं?",
    "optionsEn": [
      "Normal response",
      "Loss of warning symptoms before severe hypoglycemia",
      "Always aware",
      "Only in non-diabetics"
    ],
    "optionsHi": [
      "हथेली से",
      "दो अंगूठों या दो उंगलियों से (Nipple Line के नीचे)",
      "मुट्ठी से",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Some diabetics lose early warning signs, progressing directly to confusion/seizures.",
    "explanationHi": "Two thumbs or fingers।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-585",
    "questionEn": "Helicopter EMS is called for:",
    "questionHi": "Breech Delivery में क्या खतरा है?",
    "optionsEn": [
      "All emergencies",
      "Critical patients where time saving justifies air transport",
      "Minor injuries",
      "Urban areas only"
    ],
    "optionsHi": [
      "कोई नहीं",
      "Head Entrapment, Cord Prolapse",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HEMS: for critical patients when air transport significantly reduces time to definitive care.",
    "explanationHi": "Risks in breech delivery。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-586",
    "questionEn": "CPR quality metrics include:",
    "questionHi": "Shoulder Dystocia क्या है?",
    "optionsEn": [
      "Speed of calling only",
      "Rate, depth, recoil, minimizing interruptions, avoiding hyperventilation",
      "Just chest compressions",
      "Only breathing"
    ],
    "optionsHi": [
      "सामान्य",
      "कंधा फंसना (Head निकलने के बाद)",
      "पैर फंसना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CPR quality: correct rate/depth, full recoil, minimal pauses, avoid excessive ventilation.",
    "explanationHi": "Shoulder stuck after head。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-587",
    "questionEn": "Wound healing by primary intention occurs when:",
    "questionHi": "Shoulder Dystocia में McRoberts Maneuver क्या है?",
    "optionsEn": [
      "Wound is left open",
      "Clean wound edges are brought together",
      "Wound is infected",
      "Skin grafting is needed"
    ],
    "optionsHi": [
      "खींचना",
      "मां की जांघों को पेट की तरफ मोड़ना",
      "दबाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Primary intention: clean wounds closed directly heal with minimal scarring.",
    "explanationHi": "Flex thighs to abdomen।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-588",
    "questionEn": "Permissive hypotension in trauma means:",
    "questionHi": "Meconium Stained Amniotic Fluid क्या दर्शाता है?",
    "optionsEn": [
      "Maintaining high BP",
      "Accepting lower than normal BP to reduce bleeding before surgery",
      "Ignoring BP",
      "No treatment"
    ],
    "optionsHi": [
      "सामान्य",
      "Fetal Distress हो सकता है",
      "अच्छा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Permissive hypotension: controlled low BP may reduce ongoing hemorrhage.",
    "explanationHi": "May indicate fetal distress。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-589",
    "questionEn": "Salter-Harris classification is for:",
    "questionHi": "Meconium Aspiration में क्या करें?",
    "optionsEn": [
      "Adult fractures",
      "Pediatric growth plate fractures",
      "Spine fractures",
      "Pelvic fractures"
    ],
    "optionsHi": [
      "Suction करें",
      "Vigorous Baby - Routine Care; Non-Vigorous - Specialized Suction",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Salter-Harris: classifies epiphyseal (growth plate) fractures in children.",
    "explanationHi": "Based on baby's condition。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-590",
    "questionEn": "Smoke inhalation injury is worsened when:",
    "questionHi": "Kangaroo Mother Care (KMC) क्या है?",
    "optionsEn": [
      "Outside in open air",
      "In enclosed space with synthetic materials burning",
      "Fire is small",
      "Water is used"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "नवजात को मां की छाती पर त्वचा से त्वचा रखना",
      "दूध पिलाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Enclosed space + synthetics = higher toxic gas concentration and inhalation risk.",
    "explanationHi": "Skin-to-skin contact。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-591",
    "questionEn": "Spider bites in India are:",
    "questionHi": "KMC के क्या फायदे हैं?",
    "optionsEn": [
      "Always fatal",
      "Rarely medically significant; most bites are mild",
      "Common cause of death",
      "Same as snake bites"
    ],
    "optionsHi": [
      "कोई नहीं",
      "गर्माहट, Breastfeeding, Bonding, Survival बढ़ना",
      "केवल गर्माहट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Most Indian spiders cause mild local reactions; no medically significant spiders common.",
    "explanationHi": "Multiple benefits of KMC。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-592",
    "questionEn": "Extracorporeal membrane oxygenation (ECMO) in poisoning is used for:",
    "questionHi": "Low Birth Weight में KMC कितने समय तक करें?",
    "optionsEn": [
      "All poisoning",
      "Severe cardiopulmonary failure from poisoning",
      "Mild cases",
      "Prevention"
    ],
    "optionsHi": [
      "1 घंटा",
      "जितना संभव हो (24 घंटे तक)",
      "10 मिनट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ECMO: rescue therapy for refractory cardiac/respiratory failure from poisoning.",
    "explanationHi": "As long as possible।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-593",
    "questionEn": "Survival rates after drowning decrease significantly after:",
    "questionHi": "Premature Baby में क्या विशेष ध्यान रखें?",
    "optionsEn": [
      "1 minute",
      "5-10 minutes submersion",
      "30 minutes",
      "1 hour"
    ],
    "optionsHi": [
      "सामान्य",
      "गर्माहट, Gentle Handling, Infection Prevention, Feeding Support",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Beyond 5-10 minutes, neurological outcomes worsen significantly.",
    "explanationHi": "Special care for premature。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-594",
    "questionEn": "STEMI on ECG indicates:",
    "questionHi": "Newborn Hypothermia के लक्षण क्या हैं?",
    "optionsEn": [
      "Normal heart",
      "ST elevation myocardial infarction - complete artery blockage",
      "Stable angina",
      "Arrhythmia only"
    ],
    "optionsHi": [
      "गर्म त्वचा",
      "ठंडी त्वचा, सुस्ती, कम दूध पीना, कमजोर रोना",
      "बुखार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "STEMI: ECG changes indicating complete coronary occlusion - needs urgent reperfusion.",
    "explanationHi": "Signs of cold newborn。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-595",
    "questionEn": "Golden hour concept emphasizes:",
    "questionHi": "Newborn में सामान्य Temperature क्या है?",
    "optionsEn": [
      "Slow care is best",
      "Critical trauma patients need definitive care within ~60 minutes",
      "No time limit",
      "Only ambulance matters"
    ],
    "optionsHi": [
      "35°C",
      "36.5-37.5°C (97.7-99.5°F)",
      "38°C",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Golden hour: time-critical treatment for trauma improves survival.",
    "explanationHi": "Normal newborn temperature।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-596",
    "questionEn": "What is the compression to breath ratio for single-rescuer adult CPR?",
    "questionHi": "Newborn Jaundice कब खतरनाक है?",
    "optionsEn": [],
    "optionsHi": [
      "कभी नहीं",
      "24 घंटे के भीतर, गहरा पीलापन, सुस्ती, न पीना",
      "हमेशा",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Early or severe jaundice dangerous।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-597",
    "questionEn": "Name two substances that should NOT be applied to burns.",
    "questionHi": "Kernicterus क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "सामान्य",
      "अत्यधिक Bilirubin से मस्तिष्क क्षति",
      "पीलिया",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Brain damage from high bilirubin।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-598",
    "questionEn": "What does SLUDGE stand for in organophosphate poisoning?",
    "questionHi": "Newborn में Umbilical Cord Care कैसे करें?",
    "optionsEn": [],
    "optionsHi": [
      "तेल लगाएं",
      "सूखा और साफ रखें, कुछ न लगाएं",
      "गीला रखें",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Keep dry and clean।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-599",
    "questionEn": "A motorcyclist has fallen and his right leg is angulated, swollen, and he cannot move it. There is no wound. What type of injury is this and what is your management?",
    "questionHi": "Umbilical Cord Infection (Omphalitis) के लक्षण क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "सामान्य",
      "लालिमा, सूजन, बदबू, पूस, बुखार",
      "केवल गंध",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Signs of cord infection।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-600",
    "questionEn": "A known diabetic is found shaky, sweating, and confused. She can still follow commands. What is happening and what is your immediate action?",
    "questionHi": "नवजात में Early Breastfeeding कब शुरू करें?",
    "optionsEn": [],
    "optionsHi": [
      "24 घंटे बाद",
      "जन्म के 1 घंटे के भीतर (Golden Hour)",
      "6 घंटे बाद",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Within 1 hour of birth。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-601",
    "questionEn": "What should you check first when approaching an unconscious person?",
    "questionHi": "Mental Health Emergency क्या है?",
    "optionsEn": [
      "Breathing",
      "Scene safety",
      "Pulse",
      "ID"
    ],
    "optionsHi": [
      "सामान्य तनाव",
      "मानसिक स्थिति जो जीवन के लिए खतरा हो (Suicide, Psychosis)",
      "थकान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Always ensure scene is safe before approaching any casualty.",
    "explanationHi": "Life-threatening mental state।",
    "difficulty": "easy",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-602",
    "questionEn": "The look, listen, feel method assesses:",
    "questionHi": "Suicide के Warning Signs क्या हैं?",
    "optionsEn": [
      "Pulse",
      "Breathing",
      "Consciousness",
      "Blood pressure"
    ],
    "optionsHi": [
      "खुश रहना",
      "मरने की बात, अलग-थलग, चीजें बांटना, Hopelessness",
      "सामान्य व्यवहार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Look for chest rise, listen for breath sounds, feel for air on cheek.",
    "explanationHi": "Suicide warning signs।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-603",
    "questionEn": "Modified jaw thrust is performed by:",
    "questionHi": "Suicide का खतरा हो तो क्या करें?",
    "optionsEn": [
      "Tilting head back",
      "Lifting mandible forward without head extension",
      "Turning head to side",
      "Pressing on chest"
    ],
    "optionsHi": [
      "अकेला छोड़ें",
      "साथ रहें, सुनें, Lethal Means हटाएं, Professional Help लें",
      "उपदेश दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Jaw thrust opens airway while keeping cervical spine neutral.",
    "explanationHi": "Stay, listen, remove means, get help।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-604",
    "questionEn": "Hemostasis refers to:",
    "questionHi": "क्या Suicide के बारे में पूछने से खतरा बढ़ता है?",
    "optionsEn": [
      "Blood circulation",
      "Blood clotting to stop bleeding",
      "Blood cell production",
      "Blood pressure"
    ],
    "optionsHi": [
      "हां",
      "नहीं - सीधे पूछना जरूरी है, इससे मदद मिलती है",
      "कभी-कभी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hemostasis: physiological process that stops bleeding.",
    "explanationHi": "Asking directly helps।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-605",
    "questionEn": "Cellular hypoxia in shock leads to:",
    "questionHi": "iCALL (Mental Health Helpline) का नंबर क्या है?",
    "optionsEn": [
      "Excess oxygen",
      "Anaerobic metabolism and lactic acid buildup",
      "Normal function",
      "Improved energy"
    ],
    "optionsHi": [
      "100",
      "9152987821",
      "108",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Without oxygen, cells switch to inefficient anaerobic metabolism.",
    "explanationHi": "iCALL helpline number।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-606",
    "questionEn": "A transverse fracture is:",
    "questionHi": "Vandrevala Foundation Helpline का नंबर क्या है?",
    "optionsEn": [
      "Spiral break",
      "Break straight across the bone",
      "Multiple fragments",
      "Partial break"
    ],
    "optionsHi": [
      "100",
      "1860-2662-345 / 1800-2333-330",
      "108",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Transverse: fracture line perpendicular to long axis of bone.",
    "explanationHi": "Vandrevala helpline।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-607",
    "questionEn": "Scald burns are typically:",
    "questionHi": "Panic Attack के लक्षण क्या हैं?",
    "optionsEn": [
      "Full thickness",
      "Partial thickness due to wet heat transferring less energy",
      "Not burns",
      "Always superficial"
    ],
    "optionsHi": [
      "शांत",
      "तेज धड़कन, सांस फूलना, पसीना, डर, छाती में दर्द",
      "सुस्ती",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Scalds from hot liquids usually cause partial thickness burns.",
    "explanationHi": "Panic attack symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-608",
    "questionEn": "Local wound care for animal bites should NOT include:",
    "questionHi": "Panic Attack में क्या करें?",
    "optionsEn": [
      "Thorough washing",
      "Immediate tight suturing",
      "Antiseptic application",
      "Tetanus consideration"
    ],
    "optionsHi": [
      "उपेक्षा करें",
      "शांत रहें, धीमी सांस लें, Grounding Techniques, Reassure",
      "डराएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tight closure traps bacteria. Most bite wounds left open or loosely closed.",
    "explanationHi": "Calm, breathe, ground, reassure।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-609",
    "questionEn": "Enhanced elimination techniques include:",
    "questionHi": "5-4-3-2-1 Grounding Technique क्या है?",
    "optionsEn": [
      "Only waiting",
      "Hemodialysis, multiple dose charcoal, urinary alkalinization",
      "Just rest",
      "Ignoring"
    ],
    "optionsHi": [
      "गिनती",
      "5 देखें, 4 छुएं, 3 सुनें, 2 सूंघें, 1 चखें (Senses)",
      "व्यायाम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Methods to speed poison removal from body.",
    "explanationHi": "Grounding using senses।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-610",
    "questionEn": "Delayed cerebral edema after drowning:",
    "questionHi": "Hyperventilation में क्या करें?",
    "optionsEn": [
      "Never occurs",
      "Can occur hours after apparent recovery",
      "Is immediate only",
      "Is beneficial"
    ],
    "optionsHi": [
      "तेज सांस लें",
      "धीमी और गहरी सांस लें, Reassure करें",
      "Paper Bag में सांस लें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Brain swelling can develop hours after hypoxic injury.",
    "explanationHi": "Slow breathing, reassure।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-611",
    "questionEn": "Generalized seizures affect:",
    "questionHi": "Paper Bag में सांस लेना अब Recommend क्यों नहीं है?",
    "optionsEn": [
      "One side of brain",
      "Both hemispheres from onset",
      "Only motor area",
      "Just one limb"
    ],
    "optionsHi": [
      "अच्छा है",
      "CO2 बढ़ने से खतरा, अन्य कारण हो सकते हैं",
      "हमेशा करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Generalized seizures involve both brain hemispheres simultaneously.",
    "explanationHi": "Risk of CO2 increase।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-612",
    "questionEn": "When team lifting, commands should come from:",
    "questionHi": "Acute Psychosis के लक्षण क्या हैं?",
    "optionsEn": [
      "Everyone speaking",
      "One designated leader (usually at head)",
      "The patient",
      "No commands needed"
    ],
    "optionsHi": [
      "सामान्य",
      "Hallucinations, Delusions, अजीब व्यवहार, भ्रम",
      "थकान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Single leader gives commands for coordinated movement.",
    "explanationHi": "Psychosis symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-613",
    "questionEn": "Return of spontaneous circulation (ROSC) is indicated by:",
    "questionHi": "Psychotic व्यक्ति से कैसे बात करें?",
    "optionsEn": [
      "No change",
      "Palpable pulse, breathing, movement, increasing ETCO2",
      "Patient death",
      "Continued CPR"
    ],
    "optionsHi": [
      "बहस करें",
      "शांत, स्पष्ट, सरल भाषा; Delusions को Challenge न करें",
      "चिल्लाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ROSC: heart restarts with effective circulation.",
    "explanationHi": "Calm, clear, don't argue。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-614",
    "questionEn": "Complete airway obstruction presents with:",
    "questionHi": "Agitated व्यक्ति को कैसे शांत करें?",
    "optionsEn": [
      "Loud coughing",
      "Silent distress, inability to speak or cough, cyanosis",
      "Normal breathing",
      "Snoring"
    ],
    "optionsHi": [
      "जबरदस्ती",
      "दूरी रखें, शांत स्वर, सुनें, Exit मार्ग रखें",
      "पास जाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Complete obstruction: no air movement, silent, may clutch throat.",
    "explanationHi": "Distance, calm voice, listen, exit。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-615",
    "questionEn": "Wound contamination increases risk of:",
    "questionHi": "De-escalation में क्या न करें?",
    "optionsEn": [
      "Faster healing",
      "Infection",
      "Better cosmesis",
      "Reduced scarring"
    ],
    "optionsHi": [
      "सुनें",
      "आंखों में लगातार न देखें, छूएं नहीं, Challenge न करें",
      "शांत रहें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Contaminated wounds have higher bacterial load and infection risk.",
    "explanationHi": "Avoid prolonged eye contact, touch।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-616",
    "questionEn": "Skin mottling in shock indicates:",
    "questionHi": "Violent Behavior में कब पुलिस बुलाएं?",
    "optionsEn": [
      "Normal finding",
      "Poor peripheral perfusion",
      "Overhydration",
      "Sunburn"
    ],
    "optionsHi": [
      "कभी नहीं",
      "खुद या दूसरों को खतरा हो",
      "हमेशा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mottled skin shows patchy areas of poor blood supply.",
    "explanationHi": "When danger to self or others।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-617",
    "questionEn": "Referred pain from a fracture may be felt:",
    "questionHi": "Alcohol Withdrawal के गंभीर लक्षण क्या हैं?",
    "optionsEn": [
      "Only at site",
      "At a site distant from actual injury",
      "Never occurs",
      "Always in chest"
    ],
    "optionsHi": [
      "सामान्य",
      "Seizures, Delirium Tremens, Hallucinations",
      "थोड़ी बेचैनी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pain can be referred along nerves to distant areas.",
    "explanationHi": "Severe withdrawal symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-618",
    "questionEn": "Burn contracture results from:",
    "questionHi": "Delirium Tremens (DT) कब होता है?",
    "optionsEn": [
      "Immediate complication",
      "Scar tissue shortening during healing",
      "Infection",
      "Cooling"
    ],
    "optionsHi": [
      "शराब पीने पर",
      "शराब बंद करने के 2-3 दिन बाद (Heavy Drinkers)",
      "तुरंत",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Contracture: scar tissue contracts limiting movement, especially over joints.",
    "explanationHi": "2-3 days after stopping alcohol।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-619",
    "questionEn": "Tetanus prophylaxis after bites depends on:",
    "questionHi": "Drug Overdose में क्या देखें?",
    "optionsEn": [
      "Animal type only",
      "Wound type and vaccination history",
      "Time of day",
      "Patient gender"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "चेतना, श्वास, पुतलियां, त्वचा का रंग, Injection Marks",
      "केवल चेतना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tetanus-prone wounds need consideration of vaccination status.",
    "explanationHi": "Assess consciousness, breathing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-620",
    "questionEn": "Aspiration pneumonitis from poisoning occurs when:",
    "questionHi": "Intoxicated व्यक्ति में Aspiration रोकने के लिए क्या करें?",
    "optionsEn": [
      "Patient coughs",
      "Gastric contents enter lungs (often during vomiting or altered consciousness)",
      "Poison is inhaled directly",
      "Patient recovers"
    ],
    "optionsHi": [
      "पीठ के बल",
      "Recovery Position (करवट)",
      "बैठाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Aspiration: stomach contents/vomit into lungs causes chemical pneumonitis.",
    "explanationHi": "Recovery position prevents aspiration।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-621",
    "questionEn": "AVPU scale measures:",
    "questionHi": "Psychological First Aid (PFA) क्या है?",
    "optionsEn": [
      "Breathing quality",
      "Level of consciousness",
      "Heart rate",
      "Blood pressure"
    ],
    "optionsHi": [
      "दवाई",
      "आपदा/आघात के बाद मानसिक सहायता",
      "केवल चिकित्सा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "AVPU: Alert, Voice responsive, Pain responsive, Unresponsive.",
    "explanationHi": "Mental support after trauma।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-622",
    "questionEn": "Cushingoid response (hypertension, bradycardia) suggests:",
    "questionHi": "PFA के मुख्य सिद्धांत क्या हैं?",
    "optionsEn": [
      "Dehydration",
      "Raised intracranial pressure",
      "Shock",
      "Normal finding"
    ],
    "optionsHi": [
      "उपदेश देना",
      "Look, Listen, Link (देखो, सुनो, जोड़ो)",
      "दवाई देना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cushing's triad: hypertension, bradycardia, irregular breathing = raised ICP.",
    "explanationHi": "Look, listen, link。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-623",
    "questionEn": "Proper documentation during transport includes:",
    "questionHi": "PFA में क्या नहीं करना चाहिए?",
    "optionsEn": [
      "Patient name only",
      "Time events, vital signs, interventions, changes in condition",
      "Nothing needed",
      "Only medications"
    ],
    "optionsHi": [
      "सुनना",
      "जबरदस्ती बात कराना, Promise करना जो न रख सकें, Judgement",
      "मदद करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Comprehensive documentation ensures continuity of care.",
    "explanationHi": "Don't force talk, judge。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-624",
    "questionEn": "Dispatcher-assisted CPR is:",
    "questionHi": "Critical Incident Stress Debriefing (CISD) क्या है?",
    "optionsEn": [
      "Professional-only CPR",
      "Phone instructions from emergency operator guiding bystander CPR",
      "No instructions needed",
      "Always available"
    ],
    "optionsHi": [
      "चिकित्सा",
      "आपदा के बाद समूह में अनुभव साझा करना (अब कम Recommended)",
      "व्यायाम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "DA-CPR: 108 operators provide real-time CPR instructions to callers.",
    "explanationHi": "Group debriefing after crisis।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-625",
    "questionEn": "Heimlich maneuver was renamed to:",
    "questionHi": "PTSD (Post-Traumatic Stress Disorder) के लक्षण क्या हैं?",
    "optionsEn": [
      "Chest compressions",
      "Abdominal thrusts",
      "Back blows",
      "CPR"
    ],
    "optionsHi": [
      "सामान्य",
      "Flashbacks, Nightmares, Avoidance, Hypervigilance",
      "खुशी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Now called abdominal thrusts; Heimlich is trademark term.",
    "explanationHi": "PTSD symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-626",
    "questionEn": "Petechiae are:",
    "questionHi": "Acute Stress Reaction कितने समय तक रहती है?",
    "optionsEn": [
      "Large bruises",
      "Tiny pinpoint hemorrhages under skin",
      "External bleeding",
      "Blood clots"
    ],
    "optionsHi": [
      "महीनों",
      "घटना के कुछ घंटों से 3 दिन तक (सामान्य)",
      "साल भर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Petechiae: small (<2mm) spots from capillary bleeding into skin.",
    "explanationHi": "Hours to 3 days।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-627",
    "questionEn": "Fluid challenge in shock assessment:",
    "questionHi": "Grief (शोक) में सहायता कैसे करें?",
    "optionsEn": [
      "Is never done",
      "Gives small fluid bolus and assesses response",
      "Uses only blood",
      "Causes harm"
    ],
    "optionsHi": [
      "भुला दें कहें",
      "उपस्थित रहें, सुनें, सामान्य Reactions को Validate करें",
      "जल्दी आगे बढ़ें कहें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fluid challenge tests volume responsiveness by assessing vital sign changes.",
    "explanationHi": "Be present, listen, validate।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-628",
    "questionEn": "Spiral fracture suggests:",
    "questionHi": "Complicated Grief क्या है?",
    "optionsEn": [
      "Direct blow",
      "Twisting or rotational force",
      "Compression",
      "Pathological cause"
    ],
    "optionsHi": [
      "सामान्य",
      "लंबे समय तक तीव्र शोक जो कार्यक्षमता प्रभावित करे",
      "थोड़ा दुख",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Spiral pattern indicates rotational mechanism of injury.",
    "explanationHi": "Prolonged intense grief।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-629",
    "questionEn": "Hypovolemia in burns results from:",
    "questionHi": "बच्चों में Trauma के बाद क्या देखें?",
    "optionsEn": [
      "Blood loss",
      "Fluid shifting out of circulation into tissues and lost through wound",
      "Vomiting",
      "Diarrhea"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Regression, Nightmares, Clinginess, School में समस्या",
      "केवल खुशी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Capillary leak causes massive fluid shifts in major burns.",
    "explanationHi": "Child trauma signs।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-630",
    "questionEn": "Envenomation syndrome helps determine:",
    "questionHi": "बच्चों को Trauma के बाद कैसे Support करें?",
    "optionsEn": [
      "Animal species",
      "Severity and type of venom effects",
      "Wound size only",
      "Time of bite"
    ],
    "optionsHi": [
      "उपेक्षा करें",
      "Routine बनाएं, Simple में समझाएं, Play Therapy, Reassurance",
      "अकेला छोड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clinical syndrome guides treatment decisions and antivenom need.",
    "explanationHi": "Routine, explain, play, reassure।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-631",
    "questionEn": "Oximes (pralidoxime/PAM) are used with atropine for:",
    "questionHi": "First Aider का Self-Care क्यों जरूरी है?",
    "optionsEn": [
      "Paracetamol",
      "Organophosphate poisoning - to reactivate cholinesterase",
      "Carbon monoxide",
      "Alcohol"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "Burnout और Secondary Trauma से बचाव",
      "केवल आराम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "PAM reactivates acetylcholinesterase if given before aging occurs.",
    "explanationHi": "Prevent burnout and secondary trauma।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-632",
    "questionEn": "Swim-fail-drown continuum describes:",
    "questionHi": "Compassion Fatigue क्या है?",
    "optionsEn": [
      "Teaching swimming",
      "Progressive phases from distress to drowning",
      "Pool design",
      "Rescue techniques"
    ],
    "optionsHi": [
      "थकान",
      "दूसरों की मदद करते-करते भावनात्मक थकान",
      "शारीरिक थकान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Describes progression from aquatic distress to drowning.",
    "explanationHi": "Emotional exhaustion from helping。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-633",
    "questionEn": "Non-convulsive status epilepticus may present as:",
    "questionHi": "Secondary Traumatic Stress क्या है?",
    "optionsEn": [
      "Obvious seizures",
      "Prolonged confusion or altered behavior without convulsions",
      "Normal state",
      "Coma only"
    ],
    "optionsHi": [
      "सीधा आघात",
      "दूसरों के Trauma से प्रभावित होना",
      "कोई प्रभाव नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "NCSE: ongoing seizure activity without obvious convulsions.",
    "explanationHi": "Affected by others' trauma。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-634",
    "questionEn": "Ambulance stretcher height should be adjustable for:",
    "questionHi": "First Aider में Burnout के लक्षण क्या हैं?",
    "optionsEn": [
      "Storage only",
      "Ease of loading and unloading at different heights",
      "Speed",
      "Comfort of driver"
    ],
    "optionsHi": [
      "Energy",
      "थकान, Cynicism, Detachment, कम Effectiveness",
      "खुशी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adjustable height reduces lifting strain and facilitates transfers.",
    "explanationHi": "Burnout symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-635",
    "questionEn": "Pediatric cardiac arrest is most commonly due to:",
    "questionHi": "Peer Support क्या है?",
    "optionsEn": [
      "Heart disease",
      "Respiratory failure/hypoxia",
      "Electrical problems",
      "Drug overdose"
    ],
    "optionsHi": [
      "अकेले",
      "समान अनुभव वाले साथियों से सहायता",
      "केवल डॉक्टर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Children usually arrest from respiratory causes, not primary cardiac.",
    "explanationHi": "Support from peers।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-636",
    "questionEn": "Bag-valve-mask ventilation requires:",
    "questionHi": "Animal Bite के अलावा कौन से Bites खतरनाक हैं?",
    "optionsEn": [
      "No training",
      "Training and often two rescuers for good seal",
      "One hand only",
      "No equipment"
    ],
    "optionsHi": [
      "कोई नहीं",
      "Human Bite, Insect Bite (Scorpion, Spider)",
      "केवल कुत्ते",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "BVM technique challenging; two-person technique (seal + squeeze) often more effective.",
    "explanationHi": "Human and insect bites dangerous。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-637",
    "questionEn": "Secondary survey bleeding assessment uses:",
    "questionHi": "Human Bite क्यों खतरनाक है?",
    "optionsEn": [
      "Only visual inspection",
      "Head-to-toe examination checking all areas",
      "X-ray only",
      "Ultrasound only"
    ],
    "optionsHi": [
      "खतरनाक नहीं",
      "मुंह में बहुत सारे Bacteria होते हैं (संक्रमण का खतरा)",
      "कम Bacteria",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Thorough examination to identify all bleeding sources.",
    "explanationHi": "High infection risk।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-638",
    "questionEn": "Vasopressors in shock:",
    "questionHi": "Human Bite में First Aid क्या है?",
    "optionsEn": [
      "Always first treatment",
      "Used when fluids insufficient to maintain perfusion",
      "Never needed",
      "Cause hypotension"
    ],
    "optionsHi": [
      "छोड़ दें",
      "साबुन और पानी से धोएं, Antiseptic, अस्पताल",
      "केवल Bandage",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vasopressors used when volume replacement doesn't restore adequate BP.",
    "explanationHi": "Wash, antiseptic, hospital।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-639",
    "questionEn": "Buckle (torus) fracture occurs in:",
    "questionHi": "Cat Bite में क्या विशेष खतरा है?",
    "optionsEn": [
      "Adults commonly",
      "Children - compression causing bulge without complete break",
      "Only elderly",
      "Pathological bones"
    ],
    "optionsHi": [
      "कोई नहीं",
      "गहरे Puncture Wounds - संक्रमण अधिक",
      "कम खतरा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Torus: compression fracture in children with buckled cortex.",
    "explanationHi": "Deep punctures, high infection।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-640",
    "questionEn": "Infection is the leading cause of death in burn patients after:",
    "questionHi": "Scorpion Sting में क्या करें?",
    "optionsEn": [
      "Day 1",
      "Initial resuscitation period (after 3-5 days)",
      "Immediately",
      "Never"
    ],
    "optionsHi": [
      "काटें",
      "बर्फ लगाएं, Pain Relief, अस्पताल (गंभीर हो तो Antivenom)",
      "गर्म करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Infection becomes main threat after surviving initial phase.",
    "explanationHi": "Ice, pain relief, hospital。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-641",
    "questionEn": "Equine-derived antivenoms carry risk of:",
    "questionHi": "भारत में सबसे खतरनाक Scorpion कौन सा है?",
    "optionsEn": [
      "No reactions",
      "Allergic reactions and serum sickness",
      "Cancer",
      "Dehydration"
    ],
    "optionsHi": [
      "काला बिच्छू",
      "Red Scorpion (Mesobuthus tamulus)",
      "छोटा बिच्छू",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Animal proteins can cause immediate or delayed allergic reactions.",
    "explanationHi": "Red scorpion most dangerous।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-642",
    "questionEn": "Toxicological screening (drug screen) limitations include:",
    "questionHi": "Spider Bite में Red Flags क्या हैं?",
    "optionsEn": [
      "100% accurate",
      "May miss synthetic drugs, time-consuming, false positives",
      "Always necessary",
      "Detects all substances"
    ],
    "optionsHi": [
      "सामान्य",
      "गंभीर दर्द, Spreading Redness, Fever, Muscle Cramps",
      "केवल खुजली",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Drug screens have limitations; clinical assessment remains important.",
    "explanationHi": "Spider bite red flags।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-643",
    "questionEn": "Neurological outcome after drowning correlates best with:",
    "questionHi": "Tick Bite में Tick कैसे निकालें?",
    "optionsEn": [
      "Water type",
      "Duration of submersion and time to effective CPR",
      "Season",
      "Location"
    ],
    "optionsHi": [
      "खींचें",
      "Fine-tipped Tweezers से सीधा, धीरे खींचें",
      "मोड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Time underwater and speed of resuscitation are key outcome predictors.",
    "explanationHi": "Tweezers, pull straight out。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-644",
    "questionEn": "ECG during heart attack shows:",
    "questionHi": "Tick Bite में क्या नहीं करना चाहिए?",
    "optionsEn": [
      "Always normal",
      "ST changes, T wave abnormalities, Q waves",
      "Only P waves",
      "Flat line"
    ],
    "optionsHi": [
      "Tweezers उपयोग",
      "मोड़ना, जलाना, Petroleum Jelly लगाना",
      "धोना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MI causes characteristic ECG changes reflecting myocardial injury.",
    "explanationHi": "Don't twist, burn, or apply jelly।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-645",
    "questionEn": "Securing airways during transport requires:",
    "questionHi": "Leech Bite में Leech कैसे निकालें?",
    "optionsEn": [
      "No intervention",
      "Continuous monitoring and ability to intervene",
      "Once secured always secure",
      "Driver responsibility"
    ],
    "optionsHi": [
      "खींचें",
      "नमक/तंबाकू छिड़कें या Fingernail से धीरे हटाएं",
      "जलाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Airway can change during transport; continuous vigilance needed.",
    "explanationHi": "Salt or gently remove。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-646",
    "questionEn": "Neonatal resuscitation differs from infant CPR in:",
    "questionHi": "Jellyfish Sting में क्या करें?",
    "optionsEn": [
      "No differences",
      "Emphasis on airway/breathing, 3:1 ratio for newborn",
      "Only chest compressions",
      "No CPR needed"
    ],
    "optionsHi": [
      "मीठे पानी से धोएं",
      "सिरका (Vinegar) डालें, Tentacles हटाएं, गर्म पानी",
      "रगड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Newborn resuscitation: 3:1 ratio, focus on ventilation for asphyxiated newborn.",
    "explanationHi": "Vinegar, remove tentacles, hot water。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-647",
    "questionEn": "Angioedema causes airway emergency due to:",
    "questionHi": "Jellyfish Sting में मीठा पानी क्यों नहीं?",
    "optionsEn": [
      "Mucus",
      "Rapid swelling of airway tissues",
      "Bleeding",
      "Infection"
    ],
    "optionsHi": [
      "अच्छा है",
      "Nematocysts से और जहर निकलता है",
      "कोई कारण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Angioedema: swelling of deep skin/mucosal layers can obstruct airway.",
    "explanationHi": "Fresh water triggers more venom。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-648",
    "questionEn": "Junctional hemorrhage (groin, axilla, neck) is difficult to control because:",
    "questionHi": "Sea Urchin Spine चुभने पर क्या करें?",
    "optionsEn": [
      "Less blood vessels",
      "Can't apply tourniquet and hard to compress against bone",
      "Always minimal",
      "Clots easily"
    ],
    "optionsHi": [
      "खींचें",
      "गर्म पानी में भिगोएं, बड़े Spines निकालें, अस्पताल",
      "ठंडा पानी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Junctional areas: no bone to compress against, tourniquet not possible.",
    "explanationHi": "Hot water, remove large spines。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-649",
    "questionEn": "ScvO2 (central venous oxygen saturation) measures:",
    "questionHi": "Stingray Injury में क्या करें?",
    "optionsEn": [
      "Blood pressure",
      "Oxygen consumption relative to delivery",
      "Breathing rate",
      "Heart rate"
    ],
    "optionsHi": [
      "ठंडा करें",
      "गर्म पानी (45°C), Barb निकालें (संभव हो तो), Bleeding Control",
      "बर्फ लगाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ScvO2 reflects balance between oxygen delivery and consumption.",
    "explanationHi": "Hot water, remove barb if possible。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-650",
    "questionEn": "Neurovascular status should be checked:",
    "questionHi": "Marine Envenomation में Hot Water क्यों?",
    "optionsEn": [
      "Only once",
      "Before and after splinting, during transport",
      "Never",
      "Only in hospital"
    ],
    "optionsHi": [
      "ठंडा होना चाहिए",
      "गर्मी से Venom Proteins Denature होते हैं",
      "कोई कारण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Regular checks detect developing complications early.",
    "explanationHi": "Heat denatures venom proteins。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-651",
    "questionEn": "Keloid scarring after burns is:",
    "questionHi": "Foreign Body in Throat में क्या करें?",
    "optionsEn": [
      "Normal healing",
      "Excessive scar tissue extending beyond original wound",
      "No scarring",
      "Infection sign"
    ],
    "optionsHi": [
      "पानी पिलाएं",
      "खांसने दें, Heimlich Maneuver (Complete Block हो तो)",
      "थपथपाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Keloids: raised scars extending beyond original injury boundaries.",
    "explanationHi": "Let cough, Heimlich if blocked。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-652",
    "questionEn": "Local effects of viper bites include:",
    "questionHi": "Fish Bone फंसने पर क्या करें?",
    "optionsEn": [
      "No local signs",
      "Severe pain, swelling, blistering, necrosis",
      "Only numbness",
      "Blue color"
    ],
    "optionsHi": [
      "निगलें",
      "खांसने दें, दिखे तो Tweezers से, अन्यथा ENT जाएं",
      "रोटी खाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Viper venom causes significant local tissue destruction.",
    "explanationHi": "Cough, tweezers if visible, ENT。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-653",
    "questionEn": "Lithium toxicity presents with:",
    "questionHi": "Swallowed Battery क्यों खतरनाक है?",
    "optionsEn": [
      "No symptoms",
      "Tremor, confusion, ataxia, seizures",
      "Only skin rash",
      "Fever"
    ],
    "optionsHi": [
      "खतरनाक नहीं",
      "Tissue Burns, Perforation (विशेषकर Button Battery)",
      "पेट में घुल जाती है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lithium toxicity: neurological symptoms, can be severe.",
    "explanationHi": "Button batteries cause burns。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-654",
    "questionEn": "ARDS (acute respiratory distress syndrome) after drowning:",
    "questionHi": "Button Battery निगलने पर क्या करें?",
    "optionsEn": [
      "Never occurs",
      "Can develop from lung inflammation",
      "Is immediate",
      "Improves breathing"
    ],
    "optionsHi": [
      "इंतजार करें",
      "तुरंत अस्पताल (X-Ray, Removal)",
      "पानी पिलाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ARDS: severe lung inflammation causing respiratory failure.",
    "explanationHi": "Immediate hospital visit。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-655",
    "questionEn": "Cardiac arrest rhythm shockable by AED includes:",
    "questionHi": "Button Battery निगलने पर शहद क्यों देते हैं?",
    "optionsEn": [
      "Asystole",
      "VF and pulseless VT",
      "All rhythms",
      "Sinus rhythm"
    ],
    "optionsHi": [
      "कोई कारण नहीं",
      "Battery के आसपास Protective Layer, Injury कम (2+ साल के बच्चे)",
      "स्वाद के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "AED shocks ventricular fibrillation and pulseless ventricular tachycardia.",
    "explanationHi": "Honey protects tissue。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-656",
    "questionEn": "Vertical extrication is used when:",
    "questionHi": "Swallowed Magnet क्यों खतरनाक है?",
    "optionsEn": [
      "Standard exit available",
      "Patient must be removed through confined space (well, trench)",
      "Always preferred",
      "Only in water"
    ],
    "optionsHi": [
      "खतरनाक नहीं",
      "Multiple Magnets आंतों को खींचकर Perforation कर सकते हैं",
      "एक ठीक है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vertical extrication: specialized rescue from vertical confined spaces.",
    "explanationHi": "Multiple magnets cause perforation。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-657",
    "questionEn": "Survival rate drops approximately 10% for every minute without:",
    "questionHi": "Sharp Object (कील, Pin) निगलने पर क्या करें?",
    "optionsEn": [
      "Hospital care",
      "CPR and defibrillation",
      "Water",
      "Oxygen mask"
    ],
    "optionsHi": [
      "रोटी खाएं",
      "तुरंत अस्पताल (X-Ray), उल्टी न कराएं",
      "पानी पिएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Each minute of VF without treatment reduces survival ~10%.",
    "explanationHi": "Hospital for X-ray, don't induce vomiting。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-658",
    "questionEn": "Two-thumb encircling technique for infant CPR:",
    "questionHi": "Rectal Foreign Body में क्या करें?",
    "optionsEn": [
      "For breathing",
      "Preferred compression method for 2-rescuer infant CPR",
      "Never used",
      "Only for adults"
    ],
    "optionsHi": [
      "खुद निकालें",
      "अस्पताल जाएं (Specialist Removal)",
      "छोड़ दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Two thumbs on sternum, hands encircling chest - superior technique.",
    "explanationHi": "Hospital for removal。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-659",
    "questionEn": "Pelvic binders are used to:",
    "questionHi": "Vaginal Foreign Body (बच्चों में) में क्या करें?",
    "optionsEn": [
      "Hold pants up",
      "Stabilize and reduce bleeding in pelvic fractures",
      "Splint legs",
      "Support back"
    ],
    "optionsHi": [
      "जबरदस्ती निकालें",
      "गर्म पानी में बैठाएं, दिखे तो धीरे निकालें, Gynecologist जाएं",
      "छोड़ दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pelvic binder reduces pelvic volume and tamponades bleeding.",
    "explanationHi": "Sitz bath, gentle removal, specialist。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-660",
    "questionEn": "Target-directed resuscitation aims for:",
    "questionHi": "Child Safety - Hot Water Burns से बचाव?",
    "optionsEn": [
      "No targets",
      "Specific endpoints (BP, lactate, urine output)",
      "Maximum fluids always",
      "Minimal intervention"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Geyser Temperature <50°C, बच्चों की पहुंच से दूर",
      "कोई सावधानी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Goal-directed therapy uses measurable targets to guide resuscitation.",
    "explanationHi": "Water heater below 50°C。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-661",
    "questionEn": "Hangman's fracture involves:",
    "questionHi": "Window Falls से बचाव?",
    "optionsEn": [
      "Fingers",
      "C2 vertebra (axis) fracture",
      "Ankle",
      "Wrist"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Window Guards, Furniture को खिड़की से दूर",
      "खुला रखें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hangman's fracture: bilateral C2 pedicle fracture.",
    "explanationHi": "Window guards, move furniture。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-662",
    "questionEn": "Burn team for major burns ideally includes:",
    "questionHi": "Furniture Tip-Over से बचाव?",
    "optionsEn": [
      "One person",
      "Multidisciplinary team (surgeon, nurse, PT, OT, psychologist)",
      "Only doctor",
      "Only nurse"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Heavy Furniture को Wall से Anchor करें",
      "खुला रखें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Major burns need comprehensive team for physical and psychological care.",
    "explanationHi": "Anchor furniture to wall。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-663",
    "questionEn": "Black widow spider bites cause:",
    "questionHi": "Medicine Safety बच्चों के लिए?",
    "optionsEn": [
      "Local necrosis",
      "Systemic symptoms: muscle cramps, hypertension, autonomic effects",
      "No symptoms",
      "Only itching"
    ],
    "optionsHi": [
      "खुला रखें",
      "Child-Resistant Caps, ताले में रखें, Medicine को Candy न कहें",
      "कहीं भी रखें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Black widow: neurotoxic venom causing systemic effects (latrodectism).",
    "explanationHi": "Locked, child-resistant, don't call candy。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-664",
    "questionEn": "Mushroom poisoning can cause delayed liver failure from:",
    "questionHi": "Pool Safety में Fence की ऊंचाई कितनी हो?",
    "optionsEn": [
      "All mushrooms",
      "Amatoxin-containing species (Amanita)",
      "Only cooking",
      "Allergic reaction"
    ],
    "optionsHi": [
      "कोई जरूरत नहीं",
      "कम से कम 4 फीट, Self-Closing Gate",
      "2 फीट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Amatoxins cause delayed hepatotoxicity, often fatal.",
    "explanationHi": "At least 4 feet with gate।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-665",
    "questionEn": "Therapeutic hypothermia after cardiac arrest from drowning:",
    "questionHi": "Car Seat Safety - Rear-Facing कब तक?",
    "optionsEn": [
      "Contraindicated",
      "May be beneficial to protect brain",
      "Warms patient",
      "Not studied"
    ],
    "optionsHi": [
      "1 साल",
      "कम से कम 2 साल या Weight Limit तक",
      "6 महीने",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Targeted temperature management may improve neurological outcomes.",
    "explanationHi": "Rear-facing until 2 years。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-666",
    "questionEn": "Blood glucose should be checked in:",
    "questionHi": "Hot Car में बच्चों की मृत्यु से बचाव?",
    "optionsEn": [
      "Only diabetics",
      "All altered consciousness patients",
      "No one",
      "Only children"
    ],
    "optionsHi": [
      "खिड़की खोलें",
      "कभी अकेला न छोड़ें, गाड़ी Lock करें, 'Look Before You Lock'",
      "थोड़ी देर ठीक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hypoglycemia mimics many conditions; easily treatable if identified.",
    "explanationHi": "Never leave child alone in car。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-667",
    "questionEn": "Mass casualty incident (MCI) changes priorities to:",
    "questionHi": "Choking Prevention बच्चों में?",
    "optionsEn": [
      "Treat all equally",
      "Maximize survivors with available resources (triage)",
      "Treat most injured first",
      "Wait for help"
    ],
    "optionsHi": [
      "कुछ भी खिलाएं",
      "छोटी वस्तुएं दूर, Grapes/Hot Dogs काटें, खाते समय बैठाएं",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MCI: shift from individual care to greatest good for greatest number.",
    "explanationHi": "Small objects away, cut food, sit while eating。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-668",
    "questionEn": "Post-cardiac arrest care includes:",
    "questionHi": "बच्चों में Choking का सबसे आम कारण?",
    "optionsEn": [
      "No further treatment",
      "Targeted temperature management, hemodynamic optimization, neuroprotection",
      "Just rest",
      "Discharge immediately"
    ],
    "optionsHi": [
      "पानी",
      "खिलौने, Coins, Grapes, Nuts, Balloons, Hot Dogs",
      "कपड़े",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Post-arrest care critical for survival and neurological recovery.",
    "explanationHi": "Common choking hazards।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-669",
    "questionEn": "Cricothyrotomy is:",
    "questionHi": "Balloon बच्चों के लिए क्यों खतरनाक?",
    "optionsEn": [
      "First-line airway",
      "Emergency surgical airway when other methods fail",
      "For children",
      "Never used"
    ],
    "optionsHi": [
      "खतरनाक नहीं",
      "Latex Balloon फटकर गले में फंस सकता है (Suffocation)",
      "केवल Allergy",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cricothyrotomy: last-resort surgical airway through cricothyroid membrane.",
    "explanationHi": "Burst balloon can block airway。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-670",
    "questionEn": "Tranexamic acid (TXA) is given to:",
    "questionHi": "Safe Sleep (SIDS Prevention) के नियम?",
    "optionsEn": [
      "Stop infection",
      "Reduce bleeding by inhibiting clot breakdown",
      "Replace blood",
      "Cause clots"
    ],
    "optionsHi": [
      "Soft Bedding",
      "Back to Sleep, Firm Surface, No Soft Items, Room Sharing",
      "Prone Position",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "TXA is antifibrinolytic - prevents clot dissolution.",
    "explanationHi": "Safe sleep guidelines。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-671",
    "questionEn": "Massive transfusion protocol is activated for:",
    "questionHi": "MPHW First Aid के लिए Community Training क्यों जरूरी है?",
    "optionsEn": [
      "Minor bleeding",
      "Life-threatening hemorrhage requiring multiple blood products",
      "All emergencies",
      "Dehydration"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "अस्पताल दूर, First Response Important, Lives Saved",
      "केवल Doctors",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MTP: rapid delivery of blood products for severe hemorrhage.",
    "explanationHi": "Community training saves lives。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-672",
    "questionEn": "Jefferson fracture involves:",
    "questionHi": "Village Health Day पर First Aid Training कैसे दें?",
    "optionsEn": [
      "Lumbar spine",
      "C1 (atlas) burst fracture",
      "Femur",
      "Skull"
    ],
    "optionsHi": [
      "Lecture Only",
      "Demonstration, Practice, Role Play, Posters, Local Language",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Jefferson fracture: C1 vertebra fracture from axial loading.",
    "explanationHi": "Interactive training methods。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-673",
    "questionEn": "Burn rehabilitation starts:",
    "questionHi": "ASHA Workers को कौन सी First Aid सिखाएं?",
    "optionsEn": [
      "After healing complete",
      "As early as possible to prevent contractures",
      "Never needed",
      "Only for large burns"
    ],
    "optionsHi": [
      "Surgery",
      "Bleeding Control, Burns, Choking, Newborn Care, Referral",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Early rehabilitation crucial to maintain function and prevent complications.",
    "explanationHi": "Basic first aid for ASHAs。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-674",
    "questionEn": "Africanized (killer) bees are dangerous because:",
    "questionHi": "School Health Program में First Aid क्या सिखाएं?",
    "optionsEn": [
      "More venomous",
      "Attack in large numbers causing massive envenomation",
      "Always fatal",
      "Found everywhere"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Wounds, Burns, Fainting, Choking, Emergency Numbers",
      "Surgery",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Danger is from cumulative venom from mass stinging, not individual venom potency.",
    "explanationHi": "Basic first aid for schools。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-675",
    "questionEn": "Body packers (drug smugglers) require:",
    "questionHi": "First Aid Training में Hands-On Practice क्यों जरूरी है?",
    "optionsEn": [
      "No treatment",
      "Close monitoring, surgical removal if rupture",
      "Only laxatives",
      "Immediate surgery always"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "Skill Development, Confidence Building, Muscle Memory",
      "केवल Theory",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Drug packet rupture causes massive overdose; requires monitoring and possible surgery.",
    "explanationHi": "Practice builds skills and confidence。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-676",
    "questionEn": "Laryngeal mask airway (LMA) in drowning:",
    "questionHi": "CPR Manikin का क्या उपयोग है?",
    "optionsEn": [
      "Preferred device",
      "Alternative airway when intubation not possible",
      "Never used",
      "For transport only"
    ],
    "optionsHi": [
      "सजावट",
      "CPR Practice के लिए (Realistic Training)",
      "खेलना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "LMA: supraglottic device for airway management when intubation difficult.",
    "explanationHi": "For realistic CPR practice।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-677",
    "questionEn": "Door-to-balloon time for heart attack refers to:",
    "questionHi": "First Aid Refresher Training कितने समय में लें?",
    "optionsEn": [
      "Waiting room time",
      "Time from hospital arrival to opening blocked artery",
      "Discharge time",
      "Arrival time"
    ],
    "optionsHi": [
      "कभी नहीं",
      "हर 2-3 साल में (या नई Guidelines आने पर)",
      "10 साल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "D2B: quality metric for STEMI treatment - target <90 minutes.",
    "explanationHi": "Every 2-3 years।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-678",
    "questionEn": "Incident command system in emergencies:",
    "questionHi": "First Aid Training में Scenario-Based Learning क्या है?",
    "optionsEn": [
      "Is informal",
      "Provides organized structure for managing scene and resources",
      "Not needed",
      "Only for police"
    ],
    "optionsHi": [
      "Book पढ़ना",
      "Real-Life जैसी स्थितियों में Practice (Simulation)",
      "केवल Lecture",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ICS: standardized approach to command, control, coordination.",
    "explanationHi": "Practice in realistic scenarios。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-679",
    "questionEn": "The 'push hard, push fast' mantra for CPR reminds rescuers to:",
    "questionHi": "Mass Casualty Incident (MCI) क्या है?",
    "optionsEn": [
      "Push gently",
      "Maintain adequate compression depth and rate",
      "Push slowly",
      "Not push at all"
    ],
    "optionsHi": [
      "एक व्यक्ति",
      "बड़ी संख्या में घायल (Resources से अधिक)",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Compression quality critical - adequate depth (5-6cm) and rate (100-120/min).",
    "explanationHi": "Many casualties overwhelming resources。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-680",
    "questionEn": "Head-tilt chin-lift position for child is:",
    "questionHi": "MCI में Triage का क्या महत्व है?",
    "optionsEn": [
      "Maximum extension",
      "Neutral to slightly extended",
      "Flexed",
      "Turned to side"
    ],
    "optionsHi": [
      "कोई नहीं",
      "सीमित Resources का अधिकतम उपयोग, सबसे अधिक बचाव",
      "सब को समान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Children need less extension than adults; neutral to slight extension optimal.",
    "explanationHi": "Maximize lives saved with limited resources。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-681",
    "questionEn": "Fibrin sealants work by:",
    "questionHi": "START Triage में कितने Categories हैं?",
    "optionsEn": [
      "Absorbing blood",
      "Promoting clot formation at wound site",
      "Causing vasoconstriction",
      "Cooling wound"
    ],
    "optionsHi": [
      "2",
      "4 (Red, Yellow, Green, Black)",
      "3",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fibrin sealants contain clotting factors that promote hemostasis.",
    "explanationHi": "4 START triage categories।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-682",
    "questionEn": "Point-of-care lactate testing helps:",
    "questionHi": "START Triage में RPM क्या है?",
    "optionsEn": [
      "Diagnose diabetes",
      "Assess shock severity and response to treatment",
      "Measure oxygen",
      "Check blood type"
    ],
    "optionsHi": [
      "गति",
      "Respiration, Perfusion, Mental Status",
      "दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Serial lactate guides resuscitation and indicates tissue perfusion.",
    "explanationHi": "RPM assessment in START。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-683",
    "questionEn": "Chance fracture (seat belt fracture) involves:",
    "questionHi": "JumpSTART Triage किसके लिए है?",
    "optionsEn": [
      "Skull",
      "Lumbar spine from flexion-distraction",
      "Wrist",
      "Ankle"
    ],
    "optionsHi": [
      "वयस्क",
      "बच्चों के लिए (Pediatric)",
      "बुजुर्ग",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chance fracture: spine injury from lap belt in crash.",
    "explanationHi": "JumpSTART for children。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-684",
    "questionEn": "Pain management in burns is:",
    "questionHi": "SALT Triage का Full Form क्या है?",
    "optionsEn": [
      "Not important",
      "Essential and often requires opioids",
      "Only for large burns",
      "Causes harm"
    ],
    "optionsHi": [
      "नमक",
      "Sort, Assess, Lifesaving Interventions, Treatment/Transport",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Burns are extremely painful; adequate analgesia is crucial.",
    "explanationHi": "SALT triage method。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-685",
    "questionEn": "Fire ant stings cause:",
    "questionHi": "Disaster Medical Assistance Team (DMAT) क्या है?",
    "optionsEn": [
      "No reaction",
      "Painful papules that develop into pustules",
      "Immediate anaphylaxis always",
      "Blue marks"
    ],
    "optionsHi": [
      "सामान्य Team",
      "आपदा में Medical Response Team",
      "केवल Doctor",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fire ant stings: initial wheal, then characteristic sterile pustules.",
    "explanationHi": "Disaster medical response team。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-686",
    "questionEn": "QT prolongation from drug overdose increases risk of:",
    "questionHi": "Mobile Medical Unit (MMU) का क्या उपयोग है?",
    "optionsEn": [
      "Bradycardia",
      "Torsades de pointes (dangerous arrhythmia)",
      "High blood pressure",
      "Seizures only"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "दुर्गम क्षेत्रों/आपदा में Medical Services",
      "केवल शहर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Long QT predisposes to torsades de pointes - can cause sudden death.",
    "explanationHi": "Medical services in remote/disaster areas。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-687",
    "questionEn": "Electrolyte abnormalities after drowning are:",
    "questionHi": "Field Hospital क्या है?",
    "optionsEn": [
      "Always severe",
      "Usually not clinically significant unless prolonged submersion",
      "Never occur",
      "Main cause of death"
    ],
    "optionsHi": [
      "Building",
      "आपदा/युद्ध में अस्थायी अस्पताल",
      "PHC",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Electrolyte changes occur but are rarely the primary problem.",
    "explanationHi": "Temporary hospital in disasters。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-688",
    "questionEn": "Levetiracetam is used for:",
    "questionHi": "ICS (Incident Command System) क्या है?",
    "optionsEn": [
      "Heart attack",
      "Seizure control",
      "Asthma",
      "Diabetes"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "आपदा प्रबंधन के लिए Standardized Structure",
      "केवल Police",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Levetiracetam: newer antiepileptic medication.",
    "explanationHi": "Standardized disaster management。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-689",
    "questionEn": "Hot zone in hazmat incident is:",
    "questionHi": "Medical Branch ICS में क्या करती है?",
    "optionsEn": [
      "Safe area",
      "Contaminated area requiring specialized protection",
      "Treatment area",
      "Command post"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Triage, Treatment, Transport Coordination",
      "केवल Transport",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hot zone: immediate danger area requiring appropriate PPE.",
    "explanationHi": "Medical operations in ICS。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-690",
    "questionEn": "Drowning resuscitation should continue for longer because:",
    "questionHi": "Surge Capacity क्या है?",
    "optionsEn": [
      "Easier CPR",
      "Cold water may protect brain; survival reported after prolonged submersion",
      "Always recover",
      "Standard time sufficient"
    ],
    "optionsHi": [
      "सामान्य",
      "आपातकाल में अतिरिक्त रोगियों को संभालने की क्षमता",
      "कम क्षमता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hypothermia may be neuroprotective; extended resuscitation attempts reasonable.",
    "explanationHi": "Capacity to handle more patients。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-691",
    "questionEn": "Damage control resuscitation includes:",
    "questionHi": "Evacuation Plan में क्या शामिल हो?",
    "optionsEn": [
      "Normal surgery",
      "Permissive hypotension, hemostatic resuscitation, damage control surgery",
      "Wait and see",
      "Fluids only"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Routes, Assembly Points, Special Needs, Communication",
      "केवल भागना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "DCR: balanced approach to severe hemorrhage control.",
    "explanationHi": "Evacuation plan components。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-692",
    "questionEn": "Point of care ultrasound (POCUS) in shock helps identify:",
    "questionHi": "Shelter-in-Place कब करें?",
    "optionsEn": [
      "Nothing",
      "Tamponade, pneumothorax, volume status, cardiac function",
      "Fractures only",
      "Burns"
    ],
    "optionsHi": [
      "हमेशा निकलें",
      "बाहर खतरा (Chemical, Radiation) हो तो अंदर रहें",
      "कभी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "POCUS: rapid bedside assessment of shock etiology.",
    "explanationHi": "Stay inside when outside danger。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-693",
    "questionEn": "Bankart lesion is associated with:",
    "questionHi": "Emergency Go-Bag में क्या हो?",
    "optionsEn": [
      "Knee injury",
      "Shoulder dislocation",
      "Ankle sprain",
      "Wrist fracture"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Water, Food, First Aid, Documents, Medications, Flashlight",
      "केवल पैसे",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Bankart: labral tear from anterior shoulder dislocation.",
    "explanationHi": "Emergency bag contents。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-694",
    "questionEn": "Debridement of burn wounds is performed to:",
    "questionHi": "Family Emergency Plan में क्या शामिल हो?",
    "optionsEn": [
      "Increase infection",
      "Remove dead tissue and promote healing",
      "Cause pain",
      "Cover wound"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Meeting Points, Emergency Contacts, Special Needs, Responsibilities",
      "केवल Phone Number",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Debridement removes eschar and devitalized tissue.",
    "explanationHi": "Family plan components。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-695",
    "questionEn": "Kawasaki disease in children can cause:",
    "questionHi": "NDMA का Full Form क्या है?",
    "optionsEn": [
      "Skin problems only",
      "Coronary artery aneurysms",
      "Bone problems",
      "No heart effects"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "National Disaster Management Authority",
      "National Defense",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Kawasaki disease: vasculitis that can affect coronary arteries.",
    "explanationHi": "National Disaster Management Authority。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-696",
    "questionEn": "What is the antidote for opioid overdose?",
    "questionHi": "NDRF का क्या कार्य है?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "आपदा में Search & Rescue, Medical Aid",
      "केवल Army",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Disaster response force।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-697",
    "questionEn": "How many initial rescue breaths should be given to a drowning victim before starting chest compressions?",
    "questionHi": "Community-Based Disaster Risk Reduction (CBDRR) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "सरकारी काम",
      "समुदाय स्तर पर आपदा जोखिम कम करना",
      "केवल शहरी",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Community-level risk reduction。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-698",
    "questionEn": "What does the 'T' in FAST stroke assessment stand for?",
    "questionHi": "Mock Drill का क्या उद्देश्य है?",
    "optionsEn": [],
    "optionsHi": [
      "खेल",
      "Emergency Response Practice, Gaps पहचानना",
      "समय बर्बाद",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Practice and identify gaps。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-699",
    "questionEn": "A 5-year-old child is stung by a bee and develops widespread hives, facial swelling, and difficulty breathing. What is happening and what is your emergency treatment?",
    "questionHi": "After Action Review (AAR) क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "Emergency के बाद क्या अच्छा/बुरा हुआ का विश्लेषण",
      "केवल Report",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Review after emergency。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-700",
    "questionEn": "You arrive at a road accident where a motorcyclist is lying unconscious on the road. He has a helmet on. How do you assess and what precautions do you take?",
    "questionHi": "First Aid का Final Goal क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "इलाज करना",
      "जीवन बचाना, स्थिति बिगड़ने से रोकना, Recovery में मदद",
      "केवल देखना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Preserve life, prevent worsening, promote recovery。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-701",
    "questionEn": "Before providing first aid, you should always:",
    "questionHi": "Vital Signs क्या हैं?",
    "optionsEn": [
      "Start treatment immediately",
      "Check for danger to yourself and others",
      "Call for help only",
      "Move the patient first"
    ],
    "optionsHi": [
      "केवल नाड़ी",
      "Pulse, BP, Temperature, Respiratory Rate (+ SpO2, Pain)",
      "केवल तापमान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Scene safety is the first priority in any emergency situation.",
    "explanationHi": "Basic vital signs।",
    "difficulty": "easy",
    "topic": "first-aid",
    "subtopic": "Principles",
    "tags": [
      "principles"
    ]
  },
  {
    "id": "FIRST-AID-702",
    "questionEn": "When using an AED, you should:",
    "questionHi": "वयस्क में सामान्य Pulse Rate क्या है?",
    "optionsEn": [
      "Keep doing CPR during shock",
      "Clear everyone and stop CPR before pressing shock",
      "Never use AED",
      "Use only on children"
    ],
    "optionsHi": [
      "120-150",
      "60-100 प्रति मिनट",
      "40-50",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Everyone must be clear of patient during shock delivery.",
    "explanationHi": "Normal adult pulse rate।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-703",
    "questionEn": "Signs of adequate ventilation include:",
    "questionHi": "Pulse कहां जांचें?",
    "optionsEn": [
      "Blue skin",
      "Visible chest rise with each breath",
      "No air movement",
      "Gastric distension"
    ],
    "optionsHi": [
      "कहीं भी",
      "Radial (कलाई), Carotid (गर्दन), Brachial (बच्चों में)",
      "केवल छाती",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Chest rise indicates air is entering lungs.",
    "explanationHi": "Pulse check locations।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-704",
    "questionEn": "Tourniquet should be placed:",
    "questionHi": "Tachycardia क्या है?",
    "optionsEn": [
      "Over the wound",
      "Below the wound",
      "2-3 inches above wound, not over joint",
      "On the neck"
    ],
    "optionsHi": [
      "धीमी धड़कन",
      "तेज धड़कन (>100/min)",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Tourniquet proximal to wound, avoiding joints for effective compression.",
    "explanationHi": "Fast heart rate।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-705",
    "questionEn": "Delayed capillary refill time indicates:",
    "questionHi": "Bradycardia क्या है?",
    "optionsEn": [
      "Normal circulation",
      "Poor peripheral perfusion",
      "Excellent blood flow",
      "Fever"
    ],
    "optionsHi": [
      "तेज धड़कन",
      "धीमी धड़कन (<60/min)",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cap refill >2 seconds suggests inadequate peripheral circulation.",
    "explanationHi": "Slow heart rate।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-706",
    "questionEn": "Point tenderness over bone suggests:",
    "questionHi": "वयस्क में सामान्य Respiratory Rate क्या है?",
    "optionsEn": [
      "Muscle strain only",
      "Possible fracture at that location",
      "Normal finding",
      "Infection"
    ],
    "optionsHi": [
      "30-40",
      "12-20 प्रति मिनट",
      "5-10",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Localized bony tenderness is suspicious for fracture.",
    "explanationHi": "Normal adult respiratory rate।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-707",
    "questionEn": "Eschar is:",
    "questionHi": "Tachypnea क्या है?",
    "optionsEn": [
      "Normal skin",
      "Thick, leathery dead tissue from full thickness burn",
      "Blister fluid",
      "Healing tissue"
    ],
    "optionsHi": [
      "धीमी सांस",
      "तेज सांस (>20/min)",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Eschar: dead tissue forming after full thickness burn.",
    "explanationHi": "Fast breathing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-708",
    "questionEn": "First aid for suspected snake bite includes:",
    "questionHi": "Bradypnea क्या है?",
    "optionsEn": [
      "Cutting the wound",
      "Immobilization and rapid transport",
      "Applying ice",
      "Sucking venom"
    ],
    "optionsHi": [
      "तेज सांस",
      "धीमी सांस (<12/min)",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Keep still, immobilize, and transport quickly. Avoid harmful practices.",
    "explanationHi": "Slow breathing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-709",
    "questionEn": "Universal poison sign in India is:",
    "questionHi": "वयस्क में सामान्य Blood Pressure क्या है?",
    "optionsEn": [
      "Green triangle",
      "Skull and crossbones",
      "Red circle",
      "Blue square"
    ],
    "optionsHi": [
      "160/100",
      "120/80 mmHg (Normal)",
      "90/60",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Skull and crossbones internationally recognized as poison warning.",
    "explanationHi": "Normal blood pressure।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-710",
    "questionEn": "In cold water drowning, CPR may be continued longer because:",
    "questionHi": "Hypertension का मापदंड क्या है?",
    "optionsEn": [
      "Easier to perform",
      "Cold may protect brain from hypoxic damage",
      "Patient always recovers",
      "Not necessary"
    ],
    "optionsHi": [
      "120/80",
      "140/90 mmHg या अधिक",
      "90/60",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hypothermia may provide neuroprotection; prolonged resuscitation reasonable.",
    "explanationHi": "High blood pressure criteria।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-711",
    "questionEn": "During active seizure, DO NOT:",
    "questionHi": "Hypotension का मापदंड क्या है?",
    "optionsEn": [
      "Clear the area",
      "Cushion the head",
      "Put anything in mouth or restrain",
      "Note the time"
    ],
    "optionsHi": [
      "140/90",
      "90/60 mmHg से कम",
      "120/80",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Never put objects in mouth or hold person down during seizure.",
    "explanationHi": "Low blood pressure criteria।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-712",
    "questionEn": "Spine board is:",
    "questionHi": "सामान्य Body Temperature क्या है?",
    "optionsEn": [
      "Flexible mat",
      "Rigid flat surface for spinal immobilization",
      "Only for children",
      "Not needed"
    ],
    "optionsHi": [
      "35°C",
      "36.5-37.5°C (97.7-99.5°F)",
      "40°C",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Spine board provides rigid support to prevent spinal movement.",
    "explanationHi": "Normal body temperature।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-713",
    "questionEn": "Ventilation during CPR should avoid:",
    "questionHi": "Fever का मापदंड क्या है?",
    "optionsEn": [
      "Any breathing",
      "Excessive ventilation causing gastric insufflation",
      "All rescue breaths",
      "Chest rise"
    ],
    "optionsHi": [
      "36°C",
      ">38°C (100.4°F) या अधिक",
      "35°C",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Over-ventilation increases intrathoracic pressure and causes stomach inflation.",
    "explanationHi": "Fever threshold।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-714",
    "questionEn": "Cyanosis appears when:",
    "questionHi": "Pulse Oximeter क्या मापता है?",
    "optionsEn": [
      "Blood is well oxygenated",
      "Oxygen saturation drops (usually below 85-90%)",
      "Patient is warm",
      "Blood pressure is high"
    ],
    "optionsHi": [
      "BP",
      "रक्त में Oxygen Saturation (SpO2)",
      "Temperature",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cyanosis: bluish color from deoxygenated hemoglobin.",
    "explanationHi": "Measures oxygen saturation।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-715",
    "questionEn": "Dressing should be changed when:",
    "questionHi": "सामान्य SpO2 क्या है?",
    "optionsEn": [
      "Never",
      "Saturated with blood or to assess wound",
      "Every hour",
      "Only in hospital"
    ],
    "optionsHi": [
      "80%",
      "95-100%",
      "70%",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Change dressings when soaked or for wound assessment.",
    "explanationHi": "Normal oxygen saturation।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-716",
    "questionEn": "Oliguria in shock indicates:",
    "questionHi": "SpO2 कितने से कम होने पर Hypoxia?",
    "optionsEn": [
      "Normal finding",
      "Decreased kidney perfusion",
      "Overhydration",
      "Recovery"
    ],
    "optionsHi": [
      "95%",
      "<90% (गंभीर <85%)",
      "100%",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Reduced urine output reflects poor kidney blood flow.",
    "explanationHi": "Hypoxia threshold।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-717",
    "questionEn": "Buddy taping is used for:",
    "questionHi": "Capillary Refill Time (CRT) कैसे जांचें?",
    "optionsEn": [
      "Major fractures",
      "Finger/toe fractures - taping to adjacent digit",
      "Spine injuries",
      "Head injuries"
    ],
    "optionsHi": [
      "देखें",
      "नाखून दबाएं, छोड़ने पर रंग वापस आने का समय",
      "सुनें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Buddy taping uses adjacent digit as splint.",
    "explanationHi": "Press nail, observe refill।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-718",
    "questionEn": "Fluid requirements for burns increase with:",
    "questionHi": "सामान्य CRT कितना होना चाहिए?",
    "optionsEn": [
      "Smaller burns",
      "Larger burn surface area and deeper burns",
      "Age alone",
      "Location only"
    ],
    "optionsHi": [
      "5 सेकंड",
      "<2 सेकंड",
      "10 सेकंड",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fluid losses proportional to burn size and depth.",
    "explanationHi": "Normal CRT less than 2 seconds।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-719",
    "questionEn": "After bee sting, observe for allergic reaction for at least:",
    "questionHi": "Prolonged CRT क्या दर्शाता है?",
    "optionsEn": [
      "1 minute",
      "30 minutes to 1 hour",
      "24 hours",
      "1 week"
    ],
    "optionsHi": [
      "सामान्य",
      "Poor Perfusion, Shock, Dehydration",
      "अच्छा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anaphylaxis can develop within minutes; observe at least 30-60 minutes.",
    "explanationHi": "Sign of poor circulation।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-720",
    "questionEn": "Cherry red skin in poisoning suggests:",
    "questionHi": "GCS (Glasgow Coma Scale) में कुल Score कितना होता है?",
    "optionsEn": [
      "Cyanide poisoning",
      "Carbon monoxide poisoning (not always reliable)",
      "Normal finding",
      "Dehydration"
    ],
    "optionsHi": [
      "5",
      "3-15 (3=Deep Coma, 15=Fully Alert)",
      "10",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Classic but unreliable sign of CO poisoning.",
    "explanationHi": "GCS range 3-15।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-721",
    "questionEn": "Spinal precautions in drowning are especially important with:",
    "questionHi": "GCS में कौन से तीन Parameters देखते हैं?",
    "optionsEn": [
      "All drowning",
      "Diving injuries, falls, unknown mechanism",
      "Pool drowning only",
      "Children only"
    ],
    "optionsHi": [
      "Pulse, BP, Temp",
      "Eye Opening, Verbal Response, Motor Response",
      "केवल Eye",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mechanism suggests possible spinal trauma.",
    "explanationHi": "Eye, verbal, motor।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-722",
    "questionEn": "Cincinnati Prehospital Stroke Scale uses:",
    "questionHi": "GCS <8 का क्या अर्थ है?",
    "optionsEn": [
      "Blood tests",
      "Facial droop, arm drift, speech abnormality",
      "ECG",
      "Blood pressure"
    ],
    "optionsHi": [
      "सामान्य",
      "Severe Brain Injury, Airway Protection जरूरी",
      "हल्का",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CPSS: simple 3-item stroke screening tool.",
    "explanationHi": "Severe injury, needs airway protection।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-723",
    "questionEn": "Patient packaging before transport includes:",
    "questionHi": "AVPU Scale क्या है?",
    "optionsEn": [
      "Only moving patient",
      "Splinting, bandaging, securing to stretcher",
      "No preparation",
      "Waiting for doctor"
    ],
    "optionsHi": [
      "दवाई",
      "Consciousness Assessment (Alert, Voice, Pain, Unresponsive)",
      "BP Scale",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Prepare patient properly before movement.",
    "explanationHi": "Simple consciousness scale।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-724",
    "questionEn": "Witnessed cardiac arrest in adult often has:",
    "questionHi": "AVPU में 'U' का क्या अर्थ है?",
    "optionsEn": [
      "Respiratory cause",
      "Cardiac cause with shockable rhythm",
      "Drug cause",
      "Trauma cause"
    ],
    "optionsHi": [
      "Up",
      "Unresponsive (कोई Response नहीं)",
      "Under",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adult witnessed collapse usually cardiac with initial VF/VT.",
    "explanationHi": "No response to any stimulus।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-725",
    "questionEn": "Seesaw breathing indicates:",
    "questionHi": "Pupil Size जांच में Equal, Round, Reactive to Light क्या है?",
    "optionsEn": [
      "Normal breathing",
      "Respiratory distress with airway obstruction",
      "Deep sleep",
      "Recovery"
    ],
    "optionsHi": [
      "असामान्य",
      "PERRL - Normal Finding",
      "चिंताजनक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Paradoxical chest/abdomen movement indicates severe obstruction.",
    "explanationHi": "Normal pupil response।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-726",
    "questionEn": "Hemothorax is:",
    "questionHi": "Unequal Pupils क्या दर्शाता है?",
    "optionsEn": [
      "Blood in abdomen",
      "Blood in chest cavity",
      "Blood in heart",
      "Blood in brain"
    ],
    "optionsHi": [
      "सामान्य",
      "Brain Injury, Stroke, Drug Effect (Anisocoria)",
      "अच्छा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hemothorax: blood collection in pleural space.",
    "explanationHi": "Sign of brain problem।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-727",
    "questionEn": "Inotropes in shock:",
    "questionHi": "Fixed Dilated Pupils क्या दर्शाता है?",
    "optionsEn": [
      "Lower heart rate",
      "Increase cardiac contractility and output",
      "Decrease blood pressure",
      "Stop heart"
    ],
    "optionsHi": [
      "सामान्य",
      "गंभीर Brain Injury, Cardiac Arrest, Drug Effect",
      "हल्का",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Inotropes: medications that increase heart pumping strength.",
    "explanationHi": "Serious finding।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-728",
    "questionEn": "An avulsion fracture occurs when:",
    "questionHi": "Blood Glucose कैसे जांचें?",
    "optionsEn": [
      "Bone bends",
      "Tendon/ligament pulls off piece of bone",
      "Bone shatters",
      "Direct blow"
    ],
    "optionsHi": [
      "BP Monitor से",
      "Glucometer (Finger Prick)",
      "Thermometer से",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Avulsion: forceful tendon/ligament pulling fragment from bone.",
    "explanationHi": "Finger prick blood glucose।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-729",
    "questionEn": "Hypermetabolic response to burns increases:",
    "questionHi": "सामान्य Fasting Blood Glucose क्या है?",
    "optionsEn": [
      "Sleep",
      "Caloric and nutritional needs",
      "Weight",
      "Recovery speed"
    ],
    "optionsHi": [
      "200 mg/dL",
      "70-100 mg/dL",
      "50 mg/dL",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Major burns cause hypermetabolism requiring increased nutrition.",
    "explanationHi": "Normal fasting glucose।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-730",
    "questionEn": "Prophylactic antibiotics after animal bites are considered for:",
    "questionHi": "Hypoglycemia का मापदंड क्या है?",
    "optionsEn": [
      "All bites",
      "High-risk wounds (deep punctures, hand bites, cat bites)",
      "No bites",
      "Only dog bites"
    ],
    "optionsHi": [
      "200 mg/dL",
      "<70 mg/dL",
      "150 mg/dL",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Antibiotics for high-risk bites; not all bites need them.",
    "explanationHi": "Low blood sugar threshold。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-731",
    "questionEn": "Decontamination procedures should be done:",
    "questionHi": "Primary Survey में ABCDE क्या है?",
    "optionsEn": [
      "Inside hospital only",
      "Before patient enters treatment area if contaminated",
      "Never",
      "After all treatment"
    ],
    "optionsHi": [
      "Alphabet",
      "Airway, Breathing, Circulation, Disability, Exposure",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Decontaminate before bringing patient into clean area.",
    "explanationHi": "Primary survey components。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-732",
    "questionEn": "Positive pressure ventilation in drowning may be difficult because:",
    "questionHi": "Secondary Survey कब करें?",
    "optionsEn": [
      "Lungs are normal",
      "Aspirated water affects lung compliance",
      "Patient is cooperative",
      "Equipment works well"
    ],
    "optionsHi": [
      "पहले",
      "Primary Survey के बाद, जब रोगी Stable हो",
      "कभी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Wet lungs have poor compliance; may need higher pressures.",
    "explanationHi": "After primary survey。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-733",
    "questionEn": "Cardiac biomarkers peak:",
    "questionHi": "Secondary Survey में क्या करते हैं?",
    "optionsEn": [
      "Immediately",
      "Hours after heart muscle damage",
      "Days later",
      "Never"
    ],
    "optionsHi": [
      "केवल CPR",
      "Head to Toe Examination, History, Vital Signs",
      "केवल देखना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Troponin peaks 12-24 hours after MI; serial testing needed.",
    "explanationHi": "Detailed examination。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-734",
    "questionEn": "Ambulance should take patient to:",
    "questionHi": "SAMPLE History में 'S' क्या है?",
    "optionsEn": [
      "Nearest hospital always",
      "Most appropriate facility for the condition",
      "Furthest hospital",
      "Home"
    ],
    "optionsHi": [
      "Sample",
      "Signs & Symptoms (लक्षण)",
      "Surgery",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Match patient needs to hospital capabilities when possible.",
    "explanationHi": "Signs and symptoms。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-735",
    "questionEn": "Biphasic AED delivers shock:",
    "questionHi": "SAMPLE History में 'A' क्या है?",
    "optionsEn": [
      "In one direction",
      "In two directions, often with lower energy needed",
      "Multiple times simultaneously",
      "Randomly"
    ],
    "optionsHi": [
      "Age",
      "Allergies (एलर्जी)",
      "Address",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Biphasic current reverses direction; more effective at lower energy.",
    "explanationHi": "Allergies。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-736",
    "questionEn": "Trismus (lockjaw) makes airway management difficult because:",
    "questionHi": "SAMPLE History में 'M' क्या है?",
    "optionsEn": [
      "Patient is cooperative",
      "Cannot open mouth due to muscle spasm",
      "Airway is clear",
      "No intervention needed"
    ],
    "optionsHi": [
      "Money",
      "Medications (दवाइयां)",
      "Mother",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Trismus: jaw muscle spasm preventing mouth opening.",
    "explanationHi": "Current medications。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-737",
    "questionEn": "Ecchymosis is:",
    "questionHi": "SAMPLE History में 'P' क्या है?",
    "optionsEn": [
      "Petechiae",
      "Bruising - blood in skin from vessel damage",
      "External bleeding",
      "Normal skin"
    ],
    "optionsHi": [
      "Phone",
      "Past Medical History (पिछली बीमारियां)",
      "Place",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ecchymosis: larger bruise from bleeding into skin.",
    "explanationHi": "Past medical history。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-738",
    "questionEn": "Base deficit in blood gas indicates:",
    "questionHi": "SAMPLE History में 'L' क्या है?",
    "optionsEn": [
      "Normal acid-base",
      "Metabolic acidosis from tissue hypoxia",
      "Alkalosis",
      "Hyperventilation"
    ],
    "optionsHi": [
      "Location",
      "Last Oral Intake (आखिरी बार खाना/पीना)",
      "Language",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Base deficit: measure of metabolic acidosis in shock.",
    "explanationHi": "Last oral intake。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-739",
    "questionEn": "Delayed union of fracture means:",
    "questionHi": "SAMPLE History में 'E' क्या है?",
    "optionsEn": [
      "Normal healing",
      "Slower than expected healing but still progressing",
      "Fracture healed",
      "Infection present"
    ],
    "optionsHi": [
      "Education",
      "Events Leading to Emergency (क्या हुआ)",
      "Email",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Delayed union: slow but ongoing healing beyond expected time.",
    "explanationHi": "Events leading to illness。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-740",
    "questionEn": "Split thickness skin graft donor sites heal by:",
    "questionHi": "OPQRST Pain Assessment में 'O' क्या है?",
    "optionsEn": [
      "Skin grafting",
      "Re-epithelialization from remaining dermal elements",
      "Never heal",
      "Scar only"
    ],
    "optionsHi": [
      "Other",
      "Onset (कब शुरू हुआ)",
      "Old",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Donor sites heal from remaining epidermal appendages in dermis.",
    "explanationHi": "When pain started。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-741",
    "questionEn": "Anti-snake venom test dose:",
    "questionHi": "OPQRST में 'P' क्या है?",
    "optionsEn": [
      "Always required",
      "No longer recommended due to unreliable results",
      "Prevents all reactions",
      "Is therapeutic"
    ],
    "optionsHi": [
      "Place",
      "Provocation/Palliation (क्या बढ़ाता/घटाता है)",
      "Pain",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Skin testing doesn't reliably predict reactions; not recommended.",
    "explanationHi": "What makes it better/worse。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-742",
    "questionEn": "Cathartics (laxatives) in poisoning:",
    "questionHi": "OPQRST में 'Q' क्या है?",
    "optionsEn": [
      "Are first-line",
      "No longer routinely recommended",
      "Always given",
      "Prevent all absorption"
    ],
    "optionsHi": [
      "Quantity",
      "Quality (दर्द कैसा है - तेज, जलन, दबाव)",
      "Question",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cathartics don't improve outcomes; not routinely recommended.",
    "explanationHi": "Quality of pain。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-743",
    "questionEn": "Fresh water aspiration causes:",
    "questionHi": "OPQRST में 'R' क्या है?",
    "optionsEn": [
      "No lung changes",
      "Surfactant dysfunction and pulmonary edema",
      "Improved breathing",
      "Electrolyte changes only"
    ],
    "optionsHi": [
      "Rate",
      "Region/Radiation (कहां दर्द है, कहां जाता है)",
      "Reason",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hypotonic water washes out surfactant, causing atelectasis.",
    "explanationHi": "Location and radiation。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-744",
    "questionEn": "Atrial fibrillation can cause stroke by:",
    "questionHi": "OPQRST में 'S' क्या है?",
    "optionsEn": [
      "Direct brain damage",
      "Forming clots that embolize to brain",
      "Lowering blood pressure only",
      "No stroke risk"
    ],
    "optionsHi": [
      "Size",
      "Severity (1-10 में कितना दर्द)",
      "Same",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "AF: blood stasis in atrium allows clot formation that can embolize.",
    "explanationHi": "Pain scale 1-10。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-745",
    "questionEn": "Triage tag systems use colors to indicate:",
    "questionHi": "OPQRST में 'T' क्या है?",
    "optionsEn": [
      "Patient preference",
      "Priority level (red=immediate, yellow=delayed, green=minor, black=deceased)",
      "Hospital destination",
      "Vehicle type"
    ],
    "optionsHi": [
      "Temperature",
      "Time/Timing (कितनी देर से, Constant या आता-जाता)",
      "Today",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Color coding allows quick visual identification of treatment priority.",
    "explanationHi": "Duration and pattern。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-746",
    "questionEn": "Respiratory arrest without cardiac arrest should be managed with:",
    "questionHi": "Pain Scale में 10 का क्या अर्थ है?",
    "optionsEn": [
      "CPR",
      "Rescue breathing only (1 breath every 5-6 seconds)",
      "Nothing",
      "Chest compressions only"
    ],
    "optionsHi": [
      "कोई दर्द नहीं",
      "सबसे तीव्र दर्द",
      "हल्का दर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "If pulse present but not breathing: provide ventilation only.",
    "explanationHi": "Worst possible pain。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-747",
    "questionEn": "Oxygen should be administered to:",
    "questionHi": "Wong-Baker Faces Scale किसके लिए है?",
    "optionsEn": [
      "Everyone",
      "Hypoxic patients or those at risk of hypoxia",
      "No one",
      "Only unconscious"
    ],
    "optionsHi": [
      "वयस्क",
      "बच्चों के दर्द आकलन के लिए (Faces)",
      "बुजुर्ग",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Oxygen indicated for hypoxia; not everyone needs supplemental O2.",
    "explanationHi": "Pediatric pain assessment。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-748",
    "questionEn": "Antiplatelet medications (aspirin) affect bleeding by:",
    "questionHi": "Head to Toe Examination में क्या देखें?",
    "optionsEn": [
      "Increasing clotting",
      "Reducing platelet aggregation and clot formation",
      "No effect",
      "Causing clots"
    ],
    "optionsHi": [
      "केवल सिर",
      "Wounds, Deformity, Swelling, Tenderness, Bleeding",
      "केवल पैर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Antiplatelet drugs interfere with platelet function.",
    "explanationHi": "Systematic examination。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-749",
    "questionEn": "Crystalloids (normal saline, Ringer's) differ from colloids in that:",
    "questionHi": "DCAP-BTLS क्या है?",
    "optionsEn": [
      "They're thicker",
      "They distribute throughout extracellular space quickly",
      "They stay in vessels longer",
      "They're more expensive"
    ],
    "optionsHi": [
      "दवाई",
      "Deformity, Contusion, Abrasion, Puncture, Burns, Tenderness, Laceration, Swelling",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Crystalloids redistribute quickly; colloids stay intravascular longer.",
    "explanationHi": "Trauma assessment mnemonic。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-750",
    "questionEn": "Non-union of fracture means:",
    "questionHi": "Mechanism of Injury (MOI) क्यों महत्वपूर्ण है?",
    "optionsEn": [
      "Healing complete",
      "Fracture has failed to heal (no bone bridging)",
      "Fast healing",
      "Infection"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "Hidden Injuries का अनुमान, High Energy = High Risk",
      "केवल कागज़ी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Non-union: complete failure of fracture healing.",
    "explanationHi": "Helps predict hidden injuries。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-751",
    "questionEn": "Full thickness burns require grafting because:",
    "questionHi": "High Energy MOI के उदाहरण क्या हैं?",
    "optionsEn": [
      "For cosmesis only",
      "No skin elements remain to regenerate",
      "To speed healing slightly",
      "Patient preference"
    ],
    "optionsHi": [
      "गिरना",
      "तेज रफ्तार दुर्घटना, ऊंचाई से गिरना, Pedestrian Hit, Ejection",
      "खरोंच",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Full thickness destroys all dermal elements; can't self-epithelialize.",
    "explanationHi": "High energy injury patterns।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-752",
    "questionEn": "Fasciotomy for snake bite may be needed when:",
    "questionHi": "Kinematics क्या है?",
    "optionsEn": [
      "Always",
      "Compartment syndrome develops from severe swelling",
      "For all bites",
      "Never"
    ],
    "optionsHi": [
      "खेल",
      "Energy Transfer और Injury Pattern का अध्ययन",
      "दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Severe swelling can cause compartment syndrome requiring fasciotomy.",
    "explanationHi": "Study of energy transfer in trauma。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-753",
    "questionEn": "Lipid emulsion therapy is used for:",
    "questionHi": "Index of Suspicion क्या है?",
    "optionsEn": [
      "All poisoning",
      "Local anesthetic and lipophilic drug toxicity",
      "Only paracetamol",
      "Food poisoning"
    ],
    "optionsHi": [
      "संदेह नहीं",
      "MOI के आधार पर Hidden Injuries का अनुमान",
      "निश्चित",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lipid emulsion: binds and sequesters lipophilic drugs.",
    "explanationHi": "Suspecting hidden injuries。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-754",
    "questionEn": "Extracorporeal CPR (E-CPR) in drowning:",
    "questionHi": "Documentation में क्या लिखें?",
    "optionsEn": [
      "Standard treatment",
      "Advanced option for refractory arrest in specialized centers",
      "Never used",
      "First-line treatment"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Time, Findings, Treatment, Response, Handover",
      "केवल नाम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "E-CPR: mechanical circulation for select refractory arrests.",
    "explanationHi": "What to document。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-755",
    "questionEn": "Benzodiazepines (diazepam, lorazepam) are first-line for:",
    "questionHi": "MIST Handover क्या है?",
    "optionsEn": [
      "Heart attack",
      "Acute seizures",
      "Asthma",
      "Stroke"
    ],
    "optionsHi": [
      "धुंध",
      "Mechanism, Injuries, Signs/Symptoms, Treatment (EMS को)",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Benzodiazepines: first-line for status epilepticus.",
    "explanationHi": "Patient handover format。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-756",
    "questionEn": "Documentation errors should be corrected by:",
    "questionHi": "SBAR Communication क्या है?",
    "optionsEn": [
      "Erasing",
      "Single line through error, initialed, with correction nearby",
      "White-out",
      "Leaving blank"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Situation, Background, Assessment, Recommendation",
      "Letter",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Proper correction maintains record integrity.",
    "explanationHi": "Structured communication。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-757",
    "questionEn": "PEA (pulseless electrical activity) is:",
    "questionHi": "Closed-Loop Communication क्या है?",
    "optionsEn": [
      "Shockable rhythm",
      "Electrical activity without detectable pulse",
      "Normal rhythm",
      "Same as VF"
    ],
    "optionsHi": [
      "चुप रहना",
      "सुनने वाला निर्देश दोहराए (Confirmation)",
      "एक तरफा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "PEA: ECG shows activity but no pulse. Not shockable.",
    "explanationHi": "Repeat back communication。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-758",
    "questionEn": "Laryngeal edema from allergic reaction develops:",
    "questionHi": "Chain of Survival क्या है?",
    "optionsEn": [
      "Over days",
      "Rapidly, potentially obstructing airway within minutes",
      "Never",
      "Only in sleep"
    ],
    "optionsHi": [
      "जंजीर",
      "Cardiac Arrest में जीवन बचाने के Steps",
      "खाद्य श्रृंखला",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Allergic airway swelling can be rapid and life-threatening.",
    "explanationHi": "Steps to save life in cardiac arrest。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-759",
    "questionEn": "Coagulopathy of trauma results from:",
    "questionHi": "In-Hospital Chain of Survival के कितने Links हैं?",
    "optionsEn": [
      "Single factor",
      "Combination of hypothermia, acidosis, hemodilution",
      "Rest",
      "Normal response"
    ],
    "optionsHi": [
      "3",
      "6 Links",
      "10",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lethal triad: hypothermia, acidosis, coagulopathy in trauma.",
    "explanationHi": "6 links in hospital chain。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-760",
    "questionEn": "Central venous pressure (CVP) measures:",
    "questionHi": "Out-of-Hospital Chain of Survival के कितने Links हैं?",
    "optionsEn": [
      "Arterial pressure",
      "Right heart filling pressure",
      "Brain pressure",
      "Lung pressure"
    ],
    "optionsHi": [
      "3",
      "5 Links",
      "10",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CVP: estimate of right ventricular preload.",
    "explanationHi": "5 links out of hospital。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-761",
    "questionEn": "Malunion of fracture means:",
    "questionHi": "Chain of Survival का पहला Link क्या है?",
    "optionsEn": [
      "Good healing",
      "Fracture healed in abnormal position",
      "No healing",
      "Fast healing"
    ],
    "optionsHi": [
      "CPR",
      "Recognition and Activation (पहचान और 108 बुलाना)",
      "AED",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Malunion: healed but with deformity/malalignment.",
    "explanationHi": "First link - recognize and call。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-762",
    "questionEn": "Heterotopic ossification after burns is:",
    "questionHi": "Chain of Survival का दूसरा Link क्या है?",
    "optionsEn": [
      "Normal finding",
      "Abnormal bone formation in soft tissues",
      "Bone fracture",
      "Skin condition"
    ],
    "optionsHi": [
      "AED",
      "Early CPR (जल्दी CPR)",
      "Hospital",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "HO: bone forming in muscles/soft tissues around joints after burns.",
    "explanationHi": "Second link - early CPR。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-763",
    "questionEn": "Systemic antivenom reactions include:",
    "questionHi": "Chain of Survival में AED कौन सा Link है?",
    "optionsEn": [
      "Local swelling only",
      "Anaphylaxis, serum sickness",
      "No reactions possible",
      "Skin rash only"
    ],
    "optionsHi": [
      "पहला",
      "तीसरा (Rapid Defibrillation)",
      "पांचवां",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Antivenom can cause immediate or delayed allergic reactions.",
    "explanationHi": "Third link - early defibrillation。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-764",
    "questionEn": "Sodium bicarbonate in poisoning is used for:",
    "questionHi": "Community CPR Training Rate बढ़ाने से क्या होता है?",
    "optionsEn": [
      "All poisoning",
      "Urinary alkalinization (aspirin), TCA cardiotoxicity",
      "Food poisoning",
      "Alcohol"
    ],
    "optionsHi": [
      "कोई फर्क नहीं",
      "Bystander CPR बढ़ता है, Survival बढ़ता है",
      "कम होता है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Bicarb: enhances aspirin excretion, treats TCA sodium channel blockade.",
    "explanationHi": "More CPR training = more survival。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-765",
    "questionEn": "Aspiration pneumonia after drowning may develop:",
    "questionHi": "Public Access Defibrillation (PAD) क्या है?",
    "optionsEn": [
      "Immediately",
      "24-72 hours after aspiration",
      "Never",
      "Only in salt water"
    ],
    "optionsHi": [
      "केवल अस्पताल",
      "सार्वजनिक स्थानों पर AED उपलब्ध कराना",
      "निजी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Bacterial pneumonia develops days after aspiration event.",
    "explanationHi": "AEDs in public places。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-766",
    "questionEn": "Hypoglycemia-induced seizure is treated by:",
    "questionHi": "AED कहां-कहां होने चाहिए?",
    "optionsEn": [
      "Anticonvulsants only",
      "Correcting blood glucose",
      "CPR",
      "Ignoring"
    ],
    "optionsHi": [
      "केवल अस्पताल",
      "Airport, Mall, Stadium, School, Office, Public Places",
      "घर में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Treat cause; seizure resolves with glucose correction.",
    "explanationHi": "AED locations।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-767",
    "questionEn": "START triage stands for:",
    "questionHi": "भारत में सार्वजनिक स्थानों पर AED की स्थिति क्या है?",
    "optionsEn": [
      "Simple Treatment And Rapid Transport",
      "Simple Triage And Rapid Treatment",
      "Slow Treatment After Review",
      "Standard Triage And Recovery"
    ],
    "optionsHi": [
      "सर्वत्र",
      "अभी सीमित, बढ़ रहे हैं (Airports, Metro)",
      "कहीं नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "START: field triage algorithm for mass casualties.",
    "explanationHi": "Limited but increasing。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-768",
    "questionEn": "Asystole appears on monitor as:",
    "questionHi": "MPHW के लिए Emergency Contact Numbers कौन से जानना जरूरी है?",
    "optionsEn": [
      "Chaotic rhythm",
      "Flat line (no electrical activity)",
      "Regular rhythm",
      "Fast rhythm"
    ],
    "optionsHi": [
      "केवल 100",
      "108, 102, 112, 1098, Local Hospital, PHC, Block",
      "कोई नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Asystole: no cardiac electrical activity - flat line.",
    "explanationHi": "Essential emergency numbers。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-769",
    "questionEn": "Pulse oximetry measures:",
    "questionHi": "102 का क्या उपयोग है?",
    "optionsEn": [
      "Blood pressure",
      "Oxygen saturation of hemoglobin",
      "Heart rate only",
      "Carbon dioxide"
    ],
    "optionsHi": [
      "Police",
      "Pregnancy और Newborn Emergency (Ambulance)",
      "Fire",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SpO2: percentage of hemoglobin saturated with oxygen.",
    "explanationHi": "Maternal-child emergency।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-770",
    "questionEn": "DIC (disseminated intravascular coagulation) causes:",
    "questionHi": "1098 (Childline) का क्या उपयोग है?",
    "optionsEn": [
      "Only clotting",
      "Both clotting and bleeding simultaneously",
      "Only bleeding",
      "Neither"
    ],
    "optionsHi": [
      "वयस्क",
      "बच्चों की सुरक्षा (Child Abuse, Missing, Emergency)",
      "बुजुर्ग",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "DIC: widespread clotting depletes factors, causing bleeding.",
    "explanationHi": "Child protection helpline。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-771",
    "questionEn": "Norepinephrine is preferred vasopressor because:",
    "questionHi": "112 (Emergency Response) का क्या उपयोग है?",
    "optionsEn": [
      "It's cheapest",
      "Good balance of vasoconstriction with some cardiac effects",
      "Only option",
      "Causes hypotension"
    ],
    "optionsHi": [
      "केवल Fire",
      "Single Emergency Number (Police, Fire, Ambulance)",
      "केवल Police",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Norepinephrine: first-line vasopressor in most shock types.",
    "explanationHi": "Universal emergency number।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-772",
    "questionEn": "Osteomyelitis as fracture complication is:",
    "questionHi": "181 (Women Helpline) का क्या उपयोग है?",
    "optionsEn": [
      "Common",
      "Infection of bone, especially with open fractures",
      "Normal healing",
      "Never occurs"
    ],
    "optionsHi": [
      "पुरुष",
      "महिलाओं की सुरक्षा (Domestic Violence, Harassment)",
      "बच्चे",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Osteomyelitis: bone infection, risk increases with open fractures.",
    "explanationHi": "Women's safety helpline。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-773",
    "questionEn": "Hypertrophic scarring after burns differs from keloid in that:",
    "questionHi": "104 (Health Helpline) का क्या उपयोग है?",
    "optionsEn": [
      "Same thing",
      "Hypertrophic stays within wound boundaries",
      "Hypertrophic extends beyond wound",
      "No scarring occurs"
    ],
    "optionsHi": [
      "केवल Ambulance",
      "Health Information, Counseling, Medical Advice",
      "Fire",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hypertrophic: raised scar staying within original wound.",
    "explanationHi": "Health information helpline。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-774",
    "questionEn": "Secondary bacterial infection after bite is prevented by:",
    "questionHi": "ERSS (Emergency Response Support System) क्या है?",
    "optionsEn": [
      "Nothing",
      "Proper wound cleaning and sometimes antibiotics",
      "Ignoring wound",
      "Ice only"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "112 Number की Integrated Platform",
      "केवल Police",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Good wound care is primary prevention; antibiotics for high-risk wounds.",
    "explanationHi": "Integrated emergency platform。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-775",
    "questionEn": "Deferoxamine is chelator for:",
    "questionHi": "First Aid App कौन से हैं?",
    "optionsEn": [
      "Lead",
      "Iron poisoning",
      "Arsenic",
      "All metals"
    ],
    "optionsHi": [
      "कोई नहीं",
      "Red Cross First Aid, St. John, WHO First Aid",
      "केवल Games",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Deferoxamine: specific chelating agent for iron.",
    "explanationHi": "First aid mobile apps。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-776",
    "questionEn": "Drowning prevention strategies include:",
    "questionHi": "Medical ID (Phone में) क्या है?",
    "optionsEn": [
      "No intervention needed",
      "Supervision, barriers, swimming lessons, CPR training",
      "Only swimming lessons",
      "Only barriers"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Emergency में Medical Info (Allergies, Blood Group, Contacts)",
      "Game",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multi-layered approach most effective for prevention.",
    "explanationHi": "Emergency medical information。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-777",
    "questionEn": "Phenytoin loading dose for seizures is given:",
    "questionHi": "First Aid Update 2020 में CPR में क्या बदलाव?",
    "optionsEn": [
      "Rapidly IV push",
      "Slowly IV to prevent cardiac arrhythmias",
      "Orally always",
      "IM"
    ],
    "optionsHi": [
      "कोई नहीं",
      "Compression-only CPR Emphasis, Chain of Survival Update",
      "30:2 हटाया",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Phenytoin given slowly; rapid infusion causes hypotension/arrhythmias.",
    "explanationHi": "2020 CPR updates。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-778",
    "questionEn": "Destination decisions for trauma patients consider:",
    "questionHi": "AHA 2020 Guidelines में नया क्या है?",
    "optionsEn": [
      "Distance only",
      "Capability of facility, time, patient condition",
      "Patient preference only",
      "Cost"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Recovery Position Change, Opioid-Associated Arrest, Pregnant CPR",
      "CPR Band",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Balance time, facility capability, and patient needs.",
    "explanationHi": "2020 AHA updates。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-779",
    "questionEn": "Medication via endotracheal tube is:",
    "questionHi": "First Aid में Evidence-Based Practice क्या है?",
    "optionsEn": [
      "First route",
      "Generally not recommended; IV/IO preferred",
      "Most effective",
      "Always used"
    ],
    "optionsHi": [
      "पुरानी विधि",
      "वैज्ञानिक शोध पर आधारित उपचार",
      "अंधविश्वास",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ET drug delivery unreliable; IV/IO routes preferred.",
    "explanationHi": "Treatment based on scientific evidence。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-780",
    "questionEn": "Waveform capnography shows:",
    "questionHi": "ILCOR क्या है?",
    "optionsEn": [
      "Blood pressure",
      "Exhaled CO2 concentration over time",
      "Heart rhythm",
      "Oxygen level"
    ],
    "optionsHi": [
      "दवाई",
      "International Liaison Committee on Resuscitation (CPR Guidelines)",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Capnography: graphical display of CO2 during breathing cycle.",
    "explanationHi": "International resuscitation guidelines body。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-781",
    "questionEn": "Hemoptysis is:",
    "questionHi": "First Aid Guidelines कितने समय में Update होती हैं?",
    "optionsEn": [
      "Blood in urine",
      "Coughing up blood from respiratory tract",
      "Blood in stool",
      "Nose bleed"
    ],
    "optionsHi": [
      "हर साल",
      "हर 5 साल (Major Review)",
      "कभी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hemoptysis: bloody sputum from airways/lungs.",
    "explanationHi": "Major review every 5 years。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-782",
    "questionEn": "Dobutamine is used in shock primarily for:",
    "questionHi": "CoSTR क्या है?",
    "optionsEn": [
      "Vasoconstriction",
      "Increasing cardiac output (inotropic effect)",
      "Decreasing heart rate",
      "Pain relief"
    ],
    "optionsHi": [
      "Star",
      "Consensus on Science with Treatment Recommendations (ILCOR)",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dobutamine: positive inotrope increasing cardiac contractility.",
    "explanationHi": "ILCOR consensus document。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-783",
    "questionEn": "Deep vein thrombosis risk after fracture is reduced by:",
    "questionHi": "First Aid में Myth क्या है जो गलत है?",
    "optionsEn": [
      "Bed rest alone",
      "Early mobilization, anticoagulation if indicated",
      "No intervention",
      "Ice only"
    ],
    "optionsHi": [
      "CPR",
      "जलने पर मक्खन/टूथपेस्ट, सांप काटने पर चीरा, Nose Bleed में सिर पीछे",
      "RICE",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "DVT prevention: movement, compression, anticoagulation when appropriate.",
    "explanationHi": "Common first aid myths。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-784",
    "questionEn": "Early excision of burns refers to:",
    "questionHi": "First Aid में क्या सही है - जलने पर?",
    "optionsEn": [
      "Late surgery",
      "Surgical removal of dead tissue within days",
      "No surgery",
      "After complete healing"
    ],
    "optionsHi": [
      "मक्खन",
      "ठंडे पानी से धोना (10-20 मिनट)",
      "बर्फ",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Early excision and grafting improves outcomes in deep burns.",
    "explanationHi": "Cool running water for burns。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-785",
    "questionEn": "Immunocompromised patients after bites require:",
    "questionHi": "Snake Bite में क्या नहीं करना चाहिए?",
    "optionsEn": [
      "No special consideration",
      "Higher suspicion for infection, possibly broader antibiotics",
      "Less treatment",
      "No antibiotics"
    ],
    "optionsHi": [
      "अस्पताल जाना",
      "चीरा लगाना, मुंह से जहर चूसना, Tourniquet, बर्फ",
      "Immobilize",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Immunocompromised at higher risk; may need more aggressive treatment.",
    "explanationHi": "What NOT to do in snake bite。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-786",
    "questionEn": "Physostigmine is antidote for:",
    "questionHi": "Fever में Sponging कब करें?",
    "optionsEn": [
      "Opioids",
      "Anticholinergic poisoning",
      "Iron",
      "Alcohol"
    ],
    "optionsHi": [
      "हमेशा",
      "बहुत तेज बुखार में (>39°C), दवाई के साथ",
      "कभी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Physostigmine: reverses central anticholinergic effects.",
    "explanationHi": "High fever with medication。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-787",
    "questionEn": "Prognosis after drowning is best predicted by:",
    "questionHi": "Fever में ठंडे पानी से नहलाना क्यों गलत है?",
    "optionsEn": [
      "Water temperature alone",
      "Submersion time, initial resuscitation response, neurological status",
      "Age alone",
      "Location"
    ],
    "optionsHi": [
      "सही है",
      "Shivering से Temperature और बढ़ता है",
      "कोई कारण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple factors determine outcome; time and response most important.",
    "explanationHi": "Cold water causes shivering।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-788",
    "questionEn": "Recombinant tPA (alteplase) for stroke must be given within:",
    "questionHi": "Alcohol Sponging क्यों गलत है?",
    "optionsEn": [
      "24 hours",
      "4.5 hours of symptom onset for maximum benefit",
      "1 week",
      "Anytime"
    ],
    "optionsHi": [
      "सही है",
      "त्वचा से Absorb होकर Toxicity, Hypothermia",
      "अच्छा है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "tPA window: up to 4.5 hours; earlier is better.",
    "explanationHi": "Alcohol absorbed through skin。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-789",
    "questionEn": "Radio communication should be:",
    "questionHi": "Seizure में मुंह में कुछ डालना क्यों गलत है?",
    "optionsEn": [
      "Long and detailed",
      "Clear, concise, using standard terms",
      "Only when convenient",
      "Avoided"
    ],
    "optionsHi": [
      "सही है",
      "दांत टूट सकते हैं, जीभ नहीं निगलते",
      "अच्छा है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Effective communication: clear, concise, standardized.",
    "explanationHi": "Don't put anything in mouth。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-790",
    "questionEn": "Reversible causes of cardiac arrest (H's and T's) include:",
    "questionHi": "Fainting में पैर ऊपर क्यों करते हैं?",
    "optionsEn": [
      "Only heart problems",
      "Hypoxia, hypovolemia, hypothermia, toxins, tamponade, tension pneumothorax",
      "Nothing reversible",
      "Only trauma"
    ],
    "optionsHi": [
      "आराम के लिए",
      "मस्तिष्क में रक्त प्रवाह बढ़ाने के लिए",
      "कोई कारण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "H's and T's: treatable causes to consider during arrest.",
    "explanationHi": "Increase blood flow to brain。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-791",
    "questionEn": "Whole blood transfusion advantages include:",
    "questionHi": "Sprain में RICE कब तक करें?",
    "optionsEn": [
      "No advantages",
      "Contains all components, mimics blood loss replacement",
      "Only for surgery",
      "Causes more complications"
    ],
    "optionsHi": [
      "1 दिन",
      "पहले 48-72 घंटे",
      "1 सप्ताह",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Whole blood: balanced replacement gaining interest in trauma.",
    "explanationHi": "First 48-72 hours।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-792",
    "questionEn": "Bedside echocardiography in shock helps assess:",
    "questionHi": "RICE के बाद क्या करें?",
    "optionsEn": [
      "Breathing only",
      "Cardiac function, volume status, pericardial effusion",
      "Fractures",
      "Brain function"
    ],
    "optionsHi": [
      "और RICE",
      "Heat, Gentle Movement, Physio (MICE - Movement, Ice, Compression, Elevation)",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Echo: rapid assessment of cardiac and hemodynamic status.",
    "explanationHi": "After 48-72 hours - heat and movement。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-793",
    "questionEn": "External fixation is used when:",
    "questionHi": "Bee Sting में Stinger कैसे निकालें?",
    "optionsEn": [
      "Always first choice",
      "Internal fixation not possible or for damage control",
      "Never used",
      "Only for fingers"
    ],
    "optionsHi": [
      "खींचें",
      "Credit Card जैसी वस्तु से Scrape करें (निचोड़ें नहीं)",
      "दबाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "External fixators: used for severe fractures, polytrauma, infection risk.",
    "explanationHi": "Scrape, don't squeeze।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-794",
    "questionEn": "Nutritional support in major burns should provide:",
    "questionHi": "Eye में Corrosive Splash हो तो कितनी देर धोएं?",
    "optionsEn": [
      "Reduced calories",
      "High protein, high calorie diet",
      "Normal diet",
      "Fluids only"
    ],
    "optionsHi": [
      "5 मिनट",
      "20-30 मिनट (Continuous)",
      "1 मिनट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Burns cause hypermetabolism; high protein/calorie needs.",
    "explanationHi": "20-30 minutes for corrosive。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-795",
    "questionEn": "Primary percutaneous coronary intervention (PCI) for STEMI is:",
    "questionHi": "Chemical Burn में Neutralization क्यों गलत है?",
    "optionsEn": [
      "Medical treatment",
      "Opening blocked artery with catheter and stent",
      "Surgery",
      "No intervention"
    ],
    "optionsHi": [
      "सही है",
      "Chemical Reaction से और Heat/Damage होती है",
      "अच्छा है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Primary PCI: preferred reperfusion for STEMI when available.",
    "explanationHi": "Neutralization causes more damage。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-796",
    "questionEn": "What rate should chest compressions be performed at during adult CPR?",
    "questionHi": "Hydrogen Peroxide घाव पर क्यों Recommend नहीं?",
    "optionsEn": [],
    "optionsHi": [
      "अच्छा है",
      "Healthy Tissue को भी नुकसान, Healing धीमा",
      "हमेशा करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Damages healthy tissue。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-797",
    "questionEn": "What is the normal capillary refill time?",
    "questionHi": "Wound Cleaning के लिए सबसे अच्छा क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "Spirit",
      "साफ बहता पानी (Tap Water)",
      "Dettol सीधे",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Clean running water best।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-798",
    "questionEn": "What percentage of TBSA does each adult leg represent in Rule of Nines?",
    "questionHi": "Puncture Wound में क्या विशेष खतरा है?",
    "optionsEn": [],
    "optionsHi": [
      "कोई नहीं",
      "Tetanus, Deep Infection (Anaerobic Bacteria)",
      "कम खतरा",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Tetanus risk in puncture wounds。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-799",
    "questionEn": "An 8-year-old child is eating candy and suddenly cannot speak, is clutching his throat, and turning blue. What is happening and what do you do?",
    "questionHi": "Tetanus Booster कब लें?",
    "optionsEn": [],
    "optionsHi": [
      "कभी नहीं",
      "गंदे घाव में 5 साल से अधिक, साफ घाव में 10 साल",
      "हमेशा",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Tetanus booster timing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-800",
    "questionEn": "You find a 50-year-old man collapsed on the street. He is unresponsive and not breathing normally. What are your immediate actions?",
    "questionHi": "First Aid में सबसे महत्वपूर्ण संदेश क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "डरें",
      "तैयार रहें, सीखें, अभ्यास करें, जीवन बचाएं",
      "भागें",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Be prepared, learn, practice, save lives।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-801",
    "questionEn": "The most important principle of first aid is:",
    "questionHi": "ग्रामीण क्षेत्रों में First Aid क्यों अधिक महत्वपूर्ण है?",
    "optionsEn": [
      "Give medication",
      "Preserve life",
      "Move patient quickly",
      "Call doctor"
    ],
    "optionsHi": [
      "कम महत्वपूर्ण",
      "अस्पताल दूर, EMS देर से आती है, MPHW/ASHA पहले पहुंचते हैं",
      "एक जैसा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Preserving life is the primary aim of first aid.",
    "explanationHi": "Rural areas have limited access to hospitals।",
    "difficulty": "easy",
    "topic": "first-aid",
    "subtopic": "Principles",
    "tags": [
      "principles"
    ]
  },
  {
    "id": "FIRST-AID-802",
    "questionEn": "High-quality CPR includes:",
    "questionHi": "MPHW के लिए कौन सी First Aid Skills सबसे जरूरी हैं?",
    "optionsEn": [
      "Slow compressions",
      "Pushing hard and fast with minimal interruptions",
      "Compressions only when convenient",
      "Light compressions"
    ],
    "optionsHi": [
      "Surgery",
      "CPR, Bleeding Control, Burns, Fractures, Delivery, Newborn Care",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Quality CPR: adequate rate, depth, recoil, and minimal pauses.",
    "explanationHi": "Essential skills for MPHW।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-803",
    "questionEn": "Hypoxia affects the brain within:",
    "questionHi": "Sub-Centre पर कौन सी First Aid Kit होनी चाहिए?",
    "optionsEn": [
      "1 hour",
      "Minutes",
      "Days",
      "Never"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Essential Medicines, Dressings, ORS, Thermometer, BP Apparatus",
      "केवल Bandage",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Brain is very sensitive to oxygen deprivation; damage occurs in minutes.",
    "explanationHi": "Sub-centre first aid supplies।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-804",
    "questionEn": "Signs of significant blood loss include:",
    "questionHi": "Village Health Day पर First Aid के कौन से Topics Cover करें?",
    "optionsEn": [
      "High blood pressure",
      "Rapid pulse, pale skin, confusion",
      "Slow pulse",
      "Red face"
    ],
    "optionsHi": [
      "Surgery",
      "Wounds, Burns, Snake Bite, Drowning, Child Choking, ORS",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Classic signs of hypovolemia from blood loss.",
    "explanationHi": "Common emergencies for village training।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-805",
    "questionEn": "Without treatment, shock progresses to:",
    "questionHi": "Community First Responder किसे बनाया जा सकता है?",
    "optionsEn": [
      "Recovery always",
      "Organ failure and death",
      "Stable condition",
      "Improvement"
    ],
    "optionsHi": [
      "केवल Doctor",
      "ASHA, ANM, AWW, Teachers, Youth Volunteers",
      "कोई नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Untreated shock leads to progressive organ failure.",
    "explanationHi": "Community members as first responders।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-806",
    "questionEn": "Inappropriate movement of fractures can cause:",
    "questionHi": "Agricultural Injury में कौन सी चोटें आम हैं?",
    "optionsEn": [
      "Faster healing",
      "Nerve/vessel damage, increased bleeding, more pain",
      "No problems",
      "Better alignment"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Cuts, Amputations, Snake/Scorpion Bite, Heat Stroke, Pesticide",
      "केवल थकान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Improper handling worsens injury and complications.",
    "explanationHi": "Common farm injuries।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-807",
    "questionEn": "Burns should be cooled with:",
    "questionHi": "Thresher/Chaff Cutter Injury में क्या करें?",
    "optionsEn": [
      "Ice water",
      "Cool running water",
      "Hot water",
      "No water"
    ],
    "optionsHi": [
      "खींचें",
      "Bleeding Control, Amputated Part Preserve, Immediate Transport",
      "छोड़ दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cool (not ice cold) running water for 20 minutes.",
    "explanationHi": "Farm machinery injury management।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-808",
    "questionEn": "Most snake bites in India occur:",
    "questionHi": "Pesticide Spray से Exposure में क्या करें?",
    "optionsEn": [
      "In cities",
      "In rural/agricultural areas",
      "In mountains",
      "Near beaches"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "कपड़े उतारें, साबुन से धोएं, Fresh Air, अस्पताल",
      "अंदर रहें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Agricultural workers and rural residents at highest risk.",
    "explanationHi": "Remove clothes, wash, fresh air।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-809",
    "questionEn": "Most important initial step for any poisoning is:",
    "questionHi": "Well Accident (कुएं में गिरना) में क्या करें?",
    "optionsEn": [
      "Give antidote",
      "Ensure patient safety and airway",
      "Induce vomiting",
      "Give milk"
    ],
    "optionsHi": [
      "कूदें",
      "Rope/Ladder उतारें, Trained Person भेजें, Drowning Care",
      "छोड़ दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ABCs first; many poisonings cause altered consciousness.",
    "explanationHi": "Well rescue procedure।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-810",
    "questionEn": "Drowning death is primarily caused by:",
    "questionHi": "Bore Well Rescue में क्या विशेष ध्यान?",
    "optionsEn": [
      "Water temperature",
      "Hypoxia/oxygen deprivation",
      "Electrolyte changes",
      "Infection"
    ],
    "optionsHi": [
      "जल्दी खींचें",
      "O2 Supply, Parallel Tunnel, Specialized Team",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Drowning causes death through oxygen deprivation.",
    "explanationHi": "Specialized bore well rescue।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-811",
    "questionEn": "Time-sensitive emergencies include:",
    "questionHi": "Animal Attack (जंगली जानवर) में क्या करें?",
    "optionsEn": [
      "Chronic conditions",
      "Stroke, heart attack, severe bleeding",
      "Minor illnesses",
      "Skin rashes"
    ],
    "optionsHi": [
      "भागें",
      "शोर करें, Group में रहें, Wound Care, Rabies Vaccine",
      "लड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "These conditions require rapid intervention for best outcomes.",
    "explanationHi": "Animal attack management।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-812",
    "questionEn": "Safe patient transport requires:",
    "questionHi": "Cow/Buffalo Attack में क्या करें?",
    "optionsEn": [
      "Speed only",
      "Proper technique, communication, monitoring",
      "No preparation",
      "Single person always"
    ],
    "optionsHi": [
      "सामने खड़े रहें",
      "Side में जाएं, बाड़ के पीछे, Wound Care",
      "छूएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Safe transport combines technique, teamwork, and vigilance.",
    "explanationHi": "Move sideways, behind barrier।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-813",
    "questionEn": "Early defibrillation is important because:",
    "questionHi": "Lightning Strike से बचाव?",
    "optionsEn": [
      "It's easy",
      "VF deteriorates to asystole; earlier shock = better survival",
      "Always works",
      "No importance"
    ],
    "optionsHi": [
      "खुले में खड़े रहें",
      "Building/Car में जाएं, पेड़ के नीचे न जाएं, Squat करें",
      "पेड़ के नीचे",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "VF becomes less responsive to defibrillation over time.",
    "explanationHi": "Lightning safety measures।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-814",
    "questionEn": "Signs of adequate oxygenation include:",
    "questionHi": "Lightning Strike के बाद First Aid?",
    "optionsEn": [
      "Blue lips",
      "Pink mucous membranes, normal mental status",
      "Confusion",
      "Cyanosis"
    ],
    "optionsHi": [
      "छूएं नहीं",
      "Safe है छूना, CPR (यदि जरूरी), Burns का इलाज, अस्पताल",
      "भागें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Normal color and mentation indicate adequate oxygen delivery.",
    "explanationHi": "Safe to touch, CPR if needed।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-815",
    "questionEn": "When direct pressure fails, next step is:",
    "questionHi": "तूफान/आंधी में क्या करें?",
    "optionsEn": [
      "Give up",
      "Add more pressure, elevation, consider tourniquet",
      "Remove dressing",
      "Apply ice"
    ],
    "optionsHi": [
      "बाहर जाएं",
      "पक्के मकान में रहें, खिड़कियां बंद, बिजली के तारों से दूर",
      "देखें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Escalate interventions when initial measures fail.",
    "explanationHi": "Stay indoors during storm।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-816",
    "questionEn": "Children compensate for shock longer because:",
    "questionHi": "Domestic Violence Victim की मदद कैसे करें?",
    "optionsEn": [
      "They're smaller",
      "Strong cardiovascular reserve; then decompensate rapidly",
      "No compensation",
      "Always show symptoms early"
    ],
    "optionsHi": [
      "उपेक्षा करें",
      "सुरक्षित जगह, First Aid, 181/Police, Counseling Referral",
      "बीच में न आएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Children maintain BP until late; then deteriorate quickly.",
    "explanationHi": "Safe place, first aid, report।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-817",
    "questionEn": "Suspected fracture should be immobilized:",
    "questionHi": "Child Abuse के संकेत क्या हैं?",
    "optionsEn": [
      "After X-ray only",
      "In the field before movement",
      "Never",
      "Only in hospital"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Unexplained Injuries, Fear, Behavioral Changes, Neglect Signs",
      "खुश बच्चा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Immobilize suspected fractures before transport.",
    "explanationHi": "Signs of child abuse।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-818",
    "questionEn": "Jewelry should be removed from burned area because:",
    "questionHi": "Sexual Assault Survivor को कैसे मदद करें?",
    "optionsEn": [
      "It's expensive",
      "Swelling can make removal impossible and cut off circulation",
      "It's dirty",
      "No reason"
    ],
    "optionsHi": [
      "पूछताछ करें",
      "Believe करें, Safe Place, Consent से Care, 112/181, Hospital",
      "न मानें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Remove before swelling develops to prevent constriction.",
    "explanationHi": "Believe, support, refer।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-819",
    "questionEn": "Traditional snake bite treatments (cutting, sucking, tourniquets) are:",
    "questionHi": "Sexual Assault में Evidence Preservation क्यों जरूरी?",
    "optionsEn": [
      "Highly effective",
      "Harmful and should not be done",
      "Recommended",
      "First choice"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "Legal Case के लिए, कपड़े न धोएं, न नहाएं (जब तक Hospital)",
      "कोई मतलब नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Traditional treatments are ineffective and cause harm.",
    "explanationHi": "Preserve evidence for legal case।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-820",
    "questionEn": "Bringing the poison container to hospital is important for:",
    "questionHi": "Elder Abuse के प्रकार क्या हैं?",
    "optionsEn": [
      "No reason",
      "Identification and treatment planning",
      "Disposal",
      "Insurance"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Physical, Emotional, Financial, Neglect, Sexual",
      "केवल शारीरिक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Container/label helps identify poison and guide treatment.",
    "explanationHi": "Types of elder abuse।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-821",
    "questionEn": "After drowning rescue, patient should:",
    "questionHi": "MPHW को Referral कब करना चाहिए?",
    "optionsEn": [
      "Go home if feeling okay",
      "Be evaluated at hospital for delayed complications",
      "Resume swimming",
      "Rest 1 hour then leave"
    ],
    "optionsHi": [
      "कभी नहीं",
      "Red Flags, Beyond Scope, No Improvement, Serious Condition",
      "हमेशा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "All drowning victims need medical evaluation.",
    "explanationHi": "When to refer patients。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-822",
    "questionEn": "When unsure if diabetic emergency is low or high sugar:",
    "questionHi": "Referral Slip में क्या लिखें?",
    "optionsEn": [
      "Give insulin",
      "Give sugar - safer option",
      "Do nothing",
      "Give water only"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Name, Age, Vitals, History, First Aid Given, Reason for Referral",
      "केवल नाम",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sugar helps hypoglycemia; won't significantly harm hyperglycemia.",
    "explanationHi": "Referral slip contents।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-823",
    "questionEn": "Cervical collar should be sized:",
    "questionHi": "Transport के दौरान रोगी की देखभाल?",
    "optionsEn": [
      "One size fits all",
      "Appropriately for patient's neck",
      "As tight as possible",
      "Loosely"
    ],
    "optionsHi": [
      "छोड़ दें",
      "Vitals Monitor, Position, Reassure, Be Ready for CPR",
      "सो जाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Proper sizing ensures effective immobilization.",
    "explanationHi": "Care during transport।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-824",
    "questionEn": "Team approach to CPR allows:",
    "questionHi": "Spine Injury में Transport कैसे करें?",
    "optionsEn": [
      "Confusion",
      "Role assignment, reduced fatigue, better outcomes",
      "Slower care",
      "More errors"
    ],
    "optionsHi": [
      "उठाकर",
      "Stretcher पर, Log Roll, Head Immobilized, No Bending",
      "पीठ पर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Team CPR distributes tasks and maintains quality.",
    "explanationHi": "Spine immobilization during transport।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-825",
    "questionEn": "Recovery position maintains:",
    "questionHi": "Improvised Stretcher कैसे बनाएं?",
    "optionsEn": [
      "Cardiac output",
      "Open airway and allows drainage",
      "Blood pressure",
      "Consciousness"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "दो लंबी लकड़ी + चादर/कंबल = Stretcher",
      "केवल उठाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Recovery position keeps airway open and prevents aspiration.",
    "explanationHi": "Poles and blanket stretcher।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-826",
    "questionEn": "Pressure points are used when:",
    "questionHi": "Patient Carrying के तरीके क्या हैं?",
    "optionsEn": [
      "Always first",
      "Direct pressure isn't controlling bleeding",
      "Never",
      "For minor cuts"
    ],
    "optionsHi": [
      "खींचना",
      "Fireman's Carry, Chair Carry, Two-Person Carry, Blanket Drag",
      "छोड़ना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pressure points supplement direct pressure for proximal control.",
    "explanationHi": "Patient carrying methods।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-827",
    "questionEn": "Fluid bolus for shock is typically:",
    "questionHi": "Blanket Drag कब उपयोग करें?",
    "optionsEn": [
      "1 liter slowly",
      "250-500mL rapidly, then reassess",
      "10 liters at once",
      "No fluids"
    ],
    "optionsHi": [
      "हमेशा",
      "जब उठाना संभव न हो, खतरे से तुरंत हटाना हो",
      "कभी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Give bolus, assess response, repeat as needed.",
    "explanationHi": "When lifting not possible, quick evacuation।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-828",
    "questionEn": "Nerve injury with fracture presents as:",
    "questionHi": "Fireman's Carry किसके लिए उपयुक्त?",
    "optionsEn": [
      "Normal sensation",
      "Numbness, tingling, weakness distal to injury",
      "Increased sensation",
      "No changes"
    ],
    "optionsHi": [
      "Spine Injury",
      "होश में या बेहोश व्यक्ति (Spine Injury न हो)",
      "Heavy Person",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Nerve involvement causes sensory and motor deficits.",
    "explanationHi": "For conscious or unconscious without spine injury।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-829",
    "questionEn": "Child abuse should be suspected with burns that:",
    "questionHi": "एक व्यक्ति बेहोश व्यक्ति को सीढ़ियों से कैसे उतारे?",
    "optionsEn": [
      "Are accidental",
      "Have unusual patterns, inconsistent history, delay in seeking care",
      "Are minor",
      "From hot water"
    ],
    "optionsHi": [
      "फेंकें",
      "Drag करें (Head Uphill), या Chair Carry (2 लोग)",
      "छोड़ दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Non-accidental burns have characteristic patterns and history.",
    "explanationHi": "Head uphill when dragging down stairs。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-830",
    "questionEn": "Time to hospital after snake bite is:",
    "questionHi": "Home Accidents में सबसे आम क्या हैं?",
    "optionsEn": [
      "Not important",
      "Critical - delays worsen outcomes",
      "Days are acceptable",
      "Only if symptomatic"
    ],
    "optionsHi": [
      "गोली लगना",
      "Falls, Burns, Cuts, Poisoning, Choking, Electric Shock",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rapid transport for antivenom improves survival.",
    "explanationHi": "Common home accidents।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-831",
    "questionEn": "Supportive care in poisoning means:",
    "questionHi": "Kitchen Safety में क्या ध्यान रखें?",
    "optionsEn": [
      "Antidotes only",
      "Treating symptoms and maintaining vital functions",
      "No treatment",
      "Only observation"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Handles Inside, Hot Items Away, Fire Extinguisher, Gas Check",
      "सब खुला",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Most poisoning managed by supporting breathing, circulation, etc.",
    "explanationHi": "Kitchen safety measures।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-832",
    "questionEn": "Pool alarms are:",
    "questionHi": "Bathroom Safety में क्या करें?",
    "optionsEn": [
      "Unnecessary",
      "One layer of drowning prevention",
      "Complete protection",
      "Only for adults"
    ],
    "optionsHi": [
      "गीला रखें",
      "Non-Slip Mat, Grab Bars, Dry Floor, Medicine Locked",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Alarms are part of multi-layered prevention approach.",
    "explanationHi": "Bathroom safety measures।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-833",
    "questionEn": "A person with known epilepsy who has brief seizure and recovers:",
    "questionHi": "Staircase Safety में क्या करें?",
    "optionsEn": [
      "Always needs hospital",
      "May not need emergency if typical seizure and fully recovered",
      "Always needs 108",
      "Never needs observation"
    ],
    "optionsHi": [
      "अंधेरे में चलें",
      "Handrails, Good Lighting, No Clutter, Gates for Children",
      "छोड़ दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Typical brief seizure in known epileptic with full recovery may not need ED.",
    "explanationHi": "Staircase safety।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-834",
    "questionEn": "Patient comfort during transport is:",
    "questionHi": "Electrical Safety में क्या करें?",
    "optionsEn": [
      "Unimportant",
      "Important for reducing distress and movement",
      "Only for long distances",
      "Never considered"
    ],
    "optionsHi": [
      "Overload करें",
      "No Overloading, Cover Sockets, Dry Hands, Proper Earthing",
      "गीले हाथ",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Comfortable patient is calmer and moves less.",
    "explanationHi": "Electrical safety measures।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-835",
    "questionEn": "Interruptions in chest compressions should be:",
    "questionHi": "Fire Safety में Smoke Detector क्यों जरूरी?",
    "optionsEn": [
      "Frequent for rest",
      "Minimized to maintain coronary perfusion",
      "At least every minute",
      "Standard practice"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "Early Warning, सोते समय भी Alert",
      "सजावट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Interruptions drop coronary perfusion pressure; minimize them.",
    "explanationHi": "Smoke detector for early warning।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-836",
    "questionEn": "Oropharyngeal airway should be sized:",
    "questionHi": "घर में Fire Escape Plan कैसे बनाएं?",
    "optionsEn": [
      "One size fits all",
      "From corner of mouth to angle of jaw",
      "Randomly",
      "By weight only"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "2 Exit Routes, Meeting Point, Practice Drill, Emergency Numbers",
      "केवल एक रास्ता",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Proper sizing ensures effective airway maintenance.",
    "explanationHi": "Fire escape plan elements।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-837",
    "questionEn": "Clotting disorders affect bleeding management by:",
    "questionHi": "Carbon Monoxide Poisoning से बचाव?",
    "optionsEn": [
      "Making it easier",
      "Requiring more aggressive measures and possible specific treatment",
      "No effect",
      "Automatic healing"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Proper Ventilation, CO Detector, Generator Outside",
      "बंद कमरा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Coagulopathies need aggressive hemostasis and factor replacement.",
    "explanationHi": "CO poisoning prevention।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-838",
    "questionEn": "Tachypnea in shock represents:",
    "questionHi": "Carbon Monoxide Poisoning के लक्षण?",
    "optionsEn": [
      "Relaxation",
      "Body's attempt to compensate for acidosis",
      "Normal breathing",
      "Recovery sign"
    ],
    "optionsHi": [
      "खांसी",
      "Headache, Dizziness, Confusion, Nausea (Flu-like)",
      "बुखार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rapid breathing blows off CO2 to compensate for metabolic acidosis.",
    "explanationHi": "CO poisoning symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-839",
    "questionEn": "Ice application to fracture helps:",
    "questionHi": "Safe Sleeping Position for Infants?",
    "optionsEn": [
      "Heat injury",
      "Reduce swelling and pain",
      "Cause frostbite intentionally",
      "Speed healing"
    ],
    "optionsHi": [
      "Prone",
      "Supine (Back to Sleep) - SIDS Prevention",
      "Side",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cold reduces inflammation and provides analgesia.",
    "explanationHi": "Back sleeping prevents SIDS।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-840",
    "questionEn": "Shock in burns results from:",
    "questionHi": "Baby Proofing में क्या करें?",
    "optionsEn": [
      "Pain only",
      "Fluid loss and systemic inflammatory response",
      "Infection only",
      "Cold exposure"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Socket Covers, Cabinet Locks, Corner Guards, Gate at Stairs",
      "खुला छोड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Burns cause massive fluid shifts and inflammatory cascade.",
    "explanationHi": "Baby proofing measures।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-841",
    "questionEn": "Neurotoxic vs hemotoxic venom:",
    "questionHi": "Road Safety में सबसे महत्वपूर्ण क्या है?",
    "optionsEn": [
      "Same treatment",
      "Different clinical presentations and concerns",
      "No difference",
      "Only affects treatment location"
    ],
    "optionsHi": [
      "तेज चलना",
      "Helmet, Seatbelt, Speed Limit, No Drunk Driving",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Neurotoxic: paralysis, breathing failure. Hemotoxic: bleeding, swelling.",
    "explanationHi": "Basic road safety।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-842",
    "questionEn": "Anticholinergic toxidrome includes:",
    "questionHi": "Helmet कैसा होना चाहिए?",
    "optionsEn": [
      "SLUDGE symptoms",
      "Hot, dry, flushed, dilated pupils, confusion",
      "Pinpoint pupils",
      "Bradycardia"
    ],
    "optionsHi": [
      "कोई भी",
      "ISI Mark, Full Face, Proper Fit, Chin Strap Fastened",
      "खुला",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anticholinergic: 'hot as a hare, dry as a bone, red as a beet, mad as a hatter.'",
    "explanationHi": "Proper helmet characteristics।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-843",
    "questionEn": "Life jackets should be:",
    "questionHi": "Child Car Seat कब तक उपयोग करें?",
    "optionsEn": [
      "Optional",
      "Coast Guard approved and properly fitted",
      "Any type",
      "Only for non-swimmers"
    ],
    "optionsHi": [
      "1 साल",
      "12 साल या 145 cm Height तक (Booster Seat बाद में)",
      "5 साल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Proper life jackets essential for water safety.",
    "explanationHi": "Car seat until 12 years or 145cm।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-844",
    "questionEn": "Cardiac arrest in children is most often:",
    "questionHi": "Pedestrian Safety के नियम?",
    "optionsEn": [
      "Primary cardiac",
      "Secondary to respiratory arrest or shock",
      "Electrical cause",
      "Drug-related"
    ],
    "optionsHi": [
      "कहीं भी चलें",
      "Footpath पर, Zebra Crossing, देखकर पार करें",
      "दौड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pediatric arrest usually follows respiratory failure or shock.",
    "explanationHi": "Pedestrian safety rules।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-845",
    "questionEn": "Helicopter landing zone should be:",
    "questionHi": "Drink and Drive से कितने Accidents होते हैं?",
    "optionsEn": [
      "Any size",
      "At least 100x100 feet, clear of obstacles",
      "Near power lines",
      "Crowded area"
    ],
    "optionsHi": [
      "कम",
      "लगभग 30% Road Deaths में Alcohol की भूमिका",
      "कोई नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Safe LZ requires adequate space and no obstructions.",
    "explanationHi": "Alcohol involved in ~30% road deaths।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-846",
    "questionEn": "End-tidal CO2 during CPR helps assess:",
    "questionHi": "Mobile Phone और Driving क्यों खतरनाक?",
    "optionsEn": [
      "Blood pressure",
      "Effectiveness of compressions and ROSC",
      "Airway size",
      "Drug levels"
    ],
    "optionsHi": [
      "खतरनाक नहीं",
      "Distraction, Reaction Time बढ़ता है, Accident Risk 4x",
      "ठीक है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ETCO2 reflects pulmonary blood flow from compressions.",
    "explanationHi": "Phone use increases accident risk 4x।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-847",
    "questionEn": "Laryngospasm is:",
    "questionHi": "Two Wheeler पर तीन व्यक्ति क्यों खतरनाक?",
    "optionsEn": [
      "Relaxation",
      "Involuntary vocal cord closure blocking airway",
      "Normal breathing",
      "Coughing"
    ],
    "optionsHi": [
      "खतरनाक नहीं",
      "Balance बिगड़ता है, Braking कठिन, Illegal",
      "ठीक है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Laryngospasm: reflex closure of glottis blocking air entry.",
    "explanationHi": "Triple riding is dangerous and illegal।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-848",
    "questionEn": "Tension pneumothorax after trauma causes:",
    "questionHi": "Night Driving में क्या सावधानी?",
    "optionsEn": [
      "Improved breathing",
      "Cardiovascular collapse and respiratory distress",
      "No symptoms",
      "Better oxygenation"
    ],
    "optionsHi": [
      "तेज चलें",
      "Low Speed, High Beam Proper Use, Reflectors, Alert रहें",
      "जल्दी करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Tension pneumo: pressure builds, compresses heart and lungs.",
    "explanationHi": "Night driving precautions।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-849",
    "questionEn": "Massive hemorrhage protocol ensures:",
    "questionHi": "Fog में Driving कैसे करें?",
    "optionsEn": [
      "Slow blood delivery",
      "Rapid availability of blood products in balanced ratio",
      "Single component only",
      "No blood needed"
    ],
    "optionsHi": [
      "तेज चलें",
      "Low Speed, Fog Lights, Keep Distance, Hazard Lights",
      "Normal",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "MTP: rapid balanced transfusion for severe hemorrhage.",
    "explanationHi": "Driving in fog।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-850",
    "questionEn": "Pelvic fracture bleeding is difficult to control because:",
    "questionHi": "Aquaplaning क्या है?",
    "optionsEn": [
      "Small vessels",
      "Large vessel injury in non-compressible space",
      "Bleeding stops spontaneously",
      "Easy to bandage"
    ],
    "optionsHi": [
      "तैरना",
      "गीली सड़क पर Tire का Grip खोना",
      "उड़ना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pelvis: large vascular injury, can't directly compress.",
    "explanationHi": "Loss of grip on wet roads।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-851",
    "questionEn": "First aid provider should protect themselves from:",
    "questionHi": "Sports First Aid में कौन सी चोटें आम हैं?",
    "optionsEn": [
      "Nothing",
      "Contact with patient's wounds and blood",
      "Patient's emotions",
      "Documentation"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Sprains, Strains, Fractures, Concussion, Heat Illness",
      "केवल थकान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Universal precautions apply to burn wound care.",
    "explanationHi": "Common sports injuries।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-852",
    "questionEn": "Wound swabs after bite help identify:",
    "questionHi": "Sports में Warm-Up क्यों जरूरी?",
    "optionsEn": [
      "Venom type",
      "Bacteria for antibiotic selection",
      "Time of bite",
      "Animal species"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "Muscles Ready, Injury Prevention, Blood Flow बढ़ना",
      "Time Waste",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Culture helps guide antibiotic therapy if infection develops.",
    "explanationHi": "Warm-up prevents injuries।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-853",
    "questionEn": "Cholinergic toxidrome includes:",
    "questionHi": "Concussion के बाद खेल में वापसी कब?",
    "optionsEn": [
      "Dry skin",
      "SLUDGE symptoms, bradycardia, miosis",
      "Dilated pupils",
      "Hot skin"
    ],
    "optionsHi": [
      "तुरंत",
      "Symptom Free होने के बाद, Gradual Return Protocol",
      "कभी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cholinergic: excessive secretions, pinpoint pupils, slow HR.",
    "explanationHi": "Gradual return after symptom-free।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-854",
    "questionEn": "Teaching children to swim is:",
    "questionHi": "Second Impact Syndrome क्या है?",
    "optionsEn": [
      "Dangerous",
      "Important drowning prevention strategy",
      "Guarantee against drowning",
      "Only for pools"
    ],
    "optionsHi": [
      "सामान्य",
      "पहले Concussion से Recover होने से पहले दूसरा Concussion (Fatal)",
      "हल्का",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Swimming lessons reduce drowning risk but aren't guarantee.",
    "explanationHi": "Second concussion before recovery - serious।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-855",
    "questionEn": "Diabetic identification bracelet helps:",
    "questionHi": "Sports में Protective Gear क्या-क्या होना चाहिए?",
    "optionsEn": [
      "Fashion",
      "Rapid identification of condition in emergency",
      "Nothing",
      "Insurance"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Helmet, Pads, Guards, Proper Shoes, Mouthguard",
      "केवल Shoes",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Medical ID alerts responders to underlying conditions.",
    "explanationHi": "Protective sports gear।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-856",
    "questionEn": "Packaging for air transport requires:",
    "questionHi": "Exercise-Induced Asthma में क्या करें?",
    "optionsEn": [
      "No special consideration",
      "Securing IV lines, managing altitude effects, communication",
      "Less care",
      "Different CPR"
    ],
    "optionsHi": [
      "और व्यायाम",
      "Rest, Inhaler Use, Gradual Return, Warm Environment",
      "रोकें नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Air transport has special considerations for equipment and physiology.",
    "explanationHi": "Exercise-induced asthma management।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-857",
    "questionEn": "CPR feedback devices help:",
    "questionHi": "Sudden Cardiac Death in Athletes क्यों होती है?",
    "optionsEn": [
      "Confuse rescuers",
      "Improve compression quality through real-time guidance",
      "Slow down CPR",
      "Replace training"
    ],
    "optionsHi": [
      "थकान",
      "Underlying Heart Conditions (HCM, Arrhythmia)",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Feedback devices improve compression rate, depth, and recoil.",
    "explanationHi": "Underlying heart conditions cause SCD।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-858",
    "questionEn": "Hyperventilation during CPR is harmful because:",
    "questionHi": "Sports में Hydration कैसे Maintain करें?",
    "optionsEn": [
      "Gives too much oxygen",
      "Increases intrathoracic pressure, reduces venous return",
      "Impossible to do",
      "Helps circulation"
    ],
    "optionsHi": [
      "केवल प्यास लगे",
      "Before, During, After - Regular Fluids, Electrolytes in Prolonged",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Over-ventilation impairs venous return and cardiac output.",
    "explanationHi": "Hydration strategy for sports।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-859",
    "questionEn": "Point of care hemoglobin testing helps assess:",
    "questionHi": "Hyponatremia Exercise में क्यों होती है?",
    "optionsEn": [
      "Blood type",
      "Degree of blood loss",
      "Infection",
      "Clotting"
    ],
    "optionsHi": [
      "कम पानी",
      "अधिक पानी पीने से Sodium Dilution",
      "Dehydration",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hemoglobin level indicates anemia from blood loss.",
    "explanationHi": "Overhydration causes hyponatremia।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-860",
    "questionEn": "Epinephrine in anaphylactic shock works by:",
    "questionHi": "Running में Shin Splints क्या है?",
    "optionsEn": [
      "Relaxing muscles",
      "Reversing vasodilation and bronchospasm",
      "Causing sleep",
      "Reducing heart rate"
    ],
    "optionsHi": [
      "Fracture",
      "पिंडली में दर्द (Overuse Injury)",
      "Sprain",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Epinephrine counteracts allergic mediators' effects.",
    "explanationHi": "Shin pain from overuse।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-861",
    "questionEn": "Long bone fractures can cause fat embolism affecting:",
    "questionHi": "School Health Program में First Aid का क्या Role है?",
    "optionsEn": [
      "Skin only",
      "Lungs and brain",
      "Kidneys only",
      "Stomach"
    ],
    "optionsHi": [
      "कोई नहीं",
      "Injury Response, Health Awareness, Emergency Preparedness",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fat emboli lodge in pulmonary and cerebral circulation.",
    "explanationHi": "First aid role in schools।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-862",
    "questionEn": "Infection control in burns includes:",
    "questionHi": "School में First Aid Room में क्या होना चाहिए?",
    "optionsEn": [
      "No precautions",
      "Strict hand hygiene, clean technique, wound care",
      "Touch freely",
      "Share supplies"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "First Aid Kit, Stretcher, Privacy, Telephone, Emergency List",
      "केवल बिस्तर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Burns are susceptible to infection; strict precautions needed.",
    "explanationHi": "School first aid room requirements।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-863",
    "questionEn": "ASV dose is determined by:",
    "questionHi": "School में किन Teachers को First Aid Training मिलनी चाहिए?",
    "optionsEn": [
      "Patient weight only",
      "Amount of venom injected (clinical severity)",
      "Time of day",
      "Random"
    ],
    "optionsHi": [
      "किसी को नहीं",
      "सभी को, विशेषकर Sports/Science Teachers",
      "केवल Principal",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "ASV neutralizes venom; dose based on envenomation severity.",
    "explanationHi": "All teachers, especially sports/science।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-864",
    "questionEn": "QRS widening on ECG suggests:",
    "questionHi": "School में Fire Drill कितने समय में करें?",
    "optionsEn": [
      "Normal finding",
      "Sodium channel blocking drug toxicity (TCAs, etc.)",
      "Dehydration",
      "Infection"
    ],
    "optionsHi": [
      "साल में एक",
      "हर Term/Quarter में (3-4 बार साल में)",
      "कभी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Wide QRS indicates cardiac sodium channel blockade.",
    "explanationHi": "Fire drill every term।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-865",
    "questionEn": "Drain covers in pools should be:",
    "questionHi": "Students को कौन सी First Aid सिखाएं?",
    "optionsEn": [
      "Any type",
      "Compliant with anti-entrapment standards",
      "Decorative",
      "Optional"
    ],
    "optionsHi": [
      "Surgery",
      "Age-Appropriate: Wounds, Burns, Nosebleed, Choking, Emergency Numbers",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Proper drain covers prevent suction entrapment deaths.",
    "explanationHi": "Age-appropriate first aid for students।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-866",
    "questionEn": "Heart failure can cause pulmonary edema leading to:",
    "questionHi": "School Bus Safety में क्या सिखाएं?",
    "optionsEn": [
      "Better breathing",
      "Shortness of breath, pink frothy sputum",
      "No symptoms",
      "Weight loss"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "बैठकर रहें, Emergency Exit, Seatbelt, Emergency Contact",
      "दौड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fluid backs up into lungs causing respiratory distress.",
    "explanationHi": "School bus safety rules।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-867",
    "questionEn": "Ambulance stretcher safety includes:",
    "questionHi": "Playground Safety में क्या करें?",
    "optionsEn": [
      "No straps",
      "Proper locking, securing patient, side rails up",
      "Fast driving only",
      "Open doors"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Supervision, Safe Equipment, Soft Surface, Age-Appropriate",
      "बिना देखे छोड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Safety measures prevent falls and injuries during transport.",
    "explanationHi": "Playground safety measures।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-868",
    "questionEn": "CPR should continue until:",
    "questionHi": "Science Lab Safety में क्या करें?",
    "optionsEn": [
      "2 minutes only",
      "ROSC, professional takeover, exhaustion, or signs incompatible with life",
      "10 minutes",
      "Bystander leaves"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "PPE, Proper Storage, Supervision, Emergency Equipment",
      "खुला छोड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Clear endpoints for stopping CPR.",
    "explanationHi": "Lab safety measures।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-869",
    "questionEn": "Sellick's maneuver (cricoid pressure) was traditionally used to:",
    "questionHi": "Medical Emergency Policy School में क्या हो?",
    "optionsEn": [
      "Open airway",
      "Prevent aspiration during intubation (no longer routinely recommended)",
      "Cause vomiting",
      "Check breathing"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Action Plan, Contact List, Medical Records, Trained Staff",
      "केवल Doctor",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cricoid pressure: historical technique, efficacy questioned.",
    "explanationHi": "School medical emergency policy।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-870",
    "questionEn": "Blood transfusion reactions can include:",
    "questionHi": "Epileptic Student के लिए School में क्या करें?",
    "optionsEn": [
      "No reactions possible",
      "Fever, chills, allergic reactions, hemolysis",
      "Only positive effects",
      "Instant cure"
    ],
    "optionsHi": [
      "भर्ती न करें",
      "Staff Training, Action Plan, Medicine Access, Parent Communication",
      "छोड़ दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Transfusion reactions range from mild to life-threatening.",
    "explanationHi": "Support for epileptic students।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-871",
    "questionEn": "Mixed shock means:",
    "questionHi": "Workplace First Aid में Employer की क्या जिम्मेदारी है?",
    "optionsEn": [
      "One cause only",
      "Multiple shock mechanisms present simultaneously",
      "No shock",
      "Recovery"
    ],
    "optionsHi": [
      "कोई नहीं",
      "First Aid Kit, Trained First Aiders, Emergency Plan",
      "केवल Salary",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Patients can have overlapping shock types (e.g., septic + hypovolemic).",
    "explanationHi": "Employer's first aid responsibility।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-872",
    "questionEn": "Floating rib fractures can cause:",
    "questionHi": "Factories Act में First Aid के क्या Provisions हैं?",
    "optionsEn": [
      "No problems",
      "Internal organ injury (liver, spleen, kidney)",
      "Better breathing",
      "Stronger ribs"
    ],
    "optionsHi": [
      "कोई नहीं",
      "First Aid Box Per 150 Workers, Trained Person, Ambulance Room (500+)",
      "केवल Kit",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Lower rib fractures risk underlying organ damage.",
    "explanationHi": "Factories Act first aid provisions।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-873",
    "questionEn": "Pruritus (itching) after burns:",
    "questionHi": "Construction Site पर कौन सी चोटें आम हैं?",
    "optionsEn": [
      "Doesn't occur",
      "Common during healing; may need treatment",
      "Sign of infection",
      "Prevents healing"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Falls, Struck by Objects, Electrocution, Caught Between",
      "केवल थकान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Itching common and distressing during burn healing.",
    "explanationHi": "Fatal four in construction।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-874",
    "questionEn": "Neurotoxic envenomation monitoring should include:",
    "questionHi": "Fall Protection में क्या करें?",
    "optionsEn": [
      "Blood pressure only",
      "Respiratory function, neurological status, swallowing",
      "Weight",
      "Temperature only"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Guardrails, Safety Nets, Personal Fall Arrest System (Harness)",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Neurotoxins affect breathing and neurological function.",
    "explanationHi": "Fall protection measures।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-875",
    "questionEn": "Drug overdose patients need psychiatric evaluation because:",
    "questionHi": "PPE (Personal Protective Equipment) में क्या शामिल है?",
    "optionsEn": [
      "Not needed",
      "Many overdoses are intentional self-harm",
      "Only for children",
      "Legal requirement only"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Helmet, Gloves, Goggles, Ear Plugs, Safety Shoes, Mask",
      "केवल Helmet",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Intentional overdoses need mental health assessment.",
    "explanationHi": "Types of PPE।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-876",
    "questionEn": "Alcohol increases drowning risk by:",
    "questionHi": "Confined Space में खतरे क्या हैं?",
    "optionsEn": [
      "Making swimming easier",
      "Impairing judgment, coordination, and cold response",
      "No effect",
      "Protecting from cold"
    ],
    "optionsHi": [
      "कोई नहीं",
      "Low O2, Toxic Gases, Engulfment, Entrapment",
      "सुरक्षित",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Alcohol impairs abilities needed for water safety.",
    "explanationHi": "Confined space hazards।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-877",
    "questionEn": "Meningitis presents with:",
    "questionHi": "Confined Space Rescue में पहले क्या करें?",
    "optionsEn": [
      "Skin rash only",
      "Headache, fever, neck stiffness, photophobia",
      "No symptoms",
      "Cough"
    ],
    "optionsHi": [
      "अंदर जाएं",
      "अंदर न जाएं (बिना Training), Ventilation, Call Rescue Team",
      "कूदें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Classic meningitis triad: fever, headache, stiff neck.",
    "explanationHi": "Don't enter without training।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-878",
    "questionEn": "En route deterioration requires:",
    "questionHi": "Chemical Handling में SDS (Safety Data Sheet) क्या है?",
    "optionsEn": [
      "Continuing without change",
      "Reassessment and adjustment of care",
      "Faster driving only",
      "Ignoring"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Chemical की Safety Information, First Aid, Hazards",
      "Recipe",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Patient condition can change; ongoing assessment needed.",
    "explanationHi": "Chemical safety information sheet।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-879",
    "questionEn": "Neonatal resuscitation sequence emphasizes:",
    "questionHi": "Eye Wash Station कहां होना चाहिए?",
    "optionsEn": [
      "Chest compressions first",
      "Warmth, airway, breathing, then circulation if needed",
      "Drugs first",
      "No sequence needed"
    ],
    "optionsHi": [
      "कहीं भी",
      "Chemical Handling Area से 10 सेकंड की दूरी पर",
      "दूर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Newborn resuscitation: temperature, airway, then breathing priority.",
    "explanationHi": "Within 10 seconds of chemical area।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-880",
    "questionEn": "Oxygen toxicity can occur with:",
    "questionHi": "Emergency Shower कब उपयोग करें?",
    "optionsEn": [
      "Normal breathing",
      "Prolonged high concentration oxygen administration",
      "Any oxygen use",
      "Never"
    ],
    "optionsHi": [
      "कभी नहीं",
      "Chemical Spill on Body, Fire on Clothes",
      "नहाने के लिए",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "High FiO2 for extended periods can damage lungs.",
    "explanationHi": "For chemical spills on body।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-881",
    "questionEn": "Tranexamic acid (TXA) in trauma should be given within:",
    "questionHi": "First Aid में Ethical Principles क्या हैं?",
    "optionsEn": [
      "24 hours",
      "3 hours of injury for maximum benefit",
      "1 week",
      "No time limit"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Do No Harm, Consent, Confidentiality, Competence",
      "केवल इलाज",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "TXA most effective when given early after injury.",
    "explanationHi": "Ethical principles in first aid।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-882",
    "questionEn": "Cardiac index measures:",
    "questionHi": "Confidentiality का क्या अर्थ है?",
    "optionsEn": [
      "Blood pressure",
      "Cardiac output relative to body size",
      "Breathing rate",
      "Oxygen level"
    ],
    "optionsHi": [
      "सबको बताना",
      "रोगी की जानकारी गोपनीय रखना",
      "छिपाना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CI: cardiac output normalized to body surface area.",
    "explanationHi": "Keep patient information private।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-883",
    "questionEn": "Rehabilitation after fracture includes:",
    "questionHi": "कब Confidentiality तोड़ सकते हैं?",
    "optionsEn": [
      "Bed rest only",
      "Range of motion, strengthening, functional training",
      "No exercise",
      "Surgery only"
    ],
    "optionsHi": [
      "कभी नहीं",
      "Public Safety Risk, Legal Requirement, Patient's Best Interest",
      "हमेशा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rehab restores function after fracture healing.",
    "explanationHi": "Exceptions to confidentiality।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-884",
    "questionEn": "Pressure garments after burns help:",
    "questionHi": "Negligence क्या है?",
    "optionsEn": [
      "Nothing",
      "Reduce hypertrophic scarring",
      "Increase scarring",
      "Cause pain"
    ],
    "optionsHi": [
      "अच्छा इलाज",
      "Duty of Care में Failure से Harm",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Compression therapy helps minimize scar hypertrophy.",
    "explanationHi": "Failure in duty causing harm।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-885",
    "questionEn": "Children are more vulnerable to snake envenomation because:",
    "questionHi": "First Aider Negligence से कैसे बचे?",
    "optionsEn": [
      "They're braver",
      "Smaller body mass means higher venom concentration",
      "They see snakes better",
      "They move faster"
    ],
    "optionsHi": [
      "कुछ न करें",
      "Training के अंदर रहें, Documentation, Standard Care",
      "सब कुछ करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Same venom dose affects smaller child more severely.",
    "explanationHi": "Act within training, document。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-886",
    "questionEn": "Withdrawal syndromes can be life-threatening with:",
    "questionHi": "Abandonment क्या है?",
    "optionsEn": [
      "All drugs equally",
      "Alcohol and benzodiazepines especially",
      "Never dangerous",
      "Only illegal drugs"
    ],
    "optionsHi": [
      "साथ रहना",
      "Care शुरू करके बीच में छोड़ना",
      "मदद करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Alcohol/benzo withdrawal can cause seizures, delirium, death.",
    "explanationHi": "Leaving patient after starting care。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-887",
    "questionEn": "Never swim alone because:",
    "questionHi": "Care कब Transfer कर सकते हैं?",
    "optionsEn": [
      "It's boring",
      "No one available to recognize distress and help",
      "Swimming requires groups",
      "Water is dangerous without company"
    ],
    "optionsHi": [
      "कभी भी",
      "Higher Level Provider को, Proper Handover के साथ",
      "कभी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Buddy system ensures someone can get help if needed.",
    "explanationHi": "Transfer with proper handover।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-888",
    "questionEn": "Acute limb ischemia presents with:",
    "questionHi": "Scope of Practice का क्या अर्थ है?",
    "optionsEn": [
      "Warm, pink limb",
      "6 Ps: Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia",
      "No symptoms",
      "Swelling only"
    ],
    "optionsHi": [
      "सब कुछ करना",
      "Training और Authorization के अंदर काम करना",
      "कुछ नहीं करना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Classic presentation of acute arterial occlusion.",
    "explanationHi": "Work within training limits।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-889",
    "questionEn": "Critical care transport provides:",
    "questionHi": "Standard of Care क्या है?",
    "optionsEn": [
      "Basic care only",
      "Advanced monitoring and interventions during transport",
      "No care during transport",
      "Rest only"
    ],
    "optionsHi": [
      "कुछ भी",
      "Similar Training वाले व्यक्ति से Expected Level of Care",
      "कम Care",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Critical care transport: ICU-level care en route.",
    "explanationHi": "Expected level of care。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-890",
    "questionEn": "In witnessed VF arrest, immediate defibrillation is prioritized because:",
    "questionHi": "Duty to Act कब होती है?",
    "optionsEn": [
      "CPR not needed",
      "Early defibrillation has highest impact on survival",
      "Easier to do",
      "Always successful"
    ],
    "optionsHi": [
      "कभी नहीं",
      "Job Requirement, Contractual Obligation के तहत",
      "हमेशा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Early defib in VF dramatically improves survival.",
    "explanationHi": "When legally obligated。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-891",
    "questionEn": "Fibrinogen level in massive bleeding should be:",
    "questionHi": "First Aid से क्या Outcome Improve होता है?",
    "optionsEn": [
      "Not measured",
      "Monitored and replaced if low",
      "Always high",
      "Ignored"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Survival, Recovery Time, Complications कम",
      "कोई फर्क नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Fibrinogen needed for clot formation; may need replacement.",
    "explanationHi": "First aid improves outcomes।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-892",
    "questionEn": "Mechanical circulatory support (ECMO, IABP) may be used in:",
    "questionHi": "Bystander CPR से Survival कितना बढ़ता है?",
    "optionsEn": [
      "All shock",
      "Refractory cardiogenic shock",
      "Minor conditions",
      "Never"
    ],
    "optionsHi": [
      "कोई नहीं",
      "2-3 गुना (Double to Triple)",
      "10%",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Mechanical support for severe cardiogenic shock unresponsive to medications.",
    "explanationHi": "Bystander CPR doubles to triples survival।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-893",
    "questionEn": "Return to activity after fracture depends on:",
    "questionHi": "Early Defibrillation से Survival कितना बढ़ता है?",
    "optionsEn": [
      "Patient preference only",
      "Fracture healing, strength recovery, functional testing",
      "Time alone",
      "Nothing specific"
    ],
    "optionsHi": [
      "कोई नहीं",
      "हर मिनट देरी से 7-10% कम, जल्दी मिले तो 70%+ Survival",
      "1%",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple factors determine safe return to activities.",
    "explanationHi": "Early defibrillation critical।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-894",
    "questionEn": "Hyperthermia (heat stroke) requires:",
    "questionHi": "Bleeding Control से Trauma Death कितनी रोकी जा सकती है?",
    "optionsEn": [
      "Warming",
      "Rapid cooling and supportive care",
      "No treatment",
      "Fluids only"
    ],
    "optionsHi": [
      "कोई नहीं",
      "20% Preventable Deaths",
      "100%",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Heat stroke: medical emergency requiring aggressive cooling.",
    "explanationHi": "20% of trauma deaths preventable。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-895",
    "questionEn": "Long-term psychological effects of burns include:",
    "questionHi": "Burns में ठंडे पानी से Outcome कैसे बेहतर होता है?",
    "optionsEn": [
      "None",
      "PTSD, depression, body image issues",
      "Happiness",
      "No mental effects"
    ],
    "optionsHi": [
      "कोई फर्क नहीं",
      "Tissue Damage कम, Healing बेहतर, Scarring कम",
      "खराब होता है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Burns have significant psychological impact requiring support.",
    "explanationHi": "Cold water improves burn outcomes।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-896",
    "questionEn": "What is the order of rescue options in water emergency from safest to riskiest?",
    "questionHi": "Stroke में FAST से क्या होता है?",
    "optionsEn": [],
    "optionsHi": [
      "कोई फर्क नहीं",
      "तेज Treatment, Brain Damage कम, Better Recovery",
      "देरी होती है",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "FAST recognition improves stroke outcomes।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-897",
    "questionEn": "What dose of chewable aspirin is given for suspected heart attack?",
    "questionHi": "Heart Attack में तुरंत Aspirin से क्या होता है?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "Clot नहीं बढ़ता, Survival बढ़ता है",
      "नुकसान",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Aspirin prevents clot growth。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-898",
    "questionEn": "What is the National Poison Information Centre toll-free number in India?",
    "questionHi": "Anaphylaxis में Epinephrine से जीवन कैसे बचता है?",
    "optionsEn": [],
    "optionsHi": [
      "नहीं बचता",
      "Airway Open, BP Maintain, Immediate Effect",
      "देर से",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Epinephrine opens airway, maintains BP。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-899",
    "questionEn": "A 65-year-old woman suddenly develops one-sided weakness, facial droop, and slurred speech while cooking. What do you suspect and what are your actions?",
    "questionHi": "Choking में Back Blows/Heimlich से क्या होता है?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ नहीं",
      "Airway Clear, Asphyxiation रुकती है, Life Saved",
      "खतरनाक",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Clears airway, prevents suffocation。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-900",
    "questionEn": "You arrive at an accident scene with multiple casualties. How do you approach this situation?",
    "questionHi": "First Aid का Ultimate Goal क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "कागज़ी काम",
      "जीवन बचाना, पीड़ा कम करना, Recovery में मदद",
      "केवल देखना",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Save life, reduce suffering, aid recovery।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Principles",
    "tags": [
      "principles"
    ]
  },
  {
    "id": "FIRST-AID-901",
    "questionEn": "First aid should be given:",
    "questionHi": "MPHW के लिए First Aid Training में क्या शामिल होना चाहिए?",
    "optionsEn": [
      "Only by doctors",
      "By anyone trained in first aid",
      "Only in hospitals",
      "Never"
    ],
    "optionsHi": [
      "केवल Theory",
      "BLS, Bleeding, Burns, Fractures, Delivery, Poisoning, Bites, Emergency Referral",
      "Surgery",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "First aid can be provided by any trained individual.",
    "explanationHi": "Comprehensive first aid training for MPHW।",
    "difficulty": "easy",
    "topic": "first-aid",
    "subtopic": "Principles",
    "tags": [
      "principles"
    ]
  },
  {
    "id": "FIRST-AID-902",
    "questionEn": "The purpose of CPR is to:",
    "questionHi": "Rural First Aid में सबसे बड़ी Challenge क्या है?",
    "optionsEn": [
      "Restart the heart always",
      "Maintain blood flow to brain and heart until definitive care",
      "Replace defibrillation",
      "Prevent death always"
    ],
    "optionsHi": [
      "Training",
      "Distance to Hospital, Transport Delay, Limited Resources",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CPR maintains circulation until heart can be restarted.",
    "explanationHi": "Rural challenges in first aid।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-903",
    "questionEn": "The most common cause of airway obstruction in unconscious patients is:",
    "questionHi": "MPHW द्वारा Community में First Aid Awareness कैसे बढ़ाएं?",
    "optionsEn": [
      "Foreign body",
      "Tongue falling back",
      "Vomit",
      "Swelling"
    ],
    "optionsHi": [
      "कुछ न करें",
      "IEC, Demonstrations, Training Camps, School Programs",
      "केवल Poster",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Muscle relaxation allows tongue to obstruct pharynx.",
    "explanationHi": "Community awareness methods।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-904",
    "questionEn": "Life-threatening bleeding should be controlled:",
    "questionHi": "Village Level First Aid Committee में कौन हो?",
    "optionsEn": [
      "Last",
      "Immediately and before airway if massive hemorrhage",
      "After transport",
      "Never"
    ],
    "optionsHi": [
      "केवल Doctor",
      "Sarpanch, ASHA, ANM, AWW, Teachers, Youth Leaders",
      "कोई नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "C-ABC: catastrophic bleeding may take priority over airway.",
    "explanationHi": "Village first aid committee members।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-905",
    "questionEn": "The goal of shock treatment is to:",
    "questionHi": "Emergency Transport System गांव में कैसे बनाएं?",
    "optionsEn": [
      "Lower blood pressure",
      "Restore adequate tissue perfusion",
      "Cause vasoconstriction",
      "Reduce heart rate"
    ],
    "optionsHi": [
      "कुछ न करें",
      "Vehicle List, Driver Contacts, Fuel Fund, 24x7 Availability",
      "केवल 108",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Treatment aims to restore oxygen delivery to tissues.",
    "explanationHi": "Village emergency transport system।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-906",
    "questionEn": "The main purposes of splinting are to:",
    "questionHi": "MPHW First Aid Kit में कौन सी Medicines होनी चाहिए?",
    "optionsEn": [
      "Speed healing",
      "Reduce pain, prevent further injury, allow safe transport",
      "Replace surgery",
      "Diagnose fracture"
    ],
    "optionsHi": [
      "Antibiotics",
      "Paracetamol, ORS, Antiseptic, Antacid, Antihistamine (Basic)",
      "Surgery Kit",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Splinting provides temporary stabilization for transport.",
    "explanationHi": "Basic medicines in MPHW kit।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-907",
    "questionEn": "The goal of burn first aid is to:",
    "questionHi": "Snake Bite ग्रामीण क्षेत्रों में क्यों खतरनाक?",
    "optionsEn": [
      "Apply ointments",
      "Stop burning, cool, cover, and seek care",
      "Leave alone",
      "Apply pressure"
    ],
    "optionsHi": [
      "खतरनाक नहीं",
      "देरी, गलत उपचार, Antivenom दूर",
      "एक जैसा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Systematic approach to burn first aid.",
    "explanationHi": "Rural snake bite challenges।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-908",
    "questionEn": "The key message for snake bites is:",
    "questionHi": "Snake Bite के लिए Pressure Immobilization Technique कब?",
    "optionsEn": [
      "Traditional remedies work",
      "Immobilize and rapid transport for antivenom",
      "Cut and suck venom",
      "Apply tourniquet"
    ],
    "optionsHi": [
      "हमेशा",
      "Neurotoxic Snakes (Krait, Cobra) - भारत में विवादित",
      "कभी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Antivenom is the only effective treatment.",
    "explanationHi": "PIT for neurotoxic snakes।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-909",
    "questionEn": "General approach to any poisoning starts with:",
    "questionHi": "Drowning Prevention गांव में कैसे करें?",
    "optionsEn": [
      "Antidotes",
      "Ensure safety and support ABCs",
      "Induce vomiting",
      "Give milk"
    ],
    "optionsHi": [
      "कुछ न करें",
      "तालाब पर Fence, Swimming Training, Supervision, Warning Signs",
      "तालाब बंद करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Basic life support takes priority in poisoning.",
    "explanationHi": "Rural drowning prevention।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-910",
    "questionEn": "The priority in drowning rescue is:",
    "questionHi": "Agricultural Burns (खेत में जलना) आम कैसे?",
    "optionsEn": [
      "Jump in immediately",
      "Safe rescue without becoming another victim",
      "Wait for professionals only",
      "Document the scene"
    ],
    "optionsHi": [
      "आम नहीं",
      "Stubble Burning, Cooking (चूल्हा), LPG Cylinder Blast",
      "कभी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rescuer safety ensures ability to help.",
    "explanationHi": "Common causes of rural burns।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-911",
    "questionEn": "Time-critical emergencies require:",
    "questionHi": "Tetanus Prevention के लिए क्या जरूरी है?",
    "optionsEn": [
      "Waiting for symptoms to worsen",
      "Rapid recognition and immediate action",
      "Multiple confirmations",
      "Slow evaluation"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Wound Cleaning, Tetanus Vaccination, Booster",
      "केवल दवाई",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Quick action saves lives in emergencies.",
    "explanationHi": "Tetanus prevention measures।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-912",
    "questionEn": "Effective handover ensures:",
    "questionHi": "Dirty Wound में Tetanus का खतरा कब अधिक?",
    "optionsEn": [
      "Confusion",
      "Continuity of care",
      "Delayed treatment",
      "Lost information"
    ],
    "optionsHi": [
      "कभी नहीं",
      "Soil/Manure Contamination, Deep Puncture, Crush Injury",
      "Clean Wound में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Good handover maintains care quality during transition.",
    "explanationHi": "Tetanus-prone wound characteristics।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-913",
    "questionEn": "In BLS, checking for breathing should take no more than:",
    "questionHi": "TT Injection कहां लगाते हैं?",
    "optionsEn": [
      "30 seconds",
      "10 seconds",
      "1 minute",
      "5 minutes"
    ],
    "optionsHi": [
      "पेट में",
      "Deltoid (ऊपरी बांह) - IM",
      "जांघ में",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Brief check to minimize delay in starting CPR.",
    "explanationHi": "TT injection site।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-914",
    "questionEn": "Rescue breaths should make the chest:",
    "questionHi": "Rabies Prevention में PEP क्या है?",
    "optionsEn": [
      "Stay still",
      "Rise visibly",
      "Move randomly",
      "Expand maximally"
    ],
    "optionsHi": [
      "दवाई",
      "Post-Exposure Prophylaxis (Vaccine + RIG)",
      "Surgery",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Visible chest rise confirms adequate ventilation.",
    "explanationHi": "Rabies post-exposure treatment。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-915",
    "questionEn": "Tourniquet application site is:",
    "questionHi": "Dog Bite Category III में क्या देना चाहिए?",
    "optionsEn": [
      "Over the wound",
      "Distal to wound",
      "2-3 inches proximal to wound",
      "On the neck"
    ],
    "optionsHi": [
      "केवल Vaccine",
      "Vaccine + Rabies Immunoglobulin (RIG)",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Tourniquet above wound (toward heart), not over joint.",
    "explanationHi": "Category III needs vaccine and RIG।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-916",
    "questionEn": "Early shock compensation maintains:",
    "questionHi": "ARV (Anti-Rabies Vaccine) Schedule क्या है?",
    "optionsEn": [
      "Low blood pressure",
      "Blood pressure through vasoconstriction and tachycardia",
      "Unconsciousness",
      "Bradycardia"
    ],
    "optionsHi": [
      "1 Dose",
      "Day 0, 3, 7, 14, 28 (Essen Regimen) या Updated Zagreb",
      "10 Doses",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Body compensates to maintain BP initially.",
    "explanationHi": "Rabies vaccine schedule।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-917",
    "questionEn": "Checking circulation after splinting ensures:",
    "questionHi": "Heat Wave में क्या सावधानी?",
    "optionsEn": [
      "Splint looks good",
      "Blood flow is not compromised",
      "Pain is gone",
      "Fracture is healed"
    ],
    "optionsHi": [
      "धूप में काम",
      "अंदर रहें, Hydration, Light Clothes, ORS, Avoid Peak Hours",
      "व्यायाम करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Circulation check prevents ischemic injury.",
    "explanationHi": "Heat wave precautions।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-918",
    "questionEn": "Burns requiring urgent referral include:",
    "questionHi": "Cold Wave में क्या सावधानी?",
    "optionsEn": [
      "Minor sunburn",
      "Face, hands, feet, genitals, full thickness, electrical",
      "Any redness",
      "First degree anywhere"
    ],
    "optionsHi": [
      "हल्के कपड़े",
      "गर्म कपड़े, Layers, आग से दूर (CO Risk), Elderly/Children Care",
      "खुला रहें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Special areas and deep burns need specialist care.",
    "explanationHi": "Cold wave precautions।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-919",
    "questionEn": "Dog bite wound washing should continue for:",
    "questionHi": "Infant में Emergency Signs क्या हैं?",
    "optionsEn": [
      "Quick rinse",
      "At least 15 minutes",
      "Until next day",
      "No washing needed"
    ],
    "optionsHi": [
      "सामान्य",
      "Not Feeding, Convulsions, Fast Breathing, Cold, Jaundice Early",
      "रोना",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Thorough washing significantly reduces rabies risk.",
    "explanationHi": "Infant danger signs।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-920",
    "questionEn": "Inducing vomiting is contraindicated for:",
    "questionHi": "बच्चे में Pneumonia के Emergency Signs?",
    "optionsEn": [
      "Food poisoning",
      "Corrosives, petroleum products, unconscious patients",
      "All drugs",
      "Paracetamol"
    ],
    "optionsHi": [
      "खांसी",
      "Chest Indrawing, Fast Breathing, Not Feeding, Cyanosis",
      "बुखार",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Vomiting causes more harm in these situations.",
    "explanationHi": "Pneumonia emergency signs in children।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-921",
    "questionEn": "All drowning survivors should:",
    "questionHi": "बच्चे में Severe Diarrhea के Signs?",
    "optionsEn": [
      "Go home immediately",
      "Be evaluated at hospital",
      "Resume swimming",
      "Rest for 1 hour only"
    ],
    "optionsHi": [
      "थोड़ा ढीला",
      "Sunken Eyes, Skin Pinch Slow, Lethargy, No Urine",
      "सामान्य",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Delayed complications require medical evaluation.",
    "explanationHi": "Severe dehydration signs।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-922",
    "questionEn": "FAST for stroke stands for:",
    "questionHi": "ORS का Formula (घर पर)?",
    "optionsEn": [
      "Fast Acting Stroke Treatment",
      "Face, Arms, Speech, Time",
      "First Aid Stroke Team",
      "Fluid And Support Therapy"
    ],
    "optionsHi": [
      "चीनी पानी",
      "1 लीटर पानी + 6 चम्मच चीनी + आधा चम्मच नमक",
      "केवल नमक",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "FAST: stroke recognition tool.",
    "explanationHi": "Homemade ORS formula।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-923",
    "questionEn": "Spinal precautions include:",
    "questionHi": "ORS Packet को कितने पानी में मिलाएं?",
    "optionsEn": [
      "Free neck movement",
      "Manual stabilization, collar, board, minimal movement",
      "Sitting up",
      "Walking"
    ],
    "optionsHi": [
      "आधा लीटर",
      "1 लीटर (Packet पर लिखे अनुसार)",
      "2 लीटर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Multiple measures protect potentially injured spine.",
    "explanationHi": "Mix ORS packet in 1 liter water।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-924",
    "questionEn": "AED should be used:",
    "questionHi": "बने हुए ORS को कितनी देर तक उपयोग कर सकते हैं?",
    "optionsEn": [
      "Only by doctors",
      "As soon as available in cardiac arrest",
      "After 30 minutes of CPR",
      "Never by laypeople"
    ],
    "optionsHi": [
      "1 दिन",
      "24 घंटे के भीतर (Refrigerate करें)",
      "1 सप्ताह",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Early defibrillation saves lives; AEDs designed for public use.",
    "explanationHi": "Use ORS within 24 hours।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-925",
    "questionEn": "The recovery position is used for:",
    "questionHi": "Zinc Supplementation Diarrhea में क्यों?",
    "optionsEn": [
      "Cardiac arrest",
      "Unconscious breathing patient",
      "Choking",
      "Active seizure"
    ],
    "optionsHi": [
      "जरूरी नहीं",
      "Duration कम, Future Episodes कम, Recovery बेहतर",
      "नुकसान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Recovery position maintains airway and prevents aspiration.",
    "explanationHi": "Zinc benefits in diarrhea।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-926",
    "questionEn": "Signs of internal bleeding include:",
    "questionHi": "Fever में Tepid Sponging कैसे करें?",
    "optionsEn": [
      "Only external wounds",
      "Shock signs without visible blood loss",
      "Improved consciousness",
      "High blood pressure"
    ],
    "optionsHi": [
      "ठंडे पानी से",
      "गुनगुने पानी से (Room Temperature), 15-20 मिनट",
      "गर्म पानी से",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Internal bleeding causes shock without visible hemorrhage.",
    "explanationHi": "Tepid sponging technique।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-927",
    "questionEn": "Anaphylaxis first-line treatment is:",
    "questionHi": "Febrile Seizure में क्या करें?",
    "optionsEn": [
      "Antihistamines",
      "Adrenaline/epinephrine",
      "Steroids",
      "Fluids only"
    ],
    "optionsHi": [
      "मुंह में कुछ डालें",
      "करवट लेटाएं, Time Note करें, Sharp Objects हटाएं, 5 मिनट से अधिक हो तो अस्पताल",
      "जकड़ें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Adrenaline is essential first-line treatment for anaphylaxis.",
    "explanationHi": "Febrile seizure management।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-928",
    "questionEn": "Open fractures are emergencies because:",
    "questionHi": "बच्चे में High Fever (>40°C) में क्या करें?",
    "optionsEn": [
      "They look bad",
      "High infection risk and possible severe blood loss",
      "They always need amputation",
      "They heal faster"
    ],
    "optionsHi": [
      "इंतजार करें",
      "Paracetamol, Sponging, Light Clothes, Fluids, अस्पताल",
      "ठंडे पानी में डालें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Open fractures need urgent treatment to prevent complications.",
    "explanationHi": "High fever management in children।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-929",
    "questionEn": "Cool running water for burns should continue for:",
    "questionHi": "Paracetamol Dose बच्चों में कितनी?",
    "optionsEn": [
      "1 minute",
      "20 minutes",
      "Only until pain stops",
      "Never use water"
    ],
    "optionsHi": [
      "वयस्क जैसी",
      "10-15 mg/kg हर 4-6 घंटे (Max 4 Doses/Day)",
      "कोई Dose नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "20 minutes of cooling reduces tissue damage.",
    "explanationHi": "Pediatric paracetamol dose।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-930",
    "questionEn": "Rabies is nearly 100% fatal once:",
    "questionHi": "Aspirin बच्चों को क्यों नहीं देना चाहिए?",
    "optionsEn": [
      "Bitten",
      "Symptoms appear",
      "Exposed",
      "Vaccinated"
    ],
    "optionsHi": [
      "देना चाहिए",
      "Reye's Syndrome का खतरा",
      "कोई कारण नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Rabies is fatal once clinical symptoms develop.",
    "explanationHi": "Aspirin contraindicated in children due to Reye's।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-931",
    "questionEn": "Carbon monoxide is dangerous because:",
    "questionHi": "Emergency में Pregnant Woman को कैसे लेटाएं?",
    "optionsEn": [
      "Strong smell warns you",
      "Colorless, odorless, causes silent poisoning",
      "Only affects lungs",
      "Easy to detect"
    ],
    "optionsHi": [
      "पीठ के बल",
      "Left Lateral Position (बाईं करवट)",
      "पेट के बल",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "CO cannot be detected without special equipment.",
    "explanationHi": "Left lateral for pregnant women।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-932",
    "questionEn": "Drowning CPR differs from regular CPR by:",
    "questionHi": "Eclampsia (Pregnancy में Seizure) में क्या करें?",
    "optionsEn": [
      "No differences",
      "Giving 5 initial rescue breaths before compressions",
      "Compressions only",
      "No rescue breaths"
    ],
    "optionsHi": [
      "कुछ न करें",
      "Protect from Injury, O2, Left Lateral, Mg Sulphate (Hospital), अस्पताल",
      "मुंह में कुछ डालें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Drowning is hypoxic arrest; oxygen priority.",
    "explanationHi": "Eclampsia emergency management।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-933",
    "questionEn": "During seizure, you should NOT:",
    "questionHi": "Postpartum Hemorrhage में Emergency क्या करें?",
    "optionsEn": [
      "Clear the area",
      "Time the seizure",
      "Put anything in mouth",
      "Stay calm"
    ],
    "optionsHi": [
      "इंतजार करें",
      "Fundal Massage, Breastfeeding, Oxytocin (Hospital), अस्पताल",
      "छोड़ दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 2,
    "explanationEn": "Nothing should be placed in mouth during seizure.",
    "explanationHi": "PPH emergency management।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-934",
    "questionEn": "SBAR format is used for:",
    "questionHi": "Retained Placenta में क्या करें?",
    "optionsEn": [
      "Medical math",
      "Structured communication during handover",
      "Treatment protocols",
      "Equipment checks"
    ],
    "optionsHi": [
      "खींचें",
      "खींचें नहीं, अस्पताल तुरंत",
      "इंतजार करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "SBAR ensures clear, complete information transfer.",
    "explanationHi": "Don't pull, go to hospital।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-935",
    "questionEn": "Chest compression fraction should be:",
    "questionHi": "Cord Presentation/Prolapse में क्या करें?",
    "optionsEn": [
      "Less than 50%",
      "At least 60%, ideally >80%",
      "100% always possible",
      "Not measured"
    ],
    "optionsHi": [
      "Normal Delivery",
      "Cord को Warm Moist रखें, Knee-Chest Position, Emergency C-Section",
      "खींचें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "High CCF improves survival; minimize interruptions.",
    "explanationHi": "Cord prolapse emergency।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-936",
    "questionEn": "Agonal breathing is:",
    "questionHi": "Newborn Resuscitation में Golden Minute क्या है?",
    "optionsEn": [
      "Normal breathing",
      "Abnormal gasping that indicates need for CPR",
      "Hyperventilation",
      "Recovery sign"
    ],
    "optionsHi": [
      "5 मिनट",
      "पहले 1 मिनट में Effective Ventilation शुरू करना",
      "10 मिनट",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Agonal breathing is not normal breathing; start CPR.",
    "explanationHi": "Start ventilation in first minute。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-937",
    "questionEn": "Wound dressing should be:",
    "questionHi": "Newborn में Initial Steps क्या हैं?",
    "optionsEn": [
      "Removed frequently to check",
      "Left in place with more added if soaked through",
      "Tight as possible",
      "Changed every minute"
    ],
    "optionsHi": [
      "CPR",
      "Warm, Dry, Stimulate, Position, Clear Airway",
      "केवल O2",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Don't disturb clot; add more dressing if needed.",
    "explanationHi": "Initial newborn care steps।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-938",
    "questionEn": "Keep shock patient warm because:",
    "questionHi": "Newborn में Heart Rate <60/min पर क्या करें?",
    "optionsEn": [
      "It doesn't matter",
      "Hypothermia worsens coagulopathy and outcomes",
      "They feel cold",
      "It looks professional"
    ],
    "optionsHi": [
      "इंतजार करें",
      "Chest Compressions शुरू करें (3:1)",
      "केवल O2",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Warmth helps maintain clotting and improve outcomes.",
    "explanationHi": "Start compressions for HR <60。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-939",
    "questionEn": "RICE treatment is used for:",
    "questionHi": "Low Birth Weight Baby को गर्म कैसे रखें?",
    "optionsEn": [
      "Fractures only",
      "Soft tissue injuries (sprains, strains)",
      "Burns",
      "Poisoning"
    ],
    "optionsHi": [
      "अलग रखें",
      "Kangaroo Mother Care, Cap, Socks, Warm Room",
      "ठंडे में रखें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "RICE: Rest, Ice, Compression, Elevation for soft tissue.",
    "explanationHi": "Keeping LBW baby warm。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-940",
    "questionEn": "Never apply to burns:",
    "questionHi": "Asphyxiated Newborn में क्या देखें?",
    "optionsEn": [
      "Clean dressings",
      "Butter, toothpaste, oil",
      "Cool water",
      "Cling film"
    ],
    "optionsHi": [
      "रंग",
      "APGAR Score, Breathing, Heart Rate, Muscle Tone, Reflexes",
      "केवल वजन",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Traditional remedies trap heat and increase infection.",
    "explanationHi": "Assessment of asphyxiated newborn।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-941",
    "questionEn": "Post-exposure rabies prophylaxis should start:",
    "questionHi": "CPR का Full Form क्या है?",
    "optionsEn": [
      "When symptoms appear",
      "Immediately (Day 0)",
      "After 10-day observation",
      "Only if animal dies"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Cardio Pulmonary Resuscitation",
      "Central Processing Room",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Start PEP immediately; don't wait for symptoms.",
    "explanationHi": "Cardio Pulmonary Resuscitation।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-942",
    "questionEn": "Keep poison container because:",
    "questionHi": "AED का Full Form क्या है?",
    "optionsEn": [
      "Evidence for police",
      "Helps identify poison for treatment",
      "Dispose properly later",
      "Required by law only"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Automated External Defibrillator",
      "Automatic Emergency Device",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Container/label guides treatment decisions.",
    "explanationHi": "Automated External Defibrillator।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-943",
    "questionEn": "Hypothermia in drowning may be protective because:",
    "questionHi": "BLS का Full Form क्या है?",
    "optionsEn": [
      "It isn't",
      "Cold reduces brain oxygen requirement",
      "Warm water is better",
      "No effect on survival"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Basic Life Support",
      "Better Life System",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Cold may provide neuroprotection during submersion.",
    "explanationHi": "Basic Life Support।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-944",
    "questionEn": "Heart attack differs from cardiac arrest in that:",
    "questionHi": "ACLS का Full Form क्या है?",
    "optionsEn": [
      "Same thing",
      "Heart attack = circulation problem; cardiac arrest = heart stopped",
      "Heart attack is worse",
      "Cardiac arrest is minor"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Advanced Cardiovascular Life Support",
      "Automatic Control System",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Heart attack may lead to cardiac arrest but is different condition.",
    "explanationHi": "Advanced Cardiovascular Life Support。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-945",
    "questionEn": "Move a casualty immediately only if:",
    "questionHi": "SAMPLE में Full Form क्या है?",
    "optionsEn": [
      "Always move immediately",
      "Immediate danger exists at scene",
      "Easier to treat elsewhere",
      "Patient requests"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Signs/Symptoms, Allergies, Medications, Past History, Last Intake, Events",
      "Example",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Move only when danger outweighs injury risk from movement.",
    "explanationHi": "SAMPLE history mnemonic।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-946",
    "questionEn": "Pediatric CPR emphasizes:",
    "questionHi": "RICE का Full Form क्या है?",
    "optionsEn": [
      "Compressions only",
      "Ventilation because most pediatric arrests are respiratory",
      "No differences from adult",
      "Slower rate"
    ],
    "optionsHi": [
      "चावल",
      "Rest, Ice, Compression, Elevation",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Children usually arrest from respiratory causes.",
    "explanationHi": "RICE for sprains।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-947",
    "questionEn": "Choking with effective cough should be managed by:",
    "questionHi": "FAST का Full Form (Stroke के लिए) क्या है?",
    "optionsEn": [
      "Immediate Heimlich",
      "Encouraging continued coughing",
      "Back blows",
      "Calling ambulance immediately"
    ],
    "optionsHi": [
      "तेज",
      "Face, Arm, Speech, Time",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Don't interfere with effective cough.",
    "explanationHi": "FAST for stroke recognition।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-948",
    "questionEn": "Elevate bleeding limb to:",
    "questionHi": "AVPU का Full Form क्या है?",
    "optionsEn": [
      "Make it hurt more",
      "Reduce hydrostatic pressure at wound",
      "Nothing useful",
      "Increase bleeding"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Alert, Voice, Pain, Unresponsive",
      "Automatic",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Elevation reduces blood pressure at wound site.",
    "explanationHi": "AVPU consciousness scale。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-949",
    "questionEn": "Don't give fluids by mouth to shock patients because:",
    "questionHi": "GCS का Full Form क्या है?",
    "optionsEn": [
      "They're thirsty",
      "May need surgery; aspiration risk",
      "Fluids aren't helpful",
      "They'll vomit always"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Glasgow Coma Scale",
      "General Control System",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "NPO for potential surgical patients; aspiration risk if consciousness drops.",
    "explanationHi": "Glasgow Coma Scale。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-950",
    "questionEn": "Suspected spinal injury means:",
    "questionHi": "PPE का Full Form क्या है?",
    "optionsEn": [
      "Move quickly",
      "Immobilize head and spine, minimal movement",
      "Sit patient up",
      "Walk patient"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Personal Protective Equipment",
      "Public Protection",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Protect spine from movement that could worsen injury.",
    "explanationHi": "Personal Protective Equipment。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-951",
    "questionEn": "Remove jewelry from burn area because:",
    "questionHi": "First Aid में सबसे पहले क्या Check करें?",
    "optionsEn": [
      "It's expensive",
      "Swelling will make removal impossible",
      "It causes infection",
      "Burns damage jewelry"
    ],
    "optionsHi": [
      "Pulse",
      "Scene Safety (अपनी और दूसरों की सुरक्षा)",
      "Breathing",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Remove before swelling makes it impossible and constricting.",
    "explanationHi": "Always check scene safety first।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-952",
    "questionEn": "Anaphylaxis can occur from:",
    "questionHi": "Response Check कैसे करें?",
    "optionsEn": [
      "Only bee stings",
      "Bites, stings, foods, medications, any allergen",
      "Only snake bites",
      "Only medications"
    ],
    "optionsHi": [
      "देखें",
      "कंधे हिलाएं और पूछें 'क्या आप ठीक हैं?'",
      "छोड़ दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Anaphylaxis can be triggered by any allergen.",
    "explanationHi": "Tap shoulder and ask。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-953",
    "questionEn": "For skin chemical exposure:",
    "questionHi": "Breathing Check कैसे करें?",
    "optionsEn": [
      "Rub it in",
      "Flush extensively with water",
      "Apply neutralizer",
      "Cover without washing"
    ],
    "optionsHi": [
      "पूछें",
      "Look-Listen-Feel (10 सेकंड)",
      "केवल देखें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Dilution and removal by water irrigation.",
    "explanationHi": "Look, listen, feel for breathing。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-954",
    "questionEn": "Secondary drowning warning signs include:",
    "questionHi": "Agonal Breathing को Normal Breathing क्यों नहीं माना जाता?",
    "optionsEn": [
      "Immediate full recovery",
      "Coughing, breathing difficulty hours after incident",
      "Better swimming",
      "No symptoms ever"
    ],
    "optionsHi": [
      "Normal है",
      "Cardiac Arrest का Sign, CPR जरूरी",
      "ठीक है",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Delayed respiratory problems from lung inflammation.",
    "explanationHi": "Agonal breathing indicates cardiac arrest。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-955",
    "questionEn": "Stroke symptoms appearing suddenly suggest:",
    "questionHi": "Unresponsive + No Normal Breathing = क्या करें?",
    "optionsEn": [
      "Gradual onset is normal",
      "Need for immediate emergency response",
      "Wait and see",
      "Normal aging"
    ],
    "optionsHi": [
      "इंतजार करें",
      "108 बुलाएं और CPR शुरू करें",
      "देखते रहें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sudden stroke symptoms are medical emergency.",
    "explanationHi": "Call EMS and start CPR。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-956",
    "questionEn": "Head injury transport position is:",
    "questionHi": "CPR में Compression Site कहां है?",
    "optionsEn": [
      "Flat always",
      "Head elevated 30 degrees if no spinal injury",
      "Legs up",
      "Sitting only"
    ],
    "optionsHi": [
      "पेट पर",
      "छाती के बीच में (Sternum के निचले आधे हिस्से पर)",
      "गर्दन पर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Head elevation may help reduce intracranial pressure.",
    "explanationHi": "Center of chest, lower half of sternum।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-957",
    "questionEn": "Bystander CPR significantly improves:",
    "questionHi": "CPR में हाथ की Position कैसी हो?",
    "optionsEn": [
      "Nothing",
      "Survival rates",
      "Time to death",
      "Pain"
    ],
    "optionsHi": [
      "मुट्ठी से",
      "Heel of Hand, दूसरा हाथ ऊपर, उंगलियां Interlocked",
      "उंगलियों से",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Bystander CPR doubles or triples survival.",
    "explanationHi": "Heel of hand, fingers interlocked।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-958",
    "questionEn": "Head tilt-chin lift opens airway by:",
    "questionHi": "CPR में Body Position कैसी हो?",
    "optionsEn": [
      "Pushing tongue back",
      "Lifting tongue off posterior pharynx",
      "Causing coughing",
      "Stimulating breathing"
    ],
    "optionsHi": [
      "झुककर",
      "कंधे सीधे हाथों के ऊपर, Arms Straight",
      "बैठकर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Maneuver displaces tongue forward, opening airway.",
    "explanationHi": "Shoulders over hands, arms straight।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-959",
    "questionEn": "Note tourniquet application time because:",
    "questionHi": "CPR में 30:2 का क्या अर्थ है?",
    "optionsEn": [
      "For billing",
      "Helps determine limb ischemia duration",
      "Not important",
      "Legal requirement only"
    ],
    "optionsHi": [
      "Time",
      "30 Compressions : 2 Breaths",
      "Age",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Time information crucial for limb salvage decisions.",
    "explanationHi": "30 compressions to 2 breaths ratio。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-960",
    "questionEn": "Signs of shock in children may be subtle because:",
    "questionHi": "Compression-Only CPR कब करें?",
    "optionsEn": [
      "Children don't get shock",
      "Strong compensation masks early signs",
      "Always obvious",
      "No vital sign changes"
    ],
    "optionsHi": [
      "हमेशा",
      "Training नहीं हो, Mouth-to-Mouth से हिचक, Bystander CPR",
      "कभी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Children compensate well until sudden decompensation.",
    "explanationHi": "When untrained or reluctant।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-961",
    "questionEn": "Pain with passive stretch suggests:",
    "questionHi": "AED कब Use करें?",
    "optionsEn": [
      "Normal healing",
      "Possible compartment syndrome",
      "Fracture healed",
      "Muscle relaxation"
    ],
    "optionsHi": [
      "सभी पर",
      "जब उपलब्ध हो, Unresponsive + No Normal Breathing",
      "कभी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Pain on passive stretch is early compartment syndrome sign.",
    "explanationHi": "Use AED when available for cardiac arrest。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-962",
    "questionEn": "Don't break burn blisters because:",
    "questionHi": "AED Use करने का सही क्रम क्या है?",
    "optionsEn": [
      "They're painless",
      "Intact blisters protect against infection",
      "Blisters speed healing",
      "No fluid inside"
    ],
    "optionsHi": [
      "कोई क्रम नहीं",
      "On करें, Pads लगाएं, Analyze, Shock (यदि Advised)",
      "Shock पहले",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Blister provides sterile barrier over wound.",
    "explanationHi": "Turn on, attach pads, analyze, shock if advised।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-963",
    "questionEn": "Snake identification is:",
    "questionHi": "AED Shock के तुरंत बाद क्या करें?",
    "optionsEn": [
      "Required before treatment",
      "Helpful but treatment shouldn't be delayed",
      "Always possible",
      "Necessary for antivenom"
    ],
    "optionsHi": [
      "इंतजार करें",
      "तुरंत CPR शुरू करें (2 मिनट)",
      "देखें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Don't delay transport to identify snake.",
    "explanationHi": "Resume CPR immediately after shock。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-964",
    "questionEn": "Activated charcoal works best if given:",
    "questionHi": "Recovery Position किसके लिए है?",
    "optionsEn": [
      "Anytime",
      "Within 1 hour of ingestion",
      "Days later",
      "Only for certain poisons"
    ],
    "optionsHi": [
      "Cardiac Arrest",
      "Unconscious लेकिन Breathing (Airway Protection)",
      "Choking",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Charcoal most effective when given early.",
    "explanationHi": "For unconscious breathing patient。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-965",
    "questionEn": "Reach rescue is safer than swim rescue because:",
    "questionHi": "Recovery Position में कौन सी Side पर रखें?",
    "optionsEn": [
      "Less effort",
      "You stay on shore and avoid becoming victim",
      "Faster",
      "More effective"
    ],
    "optionsHi": [
      "Right Side",
      "किसी भी Side (Pregnant में Left)",
      "Back",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Shore-based rescue eliminates risk to rescuer.",
    "explanationHi": "Either side, left for pregnant。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-966",
    "questionEn": "Hypoglycemia is treated with:",
    "questionHi": "Choking में Mild vs Severe कैसे पहचानें?",
    "optionsEn": [
      "Insulin",
      "Fast-acting sugar if conscious",
      "Nothing",
      "Water only"
    ],
    "optionsHi": [
      "आवाज से",
      "Mild=खांस सकता है, बोल सकता है; Severe=नहीं खांस सकता, बोल नहीं सकता",
      "देखकर",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Sugar reverses hypoglycemia quickly.",
    "explanationHi": "Mild vs severe choking signs。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-967",
    "questionEn": "Log roll technique requires:",
    "questionHi": "Severe Choking में वयस्क के लिए क्या करें?",
    "optionsEn": [
      "One person",
      "Multiple people coordinating to move patient as unit",
      "Patient cooperation",
      "Special equipment always"
    ],
    "optionsHi": [
      "पीठ थपथपाएं",
      "5 Back Blows + 5 Abdominal Thrusts (Alternate)",
      "पानी दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Log roll maintains spinal alignment during movement.",
    "explanationHi": "5 back blows + 5 abdominal thrusts。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-968",
    "questionEn": "Public access defibrillators are placed in public areas because:",
    "questionHi": "Infant Choking में क्या करें?",
    "optionsEn": [
      "Decoration",
      "To enable rapid defibrillation before EMS arrives",
      "Legal requirement only",
      "Rarely used"
    ],
    "optionsHi": [
      "Heimlich",
      "5 Back Blows + 5 Chest Thrusts (Face Down on Arm)",
      "झकझोरें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Public AEDs reduce time to first shock.",
    "explanationHi": "Back blows and chest thrusts for infants。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-969",
    "questionEn": "Partial airway obstruction with good air exchange should be:",
    "questionHi": "Pregnant/Obese में Choking में क्या करें?",
    "optionsEn": [
      "Treated with back blows",
      "Monitored while encouraging coughing",
      "Ignored",
      "Treated as complete obstruction"
    ],
    "optionsHi": [
      "Abdominal Thrusts",
      "Chest Thrusts (Abdominal नहीं)",
      "कुछ नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Don't interfere with effective cough in mild obstruction.",
    "explanationHi": "Chest thrusts for pregnant/obese。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-970",
    "questionEn": "Massive bleeding is defined as:",
    "questionHi": "Bleeding Control में Direct Pressure कैसे दें?",
    "optionsEn": [
      "Any bleeding",
      "Blood loss causing hemodynamic instability",
      "Only arterial",
      "Over 10 liters"
    ],
    "optionsHi": [
      "हल्का",
      "Gloved Hand/Clean Cloth से जोर से दबाएं, 10-15 मिनट",
      "दूर से",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Massive hemorrhage threatens life through circulatory collapse.",
    "explanationHi": "Firm direct pressure for 10-15 min。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-971",
    "questionEn": "Position for shock patient (without injuries contraindicated) is:",
    "questionHi": "Embedded Object से Bleeding में क्या करें?",
    "optionsEn": [
      "Standing",
      "Lying flat with legs elevated",
      "Sitting up",
      "Head down steep"
    ],
    "optionsHi": [
      "निकालें",
      "निकालें नहीं, चारों ओर Dressing लगाएं, Stabilize करें",
      "दबाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Shock position improves venous return to heart.",
    "explanationHi": "Don't remove, dress around object。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-972",
    "questionEn": "Document fracture assessment including:",
    "questionHi": "Internal Bleeding के Signs क्या हैं?",
    "optionsEn": [
      "Nothing",
      "Circulation, motor, sensation before and after splinting",
      "Only pain level",
      "Just time"
    ],
    "optionsHi": [
      "दिखते हैं",
      "Shock Signs, Bruising, Rigid Abdomen, Pain",
      "बाहरी Bleeding",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Neurovascular status documentation is essential.",
    "explanationHi": "Internal bleeding signs。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-973",
    "questionEn": "For electrical burns, first ensure:",
    "questionHi": "Shock के Signs क्या हैं?",
    "optionsEn": [
      "Cooling",
      "Power source is disconnected",
      "Wound care",
      "Documentation"
    ],
    "optionsHi": [
      "Normal",
      "Pale, Cold, Sweaty, Fast Pulse, Confusion, Low BP",
      "Fever",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Scene safety - disconnect electricity before approaching.",
    "explanationHi": "Signs of shock。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-974",
    "questionEn": "WHO Category II bite requires:",
    "questionHi": "Shock में First Aid क्या है?",
    "optionsEn": [
      "No treatment",
      "Rabies vaccine only",
      "Vaccine and RIG",
      "Antibiotics only"
    ],
    "optionsHi": [
      "बैठाएं",
      "Lay Flat, Legs Up (यदि Spine Safe), Warm रखें, Reassure, अस्पताल",
      "खड़ा करें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Category II (minor bites, no bleeding) needs vaccine without RIG.",
    "explanationHi": "Shock position - legs elevated।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-975",
    "questionEn": "For inhalation poisoning, first priority is:",
    "questionHi": "Burns में Rule of 9s क्या है?",
    "optionsEn": [
      "Give antidote",
      "Remove from exposure to fresh air safely",
      "Mouth-to-mouth",
      "Wait for symptoms"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Body Surface Area Calculate करने का तरीका (Head 9%, Arm 9%...)",
      "Temperature",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Stop ongoing exposure while protecting yourself.",
    "explanationHi": "Calculating burn area。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-976",
    "questionEn": "Children should always be supervised near water because:",
    "questionHi": "Burns में Cooling कितनी देर करें?",
    "optionsEn": [
      "They swim well",
      "They can drown in seconds and in shallow water",
      "Only for non-swimmers",
      "Legal requirement only"
    ],
    "optionsHi": [
      "1 मिनट",
      "10-20 मिनट (Cool Running Water)",
      "1 घंटा",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Drowning happens quickly and silently.",
    "explanationHi": "Cool for 10-20 minutes。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-977",
    "questionEn": "Asthma reliever inhaler (blue) provides:",
    "questionHi": "Burns में क्या नहीं लगाना चाहिए?",
    "optionsEn": [
      "Long-term control",
      "Quick bronchodilation for symptom relief",
      "Steroids",
      "Antibiotics"
    ],
    "optionsHi": [
      "पानी",
      "Ice, Butter, Toothpaste, Oil",
      "Dressing",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Reliever (salbutamol) opens airways quickly.",
    "explanationHi": "Don't apply ice, butter, etc।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-978",
    "questionEn": "Emergency number 108 connects to:",
    "questionHi": "Burns में Hospital कब जाएं?",
    "optionsEn": [
      "Police only",
      "Ambulance services",
      "Fire only",
      "Doctors directly"
    ],
    "optionsHi": [
      "कभी नहीं",
      "Face/Hands/Genitals, >10% BSA, Full Thickness, Inhalation, Chemical, Electrical",
      "छोटी Burns में भी",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "108 is India's emergency ambulance number.",
    "explanationHi": "Burns requiring hospital care।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-979",
    "questionEn": "Quality of chest compressions is more important than:",
    "questionHi": "Fracture के Signs क्या हैं?",
    "optionsEn": [
      "Nothing",
      "Number of rescuers",
      "Speed of compressions",
      "Rescue breaths in most adult arrests"
    ],
    "optionsHi": [
      "Normal Movement",
      "Pain, Swelling, Deformity, Inability to Move, Crepitus",
      "Fever",
      "कुछ नहीं"
    ],
    "correctAnswer": 3,
    "explanationEn": "Compression quality critical; adults have oxygen reserves initially.",
    "explanationHi": "Fracture signs。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-980",
    "questionEn": "If rescue breaths don't go in, you should:",
    "questionHi": "Fracture में First Aid क्या है?",
    "optionsEn": [
      "Blow harder",
      "Reposition head and try again",
      "Give up",
      "Start compressions only"
    ],
    "optionsHi": [
      "हिलाएं",
      "Immobilize (Splint), Ice, Elevate, Pain Relief, अस्पताल",
      "खींचें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Reposition to better open airway before retrying.",
    "explanationHi": "Fracture first aid।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-981",
    "questionEn": "Scalp wounds bleed heavily because:",
    "questionHi": "Open Fracture में क्या विशेष करें?",
    "optionsEn": [
      "Skull is thin",
      "Scalp has rich blood supply",
      "Hair causes bleeding",
      "Blood vessels are larger"
    ],
    "optionsHi": [
      "Push Bone Inside",
      "Bone को अंदर न करें, Sterile Dressing, Infection Prevention",
      "खींचें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Scalp is highly vascular; bleeding looks dramatic but controllable.",
    "explanationHi": "Don't push bone back, cover with sterile dressing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bleeding",
    "tags": [
      "bleeding"
    ]
  },
  {
    "id": "FIRST-AID-982",
    "questionEn": "Untreated shock leads to:",
    "questionHi": "Sprain और Strain में अंतर क्या है?",
    "optionsEn": [
      "Recovery",
      "Progressive organ failure and death",
      "Stable condition",
      "No consequences"
    ],
    "optionsHi": [
      "एक ही",
      "Sprain=Ligament, Strain=Muscle/Tendon",
      "कोई अंतर नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Shock is life-threatening without treatment.",
    "explanationHi": "Sprain is ligament, strain is muscle/tendon。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-983",
    "questionEn": "Improvised splints can be made from:",
    "questionHi": "Dislocation में क्या करें?",
    "optionsEn": [
      "Nothing available",
      "Boards, magazines, pillows, other body parts",
      "Only commercial splints work",
      "Rope only"
    ],
    "optionsHi": [
      "Set करें",
      "Set करने की कोशिश न करें, Immobilize, Ice, अस्पताल",
      "खींचें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Many materials can provide splinting function.",
    "explanationHi": "Don't try to set, immobilize and hospital。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-984",
    "questionEn": "Children are more vulnerable to burns because:",
    "questionHi": "Head Injury में Red Flags क्या हैं?",
    "optionsEn": [
      "Thicker skin",
      "Thinner skin and larger surface area relative to weight",
      "Better immunity",
      "Faster healing"
    ],
    "optionsHi": [
      "Headache",
      "LOC, Vomiting, Unequal Pupils, Clear Fluid from Ear/Nose, Seizure",
      "थकान",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Children have thinner skin and proportionally more surface area.",
    "explanationHi": "Head injury red flags。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-985",
    "questionEn": "First aid for bee sting includes:",
    "questionHi": "Concussion के लक्षण क्या हैं?",
    "optionsEn": [
      "Squeeze stinger out",
      "Scrape stinger sideways, clean, ice, monitor for allergy",
      "Ignore it",
      "Apply heat"
    ],
    "optionsHi": [
      "कुछ नहीं",
      "Headache, Confusion, Dizziness, Nausea, Memory Problems",
      "Fracture",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Don't squeeze venom sac; scrape stinger out.",
    "explanationHi": "Concussion symptoms。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Bites & Stings",
    "tags": [
      "bites-&-stings"
    ]
  },
  {
    "id": "FIRST-AID-986",
    "questionEn": "Eye chemical exposure requires:",
    "questionHi": "Spine Injury का संदेह कब करें?",
    "optionsEn": [
      "Rubbing eyes",
      "Immediate irrigation with water for 15-20 minutes",
      "Waiting for doctor",
      "Covering without washing"
    ],
    "optionsHi": [
      "हमेशा",
      "High Energy Trauma, Neck/Back Pain, Numbness, Weakness, MOI",
      "कभी नहीं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Immediate prolonged irrigation essential for eye chemicals.",
    "explanationHi": "When to suspect spine injury。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Poisoning",
    "tags": [
      "poisoning"
    ]
  },
  {
    "id": "FIRST-AID-987",
    "questionEn": "After successful drowning resuscitation:",
    "questionHi": "Spine Injury में सबसे महत्वपूर्ण क्या है?",
    "optionsEn": [
      "Patient can go home",
      "Monitor for deterioration and transport to hospital",
      "No further care needed",
      "Resume swimming"
    ],
    "optionsHi": [
      "जल्दी उठाना",
      "Immobilization - गर्दन और पीठ को हिलाना नहीं",
      "मालिश",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "All drowning patients need medical evaluation.",
    "explanationHi": "Immobilize - don't move spine。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Drowning",
    "tags": [
      "drowning"
    ]
  },
  {
    "id": "FIRST-AID-988",
    "questionEn": "Call emergency services for seizure if:",
    "questionHi": "Poisoning में First Aid का पहला कदम?",
    "optionsEn": [
      "Any seizure in known epileptic",
      "First seizure, >5 minutes, injury, repeated, or uncertain",
      "Never needed",
      "Only if unconscious"
    ],
    "optionsHi": [
      "उल्टी कराएं",
      "Poison/Container लेकर 108 बुलाएं, Identify करें",
      "दूध दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Specific criteria guide when emergency services needed for seizure.",
    "explanationHi": "Call emergency with poison container।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-989",
    "questionEn": "During transport, reassess patient:",
    "questionHi": "Poisoning में उल्टी कब न कराएं?",
    "optionsEn": [
      "Never",
      "Regularly to detect changes in condition",
      "Only at destination",
      "Every hour only"
    ],
    "optionsHi": [
      "हमेशा कराएं",
      "Corrosive, Petroleum, Unconscious, Seizure",
      "कभी न कराएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ongoing assessment detects deterioration early.",
    "explanationHi": "Don't induce vomiting in these cases。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Transport",
    "tags": [
      "transport"
    ]
  },
  {
    "id": "FIRST-AID-990",
    "questionEn": "The purpose of defibrillation is to:",
    "questionHi": "Heart Attack के लक्षण क्या हैं?",
    "optionsEn": [
      "Restart stopped heart",
      "Stop disorganized rhythm allowing heart to restart normally",
      "Give electricity for energy",
      "Replace CPR"
    ],
    "optionsHi": [
      "केवल दर्द",
      "Chest Pain (Crushing), Arm/Jaw Pain, Sweating, Breathlessness",
      "Fever",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Defibrillation stops VF; heart may restart in normal rhythm.",
    "explanationHi": "Heart attack symptoms。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-991",
    "questionEn": "First aid training should be:",
    "questionHi": "Heart Attack में First Aid क्या है?",
    "optionsEn": [
      "Once in lifetime",
      "Refreshed regularly to maintain skills",
      "Only for healthcare workers",
      "Not necessary"
    ],
    "optionsHi": [
      "व्यायाम कराएं",
      "108 बुलाएं, बैठाएं, Aspirin दें (Allergy नहीं हो), Reassure, CPR Ready",
      "दौड़ाएं",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Skills deteriorate without practice; regular refresher needed.",
    "explanationHi": "Heart attack first aid。",
    "difficulty": "easy",
    "topic": "first-aid",
    "subtopic": "General",
    "tags": [
      "general"
    ]
  },
  {
    "id": "FIRST-AID-992",
    "questionEn": "A well-stocked first aid kit should include:",
    "questionHi": "Stroke के लक्षण FAST में क्या देखें?",
    "optionsEn": [
      "Medications only",
      "Bandages, dressings, gloves, scissors, and basic supplies",
      "Nothing specific",
      "Expensive equipment only"
    ],
    "optionsHi": [
      "Fever",
      "Face Drooping, Arm Weakness, Speech Slurred, Time to Call",
      "केवल दर्द",
      "कुछ नहीं"
    ],
    "correctAnswer": 1,
    "explanationEn": "Basic supplies enable response to common emergencies.",
    "explanationHi": "FAST for stroke。",
    "difficulty": "easy",
    "topic": "first-aid",
    "subtopic": "General",
    "tags": [
      "general"
    ]
  },
  {
    "id": "FIRST-AID-993",
    "questionEn": "What is the emergency ambulance number in India?",
    "questionHi": "Stroke में First Aid क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "पानी दें",
      "108 बुलाएं, Time Note करें, Nothing by Mouth, Recovery Position",
      "दवाई दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Stroke first aid。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "BLS",
    "tags": [
      "bls"
    ]
  },
  {
    "id": "FIRST-AID-994",
    "questionEn": "What maneuver opens the airway in unconscious patients without suspected spinal injury?",
    "questionHi": "Seizure में First Aid क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "जकड़ें",
      "Protect from Injury, Time Note, Recovery Position बाद में, 5 मिनट से अधिक हो तो 108",
      "मुंह में कुछ डालें",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Seizure first aid。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Airway",
    "tags": [
      "airway"
    ]
  },
  {
    "id": "FIRST-AID-995",
    "questionEn": "How long should a thermal burn be cooled under running water?",
    "questionHi": "Anaphylaxis के लक्षण क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "केवल खुजली",
      "Swelling (Face/Throat), Breathing Difficulty, Rash, Low BP, Confusion",
      "Fever",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Anaphylaxis symptoms।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Burns",
    "tags": [
      "burns"
    ]
  },
  {
    "id": "FIRST-AID-996",
    "questionEn": "What does FAST stand for in stroke assessment?",
    "questionHi": "Anaphylaxis में First Aid क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "इंतजार करें",
      "108 बुलाएं, EpiPen (यदि है), Lay Flat (Legs Up), CPR Ready",
      "पानी दें",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Anaphylaxis first aid।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-997",
    "questionEn": "What is the first-line medication for anaphylactic shock?",
    "questionHi": "Diabetic Emergency में Hypoglycemia के लक्षण क्या हैं?",
    "optionsEn": [],
    "optionsHi": [
      "सुस्ती",
      "Sweating, Shakiness, Confusion, Hunger, Irritability",
      "Thirst",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Hypoglycemia symptoms。",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Shock",
    "tags": [
      "shock"
    ]
  },
  {
    "id": "FIRST-AID-998",
    "questionEn": "A construction worker falls from scaffolding and is found lying on his back, conscious but complaining of severe back pain and tingling in his legs. What do you suspect and what should you do?",
    "questionHi": "Hypoglycemia में होश में व्यक्ति को क्या दें?",
    "optionsEn": [],
    "optionsHi": [
      "Insulin",
      "Sugar, Glucose Tablets, Juice (Fast-Acting Sugar)",
      "पानी",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Give fast-acting sugar।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Fractures",
    "tags": [
      "fractures"
    ]
  },
  {
    "id": "FIRST-AID-999",
    "questionEn": "A 45-year-old man clutches his chest, looks pale and sweaty, and says he feels like 'an elephant is sitting on my chest.' What is likely happening and what should you do?",
    "questionHi": "First Aid Training कहां से लें?",
    "optionsEn": [],
    "optionsHi": [
      "कहीं से भी",
      "Red Cross, St. John Ambulance, Certified Institutes, BLS Courses",
      "YouTube Only",
      "कुछ नहीं"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Get training from certified sources।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Medical Emergencies",
    "tags": [
      "medical-emergencies"
    ]
  },
  {
    "id": "FIRST-AID-1000",
    "questionEn": "You are the first person to arrive at a road accident. One person is trapped in the car, another is lying on the road not moving, and a third is walking but bleeding from the head. How do you prioritize and respond?",
    "questionHi": "First Aid का सबसे महत्वपूर्ण संदेश MPHW के लिए क्या है?",
    "optionsEn": [],
    "optionsHi": [
      "कुछ न करें",
      "तैयार रहें, प्रशिक्षित रहें, जीवन बचाएं - कुछ करना न करने से बेहतर है",
      "भागें",
      "इंतजार करें"
    ],
    "correctAnswer": 0,
    "explanationEn": "",
    "explanationHi": "Be prepared, be trained, save lives - something is better than nothing।",
    "difficulty": "medium",
    "topic": "first-aid",
    "subtopic": "Summary",
    "tags": [
      "summary"
    ]
  }
];

export const firstAidQuestionBank: QuestionBank = {
  topicId: 'first-aid',
  topicNameEn: 'First Aid',
  topicNameHi: 'प्राथमिक चिकित्सा',
  totalQuestions: firstAidQuestions.length,
  questions: firstAidQuestions
};
