import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import './Rewards.css';

const Rewards = () => {
  const { isHindi } = useLanguage();
  const { user, userProfile, signInWithGoogle } = useAuth();
  const { progress } = useProgress();

  const allBadges = [
    { 
      id: 'welcome', 
      icon: '👋', 
      name: { en: 'Welcome!', hi: 'स्वागत!' },
      desc: { en: 'Joined MPHW Prep', hi: 'MPHW Prep में शामिल हुए' },
      points: 10
    },
    { 
      id: 'century', 
      icon: '💯', 
      name: { en: 'Century Club', hi: 'शतक क्लब' },
      desc: { en: '100 questions attempted', hi: '100 प्रश्न हल किए' },
      points: 100
    },
    { 
      id: '500club', 
      icon: '🎖️', 
      name: { en: '500 Club', hi: '500 क्लब' },
      desc: { en: '500 questions attempted', hi: '500 प्रश्न हल किए' },
      points: 250
    },
    { 
      id: '1000club', 
      icon: '🏅', 
      name: { en: '1000 Club', hi: '1000 क्लब' },
      desc: { en: '1000 questions attempted', hi: '1000 प्रश्न हल किए' },
      points: 500
    },
    { 
      id: 'weekStreak', 
      icon: '🔥', 
      name: { en: 'Week Warrior', hi: 'सप्ताह योद्धा' },
      desc: { en: '7 day streak', hi: '7 दिन की स्ट्रीक' },
      points: 200
    },
    { 
      id: 'monthStreak', 
      icon: '👑', 
      name: { en: 'Month Master', hi: 'माह मास्टर' },
      desc: { en: '30 day streak', hi: '30 दिन की स्ट्रीक' },
      points: 500
    },
    { 
      id: 'sharpshooter', 
      icon: '🎯', 
      name: { en: 'Sharpshooter', hi: 'निशानेबाज' },
      desc: { en: '90%+ accuracy (50+ questions)', hi: '90%+ सटीकता (50+ प्रश्न)' },
      points: 200
    },
    { 
      id: 'earlyBird', 
      icon: '🌅', 
      name: { en: 'Early Bird', hi: 'अर्ली बर्ड' },
      desc: { en: 'Study before 6 AM', hi: 'सुबह 6 बजे से पहले पढ़ाई' },
      points: 50
    },
    { 
      id: 'nightOwl', 
      icon: '🦉', 
      name: { en: 'Night Owl', hi: 'रात का उल्लू' },
      desc: { en: 'Study after midnight', hi: 'आधी रात के बाद पढ़ाई' },
      points: 50
    },
    { 
      id: 'anatomyMaster', 
      icon: '🦴', 
      name: { en: 'Anatomy Master', hi: 'एनाटॉमी मास्टर' },
      desc: { en: 'Complete all Anatomy topics', hi: 'सभी एनाटॉमी टॉपिक्स पूरे करें' },
      points: 150
    },
    { 
      id: 'healthHero', 
      icon: '🏥', 
      name: { en: 'Health Hero', hi: 'स्वास्थ्य हीरो' },
      desc: { en: 'Complete Public Health', hi: 'सार्वजनिक स्वास्थ्य पूरा करें' },
      points: 150
    },
    { 
      id: 'computerWhiz', 
      icon: '💻', 
      name: { en: 'Computer Whiz', hi: 'कंप्यूटर विज़' },
      desc: { en: 'Complete Computer Knowledge', hi: 'कंप्यूटर ज्ञान पूरा करें' },
      points: 100
    },
  ];

  const earnedBadges = userProfile?.badges || progress.achievements;
  const totalPoints = userProfile?.totalPoints || progress.rewards.totalPoints;
  const level = userProfile?.level || Math.floor(totalPoints / 500) + 1;

  const levelProgress = (totalPoints % 500) / 500 * 100;
  const pointsToNextLevel = 500 - (totalPoints % 500);

  const dailyRewards = [
    { day: 1, points: 10, icon: '📅' },
    { day: 2, points: 15, icon: '📅' },
    { day: 3, points: 20, icon: '📅' },
    { day: 4, points: 25, icon: '📅' },
    { day: 5, points: 30, icon: '📅' },
    { day: 6, points: 40, icon: '📅' },
    { day: 7, points: 100, icon: '🎁' },
  ];

  if (!user) {
    return (
      <div className="rewards-page">
        <div className="container">
          <div className="login-prompt">
            <span className="prompt-icon">🎁</span>
            <h2>{isHindi ? 'रिवार्ड्स अनलॉक करें!' : 'Unlock Rewards!'}</h2>
            <p>
              {isHindi 
                ? 'अंक कमाने, बैज प्राप्त करने और अपनी प्रगति को सिंक करने के लिए लॉगिन करें' 
                : 'Login to earn points, unlock badges, and sync your progress across devices'}
            </p>
            <button className="btn btn-primary btn-lg" onClick={() => signInWithGoogle()}>
              <svg viewBox="0 0 24 24" width="20" height="20" className="google-icon">
                <path fill="#fff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#fff" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#fff" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#fff" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {isHindi ? 'Google से लॉगिन करें' : 'Login with Google'}
            </button>
            <Link to="/practice" className="skip-link">
              {isHindi ? 'बाद में • अभी अभ्यास करें' : 'Skip for now • Practice instead'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rewards-page">
      <div className="container">
        {/* Header */}
        <div className="rewards-header">
          <h1>{isHindi ? '🎁 रिवार्ड्स और बैज' : '🎁 Rewards & Badges'}</h1>
          <p>
            {isHindi 
              ? 'अंक कमाएं, बैज अनलॉक करें और लेवल अप करें!' 
              : 'Earn points, unlock badges, and level up!'}
          </p>
        </div>

        {/* User Level Card */}
        <div className="level-card">
          <div className="level-info">
            <div className="level-badge">
              <span className="level-number">{level}</span>
              <span className="level-label">{isHindi ? 'स्तर' : 'Level'}</span>
            </div>
            <div className="level-details">
              <h2>{user.displayName}</h2>
              <div className="points-display">
                <span className="total-points">⭐ {totalPoints.toLocaleString()}</span>
                <span className="points-label">{isHindi ? 'कुल अंक' : 'Total Points'}</span>
              </div>
            </div>
          </div>

          <div className="level-progress">
            <div className="progress-header">
              <span>{isHindi ? 'अगला स्तर' : 'Next Level'}</span>
              <span>{pointsToNextLevel} {isHindi ? 'अंक शेष' : 'points to go'}</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-bar-fill"
                style={{ width: `${levelProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Points Breakdown */}
        <div className="points-breakdown">
          <h3>{isHindi ? '📊 अंक कैसे कमाएं' : '📊 How to Earn Points'}</h3>
          <div className="points-grid">
            <div className="point-item">
              <span className="point-icon">✅</span>
              <span className="point-action">{isHindi ? 'सही उत्तर' : 'Correct Answer'}</span>
              <span className="point-value">+10</span>
            </div>
            <div className="point-item">
              <span className="point-icon">📝</span>
              <span className="point-action">{isHindi ? 'प्रश्न का प्रयास' : 'Attempt Question'}</span>
              <span className="point-value">+2</span>
            </div>
            <div className="point-item">
              <span className="point-icon">📚</span>
              <span className="point-action">{isHindi ? 'टॉपिक पूरा करें' : 'Complete Topic'}</span>
              <span className="point-value">+50</span>
            </div>
            <div className="point-item">
              <span className="point-icon">🎯</span>
              <span className="point-action">{isHindi ? 'दैनिक लक्ष्य (10 प्रश्न)' : 'Daily Goal (10 Qs)'}</span>
              <span className="point-value">+50</span>
            </div>
          </div>
        </div>

        {/* Daily Streak Rewards */}
        <div className="streak-rewards">
          <h3>{isHindi ? '🔥 दैनिक स्ट्रीक रिवार्ड्स' : '🔥 Daily Streak Rewards'}</h3>
          <div className="streak-days">
            {dailyRewards.map((reward) => {
              const isEarned = progress.overallStats.streak >= reward.day;
              const isCurrent = progress.overallStats.streak === reward.day - 1;
              
              return (
                <div 
                  key={reward.day}
                  className={`streak-day ${isEarned ? 'earned' : ''} ${isCurrent ? 'current' : ''}`}
                >
                  <span className="day-icon">{reward.icon}</span>
                  <span className="day-number">{isHindi ? `दिन ${reward.day}` : `Day ${reward.day}`}</span>
                  <span className="day-points">+{reward.points}</span>
                  {isEarned && <span className="earned-check">✓</span>}
                </div>
              );
            })}
          </div>
          <p className="streak-info">
            {isHindi 
              ? `वर्तमान स्ट्रीक: ${progress.overallStats.streak} दिन 🔥` 
              : `Current Streak: ${progress.overallStats.streak} days 🔥`}
          </p>
        </div>

        {/* Badges */}
        <div className="badges-section">
          <h3>
            {isHindi ? '🏆 बैज' : '🏆 Badges'} 
            ({earnedBadges.length}/{allBadges.length})
          </h3>
          
          <div className="badges-grid">
            {allBadges.map(badge => {
              const isEarned = earnedBadges.includes(badge.id);
              
              return (
                <div 
                  key={badge.id}
                  className={`badge-card ${isEarned ? 'earned' : 'locked'}`}
                >
                  <span className="badge-icon">{badge.icon}</span>
                  <h4>{isHindi ? badge.name.hi : badge.name.en}</h4>
                  <p>{isHindi ? badge.desc.hi : badge.desc.en}</p>
                  <span className="badge-points">+{badge.points} ⭐</span>
                  {!isEarned && <span className="lock-overlay">🔒</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="quick-stats">
          <div className="stat-box">
            <span className="stat-icon">📝</span>
            <span className="stat-value">{progress.overallStats.totalQuestionsAttempted}</span>
            <span className="stat-label">{isHindi ? 'प्रश्न' : 'Questions'}</span>
          </div>
          <div className="stat-box">
            <span className="stat-icon">✅</span>
            <span className="stat-value">{progress.overallStats.totalCorrectAnswers}</span>
            <span className="stat-label">{isHindi ? 'सही' : 'Correct'}</span>
          </div>
          <div className="stat-box">
            <span className="stat-icon">📚</span>
            <span className="stat-value">{progress.overallStats.topicsCompleted}</span>
            <span className="stat-label">{isHindi ? 'टॉपिक्स' : 'Topics'}</span>
          </div>
          <div className="stat-box highlight">
            <span className="stat-icon">🔥</span>
            <span className="stat-value">{progress.overallStats.streak}</span>
            <span className="stat-label">{isHindi ? 'स्ट्रीक' : 'Streak'}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="rewards-cta">
          <Link to="/practice" className="btn btn-primary btn-lg">
            {isHindi ? 'अधिक अंक कमाएं' : 'Earn More Points'} →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
