import "./App.css";
import Login from "./Pages/LoginPage/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Pages/Dashboard/Dashboard";
import UserDetail from "./components/UserDetail/UserDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        {/* <Route exact path="/users" element={<Users />} /> */}

        <Route exact path="/dashboard" element={<Users />} />

        <Route exact path="/user-detail" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
