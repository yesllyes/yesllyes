import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledTabMenu, StlyedNavLink } from './styled';
import homeIcon from '../../assets/icon/icon-home.svg';
import homeIconActive from '../../assets/icon/icon-home-fill.svg';
import chatIcon from '../../assets/icon/icon-message-large.svg';
import chatIconActive from '../../assets/icon/icon-message-green.svg';
import uploadIcon from '../../assets/icon/icon-edit.svg';

import profileIcon from '../../assets/icon/icon-user.svg';
import profileIconActive from '../../assets/icon/icon-user-fill.svg';

const TabMenu = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <StyledTabMenu>
      <StlyedNavLink to="/homefeed">
        <img src={pathname === '/homefeed' ? homeIconActive : homeIcon} />
        <p>홈</p>
      </StlyedNavLink>
      <StlyedNavLink to="/">
        <img src={pathname === '/' ? chatIconActive : chatIcon} />
        <p>채팅</p>
      </StlyedNavLink>
      <StlyedNavLink to="/postupload">
        <img src={pathname === '/postupload' ? uploadIcon : uploadIcon} />
        <p>게시물 작성</p>
      </StlyedNavLink>
      <StlyedNavLink to="/myprofile">
        <img
          src={pathname === '/myprofile' ? profileIconActive : profileIcon}
        />
        <p>프로필</p>
      </StlyedNavLink>
    </StyledTabMenu>
  );
};

export default TabMenu;
