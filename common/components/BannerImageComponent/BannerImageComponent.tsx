import { Grid } from '@mui/material';
import Image from 'next/image';
import BannerImage from './images/banner.jpg';

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
        src={BannerImage}
        layout="fill"
        alt="Baner dom pod śnieżnikiem"
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
        quality={100}
        sizes="95vh"
        priority
      />
    </Grid>
  );
};
