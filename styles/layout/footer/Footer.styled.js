import styled, { css } from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 2rem;
  font-size: 1.7rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  background-color: ${({ theme }) =>
    `rgb(${theme.themeStyles.backgroundColorRGB})`};
  color: ${({ theme }) => css`rgb(${theme.themeStyles.textColorRGB})`};

  @media (max-width: 48em) {
    margin: 1rem 2rem;
    font-size: 1.5rem;
  }

  @media (max-width: 27em) {
    font-size: 1.2rem;
  }
`;

export const FooterTextItem = styled.p`
  padding: 1rem 0;

  a {
    text-decoration: none;
    color: ${({ theme }) => css`rgb(${theme.colors.mainRGB})`};
  }
`;
