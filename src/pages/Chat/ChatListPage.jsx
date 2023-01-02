import React from 'react';
import { Link } from 'react-router-dom';
import { StyledChatPage, StyledChatUserInfo } from './styled';
import { TopBasicNav } from '../../components/Navbar/TopNavbar';
import TabMenu from './../../components/TabMenu/TabMenu';
import BasicProfile from '../../assets/icon/icon-user.svg';

export default function ChatListPage() {
  return (
    <StyledChatPage>
      <TopBasicNav />
      <Link to="/chatroom">
        <StyledChatUserInfo>
          <div className="profile-box">
            <img
              src={BasicProfile}
              alt="유저프로필이미지"
              className="basic-profile"
            />
          </div>
          <div className="chat-user-cont">
            <h3>초록이</h3>
            <span>이번에 플로깅 행사 참여해두 될까요?</span>
          </div>
          <span>2022.01.02</span>
        </StyledChatUserInfo>
      </Link>
      <Link to="/chatroom">
        <StyledChatUserInfo>
          <div className="profile-box">
            <img
              src={BasicProfile}
              alt="유저프로필이미지"
              className="basic-profile"
            />
          </div>
          <div className="chat-user-cont">
            <h3>푸르지oh</h3>
            <span>새해 복 많이!!</span>
          </div>
          <span>2023.01.01</span>
        </StyledChatUserInfo>
      </Link>
      <Link to="/chatroom">
        <StyledChatUserInfo>
          <div className="profile-box">
            <img
              src={BasicProfile}
              alt="유저프로필이미지"
              className="basic-profile"
            />
          </div>
          <div className="chat-user-cont">
            <h3>함께, 나다</h3>
            <span>친환경 키트 재고 아직 남아있으신가요오~??</span>
          </div>
          <span>2022.12.25</span>
        </StyledChatUserInfo>
      </Link>

      <TabMenu />
    </StyledChatPage>
  );
}
