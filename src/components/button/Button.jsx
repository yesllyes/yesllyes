// import React from 'react';
import styled, { css } from 'styled-components';

const LgButton = styled.button`
  ${({ theme }) => css`
    width: 322px;
    height: 44px;
    font-size: ${theme.fontSize.xxlarge};
    background-color: ${theme.colors.Green};
    color: white;
    border-radius: 44px;
  `}
`;

export default LgButton;
