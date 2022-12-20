import React from 'react';
import { Link } from 'react-router-dom';
import iconHome from '../../assets/icon/icon-home.svg';
import iconMessageLarge from '../../assets/icon/icon-message-large.svg';
import iconEdit from '../../assets/icon/icon-edit.svg';
import iconUser from '../../assets/icon/icon-user.svg';
import StyledTabMenu from './styled';

const TabMenu = () => (
  <StyledTabMenu>
    <ul>
      <li>
        <Link to="/">
          <img src={iconHome} alt="" />홈
        </Link>
      </li>
      <li>
        <Link to="/">
          <img src={iconMessageLarge} alt="" />
          채팅
        </Link>
      </li>
      <li>
        <Link to="/">
          <img src={iconEdit} alt="" />
          게시물 작성
        </Link>
      </li>
      <li>
        <Link to="/">
          <img src={iconUser} alt="" />
          프로필
        </Link>
      </li>
    </ul>
  </StyledTabMenu>
);

export default TabMenu;
