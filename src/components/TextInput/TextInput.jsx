import React from 'react';
import StyledInput from './styled';

const TextInput = ({ label, id, onChange, ...attr }) => (
  <StyledInput>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...attr} className={attr.error} onChange={onChange} />
  </StyledInput>
);

export default TextInput;
