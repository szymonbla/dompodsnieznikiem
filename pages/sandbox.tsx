import { Grid, Typography } from '@mui/material';

const Sandbox = () => {
  return (
    <Grid container>
      <Typography
        variant="h2"
        fontWeight={400}
        sx={{ color: 'common.black', letterSpacing: '1.5px', fontWeight: 500, textTransform: 'uppercase' }}
      >
        Pod Śnieżnikiem
      </Typography>
    </Grid>
  );
};

export default Sandbox;
