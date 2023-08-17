import styles from './index.module.scss'
import githubLogo from '../assets/github-logo.png'
import useDocumentTitle from "../components/useDocumentTitle";

function Home() {
    useDocumentTitle("GitMe");

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.container__header}>GitMe</h1>
                <span className={styles.container__header__text}>Every metric you need for your repository</span>
                <button type="button" className={styles.container__button}>
                    <img className={styles.container__button__logo} src={githubLogo} alt="Github Logo" />
                    <span className={styles.container__button__text}>Connect to GitHub</span>
                </button>
            </div>
        </div>
    )
}

export default Home;