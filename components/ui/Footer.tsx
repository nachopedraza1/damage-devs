import { FC } from "react";
import Image from "next/image"
import Link from "next/link";

import { Brush, BuildCircle, Email, ImportantDevices, Language, LocalPhone, LocationOn, Moving, OfflineBolt, Paid, Recommend, SettingsSuggest, ShoppingBasket, Stars, Storage } from "@mui/icons-material"
import { Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography, Link as MuiLink } from "@mui/material"


const services = [
    { title: "Diseño web", icon: <ImportantDevices />, path: "" },
    { title: "eCommerce", icon: <ShoppingBasket />, path: "" },
    { title: "Mantenimiento web", icon: <SettingsSuggest />, path: "" },
    { title: "Diseño gráfico", icon: <Brush />, path: "" },
    { title: "Marketing online", icon: <Moving />, path: "" },
    { title: "Alojamiento web", icon: <Storage />, path: "" },
];

const plans = [
    { title: "Web Económica", icon: <Paid />, path: "" },
    { title: "Web Básica", icon: <Recommend />, path: "" },
    { title: "Web Autogestionable", icon: <OfflineBolt />, path: "" },
    { title: "Tienda Online", icon: <Stars />, path: "" },
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
                        <Image src={`/images/logodmg.png`} alt='Damage devs' width={100} height={33} style={{ marginBottom: 15 }} />
                        <Typography> Ponemos el foco en vos y en tu proyecto. Por eso trabajamos de forma conjunta para que tu negocio sea un éxito. </Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Typography variant="h6"> Servicios </Typography>
                        <span className="mini-divider" />
                        <List disablePadding>
                            {services.map(({ icon, title, path }) => (
                                <MuiLink component={Link} href={path} key={title}>
                                    <ListItem disablePadding key={title}>
                                        <ListItemIcon sx={{ minWidth: "40px" }}>
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                </MuiLink>
                            ))}
                        </List>
                    </Grid>

                    <Grid item xs={3}>
                        <Typography variant="h6"> Navegación </Typography>
                        <span className="mini-divider" />
                        <List disablePadding>
                            {plans.map(({ icon, title, path }) => (
                                <MuiLink component={Link} href={path} key={title}>
                                    <ListItem disablePadding >
                                        <ListItemIcon sx={{ minWidth: "40px" }}>
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                </MuiLink>
                            ))}
                        </List>
                    </Grid>

                    <Grid item xs={3}>
                        <Typography variant="h6"> Contacto </Typography>
                        <span className="mini-divider" />
                        <List disablePadding>
                            {contact.map(({ icon, title, path }) => (
                                <MuiLink component={Link} href={path} key={title}>
                                    <ListItem disablePadding key={title}>
                                        <ListItemIcon sx={{ minWidth: "40px" }}>
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                </MuiLink>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}
