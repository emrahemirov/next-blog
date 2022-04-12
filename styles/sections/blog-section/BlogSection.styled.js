import styled, { css } from 'styled-components';
import { FlexContainer } from '../../common/Container.styled';

export const StyledBlogsSection = styled.section`
  display: flex;
  justify-content: center;
`;

export const BlogContainer = styled(FlexContainer)`
  margin: 2rem 15rem;
  color: ${({ theme }) => css`rgb(${theme.themeStyles.textColorRGB})`};

  @media (max-width: 64em) {
    margin: 2rem 5rem;
  }
  @media (max-width: 27em) {
    margin: 2rem;
  }
`;

export const BlogHeader = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

export const BlogDate = styled.p`
  font-size: 2rem;
  margin-left: 2rem;
  margin-bottom: 0.5rem;
`;

export const BlogText = styled.p`
  font-size: 1.6rem;
`;
