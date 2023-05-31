import { SyntheticEvent, useState } from "react";
import Image from "next/image";

import { ListItemMapped } from "./ListItemMapped";

import { Box, Typography, Tabs, Tab, Grid } from "@mui/material";
import { ImportantDevices, ShoppingBasket, SettingsSuggest, Brush, Moving, Storage } from "@mui/icons-material";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Grid container>{children}</Grid>
                </Box>
            )}
        </div>
    );
}

const servicesDesignWeb = [
    { title: "Diseño adaptable a cualquier dispositivo movil.", },
    { title: "Tecnologías de última generación." },
    { title: "Optimizadas para buscadores." },
    { title: "Diseñadas para una mejor experiencia de usuario." },
    { title: "Te bonificamos 3 MESES GRÁTIS el alojamiento de tu sítio web (Valuado en 5 USD mensual)." }
];

const servicesEcommerce = [
    { title: "Implementación y desarrollo.", },
    { title: "Integraciones con medios de pagos." },
    { title: "Integración y configuración de la logística." },
    { title: "Mantenimiento y asesoramiento." },
    { title: "Video tutorial detallado para que aprenda a gestionar su tienda online." }
];

const servicesMante = [
    { title: "Solución de problemas y errores.", },
    { title: "Actualizaciones, themes y plugins." },
    { title: "Backups periódicas de sus archivos y la base de datos." },
    { title: "Migrar de servidor su sítio web." },
    { title: "Agregar, borrar y editar contenido de su sítio web." }
];

const servicesDesigns = [
    { title: "Diseño de logotipo e Imagotipo.", },
    { title: "Manual de marcas." },
    { title: "Tarjetas personales." },
    { title: "Folletos / Flyers." },
    { title: "Diseño de banners para sitios web y redes sociales." }
];

const servicesSeo = [
    { title: "Conseguir nuevos clientes.", },
    { title: "Resultados a corto plazo." },
    { title: "Control de presupuesto." },
    { title: "Medir los resultados." },
];

const servicesHosting = [
    { title: "Certificado de seguridad ssl grátis.", },
    { title: "Cuentas de email corporativas ilimitadas." },
    { title: "Disco raid 10 y memorias de ultima generación." },
    { title: "Tutoriales para administrar tu hosting." },
];

export const ServicesTabs = () => {

    const [value, setValue] = useState(5);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', mt: 7 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Tabs value={value}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    onChange={handleChange}
                    className="tabs-container"
                >
                    <Tab disableRipple label="Diseño web" icon={<ImportantDevices sx={{ fontSize: 55 }} />} />
                    <Tab disableRipple label="eCommerce" icon={<ShoppingBasket sx={{ fontSize: 55 }} />} />
                    <Tab disableRipple label="Mantenimiento web" icon={<SettingsSuggest sx={{ fontSize: 55 }} />} />
                    <Tab disableRipple label="Diseño gráfico" icon={<Brush sx={{ fontSize: 55 }} />} />
                    <Tab disableRipple label="Marketing online" icon={<Moving sx={{ fontSize: 55 }} />} />
                    <Tab disableRipple label="Alojamiento web" icon={<Storage sx={{ fontSize: 55 }} />} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Grid container alignItems="center" className="fade" mt={4} gap={3}>
                    <Grid item xs={12} md={5.8} textAlign="center" position="relative" height={{ xs: 250, md: 370 }}>
                        <Image src="/images/service-design-web.png" alt="DMG DEVS" fill className='image' />
                    </Grid>
                    <Grid item xs={12} md={5.8} >
                        <Typography variant="subtitle1" mb={2}> Servicio de diseño y desarrollo web profesional. </Typography>
                        <Typography mb={2}> Nuestros diseños web están pensados en siempre a ayudar a nuestros clientes a vender su producto o servicio, ofreciendo una imagen profesional de su negocio con un sitio web de alto impacto. </Typography>
                        <ListItemMapped arrayLinks={servicesDesignWeb} disableLink />
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid container className="fade" mt={4} gap={3}>
                    <Grid item xs={12} md={5.8}>
                        <Typography variant="subtitle1" mb={2}> Diseño y desarrollo de sítios web eCommerce o tienda online. </Typography>
                        <Typography mb={2}> Somos una Agencia con más de 3 años de experiencia en el desarrollo y mantenimiento de sitios web eCommerce.</Typography>
                        <ListItemMapped arrayLinks={servicesEcommerce} disableLink />
                    </Grid>
                    <Grid item xs={12} md={5.8} textAlign="center" position="relative" height={{ xs: 250, md: 370 }}>
                        <Image src="/images/service-ecommerce.png" alt="DMG DEVS" fill className='image' />
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Grid container className="fade" mt={4} gap={3}>
                    <Grid item xs={12} md={5.8} textAlign="center" position="relative" height={{ xs: 250, md: 370 }}>
                        <Image src="/images/service-mante.png" alt="DMG DEVS" fill className='image' />
                    </Grid>
                    <Grid item xs={12} md={5.8}>
                        <Typography variant="subtitle1" mb={2}> Servicio de manteniento para todo tipo de páginas web. </Typography>
                        <Typography mb={2}>Ya no tendrá que preocuparte de problemas inesperados que pueden mantener horas e incluso días tu sitio web offline, en muchos casos localizamos los errores y los corregimos antes incluso de que sean un verdadero problema. </Typography>
                        <ListItemMapped arrayLinks={servicesMante} disableLink />
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Grid container className="fade" mt={4} gap={3}>
                    <Grid item xs={12} md={5.8}>
                        <Typography variant="subtitle1" mb={2}> Servicio de diseño gráfico. </Typography>
                        <Typography mb={2}> La imagen visual es a menudo la primera impresión que la gente tiene de tus productos o servicios, también es la forma de transmitir de cómo queres que te vean. Una marca eficaz debe comunicar su propósito y personalidad, al tiempo que mejora la presencia de su empresa, donde quiera que aparezca.</Typography>
                        <ListItemMapped arrayLinks={servicesDesigns} disableLink />
                    </Grid>
                    <Grid item xs={12} md={5.8} textAlign="center" position="relative" height={{ xs: 250, md: 370 }}>
                        <Image src="/images/service-design-web.png" alt="DMG DEVS" fill className='image' />
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Grid container className="fade" mt={4} gap={3}>
                    <Grid item xs={12} md={5.8} textAlign="center" position="relative" height={{ xs: 250, md: 370 }}>
                        <Image src="/images/service-seo.png" alt="DMG DEVS" fill className='image' />
                    </Grid>
                    <Grid item xs={12} md={5.8}>
                        <Typography variant="subtitle1" mb={2}> Servicio de publicidad en Google ads. </Typography>
                        <Typography mb={2}>Llega a nuevos potenciales clientes, con una inversión mínima y resultados a corto plazo.
                            Los usuarios compran y buscan información de todo tipo en Google. Con tus anuncios se lo pondrás más fácil y tendrán más posibilidades de conectar contigo. Serás visible para todas aquellas personas que realicen búsquedas con palabras relacionadas de tu sector, negocio,producto o servicio. </Typography>
                        <ListItemMapped arrayLinks={servicesSeo} disableLink />
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Grid container className="fade" mt={4} gap={3}>
                    <Grid item xs={12} md={5.8}>
                        <Typography variant="subtitle1" mb={2}> Servicio de alojamiento web hosting. </Typography>
                        <Typography mb={2}> Contaras con un panel de adminisración muy intuitivo y facil de usar, ademas contaras con vídeos tutoriales que te enseñaran como administrar todo. Todos nuestros servidores cuentan con almacenamiento en Discos RAID 10 y Memorias de úlima generación, garantizandote un redimiento de calidad.</Typography>
                        <ListItemMapped arrayLinks={servicesHosting} disableLink />
                    </Grid>
                    <Grid item xs={12} md={5.8} textAlign="center" position="relative" height={{ xs: 250, md: 370 }}>
                        <Image src="/images/service-hosting.png" alt="DMG DEVS" fill className='image' />
                    </Grid>
                </Grid>
            </TabPanel>
        </Box>
    );
}