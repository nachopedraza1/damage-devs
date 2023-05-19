import { NextPage } from "next";

import { Layout } from "@/components/layouts"
import { Breadcrumb } from "@/components/ui";

import { Grid, Typography } from "@mui/material";


const EcommercePlanPage: NextPage = () => {
    return (
        <Layout title="Damage Devs - Tienda Online">

            <Grid container justifyContent="center" alignItems="center" direction="column" mt={5} mb={5}>
                <Breadcrumb backPathLink="/plans" backPathText="Planes" locationtitle="Tienda Online" />
                <Typography variant="subtitle1"> Tienda Online </Typography>
                <Typography variant='h6' textAlign="center"> El paquete es recomendable para comercios y emprendedores que quieran tener mayores ventas online, autogestionando sus productos. </Typography>
                <span className='mini-divider'></span>
            </Grid>

        </Layout>
    )
}

export default EcommercePlanPage;
