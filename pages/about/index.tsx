import { NextPage } from 'next';
import Image from 'next/image';

import { Layout } from '@/components/layouts';
import { StatsGroup } from '@/components';

import { Grid, Typography } from '@mui/material';

const AboutPage: NextPage = () => {
    return (
        <Layout title="Damage Devs - Nosotros">

            <Grid container justifyContent="center" alignItems="center" direction="column" mt={5} mb={5} textAlign="center">
                <Typography variant="subtitle1"> Emprendedores como vos </Typography>
                <Typography variant='h6' textAlign="center"> Dedicados, perfeccionistas y con nuevas ideas para ayudarte a crecer en Internet. </Typography>
                <span className='mini-divider'></span>
            </Grid>

            <Grid container>
                <Grid item xs={12} md={6} textAlign="center" position="relative" height={{ xs: 300, sm: 400 }}>
                    <Image src="/images/about-us.png" alt='Damage devs' fill className='image' />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='subtitle1' mb={1}> ¿Quienes somos? </Typography>
                    <Typography mb={2}> Somos jóvenes con experiencia en la web, con nuevas ideas, creativos, y, por sobre todo, con ganas de hacer
                        un buen trabajo y lograr el éxito de nuestros clientes como si sus proyectos fueran los nuestros. Nuestro objetivo es acabar con
                        las relaciones anticuadas y desinteresadas entre las empresas y los clientes, para sustituirlas por una atención exclusiva y
                        predisposición por lograr el éxito. Nuestro trabajo siempre esta pensado en ayudar a que nuestros clientes puedan vender sus
                        productos o servicios, ofreciendo una imagen profesional de su marca o negocio.
                    </Typography>
                    <Typography mb={2} fontWeight={600}>
                        Estamos seguro que no sólo logrará llevarse una página web de excelente calidad, sino también más conocimientos acerca del mundo
                        digital y como abordarlo para sacarle provecho.
                    </Typography>
                </Grid>
            </Grid>

            <StatsGroup />
        </Layout>
    )
}

export default AboutPage