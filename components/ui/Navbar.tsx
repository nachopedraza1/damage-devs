import { AppBar, Container, Slide, Toolbar, useScrollTrigger } from '@mui/material';

interface Props {
    window?: () => Window;
}

export const Navbar = (props: Props) => {

    const { window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <>
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar>
                    <Toolbar>
                        <Container maxWidth="lg">
                            
                        </Container >
                    </Toolbar>
                </AppBar>
            </Slide>
            <Toolbar />
        </>
    )
}