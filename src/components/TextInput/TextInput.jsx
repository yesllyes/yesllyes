import React from 'react';
import StyledInput from './styled';

const TextInput = (props) => (
  <StyledInput>
    <div>
      <label htmlFor={props.htmlFor}>{props.title}</label>
      <input type={props.type} />
    </div>
  </StyledInput>
);

export default TextInput;
