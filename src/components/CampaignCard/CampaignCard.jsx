import React from 'react';

import CampaignCardWrapper from './styled';

const CampaginCard = ({ campaign }) => (
  <CampaignCardWrapper>
    <a href={campaign.link}>
      <img src={campaign.itemImage} alt={campaign.itemName} />
    </a>
    <p>{campaign.itemName}</p>
    <p>
      <span>{`참가인원 ${campaign.price}명`}</span>
    </p>
  </CampaignCardWrapper>
);

export default CampaginCard;
