import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../asset/Group.svg";
import { ReactComponent as PabloSignIn } from "../../asset/pablo-sign-in 1.svg";

import "./Login.style.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(email, password);
    if (email && password) {
      navigate("/dashboard");
    }
    return;
  };
  return (
    <main className="login-container">
      <section className="img-section">
        <img src={Logo} alt="Logo" />
        <PabloSignIn className="illustration" />
      </section>
      <section className="login-section">
        <img src={Logo} alt="Logo" className="mobile-logo" />
        <section className="Login-info">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <form action="" className="form-container">
            <input
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
              }}
              name="email"
              type="email"
              placeholder="Email"
              className="input"
              value={email}
            />

            <div className="input-password">
              <input
                onChange={(e) => {
                  e.preventDefault();
                  setPassword(e.target.value);
                }}
                name="password"
                type="password"
                placeholder="Password"
                className="input"
                value={password}
              />
              <span className="cont">SHOW</span>
            </div>

            <p>FORGOT PASSWORD?</p>
            <input
              onClick={handleSubmit}
              type="submit"
              className="submit-input"
              value="LOG IN"
            />
          </form>
        </section>
      </section>
    </main>
  );
};

export default Login;
