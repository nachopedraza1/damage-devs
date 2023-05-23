import { FC, ReactNode, useReducer } from "react"
import { UiContext } from "./UiContext"
import { UiReducer } from "./UiReducer";

interface Props {
    children: ReactNode;
}

export interface UiState {
    openModal: boolean;
}

const UI_INITIAL_STATE: UiState = {
    openModal: false
}

export const UiProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(UiReducer, UI_INITIAL_STATE);

    const handleOpenModal = () => {
        dispatch({ type: 'UI - Open Modal' })
    }

    const handleCloseModal = () => {
        dispatch({ type: 'UI - Close Modal' })
    }

    return (
        <UiContext.Provider value={{
            ...state,
            handleCloseModal,
            handleOpenModal,
        }}>
            {children}
        </UiContext.Provider>
    )
}