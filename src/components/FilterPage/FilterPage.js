import React from "react";

import "./FilterPage.scss";
import UserFilter from "../UserFilter/UserFilter";
import Sidebar from "../SideBar/SideBar";

export default function FilterPage() {
  return (
    <main>
      <section>
        <Sidebar />
        <UserFilter />
      </section>
    </main>
  );
}
