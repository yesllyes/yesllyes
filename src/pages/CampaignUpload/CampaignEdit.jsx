import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TopUploadNav } from '../../components/Navbar/TopNavbar';
import TextInput from '../../components/TextInput/TextInput';
import { StyledCampaignInput } from './styled';
import useAuthContext from '../../hooks/useAuthContext';

const BASEURL = 'https://mandarin.api.weniv.co.kr';

export default function CampaignEdit() {
  const location = useLocation();
  const campaignId = location.state.id;

  const [files, setFiles] = useState(null);
  const [productId, setProductId] = useState('');
  const [accountName, setAccountName] = useState('');
  const [campaignName, setCampaignName] = useState('');
  const [campaignPeople, setCampaignPeople] = useState('');
  const [campaignLink, setCampaignLink] = useState('');

  const [isVaildCampignImg, setIsValidCampaignImg] = useState(false);
  const [isValidCampaignName, setIsValidCampaignName] = useState(false);
  const [checkCampaignNameMsg, setCheckCampaignNameMsg] = useState('');
  const [isValidCampaignPeople, setIsValidCampaignPeople] = useState(false);
  const [checkCampaignPeopleMsg, setCheckCampaignPeopleMsg] = useState('');
  const [isValidCampaignLink, setIsValidCampaignLink] = useState(false);
  const [checkCampaignLinkMsg, setCheckCampaignLinkMsg] = useState('');

  const navigate = useNavigate();

  const { auth } = useAuthContext();

  const passed =
    isValidCampaignName && isValidCampaignLink && isValidCampaignPeople;

  useEffect(() => {
    if (auth) {
      fetch(`${BASEURL}/product/detail/${campaignId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${auth.token}`,
          'Content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setProductId(res.product.id);
          setAccountName(res.product.author.accountname);
          setCampaignName(res.product.itemName);
          setCampaignPeople(res.product.price);
          setCampaignLink(res.product.link);
          setFiles(res.product.itemImage);
          // console.log(res);
        });
    }
  }, [auth, campaignId]);

  const handleCampaignImg = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('image', file);

    const imgUpload = async () => {
      const res = await fetch(`${BASEURL}/image/uploadfile`, {
        method: 'POST',
        body: formData,
      });

      const json = await res.json();

      // 이미지 파일형식이 아닌 경우 에러 처리 ex) .svg
      if (!json.filename) {
        setFiles(null);

        return;
      }
      setFiles(`${BASEURL}/${json.filename}`);
    };

    imgUpload();
    setFiles(file);

    if (file.name !== '') {
      setIsValidCampaignImg(true);
    }
  };

  const handleCampaignName = (e) => {
    const targetName = e.target.value;

    setCampaignName(e.target.value);
    if (
      targetName.length > 15 ||
      (targetName.length < 2 && targetName !== '')
    ) {
      setCheckCampaignNameMsg('2자~15자 이내여야 합니다.');
      setIsValidCampaignName(false);
    } else {
      setCheckCampaignNameMsg('');
      setIsValidCampaignName(true);
    }
  };

  const handleCampaignPeople = (e) => {
    const targetPeople = e.target.value;

    if (targetPeople < 1) {
      setCheckCampaignPeopleMsg('1명 이상의 인원이 있어야 합니다.');
      setIsValidCampaignPeople(false);
    } else {
      setCheckCampaignPeopleMsg('');
      setIsValidCampaignPeople(true);
    }

    setCampaignPeople(e.target.value);
  };

  const handleCampaignLink = (e) => {
    const targetLink = e.target.value;

    setCampaignLink(e.target.value);
    const regExp =
      /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

    if (!regExp.test(targetLink) && targetLink !== '') {
      setCheckCampaignLinkMsg('url형식에 맞지 않습니다.');
      setIsValidCampaignLink(false);
    } else if (targetLink === '') {
      setCheckCampaignLinkMsg('유효한 url 주소를 입력하세요.');
      setIsValidCampaignLink(false);
    } else {
      setCheckCampaignLinkMsg('');
      setIsValidCampaignLink(true);
    }
  };

  const data = {
    itemName: campaignName,
    price: Number(campaignPeople),
    link: campaignLink,
    itemImage: files,
  };

  const onSubmit = async () => {
    const productData = { product: data };

    const campaignUpload = await fetch(`${BASEURL}/product/${productId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(productData),
    });

    navigate(`/profile/${accountName}`);

    const result = campaignUpload.json();

    if (result.status === 422) {
      console.log(result.message);
    }
  };

  return (
    <>
      <StyledCampaignInput>
        <TopUploadNav disabled={!passed} onClick={onSubmit} value="저장" />
        <form>
          <div className="campaign-img-upload">
            <h2>캠페인 등록</h2>
            <label htmlFor="campaignImg" className="campaign-img-label">
              <img src={files} alt="" />
            </label>
            <input
              type="file"
              id="campaignImg"
              accept="image/*"
              onChange={handleCampaignImg}
            />
          </div>
          <TextInput
            label="캠페인 이름"
            id="campaign-name"
            value={campaignName}
            onChange={handleCampaignName}
            type="string"
            placeholder="2~10자 이내여야 합니다"
            required
          />
          <p className="error-msg">{checkCampaignNameMsg}</p>
          <TextInput
            label="인원"
            id="campaign-people"
            value={campaignPeople}
            onChange={handleCampaignPeople}
            type="number"
            placeholder="ex) 00 명"
            required
          />
          <p className="error-msg">{checkCampaignPeopleMsg}</p>
          <TextInput
            label="상세정보"
            id="campaign-link"
            value={campaignLink}
            onChange={handleCampaignLink}
            type="url"
            placeholder="URL을 입력해 주세요"
            required
          />
          <p className="error-msg">{checkCampaignLinkMsg}</p>
        </form>
      </StyledCampaignInput>
    </>
  );
}
