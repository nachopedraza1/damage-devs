import { NextPage } from "next";

import { Layout } from "@/components/layouts";
import { LoaderImage } from "@/components/ui";

import { Grid } from "@mui/material";

const Custom404: NextPage = () => {
    return (
        <Layout title="Damage Devs - 404">
            <Grid container justifyContent="center" alignItems="center" minHeight="100vh">
                <Grid item xs={6} position="relative" height={400}>
                    <LoaderImage url="/images/404page.png" />
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Custom404;
