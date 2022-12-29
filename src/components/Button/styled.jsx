import styled, { css } from 'styled-components';

const SIZE = {
  lg: css`
    width: 320px;
    padding: 14px 0px;
    margin: 20px 0px;
    border-radius: 44px;
  `,
  md: css`
    width: 120px;
    padding: 13px 0px;
    border-radius: 30px;
  `,
  sm: css`
    width: 90px;
    padding: 8px 0px;
    border-radius: 32px;
  `,
  xsm: css`
    width: 56px;
    padding: 7px 0px;
    border-radius: 26px;
    font-size: ${({ theme }) => theme.fontSize.small};
  `,
};

const StyledButton = styled.button`
  ${({ theme }) => css`
    width: ${(props) => props.width};
    background-color: ${theme.colors.Green};
    font-size: ${theme.fontSize.medium};
    font-weight: 400;
    color: ${theme.colors.White};
  `}

  ${(props) => SIZE[props.size]}

  &:disabled {
    ${({ theme }) => css`
      background-color: ${theme.colors.lightGreen};
      cursor: not-allowed;
    `}
  }
  &:hover {
    filter: saturate(2);
  }

  ${(props) =>
    props.active &&
    (({ theme }) => css`
      border: 1px solid ${theme.colors.ActiveborderColor};
      background-color: ${theme.colors.White};
      color: ${theme.colors.lightGray};
    `)}
`;

export default StyledButton;
