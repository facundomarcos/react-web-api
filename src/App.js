import React from 'react';
import Login from './componentes/seguridad/Login';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme/theme';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import MenuAppBar from './componentes/navegacion/MenuAppBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Productos from './componentes/pantallas/Productos';
import DetalleProducto from './componentes/pantallas/DetalleProducto';
import CarritoCompras from './componentes/pantallas/CarritoCompras';
import ProcesoCompra from './componentes/pantallas/ProcesoCompra';
import OrdenCompra from './componentes/pantallas/OrdenCompra';
import Perfil from './componentes/seguridad/Perfil';
import Usuarios from './componentes/pantallas/admin/Usuarios';
import EditarUsuario from './componentes/pantallas/admin/EditarUsuario';

function App() {
  return (
<ThemeProvider theme={theme}>
  <Router>
  <MenuAppBar/>
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/registrar" component={RegistrarUsuario}/>
      <Route exact path="/" component={Productos}/>
      <Route exact path="/detalleProducto/:id" component={DetalleProducto}/>
      <Route exact path="/carrito" component={CarritoCompras}/>
      <Route exact path="/procesoCompra" component={ProcesoCompra}/>
      <Route exact path="/ordenCompra/:id" component={OrdenCompra}/>
      <Route exact path="/admin/usuarios" component={Usuarios}/>
      <Route exact path="/admin/usuario/:id" component={EditarUsuario}/>
      

   
   
    </Switch>
  </Router>

</ThemeProvider>


  );
}

export default App;
