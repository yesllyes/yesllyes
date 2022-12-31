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
import useAuthContext from '../../hooks/useAuthContext';

const TabMenu = () => {
  const { auth } = useAuthContext();
  const location = useLocation();
  const { pathname } = location;

  return (
    <StyledTabMenu>
      <StlyedNavLink to="/homefeed">
        <img
          src={pathname === '/homefeed' ? homeIconActive : homeIcon}
          alt="홈페이지 이동 이미지 버튼"
        />
        <p>홈</p>
      </StlyedNavLink>
      <StlyedNavLink to="/chatlist">
        <img
          src={pathname === '/chatlist' ? chatIconActive : chatIcon}
          alt="채팅 이동 이미지 버튼"
        />
        <p>채팅</p>
      </StlyedNavLink>
      <StlyedNavLink to="/postupload">
        <img
          src={pathname === '/postupload' ? ' ' : uploadIcon}
          alt="게시물 작성 이동 이미지 버튼"
        />
        <p>게시물 작성</p>
      </StlyedNavLink>
      <StlyedNavLink to={`/profile/${auth.accountName}`}>
        <img
          src={
            pathname === `/profile/${auth.accountName}`
              ? profileIconActive
              : profileIcon
          }
          alt="프로필 정보 이동 이미지 버튼"
        />
        <p>프로필</p>
      </StlyedNavLink>
    </StyledTabMenu>
  );
};

export default TabMenu;
