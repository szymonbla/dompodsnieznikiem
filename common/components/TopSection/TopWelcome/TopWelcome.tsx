import {  Button, Grid, Typography } from '@mui/material';
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
      <Typography variant="h1" sx={{ color: 'common.black' }}>
        Wypocznij w ciszym domku otoczony{' '}
        <Box component="span" sx={{ color: '#506D84' }}>
          przyrodą
        </Box>
      </Typography>
      <Typography fontSize="1.2rem" sx={{ color: 'common.black', mt: 4 }}>
        Ciesz się rodzinną atmosferą, widokami i wdziękiem Kotliny Kłodzkiej. Zapytaj o termin i korzystaj z wypoczynku!
      </Typography>
      <Grid>
        <Button variant="contained" sx={{ backgroundColor: '#506D84', fontSize: 'subtitle1', p: 2, px: 4 }}>
          Chcę wypocząć
        </Button>
      </Grid>
    </Grid>
  );
};
