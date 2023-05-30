import { createContext } from "react";

interface UiContext {
    openModal: boolean;
    openSideBar: boolean;

    //methods
    handleOpenModal: () => void;
    handleCloseModal: () => void;
    handleOpenSideBar: () => void;
    handleCloseSideBar: () => void;
}

export const UiContext = createContext({} as UiContext);