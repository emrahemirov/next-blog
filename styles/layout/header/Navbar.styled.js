import styled, { css } from 'styled-components';
import { FlexContainer } from '../../common/Container.styled';
import { ButtonWithImage } from '../../../styles/common/Button.styled';

export const StyledNavbar = styled(FlexContainer)`
  width: 100%;
  box-shadow: ${({ theme }) =>
    css`
      ${theme.boxShadows.navbar}
    `};
`;

export const LogoContainer = styled(FlexContainer)`
  width: 7rem;
  height: 7rem;
  margin: 1rem;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.boxShadows.navbar};
`;

export const ThemeModeContainer = styled(FlexContainer)`
  margin: 1rem;
`;

export const ThemeModeButton = styled(ButtonWithImage)`
  padding: 1rem;
  transition: transform 0.2s;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.boxShadows.themeModeButton};
`;
