import React from 'react';
import { TopUploadNav } from '../../components/Navbar/TopNavbar';
import TextInput from '../../components/TextInput/TextInput';
import { StyledCamoaignHeader, StyledCampaignInput } from './styled';

const Campaign = () => (
  <>
    <StyledCamoaignHeader>
      <h2 className="ir">캠페인 등록 페이지</h2>
      <TopUploadNav value="저장"></TopUploadNav>
    </StyledCamoaignHeader>
    <StyledCampaignInput>
      <form>
        <div className="campaign-img-upload">
          <h3>캠페인 등록</h3>
          <label htmlFor="campaignImg" className="campaign-img-label"></label>
          <input type="file" id="campaignImg" className="ir" />
        </div>
        <TextInput
          label="상품명"
          id="campaign-name"
          type="string"
          placeholder="2~10자 이내여야 합니다"
          required
        ></TextInput>
        <TextInput
          label="인원"
          id="campaign-people"
          type="number"
          placeholder="ex) 00 명"
          required
        ></TextInput>
        <TextInput
          label="상세정보"
          id="campaign-link"
          type="url"
          placeholder="URL을 입력해 주세요"
          required
        ></TextInput>
      </form>
    </StyledCampaignInput>
  </>
);

export default Campaign;
