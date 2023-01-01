import styled from 'styled-components';

const StyledNotFoundPage = styled.div`
  width: 390px;
  height: 820px;
  border: 0.5px solid ${({ theme }) => theme.colors.ActiveborderColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  img {
    width: 158px;
    height: 158px;
    filter: drop-shadow(3px 3px 4px #a7a7a7);
  }

  p {
    margin-top: 18px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.lightGray};
  }
  button {
    margin-bottom: 120px;
  }
`;

export default StyledNotFoundPage;
