import { NextPage } from "next";

import { Layout, PlanLayout } from "@/components/layouts"
import { Breadcrumb, CustomButton } from "@/components/ui";

import { Box, Grid, Typography } from "@mui/material";
import { Home, Category, People, PhoneForwarded } from "@mui/icons-material";
import { useContext } from "react";
import { UiContext } from "@/context/UiContext";


const AutogestPlanPage: NextPage = () => {

    const { handleOpenModal } = useContext(UiContext)

    return (
        <Layout title="Damage Devs - Autogestionable">
            <PlanLayout>

                <Grid container justifyContent="center" alignItems="center" direction="column" mt={5} mb={5}>
                    <Breadcrumb backPathLink="/plans" backPathText="Planes" locationtitle="Autogestionable" />
                    <Typography variant="subtitle1"> Web Autogestionable </Typography>
                    <Typography variant='h6'> Ten el control absoluto de tu sitio, Ideal para negocios en expansión. </Typography>
                    <span className='mini-divider'></span>
                    <Box sx={{ cursor: "pointer" }} onClick={handleOpenModal}>
                        <CustomButton text="CONTRATAR" />
                    </Box>
                </Grid>

                <Grid container justifyContent="space-between">
                    <Grid item xs={12} textAlign="center">
                        <Typography variant="subtitle1" mb={4}> ¿Cómo se compone el Plan Tienda Online? </Typography>
                    </Grid>
                    <Grid item xs={2.9} className="services-box">
                        <Home />
                        <Typography variant="h5" textAlign="center" > Portada</Typography>
                        <Typography> Sección principal del sitio web, destinada como forma de presentación del negocio. </Typography>
                    </Grid>
                    <Grid item xs={2.9} className="services-box">
                        <Category />
                        <Typography variant="h5" textAlign="center" fontSize={20} >Servicios / Productos </Typography>
                        <Typography> Sección destinada a indicar qué productos o servicios se ofrecen, con detalle de los mismos. </Typography>
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

            </PlanLayout>

        </Layout>
    )
}

export default AutogestPlanPage;