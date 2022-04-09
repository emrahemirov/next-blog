import Navbar from './Navbar';
import { StyledHeader } from '../../../styles/layout/header/Header.styled';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <SearchBar />
    </StyledHeader>
  );
};

export default Header;
