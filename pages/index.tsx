import type { NextPage } from 'next';

import { BaseLayout } from 'layouts/BaseLayout';
import { Banner, AboutHome } from 'features';
import { Testimonials } from 'common/components';

const Home: NextPage = () => {
  return (
    <BaseLayout metaContent="Dom pod Śnieżnikiem">
      <Banner />
      <Testimonials />
      <AboutHome />
    </BaseLayout>
  );
};

export default Home;
