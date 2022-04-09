import styled, { css } from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const ButtonWithImage = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
