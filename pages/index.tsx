import type { NextPage } from 'next';

import { BaseLayout } from 'layouts/BaseLayout';
import { Banner, AboutHome } from 'features';
import { Testimonials, GalleryItem } from 'common/components';

const Home: NextPage = () => {
  return (
    <BaseLayout metaContent="Dom pod Śnieżnikiem">
      <Banner />
      <Testimonials />
      <AboutHome />
      <GalleryItem
        src="v1652877224/Gallery/dining-room.jpg"
        alt="Dining Room"
        slideTitle="Dining Room"
        slideDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque, libero eget pulvinar volutpat, ligula eros consectetur enim, sit amet condimentum ligula elit eu tortor. Nullam consectetur erat et neque ornare vulputate"
      />
    </BaseLayout>
  );
};

export default Home;
