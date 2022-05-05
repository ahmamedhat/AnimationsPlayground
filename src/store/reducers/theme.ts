import { TOGGLE_THEME } from "../actionsConstants";


const initialState = {
    currentTheme: 'light'
}

const setCurrentTheme = (state: {currentTheme: string}, payload: string) => {
    return { ...state, currentTheme: payload };
};

export const theme = (state = initialState, action: { type: string;  payload: string}) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return setCurrentTheme(state, action.payload)
        default:
            return state
    }
}

export default theme