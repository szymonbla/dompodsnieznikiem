import { Grid } from '@mui/material';

import { BaseLayout } from 'layouts';
import { ReviewIntro, ReviewCarousel } from 'common/components';

export const Reviews = () => {
  return (
    <BaseLayout>
      <Grid
        display="flex"
        sx={(theme) => ({
          alignItems: 'flex-start',
          maxWidth: '1040px',
          width: '80%',
          [theme.breakpoints.down('md')]: { flexDirection: 'column', maxWidth: '100%', width: '100%' }
        })}
      >
        <ReviewIntro />
        <ReviewCarousel />
      </Grid>
    </BaseLayout>
  );
};
