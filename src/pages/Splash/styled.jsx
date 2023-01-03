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

  h1 {
    text-shadow: 2px 2px 4px #5f5f5fbe;
  }

  .main-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .main-logo img {
    margin-top: 254px;
    width: 144px;
    height: 144px;
    filter: drop-shadow(2px 2px 4px #5f5f5fbe);
  }
  .main-logo,
  .main-logo img {
    animation: ${fadeInOut} 1s ease-out forwards;
  }
`;

export default StyledSplashPage;
