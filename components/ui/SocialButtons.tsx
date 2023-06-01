import { FC } from "react"
import Link from "next/link"

import { Grid, Tooltip } from "@mui/material"
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material"

export const SocialButtons: FC<{ justifyContent?: string }> = ({ justifyContent = "start" }) => {
    return (
        <Grid container justifyContent={justifyContent} margin="10px 0px" gap={2}>
            <Grid item>
                <Tooltip title="Facebook (no disponible)" arrow>
                    <Link href="/" target="_blank">
                        <Facebook sx={{ color: "#4267B2", fontSize: 35 }} />
                    </Link>
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title="Instagram" arrow>
                    <Link href="https://www.instagram.com/damagewebs/" target="_blank">
                        <Instagram sx={{ color: "#E1306C", fontSize: 35 }} />
                    </Link>
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title="WhatsApp" arrow>
                    <Link href="https://wa.me/3513295515" target="_blank">
                        <WhatsApp sx={{ color: "#25D366", fontSize: 35 }} />
                    </Link>
                </Tooltip>
            </Grid>
        </Grid>
    )
}
