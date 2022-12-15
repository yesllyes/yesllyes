import React from 'react';
import fullLogo from '../../assets/image/full-logo-shadow.svg';
import StyledSplashPage from './Styled';

const SplashPage = () => (
  <StyledSplashPage>
    <h1 className="main-logo">
      <img src={fullLogo} alt="fullLogoShadow" />
      초록초록 예쁜 지구
    </h1>
  </StyledSplashPage>
);

export default SplashPage;
