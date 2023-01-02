import React, { useState } from 'react';

function CommentModal() {
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const handleOpenAlert = () => {
    setIsOpenAlert(true);
  };
  const handleCloseAlert = () => {
    setIsOpenAlert(false);
  };

  return (
    <>
      <ul>
        <li>댓글 삭제</li>
        <li>댓글 신고</li>
      </ul>
    </>
  );
}

export default CommentModal;
