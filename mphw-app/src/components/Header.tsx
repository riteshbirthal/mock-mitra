import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';
import './Header.css';

const Header = () => {
  const { language, setLanguage, t, isHindi } = useLanguage();
  const { progress } = useProgress();
  const { user, userProfile, loading, logout, linkGoogleAccount } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup'>('login');

  const navItems = [
    { path: '/', label: 'nav.home', icon: '🏠' },
    { path: '/syllabus', label: 'nav.syllabus', icon: '📚' },
    { path: '/practice', label: 'nav.practice', icon: '✍️' },
    { path: '/mock-test', label: 'nav.mockTest', icon: '📝' },
    { path: '/progress', label: 'nav.progress', icon: '📊' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const openLogin = () => {
    setAuthModalMode('login');
    setShowAuthModal(true);
  };

  const openSignup = () => {
    setAuthModalMode('signup');
    setShowAuthModal(true);
  };

  const handleLogout = async () => {
    await logout();
    setShowUserMenu(false);
  };

  const handleLinkGoogle = async () => {
    await linkGoogleAccount();
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <span className="logo-icon">🏥</span>
              <span className="logo-text">
                MPHW <span className="logo-prep">Prep</span>
              </span>
            </Link>

            <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{t(item.label)}</span>
                </Link>
              ))}
            </nav>

            <div className="header-actions">
              {/* Points Badge (for logged in users) */}
              {userProfile && (
                <div className="points-badge" title={isHindi ? 'कुल अंक' : 'Total Points'}>
                  <span className="points-icon">⭐</span>
                  <span className="points-count">{userProfile.totalPoints}</span>
                </div>
              )}

              {/* Streak Badge */}
              {progress.overallStats.streak > 0 && (
                <div className="streak-badge" title={`${progress.overallStats.streak} day streak`}>
                  <span className="streak-icon">🔥</span>
                  <span className="streak-count">{progress.overallStats.streak}</span>
                </div>
              )}

              {/* Language Toggle */}
              <div className="language-toggle">
                <button
                  className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                  onClick={() => setLanguage('en')}
                  aria-label="English"
                >
                  EN
                </button>
                <button
                  className={`lang-btn ${language === 'hi' ? 'active' : ''}`}
                  onClick={() => setLanguage('hi')}
                  aria-label="Hindi"
                >
                  हिं
                </button>
              </div>

              {/* User Profile / Login */}
              {loading ? (
                <div className="auth-loading">
                  <div className="mini-spinner"></div>
                </div>
              ) : user ? (
                <div className="user-menu-wrapper">
                  <button 
                    className="user-avatar-btn"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    aria-label="User menu"
                  >
                    {user.photoURL ? (
                      <img 
                        src={user.photoURL} 
                        alt={user.displayName || 'User'} 
                        className="user-avatar"
                      />
                    ) : (
                      <span className="user-avatar-placeholder">
                        {user.displayName?.charAt(0) || user.email?.charAt(0) || '?'}
                      </span>
                    )}
                    {userProfile && userProfile.level > 1 && (
                      <span className="user-level">Lv.{userProfile.level}</span>
                    )}
                    {!user.emailVerified && userProfile?.authProvider === 'email' && (
                      <span className="unverified-badge" title={isHindi ? 'ईमेल सत्यापित नहीं' : 'Email not verified'}>!</span>
                    )}
                  </button>

                  {showUserMenu && (
                    <>
                      <div 
                        className="user-menu-overlay"
                        onClick={() => setShowUserMenu(false)}
                      />
                      <div className="user-menu">
                        <div className="user-menu-header">
                          {user.photoURL ? (
                            <img 
                              src={user.photoURL} 
                              alt={user.displayName || 'User'} 
                              className="menu-avatar"
                            />
                          ) : (
                            <span className="menu-avatar-placeholder">
                              {user.displayName?.charAt(0) || user.email?.charAt(0) || '?'}
                            </span>
                          )}
                          <div className="menu-user-info">
                            <span className="menu-user-name">{user.displayName || userProfile?.username}</span>
                            <span className="menu-user-email">{user.email}</span>
                            {userProfile?.visibleUserId && (
                              <span className="menu-user-id">ID: {userProfile.visibleUserId}</span>
                            )}
                          </div>
                        </div>

                        {/* Email Verification Warning */}
                        {!user.emailVerified && userProfile?.authProvider !== 'google' && (
                          <div className="verification-warning">
                            <span>⚠️</span>
                            <span>{isHindi ? 'ईमेल सत्यापित नहीं है' : 'Email not verified'}</span>
                          </div>
                        )}

                        {userProfile && (
                          <div className="user-stats">
                            <div className="user-stat">
                              <span className="stat-icon">⭐</span>
                              <span className="stat-value">{userProfile.totalPoints}</span>
                              <span className="stat-label">{isHindi ? 'अंक' : 'Points'}</span>
                            </div>
                            <div className="user-stat">
                              <span className="stat-icon">📊</span>
                              <span className="stat-value">{userProfile.level}</span>
                              <span className="stat-label">{isHindi ? 'स्तर' : 'Level'}</span>
                            </div>
                            <div className="user-stat">
                              <span className="stat-icon">🏆</span>
                              <span className="stat-value">{userProfile.badges.length}</span>
                              <span className="stat-label">{isHindi ? 'बैज' : 'Badges'}</span>
                            </div>
                          </div>
                        )}

                        <div className="user-menu-items">
                          <Link 
                            to="/progress" 
                            className="menu-item"
                            onClick={() => setShowUserMenu(false)}
                          >
                            <span className="menu-icon">📊</span>
                            {isHindi ? 'मेरी प्रगति' : 'My Progress'}
                          </Link>
                          <Link 
                            to="/rewards" 
                            className="menu-item"
                            onClick={() => setShowUserMenu(false)}
                          >
                            <span className="menu-icon">🎁</span>
                            {isHindi ? 'रिवार्ड्स' : 'Rewards'}
                          </Link>
                          
                          {/* Link Google Account (if not linked) */}
                          {userProfile && !userProfile.googleLinked && (
                            <button 
                              className="menu-item link-google"
                              onClick={handleLinkGoogle}
                            >
                              <span className="menu-icon">
                                <svg viewBox="0 0 24 24" width="16" height="16">
                                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                              </span>
                              {isHindi ? 'Google जोड़ें' : 'Link Google'}
                            </button>
                          )}

                          {userProfile?.googleLinked && (
                            <div className="menu-item linked-badge">
                              <span className="menu-icon">✓</span>
                              {isHindi ? 'Google जुड़ा है' : 'Google Linked'}
                            </div>
                          )}

                          <button 
                            className="menu-item logout"
                            onClick={handleLogout}
                          >
                            <span className="menu-icon">🚪</span>
                            {isHindi ? 'लॉग आउट' : 'Logout'}
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="auth-buttons">
                  <button 
                    className="login-btn"
                    onClick={openLogin}
                  >
                    {isHindi ? 'लॉगिन' : 'Login'}
                  </button>
                  <button 
                    className="signup-btn"
                    onClick={openSignup}
                  >
                    {isHindi ? 'साइन अप' : 'Sign Up'}
                  </button>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button 
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div 
            className="mobile-overlay" 
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        initialMode={authModalMode}
      />
    </>
  );
};

export default Header;
