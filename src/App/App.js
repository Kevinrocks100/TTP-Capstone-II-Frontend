import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages";
import RepoListPage from "../pages/repo/list/RepoListPage";
import RepoMetricPage from "../pages/repo/metrics/RepoMetricPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>\
                {/*PROTECTED USER ROUTES */}
                <Route path="/repos" element={<RepoListPage/>}/>
                <Route path={"/repos/:repoId"} element={<RepoMetricPage />} />
            </Routes>
        </Router>
    );
}

export default App;
