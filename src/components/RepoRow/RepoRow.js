import styles from './RepoRow.module.scss'
import arrow from '../../assets/arrow.jpg'

export default function RepoRow({fullName, id, handleRepoClick}) {
    return (
        <div id={id} className={styles.repoRow}>
            <div id = {id} className={styles.repoRow__name}>
                <span>{fullName}</span>
            </div>
            <button id = {id} onClick={handleRepoClick}>
                <img className={styles.repoRow__arrow} src={arrow} alt="Arrow"/>
            </button>
        </div>
    )
}