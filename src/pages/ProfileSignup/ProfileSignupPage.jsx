import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import { StyledProfilePage, StyledImg, StyledTxt } from './styled';

import IconBasicProfile from '../../assets/icon/icon-basic-profile-large.svg';

const BASEURL = 'https://mandarin.api.weniv.co.kr';
const BASICPROFILE = `${BASEURL}/1671610059003.png`;

export default function ProfileSignupPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state.email;
  const password = location.state.password;
  const [username, setUserName] = useState('');
  const [accountname, setAccountName] = useState('');
  const [intro, setIntro] = useState('');
  const [preImage, setPreImage] = useState(null);

  const [isValidUserName, setIsValidUserName] = useState(false);
  const [checkUserNameMsg, setCheckUserNameMsg] = useState('');

  const [isValidAccountName, setIsValidAccountName] = useState(false);
  const [checkAccountNameMsg, setCheckAccountNameMsg] = useState('');

  const passed = isValidUserName && isValidAccountName;

  const handleChangeUserName = (event) => {
    const targetName = event.target.value;

    setUserName(event.target.value);
    if (
      targetName.length > 10 ||
      (targetName.length < 2 && targetName !== '')
    ) {
      setCheckUserNameMsg('2자~10자 이내여야 합니다.');
      setIsValidUserName(false);
    } else if (targetName === '') {
      setCheckUserNameMsg('');
      setIsValidUserName(false);
    } else {
      setCheckUserNameMsg('');
      setIsValidUserName(true);
    }
  };

  const handleChangeAccountName = useCallback((event) => {
    const targetaccount = event.target.value;

    setAccountName(event.target.value);
    const regExp = /^[a-z0-9A-Z_.,()]{1,}$/;

    if (!regExp.test(targetaccount) && targetaccount !== '') {
      setCheckAccountNameMsg(
        '영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.'
      );
      setIsValidAccountName(false);
    } else if (targetaccount === '') {
      setCheckAccountNameMsg('');
      setIsValidAccountName(false);
    } else {
      setCheckAccountNameMsg('');
      setIsValidAccountName(true);
    }
  }, []);

  const handleChangeIntro = useCallback((event) => {
    setIntro(event.target.value);
  }, []);

  const handleChangeImg = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();

    formData.append('image', file);

    const imgUpload = async () => {
      const res = await fetch(`${BASEURL}/image/uploadfile`, {
        method: 'POST',
        body: formData,
      });

      const json = await res.json();

      // console.log(json);
      // console.log(json.filename);
      // 이미지 파일형식이 아닌 경우 에러 처리 ex) .svg
      if (!json.filename) {
        setPreImage(null);

        return;
      }
      setPreImage(`${BASEURL}/${json.filename}`);
    };

    imgUpload();
  };

  const data = {
    email,
    password,
    username,
    accountname,
    intro,
    image: preImage || BASICPROFILE,
  };

  const onSubmit = async () => {
    const userData = { user: data };
    const signup = await fetch(`${BASEURL}/user`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const result = await signup.json();

    if (result.user) {
      navigate('/login', { replace: true });
    } else {
      // 해당 로직은 에러로 처리를 하는 것을 권장
      setCheckAccountNameMsg(result.message);
    }
  };

  // console.log('username', isValidUserName);
  // console.log('account', isValidAccountName);
  return (
    <StyledProfilePage>
      <h3>프로필 설정</h3>
      <strong>나중에 언제든지 변경할 수 있습니다.</strong>

      <StyledImg action="post">
        <img src={preImage || IconBasicProfile} alt="미리보기 이미지" />
        <label htmlFor="imgupload" />
        <input
          className="ir"
          type="file"
          accept="image/*"
          id="imgupload"
          onChange={handleChangeImg}
        />
      </StyledImg>
      <StyledTxt>
        <TextInput
          // 마크업, 스타일링에 필요한 속성
          label="사용자 이름"
          id="user"
          placeholder="2~10자 이내로 작성해주세요."
          // API 통신, 로직에 필요한 속성
          name="username"
          value={username}
          onChange={handleChangeUserName}
          // validation 에 필요한 속성 (로직 추가후 삭제예정)
          type="text"
          error={checkUserNameMsg ? 'error' : undefined}
          required
        />
        <p>{checkUserNameMsg}</p>
        <TextInput
          label="계정 ID"
          id="user"
          placeholder="영문, 숫자, 특수문자(., _)만 사용 가능합니다."
          name="accountname"
          value={accountname}
          onChange={handleChangeAccountName}
          type="text"
          error={checkAccountNameMsg ? 'error' : undefined}
          required
        />
        <p>{checkAccountNameMsg}</p>
        <TextInput
          label="소개"
          id="user"
          placeholder="자유롭게 자신을 소개해주세요!"
          name="intro"
          value={intro}
          onChange={handleChangeIntro}
          type="text"
        />
        <Button size="lg" disabled={!passed} onClick={onSubmit}>
          버드나다 시작하기
        </Button>
      </StyledTxt>
    </StyledProfilePage>
  );
}
