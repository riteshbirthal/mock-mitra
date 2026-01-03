import { ReactNode } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './TopicLayout.css';

interface Tab {
  id: string;
  labelEn: string;
  labelHi: string;
  icon: string;
}

interface TopicLayoutProps {
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi: string;
  icon: string;
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  children: ReactNode;
  progress?: number;
}

export default function TopicLayout({
  titleEn,
  titleHi,
  descriptionEn,
  descriptionHi,
  icon,
  tabs,
  activeTab,
  onTabChange,
  children,
  progress = 0
}: TopicLayoutProps) {
  const { isHindi } = useLanguage();

  return (
    <div className="topic-layout">
      <div className="container">
        <div className="topic-header">
          <div className="topic-header-content">
            <div className="topic-icon">{icon}</div>
            <div className="topic-info">
              <h1 className="topic-title">{isHindi ? titleHi : titleEn}</h1>
              <p className="topic-description">{isHindi ? descriptionHi : descriptionEn}</p>
            </div>
          </div>
          {progress > 0 && (
            <div className="topic-progress">
              <div className="progress-label">
                <span>{isHindi ? 'प्रगति' : 'Progress'}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          )}
        </div>

        <div className="topic-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`topic-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{isHindi ? tab.labelHi : tab.labelEn}</span>
            </button>
          ))}
        </div>

        <div className="topic-content">
          {children}
        </div>
      </div>
    </div>
  );
}
