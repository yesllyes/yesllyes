import { Link } from 'react-router-dom';
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
  margin-bottom: 20px;
`;

export const StyledPostLink = styled(Link)`
  width: 100%;
  margin-top: 16px;
  p {
    margin: 16px 0px;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
  & > img {
    width: 304px;
    height: 228px;
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    font-weight: 700;
    object-fit: cover;
    text-align: center;
    border: 0.5px solid #dbdbdb;
    border-radius: 10px;
  }
`;

export const StyledHeartChat = styled.div`
  display: flex;
  gap: 18px;
  margin: 16px 0;

  color: ${({ theme }) => theme.colors.lightGray};

  div {
    img {
      margin-right: 8px;
    }
    span {
      font-size: ${({ theme }) => theme.fontSize.small};
    }
  }
`;
