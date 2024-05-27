import React from 'react';
import useStyles from '../../../theme/useStyles';
import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

const Usuarios = (props) => {

    const classes = useStyles();

    const editaUsuario = () => {
        const id = 'afcb3620-2232-4995-a5de-1be838a52947';
        props.history.push('/admin/usuario/'+ id);
    }
    return (
        <Container className={classes.containermt}>
            <Typography variant='h4' className={classes.text_title}>
                USUARIOS
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>USUARIO</TableCell>
                            <TableCell>EMAIL</TableCell>
                            <TableCell>ADMIN</TableCell>
                            <TableCell></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                            <TableCell>0420fd0d-9382-4d01-8a36-460e4e7ee496</TableCell>
                            <TableCell>Jhon Peralta</TableCell>
                            <TableCell>john@gmail.com</TableCell>
                            <TableCell>
                                <Icon className={classes.iconDelivered}>
                                    check
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button variant='contained'
                                color='primary'
                                onClick={editaUsuario}>
                                    <Icon>edit</Icon>
                                </Button>
                                <Button variant='contained'
                                color='secondary'>
                                    <Icon>delete</Icon>
                                </Button>
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>0420fd0d-9382-4d01-8a36-460e4e7ee497</TableCell>
                            <TableCell>Nestor Peralta</TableCell>
                            <TableCell>nestor@gmail.com</TableCell>
                            <TableCell>
                                <Icon className={classes.iconNotDelivered}>
                                    clear
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button variant='contained'
                                color='primary'
                                onClick={editaUsuario}>
                                    <Icon>edit</Icon>
                                </Button>
                                <Button variant='contained'
                                color='secondary'>
                                    <Icon>delete</Icon>
                                </Button>
                            </TableCell>

                        </TableRow>
                    </TableBody>
                </Table>

            </TableContainer>
            
        </Container>
    );
};

export default Usuarios;