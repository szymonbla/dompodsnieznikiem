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
    common: {
      black: '#1A1A1A',
      white: '#FFFFFF'
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
    grey: {
      800: '#454749',
      600: '#636363',
      200: '#F7F7F7'
    }
  },
  typography: {
    fontFamily: ['Alata', 'Helvetica', '"Open Sans"', 'sans-serif'].join(','),
    h1: customHeaderFontSize(58),
    h2: customHeaderFontSize(48),
    h3: customHeaderFontSize(42),
    h4: customHeaderFontSize(32),
    h5: customHeaderFontSize(24),
    h6: customHeaderFontSize(20),

    subtitle2: customBodyFontSize(18),

    body1: customBodyFontSize(20),
    body2: customBodyFontSize(18)
  }
});
