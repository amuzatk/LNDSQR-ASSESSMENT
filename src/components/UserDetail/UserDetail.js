import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserDetail = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const getUser = () => {
    axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((res) => {
        setUsers(res.data);
      });
  };

  // const viewUser = (id) => {
  //   localStorage.setItem("userId", id);
  //   navigate("/dashboard");
  // };

  useEffect(() => {
    getUser();
  }, []);

  const [select, setSelect] = useState({
    value: "",
  });

  const filterData = (data) => {
    const { value } = select;
    const { userName, email, phoneNo } = input;

    if (
      (userName && data.userName !== userName) ||
      (email && data.email !== email) ||
      (phoneNo && data.phoneNumber !== phoneNo) ||
      (value && data.orgName !== value)
    )
      return false;

    return true;
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const filtered = users.filter(filterData);
    setSelect({ value: "" });
    setInput({ userName: "", email: "", phoneNo: "" });
    setUsers(filtered);
  };

  // const [select, setSelect] = useState({
  //   value: "select",
  // });

  const [input, setInput] = useState({
    userName: "",
    email: "",
    phoneNo: "",
  });

  const handleSelect = (e) => {
    setSelect({ value: e.target.value });
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // const filterData = (data) => {
  //   const { value } = select;
  //   const { userName, email, phoneNo } = input;

  //   if (value && data.orgName !== value) return false;
  //   if (userName && data.userName !== userName) return false;
  //   if (email && data.email !== email) return false;
  //   if (phoneNo && data.phoneNumber !== phoneNo) return false;

  //   return true;
  // };

  // const handleFilter = (e) => {
  //   e.preventDefault();
  //   const filtered = users.filter(filterData);
  //   console.log(filtered);
  //   setSelect({ value: "select" });
  //   setInput({ userName: "", email: "", phoneNo: "" });
  //   setUsers(filtered);
  // };

  return (
    <div className="project2">
      <form onSubmit={handleFilter}>
        <select value={select.value} onChange={handleSelect}>
          <option value="">Select Organization</option>
          {users.map((user) => {
            return (
              <option key={user.id} value={user.orgName}>
                {user.orgName}
              </option>
            );
          })}
        </select>
        <label htmlFor="userName">User Name</label>
        <input
          id="userName"
          type="text"
          name="userName"
          value={input.userName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />

        <button>Filters</button>
      </form>

      <table>
        <thead>
          <tr>Organization</tr>
          <tr>Username</tr>
          <tr>Email</tr>
          <tr>Phone No.</tr>
          <tr>Date Joined</tr>
          <tr>Status</tr>
        </thead>
        <tbody>
          {users
            // .filter(filterData)
            // labore-dolor-et
            .map((user) => {
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
              const daUserDetailring = `${month} ${day}, ${year} ${time}`;

              return (
                <tr key={id}>
                  {/* <tr key={id} onClick={() => viewUser(id)}> */}
                  <td>{orgName}</td>
                  <td>{userName}</td>
                  <td>{email}</td>
                  <td>{phoneNumber}</td>
                  <td>{daUserDetailring}</td>
                  <td>Status</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetail;

/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const User = () => {
//   const id = localStorage.getItem("userId");
//   const [users, setUsers] = useState({});
//   const { accountBalance, accountNumber, email, orgName, phoneNumber } = users;

//   useEffect(() => {
//     getUser();
//   }, []);

//   const getUser = () => {
//     axios
//       .get(
//         `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
//       )
//       .then((res) => {
//         setUsers(res.data);
//       });
//   };
//   return (
//     <div>
//       <h1>{accountNumber}</h1>
//       <h1>{accountBalance}</h1>
//       <h1>{email}</h1>
//       <h1>{orgName}</h1>
//       <h1>{phoneNumber}</h1>
//     </div>
//   );
// };

// export default User;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import { ReactComponent as Back } from "../../asset/back-btn.svg";
// import "./UserDetail.scss";

// const UserDetail = () => {
//   const id = localStorage.getItem("userId");
//   const [users, setUsers] = useState({});
//   const { accountBalance, accountNumber, email, orgName, phoneNumber } = users;

//   useEffect(() => {
//     getUser();
//   }, []);

//   const getUser = () => {
//     axios
//       .get(
//         `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
//       )
//       .then((res) => {
//         setUsers(res.data);
//       });
//   };
//   return (
//     <main>
//       <section>
//         <div>
//           <Back />{" "}
//         </div>
//         <div className="detail-header">
//           <h1>User Detail </h1>
//           {/* <input input="submit" value={BLACKLIST USER} className="blacklist" /> */}

//           <span className="activate">
//             ACTIVATE USER
//             <Back />
//           </span>
//         </div>
//       </section>
//       <section>
//         <h1>{accountNumber}</h1>
//         <h1>{accountBalance}</h1>
//         <h1>{email}</h1>
//         <h1>{orgName}</h1>
//         <h1>{phoneNumber}</h1>
//       </section>
//     </main>
//   );
// };

// export default UserDetail;
