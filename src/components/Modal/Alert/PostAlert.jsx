import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthContext from '../../../hooks/useAuthContext';
import {
  StyledAlertButtons,
  StyledAlertTextButton,
  StyledWrapper,
} from './styled';

const BASEURL = 'https://mandarin.api.weniv.co.kr';

export default function PostAlert({ handleCloseAlert, postId }) {
  const currentLocation = useLocation();
  const navigate = useNavigate();

  const { auth } = useAuthContext();

  const handleDeletePost = () => {
    postDelete();
  };

  const postDelete = async () => {
    const PostDeleteReq = await fetch(`${BASEURL}/post/${postId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-type': 'application/json',
      },
    });
    const result = await PostDeleteReq.json();

    if (result.message === '삭제되었습니다.') {
      if (currentLocation.pathname === `/post/${postId}`) {
        navigate(`/profile/${auth.accountName}`, { replace: true });
      } else {
        location.reload();
      }
    } else {
      alert(result.message);
    }
  };

  return (
    <StyledWrapper>
      <StyledAlertTextButton>게시글을 삭제할까요?</StyledAlertTextButton>
      <StyledAlertButtons>
        <button onClick={handleCloseAlert}>취소</button>
        <button onClick={handleDeletePost}>삭제</button>
      </StyledAlertButtons>
    </StyledWrapper>
  );
}
