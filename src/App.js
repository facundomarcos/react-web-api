import React from 'react';
import Login from './componentes/seguridad/Login';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme/theme';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import MenuAppBar from './componentes/navegacion/MenuAppBar';

function App() {
  return (
<ThemeProvider theme={theme}>
  <MenuAppBar></MenuAppBar>
<RegistrarUsuario/>
</ThemeProvider>


  );
}

export default App;
