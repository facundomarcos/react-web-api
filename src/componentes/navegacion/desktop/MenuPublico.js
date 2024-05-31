import React from 'react';
import useStyles from '../../../theme/useStyles';
import {Icon,Button} from '@material-ui/core';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const MenuPublico = () => {
    const classes = useStyles();
    return (
        <>
                    <Button color='inherit' className={classes.buttonIcon}>
                                <Link to="/carrito" className={classes.linkAppBarDesktop}>
                                    <Icon className={classes.mr}>shopping_cart</Icon>
                                    Mis Pedidos
                                </Link>
                            </Button>
            <Button color='inherit' className={classes.buttonIcon}>
                                <Link to="/login" className={classes.linkAppBarDesktop}>
                                    <Icon className={classes.mr}>person</Icon>
                                    LOGIN
                                </Link>
                            </Button>
        </>
    );
};

export default MenuPublico;