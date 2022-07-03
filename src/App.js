import "./App.css";
import Login from "./Pages/LoginPage/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        {/* <Route exact path="/users" element={<Users />} /> */}

        <Route exact path="/dashboard" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
