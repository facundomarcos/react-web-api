import React from 'react';
import useStyles from '../../theme/useStyles';
import { Grid, Container, Typography } from '@material-ui/core';

const Perfil = () => {
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Grid container spacing={2}>
                <Grid item md={3} xs={2}>
                    <Typography variant='h5' className={classes.text_title}>
                        PERFIL DE USUARIO
                    </Typography>

                </Grid>
                <Grid item md={9} xs={12}>

                </Grid>

            </Grid>
            
        </Container>
    );
};

export default Perfil;