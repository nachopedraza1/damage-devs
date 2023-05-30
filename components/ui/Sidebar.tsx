import { FC, useContext } from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Category, Home, Lan, People, SupportAgent } from "@mui/icons-material";
import { UiContext } from "@/context/UiContext";

export const Sidebar: FC = () => {

    const { openSideBar, handleCloseSideBar } = useContext(UiContext);

    return (
        <Drawer
            open={openSideBar}
            onClose={handleCloseSideBar}
            PaperProps={{
                sx: {
                    backgroundColor: "black",
                }
            }}
        >
            <List>
                {['Inicio', 'Planes', 'Servicios', 'Nosotros', 'Contacto'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton sx={{ padding: "10px 50px 10px 30px" }}>
                            <ListItemIcon sx={{ minWidth: "40px" }}>
                                {index === 0 && <Home />}
                                {index === 1 && <Lan />}
                                {index === 2 && <Category />}
                                {index === 3 && <People />}
                                {index === 4 && <SupportAgent />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}
