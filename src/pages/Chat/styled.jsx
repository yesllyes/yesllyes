import styled from 'styled-components';
import StyledUserInfo from './../../components/UserInfo/styled';
import { StyledCommentInput } from '../../components/Comment/styled';

export const StyledChatPage = styled.div`
  width: 100%;
  height: 820px;
  border: 0.5px solid ${({ theme }) => theme.colors.ActiveborderColor};
  display: flex;
  flex-direction: column;

  button {
    position: static;
  }
`;

export const StyledChatTxtCont = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: ${({ theme }) => theme.fontSize.medium};
  height: 711px;
  background-color: #f2f2f2;

  .basicProfile {
    width: 42px;
    height: 42px;
    margin: 0 12px 0 16px;
    border: 0.5px solid #dbdbdb;
    border-radius: 50%;
  }
  li:nth-child(2) {
    flex-direction: row-reverse;
    flex-wrap: wrap;
    margin-right: 16px;
    p {
      color: #ffffff;
      background-color: ${({ theme }) => theme.colors.Green};
      border-radius: 10px 10px 0 10px;
    }
    strong {
      margin-top: auto;
      margin-right: 10px;
    }
  }
  li {
    display: flex;
    align-items: center;
    margin-bottom: 9px;
  }
  strong {
    margin-top: auto;
    margin-left: 10px;
    font-size: ${({ theme }) => theme.fontSize.xsmall};
    color: ${({ theme }) => theme.colors.lightGray};
  }
  p {
    padding: 17px 12px;
    width: 240px;
    border: 1px solid #c4c4c4;
    border-radius: 10px 10px 10px 0;
    background-color: #ffffff;
    line-height: 16px;
  }
  .upload-img {
    margin-top: 9px;
    border: 1px solid #c4c4c4;
    border-radius: 10px 10px 0 10px;
  }
`;

export const StyledChatUserInfo = styled(StyledUserInfo)`
  width: 100%;
  margin-top: 20px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;

  &.content::before {
    position: absolute;
    top: 0px;
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.Green};
  }

  li {
    display: flex;
  }

  .chat-user-cont {
    span {
      margin-top: 4px;
    }
  }
  .new-chat {
    width: 12px;
    height: 12px;
    position: relative;
    right: 55px;
    bottom: 15px;
    border-radius: 70%;
    background-color: ${({ theme }) => theme.colors.Green};
  }
  & > span {
    position: absolute;
    margin-top: 10px;
    right: 15px;
  }

  & + & {
    margin-top: 5px;
  }

  .profile-box {
    width: 42px;
    height: 42px;
    border-radius: 70%;
    overflow: hidden;
    border: 0.5px solid #dbdbdb;

    .basic-profile {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  div {
    div > h3 {
      padding-bottom: 5px;
    }

    div > span {
      margin: 0;
    }
  }
`;

export const StyledChatRoomInput = styled(StyledCommentInput)`
  position: absolute;
  bottom: 0;
  border-top: none;
  width: 100%;
  height: 61px;
  border-top: 0.5px solid #dbdbdb;
  display: flex;
  vertical-align: center;
  justify-content: space-between;

  img {
    width: 36px;
    height: 36px;
  }

  input {
    border: none;
    line-height: 14px;
    font-size: ${({ theme }) => theme.fontSize.medium};

    ::placeholder {
      font-size: ${({ theme }) => theme.fontSize.small};
      color: #c4c4c4;
    }
  }
`;
