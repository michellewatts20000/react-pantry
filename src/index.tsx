import React from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4b4efc', // Override primary color
    },
    secondary: {
      main: '#4b4efc', // Override secondary color
    },
  },
  // other theme properties...
});

const rootElement = document.getElementById('root') as Element | DocumentFragment;
createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
