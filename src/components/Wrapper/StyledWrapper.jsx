import styled from 'styled-components';

const Gutter = {
  X: '2.5rem',
  Y: '0',
};

const StyledWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-right: calc(${Gutter.X} * 0.5);
  padding-left: calc(${Gutter.X} * 0.5);
  border: 1px solid ${({ theme }) => theme.colors.ActiveborderColor}; ;
`;

export default StyledWrapper;
