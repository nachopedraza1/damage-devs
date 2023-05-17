import { NextPage } from "next"
import Image from "next/image";

import { Layout } from "@/components/layouts";
import { AcordionHome, StatsGroup } from "@/components";
import { Blob, CustomButton, MouseScroll } from "@/components/ui";

import { Grid, Typography, Button, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ImportantDevices, ShoppingBasket, SettingsSuggest, Brush, Moving, Storage, RadioButtonChecked } from "@mui/icons-material";


const services = [
  { title: "Diseño web", text: "Realizamos un servicio de diseño web personalizado, profesional y detallista, utilizando las últimas tendencias de UX y optimizadas para verse en dispositivos móviles.", path: "", icon: <ImportantDevices /> },
  { title: "eCommerce", text: " Desarrollamos tiendas online eCommerce con un diseño atractivo y efectivo, para que puedas multiplicar tus ventas y que tu mejor local sea tu sítio web.", path: "", icon: <ShoppingBasket /> },
  { title: "Mantenimiento web", text: "En Emprebit te hacemos la vida más fácil, te ofrecemos un servicio para mantener tu página web actualizada y optimizada para que todo funcione correctamente.", icon: <SettingsSuggest /> },
  { title: "Diseño gráfico", text: " Tenemos conocimiento de branding y podemos ofrécele un servicio de diseño gráfico en general, para que su marca se vea atractiva y profesional.", path: "", icon: <Brush /> },
  { title: "Marketing online", text: "Le ofrecemos un servicio para crear y gestionar sus campañas de Google Adwords, Facebook ads e Instagram para obtener el mayor retorno posible.", path: "", icon: <Moving /> },
  { title: "Alojamiento web", text: " Alojamos tu sítio web al mejor precio del mercado. Nuestros servidores cuentan con almacenamiento en Discos SSD y certificado SSL.", path: "", icon: <Storage /> },
]

const HomePage: NextPage = () => {

  return (
    <>
      <Layout title="DMGDEVS - Home">

        <Blob width="50%" top="-30px" left="2%" />
        <Blob width="70%" top="500px" left="60%" />
        <Blob width="60%" top="1250px" left="-3%" />
        <Blob width="60%" top="2050px" right={-150} />

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

        <Grid container justifyContent="space-between" gap={4}>
          <Grid item xs={12} mb={3}>
            <Typography variant="h4" fontWeight={600} textAlign="center"> Nuestros servicios </Typography>
          </Grid>

          {services.map(({ title, text, icon, path }) => (
            <Grid item xs={3.7} className="services-box" key={title}>
              {icon}
              <Typography variant="h5" fontWeight={600} textAlign="center" mb={1}> {title} </Typography>
              <Typography mb={3}>
                {text}
              </Typography>
              <Button variant="contained" sx={{ textAlign: "end" }}> VER MAS </Button>
            </Grid>
          ))}
        </Grid>

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

        <Grid container justifyContent="space-between" mt={10}>
          <Grid item xs={7}>
            <Typography variant="h5" fontWeight={600} mb={2}> Características de nuestras páginas web </Typography>
            <Typography mb={7}> Diseñamos páginas web intuitivas, funcionales y esteticamente profesionales. En el proceso de diseño, nos orientamos en la creación de estructuras de fácil navegación, claridad en el contenido y un diseño web eficaz e innovador que genere una experiencia de usuario perfecta. </Typography>
            <Grid container gap={1}>
              {["Diseño web responsive", "Tecnología de última generación", "Optimizadas para buscadores", "Diseños único, detallistas y profesionales, que de seguro mostrara la esencia de su marca"]
                .map(text => (
                  <ListItem disablePadding key={text}>
                    <ListItemIcon sx={{ minWidth: "40px" }}>
                      <RadioButtonChecked />
                    </ListItemIcon>
                    <ListItemText primary={text} primaryTypographyProps={{ fontSize: "22px" }} />
                  </ListItem>
                ))
              }
            </Grid>
          </Grid>
          <Grid item xs={5} textAlign="center">
            <Image src="/images/imagen-caracteristicas-web-de-emprebit.png" alt="DMG DEVS" width={450} height={450} />
          </Grid>
        </Grid>

        <StatsGroup />

      </Layout >
    </>
  )
}

export default HomePage;