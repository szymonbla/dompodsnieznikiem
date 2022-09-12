import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { createEmotionCache, theme } from 'common';
import { ModalContextProvider } from 'state';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <ModalContextProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </ModalContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
