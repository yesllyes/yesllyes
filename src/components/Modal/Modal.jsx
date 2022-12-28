import React from 'react';
import { Link } from 'react-router-dom';
import StyledModal from './styled';

function UserModal(props) {
  return (
    <StyledModal>
      <ul>
        <li>
          <Link to="/myprofile">설정 및 개인정보</Link>
        </li>
        <li>로그아웃</li>
      </ul>
    </StyledModal>
  );
}

const ChatRoomModal = () => {
  <StyledModal>
    <ul>
      <li>
        <Link to="/chatlist">채팅방 나가기</Link>
      </li>
    </ul>
  </StyledModal>;
};

const CommentModal = () => {
  <StyledModal>
    <ul>
      <li>댓글 삭제</li>
      <li>댓글 신고</li>
    </ul>
  </StyledModal>;
};

const PostModal = () => {
  <StyledModal>
    <ul>
      <li>게시글 수정</li>
      <li>게시글 삭제</li>
      <li>게시글 신고</li>
    </ul>
  </StyledModal>;
};

export { UserModal, ChatRoomModal, CommentModal, PostModal };
