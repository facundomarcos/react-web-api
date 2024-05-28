import React from 'react';
import useStyles from '../../../theme/useStyles';
import { Container, Grid, Typography,TextField, Avatar,Button } from '@material-ui/core';
import ImageUploader from 'react-images-upload';

const EditarProducto = () => {
    const classes = useStyles();
    return (
<Container className={classes.containermt}>
    <Grid container justifyContent='center'>
        <Grid item sm={6} xs={12}>
            <Typography
            variant='h4' className={classes.text_title}>EDITAR PRODUCTO</Typography>
              <form onSubmit={(e) => e.preventDefault()}
                    className={classes.form}
                    >
                        <TextField
                        label='Nombre Producto'
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value='casaca vaxi verano'
                        >

                        </TextField>

                        <TextField
                        label='Precio'
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value={9.99}
                        >

                        </TextField>

                        <TextField
                        label='Marca'
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value='vaxi'
                        >

                        </TextField>

                        <TextField
                        label='Stock'
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value={15}
                        >

                        </TextField>

                        <TextField
                        label='Descripcion'
                        variant='outlined'
                        multiline
                        rows={4}
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                        >

                        </TextField>

                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
                                <ImageUploader
                                whithIcon={true}
                                buttonText='Buscar Imagen'
                                imgExtension={['.jpg','.jpeg','.png','.gif']}
                               maxFileSize={5242880}
                                >

                                </ImageUploader>

                            </Grid>

                            <Grid item sm={6} xs={12}>
                                <Avatar variant='square'
                                className={classes.avatarProducto}
                                src=''>
                                    </Avatar>

                            </Grid>


                        </Grid>
                        <Button variant='contained'
                        color='primary'>
                            ACTUALIZAR
                        </Button>

                    </form>

        </Grid>

    </Grid>

</Container>
    );
};

export default EditarProducto;