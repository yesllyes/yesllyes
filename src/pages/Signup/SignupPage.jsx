import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TextInput from './../../components/TextInput/TextInput';
import StyledSignupPage from './styled';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleonChange = (event) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  };

  const nextPage = () => {
    navigate('/profilesignup', {
      state: {
        email,
        password,
      },
    });
    // console.log(email, password);
  };

  return (
    <StyledSignupPage>
      <h1>이메일로 회원가입</h1>
      <div>
        <TextInput
          // 마크업, 스타일링에 필요한 속성
          label="이메일"
          id="email"
          placeholder="e-mail 주소를 입력해 주세요."
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
          placeholder="비밀번호를 설정해 주세요."
          name="password"
          onChange={handleonChange}
          type="password"
          required
        />
      </div>

      <Button size="lg" status="disabled" onClick={nextPage}>
        다음
      </Button>
    </StyledSignupPage>
  );
}
