import { FC } from "react";
import { CustomButton } from "./ui";

import { Check } from "@mui/icons-material";
import { Grid, Typography, Divider, List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material"
import Link from "next/link";

const basicDetails = [
    "4 Secciones.",
    "Dominio Gratuito.",
    "Certificado SSL.",
    "Soporte 24/7.",
    "Integrado a WhatsApp, Instagram y Facebook.",
    "Email marketing incluido."
];

const ecommerceDetails = [
    "Secciones Ilimitadas.",
    "Dominio Gratuito.",
    "Certificado SSL.",
    "Soporte 24/7.",
    "Integrado a WhatsApp, Instagram y Facebook.",
    "Email marketing incluido.",
    "Tienda Online.",
    "Múltiples medios de pago y envíos.",
];

const autogestDetails = [
    "Secciones Ilimitadas.",
    "Panel de Administrador.",
    "Dominio Gratuito.",
    "Certificado SSL.",
    "Soporte 24/7.",
    "Email marketing incluido.",
    "Gestión de clientes, productos, stock y pedidos."
];

export const PlansSection: FC = () => {
    return (
        <>
            <Grid container justifyContent="center" alignItems="center" direction="column" mt={5} mb={5}>
                <Typography variant='h6'> Acá puede ver </Typography>
                <Typography variant="subtitle1"> Nuestros Planes </Typography>
                <span className='mini-divider'></span>
            </Grid>

            <Grid container justifyContent="space-between" alignItems="center" gap={2} mt={7}>
                <Grid item xs={3.7} className='plans-box'>
                    <Typography variant='h5' mb={5}> Básica </Typography>
                    <Typography mb={2}>Ideal para que tu negocio o proyecto tenga presencia online.</Typography>
                    <Divider />
                    <List sx={{ minHeight: 250 }} >
                        {basicDetails.map(text => (
                            <ListItem disablePadding key={text}>
                                <ListItemIcon sx={{ minWidth: "40px" }}>
                                    <Check sx={{ color: "#28732b" }} />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List >
                    <Divider />
                    <Box textAlign="center" mt={2}>
                        <Link href="/plans/basic">
                            <CustomButton text='CONTRATAR' />
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={3.7} className='plans-box'>
                    <div className="cont-destacado">
                        <Typography textAlign="center" fontWeight={600} mt={0.8}> MÁS VENDIDO </Typography>
                    </div>

                    <div className="triangle" />
                    <Typography variant='h5' mb={5}> Tienda Online </Typography>
                    <Typography mb={2}>Vende tus productos y aumenta tus ganancias. ¡Sin comisión por ventas!</Typography>
                    <Divider />
                    <List >
                        {ecommerceDetails.map(text => (
                            <ListItem disablePadding key={text}>
                                <ListItemIcon sx={{ minWidth: "40px" }}>
                                    <Check sx={{ color: "#28732b" }} />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List >
                    <Divider />
                    <Box textAlign="center" mt={2}>
                        <CustomButton text='CONTRATAR' />
                    </Box>
                </Grid>

                <Grid item xs={3.7} className='plans-box'>
                    <Typography variant='h5' mb={5}> Autogestionable </Typography>
                    <Typography mb={2}>Ten el control absoluto de tu sitio!. Ideal para negocios en expansión.</Typography>
                    <Divider />
                    <List sx={{ minHeight: 250 }}  >
                        {autogestDetails.map(text => (
                            <ListItem disablePadding key={text}>
                                <ListItemIcon sx={{ minWidth: "40px" }}>
                                    <Check sx={{ color: "#28732b" }} />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List >
                    <Divider />
                    <Box textAlign="center" mt={2}>
                        <CustomButton text='CONTRATAR' />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
