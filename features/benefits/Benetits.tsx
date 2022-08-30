import { Grid, Typography } from '@mui/material';
import { BenefitsComponent } from 'common/components/Benefits/BenefitsWrapper';

export const Benefits = () => {
  return (
    <Grid
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{ height: '100%', py: '4rem' }}
      component="section"
    >
      <Typography variant="h2">Co zyskujesz?</Typography>
      <BenefitsComponent />
    </Grid>
  );
};
