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
