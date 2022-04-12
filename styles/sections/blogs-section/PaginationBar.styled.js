import styled, { css } from 'styled-components';
import { FlexContainer } from '../../common/Container.styled';
import { Button } from '../../common/Button.styled';

export const StyledPaginationBar = styled(FlexContainer)`
  width: 70%;
  margin: 2rem 0;
  flex-wrap: wrap;
  @media (max-width: 48em) {
    width: 80%;
  }
`;

export const PageNumberContainer = styled(FlexContainer)`
  width: 4rem;
  height: 4rem;

  @media (max-width: 27em) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const PageNumber = styled(Button)`
  padding: 1rem;
  font-weight: 700;
  color: ${({ theme }) => css`rgb(${theme.themeStyles.textColorRGB})`};
`;
