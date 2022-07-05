import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./NavBar.scss";
import Logo from "../../asset/Group.svg";
import { ReactComponent as Icon } from "../../asset/np_notification_2425223_000000 1.svg";
import imag from "../../asset/image 4.svg";
import { ReactComponent as Drop } from "../../asset/np_dropdown.svg";
import { ReactComponent as Search } from "../../asset/Vector.svg";

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
        <img src={Logo} width="150px" className="navbar__logo" />
        <div className="search-container">
          <form className="form" onSubmit={onSubmit}>
            <input
              className="input"
              type="text"
              onChange={onChange}
              value={input}
              placeholder="search for anything"
            />
            <button type="submit" className="button"></button>
          </form>
        </div>

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
          <a href="" className="navbar__menu--link">
            Docs
          </a>
          <a href="/#">
            <Icon className="ref-icon" />
          </a>

          <img src={imag} alt="avatar" className="avatar-logo" />
          <p>Kazeem</p>
          <Drop className="drop" />
          {/* <img src={drop} /> */}

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
