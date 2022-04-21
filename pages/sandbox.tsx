import { Grid } from '@mui/material';

import { Banner } from 'features/homeSections';
import { Menu, Footer } from 'layouts/components';
import { Testimontal } from 'common/components';

const Sandbox = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" flexDirection="column">
      <Menu />
      <Banner />
      <Testimontal
        quote="Przepiękne widoki, znakomita i śliczna lokalizacja. Cisza, spokój. Gospodarz zadbał o to, aby niczego nam nie brakowało. Zdjęcia nie oddają tego jak duży i wspaniały jest domek! "
        author="Michał Budniak"
        origin="Opinia google"
      />
      <Footer />
    </Grid>
  );
};

export default Sandbox;
