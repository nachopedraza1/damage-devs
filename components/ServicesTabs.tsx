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
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const servicesDesignWeb = [
    { title: "Diseño adaptable a cualquier dispositivo movil", },
    { title: "Tecnologías de última generación" },
    { title: "Optimizadas para buscadores" },
    { title: "Diseñadas para una mejor experiencia de usuario" },
    { title: "Te bonificamos 3 MESES GRÁTIS el alojamiento de tu sítio web (Valuado en 5 USD mensual)" }
];

export const ServicesTabs = () => {
    const [value, setValue] = useState(0);

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
                <Grid container mt={4}>
                    <Grid item xs={6}>
                        <Image src="/images/service-design-web.png" alt="DMG DEVS" width={400} height={400} />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h5' fontWeight={600} mb={2}> Servicio de diseño y desarrollo web profesional </Typography>
                        <Typography mb={2}> Nuestros diseños web están pensados en siempre a ayudar a nuestros clientes a vender su producto o servicio, ofreciendo una imagen profesional de su negocio con un sitio web de alto impacto. </Typography>
                        <ListItemMapped arrayLinks={servicesDesignWeb} disableLink />
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                2
            </TabPanel>
            <TabPanel value={value} index={2}>
                3
            </TabPanel>
            <TabPanel value={value} index={3}>
                4
            </TabPanel>
            <TabPanel value={value} index={4}>
                5
            </TabPanel>
            <TabPanel value={value} index={5}>
                6
            </TabPanel>
        </Box>
    );
}