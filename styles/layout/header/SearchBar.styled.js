import styled, { css } from 'styled-components';
import { FlexContainer } from '../../common/Container.styled';
import { ButtonWithImage } from '../../common/Button.styled';
import { Input } from '../../common/Input.styled';

export const StyledSearchBar = styled(FlexContainer)`
  margin: 2rem 0;
`;

export const InputContainer = styled(FlexContainer)`
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows.searchBar};
  transition: transform 0.2s;

  &:active {
    transform: scale(0.95);
  }
`;

export const SearchBarInput = styled(Input)`
  width: 30rem;
  height: 2.5rem;
  padding: 0 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const SearchButtonContainer = styled(FlexContainer)`
  margin: 0 1rem;
`;

export const SearchButton = styled(ButtonWithImage)`
  padding: 1rem;
  transition: transform 0.2s;
  border-radius: 50%;
`;
