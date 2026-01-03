import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  User,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
  linkWithPopup,
  GoogleAuthProvider,
  UserCredential
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp, query, collection, where, getDocs } from 'firebase/firestore';
import { auth, db, googleProvider } from '../config/firebase';

interface UserProfile {
  uid: string;
visibleUserId: string;
  username: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  createdAt: Date;
  lastLoginAt: Date;
  totalPoints: number;
  level: number;
  badges: string[];
  emailVerified: boolean;
  authProvider: 'google' | 'email' | 'both';
  googleLinked: boolean;
}

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  error: string | null;
  signInWithGoogle: () => Promise<UserCredential | null>;
  signInWithEmail: (email: string, password: string) => Promise<UserCredential | null>;
  signUpWithEmail: (email: string, password: string, username: string) => Promise<UserCredential | null>;
  linkGoogleAccount: () => Promise<boolean>;
  sendVerificationEmail: () => Promise<boolean>;
  logout: () => Promise<void>;
  updateUserPoints: (points: number) => Promise<void>;
  addBadge: (badgeId: string) => Promise<void>;
  updateUsername: (newUsername: string) => Promise<boolean>;
  checkUsernameAvailable: (username: string) => Promise<boolean>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Generate unique user ID (MPHW + random alphanumeric)
const generateUserId = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'MPHW';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        await fetchOrCreateUserProfile(currentUser);
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const fetchOrCreateUserProfile = async (currentUser: User) => {
    try {
      const userDocRef = doc(db, 'users', currentUser.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        // Update last login and email verified status
        await setDoc(userDocRef, {
          lastLoginAt: serverTimestamp(),
          emailVerified: currentUser.emailVerified
        }, { merge: true });

        const data = userDoc.data();
        setUserProfile({
          uid: currentUser.uid,
          visibleUserId: data.visibleUserId || generateUserId(),
          username: data.username || '',
          email: currentUser.email,
          displayName: currentUser.displayName || data.displayName,
          photoURL: currentUser.photoURL || data.photoURL,
          createdAt: data.createdAt?.toDate() || new Date(),
          lastLoginAt: new Date(),
          totalPoints: data.totalPoints || 0,
          level: data.level || 1,
          badges: data.badges || [],
          emailVerified: currentUser.emailVerified,
          authProvider: data.authProvider || 'email',
          googleLinked: data.googleLinked || false
        });
      } else {
        // Create new user profile
        const visibleUserId = generateUserId();
        const isGoogleProvider = currentUser.providerData.some(p => p.providerId === 'google.com');
        
        const newProfile = {
          uid: currentUser.uid,
          visibleUserId,
          username: currentUser.displayName?.toLowerCase().replace(/\s+/g, '_') || '',
          email: currentUser.email,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
          createdAt: serverTimestamp(),
          lastLoginAt: serverTimestamp(),
          totalPoints: 0,
          level: 1,
          badges: ['welcome'],
          emailVerified: currentUser.emailVerified,
          authProvider: isGoogleProvider ? 'google' : 'email',
          googleLinked: isGoogleProvider
        };

        await setDoc(userDocRef, newProfile);

        setUserProfile({
          uid: currentUser.uid,
          visibleUserId,
          username: currentUser.displayName?.toLowerCase().replace(/\s+/g, '_') || '',
          email: currentUser.email,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
          createdAt: new Date(),
          lastLoginAt: new Date(),
          totalPoints: 0,
          level: 1,
          badges: ['welcome'],
          emailVerified: currentUser.emailVerified,
          authProvider: isGoogleProvider ? 'google' : 'email',
          googleLinked: isGoogleProvider
        });
      }
    } catch (err) {
      console.error('Error fetching user profile:', err);
      // Set basic profile even if Firestore fails
      setUserProfile({
        uid: currentUser.uid,
        visibleUserId: generateUserId(),
        username: '',
        email: currentUser.email,
        displayName: currentUser.displayName,
        photoURL: currentUser.photoURL,
        createdAt: new Date(),
        lastLoginAt: new Date(),
        totalPoints: 0,
        level: 1,
        badges: [],
        emailVerified: currentUser.emailVerified,
        authProvider: 'email',
        googleLinked: false
      });
    }
  };

  const checkUsernameAvailable = async (username: string): Promise<boolean> => {
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', username.toLowerCase()));
      const querySnapshot = await getDocs(q);
      return querySnapshot.empty;
    } catch (err) {
      console.error('Error checking username:', err);
      return false;
    }
  };

  const signInWithGoogle = async (): Promise<UserCredential | null> => {
    try {
      setError(null);
      const result = await signInWithPopup(auth, googleProvider);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to sign in with Google';
      setError(errorMessage);
      console.error('Google sign in error:', err);
      return null;
    }
  };

  const signInWithEmail = async (email: string, password: string): Promise<UserCredential | null> => {
    try {
      setError(null);
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (err: unknown) {
      let errorMessage = 'Failed to sign in';
      if (err && typeof err === 'object' && 'code' in err) {
        const firebaseError = err as { code: string };
        switch (firebaseError.code) {
          case 'auth/user-not-found':
            errorMessage = 'No account found with this email';
            break;
          case 'auth/wrong-password':
            errorMessage = 'Incorrect password';
            break;
          case 'auth/invalid-email':
            errorMessage = 'Invalid email address';
            break;
          case 'auth/too-many-requests':
            errorMessage = 'Too many failed attempts. Please try again later';
            break;
          default:
            errorMessage = 'Failed to sign in. Please check your credentials';
        }
      }
      setError(errorMessage);
      console.error('Email sign in error:', err);
      return null;
    }
  };

  const signUpWithEmail = async (email: string, password: string, username: string): Promise<UserCredential | null> => {
    try {
      setError(null);
      
      // Check if username is available
      const isAvailable = await checkUsernameAvailable(username);
      if (!isAvailable) {
        setError('Username is already taken');
        return null;
      }

      // Create account
      const result = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update profile with username
      if (result.user) {
        await updateProfile(result.user, {
          displayName: username
        });

        // Send verification email
        await sendEmailVerification(result.user);

        // Create user document with username
        const userDocRef = doc(db, 'users', result.user.uid);
        const visibleUserId = generateUserId();
        
        await setDoc(userDocRef, {
          uid: result.user.uid,
          visibleUserId,
          username: username.toLowerCase(),
          email: result.user.email,
          displayName: username,
          photoURL: null,
          createdAt: serverTimestamp(),
          lastLoginAt: serverTimestamp(),
          totalPoints: 0,
          level: 1,
          badges: ['welcome'],
          emailVerified: false,
          authProvider: 'email',
          googleLinked: false
        });
      }

      return result;
    } catch (err: unknown) {
      let errorMessage = 'Failed to create account';
      if (err && typeof err === 'object' && 'code' in err) {
        const firebaseError = err as { code: string };
        switch (firebaseError.code) {
          case 'auth/email-already-in-use':
            errorMessage = 'An account with this email already exists';
            break;
          case 'auth/invalid-email':
            errorMessage = 'Invalid email address';
            break;
          case 'auth/weak-password':
            errorMessage = 'Password should be at least 6 characters';
            break;
          default:
            errorMessage = 'Failed to create account. Please try again';
        }
      }
      setError(errorMessage);
      console.error('Sign up error:', err);
      return null;
    }
  };

  const linkGoogleAccount = async (): Promise<boolean> => {
    if (!user) return false;

    try {
      setError(null);
      const result = await linkWithPopup(user, new GoogleAuthProvider());
      
      // Update user profile to mark Google as linked
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        googleLinked: true,
        authProvider: 'both',
        photoURL: result.user.photoURL
      }, { merge: true });

      // Refresh profile
      await fetchOrCreateUserProfile(result.user);
      
      return true;
    } catch (err: unknown) {
      let errorMessage = 'Failed to link Google account';
      if (err && typeof err === 'object' && 'code' in err) {
        const firebaseError = err as { code: string };
        if (firebaseError.code === 'auth/credential-already-in-use') {
          errorMessage = 'This Google account is already linked to another user';
        }
      }
      setError(errorMessage);
      console.error('Link Google error:', err);
      return false;
    }
  };

  const sendVerificationEmail = async (): Promise<boolean> => {
    if (!user) return false;

    try {
      setError(null);
      await sendEmailVerification(user);
      return true;
    } catch (err) {
      setError('Failed to send verification email. Please try again later.');
      console.error('Send verification error:', err);
      return false;
    }
  };

  const logout = async () => {
    try {
      setError(null);
      await signOut(auth);
      setUserProfile(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to sign out';
      setError(errorMessage);
      console.error('Sign out error:', err);
    }
  };

  const updateUserPoints = async (points: number) => {
    if (!user || !userProfile) return;

    try {
      const newTotalPoints = userProfile.totalPoints + points;
      const newLevel = calculateLevel(newTotalPoints);

      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        totalPoints: newTotalPoints,
        level: newLevel
      }, { merge: true });

      setUserProfile(prev => prev ? {
        ...prev,
        totalPoints: newTotalPoints,
        level: newLevel
      } : null);
    } catch (err) {
      console.error('Error updating points:', err);
    }
  };

  const addBadge = async (badgeId: string) => {
    if (!user || !userProfile) return;
    if (userProfile.badges.includes(badgeId)) return;

    try {
      const newBadges = [...userProfile.badges, badgeId];

      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        badges: newBadges
      }, { merge: true });

      setUserProfile(prev => prev ? {
        ...prev,
        badges: newBadges
      } : null);
    } catch (err) {
      console.error('Error adding badge:', err);
    }
  };

  const updateUsername = async (newUsername: string): Promise<boolean> => {
    if (!user || !userProfile) return false;

    try {
      setError(null);
      
      // Check if username is available
      const isAvailable = await checkUsernameAvailable(newUsername);
      if (!isAvailable) {
        setError('Username is already taken');
        return false;
      }

      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        username: newUsername.toLowerCase()
      }, { merge: true });

      await updateProfile(user, {
        displayName: newUsername
      });

      setUserProfile(prev => prev ? {
        ...prev,
        username: newUsername.toLowerCase(),
        displayName: newUsername
      } : null);

      return true;
    } catch (err) {
      setError('Failed to update username');
      console.error('Update username error:', err);
      return false;
    }
  };

  const clearError = () => setError(null);

  const calculateLevel = (points: number): number => {
    return Math.floor(points / 500) + 1;
  };

  return (
    <AuthContext.Provider value={{
      user,
      userProfile,
      loading,
      error,
      signInWithGoogle,
      signInWithEmail,
      signUpWithEmail,
      linkGoogleAccount,
      sendVerificationEmail,
      logout,
      updateUserPoints,
      addBadge,
      updateUsername,
      checkUsernameAvailable,
      clearError
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
