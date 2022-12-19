import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TextInput from './../../components/TextInput/TextInput';
import StyledLoginPage from './styled';

export default function LoginPage() {
  return (
    <StyledLoginPage>
      <h1>로그인</h1>
      <form action="" method="">
        <TextInput
          label="이메일"
          id="email"
          type="email"
          placeholder="e-mail 입력"
          required
        />
        <TextInput
          label="비밀번호"
          id="password"
          type="password"
          placeholder="비밀번호 입력"
          required
        />

        <Button size="lg" status="disabled">
          로그인
        </Button>
        <Link to="/signup">이메일로 회원가입</Link>
      </form>
    </StyledLoginPage>
  );
}
