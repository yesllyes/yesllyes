import React from 'react';
import useAuthContext from '../../../hooks/useAuthContext';
import {
  StyledAlertButtons,
  StyledAlertTextButton,
  StyledWrapper,
} from './styled';

const BASEURL = 'https://mandarin.api.weniv.co.kr';

export default function CampaignAlert({ handleCloseAlert, campaignId }) {
  const { auth } = useAuthContext();

  const handleDeleteCampaign = () => {
    campaginDelete();
  };

  const campaginDelete = async () => {
    const CampaignDeleteReq = await fetch(`${BASEURL}/product/${campaignId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-type': 'application/json',
      },
    });

    const result = await CampaignDeleteReq.json();

    if (result.message === '삭제되었습니다.') {
      location.reload();
    } else {
      alert(result.message);
    }
  };

  return (
    <StyledWrapper>
      <StyledAlertTextButton>캠페인을 삭제할까요?</StyledAlertTextButton>
      <StyledAlertButtons>
        <button onClick={handleCloseAlert}>취소</button>
        <button onClick={handleDeleteCampaign}>삭제</button>
      </StyledAlertButtons>
    </StyledWrapper>
  );
}
