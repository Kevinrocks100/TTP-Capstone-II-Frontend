import styles from './RepoMetricPage.module.scss'
import Navbar from "../../../components/navbar/Navbar";
import TimeToMerge from "../../../components/Metrics/timeToMerge"
import Responsiveness from "../../../components/Metrics/responsiveness"
import PRIterationTime from "../../../components/Metrics/prIterationTime"
import TimeToFirstCommit from "../../../components/Metrics/timeToFirstCommit"
import FollowOnCommits from "../../../components/Metrics/followOnCommits"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchSelectedRepoThunk } from "../../../redux/repos/repos.actions";

export default function RepoMetricPage() {
    const dispatch = useDispatch();
    const location = useLocation(); 
    const navigate = useNavigate();
    const repo = useSelector((state) => state.repos.selectedRepo);
    const owner = useSelector((state) => state.user.user.gitHubUserName);
    const name = repo.name;

    useEffect(() => {
        const username = location.state.username; 
        const name = location.state.name
        dispatch(fetchSelectedRepoThunk(username, name));
    }, []);

    return (
        repo && owner && name && <div className={styles.main}>
            <Navbar />
            <div className={styles.container}>
                <div style={{ paddingTop: '2rem' }}>
                    <h1 className={styles.container__header}>{name}</h1>
                    <div className={styles.container__grid}>
                        <div className={styles.container__grid__cell}>
                            <h2>Responsiveness</h2>
                            {/* <Responsiveness repo={repo} owner={owner} name={name}></Responsiveness> */}
                        </div>
                        <div className={styles.container__grid__cell}>
                            <h2>PR Iteration Time</h2>
                            {/* <PRIterationTime repo={repo} owner={owner} name={name}></PRIterationTime> */}
                        </div>
                        <div className={styles.container__grid__cell}>
                            <h2>Unreviewed Files</h2>
                        </div>
                        <div className={styles.container__grid__cell}>
                            <h2>Time to Merge</h2>
                            <TimeToMerge repo={repo} owner={owner} name={name}></TimeToMerge>
                        </div>
                        <div className={styles.container__grid__cell}>
                            <h2>Time to First Commit</h2>
                            <TimeToFirstCommit repo={repo} owner={owner} name={name}></TimeToFirstCommit>
                        </div>
                        <div className={styles.container__grid__cell}>
                            <h2>Follow-on Commits</h2>
                            <FollowOnCommits repo={repo} owner={owner} name={name}></FollowOnCommits>
                        </div>
                    </div>
                </div>
                <div className={styles.container__sidebar}>
                    <span className={styles.container__sidebar__header}>Metrics</span>
                </div>
            </div>
        </div>
    )
}