import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MPHWArticles.css';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  icon: string;
  date: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: 'mphw-exam-pattern',
    title: 'HSSC MPHW Exam Pattern & Syllabus 2024',
    excerpt: 'Complete guide to understanding the exam structure, marking scheme, and detailed syllabus for HSSC MPHW examination.',
    category: 'Exam Guide',
    readTime: 8,
    icon: '📋',
    date: '2024-12-15',
    featured: true,
  },
  {
    id: 'reasoning-tips',
    title: 'Top 10 Tips to Master Reasoning Section',
    excerpt: 'Expert strategies and shortcuts to solve reasoning questions quickly and accurately in competitive exams.',
    category: 'Tips & Tricks',
    readTime: 6,
    icon: '🧩',
    date: '2024-12-10',
    featured: true,
  },
  {
    id: 'time-management',
    title: 'Time Management Strategies for MPHW Exam',
    excerpt: 'Learn how to allocate time effectively across different sections to maximize your score.',
    category: 'Strategy',
    readTime: 5,
    icon: '⏱️',
    date: '2024-12-08',
  },
  {
    id: 'math-shortcuts',
    title: 'Mathematics Shortcuts for Quick Calculations',
    excerpt: 'Essential mathematical tricks and formulas that can save precious time during the exam.',
    category: 'Tips & Tricks',
    readTime: 7,
    icon: '📐',
    date: '2024-12-05',
  },
  {
    id: 'current-affairs-strategy',
    title: 'How to Prepare Current Affairs for MPHW',
    excerpt: 'A structured approach to covering current affairs and general awareness topics effectively.',
    category: 'Strategy',
    readTime: 5,
    icon: '🌍',
    date: '2024-12-01',
  },
  {
    id: 'health-topics-guide',
    title: 'Important Health Topics for MPHW Exam',
    excerpt: 'Comprehensive coverage of health and medical topics that frequently appear in MPHW examinations.',
    category: 'Subject Guide',
    readTime: 10,
    icon: '🏥',
    date: '2024-11-28',
  },
  {
    id: 'computer-basics',
    title: 'Computer Awareness Complete Guide',
    excerpt: 'Everything you need to know about computer fundamentals, MS Office, and networking for MPHW.',
    category: 'Subject Guide',
    readTime: 8,
    icon: '💻',
    date: '2024-11-25',
  },
  {
    id: 'last-minute-tips',
    title: 'Last Minute Preparation Tips',
    excerpt: 'What to do in the final days before the exam to maximize your preparation impact.',
    category: 'Strategy',
    readTime: 4,
    icon: '🎯',
    date: '2024-11-20',
  },
  {
    id: 'previous-year-analysis',
    title: 'Previous Year Question Paper Analysis',
    excerpt: 'In-depth analysis of past MPHW exam papers to understand question patterns and important topics.',
    category: 'Exam Guide',
    readTime: 12,
    icon: '📊',
    date: '2024-11-15',
  },
  {
    id: 'haryana-gk',
    title: 'Haryana GK: Important Facts & Figures',
    excerpt: 'Key facts about Haryana state that are frequently asked in HSSC examinations.',
    category: 'Subject Guide',
    readTime: 9,
    icon: '🗺️',
    date: '2024-11-10',
  },
];

const categories = ['All', 'Exam Guide', 'Tips & Tricks', 'Strategy', 'Subject Guide'];

const MPHWArticles = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const featuredArticles = articles.filter(a => a.featured);
  
  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mphw-articles-page">
      {/* Hero */}
      <section className="articles-hero">
        <div className="container">
          <h1>
            <span className="hero-icon">📚</span>
            Study Articles & Guides
          </h1>
          <p>Expert tips, strategies, and comprehensive guides for MPHW preparation</p>
        </div>
      </section>

      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/mphw">MPHW Prep</Link>
          <span>/</span>
          <span>Articles</span>
        </nav>

        {/* Featured Articles */}
        <section className="featured-section">
          <h2 className="section-title">⭐ Featured Articles</h2>
          <div className="featured-grid">
            {featuredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/mphw/article/${article.id}`}
                className="featured-card"
              >
                <span className="featured-icon">{article.icon}</span>
                <div className="featured-content">
                  <span className="featured-category">{article.category}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="featured-meta">
                    <span>📖 {article.readTime} min read</span>
                    <span>📅 {new Date(article.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Articles */}
        <section className="all-articles-section">
          <h2 className="section-title">All Articles</h2>

          {/* Filters */}
          <div className="filters-bar">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="category-tabs">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Articles List */}
          <div className="articles-list">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/mphw/article/${article.id}`}
                className="article-card"
              >
                <span className="article-icon">{article.icon}</span>
                <div className="article-content">
                  <div className="article-header">
                    <span className="article-category">{article.category}</span>
                    <span className="article-date">
                      {new Date(article.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <span className="read-time">📖 {article.readTime} min read</span>
                </div>
                <span className="article-arrow">→</span>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="no-results">
              <p>No articles found matching your criteria</p>
            </div>
          )}
        </section>

        {/* Resources Section */}
        <section className="resources-section">
          <h2 className="section-title">📎 Quick Resources</h2>
          <div className="resources-grid">
            <a
              href="https://hssc.gov.in/Syllabus/GROUP-32_M.P.H.W.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
            >
              <span className="resource-icon">📄</span>
              <div>
                <h4>Official Syllabus PDF</h4>
                <p>Download from HSSC website</p>
              </div>
              <span className="external-icon">↗</span>
            </a>
            <Link to="/mphw/practice" className="resource-card">
              <span className="resource-icon">✍️</span>
              <div>
                <h4>Practice Tests</h4>
                <p>Topic-wise & full mock tests</p>
              </div>
              <span className="external-icon">→</span>
            </Link>
            <Link to="/mphw/topics/reasoning" className="resource-card">
              <span className="resource-icon">📖</span>
              <div>
                <h4>Study Material</h4>
                <p>Comprehensive topic notes</p>
              </div>
              <span className="external-icon">→</span>
            </Link>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="bottom-nav">
          <Link to="/mphw" className="btn btn-secondary">
            ← Back to MPHW Prep
          </Link>
          <Link to="/mphw/practice" className="btn btn-primary">
            Take Practice Test →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MPHWArticles;
