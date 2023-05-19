import { NextPage } from 'next';

import { Layout } from '@/components/layouts';
import { FaqAnswers, ServicesTabs } from '@/components';

import { Grid, Typography } from '@mui/material';

const ServicesPage: NextPage = () => {
    return (
        <Layout title="Damage Devs - Servicios">

            <Grid container justifyContent="center" alignItems="center" direction="column" mt={5} mb={5}>
                <Typography variant='h6' > Acá puede ver </Typography>
                <Typography variant="subtitle1"> Nuestros Servicios </Typography>
                <span className='mini-divider'></span>
            </Grid>

            <ServicesTabs />

            <FaqAnswers />
        </Layout>
    )
}

export default ServicesPage;