import styles from './index.module.scss'
import githubLogo from '../assets/github-logo.png'
import GithubOAuthButton from '../components/githubOAuthButton';
import useDocumentTitle from "../components/useDocumentTitle";
import { initializeApp } from "firebase/app";

function Home({handleLogin}) {
    useDocumentTitle("GitMe");
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.container__header}>GitMe</h1>
                <span className={styles.container__header__text}>Every metric you need for your repository</span>
                <GithubOAuthButton handleLogin = {handleLogin}/>
            </div>
        </div>
    )
}

export default Home;