import { FC } from "react";
import Image from "next/image";

import { ListItemMapped } from "./ListItemMapped";
import { Grid, Typography } from "@mui/material";

const characterist = [
    { title: "Diseño web responsive" },
    { title: "Tecnología de última generación" },
    { title: "Optimizadas para buscadores" },
    { title: "Diseños único, detallistas y profesionales, que de seguro mostrara la esencia de su marca" }
];

export const CharacteristicsWebs: FC = () => {
    return (
        <Grid container justifyContent="space-between" mt={10}>
            <Grid item xs={12} md={7}>
                <Typography variant="subtitle2"> Características de nuestras páginas web </Typography>
                <Typography mb={7}> Diseñamos páginas web intuitivas, funcionales y esteticamente profesionales. En el proceso de diseño, nos orientamos en la creación de estructuras de fácil navegación, claridad en el contenido y un diseño web eficaz e innovador que genere una experiencia de usuario perfecta. </Typography>
                <Grid container gap={1}>
                    <ListItemMapped arrayLinks={characterist} fontSize="22px" disableLink />
                </Grid>
            </Grid>
            <Grid item xs={12} md={5} textAlign="center" position="relative" height={{ xs: 300, sm: 420 }}>
                <Image src="/images/imagen-caracteristicas-web-de-emprebit.png" alt="DMG DEVS" fill />
            </Grid>
        </Grid>
    )
}
