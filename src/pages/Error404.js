import styles from './Error404.module.scss'
import Navbar from "../components/navbar/Navbar";

export default function Error404() {
    return (
            <div className={styles.container}>
                <Navbar />
                <h1 className={styles.container__header}>404</h1>
                <span className={styles.container__header__text}>The page you're looking for does not exist.</span>
            </div>
    )
}