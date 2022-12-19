import styled from 'styled-components';

const StyledUserInfo = styled.article`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.medium};
  gap: 12px;
  width: 358px;
  .basic-profile {
    width: 42px;
    height: 42px;
  }

  div {
    margin-top: 10px;
  }

  span {
    display: block;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.lightGray};
    margin-top: 6px;
  }
`;

export default StyledUserInfo;
