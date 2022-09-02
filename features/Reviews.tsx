import { BaseLayout } from 'layouts';
import { ReviewIntro, ReviewCarousel } from 'common/components';

export const Reviews = () => {
  return (
    <BaseLayout
      sx={{
        alignItems: 'flex-start',
        flexDirection: 'row',
        maxWidth: '1040px',
        width: '80%'
      }}
    >
      <ReviewIntro />
      <ReviewCarousel />
    </BaseLayout>
  );
};
