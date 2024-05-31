import React from 'react';
import useStyles from '../../../theme/useStyles';
import {Icon, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { Link } from 'react-router-dom/cjs/react-router-dom';
const MenuMovilPublico = (props) => {
    const classes = useStyles();
    
    return (
        <>
            <ListItem button onClick={props.clickHandler} className={classes.listItem}>
                                        <Link to="/login"  className={classes.linkAppBarMobile}>
                                            <ListItemIcon className={classes.listItemIcon}>
                                                <Icon>person</Icon>
                                            </ListItemIcon>
                                            <ListItemText>
                                                Login
                                            </ListItemText>
                                        </Link>

                                    </ListItem>
                                    <ListItem button onClick={props.clickHandler} className={classes.listItem}>
                                        <Link to="/carrito"  className={classes.linkAppBarMobile}>
                                            <ListItemIcon className={classes.listItemIcon}>
                                                <Icon>shopping_cart</Icon>
                                            </ListItemIcon>
                                            <ListItemText>
                                                Mis Pedidos
                                            </ListItemText>
                                        </Link>

                                    </ListItem>
        </>
    );
};

export default MenuMovilPublico;