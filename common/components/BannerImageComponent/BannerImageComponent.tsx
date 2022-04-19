import Image from 'next/image';

import { Grid } from '@mui/material';

export const BannerImageComponent = () => {
  return (
    <Grid
      container
      sx={{
        position: 'absolute',
        height: '95vh',
        overflow: 'hidden',
        zIndex: '-1',
        top: 0
      }}
    >
      <Image
        src="v1650283702/HomePage/banner_pf6s5q.jpg"
        layout="fill"
        alt="Baner dom pod śnieżnikiem"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        sizes="95vh"
        priority
      />
    </Grid>
  );
};
