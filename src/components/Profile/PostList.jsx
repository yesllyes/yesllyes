import React, { useEffect, useState } from 'react';
import TextPost from '../../components/TextPost/TextPost';
import postAlbumOnIcon from '../../assets/icon/icon-post-album-on.svg';
import postAlbumOffIcon from '../../assets/icon/icon-post-album-off.svg';
import postListOnIcon from '../../assets/icon/icon-post-list-on.svg';
import postListOffIcon from '../../assets/icon/icon-post-list-off.svg';

import {
  StyledAlbumWrapper,
  StyledListWrapper,
  StyledPostList,
  StyledSelectDisplay,
} from './styled';
import useAuthContext from '../../hooks/useAuthContext';
import AlbumPost from '../AlbumPost/AlbumPost';

function PostList({ accountName }) {
  const [showDisplay, setShowDisplay] = useState('list');
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { auth } = useAuthContext();

  const handleShowDisplay = (e) => {
    const currentDisplay = e.currentTarget.name;

    setShowDisplay(currentDisplay);
  };

  useEffect(() => {
    setLoading(true);

    fetch(`https://mandarin.api.weniv.co.kr/post/${accountName}/userpost`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setPostData(res.post);
        setLoading(false);
      })
      .catch((e) => setError(e));
  }, [accountName, auth.token]);

  if (loading) {
    return <div>Loading중입니다..</div>;
  }

  if (error) {
    return <div>Error메세지: {error}</div>;
  }

  return (
    <StyledPostList>
      <h3 className="ir">게시물 작성 리스트목록</h3>
      <StyledSelectDisplay>
        <button name="list" onClick={handleShowDisplay}>
          <img
            src={showDisplay === 'list' ? postListOnIcon : postListOffIcon}
            alt="목록형아이템이미지"
          />
        </button>
        <button name="album" onClick={handleShowDisplay}>
          <img
            src={showDisplay === 'album' ? postAlbumOnIcon : postAlbumOffIcon}
            alt="앨범형아이템이미지"
          />
        </button>
      </StyledSelectDisplay>

      {!loading && showDisplay === 'list' ? (
        <StyledListWrapper>
          {postData.map((post) => (
            <TextPost key={post.id} postData={post} />
          ))}
        </StyledListWrapper>
      ) : (
        <StyledAlbumWrapper>
          {postData.map(
            (post) => post.image && <AlbumPost key={post.id} postData={post} />
          )}
        </StyledAlbumWrapper>
      )}
    </StyledPostList>
  );
}

export default PostList;
