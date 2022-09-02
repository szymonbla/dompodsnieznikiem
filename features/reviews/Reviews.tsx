import { Grid } from '@mui/material';
import { ReviewIntro, ReviewCarousel } from 'common/components/Review';

export const Reviews = () => {
  return (
    <Grid
      maxWidth={1040}
      display="flex"
      sx={{
        width: '80%',
        position: 'relative',
        '&::before': {
          content: '" "',
          display: 'table',
          gridColumnStart: 1,
          gridRowStart: 1,
          gridColumnEnd: 2,
          gridRowEnd: 2
        },
        '&::after': {
          content: '" "',
          display: 'table',
          gridColumnStart: 1,
          gridRowStart: 1,
          gridColumnEnd: 2,
          gridRowEnd: 2
        }
      }}
    >
      <ReviewIntro />
      <ReviewCarousel />
    </Grid>
  );
};
