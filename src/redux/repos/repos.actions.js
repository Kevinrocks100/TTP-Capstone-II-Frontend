import axios from "axios";
import ReposActionTypes from "./repos.types";

export const fetchAllRepos = (payload) => {
    return {
        type: ReposActionTypes.FETCH_ALL_REPOS,
        payload,
    };
};

export const fetchAllReposThunk = (username) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/repo/${username}`);
            dispatch(fetchAllRepos(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};

export const fetchSelectedRepo = (payload) => {
    return {
        type: ReposActionTypes.FETCH_SELECTED_REPO,
        payload,
    };
};

export const fetchSelectedRepoThunk = (username, name) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/repo/${username}/${name}`);
            dispatch(fetchSelectedRepo(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};