import { FC, useState, SyntheticEvent } from 'react';

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const AcordionHome: FC = () => {

    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };


    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />} >
                    <Typography> 1 - Atención personalizada y exclusiva</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        No importa que proyecto o plan tenga con nosotros, nuestro mayor enfoque y prioridad es la satisfacción de nuestros clientes.
                        Si tenemos que darle una mano por algún problema, aconsejarle o guiarlo en algun proceso, tenga 100% la certeza de que lo vamos
                        hacer y sin pasarle una factura de por medio.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
                <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />}>
                    <Typography>2 - Páginas web bien hechas y 100% profesionales</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        ¡Somos detallistas y perfeccionistas!.
                        Nos encanta tener en nuestro portfolio páginas web bien hechas y lindas. No entregamos trabajos a medio armar o mal diseñados,
                        ademas, implementamos las últimas tendencia de UX para tener una mejor experincia de usuario.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />}>
                    <Typography>3 - Asesoramiento y soporte de primer nivel</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Contamos con videos tutoriales bien profesionales y detallados para ayudarlo a tener un negocio mucho más productivo y organizado.
                        Ademas, si tenemos que ayudarle con algun tramite o configuración online, como: comprar un dominio, configurar un correo corporativo, etc.
                        lo hacemos con gusto y sin ningun recargo adicional.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div >
    )
}
