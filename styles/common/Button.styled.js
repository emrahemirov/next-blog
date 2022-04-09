import styled, { css } from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;

  ${({ withImage }) =>
    !withImage
      ? css`
          &:hover {
            transform: scale(1.1);
          }

          &:active {
            transform: scale(0.9);
          }
        `
      : ''}
`;

export const ButtonWithImage = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ withImage }) =>
    withImage
      ? css`
          &:hover span {
            transform: scale(1.1);
          }

          &:active span {
            transform: scale(0.9);
          }
        `
      : ''}
`;
