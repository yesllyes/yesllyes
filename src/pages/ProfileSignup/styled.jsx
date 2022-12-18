import styled from 'styled-components';
import IconImgButton from '../../assets/icon/icon-img-button-green.svg';

// form 을 div로 바꿀지 여부:
// useNavigate을 쓰려면 form이 불편함(옵션 해제해야 함)
// 어차피 유효성검사 추가해야돼서 form의 기능을 수동으로 우리가 세밀하게 지정해야 함

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

const StyledImgForm = styled.form`
  text-align: center;
  position: relative;
  &::after {
    background: url(${IconImgButton});
    background-size: 100% 100%;
    bottom: 0;
    content: '';
    cursor: pointer;
    display: block;
    height: 36px;
    position: absolute;
    right: 138px;
    width: 36px;
    z-index: 10;
  }
`;

const StyledTxtForm = styled.form`
  margin-top: 30px;
  margin-right: 34px;
  margin-left: 34px;
`;

export { StyledProfilePage, StyledImgForm, StyledTxtForm };
