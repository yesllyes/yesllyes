import React, { useCallback } from 'react';

import { StyledTextPost, StyledPostMessage, StyledPostLink } from './styled';

import MoreVertical from '../../assets/icon/icon-more-vertical-small.svg';

import UserInfo from '../UserInfo/UserInfo';
import UserPost from '../UserPost/UserPost';
import LikeCommentButton from '../LikeCommentButton/LikeCommentButton';
import changeDate from '../../services/changeDate';

const TextPost = ({ postData }) => {
  const newDate = changeDate(postData.createdAt);

  const handlePostModal = useCallback(() => {
    console.log(`게시글 ${postData.id} 게시글 보여주기`);
  }, [postData.id]);

  return (
    <>
      <StyledTextPost>
        <UserPost>
          <UserInfo user={postData.author} />
          <button onClick={handlePostModal}>
            <img src={MoreVertical} alt="더보기 이미지" />
          </button>
        </UserPost>
        <StyledPostMessage>
          <StyledPostLink to={`/post/${postData.id}`}>
            {postData.image && <img src={postData.image} alt="게시물 이미지" />}
            <p>{postData.content}</p>
          </StyledPostLink>
          <LikeCommentButton postData={postData} />
          <span>{newDate}</span>
        </StyledPostMessage>
      </StyledTextPost>
    </>
  );
};

export default TextPost;
