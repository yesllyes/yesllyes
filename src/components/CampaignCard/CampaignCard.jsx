import React from 'react';
import CampaignCardWrapper from './styled';
import ModalButton from '../Modal/ModalButton';

export default function CampaginCard({ campaign }) {
  return (
    <CampaignCardWrapper>
      <ModalButton modalType="CampaignModal" campaign={campaign}>
        <img src={campaign.itemImage} alt={campaign.itemName} />
      </ModalButton>
      <p>{campaign.itemName}</p>
      <p>
        <span>{`참가인원 ${campaign.price}명`}</span>
      </p>
    </CampaignCardWrapper>
  );
}
