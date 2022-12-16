import React from 'react';
// { useState }
import Button from '../../components/Button/Button';
import TextInput from './../../components/TextInput/TextInput';
import StyledSignupPage from './styled';

export default function SignupPage() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // // const [loading, setLoading] = useState('');
  // const [error, setError] = useState('');
  // // useEffect(() => {}, []);

  // const handleChange = (e) => {
  //   if (e.target.id === 'email') {
  //     setEmail(e.target.value);
  //   } else {
  //     setPassword(e.target.value);
  //   }
  // };

  // async function signup() {
  //   try {
  //     const response = await fetch(
  //       `https://mandarin.api.weniv.co.kr/user/emailvalid`,
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           user: {
  //             email,
  //           },
  //         }),
  //       }
  //     );

  //     const json = await response.json();

  //     setError(json);
  //     console.log(json);
  //   } catch (err) {
  //     console.log(err);
  //     setError(err);
  //   }
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   signup();
  // };

  // if (error !== null && error.message !== '사용 가능한 이메일 입니다.') {
  //   return <div>{error.message}</div>;
  // }

  return (
    <StyledSignupPage>
      <h1>이메일로 회원가입</h1>
      <form
        action=""
        method=""
        // onSubmit={handleSubmit}
      >
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
      </form>

      <Button size="lg" status="disabled">
        다음
      </Button>
    </StyledSignupPage>
  );
}
