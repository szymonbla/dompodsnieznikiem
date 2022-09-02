import type { NextPage } from 'next';

import { BaseLayout } from 'layouts/BaseLayout';
import { TopSection } from 'features/topSection/TopSection';
import { Benefits } from 'features/benefits/Benetits';
import { InHouse } from 'features/inHouse/InHouse';
import { Reviews } from 'features/reviews/Reviews';
import { CallToActionSection } from 'features/CallToActionSection/CallToActionSection';

const Home: NextPage = () => {
  return (
    <BaseLayout metaContent="Dom pod Śnieżnikiem">
      <TopSection />
      <Benefits />
      <InHouse />
      <Reviews />
      <CallToActionSection />
    </BaseLayout>
  );
};

export default Home;
