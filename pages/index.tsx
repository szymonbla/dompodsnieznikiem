import type { NextPage } from 'next';

import { BaseLayout } from 'layouts/BaseLayout';
import { TopSection } from 'features/topSection/TopSection';
import { Benefits } from 'features/benefits/Benetits';
import { InHouse } from 'features/inHouse/InHouse';
import { Reviews } from 'features/reviews/Reviews';

const Home: NextPage = () => {
  return (
    <BaseLayout metaContent="Dom pod Śnieżnikiem">
      <TopSection />
      <Benefits />
      <InHouse />
      <Reviews />
    </BaseLayout>
  );
};

export default Home;
