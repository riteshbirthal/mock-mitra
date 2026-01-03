import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TopicLayout from '../../components/topic/TopicLayout';
import LessonContent from '../../components/topic/LessonContent';
import QuizComponent from '../../components/topic/QuizComponent';
import MockTestComponent from '../../components/topic/MockTestComponent';
import { computerKnowledgeLessons } from '../../data/computerKnowledgeContent';
import { computerKnowledgeQuestions } from '../../data/questionBanks/computerKnowledge';
import './ComputerKnowledge.css';

const STORAGE_KEYS = {
  COMPLETED_LESSONS: 'computerKnowledge_completedLessons',
  ACTIVE_TAB: 'computerKnowledge_activeTab',
};

const tabs = [
  { id: 'learn', labelEn: 'Learn', labelHi: 'पढ़ें', icon: '📚' },
  { id: 'quiz', labelEn: 'Quiz', labelHi: 'क्विज़', icon: '📝' },
  { id: 'mocktest', labelEn: 'Mock Test', labelHi: 'मॉक टेस्ट', icon: '📋' },
  { id: 'resources', labelEn: 'Resources', labelHi: 'संसाधन', icon: '📁' },
];

export default function ComputerKnowledge() {
  const { isHindi } = useLanguage();
  
  // Initialize state from localStorage
  const [activeTab, setActiveTab] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB);
    return saved || 'learn';
  });
  
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return saved ? JSON.parse(saved) : [];
  });

  // Persist activeTab to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab);
  }, [activeTab]);

  // Persist completedLessons to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons));
  }, [completedLessons]);

  const progress = (completedLessons.length / computerKnowledgeLessons.length) * 100;

  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn':
        return (
          <LessonContent 
            lessons={computerKnowledgeLessons}
            completedLessons={completedLessons}
            onLessonComplete={handleLessonComplete}
            topicId="computer-knowledge"
          />
        );
      case 'quiz':
        return (
          <QuizComponent 
            questions={computerKnowledgeQuestions}
            questionCount={10}
            title={isHindi ? 'कंप्यूटर ज्ञान क्विज़' : 'Computer Knowledge Quiz'}
          />
        );
      case 'mocktest':
        return (
          <MockTestComponent 
            questions={computerKnowledgeQuestions}
            testDuration={30}
            questionCount={20}
          />
        );
      case 'resources':
        return (
          <div className="resources-content">
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-icon">📊</div>
                <h3>{isHindi ? 'स्टोरेज इकाइयां' : 'Storage Units'}</h3>
                <div className="resource-content">
                  <div className="storage-diagram">
                    <div className="storage-item">
                      <span className="storage-unit">1 Bit</span>
                      <span className="storage-arrow">→</span>
                      <span className="storage-value">0 या 1</span>
                    </div>
                    <div className="storage-item">
                      <span className="storage-unit">1 Byte</span>
                      <span className="storage-arrow">→</span>
                      <span className="storage-value">8 Bits</span>
                    </div>
                    <div className="storage-item">
                      <span className="storage-unit">1 KB</span>
                      <span className="storage-arrow">→</span>
                      <span className="storage-value">1024 Bytes</span>
                    </div>
                    <div className="storage-item">
                      <span className="storage-unit">1 MB</span>
                      <span className="storage-arrow">→</span>
                      <span className="storage-value">1024 KB</span>
                    </div>
                    <div className="storage-item">
                      <span className="storage-unit">1 GB</span>
                      <span className="storage-arrow">→</span>
                      <span className="storage-value">1024 MB</span>
                    </div>
                    <div className="storage-item">
                      <span className="storage-unit">1 TB</span>
                      <span className="storage-arrow">→</span>
                      <span className="storage-value">1024 GB</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">⌨️</div>
                <h3>{isHindi ? 'महत्वपूर्ण शॉर्टकट' : 'Important Shortcuts'}</h3>
                <div className="shortcuts-list">
                  <div className="shortcut-item">
                    <kbd>Ctrl</kbd> + <kbd>C</kbd>
                    <span>{isHindi ? 'कॉपी' : 'Copy'}</span>
                  </div>
                  <div className="shortcut-item">
                    <kbd>Ctrl</kbd> + <kbd>V</kbd>
                    <span>{isHindi ? 'पेस्ट' : 'Paste'}</span>
                  </div>
                  <div className="shortcut-item">
                    <kbd>Ctrl</kbd> + <kbd>X</kbd>
                    <span>{isHindi ? 'कट' : 'Cut'}</span>
                  </div>
                  <div className="shortcut-item">
                    <kbd>Ctrl</kbd> + <kbd>Z</kbd>
                    <span>{isHindi ? 'अनडू' : 'Undo'}</span>
                  </div>
                  <div className="shortcut-item">
                    <kbd>Ctrl</kbd> + <kbd>S</kbd>
                    <span>{isHindi ? 'सेव' : 'Save'}</span>
                  </div>
                  <div className="shortcut-item">
                    <kbd>Ctrl</kbd> + <kbd>P</kbd>
                    <span>{isHindi ? 'प्रिंट' : 'Print'}</span>
                  </div>
                  <div className="shortcut-item">
                    <kbd>Alt</kbd> + <kbd>F4</kbd>
                    <span>{isHindi ? 'बंद करें' : 'Close'}</span>
                  </div>
                  <div className="shortcut-item">
                    <kbd>Win</kbd> + <kbd>E</kbd>
                    <span>{isHindi ? 'फाइल एक्सप्लोरर' : 'File Explorer'}</span>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">🖥️</div>
                <h3>{isHindi ? 'कंप्यूटर पीढ़ियां' : 'Computer Generations'}</h3>
                <div className="generations-timeline">
                  <div className="gen-item">
                    <div className="gen-badge">1st</div>
                    <div className="gen-info">
                      <span className="gen-tech">Vacuum Tubes</span>
                      <span className="gen-year">1940-1956</span>
                    </div>
                  </div>
                  <div className="gen-item">
                    <div className="gen-badge">2nd</div>
                    <div className="gen-info">
                      <span className="gen-tech">Transistors</span>
                      <span className="gen-year">1956-1963</span>
                    </div>
                  </div>
                  <div className="gen-item">
                    <div className="gen-badge">3rd</div>
                    <div className="gen-info">
                      <span className="gen-tech">IC (Integrated Circuits)</span>
                      <span className="gen-year">1964-1971</span>
                    </div>
                  </div>
                  <div className="gen-item">
                    <div className="gen-badge">4th</div>
                    <div className="gen-info">
                      <span className="gen-tech">Microprocessors (VLSI)</span>
                      <span className="gen-year">1971-Present</span>
                    </div>
                  </div>
                  <div className="gen-item">
                    <div className="gen-badge">5th</div>
                    <div className="gen-info">
                      <span className="gen-tech">AI & Quantum</span>
                      <span className="gen-year">Present-Future</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-icon">📂</div>
                <h3>{isHindi ? 'फाइल एक्सटेंशन' : 'File Extensions'}</h3>
                <div className="extensions-list">
                  <div className="ext-item">
                    <span className="ext-name">.docx</span>
                    <span className="ext-app">MS Word</span>
                  </div>
                  <div className="ext-item">
                    <span className="ext-name">.xlsx</span>
                    <span className="ext-app">MS Excel</span>
                  </div>
                  <div className="ext-item">
                    <span className="ext-name">.pptx</span>
                    <span className="ext-app">PowerPoint</span>
                  </div>
                  <div className="ext-item">
                    <span className="ext-name">.pdf</span>
                    <span className="ext-app">PDF Document</span>
                  </div>
                  <div className="ext-item">
                    <span className="ext-name">.jpg/.png</span>
                    <span className="ext-app">Images</span>
                  </div>
                  <div className="ext-item">
                    <span className="ext-name">.mp3/.mp4</span>
                    <span className="ext-app">Audio/Video</span>
                  </div>
                </div>
              </div>

              <div className="resource-card full-width">
                <div className="resource-icon">💡</div>
                <h3>{isHindi ? 'महत्वपूर्ण फुल फॉर्म' : 'Important Full Forms'}</h3>
                <div className="fullforms-grid">
                  <div className="ff-item"><strong>CPU</strong> - Central Processing Unit</div>
                  <div className="ff-item"><strong>RAM</strong> - Random Access Memory</div>
                  <div className="ff-item"><strong>ROM</strong> - Read Only Memory</div>
                  <div className="ff-item"><strong>USB</strong> - Universal Serial Bus</div>
                  <div className="ff-item"><strong>URL</strong> - Uniform Resource Locator</div>
                  <div className="ff-item"><strong>WWW</strong> - World Wide Web</div>
                  <div className="ff-item"><strong>HTTP</strong> - HyperText Transfer Protocol</div>
                  <div className="ff-item"><strong>HTML</strong> - HyperText Markup Language</div>
                  <div className="ff-item"><strong>SSD</strong> - Solid State Drive</div>
                  <div className="ff-item"><strong>HDD</strong> - Hard Disk Drive</div>
                  <div className="ff-item"><strong>BIOS</strong> - Basic Input Output System</div>
                  <div className="ff-item"><strong>GUI</strong> - Graphical User Interface</div>
                  <div className="ff-item"><strong>LAN</strong> - Local Area Network</div>
                  <div className="ff-item"><strong>WAN</strong> - Wide Area Network</div>
                  <div className="ff-item"><strong>WIFI</strong> - Wireless Fidelity</div>
                  <div className="ff-item"><strong>PDF</strong> - Portable Document Format</div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <TopicLayout
      titleEn="Computer Knowledge"
      titleHi="कंप्यूटर ज्ञान"
      descriptionEn="Learn computer fundamentals, MS Office, Internet, and digital literacy"
      descriptionHi="कंप्यूटर की मूल बातें, MS Office, इंटरनेट और डिजिटल साक्षरता सीखें"
      icon="💻"
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      progress={progress}
    >
      {renderContent()}
    </TopicLayout>
  );
}
