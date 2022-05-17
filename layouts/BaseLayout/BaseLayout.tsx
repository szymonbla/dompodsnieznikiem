import { ReactNode } from 'react';
import Head from 'next/head';

import styled from '@emotion/styled';
import { Grid, Theme } from '@mui/material';

import { Footer, Menu } from 'layouts/components';

interface BaseLayoutProps {
  metaContent: string;
  children: ReactNode;
  title?: string;
}

export const BaseLayout = ({ children, metaContent, title }: BaseLayoutProps) => {
  return (
    <Root>
      <Head>
        <title>{title ? title : 'Pod Śnieżnikiem'}</title>
        <meta name="description" content={metaContent} />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>
      <Grid display="flex" justifyContent="center" alignItems="center" flexDirection="column" sx={{ width: '100vw' }}>
        <Menu />
        <Grid
          item
          sx={{
            position: 'absolute',
            top: '0',
            width: '100%',
            height: '3%',
            background: 'linear-gradient(to bottom, black , transparent)'
          }}
        />
        {children}
        <Footer />
      </Grid>
    </Root>
  );
};

const Root = styled('main')`
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
`;
