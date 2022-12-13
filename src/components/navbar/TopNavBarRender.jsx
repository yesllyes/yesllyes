import React from 'react';
import {
  TopBasicNav,
  TopSearchNav,
  TopMainNav,
  TopUploadNav,
} from './Top-navbar';

export default function TopNavBarRender() {
  return (
    <>
      <TopBasicNav />
      <TopSearchNav />
      <TopMainNav value="감귤마켓 피드" />
      <TopUploadNav />
      <TopBasicNav value="애월읍위니브감귤농장"></TopBasicNav>
    </>
  );
}
