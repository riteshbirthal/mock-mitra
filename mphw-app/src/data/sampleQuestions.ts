interface Question {
  id: string;
  question: {
    en: string;
    hi: string;
  };
  options: Array<{
    en: string;
    hi: string;
  }>;
  correct: number;
  explanation: {
    en: string;
    hi: string;
  };
  difficulty: 'easy' | 'medium' | 'hard';
}

export const sampleQuestions: Record<string, Question[]> = {
  'default': [
    {
      id: 'Q1',
      question: {
        en: 'What is the main function of red blood cells?',
        hi: 'लाल रक्त कोशिकाओं का मुख्य कार्य क्या है?'
      },
      options: [
        { en: 'Fighting infections', hi: 'संक्रमण से लड़ना' },
        { en: 'Carrying oxygen', hi: 'ऑक्सीजन ले जाना' },
        { en: 'Blood clotting', hi: 'रक्त का थक्का जमाना' },
        { en: 'Producing hormones', hi: 'हार्मोन बनाना' }
      ],
      correct: 1,
      explanation: {
        en: 'Red blood cells contain hemoglobin which carries oxygen from lungs to all body tissues.',
        hi: 'लाल रक्त कोशिकाओं में हीमोग्लोबिन होता है जो फेफड़ों से शरीर के सभी ऊतकों तक ऑक्सीजन ले जाता है।'
      },
      difficulty: 'easy'
    },
    {
      id: 'Q2',
      question: {
        en: 'Which vaccine is given at birth?',
        hi: 'जन्म के समय कौन सा टीका दिया जाता है?'
      },
      options: [
        { en: 'DPT', hi: 'DPT' },
        { en: 'BCG', hi: 'BCG' },
        { en: 'MMR', hi: 'MMR' },
        { en: 'Typhoid', hi: 'टाइफाइड' }
      ],
      correct: 1,
      explanation: {
        en: 'BCG (Bacillus Calmette-Guerin) vaccine is given at birth or within first 2 weeks to protect against tuberculosis.',
        hi: 'BCG (बैसिलस कैलमेट-गुएरिन) टीका जन्म के समय या पहले 2 सप्ताह के भीतर टीबी से बचाव के लिए दिया जाता है।'
      },
      difficulty: 'easy'
    },
    {
      id: 'Q3',
      question: {
        en: 'Normal human body temperature is:',
        hi: 'मानव शरीर का सामान्य तापमान है:'
      },
      options: [
        { en: '36.1°C', hi: '36.1°C' },
        { en: '37°C', hi: '37°C' },
        { en: '38°C', hi: '38°C' },
        { en: '39°C', hi: '39°C' }
      ],
      correct: 1,
      explanation: {
        en: 'Normal body temperature is 37°C (98.6°F). Temperature above 38°C is considered fever.',
        hi: 'सामान्य शरीर का तापमान 37°C (98.6°F) है। 38°C से ऊपर का तापमान बुखार माना जाता है।'
      },
      difficulty: 'easy'
    },
    {
      id: 'Q4',
      question: {
        en: 'Which is the largest organ in human body?',
        hi: 'मानव शरीर का सबसे बड़ा अंग कौन सा है?'
      },
      options: [
        { en: 'Heart', hi: 'हृदय' },
        { en: 'Liver', hi: 'यकृत' },
        { en: 'Skin', hi: 'त्वचा' },
        { en: 'Brain', hi: 'मस्तिष्क' }
      ],
      correct: 2,
      explanation: {
        en: 'Skin is the largest organ of human body covering approximately 2 square meters area.',
        hi: 'त्वचा मानव शरीर का सबसे बड़ा अंग है जो लगभग 2 वर्ग मीटर क्षेत्र को कवर करती है।'
      },
      difficulty: 'medium'
    },
    {
      id: 'Q5',
      question: {
        en: 'ORS (Oral Rehydration Solution) is used for:',
        hi: 'ORS (ओरल रिहाइड्रेशन सॉल्यूशन) का उपयोग किसके लिए होता है:'
      },
      options: [
        { en: 'Fever', hi: 'बुखार' },
        { en: 'Diarrhea', hi: 'दस्त' },
        { en: 'Headache', hi: 'सिरदर्द' },
        { en: 'Cough', hi: 'खांसी' }
      ],
      correct: 1,
      explanation: {
        en: 'ORS is used to replace fluids and electrolytes lost during diarrhea and prevent dehydration.',
        hi: 'ORS का उपयोग दस्त के दौरान खोए हुए तरल पदार्थ और इलेक्ट्रोलाइट्स की भरपाई और निर्जलीकरण को रोकने के लिए किया जाता है।'
      },
      difficulty: 'easy'
    }
  ],
  'anatomy-skeletal-system': [
    {
      id: 'Q1',
      question: {
        en: 'How many bones are in an adult human body?',
        hi: 'एक वयस्क मानव शरीर में कितनी हड्डियाँ होती हैं?'
      },
      options: [
        { en: '206', hi: '206' },
        { en: '300', hi: '300' },
        { en: '186', hi: '186' },
        { en: '256', hi: '256' }
      ],
      correct: 0,
      explanation: {
        en: 'An adult human body has 206 bones. Babies are born with about 300 bones which fuse as they grow.',
        hi: 'एक वयस्क मानव शरीर में 206 हड्डियाँ होती हैं। बच्चे लगभग 300 हड्डियों के साथ पैदा होते हैं जो बड़े होने पर आपस में जुड़ जाती हैं।'
      },
      difficulty: 'easy'
    },
    {
      id: 'Q2',
      question: {
        en: 'Which is the longest bone in human body?',
        hi: 'मानव शरीर की सबसे लंबी हड्डी कौन सी है?'
      },
      options: [
        { en: 'Humerus', hi: 'ह्यूमरस' },
        { en: 'Tibia', hi: 'टिबिया' },
        { en: 'Femur', hi: 'फीमर' },
        { en: 'Fibula', hi: 'फिबुला' }
      ],
      correct: 2,
      explanation: {
        en: 'Femur (thigh bone) is the longest and strongest bone in human body.',
        hi: 'फीमर (जांघ की हड्डी) मानव शरीर की सबसे लंबी और मजबूत हड्डी है।'
      },
      difficulty: 'easy'
    },
    {
      id: 'Q3',
      question: {
        en: 'Which type of joint is the knee joint?',
        hi: 'घुटने का जोड़ किस प्रकार का जोड़ है?'
      },
      options: [
        { en: 'Ball and Socket joint', hi: 'गेंद और सॉकेट जोड़' },
        { en: 'Pivot joint', hi: 'धुरी जोड़' },
        { en: 'Hinge joint', hi: 'कब्जा जोड़' },
        { en: 'Gliding joint', hi: 'सरकने वाला जोड़' }
      ],
      correct: 2,
      explanation: {
        en: 'Knee joint is a hinge joint that allows movement in only one plane (flexion and extension).',
        hi: 'घुटने का जोड़ एक कब्जा जोड़ है जो केवल एक तल में गति (मोड़ना और खोलना) की अनुमति देता है।'
      },
      difficulty: 'medium'
    },
    {
      id: 'Q4',
      question: {
        en: 'How many vertebrae are in the cervical spine?',
        hi: 'सर्वाइकल स्पाइन (गर्दन की रीढ़) में कितने कशेरुक होते हैं?'
      },
      options: [
        { en: '5', hi: '5' },
        { en: '7', hi: '7' },
        { en: '12', hi: '12' },
        { en: '9', hi: '9' }
      ],
      correct: 1,
      explanation: {
        en: 'There are 7 cervical vertebrae (C1-C7) in the neck region of the spine.',
        hi: 'रीढ़ की हड्डी के गर्दन क्षेत्र में 7 सर्वाइकल कशेरुक (C1-C7) होते हैं।'
      },
      difficulty: 'medium'
    },
    {
      id: 'Q5',
      question: {
        en: 'Which bone protects the brain?',
        hi: 'कौन सी हड्डी मस्तिष्क की रक्षा करती है?'
      },
      options: [
        { en: 'Sternum', hi: 'उरोस्थि' },
        { en: 'Skull', hi: 'खोपड़ी' },
        { en: 'Ribs', hi: 'पसलियां' },
        { en: 'Pelvis', hi: 'श्रोणि' }
      ],
      correct: 1,
      explanation: {
        en: 'The skull (cranium) is a bony structure that protects the brain from injury.',
        hi: 'खोपड़ी (क्रेनियम) एक हड्डी की संरचना है जो मस्तिष्क को चोट से बचाती है।'
      },
      difficulty: 'easy'
    }
  ],
  'computer-knowledge-computer-fundamentals': [
    {
      id: 'Q1',
      question: {
        en: 'What is the full form of CPU?',
        hi: 'CPU का पूरा नाम क्या है?'
      },
      options: [
        { en: 'Central Processing Unit', hi: 'सेंट्रल प्रोसेसिंग यूनिट' },
        { en: 'Computer Processing Unit', hi: 'कंप्यूटर प्रोसेसिंग यूनिट' },
        { en: 'Central Program Unit', hi: 'सेंट्रल प्रोग्राम यूनिट' },
        { en: 'Computer Program Unit', hi: 'कंप्यूटर प्रोग्राम यूनिट' }
      ],
      correct: 0,
      explanation: {
        en: 'CPU stands for Central Processing Unit. It is the brain of computer that performs calculations and processes data.',
        hi: 'CPU का मतलब सेंट्रल प्रोसेसिंग यूनिट है। यह कंप्यूटर का मस्तिष्क है जो गणना करता है और डेटा प्रोसेस करता है।'
      },
      difficulty: 'easy'
    },
    {
      id: 'Q2',
      question: {
        en: 'Which is an input device?',
        hi: 'कौन सा इनपुट डिवाइस है?'
      },
      options: [
        { en: 'Monitor', hi: 'मॉनिटर' },
        { en: 'Printer', hi: 'प्रिंटर' },
        { en: 'Keyboard', hi: 'कीबोर्ड' },
        { en: 'Speaker', hi: 'स्पीकर' }
      ],
      correct: 2,
      explanation: {
        en: 'Keyboard is an input device used to enter data into computer. Monitor, Printer and Speaker are output devices.',
        hi: 'कीबोर्ड एक इनपुट डिवाइस है जिसका उपयोग कंप्यूटर में डेटा दर्ज करने के लिए किया जाता है। मॉनिटर, प्रिंटर और स्पीकर आउटपुट डिवाइस हैं।'
      },
      difficulty: 'easy'
    },
    {
      id: 'Q3',
      question: {
        en: 'What is RAM?',
        hi: 'RAM क्या है?'
      },
      options: [
        { en: 'Read Access Memory', hi: 'रीड एक्सेस मेमोरी' },
        { en: 'Random Access Memory', hi: 'रैंडम एक्सेस मेमोरी' },
        { en: 'Run Access Memory', hi: 'रन एक्सेस मेमोरी' },
        { en: 'Read And Memory', hi: 'रीड एंड मेमोरी' }
      ],
      correct: 1,
      explanation: {
        en: 'RAM stands for Random Access Memory. It is temporary memory that stores data currently in use by the CPU.',
        hi: 'RAM का मतलब रैंडम एक्सेस मेमोरी है। यह अस्थायी मेमोरी है जो CPU द्वारा वर्तमान में उपयोग किए जा रहे डेटा को संग्रहीत करती है।'
      },
      difficulty: 'easy'
    },
    {
      id: 'Q4',
      question: {
        en: '1 GB is equal to:',
        hi: '1 GB बराबर है:'
      },
      options: [
        { en: '1024 KB', hi: '1024 KB' },
        { en: '1024 MB', hi: '1024 MB' },
        { en: '1024 TB', hi: '1024 TB' },
        { en: '1024 Bytes', hi: '1024 बाइट्स' }
      ],
      correct: 1,
      explanation: {
        en: '1 GB = 1024 MB. Memory hierarchy: 1024 Bytes = 1KB, 1024 KB = 1MB, 1024 MB = 1GB, 1024 GB = 1TB.',
        hi: '1 GB = 1024 MB। मेमोरी क्रम: 1024 बाइट्स = 1KB, 1024 KB = 1MB, 1024 MB = 1GB, 1024 GB = 1TB।'
      },
      difficulty: 'medium'
    },
    {
      id: 'Q5',
      question: {
        en: 'Which shortcut key is used to copy text?',
        hi: 'टेक्स्ट कॉपी करने के लिए कौन सी शॉर्टकट की का उपयोग किया जाता है?'
      },
      options: [
        { en: 'Ctrl + V', hi: 'Ctrl + V' },
        { en: 'Ctrl + X', hi: 'Ctrl + X' },
        { en: 'Ctrl + C', hi: 'Ctrl + C' },
        { en: 'Ctrl + Z', hi: 'Ctrl + Z' }
      ],
      correct: 2,
      explanation: {
        en: 'Ctrl + C is used to copy. Ctrl + V is paste, Ctrl + X is cut, and Ctrl + Z is undo.',
        hi: 'Ctrl + C कॉपी करने के लिए है। Ctrl + V पेस्ट है, Ctrl + X कट है, और Ctrl + Z अनडू है।'
      },
      difficulty: 'easy'
    }
  ],
  'public-health-national-health-programs': [
    {
      id: 'Q1',
      question: {
        en: 'ASHA stands for:',
        hi: 'ASHA का पूरा नाम है:'
      },
      options: [
        { en: 'Accredited Social Health Activist', hi: 'मान्यता प्राप्त सामाजिक स्वास्थ्य कार्यकर्ता' },
        { en: 'Associated Social Health Activist', hi: 'संबद्ध सामाजिक स्वास्थ्य कार्यकर्ता' },
        { en: 'Accredited Service Health Agent', hi: 'मान्यता प्राप्त सेवा स्वास्थ्य एजेंट' },
        { en: 'Associated Service Health Activist', hi: 'संबद्ध सेवा स्वास्थ्य कार्यकर्ता' }
      ],
      correct: 0,
      explanation: {
        en: 'ASHA (Accredited Social Health Activist) is a community health worker under National Health Mission.',
        hi: 'ASHA (मान्यता प्राप्त सामाजिक स्वास्थ्य कार्यकर्ता) राष्ट्रीय स्वास्थ्य मिशन के तहत एक सामुदायिक स्वास्थ्य कार्यकर्ता है।'
      },
      difficulty: 'easy'
    },
    {
      id: 'Q2',
      question: {
        en: 'Ayushman Bharat Scheme provides health coverage of:',
        hi: 'आयुष्मान भारत योजना कितने का स्वास्थ्य कवरेज प्रदान करती है:'
      },
      options: [
        { en: '₹1 lakh per family', hi: '₹1 लाख प्रति परिवार' },
        { en: '₹3 lakh per family', hi: '₹3 लाख प्रति परिवार' },
        { en: '₹5 lakh per family', hi: '₹5 लाख प्रति परिवार' },
        { en: '₹10 lakh per family', hi: '₹10 लाख प्रति परिवार' }
      ],
      correct: 2,
      explanation: {
        en: 'Ayushman Bharat PM-JAY provides health coverage of ₹5 lakh per family per year for secondary and tertiary care.',
        hi: 'आयुष्मान भारत PM-JAY द्वितीयक और तृतीयक देखभाल के लिए प्रति परिवार प्रति वर्ष ₹5 लाख का स्वास्थ्य कवरेज प्रदान करता है।'
      },
      difficulty: 'medium'
    },
    {
      id: 'Q3',
      question: {
        en: 'Pulse Polio Programme aims to eradicate:',
        hi: 'पल्स पोलियो कार्यक्रम का उद्देश्य किसका उन्मूलन है:'
      },
      options: [
        { en: 'Malaria', hi: 'मलेरिया' },
        { en: 'Tuberculosis', hi: 'तपेदिक' },
        { en: 'Poliomyelitis', hi: 'पोलियोमाइलाइटिस' },
        { en: 'Measles', hi: 'खसरा' }
      ],
      correct: 2,
      explanation: {
        en: 'Pulse Polio Programme aims to eradicate Poliomyelitis through universal immunization of children under 5 years.',
        hi: 'पल्स पोलियो कार्यक्रम का उद्देश्य 5 वर्ष से कम उम्र के बच्चों के सार्वभौमिक टीकाकरण के माध्यम से पोलियोमाइलाइटिस का उन्मूलन है।'
      },
      difficulty: 'easy'
    },
    {
      id: 'Q4',
      question: {
        en: 'DOTS is related to which disease?',
        hi: 'DOTS किस बीमारी से संबंधित है?'
      },
      options: [
        { en: 'Leprosy', hi: 'कुष्ठ रोग' },
        { en: 'Tuberculosis', hi: 'तपेदिक' },
        { en: 'AIDS', hi: 'एड्स' },
        { en: 'Malaria', hi: 'मलेरिया' }
      ],
      correct: 1,
      explanation: {
        en: 'DOTS (Directly Observed Treatment Short-course) is a strategy for TB control recommended by WHO.',
        hi: 'DOTS (डायरेक्टली ऑब्जर्व्ड ट्रीटमेंट शॉर्ट-कोर्स) WHO द्वारा अनुशंसित TB नियंत्रण के लिए एक रणनीति है।'
      },
      difficulty: 'easy'
    },
    {
      id: 'Q5',
      question: {
        en: 'Janani Suraksha Yojana is for:',
        hi: 'जननी सुरक्षा योजना किसके लिए है:'
      },
      options: [
        { en: 'Child vaccination', hi: 'बाल टीकाकरण' },
        { en: 'Safe motherhood', hi: 'सुरक्षित मातृत्व' },
        { en: 'Family planning', hi: 'परिवार नियोजन' },
        { en: 'Adolescent health', hi: 'किशोर स्वास्थ्य' }
      ],
      correct: 1,
      explanation: {
        en: 'Janani Suraksha Yojana promotes institutional delivery by providing cash assistance to pregnant women.',
        hi: 'जननी सुरक्षा योजना गर्भवती महिलाओं को नकद सहायता प्रदान करके संस्थागत प्रसव को बढ़ावा देती है।'
      },
      difficulty: 'easy'
    }
  ],
  'immunization-immunization-schedule': [
    {
      id: 'Q1',
      question: {
        en: 'At what age is first dose of DPT vaccine given?',
        hi: 'DPT टीके की पहली खुराक किस उम्र में दी जाती है?'
      },
      options: [
        { en: 'At birth', hi: 'जन्म के समय' },
        { en: '6 weeks', hi: '6 सप्ताह' },
        { en: '9 months', hi: '9 महीने' },
        { en: '1 year', hi: '1 वर्ष' }
      ],
      correct: 1,
      explanation: {
        en: 'First dose of DPT (Diphtheria, Pertussis, Tetanus) is given at 6 weeks of age.',
        hi: 'DPT (डिप्थीरिया, काली खांसी, टेटनस) की पहली खुराक 6 सप्ताह की उम्र में दी जाती है।'
      },
      difficulty: 'easy'
    },
    {
      id: 'Q2',
      question: {
        en: 'Measles vaccine is given at:',
        hi: 'खसरे का टीका कब दिया जाता है:'
      },
      options: [
        { en: '6 weeks', hi: '6 सप्ताह' },
        { en: '9 months', hi: '9 महीने' },
        { en: '15 months', hi: '15 महीने' },
        { en: '2 years', hi: '2 वर्ष' }
      ],
      correct: 1,
      explanation: {
        en: 'First dose of Measles vaccine is given at 9 months of age. Second dose (MR) at 16-24 months.',
        hi: 'खसरे के टीके की पहली खुराक 9 महीने की उम्र में दी जाती है। दूसरी खुराक (MR) 16-24 महीने में।'
      },
      difficulty: 'easy'
    },
    {
      id: 'Q3',
      question: {
        en: 'Cold chain temperature for vaccines should be maintained at:',
        hi: 'टीकों के लिए कोल्ड चेन का तापमान कितना होना चाहिए:'
      },
      options: [
        { en: '0°C to 4°C', hi: '0°C से 4°C' },
        { en: '2°C to 8°C', hi: '2°C से 8°C' },
        { en: '-4°C to 0°C', hi: '-4°C से 0°C' },
        { en: '8°C to 12°C', hi: '8°C से 12°C' }
      ],
      correct: 1,
      explanation: {
        en: 'Most vaccines should be stored at 2°C to 8°C. Freezing can damage some vaccines.',
        hi: 'अधिकांश टीकों को 2°C से 8°C पर संग्रहीत किया जाना चाहिए। जमने से कुछ टीके खराब हो सकते हैं।'
      },
      difficulty: 'medium'
    },
    {
      id: 'Q4',
      question: {
        en: 'OPV protects against:',
        hi: 'OPV किससे सुरक्षा प्रदान करता है:'
      },
      options: [
        { en: 'Tuberculosis', hi: 'तपेदिक' },
        { en: 'Poliomyelitis', hi: 'पोलियो' },
        { en: 'Hepatitis', hi: 'हेपेटाइटिस' },
        { en: 'Measles', hi: 'खसरा' }
      ],
      correct: 1,
      explanation: {
        en: 'OPV (Oral Polio Vaccine) protects against Poliomyelitis. It is given orally as drops.',
        hi: 'OPV (ओरल पोलियो वैक्सीन) पोलियो से सुरक्षा प्रदान करती है। यह बूंदों के रूप में मुंह से दी जाती है।'
      },
      difficulty: 'easy'
    },
    {
      id: 'Q5',
      question: {
        en: 'How many doses of TT are given during pregnancy?',
        hi: 'गर्भावस्था के दौरान TT की कितनी खुराक दी जाती है?'
      },
      options: [
        { en: '1 dose', hi: '1 खुराक' },
        { en: '2 doses', hi: '2 खुराक' },
        { en: '3 doses', hi: '3 खुराक' },
        { en: '4 doses', hi: '4 खुराक' }
      ],
      correct: 1,
      explanation: {
        en: '2 doses of TT are given during pregnancy - TT1 as early as possible and TT2 after 4 weeks of TT1.',
        hi: 'गर्भावस्था के दौरान TT की 2 खुराक दी जाती हैं - TT1 जल्द से जल्द और TT2 TT1 के 4 सप्ताह बाद।'
      },
      difficulty: 'medium'
    }
  ]
};
