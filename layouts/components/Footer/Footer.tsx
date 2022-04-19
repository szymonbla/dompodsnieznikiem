import { Grid, Divider, Typography } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

import { RouteDefinitions, menuItems } from 'common/constants';
import { NavLink } from 'common/components';

export const Footer = () => {
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="column"
      sx={{ py: 2, height: '25vh' }}
      component="footer"
    >
      <Grid
        item
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '100%',
          '& > a': {
            mr: '8rem',
            '&:last-child ': {
              mr: 0
            }
          }
        }}
      >
        {menuItems.map((menuItem, index) => {
          if (menuItem.href === RouteDefinitions.home) {
            return (
              <NavLink
                href={RouteDefinitions.home}
                label={menuItem.label}
                typographVariant="h4"
                key={index}
                typographySx={{ color: 'common.black' }}
              />
            );
          }
          return (
            <NavLink href={menuItem.href} label={menuItem.label} key={index} typographySx={{ color: 'common.black' }} />
          );
        })}
      </Grid>
      <Divider variant="middle" sx={{ width: '80%' }} />
      <Grid item display="flex" justifyContent="center" sx={{ width: '100%' }}>
        <a href={RouteDefinitions.facebookLink}>
          <FacebookRoundedIcon sx={{ width: '2em', height: '2em', color: '#3b5998', mr: '0.5em' }} />
        </a>
        <a href={RouteDefinitions.instagramLink}>
          <InstagramIcon sx={{ width: '2em', height: '2em', color: '#C13584' }} />
        </a>
      </Grid>
      <Typography>&copy; 2020-2022 Copyrights.</Typography>
    </Grid>
  );
};
