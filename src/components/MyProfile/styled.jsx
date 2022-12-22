import styled from 'styled-components';

const StyledProfileWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const StyledParticipate = styled.ul`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: rgb(236, 236, 236);
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    border-radius: 10px;
  }
`;

const StyledParticipateWrapper = styled.div`
  width: 390px;
  height: 208px;
  padding-left: 16px;

  .title {
    margin: 22px 0px 16px;
    font-size: ${({ theme }) => theme.fontSize.large};
    line-height: 18px;
  }
`;

const StyledProfileInfo = styled.div`
  height: 362px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ProfileHeader {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 390px;
    width: 100%;
    margin-top: 30px;
    gap: 35px;

    .followers {
      font-weight: 700;
      font-size: ${({ theme }) => theme.fontSize.xlarge};
      text-align: center;
    }

    .followings {
      font-weight: 700;
      font-size: ${({ theme }) => theme.fontSize.xlarge};
      color: ${({ theme }) => theme.colors.lightGray};
      text-align: center;
    }

    span {
      font-size: ${({ theme }) => theme.fontSize.xsmall};
      color: ${({ theme }) => theme.colors.lightGray};
    }

    img {
      width: 110px;
      height: 110px;
      border-radius: 50%;
    }
  }

  .ProfileMain {
    margin: 18px 0px;
    font-size: ${({ theme }) => theme.fontSize.large};

    p {
      text-align: center;
    }

    span {
      padding-top: 6px;
      font-size: ${({ theme }) => theme.fontSize.small};
      color: ${({ theme }) => theme.colors.lightGray};
      text-align: center;
    }
  }

  .ProfileSub {
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.lightGray};
  }
  p {
    position: relative;

    span {
      display: block;
    }
  }

  .ProfileFooter {
    margin: 25px 0px;
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      display: block;
      width: 20px;
      margin: auto;
      object-fit: cover;
    }
  }
`;

const CircleBtn = styled.button`
  width: 34px;
  height: 34px;
  border: 1px solid #dbdbdb;
  border-radius: 30px;
`;

const StyledPostList = styled.section`
  > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
    margin: 0 auto;
    width: 350px;
  }
`;

export {
  StyledProfileWrapper,
  StyledParticipate,
  StyledParticipateWrapper,
  StyledProfileInfo,
  CircleBtn,
  StyledPostList,
};
