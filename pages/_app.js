import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/Global.styled';
import Layout from '../components/layout/Layout';
import { useLayoutStore } from '../store/store';
import {
  darkThemeStyles,
  lightThemeStyles,
  colors,
  boxShadows
} from '../store/theme';

function MyApp({ Component, pageProps }) {
  const storeThemeMode = useLayoutStore(state => state.themeMode);

  const [themeStyles, setThemeStyles] = useState(darkThemeStyles);

  useEffect(() => {
    storeThemeMode === 'dark'
      ? setThemeStyles(darkThemeStyles)
      : setThemeStyles(lightThemeStyles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeThemeMode]);

  const theme = {
    themeStyles,
    colors,
    boxShadows
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
