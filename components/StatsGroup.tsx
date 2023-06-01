import { CountUp } from "use-count-up"
import { useInView } from "react-intersection-observer"

import { Grid, Typography } from "@mui/material"
import { EmojiEvents, HeadsetMic, Person, PersonalVideo } from "@mui/icons-material";


const stats = [
    { title: "Clientes satisfechos", value: 80, icon: <Person /> },
    { title: "Páginas web realizadas", value: 100, icon: <PersonalVideo /> },
    { title: "Consultas de soporte", value: 250, icon: <HeadsetMic /> },
    { title: "Casos de éxito", value: 70, icon: <EmojiEvents /> }
]

export const StatsGroup = () => {

    const { ref, inView } = useInView();

    return (
        <Grid
            container
            ref={ref}
            className="stats-box"
            gap={{ xs: 4, sm: 0 }}
            direction={{ xs: "column", sm: "row" }}
        >
            {stats.map(({ title, value, icon }) => (
                <Grid item xs={3} textAlign="center" key={title}>
                    {icon}
                    <Typography className="count">+<CountUp isCounting={inView} end={value} duration={3.2} /> </Typography>
                    <span className="divider"></span>
                    <Typography variant="h6"> {title} </Typography>
                </Grid>
            ))}
        </Grid>
    )
}
