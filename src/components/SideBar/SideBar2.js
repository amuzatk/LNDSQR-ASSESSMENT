import styles from "./SideBar.scss";
import { useContext } from "react";
import NavContext from "../../Context/NavContext";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import {
  MdOutlineDashboard,
  MdOutlineAnalytics,
  MdOutlinedFlag,
  MdPeopleOutline,
  MdOutlineMessage,
  MdOutlineLogout,
} from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
// import { FaReact, FaTimes } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { VscDashboard } from "react-icons/vsc";

import { ReactComponent as Brief } from "../../asset/briefcase 1.svg";
import { ReactComponent as Vec } from "../../asset/Vector1.svg";
import { ReactComponent as Hom } from "../../asset/home 1.svg";
import { ReactComponent as Use } from "../../asset/user-friends 1.svg";
import { ReactComponent as Use2 } from "../../asset/sack 1.svg";
import { ReactComponent as Use1 } from "../../asset/users 1.svg";
import { ReactComponent as Use3 } from "../../asset/handshake-regular 1.svg";
import { ReactComponent as Use4 } from "../../asset/piggy-bank 1.svg";
import { ReactComponent as Use5 } from "../../asset/hand-holding 1.svg";
import { ReactComponent as Use6 } from "../../asset/user-check 1.svg";
import { ReactComponent as Use7 } from "../../asset/user-times 1.svg";
import { ReactComponent as Grp } from "../../asset/Group 104.svg";
import { ReactComponent as Grp1 } from "../../asset/np_bank.svg";
import { ReactComponent as Grp2 } from "../../asset/coins-1.svg";
import { ReactComponent as Grp3 } from "../../asset/icon.svg";
import { ReactComponent as Grp4 } from "../../asset/galaxy 1.svg";
import { ReactComponent as Grp5 } from "../../asset/user-cog 1.svg";
import { ReactComponent as Grp6 } from "../../asset/scroll 1.svg";
import { ReactComponent as Grp7 } from "../../asset/chart-bar 2.svg";
import { ReactComponent as Grp8 } from "../../asset/sliders-h 1.svg";
import { ReactComponent as Grp9 } from "../../asset/badge-1.svg";
import { ReactComponent as Grp10 } from "../../asset/clipboard-list 1.svg";
import { ReactComponent as Tire } from "../../asset/tire.svg";
import { ReactComponent as SignOut } from "../../asset/sign-out.svg";

import Logo from "../../asset/Group.svg";
import Drop from "../../asset/np_dropdown.svg";
import imag from "../../asset/image 4.svg";
import { ReactComponent as Ima } from "../../asset/np_notification_2425223_000000 1.svg";

import { ReactComponent as Icon } from "../../asset/np_notification_2425223_000000 1.svg";

const Sidebar2 = () => {
  const [input, setIput] = useState("");

  const onSubmit = () => {};

  const onChange = (e) => {
    setIput(e.target.value);
  };

  return (
    <div className="container">
      <nav className="nav-cont">
        <label>New Styling</label>

        <img src={Logo} width="150px" className="navb-log" />
        <div className="search-content">
          <form className="forms" onSubmit={onSubmit}>
            <input
              className="inputt"
              type="text"
              onChange={onChange}
              value={input}
              placeholder="search for anything"
            />
            <button type="submit" className="buttons">
              <i className="ri-search-line"></i>
            </button>
          </form>
        </div>

        <ul className="nav-ul">
          <a href="" className="nav-me-lin">
            Docs
          </a>
          <a href="/#">
            <Ima className="ref-icon" />
          </a>

          <img
            src={imag}
            alt="avatar"
            style={{ width: "300px", height: "60px" }}
            className="avat-logos"
          />
          <p>Kazeem</p>

          <img src={Drop} width="150px" className="drops" />

          <li nav-ul-li>
            {" "}
            <a href="/#"> Logout </a>{" "}
          </li>
        </ul>
        <label htmlFor="men" className="men-bar">
          <FaBars size={30} style={{ color: "red" }} />
        </label>
      </nav>

      <div className="side-men">
        <center>
          <Grp10 className="imga" />
          <br />

          <h2>Kazeem</h2>
        </center>

        <br />

        <div className="dashboard">
          <Hom /> Dashboard
        </div>

        <h6>CUSTOMER</h6>

        <div>
          <Link style={{ textDecoration: "none" }} to="/filter">
            <Use /> Users
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Use1 /> Guarrantors
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Use2 /> Loans
          </Link>
        </div>

        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Use3 /> Decision Models
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Use4 /> Savings
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Use5 /> Loan Request
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Use6 /> Whitelist
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Use7 /> Karma
          </Link>
        </div>

        <h6>BUSINESSES</h6>

        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Brief /> Organization
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Grp /> Loan Products
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Grp1 /> Savings Products
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Grp2 /> Fees and Charges
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Grp3 /> Transactions
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Grp4 /> Services
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Grp5 /> Service Account
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Grp6 /> Settlements
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Grp7 /> Reports
          </Link>
        </div>

        <h6>SETTINGS</h6>

        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Grp8 /> Preference
          </Link>
        </div>

        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Grp9 /> Fees and Pricing
          </Link>
        </div>

        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Grp10 /> Audit Logs
          </Link>
        </div>

        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <Tire /> Systems Messages
          </Link>
        </div>

        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            <SignOut />
            {/* signout */}
          </Link>
        </div>

        <div>
          <Link style={{ textDecoration: "none" }} to="/#">
            {/* <Grp10 />  */}
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
