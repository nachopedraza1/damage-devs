import { FC } from "react"
import Image from "next/image";

import { useNavbar } from "@/hooks";

import { AppBar, Container, Grid, Slide, Toolbar } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";


interface Props {
    window?: () => Window;
}

const navLinks = [
    { id: 1, text: "Inicio", path: "/" },
    { id: 2, text: "Planes", path: "/plans" },
    { id: 3, text: "Servicios", path: "/services" },
    { id: 4, text: "Nosotros", path: "/about" },
    { id: 5, text: "Contacto", path: "/contact" },
];

export const NavbarMobile: FC = (props: Props) => {

    const { navbarStyle, trigger } = useNavbar(props);

    return (
        <Grid display={{ xs: "flex", md: "none" }}>
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar>
                    <Toolbar disableGutters className={`navbar-blur ${navbarStyle}`}>
                        <Container maxWidth="lg">
                            <Grid container alignItems="center" justifyContent="space-between" gap={2}>
                                <MenuOutlined fontSize="large" />
                                <Image src={`/images/logodmg1.png`} alt='Damage devs' width={100} height={33} />
                            </Grid>
                        </Container >
                    </Toolbar>
                </AppBar>
            </Slide >
        </Grid>
    )
}
