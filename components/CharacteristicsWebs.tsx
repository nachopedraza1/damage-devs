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
            <Grid item xs={7}>
                <Typography variant="h5" fontWeight={600} mb={2}> Características de nuestras páginas web </Typography>
                <Typography mb={7}> Diseñamos páginas web intuitivas, funcionales y esteticamente profesionales. En el proceso de diseño, nos orientamos en la creación de estructuras de fácil navegación, claridad en el contenido y un diseño web eficaz e innovador que genere una experiencia de usuario perfecta. </Typography>
                <Grid container gap={1}>
                    <ListItemMapped arrayLinks={characterist} fontSize="22px" disableLink />
                </Grid>
            </Grid>
            <Grid item xs={5} textAlign="center">
                <Image src="/images/imagen-caracteristicas-web-de-emprebit.png" alt="DMG DEVS" width={450} height={450} />
            </Grid>
        </Grid>
    )
}
