import React from 'react';

import ProductImage from '../../assets/image/홍보1.png';
import ProductImage2 from '../../assets/image/홍보2.png';
import ProductImage3 from '../../assets/image/홍보3.png';

import ProductWrapper from './styled';

const ImgProduct = () => (
  <ProductWrapper>
    <img src={ProductImage} alt="" />
    <p>플라스틱 챌린지</p>
    <p>
      <span>현재 진행 중</span>
    </p>
  </ProductWrapper>
);

const PreProduct = () => (
  <ProductWrapper>
    <img src={ProductImage2} alt="" />
    <p>플로깅 데이</p>
    <p>
      <span>활동 시작 전</span>
    </p>
  </ProductWrapper>
);

const EndProduct = () => (
  <ProductWrapper>
    <img src={ProductImage3} alt="" />
    <p>포스트</p>
    <p>
      <span> 참여 완료</span>
    </p>
  </ProductWrapper>
);

export { ImgProduct, PreProduct, EndProduct };
