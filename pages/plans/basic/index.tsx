import { useContext } from "react";
import { NextPage } from "next";

import { UiContext } from "@/context/UiContext";

import { Layout, PlanLayout } from "@/components/layouts"
import { Breadcrumb, CustomButton } from "@/components/ui";

import { Box, Grid, Typography } from "@mui/material";
import { Category, Home, People, PhoneForwarded } from "@mui/icons-material";


const BasicPlanPage: NextPage = () => {

    const { handleOpenModal } = useContext(UiContext)

    return (
        <Layout title="Damage Devs - Basic web">
            <PlanLayout>
                <Grid container justifyContent="center" alignItems="center" direction="column" mt={5} mb={5}>
                    <Breadcrumb backPathLink="/plans" backPathText="Planes" locationtitle="Básica" />
                    <Typography variant="subtitle1"> Web Básica </Typography>
                    <span className='mini-divider'></span>
                    <Box sx={{ cursor: "pointer" }} onClick={handleOpenModal}>
                        <CustomButton text="CONTRATAR" />
                    </Box>
                </Grid>

                <Grid container justifyContent={{ xs: "center", sm: "space-between" }} gap={2}>
                    <Grid item xs={12} textAlign="center">
                        <Typography variant="subtitle1" mb={4}> ¿Cómo se compone el Plan Web Básico? </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5.8} md={2.8} className="services-box">
                        <Home />
                        <Typography variant="h5" textAlign="center" > Portada</Typography>
                        <Typography> Sección principal del sitio web, destinada como forma de presentación del negocio. </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5.8} md={2.8} className="services-box">
                        <Category />
                        <Typography variant="h5" textAlign="center" > Servicios </Typography>
                        <Typography> Sección destinada a indicar qué servicios se ofrecen, con detalle de los mismos. </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5.8} md={2.8} className="services-box">
                        <People />
                        <Typography variant="h5" textAlign="center" > Quienes Somos </Typography>
                        <Typography> Sección para mostrar información sobre vos o empresa. </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5.8} md={2.8} className="services-box">
                        <PhoneForwarded />
                        <Typography variant="h5" textAlign="center" > Contacto </Typography>
                        <Typography> Sección para que los clientes conozcan todos los medios de contacto disponibles. </Typography>
                    </Grid>
                </Grid>
            </PlanLayout>
        </Layout>
    )
}

export default BasicPlanPage;
