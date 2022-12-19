import React from 'react';
import ProfileList from '../../components/MyProfile/ProfileList';
import ProfileInfo from '../../components/MyProfile/ProfileInfo';
import PostList from '../../components/MyProfile/PostList';
import StyledMyProfile from './styled';

const MainProfile = () => (
  <StyledMyProfile>
    <ProfileInfo />
    <ProfileList />
    <PostList />
  </StyledMyProfile>
);

export default MainProfile;
