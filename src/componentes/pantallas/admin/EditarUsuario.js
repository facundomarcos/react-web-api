import React from 'react';
import useStyles from '../../../theme/useStyles';
import { Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography } from '@material-ui/core';

const EditarUsuario = () => {
    const classes = useStyles();
    return (
        <Container className={classes.containermt} >
            <Grid container justifyContent='center'>
                <Grid item lg={6} sm={12}>
                    <Typography variant='h4' className={classes.text_title}>
                        Editar Usuario
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} 
                    className={classes.form}>
                        <TextField
                        label='Nombre'
                        variant='filled'
                        value='Nestor Peralta'
                        fullWidth
                        disabled
                        className={classes.gridmb}>

                        </TextField>
                        <TextField
                        label='Correo Electronico'
                        variant='filled'
                        value='nestor@gmail.com'
                        fullWidth
                        disabled
                     >

                        </TextField>
                        <FormControl className={classes.cleckbox}>
                            <FormControlLabel
                            control={<Checkbox color='primary'></Checkbox>}
                            label='Es Administrador'>

                            </FormControlLabel>
                            <Button
                        variant='contained'
                        color='primary'
                        >Actualizar</Button>
                        </FormControl>
           

                    </form>
                </Grid>

            </Grid>
        </Container>
    );
};

export default EditarUsuario;