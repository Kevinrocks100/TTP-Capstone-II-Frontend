import styles from './Navbar.module.scss'
import githubLogo from '../../assets/github-alt-logo.png'
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <Link to="/repos" className={styles.navbar}>
            <img className={styles.navbar__logo} src={githubLogo} alt="Github Logo" />
            <div>
                {/*insert github username here*/}
            </div>
        </Link>
    )
}