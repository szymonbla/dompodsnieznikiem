import type { NextPage } from 'next';

import { BaseLayout } from 'layouts/BaseLayout';
import { TopSection } from 'features/topSection/TopSection';

const Home: NextPage = () => {
  return (
    <BaseLayout metaContent="Dom pod Śnieżnikiem">
      <TopSection />
    </BaseLayout>
  );
};

export default Home;
