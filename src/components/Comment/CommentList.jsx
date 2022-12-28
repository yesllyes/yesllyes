import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledCommentList } from './styled';
import { StyledPostMessage } from '../TextPost/styled';
import StyledUserInfo from './../UserInfo/styled';
import useAuthContext from '../../hooks/useAuthContext';
import MoreVertical from '../../assets/icon/icon-more-vertical-small.svg';

export default function CommentList() {
  const { postId } = useParams();
  const { auth } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    if (auth.accountName) {
      fetch(`https://mandarin.api.weniv.co.kr/post/${postId}/comments`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${auth.token}`,
          'Content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setCommentData(res.comments);
          setLoading(false);
        })
        .catch((e) => e);
    }
  }, [auth]);

  return (
    <StyledCommentList>
      <li>
        {loading && <div>loading!!!</div>}
        {!loading && commentData !== undefined ? (
          commentData.map((comment) => (
            <>
              <StyledUserInfo>
                <strong>{comment.author.username}</strong>
                <img
                  src={comment.author.image}
                  className="basic-profile"
                  alt=""
                />
                <img
                  src={MoreVertical}
                  alt=""
                  // onClick={삭제, 신고모달 토글}
                />
              </StyledUserInfo>
              <StyledPostMessage key={comment.id}>
                {comment.content}
              </StyledPostMessage>
            </>
          ))
        ) : (
          <div>loading!!!</div>
        )}
        <span>댓글단시간</span>
      </li>
    </StyledCommentList>
  );
}
