import React, { useEffect, useState } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import CampaginCard from '../CampaignCard/CampaignCard';

import { StyledCampaginWrapper, StyledCampaginList } from './styled';

const CampaginList = ({ accountName }) => {
  const { auth } = useAuthContext();
  const [campaigns, setCampaigns] = useState([]);
  const [campaignsCount, setCampaignsCount] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);

    fetch(`https://mandarin.api.weniv.co.kr/product/${accountName}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setCampaignsCount(res.data);
        setCampaigns(res.product);
        setLoading(false);
      })
      .catch((e) => setError(e));
  }, [accountName, auth.token]);

  if (loading) {
    return <div>Loading중입니다..</div>;
  }

  if (error) {
    return <div>Error메세지: {error}</div>;
  }

  return (
    <StyledCampaginWrapper>
      <h3 className="title">
        참여한 캠페인<strong> {`(${campaignsCount}개)`}</strong>
      </h3>
      <StyledCampaginList>
        {campaigns.map((campaign) => (
          <CampaginCard key={campaign.id} campaign={campaign} />
        ))}
      </StyledCampaginList>
    </StyledCampaginWrapper>
  );
};

export default CampaginList;
