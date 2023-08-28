import axios from "axios";
import AuthActionTypes from "./auth.types";

export const setLoggedIn = () => ({
    type: AuthActionTypes.SET_LOGGED_IN
});

export const setLoggedOut = () => ({
    type: AuthActionTypes.SET_LOGGED_OUT
});