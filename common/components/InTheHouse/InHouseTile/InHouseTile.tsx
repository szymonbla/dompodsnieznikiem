import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { InHouseItem } from 'common/constants/inhouse';

export const InHouseTile = ({ title, description, image }: InHouseItem) => {
  return (
    <Grid display="flex" sx={{ backgroundColor: 'background.default', maxWidth: '1250px', my: 5, p: 5 }}>
      <Grid display="flex" flexDirection="column" justifyContent="center" sx={{ width: '50%' }}>
        <Typography variant="h4" fontWeight={900} sx={{ mb: '1.5rem' }}>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Grid>
      <Grid sx={{ width: '50%', px: '1.5rem' }}>
        <Image src={image} alt="Baner dom pod śnieżnikiem" width={700} height={500} priority />
      </Grid>
    </Grid>
  );
};
