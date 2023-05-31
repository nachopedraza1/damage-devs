import { FC } from "react";
import { Grid, Typography, Button } from "@mui/material"
import { ImportantDevices, ShoppingBasket, SettingsSuggest, Brush, Moving, Storage } from "@mui/icons-material"
import Link from "next/link";

const services = [
    { title: "Diseño web", text: "Realizamos un servicio de diseño web personalizado, profesional y detallista, utilizando las últimas tendencias de UX y optimizadas para verse en dispositivos móviles.", path: "", icon: <ImportantDevices /> },
    { title: "eCommerce", text: " Desarrollamos tiendas online eCommerce con un diseño atractivo y efectivo, para que puedas multiplicar tus ventas y que tu mejor local sea tu sítio web.", path: "", icon: <ShoppingBasket /> },
    { title: "Mantenimiento web", text: "En DamageDevs te hacemos la vida más fácil, te ofrecemos un servicio para mantener tu página web actualizada y optimizada para que todo funcione correctamente.", icon: <SettingsSuggest /> },
    { title: "Diseño gráfico", text: " Tenemos conocimiento de branding y podemos ofrécele un servicio de diseño gráfico en general, para que su marca se vea atractiva y profesional.", path: "", icon: <Brush /> },
    { title: "Marketing online", text: "Le ofrecemos un servicio para crear y gestionar sus campañas de Google Adwords, Facebook ads e Instagram para obtener el mayor retorno posible.", path: "", icon: <Moving /> },
    { title: "Alojamiento web", text: " Alojamos tu sítio web al mejor precio del mercado. Nuestros servidores cuentan con almacenamiento en Discos SSD y certificado SSL.", path: "", icon: <Storage /> },
];

export const Services: FC = () => {
    return (
        <>
            <Grid container direction="column" alignItems="center" mb={4}>
                <Typography variant="h4" fontWeight={600}> Nuestros servicios </Typography>
                <span className='mini-divider'></span>
            </Grid>

            <Grid container justifyContent={{ xs: "center", md: "space-between" }} gap={4}>
                {services.map(({ title, text, icon, path }) => (
                    <Grid item xs={12} sm={5.6} md={3.7} className="services-box" key={title}>
                        {icon}
                        <Typography variant="h5"> {title} </Typography>
                        <Typography mb={3}>
                            {text}
                        </Typography>
                        <Link href="/services">
                            <Button variant="contained" sx={{ textAlign: "end" }}> VER MAS </Button>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
