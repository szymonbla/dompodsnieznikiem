import { Grid, Divider, Typography } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

import { RouteDefinitions, menuItems } from 'common/constants';
import { NavLink } from 'common/components';

export const Footer = () => {
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="column"
      flexWrap="nowrap"
      sx={{ py: 2 }}
      component="footer"
    >
      <Grid
        item
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '100%',
          mb: 3,
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
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={(theme) => ({
          width: '70%',
          py: 2,
          [theme.breakpoints.down('md')]: { flexDirection: 'column', width: '100%', alignItems: 'center', gap: 2 }
        })}
      >
        <Grid sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
          <a href="https://g.page/podsnieznikiem?share" style={{ textDecoration: 'none', color: '#172c66' }}>
            <Typography>
              Adres: <br />
              <strong>Nowa Wieś 51, 57-522</strong>
            </Typography>
          </a>
          <a href="mailto:podsnieznikiem@gmail.com" style={{ textDecoration: 'none', color: '#172c66' }}>
            <Typography sx={{ mt: 2 }}>
              E-mail:
              <br /> <strong>podsnieznikiem@gmail.com</strong>
            </Typography>
          </a>
        </Grid>
        <Grid display="flex" flexDirection="column" alignItems="center" sx={{ width: '100%' }}>
          <a href={RouteDefinitions.facebookLink}>
            <FacebookRoundedIcon sx={{ width: '2em', height: '2em', color: '#3b5998', mr: '0.5em' }} />
          </a>
          <Typography>&copy; 2020-2022 Copyrights.</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
