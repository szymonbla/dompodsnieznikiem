import { Box, Theme, Typography } from '@mui/material';

export interface TestimonialItemProps {
  quote: string;
  author: string;
  origin: string;
}

export const TestimonialItem = ({ quote, author, origin }: TestimonialItemProps) => {
  return (
    <Box
      sx={(theme: Theme) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 3,
        minWidth: '400px',
        height: 'fit-content',
        py: 2,
        px: 4,
        my: 4,
        boxShadow: `${theme.palette.grey[600]} 0px 1px 2px`,
        [theme.breakpoints.down('md')]: {
          minWidth: '100%'
        }
      })}
    >
      <Typography sx={{ textAlign: 'justify', mb: 2 }}>{quote}</Typography>
      <Typography sx={{ fontWeight: 600 }}>{author}</Typography>
      <Typography sx={{ fontStyle: 'italic' }}>{origin}</Typography>
    </Box>
  );
};
