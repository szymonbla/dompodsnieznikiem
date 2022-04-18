import { Grid, Typography } from '@mui/material';
import { BannerImageComponent } from 'common/components';

export const Banner = () => {
  return (
    <Grid container justifyContent="flex-start" alignItems="center" sx={{ height: '90vh' }}>
      <Grid
        sx={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          height: '20%',
          background: 'linear-gradient(to top,white, transparent);'
        }}
      />
      <BannerImageComponent />
      <Grid item justifyContent="flex-start" alignItems="center" sx={{ px: '10%', maxWidth: '60%' }}>
        <Typography variant="h1" fontWeight={600} sx={{ color: 'common.white', pb: 2, textTransform: 'uppercase' }}>
          Dom pod śnieżnikiem
        </Typography>
        <Typography variant="h2" sx={{ color: 'common.white' }}>
          Miejsce dla tych, którzy pragną wypocząć w ciszy i spokoju
        </Typography>
      </Grid>
    </Grid>
  );
};
