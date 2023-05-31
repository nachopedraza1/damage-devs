import { FC } from "react"
import { Dns, QueryStats, SupportAgent, Handyman, Security, History } from "@mui/icons-material"
import { Grid, Typography, Box } from "@mui/material"

export const MonthlyPayment: FC = () => {
    return (
        <>
            <Grid container justifyContent="center" alignItems="center" direction="column" mt={7} mb={2}>
                <Typography variant='h6'> Abono mensual. </Typography>
                <Typography variant="subtitle1" textAlign="center"> ¿Qué incluye el abono mensual?</Typography>
                <span className='mini-divider'></span>
            </Grid>

            <Grid container justifyContent="space-between" gap={2} mb={5}>
                <Grid item xs={12} sm={5.8} md={5.9} className="month-box">
                    <Box display="flex" alignItems="center" mb={1}>
                        <Dns />
                        <Typography variant="h6"> Hosting </Typography>
                    </Box>
                    <Typography> Alojamos tu página web para que esté 24/7 activa. Servidores ubicados en EEUU. </Typography>
                </Grid>
                <Grid item xs={12} sm={5.8} md={5.9} className="month-box">
                    <Box display="flex" alignItems="center" mb={1}>
                        <QueryStats />
                        <Typography variant="h6">  Estadísticas de visitas </Typography>
                    </Box>
                    <Typography>Acceso a las métricas de tu página web a través de Google Analytics. </Typography>
                </Grid>
                <Grid item xs={12} sm={5.8} md={5.9} className="month-box">
                    <Box display="flex" alignItems="center" mb={1}>
                        <History />
                        <Typography variant="h6">  Monitoreo 24hs </Typography>
                    </Box>
                    <Typography> Monitoreamos la página web las 24 hs, para prevenir posibles caídas o hackeos. </Typography>
                </Grid>
                <Grid item xs={12} sm={5.8} md={5.9} className="month-box">
                    <Box display="flex" alignItems="center" mb={1}>
                        <SupportAgent />
                        <Typography variant="h6"> Soporte Técnico </Typography>
                    </Box>
                    <Typography> En caso que surja algún inconveniente técnico, Damage Devs lo resolverá. </Typography>
                </Grid>
                <Grid item xs={12} sm={5.8} md={5.9} className="month-box">
                    <Box display="flex" alignItems="center" mb={1}>
                        <Handyman />
                        <Typography variant="h6"> Mantenimiento </Typography>
                    </Box>
                    <Typography> Actualizamos la página para mantener un rendimiento óptimo. </Typography>
                </Grid>
                <Grid item xs={12} sm={5.8} md={5.9} className="month-box">
                    <Box display="flex" alignItems="center" mb={1}>
                        <Security />
                        <Typography variant="h6"> Seguridad </Typography>
                    </Box>
                    <Typography> Tu página web contará con certificación SSL y back-ups de respaldo. </Typography>
                </Grid>
            </Grid>
        </>
    )
}
