import { Grid, Typography } from '@mui/material';
import { BenefitComponentProps } from 'common/constants/benefits';
import LandscapeIcon from '@mui/icons-material/Landscape';

export const BenefitComponent = ({ title, description }: BenefitComponentProps) => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ '& > *': { mb: '1em' } }}
    >
      <LandscapeIcon sx={{ width: '3em', height: '3em' }} />
      <Typography variant="h4" fontWeight={600}>
        {title}
      </Typography>
      <Typography sx={{ width: '70%' }}>{description}</Typography>
    </Grid>
  );
};
