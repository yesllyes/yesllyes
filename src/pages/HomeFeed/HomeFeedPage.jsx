import React, { useState, useEffect } from 'react';
import TapMenu from '../../components/TabMenu/TabMenu';
import LogoGray from '../../assets/image/full-logo-gray.svg';
import { StyledHomeFeedPage, TabMenuWrap } from './styled';
import { TopMainNav } from '../../components/Navbar/TopNavbar';
import Button from '../../components/Button/Button';
import useAuthContext from '../../hooks/useAuthContext';
import TextPost from '../../components/TextPost/TextPost';

function HomeFeedPage() {
  const { auth } = useAuthContext();
  const [UserFeed, setUserFeed] = useState([]);

  const goSearch = () => {
    window.location.href = '/search';
  };

  useEffect(() => {
    async function getUserFeed() {
      await fetch('https://mandarin.api.weniv.co.kr/post/feed', {
        headers: {
          Authorization: `Bearer ${auth.token}`,
          'Content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setUserFeed(res.posts || []);
        });
    }
    getUserFeed();
  }, [auth]);
  return (
    <StyledHomeFeedPage>
      <header>
        <TopMainNav value="초록초록 피드"></TopMainNav>
      </header>
      {UserFeed.length !== 0 ? (
        <main>
          {UserFeed.map((post, id) => (
            <div key={id}>
              <TextPost postData={post} />
            </div>
          ))}
        </main>
      ) : (
        <main>
          <img src={LogoGray} alt="회색이미지" />
          <span>유저를 검색해 팔로우 해보세요!</span>
          <Button size="md" onClick={goSearch}>
            검색하기
          </Button>
        </main>
      )}
      <TabMenuWrap>
        <TapMenu />
      </TabMenuWrap>
    </StyledHomeFeedPage>
  );
}

export default HomeFeedPage;
