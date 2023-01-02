import React from 'react';
import { useNavigate } from 'react-router-dom';
import CampaignCardWrapper from './styled';

export default function CampaginCard({ campaign }) {
  const navigate = useNavigate();

  return (
    <CampaignCardWrapper>
      <img
        src={campaign.itemImage}
        alt={campaign.itemName}
        // 아래 기능은 모달 적용 유무에 따라 처리 의논.
        onClick={() => {
          navigate(`/campaign/${campaign.id}/edit`, {
            state: {
              id: campaign.id,
            },
          });
        }}
      />
      <p>{campaign.itemName}</p>
      <p>
        <span>현재 진행 중</span>
      </p>
    </CampaignCardWrapper>
  );
}