import React from 'react';
import { ImgProduct, PreProduct, EndProduct } from '../Product/Product';
import { StyledParticipateWrapper, StyledParticipate } from './styled';

const ParticipationList = () => (
  <StyledParticipateWrapper>
    <p className="title">참여한 가제 활동</p>
    <StyledParticipate>
      <ImgProduct />
      <PreProduct />
      <EndProduct />
    </StyledParticipate>
  </StyledParticipateWrapper>
);

export default ParticipationList;
