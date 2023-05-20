import { NextPage } from 'next';

import { Layout } from '@/components/layouts';
import { ServicesTabs } from '@/components';

import { Grid, Typography } from '@mui/material';
import { Settings } from '@mui/icons-material';

const ServicesPage: NextPage = () => {
    return (
        <Layout title="Damage Devs - Servicios">

            <Grid container justifyContent="center" alignItems="center" direction="column" mt={5} mb={5}>
                <Typography variant='h6' > Acá puede ver </Typography>
                <Typography variant="subtitle1"> Nuestros Servicios </Typography>
                <span className='mini-divider'></span>
            </Grid>

            <ServicesTabs />

            <Grid container justifyContent="center" alignItems="center" direction="column" mt={5} mb={5}>
                <Typography variant='h6' > Te brindamos un servicio destacado </Typography>
                <Typography variant="subtitle1"> Máxima atención al detalle </Typography>
                <span className='mini-divider'></span>
                <Typography textAlign="center">
                    Para lograr el famoso efecto «wow» de nuestros clientes en internet,
                    trabajamos el diseño web cuidando los detalles al máximo.  Seleccionamos cuidadosamente los elementos,
                    los colores, la distribución, la tipografía. Cada detalle cuenta.  La luz de las fotos, contrastes,
                    llamados a la acción… consideramos cada aspecto del diseño.
                </Typography>
            </Grid>

            <Grid container>
                <Grid item xs={3}>
                    <Settings />
                    <Typography> Sitios web autoadministrables </Typography>
                    <Typography>
                        Somos especialistas en el desarrollo personalizado
                        de páginas web autoadministrables. Esto permite que Ud. mismo
                        pueda actualizar la información de su sitio de forma muy sencilla
                        y absolutamente adaptada a las necesidades de su empresa
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography> Desarrollos con tecnología ampliable </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography> Última tecnología del mercado </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography> Facilidad de uso y navegación </Typography>
                </Grid>
            </Grid>

        </Layout>
    )
}

export default ServicesPage;