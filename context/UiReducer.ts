import { UiState } from "./uiProvider";

type actionTypes =
    | { type: 'UI - Open Modal' }
    | { type: 'UI - Close Modal' }

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
        default:
            return state;
    }
}
