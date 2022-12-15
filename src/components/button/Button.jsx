import React from 'react';
import StyledButton from './styled';

const Button = ({ size, children, status, onClick }) => (
  <StyledButton size={size} status={status} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
