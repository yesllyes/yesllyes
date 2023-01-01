import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledNotFoundPage from './styled';
// import notfoundpageshadow from '../../assets/image/404page-shadow.svg';
import notfoundpage from '../../assets/image/404page.svg';
import Button from '../../components/Button/Button';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <StyledNotFoundPage>
      <img src={notfoundpage} alt="" />
      <p>페이지를 찾을 수 없습니다. :&#40;</p>
      <Button size="md" onClick={handleGoBack}>
        이전 페이지
      </Button>
    </StyledNotFoundPage>
  );
}
