import React from 'react';
import FullLogoShadow from '../../assets/image/full-logo-shadow.svg';
import StyledIntroLoginPage from './Styled';

function IntroLoginPage() {
  return (
    <StyledIntroLoginPage>
      <div>
        <h1>
          <img src={FullLogoShadow} alt="" />
        </h1>
        <section className="login-join-section">
          <ul className="sns-login">
            <li className="sns-login-li">
              <button className="kakao-login"> 카카오톡 계정으로 로그인</button>
            </li>
            <li className="sns-login-li">
              <button className="google-login">구글 계정으로 로그인</button>
            </li>
            <li className="sns-login-li">
              <button className="facebook-login">
                페이스북 계정으로 로그인
              </button>
            </li>
          </ul>
          <ul className="login-join-cont">
            <li>
              <a className="emailLogin" href="/">
                이메일로 로그인
              </a>
            </li>
            <li>
              <a className="join" href="/">
                회원가입
              </a>
            </li>
          </ul>
        </section>
      </div>
    </StyledIntroLoginPage>
  );
}

export default IntroLoginPage;