import styled from 'styled-components';

export const StyledBackGround = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const StyledModal = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
  max-width: 390px;
  border-radius: 1rem 1rem 0 0;
  border: 1px solid ${({ theme }) => theme.colors.ActiveborderColor};

  background-color: ${({ theme }) => theme.colors.White};
`;

export const StyledBox = styled.div`
  height: 3rem;
  &::after {
    content: '';
    display: block;
    width: 5rem;
    height: 0.4rem;
    background-color: ${({ theme }) => theme.colors.ActiveborderColor};
    border-radius: 0.5rem;
    margin: 0 auto;
    transform: translateY(1.5rem);
  }
`;

export const StyledModalList = styled.ul`
  font-size: ${({ theme }) => theme.fontSize.medium};

  li {
    padding: 15px 0 0 20px;
    margin-bottom: 15px;
  }

  li:last-child {
    margin-bottom: 30px;
  }
`;
