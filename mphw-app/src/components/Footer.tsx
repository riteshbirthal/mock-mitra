import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/syllabus', label: 'nav.syllabus' },
    { path: '/practice', label: 'nav.practice' },
    { path: '/mock-test', label: 'nav.mockTest' },
    { path: '/progress', label: 'nav.progress' },
  ];

  const subjects = [
    { path: '/topics/anatomy', label: 'topic.anatomy' },
    { path: '/topics/physiology', label: 'topic.physiology' },
    { path: '/topics/public-health', label: 'topic.publicHealth' },
    { path: '/topics/first-aid', label: 'topic.firstAid' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon">🏥</span>
              <span className="footer-logo-text">MPHW Prep</span>
            </Link>
            <p className="footer-tagline">{t('footer.tagline')}</p>
            <div className="footer-stats">
              <div className="footer-stat">
                <span className="stat-value">20,000+</span>
                <span className="stat-label">{t('stats.questions')}</span>
              </div>
              <div className="footer-stat">
                <span className="stat-value">20</span>
                <span className="stat-label">{t('stats.topics')}</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path}>{t(link.label)}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Popular Subjects</h4>
              <ul>
                {subjects.map(link => (
                  <li key={link.path}>
                    <Link to={link.path}>{t(link.label)}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Exam Info</h4>
              <ul>
                <li>HSSC MPHW</li>
                <li>Haryana Health Dept</li>
                <li>Group-32</li>
                <li>100 Questions / 90 Min</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} MPHW Prep. {t('footer.rights')}.
          </p>
          <p className="made-with">
            {t('footer.madeWith')} <span className="heart">❤️</span> {t('footer.forStudents')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
