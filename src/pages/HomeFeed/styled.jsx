import styled from 'styled-components';

const StyledHomeFeedPage = styled.div`
  width: 390px;
  height: 820px;
  border: 0.5px solid #dbdbdb;
  display: flex;
  flex-direction: column;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 220px;
    margin-bottom: 294px;
  }

  p {
    display: block;
    margin: 20px 0px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: #767676;
  }
`;

export default StyledHomeFeedPage;
