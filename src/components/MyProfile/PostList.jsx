import React, { useEffect, useState } from 'react';
import TextPost from '../../components/TextPost/TextPost';
import postAlbumOnIcon from '../../assets/icon/icon-post-album-on.svg';
import postAlbumOffIcon from '../../assets/icon/icon-post-album-off.svg';
import postListOnIcon from '../../assets/icon/icon-post-list-on.svg';
import postListOffIcon from '../../assets/icon/icon-post-list-off.svg';

import { StyledPostList } from './styled';

function PostList() {
  const [showDisplay, setShowDisplay] = useState('list');
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleShowDisplay = (e) => {
    const currentDisplay = e.currentTarget.name;

    setShowDisplay(currentDisplay);
  };

  useEffect(() => {
    fetch('https://mandarin.api.weniv.co.kr/post/test111.2341/userpost', {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODU5NWY4MTdhZTY2NjU4MWJmMjgzZCIsImV4cCI6MTY3NjUzMjI5NCwiaWF0IjoxNjcxMzQ4Mjk0fQ.596JRIY0hJXUG1Mgy3I2a3v_bddUdJEQoUVvAO4K85g',
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setPostData(res.post);
        setLoading(false);
      });
  }, []);

  console.log(postData);
  return (
    <StyledPostList>
      <h3>게시물 작성 리스트목록</h3>
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
