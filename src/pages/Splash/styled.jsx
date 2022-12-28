import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
0% {opacity: 0;} 
100%{opacity:1;}
`;

const StyledSplashPage = styled.main`
  height: 820px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  font-size: 35px;
  font-family: 'HambakSnow';

  .main-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-logo img {
    margin-top: 254px;
    width: 144px;
    height: 144px;
  }
  .main-logo,
  .main-logo img {
    animation: ${fadeInOut} 1s ease-out forwards;
  }
`;

export default StyledSplashPage;
