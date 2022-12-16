import React from 'react';
import StyledInput from './styled';

const TextInput = ({ label, id, ...attr }) => (
  <StyledInput>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...attr} />
  </StyledInput>
);

export default TextInput;
