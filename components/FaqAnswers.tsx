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
                <Typography variant="subtitle1" textAlign="center"> Preguntas Frecuentes</Typography>
                <span className='mini-divider'></span>
            </Grid>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='acordion-item'>
                <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />}>
                    <Typography>¿A medida que trabajan en mi nueva web, puedo ver avances?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Sí.  Durante la etapa de desarrollo, utilizamos un servidor de prueba (te brindamos un link específico)
                        para que puedas ver el diseño web en proceso y las modificaciones generadas en la etapa de revisión.
                        Dado que se trata de un servicio profesional de alta calidad, por prolijidad sólo utilizaremos el dominio real
                        de tu empresa una vez que la web esté lista y chequeada para ser subida.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='acordion-item'>
                <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />} >
                    <Typography> ¿Realizan modificaciones sobre sitios web existentes? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Si. Efectivamente, podemos realizar modificaciones sobre sitios web ya existentes.  Es probable que
                        podamos hacerte algunas sugerencias sobre oportunidades de mejora en aspectos visuales y de marketing
                        digital si fuera necesario.
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
                    <Typography> ¿Cuánto cuesta realizar una página web? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ciertamente, cada proyecto en diseño web es diferente.  Por ello, la cantidad de tiempo de desarrollo asociado varía
                        de proyecto a proyecto y por ende su costo.  Sin embargo, para simplificar el proceso de presupuestación, podés ponerte
                        en  <MuiLink component={Link} href="/plans" color="primary.main" sx={{ textDecoration: "underline" }}> contacto con nosotros </MuiLink>
                        te haremos algunas preguntas simples que son claves para entender tus requerimientos y te presentaremos
                        la propuesta más conveniente.
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
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className='acordion-item'>
                <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />} >
                    <Typography> ¿Cuánto tiempo lleva disponer de mi nueva página web? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Cada proyecto es particular y diferente, pero usualmente la mayoría de los desarrollos web se completan
                        en un plazo no mayor a 30 días desde la confirmación del trabajo, contando con la información requerida.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className='acordion-item'>
                <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />} >
                    <Typography> Ya tengo una web y quisiera transformarla en autoadministrable…es posible? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Sí, es posible.  La complejidad de esta tarea dependerá de la naturaleza técnica del sitio web a modificar.
                        Trabajamos con tecnología autoadministrable sumamente eficaz y conocida, agregando elementos de programación
                        propios que hacen la edición de tu página web aún mucho más sencilla y ágil.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} className='acordion-item'>
                <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />} >
                    <Typography> Mi nueva página web, ¿funcionará correctamente en celulares smartphone? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        En Damage Devs utilizamos la más moderna tecnología responsive (“adaptativa”) como una característica
                        incluida en todos nuestros diseños.  Los contenidos de tu web se ajustarán automáticamente a los
                        tamaños de diferentes dispositivos como celulares y tablets, logrando una óptima experiencia del
                        usuario en cada caso.  Esto constituye una muy importante ventaja competitiva online.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box >
    )
}
