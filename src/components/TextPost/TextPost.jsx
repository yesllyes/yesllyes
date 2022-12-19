import React from 'react';

import { StyledTextPost, StyledHeartChat, StyledPostMessage } from './styled';

import HeartIcon from '../../assets/icon/icon-heart.svg';
import MessageIcon from '../../assets/icon/icon-message-small.svg';
import MoreVertical from '../../assets/icon/icon-more-vertical-small.svg';

import UserInfo from '../User/UserInfo';
import UserPost from '../UserPost/UserPost';

const TextPost = () => (
  <>
    <StyledTextPost>
      <UserPost>
        <UserInfo />
        <img src={MoreVertical} alt="" />
      </UserPost>

      <StyledPostMessage>
        <p>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.
        </p>
        <StyledHeartChat>
          <div>
            <img src={HeartIcon} alt="" />
            <span>58</span>
          </div>
          <div>
            <img src={MessageIcon} alt="" />
            <span>12</span>
          </div>
        </StyledHeartChat>

        <span>2020년 10월 21일</span>
      </StyledPostMessage>
    </StyledTextPost>
  </>
);

export default TextPost;
