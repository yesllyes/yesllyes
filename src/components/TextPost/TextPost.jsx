import React from 'react';

import { StyledTextPost, StyledHeartChat, StyledPostMessage } from './styled';

import HeartIcon from '../../assets/icon/icon-heart.svg';
import MessageIcon from '../../assets/icon/icon-message-small.svg';
import MoreVertical from '../../assets/icon/icon-more-vertical-small.svg';

import UserInfo from '../User/UserInfo';
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
          <p>
            {/* 옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다. */}
            {postData.content}
          </p>
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
