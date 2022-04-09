import styled, { css } from 'styled-components';
import { FlexContainer } from '../../common/Container.styled';
import { ButtonWithImage } from '../../common/Button.styled';
import { Input } from '../../common/Input.styled';

export const StyledSearchBar = styled(FlexContainer)`
  margin: 2rem 0;

  @media (max-width: 27em) {
    margin: 1rem 0;
  }
`;

export const InputContainer = styled(FlexContainer)`
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows.searchBar};
  transition: transform 0.2s;

  width: 30rem;

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 48em) {
    width: 20rem;
  }

  @media (max-width: 27em) {
    width: 15rem;
  }
`;

export const SearchBarInput = styled(Input)`
  height: 2.5rem;
  width: 100%;
  padding: 0 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;

  @media (max-width: 48em) {
    height: 2rem;
  }

  @media (max-width: 27em) {
    padding: 0 1.2rem;
    height: 1.5rem;
    font-size: 1.2rem;
  }

  @media (max-width: 20em) {
    padding: 0 1rem;
    height: 1rem;
    font-size: 1rem;
  }
`;

export const SearchButtonContainer = styled(FlexContainer)`
  margin: 1.2rem;
  width: 4rem;
  height: 4rem;

  @media (max-width: 24em) {
    margin: 0.7rem;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const SearchButton = styled(ButtonWithImage)`
  padding: 0.5rem;
  border-radius: 50%;
  transition: transform 0.2s;
`;
