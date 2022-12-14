import styled from 'styled-components';

export const StyledTextPost = styled.section`
  width: 358px;
  margin: 0 auto;

  span {
    font-size: ${({ theme }) => theme.fontSize.xsmall};
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const StyledPostMessage = styled.section`
  padding-left: 54px;
  p {
    margin-top: 16px;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

export const StyledHeartChat = styled.div`
  display: flex;
  gap: 18px;
  margin: 16px 0;

  color: ${({ theme }) => theme.colors.lightGray};

  div {
    img {
      vertical-align: middle;
      margin-right: 8px;
    }
    span {
      font-size: ${({ theme }) => theme.fontSize.small};
    }
  }
`;
