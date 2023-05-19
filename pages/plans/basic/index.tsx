import { NextPage } from "next";

import { Layout } from "@/components/layouts"
import { Breadcrumb } from "@/components/ui";

import { Grid, Typography } from "@mui/material";


const BasicPlanPage: NextPage = () => {
    return (
        <Layout title="Damage Devs - Basic web">

            <Grid container justifyContent="center" alignItems="center" direction="column" mt={5} mb={5}>
                <Breadcrumb backPathLink="/plans" backPathText="Planes" locationtitle="Básica" />
                <Typography variant="subtitle1"> Web Básica </Typography>
                <Typography variant='h6'> Ideal para que tu negocio o proyecto tenga presencia online. </Typography>
                <span className='mini-divider'></span>
            </Grid>

        </Layout>
    )
}

export default BasicPlanPage;
