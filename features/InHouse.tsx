import { Box, Grid, Typography } from '@mui/material';

import { InHouseTile, InHouseDivider } from 'common/components';
import { InHouseList } from 'common/constants';
import { BaseLayout } from 'layouts';

export const InHouse = () => {
  return (
    <BaseLayout>
      <InHouseDivider sx={{ mb: -1 }} />
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: 'primary.main', width: '100%' }}
      >
        <Grid display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
          <Typography variant="h2" sx={{ my: '1.5rem' }}>
            Co{' '}
            <Box component="span" sx={{ color: 'action.active', fontWeight: 900 }}>
              zawiera{' '}
            </Box>
            domek?
          </Typography>
          <Typography textAlign="center" sx={{ width: '50%' }}>
            Wyposażenie domku Pod Śnieżnikiem zapewni Ci wszystkie niezbędne przedmioty do cieszenia się z wypoczynku.
            Dzięki niemu będziesz w stanie w pełni cieszyć się z odpoczynku.
          </Typography>
        </Grid>
        <Grid sx={{ '& > div:nth-of-type(2n)': { flexDirection: 'row-reverse' } }}>
          {InHouseList.map((props) => (
            <InHouseTile {...props} key={props.title} />
          ))}
        </Grid>
      </Grid>
      <InHouseDivider sx={{ mt: -1, transform: 'rotate(180deg)' }} />
    </BaseLayout>
  );
};
