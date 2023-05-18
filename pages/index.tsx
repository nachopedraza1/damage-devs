import { NextPage } from "next"
import Image from "next/image";

import { Layout } from "@/components/layouts";
import { CustomButton, MouseScroll } from "@/components/ui";
import { AcordionHome, CharacteristicsWebs, Services, StatsGroup } from "@/components";

import { Grid, Typography } from '@mui/material';

const HomePage: NextPage = () => {

  return (
    <>
      <Layout title="DMGDEVS - Home">

        <Grid container justifyContent="space-between" alignItems="center" pt={4} mb={4}>
          <Grid item xs={5} position="relative">
            <Typography variant="h4" fontWeight={600} mb={2}>Diseñamos páginas web éxitosas, con estándares de última generación</Typography>
            <Typography variant="h6" mb={2}>Somos la mejor agencia en brindar atención personalizada y entregar el mejor soporte a nuestros clientes.</Typography>
            <CustomButton text="ver trabajos" />
            <MouseScroll />
          </Grid>
          <Grid item xs={6}>
            <Image src="/images/image-home-web-design-emprebit.png" alt="DMG DEVS" width={500} height={500} />
          </Grid>
        </Grid>

        <Services />

        <Grid container justifyContent="space-between" mt={10}>
          <Grid item xs={12} textAlign="center">
            <Typography variant="h4" fontWeight={600} mb={2}> Déjenos ser su guía y crezca con nosotros en Internet </Typography>
            <Typography variant="h6" mb={7}> Nuestros diseños web están pensados en siempre ayudar a nuestros clientes a vender su producto o servicio, ofreciendo una imagen profesional de su negocio con un sitio web de alto impacto. </Typography>
          </Grid>
          <Grid item xs={5} textAlign="center">
            <Image src="/images/imagen-porque-elegir-emprebit.png" alt="DMG DEVS" width={400} height={400} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" fontWeight={600} mb={2}> ¿Por qué elegir Damage Devs? </Typography>
            <AcordionHome />
          </Grid>
        </Grid>

        <CharacteristicsWebs />

        <StatsGroup />

      </Layout >
    </>
  )
}

export default HomePage;