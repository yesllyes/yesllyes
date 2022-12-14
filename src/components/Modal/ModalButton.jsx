import React, { useState } from 'react';
import Modal from '../Modal/Modal';

export default function ModalButton({
  children,
  modalType,
  postData,
  campaign,
  comment,
  updateCommentData,
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <button onClick={handleOpenModal}>{children}</button>
      {isOpenModal && (
        <Modal
          handleCloseModal={handleCloseModal}
          modalType={modalType}
          postData={postData}
          campaign={campaign}
          comment={comment}
          updateCommentData={updateCommentData}
        >
          {children}
        </Modal>
      )}
    </>
  );
}
