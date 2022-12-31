import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TopBasicNav } from '../../components/Navbar/TopNavbar';
import TabMenu from '../../components/TabMenu/TabMenu';

import useAuthContext from '../../hooks/useAuthContext';
import FollowItem from './FollowItem';
import {
  StyledFollowersListWrapper,
  StyledFollowersWrapper,
  StyledFollowersList,
  TabMenuWrap,
} from './styled';

const FollowersPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [followers, setFollowers] = useState(null);

  const location = useLocation();
  const { auth } = useAuthContext();
  const accountName = location.state.accountName;

  useEffect(() => {
    setLoading(true);

    fetch(`https://mandarin.api.weniv.co.kr/profile/${accountName}/follower`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setFollowers(res);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
      });
  }, [auth.token, accountName]);

  if (loading) {
    return <div>Loading중입니다...</div>;
  }

  if (error) {
    return <div>Error메세지: {error}</div>;
  }

  return (
    <StyledFollowersWrapper>
      <h2 className="ir">Follower</h2>
      <TopBasicNav value="Followers" />

      <StyledFollowersListWrapper>
        <StyledFollowersList>
          {!followers || followers.length === 0 ? (
            <li>팔로우 목록이 존재하지 않습니다.</li>
          ) : (
            followers.map((follower) => (
              <FollowItem user={follower} key={follower._id} />
            ))
          )}
        </StyledFollowersList>
      </StyledFollowersListWrapper>

      <TabMenuWrap>
        <TabMenu />
      </TabMenuWrap>
    </StyledFollowersWrapper>
  );
};

export default FollowersPage;
