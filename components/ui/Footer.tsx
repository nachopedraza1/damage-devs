import { FC } from "react";
import Image from "next/image"

import { ListItemMapped } from "../ListItemMapped";

import { Container, Grid, Typography, Divider, Link, Tooltip } from "@mui/material"
import { Brush, BuildCircle, Email, Facebook, ImportantDevices, Instagram, Language, LocalPhone, LocationOn, Moving, OfflineBolt, Recommend, SettingsSuggest, ShoppingBasket, Stars, Storage, WhatsApp } from "@mui/icons-material"


const services = [
    { title: "Diseño web", icon: <ImportantDevices />, path: "" },
    { title: "eCommerce", icon: <ShoppingBasket />, path: "" },
    { title: "Mantenimiento web", icon: <SettingsSuggest />, path: "" },
    { title: "Diseño gráfico", icon: <Brush />, path: "" },
    { title: "Marketing online", icon: <Moving />, path: "" },
    { title: "Alojamiento web", icon: <Storage />, path: "" },
];

const plans = [
    { title: "Web Básica", icon: <Recommend />, path: "" },
    { title: "Tienda Online", icon: <Stars />, path: "" },
    { title: "Web Autogestionable", icon: <OfflineBolt />, path: "" },
    { title: "Personalizada", icon: <BuildCircle />, path: "" },
];

const contact = [
    { title: "San Vicente, Córdoba.", icon: <LocationOn />, path: "" },
    { title: "+54-351-3295515", icon: <LocalPhone />, path: "" },
    { title: "www.damagedevs.com", icon: <Language />, path: "" },
    { title: "damagedevs@gmail.com", icon: <Email />, path: "" },
]

export const Footer: FC = () => {
    return (
        <footer className="footer-container">
            <Container maxWidth="lg">
                <Grid container justifyContent="space-between" alignItems="start" spacing={5} >

                    <Grid item xs={3}>
                        <Image src={`/images/logodmg.png`} alt='Damage devs' width={100} height={33} />
                        <span className="mini-divider" />
                        <Typography> Ponemos el foco en vos y en tu proyecto. Por eso trabajamos de forma conjunta para que tu negocio sea un éxito. </Typography>

                        <Grid container margin="10px 0px" gap={2}>
                            <Grid item>
                                <Tooltip title="Facebook" arrow>
                                    <Link href="/" target="_blank">
                                        <Facebook sx={{ color: "#4267B2", fontSize: 35 }} />
                                    </Link>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                                <Tooltip title="Instagram" arrow>
                                    <Link href="/" target="_blank">
                                        <Instagram sx={{ color: "#E1306C", fontSize: 35 }} />
                                    </Link>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                                <Tooltip title="WhatsApp" arrow>
                                    <Link href="/" target="_blank">
                                        <WhatsApp sx={{ color: "#25D366", fontSize: 35 }} />
                                    </Link>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={3}>
                        <Typography variant="h6"> Servicios </Typography>
                        <span className="mini-divider" />
                        <ListItemMapped arrayLinks={services} />
                    </Grid>

                    <Grid item xs={3}>
                        <Typography variant="h6"> Planes </Typography>
                        <span className="mini-divider" />
                        <ListItemMapped arrayLinks={plans} />
                    </Grid>

                    <Grid item xs={3}>
                        <Typography variant="h6"> Contacto </Typography>
                        <span className="mini-divider" />
                        <ListItemMapped arrayLinks={contact} />
                    </Grid>
                </Grid>

                <Divider sx={{ mt: 3, mb: 1 }} />
                <Typography textAlign="center" fontSize={13} color="#84859d" mb={1} > © Copyright Damage Devs 2020 - 2023. Todos los derechos reservados</Typography>
            </Container>
        </footer>
    )
}
