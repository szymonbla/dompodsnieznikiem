import type { NextPage } from 'next';

import { PageLayout } from 'layouts';
import { TopSection, Benefits, InHouse, Outro, Reviews } from 'features';

const Home: NextPage = () => {
  return (
    <PageLayout metaContent="Dom pod Śnieżnikiem">
      <TopSection />
      <Benefits />
      <InHouse />
      <Reviews />
      <Outro />
    </PageLayout>
  );
};

export default Home;
