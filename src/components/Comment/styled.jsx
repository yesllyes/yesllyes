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
    border-radius: 50%;
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
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 16px;

  .comment-info {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    margin-bottom: 5px;
  }
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
    cursor: pointer;
    object-fit: cover;
  }

  .user-name {
    display: flex;
    align-items: center;
    align-self: flex-start;
    margin-top: 12px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.medium};
    line-height: 18px;
    cursor: pointer;
  }

  .comment-time {
    margin-left: 6px;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.xsmall};
    line-height: 13px;
    color: ${({ theme }) => theme.colors.lightGray};
  }

  .moreBtn {
    margin-left: auto;
    width: 24px;
    height: 24px;
  }

  .comment-cont {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.medium};
    line-height: 17px;
  }
`;

export const StyledCommentli = styled.li`
  button {
    flex-grow: 1;
    text-align: right;
  }
`;

export const Scrollwrap = styled.div`
  border-top: 0.5px solid #dbdbdb;
  margin-bottom: 61px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: rgb(236, 236, 236);
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    border-radius: 10px;
  }
`;
