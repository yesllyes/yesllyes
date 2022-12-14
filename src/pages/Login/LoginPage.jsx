import React, { useCallback, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';

import useAuthContext from '../../hooks/useAuthContext';

import TextInput from './../../components/TextInput/TextInput';
import StyledLoginPage from './styled';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const navigate = useNavigate();
  const passed = isEmail && isPassword;

  const { login } = useAuthContext();

  const data = useMemo(() => ({ email, password }), [email, password]);

  const handleonChange = (event) => {
    if (event.target.name === 'email') {
      const currentEmail = event.target.value;

      setEmail(currentEmail);
      const emailRegExp =
        /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

      if (event.target.value === '') {
        setIsEmail(false);
        setEmailMessage('입력해주세요');
      } else if (!emailRegExp.test(currentEmail) && currentEmail !== '') {
        setIsEmail(false);
        setEmailMessage('이메일의 형식이 올바르지 않습니다!');
      } else {
        setIsEmail(true);
        setEmailMessage('');
      }
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
      if (event.target.value === '') {
        setIsPassword(false);
      } else {
        setIsPassword(true);
      }

      if (emailMessage === '이메일 또는 비밀번호가 일치하지 않습니다.') {
        setIsEmail(true);
        setEmailMessage('');
      }
    }
  };

  const onSubmit = useCallback(async () => {
    const userData = { user: data };
    const result = await fetch(`https://mandarin.api.weniv.co.kr/user/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const { user, message } = await result.json();

    if (!user) {
      setEmailMessage(message);
      setIsEmail(false);
    } else {
      const localData = {
        token: user.token,
        accountName: user.accountname,
        image: user.image,
      };

      localStorage.setItem('data', JSON.stringify(localData));
      login(user.token, user.accountname, user.image);
      navigate('/homefeed', { replace: true });
    }
  }, [data, navigate, login]);

  return (
    <StyledLoginPage>
      <h1>로그인</h1>
      <div>
        <TextInput
          // 마크업, 스타일링에 필요한 속성
          label="이메일"
          id="email"
          placeholder="e-mail 입력"
          // API 통신, 로직에 필요한 속성
          name="email"
          value={email}
          onChange={handleonChange}
          // validation 에 필요한 속성 (로직 추가후 삭제예정)
          type="email"
          required
        />
        <TextInput
          label="비밀번호"
          id="password"
          placeholder="비밀번호 입력"
          name="password"
          value={password}
          onChange={handleonChange}
          type="password"
          required
        />
        <p className="message">{emailMessage}</p>

        <Button size="lg" disabled={!passed} onClick={onSubmit}>
          로그인
        </Button>
        <Link to="/signup">이메일로 회원가입</Link>
      </div>
    </StyledLoginPage>
  );
}
