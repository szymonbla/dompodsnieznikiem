import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export const CTAsection = () => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={({ palette }) => ({
        width: '1050px',
        border: `2px solid ${palette.text.primary}`,
        py: '2.5rem',
        borderRadius: '12px'
      })}
    >
      <Grid sx={{ width: '40%', px: '1.5rem' }}>
        <Image src="v1652871547/HomePage/aboutHome_uiulv9.jpg" alt="Domek Pod Śnieżnikiem" width={500} height={350} />
      </Grid>
      <Grid sx={{ width: '60%', px: '1.5rem', '& > *': { mb: '1.5rem !important' } }}>
        <Typography variant="h4" fontWeight={900}>
          Chcę{' '}
          <Box component="span" sx={{ color: 'action.active', fontWeight: 900 }}>
            ciszy{' '}
          </Box>
          i spokoju!
        </Typography>
        <Typography>
          Wszystko, co potrzebujesz znajdziesz w tym domu. Pozwól sobie na odpoczynek i spędź czas wśród przyrody.
          Oszczędzaj czas podejmując świadome decyzje.
        </Typography>
        <Button
          variant="contained"
          sx={{ color: 'common.white', backgroundColor: 'text.primary', fontSize: 'subtitle1', p: 2, px: 4 }}
        >
          Chcę wypocząć
        </Button>
      </Grid>
    </Grid>
  );
};
