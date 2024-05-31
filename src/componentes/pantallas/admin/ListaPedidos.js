import React from 'react';
import useStyles from '../../../theme/useStyles';
import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

const ListaPedidos = () => {
    const classes = useStyles();
    return (
<Container className={classes.containermt}>
    <Typography
    variant='h4' className={classes.text_title}>PEDIDOS</Typography>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>USUARIO</TableCell>
                    <TableCell>FECHA</TableCell>
                    <TableCell>TOTAL</TableCell>
                    <TableCell>PAGADO</TableCell>
                    <TableCell>ENTREGADO</TableCell>
                    <TableCell></TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                    <TableCell>67f46a84-1711-4b54-9b07-8c07db40cdc6</TableCell>
                    <TableCell>Nestor Arcila</TableCell>
                    <TableCell>2024-12-22</TableCell>
                    <TableCell>$60.00</TableCell>
                    <TableCell>2024-12-24</TableCell>
                    <TableCell><Icon className={classes.iconDelivered}>check</Icon></TableCell>
                    <TableCell><Button
                    variant='contained'
                    color='inherit'

                    >DETALLES</Button></TableCell>

                </TableRow>
                <TableRow>
                    <TableCell>67f46a84-1711-4b54-9b07-8c07db401000</TableCell>
                    <TableCell>Ricardo Mendez</TableCell>
                    <TableCell>2024-12-20</TableCell>
                    <TableCell>$150.00</TableCell>
                    <TableCell>2024-12-22</TableCell>
                    <TableCell><Icon className={classes.iconNotDelivered}>clear</Icon></TableCell>
                    <TableCell><Button
                    variant='contained'
                    color='inherit'
                    
                    >DETALLES</Button></TableCell>

                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>

</Container>
    );
};

export default ListaPedidos;