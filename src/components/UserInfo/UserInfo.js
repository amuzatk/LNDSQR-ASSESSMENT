import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

import User1 from "../../asset/user1.svg";
import User2 from "../../asset/user2.svg";
import User3 from "../../asset/user3.svg";
import User4 from "../../asset/user4.svg";

import Card from "./UserInfoCard";
import "./UserInfo.scss";

const UserInfo = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const baseUrl = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/`;

  const url = `${baseUrl}users`;

  const getUser = () => {
    axios.get(url).then((res) => {
      setUsers(res.data);
      console.log(res.data);
    });
  };

  const per_page = 10;
  const pageCount = Math.ceil(users.length / per_page);

  const offset = currentPage * per_page;
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const viewUser = (id) => {
    localStorage.setItem("userId", id);
    navigate("/child");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <main className="user-section">
      <section className="card-section">
        <h1>Users</h1>
        <Card imgsrc={User1} title="USERS" text="2,453" />
        <Card imgsrc={User2} title="ACTIVE USERS" text="2,453" />
        <Card imgsrc={User3} title="USERS WITH LOANS" text="12,453" />
        <Card imgsrc={User4} title="USERS WITH SAVINGS" text="102,453" />
      </section>

      <section>
        <table>
          <thead>
            <tr>{/* <i class="ri-filter-3-line"></i> */}</tr>
            {/* <tr>
            <GrpBars />
          </tr>
          <tr>
            <GrpBars />
          </tr> */}
            {/* <tr>Organization</tr>
          <GrpBars />
          <tr>Username</tr>
          <tr>Email</tr>
          <tr>Phone No.</tr>
          <tr>Date Joined</tr>
          <tr>Status</tr> */}
          </thead>
          <tbody>
            {users.slice(offset, offset + per_page).map((user) => {
              const { orgName, phoneNumber, email, userName, createdAt, id } =
                user;

              const date = new Date(createdAt);
              const day = date.getDate();
              const month = date.toLocaleString("default", { month: "long" });
              const year = date.getFullYear();
              const hours = date.getHours();
              const minutes = date.getMinutes();
              const ampm = hours >= 12 ? "pm" : "am";
              const time = (hours % 12) + ":" + minutes + " " + ampm;
              const dateString = `${month} ${day}, ${year} ${time}`;

              return (
                <tr key={id} onClick={() => viewUser(id)}>
                  <td>{orgName}</td>
                  <td>{phoneNumber}</td>
                  <td>{email}</td>
                  <td>{userName}</td>
                  <td>{dateString}</td>
                  <td>Status</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <ReactPaginate
          className="footer"
          previousLabel="<"
          nextLabel=">"
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          pageRangeDisplayed={5}
          breakLabel="..."
          onPageChange={handlePageClick}
        />
      </section>
    </main>
  );
};

export default UserInfo;
