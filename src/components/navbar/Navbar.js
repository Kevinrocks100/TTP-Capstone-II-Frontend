import styles from './Navbar.module.scss'
import githubLogo from '../../assets/github-alt-logo.png'
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link to="/repos">
                <img className={styles.navbar__logo} src={githubLogo} alt="Github Logo"/>
            </Link>
            <div>
                {/*insert github username here*/}
            </div>
        </div>
    )
}