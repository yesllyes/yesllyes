import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';
import TextInput from './../../components/TextInput/TextInput';
import StyledLoginPage from './styled';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const data = {
    email,
    password,
  };

  const handleonChange = (event) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  };

  const onSubmit = async () => {
    const userData = { user: data };
    const login = await fetch(`https://mandarin.api.weniv.co.kr/user/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const result = await login.json();

    console.log('결과', result);
  };

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
          onChange={handleonChange}
          type="password"
          required
        />

        <Button size="lg" status="disabled" onClick={onSubmit}>
          로그인
        </Button>
        <Link to="/signup">이메일로 회원가입</Link>
      </div>
    </StyledLoginPage>
  );
}
