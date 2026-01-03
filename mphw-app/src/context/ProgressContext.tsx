import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from './AuthContext';

interface TopicProgress {
  completed: boolean;
  questionsAttempted: number;
  correctAnswers: number;
  lastAttempted: string;
  timeSpent: number;
}

interface ProgressState {
  topics: Record<string, TopicProgress>;
  overallStats: {
    totalQuestionsAttempted: number;
    totalCorrectAnswers: number;
    totalTimeSpent: number;
    streak: number;
    lastStudyDate: string;
    topicsCompleted: number;
  };
  achievements: string[];
  bookmarks: string[];
  rewards: {
    totalPoints: number;
    dailyGoalStreak: number;
    questionsToday: number;
    lastRewardDate: string;
  };
}

interface ProgressContextType {
  progress: ProgressState;
  updateTopicProgress: (topicId: string, data: Partial<TopicProgress>) => void;
  markTopicComplete: (topicId: string) => void;
  recordAnswer: (topicId: string, isCorrect: boolean, timeSpent: number) => void;
  addBookmark: (questionId: string) => void;
  removeBookmark: (questionId: string) => void;
  isBookmarked: (questionId: string) => boolean;
  getTopicProgress: (topicId: string) => TopicProgress | undefined;
  getOverallProgress: () => number;
  resetProgress: () => void;
  syncInProgress: boolean;
}

const initialProgress: ProgressState = {
  topics: {},
  overallStats: {
    totalQuestionsAttempted: 0,
    totalCorrectAnswers: 0,
    totalTimeSpent: 0,
    streak: 0,
    lastStudyDate: '',
    topicsCompleted: 0,
  },
  achievements: [],
  bookmarks: [],
  rewards: {
    totalPoints: 0,
    dailyGoalStreak: 0,
    questionsToday: 0,
    lastRewardDate: ''
  }
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const { user, updateUserPoints, addBadge } = useAuth();
  const [progress, setProgress] = useState<ProgressState>(() => {
    const saved = localStorage.getItem('mphw-progress');
    if (saved) {
      try {
        return { ...initialProgress, ...JSON.parse(saved) };
      } catch {
        return initialProgress;
      }
    }
    return initialProgress;
  });
  const [syncInProgress, setSyncInProgress] = useState(false);

  // Sync with Firestore when user is authenticated
  useEffect(() => {
    if (!user) return;

    const progressDocRef = doc(db, 'progress', user.uid);
    
    // Listen for real-time updates
    const unsubscribe = onSnapshot(progressDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const firestoreData = docSnap.data() as ProgressState;
        setProgress(prev => ({
          ...initialProgress,
          ...firestoreData,
          // Merge local progress if it has more data
          topics: { ...prev.topics, ...firestoreData.topics }
        }));
      }
    }, (error) => {
      console.error('Firestore sync error:', error);
    });

    return () => unsubscribe();
  }, [user]);

  // Load from Firestore on user login
  useEffect(() => {
    const loadFromFirestore = async () => {
      if (!user) return;

      try {
        const progressDocRef = doc(db, 'progress', user.uid);
        const docSnap = await getDoc(progressDocRef);
        
        if (docSnap.exists()) {
          const firestoreData = docSnap.data() as ProgressState;
          // Merge with local progress (prefer Firestore data)
          setProgress(prev => {
            const merged = {
              ...initialProgress,
              ...firestoreData,
              topics: { ...prev.topics, ...firestoreData.topics }
            };
            return merged;
          });
        } else {
          // First time user - upload local progress to Firestore
          await setDoc(progressDocRef, progress);
        }
      } catch (error) {
        console.error('Error loading from Firestore:', error);
      }
    };

    loadFromFirestore();
  }, [user]);

  // Save to localStorage always (offline support)
  useEffect(() => {
    localStorage.setItem('mphw-progress', JSON.stringify(progress));
  }, [progress]);

  // Save to Firestore when progress changes (debounced)
  const saveToFirestore = useCallback(async (newProgress: ProgressState) => {
    if (!user) return;
    
    setSyncInProgress(true);
    try {
      const progressDocRef = doc(db, 'progress', user.uid);
      await setDoc(progressDocRef, newProgress);
    } catch (error) {
      console.error('Error saving to Firestore:', error);
    } finally {
      setSyncInProgress(false);
    }
  }, [user]);

  // Update streak logic
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const lastDate = progress.overallStats.lastStudyDate;
    
    if (lastDate) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      
      if (lastDate !== today && lastDate !== yesterdayStr) {
        setProgress(prev => ({
          ...prev,
          overallStats: {
            ...prev.overallStats,
            streak: 0
          },
          rewards: {
            ...prev.rewards,
            questionsToday: 0
          }
        }));
      }
    }
  }, [progress.overallStats.lastStudyDate]);

  const updateTopicProgress = (topicId: string, data: Partial<TopicProgress>) => {
    setProgress(prev => {
      const newProgress = {
        ...prev,
        topics: {
          ...prev.topics,
          [topicId]: {
            ...(prev.topics[topicId] || {
              completed: false,
              questionsAttempted: 0,
              correctAnswers: 0,
              lastAttempted: '',
              timeSpent: 0,
            }),
            ...data,
            lastAttempted: new Date().toISOString(),
          }
        }
      };
      saveToFirestore(newProgress);
      return newProgress;
    });
  };

  const markTopicComplete = (topicId: string) => {
    setProgress(prev => {
      const wasComplete = prev.topics[topicId]?.completed;
      const pointsEarned = wasComplete ? 0 : 50; // 50 points for completing a topic
      
      const newProgress = {
        ...prev,
        topics: {
          ...prev.topics,
          [topicId]: {
            ...(prev.topics[topicId] || {
              questionsAttempted: 0,
              correctAnswers: 0,
              lastAttempted: '',
              timeSpent: 0,
            }),
            completed: true,
            lastAttempted: new Date().toISOString(),
          }
        },
        overallStats: {
          ...prev.overallStats,
          topicsCompleted: wasComplete 
            ? prev.overallStats.topicsCompleted 
            : prev.overallStats.topicsCompleted + 1,
        },
        rewards: {
          ...prev.rewards,
          totalPoints: prev.rewards.totalPoints + pointsEarned
        }
      };
      
      // Update user points in Firebase
      if (pointsEarned > 0 && user) {
        updateUserPoints(pointsEarned);
      }
      
      saveToFirestore(newProgress);
      return newProgress;
    });
  };

  const recordAnswer = (topicId: string, isCorrect: boolean, timeSpent: number) => {
    const today = new Date().toISOString().split('T')[0];
    
    setProgress(prev => {
      const topicProgress = prev.topics[topicId] || {
        completed: false,
        questionsAttempted: 0,
        correctAnswers: 0,
        lastAttempted: '',
        timeSpent: 0,
      };

      const lastDate = prev.overallStats.lastStudyDate;
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      
      let newStreak = prev.overallStats.streak;
      if (lastDate !== today) {
        if (lastDate === yesterdayStr || lastDate === '') {
          newStreak = prev.overallStats.streak + 1;
        } else {
          newStreak = 1;
        }
      }

      // Calculate points
      let pointsEarned = isCorrect ? 10 : 2; // 10 for correct, 2 for attempt
      const isNewDay = prev.rewards.lastRewardDate !== today;
      const questionsToday = isNewDay ? 1 : prev.rewards.questionsToday + 1;
      
      // Daily goal bonus (10 questions per day)
      if (questionsToday === 10) {
        pointsEarned += 50; // Bonus for hitting daily goal
      }

      const newAchievements = [...prev.achievements];
      
      // Check for achievements
      const totalQuestions = prev.overallStats.totalQuestionsAttempted + 1;
      if (totalQuestions === 100 && !newAchievements.includes('century')) {
        newAchievements.push('century');
        pointsEarned += 100;
        if (user) addBadge('century');
      }
      if (totalQuestions === 500 && !newAchievements.includes('500club')) {
        newAchievements.push('500club');
        pointsEarned += 250;
        if (user) addBadge('500club');
      }
      if (totalQuestions === 1000 && !newAchievements.includes('1000club')) {
        newAchievements.push('1000club');
        pointsEarned += 500;
        if (user) addBadge('1000club');
      }
      if (newStreak === 7 && !newAchievements.includes('weekStreak')) {
        newAchievements.push('weekStreak');
        pointsEarned += 200;
        if (user) addBadge('weekStreak');
      }
      if (newStreak === 30 && !newAchievements.includes('monthStreak')) {
        newAchievements.push('monthStreak');
        pointsEarned += 500;
        if (user) addBadge('monthStreak');
      }

      // Perfect accuracy badge
      const totalCorrect = prev.overallStats.totalCorrectAnswers + (isCorrect ? 1 : 0);
      const accuracy = totalCorrect / totalQuestions;
      if (totalQuestions >= 50 && accuracy >= 0.9 && !newAchievements.includes('sharpshooter')) {
        newAchievements.push('sharpshooter');
        pointsEarned += 200;
        if (user) addBadge('sharpshooter');
      }

      const newProgress = {
        ...prev,
        topics: {
          ...prev.topics,
          [topicId]: {
            ...topicProgress,
            questionsAttempted: topicProgress.questionsAttempted + 1,
            correctAnswers: topicProgress.correctAnswers + (isCorrect ? 1 : 0),
            timeSpent: topicProgress.timeSpent + timeSpent,
            lastAttempted: new Date().toISOString(),
          }
        },
        overallStats: {
          ...prev.overallStats,
          totalQuestionsAttempted: prev.overallStats.totalQuestionsAttempted + 1,
          totalCorrectAnswers: prev.overallStats.totalCorrectAnswers + (isCorrect ? 1 : 0),
          totalTimeSpent: prev.overallStats.totalTimeSpent + timeSpent,
          streak: newStreak,
          lastStudyDate: today,
        },
        achievements: newAchievements,
        rewards: {
          ...prev.rewards,
          totalPoints: prev.rewards.totalPoints + pointsEarned,
          questionsToday,
          lastRewardDate: today,
          dailyGoalStreak: questionsToday >= 10 
            ? (isNewDay ? prev.rewards.dailyGoalStreak + 1 : prev.rewards.dailyGoalStreak)
            : prev.rewards.dailyGoalStreak
        }
      };

      // Update user points in Firebase
      if (user && pointsEarned > 0) {
        updateUserPoints(pointsEarned);
      }

      saveToFirestore(newProgress);
      return newProgress;
    });
  };

  const addBookmark = (questionId: string) => {
    setProgress(prev => {
      const newProgress = {
        ...prev,
        bookmarks: [...new Set([...prev.bookmarks, questionId])]
      };
      saveToFirestore(newProgress);
      return newProgress;
    });
  };

  const removeBookmark = (questionId: string) => {
    setProgress(prev => {
      const newProgress = {
        ...prev,
        bookmarks: prev.bookmarks.filter(id => id !== questionId)
      };
      saveToFirestore(newProgress);
      return newProgress;
    });
  };

  const isBookmarked = (questionId: string) => {
    return progress.bookmarks.includes(questionId);
  };

  const getTopicProgress = (topicId: string) => {
    return progress.topics[topicId];
  };

  const getOverallProgress = () => {
    const totalTopics = 20;
    return Math.round((progress.overallStats.topicsCompleted / totalTopics) * 100);
  };

  const resetProgress = () => {
    setProgress(initialProgress);
    localStorage.removeItem('mphw-progress');
    if (user) {
      const progressDocRef = doc(db, 'progress', user.uid);
      setDoc(progressDocRef, initialProgress);
    }
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      updateTopicProgress,
      markTopicComplete,
      recordAnswer,
      addBookmark,
      removeBookmark,
      isBookmarked,
      getTopicProgress,
      getOverallProgress,
      resetProgress,
      syncInProgress,
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
};
