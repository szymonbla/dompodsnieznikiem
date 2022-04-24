import { Grid } from '@mui/material';

import { Banner } from 'features/homeSections';
import { Menu, Footer } from 'layouts/components';

const Sandbox = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" flexDirection="column">
      <Menu />
      <Banner />
      <Footer />
    </Grid>
  );
};

export default Sandbox;
