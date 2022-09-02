import { Grid, SxProps } from '@mui/material';
import WaveDivider from 'common/icons/wave.svg';

interface AboutDividerProps {
  sx?: SxProps;
}

export const AboutDivider = ({ sx }: AboutDividerProps) => {
  return (
    <Grid sx={{ ...sx }}>
      <WaveDivider />
    </Grid>
  );
};
