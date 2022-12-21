import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TextInput from './../../components/TextInput/TextInput';
import StyledSignupPage from './styled';

export default function SignupPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [passwordMessage, setPasswordMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  const [isPassword, setIsPassword] = useState(true);
  const [isEmail, setIsEmail] = useState(true);

  console.log(isEmail, isPassword);

  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;

    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (e.target.value === '') {
      setIsEmail(false);
      setEmailMessage('입력해주세요');
    } else if (!emailRegExp.test(currentEmail) && currentEmail !== '') {
      setIsEmail(false);
      setEmailMessage('이메일의 형식이 올바르지 않습니다!');
    } else {
      setIsEmail(true);
      setEmailMessage('사용 가능한 이메일 입니다.');
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;

    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!'
      );
      setIsPassword(false);
    } else {
      setPasswordMessage('안전한 비밀번호 입니다.');
      setIsPassword(true);
    }
  };

  // const handleonChange = (event) => {
  //   if (event.target.name === 'email') {
  //     setEmail(event.target.value);
  //   } else if (event.target.name === 'password') {
  //     setPassword(event.target.value);
  //   }
  // };

  const nextPage = async () => {
    const emailValid = await fetch(
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
    const emailValidResult = await emailValid.json();

    if (emailValidResult.message === '사용 가능한 이메일 입니다.') {
      setIsEmail(true);
      navigate('/profilesignup', {
        state: {
          email,
          password,
        },
      });
    } else if (emailValidResult.message === '이미 가입된 이메일 주소 입니다.') {
      setIsEmail(false);
      setEmailMessage('이미 가입된 이메일 주소 입니다.');
    } else {
      setIsEmail(false);
      alert('올바른 이메일과 비밀번호를 입력해 주세요.');
    }
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
          onChange={onChangeEmail}
          // validation 에 필요한 속성 (로직 추가후 삭제예정)
          type="email"
          required
        />
        <p className="message">{emailMessage}</p>

        <TextInput
          label="비밀번호"
          id="password"
          placeholder="비밀번호를 설정해 주세요."
          name="password"
          onChange={onChangePassword}
          type="password"
          required
        />
        <p className="message">{passwordMessage}</p>
      </div>

      <Button size="lg" status="disabled" onClick={nextPage}>
        다음
      </Button>
    </StyledSignupPage>
  );

  // console.log(email, password);
}
