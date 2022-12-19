import React from 'react';
import Button from '../../components/Button/Button';
import { TopBasicNav } from '../../components/Navbar/TopNavbar';
import BasicProfileImg from '../../assets/icon/icon-basic-profile-large.svg';
import Share from '../../assets/icon/icon-share.svg';
import Message from '../../assets/icon/icon-message-small.svg';
import { StyledProfileInfo, CircleBtn } from './styled';

const ProfileInfo = () => (
  <StyledProfileInfo>
    <TopBasicNav />

    <div className="ProfileHeader">
      <p className="follwers">
        2950
        <span>followers</span>
      </p>
      <img src={BasicProfileImg} alt="프로필 사진" />
      <p className="followings">
        128
        <span>fllowings</span>
      </p>
    </div>

    <div className="ProfileMain">
      <p>
        초록 초록 예쁜 지구
        <span>@weniv_Mandarin</span>
      </p>
    </div>

    <div className="ProfileSub">
      <p>인천광역시, 플로깅, 친환경 키트 제작</p>
    </div>

    <div className="ProfileFooter">
      <CircleBtn>
        <img src={Message} alt="메시지 보내기" />
      </CircleBtn>

      <Button size="md">팔로우</Button>

      <CircleBtn>
        <img src={Share} alt="공유하기" />
      </CircleBtn>
    </div>
  </StyledProfileInfo>
);

export default ProfileInfo;
