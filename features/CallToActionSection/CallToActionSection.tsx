import { Grid, Typography, Box } from '@mui/material';

import { CTAsection } from 'common/components/CTAsection/CTAsection';

export const CallToActionSection = () => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={({ palette }) => ({
        width: '100%',
        minHeight: '700px',
        pb: '4rem',
        position: 'relative',
        background: `linear-gradient(${palette.background.default},${palette.primary.main}20,${palette.primary.main}20,${palette.background.default})`
      })}
      component="section"
    >
      <CTAsection />
    </Grid>
  );
};
