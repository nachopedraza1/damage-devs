import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import { FC, SyntheticEvent, useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const FaqAnswers: FC = () => {
    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };


    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='acordion-item'>
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
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='acordion-item'>
                <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />}>
                    <Typography>¿Cómo funciona el rembolso y cómo reclamo mi dinero?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Pensamos y desarrollamos nuestros servicios con el objetivo de satisfacerte en un 100% y esperando cumplir con todas tus expectativas.
                        Por esta razón te brindamos la posibilidad de utilizar el servicio durante 30 días, devolviéndote tu dinero si no deseas continuar utilizándolo.
                        Para desactivar el servicio y solicitar el reembolso del dinero, simplemente contáctanos a través de Mesa de Soporte o chat de Atención al Cliente,
                        indicándonos tu decisión.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='acordion-item'>
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
