import React from 'react';
import { TopUploadNav } from '../../components/Navbar/TopNavbar';
import iconbasicprofilesmall from '../../assets/icon/icon-basic-profile-small.svg';
import { PostUploadMain, PostUploadHeader } from './styled';

const PostUploadPage = () => (
  <>
    <PostUploadHeader>
      <h1 className="ir">게시글 작성 페이지</h1>
      <TopUploadNav value="업로드"></TopUploadNav>
    </PostUploadHeader>
    <PostUploadMain>
      <h2 className="ir">게시글 작성</h2>
      <img src={iconbasicprofilesmall} alt="user-profile-img" />
      <article className="post-write">
        <h3 className="ir">글 입력 칸</h3>
        <form className="post-write-form">
          <textarea name="text" placeholder="게시글 입력하기.."></textarea>
          <label htmlFor="imgupload" className="campaign-img-label"></label>
          <input type="file" id="imgupload" />
        </form>
      </article>
      <section>
        <h4 className="ir">추가한 이미지</h4>
        {/* <ul>
          <li><img src="" alt="" /></li>
        </ul> */}
      </section>
    </PostUploadMain>
  </>
);

export default PostUploadPage;
