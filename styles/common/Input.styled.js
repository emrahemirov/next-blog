import styled, { css } from 'styled-components';

export const Input = styled.input`
  outline: none;
  border: none;
  background-color: ${({ theme }) =>
    css`rgb(${theme.themeStyles.backgroundColorRGB})`};
  color: ${({ theme }) => css`rgb(${theme.themeStyles.textColorRGB})`};
`;
