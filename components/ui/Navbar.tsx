import { AppBar, Container, Grid, Slide, Toolbar, useScrollTrigger } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


interface Props {
    window?: () => Window;
}

const navLinks = [
    { id: 1, text: "Inicio", path: "/" },
    { id: 2, text: "Trabajos", path: "/works" },
    { id: 3, text: "Servicios", path: "/services" },
    { id: 4, text: "Nosotros", path: "/about" },
    { id: 5, text: "Contacto", path: "/contact" },
];

export const Navbar = (props: Props) => {

    const { window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    const { pathname } = useRouter();

    const [activeTab, setActiveTab] = useState<string>("");

    useEffect(() => {
        if (pathname === "/") return setActiveTab("start-home");
        if (pathname.includes("designs")) return setActiveTab("start-designs");
        setActiveTab(`start-${pathname.substring(1)}`)
    }, [pathname])

    return (
        <>
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar>
                    <Toolbar disableGutters>
                        <Container maxWidth="lg">
                            <Grid container alignItems="center" justifyContent="start" gap={2}>
                                <Image src={`/images/logodmg.png`} alt='Damage devs' width={100} height={33} />
                                <nav>
                                    {navLinks.map(({ id, path, text }) => (
                                        <Link
                                            href={path}
                                            key={id}
                                            className={pathname === path ? "active nav-link" : "nav-link"}
                                        >
                                            {text}
                                        </Link>
                                    ))}
                                    <div className={`${activeTab} animation`}></div>
                                </nav>
                            </Grid>
                        </Container >
                    </Toolbar>
                </AppBar>
            </Slide >
            <Toolbar />
        </>
    )
}