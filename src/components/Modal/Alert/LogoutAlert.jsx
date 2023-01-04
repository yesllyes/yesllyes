import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../../../hooks/useAuthContext';
import {
  StyledAlertButtons,
  StyledAlertTextButton,
  StyledWrapper,
} from './styled';

export default function LogoutAlert({ handleCloseAlert }) {
  const { logout } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.clear();
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <StyledWrapper>
      <StyledAlertTextButton>로그아웃하시겠어요?</StyledAlertTextButton>
      <StyledAlertButtons>
        <button onClick={handleCloseAlert}>취소</button>
        <button onClick={handleLogout}>로그아웃</button>
      </StyledAlertButtons>
    </StyledWrapper>
  );
}
