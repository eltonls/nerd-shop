import { createTheme, ThemeOptions } from '@mui/material/styles';

export const lightTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#7287fd',
    },
    secondary: {
      main: '#ea76cb',
    },
    background: {
      default: '#eff1f5',
      paper: '#eff1f5',
    },
    text: {
      primary: '#4c4f69',
    },
    warning: {
      main: '#df8e1d',
    },
    info: {
      main: '#1e66f5',
    },
    success: {
      main: '#40a02b',
    },
    error: {
      main: '#d20f39',
    },
  },
});
