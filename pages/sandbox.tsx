import { Grid } from '@mui/material';

import { Banner } from 'features/homeSections';
import { Menu, Footer } from 'layouts/components';
import { Testimonials } from 'common/components';

const Sandbox = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" flexDirection="column">
      <Menu />
      <Banner />
      <Testimonials />
      <Footer />
    </Grid>
  );
};

export default Sandbox;
