import { FC } from "react";
import Image from "next/image";

import { RadioButtonChecked } from "@mui/icons-material";
import { Grid, Typography, ListItem, ListItemIcon, ListItemText } from "@mui/material";

export const CharacteristicsWebs: FC = () => {
    return (
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
    )
}
