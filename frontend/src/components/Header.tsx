import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <span className="logo-icon">📚</span>
          <span className="logo-text">Mock-Mitra</span>
        </Link>

        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/exams" 
            className={`nav-link ${isActive('/exams') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Mock Tests
          </Link>
          <Link 
            to="/subjects" 
            className={`nav-link ${location.pathname.startsWith('/subjects') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Subjects
          </Link>
          <Link 
            to="/content" 
            className={`nav-link ${isActive('/content') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Study Material
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
