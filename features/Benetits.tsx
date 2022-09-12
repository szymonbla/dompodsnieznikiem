import { Typography } from '@mui/material';
import { BenefitsComponent } from 'common/components/Benefits/BenefitsWrapper';
import { BaseLayout } from 'layouts';
export const Benefits = () => {
  return (
    <BaseLayout sx={{ flexDirection: 'column' }}>
      <Typography variant="h2">Co zyskujesz?</Typography>
      <BenefitsComponent />
    </BaseLayout>
  );
};
