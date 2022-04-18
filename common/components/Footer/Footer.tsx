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
      sx={{ py: 2, width: '80%', height: '25vh' }}
    >
      <Grid item display="flex" justifyContent="space-evenly" alignItems="center" sx={{ width: '100%' }}>
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
      <Grid item display="flex" justifyContent="center" sx={{ width: '100%', '& > svg': { mr: 2 } }}>
        <a href={RouteDefinitions.facebookLink}>
          <FacebookRoundedIcon sx={{ width: '2em', height: '2em', color: '#3b5998' }} />
        </a>
        <a href={RouteDefinitions.instagramLink}>
          <InstagramIcon sx={{ width: '2em', height: '2em', color: '#C13584' }} />
        </a>
      </Grid>
      <Typography>&copy; 2020-2022 Copyrights.</Typography>
    </Grid>
  );
};
