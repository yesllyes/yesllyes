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
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    console.log("시작");
    if (auth.accountName) {
      console.log("조건문 시작");
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
        .catch((e) => e);
    }
  }, [auth, postId]);

  // console.log(postData);

  return (
    <StyledWrapper>
      <TopBasicNav />
      <TextPost postData={postData} />
      <CommentList></CommentList>
      <CommentInput />
    </StyledWrapper>
  );
}
