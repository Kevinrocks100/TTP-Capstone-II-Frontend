import styles from './Navbar.module.scss'
import githubLogo from '../../assets/github-alt-logo.png'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <img className={styles.navbar__logo} src={githubLogo} alt="Github Logo" />
            <div>
                {/*insert github username here*/}
            </div>
        </div>
    )
}