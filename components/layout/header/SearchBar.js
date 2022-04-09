import Image from 'next/Image';
import { useRef } from 'react';
import {
  StyledSearchBar,
  InputContainer,
  SearchBarInput,
  SearchButtonContainer,
  SearchButton
} from '../../../styles/layout/header/SearchBar.styled.js';

const SearchBar = () => {
  const inputRef = useRef();

  const handleInputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <StyledSearchBar
      container={{ direction: 'row', axisX: 'center', axisY: 'center' }}
    >
      <InputContainer
        container={{ direction: 'row', axisX: 'center', axisY: 'center' }}
        onClick={handleInputFocus}
      >
        <SearchBarInput ref={inputRef} />
      </InputContainer>
      <SearchButtonContainer
        container={{ direction: 'row', axisX: 'center', axisY: 'center' }}
      >
        <SearchButton>
          <Image
            src='/svgs/search.svg'
            alt='search icon'
            width='20'
            height='20'
          />
        </SearchButton>
      </SearchButtonContainer>
    </StyledSearchBar>
  );
};

export default SearchBar;
