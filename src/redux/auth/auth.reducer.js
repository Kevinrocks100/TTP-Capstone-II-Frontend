import AuthActionTypes from "./auth.types";

export const INITIAL_AUTH_STATE = {
    isLoggedIn : false, 
};

const authReducer = (state = INITIAL_AUTH_STATE, { type }) => {
    switch (type) {
        case AuthActionTypes.SET_LOGGED_IN:
            return { ...state, isLoggedIn: true };
        case AuthActionTypes.SET_LOGGED_OUT:
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
};

export default authReducer;