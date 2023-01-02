import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import StartSplash from './../pages/Splash/StartSplash';
import LoginPage from '../pages/Login/LoginPage';
import SignupPage from '../pages/Signup/SignupPage';
import ProfileSignupPage from '../pages/ProfileSignup/ProfileSignupPage';
import ProfileEditPage from '../pages/ProfileEdit/ProfileEdit';
import HomeFeedPage from '../pages/HomeFeed/HomeFeedPage';
import CampaignUploadPage from '../pages/CampaignUpload/CampaignUploadPage';
import PostPage from './../pages/Post/PostPage';
import PostUploadPage from '../pages/Post/PostUploadPage';
import PostEditPage from './../pages/Post/PostEditPage';
import ChatListPage from '../pages/Chat/ChatListPage';
import ChatRoomPage from '../pages/Chat/ChatRoomPage';
import ProfilePage from '../pages/Profile/ProfilePage';
import FollowersPage from '../pages/Follow/FollowersPage';
import SearchPage from '../pages/Search/SearchPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import CampaignEdit from '../pages/CampaignUpload/CampaignEdit';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<StartSplash />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/profilesignup" element={<ProfileSignupPage />}></Route>
      <Route path="/homefeed" element={<HomeFeedPage />}></Route>
      <Route path="/campaignupload" element={<CampaignUploadPage />}></Route>
      <Route path="/campaign/:campaignId/edit" element={<CampaignEdit />}></Route>
      <Route path="/post/:postId" element={<PostPage />}></Route>
      <Route path="/post/:postId/" element={<Outlet />}>
        <Route path="" element={<PostPage />}></Route>
        <Route path="postedit" element={<PostEditPage />}></Route>
      </Route>
      <Route path="/postupload" element={<PostUploadPage />}></Route>
      <Route path="/chatlist" element={<ChatListPage />}></Route>
      <Route path="/chatroom" element={<ChatRoomPage />}></Route>
      <Route path="/profile/:userId/" element={<ProfilePage />}></Route>
      <Route path="/profile/:userId/" element={<Outlet />}>
        <Route path="" element={<ProfilePage />} />
        <Route path="followers" element={<FollowersPage />} />
        <Route path="edit" element={<ProfileEditPage />}></Route>
      </Route>
      <Route path="/followers" element={<FollowersPage />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default Router;
