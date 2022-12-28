import React from 'react';
import { Link } from 'react-router-dom';
import { StyledChatPage, StyledChatUserInfo } from './styled';
import { TopBasicNav } from '../../components/Navbar/TopNavbar';
import TabMenu from './../../components/TabMenu/TabMenu';
import BasicProfile from '../../assets/icon/icon-user.svg';
import { UserModal } from '../../components/Modal/Modal';

export default function ChatListPage() {
  return (
    <StyledChatPage>
      <TopBasicNav >{UserModal}</TopBasicNav>
      <Link to="/chatroom">
        <StyledChatUserInfo>
          <img
            src={BasicProfile}
            alt="유저프로필이미지"
            className="basic-profile"
          />
          <div>
            <h3>멋사칭구1</h3>
            <span>안녕~</span>
          </div>
          <span>10분 전</span>
        </StyledChatUserInfo>
      </Link>
      <Link to="/chatroom">
        <StyledChatUserInfo>
          <img
            src={BasicProfile}
            alt="유저프로필이미지"
            className="basic-profile"
          />
          <div>
            <h3>멋사칭구2</h3>
            <span>안녕~</span>
          </div>
          <span>10분 전</span>
        </StyledChatUserInfo>
      </Link>
      <Link to="/chatroom">
        <StyledChatUserInfo>
          <img
            src={BasicProfile}
            alt="유저프로필이미지"
            className="basic-profile"
          />
          <div>
            <h3>멋사칭구3</h3>
            <span>안녕~</span>
          </div>
          <span>10분 전</span>
        </StyledChatUserInfo>
      </Link>

      <TabMenu />
    </StyledChatPage>
  );
}
