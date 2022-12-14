import React from 'react';
import StyledSignupSection from './Styled';
import Button from '../../components/button/Button';

export default function SignupPage() {
  return (
    <StyledSignupSection>
      <h1>이메일로 회원가입</h1>
      <form action="" method="">
        <div className="div-input">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            placeholder="이메일 주소를 입력해 주세요."
            required
          />
        </div>
        <div className="div-input">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 설정해 주세요."
            required
          />
        </div>
        <div className="div-submit">
          <Button size="lg" status="disabled">
            다음
          </Button>
        </div>
      </form>
    </StyledSignupSection>
  );
}
