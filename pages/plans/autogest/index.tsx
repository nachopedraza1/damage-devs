import { NextPage } from "next";

import { Layout } from "@/components/layouts"
import { Breadcrumb } from "@/components/ui";

import { Grid, Typography } from "@mui/material";


const AutogestPlanPage: NextPage = () => {
    return (
        <Layout title="Damage Devs - Autogestionable">

            <Grid container justifyContent="center" alignItems="center" direction="column" mt={5} mb={5}>
                <Breadcrumb backPathLink="/plans" backPathText="Planes" locationtitle="Autogestionable" />
                <Typography variant="subtitle1"> Web Autogestionable </Typography>
                <Typography variant='h6'> Ten el control absoluto de tu sitio, Ideal para negocios en expansión. </Typography>
                <span className='mini-divider'></span>
            </Grid>

        </Layout>
    )
}

export default AutogestPlanPage;