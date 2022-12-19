import styled from 'styled-components';
import iconimgbutton from '../../assets/icon/icon-img-button-gray.svg';

const StyledCamoaignHeader = styled.header`
  .ir {
    display: block;
    overflow: hidden;
    font-size: 1px;
    line-height: 0;
    text-indent: -9999px;
  }
`;

const StyledCampaignInput = styled.main`
  height: 796px;
  border: 1px solid black;

  .ir {
    display: block;
    overflow: hidden;
    font-size: 1px;
    line-height: 0;
    text-indent: -9999px;
  }

  h3 {
    line-height: 14px;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.lightGray};
    padding-bottom: 18px;
  }

  form {
    padding: 30px 34px;
  }

  .campaign-img-label {
    display: block;
    width: 322px;
    height: 204px;
    position: relative;
    background-color: #f2f2f2;
    border: 0.5 solid #dbdbdb;
    border-radius: 10px;
    cursor: pointer;
  }

  .campaign-img-label::after {
    position: absolute;
    right: 12px;
    bottom: 12px;
    content: '';
    width: 36px;
    height: 36px;
    background: url(${iconimgbutton});
  }

  .campaign-input {
    padding-top: 30px;
  }

  input::placeholder {
    color: #dbdbdb;
  }
`;

export { StyledCamoaignHeader, StyledCampaignInput };
