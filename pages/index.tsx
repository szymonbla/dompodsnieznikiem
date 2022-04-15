import type { NextPage } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';

const Home: NextPage = () => {
  return (
    <Root>
      <Head>
        <title>Pod Śnieżnikiem</title>
        <meta name="description" content="Pod Śnieżnikiem - dom w górach wynajem" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>
      <h2 style={{ color: '#000', letterSpacing: '1.5px', fontWeight: 500 }}>POD ŚNIEŻNIKIEM</h2>
    </Root>
  );
};

const Root = styled('div')`
  min-height: 100vh;
  width: 100vw;
  background-color: #fef0f0;
  margin: 0;
  padding: 0;
`;

export default Home;
