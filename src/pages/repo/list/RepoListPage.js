import Navbar from "../../../components/navbar/Navbar";
import styles from './RepoListPage.module.scss'
import RepoRow from "../../../components/RepoRow/RepoRow";

function RepoListPage() {
    return (
        <div className={styles.container}>
            <Navbar />
            <h1 className={styles.container__header}>Select A Repository</h1>

            {/* Fix this part after Github implementation has been added. For each repo retrieved from the database, display a RepoRow component here*/}
            <RepoRow />
            <RepoRow />
            <RepoRow />
            <RepoRow />
            <RepoRow />

        </div>
    )
}

export default RepoListPage;