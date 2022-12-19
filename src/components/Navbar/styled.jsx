import styled from 'styled-components';

const StyledTopBasicNav = styled.nav`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  padding: 13px 16px;
  border: 0.5px solid ${({ theme }) => theme.colors.lightGray};
  position: relative;

  img {
    width: 22px;
    height: 22px;
    vertical-align: middle;
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.xlarge};
  }
  input {
    width: 316px;
    height: 32px;
    padding: 9px 16px;
    background-color: #f2f2f2;
    border: none;
    border-radius: 32px;
    position: absolute;
    left: 60px;
    bottom: 8px;
  }
  button {
    width: 90px;
    height: 32px;
    border-radius: 32px;
    background-color: ${({ theme }) => theme.colors.lightGreen};
    position: absolute;
    right: 16px;
    bottom: 8px;
    color: white;
  }
`;

export default StyledTopBasicNav;
