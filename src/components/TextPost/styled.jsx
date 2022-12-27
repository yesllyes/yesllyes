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
`;

export const StyledPostLink = styled(Link)`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-top: 16px;
  p {
    margin-top: 16px;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
  & > img {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    font-weight: 700;
    width: 100%;
    height: 228px;
    object-fit: cover;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 4px;
  }
`;
