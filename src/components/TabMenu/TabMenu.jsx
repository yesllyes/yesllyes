import React from 'react';
import iconHome from '../../assets/icon/icon-home.svg';
import iconMessageLarge from '../../assets/icon/icon-message-large.svg';
import iconEdit from '../../assets/icon/icon-edit.svg';
import iconUser from '../../assets/icon/icon-user.svg';
import StyledTabMenu from './styled';

const TabMenu = () => (
  <StyledTabMenu>
    <ul>
      <li>
        <a href="/">
          <img src={iconHome} alt="" />홈
        </a>
      </li>
      <li>
        <a href="/">
          <img src={iconMessageLarge} alt="" />
          채팅
        </a>
      </li>
      <li>
        <a href="/">
          <img src={iconEdit} alt="" />
          게시물 작성
        </a>
      </li>
      <li>
        <a href="/">
          <img src={iconUser} alt="" />
          프로필
        </a>
      </li>
    </ul>
  </StyledTabMenu>
);

export default TabMenu;
