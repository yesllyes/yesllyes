import styled from 'styled-components';

const StyledInput = styled.div`
  margin: 16px 0;
  label {
    display: block;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: #767676;
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
    }

    :focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.Green};
    }
  }
`;

export default StyledInput;
