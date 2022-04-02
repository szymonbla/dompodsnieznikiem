import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pod Śnieżnikiem</title>
        <meta name="description" content="Pod Śnieżnikiem - domek w górach na wynajem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>test</h3>
      </main>
    </div>
  );
};

export default Home;