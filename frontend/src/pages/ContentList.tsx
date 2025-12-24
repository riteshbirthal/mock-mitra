import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { contentApi, Content } from '../services/api';
import './ContentList.css';

const ContentList = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contentsRes, categoriesRes] = await Promise.all([
          contentApi.getAll(),
          contentApi.getCategories()
        ]);
        setContents(contentsRes.data.contents);
        setCategories(categoriesRes.data.categories);
      } catch (err) {
        setError('Failed to load content. Please check if the backend is running.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredContents = selectedCategory === 'all'
    ? contents
    : contents.filter(c => c.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      'Polity': '🏛️',
      'Mathematics': '📐',
      'Banking': '🏦',
      'Reasoning': '🧩',
      'History': '📜',
      'English': '📝',
      'Geography': '🌍',
      'Science': '🔬',
    };
    return icons[category] || '📚';
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading study materials...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="content-list-page">
      <div className="container">
        <div className="page-header">
          <h1>Study Material</h1>
          <p>Comprehensive notes and guides to help you prepare for your exams</p>
        </div>

        <div className="category-filters">
          <button
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {getCategoryIcon(category)} {category}
            </button>
          ))}
        </div>

        <div className="content-grid">
          {filteredContents.map((content) => (
            <Link 
              key={content._id} 
              to={`/content/${content._id}`}
              className="content-card card"
            >
              <div className="content-icon">{getCategoryIcon(content.category)}</div>
              <div className="content-info">
                <h3>{content.title}</h3>
                <span className="content-category badge badge-primary">
                  {content.category}
                </span>
                <div className="content-tags">
                  {content.exam_tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="exam-tag">{tag.toUpperCase()}</span>
                  ))}
                  {content.exam_tags.length > 3 && (
                    <span className="exam-tag">+{content.exam_tags.length - 3}</span>
                  )}
                </div>
              </div>
              <span className="read-more">Read →</span>
            </Link>
          ))}
        </div>

        {filteredContents.length === 0 && (
          <div className="no-content">
            <p>No content found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentList;
