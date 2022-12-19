import React from 'react';
import { Route, Routes } from 'react-router-dom';

import StartSplash from './../pages/Splash/StartSplash';
import LoginPage from '../pages/Login/LoginPage';
import SignupPage from '../pages/Signup/SignupPage';
import HomeFeedPage from '../pages/HomeFeed/HomeFeedPage';
import ProfileSignupPage from '../pages/ProfileSignup/ProfileSignupPage';
import ErrorPage from '../pages/Error/ErrorPage';
import MainProfile from '../pages/Profile/MainProfile';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<StartSplash />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/homefeed" element={<HomeFeedPage />}></Route>
      <Route path="/profilesignup" element={<ProfileSignupPage />}></Route>
      <Route path="/error" element={<ErrorPage />}></Route>
      <Route path="/mainprofile" element={<MainProfile />}></Route>

    </Routes>
  );
}

export default Router;
