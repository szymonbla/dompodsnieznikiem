import { Grid } from '@mui/material';

import { Banner } from 'features/homeSections';
import { Menu } from 'common/components';

const Sandbox = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" flexDirection="column">
      <Menu />
      <Banner />
    </Grid>
  );
};

export default Sandbox;
