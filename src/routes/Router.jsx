import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SplashPage from './../pages/Splash/SplashPage';
import LoginPage from '../pages/Login/LoginPage';
import SignupPage from '../pages/Signup/SignupPage';
import ProfilePage from '../pages/ProfileSignup/ProfileSignupPage';
import HomeFeedPage from '../pages/HomeFeed/HomeFeedPage';
import ErrorPage from '../pages/Error/ErrorPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/homefeed" element={<HomeFeedPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/error" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
