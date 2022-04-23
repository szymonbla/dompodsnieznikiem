import { Box, Theme } from '@mui/material';
import { TestimonialItem, TestimonialItemProps } from './TestimonialItem';

export const Testimonials = () => {
  const testimonialsItems: TestimonialItemProps[] = [
    {
      quote:
        'Przepiękne widoki, znakomita i śliczna lokalizacja. Cisza, spokój. Gospodarz zadbał o to, aby niczego nam nie brakowało. Zdjęcia nie oddają tego jak duży i wspaniały jest domek! ',
      author: 'Michał Budniak',
      origin: 'Opinia google'
    },
    {
      quote:
        'Bardzo długo szukałem takiego miejsca. Jest tu wszystko: świetny dom dla 3-4 rodzin, duży teren dookoła, który daje możliwość spędzania czasu zimą i latem i genialny widok z tarasu. Lokalizacja daje dużo możliwości o każdej porze roku. Do tego gospodarz, który naprawdę dba o komfort pobytu. Nie znam lepszego domku w górach na Dolnym Śląsku.',
      author: 'Aleksandra Orzechowska',
      origin: 'Opinia google'
    },
    {
      quote:
        'Wspaniałe miejsce, ciche, ciepłe i z pięknymi widokami. Dom wyposażony we wszystkie sprzęty i naczynia, można poczuć się jak we własnym.W okolicy wiele szlaków pieszych i rowerowych. Gorąco polecam !',
      author: 'Aleksandra Orzechowska',
      origin: 'Opinia google'
    },
    {
      quote:
        'Bardzo długo szukałem takiego miejsca. Jest tu wszystko: świetny dom dla 3-4 rodzin, duży teren dookoła, który daje możliwość spędzania czasu zimą i latem i genialny widok z tarasu. Lokalizacja daje dużo możliwości o każdej porze roku. Do tego gospodarz, który naprawdę dba o komfort pobytu. Nie znam lepszego domku w górach na Dolnym Śląsku.',
      author: 'Aleksandra Orzechowska',
      origin: 'Opinia google'
    },
    {
      quote:
        'Wspaniałe miejsce, ciche, ciepłe i z pięknymi widokami. Dom wyposażony we wszystkie sprzęty i naczynia, można poczuć się jak we własnym.W okolicy wiele szlaków pieszych i rowerowych. Gorąco polecam !',
      author: 'Aleksandra Orzechowska',
      origin: 'Opinia google'
    },
    {
      quote:
        'Bardzo długo szukałem takiego miejsca. Jest tu wszystko: świetny dom dla 3-4 rodzin, duży teren dookoła, który daje możliwość spędzania czasu zimą i latem i genialny widok z tarasu. Lokalizacja daje dużo możliwości o każdej porze roku. Do tego gospodarz, który naprawdę dba o komfort pobytu. Nie znam lepszego domku w górach na Dolnym Śląsku.',
      author: 'Aleksandra Orzechowska',
      origin: 'Opinia google'
    },
    {
      quote:
        'Wspaniałe miejsce, ciche, ciepłe i z pięknymi widokami. Dom wyposażony we wszystkie sprzęty i naczynia, można poczuć się jak we własnym.W okolicy wiele szlaków pieszych i rowerowych. Gorąco polecam !',
      author: 'Aleksandra Orzechowska',
      origin: 'Opinia google'
    },
    {
      quote:
        'Bardzo długo szukałem takiego miejsca. Jest tu wszystko: świetny dom dla 3-4 rodzin, duży teren dookoła, który daje możliwość spędzania czasu zimą i latem i genialny widok z tarasu. Lokalizacja daje dużo możliwości o każdej porze roku. Do tego gospodarz, który naprawdę dba o komfort pobytu. Nie znam lepszego domku w górach na Dolnym Śląsku.',
      author: 'Aleksandra Orzechowska',
      origin: 'Opinia google'
    },
    {
      quote:
        'Wspaniałe miejsce, ciche, ciepłe i z pięknymi widokami. Dom wyposażony we wszystkie sprzęty i naczynia, można poczuć się jak we własnym.W okolicy wiele szlaków pieszych i rowerowych. Gorąco polecam !',
      author: 'Aleksandra Orzechowska',
      origin: 'Opinia google'
    },
    {
      quote:
        'Bardzo długo szukałem takiego miejsca. Jest tu wszystko: świetny dom dla 3-4 rodzin, duży teren dookoła, który daje możliwość spędzania czasu zimą i latem i genialny widok z tarasu. Lokalizacja daje dużo możliwości o każdej porze roku. Do tego gospodarz, który naprawdę dba o komfort pobytu. Nie znam lepszego domku w górach na Dolnym Śląsku.',
      author: 'Aleksandra Orzechowska',
      origin: 'Opinia google'
    }
  ];

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
        [theme.breakpoints.down('md')]: {
          px: 2,
          justifyContent: 'unset'
        }
      })}
    >
      {testimonialsItems.map((testimonialItem, index) => (
        <TestimonialItem
          quote={testimonialItem.quote}
          author={testimonialItem.author}
          origin={testimonialItem.origin}
          key={index}
        />
      ))}
    </Box>
  );
};
