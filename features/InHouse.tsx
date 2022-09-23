import { Box, Grid, Typography } from '@mui/material';

import { InHouseTile, InHouseDivider } from 'common/components';
import { InHouseList } from 'common/constants';
import { BaseLayout } from 'layouts';

export const InHouse = () => {
  return (
    <BaseLayout>
      <Grid display="flex" sx={{ flexDirection: 'column', width: '100%' }}>
        <InHouseDivider sx={{ mb: -1, width: '100%' }} />
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: 'primary.main', width: '100%' }}
        >
          <Grid
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={(theme) => ({
              mb: 5,
              [theme.breakpoints.down('md')]: {
                textAlign: 'center'
              }
            })}
          >
            <Typography variant="h2" sx={{ my: '1.5rem' }}>
              Co{' '}
              <Box component="span" sx={{ color: 'action.active', fontWeight: 900 }}>
                zawiera{' '}
              </Box>
              domek?
            </Typography>
            <Typography
              textAlign="center"
              sx={(theme) => ({
                width: '70%',
                [theme.breakpoints.down('md')]: {
                  width: '100%',
                  px: 4
                }
              })}
            >
              Wyposażenie domku Pod Śnieżnikiem zapewni Ci wszystkie niezbędne przedmioty, które pozwolą w pełni cieszyć
              się z wypoczynku.
            </Typography>
          </Grid>
          <Grid
            sx={(theme) => ({
              '& > div:nth-of-type(2n)': {
                flexDirection: 'row-reverse',
                [theme.breakpoints.down('md')]: {
                  flexDirection: 'column'
                }
              }
            })}
          >
            {InHouseList.map((props) => (
              <InHouseTile {...props} key={props.title} />
            ))}
          </Grid>
        </Grid>
        <InHouseDivider sx={{ mt: -1, transform: 'rotate(180deg)' }} />
      </Grid>
    </BaseLayout>
  );
};
