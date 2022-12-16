import React, { useState } from 'react';
import StyledSignupPage from './styled';
import Button from '../../components/Button/Button';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  // useEffect(() => {}, []);

  const handleChange = (e) => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  async function signup() {
    try {
      const response = await fetch(
        `https://mandarin.api.weniv.co.kr/user/emailvalid`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            user: {
              email,
            },
          }),
        }
      );

      const json = await response.json();

      setError(json);
      console.log(json);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signup();
  };

  if (error !== null && error.message !== '사용 가능한 이메일 입니다.') {
    return <div>{error.message}</div>;
  }

  return (
    <StyledSignupPage>
      <h1>이메일로 회원가입</h1>
      <form action="" method="" onSubmit={handleSubmit}>
        <div className="div-input">
          <label htmlFor="email">이메일</label>
          <input
            onChange={handleChange}
            value={email}
            type="email"
            id="email"
            placeholder="이메일 주소를 입력해 주세요."
            name="email"
            required
          />
        </div>
        <div className="div-input">
          <label htmlFor="password">비밀번호</label>
          <input
            value={password}
            onChange={handleChange}
            type="password"
            id="password"
            placeholder="비밀번호를 설정해 주세요."
            name="password"
            required
          />
        </div>
        <div className="div-submit">
          <Button size="lg" status="disabled">
            다음
          </Button>
        </div>
      </form>
    </StyledSignupPage>
  );
}
