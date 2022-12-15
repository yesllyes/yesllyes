import React from 'react';
import { TopSearchNav } from '../../components/navbar/Top-navbar';
import TapMenu from '../../components/tabMenu/TabMenu';
import StyledSearch from './styled';

const SearchPage = () => (
  <StyledSearch>
    <TopSearchNav></TopSearchNav>
    <TapMenu></TapMenu>
  </StyledSearch>
);

export default SearchPage;
