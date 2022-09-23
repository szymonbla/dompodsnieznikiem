import { Grid } from '@mui/material';

import { BaseLayout } from 'layouts';
import { TopWelcome, TopImage } from 'common/components';

export const TopSection = () => {
  return (
    <BaseLayout sx={{ flexDirection: 'column', gap: 2 }}>
      <Grid
        display="flex"
        sx={(theme) => ({
          width: '80%',
          alignItems: 'center',
          [theme.breakpoints.down('md')]: { width: '100%', flexDirection: 'column', gap: 2 }
        })}
      >
        <TopWelcome />
        <TopImage />
      </Grid>
    </BaseLayout>
  );
};
