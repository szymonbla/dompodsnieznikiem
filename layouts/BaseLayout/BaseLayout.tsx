import { ReactNode } from 'react';
import { Grid, SxProps } from '@mui/material';

interface BaseLayoutProps {
  children: ReactNode;
  sx?: SxProps;
}

export const BaseLayout = ({ children, sx }: BaseLayoutProps) => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      component="section"
      sx={{ width: '100%', height: '100%', py: '4rem', ...sx }}
    >
      {children}
    </Grid>
  );
};
