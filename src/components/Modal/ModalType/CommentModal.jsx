import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuthContext from '../../../hooks/useAuthContext';
import CommentAlert from '../Alert/CommentAlert';

const BASEURL = 'https://mandarin.api.weniv.co.kr';

function CommentModal({ comment, updateCommentData }) {
  const { auth } = useAuthContext();
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const postId = useParams().postId;

  const handleOpenAlert = () => {
    setIsOpenAlert(true);
  };
  const handleCloseAlert = () => {
    setIsOpenAlert(false);
  };
  const handleCommentDeclartion = () => {
    commentDeclaration();
  };

  const commentDeclaration = async () => {
    const CommentDeclarationReq = await fetch(
      `${BASEURL}/post/${postId}/comments/${comment.id}/report`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${auth.token}`,
          'Content-type': 'application/json',
        },
      }
    );
    const result = await CommentDeclarationReq.json();

    if (result.report) {
      alert(`댓글 id:${result.report.comment}가 신고되었습니다.`);
    } else {
      alert(result.message);
    }
  };

  return (
    <>
      {auth.accountName === comment.author.accountname ? (
        <li>
          <button onClick={handleOpenAlert}>댓글 삭제</button>
        </li>
      ) : null}

      <li>
        <button onClick={handleCommentDeclartion}>댓글 신고</button>
      </li>
      {isOpenAlert && (
        <CommentAlert
          handleCloseAlert={handleCloseAlert}
          commentId={comment.id}
          updateCommentData={updateCommentData}
          postId={postId}
        />
      )}
    </>
  );
}

export default CommentModal;
