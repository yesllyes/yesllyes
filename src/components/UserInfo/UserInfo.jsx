import React from 'react';
import IconBasicProfileLarge from '../../assets/icon/icon-basic-profile-large.svg';
import StyledUserInfo from './styled';

const UserInfo = () => (
  <StyledUserInfo>
    <img src={IconBasicProfileLarge} alt="" />
    <div>
      <p>애월읍 위니브 감귤농장</p>
      <span>@ weniv_Mandarin</span>
    </div>
  </StyledUserInfo>
);

const UserFollow = () => (
  <StyledUserInfo>
    <img src={IconBasicProfileLarge} alt="" />
    <div>
      <p>애월읍 위니브 감귤농장</p>
      <span>@ weniv_Mandarin</span>
    </div>
    <button type="button">팔로우</button>
  </StyledUserInfo>
);

export { UserInfo, UserFollow };
