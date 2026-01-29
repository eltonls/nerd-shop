import { createTheme, ThemeOptions } from '@mui/material/styles';

export const darkTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#cba6f7',
    },
    secondary: {
      main: '#f5c2e7',
    },
    background: {
      default: '#1e1e2e',
      paper: '#1e1e2e',
    },
    text: {
      primary: '#cdd6f4',
    },
    warning: {
      main: '#f9e2af',
    },
    info: {
      main: '#89b4fa',
    },
    success: {
      main: '#a6e3a1',
    },
  },
});
