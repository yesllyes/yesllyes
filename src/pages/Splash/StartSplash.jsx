import React, { useState, useEffect } from 'react';
import SplashPage from '../Splash/SplashPage';
import IntroLoginPage from '../IntroLogin/IntroLoginPage';

const StartSplash = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
  }, []);

  return loading ? <SplashPage /> : <IntroLoginPage />;
};

export default StartSplash;
