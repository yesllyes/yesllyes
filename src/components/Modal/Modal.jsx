import React from 'react';

import ModalPortal from './ModalPortal';
import ChatRoomModal from './ModalType/ChatRoomModal';
import CommentModal from './ModalType/CommentModal';
import PostModal from './ModalType/PostModal';
import UserModal from './ModalType/UserModal';
import { StyledBox, StyledModal, StyledModalList } from './styled';

export default function Modal({ handleCloseModal, modalType, postData }) {
  const chooseModal = () => {
    switch (modalType) {
      case 'UserModal':
        return <UserModal />;
      case 'ChatRoomModal':
        return <ChatRoomModal />;
      case 'CommentModal':
        return <CommentModal />;
      case 'PostModal':
        return <PostModal postData={postData} />;
      default:
        return <>잘못된 모달창입니다.</>;
    }
  };

  return (
    <ModalPortal handleCloseModal={handleCloseModal}>
      <StyledModal>
        <StyledBox />
        <StyledModalList>{chooseModal()}</StyledModalList>
      </StyledModal>
    </ModalPortal>
  );
}
