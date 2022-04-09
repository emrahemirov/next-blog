import styled, { css } from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ container }) =>
    css`
      ${container.direction}
    `};

  ${({ container }) =>
    container.direction.includes('row')
      ? css`
          align-items: ${container.axisY};
          justify-content: ${container.axisX};
        `
      : css`
          align-items: ${container.axisX};
          justify-content: ${container.axisY};
        `};
`;
