import { useContext } from "react";
import { NextPage } from "next";

import { Layout } from "@/components/layouts";
import { CustomButton, LoaderImage, MouseScroll } from "@/components/ui";
import { AcordionHome, CharacteristicsWebs, Services, StatsGroup, ModalWorks } from "@/components";

import { Box, Grid, Typography } from '@mui/material';

import { UiContext } from "@/context/UiContext";

const HomePage: NextPage = () => {

  const { handleOpenModal, openModal } = useContext(UiContext);

  return (
    <>
      <Layout title="Damage Devs - Home">

        <Grid container justifyContent="space-between" alignItems="center" pt={4} mb={4}>
          <Grid item xs={12} md={5} position="relative">
            <Typography variant="subtitle1" mb={2}>Diseñamos páginas web éxitosas, con estándares de última generación</Typography>
            <Typography variant="h6" mb={2}>Somos la mejor agencia en brindar atención personalizada y entregar el mejor soporte a nuestros clientes.</Typography>
            <Box sx={{ cursor: "pointer" }} onClick={handleOpenModal}>
              <CustomButton text="Ultimos trabajos" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6.5} position="relative" height={{ xs: 300, sm: 500 }}>
            <LoaderImage url="/images/image-home-web-design.png" />
          </Grid>
        </Grid>

        <Services />

        <Grid container justifyContent="space-between" alignItems="center" mt={10}>
          <Grid item xs={12} textAlign="center">
            <Typography variant="subtitle1" mb={2}> Déjenos ser su guía y crezca con nosotros en Internet </Typography>
            <Typography variant="h6" mb={7}> Nuestros diseños web están pensados en siempre ayudar a nuestros
              clientes a vender su producto o servicio, ofreciendo una imagen profesional de su negocio con un sitio
              web de alto impacto.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} textAlign="center" position="relative" height={{ xs: 300, md: 390 }}>
            <LoaderImage url="/images/imagen-porque-elegir.png" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" mb={2} mt={{ xs: 3, md: 0 }}> ¿Por qué elegir Damage Devs? </Typography>
            <AcordionHome />
          </Grid>
        </Grid>

        <CharacteristicsWebs />
        <StatsGroup />
        <ModalWorks />

      </Layout >
    </>
  )
}

export default HomePage;