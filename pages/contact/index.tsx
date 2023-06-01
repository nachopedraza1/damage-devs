import { FaqAnswers } from '@/components';
import { Layout } from '@/components/layouts';
import { Email, LocationOn, WhatsApp } from '@mui/icons-material';
import { Grid, Typography, Button, Link } from '@mui/material';
import { NextPage } from 'next';

const ContactPage: NextPage = () => {
    return (
        <Layout title="Damage Devs - Contacto">

            <Grid container justifyContent="center" alignItems="center" direction="column" mt={5} mb={5} textAlign="center">
                <Typography variant="subtitle1"> Contactese con nosotros</Typography>
                <Typography variant='h6' textAlign="center"> Dedicados, perfeccionistas y con nuevas ideas para ayudarte a crecer en Internet. </Typography>
                <span className='mini-divider'></span>
            </Grid>


            <Grid container justifyContent="center" gap={4} textAlign="center">

                <Typography variant='h6'> Si tiene alguna pregunta o desea que le coticemos un presupuesto, por favor use los siguientes medios para contactarse con nosotros. </Typography>

                <Grid item xs={12} md={3.1} className="services-box" >
                    <LocationOn />
                    <Typography variant="h5"> ¿Donde estamos? </Typography>
                    <Typography mb={3}>
                        San Jerónimo 2812.<br /> San Vicente, Córdoba.
                    </Typography>
                    <Link target='_blank' href="https://www.google.com/maps/search/San+Vicente,+C%C3%B3rdoba+2812/@-31.4236324,-64.1502446,17z/data=!3m1!4b1?hl=es&entry=ttu">
                        <Button variant="contained" sx={{ textAlign: "end" }}> VER MAPA </Button>
                    </Link>
                </Grid>

                <Grid item xs={12} md={3.1} className="services-box" >
                    <WhatsApp />
                    <Typography variant="h5"> WhatsApp </Typography>
                    <Typography mb={3}>
                        Lunes a viernes 8:00 - 17:00
                        +54-351-3295515
                    </Typography>
                    <Link target='_blank' href="https://wa.me/3513295515">
                        <Button variant="contained" sx={{ textAlign: "end" }}> IR AL CHAT </Button>
                    </Link>
                </Grid>

                <Grid item xs={12} md={3.1} className="services-box" >
                    <Email />
                    <Typography variant="h5"> Email </Typography>
                    <Typography mb={3}>
                        Correo electrónico.<br />
                        damagedevs@hotmail.com
                    </Typography>
                    <Link target='_blank' href="mailto:damagedevs@hotmail.com">
                        <Button variant="contained" sx={{ textAlign: "end" }}> Enviar Mensaje </Button>
                    </Link>
                </Grid>

            </Grid>

            <FaqAnswers />

        </Layout>
    )
}

export default ContactPage