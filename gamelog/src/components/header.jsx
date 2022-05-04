import React from "react";
import { Link } from "react-router-dom";
import "/Users/benjamin/Documents/GameLog/GameLog/gamelog/src/styles/navbar.scss";
import logo from "/Users/benjamin/Documents/GameLog/GameLog/gamelog/src/images/gamelog-icon.png";

const Header = () => {
  return (
    <div className="navigationbar">
      <div className="nav-logo">
        <li>
          <Link to="/">
            {" "}
            <img src={logo} alt="logo" />
          </Link>
        </li>
      </div>
      <div className="nav-menu">
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </div>
    </div>
  );
};
export default Header;
