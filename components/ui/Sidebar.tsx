import { FC, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { SocialButtons } from "./SocialButtons";
import { Divider, Drawer, Grid, Typography, Link as MuiLink, IconButton } from "@mui/material";
import { Category, Home, Lan, MenuOpen, People, SupportAgent } from "@mui/icons-material";

import { UiContext } from "@/context/UiContext";

const navLinks = [
    { id: 1, text: "Inicio", path: "/", icon: <Home /> },
    { id: 2, text: "Planes", path: "/plans", icon: <Lan /> },
    { id: 3, text: "Servicios", path: "/services", icon: <Category /> },
    { id: 4, text: "Nosotros", path: "/about", icon: <People /> },
    { id: 5, text: "Contacto", path: "/contact", icon: <SupportAgent /> },
];

export const Sidebar: FC = () => {

    const { openSideBar, handleCloseSideBar } = useContext(UiContext);

    return (
        <Drawer
            anchor="top"
            open={openSideBar}
            onClose={handleCloseSideBar}
            PaperProps={{
                sx: {
                    backgroundColor: "black",
                }
            }}
        >
            <Grid container justifyContent="center" padding={2} position="relative">
                <IconButton sx={{ position: "absolute", top: 8, left: 15, transform: "rotate(90deg)" }} onClick={handleCloseSideBar}>
                    <MenuOpen fontSize="large" />
                </IconButton>
                <Image src={`/images/logodmg1.png`} alt='Damage devs' width={100} height={33} />
            </Grid>

            <Divider />

            <Grid container alignItems="center" direction="column" padding={2}>
                {navLinks.map(({ id, path, icon, text }) => (
                    <MuiLink component={Link} href={path} onClick={handleCloseSideBar} key={id}>
                        <Grid item display="flex" alignItems="center" padding={1} gap={1} width="130px">
                            {icon}
                            <Typography fontWeight={600} > {text} </Typography>
                        </Grid>
                    </MuiLink>
                ))}
            </Grid>

            <Divider />

            <SocialButtons justifyContent="center" />

        </Drawer>
    )
}
