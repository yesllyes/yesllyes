import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { StyledTextPost, StyledPostMessage, StyledPostLink } from './styled';

import MoreVertical from '../../assets/icon/icon-more-vertical-small.svg';
import ImageError from '../../assets/image/image-upload-fail.png';

import UserInfo from '../UserInfo/UserInfo';
import UserPost from '../UserPost/UserPost';
import LikeCommentButton from '../LikeCommentButton/LikeCommentButton';
import changeDate from '../../services/changeDate';
import ModalButton from '../Modal/ModalButton';

const TextPost = ({ postData }) => {
  const newDate = changeDate(postData.createdAt);

  const handleImage = useCallback((e) => {
    e.target.src = ImageError;
  }, []);

  return (
    <>
      <StyledTextPost>
        <UserPost>
          <Link to={`/profile/${postData.author.accountname}`}>
            <UserInfo user={postData.author} />
          </Link>
          <ModalButton modalType="PostModal" postData={postData}>
            <img src={MoreVertical} alt="더보기 이미지" />
          </ModalButton>
        </UserPost>
        <StyledPostMessage>
          <StyledPostLink to={`/post/${postData.id}`}>
            <p>{postData.content}</p>
            {postData.image && (
              <img
                src={postData.image}
                alt="게시물 이미지"
                onError={handleImage}
              />
            )}
          </StyledPostLink>
          <LikeCommentButton postData={postData} />
          <span>{newDate}</span>
        </StyledPostMessage>
      </StyledTextPost>
    </>
  );
};

export default TextPost;
