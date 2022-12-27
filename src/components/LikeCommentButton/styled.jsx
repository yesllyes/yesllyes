import styled from 'styled-components';

const StyledLikeCommentWrapper = styled.div`
  display: flex;
  gap: 18px;
  margin: 16px 0;

  color: ${({ theme }) => theme.colors.lightGray};

  div {
    button {
      margin-right: 8px;
      > img {
        vertical-align: middle;
        width: 20px;
        height: 20px;
      }
    }
    span {
      font-size: ${({ theme }) => theme.fontSize.small};
    }
  }
`;

export default StyledLikeCommentWrapper;
