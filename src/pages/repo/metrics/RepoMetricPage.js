import styles from './RepoMetricPage.module.scss'
import Navbar from "../../../components/navbar/Navbar";
import {Nav} from "react-bootstrap";

export default function RepoMetricPage() {
    return (
        <div className={styles.main}>
            <Navbar/>
            <div className={styles.container}>
                <div style={{ paddingTop: '2rem' }}>
                    <h1 className={styles.container__header}>Repo Name</h1>
                    <div className={styles.container__grid}>
                        <div className={styles.container__grid__cell}>
                            <h2>Responsiveness</h2>
                        </div>
                        <div className={styles.container__grid__cell}>
                            <h2>PR Iteration Time</h2>
                        </div>
                        <div className={styles.container__grid__cell}>
                            <h2>Unreviewed Files</h2>
                        </div>
                        <div className={styles.container__grid__cell}>
                            <h2>Time to Merge</h2>
                        </div>
                        <div className={styles.container__grid__cell}>
                            <h2>Time to First Commit</h2>
                        </div>
                        <div className={styles.container__grid__cell}>
                            <h2>Follow-on Commits</h2>
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