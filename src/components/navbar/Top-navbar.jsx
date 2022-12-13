import React from 'react';
// import styled from 'styled-components';
import StyledTopBasicNav from './Styled';
import iconArrowLeft from '../../assets/icon/icon-arrow-left.svg';
import iconMoreVerticalLarge from '../../assets/icon/icon-more-vertical-large.svg';
import iconSearch from '../../assets/icon/icon-search.svg';

const TopBasicNav = (props) => (
  <StyledTopBasicNav>
    <img src={iconArrowLeft} alt="뒤로가기" />
    <span>{props.value}</span>
    <img src={iconMoreVerticalLarge} alt="메뉴" />
  </StyledTopBasicNav>
);

const TopSearchNav = () => (
  <StyledTopBasicNav>
    <img src={iconArrowLeft} alt="뒤로가기" />
    <input type="text" placeholder="계정 검색" />
  </StyledTopBasicNav>
);

const TopMainNav = (props) => (
  <StyledTopBasicNav>
    <span>{props.value}</span>
    <img src={iconSearch} alt="검색" />
  </StyledTopBasicNav>
);

const TopUploadNav = () => (
  <StyledTopBasicNav>
    <img src={iconArrowLeft} alt="뒤로가기" />
    <button type="button">저장</button>
  </StyledTopBasicNav>
);

export { TopBasicNav, TopSearchNav, TopMainNav, TopUploadNav };
