import React from 'react';
import StyledInput from './styled';

const TextInput = (props) => (
  <StyledInput>
    <div>
      <label>{props.title}</label>
      <input type="email"></input>
    </div>
  </StyledInput>
);

export default TextInput;
