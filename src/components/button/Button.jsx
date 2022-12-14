import React from 'react';
import StyledButton from './styled';

const Button = ({ size, children, status }) => (
  <StyledButton size={size} status={status}>
    {children}
  </StyledButton>
);

export default Button;
