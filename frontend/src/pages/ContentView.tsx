import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { contentApi, Content } from '../services/api';
import './ContentView.css';

const ContentView = () => {
  const { contentId } = useParams<{ contentId: string }>();
  const [content, setContent] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      if (!contentId) return;
      
      try {
        const response = await contentApi.getById(contentId);
        setContent(response.data);
      } catch (err) {
        setError('Failed to load content. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [contentId]);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading content...</p>
        </div>
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="container">
        <div className="error-message">{error || 'Content not found'}</div>
        <Link to="/content" className="btn btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>
          Back to Content List
        </Link>
      </div>
    );
  }

  return (
    <div className="content-view-page">
      <div className="container">
        <div className="content-header">
          <Link to="/content" className="back-link">
            ← Back to Study Material
          </Link>
          <div className="content-meta">
            <span className="badge badge-primary">{content.category}</span>
            <div className="exam-tags">
              {content.exam_tags.map((tag) => (
                <span key={tag} className="exam-tag">{tag.toUpperCase()}</span>
              ))}
            </div>
          </div>
          <h1>{content.title}</h1>
        </div>

        <div className="content-body card">
          <ReactMarkdown>{content.content || ''}</ReactMarkdown>
        </div>

        <div className="content-footer">
          <Link to="/content" className="btn btn-secondary">
            ← More Study Material
          </Link>
          <Link to="/exams" className="btn btn-primary">
            Take a Mock Test →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentView;
