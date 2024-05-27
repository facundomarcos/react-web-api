import React, { useState } from 'react';
import useStyles from '../../../theme/useStyles';
import { Avatar, Button, Icon, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom/cjs/react-router-dom';


const MenuAdmin = () => {
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

    
                <Button color='inherit' className={classes.buttonIcon}
                onClick={handleClick}>
                    <div className={classes.linkAppBarDesktop}>
                        <Icon className={classes.mr}>admin_panel_settings</Icon>
                        ADMIN
                        <Icon>keyboard_arrow_down</Icon>
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
                        <Link className={classes.linkAppBarMobile} to='/admin/usuarios'>
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>group</Icon>
                                <ListItemText>Usuarios</ListItemText>

                            </ListItemIcon>
                        </Link>
                    </MenuItem>
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.linkAppBarMobile} to='/'>
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>storefront</Icon>
                                <ListItemText>Productos</ListItemText>

                            </ListItemIcon>
                        </Link>
                    </MenuItem>
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.linkAppBarMobile} to='/'>
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>shopping_cart</Icon>
                                <ListItemText>Pedidos</ListItemText>

                            </ListItemIcon>
                        </Link>
                    </MenuItem>

                </Menu>
    
        </>
    );
};

export default MenuAdmin;