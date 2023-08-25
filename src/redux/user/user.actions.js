import axios from "axios";
import UserActionTypes from "./user.types";

export const fetchUser = (userData) => ({
    type: UserActionTypes.FETCH_USER,
    payload: userData,
});
  
export const fetchUserThunk = () => async dispatch => {
    try {
        const res = await axios.get();
        dispatch(fetchUser(res.data));
    } catch (err) {
        console.log(err);
    }
};

export const addUser = (payload) => {
    return {
        type: UserActionTypes.ADD_USER,
        payload,
    };
};

export const addUserThunk = (userData) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, userData);
            dispatch(addUser(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};