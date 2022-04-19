import type { NextPage } from 'next';

import { BaseLayout } from 'layouts/BaseLayout';
import { Banner } from 'features';

const Home: NextPage = () => {
  return (
    <BaseLayout metaContent="Dom pod Śnieżnikiem">
      <Banner />
    </BaseLayout>
  );
};

export default Home;
