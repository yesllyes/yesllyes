import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import SignupPage from '../pages/Signup/SignupPage';
import ProfilePage from '../pages/ProfileSignup/ProfileSignupPage';
import ErrorPage from '../pages/Error/ErrorPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/error" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
