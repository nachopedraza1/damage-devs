import { FC } from "react"
import Link from "next/link";

import { Breadcrumbs, Typography, Link as MuiLink } from "@mui/material"


interface Props {
    backPathLink: string;
    backPathText: string;
    locationtitle: string;
}

export const Breadcrumb: FC<Props> = ({ backPathLink, backPathText, locationtitle }) => {
    return (
        <Breadcrumbs>
            <MuiLink component={Link} underline="hover" color="inherit" href="/">
                Damage Devs
            </MuiLink>
            <MuiLink
                component={Link}
                underline="hover"
                color="inherit"
                href={backPathLink}
            >
                {backPathText}
            </MuiLink>
            <Typography color="text.primary"> {locationtitle} </Typography>
        </Breadcrumbs>
    )
}
