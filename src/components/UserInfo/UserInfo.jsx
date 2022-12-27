import React from 'react';
import StyledUserInfo from './styled';
// import BasicProfile from '../../assets/icon/icon-basic-profile-small.svg';

function UserInfo({ user }) {
  return (
    <StyledUserInfo>
      <img className="basic-profile" src={user.image} alt="유저프로필이미지" />
      <div>
        <h3>{user.username}</h3>
        <span>{user.accountname}</span>
      </div>
    </StyledUserInfo>
  );
}
export default UserInfo;
