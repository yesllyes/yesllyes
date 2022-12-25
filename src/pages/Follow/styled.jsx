import styled from 'styled-components';

const FollowerWrap = styled.section`
  position: relative;
  width: 390px;
  height: 820px;
`;

const FollowerTit = styled.h2`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const FollowerList = styled.div`
  padding: 24px 0;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 712px;
`;

const List = styled.ul`
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
      background-color: ${({ theme }) => theme.colors.Green};
      color: white;
      position: absolute;
      right: 0px;
      margin: 11px 0px;
      height: 28px;
    }
  }
`;

const TabMenuWrap = styled.div`
  bottom: 0px;
`;

export { FollowerWrap, FollowerTit, FollowerList, List, TabMenuWrap };
