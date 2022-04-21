import { Box, Theme, Typography } from '@mui/material';

interface TestimontalProps {
  quote: string;
  author: string;
  origin: string;
}

export const Testimontal = ({ quote, author, origin }: TestimontalProps) => {
  return (
    <Box
      sx={(theme: Theme) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '25%',
        borderRadius: 3,
        py: 2,
        px: 4,
        boxShadow: `${theme.palette.grey[600]} 0px 1px 4px`,
        [theme.breakpoints.down('md')]: {
          width: '90%'
        }
      })}
    >
      <Typography sx={{ textAlign: 'justify', mb: 2 }}>{quote}</Typography>
      <Typography sx={{ fontWeight: 600 }}>{author}</Typography>
      <Typography sx={{ fontStyle: 'italic' }}>{origin}</Typography>
    </Box>
  );
};
