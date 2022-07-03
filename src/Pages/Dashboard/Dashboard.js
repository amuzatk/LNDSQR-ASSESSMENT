import React from "react";
import UserDetail from "../../components/UserDetail/UserDetail";
import Sidebar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";

import "./Dashboard.scss";

export default function Users() {
  return (
    <div>
      <NavBar />
      <Sidebar className="sidebar-dash" />
    </div>
  );
}
