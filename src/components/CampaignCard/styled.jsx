import styled from 'styled-components';

const CampaignCardWrapper = styled.li`
  cursor: pointer;
  width: 140px;
  list-style: none;
  flex-shrink: 0;

  img {
    object-fit: cover;
    width: 140px;
    height: 90px;
    border: 0.5px solid ${({ theme }) => theme.colors.ActiveborderColor};
    border-radius: 8px;
  }

  p {
    line-height: 15px;
    margin: 8px 0px 4px;
    font-size: ${({ theme }) => theme.fontSize.medium};

    span {
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: 13px;
      margin-left: 10px;
      color: ${({ theme }) => theme.colors.Green};
      margin: 0px auto;
    }
  }
`;

export default CampaignCardWrapper;
