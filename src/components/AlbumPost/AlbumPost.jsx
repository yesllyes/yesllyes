import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import ImageError from '../../assets/image/image-upload-fail.png';
import StyledAlbumCard from './styled';

function AlbumPost({ postData }) {
  const handleImage = useCallback((e) => {
    e.target.src = ImageError;
  }, []);

  return (
    <StyledAlbumCard>
      <h3 className="ir">앨범형 이미지</h3>
      <Link>
        <img src={postData.image} alt="포스트 이미지" onError={handleImage} />
      </Link>
    </StyledAlbumCard>
  );
}

export default AlbumPost;
