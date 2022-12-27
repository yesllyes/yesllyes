import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { TopBasicNav } from '../../components/Navbar/TopNavbar';
// import BasicProfileImg from '../../assets/icon/icon-basic-profile-large.svg';
import Share from '../../assets/icon/icon-share.svg';
import Message from '../../assets/icon/icon-message-small.svg';
import { StyledProfileInfo, CircleBtn } from './styled';
import useAuthContext from '../../hooks/useAuthContext';

function ProfileInfo() {
  const { auth } = useAuthContext();

  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('https://mandarin.api.weniv.co.kr/user/myinfo', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUserInfo(res.user);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
      });
  }, [auth]);

  if (loading) {
    return <div>Loading중입니다...</div>;
  }

  if (error) {
    return <div>Error메세지: {error}</div>;
  }

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
        <Button
          size="md"
          active={true}
          onClick={() => {
            console.log('프로필 수정 페이지로 이동');
          }}
        >
          프로필 수정
        </Button>
        <Button
          size="md"
          active={true}
          onClick={() => {
            console.log('할동 등록 페이지로 이동');
          }}
        >
          활동 등록
        </Button>
        <CircleBtn>
          <img src={Share} alt="공유하기" />
        </CircleBtn>
      </div>
    </StyledProfileInfo>
  );
}

export default ProfileInfo;
