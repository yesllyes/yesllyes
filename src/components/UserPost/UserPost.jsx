import React from 'react';
import StyledUserPost from './styled';

function UserPost(props) {
  return <StyledUserPost>{props.children}</StyledUserPost>;
}

export default UserPost;
