import React from 'react';
import { Link } from 'react-router-dom';

function ChatRoomModal() {
  return (
    <>
      <li>
        <Link to="/chatlist">채팅방 나가기</Link>
      </li>
    </>
  );
}

export default ChatRoomModal;
