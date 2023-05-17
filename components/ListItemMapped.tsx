import Link from "next/link"
import { List, ListItem, ListItemIcon, ListItemText, Link as MuiLink } from "@mui/material"
import { FC } from "react";

interface Links {
    title: string;
    icon: JSX.Element;
    path: string;
}

export const ListItemMapped: FC<{ arrayLinks: Links[] }> = ({ arrayLinks }) => {
    return (
        <List disablePadding >
            {arrayLinks.map(({ icon, title, path }) => (
                <MuiLink component={Link} href={path} key={title}>
                    <ListItem disablePadding key={title}>
                        <ListItemIcon sx={{ minWidth: "40px" }}>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={title} />
                    </ListItem>
                </MuiLink>
            ))}
        </List >
    )
}
