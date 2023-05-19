import { NextPage } from 'next';

import { FaqAnswers, PlansSection, TableFunctions } from '@/components';
import { Layout } from '@/components/layouts';

import { Grid, Typography, Button, } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';


const PlansPage: NextPage = () => {

    return (
        <Layout title="Damage Devs - Planes">

            <PlansSection />

            <TableFunctions />

            <Grid container justifyContent="center" alignItems="center" direction="column" mt={7} mb={7}>
                <Typography variant="subtitle2"> ¿Estas buscando un sitio a medida?  </Typography>
                <Typography variant='h6' > Envíenos un mensaje y cuentenos sobre su proyecto! </Typography>
                <span className='mini-divider'></span>
                <Button variant='contained' endIcon={<WhatsApp />}> Contactar </Button>
            </Grid>

            <FaqAnswers />

        </Layout >
    )
}

export default PlansPage;