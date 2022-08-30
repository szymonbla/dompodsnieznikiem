import { Grid } from '@mui/material';
import { BenefitComponent } from 'common/components/BenefitComponent/BenefitComponent';
import { benefitsList } from 'common/constants';

export const BenefitsComponent = () => {
  return (
    <Grid display="flex" sx={{ my: '2em', width: '90%', mt: '3em' }}>
      {benefitsList.map(({ title, description }) => (
        <BenefitComponent title={title} description={description} key={title} />
      ))}
    </Grid>
  );
};
