import styled from 'styled-components';

const StyledHomeFeedPage = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 826px;

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

  p {
    display: block;
    margin: 20px 0px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: #767676;
  }
`;

const TabMenuWrap = styled.div`
  bottom: 0px;
`;

export { StyledHomeFeedPage, TabMenuWrap };
