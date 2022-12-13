import React from 'react'
import StyledInput  from './Styled';


 const Input = () => (
  
    <StyledInput>
    <div>
        <p>이메일</p>
        <input type='email' placeholder='이메일을 입력해주세요'></input>
    </div>
    </StyledInput>
  
);

export default Input;
