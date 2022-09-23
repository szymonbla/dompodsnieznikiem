import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { Analytics, logEvent } from 'firebase/analytics';

import { CTAButton } from 'common/components/Shared';
import { useModal } from 'state';
import { getGoogleAnalytics } from 'common/constants';

export const TopWelcome = () => {
  const { updateModalState } = useModal();

  const handleOpen = () => {
    updateModalState({ isOpen: true });
    const analytics = getGoogleAnalytics() as Analytics;
    logEvent(analytics, 'coverCTA');
  };

  return (
    <Grid
      display="flex"
      flexDirection="column"
      sx={(theme) => ({
        width: '50%',
        pr: 2,
        '& > *': { mt: 4 },
        [theme.breakpoints.down('md')]: {
          width: '100%',
          textAlign: 'center',
          pr: 0,
          px: 4
        }
      })}
    >
      <Typography variant="h1">
        Wypoczynek w spokoju wokół{' '}
        <Box component="span" sx={{ color: 'action.active', fontWeight: 900 }}>
          przyrody
        </Box>
      </Typography>
      <Typography fontSize="1.2rem" sx={{ mt: 4 }}>
        Ciesz się rodzinną atmosferą, ciszą i wdziękami Kotliny Kłodzkiej. Zapytaj o termin i wypocznij!
      </Typography>
      <Grid>
        <CTAButton label="Dołącz do zadowolnych gości" handleClick={handleOpen} />
      </Grid>
    </Grid>
  );
};
