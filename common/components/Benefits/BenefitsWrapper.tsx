import { Grid } from '@mui/material';

import { BenefitComponent } from 'common/components';
import { benefitsList } from 'common/constants';

export const BenefitsComponent = () => {
  return (
    <Grid
      display="flex"
      sx={(theme) => ({
        my: '2em',
        width: '80%',
        mt: '3em',
        [theme.breakpoints.down('md')]: {
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: 1,
          gap: 4
        }
      })}
    >
      {benefitsList.map(({ icon, title, description }) => (
        <BenefitComponent icon={icon} title={title} description={description} key={title} />
      ))}
    </Grid>
  );
};
