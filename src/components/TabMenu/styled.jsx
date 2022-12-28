import styled from 'styled-components';

const StyledTabMenu = styled.nav`
  width: 100%;
  height: 60px;
  /* border: 1px solid black; */
  padding: 0px 6px;
  position: absolute;
  bottom: 10px;

  ul {
    display: flex;
    justify-content: space-around;
  }

  img {
    margin-bottom: 4px;
  }

  a {
    padding-top: 12px;
    padding-bottom: 6px;
    color: #767676;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export default StyledTabMenu;
