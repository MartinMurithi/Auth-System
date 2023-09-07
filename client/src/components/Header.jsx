import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="leftSide">
          <NavLink to={"/"} className="logo">
            MERN AUTH
          </NavLink>
        </div>
        <div className="rightSide">
          <NavLink to={"/signin"} className="signIn">
            {/* <FaArrowRightFromBracket /> */}
            <p>Sign In</p>
          </NavLink>
          <NavLink to={"/register"} className="register">
            {/* <FaRegistered /> */}
            <p>Register</p>
          </NavLink>
          <NavLink to={"/account"} className="account">
            {/* <FaRegistered /> */}
            <p>Account</p>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
