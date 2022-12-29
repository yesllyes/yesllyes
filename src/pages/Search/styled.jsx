import styled from 'styled-components';

const StyledSearch = styled.section`
  width: 390px;
  height: 820px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  .searchMain {
    height: 712px;
    padding: 20px 16px 0;
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default StyledSearch;
