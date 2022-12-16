import React from 'react';
import Button from '../../components/Button/Button';
import TextInput from './../../components/TextInput/TextInput';
import StyledLoginPage from './styled';

export default function LoginPage() {
  return (
    <StyledLoginPage>
      <h1>로그인</h1>
      <form action="" method="">
        <TextInput className="div-input" title="이메일">
          <label htmlFor="email"></label>
          <input type="email" id="email" placeholder="e-mail 입력" required />
        </TextInput>
        <TextInput className="div-input" title="비밀번호">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호 입력"
            required
          />
        </TextInput>
        <div className="div-submit">
          <Button size="lg" status="disabled">
            로그인
          </Button>
          <a href="/signup">이메일로 회원가입</a>
        </div>
      </form>
    </StyledLoginPage>
  );
}
