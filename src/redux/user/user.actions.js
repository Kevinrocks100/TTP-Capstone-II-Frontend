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

