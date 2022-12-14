import styled from 'styled-components';
import iconimgbuttongreen from '../../assets/icon/icon-img-button-green.svg';
import StyledWrapper from './../../components/Wrapper/StyledWrapper';
import StyledTopBasicNav from './../../components/Navbar/styled';
import {
  StyledCommentInput,
} from './../../components/Comment/styled';
import { StyledPostMessage } from '../../components/TextPost/styled';

export const StyledPostUploadPage = styled.div`
  border: 0.5px solid #dbdbdb;
  width: 100%;
  height: 820px;
  box-sizing: border-box;
`;

export const StyledUploadContents = styled.main`
  padding: 20px 16px;
  display: flex;
  height: 770px;

  position: relative;

  img {
    width: 42px;
    height: 42px;
    border-radius: 70%;
    object-fit: cover;
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

    span {
      float: right;
      margin-right: 20px;
      color: ${({ theme }) => theme.colors.Green};
    }
  }

  .campaign-img-label {
    position: absolute;
    right: 20px;
    bottom: 16px;
    width: 50px;
    height: 50px;
    background-image: url(${iconimgbuttongreen});
    cursor: pointer;
  }
`;

export const StyledUploadImg = styled.div`
  position: absolute;
  bottom: 410px;
  left: 63px;
  cursor: pointer;

  ul > li {
    width: 140px;
    height: 90px;
    border: 0.5px solid #dbdbdb;
    border-radius: 8px;

    img {
      width: 100%;
      height: 100%;
      font-size: ${({ theme }) => theme.fontSize.xlarge};
      font-weight: 700;
      object-fit: cover;
      text-align: center;
      border-radius: 8px;
    }
  }
`;

export const StyledPostWrapper = styled(StyledWrapper)`
  padding: 0;
  width: 100%;
  height: 820px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledPostNav = styled(StyledTopBasicNav)`
  margin-bottom: 10px;
  padding: 0;
`;

export const StyledPostText = styled(StyledPostMessage)`
  padding: 0;
  margin-bottom: 10px;
`;

export const StyledPostCommentInp = styled(StyledCommentInput)`
  padding: 0;
  border: none;
  position: absolute;
  bottom: 0;
`;
