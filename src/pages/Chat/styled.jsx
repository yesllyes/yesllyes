import styled from 'styled-components';
import StyledUserInfo from './../../components/UserInfo/styled';
import { StyledCommentInput } from '../../components/Comment/styled';

export const StyledChatPage = styled.div`
  width: 100%;
  height: 820px;
  border: 0.5px solid #dbdbdb;
  display: flex;
  flex-direction: column;
`;

export const StyledChatUserInfo = styled(StyledUserInfo)`
  width: 100%;
  margin-top: 10px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  /* text-decoration: none; */
  position: relative;
  box-sizing: border-box;

  .chat-user-cont {
    span {
      margin-top: 4px;
    }
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
  width: 389px;
  position: absolute;
  bottom: 0;
  padding: 0;
  margin: 0;
  border-top: none;
`;
