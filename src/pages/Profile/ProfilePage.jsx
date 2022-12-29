import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CampaignList from '../../components/Profile/CampaignList';
import ProfileInfo from '../../components/Profile/ProfileInfo';
import PostList from '../../components/Profile/PostList';
import StyledMyProfile from './styled';
import TabMenu from '../../components/TabMenu/TabMenu';
import useAuthContext from '../../hooks/useAuthContext';

const ProfilePage = () => {
  const { auth } = useAuthContext();
  const { userId } = useParams();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (auth.accountName === userId) {
      setIsAuthorized(true);
    }
  }, [auth, userId]);

  return (
    <StyledMyProfile>
      <ProfileInfo accountName={isAuthorized ? auth.accountName : userId} />
      <CampaignList accountName={isAuthorized ? auth.accountName : userId} />
      <PostList accountName={isAuthorized ? auth.accountName : userId} />
      <TabMenu />
    </StyledMyProfile>
  );
};

export default ProfilePage;
