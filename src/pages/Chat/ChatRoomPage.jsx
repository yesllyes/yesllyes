import React from 'react';
import { StyledChatPage, StyledChatRoomInput } from './styled';
import { TopBasicNav } from '../../components/Navbar/TopNavbar';
import CommentInput from './../../components/Comment/CommentInput';

import basicimg from '../../assets/icon/icon-post-album-off.svg';

export default function ChatRoomPage() {
  return (
    <StyledChatPage>
      <TopBasicNav value="멋사칭구1" />
      <StyledChatRoomInput>
        <CommentInput>
          <img src={basicimg} alt="" />
        </CommentInput>
      </StyledChatRoomInput>
    </StyledChatPage>
  );
}
