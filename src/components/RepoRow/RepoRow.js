import styles from './RepoRow.module.scss'
import arrow from '../../assets/arrow.jpg'

export default function RepoRow() {
    return (
        <div className={styles.repoRow}>
            <div className={styles.repoRow__name}>
                <span>Insert Repo Name</span>
            </div>
            <button>
                <img className={styles.repoRow__arrow} src={arrow} alt="Arrow"/>
            </button>
        </div>
    )
}