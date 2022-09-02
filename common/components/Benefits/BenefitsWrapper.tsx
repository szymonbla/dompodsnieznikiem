import { Grid } from '@mui/material';
import { BenefitComponent } from 'common/components';
import { benefitsList } from 'common/constants';

export const BenefitsComponent = () => {
  return (
    <Grid display="flex" sx={{ my: '2em', width: '80%', mt: '3em' }}>
      {benefitsList.map(({ icon, title, description }) => (
        <BenefitComponent icon={icon} title={title} description={description} key={title} />
      ))}
    </Grid>
  );
};
