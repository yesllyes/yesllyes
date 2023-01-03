import React, { useState } from 'react';
import {
  StyledChatPage,
  StyledChatTxtCont,
  StyledChatRoomInput,
} from './styled';
import { TopChatNav } from '../../components/Navbar/TopNavbar';
import Button from '../../components/Button/Button';
import uploadImg from '../../assets/icon/icon-img-button-gray.svg';
import BasicProfile from '../../assets/icon/icon-basic-profile-small.svg';
import chatImg from '../../assets/image/chatImage.PNG';

export default function ChatRoomPage() {
  const [isValidChatTxt, setIsValidChatTxt] = useState(false);

  const passed = isValidChatTxt;

  const handleChangeChatTxt = (event) => {
    const targetChatTxt = event.target.value;

    setIsValidChatTxt(event.target.value);
    if (targetChatTxt === '') {
      setIsValidChatTxt(false);
    } else {
      setIsValidChatTxt(true);
    }
  };

  return (
    <StyledChatPage>
      <TopChatNav value="초록이" />
      <StyledChatTxtCont>
        <li>
          <img className="basicProfile" src={BasicProfile} alt="" />
          <p>이번 플로깅 행사 참여해두 될까요?</p>
          <strong>11:24</strong>
        </li>
        <li>
          <p>
            그럼요! 자세한 사항은 제 프로필의 등록된 캠페인 글을 확인해주세요.
          </p>
          <img className="upload-img" src={chatImg} alt="" />
          <strong>11:26</strong>
        </li>
        <li>
          <img className="basicProfile" src={BasicProfile} alt="" />
          <p>감사합니다!</p>
          <strong>11:27</strong>
        </li>
      </StyledChatTxtCont>
      <StyledChatRoomInput>
        <img src={uploadImg} alt="" />
        <input
          type="text"
          placeholder="메시지 입력하기..."
          onChange={handleChangeChatTxt}
        />
        <Button size="xsm" disabled={!passed}>
          전송
        </Button>
      </StyledChatRoomInput>
    </StyledChatPage>
  );
}
