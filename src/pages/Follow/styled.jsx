import styled from 'styled-components';

const StyledFollowersWrapper = styled.section`
  position: relative;
  width: 390px;
  height: 820px;
`;

const StyledFollowersListWrapper = styled.div`
  padding: 24px 0;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 712px;
`;

const StyledFollowersList = styled.ul`
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  li {
    position: relative;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;

    Button {
      position: absolute;
      right: 0px;
      margin: 4px 0px;
      height: 28px;
    }
  }
`;

const TabMenuWrap = styled.div`
  bottom: 0px;
`;

export {
  StyledFollowersWrapper,
  StyledFollowersListWrapper,
  StyledFollowersList,
  TabMenuWrap,
};
