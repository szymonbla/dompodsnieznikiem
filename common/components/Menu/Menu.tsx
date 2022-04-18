import { Grid } from '@mui/material';

import { NavLink } from 'common/components';
import { RouteDefinitions } from 'common/constants';

interface MenuItems {
  href: string;
  label: string;
}

export const Menu = () => {
  const menuItems: MenuItems[] = [
    { href: RouteDefinitions.house, label: 'Dom' },
    { href: RouteDefinitions.house, label: 'O nas' },
    { href: RouteDefinitions.home, label: 'Pod Śnieżnikiem' },
    { href: RouteDefinitions.house, label: 'W okolicy' },
    { href: RouteDefinitions.house, label: 'Kontakt' }
  ];

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
