import React from 'react';
import fullLogo from '../../assets/image/full-logo.svg';
import StyledSplashPage from './styled';

const SplashPage = () => (
  <StyledSplashPage>
    <h1 className="main-logo">
      <img src={fullLogo} alt="fullLogo" />
      버드나다
    </h1>
  </StyledSplashPage>
);

export default SplashPage;
