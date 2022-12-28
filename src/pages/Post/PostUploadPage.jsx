import React from 'react';
import { TopUploadNav } from '../../components/Navbar/TopNavbar';
import iconbasicprofilesmall from '../../assets/icon/icon-basic-profile-small.svg';
import { StyledPostUploadPage, StyledUploadContents } from './styled';

function PostUploadPage() {
  return (
    <StyledPostUploadPage>
      <TopUploadNav value="업로드" />
      {/* button disabled 처리 (선영님 코드 참고) */}
      <StyledUploadContents>
        <h2 className="ir">게시글 작성</h2>
        <img src={iconbasicprofilesmall} alt="" />
        <article className="post-write">
          <h3 className="ir">글 입력 칸</h3>
          <form className="post-write-form">
            <textarea name="text" placeholder="게시글 입력하기..."></textarea>
            <label htmlFor="imgupload" className="campaign-img-label"></label>
            <input type="file" id="imgupload" />
          </form>
        </article>

        <h4 className="ir">추가한 이미지</h4>
        {/* <ul>
          <li><img src="" alt="" /></li>
        </ul> */}
      </StyledUploadContents>
    </StyledPostUploadPage>
  );
}

export default PostUploadPage;
