import React from 'react';
// import styled from 'styled-components';
import StyledTopBasicNav from './styled';
import iconArrowLeft from '../../assets/icon/icon-arrow-left.svg';
import iconMoreVerticalLarge from '../../assets/icon/icon-more-vertical-large.svg';
import iconSearch from '../../assets/icon/icon-search.svg';
import Button from '../Button/Button';

const TopBasicNav = (props) => (
  <StyledTopBasicNav>
    <img src={iconArrowLeft} alt="뒤로가기" />
    <span>{props.value}</span>
    {props.value ? <div></div> : <img src={iconMoreVerticalLarge} alt="메뉴" />}
  </StyledTopBasicNav>
);

const TopSearchNav = ({ onChange, value }) => (
  <StyledTopBasicNav>
    <img src={iconArrowLeft} alt="뒤로가기" />
    <input
      type="text"
      placeholder="계정 검색"
      onChange={onChange}
      value={value}
    />
  </StyledTopBasicNav>
);

const goSearch = () => {
  window.location.href = '/search';
};

const TopMainNav = (props) => (
  <StyledTopBasicNav>
    <span>{props.value}</span>
    <img src={iconSearch} alt="검색" onClick={goSearch} />
  </StyledTopBasicNav>
);

const TopUploadNav = (props) => (
  <StyledTopBasicNav>
    <img src={iconArrowLeft} alt="뒤로가기" />
    <Button size="sm">{props.value}</Button>
  </StyledTopBasicNav>
);

export { TopBasicNav, TopSearchNav, TopMainNav, TopUploadNav };
