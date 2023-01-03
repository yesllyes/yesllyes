import styled from 'styled-components';

const StyledLoginPage = styled.section`
  width: 100%;
  height: 820px;
  padding: 60px 33px;
  border: 0.5px solid ${({ theme }) => theme.colors.ActiveborderColor};

  h1 {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.xxlarge};
    margin-bottom: 40px;
    text-align: center;
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

  .message {
    color: ${({ theme }) => theme.colors.Orange};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export default StyledLoginPage;
