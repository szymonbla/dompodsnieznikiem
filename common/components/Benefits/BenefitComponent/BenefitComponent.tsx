import { Grid, Typography, SvgIcon } from '@mui/material';

import { BenefitComponentProps } from 'common/constants';

export const BenefitComponent = ({ icon, title, description }: BenefitComponentProps) => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ '& > *': { marginBottom: '1rem !important' } }}
    >
      <SvgIcon component={icon} sx={{ fill: 'transparent', width: '3em', height: '3em ' }} />
      <Typography variant="h4" fontWeight={600} color="text.secondary" sx={{ textAlign: 'center' }}>
        {title}
      </Typography>
      <Typography sx={{ width: '70%', textAlign: 'center' }}>{description}</Typography>
    </Grid>
  );
};
