import styled from 'styled-components';

const StyledUserInfo = styled.article`
  padding: 0px 16px;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.medium};
  gap: 12px;
  width: 358px;

  .profile-box {
    width: 42px;
    height: 42px;
    border-radius: 70%;
    overflow: hidden;
    border: 1px solid #dbdbdb;
  }
  .basic-profile {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .user-name {
    margin-top: 4px;
  }

  span {
    display: block;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.lightGray};
    margin-top: 2px;
  }
`;

export default StyledUserInfo;
