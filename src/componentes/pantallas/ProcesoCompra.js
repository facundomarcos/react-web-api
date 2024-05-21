import React, { useState } from 'react';
import useStyles from '../../theme/useStyles';
import { Button, Container, Grid, Step, StepLabel, Stepper, TextField, Typography } from '@material-ui/core';

const ProcesoCompra = () => {
    const [activeStep, setActiveStep] = useState(1);
    const continuarProceso = () =>{
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    const retrocederProceso = ()=>{
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
    const classes = useStyles();

    return (
        <Container className={classes.Container}>
            <Stepper activeStep={activeStep} alternativeLabel>
                <Step>
                    <StepLabel>Registrarse</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Envio</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Metodo de Pago</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Realizar Pedido</StepLabel>
                </Step>

            </Stepper>

            { activeStep === 1 ? (
                    <Grid md={6} xs={12} className={classes.gridPC}>
                        <Typography variant='h6' className={classes.text_title}>
                            ENVIO DEL PRODUCTO
                        </Typography>
                        <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <TextField label="Direccion"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true
                                    }}/>

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Ciudad"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true
                                    }}/>

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Pais"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true
                                    }}/>

                                </Grid>
                                <Grid item xs={12}>
                                   <Button variant='contained' color='primary'
                                   onClick={continuarProceso}>
                                        CONTINUAR
                                   </Button>

                                </Grid>

                            </Grid>
                        </form>
                  
                    </Grid>
                ) : activeStep === 2 ? (
                    <Grid md={3} xs={12} className={classes.gridPC}> 
                        <Typography variant='h6' className={classes.text_title}>
                            METODO DE PAGO
                        </Typography>
                    </Grid>
                )  : activeStep === 3 ? (
                    <Grid>
                        
                    </Grid>
                ): null
            }

        </Container>
    );
};

export default ProcesoCompra;