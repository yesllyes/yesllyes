import React from 'react';
import iconBasicProfileSmall from '../../assets/icon/icon-basic-profile-small.svg';
import StyledComment from './Styled';

const Comment = () => (
  <StyledComment>
    <img src={iconBasicProfileSmall} alt="" />
    <input type="text" placeholder="댓글 입력하기.." required />
    <button type="button">게시</button>
  </StyledComment>
);

export default Comment;
