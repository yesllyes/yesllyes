import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import StyledWrapper from '../../components/Wrapper/StyledWrapper';
import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import { StyledProfilePage, StyledImg, StyledTxt } from './styled';

import IconBasicProfile from '../../assets/icon/icon-basic-profile-large.svg';
import IconImgButton from '../../assets/icon/icon-img-button-green.svg';

export default function ProfilePage() {
  const location = useLocation();
  const email = location.state.email;
  const password = location.state.password;
  const [username, setUsername] = useState('');
  const [accountname, setAccountname] = useState('');
  const data = {
    email,
    password,
    username,
    accountname,
    intro: '',
    image: '',
  };

  const handleonChange = (event) => {
    if (event.target.name === 'username') {
      setUsername(event.target.value);
    } else if (event.target.name === 'accountname') {
      setAccountname(event.target.value);
    }
  };

  const onSubmit = async () => {
    const userData = { user: data };
    const signup = await fetch(`https://mandarin.api.weniv.co.kr/user`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const result = await signup.json();

    console.log('결과', result);
  };

  return (
    <StyledWrapper>
      <StyledProfilePage>
        <h3>프로필 설정</h3>
        <strong>나중에 언제든지 변경할 수 있습니다.</strong>

        <StyledImg src={IconImgButton}>
          <img src={IconBasicProfile} alt="" />
        </StyledImg>

        <StyledTxt>
          <TextInput
            // 마크업, 스타일링에 필요한 속성
            label="사용자 별명"
            id="user"
            placeholder="2~10자 이내로 작성해주세요."
            // API 통신, 로직에 필요한 속성
            name="username"
            onChange={handleonChange}
            // validation 에 필요한 속성 (로직 추가후 삭제예정)
            type="text"
            required
          />
          <TextInput
            label="계정 ID"
            id="user"
            placeholder="영문, 숫자, 특수문자(., _)만 사용 가능합니다."
            name="accountname"
            onChange={handleonChange}
            type="text"
            required
          />
          <TextInput
            label="소개"
            id="user"
            placeholder="자유롭게 자신을 소개해주세요!"
            name="intro"
            onChange={handleonChange}
            type="text"
          />
          <Button size="lg" status="disabled" onClick={onSubmit}>
            초록마켓 시작하기
          </Button>
        </StyledTxt>
      </StyledProfilePage>
    </StyledWrapper>
  );
}
