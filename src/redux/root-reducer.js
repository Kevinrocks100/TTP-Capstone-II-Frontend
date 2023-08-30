import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import authReducer from "./auth/auth.reducer";
import reposReducer from "./repos/repos.reducer"

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer, 
    repos: reposReducer
});

export default rootReducer;