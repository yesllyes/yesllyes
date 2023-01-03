import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TopBasicNav } from '../../components/Navbar/TopNavbar';
import CommentInput from '../../components/Comment/CommentInput';
import TextPost from './../../components/TextPost/TextPost';
import CommentList from './../../components/Comment/CommentList';
import useAuthContext from '../../hooks/useAuthContext';
import {
  StyledPostWrapper,
  StyledPostNav,
  StyledPostText,
  StyledPostCommentInp,
} from './styled';

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
    <StyledPostWrapper>
      <StyledPostNav>
        <TopBasicNav />
      </StyledPostNav>
      <StyledPostText>
        {postData ? (
          <TextPost key={postData._id} postData={postData}></TextPost>
        ) : null}
      </StyledPostText>
      <CommentList
        commentData={commentData}
        updateCommentData={getCommentData}
      />
      <StyledPostCommentInp>
        <CommentInput updateCommentData={getCommentData} />
      </StyledPostCommentInp>
    </StyledPostWrapper>
  );
}
