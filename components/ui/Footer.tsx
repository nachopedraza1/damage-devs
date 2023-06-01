import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { ListItemMapped } from "../ListItemMapped";
import { SocialButtons } from "./SocialButtons";

import { Container, Grid, Typography, Divider } from "@mui/material"
import { Brush, BuildCircle, Email, ImportantDevices, Language, LocalPhone, LocationOn, Moving, OfflineBolt, Recommend, SettingsSuggest, ShoppingBasket, Stars, Storage } from "@mui/icons-material"


const services = [
    { title: "Diseño web", icon: <ImportantDevices />, path: "/services" },
    { title: "eCommerce", icon: <ShoppingBasket />, path: "/services" },
    { title: "Mantenimiento web", icon: <SettingsSuggest />, path: "/services" },
    { title: "Diseño gráfico", icon: <Brush />, path: "/services" },
    { title: "Marketing online", icon: <Moving />, path: "/services" },
    { title: "Alojamiento web", icon: <Storage />, path: "/services" },
];

const plans = [
    { title: "Web Básica", icon: <Recommend />, path: "/plans/basic" },
    { title: "Tienda Online", icon: <Stars />, path: "/plans/ecommerce" },
    { title: "Web Autogestionable", icon: <OfflineBolt />, path: "/plans/autogest" },
    { title: "Personalizada", icon: <BuildCircle />, path: "/plans#custom" },
];

const contact = [
    { title: "San Vicente, Córdoba.", icon: <LocationOn />, path: "https://www.google.com/maps/search/San+Vicente,+C%C3%B3rdoba+2812/@-31.4236324,-64.1502446,17z/data=!3m1!4b1?hl=es&entry=ttu", target: "_blanc" },
    { title: "+54-351-3295515", icon: <LocalPhone />, path: "https://wa.me/3513295515", target: "_blanc" },
    { title: "www.damagedevs.com", icon: <Language />, path: "/" },
    { title: "damagedevs@hotmail.com", icon: <Email />, path: "mailto:damagedevs@hotmail.com", target: "_blanc" },
]

export const Footer: FC = () => {
    return (
        <footer className="footer-container">
            <Container maxWidth="lg">
                <Grid container justifyContent="space-between" alignItems="start" spacing={5} >

                    <Grid item xs={12} sm={6} md={3}>
                        <Link href="/">
                            <Image src={`/images/logodmg3.png`} alt='Damage devs' width={100} height={33} />
                        </Link>
                        <span className="mini-divider" />
                        <Typography> Ponemos el foco en vos y en tu proyecto. Por eso trabajamos de forma conjunta para que tu negocio sea un éxito. </Typography>
                        <SocialButtons />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6"> Servicios </Typography>
                        <span className="mini-divider" />
                        <ListItemMapped arrayLinks={services} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6"> Planes </Typography>
                        <span className="mini-divider" />
                        <ListItemMapped arrayLinks={plans} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
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
