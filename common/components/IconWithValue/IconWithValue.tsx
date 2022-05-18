import { Typography, Box } from '@mui/material';
import Image from 'next/image';

export interface IconWithValueProps {
  value: string;
  src: string;
  alt: string;
}

export const IconWithValue = ({ src, alt, value }: IconWithValueProps) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Image src={src} width={40} height={40} alt={alt} />
      <Typography variant="subtitle2" fontWeight={600} sx={{ ml: 1 }}>
        {value}
      </Typography>
    </Box>
  );
};
