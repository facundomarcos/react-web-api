import React from 'react';
import useStyles from '../../theme/useStyles';
import { Table, Grid, Container, Typography, Icon, Avatar, TextField, Divider, Button, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import ImageUploader from 'react-images-upload';

const Perfil = (props) => {
    const classes = useStyles();
    const verDetalles = () => {
        const id = '78968193-7b01-4078-b806-d8f65da3fdb1';
        props.history.push('/ordenCompra/' + id);

    }
    return (
        <Container className={classes.containermt}>
            <Grid container spacing={2}>
                <Grid item md={3} xs={2}>
                    <Typography variant='h5' className={classes.text_title}>
                        PERFIL DE USUARIO
                    </Typography>
                    <form onSubmit={(e)=> e.preventDefault()}
                    className={classes.form}
                    >
                     <ImageUploader 
                     withIcon={false}
                     buttonStyles={{borderRadius: '50%', padding:10, margin:0,position:'absolute',
                    bottom:15, left:15
                     }}
                     className={classes.imageUploader}
                     buttonText={<Icon>add_a_photo</Icon>}
                     label={<Avatar alt='mi perfil' className={classes.avatarPerfil}/>}
                     src='https://tottope.vteximg.com.br/arquivos/ids/167188-1000-1000/PILIGRAM-H-1810-V07_A.png?v=636723781789170000'
                     imgExtension={['.jpg','.gif','.png','.jpeg']}
                     maxFileSize={5242880}/>
                     <TextField
                     label='Nombre'
                     variant='outlined'
                     fullWidth
                     className={classes.gridmb}
                     value={'John'}
                     />
                    <TextField
                    label='Apellidos'
                    variant='outlined'
                    fullWidth
                    className={classes.gridmb}
                    value={'Peralta'}
                    />
                    <TextField
                    label='Correo Electronico'
                    variant='outlined'
                    fullWidth
                    className={classes.gridmb}
                    value={'john@gmail.com'}
                    />
                     <Divider className={classes.divider}/>
                     <TextField
                     label='Password'
                     variant='outlined'
                     fullWidth
                     className={classes.gridmb}

                     />
                     <Divider className={classes.divider}/>
                     <TextField
                     label='Confirmar Password'
                     variant='outlined'
                     fullWidth
                     className={classes.gridmb}

                     />
                     <Button variant='contained' color='primary'>ACTUALIZAR</Button>

                   </form>

                </Grid>
                <Grid item md={9} xs={12}>
                    <Typography
                    variant='h5'
                    className={classes.text_title}
                    >MIS PEDIDOS</Typography>
                    <TableContainer className={classes.form}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>FECHA</TableCell>
                                    <TableCell>TOTAL</TableCell>
                                    <TableCell>PAGADO</TableCell>
                                    <TableCell>ENTREGADO</TableCell>
                                    <TableCell></TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow>
                                    <TableCell>78968193-7b01-4078-b806-d8f65da3fdb1</TableCell>
                                    <TableCell>2024-12-15</TableCell>
                                    <TableCell>60.00</TableCell>
                                    <TableCell>2024-12-15</TableCell>
                                    <TableCell>
                                        {/* <Icon className={classes.iconNotDelivered}>clear</Icon> */}
                                        <Icon className={classes.iconDelivered}>check</Icon>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant='contained' onClick={verDetalles}>
                                            DETALLES
                                        </Button>
                                    </TableCell>

                                </TableRow>
                            </TableBody>
                        </Table>

                    </TableContainer>

                </Grid>

            </Grid>
            
        </Container>
    );
};

export default Perfil;