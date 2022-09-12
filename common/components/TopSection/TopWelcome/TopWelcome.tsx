import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { useModal } from 'state';

import { CTAButton } from 'common/components/Shared';

export const TopWelcome = () => {
  const { updateModalState } = useModal();

  const handleOpen = () => {
    updateModalState({ isOpen: true });
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
          textAlign: 'center'
        }
      })}
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
        <CTAButton label="Chcę wypocząć" handleClick={handleOpen} />
      </Grid>
    </Grid>
  );
};
