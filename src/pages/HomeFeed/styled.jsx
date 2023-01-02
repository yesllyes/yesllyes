import styled from 'styled-components';

const StyledHomeFeedPage = styled.div`
  width: 390px;
  height: 820px;
  border: 0.5px solid #dbdbdb;
  display: flex;
  flex-direction: column;

  main {
    width: 390px;
    height: 712px;
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .non-post {
    margin-top: 200px;
  }
  span {
    /* display: block; */
    margin: 20px 0px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: #767676;
  }
`;

const TabMenuWrap = styled.div`
  bottom: 0px;
`;

export { StyledHomeFeedPage, TabMenuWrap };
