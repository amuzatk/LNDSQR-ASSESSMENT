import React from "react";
import UserDetail from "../../components/UserDetail/UserDetail";
import Sidebar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import UserInfo from "../../components/UserInfo/UserInfo";

import "./Dashboard.scss";

export default function Users() {
  return (
    <div>
      <header>
        {/* <header className="header"> */}
        {/* <NavBar /> */}
      </header>
      {/* <section> */}
      <section className="main">
        <Sidebar />
        <UserInfo />
        {/* <UserDetail /> */}
      </section>
    </div>
  );
}
