import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HeartIcon from '../../assets/icon/icon-heart.svg';
import HeartOnIcon from '../../assets/icon/icon-heart-on.svg';
import MessageIcon from '../../assets/icon/icon-message-small.svg';
import StyledLikeCommentWrapper from './styled';
import useAuthContext from '../../hooks/useAuthContext';

function LikeCommentButton({ postData }) {
  const { auth } = useAuthContext();
  const [isLike, setIsLike] = useState(postData.hearted);
  const [likeCount, setLikeCount] = useState(postData.heartCount);

  const navigate = useNavigate();

  const LikeAPI = useCallback(async () => {
    try {
      const res = await fetch(
        `https://mandarin.api.weniv.co.kr/post/${postData.id}/heart`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${auth.token}`,
            'Content-type': 'application/json',
          },
        }
      );
      const result = await res.json();

      setIsLike((islike) => !islike);
      setLikeCount(result.post.heartCount);
      return result;
    } catch (error) {
      return new Error(error);
    }
  }, [auth.token, postData.id]);

  const DelLikeAPI = useCallback(async () => {
    try {
      const res = await fetch(
        `https://mandarin.api.weniv.co.kr/post/${postData.id}/unheart`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${auth.token}`,
            'Content-type': 'application/json',
          },
        }
      );
      const result = await res.json();

      setIsLike((islike) => !islike);
      setLikeCount(result.post.heartCount);
      return result;
    } catch (error) {
      return new Error(error);
    }
  }, [auth.token, postData.id]);

  const handleClickCount = useCallback(
    (e) => {
      if (e.currentTarget.name === 'like') {
        if (!isLike) {
          LikeAPI();
        } else {
          DelLikeAPI();
        }
      } else {
        navigate(`/post/${postData.id}`);
      }
    },
    [isLike, LikeAPI, DelLikeAPI, postData, navigate]
  );

  return (
    <StyledLikeCommentWrapper>
      <div>
        <button name="like" onClick={handleClickCount}>
          <img src={isLike ? HeartOnIcon : HeartIcon} alt="좋아요버튼이미지" />
        </button>
        <span>{likeCount}</span>
      </div>
      <div>
        <button name="msg" onClick={handleClickCount}>
          <img src={MessageIcon} alt="채팅이미지" />
        </button>
        <span>{postData.commentCount}</span>
      </div>
    </StyledLikeCommentWrapper>
  );
}

export default LikeCommentButton;
