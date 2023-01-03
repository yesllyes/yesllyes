import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthContext from '../../../hooks/useAuthContext';

import PostAlert from '../Alert/PostAlert';

const BASEURL = 'https://mandarin.api.weniv.co.kr';

function PostModal({ postData }) {
  const { auth } = useAuthContext();
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const handleOpenAlert = () => {
    setIsOpenAlert(true);
  };
  const handleCloseAlert = () => {
    setIsOpenAlert(false);
  };

  const handlePostDeclaration = () => {
    postDeclaration();
  };

  const postDeclaration = async () => {
    const PostDeclarationReq = await fetch(
      `${BASEURL}/post/${postData.id}/report`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${auth.token}`,
          'Content-type': 'application/json',
        },
      }
    );
    const result = await PostDeclarationReq.json();

    if (result.report) {
      alert(`게시물 id:${result.report.post}가 신고되었습니다.`);
    } else {
      alert(result.message);
    }
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

      <li>
        <button onClick={handlePostDeclaration}>게시글 신고</button>
      </li>
      {isOpenAlert && (
        <PostAlert handleCloseAlert={handleCloseAlert} postId={postData.id} />
      )}
    </>
  );
}

export default PostModal;
