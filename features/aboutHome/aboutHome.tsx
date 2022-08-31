import { Grid, Typography } from '@mui/material';
import { AboutDivider } from 'common/components/AboutHome';

export const AboutHome = () => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      flexDirection="column"
      sx={{ width: '100%', height: '100%', py: '4rem', position: 'relative' }}
      component="section"
    >
      <AboutDivider />
      <Grid display="flex" justifyContent="center" sx={{ backgroundColor: 'primary.main' }}>
        <Typography variant="h3">Co zawiera domek?</Typography>
      </Grid>
    </Grid>
  );
};
