import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const TopWelcome = () => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      sx={{
        width: '50%',
        pr: 2,
        '& > *': { mt: 4 }
      }}
    >
      <Typography variant="h1">
        Wypoczynek w spokoju wokoł{' '}
        <Box component="span" sx={{ color: 'action.active', fontWeight: 900 }}>
          przyrody
        </Box>
      </Typography>
      <Typography fontSize="1.2rem" sx={{ mt: 4 }}>
        Ciesz się rodzinną atmosferą, ciszą i wdziękiem Kotliny Kłodzkiej. Zapytaj o termin i wypocznij!
      </Typography>
      <Grid>
        <Button
          variant="contained"
          sx={{ color: 'common.white', backgroundColor: 'text.secondary', fontSize: 'subtitle1', p: 2, px: 4 }}
        >
          Chcę wypocząć
        </Button>
      </Grid>
    </Grid>
  );
};
