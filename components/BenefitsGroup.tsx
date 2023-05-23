import { FC } from "react"
import { Grid, Typography } from "@mui/material"
import { TrendingUp, Category, WhatsApp } from "@mui/icons-material"

export const BenefitsGroup: FC = () => {
    return (
        <>
            <Grid container justifyContent="center" alignItems="center" direction="column" mt={7} mb={2}>
                <Typography variant='h6'> Beneficios. </Typography>
                <Typography variant="subtitle1"> Servicios Adicionales GRATIS</Typography>
                <span className='mini-divider'></span>
            </Grid>

            <Grid container justifyContent="space-between">
                <Grid item xs={3.9} className="benefit-box">
                    <TrendingUp />
                    <Typography variant="h5" mb={1}> Posicionamiento WEB </Typography>
                    <Typography> Optimizamos el sitio para tener mayor visibilidad en Google. </Typography>
                </Grid>
                <Grid item xs={3.9} className="benefit-box">
                    <Category />
                    <Typography variant="h5" mb={1}> Google Mi Negocio </Typography>
                    <Typography> Tu empresa estará en Google Maps, para que tus clientes te encuentren fácilmente. </Typography>
                </Grid>
                <Grid item xs={3.9} className="benefit-box">
                    <WhatsApp />
                    <Typography variant="h5" mb={1}> WhatsApp </Typography>
                    <Typography> Tu página web contará con un botón de chat para fomentar las consultas. </Typography>
                </Grid>
            </Grid>
        </>
    )
}
