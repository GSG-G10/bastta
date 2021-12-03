import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',
  breakpoints: {
    values: {
      lg: 1280,
      xl: 1440,
      xxl: 1600,
    },
  },
  palette: {
    primary: { main: '#1a6e9a' },
    hoverPrimary: { main: '#CFCED3' },
    secondary: {
      main: '#edf2ff',
    },
    titleColor: {
      main: '#333333',
    },
    subtitleColor: {
      main: '#7c8284',
    },
    bgColor: {
      main: '#eef4fc',
    },
  },
  typography: {
    fontFamily: [
      'Cairo',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
export default theme;
