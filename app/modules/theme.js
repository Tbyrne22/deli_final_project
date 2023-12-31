import { createTheme } from '@mui/material/styles';
import { green, grey, red } from '@mui/material/colors';

const rawTheme = createTheme({
  palette: {
    primary: {
      light: '#69696a',
      main: '#28282a',
      dark: '#1e1e1f',
    },
    secondary: {
      light: '#fff5f8',
      main: '#f00f00',
      dark: '#e62958',
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: '#2E7D32', // green[700],
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: "'Roboto', sans-serif",
  textTransform: 'uppercase',
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 45,
      fontFamily: 'Playfair Display',
      textTransform: 'capitalize'
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 36,
      marginBottom:'24px',
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 30,
      fontFamily:'Ubuntu',
      textDecoration:'underline',
      textTransform:'capitalize',
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 20,
      fontFamily: 'Ubuntu',
      fontWeight:500,
      textTransform: 'capitalize',
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 18,
      fontWeight: rawTheme.typography.fontWeightLight,
      fontFamily: 'Ubuntu',
      letterSpacing: '1px',
      textTransform: 'capitalize',
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
      textTransform:'titlecase'
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body1,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 20,
      fontFamily:'Ubuntu',
    },
    body2: {
      ...rawTheme.typography.body2,
      fontSize: 16,
      fontFamily: 'Ubuntu',
    },
  },
};

export default theme;
