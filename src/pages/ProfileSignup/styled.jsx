import styled from 'styled-components';
import IconImgButton from '../../assets/icon/icon-img-button-green.svg';

const StyledProfilePage = styled.section`
  width: 390px;
  margin: 0 auto;
  h3 {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xxlarge};
    margin-top: 33px;
  }

  strong {
    text-align: center;
    display: block;
    margin-top: 12px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.lightGray};
  }

  > div {
    margin-top: 30px;
    text-align: center;
  }

  button {
    margin-top: 30px;
  }
`;

const StyledImg = styled.div`
  position: relative;

  > img {
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 50%;
  }
  label {
    position: absolute;
    cursor: pointer;
    bottom: 0px;
    right: 140px;
    background: url(${IconImgButton});
    background-size: 100% 100%;
    height: 36px;
    width: 36px;
    z-index: 10;
  }
`;

const StyledTxt = styled.div`
  > div,
  p {
    color: ${({ theme }) => theme.colors.Orange};
    font-size: ${({ theme }) => theme.fontSize.small};
    text-align: left;
  }
  margin-top: 30px;
  margin-right: 34px;
  margin-left: 34px;
`;

export { StyledProfilePage, StyledImg, StyledTxt };
