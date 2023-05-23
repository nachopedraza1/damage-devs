import { NextPage } from "next";

import { Layout } from "@/components/layouts"
import { Breadcrumb } from "@/components/ui";

import { Box, Grid, Typography } from "@mui/material";
import { Category, Dns, Handyman, History, Home, People, PhoneForwarded, QueryStats, Security, SupportAgent, TrendingUp, WhatsApp } from "@mui/icons-material";
import { BenefitsGroup, MonthlyPayment } from "@/components";


const BasicPlanPage: NextPage = () => {
    return (
        <Layout title="Damage Devs - Basic web">

            <Grid container justifyContent="center" alignItems="center" direction="column" mt={5} mb={5}>
                <Breadcrumb backPathLink="/plans" backPathText="Planes" locationtitle="Básica" />
                <Typography variant="subtitle1"> Web Básica </Typography>
                <Typography variant='h6'> Ideal para que tu negocio o proyecto tenga presencia online. </Typography>
                <span className='mini-divider'></span>
                <Typography variant="subtitle1" mt={5}> ¿Cómo se compone el Plan Web Básico? </Typography>
            </Grid>

            <Grid container justifyContent="space-between">
                <Grid item xs={2.9} className="services-box">
                    <Home />
                    <Typography variant="h5" textAlign="center" > Portada</Typography>
                    <Typography> Sección principal del sitio web, destinada como forma de presentación del negocio. </Typography>
                </Grid>
                <Grid item xs={2.9} className="services-box">
                    <Category />
                    <Typography variant="h5" textAlign="center" > Servicios </Typography>
                    <Typography> Sección destinada a indicar qué servicios se ofrecen, con detalle de los mismos. </Typography>
                </Grid>
                <Grid item xs={2.9} className="services-box">
                    <People />
                    <Typography variant="h5" textAlign="center" > Quienes Somos </Typography>
                    <Typography> Sección para mostrar información sobre vos o empresa. </Typography>
                </Grid>
                <Grid item xs={2.9} className="services-box">
                    <PhoneForwarded />
                    <Typography variant="h5" textAlign="center" > Contacto </Typography>
                    <Typography> Sección para que los clientes conozcan todos los medios de contacto disponibles. </Typography>
                </Grid>
            </Grid>

            <BenefitsGroup />
            <MonthlyPayment />
        </Layout>
    )
}

export default BasicPlanPage;
