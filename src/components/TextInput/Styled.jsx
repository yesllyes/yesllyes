import styled from "styled-components";

const StyledInput = styled.div`
    width: 322px;
    height: 48px; 
    border: 1px solid black;

  p {
    font-size: ${({ theme }) => theme.fontSize.small};
    color: #767676;

  } 

  input {
    width: 100%;
    border: none;
    margin : 9px 0px;
    font-size: ${({ theme }) => theme.fontSize.small};
  }

`;

export default StyledInput;