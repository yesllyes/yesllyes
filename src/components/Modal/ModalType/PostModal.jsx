import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthContext from '../../../hooks/useAuthContext';

import PostAlert from '../Alert/PostAlert';

function PostModal({ postData }) {
  const { auth } = useAuthContext();
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const handleOpenAlert = () => {
    setIsOpenAlert(true);
  };
  const handleCloseAlert = () => {
    setIsOpenAlert(false);
  };

  return (
    <>
      {auth.accountName === postData.author.accountname ? (
        <>
          <li>
            <Link
              to={`/post/${postData.id}/postedit`}
              state={{ content: postData.content, image: postData.image }}
            >
              게시글 수정
            </Link>
          </li>
          <li>
            <button onClick={handleOpenAlert}>게시글 삭제</button>
          </li>
        </>
      ) : null}

      <li>게시글 신고</li>
      {isOpenAlert && (
        <PostAlert handleCloseAlert={handleCloseAlert} postId={postData.id} />
      )}
    </>
  );
}

export default PostModal;
