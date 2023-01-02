import React, { useRef } from 'react';
import reactDom from 'react-dom';
import { StyledBackGround } from './styled';

const ModalPortal = ({ children, handleCloseModal }) => {
  const modal = document.getElementById('modal');

  const modalOuterRef = useRef();
  const handleClickClose = (e) => {
    if (e.target === modalOuterRef.current) {
      handleCloseModal();
    }
  };

  return reactDom.createPortal(
    <StyledBackGround ref={modalOuterRef} onClick={handleClickClose}>
      {children}
    </StyledBackGround>,
    modal
  );
};

export default ModalPortal;
