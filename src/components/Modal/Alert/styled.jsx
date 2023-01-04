import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: absolute;
  z-index: 20;
  bottom: 380px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 252px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.White};
`;

export const StyledAlertTextButton = styled.button`
  display: block;
  width: 100%;
  padding: 22px 55px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.ActiveborderColor};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 500;
`;

export const StyledAlertButtons = styled.div`
  display: flex;

  > button {
    flex-basis: 50%;
    font-size: ${({ theme }) => theme.fontSize.medium};
    padding: 14px 0;
  }

  button + button {
    border-left: 1px solid ${({ theme }) => theme.colors.ActiveborderColor};
    background-color: ${({ theme }) => theme.colors.Green};
    color: ${({ theme }) => theme.colors.White};
  }
`;
