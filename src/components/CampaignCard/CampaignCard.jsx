import React from 'react';

import CampaignCardWrapper from './styled';

const CampaginCard = ({ campaign }) => (
  <CampaignCardWrapper>
    <img src={campaign.itemImage} alt={campaign.itemName} />
    <p>{campaign.itemName}</p>
    <p>
      <span>현재 진행 중</span>
    </p>
  </CampaignCardWrapper>
);

export default CampaginCard;
