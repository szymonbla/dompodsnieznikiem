import { ReactNode } from 'react';
import Head from 'next/head';

import { Grid } from '@mui/material';
import styled from '@emotion/styled';

import { Footer, Menu } from 'layouts/components';

interface BaseLayoutProps {
  metaContent: string;
  children: ReactNode;
  title?: string;
}

export const BaseLayout = ({ children, metaContent, title }: BaseLayoutProps) => {
  return (
    <Root id='page-content'>
      <Head>
        <title>{title ?? 'Pod Śnieżnikiem'}</title>
        <meta name="description" content={metaContent} />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>
      <Grid display="flex" justifyContent="center" alignItems="center" flexDirection="column" sx={{ width: '100%' }}>
        <Menu />
        {children}
        {/* <Footer /> */}
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
  background-color: #f3d5c0;
`;
