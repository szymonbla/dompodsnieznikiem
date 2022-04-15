import { createTheme } from '@mui/material/styles';

const customHeaderFontSize = (fontSize: number) => ({
  fontSize,
  lineHeight: 1.1
});

const customBodyFontSize = (fontSize: number) => ({
  fontSize,
  lineHeight: 1.4
});

export const theme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      black: '#1A1A1A',
      white: '#FFFFFF'
    },
    primary: {
      main: '#020E36',
      contrastText: '#E1358D',
      light: '#FEF0F0',
      dark: '#020E36'
    },
    success: {
      main: '#008929'
    },
    warning: {
      main: '#F98600'
    },
    error: {
      main: '#DA0027'
    },
    text: {
      primary: '#020E36',
      secondary: '#BDBDBD'
    },
    secondary: {
      main: '#9232E8'
    }
  },
  typography: {
    fontFamily: ['Alata', 'Helvetica', '"Open Sans"', 'sans-serif'].join(','),
    h1: customHeaderFontSize(56),
    h2: customHeaderFontSize(48),
    h3: customHeaderFontSize(40),
    h4: customHeaderFontSize(32),
    h5: customHeaderFontSize(24),
    h6: customHeaderFontSize(20),

    subtitle1: customBodyFontSize(20),
    subtitle2: customBodyFontSize(18),

    body1: customBodyFontSize(16),
    body2: customBodyFontSize(14)
  }
});
