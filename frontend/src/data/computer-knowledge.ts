export interface LessonSection {
  title: string;
  type: 'text' | 'table' | 'list' | 'code' | 'highlight' | 'diagram';
  content?: string;
  items?: string[];
  tableData?: { headers: string[]; rows: string[][] };
  highlightType?: 'info' | 'warning' | 'tip' | 'important';
}

export interface Lesson {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  icon: string;
  objectives: string[];
  sections: LessonSection[];
  keyTerms?: { term: string; definition: string }[];
  shortcuts?: { shortcut: string; action: string }[];
  summary: string[];
}

export const computerKnowledgeLessons: Lesson[] = [
  {
    id: 'introduction-to-computers',
    number: 1,
    title: 'Introduction to Computers',
    description: 'Learn the fundamentals of computers, their evolution, types, and applications in healthcare.',
    duration: '45 mins',
    icon: '🖥️',
    objectives: [
      'Understand the definition and characteristics of computers',
      'Learn about computer generations and their evolution',
      'Identify different types of computers',
      'Explore applications of computers in healthcare'
    ],
    sections: [
      {
        title: 'What is a Computer?',
        type: 'text',
        content: 'A computer is an electronic device that processes data according to a set of instructions called programs. It can store, retrieve, and process data to produce meaningful information.'
      },
      {
        title: 'COMPUTER Full Form',
        type: 'highlight',
        highlightType: 'info',
        content: 'COMPUTER = Common Operating Machine Purposely Used for Technological and Educational Research (informal expansion)'
      },
      {
        title: 'Characteristics of Computers',
        type: 'table',
        tableData: {
          headers: ['Characteristic', 'Description'],
          rows: [
            ['Speed', 'Performs millions of calculations per second'],
            ['Accuracy', 'Produces correct results (GIGO principle applies)'],
            ['Storage', 'Stores large amounts of data'],
            ['Diligence', 'Works consistently without fatigue'],
            ['Versatility', 'Performs various types of tasks'],
            ['Automation', 'Works automatically once programmed'],
            ['No IQ', 'Cannot think independently']
          ]
        }
      },
      {
        title: 'GIGO Principle',
        type: 'highlight',
        highlightType: 'warning',
        content: 'Garbage In, Garbage Out - If input data is incorrect, output will also be incorrect.'
      },
      {
        title: 'Generations of Computers',
        type: 'table',
        tableData: {
          headers: ['Generation', 'Period', 'Technology', 'Examples'],
          rows: [
            ['First', '1940-1956', 'Vacuum Tubes', 'ENIAC, UNIVAC, EDVAC'],
            ['Second', '1956-1963', 'Transistors', 'IBM 1401, IBM 7094'],
            ['Third', '1964-1971', 'Integrated Circuits (IC)', 'IBM 360, PDP-8'],
            ['Fourth', '1971-Present', 'Microprocessors (VLSI)', 'PCs, Laptops'],
            ['Fifth', 'Present & Future', 'AI, Quantum Computing', 'AI Systems, Robotics']
          ]
        }
      },
      {
        title: 'Types of Computers by Size',
        type: 'list',
        items: [
          'Supercomputers - Fastest, used for weather forecasting, research (PARAM in India)',
          'Mainframe - Large, supports many users, used in banks, airlines',
          'Minicomputers - Medium-sized, departmental use',
          'Microcomputers - Personal computers, laptops, tablets',
          'Workstations - High-performance PCs for design/engineering'
        ]
      },
      {
        title: 'Applications in Healthcare',
        type: 'list',
        items: [
          'Patient record management (EMR/EHR)',
          'Diagnostic imaging (X-ray, MRI, CT scan)',
          'Telemedicine and teleconsultation',
          'Health information systems',
          'Drug inventory management',
          'Laboratory information systems'
        ]
      },
      {
        title: 'Important Facts',
        type: 'highlight',
        highlightType: 'important',
        content: 'Charles Babbage is known as the Father of Computer (designed Analytical Engine). Ada Lovelace is considered the First Computer Programmer.'
      }
    ],
    keyTerms: [
      { term: 'Hardware', definition: 'Physical components of computer' },
      { term: 'Software', definition: 'Programs and instructions' },
      { term: 'Data', definition: 'Raw facts and figures' },
      { term: 'Information', definition: 'Processed and meaningful data' },
      { term: 'Program', definition: 'Set of instructions' },
      { term: 'Bug', definition: 'Error in a program' },
      { term: 'Debug', definition: 'Finding and fixing errors' }
    ],
    summary: [
      'Computer is an electronic device for data processing',
      'Five generations from vacuum tubes to AI',
      'Types vary by size, purpose, and data handling',
      'Healthcare uses computers extensively for patient care',
      'Charles Babbage is the Father of Computer'
    ]
  },
  {
    id: 'computer-hardware',
    number: 2,
    title: 'Computer Hardware',
    description: 'Explore input devices, output devices, CPU, memory types, and storage devices.',
    duration: '50 mins',
    icon: '⌨️',
    objectives: [
      'Identify various input and output devices',
      'Understand CPU components and functions',
      'Differentiate between memory types',
      'Learn about storage devices and units'
    ],
    sections: [
      {
        title: 'What is Hardware?',
        type: 'text',
        content: 'Hardware refers to the physical, tangible components of a computer that can be seen and touched. It includes all devices attached to or inside the computer.'
      },
      {
        title: 'Input Devices',
        type: 'table',
        tableData: {
          headers: ['Device', 'Function', 'Types'],
          rows: [
            ['Keyboard', 'Text and command input', 'QWERTY, Laptop, Virtual'],
            ['Mouse', 'Pointing and clicking', 'Mechanical, Optical, Wireless'],
            ['Scanner', 'Converts physical to digital', 'Flatbed, Handheld, Drum'],
            ['Microphone', 'Audio input', 'Condenser, Dynamic'],
            ['Webcam', 'Video input', 'USB, Built-in'],
            ['Barcode Reader', 'Reads barcodes', 'Handheld, Fixed']
          ]
        }
      },
      {
        title: 'Output Devices',
        type: 'table',
        tableData: {
          headers: ['Device', 'Function', 'Types'],
          rows: [
            ['Monitor', 'Visual display', 'CRT, LCD, LED, OLED'],
            ['Printer', 'Hard copy output', 'Inkjet, Laser, Dot Matrix'],
            ['Speaker', 'Audio output', 'Wired, Wireless, Built-in'],
            ['Projector', 'Large display', 'LCD, DLP, LED']
          ]
        }
      },
      {
        title: 'Central Processing Unit (CPU)',
        type: 'highlight',
        highlightType: 'info',
        content: 'The CPU is the brain of the computer. It consists of: ALU (Arithmetic Logic Unit) for calculations, CU (Control Unit) for coordination, and Registers for fast temporary storage.'
      },
      {
        title: 'Memory Types',
        type: 'table',
        tableData: {
          headers: ['Type', 'Full Form', 'Volatile?', 'Purpose'],
          rows: [
            ['RAM', 'Random Access Memory', 'Yes', 'Temporary storage for running programs'],
            ['ROM', 'Read Only Memory', 'No', 'Stores boot instructions (BIOS)'],
            ['Cache', 'Cache Memory', 'Yes', 'Ultra-fast CPU memory (L1, L2, L3)']
          ]
        }
      },
      {
        title: 'Storage Devices',
        type: 'list',
        items: [
          'HDD (Hard Disk Drive) - Magnetic storage, larger capacity, slower',
          'SSD (Solid State Drive) - Flash memory, faster, no moving parts',
          'USB Flash Drive - Portable flash storage',
          'CD/DVD - Optical storage (700MB/4.7GB)',
          'Memory Cards - SD, microSD for mobile devices'
        ]
      },
      {
        title: 'Storage Units',
        type: 'table',
        tableData: {
          headers: ['Unit', 'Size'],
          rows: [
            ['Bit', 'Smallest unit (0 or 1)'],
            ['Byte', '8 bits'],
            ['Kilobyte (KB)', '1024 Bytes'],
            ['Megabyte (MB)', '1024 KB'],
            ['Gigabyte (GB)', '1024 MB'],
            ['Terabyte (TB)', '1024 GB'],
            ['Petabyte (PB)', '1024 TB']
          ]
        }
      },
      {
        title: 'Common Ports',
        type: 'list',
        items: [
          'USB - Universal Serial Bus (most common)',
          'HDMI - High-Definition Multimedia Interface',
          'VGA - Video Graphics Array (older)',
          'Ethernet/RJ-45 - Network connection',
          'Type-C - Modern reversible USB'
        ]
      }
    ],
    summary: [
      'Input devices send data to computer (keyboard, mouse, scanner)',
      'Output devices display results (monitor, printer, speaker)',
      'CPU is the brain with ALU and Control Unit',
      'RAM is volatile; ROM is non-volatile',
      'Storage units: bits → bytes → KB → MB → GB → TB'
    ]
  },
  {
    id: 'computer-software',
    number: 3,
    title: 'Computer Software',
    description: 'Learn about system software, application software, and programming languages.',
    duration: '45 mins',
    icon: '💿',
    objectives: [
      'Differentiate between system and application software',
      'Understand operating system functions',
      'Learn about programming languages',
      'Understand software licensing'
    ],
    sections: [
      {
        title: 'What is Software?',
        type: 'text',
        content: 'Software is a set of instructions (programs) that tells the computer what to do. Unlike hardware, software cannot be physically touched.'
      },
      {
        title: 'Types of Software',
        type: 'table',
        tableData: {
          headers: ['Type', 'Purpose', 'Examples'],
          rows: [
            ['System Software', 'Manages hardware', 'Windows, Linux, macOS'],
            ['Application Software', 'User tasks', 'MS Office, Browsers'],
            ['Utility Software', 'System maintenance', 'Antivirus, Disk Cleanup'],
            ['Programming Software', 'Create software', 'Visual Studio, Python IDE']
          ]
        }
      },
      {
        title: 'Operating System Functions',
        type: 'list',
        items: [
          'Memory Management - Allocates RAM to programs',
          'Process Management - Manages running programs',
          'File Management - Organizes files and folders',
          'Device Management - Controls hardware devices',
          'User Interface - GUI or Command Line',
          'Security - User authentication and access control'
        ]
      },
      {
        title: 'Popular Operating Systems',
        type: 'table',
        tableData: {
          headers: ['OS', 'Developer', 'Used For'],
          rows: [
            ['Windows', 'Microsoft', 'Personal computers'],
            ['macOS', 'Apple', 'Mac computers'],
            ['Linux', 'Open Source', 'Servers, developers'],
            ['Android', 'Google', 'Mobile devices'],
            ['iOS', 'Apple', 'iPhone, iPad']
          ]
        }
      },
      {
        title: 'Programming Languages',
        type: 'table',
        tableData: {
          headers: ['Level', 'Type', 'Examples'],
          rows: [
            ['Low Level', 'Machine Language', 'Binary (0s and 1s)'],
            ['Low Level', 'Assembly Language', 'Mnemonics (ADD, SUB)'],
            ['High Level', 'Procedural', 'C, FORTRAN, COBOL'],
            ['High Level', 'Object-Oriented', 'Java, C++, Python'],
            ['High Level', 'Web Languages', 'HTML, CSS, JavaScript']
          ]
        }
      },
      {
        title: 'Language Translators',
        type: 'highlight',
        highlightType: 'tip',
        content: 'Compiler translates entire program at once (C, C++). Interpreter translates line by line (Python). Assembler converts assembly to machine code.'
      },
      {
        title: 'Software Licensing',
        type: 'table',
        tableData: {
          headers: ['Type', 'Description', 'Examples'],
          rows: [
            ['Proprietary', 'Paid, closed source', 'MS Office, Adobe'],
            ['Open Source', 'Free, source available', 'Linux, GIMP'],
            ['Freeware', 'Free to use', 'Skype, Adobe Reader'],
            ['Shareware', 'Trial version', 'WinRAR, WinZip']
          ]
        }
      },
      {
        title: 'Common File Extensions',
        type: 'table',
        tableData: {
          headers: ['Extension', 'Software/Type'],
          rows: [
            ['.doc, .docx', 'MS Word'],
            ['.xls, .xlsx', 'MS Excel'],
            ['.ppt, .pptx', 'MS PowerPoint'],
            ['.pdf', 'Adobe PDF'],
            ['.jpg, .png', 'Image files'],
            ['.mp3, .wav', 'Audio files'],
            ['.mp4, .avi', 'Video files'],
            ['.exe', 'Executable program'],
            ['.zip, .rar', 'Compressed files']
          ]
        }
      }
    ],
    summary: [
      'System software manages hardware (OS, drivers)',
      'Application software performs user tasks',
      'High-level languages are easier to understand',
      'Compilers translate all at once; Interpreters line by line',
      'File extensions indicate file type'
    ]
  },
  {
    id: 'windows-operating-system',
    number: 4,
    title: 'Windows Operating System',
    description: 'Master Windows interface, file management, and basic troubleshooting.',
    duration: '50 mins',
    icon: '🪟',
    objectives: [
      'Navigate Windows desktop and interface',
      'Perform file and folder operations',
      'Use Control Panel and Settings',
      'Apply basic troubleshooting techniques'
    ],
    sections: [
      {
        title: 'Windows Desktop Components',
        type: 'list',
        items: [
          'Desktop Icons - Shortcuts to programs and files',
          'Taskbar - Bottom bar with Start button, pinned apps, system tray',
          'Start Menu - Access to all programs and settings',
          'System Tray - Clock, volume, network, notifications',
          'Wallpaper - Desktop background image',
          'Recycle Bin - Temporarily stores deleted files'
        ]
      },
      {
        title: 'File Operations',
        type: 'table',
        tableData: {
          headers: ['Operation', 'Method', 'Shortcut'],
          rows: [
            ['Create', 'Right-click → New', '-'],
            ['Copy', 'Right-click → Copy', 'Ctrl + C'],
            ['Cut', 'Right-click → Cut', 'Ctrl + X'],
            ['Paste', 'Right-click → Paste', 'Ctrl + V'],
            ['Delete', 'Right-click → Delete', 'Delete key'],
            ['Permanent Delete', 'Shift + Delete', 'Shift + Del'],
            ['Rename', 'Right-click → Rename', 'F2'],
            ['Select All', 'Edit → Select All', 'Ctrl + A']
          ]
        }
      },
      {
        title: 'Windows Accessories',
        type: 'table',
        tableData: {
          headers: ['Application', 'Purpose'],
          rows: [
            ['Notepad', 'Simple text editor (.txt files)'],
            ['WordPad', 'Basic word processor with formatting'],
            ['Paint', 'Basic image editor'],
            ['Calculator', 'Standard and scientific calculations'],
            ['Snipping Tool', 'Screenshot capture'],
            ['Task Manager', 'Monitor and manage processes']
          ]
        }
      },
      {
        title: 'Task Manager',
        type: 'highlight',
        highlightType: 'tip',
        content: 'Open Task Manager with Ctrl + Shift + Esc. Use it to view running processes, monitor CPU/memory usage, and end unresponsive programs.'
      },
      {
        title: 'Restart vs Shutdown',
        type: 'table',
        tableData: {
          headers: ['Option', 'What it Does'],
          rows: [
            ['Restart', 'Closes and reopens Windows (clears memory)'],
            ['Shutdown', 'Completely turns off the computer'],
            ['Sleep', 'Low power mode, quick resume'],
            ['Hibernate', 'Saves state to disk, no power needed']
          ]
        }
      },
      {
        title: 'File Path Example',
        type: 'highlight',
        highlightType: 'info',
        content: 'A file path shows location in directory structure. Example: C:\\Users\\Documents\\Report.docx'
      }
    ],
    shortcuts: [
      { shortcut: 'Ctrl + C', action: 'Copy' },
      { shortcut: 'Ctrl + X', action: 'Cut' },
      { shortcut: 'Ctrl + V', action: 'Paste' },
      { shortcut: 'Ctrl + Z', action: 'Undo' },
      { shortcut: 'Ctrl + A', action: 'Select All' },
      { shortcut: 'Alt + Tab', action: 'Switch windows' },
      { shortcut: 'Win + D', action: 'Show desktop' },
      { shortcut: 'Win + E', action: 'Open Explorer' },
      { shortcut: 'Win + L', action: 'Lock computer' },
      { shortcut: 'Win + R', action: 'Run dialog' },
      { shortcut: 'F2', action: 'Rename' },
      { shortcut: 'F5', action: 'Refresh' },
      { shortcut: 'Alt + F4', action: 'Close window' },
      { shortcut: 'Print Screen', action: 'Screenshot' }
    ],
    summary: [
      'Windows provides GUI for easy computer use',
      'Desktop includes icons, taskbar, Start menu',
      'File Explorer manages files and folders',
      'Task Manager monitors and manages programs',
      'Keyboard shortcuts improve efficiency'
    ]
  },
  {
    id: 'ms-word',
    number: 5,
    title: 'Microsoft Word',
    description: 'Create professional documents with formatting, tables, and mail merge.',
    duration: '55 mins',
    icon: '📝',
    objectives: [
      'Create and format documents',
      'Apply text and paragraph formatting',
      'Insert tables, images, and page elements',
      'Use mail merge for bulk documents'
    ],
    sections: [
      {
        title: 'MS Word Interface',
        type: 'list',
        items: [
          'Title Bar - Shows document name',
          'Ribbon - Commands organized in tabs (Home, Insert, Layout, etc.)',
          'Quick Access Toolbar - Frequently used commands',
          'Document Area - Main workspace',
          'Status Bar - Page number, word count, zoom',
          'Ruler - Shows margins and tab positions'
        ]
      },
      {
        title: 'Document Operations',
        type: 'table',
        tableData: {
          headers: ['Operation', 'Shortcut', 'Menu Path'],
          rows: [
            ['New Document', 'Ctrl + N', 'File → New'],
            ['Open', 'Ctrl + O', 'File → Open'],
            ['Save', 'Ctrl + S', 'File → Save'],
            ['Save As', 'F12', 'File → Save As'],
            ['Print', 'Ctrl + P', 'File → Print'],
            ['Close', 'Ctrl + W', 'File → Close']
          ]
        }
      },
      {
        title: 'Text Formatting',
        type: 'table',
        tableData: {
          headers: ['Format', 'Shortcut', 'Purpose'],
          rows: [
            ['Bold', 'Ctrl + B', 'Makes text darker/thicker'],
            ['Italic', 'Ctrl + I', 'Slants text'],
            ['Underline', 'Ctrl + U', 'Line below text'],
            ['Subscript', 'Ctrl + =', 'Text below line (H₂O)'],
            ['Superscript', 'Ctrl + Shift + +', 'Text above line (x²)']
          ]
        }
      },
      {
        title: 'Paragraph Alignment',
        type: 'table',
        tableData: {
          headers: ['Alignment', 'Shortcut', 'Use Case'],
          rows: [
            ['Left', 'Ctrl + L', 'Default for body text'],
            ['Center', 'Ctrl + E', 'Titles, headings'],
            ['Right', 'Ctrl + R', 'Dates, signatures'],
            ['Justify', 'Ctrl + J', 'Formal documents']
          ]
        }
      },
      {
        title: 'Text Selection Methods',
        type: 'table',
        tableData: {
          headers: ['Select', 'Method'],
          rows: [
            ['Word', 'Double-click on word'],
            ['Line', 'Click in left margin'],
            ['Paragraph', 'Triple-click'],
            ['All', 'Ctrl + A'],
            ['Custom', 'Click and drag']
          ]
        }
      },
      {
        title: 'Insert Features',
        type: 'list',
        items: [
          'Tables - Insert → Table → Select grid size',
          'Pictures - Insert → Pictures → Browse',
          'Shapes - Insert → Shapes → Draw',
          'Header/Footer - Insert → Header or Footer',
          'Page Numbers - Insert → Page Number',
          'Page Break - Ctrl + Enter'
        ]
      },
      {
        title: 'Mail Merge Steps',
        type: 'highlight',
        highlightType: 'tip',
        content: '1. Select document type → 2. Select starting document → 3. Select recipients (data source) → 4. Insert merge fields → 5. Preview results → 6. Complete merge'
      },
      {
        title: 'Review Features',
        type: 'list',
        items: [
          'Spelling & Grammar - F7 (Red = spelling, Blue = grammar)',
          'Thesaurus - Shift + F7 (Find synonyms)',
          'Comments - Review → New Comment',
          'Track Changes - Review → Track Changes'
        ]
      }
    ],
    shortcuts: [
      { shortcut: 'Ctrl + N', action: 'New document' },
      { shortcut: 'Ctrl + O', action: 'Open' },
      { shortcut: 'Ctrl + S', action: 'Save' },
      { shortcut: 'Ctrl + P', action: 'Print' },
      { shortcut: 'Ctrl + B', action: 'Bold' },
      { shortcut: 'Ctrl + I', action: 'Italic' },
      { shortcut: 'Ctrl + U', action: 'Underline' },
      { shortcut: 'Ctrl + L', action: 'Left align' },
      { shortcut: 'Ctrl + E', action: 'Center align' },
      { shortcut: 'Ctrl + R', action: 'Right align' },
      { shortcut: 'Ctrl + J', action: 'Justify' },
      { shortcut: 'Ctrl + F', action: 'Find' },
      { shortcut: 'Ctrl + H', action: 'Replace' },
      { shortcut: 'Ctrl + Enter', action: 'Page break' },
      { shortcut: 'F7', action: 'Spell check' },
      { shortcut: 'F12', action: 'Save As' }
    ],
    summary: [
      'Ribbon organizes commands into tabs and groups',
      'Font formatting: Bold, Italic, Underline, Size, Color',
      'Paragraph formatting: Alignment, Spacing, Indentation',
      'Insert tables, images, headers, footers, page numbers',
      'Mail merge creates personalized mass documents'
    ]
  },
  {
    id: 'ms-excel',
    number: 6,
    title: 'Microsoft Excel',
    description: 'Master spreadsheets, formulas, functions, and data visualization.',
    duration: '60 mins',
    icon: '📊',
    objectives: [
      'Understand Excel workbook structure',
      'Enter and format data',
      'Create formulas and use functions',
      'Create charts and manage data'
    ],
    sections: [
      {
        title: 'Excel Basics',
        type: 'table',
        tableData: {
          headers: ['Term', 'Definition'],
          rows: [
            ['Workbook', 'Excel file (.xlsx) containing worksheets'],
            ['Worksheet', 'Single sheet with rows and columns'],
            ['Cell', 'Intersection of row and column (e.g., A1)'],
            ['Row', 'Horizontal (numbered 1, 2, 3...)'],
            ['Column', 'Vertical (lettered A, B, C... AA, AB...)'],
            ['Cell Address', 'Column letter + Row number (e.g., C5)'],
            ['Active Cell', 'Currently selected cell']
          ]
        }
      },
      {
        title: 'Data Types in Excel',
        type: 'list',
        items: [
          'Text/Labels - Names, descriptions (left-aligned)',
          'Numbers - Numeric values (right-aligned)',
          'Dates - Date values in various formats',
          'Formulas - Calculations starting with ='
        ]
      },
      {
        title: 'Operators',
        type: 'table',
        tableData: {
          headers: ['Operator', 'Meaning', 'Example'],
          rows: [
            ['+', 'Addition', '=A1+B1'],
            ['-', 'Subtraction', '=A1-B1'],
            ['*', 'Multiplication', '=A1*B1'],
            ['/', 'Division', '=A1/B1'],
            ['^', 'Exponentiation', '=A1^2'],
            ['&', 'Concatenation', '=A1&B1']
          ]
        }
      },
      {
        title: 'Cell References',
        type: 'highlight',
        highlightType: 'important',
        content: 'Relative (A1) - Changes when copied. Absolute ($A$1) - Does not change when copied. Mixed ($A1 or A$1) - Partially fixed.'
      },
      {
        title: 'Mathematical Functions',
        type: 'table',
        tableData: {
          headers: ['Function', 'Purpose', 'Example'],
          rows: [
            ['SUM', 'Add values', '=SUM(A1:A10)'],
            ['AVERAGE', 'Calculate mean', '=AVERAGE(A1:A10)'],
            ['MAX', 'Largest value', '=MAX(A1:A10)'],
            ['MIN', 'Smallest value', '=MIN(A1:A10)'],
            ['COUNT', 'Count numbers', '=COUNT(A1:A10)'],
            ['COUNTA', 'Count non-empty', '=COUNTA(A1:A10)'],
            ['ROUND', 'Round number', '=ROUND(A1,2)']
          ]
        }
      },
      {
        title: 'Text Functions',
        type: 'table',
        tableData: {
          headers: ['Function', 'Purpose', 'Example'],
          rows: [
            ['UPPER', 'Convert to uppercase', '=UPPER(A1)'],
            ['LOWER', 'Convert to lowercase', '=LOWER(A1)'],
            ['PROPER', 'Title case', '=PROPER(A1)'],
            ['LEN', 'Count characters', '=LEN(A1)'],
            ['LEFT', 'Extract from left', '=LEFT(A1,5)'],
            ['RIGHT', 'Extract from right', '=RIGHT(A1,3)']
          ]
        }
      },
      {
        title: 'IF Function',
        type: 'highlight',
        highlightType: 'tip',
        content: '=IF(condition, value_if_true, value_if_false). Example: =IF(A1>50,"Pass","Fail")'
      },
      {
        title: 'Chart Types',
        type: 'list',
        items: [
          'Column/Bar Chart - Compare values across categories',
          'Line Chart - Show trends over time',
          'Pie Chart - Show parts of a whole',
          'Area Chart - Show cumulative totals',
          'Scatter Chart - Show relationship between variables'
        ]
      },
      {
        title: 'Data Management',
        type: 'list',
        items: [
          'Sort - Ascending (A-Z) or Descending (Z-A)',
          'Filter - Show specific data based on criteria',
          'Data Validation - Restrict data entry types'
        ]
      }
    ],
    shortcuts: [
      { shortcut: 'Ctrl + N', action: 'New workbook' },
      { shortcut: 'Ctrl + Home', action: 'Go to cell A1' },
      { shortcut: 'Ctrl + End', action: 'Go to last used cell' },
      { shortcut: 'Ctrl + Arrow', action: 'Jump to data edge' },
      { shortcut: 'F2', action: 'Edit cell' },
      { shortcut: 'F4', action: 'Toggle absolute reference' },
      { shortcut: 'Alt + =', action: 'AutoSum' },
      { shortcut: 'Ctrl + ;', action: 'Insert current date' },
      { shortcut: 'Ctrl + :', action: 'Insert current time' }
    ],
    summary: [
      'Excel organizes data in cells, rows, and columns',
      'Formulas start with = and use operators',
      'Key functions: SUM, AVERAGE, MAX, MIN, COUNT, IF',
      'Cell references: Relative (A1), Absolute ($A$1)',
      'Charts visualize data effectively'
    ]
  },
  {
    id: 'ms-powerpoint',
    number: 7,
    title: 'Microsoft PowerPoint',
    description: 'Create engaging presentations with slides, animations, and transitions.',
    duration: '45 mins',
    icon: '📽️',
    objectives: [
      'Create and manage presentations',
      'Add visual elements and media',
      'Apply transitions and animations',
      'Deliver effective presentations'
    ],
    sections: [
      {
        title: 'PowerPoint Interface',
        type: 'list',
        items: [
          'Title Bar - Shows presentation name',
          'Ribbon - Commands in tabs',
          'Slide Pane - Thumbnails of all slides (left)',
          'Slide Area - Main editing area (center)',
          'Notes Pane - Speaker notes (bottom)',
          'Status Bar - Slide number, view options, zoom'
        ]
      },
      {
        title: 'Slide Layouts',
        type: 'list',
        items: [
          'Title Slide - For opening slide',
          'Title and Content - Standard layout',
          'Section Header - For section dividers',
          'Two Content - Side by side content',
          'Comparison - Compare two items',
          'Title Only - Maximum content flexibility',
          'Blank - Complete flexibility'
        ]
      },
      {
        title: 'Adding Content',
        type: 'table',
        tableData: {
          headers: ['Element', 'How to Insert'],
          rows: [
            ['New Slide', 'Ctrl + M or Home → New Slide'],
            ['Text Box', 'Insert → Text Box'],
            ['Picture', 'Insert → Pictures'],
            ['Shape', 'Insert → Shapes'],
            ['Chart', 'Insert → Chart'],
            ['Table', 'Insert → Table'],
            ['Video', 'Insert → Video'],
            ['Audio', 'Insert → Audio']
          ]
        }
      },
      {
        title: 'SmartArt',
        type: 'highlight',
        highlightType: 'tip',
        content: 'Insert → SmartArt for professional diagrams. Types include: List, Process, Cycle, Hierarchy, Relationship, Matrix, Pyramid.'
      },
      {
        title: 'Transitions',
        type: 'text',
        content: 'Transitions are effects when moving from one slide to another. Common transitions include: Fade, Push, Wipe, Split, Reveal, and Morph (PowerPoint 2019+).'
      },
      {
        title: 'Animation Types',
        type: 'table',
        tableData: {
          headers: ['Type', 'Purpose', 'Examples'],
          rows: [
            ['Entrance', 'Object appears', 'Fade, Fly In, Zoom'],
            ['Emphasis', 'Object highlighted', 'Spin, Grow/Shrink'],
            ['Exit', 'Object disappears', 'Fade Out, Fly Out'],
            ['Motion Paths', 'Object moves', 'Lines, Arcs, Custom']
          ]
        }
      },
      {
        title: 'Animation Timing',
        type: 'list',
        items: [
          'On Click - Starts when you click',
          'With Previous - Starts with previous animation',
          'After Previous - Starts after previous completes'
        ]
      },
      {
        title: 'Slideshow Controls',
        type: 'table',
        tableData: {
          headers: ['Action', 'Key'],
          rows: [
            ['Start from beginning', 'F5'],
            ['Start from current slide', 'Shift + F5'],
            ['Next slide', 'Click, Enter, or Space'],
            ['Previous slide', 'Backspace or P'],
            ['Go to specific slide', 'Number + Enter'],
            ['Black screen', 'B'],
            ['White screen', 'W'],
            ['End show', 'Esc']
          ]
        }
      },
      {
        title: 'Save Formats',
        type: 'table',
        tableData: {
          headers: ['Format', 'Extension', 'Use'],
          rows: [
            ['PowerPoint', '.pptx', 'Editable presentation'],
            ['PowerPoint Show', '.ppsx', 'Opens directly in slideshow'],
            ['PDF', '.pdf', 'Universal sharing'],
            ['Video', '.mp4', 'Video version of presentation']
          ]
        }
      },
      {
        title: 'Presentation Tips',
        type: 'highlight',
        highlightType: 'important',
        content: '6x6 Rule: Maximum 6 lines per slide, 6 words per line. Keep slides simple, use consistent fonts and colors, use high-quality images.'
      }
    ],
    shortcuts: [
      { shortcut: 'Ctrl + N', action: 'New presentation' },
      { shortcut: 'Ctrl + M', action: 'New slide' },
      { shortcut: 'Ctrl + D', action: 'Duplicate slide' },
      { shortcut: 'F5', action: 'Start from beginning' },
      { shortcut: 'Shift + F5', action: 'Start from current' },
      { shortcut: 'Esc', action: 'End slideshow' },
      { shortcut: 'B', action: 'Black screen in show' },
      { shortcut: 'W', action: 'White screen in show' }
    ],
    summary: [
      'PowerPoint creates visual presentations',
      'Slides can contain text, images, media, charts',
      'Themes provide consistent design',
      'Transitions: Effects between slides',
      'Animations: Effects on objects within slides'
    ]
  },
  {
    id: 'internet-and-email',
    number: 8,
    title: 'Internet and Email',
    description: 'Navigate the internet safely and communicate effectively via email.',
    duration: '50 mins',
    icon: '🌐',
    objectives: [
      'Understand internet basics and browsers',
      'Search information effectively',
      'Use email for communication',
      'Practice safe internet habits'
    ],
    sections: [
      {
        title: 'What is Internet?',
        type: 'text',
        content: 'The Internet is a global network of interconnected computers that communicate using standardized protocols. It enables sharing of information and resources worldwide.'
      },
      {
        title: 'Key Internet Terms',
        type: 'table',
        tableData: {
          headers: ['Term', 'Definition'],
          rows: [
            ['WWW', 'World Wide Web - Collection of websites'],
            ['URL', 'Uniform Resource Locator - Web address'],
            ['HTTP/HTTPS', 'Protocols for web communication (S = Secure)'],
            ['Browser', 'Software to access websites'],
            ['ISP', 'Internet Service Provider'],
            ['DNS', 'Domain Name System - Converts names to IP']
          ]
        }
      },
      {
        title: 'Internet History',
        type: 'highlight',
        highlightType: 'info',
        content: 'ARPANET (1969) was the first network. Tim Berners-Lee invented the World Wide Web in 1989. VSNL was India\'s first ISP (1995).'
      },
      {
        title: 'Web Browsers',
        type: 'table',
        tableData: {
          headers: ['Browser', 'Developer', 'Key Feature'],
          rows: [
            ['Google Chrome', 'Google', 'Most popular, fast'],
            ['Mozilla Firefox', 'Mozilla', 'Privacy-focused, open source'],
            ['Microsoft Edge', 'Microsoft', 'Built into Windows'],
            ['Safari', 'Apple', 'For Mac/iOS devices'],
            ['Opera', 'Opera Software', 'Feature-rich, VPN']
          ]
        }
      },
      {
        title: 'Browser Shortcuts',
        type: 'table',
        tableData: {
          headers: ['Shortcut', 'Action'],
          rows: [
            ['Ctrl + T', 'New tab'],
            ['Ctrl + W', 'Close tab'],
            ['Ctrl + Shift + T', 'Reopen closed tab'],
            ['Ctrl + L', 'Focus address bar'],
            ['Ctrl + D', 'Bookmark page'],
            ['Ctrl + H', 'History'],
            ['F5 / Ctrl + R', 'Refresh'],
            ['Ctrl + Shift + N', 'Incognito/Private mode']
          ]
        }
      },
      {
        title: 'Search Engines',
        type: 'list',
        items: [
          'Google (google.com) - Most popular',
          'Bing (bing.com) - Microsoft',
          'DuckDuckGo - Privacy-focused',
          'Yahoo - Portal with search'
        ]
      },
      {
        title: 'Search Tips',
        type: 'highlight',
        highlightType: 'tip',
        content: 'Use quotes for exact phrases: "exact phrase". Use minus to exclude: computer -games. Use site: for specific websites: site:gov.in. Use filetype: for file types: filetype:pdf'
      },
      {
        title: 'Email Components',
        type: 'table',
        tableData: {
          headers: ['Component', 'Purpose'],
          rows: [
            ['To', 'Primary recipient'],
            ['Cc (Carbon Copy)', 'Additional recipients (visible)'],
            ['Bcc (Blind Carbon Copy)', 'Hidden recipients'],
            ['Subject', 'Brief topic description'],
            ['Body', 'Main message content'],
            ['Attachment', 'Files sent with email'],
            ['Signature', 'Auto-added text at end']
          ]
        }
      },
      {
        title: 'Email Folders',
        type: 'list',
        items: [
          'Inbox - Received emails',
          'Sent - Emails you sent',
          'Drafts - Unsent emails',
          'Spam/Junk - Unwanted emails',
          'Trash - Deleted emails'
        ]
      },
      {
        title: 'Email Security',
        type: 'highlight',
        highlightType: 'warning',
        content: 'Never open suspicious attachments. Verify sender before clicking links. Don\'t share passwords via email. Beware of phishing emails. Enable two-factor authentication.'
      },
      {
        title: 'Cloud Storage Services',
        type: 'table',
        tableData: {
          headers: ['Service', 'Free Storage', 'Provider'],
          rows: [
            ['Google Drive', '15 GB', 'Google'],
            ['OneDrive', '5 GB', 'Microsoft'],
            ['Dropbox', '2 GB', 'Dropbox'],
            ['iCloud', '5 GB', 'Apple']
          ]
        }
      }
    ],
    summary: [
      'Internet connects computers worldwide',
      'Browsers (Chrome, Firefox, Edge) access websites',
      'Search engines help find information',
      'Email enables electronic communication',
      'Practice safe browsing and email habits'
    ]
  },
  {
    id: 'digital-literacy-online-services',
    number: 9,
    title: 'Digital Literacy and Online Services',
    description: 'Explore Digital India initiatives, government portals, and online banking.',
    duration: '50 mins',
    icon: '🇮🇳',
    objectives: [
      'Understand Digital India initiatives',
      'Navigate government online portals',
      'Use digital payment systems',
      'Access health-related online services'
    ],
    sections: [
      {
        title: 'Digital India Initiative',
        type: 'text',
        content: 'Digital India is a flagship program launched in 2015 to transform India into a digitally empowered society and knowledge economy.'
      },
      {
        title: 'Pillars of Digital India',
        type: 'list',
        items: [
          'Broadband Highways - High-speed connectivity',
          'Universal Mobile Connectivity - Mobile for all',
          'Public Internet Access - Common Service Centers',
          'e-Governance - Government services online',
          'e-Kranti - Electronic delivery of services',
          'Information for All - Open data platform',
          'IT for Jobs - Training for employment'
        ]
      },
      {
        title: 'Important Government Portals',
        type: 'table',
        tableData: {
          headers: ['Portal', 'URL', 'Purpose'],
          rows: [
            ['National Portal', 'india.gov.in', 'Central gateway'],
            ['MyGov', 'mygov.in', 'Citizen engagement'],
            ['Aadhaar', 'uidai.gov.in', 'Unique ID services'],
            ['DigiLocker', 'digilocker.gov.in', 'Digital documents'],
            ['Income Tax', 'incometax.gov.in', 'Tax filing'],
            ['IRCTC', 'irctc.co.in', 'Railway booking']
          ]
        }
      },
      {
        title: 'Health-Related Portals',
        type: 'table',
        tableData: {
          headers: ['Portal', 'Purpose'],
          rows: [
            ['nhp.gov.in', 'National Health Portal'],
            ['nha.gov.in', 'National Health Authority'],
            ['cowin.gov.in', 'COVID vaccination'],
            ['mohfw.gov.in', 'Ministry of Health'],
            ['e-Sanjeevani', 'Telemedicine services']
          ]
        }
      },
      {
        title: 'DigiLocker',
        type: 'highlight',
        highlightType: 'info',
        content: 'DigiLocker is a cloud-based platform for storing, sharing, and verifying documents digitally. It offers 2 GB free storage and is linked with Aadhaar.'
      },
      {
        title: 'Digital Payments',
        type: 'table',
        tableData: {
          headers: ['Method', 'Description'],
          rows: [
            ['UPI', 'Unified Payments Interface - Real-time transfers'],
            ['BHIM', 'Bharat Interface for Money - Govt UPI app'],
            ['Net Banking', 'Bank website transactions'],
            ['Mobile Banking', 'Bank app transactions'],
            ['RuPay', 'Indian payment card network']
          ]
        }
      },
      {
        title: 'UPI Payment Apps',
        type: 'list',
        items: [
          'BHIM - Government UPI app',
          'Google Pay - Google',
          'PhonePe - Flipkart/Walmart',
          'Paytm - Paytm',
          'Amazon Pay - Amazon'
        ]
      },
      {
        title: 'Online Banking Safety',
        type: 'highlight',
        highlightType: 'warning',
        content: 'Never share OTP. Use strong passwords. Enable transaction alerts. Don\'t use public WiFi for banking. Always log out after use.'
      },
      {
        title: 'Common Service Centers (CSC)',
        type: 'text',
        content: 'CSCs are village-level centers providing government and private services including Aadhaar enrollment, banking, bill payments, and digital literacy training.'
      },
      {
        title: 'Report Cybercrime',
        type: 'highlight',
        highlightType: 'important',
        content: 'National Cyber Crime Portal: cybercrime.gov.in. Report online fraud, harassment, and other cyber crimes here.'
      }
    ],
    summary: [
      'Digital India promotes e-governance and digital literacy',
      'DigiLocker stores documents digitally',
      'UPI enables instant digital payments',
      'Health portals: NHP, CoWIN, e-Sanjeevani',
      'CSCs bring digital services to villages'
    ]
  },
  {
    id: 'computer-security-ethics',
    number: 10,
    title: 'Computer Security and Ethics',
    description: 'Learn cybersecurity basics, data protection, and ethical computing practices.',
    duration: '55 mins',
    icon: '🔒',
    objectives: [
      'Identify common security threats',
      'Implement password and data security',
      'Understand privacy and data protection',
      'Follow ethical computing practices'
    ],
    sections: [
      {
        title: 'Types of Malware',
        type: 'table',
        tableData: {
          headers: ['Malware', 'Description'],
          rows: [
            ['Virus', 'Self-replicating program that attaches to files'],
            ['Worm', 'Spreads without user action'],
            ['Trojan Horse', 'Disguised as legitimate software'],
            ['Ransomware', 'Encrypts data, demands payment'],
            ['Spyware', 'Secretly monitors user activity'],
            ['Adware', 'Displays unwanted advertisements']
          ]
        }
      },
      {
        title: 'Network Threats',
        type: 'list',
        items: [
          'Hacking - Unauthorized access to systems',
          'Phishing - Fake emails/websites to steal info',
          'Man-in-the-Middle - Intercepting communications',
          'DDoS Attack - Overwhelming server with traffic',
          'Social Engineering - Manipulating people'
        ]
      },
      {
        title: 'Antivirus Software',
        type: 'table',
        tableData: {
          headers: ['Type', 'Examples'],
          rows: [
            ['Free', 'Windows Defender, Avast, AVG'],
            ['Paid', 'Norton, Kaspersky, Quick Heal, McAfee']
          ]
        }
      },
      {
        title: 'Strong Password Rules',
        type: 'highlight',
        highlightType: 'important',
        content: 'Minimum 8 characters (12+ recommended). Mix uppercase and lowercase. Include numbers and special characters (!@#$%). Avoid common words and personal info. Use unique password for each account.'
      },
      {
        title: 'Two-Factor Authentication (2FA)',
        type: 'list',
        items: [
          'OTP via SMS or email',
          'Authenticator app (Google Authenticator)',
          'Biometric (fingerprint, face recognition)',
          'Security key (USB device)'
        ]
      },
      {
        title: 'Data Backup Methods',
        type: 'table',
        tableData: {
          headers: ['Method', 'Description'],
          rows: [
            ['Local Backup', 'External HDD, USB drive'],
            ['Cloud Backup', 'Google Drive, OneDrive'],
            ['Network Backup', 'NAS (Network Attached Storage)']
          ]
        }
      },
      {
        title: '3-2-1 Backup Rule',
        type: 'highlight',
        highlightType: 'tip',
        content: 'Keep 3 copies of data, on 2 different storage types, with 1 copy off-site (cloud or different location).'
      },
      {
        title: 'Computer Ethics',
        type: 'list',
        items: [
          'Respect intellectual property and copyrights',
          'Avoid software piracy',
          'Respect others\' privacy online',
          'Don\'t spread misinformation',
          'Don\'t cyberbully or harass',
          'Report inappropriate content'
        ]
      },
      {
        title: 'Legal Issues',
        type: 'table',
        tableData: {
          headers: ['Crime', 'Description'],
          rows: [
            ['Hacking', 'Unauthorized system access'],
            ['Identity Theft', 'Stealing personal information'],
            ['Online Fraud', 'Deceiving for financial gain'],
            ['Cyber Stalking', 'Online harassment'],
            ['Software Piracy', 'Illegal copying of software']
          ]
        }
      },
      {
        title: 'IT Act 2000 (India)',
        type: 'text',
        content: 'The Information Technology Act, 2000 provides legal recognition for electronic records and transactions, defines cyber crimes, and establishes penalties for violations.'
      },
      {
        title: 'Safe Computing Practices',
        type: 'list',
        items: [
          'Keep software and OS updated',
          'Use antivirus and firewall',
          'Don\'t open suspicious attachments',
          'Use secure WiFi (WPA2/WPA3)',
          'Lock computer when away',
          'Use VPN on public networks',
          'Regularly backup important data'
        ]
      }
    ],
    summary: [
      'Malware includes viruses, worms, trojans, ransomware',
      'Use antivirus software and keep it updated',
      'Create strong, unique passwords with 2FA',
      'Regular backups protect against data loss',
      'Follow ethical practices and respect privacy'
    ]
  }
];

export const getLessonById = (id: string): Lesson | undefined => {
  return computerKnowledgeLessons.find(l => l.id === id);
};

export const computerKnowledgeModule = {
  id: 'computer-knowledge',
  title: 'Basic Computer Knowledge',
  description: 'Comprehensive course covering computer fundamentals, MS Office, internet, and digital literacy for MPHW examination preparation.',
  totalLessons: computerKnowledgeLessons.length,
  totalDuration: '8+ hours',
  icon: '💻',
  color: '#38b2ac',
  objectives: [
    'Understand basic computer hardware and software components',
    'Operate Windows operating system efficiently',
    'Use MS Word, Excel, and PowerPoint for documentation',
    'Navigate the internet and use email for communication',
    'Apply digital tools in healthcare settings',
    'Understand cybersecurity and data protection basics'
  ]
};
