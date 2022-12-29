import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopUploadNav } from '../../components/Navbar/TopNavbar';
import useAuthContext from '../../hooks/useAuthContext';
import { StyledPostUploadPage, StyledUploadContents } from './styled';
import iconbasicprofilesmall from '../../assets/icon/icon-basic-profile-small.svg';

const BASEURL = 'https://mandarin.api.weniv.co.kr';

function PostUploadPage() {
  const [postContent, setPostContent] = useState('');
  const [postImg, setPostImg] = useState(null);

  const [isValidPostImg, setIsValidPostImg] = useState(false);
  const [isValidPostContent, setIsValidPostContent] = useState(false);

  // const [checkPostImg, setCheckPostImg] = useState('');
  // const [checkPostContent, setCheckPostContent] = useState('');

  const navigate = useNavigate();
  const { auth } = useAuthContext();
  const passed = isValidPostImg && isValidPostContent;

  const handleContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleImgChange = (e) => {
    // setPostImg(e.target.files[0]);
    const imgFile = e.target.files[0];
    const formData = new FormData();

    formData.append('image', imgFile);

    const imgUpload = async () => {
      // 이미지 filename 응답 API(1개)
      const ImgFetchResult = await fetch(`${BASEURL}/image/uploadfile`, {
        method: 'POST',
        // headers: {
        //   Authorization: `Bearer ${auth.token}`,
        //   'Content-type': 'multipart/form-data',
        // },
        body: formData,
      });
      const res = await ImgFetchResult.json();

      // 이부분부터 3줄 이해안감
      setPostImg(`${BASEURL}/${res.filename}`);
    };

    imgUpload();
    setPostImg(imgFile);
  };

  // 전체 업로드 버튼
  const onSubmit = async () => {
    const postData = {
      post: {
        content: postContent,
        image: postImg,
      },
    };

    const PostUpload = await fetch(`${BASEURL}/post`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    const result = await PostUpload.json();

    // console.log(result);
    navigate(`/post/${result.post.id}`);
  };

  // console.log(auth);

  return (
    <StyledPostUploadPage>
      <TopUploadNav
        // disabled={!passed}
        onClick={onSubmit}
        value="업로드"
      />
      <StyledUploadContents>
        <h2 className="ir">게시글 작성</h2>
        <img src={auth.image} alt="" />
        <article className="post-write">
          <h3 className="ir">글 입력 공간</h3>
          <form className="post-write-form">
            <textarea
              name="text"
              placeholder="게시글 입력하기..."
              value={postContent}
              onChange={handleContentChange}
              required
            ></textarea>
            <label htmlFor="imgupload" className="campaign-img-label"></label>
            <input
              type="file"
              id="imgupload"
              accept="image/*"
              onChange={handleImgChange}
            />
          </form>
        </article>
        {/* 추가한 이미지 프리뷰 구현 */}
        <h4 className="ir">추가한 이미지</h4>
        {/* <ul>
          <li><img src="" alt="" /></li>
        </ul> */}
      </StyledUploadContents>
    </StyledPostUploadPage>
  );
}

export default PostUploadPage;
