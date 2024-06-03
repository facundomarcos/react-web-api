import React, {useState} from 'react';
import useStyles from '../../../theme/useStyles';
import { Avatar, Button, Icon, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useStateValue } from '../../../contexto/store';

const MenuCliente = () => {

    const [{sesionUsuario}, dispatch ] = useStateValue();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const classes = useStyles();


    return (
        <>
            <Button color='inherit' className={classes.buttonIcon}>
                <Link className={classes.linkAppBarDesktop} to='/carrito'>
                    <Icon className={classes.mr}>shopping_cart</Icon>
                    MIS PEDIDOS
                </Link>
       

            </Button>
            <div>
                <Button color='inherit' className={classes.buttonIcon}
                onClick={handleClick}>
                    <div className={classes.linkAppBarDesktop}>
                        <Avatar
                        alt='mi imagen'
                        className={classes.avatarPerfilAppBar}
                        src='https://tottope.vteximg.com.br/arquivos/ids/167188-1000-1000/PILIGRAM-H-1810-V07_A.png?v=636723781789170000'
                        />
                        {sesionUsuario
                         ? (sesionUsuario.autenticado ? sesionUsuario.usuario.nombre + ' ' + sesionUsuario.usuario.apellido: 'No sesion')
                        : 'No sesion'
                        }
                        <Icon>
                            keyboard_arrow_down
                        </Icon>
                    </div>
                </Button>
                <Menu
                elevation={2}
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.linkAppBarMobile} to='/perfil'>
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>person</Icon>
                                <ListItemText>Mi Perfil</ListItemText>

                            </ListItemIcon>
                        </Link>
                    </MenuItem>
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.linkAppBarMobile} to='/perfil'>
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>exit_to_app</Icon>
                                <ListItemText>Cerrar Sesion</ListItemText>

                            </ListItemIcon>
                        </Link>
                    </MenuItem>

                </Menu>
            </div>
        </>
    );
};

export default MenuCliente;