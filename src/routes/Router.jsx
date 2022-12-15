import React from 'react';
import { Route, Routes } from 'react-router-dom';

import StartSplash from './../pages/Splash/StartSplash';
import LoginPage from '../pages/Login/LoginPage';
import SignupPage from '../pages/Signup/SignupPage';
import HomeFeedPage from '../pages/HomeFeed/HomeFeedPage';
import ProfilePage from '../pages/ProfileSignup/ProfileSignupPage';
import ErrorPage from '../pages/Error/ErrorPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<StartSplash />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/homefeed" element={<HomeFeedPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/error" element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default Router;
