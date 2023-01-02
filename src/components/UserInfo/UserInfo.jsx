import React, { useCallback } from 'react';

import BasicProfile from '../../assets/icon/icon-basic-profile-small.svg';

import StyledUserInfo from './styled';

function UserInfo({ user }) {
  const handleImage = useCallback((e) => {
    e.target.src = BasicProfile;
  }, []);

  return (
    <StyledUserInfo>
      <div className="profile-box">
        <img
          className="basic-profile"
          src={user.image}
          alt="유저프로필이미지"
          onError={handleImage}
        />
      </div>
      <div className="user-name">
        <h3>{user.username}</h3>
        <span>@ {user.accountname}</span>
      </div>
    </StyledUserInfo>
  );
}
export default UserInfo;
