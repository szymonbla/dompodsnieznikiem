import { Box, Grid, Typography } from '@mui/material';

export const ReviewIntro = () => {
  return (
    <Grid sx={{ height: 'min-content', width: '50%', position: 'sticky', top: '6rem', mr: '7%', '& > *': { mb: 2 } }}>
      <Typography variant="h2">
        Czekaj! Jeszcze{' '}
        <Box component="span" sx={{ color: 'action.active', fontWeight: 900 }}>
          opinie
        </Box>
      </Typography>
      <Typography variant="subtitle2" lineHeight={1.8}>
        Each color portrays a different feeling or emotion, and by understanding the psychology of color, you can choose
        a color that will resonate with your target audience and give off the vibe & emotion you want.
      </Typography>
    </Grid>
  );
};
