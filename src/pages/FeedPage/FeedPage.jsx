import React from 'react'
import  TapMenu  from '../../components/tabMenu/TabMenu'
import LogoGray from '../../assets/image/full-logo-gray.svg'
import StyledFeedPage from './Styled'
import { TopMainNav } from '../../components/navbar/Top-navbar'
import Button from '../../components/button/Button'

const FeedPage = () => (
    <StyledFeedPage>
    <TopMainNav value="초록초록 피드"></TopMainNav>
    <main>
        <img src={LogoGray} alt="회색이미지" />
        <p>유저를 검색해 팔로우 해보세요!</p>
        <Button size = 'md'>검색하기</Button>
    </main>
    <TapMenu></TapMenu>
    </StyledFeedPage>
);


export default FeedPage;
