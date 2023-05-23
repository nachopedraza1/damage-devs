import { createContext } from "react";

interface UiContext {
    openModal: boolean;

    //methods
    handleOpenModal: () => void;
    handleCloseModal: () => void;
}

export const UiContext = createContext({} as UiContext);