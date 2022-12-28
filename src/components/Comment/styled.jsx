import styled from 'styled-components';

export const StyledCommentInput = styled.section`
  width: 100%;
  height: 61px;
  border-top: 0.5px solid #dbdbdb;
  display: flex;
  vertical-align: center;
  justify-content: space-between;
  padding: 16px 13px;
  position: relative;

  img {
    width: 36px;
    height: 36px;
    position: absolute;
    top: 13px;
    left: 16px;
  }

  input {
    width: 280px;
    border: none;
    background-color: transparent;
    line-height: 14px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    margin-left: 55px;
    margin-right: 13px;

    ::placeholder {
      font-size: ${({ theme }) => theme.fontSize.small};
      color: #dbdbdb;
    }

    :focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.Green};
    }
  }
`;

export const StyledCommentList = styled.ul`
  width: 100%;
  padding: 16px 20px;

  li {
    width: 358px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    span {
      font-size: ${({ theme }) => theme.fontSize.xsmall};
      color: ${({ theme }) => theme.colors.lightGray};
    }
  }
`;
