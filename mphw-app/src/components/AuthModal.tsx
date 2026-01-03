import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import './AuthModal.css';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) => {
  const { isHindi } = useLanguage();
  const { 
    signInWithGoogle, 
    signInWithEmail, 
    signUpWithEmail,
    sendVerificationEmail,
    error, 
    clearError,
    user,
    userProfile
  } = useAuth();

  const [mode, setMode] = useState<'login' | 'signup' | 'verify'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [verificationSent, setVerificationSent] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
  const [checkingUsername, setCheckingUsername] = useState(false);

  const { checkUsernameAvailable } = useAuth();

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      clearError();
      setLocalError(null);
    }
  }, [isOpen, initialMode, clearError]);

  // Check if user just signed up and needs verification
  useEffect(() => {
    if (user && !user.emailVerified && userProfile?.authProvider === 'email') {
      setMode('verify');
    }
  }, [user, userProfile]);

  // Check username availability with debounce
  useEffect(() => {
    if (mode !== 'signup' || !username || username.length < 3) {
      setUsernameAvailable(null);
      return;
    }

    const timer = setTimeout(async () => {
      setCheckingUsername(true);
      const available = await checkUsernameAvailable(username);
      setUsernameAvailable(available);
      setCheckingUsername(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [username, mode, checkUsernameAvailable]);

  const handleClose = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setUsername('');
    setLocalError(null);
    clearError();
    onClose();
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateUsername = (username: string) => {
    const re = /^[a-zA-Z0-9_]{3,20}$/;
    return re.test(username);
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);

    if (!validateEmail(email)) {
      setLocalError(isHindi ? 'कृपया वैध ईमेल दर्ज करें' : 'Please enter a valid email');
      return;
    }

    if (password.length < 6) {
      setLocalError(isHindi ? 'पासवर्ड कम से कम 6 अक्षर का होना चाहिए' : 'Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);
    const result = await signInWithEmail(email, password);
    setIsLoading(false);

    if (result) {
      handleClose();
    }
  };

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);

    if (!validateUsername(username)) {
      setLocalError(isHindi 
        ? 'यूजरनेम 3-20 अक्षर का होना चाहिए (अक्षर, संख्या, _)' 
        : 'Username must be 3-20 characters (letters, numbers, _)');
      return;
    }

    if (!usernameAvailable) {
      setLocalError(isHindi ? 'यह यूजरनेम पहले से लिया गया है' : 'This username is already taken');
      return;
    }

    if (!validateEmail(email)) {
      setLocalError(isHindi ? 'कृपया वैध ईमेल दर्ज करें' : 'Please enter a valid email');
      return;
    }

    if (password.length < 6) {
      setLocalError(isHindi ? 'पासवर्ड कम से कम 6 अक्षर का होना चाहिए' : 'Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      setLocalError(isHindi ? 'पासवर्ड मेल नहीं खाते' : 'Passwords do not match');
      return;
    }

    setIsLoading(true);
    const result = await signUpWithEmail(email, password, username);
    setIsLoading(false);

    if (result) {
      setMode('verify');
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    const result = await signInWithGoogle();
    setIsLoading(false);

    if (result) {
      handleClose();
    }
  };

  const handleResendVerification = async () => {
    setIsLoading(true);
    const success = await sendVerificationEmail();
    setIsLoading(false);
    
    if (success) {
      setVerificationSent(true);
      setTimeout(() => setVerificationSent(false), 5000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={handleClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>×</button>

        {mode === 'verify' ? (
          <div className="verify-email-content">
            <div className="verify-icon">📧</div>
            <h2>{isHindi ? 'ईमेल सत्यापित करें' : 'Verify Your Email'}</h2>
            <p>
              {isHindi 
                ? `हमने ${email || user?.email} पर एक सत्यापन लिंक भेजा है। कृपया अपना ईमेल चेक करें और लिंक पर क्लिक करें।`
                : `We've sent a verification link to ${email || user?.email}. Please check your email and click the link to verify.`}
            </p>
            
            {verificationSent && (
              <div className="success-message">
                {isHindi ? '✓ सत्यापन ईमेल भेजा गया!' : '✓ Verification email sent!'}
              </div>
            )}

            <button 
              className="btn btn-secondary"
              onClick={handleResendVerification}
              disabled={isLoading}
            >
              {isLoading 
                ? (isHindi ? 'भेज रहा है...' : 'Sending...') 
                : (isHindi ? 'ईमेल फिर से भेजें' : 'Resend Email')}
            </button>

            <p className="verify-note">
              {isHindi 
                ? 'सत्यापन के बाद, कृपया इस पेज को रिफ्रेश करें।' 
                : 'After verification, please refresh this page.'}
            </p>

            <button className="text-btn" onClick={handleClose}>
              {isHindi ? 'बाद में करें' : 'Do this later'}
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="modal-header">
              <h2>
                {mode === 'login' 
                  ? (isHindi ? 'लॉगिन करें' : 'Welcome Back!')
                  : (isHindi ? 'अकाउंट बनाएं' : 'Create Account')}
              </h2>
              <p>
                {mode === 'login'
                  ? (isHindi ? 'अपनी प्रगति जारी रखें' : 'Continue your learning journey')
                  : (isHindi ? 'MPHW Prep से जुड़ें' : 'Join MPHW Prep today')}
              </p>
            </div>

            {/* Error Message */}
            {(error || localError) && (
              <div className="error-alert">
                ⚠️ {error || localError}
              </div>
            )}

            {/* Form */}
            <form onSubmit={mode === 'login' ? handleEmailLogin : handleEmailSignup}>
              {mode === 'signup' && (
                <div className="form-group">
                  <label>{isHindi ? 'यूजरनेम' : 'Username'}</label>
                  <div className="input-with-status">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value.toLowerCase())}
                      placeholder={isHindi ? 'यूनिक यूजरनेम चुनें' : 'Choose a unique username'}
                      required
                      minLength={3}
                      maxLength={20}
                    />
                    {username.length >= 3 && (
                      <span className={`status-icon ${checkingUsername ? 'checking' : usernameAvailable ? 'available' : 'taken'}`}>
                        {checkingUsername ? '...' : usernameAvailable ? '✓' : '✗'}
                      </span>
                    )}
                  </div>
                  {username.length >= 3 && !checkingUsername && (
                    <span className={`hint ${usernameAvailable ? 'success' : 'error'}`}>
                      {usernameAvailable 
                        ? (isHindi ? 'उपलब्ध है!' : 'Available!') 
                        : (isHindi ? 'पहले से लिया गया' : 'Already taken')}
                    </span>
                  )}
                </div>
              )}

              <div className="form-group">
                <label>{isHindi ? 'ईमेल' : 'Email'}</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={isHindi ? 'आपका ईमेल' : 'your@email.com'}
                  required
                />
              </div>

              <div className="form-group">
                <label>{isHindi ? 'पासवर्ड' : 'Password'}</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={isHindi ? 'पासवर्ड (6+ अक्षर)' : 'Password (6+ characters)'}
                  required
                  minLength={6}
                />
              </div>

              {mode === 'signup' && (
                <div className="form-group">
                  <label>{isHindi ? 'पासवर्ड की पुष्टि करें' : 'Confirm Password'}</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder={isHindi ? 'पासवर्ड दोबारा दर्ज करें' : 'Enter password again'}
                    required
                    minLength={6}
                  />
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary btn-block"
                disabled={isLoading || (mode === 'signup' && !usernameAvailable)}
              >
                {isLoading 
                  ? (isHindi ? 'कृपया प्रतीक्षा करें...' : 'Please wait...')
                  : mode === 'login'
                    ? (isHindi ? 'लॉगिन करें' : 'Login')
                    : (isHindi ? 'अकाउंट बनाएं' : 'Create Account')}
              </button>
            </form>

            {/* Divider */}
            <div className="divider">
              <span>{isHindi ? 'या' : 'or'}</span>
            </div>

            {/* Google Sign In */}
            <button 
              className="btn btn-google"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {isHindi ? 'Google से जारी रखें' : 'Continue with Google'}
            </button>

            {/* Toggle Mode */}
            <p className="toggle-mode">
              {mode === 'login' ? (
                <>
                  {isHindi ? 'नए हैं? ' : "Don't have an account? "}
                  <button 
                    type="button"
                    className="text-btn"
                    onClick={() => { setMode('signup'); clearError(); setLocalError(null); }}
                  >
                    {isHindi ? 'अकाउंट बनाएं' : 'Sign up'}
                  </button>
                </>
              ) : (
                <>
                  {isHindi ? 'पहले से अकाउंट है? ' : 'Already have an account? '}
                  <button 
                    type="button"
                    className="text-btn"
                    onClick={() => { setMode('login'); clearError(); setLocalError(null); }}
                  >
                    {isHindi ? 'लॉगिन करें' : 'Login'}
                  </button>
                </>
              )}
            </p>

            {mode === 'signup' && (
              <p className="terms-note">
                {isHindi 
                  ? 'अकाउंट बनाकर, आप हमारी सेवा की शर्तों से सहमत होते हैं।' 
                  : 'By signing up, you agree to our Terms of Service.'}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
