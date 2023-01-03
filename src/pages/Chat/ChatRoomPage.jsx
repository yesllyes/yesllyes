import React from 'react';
import { StyledChatPage, StyledChatRoomInput } from './styled';
import { TopChatNav } from '../../components/Navbar/TopNavbar';

import Button from '../../components/Button/Button';

import uploadImg from '../../assets/icon/icon-img-button-gray.svg';

export default function ChatRoomPage() {
  return (
    <StyledChatPage>
      <TopChatNav value="Chat" />
      <StyledChatRoomInput>
        <img src={uploadImg} alt="" />
        <input type="text" placeholder="메시지 입력하기..." />
        <Button size="xsm" disabled>
          전송
        </Button>
      </StyledChatRoomInput>
    </StyledChatPage>
  );
}
