import Image from 'next/Image';
import { useLayoutStore } from '../../../store/store';
import {
  StyledNavbar,
  LogoContainer,
  ThemeModeContainer,
  ThemeModeButton
} from '../../../styles/layout/header/Navbar.styled';

const Navbar = () => {
  const storeToggleMode = useLayoutStore(state => state.toggleMode);
  const storeThemeMode = useLayoutStore(state => state.themeMode);

  const themeModeSVG = storeThemeMode === 'dark' ? 'sun' : 'moon';

  const handleThemeMode = () => {
    storeToggleMode();
  };

  return (
    <StyledNavbar
      container={{ direction: 'row', axisX: 'space-between', axisY: 'center' }}
    >
      <LogoContainer
        container={{ direction: 'row', axisX: 'center', axisY: 'center' }}
      >
        <Image src={`/images/logo.png`} alt='logo' width='70' height='70' />
      </LogoContainer>
      <ThemeModeContainer
        container={{ direction: 'row', axisX: 'center', axisY: 'center' }}
      >
        <ThemeModeButton onClick={handleThemeMode}>
          <Image
            src={`/svgs/${themeModeSVG}.svg`}
            alt='icon'
            width='20'
            height='20'
          ></Image>
        </ThemeModeButton>
      </ThemeModeContainer>
    </StyledNavbar>
  );
};

export default Navbar;
