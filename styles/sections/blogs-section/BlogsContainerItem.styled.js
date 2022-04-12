import styled, { css } from 'styled-components';
import { FlexContainer } from '../../common/Container.styled';

export const StyledBlogsContainerItem = styled(FlexContainer)`
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  width: 70%;
  margin: 2rem 0;

  @media (max-width: 48em) {
    width: 80%;
  }

  @media (max-width: 27em) {
    margin: 1rem 0;
  }

  @media (max-width: 20em) {
    margin: 0.7rem 0;
  }
`;

export const LinkContainer = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export const ImageContainer = styled(FlexContainer)`
  overflow: hidden;
  min-width: 20rem;
  border-radius: 10px;

  @media (max-width: 48em) {
    min-width: 16rem;
  }

  @media (max-width: 27em) {
    min-width: 12rem;
  }

  @media (max-width: 20em) {
    min-width: 8rem;
  }
`;

export const ContentContainer = styled(FlexContainer)`
  color: ${({ theme }) => css`rgb(${theme.themeStyles.textColorRGB})`};
  height: 11.25rem;
  position: relative;
  padding: 0 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      ${({ theme }) => css`rgb(${theme.themeStyles.backgroundColorRGB}, 0.1)`},
      ${({ theme }) => css`rgb(${theme.themeStyles.backgroundColorRGB})`}
    );
  }

  @media (max-width: 48em) {
    height: 9rem;
  }

  @media (max-width: 27em) {
    height: 6.75rem;
  }

  @media (max-width: 20em) {
    height: 4.5rem;
  }
`;

export const ContentHeader = styled.h1`
  font-size: 1.6rem;
  line-height: 1;
  margin-bottom: 0.2rem;

  @media (max-width: 27em) {
    font-size: 1.3rem;
  }

  @media (max-width: 20em) {
    font-size: 1.2rem;
  }
`;

export const ContentDate = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;

  @media (max-width: 27em) {
    font-size: 1.1rem;
  }

  @media (max-width: 20em) {
    font-size: 1rem;
  }
`;

export const ContentSummary = styled.p`
  font-size: 1.3rem;
  line-height: 1;

  @media (max-width: 27em) {
    font-size: 0.9rem;
  }

  @media (max-width: 20em) {
    font-size: 0.8rem;
  }
`;
