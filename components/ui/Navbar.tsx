import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useNavbar } from '@/hooks/useNavbar';

import { AppBar, Container, Grid, Slide, Toolbar } from '@mui/material';

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

export const Navbar = (props: Props) => {

    const { pathname } = useRouter();

    const { activeTab, navbarStyle, trigger } = useNavbar(props);

    const isActiveClass = (path: string) => {
        if (pathname === path) {
            return "active nav-link";
        } else if (pathname.includes(`${path}/`)) {
            return "active nav-link";
        } else {
            return "nav-link";
        }
    }

    return (
        <div>
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar>
                    <Toolbar disableGutters className={`navbar-blur ${navbarStyle}`}>
                        <Container maxWidth="lg">
                            <Grid container alignItems="center" justifyContent="space-between" gap={2}>
                                <Image src={`/images/logodmg1.png`} alt='Damage devs' width={100} height={33} />
                                <nav>
                                    {navLinks.map(({ id, path, text }) => (
                                        <Link
                                            href={path}
                                            key={id}
                                            className={isActiveClass(path)}
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
        </div>
    )
}