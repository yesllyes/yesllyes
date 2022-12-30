import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopUploadNav } from '../../components/Navbar/TopNavbar';
import useAuthContext from '../../hooks/useAuthContext';
import {
  StyledPostUploadPage,
  StyledUploadContents,
  StyledUploadImg,
} from './styled';

const BASEURL = 'https://mandarin.api.weniv.co.kr';

function PostUploadPage() {
  const [postContent, setPostContent] = useState('');
  const [postImg, setPostImg] = useState(null);

  // onSubmit 전에 passed 체크 (빈 게시물이면 전송불가)
  const [isValidPostContent, setIsValidPostContent] = useState(false);
  const [isValidPostImg, setIsValidPostImg] = useState(false);

  // 유효성검사 (content: 1자 이상, img: 유효한 확장자만 허용)
  const [checkPostContent, setCheckPostContent] = useState(0);
  const [checkPostImg, setCheckPostImg] = useState(false);

  const navigate = useNavigate();
  const countRef = useRef();
  const { auth } = useAuthContext();
  const passed =
    (isValidPostContent && checkPostContent) ||
    (isValidPostImg && checkPostImg);
  const contentMaxLength = 330;

  const handleContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const CheckLength = (e) => {
    const txtLength = e.target.value.replace(/<br\s*\/?>/gm, '\n').length;

    setIsValidPostContent(txtLength);
    setCheckPostContent(txtLength);
  };

  const handleImgChange = (e) => {
    // setPostImg(e.target.files[0]);
    const imgFile = e.target.files[0];
    const formData = new FormData();

    formData.append('image', imgFile);

    // 이미지 filename 응답 API(1개)
    const imgUpload = async () => {
      const ImgFetchResult = await fetch(`${BASEURL}/image/uploadfile`, {
        method: 'POST',
        // headers: {
        //   'Content-type': 'multipart/form-data',
        // },
        body: formData,
      });
      const result = await ImgFetchResult.json();

      if (!result.filename) {
        setPostImg(null);
        setCheckPostImg(false);

        alert(result.message);
        return;
      }

      setPostImg(`${BASEURL}/${result.filename}`);
    };

    setIsValidPostImg(true);
    setCheckPostImg(true);
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

    navigate(`/post/${result.post.id}`);
  };

  return (
    <StyledPostUploadPage>
      <TopUploadNav disabled={!passed} onClick={onSubmit} value="업로드" />
      <StyledUploadContents>
        <h2 className="ir">게시글 작성</h2>
        <img src={auth.image} alt="" />
        <article className="post-write">
          <h3 className="ir">글 입력 공간</h3>
          <form className="post-write-form">
            <textarea
              name="text"
              placeholder="330자 이상 입력하실 수 없습니다."
              value={postContent}
              onChange={handleContentChange}
              maxLength={contentMaxLength}
              onKeyUp={CheckLength}
              required
            ></textarea>
            <label htmlFor="imgupload" className="campaign-img-label"></label>
            <input
              className="ir"
              type="file"
              id="imgupload"
              accept="image/*"
              onChange={handleImgChange}
            />
          </form>
          <span ref={countRef}>현재 {checkPostContent}자 작성</span>
        </article>
        {postImg ? (
          <StyledUploadImg>
            <h4 className="ir">추가한 이미지</h4>
            <ul>
              <li>
                <img
                  src={postImg}
                  alt="추가한 이미지"
                  onClick={() => {
                    setPostImg(null);
                    setIsValidPostImg(false);
                    setCheckPostImg(false);
                  }}
                />
              </li>
            </ul>
          </StyledUploadImg>
        ) : (
          <></>
        )}
      </StyledUploadContents>
    </StyledPostUploadPage>
  );
}

export default PostUploadPage;
