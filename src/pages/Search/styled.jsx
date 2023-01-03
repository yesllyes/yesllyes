import styled from 'styled-components';

const StyledSearch = styled.section`
  width: 390px;
  height: 820px;
  position: relative;
  border: 0.5px solid ${({ theme }) => theme.colors.ActiveborderColor};
  .searchMain {
    display: flex;
    flex-direction: column;
    height: 712px;
    gap: 16px;
    padding: 20px 16px;
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default StyledSearch;
