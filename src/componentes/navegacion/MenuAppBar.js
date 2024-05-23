import { AppBar, Button, Container, Drawer, Icon, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from '../../theme/useStyles';
import {Link} from 'react-router-dom';
import MenuCliente from './desktop/MenuCliente';
import MenuAdmin from './desktop/MenuAdmin';
import MenuMovil from './movil/MenuMovil';


const MenuAppBar = () => {
    const [open, setOpen]= useState(false);

    const classes = useStyles();

    const openTogle=()=>{
        setOpen(true);
    }

    const closeTogle=()=>{
        setOpen(false);
    }

    return (
        <div>
            <AppBar position='static' className={classes.appBar}>
                <Container>
                    <Toolbar>
                        <div className={classes.sectionMobile}>
                            <IconButton color='inherit' onClick={openTogle}>
                                <Icon fontSize='large'>
                                    menu
                                </Icon>
                            </IconButton>
                        </div>
                        <Drawer
                        open={open}
                        onClose={closeTogle}
                        >
                            <div className={classes.list}>
                                <List>
                                    {/* <ListItem button onClick={closeTogle} className={classes.listItem}>
                                        <Link to="/login" color='inherit' className={classes.linkAppBarMobile} underline='none'>
                                            <ListItemIcon className={classes.listItemIcon}>
                                                <Icon>person</Icon>
                                            </ListItemIcon>
                                            <ListItemText>
                                                Login
                                            </ListItemText>
                                        </Link>

                                    </ListItem> */}
                                    <MenuMovil clickHandler={closeTogle}/>
                                </List>
                            </div>

                        </Drawer>
                        <div className={classes.grow}>
                            <Link to="/" color='inherit' className={classes.linkAppBarLogo}
                            underline='none'
                            >
                                <Icon fontSize='large' underline='none' className={classes.mr}>
                                   store 
                                </Icon>
                                <Typography variant='h5'>SHOP</Typography>
                            </Link>
                        </div>
                        <div className={classes.sectionDesktop}>
                            {/* <Button color='inherit' className={classes.buttonIcon}>
                                <Link to="/login" color='inherit' underline='none' className={classes.linkAppBarDesktop}>
                                    <Icon className={classes.mr}>person</Icon>
                                    LOGIN
                                </Link>
                            </Button> */}
                            <MenuCliente/>
                            <MenuAdmin/>
                        </div>
                    </Toolbar>
                </Container>

            </AppBar>
        </div>
    );
};

export default MenuAppBar;