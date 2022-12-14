import React from 'react'
import { TopSearchNav } from "../../components/navbar/Top-navbar";
import  TapMenu from '../../components/tabMenu/TabMenu'
import StyledSearch from './Styled';

const Search = () => (
    <StyledSearch>
        <TopSearchNav></TopSearchNav>
        <TapMenu></TapMenu>
    </StyledSearch>
    );

export default Search;