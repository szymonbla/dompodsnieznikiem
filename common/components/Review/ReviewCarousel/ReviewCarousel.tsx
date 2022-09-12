import { Grid } from '@mui/material';

import { reviewTiles } from 'common/constants';
import { ReviewTile } from './ReviewTile';

export const ReviewCarousel = () => {
  return (
    <Grid
      id="reviews"
      display="flex"
      flexDirection="column"
      sx={(theme) => ({ width: '50%', [theme.breakpoints.down('md')]: { width: '100%', px: 4 } })}
    >
      {reviewTiles.map((reviewItem, index) => (
        <ReviewTile {...reviewItem} key={index} />
      ))}
    </Grid>
  );
};
