import styled from 'styled-components';
import kakaoIcon from '../../assets/icon/icon-message-yellow.svg';
import googleIcon from '../../assets/icon/icon-Google.svg';
import facebookIcon from '../../assets/icon/icon-facebook.svg';

const StyledIntroLoginPage = styled.main`
  height: 820px;
  color: ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.lightGreen};
  position: relative;

  h1 img {
    position: absolute;
    margin: auto;
    top: 180px;
    left: 123px;
  }

  .login-join-section {
    width: 100%;
    position: absolute;
    bottom: 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 63px 34px 84px;
    background-color: #ffffff;
  }

  .sns-login {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  .sns-login-li img {
    width: 18px;
    height: 18px;
  }

  .sns-login-li {
    display: flex;
    justify-content: center;
  }

  .sns-login-li button {
    cursor: pointer;
  }

  .sns-login-li button::before {
    content: '';
  }

  .kakao-login {
    border: 1px solid #f2c94c;
    border-radius: 44px;
    width: 322px;
    height: 44px;
    margin-bottom: 10px;
    background: url(${kakaoIcon}) no-repeat;
    background-position: 10px 8px;
  }

  .google-login {
    border: 1px solid #767676;
    border-radius: 44px;
    width: 322px;
    height: 44px;
    margin-bottom: 10px;
    background: url(${googleIcon}) no-repeat;
    background-position: 10px 8px;
  }

  .facebook-login {
    border: 1px solid #2d9cdb;
    border-radius: 44px;
    width: 322px;
    height: 44px;
    margin-bottom: 20px;
    background: url(${facebookIcon}) no-repeat;
    background-position: 10px 8px;
  }

  .login-join-cont {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSize.small};
  }

  .emailLogin::after {
    content: '|';
    width: 1px;
    margin: 0 12px;
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export default StyledIntroLoginPage;
