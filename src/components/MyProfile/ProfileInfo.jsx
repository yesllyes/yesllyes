import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { TopBasicNav } from '../../components/Navbar/TopNavbar';
// import BasicProfileImg from '../../assets/icon/icon-basic-profile-large.svg';
import Share from '../../assets/icon/icon-share.svg';
import Message from '../../assets/icon/icon-message-small.svg';
import { StyledProfileInfo, CircleBtn } from './styled';

function ProfileInfo() {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://mandarin.api.weniv.co.kr/user/myinfo', {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTZjYjUyMTdhZTY2NjU4MWMzMzQ0MyIsImV4cCI6MTY3NjgxMjYwNCwiaWF0IjoxNjcxNjI4NjA0fQ._xUP-5Fet9fwZ8I6XPtJ1waxYx_XXMgnFR9rl_kohuk',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUserInfo(res.user);
        setLoading(false);
      });
  }, []);
  // loading 시 조건부 렌더링, 예외 처리 필요
  console.log(userInfo, loading);

  return (
    <StyledProfileInfo>
      <TopBasicNav />

      <div className="ProfileHeader">
        <p className="followers">
          {userInfo.followerCount}
          <span>followers</span>
        </p>
        <img src={userInfo.image} alt="프로필 사진" />
        <p className="followings">
          {userInfo.followingCount}
          <span>followings</span>
        </p>
      </div>

      <div className="ProfileMain">
        <p>
          {userInfo.username}
          <span>@{userInfo.accountname}</span>
        </p>
      </div>

      <div className="ProfileSub">
        <p>{userInfo.intro}</p>
      </div>

      <div className="ProfileFooter">
        <Link to="DM창">
          <CircleBtn>
            <img src={Message} alt="메시지 보내기" />
          </CircleBtn>
        </Link>
        <Button size="sm">프로필 수정</Button>
        <Button size="sm">활동 등록</Button>
        <CircleBtn>
          <img src={Share} alt="공유하기" />
        </CircleBtn>
      </div>
    </StyledProfileInfo>
  );
}

export default ProfileInfo;
