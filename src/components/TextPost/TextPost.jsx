import React from 'react';

import { StyledTextPost, StyledHeartChat, StyledPostMessage } from './styled';

import HeartIcon from '../../assets/icon/icon-heart.svg';
import MessageIcon from '../../assets/icon/icon-message-small.svg';
import MoreVertical from '../../assets/icon/icon-more-vertical-small.svg';

import UserInfo from '../UserInfo/UserInfo';
import UserPost from '../UserPost/UserPost';

const TextPost = ({ postData }) => {
  const date = new Date(postData.createdAt);
  const changeDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일
  `;

  return (
    <>
      <StyledTextPost>
        <UserPost>
          <UserInfo user={postData.author} />
          <img src={MoreVertical} alt="" />
        </UserPost>

        <StyledPostMessage>
          <p>{postData.content}</p>

          <StyledHeartChat>
            <div>
              <img src={HeartIcon} alt="" />
              <span>{postData.heartCount}</span>
            </div>
            <div>
              <img src={MessageIcon} alt="" />
              <span>{postData.commentCount}</span>
            </div>
          </StyledHeartChat>
          <span>{changeDate}</span>
        </StyledPostMessage>
      </StyledTextPost>
    </>
  );
};

export default TextPost;
