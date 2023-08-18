import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages";
import RepoListPage from "../pages/repo/list/RepoListPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />\
          {/*PROTECTED USER ROUTES */}
          <Route path="/repos" element={<RepoListPage />} />
        </Routes>
      </Router>
  );
}

export default App;
