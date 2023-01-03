import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopUploadNav } from '../../components/Navbar/TopNavbar';
import TextInput from '../../components/TextInput/TextInput';
import {
  StyledProfilePage,
  StyledImg,
  StyledTxt,
} from '../ProfileSignup/styled';
import useAuthContext from '../../hooks/useAuthContext';
import IconBasicProfile from '../../assets/icon/icon-basic-profile-large.svg';

const BASEURL = 'https://mandarin.api.weniv.co.kr';
const BASICPROFILE = `${BASEURL}/1671610059003.png`;

export default function ProfileEditPage() {
  const { auth } = useAuthContext();

  const [username, setUserName] = useState('');
  const [accountname, setAccountName] = useState('');
  const [intro, setIntro] = useState('');
  const [preImage, setPreImage] = useState(null);

  const [isValidUserName, setIsValidUserName] = useState(false);
  const [checkUserNameMsg, setCheckUserNameMsg] = useState(' ');
  const [isValidAccountName, setIsValidAccountName] = useState(false);
  const [checkAccountNameMsg, setCheckAccountNameMsg] = useState(' ');

  const navigate = useNavigate();

  const passed = isValidUserName && isValidAccountName;

  useEffect(() => {
    if (auth.isUser) {
      fetch(`${BASEURL}/user/myinfo`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setUserName(res.user.username);
          setAccountName(res.user.accountname);
          setIntro(res.user.intro);
          setPreImage(res.user.image);
          console.log(res);
        });
    }
  }, [auth.isUser, auth.token]);

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

      //   console.log(json);
      //   console.log(json.filename);
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
    username,
    accountname,
    intro,
    image: preImage || BASICPROFILE,
  };

  const onSubmit = async () => {
    const userData = { user: data };
    const profileEdit = await fetch(`${BASEURL}/user`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const result = await profileEdit.json();

    if (result.status === 422) {
      setCheckAccountNameMsg(result.message);
      setIsValidAccountName(false);
    } else {
      const localData = {
        token: auth.token,
        accountName: result.user.accountname,
        image: result.user.image,
      };

      localStorage.setItem('data', JSON.stringify(localData));
      auth.accountName = result.user.accountname;
      navigate(`/profile/${result.user.accountname}`);
    }
  };

  return (
    <StyledProfilePage>
      <TopUploadNav disabled={!passed} onClick={onSubmit} value="저장" />
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
          required
        />
        <p className="error-msg">{checkUserNameMsg}</p>
        <TextInput
          label="계정 ID"
          id="user"
          placeholder="영문, 숫자, 특수문자(., _)만 사용 가능합니다."
          name="accountname"
          value={accountname}
          onChange={handleChangeAccountName}
          type="text"
          required
        />
        <p className="error-msg">{checkAccountNameMsg}</p>
        <TextInput
          label="소개"
          id="user"
          placeholder="자유롭게 자신을 소개해주세요!"
          name="intro"
          value={intro}
          onChange={handleChangeIntro}
          type="text"
        />
      </StyledTxt>
    </StyledProfilePage>
  );
}
