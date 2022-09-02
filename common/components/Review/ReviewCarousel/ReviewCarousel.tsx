import { Grid } from '@mui/material';

import { reviewTiles } from 'common/constants';
import { ReviewTile } from './ReviewTile';

export const ReviewCarousel = () => {
  return (
    <Grid id="reviews" display="flex" flexDirection="column" sx={{ width: '50%' }}>
      {reviewTiles.map((reviewItem, index) => (
        <ReviewTile {...reviewItem} key={index} />
      ))}
    </Grid>
  );
};
