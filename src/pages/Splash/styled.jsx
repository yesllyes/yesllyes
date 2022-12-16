import styled from 'styled-components';

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
`;

export default StyledSplashPage;
