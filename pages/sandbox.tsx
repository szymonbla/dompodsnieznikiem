import { Grid, Typography } from '@mui/material';

const Sandbox = () => {
  return (
    <Grid container>
      <Typography
        variant="h2"
        fontWeight={400}
        sx={{ color: 'common.white', letterSpacing: '2px', textTransform: 'uppercase' }}
      >
        Pod Śnieżnikiem
      </Typography>
    </Grid>
  );
};

export default Sandbox;
