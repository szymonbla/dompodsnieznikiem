import { Grid } from '@mui/material';

import { NavLink } from 'common/components';
import { RouteDefinitions, menuItems } from 'common/constants';

export const Menu = () => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: '100%',
        pt: '3em'
      }}
      component="header"
    >
      {menuItems.map((menuItem, index) => {
        if (menuItem.href === RouteDefinitions.home) {
          return <NavLink href={RouteDefinitions.home} label={menuItem.label} typographVariant="h4" key={index} />;
        }
        return <NavLink href={menuItem.href} label={menuItem.label} key={index} />;
      })}
    </Grid>
  );
};
