import React, { useEffect, useState } from 'react';
import TextPost from '../../components/TextPost/TextPost';
import postAlbumOnIcon from '../../assets/icon/icon-post-album-on.svg';
import postAlbumOffIcon from '../../assets/icon/icon-post-album-off.svg';
import postListOnIcon from '../../assets/icon/icon-post-list-on.svg';
import postListOffIcon from '../../assets/icon/icon-post-list-off.svg';

import { StyledPostList } from './styled';
import useAuthContext from '../../hooks/useAuthContext';

function PostList() {
  const [showDisplay, setShowDisplay] = useState('list');
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { auth } = useAuthContext();

  const handleShowDisplay = (e) => {
    const currentDisplay = e.currentTarget.name;

    setShowDisplay(currentDisplay);
  };

  useEffect(() => {
    if (auth.accountName) {
      fetch(
        `https://mandarin.api.weniv.co.kr/post/${auth.accountName}/userpost`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${auth.token}`,
            'Content-type': 'application/json',
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          setPostData(res.post);
          setLoading(false);
        })
        .catch((e) => e);
    }
  }, [auth]);

  return (
    <StyledPostList>
      <h3 className="ir">게시물 작성 리스트목록</h3>
      <div>
        <button name="list" onClick={handleShowDisplay}>
          {showDisplay === 'list' ? (
            <img src={postListOnIcon} alt="" />
          ) : (
            <img src={postListOffIcon} alt="" />
          )}
        </button>
        <button name="album" onClick={handleShowDisplay}>
          {showDisplay === 'album' ? (
            <img src={postAlbumOnIcon} alt="" />
          ) : (
            <img src={postAlbumOffIcon} alt="" />
          )}
        </button>
      </div>

      {loading && <div>loading!!!!</div>}
      {!loading && showDisplay === 'list' ? (
        postData.map((post) => <TextPost key={post.id} postData={post} />)
      ) : (
        <div>앨범형</div>
      )}
    </StyledPostList>
  );
}

export default PostList;
