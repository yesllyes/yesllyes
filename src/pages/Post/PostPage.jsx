import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TopBasicNav } from '../../components/Navbar/TopNavbar';
import CommentInput from '../../components/Comment/CommentInput';
import StyledWrapper from './../../components/Wrapper/StyledWrapper';
import TextPost from './../../components/TextPost/TextPost';
import CommentList from './../../components/Comment/CommentList';
import useAuthContext from '../../hooks/useAuthContext';

export default function PostPage() {
  const BASEURL = 'https://mandarin.api.weniv.co.kr';

  const { postId } = useParams();
  const { auth } = useAuthContext();
  const [postData, setPostData] = useState(null);
  const [commentData, setCommentData] = useState(null);

  const getPostData = useCallback(async () => {
    const getPostReq = await fetch(`${BASEURL}/post/${postId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-type': 'application/json',
      },
    });
    const result = await getPostReq.json();

    setPostData(result.post);
  }, [postId, auth.token]);

  const getCommentData = useCallback(async () => {
    const getCommentReq = await fetch(
      `${BASEURL}/post/${postId}/comments?limit=999`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${auth.token}`,
          'Content-type': 'application/json',
        },
      }
    );

    const result = await getCommentReq.json();

    setCommentData(result.comments);
  }, [postId, auth.token]);

  useEffect(() => {
    getPostData();
    getCommentData();
  }, [getCommentData, getPostData]);

  return (
    <StyledWrapper>
      <TopBasicNav />
      {postData ? (
        <TextPost key={postData._id} postData={postData}></TextPost>
      ) : null}
      <CommentList
        commentData={commentData}
        updateCommentData={getCommentData}
      />
      <CommentInput updateCommentData={getCommentData} />
    </StyledWrapper>
  );
}
