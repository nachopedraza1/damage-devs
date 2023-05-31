import { NextPage } from 'next';

import { Layout } from '@/components/layouts';
import { ServicesTabs } from '@/components';

import { Grid, Typography } from '@mui/material';
import { CloudDone, Code, DataObject, Settings } from '@mui/icons-material';

const ServicesPage: NextPage = () => {
    return (
        <Layout title="Damage Devs - Servicios">

            <Grid container justifyContent="center" alignItems="center" direction="column" mt={5} mb={5}>
                <Typography variant='h5' > Acá puede ver </Typography>
                <Typography variant="subtitle1"> Nuestros Servicios </Typography>
                <span className='mini-divider'></span>
            </Grid>

            <ServicesTabs />

            <Grid container justifyContent="center" alignItems="center" direction="column" mt={5} mb={5}>
                <Typography variant='h5' > Te brindamos un servicio destacado </Typography>
                <Typography variant="subtitle1"> Máxima atención al detalle </Typography>
                <span className='mini-divider'></span>
                <Typography textAlign="center">
                    Para lograr el famoso efecto «wow» de nuestros clientes en internet,
                    trabajamos el diseño web cuidando los detalles al máximo.  Seleccionamos cuidadosamente los elementos,
                    los colores, la distribución, la tipografía. Cada detalle cuenta.  La luz de las fotos, contrastes,
                    llamados a la acción… consideramos cada aspecto del diseño.
                </Typography>
            </Grid>

            <Grid container justifyContent="space-between" mb={4}>
                <Grid item xs={12} md={6} className='services-box-mini'>
                    <Settings />
                    <Typography variant="h5" fontWeight={600} mb={1}> Sitios web autoadministrables </Typography>
                    <Typography>
                        Somos especialistas en el desarrollo personalizado
                        de páginas web autoadministrables. Esto permite que Ud. mismo
                        pueda actualizar la información de su sitio de forma muy sencilla
                        y absolutamente adaptada a las necesidades de su empresa
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} className='services-box-mini'>
                    <DataObject />
                    <Typography variant="h5" fontWeight={600} mb={1}> Desarrollos con tecnología ampliable </Typography>
                    <Typography>
                        Nuestra estructura de programación de sitios web, está pensada para que sea posible
                        agregar nuevas funcionalidades en el futuro. De esta manera su página web podrá siempre
                        adaptarse a las necesidades y requerimientos de su empresa.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} className='services-box-mini'>
                    <Code />
                    <Typography variant="h5" fontWeight={600} mb={1}> Última tecnología del mercado </Typography>
                    <Typography>
                        Trabajamos con las herramientas más modernas disponibles. Un amplio conocimiento de los mercados
                        de desarrollo web en diversos países del mundo garantiza que su diseño posea funcionalidades
                        y tecnología de punta.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} className='services-box-mini'>
                    <CloudDone />
                    <Typography variant="h5" fontWeight={600} mb={1}> Facilidad de uso y navegación </Typography>
                    <Typography>
                        Dado que hacemos foco en la obtención de resultados, un aspecto fundamental es la experiencia del usuario.
                        Nuestros diseños están basados en la premisa de que deben ser fácilmente entendibles y fáciles de navegar
                        para sus visitantes.
                    </Typography>
                </Grid>
            </Grid>

        </Layout>
    )
}

export default ServicesPage;