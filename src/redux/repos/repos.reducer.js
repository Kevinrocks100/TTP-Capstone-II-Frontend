import ReposActionTypes from "./repos.types";

export const INITIAL_REPOS_STATE = {
    allRepos: [],
    selectedRepo: {}
};

const reposReducer = (state = INITIAL_REPOS_STATE, { type, payload }) => {
    switch (type) {
        case ReposActionTypes.FETCH_ALL_REPOS:
            return { ...state, allRepos: payload };
        case ReposActionTypes.FETCH_SELECTED_REPO:
            return { ...state, selectedRepo: payload };
        default:
            return state;
    }
};

export default reposReducer;