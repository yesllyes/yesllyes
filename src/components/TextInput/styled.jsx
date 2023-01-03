import styled from 'styled-components';

const StyledInput = styled.div`
  width: 320px;
  margin: 16px 0;

  & + & {
    margin-top: 20px;
  }

  label {
    display: block;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.lightGray};
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    border: none;
    background-color: transparent;
    line-height: 14px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    border-bottom: 1px solid ${({ theme }) => theme.colors.activeBorderColor};
    padding-bottom: 8px;

    ::placeholder {
      font-size: ${({ theme }) => theme.fontSize.medium};
      color: ${({ theme }) => theme.colors.activeBorderColor};
    }

    :focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.Green};
    }

    :-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px white inset;
      box-shadow: 0 0 0 1000px white inset;
      font-family: inherit;
    }

    /* 이메일 회원가입에서 인풋창 포커싱 하면 border색상이 오류 색상이 됨  */
    /* &.error {
      border-color: ${({ theme }) => theme.colors.Orange};
    } */
  }
`;

export default StyledInput;
