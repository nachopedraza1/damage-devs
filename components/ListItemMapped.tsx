import { FC } from "react";
import Link from "next/link";

import { RadioButtonChecked } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText, Link as MuiLink } from "@mui/material"

interface Links {
    title?: string;
    icon?: JSX.Element;
    path?: string;
    target?: string
}

export const ListItemMapped: FC<{
    arrayLinks: Links[],
    fontSize?: string,
    disableLink?: boolean
}> = ({ arrayLinks, fontSize, disableLink }) => {

    const isLink = disableLink ? "none" : "inherit"

    return (
        <List disablePadding >
            {arrayLinks.map(({ icon, title, path = "", target = "" }) => (
                <MuiLink component={Link} href={path} target={target} key={title} style={{ pointerEvents: isLink }}>
                    <ListItem disablePadding key={title}>
                        <ListItemIcon sx={{ minWidth: "40px" }}>
                            {icon || <RadioButtonChecked />}
                        </ListItemIcon>
                        <ListItemText primary={title} primaryTypographyProps={{ fontSize: fontSize }} />
                    </ListItem>
                </MuiLink>
            ))}
        </List >
    )
}
