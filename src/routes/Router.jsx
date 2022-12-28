import React from 'react';
import { Route, Routes } from 'react-router-dom';

import StartSplash from './../pages/Splash/StartSplash';
import LoginPage from '../pages/Login/LoginPage';
import SignupPage from '../pages/Signup/SignupPage';
import ProfileSignupPage from '../pages/ProfileSignup/ProfileSignupPage';
import HomeFeedPage from '../pages/HomeFeed/HomeFeedPage';
import CampaignPage from '../pages/Campaign/CampaignPage';
import PostPage from './../pages/Post/PostPage';
import PostUploadPage from '../pages/Post/PostUploadPage';
import ChatListPage from '../pages/Chat/ChatListPage';
import ChatRoomPage from '../pages/Chat/ChatRoomPage';
import MyProfilePage from '../pages/MyProfile/MyProfilePage';
import FollowersPage from '../pages/Follow/FollowersPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<StartSplash />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/profilesignup" element={<ProfileSignupPage />}></Route>
      <Route path="/homefeed" element={<HomeFeedPage />}></Route>
      <Route path="/campaign" element={<CampaignPage />}></Route>
      <Route path="/post/:postId" element={<PostPage />}></Route>
      <Route path="/postupload" element={<PostUploadPage />}></Route>
      <Route path="/chatlist" element={<ChatListPage />}></Route>
      <Route path="/chatroom" element={<ChatRoomPage />}></Route>
      <Route path="/myprofile" element={<MyProfilePage />}></Route>
      <Route path="/followers" element={<FollowersPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default Router;
