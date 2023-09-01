import styles from './Navbar.module.scss'
import githubLogo from '../../assets/github-alt-logo.png'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setLoggedOut} from "../../redux/auth/auth.actions";
import exitIcon from "../../assets/exit.png";

export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogoutHandler = () => {
        // Logout user and redirects to home page
        dispatch(setLoggedOut());
        navigate('/');
    }

    return (
        <div className={styles.navbar}>
            <Link className={styles.navbar__link} to="/repos">
                <img className={styles.navbar__link__logo} src={githubLogo} alt="Github Logo"/>
                <span className={styles.navbar__link__name}>GitMe</span>
            </Link>
            <div>
                <button onClick={handleLogoutHandler} className={styles.navbar__button}>
                    <img style={{marginRight: ".5rem"}} src={exitIcon} alt="logout icon"/>
                    <span>Logout</span>
                </button>
            </div>
        </div>
    )
}