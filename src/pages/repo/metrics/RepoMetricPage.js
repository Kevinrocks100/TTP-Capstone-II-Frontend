import styles from './RepoMetricPage.module.scss'
import Navbar from "../../../components/navbar/Navbar";
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from "chart.js";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
)

export default function RepoMetricPage() {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']; // Manually create labels

    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    const config = {
        type: 'line',
        data: data,
    };

    return (
        <div className={styles.main}>
            <Navbar/>
            <div className={styles.container}>
                <div style={{paddingTop: '2rem'}}>
                    <h1 className={styles.container__header}>Repo Name</h1>
                    <div className={styles.container__grid}>
                        <div className={styles.container__grid__cell}>
                            <h2>Responsiveness</h2>
                            <Line id="2" data={data}/>
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