import React from "react";

import "./FilterPage.scss";
import UserDetail from "../UserDetail/UserDetail";
import Sidebar from "../SideBar/SideBar";

export default function FilterPage() {
  return (
    <main>
      <section>
        <Sidebar />
        <UserDetail />
      </section>
    </main>
  );
}
