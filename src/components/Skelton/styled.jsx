import styled from 'styled-components';

/* @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(400px);
    }
  } */

export const StyledSkeletonProfile = styled.div`
  @keyframes loading {
    0% {
      transform: translateX(0);
      opacity: 0;
    }

    20% {
      opacity: 0.25;
    }

    50% {
      opacity: 1;
    }

    80% {
      opacity: 0.5;
    }

    100% {
      transform: translateX(400px);
      opacity: 0;
    }
  }

  & {
    width: 100%;
  }

  &::before {
  }

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;
    height: 110px;
    margin-top: 10px;
    margin-bottom: 15px;

    > div {
      background-color: #e7e4e4;
    }
  }

  .element::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0;
    width: 30px;
    height: 205px;
    background: linear-gradient(to right, #d8d8d8, #cfcfcf, #cbcbcb);
    animation: loading 1.5s infinite linear;
  }

  .element {
    overflow: hidden;
    position: relative;
  }

  .follow {
    width: 43px;
    height: 50px;
    border-radius: 8px;
  }

  .profile-img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
  }

  .profile-info {
    width: 130px;
    height: 30px;
    margin: 0 auto;
    margin-bottom: 15px;
    border-radius: 4px;
    background-color: #e7e4e4;
  }

  .profile-intro {
    width: 160px;
    height: 20px;
    margin: 0 auto;
    border-radius: 4px;
    background-color: #e7e4e4;
  }
`;

export const StyledSkeletonCampaign = styled.div`
  @keyframes loading {
    0% {
      transform: translateX(0);
      opacity: 0;
    }

    20% {
      opacity: 0.25;
    }

    50% {
      opacity: 1;
    }

    80% {
      opacity: 0.5;
    }

    100% {
      transform: translateX(400px);
      opacity: 0;
    }
  }

  & {
    width: 100%;
  }

  .campaign-total {
    width: 140px;
    height: 20px;
    border-radius: 4px;
    background-color: #e7e4e4;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
  }

  .campaign-total::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0;
    width: 30px;
    height: 205px;
    background: linear-gradient(to right, #d8d8d8, #cfcfcf, #cbcbcb);
    animation: loading 1.5s infinite linear;
  }

  ul {
    display: flex;
    gap: 10px;
    overflow: hidden;
  }

  li {
    .campaign-img {
      width: 140px;
      height: 90px;
      border-radius: 4px;
      background-color: #e7e4e4;
      margin-bottom: 5px;
    }

    .campaign-tit {
      width: 140px;
      height: 15px;
      border-radius: 4px;
      background-color: #e7e4e4;
      margin-bottom: 5px;
    }

    .campaign-cnt {
      width: 90px;
      height: 12px;
      border-radius: 4px;
      background-color: #e7e4e4;
    }
  }

  .element::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0;
    width: 30px;
    height: 205px;
    background: linear-gradient(to right, #d8d8d8, #cfcfcf, #cbcbcb);
    animation: loading 1.5s infinite linear;
  }

  .element {
    overflow: hidden;
    position: relative;
  }
`;

export const StyledSkeletonPost = styled.article`
  @keyframes loading {
    0% {
      transform: translateX(0);
      opacity: 0;
    }

    20% {
      opacity: 0.25;
    }

    50% {
      opacity: 1;
    }

    80% {
      opacity: 0.5;
    }

    100% {
      transform: translateX(400px);
      opacity: 0;
    }
  }

  & {
    width: 100%;
    margin: 12px;
  }

  .user-profile {
    display: flex;
    gap: 12px;
    margin-bottom: 10px;
  }

  .user-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #e7e4e4;
  }

  .user-info {
    width: 140px;
    height: 40px;
    border-radius: 8px;
    background-color: #e7e4e4;
  }

  .post-tit {
    margin-left: 52px;
    margin-bottom: 10px;
    width: 160px;
    height: 20px;
    border-radius: 8px;
    background-color: #e7e4e4;
  }

  .post-img {
    margin-left: 52px;
    width: 304px;
    height: 228px;
    background-color: #e7e4e4;
    border-radius: 8px;
  }

  .element::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0;
    width: 30px;
    height: 240px;
    background: linear-gradient(to right, #d8d8d8, #cfcfcf, #cbcbcb);
    animation: loading 1.5s infinite linear;
  }

  .element {
    overflow: hidden;
    position: relative;
  }
`;
