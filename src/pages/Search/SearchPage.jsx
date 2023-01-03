import React, { useEffect, useState } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import { TopSearchNav } from '../../components/Navbar/TopNavbar';
import UserList from '../../components/UserList/UserList';
import StyledSearch from './styled';
import TabMenu from '../../components/TabMenu/TabMenu';

function Search() {
  const { auth } = useAuthContext();
  const [searchList, setSearchList] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    if (keyword) {
      const GetUserInfo = async () => {
        try {
          const response = await fetch(
            'https://mandarin.api.weniv.co.kr' +
              `/user/searchuser/?keyword=${keyword}`,
            {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${auth.token}`,
                'Content-type': 'application/json',
              },
            }
          );
          const result = await response.json();

          console.log(result);

          setSearchList(result);
        } catch (err) {
          console.log(err);
        }
      };

      console.log('as');
      GetUserInfo();
    }
  }, [keyword]);

  useEffect(() => {
    const loading = setTimeout(() => {
      if (keyword !== '' && !keyword.startsWith(' ')) {
        Search();
      }
    }, 1000);

    return () => {
      clearTimeout(loading);
    };
  }, [keyword]);

  return (
    <StyledSearch>
      <h2 className="ir">사용자 검색</h2>
      <TopSearchNav
        inputtype="text"
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <main className="searchMain">
        <h3 className="ir">검색어와 일치하는 사용자 리스트</h3>
        {searchList.map((item) => (
          <UserList
            searchList={searchList}
            keyword={keyword}
            key={item._id}
            username={item.username}
            accountname={`@ ${item.accountname}`}
            image={item.image}
            alt={`${item.username}님의 프로필 사진`}
          />
        ))}
      </main>
      <TabMenu></TabMenu>
    </StyledSearch>
  );
}

export default Search;
