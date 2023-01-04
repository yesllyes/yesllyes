import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthContext from '../../../hooks/useAuthContext';
import LogoutAlert from '../Alert/LogoutAlert';

function UserModal() {
  const { auth } = useAuthContext();
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
        <Link to={`/profile/${auth.accountName}/edit`}>설정 및 개인정보</Link>
      </li>
      <li>
        <button onClick={handleOpenAlert}>로그아웃</button>
      </li>
      {isOpenAlert && <LogoutAlert handleCloseAlert={handleCloseAlert} />}
    </>
  );
}

export default UserModal;
