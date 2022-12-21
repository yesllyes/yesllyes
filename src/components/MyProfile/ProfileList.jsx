import React from 'react';
import { ImgProduct, PreProduct, EndProduct } from '../Product/Product';
import { ParticipateWrapper, StyledParticipate } from './styled';

const ParticipationList = () => (
  <ParticipateWrapper>
    <p className="title">참여한 가제 활동</p>
    <StyledParticipate>
      <ImgProduct />
      <PreProduct />
      <EndProduct />
    </StyledParticipate>
  </ParticipateWrapper>
);

export default ParticipationList;
