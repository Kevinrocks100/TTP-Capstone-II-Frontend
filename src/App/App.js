import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn, setLoggedOut } from '../redux/auth/auth.actions';
import Home from "../pages";
import RepoListPage from "../pages/repo/list/RepoListPage";
import RepoMetricPage from "../pages/repo/metrics/RepoMetricPage";
import Error404 from "../pages/Error404";

function App() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(setLoggedIn());
    };

    const handleLogout = () => {
        dispatch(setLoggedOut());
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home handleLogin = {handleLogin}/>}/>
                {/*PROTECTED USER ROUTES */}
                <Route path="/repos" element={<RepoListPage/>}/>
                <Route path={"/repos/:repoId"} element={<RepoMetricPage handleLogout = {handleLogout}/>} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
        
    );
}

export default App;
