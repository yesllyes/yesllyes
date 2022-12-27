import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

export const StyledPostLink = styled(Link)`
  padding-left: 54px;
  box-sizing: border-box;
  p {
    margin-top: 16px;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
  & > img {
    width: 304px;
    height: 228px;
    padding: 15px 0px;
    margin-left: -54px;
    object-fit: cover;
    display: inline-block;
    text-align: left;
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
