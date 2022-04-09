import styled, { css } from 'styled-components';
import { FlexContainer } from '../../common/Container.styled';
import { ButtonWithImage } from '../../../styles/common/Button.styled';

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

export const ThemeModeContainer = styled(FlexContainer)`
  margin: 1.2rem;

  @media (max-width: 48em) {
    margin: 1rem;
  }
`;

export const ThemeModeButton = styled(ButtonWithImage)`
  padding: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
  border-radius: 50%;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.themeModeButton};
  }

  @media (max-width: 48em) {
    padding: 0.5rem;
  }
`;
