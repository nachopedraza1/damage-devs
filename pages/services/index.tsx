import { ServicesTabs } from '@/components';
import { Layout } from '@/components/layouts';
import { Grid, Typography } from '@mui/material';
import { NextPage } from 'next';

const ServicesPage: NextPage = () => {
    return (
        <Layout title="DMGDEVS - Servicios">

            <Grid container justifyContent="center" alignItems="center" direction="column" mt={5} mb={5}>
                <Typography variant='h6' > Acá puede ver </Typography>
                <Typography variant='h4' fontWeight={600}> Nuestros Servicios </Typography>
                <span className='mini-divider'></span>

                <ServicesTabs />

            </Grid>
        </Layout>
    )
}

export default ServicesPage;