import { Grid } from '@mui/material';

import { NavLink } from 'common/components';
import { RouteDefinitions, menuItems } from 'common/constants';

export const Menu = () => {
  return (
    <Grid container justifyContent="space-evenly" alignItems="center" sx={{ py: 2, width: '80%' }}>
      {menuItems.map((menuItem, index) => {
        if (menuItem.href === RouteDefinitions.home) {
          return <NavLink href={RouteDefinitions.home} label={menuItem.label} typographVariant="h4" key={index} />;
        }
        return <NavLink href={menuItem.href} label={menuItem.label} key={index} />;
      })}
    </Grid>
  );
};
