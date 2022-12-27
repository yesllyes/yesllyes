import React from 'react';
import { Link } from 'react-router-dom';
import StyledAlbumCard from './styled';

function AlbumPost({ postData }) {
  return (
    <StyledAlbumCard>
      <h3 className="ir">앨범형 이미지</h3>
      <Link>
        <img src={postData.image} alt="포스트 이미지" />
      </Link>
    </StyledAlbumCard>
  );
}

export default AlbumPost;
