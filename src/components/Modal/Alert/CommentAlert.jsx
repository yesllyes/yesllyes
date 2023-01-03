import React from 'react';

import useAuthContext from '../../../hooks/useAuthContext';
import {
  StyledAlertButtons,
  StyledAlertTextButton,
  StyledWrapper,
} from './styled';

const BASEURL = 'https://mandarin.api.weniv.co.kr';

export default function CommentAlert({
  handleCloseAlert,
  postId,
  commentId,
  updateCommentData,
}) {
  const { auth } = useAuthContext();

  const handleDeleteComment = () => {
    commentDelete();
  };

  const commentDelete = async () => {
    const CommentDeleteReq = await fetch(
      `${BASEURL}/post/${postId}/comments/${commentId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${auth.token}`,
          'Content-type': 'application/json',
        },
      }
    );
    const result = await CommentDeleteReq.json();

    if (result.message === '댓글이 삭제되었습니다.') {
      updateCommentData();
    }
  };

  return (
    <StyledWrapper>
      <StyledAlertTextButton>댓글을 삭제할까요?</StyledAlertTextButton>
      <StyledAlertButtons>
        <button onClick={handleCloseAlert}>취소</button>
        <button onClick={handleDeleteComment}>삭제</button>
      </StyledAlertButtons>
    </StyledWrapper>
  );
}
