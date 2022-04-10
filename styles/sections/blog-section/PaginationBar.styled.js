import styled, { css } from 'styled-components';
import { FlexContainer } from '../../common/Container.styled';
import { Button } from '../../common/Button.styled';

export const StyledPaginationBar = styled(FlexContainer)`
  width: 70%;
  height: 50px;
  margin: 2rem 0;

  @media (max-width: 48em) {
    width: 80%;
  }
`;

export const PageNumberContainer = styled(FlexContainer)`
  width: 4rem;
  height: 4rem;
`;

export const PageNumber = styled(Button)`
  padding: 1rem;
  font-weight: 700;
  color: ${({ theme }) => css`rgb(${theme.themeStyles.textColorRGB})`};
`;
