import { Grid, Box } from '@mui/material';
import { TopWelcome, TopImage } from 'common/components/TopSection';

export const TopSection = () => {
  return (
    <Grid display="flex" alignItems="center" sx={{ width: '80%', height: '100%', py: '4rem' }} component="section">
      <Box
        sx={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          opacity: 0.5
        }}
      />
      <TopWelcome />
      <TopImage />
    </Grid>
  );
};
