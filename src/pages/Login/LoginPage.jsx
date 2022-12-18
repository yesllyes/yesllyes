import React from 'react';
import Button from '../../components/Button/Button';
import TextInput from './../../components/TextInput/TextInput';
import StyledLoginPage from './styled';

export default function LoginPage() {
  return (
    <StyledLoginPage>
      <h1>로그인</h1>
      <div>
        <TextInput
          label="이메일"
          id="email"
          placeholder="e-mail 입력"
          type="email"
          required
        />
        <TextInput
          label="비밀번호"
          id="password"
          placeholder="비밀번호 입력"
          type="password"
          required
        />

        <Button size="lg" status="disabled">
          로그인
        </Button>
        <a href="/signup">이메일로 회원가입</a>
      </div>
    </StyledLoginPage>
  );
}
