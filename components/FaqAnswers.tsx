import { FC, SyntheticEvent, useState } from "react"
import Link from "next/link";

import { ListItemMapped } from "./ListItemMapped";

import { Accordion, AccordionSummary, Typography, AccordionDetails, Grid, Link as MuiLink, Box } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const FaqAnswers: FC = () => {
    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };


    return (
        <Box mb={5}>
            <Grid container justifyContent="center" alignItems="center" direction="column" mt={5} mb={2}>
                <Typography variant="subtitle1"> Preguntas Frecuentes</Typography>
                <span className='mini-divider'></span>
            </Grid>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='acordion-item'>
                <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />}>
                    <Typography>¿Qué hace una agencia de diseño web?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Las agencias se encargan de desarrollar y mantener sitios web. A través de tendencias digitales, se inspiran en crear páginas web profesionales, con foco en el negocio de cada cliente.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='acordion-item'>
                <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />} >
                    <Typography> ¿Cómo y a través de qué medios puedo pagar el servicio? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        No importa que proyecto o plan tenga con nosotros, nuestro mayor enfoque y prioridad es la satisfacción de nuestros clientes.
                        Si tenemos que darle una mano por algún problema, aconsejarle o guiarlo en algun proceso, tenga 100% la certeza de que lo vamos
                        hacer y sin pasarle una factura de por medio.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='acordion-item'>
                <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />}>
                    <Typography>¿Cuáles son los beneficios de contratar una agencia de diseño web?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Contar con una agencia de desarrollo web es clave. Algunos beneficios son:
                    </Typography>
                    <ListItemMapped disableLink arrayLinks={[
                        { title: "Mejoras en el rendimiento del sitio web (y por ende en la experiencia del usuario)." },
                        { title: "Contar con soporte técnico en caso que lo necesites." },
                        { title: "Podrás centrarte en tus tareas del negocio, mientras que de la web se encargaran los diseñadores/programadores." },
                        { title: "El sitio web contará con toda la optimización necesaria para mejorar la performance." },
                    ]} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className='acordion-item'>
                <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />} >
                    <Typography> ¿Por qué contratar una agencia de diseño web </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        El crecimiento digital es imparable, y aún hay una brecha muy importante
                        que no se está abarcando. Tener un negocio online hoy en día es necesario en cualquier rubro.
                        Ya sea que vendas servicios, productos, o simplemente quieras tener un perfil profesional,
                        contar con una página web pensada para llegar a tus potenciales clientes,
                        hará que tu negocio crezca.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className='acordion-item'>
                <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />} >
                    <Typography> ¿Cuáles son los precios para contratar agencia de diseño y desarrollo web en Argentina? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Los precios de diseño web en Argentina varían en función de la dimensión y la complejidad de cada proyecto.
                        Como referencia, el desarrollo de un sitio web de única página (Landing page) va desde los $40.000 ARS / 100 USD , y una tienda online
                        (ecommerce) va desde los $140.000 ARS / 350 USD. Estos valores se abonan por única vez. Para información más detallada,
                        visita nuestra <MuiLink component={Link} href="/plans" color="primary.main" sx={{ textDecoration: "underline" }}> seccion de planes. </MuiLink>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className='acordion-item'>
                <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />} >
                    <Typography> ¿Cuál es el costo por mantener un sitio web? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Si estás buscando un mantenimiento web de tu página web en Argentina, los valores inician desde los
                        $2.500 ARS / 10 USD mensuales para las Landing page, y desde los $3.500 ARS / 15 USD mensuales para tiendas online.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box >
    )
}
