import React from 'react';
import iconBasicProfileSmall from '../../assets/icon/icon-basic-profile-small.svg';
import StyledComment from './styled';
import Button from '../Button/Button';

const CommentInput = () => (
  <StyledComment>
    <img src={iconBasicProfileSmall} alt="" />
    <input type="text" placeholder="댓글 입력하기..." required />
    <Button size="xsm" disabled>
      게시
    </Button>
  </StyledComment>
);

export default CommentInput;
