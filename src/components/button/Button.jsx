import React from 'react';
import StyledButton from './styled';

const Button = ({ size, children }) => (
  <StyledButton size={size} active={false}>
    {children}
  </StyledButton>
);

export default Button;
