import type { NextPage } from 'next';

import { PageLayout } from 'layouts';
import { TopSection, Benefits, InHouse, Outro, Reviews } from 'features';
import { FormModal } from 'common/components/Shared';

const Home: NextPage = () => {
  return (
    <PageLayout metaContent="Dom pod Śnieżnikiem">
      <FormModal />
      <TopSection />
      <Benefits />
      <InHouse />
      <Reviews />
      <Outro />
    </PageLayout>
  );
};

export default Home;
