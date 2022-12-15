import React from 'react';
import StyledButton from './styled';

<<<<<<< HEAD
const Button = ({ size, children, status, onClick }) => (
  <StyledButton size={size} status={status} onClick={onClick}>
=======
const Button = ({ size, children }) => (
  <StyledButton size={size} active={false}>
>>>>>>> Develop
    {children}
  </StyledButton>
);

export default Button;
