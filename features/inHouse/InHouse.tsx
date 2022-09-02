import { Box, Grid, Typography } from '@mui/material';
import { AboutDivider } from 'common/components/AboutHome';
import { InHouseTile } from 'common/components/InTheHouse';
import { InHouseList } from 'common/constants/inhouse';
export const InHouse = () => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      flexDirection="column"
      sx={{ width: '100%', height: '100%', pb: '4rem', position: 'relative' }}
      component="section"
    >
      <AboutDivider sx={{ mb: -1 }} />
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: 'primary.main', pb: '3em' }}
      >
        <Grid display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
          <Typography variant="h2" sx={{ my: '1.5rem' }}>
            Co{' '}
            <Box component="span" sx={{ color: 'action.active', fontWeight: 900 }}>
              zawiera{' '}
            </Box>
            domek?
          </Typography>
          <Typography textAlign="center" sx={{ width: '80%' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </Grid>
        <Grid sx={{ '& > div:nth-child(even)': { flexDirection: 'row-reverse' } }}>
          {InHouseList.map((props) => (
            <InHouseTile {...props} key={props.title} />
          ))}
        </Grid>
      </Grid>
      <AboutDivider sx={{ mt: -1, transform: 'rotate(180deg)' }} />
    </Grid>
  );
};
