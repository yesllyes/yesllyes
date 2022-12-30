import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import BasicProfile from '../../assets/icon/icon-basic-profile-small.svg';

import StyledUserInfo from './styled';

function UserInfo({ user }) {
  const handleImage = useCallback((e) => {
    e.target.src = BasicProfile;
  }, []);

  return (
    <StyledUserInfo>
      <Link to={`/profile/${user.accountname}`}>
        <img
          className="basic-profile"
          src={user.image}
          alt="프로필이미지"
          onError={handleImage}
        />
      </Link>
      <div>
        <h3>{user.username}</h3>
        <span>{user.accountname}</span>
      </div>
    </StyledUserInfo>
  );
}
export default UserInfo;
