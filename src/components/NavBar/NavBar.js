import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./NavBar.css";
import Logo from "../asset/Group.svg";
import icon from "../asset/np_notification_2425223_000000 1.svg";
import imag from "../asset/image 4.svg";
import drop from "../asset/np_dropdown.svg";

export default function NavBar() {
  const [input, setIput] = useState("");
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const onSubmit = () => {};

  const onChange = (e) => {
    setIput(e.target.value);
  };

  return (
    <div>
      <nav className="navbar">
        <img src={Logo} className="navbar__logo" />
        <form onSubmit={onSubmit}>
          <input
            type="text"
            onChange={onChange}
            value={input}
            placeholder="search for anything"
          />
          <button>search</button>
        </form>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "red" }} />
          ) : (
            <FaBars size={30} style={{ color: "red" }} />
          )}
        </div>

        {/* <div className="navbar__bars">
          <i className="fas fa-bars"></i>
        </div> */}
        <div className="navbar__menu">
          <a href="" className="navbar__menu--links">
            Docs
          </a>
          <a href="/#">
            <img src={icon} />
          </a>

          <img src={imag} />
          <label>Kazeem</label>
          <img src={drop} />

          {/* <a href="" className="navbar__menu--links">
            Product
          </a>
          <a href="" className="navbar__menu--links">
            Services
          </a>
          <a href="" className="navbar__menu--links" id="button">
            Sign Up
          </a> */}
        </div>
      </nav>
    </div>
  );
}
