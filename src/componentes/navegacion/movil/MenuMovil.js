import {List, Avatar, Collapse, Icon, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from '../../../theme/useStyles';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const MenuMovil = (props) => {

    const [openClient, setOpenClient] = useState(false);
    const [openAdmin, setOpenAdmin] = useState(false);

    const handleClickCliente = () =>{
        setOpenClient((prevOpen) => !prevOpen);
    }
    const handleClickAdmin = () =>{
        setOpenAdmin((prevOpen) => !prevOpen);
    }

    const classes = useStyles();


    return (
        <>
            <ListItem button onClick={handleClickCliente} className={classes.ListItem}>
                <div className={classes.linkAppBarMobile}>
                    <Avatar
                    alt='mi imagen'
                    className={classes.avatarPerfilAppBar}
                    src=''
                    />
                    <ListItemText>Jhon Peralta          </ListItemText>
                    <Icon>keyboard_arrow_down</Icon>

          
            

                </div>
            </ListItem>
            <Collapse component='li' in={openClient} timeout='auto' unmountOnExit>
                <List disablePadding>
                    <ListItem button className={classes.listSubItem}
                    onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMovile} to='/perfil'>
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>person</Icon>
                                <ListItemText>
                                Mi Perfil
                            </ListItemText>
                            </ListItemIcon>
                   
                        </Link>
                    </ListItem>
                    <ListItem onClick={props.clickHandler} button className={classes.listSubItem}>
                        <Link className={classes.linkAppBarMovile} to='/'>
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>exit_to_app</Icon>
                                <ListItemText>
                                Cerrar sesion
                            </ListItemText>
                            </ListItemIcon>
                         
                        </Link>
                    </ListItem>
                    </List>
                    <Divider/>
                    </Collapse>

        <ListItem button onClick={handleClickAdmin} className={classes.ListItem}>
                <div className={classes.listItemIcon}>
             <ListItemIcon>
                <Icon>
                    admin_panel_settings
                </Icon>
                <ListItemText>Admin</ListItemText>
             <Icon>keyboard_arrow_down</Icon>
             </ListItemIcon>
          
            

                </div>
            </ListItem>
            <Collapse component='li' in={openAdmin} timeout='auto' unmountOnExit>
                <List disablePadding>
                    <ListItem button className={classes.listSubItem}
                    onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMovile} to='/admin/usuarios'>
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>group</Icon>
                                <ListItemText>
                                Usuarios
                            </ListItemText>
                            </ListItemIcon>
                   
                        </Link>
                    </ListItem>
                    <ListItem onClick={props.clickHandler} button className={classes.listSubItem}>
                        <Link className={classes.linkAppBarMovile} to='/'>
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>storefront</Icon>
                                <ListItemText>
                                Productos
                            </ListItemText>
                            </ListItemIcon>
                         
                        </Link>
                    </ListItem>
                    <ListItem onClick={props.clickHandler} button className={classes.ListItem}>
                        <Link className={classes.linkAppBarMovile} to='/carrito'>
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>shoping_cart</Icon>
                                <ListItemText>
                                Mis Pedidos
                            </ListItemText>
                            </ListItemIcon>
                  
                        </Link>
                    </ListItem>
                    <ListItem onClick={props.clickHandler} button className={classes.listSubItem}>
                        <Link className={classes.linkAppBarMovile} to='/'>
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>shoping_cart</Icon>
                                <ListItemText>
                                Pedidos
                            </ListItemText>
                            </ListItemIcon>
                         
                        </Link>
                    </ListItem>
                    </List>
                    <Divider/>
                    </Collapse>


          
            
       
        </>
    );
};

export default MenuMovil;