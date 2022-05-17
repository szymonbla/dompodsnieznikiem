import { useState, useEffect, useCallback } from 'react';

import { Box, Theme } from '@mui/material';

import { testimonialsItems } from 'common/constants';
import { TestimonialItem } from './TestimonialItem';

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const testimonialWidth = 400;

  const next = useCallback(() => {
    if (activeIndex === testimonialsItems.length - 2) {
      setActiveIndex(0);
    }
    setActiveIndex((prevState) => prevState + 1);
  }, [activeIndex]);

  useEffect(() => {
    setTimeout(() => next(), 3000);
  }, [next]);

  return (
    <Box
      sx={(theme: Theme) => ({
        display: 'flex',
        overflow: 'hidden',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        mt: -2,
        [theme.breakpoints.down('md')]: {
          px: 2,
          justifyContent: 'unset',
          gap: 0
        }
      })}
    >
      <Box
        sx={(theme: Theme) => ({
          width: `${testimonialsItems.length * testimonialWidth}px`,
          transform: `translateX(-${activeIndex * testimonialWidth}px)`,
          transition: 'transform ease-out 1s',
          display: 'flex',
          gap: 4,
          [theme.breakpoints.down('md')]: {
            px: 2,
            justifyContent: 'unset',
            width: '100%',
            transform: `translateX(-${activeIndex * 100}%)`
          }
        })}
      >
        {testimonialsItems.map((testimonialItem, index) => (
          <TestimonialItem
            quote={testimonialItem.quote}
            author={testimonialItem.author}
            origin={testimonialItem.origin}
            slideId={index}
            key={index}
          />
        ))}
      </Box>
    </Box>
  );
};
