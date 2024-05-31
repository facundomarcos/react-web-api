import { AppBar, Container, Drawer, Icon, IconButton, List, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from '../../theme/useStyles';
import {Link} from 'react-router-dom';
import MenuCliente from './desktop/MenuCliente';
import MenuAdmin from './desktop/MenuAdmin';
import MenuMovil from './movil/MenuMovil';
import MenuMovilPublico from './movil/MenuMovilPublico';
import MenuPublico from './desktop/MenuPublico';


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
{/* <MenuMovilPublico clickHandler={closeTogle}/> */}
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
        {/* <MenuPublico/>  */}
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