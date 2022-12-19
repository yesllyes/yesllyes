import React from 'react';
// { useState }
import Button from '../../components/Button/Button';
import TextInput from './../../components/TextInput/TextInput';
import StyledSignupPage from './styled';

export default function SignupPage() {
  return (
    <StyledSignupPage>
      <h1>이메일로 회원가입</h1>
      <div>
        <TextInput
          label="이메일"
          id="email"
          type="email"
          placeholder="e-mail 주소를 입력해 주세요."
          required
          // name="email"
          // onChange={handleChange}
        />
        <TextInput
          label="비밀번호"
          id="password"
          type="password"
          placeholder="비밀번호를 설정해 주세요."
          required
          // name="password"
          // onChange={handleChange}
        />
      </div>

      <Button size="lg" status="disabled">
        다음
      </Button>
    </StyledSignupPage>
  );
}
