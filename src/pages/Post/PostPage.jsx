import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TopBasicNav } from '../../components/Navbar/TopNavbar';
import CommentInput from '../../components/Comment/CommentInput';
import StyledWrapper from './../../components/Wrapper/StyledWrapper';
import TextPost from './../../components/TextPost/TextPost';
import CommentList from './../../components/Comment/CommentList';
import useAuthContext from '../../hooks/useAuthContext';

export default function PostPage() {
  const { postId } = useParams();
  const { auth } = useAuthContext();
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://mandarin.api.weniv.co.kr/post/${postId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setPostData(res.post);
        setLoading(false);
      })
      .catch((e) => new Error(e));
  }, [postId, auth]);

  if (loading) {
    <div>Loading중입니다.</div>;
  }

  return (
    <StyledWrapper>
      <TopBasicNav />
      {postData ? (
        <TextPost key={postData._id} postData={postData}></TextPost>
      ) : null}
      <CommentList />
      <CommentInput />
    </StyledWrapper>
  );
}
