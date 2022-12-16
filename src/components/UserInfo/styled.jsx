import styled from 'styled-components';

const StyledUserInfo = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  gap: 12px;
  border: 1px solid black;
  position: relative;

  div {
    margin-top: 7px;

  }

  p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    margin-bottom: 6px;
}

  span{
    font-size: ${({ theme }) => theme.fontSize.small};
    color: #767676;

  }

  button {
    width: 56px;
    height: 28px;
    font-size: ${({ theme }) => theme.fontSize.xsmall};
    background-color: ${({ theme }) => theme.colors.Green};
    border-radius: 26px;
    color: white;
    padding: 7px 11px;
    position: absolute;
    right: 0px;
    bottom: 11px;
  }

  `;

export default StyledUserInfo;



