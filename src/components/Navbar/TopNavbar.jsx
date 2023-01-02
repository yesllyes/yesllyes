import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledTopBasicNav from './styled';
import iconArrowLeft from '../../assets/icon/icon-arrow-left.svg';
import iconMoreVerticalLarge from '../../assets/icon/icon-more-vertical-large.svg';
import iconSearch from '../../assets/icon/icon-search.svg';
import Button from '../Button/Button';
import ModalButton from '../Modal/ModalButton';

export function TopBasicNav(props) {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <StyledTopBasicNav>
      <img src={iconArrowLeft} alt="뒤로가기" onClick={handleGoBack} />
      <span>{props.value}</span>
      {props.value ? (
        <div></div>
      ) : (
        <ModalButton modalType={'UserModal'}>
          <img src={iconMoreVerticalLarge} alt="메뉴" />
        </ModalButton>
      )}
    </StyledTopBasicNav>
  );
}

export function TopSearchNav({ onChange, value }) {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <StyledTopBasicNav>
      <img src={iconArrowLeft} alt="뒤로가기" onClick={handleGoBack} />
      <input
        type="text"
        placeholder="계정 검색"
        onChange={onChange}
        value={value}
      />
    </StyledTopBasicNav>
  );
}

export function TopMainNav(props) {
  const goSearch = () => {
    window.location.href = '/search';
  };

  return (
    <StyledTopBasicNav>
      <span>{props.value}</span>
      <img src={iconSearch} alt="검색" onClick={goSearch} />
    </StyledTopBasicNav>
  );
}

export function TopUploadNav(props) {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <StyledTopBasicNav>
      <img src={iconArrowLeft} alt="뒤로가기" onClick={handleGoBack} />
      <Button size="sm" disabled={props.disabled} onClick={props.onClick}>
        {props.value}
      </Button>
    </StyledTopBasicNav>
  );
}
