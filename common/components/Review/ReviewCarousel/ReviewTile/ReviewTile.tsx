import { Grid, Rating, SvgIcon, Typography } from '@mui/material';
import { ReviewTileProps } from 'common/constants/reviews';

export const ReviewTile = ({ review, rating, sourceIcon }: ReviewTileProps) => {
  return (
    <Grid
      sx={{
        width: '100%',
        color: 'common.white',
        backgroundColor: 'text.secondary',
        padding: '2.5rem 2.5rem 1.5rem 2.5rem',
        mb: '2rem',
        transform:
          'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        transformStyle: 'preserve-3d'
      }}
    >
      <Typography>{review}</Typography>
      <Grid display="flex" justifyContent="space-between" alignItems="center" sx={{ position: 'relative' }}>
        <a href="https://goo.gl/maps/Eys3XeADN3gZxUXJ7">
          <SvgIcon component={sourceIcon} inheritViewBox sx={{ width: '5em', height: '3em' }} />
        </a>
        <Rating name="no-value" value={5} readOnly />
      </Grid>
    </Grid>
  );
};
