import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages";
import RepoListPage from "../pages/repo/list/RepoListPage";
import RepoMetricPage from "../pages/repo/metrics/RepoMetricPage";
import Error404 from "../pages/Error404";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/*PROTECTED USER ROUTES */}
                <Route path="/repos" element={<RepoListPage/>}/>
                <Route path={"/repos/:repoId"} element={<RepoMetricPage />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
}

export default App;
