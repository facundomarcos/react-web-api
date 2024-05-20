import React from 'react';
import Login from './componentes/seguridad/Login';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme/theme';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import MenuAppBar from './componentes/navegacion/MenuAppBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Productos from './componentes/pantallas/Productos';

function App() {
  return (
<ThemeProvider theme={theme}>
  <Router>
  <MenuAppBar/>
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/registrar" component={RegistrarUsuario}/>
      <Route exact path="/" component={Productos}/>
    </Switch>
  </Router>

</ThemeProvider>


  );
}

export default App;
