import React from 'react';
import StyledWrapper from '../../components/Wrapper/StyledWrapper';
import Button from '../../components/button/Button';
import StyledInput from '../../components/TextInput/Styled';
import { StyledProfilePage, StyledImgForm, StyledTxtForm } from './styled';

import IconBasicProfile from '../../assets/icon/icon-basic-profile-large.svg';
import IconImgButton from '../../assets/icon/icon-img-button-green.svg';

export default function ProfilePage() {
  const handleChangeStatus = (e) => {
    console.log(e);
    console.log('click 이벤트 테스트 중');
  };

  return (
    <StyledWrapper>
      <StyledProfilePage>
        <h3>프로필 설정</h3>
        <strong>나중에 언제든지 변경할 수 있습니다.</strong>

        <StyledImgForm src={IconImgButton}>
          <img src={IconBasicProfile} alt="" />
        </StyledImgForm>

        <StyledTxtForm>
          <StyledInput>
            <label htmlFor="user">사용자 이름</label>
            <input
              id="user"
              type="text"
              placeholder="2~10자 이내여야 합니다."
            />
          </StyledInput>
          <StyledInput>
            <label htmlFor="user">계정 ID</label>
            <input
              id="user"
              type="text"
              placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            />
          </StyledInput>
          <StyledInput>
            <label htmlFor="user">소개</label>
            <input
              id="user"
              type="text"
              placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
            />
          </StyledInput>

          <Button status="" onClick={handleChangeStatus} size="lg">
            라이프마켓 시작하기
          </Button>
        </StyledTxtForm>
      </StyledProfilePage>
    </StyledWrapper>
  );
}
