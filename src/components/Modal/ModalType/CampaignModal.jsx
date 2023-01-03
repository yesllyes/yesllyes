import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthContext from '../../../hooks/useAuthContext';
import CampaignAlert from '../Alert/CampaignAlert';

function CampaignModal({ campaign }) {
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
      {auth.accountName === campaign.author.accountname ? (
        <>
          <li>
            <button onClick={handleOpenAlert}>캠페인 삭제</button>
          </li>
          <li>
            <Link
              to={`/campaign/${campaign.id}/edit`}
              state={{ id: campaign.id }}
            >
              캠페인 수정
            </Link>
          </li>
        </>
      ) : null}

      <li>
        <a href={campaign.link}>캠페인 링크로 이동하기</a>
      </li>
      {isOpenAlert && (
        <CampaignAlert
          handleCloseAlert={handleCloseAlert}
          campaignId={campaign.id}
        />
      )}
    </>
  );
}

export default CampaignModal;
