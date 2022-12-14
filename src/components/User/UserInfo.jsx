import React from 'react';
import StyledUserInfo from './styled';
import BasicProfile from '../../assets/icon/icon-basic-profile-small.svg';

function UserInfo() {
  return (
    <StyledUserInfo>
      <img className="basic-profile" src={BasicProfile} alt="" />
      <div>
        <h3>애월읍 위니브 감귤농장</h3>
        <span>@weniv_Mandarin</span>
      </div>
    </StyledUserInfo>
  );
}

export default UserInfo;
