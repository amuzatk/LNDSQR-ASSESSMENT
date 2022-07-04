import React, { useState, useEffect } from "react";
import axios from "axios";

import { ReactComponent as Back } from "../../asset/back-btn.svg";
import "./UserDetail.scss";

const UserDetail = () => {
  const id = localStorage.getItem("userId");
  const [users, setUsers] = useState({});
  const { accountBalance, accountNumber, email, orgName, phoneNumber } = users;

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      )
      .then((res) => {
        setUsers(res.data);
      });
  };
  return (
    <main>
      <section>
        <div>
          <Back />{" "}
        </div>
        <div className="detail-header">
          <h1>User Detail </h1>
          {/* <input input="submit" value={BLACKLIST USER} className="blacklist" /> */}

          <span className="activate">
            ACTIVATE USER
            <Back />
          </span>
        </div>
      </section>
      <section>
        <h1>{accountNumber}</h1>
        <h1>{accountBalance}</h1>
        <h1>{email}</h1>
        <h1>{orgName}</h1>
        <h1>{phoneNumber}</h1>
      </section>
    </main>
  );
};

export default UserDetail;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import ReactPaginate from "react-paginate";

// import User1 from "../../asset/user1.svg";
// import User2 from "../../asset/user2.svg";
// import User3 from "../../asset/user3.svg";
// import User4 from "../../asset/user4.svg";

// import Card from "./UserInfoCard";
// import "./UserInfo.scss";

// const UserDetail = () => {
//   const navigate = useNavigate();
//   const [users, setUsers] = useState([]);
//   const [pageCount, setPageCount] = useState(0);

//   const limit = 10;
//   const totalCount = 100;

//   const baseUrl = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/`;

//   const url = `${baseUrl}users?page=1&limit=${limit}`;

//   const getUser = () => {
//     axios.get(url).then((res) => {
//       setUsers(res.data);
//       console.log(res.data);
//     });
//   };

//   const viewUser = (id) => {
//     localStorage.setItem("userId", id);
//     navigate("/child");
//   };

//   useEffect(() => {
//     getUser();
//     setPageCount(Math.ceil(totalCount / limit));
//   }, []);

//   return (
//     <main className="user-section">
//       <section className="card-section">
//         <h1>Users</h1>
//         <Card imgsrc={User1} title="USERS" text="2,453" />
//         <Card imgsrc={User2} title="ACTIVE USERS" text="2,453" />
//         <Card imgsrc={User3} title="USERS WITH LOANS" text="12,453" />
//         <Card imgsrc={User4} title="USERS WITH SAVINGS" text="102,453" />
//       </section>

//       <section>
//         <table>
//           <thead>
//             <tr>{/* <i class="ri-filter-3-line"></i> */}</tr>
//             {/* <tr>
//             <GrpBars />
//           </tr>
//           <tr>
//             <GrpBars />
//           </tr> */}
//             {/* <tr>Organization</tr>
//           <GrpBars />
//           <tr>Username</tr>
//           <tr>Email</tr>
//           <tr>Phone No.</tr>
//           <tr>Date Joined</tr>
//           <tr>Status</tr> */}
//           </thead>
//           <tbody>
//             {users.map((user) => {
//               const { orgName, phoneNumber, email, userName, createdAt, id } =
//                 user;

//               const date = new Date(createdAt);
//               const day = date.getDate();
//               const month = date.toLocaleString("default", { month: "long" });
//               const year = date.getFullYear();
//               const hours = date.getHours();
//               const minutes = date.getMinutes();
//               const ampm = hours >= 12 ? "pm" : "am";
//               const time = (hours % 12) + ":" + minutes + " " + ampm;
//               const dateString = `${month} ${day}, ${year} ${time}`;

//               return (
//                 <tr key={id} onClick={() => viewUser(id)}>
//                   <td>{orgName}</td>
//                   <td>{phoneNumber}</td>
//                   <td>{email}</td>
//                   <td>{userName}</td>
//                   <td>{dateString}</td>
//                   <td>Status</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </section>
//     </main>
//   );
// };

// export default UserDetail;
