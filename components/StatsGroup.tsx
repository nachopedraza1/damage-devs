import { Grid, Typography } from "@mui/material"
import { FC, useEffect } from "react"

export const StatsGroup: FC = () => {

    const onCount = () => {
   
    }
    useEffect(() => {
        onCount()
    }, [])

    return (
        <Grid container>
            <Grid item xs={3}>
                <Typography> Clietes satisfechos </Typography>
                <span id="counter">  </span>
            </Grid>
            <Grid item xs={3}>
                <Typography> Páginas web realizadas </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography> Consultas de soporte </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography> Casos de éxito </Typography>
            </Grid>
        </Grid>
    )
}
