import { Box, Grid, Typography } from '@mui/material';

export const ReviewIntro = () => {
  return (
    <Grid
      sx={(theme) => ({
        height: 'min-content',
        width: '50%',
        position: 'sticky',
        top: '6rem',
        mr: '7%',
        '& > *': { mb: 2 },
        [theme.breakpoints.down('md')]: {
          position: 'relative',
          top: '0',
          width: '100%',
          mr: 0,
          px: 4,
          mb: '1.5rem'
        }
      })}
    >
      <Typography variant="h2">
        Czekaj! Jeszcze{' '}
        <Box component="span" sx={{ color: 'action.active', fontWeight: 900 }}>
          opinie
        </Box>
      </Typography>
      <Typography variant="subtitle2" lineHeight={1.8}>
        Dom Pod Śnieżniem jest prowadzony od 4 lat. Został zweryfikowany przez blisko 1000 klientów. Nie zwlekaj i
        sprawdź na własnej skórze.
      </Typography>
    </Grid>
  );
};
