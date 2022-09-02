import { Grid } from '@mui/material';
import { ReviewTile } from './ReviewTile';
import { reviewTiles } from 'common/constants/reviews';

export const ReviewCarousel = () => {
  return (
    <Grid display="flex" flexDirection="column" sx={{ width: '50%' }}>
      {reviewTiles.map((reviewItem) => (
        <ReviewTile {...reviewItem} key={reviewItem.review} />
      ))}
    </Grid>
  );
};
