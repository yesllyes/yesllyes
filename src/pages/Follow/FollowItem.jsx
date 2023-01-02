import React, { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import UserInfo from '../../components/UserInfo/UserInfo';
import Button from '../../components/Button/Button';
import useAuthContext from '../../hooks/useAuthContext';

function FollowItem({ user }) {
  const { auth } = useAuthContext();
  const [isFollow, setIsFollow] = useState(user.isfollow);

  const loginAccountName = useLocation().state.accountName;

  const followAPI = useCallback(async () => {
    try {
      const res = await fetch(
        `https://mandarin.api.weniv.co.kr/profile/${user.accountname}/follow`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${auth.token}`,
            'Content-type': 'application/json',
          },
        }
      );
      const result = await res.json();

      setIsFollow((isfollow) => !isfollow);
      return result;
    } catch (error) {
      return new Error(error);
    }
  }, [auth.token, user.accountname]);

  const unFollowAPI = useCallback(async () => {
    try {
      const res = await fetch(
        `https://mandarin.api.weniv.co.kr/profile/${user.accountname}/unfollow`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${auth.token}`,
            'Content-type': 'application/json',
          },
        }
      );
      const result = await res.json();

      setIsFollow((isfollow) => !isfollow);
      return result;
    } catch (error) {
      return new Error(error);
    }
  }, [auth.token, user.accountname]);

  const handleFollowState = () => {
    if (isFollow) {
      unFollowAPI();
    } else {
      followAPI();
    }
  };

  return (
    <li>
      <Link to={`/profile/${user.accountname}`}>
        <UserInfo user={user} />
      </Link>

      {auth.accountName === loginAccountName ? (
        <Button size="xsm" onClick={handleFollowState} active={isFollow}>
          {isFollow ? '취소' : '팔로우'}
        </Button>
      ) : null}
    </li>
  );
}

export default FollowItem;
