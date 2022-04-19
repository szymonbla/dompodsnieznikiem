import { Grid } from '@mui/material';

import { NavLink } from 'common/components';
import { RouteDefinitions, menuItems } from 'common/constants';

export const Menu = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        zIndex: 10,
        position: 'absolute',
        top: 25,
        '& > a': {
          mr: '8rem',
          '&:last-child ': {
            mr: 0
          }
        }
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
