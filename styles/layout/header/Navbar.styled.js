import styled, { css } from 'styled-components';
import { FlexContainer } from '../../common/Container.styled';
import { ButtonWithImage } from '../../../styles/common/Button.styled';

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  width: 100%;
  box-shadow: ${({ theme }) =>
    css`
      ${theme.boxShadows.navbar}
    `};
`;

export const LogoContainer = styled(FlexContainer)`
  width: 6rem;
  height: 6rem;
  margin: 1.2rem;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.boxShadows.navbar};

  @media (max-width: 48em) {
    width: 4rem;
    height: 4rem;
    margin: 1rem;
  }

  @media (max-width: 24em) {
    width: 3rem;
    height: 3rem;
    margin: 0.7rem;
  }
`;

export const ThemeModeContainer = styled(FlexContainer)`
  width: 4rem;
  height: 4rem;

  @media (max-width: 48em) {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 20em) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const ThemeModeButton = styled(ButtonWithImage)`
  padding: 0.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
  border-radius: 50%;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.themeModeButton};
  }
`;
