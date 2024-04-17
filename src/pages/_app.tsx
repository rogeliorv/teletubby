/* eslint-disable no-console */
import { createTheme, NextUIProvider } from '@nextui-org/react';
import axios from 'axios';
import { AppProps } from 'next/app';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import '@/styles/main.css';

/**
 * `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */
axios.defaults.withCredentials = true;

// 2. Call `createTheme` and pass your custom values
const theme = createTheme({
  type: 'light',
  theme: {
    colors: {
      // brand colors
      // primaryLight: '#ec4755',
      primaryLightHover: 'white',
      // primaryLightActive: '#99a0a3',
      primaryLightContrast: '$green600',
      primary: '#ec4755',
      // primaryBorder: '$green500',
      // primaryBorderHover: '$green600',
      primarySolidHover: 'white',
      // primarySolidContrast: '$white',
      // primaryShadow: '$green500',
      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      // link: '#ec4755',
      secondary: '#f56a79',
      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
        <Component {...pageProps} />;
    </NextUIProvider>
  );
}

export default MyApp;
