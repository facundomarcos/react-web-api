import React from 'react';
import useStyles from '../../../theme/useStyles';
import { Container, Grid, Typography,TextField, Avatar,Button } from '@material-ui/core';
import ImageUploader from 'react-images-upload';

const AgregarProducto = () => {
    const classes = useStyles();
    return (
<Container className={classes.containermt}>
<Grid container justifyContent='center'>
    <Grid item sm={6} xs={12}>
<Typography variant='h4' className={classes.text_title}>
    AGREGAR PRODUCTO
</Typography>

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
                                className={classes.avatarProducto}>
                                    </Avatar>

                            </Grid>


                        </Grid>
                        <Button variant='contained'
                        color='primary'>
                            AGREGAR
                        </Button>

                    </form>
                    </Grid>
</Grid>
</Container>
    );
};

export default AgregarProducto;