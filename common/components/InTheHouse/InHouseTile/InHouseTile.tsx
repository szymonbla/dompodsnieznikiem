import Image from 'next/image';
import { Grid, Typography } from '@mui/material';

import { InHouseItem } from 'common/constants';

export const InHouseTile = ({ title, description, image, altImage }: InHouseItem) => {
  return (
    <Grid
      display="flex"
      sx={(theme) => ({
        backgroundColor: 'background.default',
        maxWidth: '1250px',
        my: 5,
        p: 5,
        [theme.breakpoints.down('md')]: { flexDirection: 'column', width: '100%', maxWidth: '100%' }
      })}
    >
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={(theme) => ({
          width: '50%',
          [theme.breakpoints.down('md')]: { width: '100%', textAlign: 'center', mb: '1.5rem' }
        })}
      >
        <Typography variant="h4" fontWeight={900} sx={{ mb: '1.5rem' }}>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Grid>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={(theme) => ({ width: '50%', px: '1.5rem', [theme.breakpoints.down('md')]: { width: '100%', px: 0 } })}
      >
        <Image src={image} alt={altImage} width={500} height={400} style={{ borderRadius: '8px' }} />
      </Grid>
    </Grid>
  );
};
