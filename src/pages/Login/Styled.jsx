import styled from 'styled-components';

const StyledLoginSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 35px;

  h1 {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.xxlarge};
    margin-bottom: 40px;
  }

  .div-input {
    width: 320px;
    label {
      display: block;
      font-size: ${({ theme }) => theme.fontSize.small};
      color: ${({ theme }) => theme.colors.lightGray};
      margin-bottom: 10px;
    }
    input {
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.activeBorderColor};
      background-color: transparent;
      width: 100%;
      font-size: ${({ theme }) => theme.fontSize.medium};
      line-height: 14px;
      padding-bottom: 5px;
    }
    input:focus {
      outline: none;
    }
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px white inset;
      box-shadow: 0 0 0 1000px white inset;
      font-family: inherit;
    }
    input::placeholder {
      color: ${({ theme }) => theme.colors.activeBorderColor};
      font-size: ${({ theme }) => theme.fontSize.medium};
    }
  }
  .div-submit {
    width: 320px;
    text-align: center;
    button {
      margin: 20px 0px;
    }
    a {
      font-size: ${({ theme }) => theme.fontSize.small};
      color: ${({ theme }) => theme.colors.lightGray};
    }
  }

  div + div {
    padding-top: 20px;
  }
`;

export default StyledLoginSection;
import styled from 'styled-components';
import kakaoIcon from '../../assets/icon/icon-message-yellow.svg';
import googleIcon from '../../assets/icon/icon-Google.svg';
import facebookIcon from '../../assets/icon/icon-facebook.svg';

const StyledLoginPage = styled.main`
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

export default StyledLoginPage;
