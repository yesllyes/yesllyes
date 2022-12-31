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
  position: relative;
  box-sizing: border-box;
  border-bottom: 0.5px solid #dbdbdb;

  & > span {
    position: absolute;
    margin-top: 10px;
    right: 15px;
  }

  & + & {
    margin-top: 5px;
  }

  .basic-profile {
    width: 35px;
    height: 35px;
    padding: 2px;
    border-radius: 50%;
    border: 0.5px solid #dbdbdb;
    margin-right: 5px;
  }

  div {
    /* display: flex;
    justify-content: space-between; */
    margin: auto 0;

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
