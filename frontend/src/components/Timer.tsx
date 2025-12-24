import { useState, useEffect } from 'react';
import './Timer.css';

interface TimerProps {
  duration: number; // in minutes
  onTimeUp: () => void;
}

const Timer = ({ duration, onTimeUp }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isWarning = timeLeft <= 300; // 5 minutes warning
  const isDanger = timeLeft <= 60; // 1 minute danger

  return (
    <div className={`timer ${isWarning ? 'warning' : ''} ${isDanger ? 'danger' : ''}`}>
      <span className="timer-icon">⏱️</span>
      <span className="timer-value">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
};

export default Timer;
