import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoutAlert from '../Alert/LogoutAlert';

function UserModal() {
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const handleOpenAlert = () => {
    setIsOpenAlert(true);
  };
  const handleCloseAlert = () => {
    setIsOpenAlert(false);
  };

  return (
    <>
      <li>
        <Link to="프로필수정">설정 및 개인정보</Link>
      </li>
      <li>
        <button onClick={handleOpenAlert}>로그아웃</button>
      </li>
      {isOpenAlert && <LogoutAlert handleCloseAlert={handleCloseAlert} />}
    </>
  );
}

export default UserModal;
