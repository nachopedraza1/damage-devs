import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: "#121112"
        },
        primary: {
            main: "#08b8ef"
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: "transparent",
                    boxShadow: "none",
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                contained: {
                    borderRadius: 50,
                    fontWeight: 600,
                    fontFamily: "Poppins",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    background: "radial-gradient(107.5% 107.5% at 50% 215%, rgba(255, 255, 255, .24) 0%, rgba(255, 255, 255, 0) 100%), rgba(255, 255, 255, .04)",
                    color: "white"
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: "Poppins"
                }
            }
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: 10,
                    marginBottom: 10,
                    background: "#1d1b1b",
                    '&:before': {
                        display: "none"
                    }
                }
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    position: "relative"
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: "#08b8ef"
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: "none",
                    color: "inherit",
                    transition: "all 0.2s",
                    "&:hover": {
                        color: "#08b8ef"
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontFamily: "Poppins"
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    fontFamily: "Poppins",
                    fontSize: 16,
                }
            }
        },
    },
})