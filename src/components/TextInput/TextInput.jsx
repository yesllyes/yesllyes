import React from 'react';
import StyledInput from './Styled';

const Input = (props) => (
  <StyledInput>
    <div>
      <label>{props.title}</label>
      <input type="email"></input>
    </div>
  </StyledInput>
);

export default Input;
