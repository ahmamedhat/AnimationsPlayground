import { TOGGLE_THEME } from "../actionsConstants";

const toggleTheme = (mode: string) => {
    return {
        type: TOGGLE_THEME,
        payload: mode,
    };
};


export { toggleTheme };