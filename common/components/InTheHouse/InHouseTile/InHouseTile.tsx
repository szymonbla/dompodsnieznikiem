import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

export const InHouseTile = () => {
  return (
    <Grid display="flex" sx={{ backgroundColor: 'background.default', maxWidth: '1250px', my: 5, p: 5 }}>
      <Grid display="flex" flexDirection="column" justifyContent="center" sx={{ width: '50%' }}>
        <Typography variant="h4" fontWeight={900} sx={{ mb: '1.5rem' }}>
          Kuchnia
        </Typography>
        <Typography variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book
        </Typography>
      </Grid>
      <Grid sx={{ width: '50%', px: '1.5rem' }}>
        <Image
          src="v1652877221/Gallery/kitchen.jpg"
          alt="Baner dom pod śnieżnikiem"
          width={700}
          height={500}
          priority
        />
      </Grid>
    </Grid>
  );
};
