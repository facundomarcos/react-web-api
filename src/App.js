import React from 'react';
import Login from './componentes/seguridad/Login';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme/theme';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';

function App() {
  return (
<ThemeProvider theme={theme}>
<RegistrarUsuario/>
</ThemeProvider>


  );
}

export default App;
