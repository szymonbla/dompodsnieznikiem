import Image from 'next/image';
import { Grid, Typography } from '@mui/material';

import { InHouseItem } from 'common/constants';

export const InHouseTile = ({ title, description, image, altImage }: InHouseItem) => {
  return (
    <Grid display="flex" sx={{ backgroundColor: 'background.default', maxWidth: '1250px', my: 5, p: 5 }}>
      <Grid display="flex" flexDirection="column" justifyContent="center" sx={{ width: '50%' }}>
        <Typography variant="h4" fontWeight={900} sx={{ mb: '1.5rem' }}>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Grid>
      <Grid display="flex" justifyContent="center" alignItems="center" sx={{ width: '50%', px: '1.5rem' }}>
        <Image src={image} alt={altImage} width={500} height={400} style={{ borderRadius: '8px' }} />
      </Grid>
    </Grid>
  );
};
