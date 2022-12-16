import styled from 'styled-components';

const StyledInput = styled.div`
  margin: 16px 0;
  label {
    display: block;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.lightGray};
  }

  input {
    width: 100%;
    border: none;
    margin-top: 10px;
    background-color: transparent;
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
  }
`;

export default StyledInput;
