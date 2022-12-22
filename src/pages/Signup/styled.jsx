import styled from 'styled-components';
import StyledLoginPage from '../Login/styled';

const StyledSignupPage = styled(StyledLoginPage)`
  .message {
    text-align: left;
    color: ${({ theme }) => theme.colors.Orange};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export default StyledSignupPage;
