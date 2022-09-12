import { Grid, Typography } from '@mui/material';
import { BenefitsComponent } from 'common/components/Benefits/BenefitsWrapper';
import { BaseLayout } from 'layouts';
export const Benefits = () => {
  return (
    <BaseLayout>
      <Grid display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Typography variant="h2">Co zyskujesz?</Typography>
        <BenefitsComponent />
      </Grid>
    </BaseLayout>
  );
};
