import React from 'react';
import iconArrowLeft from '../../assets/icon/icon-arrow-left.svg';
import iconMoreVerticalLarge from '../../assets/icon/icon-more-vertical-large.svg';
import StyledTopBasicNav from './Styled';

const TopBasicNav = () => (
  <StyledTopBasicNav>
    <img src={iconArrowLeft} alt="" />
    topBasicNav
    <img src={iconMoreVerticalLarge} alt="" />
  </StyledTopBasicNav>
);

export default TopBasicNav;
