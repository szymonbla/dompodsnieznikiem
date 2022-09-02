import { Grid } from '@mui/material';
import { ReviewIntro, ReviewCarousel } from 'common/components/Review';

export const Reviews = () => {
  return (
    <Grid maxWidth={1040} display="flex" sx={{ width: '80%', position: 'relative' }}>
      <ReviewIntro />
      <ReviewCarousel />
    </Grid>
  );
};
