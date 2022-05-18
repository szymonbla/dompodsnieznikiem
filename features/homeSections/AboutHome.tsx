import Image from 'next/image';
import { Grid, Typography } from '@mui/material';

import { IconWithValue, IconWithValueProps } from 'common/components';

export const AboutHome = () => {
  const iconsArray: IconWithValueProps[] = [
    { value: '12', src: 'v1652871039/Icons/person_jurjfn.svg', alt: 'Guests' },
    { value: '5', src: 'v1652871039/Icons/car_z1swmb.svg', alt: 'Car spots' },
    { value: '5', src: 'v1652871039/Icons/room_dpspul.svg', alt: 'Rooms' },
    { value: '1', src: 'v1652871039/Icons/kitchen_ek2nty.svg', alt: 'Kitchen' }
  ];

  return (
    <Grid
      container
      id="aboutHome"
      component="section"
      sx={(theme) => ({
        my: 10,
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column'
        }
      })}
    >
      <Grid
        item
        display="flex"
        justifyContent="center"
        sx={(theme) => ({
          width: '60%',
          [theme.breakpoints.down('md')]: {
            width: '100%',
            mb: 4
          }
        })}
      >
        <Image src="v1652871547/HomePage/aboutHome_uiulv9.jpg" width={860} height={600} alt="About home" />
      </Grid>
      <Grid
        item
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={(theme) => ({
          width: '40%',
          [theme.breakpoints.down('md')]: {
            width: '100%',
            alignItems: 'center'
          }
        })}
      >
        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
          12 osób max
        </Typography>
        <Typography variant="h3" fontWeight={600} sx={{ textTransform: 'uppercase', mb: 2 }}>
          O domku
        </Typography>
        <Grid item display="flex" gap={4} sx={{ mb: 2 }}>
          {iconsArray.map((iconItem) => (
            <IconWithValue src={iconItem.src} alt={iconItem.alt} value={iconItem.value} key={iconItem.alt} />
          ))}
        </Grid>
        <Typography
          sx={(theme) => ({
            mb: 2,
            width: '70%',
            textAlign: 'justify',
            [theme.breakpoints.down('md')]: {
              width: '90%'
            }
          })}
        >
          Dom Pod Śnieżnikiem to wyjątkowe miejsce na mapie Kotliny Kłodzkiej. Przytulny, a jednocześnie nowoczesny
          design naszego obiektu idealnie komponuje się z malowniczym krajobrazem Sudetów Wschodnich.
        </Typography>
        <Typography
          sx={(theme) => ({
            mb: 2,
            width: '70%',
            textAlign: 'justify',
            [theme.breakpoints.down('md')]: {
              width: '90%'
            }
          })}
        >
          Naszą najwyższą wartością jest zapewnienie satysfakcji Gościom z pobytu w naszym obiekcie. Dlatego dokładamy
          wszelkich starań, by sprostać nawet najcięższym oczekiwaniom. Pod Śnieżnikiem dbamy o rodzinny, przytulny
          klimat.
        </Typography>
      </Grid>
    </Grid>
  );
};
