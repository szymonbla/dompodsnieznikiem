import { Grid } from '@mui/material';
import { TopWelcome, TopImage } from 'common/components/TopSection';

export const TopSection = () => {
  return (
    <Grid display="flex" alignItems="center" sx={{ width: '80%', height: '100%', py: '4rem' }} component="section">
      <TopWelcome />
      <TopImage />
    </Grid>
  );
};
