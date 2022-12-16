import styled from 'styled-components';

const StyledComment = styled.section`
  width: 100%;
  height: 61px;
  border: 1px solid black;
  display: flex;
  vertical-align: center;
  justify-content: space-between;
  padding: 16px 13px;
  position: relative;

  img {
    width: 36px;
    height: 36px;
    position: absolute;
    top: 13px;
    left: 16px;
  }

  input {
    width: 280px;
    border-style: none;
    margin-left: 55px;
    margin-right: 13px;
  }

  button {
    width: 25px;
    height: 27px;
  }
`;

export default StyledComment;
