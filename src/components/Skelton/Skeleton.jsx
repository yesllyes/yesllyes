import React from 'react';

import {
  StyledSkeletonCampaign,
  StyledSkeletonPost,
  StyledSkeletonProfile,
} from './styled';

export function SkeletonProfile() {
  return (
    <StyledSkeletonProfile>
      <div className="profile">
        <div className="follow element" />
        <div className="profile-img element" />
        <div className="follow element" />
      </div>

      <div className="profile-info element" />
      <div className="profile-intro element" />
    </StyledSkeletonProfile>
  );
}

export function SkeletonCampaign() {
  return (
    <StyledSkeletonCampaign>
      <div className="campaign-total" />
      <ul>
        <li>
          <div className="campaign-img element" />
          <div className="campaign-tit element" />
          <div className="campaign-cnt element" />
        </li>
        <li>
          <div className="campaign-img element" />
          <div className="campaign-tit element" />
          <div className="campaign-cnt element" />
        </li>
        <li>
          <div className="campaign-img element" />
          <div className="campaign-tit element" />
          <div className="campaign-cnt element" />
        </li>
      </ul>
    </StyledSkeletonCampaign>
  );
}

export function SkeletonPost() {
  return (
    <StyledSkeletonPost>
      <div className="user-profile ">
        <div className="user-img element" />
        <div className="user-info element" />
      </div>

      <div className="post-tit element" />
      <div className="post-img element" />
    </StyledSkeletonPost>
  );
}
