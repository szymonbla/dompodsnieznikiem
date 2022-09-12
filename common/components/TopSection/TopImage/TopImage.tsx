import Image from 'next/image';

import { Grid } from '@mui/material';

export const TopImage = () => (
  <Grid
    sx={(theme) => ({
      width: '50%',
      borderRadius: 2,
      [theme.breakpoints.down('md')]: {
        width: '100%',
        px: 2
      }
    })}
  >
    <Image
      src="v1652871547/HomePage/aboutHome_uiulv9.jpg"
      alt="Baner dom pod śnieżnikiem"
      width={800}
      height={600}
      style={{ borderRadius: '12px' }}
      priority
    />
  </Grid>
);
