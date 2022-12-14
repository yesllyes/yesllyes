import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import iconBasicProfileSmall from '../../assets/icon/icon-basic-profile-small.svg';
import { StyledCommentInput } from './styled';
import Button from '../Button/Button';
import useAuthContext from './../../hooks/useAuthContext';

export default function CommentInput({ updateCommentData }) {
  const { postId } = useParams();
  const { auth } = useAuthContext();
  const [commentValue, setCommentValue] = useState('');

  const handleCommentChange = (event) => {
    setCommentValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (auth.accountName) {
      fetch(`https://mandarin.api.weniv.co.kr/post/${postId}/comments`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${auth.token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          comment: {
            content: commentValue,
          },
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setCommentValue('');
          updateCommentData();
          console.log(res);
        })
        .catch((e) => e);
    }
  };

  return (
    <StyledCommentInput>
      <img src={auth.image} alt="" />
      <input
        type="text"
        placeholder="댓글 입력하기..."
        value={commentValue}
        onChange={handleCommentChange}
        required
      />
      <Button size="xsm" disabled={!commentValue} onClick={onSubmit}>
        게시
      </Button>
    </StyledCommentInput>
  );
}
