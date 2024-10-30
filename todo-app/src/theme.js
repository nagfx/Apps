import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#81C784', // Pastel green
    },
    secondary: {
      main: '#64B5F6', // Pastel blue
    },
    background: {
      default: 'linear-gradient(to bottom, #f0f0f0, #d0d0d0)', // Light gray gradient
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
