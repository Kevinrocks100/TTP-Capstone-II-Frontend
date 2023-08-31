import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import { fetchAllReposThunk, fetchSelectedRepoThunk } from "../../../redux/repos/repos.actions";
import Navbar from "../../../components/navbar/Navbar";
import styles from './RepoListPage.module.scss'
import RepoRow from "../../../components/RepoRow/RepoRow";

function RepoListPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allRepos = useSelector((state) => state.repos.allRepos);
    const username = useSelector((state) => state.user.user.gitHubUserName);

    const fetchAllRepos = (username) => {
        return dispatch(fetchAllReposThunk(username));
    };

    useEffect(() => {
        // Fetch the repos when the component mounts
        fetchAllRepos(username);
    }, []);

    const fetchSelectedRepo = async (username, name) => {
        dispatch(fetchSelectedRepoThunk(username, name));
        setTimeout(() => {
            navigate(`/repos/${name}`);
        }, 500);  
    };

    const handleRepoClick = (username, name) => {
        fetchSelectedRepo(username, name)
    }

    return (
        <div className={styles.container}>
            <Navbar />
            <h1 className={styles.container__header}>Select A Repository</h1>
            {allRepos.map(repo => (
                <RepoRow
                    key={repo.id}
                    fullName={repo.full_name}
                    id={repo.name}
                    handleRepoClick = {() => handleRepoClick(username, repo.name)}
                />
            ))}
        </div>
    )
}

export default RepoListPage;