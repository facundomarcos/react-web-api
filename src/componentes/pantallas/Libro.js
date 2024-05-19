import React, { useState } from 'react';
import useStyles from '../../theme/useStyles';
import { Button, Card, Container, Grid, MenuItem, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Table, Dialog, DialogTitle, DialogContent} from '@material-ui/core';

const Libro = () => {

    const clearLibro={
        categoria:'',
        titulo:'',
        autor:''
    }

    const [libro, setLibro]= useState({
        categoria:'',
        titulo:'',
        autor:''
    })

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setLibro(prev=>({
            ...prev,
            [name]: value
        }))
    }

    const guardarData = ()=> {
        console.log("mis datos son", libro);
        setLibro(clearLibro);
    }


    const abrirDialog =()=>{
        setOpen(true);
        console.log("mi boton editar");

    }

    const eliminarData=()=>{
        console.log("mi boton eliminar");
    }

    const [libroEdita, setLibroEdita] = useState({
        categoriaE:'',
        tituloE:'',
        autorE:''
    })

const handleChangeEdita = (e) =>{
    const {name, value} = e.target;
    setLibroEdita(prev=>({
        ...prev,
        [name]: value
    }))
}

const [open, setOpen]= useState(false);

const cerrarDialog=()=>{
    setOpen(false);
}


const editarData=()=>{
    console.log("mi boton editar", libroEdita);
    cerrarDialog();
}
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Grid container justifyContent='center'>
                <Grid item lg={7} md={8}>
                    <Card className={classes.card} align='center'>
                        <Typography variant='h4'>Libros</Typography>
                   <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                    <Grid container spacing={2}>
                        <Grid item md={12} xs={12} className={classes.gridmb}>
                            <TextField
                            select
                            label='Categoria'
                            variant='outlined'
                            fullWidth
                            align='left'
                            name='categoria'
                            value={libro.categoria}
                            onChange={handleChange}
                            >
                                <MenuItem value='Programacion'>Programacion</MenuItem>
                                <MenuItem value='Historia'>Historia</MenuItem>
                                <MenuItem value='Matematica'>Matematica</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item md={6} xs={12} className={classes.gridmb}>
                            <TextField
                            label='Titulo'
                            variant='outlined'
                            fullWidth
                            name='titulo'
                            value={libro.titulo}
                            onChange={handleChange}
                            />

                        </Grid>
                        <Grid item md={6} xs={12} className={classes.gridmb}>
                            <TextField
                            label='Autor'
                            variant='outlined'
                            fullWidth
                            name='autor'
                            value={libro.autor}
                            onChange={handleChange}
                            />

                        </Grid>
                        <Grid item md={12} xs={12} className={classes.gridmb}>
                            <Button
                            variant='contained'
                            fullWidth
                            color='primary'
                            type='submit'
                            onClick={guardarData}

                            >Guardar</Button>

                        </Grid>
                    </Grid>

                   </form>
                    </Card>
                </Grid>
            </Grid>
            <TableContainer component={Paper} className={classes.containermt}>
                <Table>
                    <TableHead>
                    <TableCell>Categoria</TableCell>
                    <TableCell>Titulo</TableCell>
                    <TableCell>Autor</TableCell>
                    <TableCell align='center' colSpan={2}>Acciones</TableCell>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                        <TableCell>Programacion</TableCell>
                        <TableCell>React Avanzado</TableCell>
                        <TableCell>Vaxi Drez</TableCell>
                        <TableCell><Button onClick={abrirDialog} variant='contained' color='primary'>Editar</Button></TableCell>
                        <TableCell><Button onClick={eliminarData} variant='secondary' color='primary'>Eliminar</Button></TableCell>
                        </TableRow>
                    </TableBody>

                </Table>

            </TableContainer>
            <Dialog open={open} onClose={cerrarDialog} maxWidth="xs"fullWidth align="center">
                <DialogTitle>Editar Libro</DialogTitle>
                <DialogContent>
                    <form onSubmit={(e)=> e.preventDefault()}>
                    <TextField
                            select
                            label='Categoria'
                            variant='outlined'
                            fullWidth
                            className={classes.gridmb}
                            align='left'
                            name='categoriaE'
                            value={libro.categoriaE}
                            onChange={handleChangeEdita}
                            >
                                <MenuItem value='Programacion'>Programacion</MenuItem>
                                <MenuItem value='Historia'>Historia</MenuItem>
                                <MenuItem value='Matematica'>Matematica</MenuItem>
                            </TextField>
                            <TextField
                            label='Titulo'
                            variant='outlined'
                            fullWidth
                            className={classes.gridmb}
                            name='tituloE'
                            value={libro.tituloE}
                            onChange={handleChangeEdita}
                            />
                             <TextField
                            label='Autor'
                            variant='outlined'
                            fullWidth
                            className={classes.gridmb}
                            name='autorE'
                            value={libro.autorE}
                            onChange={handleChangeEdita}
                            />
 <Button
                            variant='contained'
                            fullWidth
                            color='primary'
                            className={classes.gridmb}
                            type='submit'
                            onClick={editarData}


                            >Guardar</Button>

                    </form>
                </DialogContent>

            </Dialog>
        </Container>
    );
};

export default Libro;