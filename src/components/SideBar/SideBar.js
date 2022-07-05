//STYLES
import styles from "./SideBar.scss";
import { useContext } from "react";
import NavContext from "../../Context/NavContext";
import { NavLink, Link } from "react-router-dom";
import {
  MdOutlineDashboard,
  MdOutlineAnalytics,
  MdOutlinedFlag,
  MdPeopleOutline,
  MdOutlineMessage,
  MdOutlineLogout,
} from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { FaReact, FaTimes } from "react-icons/fa";
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

// const NavUrl = ({ url, icon, description }) => {
//   const { nav, setNav } = useContext(NavContext);
//   const checkWindowSize = () => {
//     if (window.innerWidth < 1024) setNav(!nav);
//   };

//   return (
//     <li className={styles.li_navlink}>
//       <NavLink
//         to={`${url}`}
//         className={({ isActive }) => (isActive ? styles.active : undefined)}
//         onClick={() => checkWindowSize()}
//       >
//         {icon}
//         <span className={styles.description}>{description}</span>
//       </NavLink>
//     </li>
//   );
// };

// const Navbar = () => {
const Sidebar = () => {
  //   const { nav, setNav } = useContext(NavContext);

  return (
    <div
      className="contain"
      //   className={`${styles.navbar_container} ${
      //     nav ? styles.navbar_mobile_active : undefined
      //   }`}
    >
      <nav className="nav-contain">
        {/* <nav className={nav ? undefined : styles.nav_small}> */}
        {/* LOGO */}
        {/* <div className={styles.logo}>
          <VscDashboard className={styles.logo_icon} />
          <FaTimes
            className={styles.mobile_cancel_icon}
            onClick={() => {
              setNav(!nav);
            }}
          />
        </div> */}

        {/* MENU */}
        <ul className={styles.menu_container}>
          {/* FIRST CATEGORY */}
          {/* <span className={styles.categories}>
            {nav ? "Pages" : <BsThreeDots />}
          </span> */}

          <div className="switch">
            <Brief className="brief" /> Switch Organization
            <Vec />
          </div>

          <div className="dashboard">
            <Hom /> Dashboard
          </div>

          <h6>CUSTOMER</h6>

          <div>
            <Link style={{ textDecoration: "none" }} to="/user-detail">
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
        </ul>

        {/* LOGOUT BUTTON */}
        {/* <div
          className={`${styles.btn_logout}`}
          onClick={() => {
            setNav(!nav);
          }}
        >
          <MdOutlineLogout />
        </div> */}
      </nav>

      {/* <div
        className={nav ? styles.mobile_nav_background_active : undefined}
        onClick={() => {
          setNav(!nav);
        }}
      ></div> */}
    </div>
  );
};

export default Sidebar;
