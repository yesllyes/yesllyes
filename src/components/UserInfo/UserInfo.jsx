import React from 'react';
import StyledUserInfo from './styled';
// import BasicProfile from '../../assets/icon/icon-basic-profile-small.svg';

function UserInfo({ user }) {
  return (
    <StyledUserInfo>
      <div className="profile-box">
        <img
          className="basic-profile"
          src={user.image}
          alt="유저프로필이미지"
        />
      </div>
      <div className="user-name">
        <h3>{user.username}</h3>
        <span>{user.accountname}</span>
      </div>
    </StyledUserInfo>
  );
}
export default UserInfo;
