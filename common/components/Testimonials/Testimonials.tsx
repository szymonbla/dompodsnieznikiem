import { useState, useEffect } from 'react';
import { Box, Button, Theme } from '@mui/material';

import { testimonialsItems } from 'common/constants';
import { TestimonialItem } from './TestimonialItem';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [length, setLength] = useState(testimonialsItems.length);

  const testimonialsLength = testimonialsItems.length;
  const showTestimonials = 4;
  useEffect(() => {
    setLength(testimonialsLength);
  }, []);

  return (
    <Box
      sx={(theme: Theme) => ({
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        margin: '0 auto',
        position: 'relative',
        width: '100%',
        gap: 4,
        mt: -2,
        cursor: 'grab',
        [theme.breakpoints.down('md')]: {
          px: 2,
          justifyContent: 'unset'
        }
      })}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
          '& > *': {
            minWidth: `calc(100% / ${showTestimonials})`
          }
        }}
      >
        <Button
          type="submit"
          sx={{ backgroundColor: 'black' }}
          onClick={() => {
            if (currentIndex < length - 1) {
              setCurrentIndex((prev) => prev + 1);
            }
          }}
        />
        {testimonialsItems.map((testimonialItem, index) => (
          <TestimonialItem
            currentIndex={currentIndex}
            slideId={index}
            quote={testimonialItem.quote}
            author={testimonialItem.author}
            origin={testimonialItem.origin}
            key={index}
          />
        ))}
      </Box>
    </Box>
  );
};
