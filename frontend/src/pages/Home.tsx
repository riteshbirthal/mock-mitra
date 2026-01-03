import { Link } from 'react-router-dom';
import './Home.css';

const features = [
  { icon: '📝', title: 'Mock Tests', desc: 'Practice with real exam patterns' },
  { icon: '📚', title: 'Study Material', desc: 'Comprehensive study content' },
  { icon: '⏱️', title: 'Timed Tests', desc: 'Simulate real exam conditions' },
  { icon: '📊', title: 'Performance Analysis', desc: 'Track your progress' },
];

const exams = [
  { icon: '📋', name: 'SSC', color: '#667eea', link: '/prep/ssc' },
  { icon: '🏦', name: 'Banking', color: '#48bb78', link: '/prep/banking' },
  { icon: '🚂', name: 'Railway', color: '#ed8936', link: '/prep/railway' },
  { icon: '🏛️', name: 'UPSC', color: '#e53e3e', link: '/prep/upsc' },
  { icon: '📜', name: 'State PSC', color: '#9f7aea', link: '/prep/state_psc' },
  { icon: '🎖️', name: 'Defence', color: '#38b2ac', link: '/prep/defence' },
  { icon: '🏥', name: 'HSSC MPHW', color: '#e91e63', link: '/prep/mphw' },
];

const subjects = [
  { icon: '🌍', name: 'General Knowledge', color: '#667eea', link: '/prep/ssc/topics/general-awareness' },
  { icon: '📐', name: 'Mathematics', color: '#48bb78', link: '/prep/ssc/topics/quantitative-aptitude' },
  { icon: '🧩', name: 'Reasoning', color: '#ed8936', link: '/prep/mphw/topics/reasoning' },
  { icon: '💻', name: 'Computer', color: '#38b2ac', link: '/mphw/computer-knowledge' },
  { icon: '🧬', name: 'Biology', color: '#e53e3e', link: '/prep/mphw/topics/anatomy' },
  { icon: '⚗️', name: 'Chemistry', color: '#dd6b20', link: '/subjects' },
  { icon: '⚡', name: 'Physics', color: '#3182ce', link: '/subjects' },
  { icon: '🏛️', name: 'Polity', color: '#805ad5', link: '/prep/upsc/topics/general-studies' },
  { icon: '📜', name: 'History', color: '#b7791f', link: '/prep/ssc/topics/general-awareness' },
  { icon: '🗺️', name: 'Geography', color: '#2f855a', link: '/prep/ssc/topics/general-awareness' },
  { icon: '💰', name: 'Economics', color: '#c53030', link: '/prep/banking/topics/general-awareness' },
  { icon: '📝', name: 'English', color: '#9f7aea', link: '/prep/ssc/topics/english-comprehension' },
];

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Your Path to <span className="gradient-text">Success</span> Starts Here
            </h1>
            <p className="hero-subtitle">
              Prepare for government exams with Mock-Mitra. Access high-quality mock tests, 
              study materials, and track your progress - all in one place.
            </p>
            <div className="hero-buttons">
              <Link to="/exams" className="btn btn-primary btn-lg">
                Start Mock Test
              </Link>
              <Link to="/content" className="btn btn-secondary btn-lg">
                Study Material
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-icon">🎯</div>
              <h3>10,000+</h3>
              <p>Practice Questions</p>
            </div>
            <div className="hero-card">
              <div className="hero-icon">👥</div>
              <h3>50,000+</h3>
              <p>Students Trust Us</p>
            </div>
            <div className="hero-card">
              <div className="hero-icon">🏆</div>
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Mock-Mitra?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exams Section */}
      <section className="exams-section">
        <div className="container">
          <h2 className="section-title">Prepare for Top Exams</h2>
          <div className="exams-grid">
            {exams.map((exam, index) => (
              <Link 
                key={index} 
                to={exam.link || '/exams'} 
                className="exam-item"
                style={{ '--accent-color': exam.color } as React.CSSProperties}
              >
                <span className="exam-icon">{exam.icon}</span>
                <span className="exam-name">{exam.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="subjects-section">
        <div className="container">
          <h2 className="section-title">Study by Subject</h2>
          <div className="subjects-home-grid">
            {subjects.map((subject, index) => (
              <Link 
                key={index} 
                to={subject.link} 
                className="subject-item"
                style={{ '--accent-color': subject.color } as React.CSSProperties}
              >
                <span className="subject-icon">{subject.icon}</span>
                <span className="subject-name">{subject.name}</span>
              </Link>
            ))}
          </div>
          <div className="view-all-link">
            <Link to="/subjects" className="btn btn-secondary">
              View All Subjects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Begin Your Preparation?</h2>
            <p>Join thousands of students who have achieved their dreams with Mock-Mitra</p>
            <Link to="/exams" className="btn btn-primary btn-lg">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
