import { Grid, Theme, Typography } from '@mui/material';

import { BannerImageComponent } from 'common/components';

export const Banner = () => {
  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="center"
      sx={{ height: '95vh', position: 'relative' }}
      component="section"
    >
      <Grid
        item
        sx={{
          width: '100%',
          height: '20%',
          bottom: '0',
          position: 'absolute',
          background: 'linear-gradient(to top,white, transparent)'
        }}
      />
      <BannerImageComponent />
      <Grid
        item
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        sx={(theme: Theme) => ({
          px: '10%',
          width: '60%',
          [theme.breakpoints.down('md')]: { alignItems: 'center', width: '100%', mx: 2, px: 0 }
        })}
      >
        <Typography variant="h1" fontWeight={600} sx={{ color: 'common.white', pb: 2, textTransform: 'uppercase' }}>
          Dom pod śnieżnikiem
        </Typography>
        <Typography variant="h2" sx={{ color: 'common.white' }}>
          Ciesz się wypoczynkiem w ciszy i spokoju
        </Typography>
      </Grid>
    </Grid>
  );
};
