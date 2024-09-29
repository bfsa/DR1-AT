import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import CarrinhoCompras from './components/CarrinhoCompras';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CarrinhoCompras />
    </ThemeProvider>
  );
}

export default App;