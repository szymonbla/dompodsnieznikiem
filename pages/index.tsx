import type { NextPage } from 'next';

import { BaseLayout } from 'layouts/BaseLayout';
import { TopSection } from 'features/topSection/TopSection';
import { Benefits } from 'features/benefits/Benetits';

const Home: NextPage = () => {
  return (
    <BaseLayout metaContent="Dom pod Śnieżnikiem">
      <TopSection />
      <Benefits />
    </BaseLayout>
  );
};

export default Home;
