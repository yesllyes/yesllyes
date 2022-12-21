import React from 'react';
import StyledButton from './styled';

const Button = ({ size, children, disabled, active, onClick }) => (
  <StyledButton
    size={size}
    disabled={disabled}
    active={active}
    onClick={onClick}
  >
    {console.log(disabled)}
    {children}
  </StyledButton>
);

export default Button;
