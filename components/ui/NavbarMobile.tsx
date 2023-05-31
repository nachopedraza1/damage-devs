import { FC, useContext } from "react"
import Image from "next/image";

import { useNavbar } from "@/hooks";

import { AppBar, Container, Grid, IconButton, Slide, Toolbar } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { Sidebar } from "./Sidebar";
import { UiContext } from "@/context/UiContext";


interface Props {
    window?: () => Window;
}

export const NavbarMobile: FC = (props: Props) => {

    const { navbarStyle, trigger } = useNavbar(props);

    const { handleOpenSideBar } = useContext(UiContext)

    return (
        <>
            <Grid display={{ xs: "flex", md: "none" }}>
                <Slide appear={false} direction="down" in={!trigger}>
                    <AppBar>
                        <Toolbar disableGutters className={`navbar-blur ${navbarStyle}`}>
                            <Container maxWidth="lg">
                                <Grid container alignItems="center" justifyContent="space-between" gap={2}>
                                    <IconButton onClick={handleOpenSideBar}>
                                        <MenuOutlined fontSize="large" />
                                    </IconButton>
                                    <Image src={`/images/logodmg1.png`} alt='Damage devs' width={100} height={33} />
                                </Grid>
                            </Container >
                        </Toolbar>
                    </AppBar>
                </Slide >
            </Grid>
            <Sidebar />
        </>
    )
}
