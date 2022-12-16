import React from 'react';
import StyledLoginPage from './styled';
import Button from '../../components/Button/Button';

export default function LoginPage() {
  return (
    <StyledLoginPage>
      <h1>로그인</h1>
      <form action="" method="">
        <div className="div-input">
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" placeholder="e-mail 입력" required />
        </div>
        <div className="div-input">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호 입력"
            required
          />
        </div>
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
