import { UiState } from "./UiProvider";

type actionTypes =
    | { type: 'UI - Open Modal' }
    | { type: 'UI - Close Modal' }
    | { type: 'UI - Sidebar open' }
    | { type: 'UI - Sidebar close' }

export const UiReducer = (state: UiState, action: actionTypes): UiState => {
    switch (action.type) {
        case 'UI - Open Modal':
            return {
                ...state,
                openModal: true
            }
        case 'UI - Close Modal':
            return {
                ...state,
                openModal: false
            }
        case 'UI - Sidebar open':
            return {
                ...state,
                openSideBar: true
            }
        case 'UI - Sidebar close':
            return {
                ...state,
                openSideBar: false
            }
        default:
            return state;
    }
}
