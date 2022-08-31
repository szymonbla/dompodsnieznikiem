import type { NextPage } from 'next';

import { BaseLayout } from 'layouts/BaseLayout';
import { TopSection } from 'features/topSection/TopSection';
import { Benefits } from 'features/benefits/Benetits';
import { AboutHome } from 'features/aboutHome/aboutHome';
const Home: NextPage = () => {
  return (
    <BaseLayout metaContent="Dom pod Śnieżnikiem">
      <TopSection />
      <Benefits />
      <AboutHome />
    </BaseLayout>
  );
};

export default Home;
