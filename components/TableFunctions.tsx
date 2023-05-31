import { Check, Close } from "@mui/icons-material";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Grid, Typography, styled } from "@mui/material"

function createData(
    name: string,
    basic: JSX.Element,
    ecommerce: JSX.Element,
    autogest: JSX.Element,

) {
    return { name, basic, ecommerce, autogest };
}

const checked = <Check />
const noCheck = <Close sx={{color:"red"}} />

const rows = [
    createData('Domino Gratuito.', checked, checked, checked),
    createData('Certificado SSL.', checked, checked, checked),
    createData('Soporte 24/7.', checked, checked, checked),
    createData('Panel Admin.', noCheck, noCheck, checked),
    createData('Integrado a WhatsApp, Instagram y Facebook.', checked, checked, checked),
    createData('Email Marketing Incluido.', checked, checked, checked),
    createData('Optimizado para SEO.', checked, checked, checked),
    createData('Diseño responsive.', checked, checked, checked),
    createData('Tienda Online', noCheck, checked, checked),
    createData('Catálogo de productos.', noCheck, checked, checked),
    createData('Múltiples medios de pago y envíos.', noCheck, checked, checked),
    createData('Múltiples Idiomas.', noCheck, noCheck, checked),
    createData('Múltiples Monedas.', noCheck, noCheck, checked),
    createData('Gestión de stock, clietes y pedidos.', noCheck, noCheck, checked),
    createData('Crea promociones y descuentos.', noCheck, noCheck, checked),
    createData('Mantenimiento', checked, checked, checked),
    createData('Modificaciones', noCheck, checked, checked),
];

const CustomPaper = styled(Paper)((props) => ({
    background: "#1d1b1b",
    backdropFilter: "blur(10px)",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
}))

export const TableFunctions = () => {
    return (
        <Grid container>

            <Grid container justifyContent="center" alignItems="center" direction="column" mt={5} mb={5}>
                <Typography variant="subtitle1" textAlign="center"> Explore todas las funcionalidades </Typography>
                <span className='mini-divider'></span>
            </Grid>

            <TableContainer component={CustomPaper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="center" sx={{ fontWeight: 600, fontSize: 18 }}>Básica</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 600, fontSize: 18 }}>Tienda Online</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 600, fontSize: 18 }}>Autogestionable</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.basic}</TableCell>
                                <TableCell align="center">{row.ecommerce}</TableCell>
                                <TableCell align="center">{row.autogest}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}
