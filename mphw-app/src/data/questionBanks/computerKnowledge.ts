import { Question, QuestionBank } from './types';

export const computerKnowledgeQuestions: Question[] = [
  // Lesson 1: Introduction to Computers
  {
    id: "CK-001",
    questionEn: "What is the full form of COMPUTER (informal)?",
    questionHi: "COMPUTER का अनौपचारिक पूर्ण रूप क्या है?",
    optionsEn: [
      "Common Operating Machine Purposely Used for Technological and Educational Research",
      "Computing Operations Making Possible Unified Technical Educational Resources",
      "Common Operations Making Programs Under Technically Engineered Resources",
      "Commonly Operated Machine Particularly Used for Trade Education Research"
    ],
    optionsHi: [
      "Common Operating Machine Purposely Used for Technological and Educational Research",
      "Computing Operations Making Possible Unified Technical Educational Resources",
      "Common Operations Making Programs Under Technically Engineered Resources",
      "Commonly Operated Machine Particularly Used for Trade Education Research"
    ],
    correctAnswer: 0,
    explanationEn: "COMPUTER informally stands for Common Operating Machine Purposely Used for Technological and Educational Research.",
    explanationHi: "COMPUTER का अनौपचारिक पूर्ण रूप Common Operating Machine Purposely Used for Technological and Educational Research है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "introduction",
    tags: ["basics", "full-forms"]
  },
  {
    id: "CK-002",
    questionEn: "Who is known as the 'Father of Computer'?",
    questionHi: "'कंप्यूटर के पिता' के रूप में किसे जाना जाता है?",
    optionsEn: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
    optionsHi: ["एलन ट्यूरिंग", "चार्ल्स बैबेज", "बिल गेट्स", "स्टीव जॉब्स"],
    correctAnswer: 1,
    explanationEn: "Charles Babbage is called the Father of Computer for designing the Analytical Engine.",
    explanationHi: "चार्ल्स बैबेज को Analytical Engine डिजाइन करने के लिए कंप्यूटर के पिता कहा जाता है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "introduction",
    tags: ["history", "personalities"]
  },
  {
    id: "CK-003",
    questionEn: "Which generation of computers used vacuum tubes?",
    questionHi: "कंप्यूटर की किस पीढ़ी में वैक्यूम ट्यूब का उपयोग किया गया था?",
    optionsEn: ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"],
    optionsHi: ["पहली पीढ़ी", "दूसरी पीढ़ी", "तीसरी पीढ़ी", "चौथी पीढ़ी"],
    correctAnswer: 0,
    explanationEn: "First generation computers (1940-1956) used vacuum tubes.",
    explanationHi: "पहली पीढ़ी के कंप्यूटर (1940-1956) में वैक्यूम ट्यूब का उपयोग किया गया था।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "generations",
    tags: ["generations", "technology"]
  },
  {
    id: "CK-004",
    questionEn: "What does GIGO stand for?",
    questionHi: "GIGO का पूर्ण रूप क्या है?",
    optionsEn: ["Great Input Great Output", "Garbage In Garbage Out", "Good Input Good Output", "General Input General Output"],
    optionsHi: ["Great Input Great Output", "Garbage In Garbage Out", "Good Input Good Output", "General Input General Output"],
    correctAnswer: 1,
    explanationEn: "GIGO (Garbage In Garbage Out) means if input data is incorrect, output will also be incorrect.",
    explanationHi: "GIGO (Garbage In Garbage Out) का अर्थ है यदि इनपुट डेटा गलत है, तो आउटपुट भी गलत होगा।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "introduction",
    tags: ["basics", "principles"]
  },
  {
    id: "CK-005",
    questionEn: "Which is the fastest type of computer?",
    questionHi: "सबसे तेज प्रकार का कंप्यूटर कौन सा है?",
    optionsEn: ["Mainframe", "Minicomputer", "Supercomputer", "Microcomputer"],
    optionsHi: ["मेनफ्रेम", "मिनीकंप्यूटर", "सुपरकंप्यूटर", "माइक्रोकंप्यूटर"],
    correctAnswer: 2,
    explanationEn: "Supercomputers are the fastest computers, used for complex calculations like weather forecasting. India's PARAM is an example.",
    explanationHi: "सुपरकंप्यूटर सबसे तेज कंप्यूटर हैं, मौसम पूर्वानुमान जैसी जटिल गणनाओं के लिए उपयोग किए जाते हैं। भारत का PARAM इसका उदाहरण है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "types",
    tags: ["types", "supercomputer"]
  },
  {
    id: "CK-006",
    questionEn: "ENIAC stands for:",
    questionHi: "ENIAC का पूर्ण रूप है:",
    optionsEn: [
      "Electronic Numerical Integrator and Computer",
      "Electronic Network Integrated Advanced Computer",
      "Electronic Numerical Internet And Calculator",
      "Electronic Network Integrator And Calculator"
    ],
    optionsHi: [
      "Electronic Numerical Integrator and Computer",
      "Electronic Network Integrated Advanced Computer",
      "Electronic Numerical Internet And Calculator",
      "Electronic Network Integrator And Calculator"
    ],
    correctAnswer: 0,
    explanationEn: "ENIAC (Electronic Numerical Integrator and Computer) was the first general-purpose electronic computer.",
    explanationHi: "ENIAC (Electronic Numerical Integrator and Computer) पहला सामान्य उद्देश्य का इलेक्ट्रॉनिक कंप्यूटर था।",
    difficulty: "medium",
    topic: "computer-knowledge",
    subtopic: "history",
    tags: ["history", "full-forms"]
  },
  {
    id: "CK-007",
    questionEn: "Second generation computers used which technology?",
    questionHi: "दूसरी पीढ़ी के कंप्यूटर में कौन सी तकनीक का उपयोग किया गया?",
    optionsEn: ["Vacuum tubes", "Transistors", "Integrated Circuits", "Microprocessors"],
    optionsHi: ["वैक्यूम ट्यूब", "ट्रांजिस्टर", "इंटीग्रेटेड सर्किट", "माइक्रोप्रोसेसर"],
    correctAnswer: 1,
    explanationEn: "Second generation computers (1956-1963) used transistors, which were smaller and more reliable than vacuum tubes.",
    explanationHi: "दूसरी पीढ़ी के कंप्यूटर (1956-1963) में ट्रांजिस्टर का उपयोग किया गया, जो वैक्यूम ट्यूब से छोटे और अधिक विश्वसनीय थे।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "generations",
    tags: ["generations", "technology"]
  },
  {
    id: "CK-008",
    questionEn: "The first microprocessor was:",
    questionHi: "पहला माइक्रोप्रोसेसर था:",
    optionsEn: ["Intel 8086", "Intel 4004", "Intel Pentium", "AMD Athlon"],
    optionsHi: ["Intel 8086", "Intel 4004", "Intel Pentium", "AMD Athlon"],
    correctAnswer: 1,
    explanationEn: "Intel 4004 (1971) was the first commercially available microprocessor, marking the beginning of fourth generation computers.",
    explanationHi: "Intel 4004 (1971) पहला व्यावसायिक रूप से उपलब्ध माइक्रोप्रोसेसर था, जिसने चौथी पीढ़ी के कंप्यूटरों की शुरुआत की।",
    difficulty: "medium",
    topic: "computer-knowledge",
    subtopic: "generations",
    tags: ["microprocessor", "history"]
  },
  {
    id: "CK-009",
    questionEn: "Which generation of computers is associated with Artificial Intelligence?",
    questionHi: "कंप्यूटर की कौन सी पीढ़ी कृत्रिम बुद्धिमत्ता से जुड़ी है?",
    optionsEn: ["Third Generation", "Fourth Generation", "Fifth Generation", "Second Generation"],
    optionsHi: ["तीसरी पीढ़ी", "चौथी पीढ़ी", "पांचवीं पीढ़ी", "दूसरी पीढ़ी"],
    correctAnswer: 2,
    explanationEn: "Fifth generation computers focus on Artificial Intelligence, machine learning, and natural language processing.",
    explanationHi: "पांचवीं पीढ़ी के कंप्यूटर कृत्रिम बुद्धिमत्ता, मशीन लर्निंग और प्राकृतिक भाषा प्रसंस्करण पर केंद्रित हैं।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "generations",
    tags: ["generations", "AI"]
  },
  {
    id: "CK-010",
    questionEn: "VLSI stands for:",
    questionHi: "VLSI का पूर्ण रूप है:",
    optionsEn: ["Very Large Scale Integration", "Very Low Speed Internet", "Virtual Large System Interface", "Visual Large Scale Internet"],
    optionsHi: ["Very Large Scale Integration", "Very Low Speed Internet", "Virtual Large System Interface", "Visual Large Scale Internet"],
    correctAnswer: 0,
    explanationEn: "VLSI (Very Large Scale Integration) is used in fourth generation computers for creating microprocessors.",
    explanationHi: "VLSI (Very Large Scale Integration) का उपयोग चौथी पीढ़ी के कंप्यूटरों में माइक्रोप्रोसेसर बनाने के लिए किया जाता है।",
    difficulty: "medium",
    topic: "computer-knowledge",
    subtopic: "generations",
    tags: ["full-forms", "technology"]
  },

  // Hardware Questions
  {
    id: "CK-011",
    questionEn: "What is RAM?",
    questionHi: "RAM क्या है?",
    optionsEn: ["Read Access Memory", "Random Access Memory", "Rapid Access Memory", "Recent Access Memory"],
    optionsHi: ["Read Access Memory", "Random Access Memory", "Rapid Access Memory", "Recent Access Memory"],
    correctAnswer: 1,
    explanationEn: "RAM stands for Random Access Memory - a volatile, temporary memory used for running programs.",
    explanationHi: "RAM का मतलब Random Access Memory है - एक अस्थायी मेमोरी जो प्रोग्राम चलाने के लिए उपयोग होती है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "hardware",
    tags: ["memory", "full-forms"]
  },
  {
    id: "CK-012",
    questionEn: "CPU stands for:",
    questionHi: "CPU का पूर्ण रूप क्या है?",
    optionsEn: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Computing Process Unit"],
    optionsHi: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Computing Process Unit"],
    correctAnswer: 0,
    explanationEn: "CPU stands for Central Processing Unit - the brain of the computer that processes all instructions.",
    explanationHi: "CPU का मतलब Central Processing Unit है - कंप्यूटर का मस्तिष्क जो सभी निर्देशों को प्रोसेस करता है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "hardware",
    tags: ["cpu", "full-forms"]
  },
  {
    id: "CK-013",
    questionEn: "1 KB equals how many bytes?",
    questionHi: "1 KB में कितने बाइट्स होते हैं?",
    optionsEn: ["100 Bytes", "1000 Bytes", "1024 Bytes", "512 Bytes"],
    optionsHi: ["100 बाइट्स", "1000 बाइट्स", "1024 बाइट्स", "512 बाइट्स"],
    correctAnswer: 2,
    explanationEn: "1 Kilobyte (KB) = 1024 Bytes. This is based on binary system (2^10 = 1024).",
    explanationHi: "1 किलोबाइट (KB) = 1024 बाइट्स। यह बाइनरी सिस्टम पर आधारित है (2^10 = 1024)।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "hardware",
    tags: ["storage", "units"]
  },
  {
    id: "CK-014",
    questionEn: "Which is an input device?",
    questionHi: "इनपुट डिवाइस कौन सा है?",
    optionsEn: ["Monitor", "Printer", "Keyboard", "Speaker"],
    optionsHi: ["मॉनिटर", "प्रिंटर", "कीबोर्ड", "स्पीकर"],
    correctAnswer: 2,
    explanationEn: "Keyboard is an input device used to enter data into the computer. Monitor, Printer, and Speaker are output devices.",
    explanationHi: "कीबोर्ड एक इनपुट डिवाइस है। मॉनिटर, प्रिंटर और स्पीकर आउटपुट डिवाइस हैं।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "hardware",
    tags: ["input-devices", "devices"]
  },
  {
    id: "CK-015",
    questionEn: "ROM is:",
    questionHi: "ROM है:",
    optionsEn: ["Volatile memory", "Non-volatile memory", "Temporary storage", "Same as RAM"],
    optionsHi: ["अस्थायी मेमोरी", "स्थायी मेमोरी", "टेम्पररी स्टोरेज", "RAM जैसी"],
    correctAnswer: 1,
    explanationEn: "ROM (Read Only Memory) is non-volatile - it retains data even when power is off. It stores BIOS and boot instructions.",
    explanationHi: "ROM (Read Only Memory) स्थायी है - बिजली बंद होने पर भी डेटा रहता है। इसमें BIOS और बूट निर्देश संग्रहीत होते हैं।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "hardware",
    tags: ["memory", "rom"]
  },
  {
    id: "CK-016",
    questionEn: "SSD stands for:",
    questionHi: "SSD का पूर्ण रूप है:",
    optionsEn: ["Solid State Drive", "System Storage Device", "Secondary Storage Disk", "Standard Storage Drive"],
    optionsHi: ["Solid State Drive", "System Storage Device", "Secondary Storage Disk", "Standard Storage Drive"],
    correctAnswer: 0,
    explanationEn: "SSD (Solid State Drive) is faster than HDD as it has no moving parts and uses flash memory.",
    explanationHi: "SSD (Solid State Drive) HDD से तेज है क्योंकि इसमें कोई चलने वाला भाग नहीं है और यह फ्लैश मेमोरी का उपयोग करती है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "hardware",
    tags: ["storage", "full-forms"]
  },
  {
    id: "CK-017",
    questionEn: "USB stands for:",
    questionHi: "USB का पूर्ण रूप है:",
    optionsEn: ["Universal Serial Bus", "Uniform Serial Bus", "United Serial Bus", "Universal System Bus"],
    optionsHi: ["Universal Serial Bus", "Uniform Serial Bus", "United Serial Bus", "Universal System Bus"],
    correctAnswer: 0,
    explanationEn: "USB (Universal Serial Bus) is a standard port for connecting peripheral devices.",
    explanationHi: "USB (Universal Serial Bus) परिधीय उपकरणों को जोड़ने के लिए एक मानक पोर्ट है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "hardware",
    tags: ["ports", "full-forms"]
  },
  {
    id: "CK-018",
    questionEn: "Which memory is fastest?",
    questionHi: "सबसे तेज मेमोरी कौन सी है?",
    optionsEn: ["Hard Disk", "RAM", "Cache", "ROM"],
    optionsHi: ["हार्ड डिस्क", "RAM", "कैश", "ROM"],
    correctAnswer: 2,
    explanationEn: "Cache memory is the fastest, located between CPU and RAM. Speed order: Registers > Cache > RAM > SSD > HDD.",
    explanationHi: "कैश मेमोरी सबसे तेज है, CPU और RAM के बीच स्थित। गति क्रम: रजिस्टर > कैश > RAM > SSD > HDD।",
    difficulty: "medium",
    topic: "computer-knowledge",
    subtopic: "hardware",
    tags: ["memory", "performance"]
  },
  {
    id: "CK-019",
    questionEn: "ALU stands for:",
    questionHi: "ALU का पूर्ण रूप है:",
    optionsEn: ["Automatic Logic Unit", "Arithmetic Logic Unit", "Advanced Logic Unit", "Application Logic Unit"],
    optionsHi: ["Automatic Logic Unit", "Arithmetic Logic Unit", "Advanced Logic Unit", "Application Logic Unit"],
    correctAnswer: 1,
    explanationEn: "ALU (Arithmetic Logic Unit) is part of CPU that performs mathematical and logical operations.",
    explanationHi: "ALU (Arithmetic Logic Unit) CPU का हिस्सा है जो गणितीय और तार्किक संचालन करता है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "hardware",
    tags: ["cpu", "full-forms"]
  },
  {
    id: "CK-020",
    questionEn: "1 GB equals:",
    questionHi: "1 GB बराबर है:",
    optionsEn: ["1000 MB", "1024 MB", "512 MB", "2048 MB"],
    optionsHi: ["1000 MB", "1024 MB", "512 MB", "2048 MB"],
    correctAnswer: 1,
    explanationEn: "1 Gigabyte (GB) = 1024 Megabytes (MB).",
    explanationHi: "1 गीगाबाइट (GB) = 1024 मेगाबाइट्स (MB)।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "hardware",
    tags: ["storage", "units"]
  },

  // Software Questions
  {
    id: "CK-021",
    questionEn: "Which is NOT an Operating System?",
    questionHi: "कौन सा ऑपरेटिंग सिस्टम नहीं है?",
    optionsEn: ["Windows", "Linux", "MS Word", "macOS"],
    optionsHi: ["Windows", "Linux", "MS Word", "macOS"],
    correctAnswer: 2,
    explanationEn: "MS Word is an application software (word processor), not an operating system.",
    explanationHi: "MS Word एक एप्लिकेशन सॉफ्टवेयर (वर्ड प्रोसेसर) है, ऑपरेटिंग सिस्टम नहीं।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "software",
    tags: ["operating-system", "software-types"]
  },
  {
    id: "CK-022",
    questionEn: "MS Word file extension is:",
    questionHi: "MS Word फाइल एक्सटेंशन है:",
    optionsEn: [".xlsx", ".docx", ".pptx", ".pdf"],
    optionsHi: [".xlsx", ".docx", ".pptx", ".pdf"],
    correctAnswer: 1,
    explanationEn: ".docx is the file extension for Microsoft Word documents. .xlsx for Excel, .pptx for PowerPoint.",
    explanationHi: ".docx Microsoft Word की फाइल एक्सटेंशन है। .xlsx Excel की, .pptx PowerPoint की।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "ms-office",
    tags: ["file-extensions", "ms-word"]
  },
  {
    id: "CK-023",
    questionEn: "MS Excel is used for:",
    questionHi: "MS Excel का उपयोग किया जाता है:",
    optionsEn: ["Word processing", "Spreadsheet calculations", "Presentations", "Database management"],
    optionsHi: ["वर्ड प्रोसेसिंग", "स्प्रेडशीट गणना", "प्रेजेंटेशन", "डेटाबेस प्रबंधन"],
    correctAnswer: 1,
    explanationEn: "MS Excel is spreadsheet software used for calculations, data analysis, charts, and formulas.",
    explanationHi: "MS Excel स्प्रेडशीट सॉफ्टवेयर है जो गणना, डेटा विश्लेषण, चार्ट और फॉर्मूला के लिए उपयोग होती है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "ms-office",
    tags: ["ms-excel", "software-types"]
  },
  {
    id: "CK-024",
    questionEn: "URL stands for:",
    questionHi: "URL का पूर्ण रूप है:",
    optionsEn: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Resource Link", "Universal Resource Locator"],
    optionsHi: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Resource Link", "Universal Resource Locator"],
    correctAnswer: 0,
    explanationEn: "URL (Uniform Resource Locator) is the address of a web page, e.g., https://www.example.com",
    explanationHi: "URL (Uniform Resource Locator) वेब पेज का पता है, जैसे https://www.example.com",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "internet",
    tags: ["internet", "full-forms"]
  },
  {
    id: "CK-025",
    questionEn: "WWW stands for:",
    questionHi: "WWW का पूर्ण रूप है:",
    optionsEn: ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"],
    optionsHi: ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"],
    correctAnswer: 0,
    explanationEn: "WWW (World Wide Web) is a system of interlinked hypertext documents accessed via the Internet.",
    explanationHi: "WWW (World Wide Web) इंटरनेट के माध्यम से एक्सेस किए जाने वाले हाइपरटेक्स्ट दस्तावेज़ों की प्रणाली है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "internet",
    tags: ["internet", "full-forms"]
  },

  // Shortcuts
  {
    id: "CK-026",
    questionEn: "What is the shortcut key for Copy?",
    questionHi: "कॉपी करने के लिए शॉर्टकट कुंजी क्या है?",
    optionsEn: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
    optionsHi: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
    correctAnswer: 1,
    explanationEn: "Ctrl + C is used to copy selected items. Ctrl + X for Cut, Ctrl + V for Paste, Ctrl + Z for Undo.",
    explanationHi: "Ctrl + C कॉपी के लिए। Ctrl + X कट के लिए, Ctrl + V पेस्ट के लिए, Ctrl + Z अनडू के लिए।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "shortcuts",
    tags: ["shortcuts", "basic"]
  },
  {
    id: "CK-027",
    questionEn: "Which key is used for Undo?",
    questionHi: "अनडू के लिए कौन सी कुंजी उपयोग की जाती है?",
    optionsEn: ["Ctrl + Y", "Ctrl + Z", "Ctrl + U", "Ctrl + X"],
    optionsHi: ["Ctrl + Y", "Ctrl + Z", "Ctrl + U", "Ctrl + X"],
    correctAnswer: 1,
    explanationEn: "Ctrl + Z is used to undo the last action. Ctrl + Y is for Redo.",
    explanationHi: "Ctrl + Z अंतिम क्रिया को पूर्ववत करता है। Ctrl + Y रीडू के लिए है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "shortcuts",
    tags: ["shortcuts", "basic"]
  },
  {
    id: "CK-028",
    questionEn: "Alt + F4 is used to:",
    questionHi: "Alt + F4 का उपयोग किया जाता है:",
    optionsEn: ["Open new file", "Close current window", "Save file", "Print document"],
    optionsHi: ["नई फाइल खोलने", "वर्तमान विंडो बंद करने", "फाइल सेव करने", "डॉक्यूमेंट प्रिंट करने"],
    correctAnswer: 1,
    explanationEn: "Alt + F4 closes the current window or application in Windows.",
    explanationHi: "Alt + F4 Windows में वर्तमान विंडो या एप्लिकेशन को बंद करता है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "shortcuts",
    tags: ["shortcuts", "windows"]
  },
  {
    id: "CK-029",
    questionEn: "Ctrl + S is used for:",
    questionHi: "Ctrl + S का उपयोग किया जाता है:",
    optionsEn: ["Select all", "Save file", "Search", "Settings"],
    optionsHi: ["सभी चुनें", "फाइल सेव करें", "खोजें", "सेटिंग्स"],
    correctAnswer: 1,
    explanationEn: "Ctrl + S saves the current document or file.",
    explanationHi: "Ctrl + S वर्तमान डॉक्यूमेंट या फाइल को सेव करता है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "shortcuts",
    tags: ["shortcuts", "basic"]
  },
  {
    id: "CK-030",
    questionEn: "Ctrl + P is used for:",
    questionHi: "Ctrl + P का उपयोग किया जाता है:",
    optionsEn: ["Paste", "Print", "Page setup", "Properties"],
    optionsHi: ["पेस्ट", "प्रिंट", "पेज सेटअप", "प्रॉपर्टीज"],
    correctAnswer: 1,
    explanationEn: "Ctrl + P opens the Print dialog.",
    explanationHi: "Ctrl + P प्रिंट डायलॉग खोलता है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "shortcuts",
    tags: ["shortcuts", "basic"]
  },

  // Internet & Security
  {
    id: "CK-031",
    questionEn: "What is a computer virus?",
    questionHi: "कंप्यूटर वायरस क्या है?",
    optionsEn: [
      "Useful software",
      "Malicious program that damages computer",
      "Hardware component",
      "Operating system"
    ],
    optionsHi: [
      "उपयोगी सॉफ्टवेयर",
      "हानिकारक प्रोग्राम जो कंप्यूटर को नुकसान पहुंचाता है",
      "हार्डवेयर घटक",
      "ऑपरेटिंग सिस्टम"
    ],
    correctAnswer: 1,
    explanationEn: "A computer virus is a malicious program that can damage data, steal information, or disrupt system operations.",
    explanationHi: "कंप्यूटर वायरस एक हानिकारक प्रोग्राम है जो डेटा को नुकसान पहुंचा सकता है, जानकारी चुरा सकता है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "security",
    tags: ["security", "virus"]
  },
  {
    id: "CK-032",
    questionEn: "What is the function of Antivirus software?",
    questionHi: "एंटीवायरस सॉफ्टवेयर का कार्य क्या है?",
    optionsEn: [
      "Speed up computer",
      "Detect and remove viruses",
      "Manage files",
      "Browse internet"
    ],
    optionsHi: [
      "कंप्यूटर तेज करना",
      "वायरस का पता लगाना और हटाना",
      "फाइलें प्रबंधित करना",
      "इंटरनेट ब्राउज़ करना"
    ],
    correctAnswer: 1,
    explanationEn: "Antivirus software detects, prevents, and removes malicious software including viruses, worms, and malware.",
    explanationHi: "एंटीवायरस सॉफ्टवेयर वायरस, वर्म्स और मैलवेयर सहित हानिकारक सॉफ्टवेयर का पता लगाता है और हटाता है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "security",
    tags: ["security", "antivirus"]
  },
  {
    id: "CK-033",
    questionEn: "HTTP stands for:",
    questionHi: "HTTP का पूर्ण रूप है:",
    optionsEn: [
      "HyperText Transfer Protocol",
      "High Text Transfer Protocol",
      "HyperText Transport Protocol",
      "Home Text Transfer Protocol"
    ],
    optionsHi: [
      "HyperText Transfer Protocol",
      "High Text Transfer Protocol",
      "HyperText Transport Protocol",
      "Home Text Transfer Protocol"
    ],
    correctAnswer: 0,
    explanationEn: "HTTP (HyperText Transfer Protocol) is the protocol used for transferring web pages on the internet.",
    explanationHi: "HTTP (HyperText Transfer Protocol) इंटरनेट पर वेब पेजों को ट्रांसफर करने के लिए उपयोग किया जाने वाला प्रोटोकॉल है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "internet",
    tags: ["internet", "full-forms"]
  },
  {
    id: "CK-034",
    questionEn: "Email stands for:",
    questionHi: "Email का पूर्ण रूप है:",
    optionsEn: ["Electronic Mail", "Easy Mail", "Express Mail", "External Mail"],
    optionsHi: ["Electronic Mail", "Easy Mail", "Express Mail", "External Mail"],
    correctAnswer: 0,
    explanationEn: "Email (Electronic Mail) is a method of exchanging messages via internet.",
    explanationHi: "Email (Electronic Mail) इंटरनेट के माध्यम से संदेशों का आदान-प्रदान करने की विधि है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "internet",
    tags: ["internet", "full-forms"]
  },
  {
    id: "CK-035",
    questionEn: "What is a strong password?",
    questionHi: "मजबूत पासवर्ड क्या है?",
    optionsEn: [
      "Only your name",
      "Combination of letters, numbers, and special characters",
      "123456",
      "Your birthdate"
    ],
    optionsHi: [
      "केवल आपका नाम",
      "अक्षरों, संख्याओं और विशेष चिह्नों का संयोजन",
      "123456",
      "आपकी जन्मतिथि"
    ],
    correctAnswer: 1,
    explanationEn: "A strong password contains at least 8 characters with uppercase, lowercase, numbers, and special characters.",
    explanationHi: "मजबूत पासवर्ड में कम से कम 8 अक्षर हों जिसमें बड़े, छोटे अक्षर, संख्याएं और विशेष चिह्न हों।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "security",
    tags: ["security", "password"]
  },

  // Digital Services
  {
    id: "CK-036",
    questionEn: "What is Aadhaar?",
    questionHi: "आधार क्या है?",
    optionsEn: [
      "Bank account",
      "12-digit unique identification number",
      "Passport",
      "Voter ID"
    ],
    optionsHi: [
      "बैंक खाता",
      "12 अंकों का विशिष्ट पहचान नंबर",
      "पासपोर्ट",
      "वोटर ID"
    ],
    correctAnswer: 1,
    explanationEn: "Aadhaar is a 12-digit unique identification number issued by UIDAI to residents of India.",
    explanationHi: "आधार UIDAI द्वारा भारत के निवासियों को जारी 12 अंकों का विशिष्ट पहचान नंबर है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "digital-india",
    tags: ["digital-india", "government"]
  },
  {
    id: "CK-037",
    questionEn: "DigiLocker is used for:",
    questionHi: "DigiLocker का उपयोग किया जाता है:",
    optionsEn: [
      "Playing games",
      "Storing digital documents",
      "Video calling",
      "Online shopping"
    ],
    optionsHi: [
      "गेम खेलने",
      "डिजिटल दस्तावेज़ संग्रहीत करने",
      "वीडियो कॉलिंग",
      "ऑनलाइन शॉपिंग"
    ],
    correctAnswer: 1,
    explanationEn: "DigiLocker is a government platform to store and access digital documents like Aadhaar, PAN, Driving License.",
    explanationHi: "DigiLocker आधार, PAN, ड्राइविंग लाइसेंस जैसे डिजिटल दस्तावेज़ों को संग्रहीत करने का सरकारी प्लेटफॉर्म है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "digital-india",
    tags: ["digital-india", "government"]
  },
  {
    id: "CK-038",
    questionEn: "UPI stands for:",
    questionHi: "UPI का पूर्ण रूप है:",
    optionsEn: [
      "Unified Payment Interface",
      "Universal Payment Interface",
      "Unified Payment Integration",
      "Universal Payment Integration"
    ],
    optionsHi: [
      "Unified Payment Interface",
      "Universal Payment Interface",
      "Unified Payment Integration",
      "Universal Payment Integration"
    ],
    correctAnswer: 0,
    explanationEn: "UPI (Unified Payment Interface) is a real-time payment system developed by NPCI for instant bank transfers.",
    explanationHi: "UPI (Unified Payment Interface) NPCI द्वारा विकसित तत्काल बैंक ट्रांसफर के लिए रीयल-टाइम पेमेंट सिस्टम है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "digital-india",
    tags: ["digital-india", "full-forms"]
  },
  {
    id: "CK-039",
    questionEn: "What is e-Sanjeevani?",
    questionHi: "e-संजीवनी क्या है?",
    optionsEn: ["Online game", "Telemedicine service", "Shopping app", "Social media"],
    optionsHi: ["ऑनलाइन गेम", "टेलीमेडिसिन सेवा", "शॉपिंग ऐप", "सोशल मीडिया"],
    correctAnswer: 1,
    explanationEn: "e-Sanjeevani is India's telemedicine platform for free online doctor consultations.",
    explanationHi: "e-संजीवनी भारत का टेलीमेडिसिन प्लेटफॉर्म है जो मुफ्त ऑनलाइन डॉक्टर परामर्श प्रदान करता है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "digital-india",
    tags: ["digital-india", "healthcare"]
  },
  {
    id: "CK-040",
    questionEn: "HMIS in healthcare stands for:",
    questionHi: "स्वास्थ्य में HMIS का पूर्ण रूप है:",
    optionsEn: [
      "Health Management Information System",
      "Hospital Management Information System",
      "Health Medical Information System",
      "Human Management Information System"
    ],
    optionsHi: [
      "Health Management Information System",
      "Hospital Management Information System",
      "Health Medical Information System",
      "Human Management Information System"
    ],
    correctAnswer: 0,
    explanationEn: "HMIS (Health Management Information System) is used for health data management and reporting.",
    explanationHi: "HMIS (Health Management Information System) स्वास्थ्य डेटा प्रबंधन और रिपोर्टिंग के लिए उपयोग किया जाता है।",
    difficulty: "easy",
    topic: "computer-knowledge",
    subtopic: "healthcare-it",
    tags: ["healthcare", "full-forms"]
  }
];

export const computerKnowledgeBank: QuestionBank = {
  topicId: "computer-knowledge",
  topicNameEn: "Computer Knowledge",
  topicNameHi: "कंप्यूटर ज्ञान",
  totalQuestions: computerKnowledgeQuestions.length,
  questions: computerKnowledgeQuestions
};

export default computerKnowledgeBank;
