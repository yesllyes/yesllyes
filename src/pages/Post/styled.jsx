import styled from 'styled-components';
import iconimgbuttongreen from '../../assets/icon/icon-img-button-green.svg';

export const StyledPostUploadPage = styled.div`
  border: 0.5px solid #dbdbdb;
  width: 100%;
  height: 820px;
  box-sizing: border-box;
`;

export const StyledUploadContents = styled.main`
  padding: 20px 16px;
  display: flex;
  height: 796px;

  input,
  .ir {
    display: block;
    overflow: hidden;
    font-size: 1px;
    line-height: 0;
    text-indent: -9999px;
  }
  img {
    width: 42px;
    height: 42px;
  }

  .post-write {
    width: 100%;
    margin-top: 13px;
    margin-left: 13px;
  }

  textarea {
    font-family: 'NexonGothic';
    width: 300px;
    height: 198px;
  }

  article {
    position: relative;
  }

  .campaign-img-label {
    position: absolute;
    right: 0;
    bottom: 20px;
    width: 50px;
    height: 50px;
    background-image: url(${iconimgbuttongreen});
    cursor: pointer;
  }
`;
