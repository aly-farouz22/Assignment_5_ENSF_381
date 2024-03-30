import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => {
  const [showSignup, setShowSignup] = useState(false);

  const switchToSignup = () => {
    setShowSignup(true);
  };

  const switchToLogin = () => {
    setShowSignup(false);
  };

  return (
    <div>
      <Header />
      {showSignup ? (
        <SignupForm switchToLogin={switchToLogin} />
      ) : (
        <LoginForm switchToSignup={switchToSignup} />
      )}
      <Footer />
    </div>
  );
}

export default LoginPage;
