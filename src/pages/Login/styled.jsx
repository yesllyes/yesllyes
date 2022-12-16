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

  .div-input {
    width: 320px;
    label {
      margin-bottom: 10px;
    }
    input {
      line-height: 14px;
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

export default StyledLoginPage;
