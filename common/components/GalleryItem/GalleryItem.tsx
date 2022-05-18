import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface GalleryItemProps {
  src: string;
  alt: string;
  slideTitle: string;
  slideDescription: string;
}

export const GalleryItem = ({ src, alt, slideTitle, slideDescription }: GalleryItemProps) => {
  return (
    <Box sx={{ position: 'relative', zIndex: -1 }}>
      <Box sx={{ '& > span': { borderRadius: 3 } }}>
        <Image src={src} alt={alt} width={1280} height={920} objectFit="cover" objectPosition="center" />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '-8%',
          left: '15%',
          backgroundColor: 'grey.200',
          width: '40%',
          borderRadius: 3,
          zIndex: 10,
          p: 2
        }}
      >
        <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
          {slideTitle}
        </Typography>
        <Typography sx={{ textAlign: 'justify' }}>{slideDescription}</Typography>
      </Box>
    </Box>
  );
};
