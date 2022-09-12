import { ReactNode } from 'react';
import { Grid, SxProps } from '@mui/material';
import { Theme } from '@mui/system';

interface BaseLayoutProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

export const BaseLayout = ({ children, sx }: BaseLayoutProps) => {
  return (
    <Grid
      component="section"
      sx={(theme) => ({
        display: 'flex',
        width: '100%',
        height: '100%',
        py: '4rem',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
          ...sx
        }
      })}
    >
      {children}
    </Grid>
  );
};
