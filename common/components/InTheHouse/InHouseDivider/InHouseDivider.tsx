import { Grid, SxProps } from '@mui/material';

import WaveDivider from 'common/icons/wave.svg';

interface InHouseDividerProps {
  sx?: SxProps;
}

export const InHouseDivider = ({ sx }: InHouseDividerProps) => {
  return (
    <Grid sx={{ width: '100%', ...sx }}>
      <WaveDivider />
    </Grid>
  );
};
