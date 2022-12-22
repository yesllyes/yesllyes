import styled from 'styled-components';

const StyledLoginPage = styled.section`
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

  div {
    text-align: center;
    label {
      text-align: left;
    }
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.lightGray};
  }

  p {
    width: 320px;
    height: 10px;
  }
`;

export default StyledLoginPage;
