import { styled } from '@mui/material/styles';
import { SxProps, Typography } from '@mui/material';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
  typographVariant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit'
    | undefined;
  hrefSx?: SxProps;
  typographySx?: SxProps;
}

export const NavLink = ({ href, label, typographVariant, hrefSx, typographySx }: NavLinkProps) => {
  return (
    <Link href={href} passHref>
      <StyleLink sx={hrefSx}>
        <Typography
          variant={typographVariant}
          sx={{
            color: 'common.white',
            letterSpacing: '1.5px',
            fontWeight: 500,
            textTransform: 'uppercase',
            ...typographySx
          }}
        >
          {label}
        </Typography>
      </StyleLink>
    </Link>
  );
};

const StyleLink = styled('a')(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none'
}));
